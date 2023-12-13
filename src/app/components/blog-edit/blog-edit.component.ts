import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from '../blog-create/can-deactivate-guard.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit, CanComponentDeactivate {

  constructor() { }

  ngOnInit(): void {
  }

  canDeactivate(){
    return confirm('hey are you sure?');
  }

}
