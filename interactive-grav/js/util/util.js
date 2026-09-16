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

function makeSphere(r_, p_, c_, g_, l_) {
  let p = p_ || vec()
  var geometry = new THREE.SphereGeometry(r_, g_ || 50, g_ || 50)
  var material;

  if (l_) {
    material = new THREE.MeshLambertMaterial({ color: c_ })
  } else {
    material = new THREE.MeshBasicMaterial({ color: c_ })
  }

  mesh = new THREE.Mesh(geometry, material)

  mesh.position.set(p.x, p.y, p.z)

  scene.add(mesh)

  return mesh
}


function debounce(wait, func, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};