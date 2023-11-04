import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BlogRaw } from '../models/blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  apiUrl = 'http://localhost:5000/blogs';

  constructor(private _http: HttpClient) {}

  getAllPosts(): Observable<BlogRaw> {
    return this._http.get<BlogRaw>(this.apiUrl);
  }
  getOnePost(id: number) {
    return this._http.get<BlogRaw>(`${this.apiUrl}/${id}`);
  }
  createPost(post: BlogRaw) {
    return this._http.post<BlogRaw>(this.apiUrl, post);
  }
  deletePost(id: number) {
    return this._http.delete<BlogRaw>(this.apiUrl + `/${id}`);
  }
}
