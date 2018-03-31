let g;

let guiOpts = g = {
  'gravity': 1,
  dt: 3,

  //sun
  sx: 0,
  sy: 0,
  sz: 0,
  svx: 500,
  svy: 0,
  svz: 0,
  sm: 1,
  sc: '#FF0000',
  sr: 1000,
  stc: '#FF0000',
  
  //moon
  mx: 20000,
  my: 0,
  mz: 0,
  mvx: 500,
  mvy: 500,
  mvz: -250,
  mm: .3,
  mc: '#FFFFFF',
  mr: 1000,
  mtc: '#FF0000',
  
  //earth
  ex: -20000,
  ey: 0,
  ez: 0,
  evx: 500,
  evy: -500,
  evz: -250,
  em: .3,
  ec: '#0000FF',
  er: 1000,
  etc: '#FF0000',

  //camera
  scootLeft: () => {
    let cp = camera.postion;
    cp.set(cp.x - 50000, cp.y, cp.z)
  },
  scootRight: () => {
    let cp = camera.postion;
    cp.set(cp.x + 50000, cp.y, cp.z)
  },
  scootUp: () => {
    let cp = camera.postion;
    cp.set(cp.x, cp.y - 50000, cp.z)
  },
  scootDown: () => {
    alert(tf)
    let cp = camera.position
    cp.set(cp.x, cp.y + 50000, cp.z)
  },
  
  
  type: 'three',
  trails: true,
  stars: false,
  trailRate: 15,
  restart: function () {
    initBodies(g)

    let cp = camera.position
    cp.set(0, 0, CAM_INIT_POS.z)
    camera.lookAt(ship.pos)
  }
}

function buildFolder(name, prefix) {
  var f = gui.addFolder(name)
  f.add(g, prefix+'x').min(-50000).max(50000).step(100).name('init x')
  f.add(g, prefix+'y').min(-50000).max(50000).step(100).name('init y')
  f.add(g, prefix+'z').min(-50000).max(50000).step(100).name('init z')
  f.add(g, prefix+'vx').min(-500).max(500).step(100).name('vel x')
  f.add(g, prefix+'vy').min(-500).max(500).step(100).name('vel y')
  f.add(g, prefix+'vz').min(-500).max(500).step(100).name('vel z')
  f.add(g, prefix+'m').min(.25).max(5).step(.25).name('mass')
  f.add(g, prefix+'r').min(0).max(10000).step(100).name('radius')  
  f.addColor(g, prefix+'c').name('color')
  f.addColor(g, prefix+'tc').name('trail color')
}


function initUi() {
  gui.add(g, 'restart')
  gui.add(g, 'gravity').min(.1).max(10).step(0.1)
  gui.add(g, 'dt').min(.3).max(5).step(0.1)
  

  buildFolder('Sun','s')
  buildFolder('Earth','e')
  buildFolder('Moon','m')

  let camFolder = gui.addFolder('Camera')
  camFolder.add(g, 'scootLeft').name('Scoot Left')
  camFolder.add(g, 'scootRight').name('Scoot Right')
  camFolder.add(g, 'scootUp').name('Scoot Up')
  camFolder.add(g, 'scootDown').name('Scoot Down')

  gui.add(g, 'trailRate').min(1).max(25).step(1)
  gui.add(g, 'trails').name('Draw Trails')
  gui.add(g, 'stars').name('Draw Stars')
}