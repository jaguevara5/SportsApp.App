import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games-service/games.service';
import { GameDataService } from '../services/game-data/game-data.service';

@Component({
  selector: 'app-games-today',
  templateUrl: './games-today.component.html',
  styleUrls: ['./games-today.component.css']
})
export class GamesTodayComponent implements OnInit {

  private gamesList: any[];
  private gameData: any;

  constructor(
    private gamesService: GamesService,
    private gameDataService: GameDataService
  ) {}

  ngOnInit() {
    if (!this.gamesList) {
      this.getGamesToday();
    }
    // this.getGamesToday();
    this.gameDataService.currentGameData.subscribe(gameData => this.gameData = gameData);
    this.gameDataService.currentGamesList.subscribe(gamesList => this.gamesList = gamesList);
  }

  getGamesToday() {
    this.gamesService.getGamesAPI('today')
    .subscribe(
      data => this.gameDataService.updateGamesList(data),
      error => console.log('Server Error')
    );
  }

  getGamesYesterday() {
    this.gamesService.getGamesAPI('yesterday')
    .subscribe(
      data => this.gameDataService.updateGamesList(data),
      error => console.log('Server Error')
    );
  }

  getGamesTomorrow() {
    this.gamesService.getGamesAPI('tomorrow')
    .subscribe(
      data => this.gameDataService.updateGamesList(data),
      error => console.log('Server Error')
    );
  }

  showGameDetails(event) {
    const gameElementId: string = event.currentTarget.id;
    const idStringArray: string[] = gameElementId.split('-');
    const gameId = parseInt(idStringArray[1], 10);
    const gameData = this.gamesList.find((game) => {
      return game.gameID === gameId;
    });
    this.gameDataService.updateGameData(gameData);
  }
}
