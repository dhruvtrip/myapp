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

  ngOnInit(): void {
  
  }

}
