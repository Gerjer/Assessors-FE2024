import { RouterModule, Routes } from "@angular/router";
import { SignatoriesComponent } from "./list/list.component";
import { SignatoryEntryComponent } from "./entry/entry.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: 'list',
    title: 'General Settings | Signatories',
    component: SignatoriesComponent
  },
  {
    path: 'entry',
    title: 'Signatory | Entry',
    component: SignatoryEntryComponent
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
export class SignatoryRoutingModule {}
