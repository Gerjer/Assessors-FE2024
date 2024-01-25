import { NgModule } from "@angular/core";
import { NoImprovementComponent } from "./no-improvement.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NoImprovementRoutingModule } from "./no-improvement-routing.module";

@NgModule({
  declarations: [
    NoImprovementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NoImprovementRoutingModule
  ]
})
export class NoImprovementModule {}
