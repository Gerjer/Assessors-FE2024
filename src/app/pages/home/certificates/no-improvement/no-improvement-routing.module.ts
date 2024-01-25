import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NoImprovementComponent } from "./no-improvement.component";

const routes: Routes = [
  {
    path: '',
    title: 'Certificates | No Improvements',
    component: NoImprovementComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoImprovementRoutingModule {}
