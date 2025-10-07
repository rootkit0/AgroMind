import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrosenseSensorDetailComponent } from './agrosense-sensor-detail.component';

describe('AgrosenseSensorDetailComponent', () => {
  let component: AgrosenseSensorDetailComponent;
  let fixture: ComponentFixture<AgrosenseSensorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgrosenseSensorDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrosenseSensorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
