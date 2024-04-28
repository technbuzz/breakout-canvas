import { Point, UI } from "./utils.js";

export class Score extends UI {
  constructor(x, y) {
    super(x, y, 'Score')
    this.value = 0;
  }
    
  // /** @param {CanvasRenderingContext2D} c */
  // drawScore(c) {
  //   c.font = "16px Arial";
  //   c.fillStyle = "#0095DD";
  //   c.fillText(`Score: ${this.value}`, 10, 20)
  // }
  //
  // draw() {
  //   this.drawScore(globalThis.game.c)
  // }
  
}
