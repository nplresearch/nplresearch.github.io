import * as THREE from 'three';


//CCONSTANTS
const FOV = 75;
const NEAR = 0.1;
const FAR = 15;

const colors = Object.freeze({
  BACKGROUND: 0x0E0E0F,
  SKY: 0xFFFFFF,
  GROUND: 0X222225,
  POINT_LIGHT: 0xFFFFFF,
  MESH_COLOR: 0x444147,
  MESH_SHININESS: 0x991A1C });

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
