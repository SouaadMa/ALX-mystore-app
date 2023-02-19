import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product | null;
  @Input() isInCart: boolean = false;
  @Input() isInWishList: boolean = false;
  @Output() changeQuantity: EventEmitter<Product> = new EventEmitter();
  quantity: number = 1;

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService
  ) {
    this.product = new Product();
  }

  ngOnInit(): void {
    if (this.isInCart) {
      this.quantity = this.product ? this.product.amount : 1;
    }
  }

  addToCart(arg0: Product | null): void {
    if (arg0) {
      arg0.amount = this.quantity;
      if (this.isInWishList) {
        this.removeFromWishList(arg0);
      }
      this.cartService.addToCart(arg0);
      window.alert('Product added to cart');
    } else {
      window.alert('Product not added to cart');
    }
  }

  addToWishList(arg0: Product | null): void {
    if (arg0) {
      this.wishlistService.addToWishlist(arg0);
      window.alert('Product added to wishlist');
    } else {
      window.alert('Product not added to wishlist');
    }
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
    if (arg0) {
      this.wishlistService.removeProduct(arg0);
      window.alert('Product removed from wishlist');
    } else {
      window.alert('Product not removed from wishlist');
    }
  }

  changeQuantityInCart(arg0: Product | null) {
    if (arg0) {
      console.log('changeQuantityInCart');
      console.log(this.quantity);
      arg0.amount = this.quantity;
      this.changeQuantity.emit(arg0);
    }
  }
}
