import { Component, OnInit } from '@angular/core';
import { SidenavBasePageComponent } from 'src/app/common/abstract';
import { rotateMenuIcon90deg, subMenuState } from 'src/app/common/animations';
import { IMenu } from 'src/app/common/interfaces/definitions';
import { FormDocumentRoutes } from 'src/app/common/menus';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [rotateMenuIcon90deg, subMenuState]
})
export class IndexComponent extends SidenavBasePageComponent implements OnInit {

  override routes: IMenu[] = FormDocumentRoutes;

  constructor() {

    super();

  }

  ngOnInit(): void {

    this.toggleMenu.push({
      title: 'Field Appraisal & Assessment',
      expanded: true
    })
  }

}
