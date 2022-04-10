import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote!: Quote;
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  likes: number = 0;
  upvote(){
    this.likes++;
  }
  dislikes: number = 0;
  downvote(){
    this.dislikes++;
  }

  constructor() {}

  ngOnInit(): void {
  }

}

