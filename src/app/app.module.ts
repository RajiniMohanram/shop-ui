import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { HttpInterceptorService } from './http-interceptor.service';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './product/product.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    ContactDetailsComponent,
    PaymentDetailsComponent,
    CustomerFormComponent,
    LoginComponent,
    ContactComponent,
    ProfileComponent,
    ProductComponent,
    ViewContactComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
