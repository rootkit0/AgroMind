import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AgroregenService } from '../../../services/agroregen.service';
import { ChatSession } from '../../../models/chat-session';

@Component({
  selector: 'app-agroregen-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './agroregen-dashboard.component.html',
  styleUrls: ['./agroregen-dashboard.component.css']
})
export class AgroregenDashboardComponent implements OnInit {
  sessions: ChatSession[] = [];

  constructor(private agroregenService: AgroregenService) {}

  ngOnInit() {
    this.agroregenService.getUserChatHistory('currentUserId').subscribe(c => (this.sessions = c));
  }
}
