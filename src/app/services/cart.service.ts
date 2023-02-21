import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private cartItems: Product[] = [];
  private cartItemCount = new BehaviorSubject(0);
  private totalPrice = new BehaviorSubject(0);
  totalPrice$ = this.totalPrice.asObservable();

  constructor() {}

  getProducts() {
    this.totalPrice.next(this.getTotalPrice());
    return this.cartItems;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  refreshTotalPrice() {
    this.totalPrice.next(this.getTotalPrice());
  }

  addToCart(product: Product) {
    let added = false;
    for (let p of this.cartItems) {
      if (p.id === product.id) {
        p.amount += product.amount;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cartItems.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
    this.totalPrice.next(this.getTotalPrice());
  }

  removeProduct(product: Product) {
    for (let [index, p] of this.cartItems.entries()) {
      if (p.id === product.id) {
        this.cartItems.splice(index, 1);
        break;
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
    this.totalPrice.next(this.getTotalPrice());
  }

  clearCart() {
    this.cartItems = [];
    this.cartItemCount.next(0);
    this.totalPrice.next(0);
  }

  checkout() {
    console.log('Checkout');
  }
  getTotalPrice(): number {
    let sum = 0;
    for (let p of this.cartItems) {
      sum += p.price * p.amount;
    }
    return sum;
  }
}
