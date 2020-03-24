import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {


  maxValue = 10;
  value = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getSpinner() {
    let spinnerValue = (this.value / this.maxValue) * 100;
    let spinnerColor = 'primary';

    if (this.value >= this.maxValue) {
      spinnerColor = 'warn';
    }

    return { value: spinnerValue, color: spinnerColor };
  }

  add() {
    this.value++;
  }

  remove() {
    this.value--;
    if (this.value < 0) {
      this.value = 0;
    }
  }

}
