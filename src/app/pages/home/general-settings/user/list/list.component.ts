import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from 'src/app/common/interfaces';
import { UserColumns } from 'src/app/common/table-columns';
import { UserEntryComponent } from '../entry/entry.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UsersComponent implements OnInit {

  tblColumns = UserColumns;
  tblColumnDef = UserColumns.map(c => c.columnDef);

  tblData!: MatTableDataSource<IUser>;
  tblRowSelect!: SelectionModel<IUser>;

  constructor(private dialog: MatDialog) {

    this.tblData = new MatTableDataSource<IUser>();
    this.tblRowSelect = new SelectionModel<IUser>(false, <IUser[]>{});

  }

  ngOnInit(): void {
  }

  newUser() {

    const ref = this.dialog.open(UserEntryComponent, {
      width: 'auto',
      height: 'auto',
      enterAnimationDuration: '400ms',
      exitAnimationDuration: '300ms'
    });

    const instance = ref.componentInstance as UserEntryComponent;

    instance.entrySuccess$.subscribe(state => {
      if (state) {
        // TODO: refresh list
      }
    });

  }

}
