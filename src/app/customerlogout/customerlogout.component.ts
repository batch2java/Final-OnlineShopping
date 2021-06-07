import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerlogout',
  templateUrl: './customerlogout.component.html',
  styleUrls: ['./customerlogout.component.css']
})
export class CustomerlogoutComponent implements OnInit {

  constructor(private router:Router){ }

  ngOnInit(): void {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

}
