import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IChartOfAccount } from 'src/app/common/interfaces/home/general-settings/chart-of-account/chart-of-account.interface';
import { ComponentEventDispatcherService } from 'src/app/common/services';
import { ChartOfAccountColumns } from 'src/app/common/table-columns';

@Component({
  selector: 'app-account-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ChartOfAccountsComponent implements OnInit, OnDestroy {

  tblColumns = ChartOfAccountColumns;
  tblColumnDef = ChartOfAccountColumns.map(c => c.columnDef);

  tblData!: MatTableDataSource<IChartOfAccount>;
  tblRowSelect!: SelectionModel<IChartOfAccount>;

  subs!: Subscription;

  constructor(private ceds: ComponentEventDispatcherService) {

    this.subs = new Subscription();

    this.tblData = new MatTableDataSource<IChartOfAccount>();
    this.tblRowSelect = new SelectionModel<IChartOfAccount>(false, <IChartOfAccount[]>{});

  }

  /**
   *
   */
  ngOnInit(): void {

    this.associateAndSubscribe();

  }

  /**
   *
   */
  ngOnDestroy(): void {

    this.subs.unsubscribe();
  }

  /**
   *
   */
  associateAndSubscribe() {

    const eventGet$ = this.ceds.emitGetData.subscribe(params => {

    });

    this.subs.add(eventGet$);

    const eventAdd$ = this.ceds.emitAdd.subscribe(params => {

    });

    this.subs.add(eventAdd$);

    const eventFilter$ = this.ceds.emitFilter.subscribe(params => {

    });

    this.subs.add(eventFilter$);

  }

}
