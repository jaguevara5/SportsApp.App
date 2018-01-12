import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games-service/games.service';
import { GameIdService } from '../services/game-id/game-id.service';

@Component({
  selector: 'app-games-today',
  templateUrl: './games-today.component.html',
  styleUrls: ['./games-today.component.css']
})
export class GamesTodayComponent implements OnInit {

  private gamesToday: string[];
  private gameId: number;

  constructor(
    private gamesService: GamesService,
    private gameIdData: GameIdService
  ) {}

  ngOnInit() {
    this.getGamesToday();
    this.gameIdData.currentGameId.subscribe(gameId => this.gameId = gameId);
  }

  getGamesToday() {
    this.gamesService.getGamesAPI('today')
    .subscribe(
      data => {
        this.gamesToday  = data;
      },
      error => console.log('Server Error')
    );
  }

  getGamesYesterday() {
    this.gamesService.getGamesAPI('yesterday')
    .subscribe(
      data => this.gamesToday  = data,
      error => console.log('Server Error')
    );
  }

  getGamesTomorrow() {
    this.gamesService.getGamesAPI('tomorrow')
    .subscribe(
      data => {
        this.gamesToday  = data;
        console.log(this.gamesToday);
      },
      error => console.log('Server Error')
    );
  }

  showGameDetails(event) {
    const gameElementId: string = event.currentTarget.id;
    const idStringArray: string[] = gameElementId.split('-');
    this.gameIdData.updateGameId(parseInt(idStringArray[1], 10));
  }
}
