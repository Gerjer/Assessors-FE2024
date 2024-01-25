import { NgModule } from "@angular/core";
import { OwnershipComponent } from "./ownership.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OwnershipRoutingModule } from "./ownership-routing.module";

@NgModule({
  declarations: [
    OwnershipComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OwnershipRoutingModule
  ]
})
export class OwnershipModule {}
