import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  sidenav: any;
  
  constructor(private router: Router) {
    console.log('HeaderComponent constructor');
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

}
