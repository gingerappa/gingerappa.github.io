//import './style.css'

import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import { Vector3 } from 'https://unpkg.com/three@0.127.0/build/three.module.js';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

//variables
let log = [false];

//textures
const spaceTexture = new THREE.TextureLoader().load('img/spaceTX.jpg')
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

//const controls = new OrbitControls(camera, renderer.domElement)
// controls.target = new Vector3 (10, 0, -4)

console.log(camera)

//main loop
function run(){
  requestAnimationFrame(run)

  earth.rotation.y += 0.0005
  mars.rotation.y += 0.001

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
    var fovStep = 120/step
    var count = 0
    function test(){
      if(count <= step){
        var positionObject = object.position
        object.position.set(positionObject.x + steps[0], positionObject.y + steps[1], positionObject.z + steps[2])
        if(count < step/2){
          camera.fov += fovStep
          camera.updateProjectionMatrix();
        }
        else{
          camera.fov -= fovStep
        }
        count ++;
        camera.updateProjectionMatrix();
        requestAnimationFrame(test)
      }
      else{
        log[0] = false
        camera.fov = 60
        camera.updateProjectionMatrix();
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
  move(camera, planetsLoc[0], 120)
}

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

function addStar(origin){
  console.log(origin)
  const star = new THREE.Mesh(
    new THREE.SphereGeometry(0.25, 24, 24),
    new THREE.MeshStandardMaterial({color: 0xffffff})
  )
  const [x, y, z] = [THREE.MathUtils.randFloat(0, 100)-origin[0], THREE.MathUtils.randFloat(0, 100)-origin[1], THREE.MathUtils.randFloat(0, 100)-origin[2]]
  star.position.set(x,y,z)
  scene.add(star)
}

document.getElementById("left").onclick = function() {switchPlanet("left")};
document.getElementById("right").onclick = function() {switchPlanet("right")};
//scene.background = spaceTexture

run()
console.log("main.js working")

