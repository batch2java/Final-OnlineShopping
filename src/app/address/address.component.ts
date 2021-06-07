import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addresses:any='';
  constructor(private service:AddressService) { }
 
  ngOnInit(): void {
    this.service.getAddress().subscribe(mydata => {
      this.addresses = mydata;
      console.log(this.addresses);//optional 
    });
 
}
}