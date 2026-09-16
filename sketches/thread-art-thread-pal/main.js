let currentIdx = 0

console.log(stepList.length)

function setup() {
    createCanvas(innerWidth, innerHeight);

    background(255)

    textAlign(CENTER, CENTER)

    showStep()
}



function showStep() {
    background(255)
    stroke(0)
    strokeWeight(.5)

    responsiveVoice.speak((stepList[currentIdx + 1] + 1).toString())

    if (currentIdx >= stepList.length - 1) {
        alert('ya done chief')
    }

    fill(0)

    textSize(32)

    text('from', width / 8, height / 3 * 1.2)
    text('to', width / 8 * 7, height / 3 * 1.2)

    textSize(12)
    text('step', width / 2, height / 15 * 13.5)
    textSize(32)
    text(currentIdx, width / 2, height / 15 * 14)
    textSize(12)
    text('press j to jump to a specific step', width / 2, height / 15 * 14.5)

    textSize(100)


    text(stepList[currentIdx] + 1, width / 8, height / 2)
    text(stepList[currentIdx + 1] + 1, width / 8 * 7, height / 2)

    noFill()

    const circleSize = height * .75

    circle(width / 2, height / 2, circleSize)

    fill(0)

    for (const point of pointCoords) {
        const x = width / 2 + map(point[0], 0, 1, -circleSize/2, circleSize/2)
        const y = height / 2 + map(point[1], 0, 1, -circleSize/2, circleSize/2)
        circle(x, y, 2)
    }

    noStroke()

    if (typeof stepList[currentIdx] === 'number') {
        fill('red')
        const x1 = width / 2 + map(pointCoords[stepList[currentIdx]][0], 0, 1, -circleSize/2, circleSize/2)
        const y1 = height / 2 + map(pointCoords[stepList[currentIdx]][1], 0, 1, -circleSize/2, circleSize/2)
        circle(x1, y1, 5)


        if (typeof stepList[currentIdx + 1] === 'number') {
            fill('green')
            const x2 = width / 2 + map(pointCoords[stepList[currentIdx + 1]][0], 0, 1, -circleSize/2, circleSize/2)
            const y2 = height / 2 + map(pointCoords[stepList[currentIdx + 1]][1], 0, 1, -circleSize/2, circleSize/2)
            stroke(0)
            strokeWeight(2)
            line(x1, y1, x2, y2)
            noStroke()
            circle(x2, y2, 10)
            strokeWeight(.5)

        }
    }

}

function keyPressed() {
    if (keyCode === 32) {
        if (currentIdx < stepList.length - 1) {
            currentIdx++
            showStep()
        }

    } else if (key === 'b') {
        if (currentIdx > 0) {
            currentIdx--
            showStep()
        }
    } else if (key === 'j') {
        const newIdx = parseInt(prompt('Enter a step number to jump to:'))
        if (newIdx >= 0 && newIdx < stepList.length) {
            currentIdx = newIdx
            showStep()
        } else {
            alert(`Invalid index. Please enter a value between 0 and ${stepList.length - 1}.`)
        }
    } else if (key === 'p') {
        renderProgress()
    } else if (key === 'f') {
        renderFinal()
    }

}

function renderProgress() {
    background(255)

    const sh = height * .95

    noFill()
    stroke(0)

    circle(width / 2, height / 2, sh)

    fill(0)

    for (const point of pointCoords) {
        const x = width / 2 + map(point[0], 0, 1, -sh / 2, sh / 2)
        const y = height / 2 + map(point[1], 0, 1, -sh / 2, sh / 2)
        circle(x, y, 2)
    }

    for (let i = 0; i < currentIdx; i++) {
        const step1 = stepList[i]
        const step2 = stepList[i + 1]

        if (typeof step1 !== 'number' || typeof step2 !== 'number') {
            continue;
        }

        const idx1 = step1
        const idx2 = step2

        const x1 = width / 2 + map(pointCoords[idx1][0], 0, 1, -sh / 2, sh / 2)
        const y1 = height / 2 + map(pointCoords[idx1][1], 0, 1, -sh / 2, sh / 2)

        const x2 = width / 2 + map(pointCoords[idx2][0], 0, 1, -sh / 2, sh / 2)
        const y2 = height / 2 + map(pointCoords[idx2][1], 0, 1, -sh / 2, sh / 2)

        strokeWeight(.5)
        stroke(0, 100)
        console.log('ba')
        line(x1, y1, x2, y2)
    }
}

function renderFinal() {
    background(255)

    const sh = height * .95

    noFill()
    stroke(0)

    circle(width / 2, height / 2, sh)

    fill(0)

    for (const point of pointCoords) {
        const x = width / 2 + map(point[0], 0, 1, -sh / 2, sh / 2)
        const y = height / 2 + map(point[1], 0, 1, -sh / 2, sh / 2)
        circle(x, y, 2)
    }

    for (let i = 0; i < stepList.length - 1; i++) {
        const step1 = stepList[i]
        const step2 = stepList[i + 1]

        if (typeof step1 !== 'number' || typeof step2 !== 'number') {
            continue;
        }

        const idx1 = step1
        const idx2 = step2

        const x1 = width / 2 + map(pointCoords[idx1][0], 0, 1, -sh / 2, sh / 2)
        const y1 = height / 2 + map(pointCoords[idx1][1], 0, 1, -sh / 2, sh / 2)

        const x2 = width / 2 + map(pointCoords[idx2][0], 0, 1, -sh / 2, sh / 2)
        const y2 = height / 2 + map(pointCoords[idx2][1], 0, 1, -sh / 2, sh / 2)

        strokeWeight(.5)
        stroke(0, 100)
        console.log('ba')
        line(x1, y1, x2, y2)
    }
}

function keyReleased() {
    if (key === 'p' || key === 'f') {
        showStep();
    }
}

// function mouseClicked() {

//     // below is clever but could accidentally be going back 

//     // if (mouseX > width / 2) {
//     //     if (currentIdx < stepList.length - 1) {
//     //         currentIdx++
//     //         showStep()
//     //     }
//     // } else {
//     //     if (currentIdx > 0) {
//     //         currentIdx--
//     //         showStep()
//     //     }
//     // }


//     // instead ill just make mouse click go forward
//     currentIdx++
//     showStep()

// }



function draw() {
    // showStep()
    // currentIdx++
}