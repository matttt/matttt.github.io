const NUM_CELLS = 32;
const NOISE_SCALE = .001;

class NoiseGrid {
  constructor(rows, cols, cellSize) {
    this.rows = rows;
    this.cols = cols;
    this.cellSize = cellSize;
  }

  draw() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const x = i * this.cellSize + (this.cellSize/2);
        const y = j * this.cellSize + (this.cellSize/2);

        const noiseVal = noise(x*NOISE_SCALE,y*NOISE_SCALE,frameCount/100)*5
        fill(255, 1)
        circle(x, y, this.cellSize* noiseVal)
      }
    }
  }
}

let grid;
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
  const cellSize = width/NUM_CELLS;

  grid = new NoiseGrid(NUM_CELLS, NUM_CELLS, cellSize)
}

function draw() {
  background(255,.1)
  grid.draw()
}