import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const FarmerAdminGuard: CanActivateFn = async () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }

  const role = await auth.currentUserRole();

  if (role === 'admin' || role === 'farmer') {
    return true;
  }

  router.navigate(['/access-denied']);
  return false;
};
