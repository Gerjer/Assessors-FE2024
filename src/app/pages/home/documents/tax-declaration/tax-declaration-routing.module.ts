import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TaxDeclarationsComponent } from "./list/list.component";
import { TaxDeclarationEntryComponent } from "./entry/entry.component";

const routes: Routes = [
  {
    path: 'list',
    title: 'Document | Tax Declarations',
    component: TaxDeclarationsComponent
  },
  {
    path: 'entry',
    title: 'Tax Declaration | Entry',
    component: TaxDeclarationEntryComponent
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
export class TaxDeclarationRoutingModule {}
