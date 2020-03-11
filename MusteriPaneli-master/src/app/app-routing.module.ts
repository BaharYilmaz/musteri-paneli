import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './components/customer/delete-customer/delete-customer.component';

//yollar düzenlendi

const routes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "customers", component: CustomerListComponent},
  { path: "add-customer", component: AddCustomerComponent},
  { path: "edit-customer/:musteriId", component: EditCustomerComponent},
  { path: "delete-customer/:musteriId", component: DeleteCustomerComponent},

  { path: "**", redirectTo: "customers", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }