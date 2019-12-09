import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, Validators  , FormArray, NgForm, FormGroup } from '@angular/forms';
import{CreatepostsserviceService} from 'src/app/createpostsservice.service';

@Component({
  selector: 'app-createposts',
  templateUrl: './createposts.component.html',
  styleUrls: ['./createposts.component.css']
})
export class CreatepostsComponent implements OnInit {
  createpostsForm: FormGroup
  constructor(private formBuilder: FormBuilder,private createpostsservice:CreatepostsserviceService) { }

  ngOnInit() {
    this.createForm()
  }
  createForm() {
    this.createpostsForm = this.formBuilder.group({
      postTitle: ['',Validators.required],
      postText:['',Validators.required],
      postLink:['',Validators.required],
      postImage:['',Validators.required],
      email:['',Validators.required]
    });
}
onSubmit() {
    this.createpostsservice.createposts(this.createpostsForm.value).subscribe((res:any)=>{
      if(res.error){
        alert('An Error Occured')
      } else {
        alert(res.message)
      }
    })
  

}
}
