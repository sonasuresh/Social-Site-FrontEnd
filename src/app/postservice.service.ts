import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(private http: HttpClient) { }
  getallPosts() {
    return this.http.get("http://localhost:3000/post/getallPost/")
  }
  getmyPosts() {

    return this.http.get("http://localhost:3000/post/getmyPosts/" + JSON.parse(localStorage.getItem('user')).email)
  }
  deletePost(_id:any){
    const body={
      id:_id
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:3000/post/deletePost", body).pipe(map(res => res, { 'headers': headers }));
  }

  postComment(postId: any, commentText: any){
    const body={
      commentText:commentText,
      postId:postId, 
      email:JSON.parse(localStorage.getItem('user')).email
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:3000/comment/newComment", body).pipe(map(res => res, { 'headers': headers }));
  }
  updatePost(selecteditem:any){
    const body={
      id:selecteditem._id,
      postText:selecteditem.postText,
      postLink:selecteditem.postLink,
      postImage:selecteditem.postImage,
      email:selecteditem.email
    
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:3000/post/update", body).pipe(map(res => res, { 'headers': headers }));
  }
}
