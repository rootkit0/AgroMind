import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrosenseRealtimeComponent } from './agrosense-realtime.component';

describe('AgrosenseRealtimeComponent', () => {
  let component: AgrosenseRealtimeComponent;
  let fixture: ComponentFixture<AgrosenseRealtimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgrosenseRealtimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrosenseRealtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
