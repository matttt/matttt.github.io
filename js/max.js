let sun, earth, moon, universe, u
let stars = []
let bodies = []

//lol
let titles = []

function loop() {
  //reg draw: runs at 60fps
  sun.update()
  earth.update()
  moon.update()

  
  handlers() // js/util/handlers
}


function projectInit() {
  renderer.domElement.style.display = 'none'

  initUi()

  if (g.stars) makeStars(50)

  universe = new Universe(scene)

  universe.initBodies(guiOpts) 
  universe.drawTitle() 
  universe.beginTime(physLoop) 

}
