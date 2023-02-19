import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: Product[];
  totalPrice: number = 0;
  private price_subscription: Subscription = new Subscription();

  cartService: CartService;

  constructor(cartService: CartService, private router: Router) {
    console.log('CartComponent constructor');
    this.cartService = cartService;
    this.cartItems = cartService.getProducts();
  }

  ngOnInit() {
    this.price_subscription = this.cartService.totalPrice$.subscribe(value => {
      this.totalPrice = value;
    });
  }

  changeQuantity(product: Product) {
    this.cartService.refreshTotalPrice();
  }

  checkout() {
    this.cartService.checkout();
    this.router.navigate(['/checkout']);
  }

  ngOnDestroy() {
    this.price_subscription.unsubscribe();
  }
}
