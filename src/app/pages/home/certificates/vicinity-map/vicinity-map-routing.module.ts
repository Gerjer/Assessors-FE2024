import { RouterModule, Routes } from "@angular/router";
import { VicinityMapComponent } from "./vicinity-map.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    title: 'Certificates | Vicinity Maps',
    component: VicinityMapComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VicinityMapRoutingModule {}
