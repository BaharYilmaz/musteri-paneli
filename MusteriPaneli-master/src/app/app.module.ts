import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'; //HttpClientModule eklendi
import {FormsModule,ReactiveFormsModule} from '@angular/forms';// form modülleri eklendi
import {AlertifyService} from './services/alertify.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';

import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
import { AuthComponent } from './components/auth/auth.component';
import { DeleteCustomerComponent } from './components/customer/delete-customer/delete-customer.component';
import { CustomerComponent } from './components/customer/customer.component';

@NgModule({
  declarations: [ //Components
    AppComponent,
    NavComponent,
    CustomerListComponent,
    LoginComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    CustomerComponent,
    AuthComponent,
    DeleteCustomerComponent,
    CustomerComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule ,//eklendi
    HttpClientModule,// eklendi
    FormsModule,ReactiveFormsModule// eklendi
  ],
  providers: [AlertifyService],//
  bootstrap: [AppComponent]

})
export class AppModule { 

  /**
   *
   */
 

}
