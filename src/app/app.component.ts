import { Component, OnInit } from '@angular/core';
import { BlogService } from './services/blog.service';
import { BlogRaw } from './models/blog.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'blog';
  constructor(private blogService: BlogService) {}

  ngOnInit() {}
}
