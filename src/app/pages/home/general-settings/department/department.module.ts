import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DepartmentRoutingModule } from "./department-routing.module";
import { DepartmentsComponent } from "./list/list.component";
import { DepartmentEntryComponent } from "./entry/entry.component";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from "@angular/material/progress-bar";

@NgModule({
  declarations: [
    DepartmentsComponent,
    DepartmentEntryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DepartmentRoutingModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatProgressBarModule
  ]
})
export class DepartmentModule {}
