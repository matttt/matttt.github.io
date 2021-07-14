function setup() {
  createCanvas(400, 600);

  // noLoop()
}

const points = []

function draw() {

  background(255)

  stroke('black')

  circle(200, 200, 400)

  // for (let i = 0; i < 10000000; i++) {
    points.push([random(400), random(400)])
  // }

  let inCount = 0;

  for (const p of points) {
    if (dist(p[0], p[1], 200, 200) < 200) {
      inCount++;
      stroke('red')
    } else {
      stroke('black')
    }

    point(p[0], p[1])
  }

  const squareArea = 400*400;

  const circleArea = (inCount / points.length) * squareArea;

  const ourPi = circleArea /  Math.pow(400/2, 2);


  textSize(36)

  stroke('black')

  text(ourPi, 20, 500)


}