import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IUserForm } from 'src/app/common/interfaces/home/general-settings/user-form/user-form.interface';
import { UserFormColumns } from 'src/app/common/table-columns/home/general-settings/user-form/user-form.column';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UserFormsComponent implements OnInit {

  title = 'Forms';

  tblColumns = UserFormColumns;
  tblColumnDef = UserFormColumns.map(c => c.columnDef);

  tblData!: MatTableDataSource<IUserForm>;
  tblRowSelect!: SelectionModel<IUserForm>;

  constructor() {

    this.tblData = new MatTableDataSource<IUserForm>();
    this.tblRowSelect = new SelectionModel<IUserForm>(false, <IUserForm[]>{});

  }

  ngOnInit(): void {
  }

}
