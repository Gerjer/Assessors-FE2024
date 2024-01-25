import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { EntryComponent } from 'src/app/common/abstract/entry-component';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'standard' }
    }
  ]
})
export class UserEntryComponent extends EntryComponent implements OnInit {

  rf!: FormGroup;


  constructor(formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<UserEntryComponent>) {
    super();

    this.initForm(formBuilder);

  }

  ngOnInit(): void {
  }


  initForm(builder: FormBuilder) {
    this.rf = builder.group({
      id: builder.control(0, { nonNullable: true }),
      sequence: builder.control(0, { nonNullable: true }),
      code: builder.control('', { nonNullable: true }),
      email: builder.control('', { nonNullable: true, validators: [Validators.required] }),
      password: builder.control('', { nonNullable: true, validators: [Validators.required] }),
      confirm_password: builder.control('', { nonNullable: true }),
      employee: builder.control('', { nonNullable: true }),
      first_name: builder.control('', { nonNullable: true }),
      last_name: builder.control('', { nonNullable: true }),
      gender: builder.control('', { nonNullable: true })
    })
  }

}
