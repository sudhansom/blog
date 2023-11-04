import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  apiUrl = 'http://localhost:5000/posts';

  constructor(private _http: HttpClient) {}

  getAllPosts(): Observable<{ id: number; title: string; author: string }> {
    return this._http.get<{ id: number; title: string; author: string }>(
      this.apiUrl
    );
  }
}
