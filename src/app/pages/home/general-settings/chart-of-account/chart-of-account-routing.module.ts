import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChartOfAccountEntryComponent } from "./account/entry/entry.component";
import { IndexComponent } from "./_index/index.component";
import { ChartOfAccountTypeEntryComponent } from "./account-type/entry/entry.component";

const routes: Routes = [
  {
    path: 'list',
    title: 'General Settings | Chart of Accounts',
    component: IndexComponent
  },
  {
    path: 'entry',
    title: 'Chart of Account | Entry',
    component: ChartOfAccountEntryComponent
  },
  {
    path: 'type/entry',
    title: 'Chart of Account Type | Entry',
    component: ChartOfAccountTypeEntryComponent
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
export class ChartOfAccountRoutingModule {}
