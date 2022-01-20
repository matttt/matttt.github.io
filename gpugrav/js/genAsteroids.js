const generateAsteroids = () => {
  const asteroids = []
  for (let i = 0; i < N_ROIDS; i++) {
      const angle = map(i, 0, N_ROIDS, 0, TWO_PI)
      const roff = (Math.sin(angle*4)*3)
      const r = 200 + map(Math.random(), 0, 1, 0, 20) + roff
      const m = 1

      const x = Math.sin(angle) * r 
      const y = Math.cos(angle) * r
      const velVec = createVector(x, y).mult(.015).rotate(PI / 2)

      const a = new Asteroid(x, y, velVec.x, velVec.y, m)
      asteroids.push(a)
  }
  return asteroids
}


// const thresh = .1
// const noiseScale = .00001
// const gridSize = 8
// const generateAsteroids = () => {
//   const asteroids = []
//   for (let i = -width/2; i < width/2; i += gridSize) {
//     for (let j = -height/2; j < height/2; j += gridSize) {

//       const x = i;
//       const y = j;

//       const prob = noise(x*noiseScale,y*noiseScale)

//       if (prob > thresh) {
//         // const velVec = createVector(x, y).mult(.005).rotate(PI / 2)
//         const velVec = createVector(-5,0).rotate(Math.random()/3)


//         const a = new Asteroid(x, y, velVec.x, velVec.y, 10)
//         // asteroids[i].push(a)
//         asteroids.push(a)
//       }
//     }
//   }
//   return asteroids
// }