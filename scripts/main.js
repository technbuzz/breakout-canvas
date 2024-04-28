import { Ball } from "./Ball.js";
import { Bricks } from "./Bricks.js";
import { Player } from "./Player.js";
import { Score } from "./Score.js";
import { UI } from "./utils.js";

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    /** @type {CanvasRenderingContext2D} */
    this.c = canvas.getContext("2d");

    this.width = this.canvas.width;
    this.height = this.canvas.height;

    globalThis.game = this;

    this.score = new Score(10, 12)
    this.bricks = new Bricks();
    this.ball = new Ball(this.width / 2, this.height - 30, 10);
    this.player = new Player()
    this.lives = new UI(this.width - 80, 10, "Lives", 3)

    this.rfa = undefined

    document.addEventListener("ENDGAME", (event) => {
      if(!this.lives.value) {
        console.log("ENDGAME")
        cancelAnimationFrame(this.rfa)
        this.destroy();
        return
      }

      this.lives.value -= 1
      this.ball.reset(this.canvas.width / 2, this.height - 30)

      // clear requestAnimationFrame
      
    })

    document.addEventListener("UPDATESCORE", event => {
      console.log('UPDATESCORE received') 
      this.score.value += 1
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
    this.score.draw(this.c);
    this.lives.draw(this.c)
  }

  destroy() {
    this.player.keys.destroy()
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


