import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FAASComponent } from "./list/list.component";
import { FAASEntryComponent } from "./entry/entry.component";

const routes: Routes = [
  {
    path: 'list',
    title: 'Documents | FAAS',
    component: FAASComponent
  },
  {
    path: 'entry',
    title: 'FAAS | Entry',
    component: FAASEntryComponent
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
export class FAASRoutingModule {}
