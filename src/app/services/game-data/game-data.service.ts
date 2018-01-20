import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GameDataService {

  private gamesDataListSource = new BehaviorSubject<any[]>([]);
  private gameDataIdSource = new BehaviorSubject<string>('-1');
  private gameDateIdSource = new BehaviorSubject<number>(1);

  currentGameDataId = this.gameDataIdSource.asObservable();
  currentGamesList = this.gamesDataListSource.asObservable();
  currentgameDateId = this.gameDateIdSource.asObservable();

  constructor() { }

  updateGameDataId(gameId: string) {
    this.gameDataIdSource.next(gameId);
  }

  updateGamesList(gamesList: any[]) {
    this.gamesDataListSource.next(gamesList);
  }

  updateGameDateId(gameDateId: number) {
    this.gameDateIdSource.next(gameDateId);
  }
}
