import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderPaymentsRoutingModule } from './order-payments-routing.module';
import { OrderPaymentEntryComponent } from './order-payment-entry/order-payment-entry.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [OrderPaymentEntryComponent],
  imports: [
    CommonModule,
    OrderPaymentsRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
  ],
})
export class OrderPaymentsModule {}
