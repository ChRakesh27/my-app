import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-textfeild',
  templateUrl: './textfeild.component.html',
  styleUrls: ['./textfeild.component.css']
})
export class TextfeildComponent implements OnInit {
  
  constructor() { }
  ngOnInit(): void {
  }
  
  buttonValue : string = '';
  total : string = '';
  answer : number = 0; 
  temp : string = '';

  textenter(value:string){
    this.buttonValue += value;
    console.log(this.buttonValue);  
} 
eql(){
  if(this.buttonValue !== ''){
    this.buttonValue= eval(this.buttonValue);
  }
  }
  clear(){
    this.buttonValue = '';
    this.answer = 0;
  }

  bs(){
     this.buttonValue = this.buttonValue.substring(0 , this.buttonValue.length-1);
  }

}
