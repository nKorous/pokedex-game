import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private playerName: string;
  private selectedGame: SelectedGame;
  private playerPoints: number = 0;

  constructor() {}

  setPlayerName(name: string) {
    this.playerName = name;
  }

  getPlayerName() {
    return of(this.playerName);
  }

  setSelectedGame(game: SelectedGame) {
    this.selectedGame = game;
  }

  getSelectedGame() {
    return of(this.selectedGame);
  }

  setPlayerPoints(points: number) {
    this.playerPoints += points;
  }

  getPlayerPoints() {
    return of(this.playerPoints);
  }
}

type SelectedGame = 'Guess' | 'Types' | 'Evolution';
