import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroregenChatSessionComponent } from './agroregen-chat-session.component';

describe('AgroregenChatSessionComponent', () => {
  let component: AgroregenChatSessionComponent;
  let fixture: ComponentFixture<AgroregenChatSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgroregenChatSessionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgroregenChatSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
