import { Component } from '@angular/core';
import {Personajes} from "../interfaces/personaje.interface";
import {NarutoServices} from "../services/naruto.services";

@Component({
  selector: 'app-naruto-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {

  constructor(private narutoService: NarutoServices) {
  }

  get listadoPersonajes(): Personajes[]{
    return [...this.narutoService.personajes];
  }


  agregarNuevoPersonaje(personaje: Personajes): void{
    this.narutoService.agregarPersonaje(personaje);
  }

  eliminarPersonaje(id: string): void{
    this.narutoService.eliminarPersonajeById(id);
  }

}
