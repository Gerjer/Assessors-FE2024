import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OwnershipComponent } from "./ownership.component";

const routes: Routes = [
  {
    path: '',
    title: 'Certificates | Ownership',
    component: OwnershipComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnershipRoutingModule {}
