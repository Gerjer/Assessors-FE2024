import { OrderPaymentsModule } from './order-payments/order-payments.module';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificatesLayoutComponent } from './_index/index.component';

const routes: Routes = [
  {
    path: '',
    title: 'RPTMS | Certificates',
    component: CertificatesLayoutComponent,
    data: { animation: 'isLeft' },
    children: [
      {
        path: 'no-landholding-properties',
        loadChildren: () =>
          import(
            './no-landholding-property/no-landholding-property.module'
          ).then((m) => m.NoLandholdingPropertyModule),
      },
      {
        path: 'ownerships',
        loadChildren: () =>
          import('./ownership/ownership.module').then((m) => m.OwnershipModule),
      },
      {
        path: 'total-landholdings',
        loadChildren: () =>
          import('./total-landholding/total-landholding.module').then(
            (m) => m.TotalLandholdingModule
          ),
      },
      {
        path: 'no-improvements',
        loadChildren: () =>
          import('./no-improvement/no-improvement.module').then(
            (m) => m.NoImprovementModule
          ),
      },
      {
        path: 'with-improvements',
        loadChildren: () =>
          import('./with-improvement/with-improvement.module').then(
            (m) => m.WithImprovementModule
          ),
      },
      {
        path: 'certified-true-copies',
        loadChildren: () =>
          import('./certified-truecopy/certified-truecopy.module').then(
            (m) => m.CertifiedTrueCopyModule
          ),
      },
      {
        path: 'sketch-mappings',
        loadChildren: () =>
          import('./sketch-mapping/sketch-mapping.module').then(
            (m) => m.SketchMappingModule
          ),
      },
      {
        path: 'vicinity-maps',
        loadChildren: () =>
          import('./vicinity-map/vicinity-map.module').then(
            (m) => m.VicinityMapModule
          ),
      },

      {
        path: 'order-payments',
        loadChildren: () =>
          import('./order-payments/order-payments.module').then(
            (m) => m.OrderPaymentsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificatesRoutingModule {}
