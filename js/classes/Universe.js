class Universe {
  constructor(scene) {
    this.scene = scene

    this.time = 0

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

  getCleanBodyArr() {
    let newBodies = this.bodies.map((b) => {
      let cleanBody = { pos: b.pos, m: b.m }
      return cleanBody
    })

    return newBodies
  }

  beginTime(func) {
    let here = this

    this.worker = new Worker('js/util/physics_worker.js');

    this.worker.onmessage = function (e) {
      if (e.data.started === true) {
        here.timeTick(func);
      } else {
        forces = e.data.forces;
      }
    }

    forces = Physics.calcForces(universe.bodies, g)
  }

  timeTick(func) {
    let bodies = this.getCleanBodyArr()
    let g_ = Object.assign({}, g)

    g_['scootLeft'] = null
    g_['scootRight'] = null
    g_['scootUp'] = null
    g_['scootDown'] = null
    g_['restart'] = null


    this.worker.postMessage({ bodies: bodies, g: g_ });

    func()
    this.time++

    setTimeout(() => {
      this.timeTick(func)
    }, 25 / g.dt)
  }

  makeStars(num) {
    for (var i = 0; i < num; i++) {
      const starX1 = this.bodies[SUN].pos.x + (-Math.random() * 1000000 + 500000) + 50000
      const starY1 = this.bodies[SUN].pos.y + (-Math.random() * 1000000 + 500000)
      const starZ1 = this.bodies[SUN].pos.z + (-Math.random() * 1000000 + 500000)
      const starPos1 = vec(starX1, starY1, starZ1)
      const starX2 = this.bodies[SUN].pos.x + (-Math.random() * 100000 + 50000) + 50000
      const starY2 = this.bodies[SUN].pos.y + (-Math.random() * 100000 + 50000)
      const starZ2 = this.bodies[SUN].pos.z + (-Math.random() * 100000 + 50000)
      const starPos2 = vec(starX2, starY2, starZ2)

      let star1 = this.makeSphere(Math.random() + 5 * 100, starPos1, '#FFFFFF', 2)
      let star2 = this.makeSphere(Math.random() + 5 * 25, starPos2, '#FFFFFF', 3)
      this.stars.push(star1, star2)

      this.starCount += 2
    }
  }

  drawTitle() {
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    var loader = new THREE.FontLoader();
    loader.load('fonts/droid.json', function (font) {


      var title = "OrbiTool";
      var subTitle = "by @matttt and Max Schweiger"

      addText(title, vec(5000,34000,-50000), 20000, font)
      addText(subTitle, vec(5000,29000,-50000), 2000, font)
    })

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

    body.initLight()

    return body
  }

  initBodies(bodies, guiOpts) {
    this.clearScene()

    sun = this.initBody('s', [6, 16])
    earth = this.initBody('e', [4, 14])
    moon = this.initBody('m', [6, 8])

    this.bodies[SUN] = sun
    this.bodies[EARTH] = earth
    this.bodies[MOON] = moon
  }
}