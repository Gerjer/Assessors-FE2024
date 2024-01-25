import { Component } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IMenu, IToggleMenu } from "../interfaces/definitions";

@Component({
  template: ''
})
export abstract class SidenavBasePageComponent {

  routes: IMenu[] = [];

  toggleMenu: IToggleMenu[] = [];

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
