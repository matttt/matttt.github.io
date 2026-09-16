//285 x 95
const NUM_SAMPLES = 10;

class DigitalAudio {
  constructor() {
    this.width = 285;
    this.height = 95;
    this.pg = createGraphics(this.width, this.height);
    this.time = 0;
    this.harmonics = [1, .55, .32, .18, .1];
  }

  update() {
    this.time += deltaTime / 1000;
  }

  draw() {
    const {pg, width, height, time, harmonics} = this;
    pg.background(255);
    pg.noFill();

    // Independent, slow Perlin envelopes let the overtones swell and recede.
    const amplitudes = harmonics.map((weight, i) =>
      weight * (.25 + .75 * noise(31 + i * 19.7, time * .16))
    );
    const amplitudeBudget = harmonics.reduce((sum, weight) => sum + weight, 0);
    const values = Array.from({length: width}, (_, x) => {
      const phase = x / width * TWO_PI;
      const wave = amplitudes.reduce((sum, amplitude, i) =>
        sum + amplitude * sin((i + 1) * (phase + time * .6) + i * .7), 0
      );
      return height / 2 + wave / amplitudeBudget * (height / 2 - 4);
    });

    // Soft sampling guides and step averages beneath the continuous waveform.
    const pxPerSample = width / NUM_SAMPLES;
    for (let i = 0; i < NUM_SAMPLES; i++) {
      const x = i * pxPerSample;
      const sample = values.slice(Math.floor(x), Math.floor(x + pxPerSample));
      const average = sample.reduce((sum, value) => sum + value, 0) / sample.length;
      pg.stroke(215);
      pg.strokeWeight(.5);
      pg.line(x, 0, x, height);
      pg.stroke(140);
      pg.strokeWeight(1);
      pg.line(x, average, x + pxPerSample, average);
    }

    pg.stroke(0);
    pg.strokeWeight(1.3);
    pg.beginShape();
    for (let x = 0; x < width; x++) pg.vertex(x, values[x]);
    pg.endShape();
  }
}
