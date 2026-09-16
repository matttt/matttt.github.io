function setup () {
    createCanvas(innerWidth, innerHeight)

    noFill()
}

function draw () {
    background(0)
    stroke(255)
    translate(width/2, height/2)
    let r = 10
    for (let i = 0; i < 5000; i++) {
        if (r < (width* 2)) {
            const off = frameCount/100
            const x = sin(i / 100 + off) * r
            const y = cos(i / 100 + off) * r
            point(x,y)
        }

        r*=(1.003 + (sin(frameCount/100)/5000))
    }
}