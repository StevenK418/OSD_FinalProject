import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatWindowComponent } from './chat-window.component';
import { ChatServiceService } from '../services/chat-service.service';
import { of } from 'rxjs';

describe('ChatWindowComponent', () => {
  let component: ChatWindowComponent;
  let fixture: ComponentFixture<ChatWindowComponent>;
  let chatService: ChatServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatWindowComponent ],
      providers: [ ChatServiceService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatWindowComponent);
    component = fixture.componentInstance;
    chatService = TestBed.inject(ChatServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle chat window', () => {
    expect(component.isChatVisible).toBeFalse();
    component.toggleChatWindow();
    expect(component.isChatVisible).toBeTrue();
    component.toggleChatWindow();
    expect(component.isChatVisible).toBeFalse();
  });
});