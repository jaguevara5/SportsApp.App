import { TestBed, inject } from '@angular/core/testing';

import { LeaguesServiceService } from './leagues-service.service';

describe('LeaguesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaguesServiceService]
    });
  });

  it('should be created', inject([LeaguesServiceService], (service: LeaguesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
