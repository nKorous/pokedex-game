import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonList } from '../data/pokemon';
import { evolutions } from '../data/evolution'
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const BASE_POKEAPI = 'https://pokeapi.co/api/v2'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private pokeList: Array<Pokemon> = PokemonList;
  private pokeTypes: Array<string> = [
    'bug',
    'dark',
    'dragon',
    'electric',
    'fairy',
    'fighting',
    'fire',
    'flying',
    'ghost',
    'grass',
    'ground',
    'ice',
    'normal',
    'poison',
    'psychic',
    'rock',
    'steel',
    'water',
  ];

  constructor(private http: HttpClient) {}

  getPokeList() {
    this.pokeList.map(pokemon => {
      const evo = evolutions.find(f => f.name === pokemon.name)
      pokemon.evolution = evo && evo.into ? evo.into : new Array()
    })

    return of(this.pokeList);
  }

  getPokemonGeneration(generation: number) {
    return of(this.pokeList.filter((p) => p.generation === generation));
  }

  getPokemonType(type: string) {
    return of(
      this.pokeList.filter((p) => p.type1 === type || p.type2 === type)
    );
  }

  getLegendaryOnly() {
    return of(this.pokeList.filter((p) => p.is_legendary));
  }

  getRandomPokemon() {
    let rand = Math.floor(Math.random() * this.pokeList.length + 1);
    return this.pokeList[rand];
  }

  getTypes() {
    return of(this.pokeTypes)
  }

  getPokemonExtraInfo(pokemonIndex: number) {
    return this.http.get(`${BASE_POKEAPI}/pokemon/${pokemonIndex}`)
  }

  getPokemonEncounterInfo(pokemonIndex: number): Observable<any> {
    return this.http.get<any>(`${BASE_POKEAPI}/pokemon/${pokemonIndex}/encounters`)
  }

  getSpeciesInfo(pokemonIndex: number) {
    return this.http.get(`${BASE_POKEAPI}/pokemon-species/${pokemonIndex}`)
  }
}
