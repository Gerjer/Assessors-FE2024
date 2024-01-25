import { NgModule } from "@angular/core";
import { SignatoriesComponent } from "./list/list.component";
import { SignatoryEntryComponent } from "./entry/entry.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignatoryRoutingModule } from "./signatory-routing.module";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [
    SignatoriesComponent,
    SignatoryEntryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SignatoryRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class SignatoryModule {}
