importScripts('../../libs/three.js');
importScripts('util.js');
importScripts('constants.js');
importScripts('../classes/Physics.js');

postMessage({ started: true });

onmessage = function (e) {
  let bodies = e.data.bodies;
  let g = e.data.g;

  
  let forces = Physics.calcForces(bodies, g)

  postMessage({ forces: forces });
}