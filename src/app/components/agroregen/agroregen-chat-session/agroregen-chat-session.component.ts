import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AgroregenService } from '../../../services/agroregen.service';
import { ChatMessage } from '../../../models/chat-message';

@Component({
  selector: 'app-agroregen-chat-session',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './agroregen-chat-session.component.html',
  styleUrls: ['./agroregen-chat-session.component.css']
})
export class AgroregenChatSessionComponent {
  messages: ChatMessage[] = [];
  userInput = '';
  loading = false;

  constructor(private agroregenService: AgroregenService) {}

  sendMessage() {
    if (!this.userInput.trim()) return;

    this.messages.push({ role: 'user', content: this.userInput });
    const history = [...this.messages];
    this.userInput = '';
    this.loading = true;

    this.agroregenService.sendChat(history).subscribe({
      next: (res: any) => {
        const reply = res.message?.content || '(sin respuesta)';
        this.messages.push({ role: 'assistant', content: reply });
      },
      complete: () => (this.loading = false),
      error: () => (this.loading = false)
    });
  }
}
