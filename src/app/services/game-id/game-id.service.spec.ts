import { TestBed, inject } from '@angular/core/testing';

import { GameIdService } from './get-game-id.service';

describe('GetGameIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameIdService]
    });
  });

  it('should be created', inject([GameIdService], (service: GameIdService) => {
    expect(service).toBeTruthy();
  }));
});
