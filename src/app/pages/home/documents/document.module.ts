import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DocumentRoutingModule } from "./document-routing.module";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule, MatNavList } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { IndexComponent } from "./_index/index.component";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DocumentRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule
  ]
})
export class DocumentModule {}
