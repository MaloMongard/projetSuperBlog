import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/Post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

	posts: Post[];
	postsSubscription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  	this.postsSubscription = this.postsService.postsSubject.subscribe(
  		(posts: Post[]) => {
  			this.posts = posts;
  		}
  	);
  	this.postsService.getPosts();
  	this.postsService.emitPosts();
  }

  ngOnDestroy() {
  	this.postsSubscription.unsubscribe();
  }

}
