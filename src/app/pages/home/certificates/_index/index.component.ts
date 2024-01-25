import { Component, OnInit } from '@angular/core';
import { SidenavBasePageComponent } from 'src/app/common/abstract';
import { rotateMenuIcon90deg, subMenuState } from 'src/app/common/animations';
import { IMenu } from 'src/app/common/interfaces/definitions';
import { CertificateMenuRoutes } from 'src/app/common/menus/certificates-routes';

@Component({
  selector: 'app-certificates',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [rotateMenuIcon90deg, subMenuState]
})
export class CertificatesLayoutComponent extends SidenavBasePageComponent implements OnInit {

  override routes: IMenu[] = CertificateMenuRoutes;

  constructor() {

    super();

  }

  ngOnInit(): void {

    this.toggleMenu.push({
      title: 'Property Rights & Tenure',
      expanded: true
    })

  }

}
