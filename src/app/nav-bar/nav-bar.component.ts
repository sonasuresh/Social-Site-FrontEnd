import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';

import { SocialUser } from "angularx-social-login";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
  }
  signOut(): void {
   // this.router.navigate([''])
    console.log('I am called')
    this.authService.signOut()
      localStorage.clear()
      this.router.navigate([''])
  }

}
