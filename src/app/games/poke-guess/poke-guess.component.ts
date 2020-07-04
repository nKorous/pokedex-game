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
  guessedName: string = ''
  lastPokemon: { name: string, correct: boolean };

  constructor(
    private playerService: PlayerService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {}

  getNextPokemon() {
    let pokemon = this.dataService.getRandomPokemon();
    if (this.alreadyGuessed.includes(pokemon.pokedexNumber)) {
      this.getNextPokemon();
    } else {
      this.pokemon = pokemon;
    }
  }

  checkAnswer() {
    if(this.guessedName === this.pokemon.name) {
      this.playerService.addPlayerPoints(5)
      this.lastPokemon = { name: this.pokemon.name, correct: true}
      this.getNextPokemon()
      this.guessedName = ''
    } else {
      this.lastPokemon = { name: this.pokemon.name, correct: false}
      this.getNextPokemon()
    }
  }
}
