var camera, scene, renderer, controls, gui, mesh, stats

init()
animate()

function init() {

  camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 10000000)
  camera.position.z = CAM_INIT_POS.z
  camera.__dirtyPosition = true

  scene = new THREE.Scene()

  controls = new THREE.OrbitControls(camera)

  var light = new THREE.AmbientLight(0x404040, .2); // soft white light
  scene.add(light);

  controls.enableDamping = true
  controls.autoRotate = false
  controls.rotateSpeed = .05
  controls.dampingFactor = .03

  var dir = new THREE.Vector3(1, 2, 0);

  //normalize the direction vector (convert to vector of length 1)
  dir.normalize();

  var origin = new THREE.Vector3(0, 0, 0);
  var length = 50000;
  var hex = 0xffffff;

  var arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
  arrowHelper.headWidth = 10000;
  scene.add(arrowHelper);

  stats = new Stats();
  stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
  stats.domElement.style.display = 'none'
  document.body.appendChild(stats.dom);

  renderer = new THREE.WebGLRenderer({
    antialias: true
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  // let container = document.createElement('div')
  // container.appendChild(renderer.domElement)

  // document.body.appendChild(container)

  document.body.appendChild(renderer.domElement)

  gui = new dat.gui.GUI()
  gui.remember(guiOpts)
  $(gui.domElement).css('opacity', 0)
  gui.close()
  // gui.useLocalStorage = true


  projectInit()

  window.addEventListener('resize', onWindowResize, false)
}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)

}

function animate() {
  stats.begin();

  loop()
  controls.update()
  renderer.render(scene, camera)

  stats.end();

  requestAnimationFrame(animate)

}