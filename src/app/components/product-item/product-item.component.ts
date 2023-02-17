import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product | null;
  @Input() isInCart: boolean = false;
  @Input() isInWishList: boolean = false;

  constructor(private cartService: CartService) {
    this.product = new Product();
  }

  ngOnInit(): void {}

  addToCart(arg0: Product | null): void {
    if (arg0) {
      this.cartService.addToCart(arg0);
      window.alert('Product added to cart');
    } else {
      window.alert('Product not added to cart');
    }
  }

  addToWishList(arg0: Product | null) {
    throw new Error('Method not implemented.');
  }

  removeFromCart(arg0: Product | null) {
    if (arg0) {
      this.cartService.removeProduct(arg0);
      window.alert('Product removed from cart');
    } else {
      window.alert('Product not removed from cart');
    }
  }

  removeFromWishList(arg0: Product | null) {
    throw new Error('Method not implemented.');
  }
}
