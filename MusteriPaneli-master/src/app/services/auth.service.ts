import { Injectable } from '@angular/core';
import { LoginYonetici } from '../models/LoginYonetici';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {JwtHelper, tokenNotExpired} from 'angular2-jwt';//decode token
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient:HttpClient,
    private router:Router,
    private alertifyService:AlertifyService
    ) { }

  path="https://localhost:44330/api/auth/";
  userToken:any;
  decodedToken:any;
  jwtHelper:JwtHelper=new JwtHelper();
  TOKEN_KEY="token";

  login(loginYonetici:LoginYonetici){

    //veri tipi json
    let headers=new HttpHeaders();
    headers=headers.append("Content-Type","application/json")

    //login olduktan sonra kullanıcının token ı döner 
    this.httpClient.post(this.path+"login",loginYonetici,{headers:headers,responseType:'text'}).subscribe(data=>{
      this.saveToken(data);
      this.userToken=data;
      this.decodedToken=this.jwtHelper.decodeToken(data.toString());
      this.alertifyService.success("Sisteme giriş yapıldı.");
      this.router.navigateByUrl('/customers');

    });

  }
  //token ı kaydetme 
  saveToken(token){
    
    localStorage.setItem(this.TOKEN_KEY,token); 

  }
  logOut(){
    localStorage.removeItem(this.TOKEN_KEY)
    this.alertifyService.warning("Sistemden çıkış yapıldı.");
    this.router.navigateByUrl('/login');


  }
  loggedIn(){ //token süresi geçmiş mi kontrolü
    return tokenNotExpired(this.TOKEN_KEY);
  }
  getCurrentUserId(){
    return this.jwtHelper.decodeToken(localStorage.getItem(this.TOKEN_KEY)).nameId; // ?
  }
}
