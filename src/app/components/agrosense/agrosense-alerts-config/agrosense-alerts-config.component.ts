import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { AgrosenseService } from '../../../services/agrosense.service';

@Component({
  selector: 'app-agrosense-alerts-config',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule
  ],
  templateUrl: './agrosense-alerts-config.component.html',
  styleUrls: ['./agrosense-alerts-config.component.css']
})
export class AgrosenseAlertsConfigComponent implements OnInit {
  alertForm!: FormGroup;

  constructor(private fb: FormBuilder, private agrosenseService: AgrosenseService) {}

  ngOnInit() {
    this.alertForm = this.fb.group({
      parameter: ['temperature'],
      threshold: [30],
      notifyEmail: [true],
      notifySMS: [false]
    });
  }

  saveAlert() {
    console.log('Alerta configurada:', this.alertForm.value);
    this.agrosenseService.saveAlertConfig(this.alertForm.value);
  }
}
