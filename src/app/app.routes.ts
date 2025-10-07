import { Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { FarmerGuard } from './guards/farmer.guard';
import { FarmerAdminGuard } from './guards/farmeradmin.guard';

// === AUTH ===
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';

// === AGROMONITOR ===
import { AgromonitorDashboardComponent } from './components/agromonitor/agromonitor-dashboard/agromonitor-dashboard.component';
import { AgromonitorFieldDetailComponent } from './components/agromonitor/agromonitor-field-detail/agromonitor-field-detail.component';
import { AgromonitorSatelliteResultComponent } from './components/agromonitor/agromonitor-satellite-result/agromonitor-satellite-result.component';
import { AgromonitorAnalysisReportComponent } from './components/agromonitor/agromonitor-analysis-report/agromonitor-analysis-report.component';
import { AgromonitorSettingsComponent } from './components/agromonitor/agromonitor-settings/agromonitor-settings.component';

// === AGROSENSE ===
import { AgrosenseDashboardComponent } from './components/agrosense/agrosense-dashboard/agrosense-dashboard.component';
import { AgrosenseRealtimeComponent } from './components/agrosense/agrosense-realtime/agrosense-realtime.component';
import { AgrosenseSensorDetailComponent } from './components/agrosense/agrosense-sensor-detail/agrosense-sensor-detail.component';
import { AgrosenseSensorHistoryComponent } from './components/agrosense/agrosense-sensor-history/agrosense-sensor-history.component';
import { AgrosenseAlertsConfigComponent } from './components/agrosense/agrosense-alerts-config/agrosense-alerts-config.component';
import { AgrosenseSettingsComponent } from './components/agrosense/agrosense-settings/agrosense-settings.component';

// === AGROREGEN ===
import { AgroregenDashboardComponent } from './components/agroregen/agroregen-dashboard/agroregen-dashboard.component';
import { AgroregenChatSessionComponent } from './components/agroregen/agroregen-chat-session/agroregen-chat-session.component';
import { AgroregenChatHistoryComponent } from './components/agroregen/agroregen-chat-history/agroregen-chat-history.component';
import { AgroregenChatDetailComponent } from './components/agroregen/agroregen-chat-detail/agroregen-chat-detail.component';
import { AgroregenSettingsComponent } from './components/agroregen/agroregen-settings/agroregen-settings.component';
import { AgroregenStatsComponent } from './components/agroregen/agroregen-stats/agroregen-stats.component';

// === GENERAL ===
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';

export const routes: Routes = [
  // === AUTH ===
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

  // === DASHBOARD GENERAL ===
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

  // === AGROMONITOR ===
  {
    path: 'agromonitor',
    canActivate: [FarmerGuard, AdminGuard],
    children: [
      { path: '', component: AgromonitorDashboardComponent },
      { path: 'field/:id', component: AgromonitorFieldDetailComponent },
      { path: 'satellite/:id', component: AgromonitorSatelliteResultComponent },
      { path: 'report/:id', component: AgromonitorAnalysisReportComponent },
      { path: 'settings', component: AgromonitorSettingsComponent, canActivate: [AdminGuard] },
    ],
  },

  // === AGROSENSE ===
  {
    path: 'agrosense',
    canActivate: [FarmerGuard, AdminGuard],
    children: [
      { path: '', component: AgrosenseDashboardComponent },
      { path: 'realtime', component: AgrosenseRealtimeComponent },
      { path: 'sensor/:id', component: AgrosenseSensorDetailComponent },
      { path: 'sensor/:id/history', component: AgrosenseSensorHistoryComponent },
      { path: 'alerts', component: AgrosenseAlertsConfigComponent },
      { path: 'settings', component: AgrosenseSettingsComponent, canActivate: [AdminGuard] },
    ],
  },

  // === AGROREGEN ===
  {
    path: 'agroregen',
    canActivate: [FarmerGuard, AdminGuard],
    children: [
      { path: '', component: AgroregenDashboardComponent },
      { path: 'chat', component: AgroregenChatSessionComponent },
      { path: 'chat/:id', component: AgroregenChatSessionComponent },
      { path: 'history', component: AgroregenChatHistoryComponent },
      { path: 'detail/:id', component: AgroregenChatDetailComponent },
      { path: 'settings', component: AgroregenSettingsComponent, canActivate: [AdminGuard] },
      { path: 'stats', component: AgroregenStatsComponent, canActivate: [AdminGuard] },
    ],
  },

  // === GENERAL ===
  { path: 'access-denied', component: AccessDeniedComponent },

  // === 404 ===
  { path: '**', redirectTo: '' },
];
