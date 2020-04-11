import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../_services/authentication.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {UserdataService} from "../_services/userdata.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private toastr: ToastrService,
              private userdataService:UserdataService) {
  }

  ngOnInit() {
    this.username = '';
    this.password = '';
  }

  login() {
    console.log(this.username + '   ' + this.password);
    this.authenticationService.loginToTwitter(this.username, this.password).subscribe(data => {
      console.log('From server: ', data);
      if (data[0].isLoggedIn) {
        this.router.navigate(['/home', data[0].firstName]);
        this.userdataService.setUserData(data[0]);
      } else {
        this.toastr.error('Login Failed!');
      }

    })
  }

}
