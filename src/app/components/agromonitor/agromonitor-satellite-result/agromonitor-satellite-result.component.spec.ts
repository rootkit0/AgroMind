import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgromonitorSatelliteResultComponent } from './agromonitor-satellite-result.component';

describe('AgromonitorSatelliteResultComponent', () => {
  let component: AgromonitorSatelliteResultComponent;
  let fixture: ComponentFixture<AgromonitorSatelliteResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgromonitorSatelliteResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgromonitorSatelliteResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
