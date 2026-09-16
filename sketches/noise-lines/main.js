const NOISE_SCALE = .01;
const NUM_LINES = 100

class NoiseLine {
  constructor(x) {
    this.x = x
  }

  draw() {
    for (let y = 0; y < height; y++) {
      const noiseVal = noise(this.x*NOISE_SCALE, y*NOISE_SCALE+(frameCount/100), frameCount/200)
      const scaledNoise = map(noiseVal, 0, 1, -20, 20)

      point(this.x+scaledNoise, y)
    }
  }
}

const lines = []
function setup() {
  createCanvas(400, 400);

  const gap = width / NUM_LINES
  for (let i = 0; i < NUM_LINES; i++) {
    lines.push(new NoiseLine(i * gap))
  }
}

function draw() {
  background(255)
  for (const line of lines) {
    line.draw()
  }
}