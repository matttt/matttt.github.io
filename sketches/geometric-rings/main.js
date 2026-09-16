function setup () {
    createCanvas(innerWidth, innerHeight)

    noFill()
}

function draw () {
    background(0)
    stroke(255)
    translate(width/2, height/2)
    let size = 10
    for (let i = 0; i < 200; i++) {
        if (size < (width* 2)) {
            circle(0,0,size)
        }

        size*=(1.3 + (sin(frameCount/100)/4))
    }
}