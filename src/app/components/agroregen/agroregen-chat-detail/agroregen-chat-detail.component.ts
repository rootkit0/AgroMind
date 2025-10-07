import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { AgroregenService } from '../../../services/agroregen.service';
import { ChatSession } from '../../../models/chat-session';

@Component({
  selector: 'app-agroregen-chat-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './agroregen-chat-detail.component.html',
  styleUrls: ['./agroregen-chat-detail.component.css']
})
export class AgroregenChatDetailComponent implements OnInit {
  chat?: ChatSession;

  constructor(private route: ActivatedRoute, private agroregenService: AgroregenService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.agroregenService.getChatById('currentUserId', id).subscribe(c => (this.chat = c));
    }
  }
}
