import {NgModule} from "@angular/core";
import {CounterComponent} from "./components/counter/counter.component";

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [ // Hace que se puede consumir este elemento fuera de este modulo
    CounterComponent
  ]
})
export class CounterModule{}
