import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bbq',
  templateUrl: './bbq.component.html',
  styleUrls: ['./bbq.component.css']
})
export class BbqComponent {
// Define static bbq details
bbqs = [
  { name: 'Tempeh skewers', price: 150 ,quantity:0},
  { name: 'Chicken kebab', price: 200,quantity:0 },
  { name: 'Boneless Wings', price: 260,quantity:0}
];

selectedItem: { name: string, price: number,quantity:number } = { name: '', price: 0,quantity:0 };


@Output() bbqSelected = new EventEmitter<{ bbqs: { name: string, price: number, quantity: number }, quantity: number }>();
  //bbqSelectedSelected: any;



selectBbq(bbqs: { name: string, price: number,quantity:number}) {
  // Set selected bbq object
  this.selectedItem = bbqs;
  // Emit selected bbq details along with quantity
  this.bbqSelected.emit({ bbqs: this.selectedItem, quantity: this.selectedItem.quantity });

}

//Method to get pizza image based on pizza name
getBbqImage(name:string):string
{
  return `assets/images/${name.toLowerCase()}.jpg`;
}
//methods to handle increment and decrement
incrementQuantity(index: number){
  this.bbqs[index].quantity++;
  
}

decrementQuantity(){
      this.selectedItem.quantity--;
    }
    totalObjectArray:any[]=[];

    parentToChild(i: number)
     {
      console.log(this.totalObjectArray);
      
      this.totalObjectArray.push(this.bbqs[i])
      
      
     }   

}
