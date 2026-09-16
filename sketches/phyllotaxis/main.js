const goldenAngle = 2.39996322972;
const seedsPerSecond = 45;
let growth = 0;

function setup() {
    createCanvas(innerWidth, innerHeight);
    fill(0);
}

// A seed keeps its birth angle as its age increases its radius and size.
function seedAt(birth) {
    const age = growth - birth;
    return {
        theta: birth * goldenAngle,
        radius: Math.pow(age / 10, 1.3),
        diameter: 1 + age / 75
    };
}

function draw() {
    growth += deltaTime / 1000 * seedsPerSecond;
    background(255);
    translate(width / 2, height / 2);
    const fit = Math.min(width, height) / 640;
    scale(fit);

    // Start with an established flower; negative birth indices are older seeds.
    // Discard seeds beyond the canvas instead of resetting the bloom.
    const outerRadius = Math.hypot(width, height) / (2 * fit) + 40;
    const maxAge = 10 * Math.pow(outerRadius, 1 / 1.3);
    for (let birth = Math.ceil(growth - maxAge); birth <= Math.floor(growth); birth++) {
        const seed = seedAt(birth);
        circle(sin(seed.theta) * seed.radius, cos(seed.theta) * seed.radius, seed.diameter);
    }
}
