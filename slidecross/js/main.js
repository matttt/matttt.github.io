const VERTICAL = 1
const HORIZONTAL = 2

let isAnimating = false

const slide1 = new Howl({
    src: ['sound/slide1.mp3']
});
const slide2 = new Howl({
    src: ['sound/slide2.mp3']
});
const slide3 = new Howl({
    src: ['sound/slide3.mp3']
});
const jingle = new Howl({
    src: ['sound/jingle.mp3']
});

const slides = [slide1, slide2, slide3]

function playRandomSlide() {
    // random(slides).play()
}



function arrayRotate(arr, reverse) {
    if (reverse) arr.unshift(arr.pop());
    else arr.push(arr.shift());
    return arr;
}

class Board {
    constructor(startData, answerData) {
        this.data = startData
        this.answerData = answerData
        this.rowOffs = (new Array(startData.length)).fill(0)
        this.colOffs = (new Array(startData.length)).fill(0)

        this.n = this.data.length
        this.w = height / this.n
    }

    draw() {
        const n = this.data.length
        const w = height / n

        textAlign(CENTER)
        textSize(innerHeight / 12)

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {

                let x = i * w
                let y = j * w

                const val = this.data[j][i]

                if (val) {
                    x += this.rowOffs[j]
                    y += this.colOffs[i]

                    fill('white')

                    square(x, y, w)
                }

                if (!val) {
                    //for letter obscured by black squares

                    // horizontals
                    if (this.rowOffs[j] > 0) {
                        for (let k = 1; k < n; k++) {
                            // search for nearest letter to left of black square
                            if (this.data[j].at(i - k)) {
                                fill('white')

                                square(x + this.rowOffs[j], y, w)

                                fill('black')

                                text(this.data[j].at(i - k).toUpperCase(), x + w / 2 + this.rowOffs[j], y + w / 1.5)
                                break
                            }
                        }
                    } else if (this.rowOffs[j] < 0) {
                        for (let k = 1; k < n; k++) {
                            // search for nearest letter to right of black square
                            if (this.data[j].at((i + k) % n)) {
                                fill('white')

                                square(x + this.rowOffs[j], y, w)

                                fill('black')

                                text(this.data[j].at((i + k) % n).toUpperCase(), x + w / 2 + this.rowOffs[j], y + w / 1.5)
                                break
                            }
                        }
                    }

                    //verticals
                    if (this.colOffs[i] > 0) {
                        for (let k = 1; k < n; k++) {
                            // search for nearest letter to above of black square
                            if (this.data.at(j - k)[i]) {
                                fill('white')

                                square(x, y + this.colOffs[i], w)

                                fill('black')

                                text(this.data.at(j - k).at(i).toUpperCase(), x + w / 2, y + w / 1.5 + this.colOffs[i])
                                break
                            }
                        }
                    } else if (this.colOffs[i] < 0) {
                        for (let k = 1; k < n; k++) {
                            // search for nearest letter below black square
                            if (this.data.at((j + k) % n)[i]) {
                                fill('white')

                                square(x, y + this.colOffs[i], w)

                                fill('black')

                                text(this.data.at((j + k) % n)[i].toUpperCase(), x + w / 2, y + w / 1.5 + this.colOffs[i])
                                break
                            }
                        }
                    }

                } else {
                    fill('black')

                    text(val.toUpperCase(), x + w / 2, y + w / 1.5)
                }


            }
        }

        //hidden left side wrap around letters
        for (let i = 0; i < n; i++) {
            let x = -1 * w
            let y = i * w

            const val = this.data.at(i).at(-1)

            if (val) {
                x += this.rowOffs[i]
            }

            fill(val ? 'white' : 'black')

            square(x, y, w)

            if (!val) continue

            fill('black')

            text(val.toUpperCase(), x + w / 2, y + w / 1.5)
        }


        // hidden right side wrap around letters
        for (let i = 0; i < n; i++) {
            let x = n * w
            let y = i * w

            const val = this.data.at(i).at(0)

            if (val) {
                x += this.rowOffs[i]
            }

            fill(val ? 'white' : 'black')

            square(x, y, w)

            if (!val) continue

            fill('black')

            text(val.toUpperCase(), x + w / 2, y + w / 1.5)
        }

        //hidden top side wrap around letters
        for (let i = 0; i < n; i++) {
            let x = i * w
            let y = -1 * w

            const val = this.data.at(-1).at(i)

            if (val) {
                y += this.colOffs[i]
            }

            fill(val ? 'white' : 'black')

            square(x, y, w)

            if (!val) continue

            fill('black')

            text(val.toUpperCase(), x + w / 2, y + w / 1.5)
        }

        //hidden bottom side wrap around letters
        for (let i = 0; i < n; i++) {
            let x = i * w
            let y = n * w

            const val = this.data.at(n % n).at(0)

            if (val) {
                y += this.colOffs[i]
            }

            fill(val ? 'white' : 'black')

            square(x, y, w)

            if (!val) continue

            fill('black')

            text(val.toUpperCase(), x + w / 2, y + w / 1.5)
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                let x = i * w
                let y = j * w

                const val = this.data[j][i]

                if (!val) {
                    fill('black')

                    square(x, y, w)
                }
            }
        }


    }

    checkAnswer() {
        for (let i = 0; i < this.n; i++) {
            for (let j = 0; j < this.n; j++) {
                const userLetter = this.data[i][j]
                const answerLetter = this.answerData[i][j]

                if (userLetter !== answerLetter) return
            }
        }


        jingle.play()
        alert('you did it!!')
    }

    getBoxFromXY(x, y) {
        const n = this.data.length
        const w = height / n

        const i = floor(x / w)
        const j = floor(y / w)

        return this.data[j][i]
    }

    getRowColFromXY(x, y) {
        const n = this.data.length
        const w = height / n

        const i = floor(x / w)
        const j = floor(y / w)

        return [j, i]
    }

    rotateRow(rowIndex, shiftAmt) {
        const nullIndicies = []
        const row = this.data[rowIndex]

        for (let i = 0; i < row.length; i++) {
            if (!row[i]) nullIndicies.push(i)
        }

        const values = row.filter(x => !!x)
        const shiftDir = shiftAmt >= 0
        const shiftCount = abs(shiftAmt)

        for (let i = 0; i < shiftCount; i++) {
            arrayRotate(values, shiftDir)
        }

        const reconstructed = []
        for (let i = 0; i < row.length; i++) {
            if (nullIndicies.includes(i)) {
                reconstructed.push(null)
            } else {
                reconstructed.push(values.shift())
            }
        }

        this.data[rowIndex] = reconstructed
    }

    rotateCol(colIndex, shiftAmt) {
        const nullIndicies = []
        const col = []

        for (let i = 0; i < this.n; i++) {
            col.push(this.data[i][colIndex])
        }

        for (let i = 0; i < col.length; i++) {
            if (!col[i]) nullIndicies.push(i)
        }

        const values = col.filter(x => !!x)
        const shiftDir = shiftAmt >= 0
        const shiftCount = abs(shiftAmt)

        for (let i = 0; i < shiftCount; i++) {
            arrayRotate(values, shiftDir)
        }

        const reconstructed = []
        for (let i = 0; i < col.length; i++) {
            if (nullIndicies.includes(i)) {
                reconstructed.push(null)
            } else {
                reconstructed.push(values.shift())
            }
        }

        for (let i = 0; i < this.n; i++) {
            this.data[i][colIndex] = reconstructed[i]
        }
    }

    shiftRowRight(rowIdx) {
        playRandomSlide()
        isAnimating = true
        const that = this
        createjs.Tween.get(this.rowOffs).to({ [rowIdx]: board.w }, 250, createjs.Ease.getPowIn(1.5)).call(handleComplete);
        function handleComplete() {
            that.rotateRow(rowIdx, 1)
            that.rowOffs[rowIdx] = 0
            that.draw()
            that.checkAnswer()

            isAnimating = false
        }
    }

    shiftRowLeft(rowIdx) {
        playRandomSlide()
        isAnimating = true
        const that = this
        createjs.Tween.get(this.rowOffs).to({ [rowIdx]: -board.w }, 250, createjs.Ease.getPowIn(1.5)).call(handleComplete);
        function handleComplete() {
            that.rotateRow(rowIdx, -1)
            that.rowOffs[rowIdx] = 0
            that.draw()
            that.checkAnswer()

            isAnimating = false
        }
    }

    shiftColDown(colIdx) {
        playRandomSlide()
        isAnimating = true
        const that = this
        createjs.Tween.get(this.colOffs).to({ [colIdx]: board.w }, 250, createjs.Ease.getPowIn(1.5)).call(handleComplete);
        function handleComplete() {
            that.rotateCol(colIdx, 1)
            that.colOffs[colIdx] = 0
            that.draw()
            that.checkAnswer()

            isAnimating = false
        }
    }

    shiftColUp(colIdx) {
        playRandomSlide()
        isAnimating = true
        const that = this
        createjs.Tween.get(this.colOffs).to({ [colIdx]: -board.w }, 250, createjs.Ease.getPowIn(1.5)).call(handleComplete);
        function handleComplete() {
            that.rotateCol(colIdx, -1)
            that.colOffs[colIdx] = 0
            that.draw()
            that.checkAnswer()

            isAnimating = false
        }
    }
}

//https://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


function parseBoardString(str) {
    const rowStrs = str.split('\n')

    const rows = []
    for (const rowStr of rowStrs) {
        if (rowStr.length === 0) continue

        const row = []
        for (const letter of rowStr) {
            if (letter === '#') {
                row.push(null)
            } else {
                row.push(letter)
            }
        }
        rows.push(row)
    }

    return rows
}

function scrambleBoard(boardData) {
    // get null indices and letters
    const n = boardData.length
    const nullIndicies = []
    let letters = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!boardData[j][i]) {
                nullIndicies.push([i, j])
            } else {
                letters.push(boardData[j][i])
            }
        }
    }

    letters = shuffle(letters)

    const newBoard = []
    for (let j = 0; j < n; j++) {
        const row = []
        for (let i = 0; i < n; i++) {
            if (nullIndicies.find(n => n[0] === i && n[1] === j)) {
                row.push(null)
            } else {
                row.push(letters.pop())
            }
        }
        newBoard.push(row)
    }

    return newBoard
}

// const testBoardStr = `
// #RSVP
// PATIO
// SNOBS
// AGREE
// TEMS#
// `
// const testBoardStr = `
// DRS##S
// ROLLSS
// ATEUPS
// WHENIS
// ##PANS
// PPPA##
// `
const testBoardStr = `
BMW##
EIEIO
ARENA
DEPTH
YOU##
`
// const testBoardStr = `
// DRS##S#P
// ROLLSSAP
// ATEUPSAP
// WHENISAP
// ##PANSAP
// PPPA##AP
// PP#A##AP
// SSSSSSSS
// `

let board
function setup() {
    createCanvas(innerHeight, innerHeight);
    const parsedBoardData = parseBoardString(testBoardStr)
    const shuffledData = scrambleBoard(parsedBoardData)
    board = new Board(shuffledData, parsedBoardData)

    board.draw()

    // drawz()


}

let isDragging = false
let directionDecided = null
let mouseStartingPoint = [0, 0]
function mousePressed() {
    isDragging = true;
    mouseStartingPoint = [mouseX, mouseY]
    // prevent default
    return false;
}

function mouseDragged() {

    const mouseDX = mouseX - mouseStartingPoint[0]
    const mouseDY = mouseY - mouseStartingPoint[1]

    const mouseMoved = (abs(mouseDX) > board.w / 2 || abs(mouseDY) > board.w / 2)

    const rowCol = board.getRowColFromXY(...mouseStartingPoint)

    if (!directionDecided && mouseMoved && !isAnimating) {

        if (abs(mouseDX) > abs(mouseDY)) {
            if (mouseDX > 0) {
                board.shiftRowRight(rowCol[0])
                mouseStartingPoint = [mouseX, mouseY]
                directionDecided = null
            } else if (mouseDX < 0) {
                board.shiftRowLeft(rowCol[0])
                mouseStartingPoint = [mouseX, mouseY]
                directionDecided = null
            }
        } else {
            if (mouseDY > 0) {
                board.shiftColDown(rowCol[1])
                mouseStartingPoint = [mouseX, mouseY]
                directionDecided = null
            }
            else if (mouseDY < 0) {
                board.shiftColUp(rowCol[1])
                mouseStartingPoint = [mouseX, mouseY]
                directionDecided = null
            }
        }
    }

    // drawz()

    return false;
}

function mouseReleased() {
    isDragging = false;
    directionDecided = null


    // drawz()

    return false;
}

function draw() {


    if (isAnimating) {
        background(255)

        board.draw()
    }

    // if (frameCount % 60 === 0) {
    //     board.rotateRow(0,1)
    // }
}