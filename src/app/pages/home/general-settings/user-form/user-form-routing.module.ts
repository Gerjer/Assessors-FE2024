import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserFormsComponent } from "./list/list.component";

const routes: Routes = [
  {
    path: 'list',
    title: 'General Settings | User Forms',
    component: UserFormsComponent,
    data: {
      animation: 'isRight',
      title: 'Forms'
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
export class UserFormRoutingModule { }
