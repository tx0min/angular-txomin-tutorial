import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product,  products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  // productId: number | undefined;

  constructor(private route: ActivatedRoute) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      description: ''
    };
  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    // // Find the product that correspond with the id provided in route.
     this.product = products.find(product => product.id === productIdFromRoute);


    
    //console.log(this.product);
  }
}
