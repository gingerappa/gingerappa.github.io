//import './style.css'

import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import { Vector3 } from 'https://unpkg.com/three@0.127.0/build/three.module.js';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';


//textures
const earthTexture = new THREE.TextureLoader().load('img/earthTX.jpg')
const earthNormal = new THREE.TextureLoader().load('img/earthNM.jpg')

//setting everything up
const scene = new THREE.Scene(); //scene
const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000); //camera
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'), // renderer
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(58,-22,67);


// adding objects
const earth = new THREE.Mesh(
    new THREE.SphereGeometry(14, 100, 100),
    new THREE.MeshStandardMaterial({map: earthTexture, wireframe: false, normalMap: earthNormal}))
const mars = new THREE.Mesh(
  new THREE.SphereGeometry(14, 100, 100),
  new THREE.MeshStandardMaterial({map: earthTexture, wireframe: false, normalMap: earthNormal}))
earth.rotation.set(0.3, 2, 0.1)

var planetsLoc = [new Vector3(10, 0, 27), new Vector3(58, 22, 67)]
scene.add(earth);


// adding light 0xFFE87C
const light = new THREE.DirectionalLight(0xFFE87C, 1);
const ambientLight = new THREE.AmbientLight(0x87CEEB, 0.2);

light.position.set(70,10,-30)
scene.add(light, ambientLight)

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
  
  renderer.render(scene, camera);
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
  console.log(planetsLoc)
  camera.position.set(planetsLoc[0])
}
document.getElementById("left").onclick = function() {switchPlanet("left")};
document.getElementById("right").onclick = function() {switchPlanet("right")};

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  switch (event.key) {
    case "ArrowDown":
      camera.position.x += 0.1
      break;
    case "ArrowUp":
      camera.position.x -= 0.1
      break;
    case "ArrowLeft":
      camera.position.y += 0.1
      break;
    case "ArrowRight":
      camera.position.y -= 0.1
      break;
    case " ":
      camera.position.z += 0.5
      break;
    case "Shift":
      camera.position.z -= 0.5
      break;
    default:
      console.log(event.key)
      return; // Quit when this doesn't handle the key event.
    }
  console.log(camera.position)
  event.preventDefault();
}, true);






function agenda(){
  console.log(`-7  sep
-13 sep 13:30-17:00
-14 sep 9:30-13:00`);
}

run()
console.log("main.js working")

