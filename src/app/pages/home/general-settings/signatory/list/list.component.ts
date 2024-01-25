import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ISignatory } from 'src/app/common/interfaces';
import { SignatoryColumns } from 'src/app/common/table-columns/home/general-settings/signatory/signatory.column';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class SignatoriesComponent implements OnInit {

  tblColumns = SignatoryColumns;
  tblColumnDef = SignatoryColumns.map(c => c.columnDef);

  tblData!: MatTableDataSource<ISignatory>;
  tblRowSelect!: SelectionModel<ISignatory>;

  constructor() {

    this.tblData = new MatTableDataSource<ISignatory>();
    this.tblRowSelect = new SelectionModel<ISignatory>(false, <ISignatory[]>{});

  }

  ngOnInit(): void {
  }

}
