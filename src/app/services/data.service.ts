import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonList } from '../data/pokemon'
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  list = PokemonList
  private pokeList: Array<Pokemon> = new Array()

  constructor() { 
    this.list.map(pokemon => {
      let name = pokemon.name.toLowerCase()
      this.pokeList = [...this.pokeList, {...pokemon, spriteURL: `https://img.pokemondb.net/sprites/sword-shield/icon/${name}.png`}]
    })
  }

  getPokeList() {
    return of(this.pokeList)
  }
}

