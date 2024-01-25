import { NgModule } from "@angular/core";
import { EmployeesListComponent } from "./list/list.component";
import { EmployeeEntryComponent } from "./entry/entry.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EmployeeRoutingModule } from "./employee-routing.module";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeeEntryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatPaginatorModule
  ]
})
export class EmployeeModule {}
