import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IClassification } from 'src/app/common/interfaces';
import { ClassificationColumns } from 'src/app/common/table-columns';

@Component({
  selector: 'app-classification-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ClassificationsComponent implements OnInit {

  tblColumns = ClassificationColumns;
  tblColumnDef = ClassificationColumns.map(c => c.columnDef);

  tblData!: MatTableDataSource<IClassification>;
  tblRowSelect!: SelectionModel<IClassification>;

  constructor() {

    this.tblData = new MatTableDataSource<IClassification>();
    this.tblRowSelect = new SelectionModel<IClassification>(false, <IClassification[]>{});

  }

  ngOnInit(): void {
  }

}
