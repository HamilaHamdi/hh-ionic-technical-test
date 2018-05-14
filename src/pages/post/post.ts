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
 postItem : PostsApiList = new PostsApiList();//declaration  du model qui va recuperer les données
  commentsItem :any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private postService :PostsApiService ) {
    this.idp = this.navParams.get('postid');
    this.postService.getPostById(this.idp)
      .then(post => {
        this.postItem = post;
      })
//appel de la methode GetCommentsBypostID , elle prend en  parametre l'id de l'article. Sa reponse est affectée a l'objet commentsItem qui est utilisé a l'affichage de html.
    this.postService.GetCommentsByPostID(this.idp)
          .then(comments => {
            this.commentsItem = comments;

        console.log('this', this.commentsItem);
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
