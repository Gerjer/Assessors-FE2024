import { NgModule } from "@angular/core";
import { YearlyRevisionsComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";
import { YearlyRevisionsRoutingModule } from "./yearly-revisions-routing.module";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    YearlyRevisionsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    YearlyRevisionsRoutingModule
  ]
})
export class YearlyRevisionsModule {}
