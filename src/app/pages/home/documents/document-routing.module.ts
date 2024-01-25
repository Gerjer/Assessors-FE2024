import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./_index/index.component";

const routes: Routes = [
  {
    path: '',
    title: 'RPTMS | Documents',
    component: IndexComponent,
    children: [
      {
        path: 'field-appraisal-assessment-sheet',
        loadChildren: () => import('./faas/faas.module')
          .then(m => m.FAASModule)
      },
      {
        path: 'tax-declaration',
        loadChildren: () => import('./tax-declaration/tax-declaration.module')
          .then(m => m.TaxDeclarationModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule {}
