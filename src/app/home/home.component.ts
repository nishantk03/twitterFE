import { Component, OnInit } from '@angular/core';
import {TweetService} from "../_services/tweet.service";
import {AllTweet} from "../model/allTweets";
import {UsersService} from "../_services/users.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tweetContent: AllTweet[] = [];

  constructor(private tweetService:TweetService,
              private usersService:UsersService) { }

  ngOnInit() {
    this.getAllTweets();
  }

  getAllTweets(){
    this.tweetService.getAllTweet().subscribe(allTweets=>{
      allTweets.forEach(data=>{
        let tweet:AllTweet = new AllTweet();
        tweet.tweet = data.tweet;
        let user: string[] = [];
        user.push(data.username);
        this.usersService.getSelectedUsers(user).subscribe(userData=>{
          tweet.name = userData[0].firstName + ' ' + userData[0].lastName;
          tweet.pic = userData[0].pic;
          tweet.state = userData[0].state;
          this.tweetContent.push(tweet);
          user = [];
        })
      })
    })
    console.log('Home data ', this.tweetContent);
  }

}
