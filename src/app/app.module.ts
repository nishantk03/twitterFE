import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {WelcomeComponent} from './welcome/welcome.component';
import {RouterModule} from "@angular/router";
import {NavbarComponent} from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from "ngx-toastr";
import {RegistrationComponent} from './registration/registration.component';
import { FollowerComponent } from './follower/follower.component';
import { FollowingComponent } from './following/following.component';
import {CommonModule} from "@angular/common";
import { AllusersComponent } from './allusers/allusers.component';
import { ComposeTweetComponent } from './compose-tweet/compose-tweet.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MyTweetComponent } from './my-tweet/my-tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    NavbarComponent,
    RegistrationComponent,
    FollowerComponent,
    FollowingComponent,
    AllusersComponent,
    ComposeTweetComponent,
    ProfileComponent,
    HomeComponent,
    MyTweetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'register', component: RegistrationComponent},
      {
        path: 'home/:firstName', component: WelcomeComponent,
        children: [{
          path: 'wel',
          component: HomeComponent
        },
          {
            path: 'following',
            component: FollowingComponent
          },
          {
            path: 'follower',
            component: FollowerComponent
          },
          {
            path: 'all',
            component: AllusersComponent
          },
          {
            path: 'tweet',
            component: ComposeTweetComponent
          },
          {
            path: 'profile',
            component: ProfileComponent
          },
          {
            path: 'mytweet',
            component: MyTweetComponent
          }
        ]
      },
      {path: '**', component: LoginComponent},
    ]),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
