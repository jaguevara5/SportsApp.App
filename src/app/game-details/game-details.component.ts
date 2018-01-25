import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games-service/games.service';
import { GameDataService } from '../services/game-data/game-data.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  private gameDataId: string;
  private gameDateId: number;
  gameData: any;

  constructor(
    private gamesService: GamesService,
    private gameDataService: GameDataService
  ) {
  }

  ngOnInit() {
    this.gameDataService.currentGameDataId.subscribe(gameDataId => this.gameDataId = gameDataId);
    this.gameDataService.currentgameDateId.subscribe(gameDateId => this.gameDateId = gameDateId);
    this.gameData = {
      homeTeam: '',
      awayTeam: '',
      gender: ''
    };
    this.getGameId();
    this.getGameData();
  }

  getGameId() {
    if (localStorage.getItem('gameId')) {
      this.gameDataService.updateGameDataId(localStorage.getItem('gameId'));
    }
  }

  getGameData() {
    this.gamesService.getGameByIdAPI(this.gameDataId)
    .subscribe(
      data => {
        this.gameData = data[0];
      },
      error => console.log('Server Error')
    );
  }

}
