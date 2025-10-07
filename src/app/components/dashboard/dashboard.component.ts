import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';


import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-dashboard',
    imports: [MatCardModule],
    providers: [provideNativeDateAdapter()],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  username!: string;

  async ngOnInit() {

  }
}

