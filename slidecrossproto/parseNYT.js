const fs = require('fs')

const data = JSON.parse(fs.readFileSync('./mini.json'))

const n = data.body[0].dimensions.width
// console.log(data.body)

const board = []
for (let j = 0; j < n; j++) {
  const row = []
  for (let i = 0; i < n; i++) {
    const cell = data.body[0].cells[j*n+i]

    if (!cell.answer) {
      row.push(null)
    } else {
      row.push(cell.answer)
    }
  }
  board.push(row)
}


let out = ''
for (const row of board) {
  let rowStr = ''
  for (const letter of row) {
    if (!letter) {
      rowStr+='#'
    } else {
      rowStr+=letter
    }
  }
  out+=rowStr+'\n'
}

console.log(out)

