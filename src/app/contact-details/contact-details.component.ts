import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  @Input() contact={};
  products:string[]=[];
  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(
      (data)=>{this.products=data}
    );
  }


}
