const N = 8
class Figure {
    constructor(i,j) {
        this.i = i
        this.j = j
    }

    draw (){
        const pxPerIdx = width/N
        const xOff = this.i*pxPerIdx+pxPerIdx/2
        const yOff = this.j*pxPerIdx+pxPerIdx/2

        const x = xOff + (sin(frameCount/150*(this.i+1))*pxPerIdx/2.2)
        const y = yOff + (cos(frameCount/150*(this.j+1))*pxPerIdx/2.2)

        fill(0)
        circle(x,y,5);

        // text(`${this.i},${this.j}`,xOff,yOff)
    }
}

class Grid {
    constructor() {
        this.grid = []
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                this.grid.push(new Figure(i,j))
            }
        }
    }

    draw() {
        this.grid.forEach(f => f.draw())
    }
}

let grid
function setup () {
    const s = min(innerWidth,innerHeight)
    createCanvas(s,s);
    grid = new Grid()
}

function draw () {

    grid.draw()
}