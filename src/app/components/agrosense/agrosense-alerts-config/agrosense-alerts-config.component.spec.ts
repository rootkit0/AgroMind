import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrosenseAlertsConfigComponent } from './agrosense-alerts-config.component';

describe('AgrosenseAlertsConfigComponent', () => {
  let component: AgrosenseAlertsConfigComponent;
  let fixture: ComponentFixture<AgrosenseAlertsConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgrosenseAlertsConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrosenseAlertsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
