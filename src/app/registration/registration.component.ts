import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {AuthenticationService} from "../_services/authentication.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  username:string;
  email:string;
  firstName:string;
  lastName:string;
  gender:string;
  state:string;
  country:string;
  age:string;
  password:string;

  user: User = new User();

  constructor(private authenticationService:AuthenticationService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() {
    this.user.password='';
    this.user.dateOfBirth='';
    this.user.country='';
    this.user.state='';
    this.user.gender='';
    this.user.firstName='';
    this.user.lastName='';
    this.user.emailId='';
    this.user.follower='';
  }

  submit(){
    this.authenticationService.registerToTwitter(this.user).subscribe(data=>{
      if(data=='User successfully created'){
        this.toastr.success(data);
        this.router.navigate(['/login']);
      }else {
        this.toastr.info(data);
      }
    })
  }

}
