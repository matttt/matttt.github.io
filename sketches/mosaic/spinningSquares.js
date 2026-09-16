//360 x 360

const NUM_SQUARES = 32

class SpinningSquares {
  constructor() {
    this.width = 360
    this.height = 360
    this.pg = createGraphics(this.width, this.height)

    this.angles = new Array(NUM_SQUARES).fill(0)
  }

  update() {

  }

  draw() {
    const {pg} = this

    pg.push()

    // pg.translate(this.width/2, this.height/2)
    let w = this.width
    // console.log(w)
    // pg.square(0,0,50)
    // pg.square(0,0,50)

    pg.pop()
    // for (const angle of this.angles) {
    //   console.log(w)
    //   pg.rotate(angle)
      
    //   w-=this.width/NUM_SQUARES
    // }
  }
}