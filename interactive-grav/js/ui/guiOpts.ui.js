let g;

let guiOpts = g = {
  'gravity': 1,
  dt: 1,

  //sun
  sx: 0,
  sy: 0,
  sz: 0,
  svx: 500,
  svy: 0,
  svz: 0,
  sm: 1,
  sc: '#f9a602',
  sr: 1000,
  stc: '#FF0000',
  sel: true,
  set: false,

  //moon
  mx: 20000,
  my: 0,
  mz: 0,
  mvx: 500,
  mvy: 500,
  mvz: -250,
  mm: 1,
  mc: '#FFFFFA',
  mr: 1000,
  mtc: '#E9D985',
  mel: false,
  met: true,


  //earth
  ex: -20000,
  ey: 0,
  ez: 0,
  evx: 500,
  evy: -500,
  evz: -250,
  em: 1,
  ec: '#8DEEEE',
  er: 3000,
  etc: '#CC33DD',
  eel: false,
  eet: true,

  //camera
  scootLeft: () => {
    let cp = camera.position;
    cp.set(cp.x - CAM_SCOOCH_AMOUNT, cp.y, cp.z)
  },
  scootRight: () => {
    let cp = camera.position;
    cp.set(cp.x + CAM_SCOOCH_AMOUNT, cp.y, cp.z)
  },
  scootUp: () => {
    let cp = camera.position;
    cp.set(cp.x, cp.y + CAM_SCOOCH_AMOUNT, cp.z)
  },
  scootDown: () => {
    let cp = camera.position;
    cp.set(cp.x, cp.y - CAM_SCOOCH_AMOUNT, cp.z)
  },


  type: 'three',
  trails: true,
  stars: true,
  trailRate: 25,
  restart: function () {
    universe.restart()
  },
  openSun: function () {
    openModal(sun)
  },
  openEarth() {
    openModal(earth)
  },
  openMoon: function () {
    openModal(earth)
  },
  toggleTime: function () {
    universe.timeStopped = !universe.timeStopped
  },

}
