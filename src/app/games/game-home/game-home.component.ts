import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-game-home',
  templateUrl: './game-home.component.html',
  styleUrls: ['./game-home.component.css'],
})
export class GameHomeComponent implements OnInit {
  playerName: string;
  playerPoints: number;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.getPlayerInfo()
  }

  getPlayerInfo() {
    this.playerService
      .getPlayerName()
      .subscribe((name) => (this.playerName = name));
    
      this.playerService
      .getPlayerPoints()
      .subscribe((points) => (this.playerPoints = points));
  }
}
