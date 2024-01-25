import { NgModule } from "@angular/core";
import { NoLandholdingPropertyComponent } from "./no-landholding-property.component";
import { CommonModule } from "@angular/common";
import { NoLandholdingPropertyRoutingModule } from "./no-landholding-property-routing.module";

@NgModule({
  declarations: [
    NoLandholdingPropertyComponent
  ],
  imports: [
    CommonModule,
    NoLandholdingPropertyRoutingModule
  ]
})
export class NoLandholdingPropertyModule {}
