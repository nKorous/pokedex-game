import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemonURL: string


  constructor(public dialogRef: MatDialogRef<PokemonDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { url: string, pokeDex: number}) {
      this.pokemonURL = data.url
    }

  ngOnInit(): void {
  }

}
