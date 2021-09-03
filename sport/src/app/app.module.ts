import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewProductComponent } from './view-product/view-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { UpdateCartComponent } from './update-cart/update-cart.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CreateCartComponent } from './create-cart/create-cart.component';
import { AdminGuard } from './admin.guard';
import { LoginService } from './login.service';
import { CricketComponent } from './cricket/cricket.component';
import { VollyballComponent } from './vollyball/vollyball.component';
import { FootballComponent } from './football/football.component';
import { HockyComponent } from './hocky/hocky.component';
import { HomeComponent } from './home/home.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CreatePaymentComponent } from './create-payment/create-payment.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { CardDetailComponent } from './card-detail/card-detail.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    EditProductComponent,
    UpdateProductComponent,
    ViewProductComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterUserComponent,
    UserlistComponent,
    UserDetailComponent,
    CartlistComponent,
    UpdateCartComponent,
    CartDetailComponent,
    CreateCartComponent,
    CricketComponent,
    VollyballComponent,
    FootballComponent,
    HockyComponent,
    HomeComponent,
    CreateOrderComponent,
    OrderlistComponent,
    OrderDetailsComponent,
    CreatePaymentComponent,
    PaymentlistComponent,
    PaymentDetailsComponent,
    CreateCardComponent,
    CardlistComponent,
    CardDetailComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    Ng2OrderModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [
    AdminGuard,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
