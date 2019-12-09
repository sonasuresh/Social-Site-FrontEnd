import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider} from "angularx-social-login";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MypostsComponent } from './myposts/myposts.component';
import { CreatepostsComponent } from './createposts/createposts.component';
import { CreatepostsserviceService } from './createpostsservice.service';
import { ViewcommentComponent } from './viewcomment/viewcomment.component';
import { MycommentComponent } from './mycomment/mycomment.component';
import { CommentserviceService } from './commentservice.service';
import { PostserviceService } from './postservice.service';
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("95570180265-sl070u6afhtnu82h8tslnt1qiurkn5gp.apps.googleusercontent.com")
  },
]);
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    MypostsComponent,
    CreatepostsComponent,
    ViewcommentComponent,
    MycommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    HttpClient,
    CreatepostsserviceService,
    CommentserviceService,
    PostserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
