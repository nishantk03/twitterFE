import { Injectable } from '@angular/core';
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  userData:User = new User();

  constructor() { }

  setUserData(user:User){
    this.userData = user;
  }

  getUserData(){
    return this.userData;
  }
}
