//import './style.css'

import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import { Vector3 } from 'https://unpkg.com/three@0.127.0/build/three.module.js';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

//variables
let log = [false];

//textures
const earthTexture = new THREE.TextureLoader().load('img/earthTX.jpg')
const earthNormal = new THREE.TextureLoader().load('img/earthNM.jpg')
const marsTexture = new THREE.TextureLoader().load('img/marsTX.jpg')
const marsNormal = new THREE.TextureLoader().load('img/marsNM.jpg')


//setting everything up
const scene = new THREE.Scene(); //scene
const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000); //camera
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'), // renderer
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(10, 0, 27);


// adding objects
const earth = new THREE.Mesh(
    new THREE.SphereGeometry(14, 100, 100),
    new THREE.MeshStandardMaterial({map: earthTexture, wireframe: false, normalMap: earthNormal}))
const mars = new THREE.Mesh(
  new THREE.SphereGeometry(14, 100, 100),
  new THREE.MeshStandardMaterial({map: marsTexture, wireframe: false, normalMap: marsNormal}))
earth.rotation.set(0.3, 2, 0.1)
mars.position.set(48, -22, 40)
mars.rotation.set(0.3, 2, 0.1)

var planetsLoc = [[10, 0, 27], [58, -22, 67]]
scene.add(earth,mars);


// adding light 0xFFE87C
const lightE = new THREE.DirectionalLight(0xFFE87C, 1);
const ambientLight = new THREE.AmbientLight(0x87CEEB, 0.2);

lightE.position.set(70,10,-30)
scene.add(lightE, ambientLight)

//helpers
// const lightHelper = new THREE.PointLightHelper(light)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement)
// controls.target = new Vector3 (10, 0, -4)

//main loop
function run(){
  requestAnimationFrame(run)

  earth.rotation.y += 0.0005
  mars.rotation.y += 0.001
  console.log(camera.fov)
  //camera.fov += 1
  camera.updateProjectionMatrix();

  renderer.render(scene, camera);
}

function getDifference(a, b){
  if((a < 0 && b >= 0)||(b < 0 && a >= a)){
    return (a - b) * -1
  }
  else{
    if (a >= b) {
      return (b - a);
    }
    else{
      return (a - b) * -1;
    }
  }
}

function move(object, newPosition, step){
  if(!log[0]){
    log[0] = true
    var positionObject = object.position
    var steps = [getDifference(positionObject.x, newPosition[0])/step, getDifference(positionObject.y, newPosition[1])/step, getDifference(positionObject.z, newPosition[2])/step]
    var count = 0
    function test(){
      if(count <= step){
        count ++;
        var positionObject = object.position
        object.position.set(positionObject.x + steps[0], positionObject.y + steps[1], positionObject.z + steps[2])
        requestAnimationFrame(test)
      }
      else{
        log[0] = false
        if(log.length != 1){
          move(log[1][0], log[1][1], log[1][2])
          log.splice(1, 1)
        }
      }
    }
    test()
  }
  else{
    log.push([object, newPosition, step])
  }
}

function switchPlanet(directions){
  if (directions == "left"){
    planetsLoc.unshift(planetsLoc[planetsLoc.length - 1])
    planetsLoc.splice(planetsLoc.length - 1, 1)
  }
  else{
    planetsLoc.push(planetsLoc[0])
    planetsLoc.splice(0, 1)
  }
  move(camera, planetsLoc[0], 60)
}
document.getElementById("left").onclick = function() {switchPlanet("left")};
document.getElementById("right").onclick = function() {switchPlanet("right")};

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  switch (event.key) {
    case "ArrowLeft":
      switchPlanet("left")
      break;
    case "ArrowRight":
      switchPlanet("right")
      break;
    default:
      return; // Quit when this doesn't handle the key event.
    }
  event.preventDefault();
}, true);






function agenda(){
  console.log(`-7  sep
-13 sep 13:30-17:00
-14 sep 9:30-13:00`);
}

run()
console.log("main.js working")

