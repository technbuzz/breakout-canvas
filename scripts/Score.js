import { Point } from "./utils.js";

export class Score extends Point {
  constructor(x, y) {
    super(x, y);
    this.value = 0;
  }
    
  /** @param {CanvasRenderingContext2D} c */
  drawScore(c) {
    c.font = "16px Arial";
    c.fillStyle = "#0095DD";
    c.fillText(`Score: ${this.value}`, 10, 20)
  }

  draw() {
    this.drawScore(globalThis.game.c)
  }
  
}
