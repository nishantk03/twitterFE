import { Component, OnInit } from '@angular/core';
import {st} from "@angular/core/src/render3";
import {TweetService} from "../_services/tweet.service";
import {Tweet} from "../model/tweet";
import {UserdataService} from "../_services/userdata.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-compose-tweet',
  templateUrl: './compose-tweet.component.html',
  styleUrls: ['./compose-tweet.component.css']
})
export class ComposeTweetComponent implements OnInit {
  tweetMsg: string = '';
  constructor(private tweetService:TweetService,
              private userdataService:UserdataService,
              private toastr: ToastrService) { }

  ngOnInit() {
  }

  postTweet(){
    let tweet:Tweet=new Tweet();
    tweet.tweet = this.tweetMsg;
    tweet.username = this.userdataService.getUserData().userName;
    this.tweetService.composeTweet(tweet).subscribe(data=>{
      console.log('Tweet ', data);
      this.tweetMsg = '';
      this.toastr.info(data[0]);
    })
  }

}
