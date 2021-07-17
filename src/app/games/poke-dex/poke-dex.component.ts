import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Pokemon } from '../../models/pokemon';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { forkJoin } from 'rxjs';

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
    let pokemonIndex = event.selectedRowsData[0].pokedexNumber

    forkJoin([
      this.dataService.getPokemonExtraInfo(pokemonIndex),
      this.dataService.getPokemonEncounterInfo(pokemonIndex),
      this.dataService.getSpeciesInfo(pokemonIndex)
    ]).subscribe(([extraInfo, encounterInfo, speciesInfo]) => {
      this.selectedPokemon = extraInfo
      this.selectedPokemon.encounters = encounterInfo
      this.selectedPokemon.speciesInfo = speciesInfo
      this.selectedPokemon.speciesInfo.flavor_text_entries = this.selectedPokemon.speciesInfo.flavor_text_entries.filter(fi => fi.language.name === 'en')

      console.log({allInfo: this.selectedPokemon, encounterInfo, speciesInfo})

    })
      event.component.collapseAll(-1)
      event.component.expandRow(event.currentSelectedRowKeys[0])
  }

}
