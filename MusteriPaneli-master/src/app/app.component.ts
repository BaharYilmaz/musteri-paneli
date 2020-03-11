import { Component } from '@angular/core';
import { LoginComponent } from './components/auth/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoginComponent]

})
export class AppComponent {
  title = 'MusteriPaneli';
  constructor(private loginCom:LoginComponent) {
   
    
  }
  Isaut(){
    return this.loginCom.isAuthenticated;
   }
}
