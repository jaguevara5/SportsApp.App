import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../services/game-data/game-data.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  private gameData: any;
  private gameDateId: number;

  constructor(
    private gameDataService: GameDataService
  ) { }

  ngOnInit() {
    this.gameDataService.currentGameData.subscribe(gameData => this.gameData = gameData);
    this.gameDataService.currentgameDateId.subscribe(gameDateId => this.gameDateId = gameDateId);
  }

}
