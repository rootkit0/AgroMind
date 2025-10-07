import { TestBed } from '@angular/core/testing';

import { AgrosenseService } from './agrosense.service';

describe('AgrosenseService', () => {
  let service: AgrosenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgrosenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
