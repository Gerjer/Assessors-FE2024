import { NgModule } from "@angular/core";
import { VicinityMapComponent } from "./vicinity-map.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VicinityMapRoutingModule } from "./vicinity-map-routing.module";

@NgModule({
  declarations: [
    VicinityMapComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VicinityMapRoutingModule
  ]
})
export class VicinityMapModule {}
