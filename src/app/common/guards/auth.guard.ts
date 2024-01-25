import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services";

@Injectable()
export class AuthGuard implements CanActivate {

  /**
   *
   * @param auth
   */
  constructor(private auth: AuthService) {}

  /**
   *
   * @param route
   * @param state
   * @returns
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return true;
  }

}
