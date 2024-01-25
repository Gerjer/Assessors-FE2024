import { RouterModule, Routes } from "@angular/router";
import { WithImprovementComponent } from "./with-improvement.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    title: 'Certificates | With Improvements',
    component: WithImprovementComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithImprovementRoutingModule {}
