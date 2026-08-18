import "./style.css";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

const canvas = document.getElementById("hero-canvas");

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  powerPreference: "high-performance",
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
scene.background = new THREE.Color("#05060a");
scene.fog = new THREE.FogExp2("#05060a", 0.042);

const camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.1, 80);
camera.position.set(0, 0.2, 7.4);

const pointer = new THREE.Vector2();
const targetCam = new THREE.Vector2();

window.addEventListener("pointermove", (event) => {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

const iridescentVert = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vView;
  varying vec3 vWorld;

  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    vView = cameraPosition - world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const iridescentFrag = /* glsl */ `
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vView;
  varying vec3 vWorld;

  void main() {
    vec3 n = normalize(vNormal);
    vec3 v = normalize(vView);
    float fresnel = pow(1.0 - max(dot(n, v), 0.0), 2.6);

    float bands = 0.5 + 0.5 * sin(n.y * 8.0 + uTime * 0.7 + vWorld.x * 1.4);
    vec3 gold = vec3(0.91, 0.74, 0.48);
    vec3 lime = vec3(0.78, 0.95, 0.32);
    vec3 ink = vec3(0.06, 0.08, 0.14);
    vec3 ice = vec3(0.55, 0.78, 1.0);

    vec3 base = mix(ink, gold, bands);
    base = mix(base, ice, fresnel * 0.72);
    base += lime * pow(fresnel, 4.0) * 0.55;

    float rim = smoothstep(0.35, 1.0, fresnel);
    gl_FragColor = vec4(base * (0.55 + rim * 1.4), 1.0);
  }
`;

const crystalMat = new THREE.ShaderMaterial({
  uniforms: { uTime: { value: 0 } },
  vertexShader: iridescentVert,
  fragmentShader: iridescentFrag,
});

const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.35, 1), crystalMat);
scene.add(core);

const wire = new THREE.Mesh(
  new THREE.IcosahedronGeometry(1.38, 1),
  new THREE.MeshBasicMaterial({
    color: "#e8c38a",
    wireframe: true,
    transparent: true,
    opacity: 0.22,
  })
);
scene.add(wire);

const inner = new THREE.Mesh(
  new THREE.OctahedronGeometry(0.42, 0),
  new THREE.MeshBasicMaterial({ color: "#c9f24a", transparent: true, opacity: 0.9 })
);
scene.add(inner);

const rings = [];
const ringGeo = new THREE.TorusGeometry(2.15, 0.008, 16, 220);
for (let i = 0; i < 3; i += 1) {
  const ring = new THREE.Mesh(
    ringGeo,
    new THREE.MeshBasicMaterial({
      color: i === 1 ? "#c9f24a" : "#e8c38a",
      transparent: true,
      opacity: 0.45 - i * 0.08,
    })
  );
  ring.rotation.set(Math.PI / 2.4 + i * 0.4, i * 0.7, i * 0.35);
  ring.scale.setScalar(1 + i * 0.18);
  scene.add(ring);
  rings.push(ring);
}

const particleCount = 1400;
const positions = new Float32Array(particleCount * 3);
const speeds = new Float32Array(particleCount);
for (let i = 0; i < particleCount; i += 1) {
  const r = 2.4 + Math.random() * 8.5;
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);
  positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
  positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.62;
  positions[i * 3 + 2] = r * Math.cos(phi);
  speeds[i] = 0.08 + Math.random() * 0.25;
}

const particleGeo = new THREE.BufferGeometry();
particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
const particles = new THREE.Points(
  particleGeo,
  new THREE.PointsMaterial({
    color: "#f4efe6",
    size: 0.018,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
  })
);
scene.add(particles);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.85, 0.55, 0.18));
composer.addPass(new OutputPass());

const clock = new THREE.Clock();

function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  composer.setSize(w, h);
}

window.addEventListener("resize", resize);

function tick() {
  const t = clock.getElapsedTime();
  crystalMat.uniforms.uTime.value = t;

  core.rotation.y = t * 0.22;
  core.rotation.x = Math.sin(t * 0.35) * 0.18;
  wire.rotation.copy(core.rotation);
  inner.rotation.y = -t * 0.9;
  inner.rotation.z = t * 0.4;
  inner.scale.setScalar(0.92 + Math.sin(t * 2.4) * 0.08);

  rings.forEach((ring, i) => {
    ring.rotation.z += 0.0018 * (i + 1);
    ring.rotation.x += 0.0007 * (i % 2 === 0 ? 1 : -1);
  });

  particles.rotation.y = t * 0.03;
  const pos = particleGeo.attributes.position.array;
  for (let i = 0; i < particleCount; i += 1) {
    pos[i * 3 + 1] += Math.sin(t * speeds[i] + i) * 0.0009;
  }
  particleGeo.attributes.position.needsUpdate = true;

  targetCam.x += (pointer.x * 0.7 - targetCam.x) * 0.045;
  targetCam.y += (pointer.y * 0.4 - targetCam.y) * 0.045;
  camera.position.x = targetCam.x;
  camera.position.y = 0.2 + targetCam.y;
  camera.lookAt(0, 0, 0);

  composer.render();
  requestAnimationFrame(tick);
}

tick();
