import { NgModule } from "@angular/core";
import { SubClassificationsRoutingModule } from "./sub-classifications-routing.module";
import { SubClassificationsComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatPaginatorModule } from "@angular/material/paginator";
import { SubClassificationEntryComponent } from './entry/entry.component';

@NgModule({
  declarations: [
    SubClassificationsComponent,
    SubClassificationEntryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    SubClassificationsRoutingModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule
  ]
})
export class SubClassificationsModule {}
