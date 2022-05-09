import { AuthGuard } from './auth.guard';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'contact-details', component: ContactDetailsComponent, canActivate:[AuthGuard] },
  { path: 'customer-details/:name', component: CustomerDetailsComponent, canActivate:[AuthGuard] },
  { path: 'payment-details', component: PaymentDetailsComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
