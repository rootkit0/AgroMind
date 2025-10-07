import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AgrosenseService } from '../../../services/agrosense.service';
import { SensorReading } from '../../../models/sensor-reading';

@Component({
  selector: 'app-agrosense-realtime',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './agrosense-realtime.component.html',
  styleUrls: ['./agrosense-realtime.component.css']
})
export class AgrosenseRealtimeComponent implements OnInit {
  readings: SensorReading[] = [];
  loading = true;

  constructor(private agrosenseService: AgrosenseService) {}

  ngOnInit() {
    this.agrosenseService.subscribeRealtime('sensor1').subscribe(r => {
      this.readings = r;
      this.loading = false;
    });
  }
}
