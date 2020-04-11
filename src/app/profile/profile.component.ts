import {Component, OnInit} from '@angular/core';
import {UsersService} from "../_services/users.service";
import {UserdataService} from "../_services/userdata.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  url = '';
  name = '';
  age = '';
  gender = '';
  state = '';
  country = '';
  emailid = '';
  username = '';

  constructor(private usersService: UsersService,
              private userdataService: UserdataService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.name = this.userdataService.getUserData().firstName + ' ' + this.userdataService.getUserData().lastName;
    this.age = this.userdataService.getUserData().dateOfBirth;
    this.gender = this.userdataService.getUserData().gender;
    this.state = this.userdataService.getUserData().state;
    this.country = this.userdataService.getUserData().country;
    this.emailid = this.userdataService.getUserData().emailId;
    this.username = this.userdataService.getUserData().userName;
    this.url = this.userdataService.getUserData().pic;
  }

  onSelectFile(event) {
    this.toastr.info('Updating Profile Picture');
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        console.log(this.url);
        this.usersService.uploadProfilePic(this.url, this.userdataService.getUserData().userName).subscribe(data => {
          console.log(data);
          this.url = data[0].pic;
          this.userdataService.setUserData(data[0]);
          this.toastr.success('Profile Picture Updated');
        })
      }
    }
  }

}
