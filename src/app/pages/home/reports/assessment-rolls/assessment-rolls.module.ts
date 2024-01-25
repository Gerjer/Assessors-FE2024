import { NgModule } from "@angular/core";
import { AssessmentRollsComponent } from "./assessment-rolls.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AssessmentRollsRoutingModule } from "./assessment-rolls-routing.module";

@NgModule({
  declarations: [
    AssessmentRollsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AssessmentRollsRoutingModule
  ]
})
export class AssessmentRollsModule {}
