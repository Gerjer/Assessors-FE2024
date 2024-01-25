import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { IDepartment } from 'src/app/common/interfaces';
import { DepartmentColumns } from 'src/app/common/table-columns';
import { DepartmentEntryComponent } from '../entry/entry.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class DepartmentsComponent implements OnInit {

  fetching = false;

  tblColumns = DepartmentColumns;
  tblColumnDef = DepartmentColumns.map(c => c.columnDef);

  tblData!: MatTableDataSource<IDepartment>;
  tblRowSelect!: SelectionModel<IDepartment>;

  constructor(private dialog: MatDialog) {

    this.tblData = new MatTableDataSource<IDepartment>();
    this.tblRowSelect = new SelectionModel<IDepartment>(false, <IDepartment[]>{});

  }

  ngOnInit(): void {
  }

  reload() {

    if (this.fetching) return;

    this.fetching = true;

    setTimeout(() => {
      this.fetching = false;
    }, 1500);

  }

  newDepartment() {

    const ref = this.dialog.open(DepartmentEntryComponent, {
      width: 'auto',
      height: 'auto',
      enterAnimationDuration: '400ms',
      exitAnimationDuration: '300ms'
    });

    const instance = ref.componentInstance as DepartmentEntryComponent;

    instance.entrySuccess$.subscribe(state => {
      if (state) {
        // TODO: refresh list
      }
    });
  }

}
