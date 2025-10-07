import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AgrosenseService } from '../../../services/agrosense.service';
import { Sensor } from '../../../models/sensor';

@Component({
  selector: 'app-agrosense-sensor-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './agrosense-sensor-detail.component.html',
  styleUrls: ['./agrosense-sensor-detail.component.css']
})
export class AgrosenseSensorDetailComponent implements OnInit {
  sensor?: Sensor;
  loading = true;

  constructor(private route: ActivatedRoute, private agrosenseService: AgrosenseService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.agrosenseService.getSensorById(id).subscribe(s => {
        this.sensor = s;
        this.loading = false;
      });
    }
  }
}
