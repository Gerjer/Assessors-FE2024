import { RouterModule, Routes } from "@angular/router";
import { EmployeesListComponent } from "./list/list.component";
import { EmployeeEntryComponent } from "./entry/entry.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: 'list',
    title: 'General Settings | Employees',
    component: EmployeesListComponent
  },
  {
    path: 'entry',
    title: 'Employee | Entry',
    component: EmployeeEntryComponent
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
export class EmployeeRoutingModule {}
