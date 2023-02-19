import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css'],
})
export class ProductItemDetailsComponent {
  product: Product = new Product();
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.setProduct();
  }

  setProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.product = this.products.find(
        (product) => product.id === id
      ) as Product;
      if (!this.product) {
        this.product = new Product();
      }
    });
  }

  addToCart(): void {
    this.cartService.addToCart(this.product);
    window.alert('Product added to cart');
  }

  addToWishlist(): void {
    this.wishlistService.addToWishlist(this.product);
    window.alert('Product added to wishlist');
  }
}
