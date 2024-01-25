import { NgModule } from "@angular/core";
import { ClassificationsComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";
import { ClassificationsRoutingModule } from "./classifications-routing.module";
import { MatCardModule } from "@angular/material/card";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { ClassificationEntryComponent } from './entry/entry.component';

@NgModule({
  declarations: [
    ClassificationsComponent,
    ClassificationEntryComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ClassificationsRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class ClassificationsModule {}
