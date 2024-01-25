import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { fader, slider, toolbarState, transformer } from './common/animations';
import { Observable, filter } from 'rxjs';
import { AuthService } from './common/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader, toolbarState]
})
export class AppComponent implements OnInit {

  title = 'rptms-front-a_cliv14-md';
  toogleBar = true;

  loggedIn$!: Observable<boolean>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private auth: AuthService) {}

  ngOnInit(): void {

    this.loggedIn$ = this.auth.isloggedIn$

    // this.router.events.pipe(
    //   filter(e => e instanceof NavigationEnd)
    // ).subscribe(() => {
    //   this.toggleToolbar();
    // })

  }

  toggleToolbar() {

    // let route = this.activatedRoute;

    // while (route.firstChild) {
    //   route = route.firstChild;
    // }

    // console.log(route.routeConfig?.path);
    // this.toogleBar = route.routeConfig?.path === 'management' ? false : true

  }

  prepareRoute(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']

  }
}
