import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components//signup/signup.component';
import { VerifyEmailComponent } from './components//verify-email/verify-email.component';
import { ForgotPasswordComponent } from './components//forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'forgot-password', component: ForgotPasswordComponent},
    { path: 'verify-email', component: VerifyEmailComponent},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: '', component: HomeComponent},
    { path: '**', component: HomeComponent }
];
