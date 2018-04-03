let fadeUp = 0
let fadeOut = 0
let sinYA = 0

function handleText() {
  if (titles.length) {
    sinYA = Math.sin(universe.time / 40) * 500

    let t1 = titles[0].position
    t1.set(sun.pos.x + titles[0].centerOffset, t1.y + g.svy + fadeUp + sinYA, t1.z + g.svz + fadeOut)

    let t2 = titles[1].position
    t2.set(sun.pos.x + titles[1].centerOffset, t2.y + g.svy + fadeUp + sinYA, t2.z + g.svz + fadeOut)

    if (universe.time > 200 && titles.length > 0) {
      fadeUp = ((universe.time - 200) / 200 * 1000)
      fadeOut = - ((universe.time - 200) / 200 * 500)

      titles[0].material[0].opacity = 1 - ((universe.time - 300) / 100)
      titles[0].material[1].opacity = 1 - ((universe.time - 300) / 100)
      titles[1].material[0].opacity = 1 - ((universe.time - 300) / 100)
      titles[1].material[1].opacity = 1 - ((universe.time - 300) / 100)
    } else if (universe.time > 1000) {
      for (let title of titles) scene.remove(title)
    }
  }
}


function handleCam() {
  controls.target = sun.pos
}

function handleStars() {
  if (g.stars) {
    universe.makeStars(2)

    if (universe.starCount > 1000) universe.cleanStars(4);
  }
}

function handleTrails() {
  if (guiOpts.trails) {
    sun.leaveTrail(sun.pos)
    moon.leaveTrail(moon.pos)
    earth.leaveTrail(earth.pos)
  }
}

let handles = [handleText, handleCam, handleStars, handleTrails]

function handlers() {
  handles.forEach((f) => f())
}