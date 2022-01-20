
class Sun {
  constructor(x, y, m, sinOff) {
    this.pos = createVector(x, y)
    this.m = m
    this.sinOff = sinOff || 0
  }

  draw() {
    fill(255)
    ellipse(this.pos.x, this.pos.y, 25, 25)
  }

  toArray() {
    return [this.pos.x, this.pos.y, this.m]
  }

  update() {
    // this.pos.x = Math.sin(frameCount / 25 + this.sinOff) * 50
    // this.pos.y = Math.cos(frameCount / 25 + this.sinOff) * 50
  }
}
