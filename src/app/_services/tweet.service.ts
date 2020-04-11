import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../model/user";
import {Observable} from "rxjs/internal/Observable";
import {Tweet} from "../model/tweet";

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private http: HttpClient) { }

  composeTweet(tweet: Tweet): Observable<string[]> {
    const body = JSON.stringify(tweet);
    let header = new HttpHeaders();
    header= header.append('content-type', 'application/json');
    return this.http.post<string[]>(environment.serverUrl+'userfeatures/composeTweet', body,  {headers : header});
  }

  getMyTweet(currentUser: string): Observable<Tweet[]> {
    let param = new HttpParams().set("username", currentUser);
    return this.http.get<Tweet[]>(environment.serverUrl+'userfeatures/getMyTweets', {params: param});

  }


  deleteTweet(tweetId: number): Observable<Tweet[]> {
    let param = new HttpParams().set("id", tweetId.toString());
    return this.http.get<Tweet[]>(environment.serverUrl+'userfeatures/deleteTweets', {params: param});

  }
}
