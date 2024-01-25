import { ChartOfAccountColumns } from 'src/app/common/table-columns';
import { ChartOfAccountsComponent } from './../../../general-settings/chart-of-account/account/list/list.component';
import { Component, OnInit } from '@angular/core';
import { IChartOfAccount } from 'src/app/common/interfaces/home/general-settings/chart-of-account/chart-of-account.interface';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-order-payment-entry',
  templateUrl: './order-payment-entry.component.html',
  styleUrls: ['./order-payment-entry.component.scss'],
})
export class OrderPaymentEntryComponent implements OnInit {
  tblColumns = ChartOfAccountColumns;
  tblColumnDef = ChartOfAccountColumns.map((c) => c.columnDef);

  tblData!: MatTableDataSource<IChartOfAccount>;
  tblRowSelect!: SelectionModel<IChartOfAccount>;

  constructor() {
    this.tblData = new MatTableDataSource<IChartOfAccount>();
    this.tblRowSelect = new SelectionModel<IChartOfAccount>(
      false,
      <IChartOfAccount[]>{}
    );
  }

  ngOnInit(): void {}
}
