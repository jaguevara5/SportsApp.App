import { TestBed, inject } from '@angular/core/testing';

import { LeagueIdService } from './league-id.service';

describe('LeagueIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeagueIdService]
    });
  });

  it('should be created', inject([LeagueIdService], (service: LeagueIdService) => {
    expect(service).toBeTruthy();
  }));
});
