class Universe {
  constructor(scene) {
    this.scene = scene

    this.bodies = []
    this.stars = []
    this.starCount = 0

    this.makeSphere = makeSphere
  }

  clearScene() {
    while (this.scene.children.length > 0) {
      this.scene.remove(this.scene.children[0])
    }
  }

  makeStars(num) {
    for (var i = 0; i < num; i++) {
      const starX = this.bodies[SUN].pos.x + (-Math.random() * 100000 + 50000) + 50000
      const starY = this.bodies[SUN].pos.y + (-Math.random() * 100000 + 50000)
      const starZ = this.bodies[SUN].pos.z + (-Math.random() * 100000 + 50000)
      const starPos = vec(starX, starY, starZ)

      let star = this.makeSphere(Math.random() + 5 * 25, starPos, '#FFFFFF', 3)
      this.stars.push(star)

      this.starCount++
    }
  }

  cleanStars(num) {
    for (let i = 0; i < num; i++) this.scene.remove(this.stars.shift())
    this.starCount -= num;
  }

  initBody(prefix, mass) {
    let body = new Sphere(vec(g[prefix + 'x'], g[prefix + 'y'], g[prefix + 'z']), g[prefix + 'r'], g[prefix + 'c'])
    body.baseMass = xEtoY(mass[0], mass[1])
    body.vel = vec(g[prefix + 'vx'], g[prefix + 'vy'], g[prefix + 'vz'])
    body.acc = vec()
    body.m = xEtoY(mass[0], mass[1]) * g[prefix + 'm'] * 1000
    body.trail = g[prefix + 'tc']
    body.prefix = prefix

    return body
  }
  
  initBodies(bodies, guiOpts) {
    this.clearScene()

    sun = this.initBody('s', [4, 16])
    earth = this.initBody('e', [4, 14])
    moon = this.initBody('m', [6, 8])

    this.bodies[SUN] = sun
    this.bodies[EARTH] = earth
    this.bodies[MOON] = moon
  }

  calcForces() {
    const sunPos = [sun.pos.x, sun.pos.y, sun.pos.z, sun.m]
    const earthPos = [earth.pos.x, earth.pos.y, earth.pos.z, earth.m]
    const moonPos = [moon.pos.x, moon.pos.y, moon.pos.z, moon.m]
    const sunToEarth = vecFromTo(sunPos, earthPos)
    const moonToEarth = vecFromTo(moonPos, earthPos)
    const sunToMoon = vecFromTo(sunPos, moonPos)
    const sunEarthD = distance(sunPos, earthPos)
    const moonEarthD = distance(moonPos, earthPos)
    const sunMoonD = distance(sunPos, moonPos)

    //calculating gravitational forces

    const sunEarthF = (G * guiOpts.gravity * ((sun.m * earth.m) / Math.pow(distance(sunPos, earthPos), 2)))
    const moonEarthForce = (G * guiOpts.gravity * ((moon.m * earth.m) / Math.pow(distance(moonPos, earthPos), 2)))
    const sunMoonForce = (G * guiOpts.gravity * ((sun.m * moon.m) / Math.pow(distance(sunPos, moonPos), 2)))


    //adjusting motion to account for gravitational forces

    const sunF1 = vecTimesC(sunToEarth, sunEarthD).multiplyScalar(sunEarthF / sun.m)
    const sunF2 = vecTimesC(sunToMoon, sunMoonD).multiplyScalar(sunMoonForce / sun.m)
    const earthF1 = vecTimesC(sunToEarth, sunEarthD).multiplyScalar(-1 * sunEarthF / earth.m)
    const earthF2 = vecTimesC(moonToEarth, moonEarthD).multiplyScalar(-1 * moonEarthForce / earth.m);
    const moonF1 = vecTimesC(moonToEarth, moonEarthD).multiplyScalar(moonEarthForce / moon.m)
    const moonF2 = vecTimesC(sunToMoon, sunMoonD).multiplyScalar(-1 * sunMoonForce / moon.m)

    let sunF = sunF1.add(sunF2)
    let earthF = earthF1.add(earthF2)
    let moonF = moonF1.add(moonF2)

    let forces = []
    forces[SUN] = sunF
    forces[EARTH] = earthF
    forces[MOON] = moonF

    return forces
  }
}