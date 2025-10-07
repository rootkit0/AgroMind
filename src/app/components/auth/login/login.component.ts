import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AuthService } from '../../../services/auth.service';
import { filter, take } from 'rxjs';

@Component({
    selector: 'app-login',
    imports: [FormsModule, RouterLink, RouterLinkActive, MatCardModule, MatListModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  hide = true;
  username: string = "";
  password: string = "";

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

  login() {
    this.authService.login(this.username, this.password);
  }
}
