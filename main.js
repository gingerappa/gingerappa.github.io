//import './style.css'

import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import { Vector3 } from 'https://unpkg.com/three@0.127.0/build/three.module.js';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const data = 
{"html": 
  {
    "homePage" : "<main class='container-fluid text-center'> <div class='row justify-content-end' style='margin-bottom: 250px'> <div class='col col-lg-6 d-inline p-2 text-bg-dark'> <header> <h1 style='font-family: brandon-grotesque, sans-serif;'>Thijs Swinkels</h1> </header> </div> </div> </main> <div id='leftB'> <button id='left' class='btn btn-dark'>&lt;</button> </div> <div id='rightB'> <button id='right' class='btn btn-dark'>&gt;</button> </div>", 
    "Year1Home" : "<main class='container-fluid text-center d-grid gap-2'> <div class='row justify-content-end'> <div class='col col-lg-4 d-inline p-2 text-bg-dark'> <header class=''> <h1 style='font-family: brandon-grotesque, sans-serif;'>Year 1</h1> </header> </div> </div> <div class='col d-flex justify-content-end'> <button type='button' id='Y1P1' class='btn btn-secondary text-bg-secondary d-inline p-3'> <h2 style='font-family: brandon-grotesque, sans-serif;'>Camera to text</h1> </button> </div> <div class='col d-flex justify-content-end'> <button type='button' id='Y1P2' class='btn btn-secondary text-bg-secondary d-inline p-3'> <h2 style='font-family: brandon-grotesque, sans-serif;'>Random dungeon 2</h1> </button> </div> </main> <div id='leftB'> <button id='left' class='btn btn-dark'>&lt;</button> </div> <div id='rightB'> <button id='right' class='btn btn-dark'>&gt;</button> </div>",
    "Year2Home" : "<main class='container-fluid text-center d-grid gap-2'> <div class='row justify-content-end'> <div class='col col-lg-4 d-inline p-2 text-bg-dark'> <header class=''> <h1 style='font-family: brandon-grotesque, sans-serif;'>Year 2</h1> </header> </div> </div> <div class='col d-flex justify-content-end'> <button type='button' id='Y2P1' class='btn btn-secondary text-bg-secondary d-inline p-3'> <h2 style='font-family: brandon-grotesque, sans-serif;'>Webstore</h1> </button> </div> <div class='col d-flex justify-content-end'> <button type='button' id='Y2P2' class='btn btn-secondary text-bg-secondary d-inline p-3'> <h2 style='font-family: brandon-grotesque, sans-serif;'>Compiler</h1> </button> </div> </main> <div id='leftB'> <button id='left' class='btn btn-dark'>&lt;</button> </div> <div id='rightB'> <button id='right' class='btn btn-dark'>&gt;</button> </div>",
    "Y1P1": "<div class='title'> <h1>Camera to text</h1> </div> <main style='width: 99%;height: 99%'> <div style='display: flex;margin-top: 10rem;margin-left: 6rem;margin-right: 6rem;flex-wrap: wrap;justify-content: space-between;gap: 1rem;'> <div> <img src='img/Y1P1I1.PNG' alt='Image of the code' style='width: 800px;height: 430px;'> </div> <div> <p style='color: #d6d6d6;'> A small program I made for fun in my spare time,<br> it’s a simple script that runs in the terminal <br> and turns the video input of your camara into text. <br>It does this by checking every pixel the <br> camera gives adding the rgb values together dividing <br>them by 47.875 (depends on how many <br> characters u want) which gives a number from 0 to <br> 15 where 0 is the least bright and 15 is the <br> most bright character. It gives the camara this really <br>cool effect that makes it seem like its ascii art </p> </div> </div> </main> <div id='downB'> <button id='down' class='btn btn-dark'>˅</button> </div>",
    "Y1P2": "<div class='title'> <h1>Random dungeon 2</h1> </div> <main style='width: 99%;height: 99%'> <div style='display: flex;margin-top: 10rem;margin-left: 6rem;margin-right: 6rem;flex-wrap: nowrap;justify-content: space-between;gap: 1rem;'> <div> <img src='img/Y1P2I1.PNG' alt='Image of the code' style='width: 800px;height: 430px;'> </div> <div> <p style='color: #d6d6d6;'> A successor to a program I made in high school. This program randomly generates a dungeon for the role playing game dungeons and dragons. It does this by first creating a starting area than on each side. It randomly decides what should go there if anything than it generates that and does the same for the thing it generated and repeat until there is noting to generate. I learned a lot from this project, many working with the tkinter library in python so I can make windows and a GUI </p> </div> </div> </main> <div id='downB'> <button id='down' class='btn btn-dark'>˅</button> </div>",
    "Y2P1": "<div class='title'> <h1>Webstore</h1> </div> <main style='width: 99%;height: 99%'> <div style='display: flex;margin-top: 10rem;margin-left: 6rem;margin-right: 6rem;flex-wrap: nowrap;justify-content: space-between;gap: 1rem;'> <div> <a href='webstore/index.html'><img src='img/Y2P1I1.PNG' alt='Image of the code' style='width: 800px;height: 430px;'></a> </div> <div> <p style='color: #d6d6d6;'> a non functional webstore i made for school where I sell school. For this project we had to learn about arrays and learn how JavaScript works. I used a array with object in it for the items and when u want to order a item it puts in in a cart array. The main things I took a way from this project wasn’t the arrays. It was the html and css and using css instead of bootstrap felt so freeing and I had a lot of fun with this project </p> </div> </div> </main> <div id='downB'> <button id='down' class='btn btn-dark'>˅</button> </div>",
    "Y2P2": "<div class='title'> <h1>Compiler</h1> </div> <main style='width: 99%;height: 99%'> <div style='display: flex;margin-top: 10rem;margin-left: 6rem;margin-right: 6rem;flex-wrap: nowrap;justify-content: space-between;gap: 1rem;'> <div> <img src='img/Y2P2I1.PNG' alt='Image of the code' style='width: 600px;height: 430px;'> </div> <div> <p style='color: #d6d6d6;'> A compiler that turn my own made coding language into Minecraft command so that it is easier to make datapack. What are datapack? Well a datapack in Minecraft is a folder in your Minecraft world folder that has a bunch of Minecraft commands like teleport or setblock. And u can do a bunch of stuff with it, my goal is to make the process of making a datapack clearer and easier. I am learning a lot of things from this project like using the current terms when naming variables and making clear functions </p> </div> </div> </main> <div id='downB'> <button id='down' class='btn btn-dark'>˅</button> </div>"
  }
}

//variables
let running = false;
let arrows = ["left", "right"]
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


var PageCord = [[10, 0, 27, "homePage"], [58, -22, 67, "Year1Home"], [106, -44, 107, "Year2Home"]]
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
  arrows = []
  body.innerHTML = data.html[pageName]
  const ProjectButtons = document.querySelectorAll('button[type="button"]');
  ProjectButtons.forEach(element => {
    element.onclick = function() {loadPage(element.id);move(camera, [camera.position.x+20, camera.position.y + 100, camera.position.z+20], 120)}
  });
  try{
    document.getElementById("down").onclick = function() {switchPlanet("down")};
    arrows.push("down")
  }
  catch{
    //pass
  }
  try{
    document.getElementById("left").onclick = function() {switchPlanet("left")};
    arrows.push("left")
    document.getElementById("right").onclick = function() {switchPlanet("right")};
    arrows.push("right")
  }
  catch{
    //pass
  }
}

function move(object, newPosition, step){
  var positionObject = object.position
  var steps = [getDifference(positionObject.x, newPosition[0])/step, getDifference(positionObject.y, newPosition[1])/step, getDifference(positionObject.z, newPosition[2])/step]
  var opacityStep = 100/step
  var opacity = 0
  var count = 0
  body.style.opacity = 0
  function test(){
    if(count <= step){
      var positionObject = object.position
      object.position.set(positionObject.x + steps[0], positionObject.y + steps[1], positionObject.z + steps[2])
      opacity += opacityStep
      body.style.opacity = `${opacity}%`
      count ++;
      requestAnimationFrame(test)
    }
    else{
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
    else if (directions == "right"){
      PageCord.push(PageCord[0])
      PageCord.splice(0, 1)
    }
    move(camera, PageCord[0], 120)
    loadPage(PageCord[0][3])
  }
}

window.addEventListener("keydown", function (event) {
  console.log(arrows)
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  switch (event.key) {
    case "ArrowLeft":
      if (arrows.includes("left")){switchPlanet("left")}
      break;
    case "ArrowRight":
      if (arrows.includes("right")){switchPlanet("right")}
      break;
    case "ArrowDown":
      if (arrows.includes("down")){switchPlanet("down")}
      break;
    default:
      return; // Quit when this doesn't handle the key event.
    }
  event.preventDefault();
}, true);


function test(){
  console.log("test")
}

document.getElementById("left").onclick = function() {switchPlanet("left")}
document.getElementById("right").onclick = function() {switchPlanet("right")}

scene.background = spaceTexture

run()

