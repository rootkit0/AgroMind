import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AgrosenseService } from '../../../services/agrosense.service';
import { Sensor } from '../../../models/sensor';

@Component({
  selector: 'app-agrosense-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './agrosense-dashboard.component.html',
  styleUrls: ['./agrosense-dashboard.component.css']
})
export class AgrosenseDashboardComponent implements OnInit {
  sensors: Sensor[] = [];
  loading = true;

  constructor(private agrosenseService: AgrosenseService) {}

  ngOnInit() {
    this.agrosenseService.getUserSensors().subscribe(s => {
      this.sensors = s;
      this.loading = false;
    });
  }
}
