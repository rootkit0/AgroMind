import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AuthService } from './services/auth.service';

import { User } from 'firebase/auth';
import { filter, take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  user: User | null = null;
  isLoggedIn = false;
  isAdmin = false;

  constructor(private authService: AuthService) { }

  async ngOnInit() {
    this.authService.currentUser$
      .pipe(filter(user => !!user), take(1))
      .subscribe(user => {
        if(user) {
          this.user = user;
          this.isLoggedIn = true;
          this.authService.getUserRole(user.uid).then(value => {
            if(value === "admin") {
              this.isAdmin = true;
            }
          });
        }
    });
  }

  logout() {
    this.authService.logout().then(() => {
      this.user = null;
      this.isLoggedIn = false;
      this.isAdmin = false;
    });
  }
}
