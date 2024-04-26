import { Point, collision } from "./utils.js";
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
        result[c][r] = Object.assign({}, new Point(brickX, brickY), {width: this.width, height: this.height, status: true} )
      }
    }
    return result
  }

  drawBricks() {
    this.bricks.forEach((column) => {
      column.forEach((brick) => {
        if(brick.status) {
          this.drawBrick(globalThis.game.c, brick.x, brick.y)
        }
      })
    })
  }

  brickCollision() {
    for(let c =0; c<this.columns  ; c++) {
      for(let r=0; r<this.rows; r++) {
        const brick = this.bricks[c][r]
        if(!brick.status) continue
        if(collision(globalThis.game.ball, brick)) {
          brick.status = false
          globalThis.game.ball.velocity.y = -globalThis.game.ball.velocity.y
          return
        }
      }
    }
  }

  draw() {
    this.brickCollision()
    this.drawBricks()

  }
}
