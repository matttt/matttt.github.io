//210x210

const GR = 1.618033988749894

const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false; 
  return num > 1;
}

class PrimeSpiral {
  constructor() {
    this.width = 210
    this.height = 210
    this.pg = createGraphics(this.width, this.height)

    this.numSeeds = 1
  }

  update () {
    if(this.numSeeds<3000) {

      this.numSeeds++
    } else {
      this.numSeeds = 0
    }
  }

  draw () {
    const {pg,width,height,numSeeds} = this
    pg.background(255)
    // pg.fill(0)
    pg.noFill()

    pg.push()

    pg.translate(width/2, height/2)

    
    let r = 0
    let a = 0

    const scalar = (.994**(this.numSeeds/2))
    
    for (let i = 0; i < numSeeds; i++) {

      
      // if (i < 1000) {
      const x = sin(a)*r
      const y = cos(a)*r

      // if (isPrime(i)) {
        if (numSeeds > 500) {
          if (i-(numSeeds-500) > 0) {
            pg.circle(x,y,3)
            
          }
        } else {
          pg.circle(x,y,3)

        }
          // }
          
          // r *= 1.05
          r += scalar
          a += TWO_PI/GR
        }


    // }

   

    


    pg.pop()
  }
}