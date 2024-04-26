import { Point } from "./utils.js";
export class Bricks {


  constructor() {
    this.rows = 3;
    this.columns = 5;
    this.width = 75;
    this.height = 20;
    this.padding = 10;
    this.offsetTop = 30;
    this.offsetLeft = 30;

    this.bricks = this.createBricks(); 
    console.log(this.bricks)
  }


  drawBrick(c, x, y) {
    c.beginPath();
    c.fillStyle = "#0095DD";
    c.rect(x, y, this.width, this.height);
    c.fill();
    c.closePath();
  }

  createBricks() {
    let result = []
    for(let c =0; c<this.columns  ; c++) {
      result[c] = []
      for(let r=0; r<this.rows; r++) {
        const brickX = c * (this.padding + this.width) + this.offsetLeft;
        const brickY = r * (this.padding + this.height) + this.offsetTop;
        result[c][r] = new Point(brickX, brickY) 
      }
    }
    return result
  }

  drawBricks() {
    this.bricks.forEach((column) => {
      column.forEach((brick) => {
        this.drawBrick(globalThis.game.c, brick.x, brick.y)
      })
    })
  }

  draw() {
    this.drawBricks()
  }
}
