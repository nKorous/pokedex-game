import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-poke-evolution',
  templateUrl: './poke-evolution.component.html',
  styleUrls: ['./poke-evolution.component.css']
})
export class PokeEvolutionComponent implements OnInit {

  pokeList: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

}
