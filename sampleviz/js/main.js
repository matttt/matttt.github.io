var hzSlider, smplSlider, speedSlider, bitDepthSlider;

function labels() {
    // draw labels for sliders
    stroke('black')
    fill('black')
    strokeWeight(0);
    text('sin freq', 20, 15+10)
    text('sample rate', 20, 45+10)
    text('bit depth', 20, 75+10)
    text('animate', 20, 105+10)

}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    rectMode(CENTER)
    fill(0)

    // create sliders
    hzSlider = createSlider(1, 12, 1, .1);
    hzSlider.position(20, 20+10);

    smplSlider = createSlider(1, 32, 8);
    smplSlider.position(20, 50+10);

    bitDepthSlider = createSlider(2, 8, 4);
    bitDepthSlider.position(20, 80+10);

    speedSlider = createSlider(-100, 100, 0);
    speedSlider.position(20, 110 +10);

}

let xOffset = 0;

let hz = 1;
let sampleHz = 8;
let scrubSpeed = 0;
let bitDepth = 4;


let periodLength = 2 * Math.PI;

function twoPitoWidth(x) {
    return map(x, 0, periodLength, 0, width)
}

function getY(x, bitDepthOn) {
    let y = Math.sin(x * hz + xOffset);

    if (bitDepthOn) {
        y = Math.floor(y * Math.pow(2, bitDepth)) / Math.pow(2, bitDepth)
    }


    let scaledY = y * (height / 2.2) + (height / 2);


    return scaledY;
}

const sinColor = "#EA526F";
const sampleColor = "#23B5D3";
const sampleLineColor = "070600";
const backgroundColor = 220;

let first = false;

function draw() {
    first = false;


    hz = hzSlider.value();
    sampleHz = smplSlider.value()
    scrubSpeed = speedSlider.value()
    bitDepth = bitDepthSlider.value()

    background(backgroundColor);

    for (let i = -1; i <= 1; i += 2 / Math.pow(2, bitDepth + 1)) {
        strokeWeight(2)
        stroke(200,200,200)

        const y = i * (height / 2.2) + (height / 2)
        line(0, y, width, y)
    }


    stroke(sinColor);
    strokeWeight(3);
    fill(sinColor);

   

    // let prevPoint = [];
    //1024 lines to make the sin wave
    beginShape()
    noFill()
    vertex(0, getY(0))
    for (let i = 0; i < periodLength; i += periodLength / (hz * 128)) {
        let x = twoPitoWidth(i);
        let y = getY(i, false)

        bezierVertex(x,y,x,y+1,x,y);

    }
    // vertex(, hx/s)
    endShape();

    let sampleWidth = periodLength / sampleHz / 2;
    for (let i = 0; i <= periodLength + 1; i += sampleWidth) {
        let scaledX = twoPitoWidth(i);
        let scaledY = getY(i, true);

        // y value 
        fill(sampleColor)
        stroke(sampleColor)
        strokeWeight(3);
        rect(0, scaledY,5,5)
        line(scaledX, scaledY, scaledX + width/sampleHz/2, scaledY);


        // vertical lines
        stroke(0, 20)
        line(scaledX, 0, scaledX, height)
    }

    xOffset += scrubSpeed / 1000;
    fill(backgroundColor)
    rect(0,0,350,350);
    labels();

}