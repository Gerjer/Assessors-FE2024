import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClassificationsComponent } from "./list/list.component";
import { ClassificationEntryComponent } from "./entry/entry.component";

const routes: Routes = [
  {
    path: 'list',
    title: 'General Settings | Classification',
    component: ClassificationsComponent
  },
  {
    path: 'entry',
    title: 'Classification | Entry',
    component: ClassificationEntryComponent
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
export class ClassificationsRoutingModule {}
