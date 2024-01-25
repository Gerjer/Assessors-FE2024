import { NgModule } from "@angular/core";
import { TaxDeclarationsComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TaxDeclarationRoutingModule } from "./tax-declaration-routing.module";

@NgModule({
  declarations: [
    TaxDeclarationsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TaxDeclarationRoutingModule
  ]
})
export class TaxDeclarationModule {}
