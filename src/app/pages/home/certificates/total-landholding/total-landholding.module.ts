import { NgModule } from "@angular/core";
import { TotalLandholdingComponent } from "./total-landholding.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TotalLandholdingRoutingModule } from "./total-landholding-routing.module";

@NgModule({
  declarations: [
    TotalLandholdingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TotalLandholdingRoutingModule
  ]
})
export class TotalLandholdingModule {}
