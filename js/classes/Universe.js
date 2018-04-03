class Universe {
  constructor(scene) {
    this.scene = scene

    this.time = 0

    this.bodies = []
    this.stars = []
    this.starCount = 0
    this.timeStopped = false

    this.makeSphere = makeSphere
  }

  clearScene() {
    while (this.scene.children.length > 0) {
      this.scene.remove(this.scene.children[0])
    }
  }

  processInput() {
    let g_ = Object.assign({}, g)
    let bodies = this.getCleanBodyArr()

    for (let key of Object.keys(g_)) {
      if (typeof g_[key] == 'function') g_[key] = null
    }

    return g_
  }

  getCleanBodyArr() {
    let newBodies = this.bodies.map((b) => {
      let cleanBody = { pos: b.pos, m: b.m }
      return cleanBody
    })

    return newBodies
  }

  revealUi() {
    $(renderer.domElement).fadeIn(2500)
    $(stats.domElement).fadeIn(2500)
    
    let oldH = $(gui.domElement).css('height')
    $(gui.domElement).css('height', 0)
    $(gui.domElement).animate({
      'height': oldH,
      'opacity': 1
    }, 1000)
    $('#load-wheel').fadeOut(2500)
    
    onWindowResize()

    let g_ = this.processInput()
    let bodies = this.getCleanBodyArr()

    this.worker.postMessage({ bodies: bodies, g: g_ });
    this.timeTick();
  }

  startWorker(e) {
    let here = this
    let forces = e.data.forces

    physLoop(forces)
    this.timeStopped = false

    let g_ = here.processInput()
    let bodies = here.getCleanBodyArr()

    function tryTick() {
      setTimeout(() => {
        if (here.timeStopped === false) {
          here.timeTick()
          here.worker.postMessage({ bodies: bodies, g: g_ });
        } else {
          tryTick()
        }

      }, BASE_PHYS_TICK / g.dt)
    }

    tryTick()
  }

  beginTime(func) {
    let here = this

    if (!this.worker) this.worker = new Worker('js/util/physics_worker.js');

    this.worker.onmessage = function (e) {
      if (e.data.started === true) {
        here.revealUi()
      } else {
        here.startWorker(e)
      }
    }
  }


  timeTick(func) {

    this.time++

  }

  startTime() {
    this.timeStopped = false
  }

  stopTime() {
    this.timeStopped = true
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
    var loader = new THREE.FontLoader();
    loader.load('fonts/droid.json', function (font) {
      let titlePos = TITLE.POS;
      let subTitlePos = TITLE.POS.clone().add(vec(0,-6000,0));

      titles.push(addText(TITLE.TEXT, titlePos, 20000, font))  
      titles.push(addText(TITLE.SUBTEXT, subTitlePos, 2000, font))
    })
  }

  cleanStars(num) {
    for (let i = 0; i < num; i++) this.scene.remove(this.stars.shift())
    this.starCount -= num;
  }

  initBody(name, prefix, mass) {
    let body = new Sphere(vec(g[prefix + 'x'], g[prefix + 'y'], g[prefix + 'z']), g[prefix + 'r'], g[prefix + 'c'])
    body.baseMass = xEtoY(mass[0], mass[1])
    body.vel = vec(g[prefix + 'vx'], g[prefix + 'vy'], g[prefix + 'vz'])
    body.acc = vec()
    body.m = xEtoY(mass[0], mass[1]) * g[prefix + 'm'] * 1000
    body.trail = g[prefix + 'tc']
    body.prefix = prefix
    body.name = name

    body.initLight()

    return body
  }

  initBodies(bodies, guiOpts) {
    this.clearScene()

    sun = this.initBody('sun', 's', [6, 16])
    earth = this.initBody('earth', 'e', [4, 14])
    moon = this.initBody('moon', 'm', [6, 8])

    this.bodies[SUN] = sun
    this.bodies[EARTH] = earth
    this.bodies[MOON] = moon
  }
}