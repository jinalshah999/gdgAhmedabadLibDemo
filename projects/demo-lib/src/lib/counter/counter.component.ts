import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
counter:number=0;
  constructor() { }

  ngOnInit() {
  }
  onPlusClick(){
    this.counter++;
  }
  onMinusClick(){
    this.counter--;
  }
}
