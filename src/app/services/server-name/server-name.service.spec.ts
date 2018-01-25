import { TestBed, inject } from '@angular/core/testing';

import { ServerNameService } from './server-name.service';

describe('ServerNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerNameService]
    });
  });

  it('should be created', inject([ServerNameService], (service: ServerNameService) => {
    expect(service).toBeTruthy();
  }));
});
