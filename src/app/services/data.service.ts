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

  getPokemonGeneration(generation: number) {
    return of(this.pokeList.filter(p => p.generation === generation))
  }

  getPokemonType(type: string) {
    return of(this.pokeList.filter(p => p.type1 === type || p.type2 === type))
  }

  getLegendaryOnly(){
    return of(this.pokeList.filter(p => p.is_legendary))
  }

  getRandomPokemon() {
    let rand = Math.floor((Math.random() * this.pokeList.length + 1) + 1)
    return this.pokeList[rand]
  }
}

