const G = xEtoY(6.7, -11)

let sun, earth, moon
let stars = []
let bodies = []

function projectInit() {

  initUi()

  initBodies(guiOpts)

  if (g.stars) makeStars(50)

}

function loop() {
  
  let forces = calcForces();

  sun.applyForce(forces[SUN])
  earth.applyForce(forces[EARTH])
  moon.applyForce(forces[MOON])

  if (guiOpts.trails) {
    sun.leaveTrail(sun.pos)
    moon.leaveTrail(moon.pos)
    earth.leaveTrail(earth.pos)
  }
  
  if (g.stars) makeStars(2)

  sun.update()
  earth.update()
  moon.update()

  let cp = camera.position
  cp.set(cp.x + 500, cp.y, cp.z)

  controls.target = sun.pos

  if (starCount > 500) cleanStars(1);
}

