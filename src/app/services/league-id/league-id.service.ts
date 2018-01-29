import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LeagueIdService {

  private lueagueIdSource = new BehaviorSubject<string>('-1');

  currentLeagueId = this.lueagueIdSource.asObservable();

  constructor() { }

  updateLeagueId(leagueId: string) {
    this.lueagueIdSource.next(leagueId);
  }
}
