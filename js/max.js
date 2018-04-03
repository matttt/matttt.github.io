let sun, earth, moon, universe, forces
let stars = []
let bodies = []

function loop() {
  //reg draw: runs at 60fps
  sun.update()
  earth.update()
  moon.update()
  
  if (guiOpts.trails) {
    sun.leaveTrail(sun.pos)
    moon.leaveTrail(moon.pos)
    earth.leaveTrail(earth.pos)
  }
  
  if (g.stars) universe.makeStars(2)

  controls.target = sun.pos

  if (universe.starCount > 1000 && g.stars) universe.cleanStars(4);
}


function projectInit() {

  initUi()

  if (g.stars) makeStars(50)

  universe = new Universe(scene)

  universe.initBodies(guiOpts) 
  universe.drawTitle() 
  universe.beginTime(physLoop) 

}
