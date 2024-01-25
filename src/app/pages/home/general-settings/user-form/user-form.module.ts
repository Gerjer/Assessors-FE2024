import { NgModule } from "@angular/core";
import { UserFormRoutingModule } from "./user-form-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserFormsComponent } from "./list/list.component";
import { UserFormEntryComponent } from "./entry/entry.component";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    UserFormsComponent,
    UserFormEntryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserFormRoutingModule,

    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class UserFormModule { }
