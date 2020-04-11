import { Component, OnInit } from '@angular/core';
import {TweetService} from "../_services/tweet.service";
import {ToastrService} from "ngx-toastr";
import {UserdataService} from "../_services/userdata.service";
import {Tweet} from "../model/tweet";

@Component({
  selector: 'app-my-tweet',
  templateUrl: './my-tweet.component.html',
  styleUrls: ['./my-tweet.component.css']
})
export class MyTweetComponent implements OnInit {
  tweet: Tweet[];
  constructor(private tweetService:TweetService,
              private userdataService:UserdataService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.getMyTweets();
  }

  getMyTweets(){
    this.tweetService.getMyTweet(this.userdataService.getUserData().userName).subscribe(data=>{
      this.tweet = data;
    })
  }

  deleteTweet(id:number){
    this.tweetService.deleteTweet(id).subscribe(data=>{
      this.tweet = data;
      this.getMyTweets();
    });

  }

}
