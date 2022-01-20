
// const N_ROWS = 32
// const N_COLS = 32






class Universe {
  constructor() {
    this.asteroids = generateAsteroids()
    this.sun = new Sun(0,0,10000)

    this.initGravityComputer()
  }

  initGravityComputer () {
    const gpu = new GPU();
    this.gravityComputer = gpu.createKernel(function (asteroids, sun) {
      const G = 6.67 * 0.03

      const asteroid = asteroids[this.thread.x];
      const [x, y, m] = asteroid
      const [sx, sy, sm] = sun

      const dx = sx - x
      const dy = sy - y

      const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy + 5, 2)); // distance from 0, 0 where sun is

      const massProduct = (m * sm);
      const gravity = (G * massProduct) / (d * d) / m;

      const vecX = (-x / d) * gravity;
      const vecY = (-y / d) * gravity;

      return [vecX, vecY];
      // return [0, 0];
    }, { 
    argumentTypes: { 
      asteroids: 'Array1D(3)',
      sun: 'Array(3)' 
    }, returnType: 'Array(2)' 
  
  }).setOutput([this.asteroids.length])

  }

  toMatrix() {
    if (!this.asteroids) return null

    const matrix = this.asteroids.map(row => row.map(a => {
      return [a.pos.x, a.pos.y, a.m]
    }))

    return matrix
  }

  toFlatArray() {
    return this.asteroids.map(a => [a.pos.x, a.pos.y, a.m])
  }

  computeGravityFrame() {

    // const asteroidMatrix = this.toMatrix();
    // const result = gravityComputer(asteroidMatrix)

    const sunArr = this.sun.toArray()
    const roids = this.toFlatArray()
    const result = this.gravityComputer(roids, sunArr)

    // const result = gravityComputer(GPU.input(this.toFlatArray(), [N_ROWS, N_COLS]));


    // for (let i = 0; i < N_ROWS; i++) {
    //   for (let j = 0; j < N_COLS; j++) {

    //     const resultForce = result[i][j];
    //     const forceVector = createVector(resultForce[0], resultForce[1])
    //     this.asteroids[i][j].applyForce(forceVector)
    //     this.asteroids[i][j].update()
    //   }
    // }

    for (let i = 0; i < this.asteroids.length; i++) {
      const resultForce = result[i];
      const forceVector = createVector(resultForce[0], resultForce[1])
      this.asteroids[i].applyForce(forceVector)
      this.asteroids[i].update()
    }


  }

  update() {
    this.sun.update()
  }

  draw() {
    this.sun.draw()

    for (const a of this.asteroids) {
      a.draw()
    }
  }
}




// const gravityMatrix =

// const matrices = generateMatrices()
// const out = multiplyMatrix(matrices[0], matrices[1])