import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  amount:number=0;
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.amount = params.amount;
    })
  }

}
