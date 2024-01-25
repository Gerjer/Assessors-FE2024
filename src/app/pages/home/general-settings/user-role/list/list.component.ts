import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { IUserRole } from 'src/app/common/interfaces';
import { UserRoleColumns } from 'src/app/common/table-columns';

@Component({
  selector: 'app-user-role-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UserRolesComponent implements OnInit {

  title = 'Roles';

  tblColumns = UserRoleColumns;
  tblColumnDef = UserRoleColumns.map(c => c.columnDef);

  tblData!: MatTableDataSource<IUserRole>;
  tblRowSelect!: SelectionModel<IUserRole>;

  constructor(private route: ActivatedRoute) {

    this.tblData = new MatTableDataSource<IUserRole>();
    this.tblRowSelect = new SelectionModel<IUserRole>(false, <IUserRole[]>{});

  }

  ngOnInit(): void {

  }

}
