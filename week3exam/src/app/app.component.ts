import { Component } from '@angular/core';
import { Phones } from './phones';
import { PHONES } from './phoneslist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exam3';
p=PHONES;
activateform:boolean=false;
image:string[]=["https://i.gadgets360cdn.com/products/large/1526892165_635_Samsung_Galaxy_J6.jpg",
"data:image/jpeg;base64,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",
"data:image/jpeg;base64,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",
"https://www.91-img.com/pictures/129556-v10-xiaomi-redmi-note-6-pro-mobile-phone-large-1.jpg"];
newtitle:string;
newdescription:string;
newquantity:string;
i:number = 0;
next(){
  this.i++;
}
previous(){
  this.i--;
}
edit(){
  this.activateform=true;
  
}
print(){
  this.p[this.i].title=this.newtitle;
  this.p[this.i].description=this.newdescription;
  this.p[this.i].quantity=this.newquantity;
  this.activateform=false;
}
delete(){
  this.i--;
}


















  constructor(){

  }
  ngOnInit(){

  }
}
