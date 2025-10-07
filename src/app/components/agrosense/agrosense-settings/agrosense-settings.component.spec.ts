import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrosenseSettingsComponent } from './agrosense-settings.component';

describe('AgrosenseSettingsComponent', () => {
  let component: AgrosenseSettingsComponent;
  let fixture: ComponentFixture<AgrosenseSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgrosenseSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrosenseSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
