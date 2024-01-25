import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserRolesComponent } from "./list/list.component";

const routes: Routes = [
  {
    path: 'list',
    title: 'General Settings | User Roles',
    component: UserRolesComponent,
    data: {
      animation: 'isLeft',
      title: 'Roles'
    }
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
export class UserRoleRoutingModule { }
