import { NgModule } from "@angular/core";
import { NoticeOfAssessmentsComponent } from "./notice-of-assessments.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NoticeOfAssessmentsRoutingModule } from "./notice-of-assessments-routing.module";

@NgModule({
  declarations: [
    NoticeOfAssessmentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NoticeOfAssessmentsRoutingModule
  ]
})
export class NoticeOfAssessmentsModule {}
