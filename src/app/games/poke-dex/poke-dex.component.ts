import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Pokemon } from '../../models/pokemon';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDetailComponent } from './pokemon-detail.component';

@Component({
  selector: 'app-poke-dex',
  templateUrl: './poke-dex.component.html',
  styleUrls: ['./poke-dex.component.css']
})
export class PokeDexComponent implements OnInit {
  pokemonList: Array<Pokemon> = new Array()
  selectedPokemon: any = null


  constructor(private dataService: DataService,
    public picDialog: MatDialog) { }

  ngOnInit(): void {
    this.getFullList()
  }

  getFullList() {
    this.dataService.getPokeList().subscribe(data => {
      this.pokemonList = data;
    })
  }

  showPokemonPicture(data) {
    let dialogRef = this.picDialog.open(PokemonDetailComponent, {
      height: '90%',
      width: '50%',
      data: { name: data.data.spriteURL, pokeDex: data.data.pokedexNumber }
    })

    dialogRef.afterClosed().subscribe(result => {})
  }

  getTypeColor(type: string) {
    return `var(--${type}-color)`
  }

  getExtraPokemonInfo(event: any) {
    let pokemonName = event.selectedRowsData[0].spriteURL
    this.dataService.getPokemonExtraInfo(pokemonName).subscribe(pokemon => {
      console.log(pokemon)

      this.selectedPokemon = pokemon
    })
  }

}
