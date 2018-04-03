

function buildFolder(name, prefix) {
  var f = gui.addFolder(name)
  f.add(g, prefix + 'x').min(-50000).max(50000).step(100).name('init x')
  f.add(g, prefix + 'y').min(-50000).max(50000).step(100).name('init y')
  f.add(g, prefix + 'z').min(-50000).max(50000).step(100).name('init z')
  f.add(g, prefix + 'vx').min(-500).max(500).step(100).name('vel x')
  f.add(g, prefix + 'vy').min(-500).max(500).step(100).name('vel y')
  f.add(g, prefix + 'vz').min(-500).max(500).step(100).name('vel z')
  f.add(g, prefix + 'm').min(.25).max(5).step(.25).name('mass')
  f.add(g, prefix + 'r').min(0).max(10000).step(100).name('radius')
  f.addColor(g, prefix + 'c').name('color')
  f.addColor(g, prefix + 'tc').name('trail color')
  f.add(g, prefix + 'el').name('enable light')
  f.add(g, prefix + 'et').name('enable trail')
}


function initUi() {
  gui.add(g, 'restart')
  gui.add(g, 'start').name('start time')
  gui.add(g, 'stop').name('stop time')
  gui.add(g, 'gravity').min(.1).max(10).step(0.1)
  gui.add(g, 'dt').min(.5).max(3).step(0.05)

  buildFolder('Sun', 's')
  buildFolder('Earth', 'e')
  buildFolder('Moon', 'm')

  let camFolder = gui.addFolder('Camera')
  camFolder.add(g, 'scootLeft').name('Scoot Left')
  camFolder.add(g, 'scootRight').name('Scoot Right')
  camFolder.add(g, 'scootUp').name('Scoot Up')
  camFolder.add(g, 'scootDown').name('Scoot Down')

  gui.add(g, 'trailRate').min(.5).max(30).step(.5)
  gui.add(g, 'trails').name('Draw Trails')
  gui.add(g, 'stars').name('Draw Stars')
  gui.add(g, 'openSun').name('Sun')
  gui.add(g, 'openEarth').name('Earth')
  gui.add(g, 'openMoon').name('Moon')

  initModal()
}

