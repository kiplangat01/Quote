import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote: Quote[] = [
    
  new Quote (1,'Jared','Living','The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela', new Date(2019,7,12),0,0),
  new Quote (2,'Zimmer man','Hardwork','The way to get started is to quit talking and begin doing.','Walt Disney',new Date(2019,7,14),0,0),
  ]
  get myQuotes(){
    return this.quote.sort((a,b)=>{
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }
  
    constructor() { }  
  

  ngOnInit(): void {
  }

}
