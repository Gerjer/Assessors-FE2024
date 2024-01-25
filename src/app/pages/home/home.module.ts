import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeLayoutComponent } from './_index/home-layout.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { GeneralSettingsModule } from "./general-settings/general-settings.module";
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    HomeRoutingModule,
    GeneralSettingsModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule
  ],
  declarations: [
    HomeLayoutComponent
  ]
})
export class HomeModule {}
