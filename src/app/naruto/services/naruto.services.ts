import {Personajes} from "../interfaces/personaje.interface";
import {Injectable} from "@angular/core";
import {v4 as uuid} from "uuid";

@Injectable({
  providedIn: 'root'
})
export class NarutoServices{

    public personajes: Personajes[] = [{name: 'naruto', chakra: 100, id: uuid()}]
  agregarPersonaje(personaje: Personajes): void{

      const personajeAdd: Personajes = {
        ...personaje,
        id: uuid()
      }

    this.personajes.push(personajeAdd)

    console.log(personaje)
  }

  eliminarPersonajeById(id: string): void{
      this.personajes = this.personajes.filter(pj => pj.id !== id);
  }
}
