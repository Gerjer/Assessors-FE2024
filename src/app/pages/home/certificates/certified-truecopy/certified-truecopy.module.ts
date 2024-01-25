import { NgModule } from "@angular/core";
import { CertifiedTruecopyComponent } from "./certified-truecopy.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CertificatesRoutingModule } from "../certificates-routing.module";
import { CertifiedTrueCopyRoutingModule } from "./certified-truecopy-routing.module";

@NgModule({
  declarations: [
    CertifiedTruecopyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CertifiedTrueCopyRoutingModule
  ]
})
export class CertifiedTrueCopyModule {}
