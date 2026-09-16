//130x130

const NOISE_R = 1
const NOISE_OFF = 34

class Blob {
  constructor() {
    this.width = 130
    this.height = 130
    this.pg = createGraphics(this.width, this.height)
    this.noiseFieldOff = 0
  }

  update () {
    this.sinOff += 0.02
  }

  draw () {
    const {pg,width,height} = this
    pg.background(255)
    pg.noFill()

    pg.push()

    pg.translate(width/2, height/2)

    pg.beginShape()

    const r = width/2

    for (let i = 0; i <= TWO_PI+.1; i+=.1) {
      const nx = sin(i)*NOISE_R
      const ny = cos(i)*NOISE_R

      const nr = r-(noise(nx+NOISE_OFF,ny+NOISE_OFF,frameCount/100)*40)
      const x = sin(i)*nr
      const y = cos(i)*nr

      vertex(x,y)
    }

    pg.endShape()

    pg.pop()
  }
}