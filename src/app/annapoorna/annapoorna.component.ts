import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-annapoorna',
  templateUrl: './annapoorna.component.html',
  styleUrls: ['./annapoorna.component.css']
})
export class AnnapoornaComponent {

  // Define static bbq details
annapoornas = [
  { name: 'Idli sambar', price: 50 ,quantity:0},
  { name: 'Gheeroast', price: 80,quantity:0 },
  { name: 'Fullmeals', price: 200,quantity:0}
];

selectedAnnapoorna: { name: string, price: number,quantity:number } = { name: '', price: 0,quantity:0 };


@Output() annapoornaSelected = new EventEmitter<{ bbqs: { name: string, price: number, quantity: number }, quantity: number }>();
 
selectAnnapoorna(annapoornas: { name: string, price: number,quantity:number}) {
  // Set selected bbq object
  this.selectedAnnapoorna = annapoornas;
  // Emit selected bbq details along with quantity
  this.annapoornaSelected.emit({ bbqs: this.selectedAnnapoorna, quantity: this.selectedAnnapoorna.quantity });

}

//Method to get pizza image based on pizza name
getAnnapoornaImage(name:string):string
{
  return `assets/images/${name.toLowerCase()}.jpg`;
}
//methods to handle increment and decrement
incrementQuantity(index: number){
  this.annapoornas[index].quantity++;
  
}

decrementQuantity(){
      this.selectedAnnapoorna.quantity--;
    }
    totalObjectArray:any[]=[];

    parentToChild(i: number)
     {
      console.log(this.totalObjectArray);
      
      this.totalObjectArray.push(this.annapoornas[i])
      
      
     }   

}


