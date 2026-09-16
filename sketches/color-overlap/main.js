function getPolarPoint(radius, theta) {
  const trigs = [sin(theta), cos(theta)]
  return trigs.map(t => t * radius)
}

function setup() {
  const circles = [
    {
      color: [255,255,0],
      polarCoord: [50, 0],
      width: 225 
    },
    {
      color: [0,255,255],
      polarCoord: [50, TAU/3],
      width: 225 
    },
    {
      color: [255,0,255],
      polarCoord: [50, 2 * (TAU/3)],
      width: 225 
    },
  ]

  createCanvas(400, 400);

  translate(width/2, height/2);

  noStroke()

  blendMode(MULTIPLY)

  for (const circ of circles) {
    fill(...circ.color, 200);
    const pos = getPolarPoint(...circ.polarCoord);
    circle(...pos, circ.width)
  }
}
