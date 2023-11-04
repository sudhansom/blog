import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BlogRaw } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.scss'],
})
export class BlogCreateComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl(null, Validators.required),
    author: new FormControl(null, Validators.required),
    content: new FormControl(null, Validators.required),
    date: new FormControl(new Date()),
  });

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) {}
  post?: BlogRaw;
  submit = true;
  title = '';
  routes?: Route;

  ngOnInit(): void {
    let id = +this.route?.snapshot?.params['id'];
    console.log(this.myForm.value);
    if (id) {
      this.submit = false;
      this.blogService.getOnePost(id).subscribe((item) => {
        this.post = item;
        this.myForm.value.id = this.post?.id;
        this.myForm.value.title = this.post?.title;
        this.myForm.value.author = this.post?.author;
        this.myForm.value.content = this.post?.content;
        this.myForm.value.date = this.post?.date;
        this.title = this.myForm.value.title;
      });
    }
  }

  submitForm() {
    this.blogService.createPost(this.myForm.value).subscribe((res) => {
      this.router?.navigate(['/']);
    });
  }
}
