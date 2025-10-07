import { Component } from '@angular/core';


import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-verify-email',
    imports: [MatCardModule, MatListModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
    templateUrl: './verify-email.component.html',
    styleUrl: './verify-email.component.scss'
})
export class VerifyEmailComponent {
  userData: any;
  
  constructor(private authService: AuthService) { }
}
