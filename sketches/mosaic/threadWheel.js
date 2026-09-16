//360 x 360

const NUM_NAILS = 64

class ThreadWheel {
  constructor() {
    this.width = 360
    this.height = 360
    this.pg = createGraphics(this.width, this.height)
    this.factor = 0
    this.step = 0
    this.pause = false
  }

  update() {
    // if (this.pause === false) {

      const incr = (sin(this.step++ / 100) / 100) * 1.5

      if(incr < 0) return

      // if (this.step % floor(PI*100) === 0) {
      //   this.pause = true
      //   setTimeout(() => this.pause = false, 2000)
      // }

      this.factor += incr
    // }


  }

  draw() {
    const { pg, width, height } = this
    pg.push()
    pg.background(255,25)
    pg.noFill()
    pg.stroke(0, 50)
    pg.translate(width / 2, height / 2)

    const nailArcLength = TWO_PI / NUM_NAILS

    const r = width / 2
    for (let i = 0; i < NUM_NAILS; i++) {
      const a1 = nailArcLength * i
      const x1 = sin(a1) * r
      const y1 = cos(a1) * r

      const a2 = nailArcLength * i * this.factor
      const x2 = sin(a2) * r
      const y2 = cos(a2) * r

      pg.line(x1, y1, x2, y2)
      // pg.circle(x1,y1,5)
    }

    pg.circle(0,0,width)
    pg.pop()
  }
}