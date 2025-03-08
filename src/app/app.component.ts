import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ecommerce Platform';
  products = [
    { id: 1, name: 'Product 1', description: 'This is product 1', image: 'https://via.placeholder.com/500x300', price: 10.99 },
    { id: 2, name: 'Product 2', description: 'This is product 2', image: 'https://via.placeholder.com/500x300', price: 9.99 },
    { id: 3, name: 'Product 3', description: 'This is product 3', image: 'https://via.placeholder.com/500x300', price: 12.99 },
  ];
  bestSellers = [
    { id: 1, name: 'Best Seller 1', description: 'This is best seller 1', image: 'https://via.placeholder.com/500x300', price: 15.99 },
    { id: 2, name: 'Best Seller 2', description: 'This is best seller 2', image: 'https://via.placeholder.com/500x300', price: 18.99 },
    { id: 3, name: 'Best Seller 3', description: 'This is best seller 3', image: 'https://via.placeholder.com/500x300', price: 20.99 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(product: any) {
    console.log('Adding to cart:', product);
    // Add product to cart logic here
  }

  removeFromCart(product: any) {
    console.log('Removing from cart:', product);
    // Remove product from cart logic here
  }
}