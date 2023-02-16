import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    HeaderComponent,
    CartComponent,
    ProductItemDetailsComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
