import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent {
  wishlistItems: Product[];

  wishlistService: WishlistService;

  constructor(wishlistService: WishlistService) {
    console.log('WishlistComponent constructor');
    this.wishlistService = wishlistService;
    this.wishlistItems = wishlistService.getProducts();
  }
}
