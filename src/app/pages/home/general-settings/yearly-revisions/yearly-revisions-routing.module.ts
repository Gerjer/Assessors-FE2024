import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { YearlyRevisionsComponent } from "./list/list.component";
import { YearlyRevisionEntryComponent } from "./entry/entry.component";

const routes: Routes = [
  {
    path: 'list',
    title: 'General Settings | Yearly Revisions',
    component: YearlyRevisionsComponent
  },
  {
    path: 'entry',
    title: 'Yearly Revisions | Entry',
    component: YearlyRevisionEntryComponent
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
export class YearlyRevisionsRoutingModule {}
