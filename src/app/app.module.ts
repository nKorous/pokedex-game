import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button/'
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'

import { DxDataGridModule } from 'devextreme-angular'
import { GameSelectComponent } from './game-select/game-select.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PokeGuessComponent } from './games/poke-guess/poke-guess.component';
import { PokeTypeComponent } from './games/poke-type/poke-type.component';
import { PokeEvolutionComponent } from './games/poke-evolution/poke-evolution.component';
import { GameHomeComponent } from './games/game-home/game-home.component';
import { PokeDexComponent } from './games/poke-dex/poke-dex.component';
import { PokemonDetailComponent } from './games/poke-dex/pokemon-detail.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    GameSelectComponent,
    HomePageComponent,
    PokeGuessComponent,
    PokeTypeComponent,
    PokeEvolutionComponent,
    GameHomeComponent,
    PokeDexComponent,
    PokemonDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,

    DxDataGridModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
