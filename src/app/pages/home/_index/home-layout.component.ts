import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { fader, slider, transformer } from 'src/app/common/animations';
import { AuthService } from 'src/app/common/services';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
  animations: [slider]
})
export class HomeLayoutComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {}

  logout() {

    this.auth.logout();
    this.router.navigate(['/auth']);

  }

  prepareRoute(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']

  }

}
