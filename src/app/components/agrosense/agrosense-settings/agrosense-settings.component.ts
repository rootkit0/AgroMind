import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-agrosense-settings',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './agrosense-settings.component.html',
  styleUrls: ['./agrosense-settings.component.css']
})
export class AgrosenseSettingsComponent implements OnInit {
  settingsForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.settingsForm = this.fb.group({
      refreshInterval: [60],
      unitSystem: ['metric']
    });
  }

  save() {
    console.log('Configuración guardada:', this.settingsForm.value);
  }
}
