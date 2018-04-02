function physLoop() {
  //physics stuffz... runs at 120fps

  if (universe.time > 0) {
    let cp = camera.position
    cp.set(cp.x + g.svx, cp.y + g.svy, cp.z + g.svz)
  }
  
  sun.applyForce(forces[SUN])
  earth.applyForce(forces[EARTH])
  moon.applyForce(forces[MOON])

  sun.updatePhys()
  earth.updatePhys()
  moon.updatePhys()
}