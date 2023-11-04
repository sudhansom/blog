import { Component, OnInit } from '@angular/core';
import { BlogService } from './services/blog.service';
import { Observable, map, shareReplay } from 'rxjs';

import { BlogRaw } from './models/blog.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
