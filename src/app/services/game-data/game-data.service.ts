import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GameDataService {

  private gameDataSource = new BehaviorSubject<any>({});
  private gamesDataListSource = new BehaviorSubject<any[]>([]);

  currentGameData = this.gameDataSource.asObservable();
  currentGamesList = this.gamesDataListSource.asObservable();

  constructor() { }

  updateGameData(gameData: any) {
    this.gameDataSource.next(gameData);
  }

  updateGamesList(gamesList: any[]) {
    this.gamesDataListSource.next(gamesList);
  }
}
