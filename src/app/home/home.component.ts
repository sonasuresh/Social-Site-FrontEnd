import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../postservice.service';
import { Router } from '@angular/router';
import { CommentserviceService } from '../commentservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Array<any>;
  comments: Array<any>;
  constructor(private postservice:PostserviceService,private router:Router,private commentservice:CommentserviceService) { }
  text: String;
  clickedId: String;
  ngOnInit() {
   
    this.postservice.getallPosts().subscribe((response: any)=>{
      if(response.success){
        this.posts = response.message;
      } else {
        alert("An Error Occured")
      }
    }) 
  }

  comment(_id: any){
    this.clickedId = _id;
  }
postComment(){
  this.postservice.postComment(this.clickedId, this.text).subscribe((res:any)=>{
    if(res.error){
      alert('An Error Occured')
    } else {
      alert(res.message)
    }
    this.text=''
  })
} 
viewcomment(_id:any){
  this.commentservice.getComments(_id).subscribe((response: any)=>{
    if(response.success){
      this.comments = response.message;
    } else {
      alert("An Error Occured")
    }
  }) 
}
}
