// Daniel Shiffman
// https://thecodingtrain.com/challenges/86-cube-wave-by-bees-and-bombs
// https://youtu.be/H81Tdrmz2LA
// https://beesandbombs.tumblr.com/post/149654056864/cube-wave

let angle = 0;
let w = 24;
let ma;
let maxD;

let frames = 120;
let noise;

const NOISE_SCALE = 100

function setup() {
    createCanvas(400, 400, WEBGL);
    ma = atan(cos(4 * QUARTER_PI));
    maxD = dist(0, 0, 200, 200);

    noise = (new OpenSimplexNoise(Date.now()));

}

function keyPressed() {
    if (key == " ") {
        const options = {
            units: "frames",
            delay: 0,
            loopLimit: frames
        }
        saveGif("beesandbombs.gif", frames, options);
    }
}

function draw() {
    background(100);
    ortho(-400, 400, 400, -400, 0, 1000);
    rotateX(-ma);
    rotateY(-QUARTER_PI);

    for (let z = 0; z < height; z += w) {
        for (let x = 0; x < width; x += w) {
            push();
            let d = dist(x, z, width / 2, height / 2);
            let offset = map(d, 0, maxD, -PI, PI);
            let a = angle + offset;

            const noiseVal = noise.noise2D((z/NOISE_SCALE)+(frameCount/100), (x/NOISE_SCALE)-(frameCount/300))
            let h = map(noiseVal, -1, 1, 100, 300)

            translate(x - width / 2, 0, z - height / 2);
            normalMaterial();
            box(w, h, w);
            //rect(x - width / 2 + w / 2, 0, w - 2, h);
            pop();
        }
    }

    angle -= TWO_PI / frames;
}
