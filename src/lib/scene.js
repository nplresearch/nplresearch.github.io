import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { lorenz, vectorNorm } from "./attractors.js";

import GUI from "lil-gui";
const gui = new GUI();

///GLOBAL VARIABLES///
const N_LINES = 200;
const LENGTH = 150;
const ATTRACTOR = lorenz;
const SCALE = 20;
const COLOR = "#FFFFFF";
const TRAJECTORIES = [];
const HUE = 16; //16
const CENTERZ = 25;
const LOOPTIME = 200000;

//////////////////////////////////////    EVENT LISTENER  ////////////////////////////////////

//////////////////////////////////////    EVENT LISTENER  ////////////////////////////////////

var start_time = 0;
window.onload = () => {
  start_time = Date.now();
  console.log(start_time);
  console.log(Date.now());
};

//SCENE
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0xefd1b5, 0.0025);
//CAMERA
const camera = new THREE.PerspectiveCamera();
camera.lookAt(new THREE.Vector3(0, 0, CENTERZ));
camera.position.set(-23, -27.8, 23.8);
camera.position.set(16.4, 80.4, -9.2);

//BEST SO FAR
// camera.position.x = -23;
// camera.position.y = -27.8;
// camera.position.z = 23.8;

//CAMERA PATH!

//////////////////////////////////////    CAMERA ANIMATION   ////////////////////////////////////
let camera_steps = [
  new THREE.Vector3(-15.6, -18, 23.8), //cynematic
  new THREE.Vector3(-20.4, -20.4, 36),
  new THREE.Vector3(-20.4, -5.8, 43.4),
  new THREE.Vector3(-8.2, -3.2, 31.2),
  // new THREE.Vector3(-13, 1.6, 9),
  // new THREE.Vector3(-13.4, -10.6, 21.4),
  new THREE.Vector3(-15.6, -18, 23.8),
];

const butterfly = new THREE.Vector3(16.4, 80.4, -9.2);
const cinematic = new THREE.Vector3(-23, -27.8, 23.8);

let intro_curve = new THREE.CatmullRomCurve3([
  //from butterfly to cinematic
  butterfly,
  cinematic,
]);

// new THREE.Vector3(16.4, 80.4, -9.2), //butterfly (for beggining?)

// const camera_steps = [];

// lorenz_points["points"].forEach((point) => {
//   camera_steps.push(
//     new THREE.Vector3(
//       PERSPECTIVE * point[0],
//       PERSPECTIVE * point[1],
//       PERSPECTIVE * point[2]
//     )
//   );
// });

let camera_curve = new THREE.CatmullRomCurve3(camera_steps);

/////////////////////////////////////////////////////////////////////////////////////////////////

for (let i = 0; i < N_LINES; i++) {
  //start_point
  let x = SCALE * Math.random();
  let y = SCALE * Math.random();
  let z = SCALE * Math.random();
  let point = [x, y, z];
  let color = new THREE.Color();
  let vertices = [];
  let colors = [];

  for (let i = 0; i < LENGTH; i++) {
    point = ATTRACTOR(...point);
    let norm = vectorNorm(...point);

    color.setHSL(HUE, 1, norm / 120 + 0.55);
    // color.setHSL(HUE, 1, i / LENGTH);

    //color.setHSL(0.6, 1.0, Math.max(0, norm / 200) + 0.5);
    colors.push(color.r, color.g, color.b);
    vertices.push(point);
  }

  //GEOMETRY
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices.flat(), 3)
  );

  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

  // MATERIAL:
  var material = new THREE.LineBasicMaterial({
    color: COLOR,
    vertexColors: true,
  });

  var line = new THREE.Line(geometry, material);
  TRAJECTORIES.push(line);
  scene.add(line);
}

//LIGHT
// AFTER EFFECTS
////////////////////////////////////////////////////////////////////////////////
const params = {
  exposure: 1,
  bloomStrength: 1.5,
  bloomThreshold: 0,
  bloomRadius: 0,
};

const renderScene = new RenderPass(scene, camera);

const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.5,
  0.4,
  0.85
);
bloomPass.threshold = params.bloomThreshold;
bloomPass.strength = params.bloomStrength;
bloomPass.radius = params.bloomRadius;

//UPDATING
const animate = () => {
  requestAnimationFrame(animate);

  for (let j = 0; j < N_LINES; j++) {
    line = TRAJECTORIES[j];
    for (let i = 0; i < LENGTH; i++) {
      let new_point;
      if (i === LENGTH - 1) {
        new_point = ATTRACTOR(
          line.geometry.attributes.position.getX(i),
          line.geometry.attributes.position.getY(i),
          line.geometry.attributes.position.getZ(i)
        );
      } else {
        new_point = [
          line.geometry.attributes.position.getX(i + 1),
          line.geometry.attributes.position.getY(i + 1),
          line.geometry.attributes.position.getZ(i + 1),
        ];
      }
      line.geometry.attributes.position.setXYZ(
        i,
        new_point[0],
        new_point[1],
        new_point[2]
      );
      //color update
      let norm = vectorNorm(...new_point);
      let color = new THREE.Color();
      //color.setHSL(0.6, 1.0, Math.max(0, norm / 200) + 0.5);
      color.setHSL(HUE, 1, norm / 120 + 0.55);
      // color.setHSL(HUE, 0.8, i / (3 * LENGTH));
      line.geometry.attributes.color.setXYZ(i, color.r, color.g, color.b);
    }

    line.geometry.attributes.position.needsUpdate = true;
    line.geometry.attributes.color.needsUpdate = true;
  }
  //camera animation
  let time = Date.now() - start_time;
  const t = (time % LOOPTIME) / LOOPTIME;
  let next_position = camera_curve.getPointAt(t);
  camera.position.set(next_position.x, next_position.y, next_position.z);
  camera.lookAt(new THREE.Vector3(0, 0, CENTERZ));

  //renderer.render(scene, camera);
  composer.render();
};

const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

///MARK (TEMPORARY)
// const cube = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1),
//   new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// );
// cube.position.set(0, 0, CENTERZ);
// scene.add(cube);

gui.add(camera.position, "x", -100, 100);
gui.add(camera.position, "y", -100, 100);
gui.add(camera.position, "z", -100, 100);

gui.add(params, "exposure", 0.1, 2).onChange(function (value) {
  renderer.toneMappingExposure = Math.pow(value, 4.0);
});

gui.add(params, "bloomThreshold", 0.0, 1.0).onChange(function (value) {
  bloomPass.threshold = Number(value);
});

gui.add(params, "bloomStrength", 0.0, 3.0).onChange(function (value) {
  bloomPass.strength = Number(value);
});

gui
  .add(params, "bloomRadius", 0.0, 1.0)
  .step(0.01)
  .onChange(function (value) {
    bloomPass.radius = Number(value);
  });
////END OF TEMPORARY STUFF
let renderer;
let composer;

export const createScene = (el) => {
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });

  renderer.setSize(2000, 2000);
  renderer.setPixelRatio(devicePixelRatio);
  //renderer = new THREE.WebGLRenderer({ canvas: el });

  composer = new EffectComposer(renderer);
  composer.setSize(1000, 1000);
  composer.addPass(renderScene);
  composer.addPass(bloomPass);

  resize();
  animate();
};

window.addEventListener("resize", resize);
