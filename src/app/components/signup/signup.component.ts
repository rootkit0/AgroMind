import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, take } from 'rxjs';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-signup',
    imports: [FormsModule, MatCardModule, MatListModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  hide: boolean = true;
  username: string = "";
  password: string = "";
  repeatPassword: string = "";
  companyId: string = "";
  storeId: string = "";

  constructor(private authService: AuthService, private router: Router) { }

  async ngOnInit() {
      this.authService.currentUser$
        .pipe(filter(user => !!user), take(1))
        .subscribe(user => {
          if(user) {
            this.router.navigateByUrl('/dashboard');
          }
      });
    }

  signup() {
    this.authService.signup(this.username, this.password, "user");
  }
}
