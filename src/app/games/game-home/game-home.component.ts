import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-game-home',
  templateUrl: './game-home.component.html',
  styleUrls: ['./game-home.component.css'],
})
export class GameHomeComponent implements OnInit {
  playerName: string;
  playerPoints: number;

  constructor(private playerService: PlayerService, private router: Router) {}

  ngOnInit(): void {
    this.getPlayerInfo();
  }

  getPlayerInfo() {
    this.playerService.getPlayerName().subscribe((name) => {
      //if(!name) this.router.navigate(['/gameSelect'])
      this.playerName = name
    });

    this.playerService.playerPoints$.subscribe(points => this.playerPoints = points)
  }
}
