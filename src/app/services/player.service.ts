import { Injectable } from '@angular/core';
import { of, BehaviorSubject } from 'rxjs';
import * as rg4js from 'raygun4js'

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

    rg4js('setUser', {
      identifier: name,
      isAnonymous: false,
      fullName: name
    })
  }

  getPlayerName() {
    return of(this.playerName);
  }

  addPlayerPoints(points: number) {
    this.playerPoints += points
    this.playerPoints$.next(this.playerPoints)
  }

  logOut() {
    this.playerName = ''
    this.playerPoints = 0
    this.playerPoints$.next(this.playerPoints)

    rg4js('setUser', {
      isAnonymous: true
    })
  }
}
