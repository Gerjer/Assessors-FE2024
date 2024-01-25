import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  /**
   *
   */
  favicon = environment.fav_icon;

  /**
   *
   */
  rf!: FormGroup;

  /**
   *
   * @param form
   */
  constructor(form: FormBuilder, private router: Router) {

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
      firstname: builder.control('', { nonNullable: true, validators: [Validators.required]}),
      lastname: builder.control('', { nonNullable: true, validators: [Validators.required]}),
      gender: builder.control('', { nonNullable: true, validators: [Validators.required]}),
      email: builder.control('', { nonNullable: true, validators: [Validators.required]}),
      password: builder.control('', { nonNullable: true, validators: [Validators.required]}),
      confirm_password: builder.control('', { nonNullable: true, validators: [Validators.required]})
    })
  }

  /**
   *
   * @returns
   */
  register() {

    /**  */
    if (this.rf.invalid) {
      this.rf.markAllAsTouched();
      return;
    }

  }

  login() {

    setTimeout(() => {
      this.router.navigate(['/auth/login'])
    }, 200);
  }
}
