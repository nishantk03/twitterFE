import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs/internal/Observable";
import {environment} from "../../environments/environment";
import {RequestOptions} from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.serverUrl + 'network/getAllUsers');
  }

  follow(toFollow: string, currentUser: string): Observable<string> {
    let param = new HttpParams().set("toFollow", toFollow)
      .set("username", currentUser);
    return this.http.get<string>(environment.serverUrl + 'network/addFollower', {params: param});

  }

  getFollowers(currentUser: string): Observable<string[]> {
    let param = new HttpParams().set("username", currentUser);
    return this.http.get<string[]>(environment.serverUrl + 'network/getFollower', {params: param});

  }

  getFollowing(currentUser: string): Observable<User[]> {
    let param = new HttpParams().set("username", currentUser);
    return this.http.get<User[]>(environment.serverUrl + 'network/getFollowing', {params: param});

  }

  getSelectedUsers(user: string[]): Observable<User[]> {
    const body = JSON.stringify(user);
    let header = new HttpHeaders();
    header = header.append('content-type', 'application/json');
    return this.http.post<User[]>(environment.serverUrl + 'user/getSelectedUsers', body, {headers: header});

  }

  uploadProfilePic(img: string, username: string): Observable<User[]> {
    const obj = {
      pic:img,
      username:username
    }

    const body = JSON.stringify(obj);
    let header = new HttpHeaders();
    header = header.append('content-type', 'application/json');

    /*let file:FormData = new FormData();
    file.append("imageToUpload", img);
    file.append("usernames", username);

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.set('Accept', 'application/json');*/

    /*let data = {
      "file": file,
      "username": username
    }
    const body = JSON.stringify(data);
    let headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    let param = new HttpParams().set("usernames", username);
    let paramOptions = {params: param, headers: headers};*/
    return this.http.post<User[]>(environment.serverUrl + 'network/uploadFile', body, {headers: header});

  }
}
