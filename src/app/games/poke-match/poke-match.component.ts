import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { DataService } from 'src/app/services/data.service';
import { PlayerService } from 'src/app/services/player.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-poke-match',
  templateUrl: './poke-match.component.html',
  styleUrls: ['./poke-match.component.css']
})
export class PokeMatchComponent implements OnInit {

  mainPokemon: Pokemon
  pokemonList: Pokemon[] = []

  constructor(
    private dataService: DataService,
    private playerService: PlayerService,
    private popupService: PopupService
  ) { }

  ngOnInit(): void {
    this.getMainPokemon()
    this.getOtherPokemon()
  }

  getMainPokemon() {
    this.mainPokemon = this.dataService.getRandomPokemon()
  }

  getOtherPokemon() {
    this.dataService.getPokeMatchList(63).subscribe(matches => {
      this.pokemonList = [this.mainPokemon, ...matches]

      this.pokemonList = this.pokemonList.map(p => {
        return {
          ...p,
          order: this.dataService.getRandomNumber(0, 100)
        }
      }).sort((a, b) => a.order - b.order)
    })
  }

  matchPokemon(pokemon: Pokemon) {
    if (pokemon.pokedexNumber === this.mainPokemon.pokedexNumber) {
      this.popupService.notification(`You found ${pokemon.name}!!!!; Here's 15 points!`, 'success', 5000)

      this.playerService.addPlayerPoints(15)

      this.getMainPokemon()
      this.getOtherPokemon()
    } else {
      this.popupService.notification(`Nope, thats ${pokemon.name}; Look for ${this.mainPokemon.name}`, 'error', 3000)
    }
  }
}
