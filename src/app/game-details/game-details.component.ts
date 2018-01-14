import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../services/game-data/game-data.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  private gameData: any;

  constructor(
    private gameIdData: GameDataService
  ) { }

  ngOnInit() {
    this.gameIdData.currentGameData.subscribe(gameData => this.gameData = gameData);
  }

}
