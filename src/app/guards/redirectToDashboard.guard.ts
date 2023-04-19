import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const RedirectToDashboard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('cc');
  const RouterService = inject(Router);
  if (token) {
    return RouterService.navigate(['']);
  }
  return true;
};
