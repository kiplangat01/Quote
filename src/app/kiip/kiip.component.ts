import { Component } from "@angular/core";

@Component({
    selector: 'nobie',
    templateUrl: './kiip.component.html',
    styleUrls: ['./kiip.component.css']
  })
  export class meshComponent {
    
    change= 'btn btn-success';
    constructor() {}

    ngOnInit(): void {
      setTimeout(() => {
        this.change = 'btn btn-primary';
      }, 10000);
    }

    
    
  }

