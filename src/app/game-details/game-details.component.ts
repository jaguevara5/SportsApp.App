import { Component, OnInit } from '@angular/core';
import { GameIdService } from '../services/game-id/game-id.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  private gameId: any;

  constructor(
    private gameIdData: GameIdService
  ) { }

  ngOnInit() {
    this.gameIdData.currentGameId.subscribe(gameId => this.gameId = gameId);
  }

}
