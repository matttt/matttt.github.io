class MoireSet {
    constructor ({
        pos,
        spacing, 
        n, 
        length, 
        angle
    }) {
        this.offset = createVector(0, 0) 
        this.lines = []
        for (let i = 0; i < n; i++) {
            const space = p5.Vector.mult(spacing, i)
            const start = p5.Vector.add(pos, space)

            const off = createVector(1,0)
                            .setMag(length)
                            .rotate(angle);

            const end = p5.Vector.add(start, off)

            this.lines.push([start, end])
        }
    }

    draw() {
        for (const l of this.lines) {
            const newVecs = l.map(v => p5.Vector.add(v, this.offset))
            line(newVecs[0].x, newVecs[0].y, newVecs[1].x, newVecs[1].y)
        }
    }

    update(off) {
        this.offset = off 
    }
}

const moireSets = []
function setup () {
    createCanvas(800,800);

    moireSets.push(
        new MoireSet({
            pos: createVector(100, 100),
            spacing: createVector(2, 0),
            n: 200,
            length: 400,
            angle: PI/2
        }),
        new MoireSet({
            pos: createVector(500-20, 100),
            spacing: createVector(-4, 1),
            n: 75,
            length: 300,
            angle: PI/2+.05
        })
    )
}

function draw () {
    background(255)
    translate(width / 2, height / 2)
    scale(1.7)
    translate(-300, -300)
    moireSets[1].update(createVector(sin(frameCount/100)*10, cos(frameCount/100)*10))

    for (const set of moireSets) {
        set.draw()
    }
}