import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroregenSettingsComponent } from './agroregen-settings.component';

describe('AgroregenSettingsComponent', () => {
  let component: AgroregenSettingsComponent;
  let fixture: ComponentFixture<AgroregenSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgroregenSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgroregenSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
