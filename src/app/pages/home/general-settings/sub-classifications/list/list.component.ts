import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ISubClassification } from 'src/app/common/interfaces';
import { SubClassificationColumns } from 'src/app/common/table-columns/home/general-settings/sub-classification/sub-classification.column';

@Component({
  selector: 'app-sub-classifications-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class SubClassificationsComponent implements OnInit {

  tblColumns = SubClassificationColumns;
  tblColumnDef = SubClassificationColumns.map(c => c.columnDef);

  tblData!: MatTableDataSource<ISubClassification>;
  tblRowSelect!: SelectionModel<ISubClassification>;

  constructor() {

    this.tblData = new MatTableDataSource<ISubClassification>();
    this.tblRowSelect = new SelectionModel<ISubClassification>(false, <ISubClassification[]>{});

  }

  ngOnInit(): void {
  }

}
