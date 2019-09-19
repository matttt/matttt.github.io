var spriteMap = new THREE.TextureLoader().load("/img/circ.png")
var spriteMaterial = new THREE.SpriteMaterial({
    map: spriteMap,
    color: 0xffffff
})

class Universe {
    constructor(scene) {
        this.scene = scene

        this.time = 0

        this.bodies = []
        this.stars = []
        this.starCount = 0
        this.timeStopped = true

        this.makeSphere = makeSphere
    }

    clearScene() {
        while (this.scene.children.length > 0) {
            this.scene.remove(this.scene.children[0])
        }
    }

    processInput() {
        let g_ = Object.assign({}, g)
        let bodies = this.getCleanBodyArr()

        for (let key of Object.keys(g_)) {
            if (typeof g_[key] == 'function') g_[key] = null
        }

        return g_
    }

    getCleanBodyArr() {
        let newBodies = this.bodies.map((b) => {
            let cleanBody = {
                pos: b.pos,
                m: b.m
            }
            return cleanBody
        })

        return newBodies
    }

    revealUi(here) {
        $(renderer.domElement).fadeIn(2500)
        $(stats.domElement).fadeIn(2500)

        let oldH = $(gui.domElement).css('height')
        $(gui.domElement).css('height', 0)
        $(gui.domElement).animate({
            'height': oldH,
            'opacity': 1
        }, 1000)
        $('#load-wheel').fadeOut(2500)

        onWindowResize()

        let g_ = here.processInput()
        let bodies = here.getCleanBodyArr()

    
        here.timeTick();
    }

    startWorker() {
        let here = this
        // let forces = e.data.forces

        
        this.timeStopped = false

        
        let bodies = here.getCleanBodyArr()

        function tryTick() {

            

                if (here.timeStopped === false) {
                    here.timeTick()
                    let bodies = here.bodies;
                    let g_ = here.processInput()
                    let forces = Physics.calcForces(bodies, g)

                    physLoop(forces, g_)

                } 

                window.requestAnimationFrame(tryTick)

        }

        tryTick()
    }

    beginTime(func) {
        let here = this
        here.startWorker()

        setTimeout(here.revealUi.bind(this, here), 1000)
        // if (!this.worker) this.worker = new Worker('js/util/physics_worker.js');

        // this.worker.onmessage = function (e) {
        //     if (e.data.started === true) {
        //         
        //     } else {
        //         
        //     }
        // }
    }


    timeTick(func) {

        this.time++

    }

    startTime() {
        this.timeStopped = false
    }

    stopTime() {
        this.timeStopped = true
    }

    makeStars(num) {
        let here = this;
        for (var i = 0; i < num; i++) {
            const starX1 = this.bodies[SUN].pos.x + (-Math.random() * 1000000 + 500000) + 50000
            const starY1 = this.bodies[SUN].pos.y + (-Math.random() * 1000000 + 500000)
            const starZ1 = this.bodies[SUN].pos.z + (-Math.random() * 1000000 + 500000)
            const sp1 = vec(starX1, starY1, starZ1)
            const starX2 = this.bodies[SUN].pos.x + (-Math.random() * 100000 + 50000) + 50000
            const starY2 = this.bodies[SUN].pos.y + (-Math.random() * 100000 + 50000)
            const starZ2 = this.bodies[SUN].pos.z + (-Math.random() * 100000 + 50000)
            const sp2 = vec(starX2, starY2, starZ2)


            var star1 = new THREE.Sprite(spriteMaterial)
            var star2 = new THREE.Sprite(spriteMaterial)

            const s1 = Math.random() + 5 * 200
            const s2 = Math.random() + 5 * 50

            star1.scale.set(s1, s1, 1)
            star2.scale.set(s2, s2, 1)

            star1.position.set(sp1.x, sp1.y, sp1.z)
            star2.position.set(sp2.x, sp2.y, sp2.z)

            here.stars.push(star1, star2);
            this.scene.add(star1)
            this.scene.add(star2)

            // let star1 = this.makeSphere(Math.random() + 5 * 100, starPos1, '#FFFFFF', 2)
            // let star2 = this.makeSphere(Math.random() + 5 * 25, starPos2, '#FFFFFF', 2)
            // this.stars.push(star1, star2)

            this.starCount += 2
        }
    }

    drawTitle() {
        var loader = new THREE.FontLoader();
        loader.load('fonts/droid.json', function (font) {
            let titlePos = TITLE.POS;
            let subTitlePos = TITLE.POS.clone().add(vec(0, -6000, 0));

            titles.push(addText(TITLE.TEXT, titlePos, 16384, font))
            titles.push(addText(TITLE.SUBTEXT, subTitlePos, 8192, font))
        })
    }

    restart() {
        this.time = 0
        this.initBodies(g)

        let cp = camera.position
        cp.set(0, 0, CAM_INIT_POS.z)
        camera.lookAt(this.bodies[SUN].pos)
    }

    cleanStars(num) {
        for (let i = 0; i < num; i++) scene.remove(this.stars.shift())
        this.starCount -= num;
    }

    initBody(name, prefix, mass) {
        let p = vec(g[prefix + 'x'], g[prefix + 'y'], g[prefix + 'z']);
        let body = new Sphere(p, g[prefix + 'r'], g[prefix + 'c'], name, true)
        body.baseMass = xEtoY(mass[0], mass[1])
        body.vel = vec(g[prefix + 'vx'], g[prefix + 'vy'], g[prefix + 'vz'])
        body.acc = vec()
        body.m = xEtoY(mass[0], mass[1]) * g[prefix + 'm'] * 1000
        body.trail = g[prefix + 'tc']
        body.prefix = prefix

        if (name === 'sun') body.initLight()

        return body
    }

    initBodies(bodies, guiOpts) {
        this.clearScene()

        sun = this.initBody('sun', 's', [6, 16])//mass in  x E y = x * 10 ^ y format
        earth = this.initBody('earth', 'e', [4, 14])
        moon = this.initBody('moon', 'm', [6, 8])

        this.bodies[SUN] = sun
        this.bodies[EARTH] = earth
        this.bodies[MOON] = moon
    }
}