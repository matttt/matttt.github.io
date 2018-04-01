const G = xEtoY(6.7, -11)

let sun, earth, moon, universe
let stars = []
let bodies = []

function projectInit() {

  initUi()


  if (g.stars) makeStars(50)

  universe = new Universe(scene)

  universe.initBodies(guiOpts)  

  light = new THREE.PointLight( 0xf9a602, 1, 1000000,.999 );
  light.__dirtyPosition = true
  light.position.set( 0, 0, 0 );
  scene.add( light );

}

function loop() {
  
  let forces = universe.calcForces();
  light.position.set( sun.pos.x, sun.pos.y, sun.pos.z );

  sun.applyForce(forces[SUN])
  earth.applyForce(forces[EARTH])
  moon.applyForce(forces[MOON])

  if (guiOpts.trails) {
    sun.leaveTrail(sun.pos)
    moon.leaveTrail(moon.pos)
    earth.leaveTrail(earth.pos)
  }
  
  if (g.stars) universe.makeStars(2)

  sun.update()
  earth.update()
  moon.update()

  let cp = camera.position
  cp.set(cp.x + g.svx, cp.y + g.svy, cp.z + g.svz)

  controls.target = sun.pos

  if (Universe.starCount > 500 && g.stars) universe.cleanStars(2);
}

