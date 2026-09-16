const GR = 1.61803398875;
const DEPTH = 11;
let sq;
let animationTime = 0;

class MetaSquare {
  constructor(size, depth = 0, isVert = false) {
    this.size = size;
    this.depth = depth;
    this.isVert = isVert;
    if (depth < DEPTH) {
      this.children = [
        new MetaSquare(size / GR, depth + 1, !isVert),
        new MetaSquare(size / GR, depth + 1, !isVert)
      ];
    }
  }

  draw(growth) {
    const phase = constrain(growth - this.depth + 1, 0, 1);
    const open = phase * phase * (3 - 2 * phase);
    if (open === 0) return;
    if (this.children) {
      const childPhase = constrain(growth - this.depth, 0, 1);
      const spread = childPhase * childPhase * (3 - 2 * childPhase);
      const distance = (this.size + this.size / GR) / 2 * spread;
      this.children.forEach((child, index) => {
        const direction = index === 0 ? -1 : 1;
        push();
        translate(this.isVert ? 0 : direction * distance, this.isVert ? direction * distance : 0);
        child.draw(growth);
        pop();
      });
    }
    push();
    rotate((1 - open) * HALF_PI * (this.isVert ? -1 : 1));
    const h = this.size / 2 * open;
    beginShape();
    vertex(0, -h);
    vertex(-h, 0);
    vertex(0, h);
    vertex(h, 0);
    endShape(CLOSE);
    pop();
  }
}

function growthAt(seconds) {
  const t = seconds % 16;
  if (t < 8) return t / 8 * DEPTH;
  if (t < 10) return DEPTH;
  if (t < 15) return DEPTH * (1 - (t - 10) / 5);
  return 0;
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  sq = new MetaSquare(Math.min(width, height) * .29);
  noStroke();
  fill(255);
}

function draw() {
  animationTime += deltaTime / 1000;
  background(0);
  translate(width / 2, height / 2);
  sq.draw(growthAt(animationTime));
}
