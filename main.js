//import './style.css'

import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import { Vector3 } from 'https://unpkg.com/three@0.127.0/build/three.module.js';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const data = 
{"html": 
  {
    "en" : {
      "homePage" : "<main class='container-fluid text-center'> <div class='row justify-content-end' style='margin-bottom: 250px'> <div class='col col-lg-6 d-inline p-2 text-bg-dark'> <header> <h1 style='font-family: brandon-grotesque, sans-serif;'>Thijs Swinkels</h1> </header> </div> </div> </main> <div id='rightB'> <button id='right' class='btn btn-dark'><img src='img/arrow right.png' alt='>'></button> </div>", 
      "Year1Home" : "<main class='container-fluid text-center d-grid gap-2'> <div class='row justify-content-end'> <div class='col col-lg-4 d-inline p-2 text-bg-dark'> <header class=''> <h1 style='font-family: brandon-grotesque, sans-serif;'>Year 1</h1> </header> </div> </div> <div class='col d-flex justify-content-end'> <button type='button' id='Y1P1' class='btn btn-secondary text-bg-secondary d-inline p-3'> <h2 style='font-family: brandon-grotesque, sans-serif;'>Camera to text</h1> </button> </div> <div class='col d-flex justify-content-end'> <button type='button' id='Y1P2' class='btn btn-secondary text-bg-secondary d-inline p-3'> <h2 style='font-family: brandon-grotesque, sans-serif;'>Random dungeon 2</h1> </button> </div> </main> <div id='leftB'> <button id='left' class='btn btn-dark'><img src='img/arrow left.png' alt='<'></button> </div> <div id='rightB'> <button id='right' class='btn btn-dark'><img src='img/arrow right.png' alt='>'></button> </div>",
      "Year2Home" : "<main class='container-fluid text-center d-grid gap-2'> <div class='row justify-content-end'> <div class='col col-lg-4 d-inline p-2 text-bg-dark'> <header class=''> <h1 style='font-family: brandon-grotesque, sans-serif;'>Year 2</h1> </header> </div> </div> <div class='col d-flex justify-content-end'> <button type='button' id='Y2P1' class='btn btn-secondary text-bg-secondary d-inline p-3'> <h2 style='font-family: brandon-grotesque, sans-serif;'>Webstore</h1> </button> </div> <div class='col d-flex justify-content-end'> <button type='button' id='Y2P2' class='btn btn-secondary text-bg-secondary d-inline p-3'> <h2 style='font-family: brandon-grotesque, sans-serif;'>Compiler</h1> </button> </div> </main> <div id='leftB'> <button id='left' class='btn btn-dark'><img src='img/arrow left.png' alt='<'></button> </div> ",
      "Y1P1": "<div class='title'> <h1>Camera to text</h1> </div> <main style='width: 99%;height: 99%'> <div style='display: flex;margin-top: 10rem;margin-left: 4rem;margin-right: 4rem;flex-wrap: nowrap;justify-content: space-around;gap: 1rem;'> <div> <img src='img/Y1P1I1.PNG' alt='Image of the code' style='width: 800px;height: 430px;'> </div> <div> <p style='color: #d6d6d6;'> A small program I made for fun in my spare time, it’s a simple script that runs in the terminal  and turns the video input of your camara into text. It does this by checking every pixel the  camera gives adding the rgb values together dividing them by 47.875 (depends on how many  characters u want) which gives a number from 0 to  15 where 0 is the least bright and 15 is the  most bright character. It gives the camara this really cool effect that makes it seem like its ascii art </p> </div> </div> </main> <div id='downB'> <button id='down' class='btn btn-dark'><IMG SRC='IMG/arrow down.png' ALT='˅'></button> </div>",
      "Y1P2": "<div class='title'> <h1>Random dungeon 2</h1> </div> <main style='width: 99%;height: 99%'> <div style='display: flex;margin-top: 10rem;margin-left: 4rem;margin-right: 4rem;flex-wrap: nowrap;justify-content: space-around;gap: 1rem;'> <div> <img src='img/Y1P2I1.PNG' alt='Image of the code' style='width: 800px;height: 430px;'> </div> <div> <p style='color: #d6d6d6;'> A successor to a program I made in high school. This program randomly generates a dungeon for the role playing game dungeons and dragons. It does this by first creating a starting area than on each side randomly decides what should go there if anything than it generates that and does the same for the things it generateds and repeat until there is noting to generate. I learned a lot from this project, mainly working with the tkinter library in python so I can make windows and a GUI </p> </div> </div> </main> <div id='downB'> <button id='down' class='btn btn-dark'><IMG SRC='IMG/arrow down.png' ALT='˅'></button> </div>",
      "Y2P1": "<div class='title'> <h1>Webstore</h1> </div> <main style='width: 99%;height: 99%'> <div style='display: flex;margin-top: 10rem;margin-left: 4rem;margin-right: 4rem;flex-wrap: nowrap;justify-content: space-around;gap: 1rem;'> <div> <a href='webstore/index.html'><img class='click' src='img/Y2P1I1.PNG' alt='Image of the code' style='width: 800px;height: 430px;'></a> </div> <div> <p style='color: #d6d6d6;'> a non functional webstore i made for school where I sell schools. For this project we had to learn about arrays and learn how JavaScript works. I used a array with object in it for the items and when u want to order a item it puts in in a cart array. The main things I took a way from this project wasn’t the arrays. It was the html and css and using css instead of bootstrap felt so freeing and I had a lot of fun with this project </p> </div> </div> </main> <div id='downB'> <button id='down' class='btn btn-dark'><IMG SRC='IMG/arrow down.png' ALT='˅'></button> </div>",
      "Y2P2": "<div class='title'> <h1>Compiler</h1> </div> <main style='width: 99%;height: 99%'> <div style='display: flex;margin-top: 10rem;margin-left: 4rem;margin-right: 4rem;flex-wrap: nowrap;justify-content: space-around;gap: 1rem;'> <div> <img src='img/Y2P2I1.PNG' alt='Image of the code' style='width: 600px;height: 430px;'> </div> <div> <p style='color: #d6d6d6;'> A compiler that turn my own made coding language into Minecraft command so that it is easier to make datapack. What are datapack? Well a datapack in Minecraft is a folder in your Minecraft world folder that has a bunch of Minecraft commands like teleport or setblock. And u can do a bunch of stuff with it, my goal is to make the process of making a datapack clearer and easier. I am learning a lot of things from this project like using the correct terms when naming variables and making clear functions </p> </div> </div> </main> <div id='downB'> <button id='down' class='btn btn-dark'><IMG SRC='IMG/arrow down.png' ALT='˅'></button> </div>",
      "aboutMe": "<div class='title'> <h1>About me</h1> </div> <main style='width: 99%;height: 99%'> <div style='display: flex;margin-top: 10rem;margin-left: 4rem;margin-right: 4rem;flex-wrap: nowrap;justify-content: space-between;gap: 1rem;'> <div> <img src='img/me.png' alt='image of me' style='width: 500px;height: 540px;'> </div> <div> <p style='color: #d6d6d6;'> Hey, I am Thijs Swinkels. I am 17 years old and I study at Sint Lucas. I have a passion for programming especially python. I have always messing around with projects and now that I am studying at Sint Lucas I can turn it into more than a passion.<br><br>  On my portfolio page u can see some of the projects I made for passion or for school. This page might look confusing with all of the planets but its suppose to represent my journey through computer programming where every planet is a new turning point. Will you be the next planet? </p> <div style='display:flex;justify-content: space-evenly;'> <a href='https://discordapp.com/users/353833879007789057'><img class='click' src='img/discordLogo.png' alt='discord logo' style='width: 50px;height: 50px'></a> <a href='https://github.com/gingerappa'><img class='click' src='img/githubLogo.png' alt='github logo' style='width: 50px;height: 50px'></a> <a href='mailto:toriko65swinkels@gmail.com'><img class='click' src='img/mailLogo.png' alt='mail icon' style='width: 50px;height: 50px'></a> </div> </div> </div> </main> <div id='downB'> <button id='down' class='btn btn-dark'><IMG SRC='IMG/arrow down.png' ALT='˅'></button> </div>"
    },
    "nl" : {
      "homePage" : "<main class='container-fluid text-center'> <div class='row justify-content-end' style='margin-bottom: 250px'> <div class='col col-lg-6 d-inline p-2 text-bg-dark'> <header> <h1 style='font-family: brandon-grotesque, sans-serif;'>Thijs Swinkels</h1> </header> </div> </div> </main> <div id='rightB'> <button id='right' class='btn btn-dark'><img src='img/arrow right.png' alt='>'></button> </div>", 
      "Year1Home" : "<main class='container-fluid text-center d-grid gap-2'> <div class='row justify-content-end'> <div class='col col-lg-4 d-inline p-2 text-bg-dark'> <header class=''> <h1 style='font-family: brandon-grotesque, sans-serif;'>Year 1</h1> </header> </div> </div> <div class='col d-flex justify-content-end'> <button type='button' id='Y1P1' class='btn btn-secondary text-bg-secondary d-inline p-3'> <h2 style='font-family: brandon-grotesque, sans-serif;'>Camera to text</h1> </button> </div> <div class='col d-flex justify-content-end'> <button type='button' id='Y1P2' class='btn btn-secondary text-bg-secondary d-inline p-3'> <h2 style='font-family: brandon-grotesque, sans-serif;'>Random dungeon 2</h1> </button> </div> </main> <div id='leftB'> <button id='left' class='btn btn-dark'><img src='img/arrow left.png' alt='<'></button> </div> <div id='rightB'> <button id='right' class='btn btn-dark'><img src='img/arrow right.png' alt='>'></button> </div>",
      "Year2Home" : "<main class='container-fluid text-center d-grid gap-2'> <div class='row justify-content-end'> <div class='col col-lg-4 d-inline p-2 text-bg-dark'> <header class=''> <h1 style='font-family: brandon-grotesque, sans-serif;'>Year 2</h1> </header> </div> </div> <div class='col d-flex justify-content-end'> <button type='button' id='Y2P1' class='btn btn-secondary text-bg-secondary d-inline p-3'> <h2 style='font-family: brandon-grotesque, sans-serif;'>Webstore</h1> </button> </div> <div class='col d-flex justify-content-end'> <button type='button' id='Y2P2' class='btn btn-secondary text-bg-secondary d-inline p-3'> <h2 style='font-family: brandon-grotesque, sans-serif;'>Compiler</h1> </button> </div> </main> <div id='leftB'> <button id='left' class='btn btn-dark'><img src='img/arrow left.png' alt='<'></button> </div> ",
      "Y1P1": "<div class='title'> <h1>Camera to text</h1> </div> <main style='width: 99%;height: 99%'> <div style='display: flex;margin-top: 10rem;margin-left: 4rem;margin-right: 4rem;flex-wrap: nowrap;justify-content: space-between;gap: 1rem;'> <div> <img src='img/Y1P1I1.PNG' alt='Image of the code' style='width: 800px;height: 430px;'> </div> <div> <p style='color: #d6d6d6;'> Een klein programma dat ik in mijn vrije tijd voor de lol heb gemaakt,  het is een eenvoudig programma dat in de terminal werkt en zet de video-invoer van je camera om in tekst characters. Het doet dit door elke pixel te controleren die camera geeft. Het optellen van de rgb-waarden van de pixel ze te delen door 47,875 (afhankelijk van hoeveel tekens die je wilt) dat een  getal van 0 tot 15 geeft, waarbij 0 het minst helder is en 15 het meest heldere karakter. Het geeft de camara dit echt coole effect waardoor het lijkt op ascii art </p> </div> </div> </main> <div id='downB'> <button id='down' class='btn btn-dark'><IMG SRC='IMG/arrow down.png' ALT='˅'></button> </div>",
      "Y1P2": "<div class='title'> <h1>Random dungeon 2</h1> </div> <main style='width: 99%;height: 99%'> <div style='display: flex;margin-top: 10rem;margin-left: 4rem;margin-right: 4rem;flex-wrap: nowrap;justify-content: space-between;gap: 1rem;'> <div> <img src='img/Y1P2I1.PNG' alt='Image of the code' style='width: 700px;height: 400px;'> </div> <div> <p style='color: #d6d6d6;'> Een opvolger van een programma dat ik op de middelbare school heb gemaakt. Dit programma genereert willekeurig een dungeons voor het rollenspel dungeons and dragons. Het doet dit door eerst een startgebied te creëren dan aan elke kant beslist willekeurig wat er moet komen (of niks) dan genereert het dat en doet hetzelfde voor het gegenereerde en herhaalt totdat er niks meer moet worden gegenereerd. ik heb veel geleerd van dit project, voornamelijk werken met de tkinter library in python, zodat ik vensters met een GUI kan maken </p> </div> </div> </main> <div id='downB'> <button id='down' class='btn btn-dark'><IMG SRC='IMG/arrow down.png' ALT='˅'></button> </div>",
      "Y2P1": "<div class='title'> <h1>Webstore</h1> </div> <main style='width: 99%;height: 99%'> <div style='display: flex;margin-top: 10rem;margin-left: 4rem;margin-right: 4rem;flex-wrap: nowrap;justify-content: space-around;gap: 1rem;'> <div> <a href='webstore/index.html'><img class='click' src='img/Y2P1I1.PNG' alt='Image of the code' style='width: 800px;height: 430px;'></a> </div> <div> <p style='color: #d6d6d6;'> een niet functionele webwinkel die ik heb gemaakt voor school waar ik schoolen verkoop. Voor dit project moesten we leren over arrays en leeren hoe JavaScript werkt. Ik heb een array met objecten erin gebruikt voor de items en wanneer je een item wilt bestellen dan word dat item in een andere array geplaatst. De belangrijkste dingen die ik uit dit project heb gehaald, waren niet de arrays. Het was de html en css en het gebruik van css in plaats van bootstrap, dat voelde zo bevrijdend en ik had veel veel plezier met dit project </p> </div> </div> </main> <div id='downB'> <button id='down' class='btn btn-dark'><IMG SRC='IMG/arrow down.png' ALT='˅'></button> </div>",
      "Y2P2": "<div class='title'> <h1>Compiler</h1> </div> <main style='width: 99%;height: 99%'> <div style='display: flex;margin-top: 10rem;margin-left: 4rem;margin-right: 4rem;flex-wrap: nowrap;justify-content: space-around;gap: 1rem;'> <div> <img src='img/Y2P2I1.PNG' alt='Image of the code' style='width: 600px;height: 430px;'> </div> <div> <p style='color: #d6d6d6;'>Een compiler die mijn eigen gemaakte codeertaal omzet in Minecraft commands, zodat het makkelijker is om datapacks te maken. Wat zijn datapacks? Nou, een datapack in Minecraft is een folder in je Minecraft-wereld folder met Minecraft commands erin zoals teleport of setblock. En je kunt een heleboel dingen mee doen, mijn doel is om het proces van het maken van een datapack meer helder en gemakkelijker te maken. ik leer een veel dingen uit dit project, zoals het gebruik van de correcte termen bij het benoemen van variabelen en het maken van duidelijke functies </p> </div> </div> </main> <div id='downB'> <button id='down' class='btn btn-dark'><IMG SRC='IMG/arrow down.png' ALT='˅'></button> </div>",
      "aboutMe" : "<div class='title'> <h1>About me</h1> </div> <main style='width: 99%;height: 99%'> <div style='display: flex;margin-top: 10rem;margin-left: 4rem;margin-right: 4rem;flex-wrap: nowrap;justify-content: space-between;gap: 1rem;'> <div> <img src='img/me.png' alt='Image of the code' style='width: 500px;height: 540px;'> </div> <div> <p style='color: #d6d6d6;'> Hé, ik ben Thijs Swinkels. Ik ben 17 jaar en studeer aan Sint Lucas. Ik heb een passie voor programmeren vooral python. Ik ben altijd aan het klooien met projecten en nu ik studeer aan Sint Lucas kan ik er meer van maken dan een passie.<br><br>  Op mijn portfolio pagina kun je een aantal van mijn projecten zien die ik heb gemaakt voor passie of voor school. Deze pagina kan er verwarrend uit ziet met alle planeten, maar het moet staan voor mijn reis door de computer wereld waarbij elke planeet een nieuw keerpunt is. Word jij de volgende planeet? </p> <div style='display:flex;justify-content: space-evenly;'> <a href='https://discordapp.com/users/353833879007789057'><img src='img/discordLogo.png' alt='discord logo' style='width: 50px;height: 50px'></a> <a href='https://github.com/gingerappa'><img src='img/githubLogo.png' alt='github logo' style='width: 50px;height: 50px'></a> <a href='mailto:toriko65swinkels@gmail.com'><img src='img/mailLogo.png' alt='mail logo' style='width: 50px;height: 50px'></a> </div> </div> </div> </main> <div id='downB'> <button id='down' class='btn btn-dark'><IMG SRC='IMG/arrow down.png' ALT='˅'></button> </div>"
    }
  }
}


//variables
let running = false;
let arrows = ["right"]
let lang = "en"
let currentPage = "homePage"
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

function exists(arr, search) {
  return arr.some(row => row.includes(search));
}

//load current page



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
  console.log(pageName)
  arrows = []
  currentPage = pageName
  body.innerHTML = data.html[lang][pageName]
  const ProjectButtons = document.querySelectorAll('button[type="button"]');
  ProjectButtons.forEach(element => {
    element.onclick = function() {
      loadPage(element.id);
      movecam(camera, [camera.position.x+20, camera.position.y + 20, camera.position.z+20], 120)
    }
  });
  try{
    document.getElementById("down").onclick = function() {switchPlanet("down", true)};
    arrows.push("down")
  }
  catch{
    //pass
  }
  try{
    document.getElementById("left").onclick = function() {switchPlanet("left", true)};
    arrows.push("left")
  }
  catch{
    //pass
  }
  try{
    document.getElementById("right").onclick = function() {switchPlanet("right", true)};
    arrows.push("right")
  }
  catch{
    //pass
  }
  window.location.hash = `${pageName}|${PageCord[0][3]}`
}

function movecam(object, newPosition, step){
  var positionObject = object.position
  var steps = [getDifference(positionObject.x, newPosition[0])/step, getDifference(positionObject.y, newPosition[1])/step, getDifference(positionObject.z, newPosition[2])/step]
  var opacityStep = 100/step
  var opacity = 0
  var count = 0
  body.style.opacity = 0
  function move(){
    if(count <= step){
      var positionObject = object.position
      object.position.set(positionObject.x + steps[0], positionObject.y + steps[1], positionObject.z + steps[2])
      opacity += opacityStep
      body.style.opacity = `${opacity}%`
      count ++;
      requestAnimationFrame(move)
    }
    else{
      object.position.set(newPosition[0], newPosition[1], newPosition[2])
      running = false
    }
  }
  move()
}

function switchPlanet(directions, animation){
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
    if (animation){
      movecam(camera, PageCord[0], 120)
      loadPage(PageCord[0][3])
    }
    else{
      movecam(camera, PageCord[0], 1)
      running = false
    }
  }
}

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  switch (event.key) {
    case "ArrowLeft":
      if (arrows.includes("left")){switchPlanet("left", true)}
      break;
    case "ArrowRight":
      if (arrows.includes("right")){switchPlanet("right", true)}
      break;
    case "Escape":
    case "ArrowDown":
      if (arrows.includes("down")){switchPlanet("down", true)}
      break;
    default:
      return; // Quit when this doesn't handle the key event.
    }
  event.preventDefault();
}, true);


function test(){
  console.log("test")
}


document.getElementById("aboutMe").onclick = function() {loadPage("aboutMe");movecam(camera, [camera.position.x+20, camera.position.y + 20, camera.position.z+20], 120)}
document.getElementById("lang").onclick = function() {
  if (lang === "en"){
    lang = "nl"
  }
  else if(lang === "nl"){
    lang = "en"
  }
  document.getElementById("langImg").src = `img/${lang}.png`
  loadPage(currentPage)
}
let currentUrl = window.location.hash.replace("#", "").split("|");
if (Object.keys(data.html.en).indexOf(currentUrl[0]) > -1){
  while(PageCord[0][3] != currentUrl[1]){
    switchPlanet("right", false)
  }
  if(!exists(PageCord, currentUrl[0])){
    movecam(camera, [camera.position.x+20, camera.position.y + 20, camera.position.z+20], 1)
  }
  loadPage(currentUrl[0])
}
else{
  document.getElementById("right").onclick = function() {switchPlanet("right", true)}
}

scene.background = spaceTexture

run()

