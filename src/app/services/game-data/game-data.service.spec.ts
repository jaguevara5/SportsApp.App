import { TestBed, inject } from '@angular/core/testing';

import { GameDataService } from './game-data.service';

describe('GetGameDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameDataService]
    });
  });

  it('should be created', inject([GameDataService], (service: GameDataService) => {
    expect(service).toBeTruthy();
  }));
});
