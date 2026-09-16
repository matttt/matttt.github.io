let components

function setup () {
    createCanvas(1100,850);

    components = [
        {
            x:735,
            y:235,
            comp: new DigitalAudio()
        },
        {
            x:340,
            y:205,
            comp: new ThreadWheel(),
            // pause:true
        },
        {
            x:920,
            y:25,
            comp: new Blob(),
        },
        {
            x:445,
            y:605,
            comp: new PrimeSpiral(),
        },
        {
            x:750,
            y:550,
            comp: new SpinningSquares(),
            // hide:true
        },
    ]
}

function draw () {
    for (const c of components) {
        if (!c.pause) c.comp.update()
        if (!c.hide) c.comp.draw()

        image(c.comp.pg, c.x, c.y)
    }
}