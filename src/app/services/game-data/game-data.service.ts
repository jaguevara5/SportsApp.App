import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GameDataService {

  private gameDateIdSource = new BehaviorSubject<number>(1);

  currentgameDateId = this.gameDateIdSource.asObservable();

  constructor() { }

  updateGameDateId(gameDateId: number) {
    this.gameDateIdSource.next(gameDateId);
  }
}
