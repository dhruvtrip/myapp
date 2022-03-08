import { Component, OnInit } from '@angular/core';

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
    const winningLines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [2,4,6],
      [0,3,6],
      [1,4,7],
      [2,5,8]
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a,b,c] = winningLines[i];
      if(
        this.squares[a] && 
        this.squares[a] === this.squares[b] && 
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

}
