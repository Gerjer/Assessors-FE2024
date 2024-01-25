import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./list/list.component";

const routes: Routes = [
  {
    path: 'list',
    title: 'General Settings | Users',
    component: UsersComponent
  },
  {
    path: 'entry',
    title: 'User | Entry',
    component: UsersComponent
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
export class UserRoutingModule {}
