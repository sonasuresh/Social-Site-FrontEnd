import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommentserviceService {

  constructor(private http: HttpClient) { }
  getmyComments() {

    return this.http.get("http://localhost:3000/comment/getmyComments/" + JSON.parse(localStorage.getItem('user')).email)
  }
  deleteComment(_id:any){
    const body={
      id:_id
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:3000/comment/delete", body).pipe(map(res => res, { 'headers': headers }));
  }

  getComments(_id:any) {

    return this.http.get("http://localhost:3000/comment/getComments/" +_id);
  }
  updateComment(selecteditem:any){
    const body={
      id:selecteditem._id,
      commentText:selecteditem.commentText,
    
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:3000/comment/update", body).pipe(map(res => res, { 'headers': headers }));
  }
}
