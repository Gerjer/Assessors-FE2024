import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPaymentEntryComponent } from './order-payment-entry/order-payment-entry.component';

const routes: Routes = [
  {
    path: 'order-payment-entry',
    title: 'Certification | Order Payments',
    component: OrderPaymentEntryComponent,
  },

  {
    path: '',
    redirectTo: 'order-payment-entry',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderPaymentsRoutingModule {}
