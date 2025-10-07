import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrosenseDashboardComponent } from './agrosense-dashboard.component';

describe('AgrosenseDashboardComponent', () => {
  let component: AgrosenseDashboardComponent;
  let fixture: ComponentFixture<AgrosenseDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgrosenseDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrosenseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
