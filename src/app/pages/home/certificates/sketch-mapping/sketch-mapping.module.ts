import { NgModule } from "@angular/core";
import { SketchMappingComponent } from "./sketch-mapping.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SketchMappingRoutingModule } from "./sketch-mapping-routing.module";

@NgModule({
  declarations: [
    SketchMappingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SketchMappingRoutingModule
  ]
})
export class SketchMappingModule {}
