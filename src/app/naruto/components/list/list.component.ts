import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Personajes} from "../../interfaces/personaje.interface";

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
