import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable, catchError, of, switchMap, throwError } from "rxjs";
import { AuthService } from "../services";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  err_count = 0;

  constructor(private inject: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('interceptor', req);
    return next.handle(req).pipe(catchError((err) => {

      if (err instanceof HttpErrorResponse && err.status === 401 && this.err_count != 1) {
        this.err_count++;
        return this.handleUnAuthorized(req, next);
      }

      this.err_count = 0;
      return throwError(() => new Error(err));
    }))
  }

  handleUnAuthorized(req: HttpRequest<any>, next: HttpHandler) {

    let auth = this.inject.get(AuthService);
    return auth.refresh().pipe(
      switchMap(data => {
        console.log('switchmap', data);
        return next.handle(req);
      }),
      catchError(err => {

        //TODO: logout actions

        return throwError(() => new Error(err));
      })
    )

  }

}

