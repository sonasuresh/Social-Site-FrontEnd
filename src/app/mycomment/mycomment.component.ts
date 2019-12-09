import { Component, OnInit } from '@angular/core';
import { CommentserviceService } from '../commentservice.service';

@Component({
  selector: 'app-mycomment',
  templateUrl: './mycomment.component.html',
  styleUrls: ['./mycomment.component.css']
})
export class MycommentComponent implements OnInit {
  mycomments: Array<any>;
  selecteditem:any = {};
  itemloaded:boolean=false;
  constructor(private commentservice:CommentserviceService) { }
  deleteComment(_id: any){
    this.commentservice.deleteComment(_id).subscribe((response:any)=>{
      if(response.success){
        alert("Comment Deleted")
        this.loadComments();
       }
      else{
        alert('Error')
      }
    }) 
   }
   updateComment(){
    this.commentservice.updateComment(this.selecteditem).subscribe((response:any)=>{
      if(response.success){
        alert("Comment Updated")
       }
      else{
        alert('Error')
      }
    }) 
   }
  selectItem(item:any){
    console.log(item)
    this.selecteditem=item;
    this.itemloaded=true; 
  }
  ngOnInit() {
    this.loadComments();
  }
  loadComments(){
    this.commentservice.getmyComments().subscribe((response: any)=>{
      if(response.success){
        this.mycomments = response.message;
      } else {
        alert("An Error Occured")
      }
    }) 
  }
}
