import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CertificatesRoutingModule } from "./certificates-routing.module";
import { CertificatesLayoutComponent } from "./_index/index.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";

@NgModule({
  declarations: [
    CertificatesLayoutComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    CertificatesRoutingModule
  ]
})
export class CertificatesModule {}
