
const guiOpts = {
  'gravity': 6,
}

const G = 6.67 * Math.pow(10, -4.5)

class Sun {
  constructor(x, y, m, sinOff) {
    this.pos = createVector(x, y)
    this.m = m
    this.sinOff = sinOff
  }

  draw() {
    fill(255)
    ellipse(this.pos.x, this.pos.y, 25, 25)
  }

  update() {
    // this.pos.x = Math.sin(frameCount / 25 + this.sinOff) * 50
    // this.pos.y = Math.cos(frameCount / 25 + this.sinOff) * 50
  }
}

class Asteroid {
  constructor(x, y, vx, vy, m, r) {
    this.pos = createVector(x, y)
    this.prevPos = this.pos.copy()
    this.vel = createVector(vx, vy)
    this.acc = createVector()
    this.m = m
    this.r = r
  }
  


  applyGravity(body) {
    const forceVec = p5.Vector.sub(body.pos, this.pos).normalize()
    const dist = body.pos.dist(this.pos);

    const massProduct = (this.m * body.m);
    const gravity = (G * massProduct  * guiOpts.gravity) / (Math.pow(dist, 2));
    const gravityScaled = gravity;

    forceVec.setMag(gravity)

    this.acc.add(forceVec)
  }

  update() {
    this.vel.add(this.acc)
    this.pos.add(this.vel)

    this.acc = createVector()
  }

  draw() {
    stroke(255)
    fill(255)

    // I draw a line from the previous pos 
    // to the current pos. this way if a particle
    // moving quickly, we see a  line showing how 
    // far it moved that frame 

    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y)
    
    this.prevPos = this.pos.copy()
  }
}

let sun
const belt = []

function setup() {
  initUi()
  createCanvas(windowWidth, windowHeight);
  sun = new Sun(0, 0, Math.pow(10, 5), PI)
}

// this function is called once per frame 
// by p5
function draw() {
  
  background(0)
  translate(width / 2, height / 2)

  sun.update()
  sun.draw()


  if (frameCount % 10 === 0 && belt.length < 250) {
    const x = 100
    const yoff = random(-5, 5)
    const y = -height / 4 + yoff
    // const y = -100 + yoff
    const vx = -5
    const vy = 0;//random(-0.1, 0.1)
    const m = 50
    const asteroid = new Asteroid(x, y, vx, vy, m)
    belt.push(asteroid)
    console.log(asteroid)
  }


  for (const asteroid of belt) {
    asteroid.applyGravity(sun)
    asteroid.update()
    asteroid.draw()
  }

}

function initUi() {
  const gui = new dat.GUI()
  gui.add(guiOpts, 'gravity').min(1).max(10).step(0.01)
}