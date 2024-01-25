import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IChartOfAccountType } from 'src/app/common/interfaces/home/general-settings/chart-of-account/chart-of-account-type.interface';
import { ComponentEventDispatcherService } from 'src/app/common/services';
import { ChartOfAccountTypeColumns } from 'src/app/common/table-columns';

@Component({
  selector: 'app-account-type-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ChartOfAccountTypesComponent implements OnInit, OnDestroy {

  tblColumns = ChartOfAccountTypeColumns;
  tblColumnDef = ChartOfAccountTypeColumns.map(c => c.columnDef);

  tblData!: MatTableDataSource<IChartOfAccountType>;
  tblRowSelect!: SelectionModel<IChartOfAccountType>;

  subs!: Subscription;

  constructor(private ceds: ComponentEventDispatcherService) {

    this.subs = new Subscription();

    this.tblData = new MatTableDataSource<IChartOfAccountType>();
    this.tblRowSelect = new SelectionModel<IChartOfAccountType>(false, <IChartOfAccountType[]>{});

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
