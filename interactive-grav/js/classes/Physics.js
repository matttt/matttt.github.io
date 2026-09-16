class Physics {
  constructor() {

  }
}

Physics.calcForces = function (bodies, g) {
  let sun = bodies[SUN]
  let earth = bodies[EARTH]
  let moon = bodies[MOON]

  const sunPos = [sun.pos.x, sun.pos.y, sun.pos.z, sun.m]
  const earthPos = [earth.pos.x, earth.pos.y, earth.pos.z, earth.m]
  const moonPos = [moon.pos.x, moon.pos.y, moon.pos.z, moon.m]
  const sunToEarth = vecFromTo(sunPos, earthPos)
  const moonToEarth = vecFromTo(moonPos, earthPos)
  const sunToMoon = vecFromTo(sunPos, moonPos)
  const sunEarthD = distance(sunPos, earthPos)
  const moonEarthD = distance(moonPos, earthPos)
  const sunMoonD = distance(sunPos, moonPos)

  //calculating gravitational forces
  const sunEarthF = (G * g.gravity * ((sun.m * earth.m) / Math.pow(distance(sunPos, earthPos), 2)))
  const moonEarthForce = (G * g.gravity * ((moon.m * earth.m) / Math.pow(distance(moonPos, earthPos), 2)))
  const sunMoonForce = (G * g.gravity * ((sun.m * moon.m) / Math.pow(distance(sunPos, moonPos), 2)))
 
  //adjusting motion to account for gravitational forces

  const sunF1 = vecMultC(vecDivC(sunToEarth, sunEarthD), sunEarthF / sun.m)
  const sunF2 = vecMultC(vecDivC(sunToMoon, sunMoonD), sunMoonForce / sun.m)
  const earthF1 = vecMultC(vecDivC(sunToEarth, sunEarthD), -1 * sunEarthF / earth.m)
  const earthF2 = vecMultC(vecDivC(moonToEarth, moonEarthD), -1 * moonEarthForce / earth.m)
  const moonF1 = vecMultC(vecDivC(moonToEarth, moonEarthD), moonEarthForce / moon.m)
  const moonF2 = vecMultC(vecDivC(sunToMoon, sunMoonD), -1 * sunMoonForce / moon.m)
  let sunF = sunF1.add(sunF2)
  let earthF = earthF1.add(earthF2)
  let moonF = moonF1.add(moonF2)

  let forces = []
  forces[SUN] = sunF
  forces[EARTH] = earthF
  forces[MOON] = moonF

  return forces
}