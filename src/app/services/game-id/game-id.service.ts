import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GameIdService {

  private gameIdSource = new BehaviorSubject<number>(0);
  currentGameId = this.gameIdSource.asObservable();
  constructor() { }

  updateGameId(gameId: number) {
    this.gameIdSource.next(gameId);
  }
}
