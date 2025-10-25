import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-access-denied',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './access-denied.component.html',
  styleUrl: './access-denied.component.css'
})
export class AccessDeniedComponent {
  query = '';

  constructor(private router: Router) {}

  goHome() {
    this.router.navigateByUrl('/');
  }

  search() {
    const q = (this.query || '').trim();
    if (!q) return;
    this.router.navigate(['/buscar'], { queryParams: { q } });
  }

  report() {
    const body = encodeURIComponent(
      `Hola AgroMind, he encontrado un enlace roto:\n\nURL: ${location.href}\nNavegador: ${navigator.userAgent}\n\nGracias!`
    );
    location.href = `mailto:hola@agromind.es?subject=Enlace roto 404&body=${body}`;
  }
}
