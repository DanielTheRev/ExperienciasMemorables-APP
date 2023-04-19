import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const RedirectToLogin: CanActivateFn = (route, state) => {
  console.log({ route, state });
  const _Router = inject(Router);
  const token = localStorage.getItem('cc');
  if (token) {
    return true;
  }

  return _Router.navigate(['login']);
};
