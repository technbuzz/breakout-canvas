import { Point } from "./utils.js";
import { Keys } from "./Keys.js";

export class Player extends Point{

  constructor(x, y) {
    super(0, 0);

    this.height = 10;
    this.width = 75;

    this.x = globalThis.game.width / 2 - this.width;
    this.y = globalThis.game.height - this.height;

    this.leftPressed = false;
    this.rightPressed = false;
    this.keys = new Keys();
    document.addEventListener("left", (event) => {
      console.log(event)
      this.leftPressed = event.detail.leftPressed;
    })

    document.addEventListener("right", (event) => {
      console.log(event)
      this.rightPressed = event.detail.rightPressed;
    })

    document.addEventListener("paddlemousemove", (event) => {
      console.log(event)
      this.x = event.detail.x - this.width / 2
      })

  }



  drawPaddle() {
    globalThis.game.c.beginPath();
    globalThis.game.c.fillStyle = "#0095DD";
    globalThis.game.c.fillRect(this.x, this.y, this.width, this.height);
    globalThis.game.c.closePath();
  }

  draw() {
    if(this.leftPressed) {
      this.x = Math.max(this.x - 7, 0);
    } else if(this.rightPressed) {
      this.x = Math.min(this.x + 7, globalThis.game.width - this.width);
    }


    this.drawPaddle()
  }



}

