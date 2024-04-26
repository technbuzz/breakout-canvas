import { Ball } from "./Ball.js";
import { Bricks } from "./Bricks.js";
import { Player } from "./Player.js";

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    /** @type {CanvasRenderingContext2D} */
    this.c = canvas.getContext("2d");

    this.width = this.canvas.width;
    this.height = this.canvas.height;

    globalThis.game = this;

    this.bricks = new Bricks();
    this.ball = new Ball(this.width / 2, this.height - 30, 10);
    this.player = new Player()

    this.rfa = undefined

    document.addEventListener("ENDGAME", (event) => {
      console.log("ENDGAME")
      // clear requestAnimationFrame
      cancelAnimationFrame(this.rfa)
    })

    // keep this at the bottom because it calls update
    // which in turn calls draw which is infinitely called
    this.update()
  }

  draw() {
    this.c.clearRect(0, 0, this.width, this.height);
    this.bricks.draw();
    this.ball.draw();
    this.player.draw();
  }

  update() {
    this.rfa = requestAnimationFrame(this.update.bind(this));
    this.draw();
  }
}

let canvas = document.querySelector("canvas");
let game = new Game(canvas)

function animate() {

}






console.log(game)
