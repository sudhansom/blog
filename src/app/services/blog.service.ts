import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BlogRaw } from '../models/blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  //apiUrl = 'http://localhost:3001/api/posts'; // npm run server (json-server);
  apiUrl = 'https://blog-posts-production-bf0f.up.railway.app/api/posts';

  constructor(private _http: HttpClient) {}

  getAllPosts(): Observable<BlogRaw> {
    return this._http.get<BlogRaw>(this.apiUrl);
  }
  getOnePost(id: string) {
    return this._http.get<BlogRaw>(`${this.apiUrl}/${id}`);
  }
  createPost(post: BlogRaw) {
    return this._http.post<BlogRaw>(this.apiUrl, post);
  }
  deletePost(id: string) {
    return this._http.delete<BlogRaw>(this.apiUrl + `/${id}`);
  }
  editPost(post: BlogRaw, id: string) {
    return this._http.put<BlogRaw>(this.apiUrl + `/${id}`, post);
  }
}
