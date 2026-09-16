const numLines = 500;
const noiseSpacing = 250;
class SineLine {
  constructor(y, i) {
    this.y = y;
    this.i = i;
  }

  draw() {
    // stroke(random(100, 255))
    // stroke(÷Math.floor(map(this.i, 0, numLines, 155, 255)))

    strokeWeight(3)
    stroke(189, map(this.i, 0, numLines-1, 50, map(sin(frameCount/100), -1, 1, 20, 100)), 75, .1)
    // const offset1 = map(sin(frameCount/50 + map(this.i, 0, numLines, 0, PI/2)), -1, 1, -height/2 + height/8, height/2 - height/8);
    // const offset2 = map(sin(frameCount/50 + map(this.i, 0, numLines, 0, PI/2) + 1), -1, 1, -height/2 + height/8, height/2 - height/8);

    // const offset11 = map(sin(frameCount/10 + map(this.i, 0, numLines, 0, PI/2)), -1, 1, -height/8, height/8);
    // const offset22 = map(sin(frameCount/10 + map(this.i, 0, numLines, 0, PI/2) + 1), -1, 1, -height/8, height/8);

    // line(0, this.y + offset1 + offset11, width, this.y - offset2 - offset22)

    const offset1 = map(noise(frameCount/500,this.i/noiseSpacing), 0, 1, -height/2, height/2);
    const offset2 = map(noise(frameCount/500+.01,this.i/noiseSpacing), 0, 1, -height/2, height/2);

    line(0, this.y + offset1, width, this.y - offset2)
  }
}

let lines = []
function setup () {
    colorMode(HSB)
    createCanvas(400, 400);

    for (let i = 0; i < numLines; i++) {
      const y = map(i, 0, numLines, 0, height)

      lines.push(new SineLine(height/2, i))
    }
}

function draw () {
    background(255, .3)

    for (const line of lines) {
      line.draw()
    }
}