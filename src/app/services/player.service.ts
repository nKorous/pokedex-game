import { Injectable } from '@angular/core';
import { of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private playerName: string;
  private playerPoints: number  = 0
  playerPoints$: BehaviorSubject<number> = new BehaviorSubject(this.playerPoints);

  constructor() {}

  setPlayerName(name: string) {
    this.playerName = name;
  }

  getPlayerName() {
    return of(this.playerName);
  }

  addPlayerPoints(points: number) {
    this.playerPoints += points
    this.playerPoints$.next(this.playerPoints)
  }
}
