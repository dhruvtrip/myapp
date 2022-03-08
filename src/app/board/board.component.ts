import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any []; //squares on the game board 3x3
  xIsNext: boolean; //determine current player
  winner: string; 


  // inject dependencies here
  constructor() { }

  //lifecycle hook
  ngOnInit(){
    this.newGame();
  }

  //method to initialize the game
  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = null as any;
    this.xIsNext = true;
  }

  get player(){
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number){
    if(!this.squares[idx]){
      this.squares.splice(idx, 1, this.player); //replaces 1 element at the square the player clicked on
      this.xIsNext = !this.xIsNext; //change player
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner(){
    return '';
  }

}
