import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooditemComponent } from './fooditem/fooditem.component';
import { CartComponent } from './cart/cart.component';
import { PizzaComponent } from './pizza/pizza.component';
import { BbqComponent } from './bbq/bbq.component';
import { DessertComponent } from './dessert/dessert.component';
import { AnnapoornaComponent } from './annapoorna/annapoorna.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooditemComponent,
    CartComponent,
    PizzaComponent,
    BbqComponent,
    DessertComponent,
    AnnapoornaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
