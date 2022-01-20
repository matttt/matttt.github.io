class Asteroid {
  constructor(x, y, vx, vy, m, r) {
    this.pos = createVector(x, y)
    this.prevPos = this.pos.copy()
    this.vel = createVector(vx, vy)
    this.acc = createVector()
    this.m = m
    this.r = r
  }



  // applyGravity(body) {
  //   const forceVec = p5.Vector.sub(body.pos, this.pos).normalize()
  //   const dist = body.pos.dist(this.pos);

  //   const massProduct = (this.m * body.m);
  //   const gravity = (G * massProduct  * guiOpts.gravity) / (Math.pow(dist, 2)) / this.m;
  //   const gravityScaled = gravity;

  //   forceVec.setMag(gravity/this.m)

  //   // forceVec.limit(0.5)

  //   this.acc.add(forceVec)
  // }

  applyForce(force) {
    this.acc.add(force)
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

    // point(this.pos.x, this.pos.y)

    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y)
    this.prevPos = this.pos.copy()
  }
}
