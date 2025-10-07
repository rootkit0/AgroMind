import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AgroregenService } from '../../../services/agroregen.service';

@Component({
  selector: 'app-agroregen-stats',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './agroregen-stats.component.html',
  styleUrls: ['./agroregen-stats.component.css']
})
export class AgroregenStatsComponent implements OnInit {
  stats = { totalChats: 0, totalMessages: 0, avgResponse: 0 };

  constructor(private agroregenService: AgroregenService) {}

  ngOnInit() {
    this.stats = { totalChats: 12, totalMessages: 230, avgResponse: 1.2 };
  }
}
