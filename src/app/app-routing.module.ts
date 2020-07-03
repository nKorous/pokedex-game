import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GameSelectComponent } from './game-select/game-select.component';
import { GameHomeComponent } from './games/game-home/game-home.component';
import { PokeTypeComponent } from './games/poke-type/poke-type.component';
import { PokeEvolutionComponent } from './games/poke-evolution/poke-evolution.component';
import { PokeGuessComponent } from './games/poke-guess/poke-guess.component';
import { PokeDexComponent } from './games/poke-dex/poke-dex.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', pathMatch: 'full', redirectTo: '/' },
  { path: 'gameSelect', component: GameSelectComponent },
  {
    path: 'games',
    component: GameHomeComponent,
    children: [
      { path: 'pokeDex', component: PokeDexComponent },
      { path: 'pokeType', component: PokeTypeComponent },
      { path: 'pokeGuess', component: PokeGuessComponent },
      { path: 'pokeEvolution', component: PokeEvolutionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
