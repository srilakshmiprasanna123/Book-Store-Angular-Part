import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"cart",component:CartComponent},
  {path:"customer",component:CustomerComponent},
  {path:"orderSummary",component:OrdersummaryComponent},
  {path:"order",component:OrderComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"",redirectTo:"/login",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
