import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button>
      {{ value }}
    </button>
  `,
  styles: [
  ]
})
//change detection to update UI
export class SquareComponent {
  
  @Input() value: 'X'| 'O';

}
