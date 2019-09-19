let sun, earth, moon, universe, u
let stars = []
let bodies = []

//lol
let titles = []

function loop() {
    //reg draw: runs at 60fps
    // bodies.forEach((b) => {
    //     b.update()
    // })

    sun.update()
    earth.update()
    moon.update()

    handlers() // js/util/handlers
}


function projectInit() {
    renderer.domElement.style.display = 'none'

    initUi()


    universe = new Universe(scene)

    universe.initBodies(guiOpts)
    universe.drawTitle()
    universe.beginTime(physLoop)

    g.stars = true

    if (g.stars) universe.makeStars(50)

    

}
