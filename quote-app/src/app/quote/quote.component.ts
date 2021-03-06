import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote: Quote[] = [
    
  new Quote (1,'MANDELA','hope','Taking responsibility - practicing 100 percent responsibility every day - is about seeing ourselves not as right or wrong, but as an agent, chooser, problem solver, and learner in the complex interrelationships of our lives so that we can better integrate with the people and world around us. When we do this, we enjoy a better and more productive way to live and lead."','Nelson Mandela', new Date(2019,7,12),0,0),
  new Quote (2,'OBAMA','Hardwork','Most of those who have succeeded in life can trace their success back to the essential education they obtained from parents, teachers and/ or friends','kiplangat meshack',new Date(2019,7,14),0,0),
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

