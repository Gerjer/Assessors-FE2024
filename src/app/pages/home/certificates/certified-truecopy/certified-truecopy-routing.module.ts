import { RouterModule, Routes } from "@angular/router";
import { CertifiedTruecopyComponent } from "./certified-truecopy.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    title: 'Certificates | Certified True Copies',
    component: CertifiedTruecopyComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertifiedTrueCopyRoutingModule {}
