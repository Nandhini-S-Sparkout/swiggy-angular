import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent {
// Define static dessert details
desserts = [
  { name: 'Banana split', price: 160,quantity:0},
  { name: 'Chocolate bullets', price: 120 ,quantity:0},
  { name: 'Banoffee pies', price: 170,quantity:0 }
 
];

selectedDessert: { name: string, price: number,quantity:number } = { name: '', price: 0,quantity:0 };


@Output() dessertSelected = new EventEmitter<{ desserts: { name: string, price: number, quantity: number }, quantity: number }>();

selectDessert(desserts: { name: string, price: number,quantity:number}) {
  // Set selected dessert object
  this.selectedDessert = desserts;
  // Emit selected dessert details along with quantity
  this.dessertSelected.emit({ desserts: this.selectedDessert, quantity: this.selectedDessert.quantity });

}

//Method to get dessert image based on dessert name
getDessertImage(name:string):string
{
  return `assets/images/${name.toLowerCase()}.jpg`;
}
//methods to handle increment and decrement
incrementQuantity(index: number){
  this.desserts[index].quantity++;
  
}

decrementQuantity(){
      this.selectedDessert.quantity--;
    }
    totalObjectArray:any[]=[];

    parentToChild(i: number)
     {
      console.log(this.totalObjectArray);
      
      this.totalObjectArray.push(this.desserts[i])
      
      
     }   

}
