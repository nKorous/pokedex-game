import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { Pokemon } from '../../models/pokemon';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-poke-guess',
  templateUrl: './poke-guess.component.html',
  styleUrls: ['./poke-guess.component.css'],
})
export class PokeGuessComponent implements OnInit {
  pokemon: Pokemon;
  alreadyGuessed: Array<number> = new Array();
  lastPokemon: { name: string, correct: boolean };

  pokeChoices: Array<string> = new Array()

  constructor(
    private playerService: PlayerService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getNextPokemon()
  }

  getNextPokemon() {
    let pokemon = this.dataService.getRandomPokemon();
    if (this.alreadyGuessed.includes(pokemon.pokedexNumber)) {
      this.getNextPokemon();
    } else {
      this.pokemon = pokemon;
      this.getPokeChoices(this.pokemon.name)
      this.alreadyGuessed = this.alreadyGuessed.length > 250 ? [...this.alreadyGuessed, pokemon.pokedexNumber] : [ pokemon.pokedexNumber ]
    }
  }

  checkAnswer(guess: string) {
    if(guess === this.pokemon.name) {
      this.playerService.addPlayerPoints(5)
      this.lastPokemon = { name: this.pokemon.name, correct: true}
      this.getNextPokemon()
    } else {
      this.lastPokemon = { name: this.pokemon.name, correct: false}
      this.getNextPokemon()
    }
  }

  getPokeChoices(correct: string) {
    let choice1 = this.dataService.getRandomPokemon()
    let choice2 = this.dataService.getRandomPokemon()
    let choice3 = this.dataService.getRandomPokemon()

    this.pokeChoices = [ choice1.name, choice2.name, choice3.name, correct].sort((a, b) => {
      return a < b ? 1 : b < a ? -1 : 0
    })
  }
}
