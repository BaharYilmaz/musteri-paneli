import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private router : Router
  ) { }

  loginYonetici:any={}

  ngOnInit(): void {
    if(this.isAuthenticated)
    {
     this.router.navigateByUrl("/customers");
    }
  }

  //auth servise giriş formunu gönderme
  login(){
    this.authService.login(this.loginYonetici); 
  }
  logOut(){
    this.authService.logOut(); 
  }
  get isAuthenticated(){
    return this.authService.loggedIn();
  }

}
