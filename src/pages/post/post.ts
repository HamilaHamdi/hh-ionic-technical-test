import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import {PostsApiService} from "../../services/postsapi.service";
import {PostsApiList} from "../../models/postsapi-list.model";
@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
 idp = null;
 postItem : PostsApiList = new PostsApiList();  //declaration  du model qui va recuperer les données
  constructor(public navCtrl: NavController, public navParams: NavParams, private postService :PostsApiService ) {
    this.idp = this.navParams.get('postid');
    this.postService.getPostById(this.idp)
      .then(post => {
        this.postItem = post;
        //console.log('this', this.postItem);
      })
  }
  ionViewDidLoad(){
    console.log("enter");

  }
  ionViewDidEnter() {
    console.log('postItem', this.postItem);
    console.log('ionViewDidLoad PostPage');

  }

}
