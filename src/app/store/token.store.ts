import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class TokenStoreService {
  private _AuthService = inject(AuthService);
  private router = inject(Router);
  private _tokenSource = new BehaviorSubject<{
    token: string;
    valid: boolean;
  } | null>(null);

  constructor() {
    this._AuthService.VerifyUserToken().subscribe({
      next: (res) => {
        this.setToken(localStorage.getItem('cc')!, res.valid);
      },
    });
  }

  getToken() {
    return this._tokenSource.getValue();
  }

  loginUser(data: { username: string; password: string }) {
    this._AuthService.Login(data).subscribe({
      next: (res) => {
        localStorage.setItem('cc', res.token);
        this.setToken(res.token, res.success);
        this.router.navigate([''])
      },
    });
  }

  setToken(token: string, valid: boolean) {
    const data = {
      token,
      valid,
    };
    this._tokenSource.next(data);
  }
}
