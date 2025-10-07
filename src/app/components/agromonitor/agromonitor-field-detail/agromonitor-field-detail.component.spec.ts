import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgromonitorFieldDetailComponent } from './agromonitor-field-detail.component';

describe('AgromonitorFieldDetailComponent', () => {
  let component: AgromonitorFieldDetailComponent;
  let fixture: ComponentFixture<AgromonitorFieldDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgromonitorFieldDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgromonitorFieldDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
