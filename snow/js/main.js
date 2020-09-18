class SnowFlake {
    constructor(radius, startX,startY,i) {
        this.r = radius
        this.startX = startX
        this.x = startX
        this.y = startY
        this.index = i
        this.image = random(flakeImgs)
    }

    applyForce(vec) {
        this.x += vec.x
        this.y += vec.y
    }

    update() {
        this.x = this.startX + sin(frameCount / 30 + this.index/100) * 10 * (this.r / 20)
        
        if (this.offScreen()) {
            this.y = -20
            this.startX = random(0,width)
        }
    }

    render() {
        //ellipse(this.x, this.y, this.r, this.r)
        push()
        translate(this.x,this.y)
        rotate(frameCount/100)
        image(this.image,0,0,this.r,this.r)
        pop()
    }

    offScreen() {
        if (this.y > height + 10 ||
            this.x > width + this.r ||
            this.x < -this.r) {
            return true
        }
        return false
    }
}

let flakes = []
let flakeImgs = []

function preload() {
    for (let i = 1; i < 18; i++) {
        let img = loadImage(`img/${i}.png`)

        flakeImgs.push(img)
    }
    
  }

function setup() {
    noStroke()
    createCanvas(windowWidth, windowHeight)

    for (let i = 0; i < 500; i++) {

        let size = Math.pow(random(.5,10),3)/30
        
        if (random() > .2 && size > 4) {
            size = random(1,10)
        }

        let newFlake = new SnowFlake(size, 
                                     random(0,width), 
                                     random(-10,height), i)
                                     
        flakes.push(newFlake)
    }

}

const gravity = new p5.Vector(0,1.5)

function draw() {
    background(0)

    stroke(255)

    for (let flake of flakes) {
        let windAngle = noise((flake.x+frameCount/50)/100,(flake.y)/100)*TWO_PI;
        let wind = p5.Vector.fromAngle(windAngle)
        wind.mult(.3)

        

        flake.update()
        flake.applyForce(gravity)
        flake.applyForce(wind)
        flake.render()
    }

}