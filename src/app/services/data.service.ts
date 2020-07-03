import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
const p = require('../data/pokemon.json')

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private pokeList: Array<Pokemon> = new Array()
  list = p

  constructor() { }

  getPokeList() {
    return this.pokeList
  }
}

