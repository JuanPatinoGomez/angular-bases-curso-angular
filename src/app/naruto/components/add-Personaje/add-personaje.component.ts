import {Component, EventEmitter, Output} from "@angular/core";
import {Personajes} from "../../interfaces/personaje.interface";
import {NarutoServices} from "../../services/naruto.services";

@Component({
  selector: 'app-naruto-add-personaje',
  templateUrl: 'add-personaje.component.html'
})
export class AddPersonajeComponent{

  @Output()
  personajeEmitter: EventEmitter<Personajes> = new EventEmitter<Personajes>();

  public personaje: Personajes = {name:'', chakra:0};

  agregarPersonaje(): void{
    this.personajeEmitter.emit(this.personaje);
    this.personaje = {name:'', chakra:0};
  }

/*
  //lanzamientos directamente a los servicios
  constructor(private narutoService: NarutoServices) {
  }
  agregarPersonajeDirecto(): void{
    this.narutoService.agregarPersonaje(this.personaje);
  }
  */
}
