import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { rotateMenuIcon90deg, subMenuState, transformer } from 'src/app/common/animations';
import { IMenu, IToggleMenu } from 'src/app/common/interfaces/definitions';
import { GeneralSettingRoute } from 'src/app/common/menus';


@Component({
  selector: 'app-general-settings-layout',
  templateUrl: './general-settings-layout.component.html',
  styleUrls: ['./general-settings-layout.component.scss'],
  animations: [transformer, rotateMenuIcon90deg, subMenuState]
})
export class GeneralSettingsLayoutComponent implements OnInit {

  /**  */
  routes = GeneralSettingRoute;

  toggleMenu: IToggleMenu[] = [];

  constructor() { }

  ngOnInit(): void {

    this.toggleMenu.push({
      title: 'Real Property',
      expanded: true
    })


  }

  prepareRoute(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']

  }

  parentMenuToggle(menu: IMenu) {

    let index = this.toggleMenu.findIndex(p => p.title === menu.title);

    if (index < 0) {
      this.toggleMenu.push({
        title: menu.title,
        expanded: false
      });

      index = this.toggleMenu.length - 1;
    }

    const title = this.toggleMenu[index].title;

    /**
     * hide all child where title is not the current toggled menu
     */
    this.toggleMenu.forEach(i => {
      if (i.title !== title) {
        i.expanded = false;
      }
    });

    /**
     *
     */
    this.toggleMenu[index].expanded = !this.toggleMenu[index].expanded;

  }

  parentMenuToggleState(menu: IMenu) {
    return this.toggleMenu.find(p => p.title === menu.title)?.expanded || false;
  }
}
