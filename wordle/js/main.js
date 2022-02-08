
const alphabet = 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z'.split(', ')
const colors = {
  yellow: '#FFA552',
  green: '#87A878',
  gray: '#999999',
  blue: '#A9CEF4',
  text: '#333333'
}

function setOrIncr(obj,field) {
  obj[field] ? obj[field]++ : obj[field] = 1
} 

class LetterGrid {
  constructor(word) {
    this.word = word
    this.curLetter = 0
    this.over = false
    this.letters = [
      ['','','','',''],

      ['','','','',''],
      ['','','','',''],
      ['','','','',''],
      ['','','','',''],
      ['','','','',''],
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
      false,
    ]


    
  }

  draw() {
    const s = width/6
    const ws = width/5

    for (let j = 0; j < 6; j++) { // rows

      const wordLCs = {}

      for (const letter of this.word) {
        setOrIncr(wordLCs, letter)
      }



      if (this.shows[j]) {


        const lettercolors = [null,null,null,null,null]
        console.log(wordLCs)


        for (let i = 0; i < 5; i++) {
          if (this.word[i] === this.letters[j][i]) {
            lettercolors[i] = colors.green
            wordLCs[this.letters[j][i]]--;
          } 
        }


        for (let i = 0; i < 5; i++) {
          if (this.word.includes(this.letters[j][i]) && !lettercolors[i] && wordLCs[this.letters[j][i]] > 0) {
            lettercolors[i] = colors.yellow
            wordLCs[this.letters[j][i]]--;
          } 
        }

        

        console.log(wordLCs)


        for (let i = 0; i < 5; i++) {
          fill(colors.gray)

          if (lettercolors[i]) {
            fill(lettercolors[i])
          } 
          
          square(i*ws, j*s, ws)
          fill(colors.text)
          text(this.letters[j][i], i*ws+ws/2, j*s+s/2+s/4)
        }


      } else {
        for (let i = 0; i < 5; i++) { // cols
          fill('white')
          square(i*ws, j*s, ws)
          fill(colors.text)
          text(this.letters[j][i], i*ws+ws/2, j*s+s/2+s/4)
        }
      }

      
    }
  }

  gg() {
    this.draw() // draw
    setTimeout(() => alert('word was ' + this.word), 100)
  }

  wp() {
    this.draw()
    this.over=true
    
    setTimeout(() => alert('youuuuu got it!'), 100)
  }

  nah(word) {
    this.draw()
    
    setTimeout(() => alert(word+ ' is not a word dummy!'), 100)
  }
  
  addLetter(letter) {
    if (this.curLetter >= 30) return; 

    const rowIdx = Math.floor(this.curLetter/5)
    const colIdx = this.curLetter%5


    if (colIdx === 4) {
      const word = [...this.letters[rowIdx], letter].join('')

      if (word === this.word) {
        this.wp()
      } else if (!allWords.includes(word)) {
        this.nah(word)
        this.letters[rowIdx].forEach((l,idx) => this.letters[rowIdx][idx] = '')

        this.curLetter = rowIdx*5;
        return
      }

      this.shows[rowIdx] = true

    }


    this.letters[rowIdx][colIdx] = letter
    this.curLetter++

    if (this.curLetter === 30 && !this.over) {
      this.gg()
    }
  }

  removeLetter() {
    if (this.curLetter < 1 || this.curLetter%5 === 0) return;

    const rowIdx = Math.floor((this.curLetter-1)/5)
    const colIdx = (this.curLetter-1)%5
    this.letters[rowIdx][colIdx] = ''
    this.curLetter--

  }
}


let letterGrid
function setup() {
  // createCanvas(400, 400);
  const s = Math.min(innerWidth, innerHeight)
  const canvas = createCanvas(s,s).center('horizontal');
  // canvas.parent('viewport');
  textAlign(CENTER)
  textSize((s/5)-100)

  const randomIdx = Math.floor(Math.random()*words.length-1)

  letterGrid = new LetterGrid(words[randomIdx])
  // letterGrid = new LetterGrid('hello')

  noLoop()
}


function keyPressed(e) {
  const letter = e.key.toLowerCase()
  console.log(letter)
  if (alphabet.includes(letter)) {
    letterGrid.addLetter(letter)
  } else if (letter === 'backspace') {
    letterGrid.removeLetter()
  }

  draw()
}

function draw() {
  letterGrid.draw()
}