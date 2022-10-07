//import './style.css'

import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import { Vector3 } from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import * as data from '/html.json';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

//variables
let running = false;
const body = document.getElementById("body");

//textures
const spaceTexture = new THREE.TextureLoader().load('img/spaceTX.jpg')
const earthTexture = new THREE.TextureLoader().load('img/earthTX.jpg')
const earthNormal = new THREE.TextureLoader().load('img/earthNM.jpg')
const marsTexture = new THREE.TextureLoader().load('img/marsTX.jpg')
const marsNormal = new THREE.TextureLoader().load('img/marsNM.jpg')
const jupiterTexture = new THREE.TextureLoader().load('img/jupiterTX.jpg')
const jupiterNormal = new THREE.TextureLoader().load('img/jupiterNM.jfif')


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
const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(14, 100, 100),
  new THREE.MeshStandardMaterial({map: jupiterTexture, wireframe: false}))
earth.rotation.set(0.3, 2, 0.1)
mars.position.set(48, -22, 40)
mars.rotation.set(0.3, 2, 0.1)
jupiter.position.set(96, -44, 80)
jupiter.rotation.set(0.3, 2, 0.1)


var PageCord = [[10, 0, 27, "homePage"], [58, -22, 67, "Year1Home"], [106, -44, 107, "test"]]
scene.add(earth,mars,jupiter);


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


//main loop
function run(){
  requestAnimationFrame(run)

  earth.rotation.y += 0.0005
  mars.rotation.y += 0.001
  jupiter.rotation.y += 0.0002

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
function loadPage(pageName){
  body.innerHTML = data.html[pageName]
  document.getElementById("left").onclick = function() {switchPlanet("left")};
  document.getElementById("right").onclick = function() {switchPlanet("right")};
}

function move(object, newPosition, step){
  var positionObject = object.position
  var steps = [getDifference(positionObject.x, newPosition[0])/step, getDifference(positionObject.y, newPosition[1])/step, getDifference(positionObject.z, newPosition[2])/step]
  var fovStep = 120/step
  var count = 0
  function test(){
    if(count <= step){
      var positionObject = object.position
      object.position.set(positionObject.x + steps[0], positionObject.y + steps[1], positionObject.z + steps[2])
      count ++;
      requestAnimationFrame(test)
    }
    else{
      loadPage(PageCord[0][3])
      running = false
    }
  }
  test()
}

function switchPlanet(directions){
  if(!running){
    running = true
    if (directions == "left"){
      PageCord.unshift(PageCord[PageCord.length - 1])
      PageCord.splice(PageCord.length - 1, 1)
    }
    else{
      PageCord.push(PageCord[0])
      PageCord.splice(0, 1)
    }
    move(camera, PageCord[0], 120)
    
  }
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

