import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooditemComponent } from './fooditem/fooditem.component';
import { PizzaComponent } from './pizza/pizza.component';
import { BbqComponent } from './bbq/bbq.component';
import { DessertComponent } from './dessert/dessert.component';
import { AnnapoornaComponent } from './annapoorna/annapoorna.component';

const routes: Routes = [
  {path:'',component:FooditemComponent},
  {path:'pizza',component:PizzaComponent},
  {path:'bbq',component:BbqComponent},
  {path:'dessert',component:DessertComponent},
  {path:'annapoorna',component:AnnapoornaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
