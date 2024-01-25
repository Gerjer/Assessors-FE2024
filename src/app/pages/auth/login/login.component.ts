import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { catchError, firstValueFrom, throwError } from 'rxjs';
import { AuthService } from 'src/app/common/services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent implements OnInit {

  /**  */
  pwdVisible = false;

  /**  */
  isLoggingIn = false;

  isForgotPassword = false;

  isRegister = false;

  /**  */
  favicon = environment.fav_icon;

  /**  */
  rf!: FormGroup;

  constructor(form: FormBuilder, private router: Router,
    private auth: AuthService, private snackbar: MatSnackBar) {

    /**  */
    this.initForm(form);

  }

  ngOnInit(): void {
  }

  /**
   *
   * @param builder
   */
  initForm(builder: FormBuilder) {
    this.rf = builder.group({
      email: builder.control('', { nonNullable: true, validators: [Validators.required]}),
      password: builder.control('', { nonNullable: true, validators: [Validators.required]})
    })
  }

  /**
   *
   */
  async login() {

    if (this.isLoggingIn) return;
    this.isLoggingIn = true;
    const data = this.rf.getRawValue();

    try {

      const response: any = await firstValueFrom(this.auth.login(data));
      if (response && response.status === 200) {

        this.auth.api_url
        this.router.navigate(['/management']);

      }
      /**  */
      this.snackbar.open(response.response.message, 'Dismiss', { duration: 1000 })
    }
    catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.snackbar.open(err.error.message, 'Dismiss', { duration: 2000 });
      }
    } finally {
      this.isLoggingIn = false;
    }

  }

  /**
   *
   */
  register() {

    this.isRegister = true;

    setTimeout(() => {
      this.router.navigate(['/auth/register'])
    }, 300);

    this.isRegister = false;

  }

}
