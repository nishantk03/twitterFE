import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {User} from "../model/user";
import {b} from "@angular/core/src/render3";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  loginToTwitter(userName: string, password: string): Observable<User> {
    let param = new HttpParams().set("username", userName)
      .set("password", password);
    return this.http.get<User>(environment.serverUrl+'user/login', {params: param});

  }

  registerToTwitter(user: User): Observable<string> {
    const body = JSON.stringify(user);
    let header = new HttpHeaders();
    header= header.append('content-type', 'application/json');
    return this.http.post<string>(environment.serverUrl+'user/registerUser', body,  {headers : header});

  }

}
