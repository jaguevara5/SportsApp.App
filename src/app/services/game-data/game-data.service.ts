import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GameDataService {

  private gameDataSource = new BehaviorSubject<any>({});
  private gamesDataListSource = new BehaviorSubject<any[]>([]);
  private gameDateIdSource = new BehaviorSubject<number>(1);

  currentGameData = this.gameDataSource.asObservable();
  currentGamesList = this.gamesDataListSource.asObservable();
  currentgameDateId = this.gameDateIdSource.asObservable();

  constructor() { }

  updateGameData(gameData: any) {
    this.gameDataSource.next(gameData);
  }

  updateGamesList(gamesList: any[]) {
    this.gamesDataListSource.next(gamesList);
  }

  updateGameDateId(gameDateId: number) {
    this.gameDateIdSource.next(gameDateId);
  }
}
