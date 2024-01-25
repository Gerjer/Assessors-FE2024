import { NgModule } from "@angular/core";
import { WithImprovementComponent } from "./with-improvement.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WithImprovementRoutingModule } from "./with-improvement-routing.module";

@NgModule({
  declarations: [
    WithImprovementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WithImprovementRoutingModule
  ]
})
export class WithImprovementModule {}
