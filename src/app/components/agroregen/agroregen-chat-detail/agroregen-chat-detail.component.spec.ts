import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroregenChatDetailComponent } from './agroregen-chat-detail.component';

describe('AgroregenChatDetailComponent', () => {
  let component: AgroregenChatDetailComponent;
  let fixture: ComponentFixture<AgroregenChatDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgroregenChatDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgroregenChatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
