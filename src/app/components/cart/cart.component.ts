import { Component, Inject } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: Product[];
  totalPrice: number = 0;

  cartService: CartService;

  constructor(cartService: CartService, private router: Router) {
    console.log('CartComponent constructor');
    this.cartService = cartService;
    this.cartItems = cartService.getProducts();
    this.totalPrice = cartService.getTotalPrice();
  }

  checkout() {
    this.cartService.checkout();
    this.router.navigate(['/checkout']);
  }
}
