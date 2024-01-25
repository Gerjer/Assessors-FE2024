import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./_index/index.component";

const routes: Routes = [
  {
    path: '',
    title: 'RPTMS | Reports',
    component: IndexComponent,
    children: [
      {
        path: 'assessment-rolls',
        loadChildren: () => import('./assessment-rolls/assessment-rolls.module')
          .then(m => m.AssessmentRollsModule)
      },
      {
        path: 'notice-of-assessments',
        loadChildren: () => import('./notice-of-assessments/notice-of-assessments-routing.module')
          .then(m => m.NoticeOfAssessmentsRoutingModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule {}
