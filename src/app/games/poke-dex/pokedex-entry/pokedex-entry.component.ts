import { IPokeAPIPokemon } from './../../../models/pokemon';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pokedex-entry',
  templateUrl: './pokedex-entry.component.html',
  styleUrls: ['./pokedex-entry.component.css']
})
export class PokedexEntryComponent {
  pokemonIndex: number
  pokemonInfo: IPokeAPIPokemon

  constructor(private route: ActivatedRoute,
    private dataService: DataService) {
    this.pokemonIndex = Number(this.route.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
    this.getPokemonInfo()
  }

  getPokemonInfo() {
    this.dataService.getPokemonExtraInfo(this.pokemonIndex).subscribe((pokemon: IPokeAPIPokemon) => {
      this.pokemonInfo = pokemon
      console.log(this.pokemonInfo)
    })
  }

}
