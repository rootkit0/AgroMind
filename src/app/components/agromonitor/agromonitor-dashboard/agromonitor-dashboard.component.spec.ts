import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgromonitorDashboardComponent } from './agromonitor-dashboard.component';

describe('AgromonitorDashboardComponent', () => {
  let component: AgromonitorDashboardComponent;
  let fixture: ComponentFixture<AgromonitorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgromonitorDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgromonitorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
