import { TestBed } from '@angular/core/testing';

import { AgroregenService } from './agroregen.service';

describe('AgroregenService', () => {
  let service: AgroregenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgroregenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
