import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AgrosenseService } from '../../../services/agrosense.service';
import { SensorReading } from '../../../models/sensor-reading';

@Component({
  selector: 'app-agrosense-sensor-history',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './agrosense-sensor-history.component.html',
  styleUrls: ['./agrosense-sensor-history.component.css']
})
export class AgrosenseSensorHistoryComponent implements OnInit {
  history: SensorReading[] = [];
  loading = true;

  constructor(private route: ActivatedRoute, private agrosenseService: AgrosenseService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.agrosenseService.getSensorHistory(id, 7).subscribe(h => {
        this.history = h;
        this.loading = false;
      });
    }
  }
}
