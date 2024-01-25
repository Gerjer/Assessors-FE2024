import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";


const routes: Routes = [

  {
    path: 'login',
    title: 'RPTMS | Login',
    component: LoginComponent,
    data: {
      animation: 'isLeft'
    }
  },
  {
    path: 'register',
    title: 'RPTMS | Register',
    component: RegisterComponent,
    data: {
      animation: 'isRight'
    }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
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
export class AuthRoutingModule {}
