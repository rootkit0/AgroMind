import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgromonitorAnalysisReportComponent } from './agromonitor-analysis-report.component';

describe('AgromonitorAnalysisReportComponent', () => {
  let component: AgromonitorAnalysisReportComponent;
  let fixture: ComponentFixture<AgromonitorAnalysisReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgromonitorAnalysisReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgromonitorAnalysisReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
