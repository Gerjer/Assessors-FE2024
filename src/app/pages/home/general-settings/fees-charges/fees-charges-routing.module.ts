import { RouterModule, Routes } from "@angular/router";
import { FeesChargesComponent } from "./list/list.component";
import { FeesChargeEntryComponent } from "./entry/entry.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: 'list',
    title: 'General Settings | Fees & Charges',
    component: FeesChargesComponent
  },
  {
    path: 'entry',
    title: 'Fees & Charges | Entry',
    component: FeesChargeEntryComponent
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
export class FeesChargesRoutingModule {}
