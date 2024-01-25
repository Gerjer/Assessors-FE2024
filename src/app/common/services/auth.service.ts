import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, firstValueFrom, lastValueFrom, of, tap } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class AuthService {

  /**
   * uri path
   */
  api_url = environment.api_url;

  private isloggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isloggedIn$: Observable<boolean> = this.isloggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(payload: any) {
    return this.http.post(`${this.api_url}v1/auth/login`, payload, { withCredentials: true })
      .pipe(
        tap((value: any) => {
          if (value && value.hasOwnProperty('status') && value.status === 200) {
            this.isloggedInSubject.next(true);
          }
        })
      );
  }

  refresh() {
    return this.http.post(`${this.api_url}v1/auth/refresh`, {}, { withCredentials: true });
  }

  logout() {
    this.isloggedInSubject.next(false);
  }
}
