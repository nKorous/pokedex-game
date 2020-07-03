import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button/'
import { MatCardModule } from '@angular/material/card';
import { GameSelectComponent } from './game-select/game-select.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PokeGuessComponent } from './games/poke-guess/poke-guess.component';
import { PokeTypeComponent } from './games/poke-type/poke-type.component';
import { PokeEvolutionComponent } from './games/poke-evolution/poke-evolution.component'

@NgModule({
  declarations: [
    AppComponent,
    GameSelectComponent,
    HomePageComponent,
    PokeGuessComponent,
    PokeTypeComponent,
    PokeEvolutionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
