import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IEmployee } from 'src/app/common/interfaces';
import { EmployeeColumns } from 'src/app/common/table-columns';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  tblColumns = EmployeeColumns;
  tblColumnDef = EmployeeColumns.map(c => c.columnDef);

  tblData!: MatTableDataSource<IEmployee>;
  tblRowSelect!: SelectionModel<IEmployee>;

  constructor() {

    this.tblData = new MatTableDataSource<IEmployee>();
    this.tblRowSelect = new SelectionModel<IEmployee>(false, <IEmployee[]>{});

  }

  ngOnInit(): void {
  }

}
