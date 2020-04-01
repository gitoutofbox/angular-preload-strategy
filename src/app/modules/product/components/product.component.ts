import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // for(let i=0; i< 10000; i++) {
    //   console.log(i)
    // }
  }

}
