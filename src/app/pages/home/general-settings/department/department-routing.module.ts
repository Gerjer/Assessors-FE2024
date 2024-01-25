import { RouterModule, Routes } from "@angular/router";
import { DepartmentsComponent } from "./list/list.component";
import { DepartmentEntryComponent } from "./entry/entry.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: 'list',
    title: 'General Settings | Departments',
    component: DepartmentsComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule {}
