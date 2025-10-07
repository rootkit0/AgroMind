import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroregenStatsComponent } from './agroregen-stats.component';

describe('AgroregenStatsComponent', () => {
  let component: AgroregenStatsComponent;
  let fixture: ComponentFixture<AgroregenStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgroregenStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgroregenStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
