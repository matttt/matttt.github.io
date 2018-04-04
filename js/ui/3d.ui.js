function addText(text, pos, size, font) {
  var geo = new THREE.TextGeometry(text, {

    font: font,
    size: size,
    height: 1000,
    curveSegments: 2

  });

  geo.computeBoundingBox();

  var centerOffset = -0.5 * (geo.boundingBox.max.x - geo.boundingBox.min.x);

  var materials = [
    new THREE.MeshBasicMaterial({ color: 0xFFFFFA, overdraw: 0.5 }),
    new THREE.MeshBasicMaterial({ color: 0xE56399, overdraw: 0.5 })
  ];

  materials[0].transparent = true;
  materials[1].transparent = true;

  var mesh = new THREE.Mesh(geo, materials);

  mesh.__dirtyPosition = true

  mesh.position.x = centerOffset + pos.x;
  mesh.position.y = pos.y;
  mesh.position.z = pos.z;
  mesh.centerOffset = centerOffset

  scene.add(mesh)

  return mesh
}
