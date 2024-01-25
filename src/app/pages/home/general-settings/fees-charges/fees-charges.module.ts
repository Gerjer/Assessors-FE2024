import { NgModule } from "@angular/core";
import { FeesChargesComponent } from "./list/list.component";
import { FeesChargeEntryComponent } from "./entry/entry.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FeesChargesRoutingModule } from "./fees-charges-routing.module";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
  declarations: [
    FeesChargesComponent,
    FeesChargeEntryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FeesChargesRoutingModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatPaginatorModule
  ]
})
export class FeesChargesModule {}
