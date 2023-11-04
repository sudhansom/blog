import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogRaw } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}
  post?: BlogRaw;
  id = 0;

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.blogService.getOnePost(this.id).subscribe((item) => {
      this.post = item;
    });
  }

  deletePost() {
    this.blogService.deletePost(this.id).subscribe();
  }
}
