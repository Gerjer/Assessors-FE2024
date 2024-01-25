import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SubClassificationsComponent } from "./list/list.component";
import { SubClassificationEntryComponent } from "./entry/entry.component";

const routes: Routes = [
  {
    path: 'list',
    title: 'General Settings | Sub Classifications',
    component: SubClassificationsComponent
  },
  {
    path: 'entry',
    title: 'Sub Classifications | Entry',
    component: SubClassificationEntryComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
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
export class SubClassificationsRoutingModule {}
