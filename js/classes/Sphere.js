class Sphere {
  constructor(posVec, radius, color) {
    this.pos = posVec
    this.radius = radius
    this.color = color
    this.trail = '#000000'
    this.mesh = makeSphere(radius, this.posVec, this.color)
    this.vel = vec()
    this.acc = vec()
    this.count = 0
    this.m = 1
    this.prefix = ''
    this.trailSpheres = []
    this.radold = 0
    this.enableLight = false

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
    this.enableLight = g[this.prefix + 'el']
    this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z)

    if (this.radold != this.radius) {
      for (let s of this.trailSpheres) {
        s.geometry = new THREE.SphereGeometry(g[this.prefix + 'r'] / 5, 2, 2)
        this.radold = this.radius
        this.mesh.geometry = new THREE.SphereGeometry(g[this.prefix + 'r'], 8, 8)
      }
    }

    if (this.enableLight) {
      this.light.position.set( this.pos.x, this.pos.y, this.pos.z );  
    }

    this.radold = this.radius
    
  }

  updatePhys() {
    if (universe.time > 0) {
      this.vel = this.vel.clone().add(vecMultC(this.acc, FORCE_SCALAR))
      this.pos = this.pos.clone().add(this.vel)
    }
  }


  leaveTrail() {
    this.count++

    if (this.count % (26 - g.trailRate) === 0 && g[this.prefix + 'et']) {
      
      let s = makeSphere(this.radius / 5, this.pos, this.trail)
      this.trailSpheres.push(s)
      if (this.count > 3000) universe.scene.remove(this.trailSpheres.shift())
    }

    if (g[this.prefix + 'et'] === false) {
      this.count = 0
    }
  }

  initLight() {
    this.light = new THREE.PointLight( 0xf9a602, 1, 1000000,.999 );
    this.light.__dirtyPosition = true
    this.light.position.set( 0, 0, 0 )
    scene.add( this.light )
  }
  
}