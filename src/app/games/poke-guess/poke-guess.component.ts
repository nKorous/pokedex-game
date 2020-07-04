import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-poke-guess',
  templateUrl: './poke-guess.component.html',
  styleUrls: ['./poke-guess.component.css']
})
export class PokeGuessComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {

  }

}
