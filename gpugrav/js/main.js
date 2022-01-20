let universe;
function setup() {
  const s = Math.min(innerWidth, innerHeight)
  // createCanvas(s, s).center('horizontal');
  createCanvas(innerWidth, innerHeight).center('horizontal');
  // createCanvas(innerWidth, innerHeight)

  universe = new Universe();

  frameRate(60)

  // console.log(universe.toMatrix())
}

function draw() {
  // console.log(frameRate())
  translate(width/2, height/2)
  background(0)
  universe.update()
  universe.computeGravityFrame()
  universe.draw()
}




