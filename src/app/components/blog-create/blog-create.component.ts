import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BlogRaw } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.scss'],
})
export class BlogCreateComponent implements OnInit, CanComponentDeactivate {
  myForm: FormGroup = new FormGroup({
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
  id = '';

  ngOnInit(): void {
    this.id = this.route?.snapshot?.params['id'];
    if (this.id) {
      this.submit = false;
      this.blogService.getOnePost(this.id).subscribe((item) => {
        this.myForm.patchValue({
          title: item.title,
          author: item.author,
          content: item.content,
          date: item.date.toLocaleDateString,
        });
      });
    }
  }

  submitForm() {
    if (this.submit) {
      this.blogService.createPost(this.myForm.value).subscribe((res) => {
        this.router?.navigate(['../', { relativeTo: this.route }]);
      });
    } else {
      this.blogService.editPost(this.myForm.value, this.id).subscribe((res) => {
        this.router?.navigate(['/detail', this.id]);
      });
    }
  }
  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if(this.myForm.dirty){
      return confirm('Are you sure?');
    }
    return true;
  }
}
