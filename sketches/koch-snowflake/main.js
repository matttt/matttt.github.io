const DEPTH = 5;
const BUILD_SECONDS = 8;
const HOLD_SECONDS = 1.6;
const FOLD_SECONDS = 6;
const REST_SECONDS = .8;
let levels;
let transitions;
let animationTime = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  const radius = Math.min(width, height) * .39;
  levels = [Array.from({length: 3}, (_, i) => {
    const angle = -Math.PI / 2 + i * Math.PI * 2 / 3;
    return {x: Math.cos(angle) * radius, y: Math.sin(angle) * radius};
  })];
  transitions = [];

  for (let depth = 0; depth < DEPTH; depth++) {
    const source = levels[depth];
    const flat = [];
    const expanded = [];
    for (let i = 0; i < source.length; i++) {
      const a = source[i];
      const b = source[(i + 1) % source.length];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const first = {x: a.x + dx / 3, y: a.y + dy / 3};
      const midpoint = {x: a.x + dx / 2, y: a.y + dy / 2};
      const last = {x: a.x + dx * 2 / 3, y: a.y + dy * 2 / 3};
      const peak = {
        x: midpoint.x + dy * Math.sqrt(3) / 6,
        y: midpoint.y - dx * Math.sqrt(3) / 6
      };
      flat.push(a, first, midpoint, last);
      expanded.push(a, first, peak, last);
    }
    transitions.push({flat, expanded});
    levels.push(expanded);
  }
  noFill();
  stroke(255);
  strokeWeight(1.3);
  strokeJoin(ROUND);
}

function growthAt(seconds) {
  const cycle = BUILD_SECONDS + HOLD_SECONDS + FOLD_SECONDS + REST_SECONDS;
  const t = seconds % cycle;
  if (t < BUILD_SECONDS) return t / BUILD_SECONDS * DEPTH;
  if (t < BUILD_SECONDS + HOLD_SECONDS) return DEPTH;
  if (t < BUILD_SECONDS + HOLD_SECONDS + FOLD_SECONDS) {
    return DEPTH * (1 - (t - BUILD_SECONDS - HOLD_SECONDS) / FOLD_SECONDS);
  }
  return 0;
}

function draw() {
  animationTime += deltaTime / 1000;
  background(0);
  translate(width / 2, height / 2);
  const growth = growthAt(animationTime);
  const depth = Math.min(DEPTH - 1, Math.floor(growth));
  const fraction = growth - depth;
  const eased = fraction * fraction * (3 - 2 * fraction);
  const {flat, expanded} = transitions[depth];
  beginShape();
  for (let i = 0; i < flat.length; i++) {
    vertex(
      flat[i].x + (expanded[i].x - flat[i].x) * eased,
      flat[i].y + (expanded[i].y - flat[i].y) * eased
    );
  }
  endShape(CLOSE);
}
