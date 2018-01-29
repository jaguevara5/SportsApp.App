import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { GamesService } from '../services/games-service/games.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit, OnDestroy {

  private gameId: number;
  private sub: any;
  gameData: any;

  constructor(
    private gamesService: GamesService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe((params: Params) => {
      this.gameId = +params['id'];
    });

    this.gameData = {
      homeTeam: '',
      awayTeam: '',
      gender: ''
    };
    this.getGameData();
  }

  getGameData() {
    this.gamesService.getGameByIdAPI(this.gameId.toString())
    .subscribe(
      data => {
        this.gameData = data[0];
      },
      error => console.log('Server Error')
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
