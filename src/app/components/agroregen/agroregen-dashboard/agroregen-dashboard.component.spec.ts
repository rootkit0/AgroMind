import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroregenDashboardComponent } from './agroregen-dashboard.component';

describe('AgroregenDashboardComponent', () => {
  let component: AgroregenDashboardComponent;
  let fixture: ComponentFixture<AgroregenDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgroregenDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgroregenDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
