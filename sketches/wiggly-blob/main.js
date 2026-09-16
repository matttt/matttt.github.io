
const n = 200
let r
const NOISE_SCALE = 0.01
let noise;


function setup() {
    createCanvas(innerWidth, innerHeight);
    noise = (new OpenSimplexNoise(Date.now()));

    r = Math.min(width, height) * .27
}

let zoff = 0
function draw() {
    background(0)
    translate(width / 2, height / 2)
    noStroke()

    const noiseEffectAmount = map(constrain(mouseY, 0, height), 0, height, .3, .7)

    beginShape()

    zoff += map(mouseX, 0, width, -0.01, 0.01)

    for (let i = 0; i < n; i++) {
        const theta = map(i, 0, n, 0, TWO_PI)
        let x = sin(theta) * r
        let y = cos(theta) * r
        const val = noise.noise3D(x * NOISE_SCALE, y * NOISE_SCALE, zoff)
        const offset = map(val, -1, 1, 1 - noiseEffectAmount, 1 + noiseEffectAmount)

        x *= offset
        y *= offset

        vertex(x, y)
    }

    endShape()

    // background(0)
    // const x = map(noise.noise3D(0,frameCount/1000,1), -1, 1, 0, width)
    // const y = map(noise.noise3D(frameCount/1000,0,1), -1, 1, 0, height)
    // rect(x,y,5,5)
}