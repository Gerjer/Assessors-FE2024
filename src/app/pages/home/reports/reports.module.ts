import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReportRoutingModule } from "./reports-routing.module";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { IndexComponent } from "./_index/index.component";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class ReportModule {}
