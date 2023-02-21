import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  cart_length: number = 0;
  private cart_length_subscription: Subscription = new Subscription();

  constructor(private router: Router, private cartService: CartService) {
    console.log('HeaderComponent constructor');
  }

  ngOnInit() {
    this.cart_length_subscription = this.cartService.cartItemCount$.subscribe(value => {
      this.cart_length = value;
    });
  }

  onclick_home_page() {
    console.log('home page clicked');
    // navigate to home page
    this.router.navigate(['/']);
  }

  onclick_shopping_cart(): void {
    console.log('shopping cart clicked');
    // navigate to cart
    this.router.navigate(['/cart']);
  }

  onclick_wishlist(): void {
    console.log('wishlist clicked');
    // navigate to wishlist
    this.router.navigate(['/wishlist']);
  }

}
