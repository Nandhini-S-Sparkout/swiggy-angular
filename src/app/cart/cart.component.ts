import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  
  @Input() selectedItem: { name: string, price: number, quantity: number }[] = [];

  overAllTotal():number{
  let total=0;
  for(let food of this.selectedItem)
    {
      total +=  food.price * food.quantity;
      console.log(food);

    }
    return total;
  }
}
