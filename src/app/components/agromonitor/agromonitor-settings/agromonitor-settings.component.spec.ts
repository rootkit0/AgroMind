import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgromonitorSettingsComponent } from './agromonitor-settings.component';

describe('AgromonitorSettingsComponent', () => {
  let component: AgromonitorSettingsComponent;
  let fixture: ComponentFixture<AgromonitorSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgromonitorSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgromonitorSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
