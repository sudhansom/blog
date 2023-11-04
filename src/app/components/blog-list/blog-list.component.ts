import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Observable, map, shareReplay } from 'rxjs';

import { BlogRaw } from 'src/app/models/blog.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  title = 'blog';
  allPosts$: Observable<BlogRaw[]> = this.blogService.getAllPosts().pipe(
    map((item) => Object.values(item)),
    shareReplay()
  );
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.allPosts$.subscribe((posts) => {
      console.log(posts);
    });
  }
}
