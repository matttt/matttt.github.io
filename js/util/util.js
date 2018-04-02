function vec(x, y, z) {
  return new THREE.Vector3(x, y, z)
}

function xEtoY(x, y) {
  return x * Math.pow(10, y)
}

function distance(p0, p1) {
  const xDiff = p0[0] - p1[0]
  const yDiff = p0[1] - p1[1]
  const zDiff = p0[2] - p1[2]
  const val = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2) + Math.pow(zDiff, 2))
  return val
}

function vecFromTo(p1, p0) {
  return [p0[0] - p1[0], p0[1] - p1[1], p0[2] - p1[2]]
}

function vecDivC(p0, c) {
  return vec(p0[0] / c, p0[1] / c, p0[2] / c)
}

function vecMultC(p0, c) {
  return vec(p0.x * c, p0.y * c, p0.z * c)
}

function makeSphere(r_, p_, c_, g_) {
  let p = p_ || vec()
  var geometry = new THREE.SphereGeometry(r_, g_ || 10, g_ || 10)
  var material = new THREE.MeshBasicMaterial({ color: c_ })

  mesh = new THREE.Mesh(geometry, material)

  mesh.position.set(p.x, p.y, p.z)

  scene.add(mesh)

  return mesh
}

function addText(text, pos, size, font) {
  var geo = new THREE.TextGeometry(text, {

    font: font,
    size: size,
    height: 1000,
    curveSegments: 4

  });

  geo.computeBoundingBox();

  var centerOffset = -0.5 * (geo.boundingBox.max.x - geo.boundingBox.min.x);

  var materials = [
    new THREE.MeshBasicMaterial({ color: 0xFFFFFA, overdraw: 0.5 }),
    new THREE.MeshBasicMaterial({ color: 0xE56399, overdraw: 0.5 })
  ];

  var mesh = new THREE.Mesh(geo, materials);

  mesh.position.x = centerOffset + pos.x;
  mesh.position.y = pos.y;
  mesh.position.z = pos.z;


  scene.add(mesh)

}
