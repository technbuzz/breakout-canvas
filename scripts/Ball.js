import { Point } from "./utils.js";
export class Ball extends Point {
  constructor(x, y ) {
    super(x, y);
    this.velocity = new Point(1, -1)
  }

  drawBall() {
    globalThis.game.c.beginPath();
    globalThis.game.c.arc(this.x, this.y, 5, 0, Math.PI * 2);
    globalThis.game.c.fillStyle = "red";
    globalThis.game.c.fill();
    globalThis.game.c.closePath();
  }

  draw() {
    this.drawBall()
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}
