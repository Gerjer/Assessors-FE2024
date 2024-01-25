import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FAASRoutingModule } from "./faas-routing.module";
import { FAASComponent } from "./list/list.component";
import { FAASEntryComponent } from "./entry/entry.component";

@NgModule({
  declarations: [
    FAASComponent,
    FAASEntryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FAASRoutingModule
  ]
})
export class FAASModule {}
