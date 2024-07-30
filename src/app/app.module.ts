import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CounterModule} from "./counter/counter.module";
import {HeroesModule} from "./heroes/heroes.modulo";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DbzModule} from "./dbz/dbz.module";
import {NarutoModule} from "./naruto/naruto.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule,
    NarutoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
