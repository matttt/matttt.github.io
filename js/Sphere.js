class Sphere {
  constructor(posVec, radius, color) {
    this.pos = posVec
    this.radius = radius
    this.color = color
    this.trail = '#FFFFFF'
    this.mesh = makeSphere(radius, this.posVec, this.color)
    this.vel = vec()
    this.acc = vec()
    this.count = 0
    this.m = 1
    this.prefix = ''
    this.trailSpheres = []
    this.radold = 0

    this.mesh.__dirtyPosition = true

    for (let i = 0; i < 10; i++) {
      let s = makeSphere(this.radius / 5, this.pos, this.trail)
      this.trailSpheres.push(s)
    }
  }

  applyForce(f) {
    this.acc = f
  }

  update() {
    const dt = g.dt

    this.color = g[this.prefix + 'c']
    this.m = this.baseMass * g[this.prefix + 'm'] * 1000
    this.trail = g[this.prefix + 'tc']
    this.radius = g[this.prefix + 'r']
    this.vel = this.vel.clone().add(this.acc.multiplyScalar(dt))
    this.pos = this.pos.clone().add(this.vel)
    this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z)


    if (this.radold != this.radius) {
      for (let s of this.trailSpheres) {
        s.geometry = new THREE.SphereGeometry(g[this.prefix + 'r'] / 5, 2, 2)
        this.radold = this.radius
        this.mesh.geometry = new THREE.SphereGeometry(g[this.prefix + 'r'], 8, 8)
      }
    }

    this.radold = this.radius

  }

  leaveTrail() {
    this.count++

    if (this.count % (26 - g.trailRate) === 0) {
      let s = makeSphere(this.radius / 5, this.pos, this.trail)
      this.trailSpheres.push(s)
      if (this.count > 5000) scene.remove(this.trailSpheres.shift())
    }

  }
}