import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorCreateComponent } from './sensor-create.component';

describe('SensorCreateComponent', () => {
  let component: SensorCreateComponent;
  let fixture: ComponentFixture<SensorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
