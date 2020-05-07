import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/Post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

	@Input() id;
	post: Post;

  constructor(private router: Router,
  			private postsService: PostsService) { }

  ngOnInit() {
  	this.post = new Post('', '');
	this.postsService.getSinglePost(this.id).then(
		(post: Post) => {
			this.post = post;
		}
	);  	
  }

  onLoveIts() {
  	this.postsService.loveItsPlus(this.id);
  }

  onNoLoveIts() {
  	this.postsService.loveItsMoins(this.id);
  }

  onDeletePost(post: Post){
  	this.postsService.removePost(post);
  }

}
