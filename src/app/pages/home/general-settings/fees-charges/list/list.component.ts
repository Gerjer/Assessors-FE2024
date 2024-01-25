import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IFeesCharges } from 'src/app/common/interfaces/home/general-settings/fees-charges/fees-charges.interface';
import { FeesChargesColumns } from 'src/app/common/table-columns/home/general-settings/fees-charges/fees-charges.column';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class FeesChargesComponent implements OnInit {

  tblColumns = FeesChargesColumns;
  tblColumnDef = FeesChargesColumns.map(c => c.columnDef);

  tblData!: MatTableDataSource<IFeesCharges>;
  tblRowSelect!: SelectionModel<IFeesCharges>;

  constructor() {

    this.tblData = new MatTableDataSource<IFeesCharges>();
    this.tblRowSelect = new SelectionModel<IFeesCharges>(false, <IFeesCharges[]>{});

  }

  ngOnInit(): void {
  }

}
