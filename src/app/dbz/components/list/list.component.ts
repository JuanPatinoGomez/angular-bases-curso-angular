import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ]

  onDeletedCharacter(id: string  = ''):void{
    //emitir el id - indice del personaje
    if(id === '') return;
    this.onDeleteCharacter.emit(id);
    console.log(id)
  }
/*
  onDeletedCharacterLocal(index:number):void{ // La eliminación del elemento se puede hacer directamente en este componente
    this.characterList.splice(index, 1);
  }*/
}
