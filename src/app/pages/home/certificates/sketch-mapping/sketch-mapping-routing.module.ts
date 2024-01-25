import { RouterModule, Routes } from "@angular/router";
import { SketchMappingComponent } from "./sketch-mapping.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    title: 'Certificates | Sketch Mapping',
    component: SketchMappingComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SketchMappingRoutingModule {}
