import { Point } from "./utils.js";
export class Ball extends Point {
  constructor(x, y, radius=5) {
    super(x, y);
    this.radius = radius;
    this.velocity = new Point(1, -1)
  }

  drawBall() {
    globalThis.game.c.beginPath();
    globalThis.game.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    globalThis.game.c.fillStyle = "red";
    globalThis.game.c.fill();
    globalThis.game.c.closePath();
  }

  bounceOffWalls() {
    if(this.x > globalThis.game.width - this.radius || this.x < this.radius) {
      this.velocity.x = -this.velocity.x;
    }

    if(this.y < this.radius || this.y > globalThis.game.height - this.radius) {
      this.velocity.y = -this.velocity.y;
    }
  }

  draw() {
    this.drawBall()

    this.bounceOffWalls()

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}
