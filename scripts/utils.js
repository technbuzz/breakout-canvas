
export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}


export class UI extends Point {

  constructor(x, y, label, value = 0) {
    super(x, y);
    this.label = label
    this.value = value;
  }
    
  /** @param {CanvasRenderingContext2D} c */
  draw(c) {
    c.font = "16px Arial";
    c.fillStyle = "#0095DD";
    c.fillText(`${this.label}: ${this.value}`, this.x, this.y)
  }

}



export function collision(a, b) {
  return (
    a.x > b.x &&
    a.x < b.x + b.width &&
    a.y > b.y &&
    a.y < b.y + b.height
  )
}
