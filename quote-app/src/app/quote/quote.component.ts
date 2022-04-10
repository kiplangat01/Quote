import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote: Quote[] = [
    
  new Quote (1,'mandela','hope','May your choices reflect your hopes, not your fears.','Nelson Mandela', new Date(2019,7,12),0,0),
  new Quote (2,'obama','Hardwork','We did not come to fear the future. We came here to shape it.','kiplangat meshack',new Date(2019,7,14),0,0),
  ]
  get myQuotes(){
 
    return this.quote.sort((a,b)=>{
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  } 

  quoteAdded(quote: Quote){
    let arraysize = this.quote.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }
    
  quotedelete(isRead: boolean, index:number){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quote.splice(index,1);
      }
      
    }
  }
     
    constructor() { }  
  

  ngOnInit(): void {
  }

}

