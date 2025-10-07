import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AgromonitorService } from '../../../services/agromonitor.service';
import { Field } from '../../../models/field';

@Component({
  selector: 'app-agromonitor-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatProgressBarModule],
  templateUrl: './agromonitor-dashboard.component.html',
  styleUrls: ['./agromonitor-dashboard.component.css']
})
export class AgromonitorDashboardComponent implements OnInit {
  fields: Field[] = [];
  loading = true;

  constructor(private agromonitorService: AgromonitorService) {}

  ngOnInit() {
    this.agromonitorService.getUserFields().subscribe(fields => {
      this.fields = fields;
      this.loading = false;
    });
  }
}
