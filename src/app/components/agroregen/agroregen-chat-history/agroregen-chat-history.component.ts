import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AgroregenService } from '../../../services/agroregen.service';
import { ChatSession } from '../../../models/chat-session';

@Component({
  selector: 'app-agroregen-chat-history',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './agroregen-chat-history.component.html',
  styleUrls: ['./agroregen-chat-history.component.css']
})
export class AgroregenChatHistoryComponent implements OnInit {
  sessions: ChatSession[] = [];

  constructor(private agroregenService: AgroregenService, private router: Router) {}

  ngOnInit() {
    this.agroregenService.getUserChatHistory('currentUserId').subscribe(c => (this.sessions = c));
  }

  openChat(id: string) {
    this.router.navigate(['/agroregen/chat', id]);
  }
}
