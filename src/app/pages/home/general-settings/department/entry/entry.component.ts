import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BehaviorSubject, Observable } from 'rxjs';
import { EntryComponent } from 'src/app/common/abstract/entry-component';
import { DepartmentApi } from 'src/app/common/services/department-api.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
  providers: [
    DepartmentApi,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard'
      }
    }
  ]
})
export class DepartmentEntryComponent extends EntryComponent implements OnInit {

  rf!: FormGroup;

  profile_exp = true;
  detail_exp = false;

  constructor(public dialogRef: MatDialogRef<DepartmentEntryComponent>,
    formbuilder: FormBuilder, private departmentApi: DepartmentApi) {

    super();
    this.initForm(formbuilder);

  }

  ngOnInit(): void {
  }

  initForm(builder: FormBuilder) {
    this.rf = builder.group({
      id: builder.control(0, { nonNullable: true }),
      sequence: builder.control(0, { nonNullable: true }),
      code: builder.control('', { nonNullable: true }),
      name: builder.control('', { nonNullable: true, validators: [Validators.required] }),
      description: builder.control('', { nonNullable: true })
    });
  }

  create() {



    this.entryAction = false;

  }

  update() {

  }

}
