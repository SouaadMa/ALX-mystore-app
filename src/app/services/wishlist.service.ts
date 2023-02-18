import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private wishlistItems: Product[] = [];
  private wishlistCount = new BehaviorSubject(0);

  constructor() {}

  getProducts() {
    return this.wishlistItems;
  }

  getWishlistItemCount() {
    return this.wishlistCount;
  }

  addToWishlist(product: Product) {
    let added = false;
    for (let p of this.wishlistItems) {
      if (p.id === product.id) {
        p.amount += product.amount;
        added = true;
        break;
      }
    }
    if (!added) {
      this.wishlistItems.push(product);
    }
    this.wishlistCount.next(this.wishlistCount.value + 1);
  }

  removeProduct(product: Product) {
    for (let [index, p] of this.wishlistItems.entries()) {
      if (p.id === product.id) {
        this.wishlistItems.splice(index, 1);
        break;
      }
    }
    this.wishlistCount.next(this.wishlistCount.value - 1);
  }

  clearWishlist() {
    this.wishlistItems = [];
    this.wishlistCount.next(0);
  }

  checkout() {
    console.log('Checkout');
  }
  getTotalPrice(): number {
    return this.wishlistItems.reduce((i, j) => i + j.price * j.amount, 0);
  }
}
