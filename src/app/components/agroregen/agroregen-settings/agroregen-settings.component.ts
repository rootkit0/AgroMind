import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AgroregenService } from '../../../services/agroregen.service';

@Component({
  selector: 'app-agroregen-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './agroregen-settings.component.html',
  styleUrls: ['./agroregen-settings.component.css']
})
export class AgroregenSettingsComponent implements OnInit {
  configForm!: FormGroup;

  constructor(private fb: FormBuilder, private agroregenService: AgroregenService) {}

  ngOnInit() {
    this.configForm = this.fb.group({
      modelName: ['llama3'],
      temperature: [0.7],
      top_p: [0.9],
      maxTokens: [512]
    });
  }

  save() {
    console.log('Configuración guardada:', this.configForm.value);
    this.agroregenService.saveModelConfig(this.configForm.value);
  }
}
