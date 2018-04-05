class Sphere {
    constructor(posVec, radius, color, name, lights) {
        this.pos = posVec
        this.radius = radius
        this.color = color
        this.trail = '#000000'
        this.mesh = makeSphere(radius, this.posVec, this.color, 30, lights)
        this.vel = vec()
        this.acc = vec()
        this.starCount = 0
        this.m = 1
        this.prefix = ''
        this.name = name || ''
        this.trailSpheres = []
        this.radold = 0
        this.enableLight = false

        if (this.name) this.mesh.material.emissive = (new THREE.Color( color )).multiplyScalar(.7);

        this.mesh.__dirtyPosition = true

        for (let i = 0; i < 10; i++) {
            let s = makeSphere(this.radius / 5, this.pos, this.trail)
            this.trailSpheres.push(s)
        }

        let here = this

        document.body.addEventListener("click", sceneClick, true);
        var raycaster = new THREE.Raycaster();

        function sceneClick(event) {

            var mouse = new THREE.Vector2();
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            var intersects = raycaster.intersectObjects([here.mesh], true); //array
            if (intersects.length > 0) {
                openModal(here)
            }
        }
    }

    applyForce(f) {
        this.acc = f
    }

    update() {
        const dt = g.dt
        let self = this

        this.color = g[this.prefix + 'c']
        if (this.name && universe.timeStopped) this.mesh.material.emissive = (new THREE.Color( this.color )).multiplyScalar(.7);

        this.mesh.material.color = new THREE.Color(this.color)
        this.m = this.baseMass * g[this.prefix + 'm'] * 1000
        this.trail = g[this.prefix + 'tc']
        this.radius = g[this.prefix + 'r']
        this.enableLight = g[this.prefix + 'el']
        this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z)


        if (universe.timeStopped && universe.time === 0) {
            let xP = g[self.prefix + 'x']
            let yP = g[self.prefix + 'y']
            let zP = g[self.prefix + 'z']

            self.mesh.position.set(xP, yP, zP)
        }

        if (this.radold != this.radius) {
            this.mesh.geometry = new THREE.SphereGeometry(g[this.prefix + 'r'], 30, 30)
        }

        if (this.enableLight && this.name === 'sun') {
            this.light.position.set(this.pos.x, this.pos.y, this.pos.z);
        }

        this.radold = this.radius

    }

    updatePhys() {
        if (universe.time > 0) {
            this.vel = this.vel.clone().add(vecMultC(this.acc, FORCE_SCALAR))
            this.pos = this.pos.clone().add(this.vel)
        }
    }


    leaveTrail() {
        let here = this
        if (g[this.prefix + 'et']) {
            if (universe.timeStopped == false && (universe.time / 2 % (31 - g.trailRate)) === 0) {
                here.starCount++;
                let s = makeSphere(this.radius / 5, this.pos, this.trail, Math.round(this.radius / 750))
                here.trailSpheres.push(s)
                if (here.starCount > TRAIL_COUNT_B4_DEL) {
                    scene.remove(here.trailSpheres.shift())
                    here.starCount--;
                }
            }
        } else if (this.starCount) {
            this.starCount = 0;
            scene.remove(this.trailSpheres.shift())
        }
    }

    initLight() {
        this.light = new THREE.PointLight(0xf9a602, 1, 1000000, .999);
        this.light.__dirtyPosition = true
        this.light.position.set(0, 0, 0)
        scene.add(this.light)
    }
}