function addText(text, pos, rsize, font) {
  var canvas = document.createElement('canvas');
  var size = 1000; // CHANGED
  canvas.width = rsize/8;
  canvas.height = rsize/4;
  var context = canvas.getContext('2d');
  context.fillStyle = '#FFFFFA'; // CHANGED
  context.textAlign = 'center';
  context.font = '800px Arial';
  context.fillText(text, canvas.width / 2, canvas.height / 2);
  context.fillStyle = '#E56399'; // CHANGED  
  context.textAlign = 'center';
  context.font = '850px Arial';
  context.fillText(text, size / 2, size / 2);

  var amap = new THREE.Texture(canvas);
  amap.needsUpdate = true;

  var mat = new THREE.SpriteMaterial({
    map: amap,
    transparent: false,
    color: 0xffffff // CHANGED
  });

  var sp = new THREE.Sprite(mat);
  sp.scale.set(rsize, rsize, 1000); // CHANGED
  console.log(pos)  
  sp.position.set(pos.x, pos.y, pos.z); // CHANGED
 
    scene.add(sp);
    console.log(sp.position)
  return sp
}