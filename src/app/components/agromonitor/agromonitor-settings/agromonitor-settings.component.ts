import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-agromonitor-settings',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonModule
  ],
  templateUrl: './agromonitor-settings.component.html',
  styleUrls: ['./agromonitor-settings.component.css']
})
export class AgromonitorSettingsComponent implements OnInit {
  settingsForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.settingsForm = this.fb.group({
      satelliteProvider: ['Sentinel-2'],
      ndviThreshold: [0.4],
      autoNotify: [true]
    });
  }

  save() {
    console.log('Configuración guardada:', this.settingsForm.value);
  }
}
