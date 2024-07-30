import {Component} from "@angular/core";
import {Character} from "../interfaces/character.interface";
import {DbzService} from "../services/dbz.service";

@Component({
  selector:'app-dbz-main-page',
  templateUrl:'./main-page-component.html'
})
export class MainPageComponent{

  constructor(private dbzServicie: DbzService) {
  }

  get characters(): Character[]{
    return [...this.dbzServicie.characters]; // para que de cierta manera clone el listado y no haga referencia al listado original
  }

  onDeleteCharacter(id:string): void{
      this.dbzServicie.onDeleteCharacterById(id);
  }

  onNewCharacter(character: Character):void{
    this.dbzServicie.addNewCharacter(character);
  }

  /*
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Vegeta',
      power: 7500
    },
  ];


  addNewCharacter(character: Character): void{
  this.characters.push(character);
  }

  onDeletedCharacter(index: number):void{
    this.characters.splice(index, 1);
  }

*/
}
