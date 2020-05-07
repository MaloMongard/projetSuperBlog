import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Post} from '../models/Post.model';
import * as firebase from 'firebase';
import Datasnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

	postsSubject = new Subject<Post[]>();
	private posts: Post[];

  constructor() {
    this.getPosts();
  }

  emitPosts() {
  	this.postsSubject.next(this.posts);
  }

  savePosts() {
  	firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
    .on('value', (data: Datasnapshot) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPosts();
    });
  }

  createNewPost(newPost: Post){
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  getSinglePost(id: number){
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  removePost(post: any) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post){
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  loveItsPlus(id: number){
    this.posts[id].loveIts += 1;
    this.savePosts();
    this.emitPosts();
  }

  loveItsMoins(id: number){
    this.posts[id].loveIts -= 1;
    this.savePosts();
    this.emitPosts();
  }

}
