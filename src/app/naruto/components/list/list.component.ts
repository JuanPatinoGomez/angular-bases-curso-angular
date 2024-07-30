import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Personajes} from "../../interfaces/personaje.interface";
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-naruto-list',
  templateUrl: './list.component.html'
})
export class ListComponent{

  @Output()
  deletePersonajeEmmitter: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public personajes: Personajes[] = [];


  eliminarPersonajeListado(id: string): void{
    this.deletePersonajeEmmitter.emit(id);
  }
}
