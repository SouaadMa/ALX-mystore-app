import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  cartItems: Product[] = [];
  total: number = 0;
  checkoutForm: FormGroup = new FormGroup({});

  router: Router;

  constructor(
    private cartService: CartService,
    router: Router,
    private fb: FormBuilder
  ) {
    this.router = router;
    this.checkoutForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(3)]],
      card: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
          Validators.pattern('[0-9]*'),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getProducts();
    this.total = this.cartService.getTotalPrice();
  }

  onSubmit() {
    this.cartService.clearCart();
    console.warn('Your order has been submitted', this.cartItems);
    // navigate to confirmation page
    this.router.navigate(['/confirmation/' + this.checkoutForm.value.name]);
  }
}
