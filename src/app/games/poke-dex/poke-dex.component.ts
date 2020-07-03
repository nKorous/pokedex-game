import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-poke-dex',
  templateUrl: './poke-dex.component.html',
  styleUrls: ['./poke-dex.component.css']
})
export class PokeDexComponent implements OnInit {
  pokemonList: Array<Pokemon> = new Array()


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getFullList()
  }

  getFullList() {
    this.dataService.getPokeList().subscribe(data => this.pokemonList = data)
  }

}
