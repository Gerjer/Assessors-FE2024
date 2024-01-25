import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NoticeOfAssessmentsComponent } from "./notice-of-assessments.component";

const routes: Routes = [
  {
    path: '',
    title: 'Reports | Notice of Assessments',
    component: NoticeOfAssessmentsComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticeOfAssessmentsRoutingModule {}
