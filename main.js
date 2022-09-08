import './style.css'

import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
//import { Vector3 } from 'three';

//textures
//const earthTexture = new THREE.TextureLoader().load('img/earthTX.jpg')
//const earthNormal = new THREE.TextureLoader().load('img/earthNM.jpg')

//setting everything up
//const scene = new THREE.Scene(); //scene
//const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000); //camera
//const renderer = new THREE.WebGLRenderer({
//  canvas: document.querySelector('#bg'), // renderer
//});
//renderer.setPixelRatio(window.devicePixelRatio);
//renderer.setSize(window.innerWidth, window.innerHeight);
//camera.position.set(10, 0, 23);


// adding objects
//const earth = new THREE.Mesh(
//    new THREE.SphereGeometry(14, 100, 100),
//    new THREE.MeshStandardMaterial({map: earthTexture, wireframe: false, normalMap: earthNormal})
//)
//earth.rotation.z += 0.1;
//earth.rotation.x = 0.3
//earth.rotation.y -= 2

//scene.add(earth);


// adding light 0xFFE87C
//const light = new THREE.DirectionalLight(0xFFE87C, 1);
//const ambientLight = new THREE.AmbientLight(0x87CEEB, 0.2);

//light.position.set(70,10,-30)
//scene.add(light, ambientLight)

//helpers
// const lightHelper = new THREE.PointLightHelper(light)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement)
// controls.target = new Vector3 (10, 0, -4)

//var test = camera
//main loop
//function run(){
//  requestAnimationFrame(run)

//  earth.rotation.y += 0.0005
//  console.log(camera.position)
  
//  renderer.render(scene, camera);
//}

//function agenda(){
//  console.log(`-7  sep
//-13 sep 13:30-17:00
//-14 sep 9:30-13:00`);
//}

run()

