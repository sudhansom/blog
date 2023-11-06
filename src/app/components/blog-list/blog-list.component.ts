import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Observable, map, shareReplay, tap } from 'rxjs';

import { BlogRaw } from 'src/app/models/blog.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  title = 'blog';
  isLoggedIn = this.authService.isLoggedIn;
  allPosts$: Observable<BlogRaw[]> = this.blogService.getAllPosts().pipe(
    map((item) => Object.values(item)),
    shareReplay()
  );
  constructor(
    private blogService: BlogService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.allPosts$.subscribe((posts) => {
      console.log(posts);
    });
  }
  logOut() {
    this.authService.loggedOut();
    this.isLoggedIn = false;
  }
  logIn() {
    this.authService.loggedIn();
    this.isLoggedIn = true;
  }
}
