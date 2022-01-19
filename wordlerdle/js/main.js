const alphabet = 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z'.split(', ')

class LetterGrid {
  constructor(word) {
    this.word = word
    this.curLetter = 0
    this.letters = [
      ['','','','',''],
      ['','','','',''],
      ['','','','',''],
      ['','','','',''],
      ['','','','','']
    ]
    // this.letters = [
    //   ['','','','d','e'],
    //   ['f','g','h','i','j'],
    //   ['','','','',''],
    //   ['','','','',''],
    //   ['','','','','']
    // ]

    this.shows = [
      false,
      false,
      false,
      false,
      false,
    ]


    
  }

  draw() {
    const s = width/5
    for (let i = 0; i < 5; i++) { // cols
      for (let j = 0; j < 5; j++) { // rows
        if (this.shows[j]) {
          const letter = this.letters[j][i]
          if (this.word[i] === letter) {
            fill('green')
          } else if (this.word.includes(letter)) {
            fill('yellow')
          } else {
            fill('grey')
          }
        } else {
          fill('white')
        }
        square(i*s, j*s, s)
        fill('black')
        text(this.letters[j][i], i*s+s/2, j*s+s/2+12)
      }
    }
  }

  gg() {
    alert('word was ' + this.word)
  }

  wp() {
    alert('youuuuu got it!')
  }
  
  addLetter(letter) {
    if (this.curLetter >= 25) return; 

    const rowIdx = Math.floor(this.curLetter/5)
    const colIdx = this.curLetter%5


    if (colIdx === 4) {
      this.shows[rowIdx] = true

      if (this.letters[rowIdx].join('') === this.word) {
        this.wp()
      }
    }
    this.letters[rowIdx][colIdx] = letter
    this.curLetter++

    if (this.curLetter === 25) {
      this.gg()
    }
  }

  removeLetter() {
    if (this.curLetter < 1) return;

    const rowIdx = Math.floor((this.curLetter-1)/5)
    const colIdx = (this.curLetter-1)%5
    this.letters[rowIdx][colIdx] = ''
    this.curLetter--

  }
}


let letterGrid
function setup() {
  // createCanvas(400, 400);
  const canvas = createCanvas(400,400).center('horizontal');
  canvas.parent('viewport');
  textAlign(CENTER)
  textSize(48)

  const randomIdx = Math.floor(Math.random()*words.length-1)

  letterGrid = new LetterGrid(words[randomIdx])
}


function keyPressed(e) {
  const letter = e.key.toLowerCase()
  console.log(letter)
  if (alphabet.includes(letter)) {
    letterGrid.addLetter(letter)
  } else if (letter === 'backspace') {
    letterGrid.removeLetter()
  }
}

function draw() {
  letterGrid.draw()
}