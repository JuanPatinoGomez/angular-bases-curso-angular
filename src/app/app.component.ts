import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola mundo';

  //Toda esta logica que se hizo aca se puede eliminar ya que se paso toda a un nuevo componente (counter.component)
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
