import { Component } from '@angular/core';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-game-select',
  templateUrl: './game-select.component.html',
  styleUrls: ['./game-select.component.css'],
})
export class GameSelectComponent {
  playerName: string = '';
  currentMessageIndex: number = 0;

  showNameInput: boolean = false;
  showGameSelection: boolean = false;
  allowAdvance: boolean = true;

  pokeMessage: Array<PokeMessage> = [
    { id: 'Start', message: `Welcome to the world of Pokemon!` },
    { id: '', message: `It's an exciting time to be starting on your very own journey!`, },
    { id: '', message: `A whole new world of possibilities and adventures is about to unfold!`, },
    { id: 'Name', message: `Erm... Before we begin... What was your name again?`, },
  ];

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {}

  advanceMessage() {
    if (this.pokeMessage[this.currentMessageIndex + 1].id === 'Name') {
      this.showNameInput = true;
      this.allowAdvance = false;
    } else if (this.pokeMessage[this.currentMessageIndex + 1].id === 'End') {
      this.showGameSelection = true;
    }

    this.currentMessageIndex++;
  }

  setPlayerName(name: string) {
    this.playerName = name;
    this.playerService.setPlayerName(this.playerName);
    this.pokeMessage = [
      ...this.pokeMessage,
      { id: '', message: 'Of course! Your name is ' + this.playerName + '! How could I have forgotten?!', },
      { id: '', message: `...` },
      { id: '', message: `${this.playerName}! Your story is about to begin.` },
      { id: 'End', message: '' },
    ];
    this.showNameInput = false;
    this.currentMessageIndex++
    this.allowAdvance = true;
  }
}

interface PokeMessage {
  id: string;
  message: string;
}
