import { NgModule } from "@angular/core";
import { GeneralSettingsRoutingModule } from "./general-settings-routing.module";
import { GeneralSettingsLayoutComponent } from "./_index/general-settings-layout.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    GeneralSettingsLayoutComponent
  ],
  imports: [
    CommonModule,
    GeneralSettingsRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class GeneralSettingsModule {}
