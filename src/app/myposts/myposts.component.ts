import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../postservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit {
  myposts: Array<any>;
  selecteditem:any = {};
  itemloaded:boolean=false;
  constructor(private postservice:PostserviceService) { }

  deletePost(_id: any){
   this.postservice.deletePost(_id).subscribe((response:any)=>{
     if(response.success){
       alert("Post Deleted")
       this.loadPosts();
      }
     else{
       alert('Error')
     }
   }) 
  }
  updatePost(){
    this.postservice.updatePost(this.selecteditem).subscribe((response:any)=>{
      if(response.success){
        alert("Post Updated")
       }
      else{
        alert('Error')
      }
    }) 
   }
  selectItem(item:any){
    //console.log(item)
    this.selecteditem=item;
    this.itemloaded=true; 
  }

  ngOnInit() {
   this.loadPosts() 
  }
  loadPosts(){
  this.postservice.getmyPosts().subscribe((response: any)=>{
    if(response.success){
      this.myposts = response.message;
    } else {
      alert("An Error Occured")
    }
  }) 
}
}
