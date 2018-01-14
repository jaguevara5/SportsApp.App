import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games-service/games.service';
import { GameDataService } from '../services/game-data/game-data.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  private gamesList: any[];
  private gameData: any;
  private gameDateId: number;

  constructor(
    private gamesService: GamesService,
    private gameDataService: GameDataService
  ) {}

  ngOnInit() {

    this.gameDataService.currentGameData.subscribe(gameData => this.gameData = gameData);
    this.gameDataService.currentGamesList.subscribe(gamesList => this.gamesList = gamesList);
    this.gameDataService.currentgameDateId.subscribe(gameDateId => this.gameDateId = gameDateId);

    if (this.gameDateId === 1) {
      this.getGamesToday();
    } else if (this.gameDateId === 0) {
      this.getGamesYesterday();
    } else if (this.gameDateId === 2) {
      this.getGamesTomorrow();
    }
  }

  getGamesToday() {
    this.gameDateId = 1;
    this.gamesService.getGamesAPI('today')
    .subscribe(
      data => this.gameDataService.updateGamesList(data),
      error => console.log('Server Error')
    );
  }

  getGamesYesterday() {
    this.gameDateId = 0;
    this.gamesService.getGamesAPI('yesterday')
    .subscribe(
      data => this.gameDataService.updateGamesList(data),
      error => console.log('Server Error')
    );
  }

  getGamesTomorrow() {
    this.gameDateId = 2;
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

  getYesterdayTabColor() {
    let color: string;
    color = 'light-orange';

    if (this.gameDateId === 0) {
      color = 'dark-orange';
    }
    return color;
  }

  getTadayTabColor() {
    let color: string;
    color = 'light-orange';

    if (this.gameDateId === 1) {
      color = 'dark-orange';
    }
    return color;
  }

  getTomorrowTabColor() {
    let color: string;
    color = 'light-orange';

    if (this.gameDateId === 2) {
      color = 'dark-orange';
    }
    return color;
  }
}
