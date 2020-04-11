import { Component, OnInit } from '@angular/core';
import {UsersService} from "../_services/users.service";
import {User} from "../model/user";
import {UserdataService} from "../_services/userdata.service";

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  users: User[];
  constructor(private usersService: UsersService,
              private userdataService:UserdataService) { }

  ngOnInit() {
    this.getFollowing();
  }

  getFollowing() {
    this.usersService.getFollowing(this.userdataService.getUserData().userName).subscribe(data => {
      this.users = data;
    })
  }

}
