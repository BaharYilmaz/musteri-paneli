import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../auth/login/login.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers:[LoginComponent]

})
export class NavComponent implements OnInit {

  constructor(private loginComp:LoginComponent) { }

  ngOnInit(): void {
  }

  logOut(){
     this.loginComp.logOut(); 
   }
   get isAuthenticated(){
    return this.loginComp.isAuthenticated;
   }

}
