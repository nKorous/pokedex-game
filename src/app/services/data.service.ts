import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonList } from '../data/pokemon'
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private pokeList: Array<Pokemon> = PokemonList

  constructor() { 
  }

  getPokeList() {
    return of(this.pokeList)
  }
}

