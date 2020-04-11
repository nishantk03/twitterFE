import {Component, OnInit} from '@angular/core';
import {UsersService} from "../_services/users.service";
import {User} from "../model/user";
import {UserdataService} from "../_services/userdata.service";
import {AuthenticationService} from "../_services/authentication.service";

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {
  users: User[];

  constructor(private usersService: UsersService,
              private userdataService:UserdataService) {
  }

  ngOnInit() {
    this.getFollowers();
  }

  getFollowers() {
    this.usersService.getFollowers(this.userdataService.getUserData().userName).subscribe(data => {
      this.usersService.getSelectedUsers(data).subscribe(userData=>{
        this.users = userData;
      })
    })
  }

}
