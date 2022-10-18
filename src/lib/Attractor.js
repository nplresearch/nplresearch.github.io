import * as THREE from 'three';
import { BokehDepthShader, BokehShader2 } from './BokehShader2.js';

//CONSTANTS
const colors = Object.freeze({
  BACKGROUND: 0x0E0E0F,
  SKY: 0xFFFFFF,
  GROUND: 0X222225,
  POINT_LIGHT: 0xFFFFFF,
  MESH_COLOR: 0x444147,
  MESH_SHININESS: 0x991A1C });
const FOV = 75;
const NEAR = 0.1;
const FAR = 15;
let SPEED = 0.004;
let RADIUS = 0.1;
let HUEMIN = 220; //200
let HUEGRAD = 30; //lorenz 1.2 //Halorez 5

//HELPER FUNCS
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function Attractor(x, y, z) {
  //Aizawa
  const a = 0.95;
  const b = 0.7;
  const c = 0.6;
  const d = 3.5;
  const e = 0.25;
  const f = 0.1;
  const dt = SPEED;

  const dx = ((z - b) * x - d * y) * dt;
  const dy = (d * x + (z - b) * y) * dt;
  const dz =
    (c +
      a * z -
      (z * z * z) / 3 -
      (x * x + y * y) * (1 + e * z) +
      f * z * x * x * x) *
    dt;

  x = x + dx;
  y = y + dy;
  z = z + dz;
  return { x, y, z };
}

function randomPosition() {
  let x = getRandomFloat(-RADIUS, RADIUS);
  let y = getRandomFloat(-RADIUS, RADIUS);
  let z = getRandomFloat(-RADIUS, RADIUS);
  return {x, y, z};
}

class Line {
  constructor(tail_size) {
    let points = [];
    let position = randomPosition();
    points.push(new THREE.Vector3(position[0], position[1], position[2]));
    for (let j = 0; j < tail_size; j++) {
      position = Attractor(position[0], position[1], position[2]);
      points.push(new THREE.Vector3(position[0], position[1], position[2]));
    }
    let material = new THREE.LineBasicMaterial({
      color: `hsl(${HUEMIN}, 100%, 100%)`,
      blending: THREE.AdditiveBlending,
      opacity: 0.6
    });
    let geometry = new THREE.BufferGeometry().setFromPoints(points);
    let line = new THREE.Line(geometry, material);
  }
}


//SCENE
const scene = new THREE.Scene();
scene.background = new THREE.Color(colors.BACKGROUND);


//CAMERA
const getAspectRatio = () => {
  const { innerWidth, innerHeight } = window;
  return innerWidth / innerHeight;
};
const camera = new THREE.PerspectiveCamera(FOV, getAspectRatio(), NEAR, FAR);
camera.position.z = 7;



//LIGHT
// HEMISPHERE LIGHT
////////////////////////////////////////////////////////////////////////////////
const hemiLight = new THREE.HemisphereLight(colors.SKY, colors.GROUND, 1);
hemiLight.position.y = 10;
hemiLight.position.z = 0;
scene.add(hemiLight);

// POINT LIGTH
const pointLight = new THREE.PointLight(colors.POINT_LIGHT, 0.25, 100);
pointLight.position.x = 30;
pointLight.position.z = 30;
scene.add(pointLight);


//GEOMETRY
const geometry = new THREE.IcosahedronGeometry(1);
const material = new THREE.MeshPhongMaterial({
  color: colors.MESH_COLOR,
  specular: colors.MESH_SHININESS,
  shininess: 2,
  flatShading: true });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


let renderer;
scene.add(cube);
camera.position.z = 5;

const animate = () => {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.clear();
  renderer.render(scene, camera);
};

const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

export const createScene = (el) => {
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
  resize();
  animate();
}

window.addEventListener('resize', resize);
