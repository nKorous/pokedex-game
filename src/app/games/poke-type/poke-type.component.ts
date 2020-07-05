import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service'
import { DataService } from '../../services/data.service'
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-poke-type',
  templateUrl: './poke-type.component.html',
  styleUrls: ['./poke-type.component.css']
})
export class PokeTypeComponent implements OnInit {
  pokemon: Pokemon;
  alreadyGuessed: Array<number> = new Array();
  lastPokemon: { name: string, type1: string, type2?: string, correct: boolean };
  pokeTypes: Array<string> = new Array()

  constructor(
    private playerService: PlayerService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getNextPokemon()
    this.getPokeTypes()
  }

  getNextPokemon() {
    let pokemon = this.dataService.getRandomPokemon();
    if (this.alreadyGuessed.find(f => f === pokemon.pokedexNumber)) {
      this.getNextPokemon();
    } else {
      this.pokemon = pokemon;
      this.alreadyGuessed = this.alreadyGuessed.length > 250 ? [...this.alreadyGuessed, pokemon.pokedexNumber] : [ pokemon.pokedexNumber ]
    }
  }

  getTypeColor(type: string) {
    return `var(--${type}-color)`
  }

  checkAnswer(guess: string) {
    if(guess === this.pokemon.type1 || guess === this.pokemon.type2) {
      this.playerService.addPlayerPoints(5)
      this.lastPokemon = { name: this.pokemon.name, type1: this.pokemon.type1, type2: this.pokemon.type2, correct: true}
      this.getNextPokemon()
    } else {
      this.lastPokemon = { name: this.pokemon.name, type1: this.pokemon.type1, type2: this.pokemon.type2, correct: false}
      this.getNextPokemon()
    }
  }

  getPokeTypes() {
    this.dataService.getTypes().subscribe(types => {
      this.pokeTypes = types.sort((a, b) => {
        return a < b ? 1 : b < a ? -1 : 0
      })
    })
  }
}
