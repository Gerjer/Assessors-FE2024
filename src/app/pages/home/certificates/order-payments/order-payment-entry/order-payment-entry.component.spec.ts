import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPaymentEntryComponent } from './order-payment-entry.component';

describe('OrderPaymentEntryComponent', () => {
  let component: OrderPaymentEntryComponent;
  let fixture: ComponentFixture<OrderPaymentEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPaymentEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderPaymentEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
