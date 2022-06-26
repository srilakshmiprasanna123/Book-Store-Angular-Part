import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';

import { CustomerComponent } from './customer/customer.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CartComponent,
    
    CustomerComponent,
         OrdersummaryComponent,
         OrderComponent,
         RegisterComponent,
         LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
