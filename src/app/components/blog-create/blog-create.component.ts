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
    date: new FormControl(new Date(), Validators.required),
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
  id = 0;

  ngOnInit(): void {
    this.id = +this.route?.snapshot?.params['id'];
    console.log(this.myForm.value);
    if (this.id) {
      this.submit = false;
      this.blogService.getOnePost(this.id).subscribe((item) => {
        this.myForm.patchValue({
          id: item.id,
          title: item.title,
          author: item.author,
          content: item.content,
          date: item.date,
        });
      });
    }
  }

  submitForm() {
    if (this.submit) {
      this.blogService.createPost(this.myForm.value).subscribe((res) => {
        this.router?.navigate(['/']);
      });
    } else {
      this.blogService.editPost(this.myForm.value, this.id).subscribe((res) => {
        this.router?.navigate(['/']);
      });
    }
  }
}
