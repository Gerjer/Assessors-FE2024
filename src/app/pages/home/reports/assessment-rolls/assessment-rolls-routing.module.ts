import { RouterModule, Routes } from "@angular/router";
import { AssessmentRollsComponent } from "./assessment-rolls.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    title: 'Reports | Assessment Rolls',
    component: AssessmentRollsComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssessmentRollsRoutingModule {}
