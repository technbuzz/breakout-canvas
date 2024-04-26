





export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
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
