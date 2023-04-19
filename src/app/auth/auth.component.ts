import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TokenStoreService } from '../store/token.store';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  private formBuilder = inject(FormBuilder);
  private TokenStore = inject(TokenStoreService);
  loginStatus = true;
  hasError = false;
  form: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  handleSubmit() {
    if (this.form.invalid) {
      this.hasError = false;
      return;
    }

    this.TokenStore.loginUser(this.form.value);

    // this.AuthService.Login(this.form.value).subscribe({
    //   next: (res) => {
    //     if (!res) {
    //       this.loginStatus = false;
    //     }
    //   },
    //   error: err => {
    //     this.hasError = true;
    //   }
    // });
  }
}
