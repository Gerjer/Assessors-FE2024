import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GeneralSettingsLayoutComponent } from "./_index/general-settings-layout.component";


const routes: Routes = [

  {
    path: '',
    title: 'RPTMS | General Settings',
    component: GeneralSettingsLayoutComponent,
    data: { animation: 'isRight' },
    children: [
      {
        path: 'classifications',
        loadChildren: () => import('./classification/classifications.module')
          .then(m => m.ClassificationsModule)
      },
      {
        path: 'sub-classifications',
        loadChildren: () => import('./sub-classifications/sub-classifications.module')
          .then(m => m.SubClassificationsModule)
      },
      {
        path: 'yearly-revisions',
        loadChildren: () => import('./yearly-revisions/yearly-revisions.module')
          .then(m => m.YearlyRevisionsModule)
      },
      {
        path: 'departments',
        loadChildren: () => import('./department/department.module')
          .then(m => m.DepartmentModule)
      },
      {
        path: 'chart-of-accounts',
        loadChildren: () => import('./chart-of-account/chart-of-account.module')
          .then(m => m.ChartOfAccountModule)
      },
      {
        path: 'fees-charges',
        loadChildren: () => import('./fees-charges/fees-charges.module')
          .then(m => m.FeesChargesModule)
      },
      {
        path: 'employees',
        loadChildren: () => import('./employee/employee.module')
          .then(m => m.EmployeeModule)
      },
      {
        path: 'signatories',
        loadChildren: () => import('./signatory/signatory.module')
          .then(m => m.SignatoryModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./user/user.module')
          .then(m => m.UserModule)
      }
    ]
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
export class GeneralSettingsRoutingModule {}
