import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { TokenStoreService } from '../store/token.store';

export const RedirectUser: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('cc');
  const _Router = inject(Router);
  const TokenStore = inject(TokenStoreService);

  if (!token) {
    if (state.url !== '/login') {
      _Router.navigate(['login'])
    };
    return true;
  }
  const tokenState = TokenStore.getToken();

  if (!tokenState) return state.url !== '/login' ? true : false;

  if (tokenState.valid) return state.url === '/login' ? false : true;
  return state.url === '/login' ? true : false;
};
