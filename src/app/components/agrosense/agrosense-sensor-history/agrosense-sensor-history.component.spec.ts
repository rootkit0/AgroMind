import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrosenseSensorHistoryComponent } from './agrosense-sensor-history.component';

describe('AgrosenseSensorHistoryComponent', () => {
  let component: AgrosenseSensorHistoryComponent;
  let fixture: ComponentFixture<AgrosenseSensorHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgrosenseSensorHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrosenseSensorHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
