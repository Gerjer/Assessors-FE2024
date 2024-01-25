import { RouterModule, Routes } from "@angular/router";
import { NoLandholdingPropertyComponent } from "./no-landholding-property.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
  {
    path: '',
    title: 'Certificates | No Landholding Property',
    component: NoLandholdingPropertyComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NoLandholdingPropertyRoutingModule {}
