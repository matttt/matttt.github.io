function buildFolder(name, prefix) {
    var f = gui.addFolder(name)
    // f.add(g, prefix + 'x').min(-50000).max(50000).step(100).name('init x').listen()
    // f.add(g, prefix + 'y').min(-50000).max(50000).step(100).name('init y').listen()
    // f.add(g, prefix + 'z').min(-50000).max(50000).step(100).name('init z').listen()
    f.add(g, prefix + 'vx').min(-500).max(500).step(10).name('vel x').listen()
    f.add(g, prefix + 'vy').min(-500).max(500).step(10).name('vel y').listen()
    f.add(g, prefix + 'vz').min(-500).max(500).step(10).name('vel z').listen()
    f.add(g, prefix + 'm').min(.25).max(5).step(.25).name('mass').listen()
    // f.add(g, prefix + 'r').min(0).max(10000).step(100).name('radius').listen()
    // f.addColor(g, prefix + 'c').name('color').listen()
    // f.addColor(g, prefix + 'tc').name('trail color').listen()
    // f.add(g, prefix + 'el').name('enable light').listen()
    // f.add(g, prefix + 'et').name('enable trail').listen()
}


function initUi() {
    gui.add(g, 'restart')
    gui.add(g, 'toggleTime').name('start/stop time')
    gui.add(g, 'gravity').min(.1).max(10).step(0.1)
    gui.add(g, 'dt').min(.5).max(3).step(0.05)

    buildFolder('Sun', 's')
    buildFolder('Earth', 'e')
    buildFolder('Moon', 'm')

    let camFolder = gui.addFolder('Camera')
    camFolder.add(g, 'scootLeft').name('Scoot Left')
    camFolder.add(g, 'scootRight').name('Scoot Right')
    camFolder.add(g, 'scootUp').name('Scoot Up')
    camFolder.add(g, 'scootDown').name('Scoot Down')

    let editorsFolder = gui.addFolder('Editors')
    editorsFolder.add(g, 'openSun').name('Sun')
    editorsFolder.add(g, 'openEarth').name('Earth')
    editorsFolder.add(g, 'openMoon').name('Moon')

    gui.add(g, 'trailRate').min(.5).max(30).step(.5)
    gui.add(g, 'trails').name('Draw Trails')
    gui.add(g, 'stars').name('Draw Stars')

    initModal()
}