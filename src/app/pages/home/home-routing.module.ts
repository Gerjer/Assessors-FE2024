import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeLayoutComponent } from "./_index/home-layout.component";


const routes: Routes = [

  {
    path: 'management',
    title: 'RPTMS | Management',
    component: HomeLayoutComponent,
    data: { animation: 'isRight' },
    children: [
      { path: 'documents',
        loadChildren: () => import('./documents/document.module')
          .then(m => m.DocumentModule)
      },
      { path: 'certificates',
        loadChildren: () => import('./certificates/certificates.module')
          .then(m => m.CertificatesModule)
      },
      { path: 'general-settings',
        loadChildren: () => import('./general-settings/general-settings.module')
          .then(m => m.GeneralSettingsModule)
      },
      { path: 'reports',
        loadChildren: () => import('./reports/reports.module')
          .then(m => m.ReportModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'management',
    pathMatch: 'full',
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {}
