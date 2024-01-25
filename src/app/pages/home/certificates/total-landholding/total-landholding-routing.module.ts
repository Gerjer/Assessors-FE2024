import { RouterModule, Routes } from "@angular/router";
import { TotalLandholdingComponent } from "./total-landholding.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    title: 'Certificates | Total Landholding',
    component: TotalLandholdingComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TotalLandholdingRoutingModule {}
