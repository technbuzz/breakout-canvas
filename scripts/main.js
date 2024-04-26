import { Ball } from "./Ball.js";
import { Player } from "./Player.js";

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    /** @type {CanvasRenderingContext2D} */
    this.c = canvas.getContext("2d");

    this.width = this.canvas.width;
    this.height = this.canvas.height;

    globalThis.game = this;

    this.ball = new Ball(this.width / 2, this.height - 30);
    this.player = new Player()

    this.update()
  }

  draw() {
    this.c.clearRect(0, 0, this.width, this.height);
    this.ball.draw();
    this.player.draw();
  }

  update() {
    this.draw();

    requestAnimationFrame(this.update.bind(this));
  }
}

let canvas = document.querySelector("canvas");
let game = new Game(canvas)







console.log(game)
