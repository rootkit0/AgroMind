import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-forgot-password',
    imports: [MatCardModule, MatListModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
    templateUrl: './forgot-password.component.html',
    styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  userData: any;

  constructor(public authService: AuthService) { }

  resetPassword() {
    this.authService.resetPassword(this.userData.email);
  }
}
