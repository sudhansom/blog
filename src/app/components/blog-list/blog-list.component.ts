import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogRaw } from 'src/app/models/blog.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  @Input() allPosts$ = new Observable<BlogRaw[]>();

  constructor() {}

  ngOnInit(): void {}
}
