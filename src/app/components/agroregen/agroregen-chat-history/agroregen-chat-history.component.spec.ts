import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroregenChatHistoryComponent } from './agroregen-chat-history.component';

describe('AgroregenChatHistoryComponent', () => {
  let component: AgroregenChatHistoryComponent;
  let fixture: ComponentFixture<AgroregenChatHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgroregenChatHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgroregenChatHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
