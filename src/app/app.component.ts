import { Component, OnInit } from '@angular/core';
import { BlogService } from './services/blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'blog';
  allPosts = this.blogService.getAllPosts();
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.allPosts = this.blogService.getAllPosts();
    this.allPosts.subscribe((post) => {
      console.log('postId:', post?.id);
    });
  }
}
