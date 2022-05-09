import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Customer } from '../customer';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  name:string='';
  customer:Customer;
  customers:Customer[]=[];
  constructor(private route: ActivatedRoute, private router:Router, private service:CustomerService) {
    this.customer={}
  }
  ngOnInit(): void {
    let param = this.route.snapshot.paramMap.get('name');
    this.name = param?param:'';
    // this.service.getCustomer().subscribe(
    //   {
    //     next: (data:any) => {
    //       this.customer={ ...data};
    //       console.log('Subscribed data from server')
    //     },
    //     error: (err:Error) => {
    //       console.error('Error in receiving customers');
    //       console.error(err);
    //     },
    //     complete: () => {
    //       console.log('Consumption completed....');
    //     }
    //   });

    this.service.getCustomers().subscribe((data:Customer[])=>{
      this.customers = data;
    });
    console.log(this.customer);
  }

  moveToHome(){
    this.router.navigate(['/payment-details'],{queryParams:{amount:2300}});
  }
}
