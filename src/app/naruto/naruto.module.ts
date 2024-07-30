import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { PagesComponent } from './pages/pages.component';
import {ListComponent} from "./components/list/list.component";
import {AddPersonajeComponent} from "./components/add-Personaje/add-personaje.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PagesComponent,
    ListComponent,
    AddPersonajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PagesComponent]
})
export class NarutoModule{

}
