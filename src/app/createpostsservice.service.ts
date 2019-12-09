import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreatepostsserviceService {

  constructor(private http:HttpClient) { }
  createposts(data: any) {
    const body = {
      postTitle: data.postTitle,
      postText: data.postText,
      postLink: data.postLink,
      postImage: data.postImage,
      email: data.email
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:3000/post/newPost", body).pipe(map(res => res, { 'headers': headers }));
  }
}
