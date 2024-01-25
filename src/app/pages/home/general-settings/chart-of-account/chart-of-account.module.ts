import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChartOfAccountRoutingModule } from "./chart-of-account-routing.module";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { ChartOfAccountsComponent } from "./account/list/list.component";
import { ChartOfAccountEntryComponent } from "./account/entry/entry.component";
import { IndexComponent } from "./_index/index.component";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from '@angular/material/tabs';
import { ChartOfAccountTypesComponent } from "./account-type/list/list.component";
import { ChartOfAccountTypeEntryComponent } from "./account-type/entry/entry.component";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
  declarations: [
    IndexComponent,
    ChartOfAccountsComponent,
    ChartOfAccountEntryComponent,
    ChartOfAccountTypesComponent,
    ChartOfAccountTypeEntryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartOfAccountRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatMenuModule
  ]
})
export class ChartOfAccountModule {}
