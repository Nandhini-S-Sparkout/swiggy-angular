import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {


    // Define static pizza details
    pizzas = [
      { name: 'Margherita', price: 10 ,quantity:0},
      { name: 'Pepperoni', price: 10,quantity:0 },
      { name: 'Veggie-pizza', price: 9,quantity:0}
    ];
  
    selectedItem: { name: string, price: number,quantity:number } = { name: '', price: 0,quantity:0 };
  
  
  @Output() pizzaSelected = new EventEmitter<{ pizza: { name: string, price: number, quantity: number }, quantity: number }>();

  
    
    selectPizza(pizza: { name: string, price: number,quantity:number}) {
      // Set selected pizza object
      this.selectedItem = pizza;
      // Emit selected pizza details along with quantity
      this.pizzaSelected.emit({ pizza: this.selectedItem, quantity: this.selectedItem.quantity });

    }

    //Method to get pizza image based on pizza name
    getPizzaImage(name:string):string
    {
      return `assets/images/${name.toLowerCase()}.jpg`;
    }
    //methods to handle increment and decrement
    incrementQuantity(index: number){
      this.pizzas[index].quantity++;
      
    }

    decrementQuantity(){
          this.selectedItem.quantity--;
        }

    totalObjectArray:any[]=[];

     parentToChild(i: number){
      
      
      this.totalObjectArray.push(this.pizzas[i])
      
      
     }   
}
    
