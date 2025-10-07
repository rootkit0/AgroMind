import { TestBed } from '@angular/core/testing';

import { AgromonitorService } from './agromonitor.service';

describe('AgromonitorService', () => {
  let service: AgromonitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgromonitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
