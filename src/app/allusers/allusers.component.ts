import { Component, OnInit } from '@angular/core';
import {UsersService} from "../_services/users.service";
import {User} from "../model/user";
import {UserdataService} from "../_services/userdata.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  users: User[];
  constructor(private usersService: UsersService,
              private userdataService:UserdataService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.usersService.getAllUsers().subscribe(data => {
      this.users = data;
      console.log('All user data ', data);
    })
  }

  followMe(userName: string){
    this.usersService.follow(userName,this.userdataService.getUserData().userName).subscribe(data => {
      this.toastr.info(data);
    })
  }

}
