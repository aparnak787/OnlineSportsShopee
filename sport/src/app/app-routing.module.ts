import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { CreateCartComponent } from './create-cart/create-cart.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { CreatePaymentComponent } from './create-payment/create-payment.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CricketComponent } from './cricket/cricket.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FootballComponent } from './football/football.component';
import { HockyComponent } from './hocky/hocky.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UpdateCartComponent } from './update-cart/update-cart.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserGuard } from './user.guard';
import { UserlistComponent } from './userlist/userlist.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { VollyballComponent } from './vollyball/vollyball.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'cricket', component: CricketComponent,  canActivate: [UserGuard]},
  {path: 'volleyball', component: VollyballComponent,  canActivate: [UserGuard]},
  {path: 'football', component: FootballComponent,  canActivate: [UserGuard]},
  {path: 'hockey', component: HockyComponent,  canActivate: [UserGuard]},
  {path: 'addProduct', component: CreateProductComponent, canActivate : [AdminGuard]},
  {path: 'editProduct', component: EditProductComponent, canActivate : [AdminGuard]},
  {path: 'updateProduct/:id', component: UpdateProductComponent},
  {path: 'viewProduct', component: ViewProductComponent, canActivate: [UserGuard]},
  {path: 'userlist', component: UserlistComponent,  canActivate : [AdminGuard]},
 {path: 'details/:id', component: ProductDetailsComponent},
{path: 'detail/:id', component: UserDetailComponent},
  {path: 'registration', component: RegisterUserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cartDetails/:id', component: CartDetailComponent},
  {path: 'updateCart/:id', component: UpdateCartComponent}, 
  {path: 'cartList', component: CartlistComponent, canActivate: [UserGuard]},
  {path: 'createCart/:userId/:productId', component: CreateCartComponent},
  {path: 'orderlist', component: OrderlistComponent, canActivate: [UserGuard]},
  {path: 'orderdetails/:id', component: OrderDetailsComponent},
  {path: 'createorder/:price', component: CreateOrderComponent},
  {path: 'createpayment/:method', component: CreatePaymentComponent},
  {path: 'paymentList', component: PaymentlistComponent, canActivate: [AdminGuard]},
  {path: 'paymentdetails/:id', component: PaymentDetailsComponent},
  {path: 'createcard', component: CreateCardComponent},
  {path: 'cardList', component: CardlistComponent, canActivate: [UserGuard]},
  {path: 'carddetails/:id', component: CardDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


