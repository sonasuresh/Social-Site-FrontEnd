import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MypostsComponent } from './myposts/myposts.component';
import { CreatepostsComponent } from './createposts/createposts.component';
import { ViewcommentComponent } from './viewcomment/viewcomment.component';
import { MycommentComponent } from './mycomment/mycomment.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'myposts',component:MypostsComponent},
  {path:'createposts',component:CreatepostsComponent},
  {path:'viewcomment',component:ViewcommentComponent},
  {path:'mycomment',component:MycommentComponent},
  {path: '', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
