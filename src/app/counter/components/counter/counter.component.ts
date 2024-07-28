import {Component} from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy1()">+1</button>
    <button (click)="decreaseBy1()">-1</button>
    <button (click)="increaseBy(5)">+5</button>
    <button (click)="decreaseBy(5)">-5</button>
    <button (click)="resetCounter()">Reset</button>
  `
})
export class CounterComponent{
  constructor() {
  }

  public counter: number = 10;

  increaseBy1(): void{
    this.counter++;
  }

  decreaseBy1(): void{
    this.counter--;
  }

  increaseBy(value: number): void{
    this.counter +=value;
  }

  decreaseBy(value: number): void{
    this.counter -=value;
  }

  resetCounter(): void{
    this.counter =10;
  }

}
