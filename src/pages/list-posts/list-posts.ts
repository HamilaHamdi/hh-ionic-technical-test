import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListPostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import {PostsApiService} from "../../services/postsapi.service";
import {PostsApiList} from "../../models/postsapi-list.model";
import {PostPage} from "../post/post";
@IonicPage()
@Component({
  selector: 'page-list-posts',
  templateUrl: 'list-posts.html',
})
export class ListPostsPage {
  posts:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private postsApiService:PostsApiService) {
    this.postsApiService.getPosts()
      .then(postsFetched =>{
        this.posts = postsFetched;
        // console.log(this.posts);

      });
  }

  openPage(postId){

    this.navCtrl.push('PostPage',{postid : postId} )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPostsPage');
  }

}
