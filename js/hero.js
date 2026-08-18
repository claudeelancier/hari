import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";

const canvas = document.getElementById("hero-canvas");
const hero = document.getElementById("hero");

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
  powerPreference: "high-performance",
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x000000, 0);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x05060a, 0.045);

const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 80);
camera.position.set(0, 0.15, 9.4);

const clock = new THREE.Clock();
const pointer = new THREE.Vector2(0, 0);
const pointerSmooth = new THREE.Vector2(0, 0);

const nebulaGeometry = new THREE.SphereGeometry(28, 48, 48);
const nebulaMaterial = new THREE.ShaderMaterial({
  side: THREE.BackSide,
  uniforms: {
    uTime: { value: 0 },
  },
  vertexShader: `
    varying vec3 vPos;
    void main() {
      vPos = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec3 vPos;
    uniform float uTime;
    void main() {
      vec3 n = normalize(vPos);
      float sweep = 0.5 + 0.5 * sin(n.y * 2.4 + uTime * 0.12);
      vec3 deep = vec3(0.02, 0.03, 0.07);
      vec3 bloom = vec3(0.18, 0.12, 0.28);
      vec3 gold = vec3(0.42, 0.28, 0.12);
      vec3 col = mix(deep, bloom, pow(max(n.y * 0.5 + 0.5, 0.0), 1.8));
      col = mix(col, gold, sweep * 0.18 * (1.0 - abs(n.y)));
      gl_FragColor = vec4(col, 1.0);
    }
  `,
});
scene.add(new THREE.Mesh(nebulaGeometry, nebulaMaterial));

function makeStarField(count, radius, size, color) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const r = radius * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.55;
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({
    color,
    size,
    transparent: true,
    opacity: 0.85,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  return new THREE.Points(geometry, material);
}

const starsFar = makeStarField(1400, 22, 0.028, 0xc9d7ff);
const dust = makeStarField(500, 8.5, 0.045, 0xe8c872);
scene.add(starsFar, dust);

const coreGroup = new THREE.Group();
scene.add(coreGroup);

const crystal = new THREE.Mesh(
  new THREE.IcosahedronGeometry(1.15, 1),
  new THREE.MeshStandardMaterial({
    color: 0x1a2238,
    metalness: 0.92,
    roughness: 0.18,
    emissive: 0x0c1428,
    envMapIntensity: 1.4,
  })
);
coreGroup.add(crystal);

const crystalGlow = new THREE.Mesh(
  new THREE.IcosahedronGeometry(1.28, 1),
  new THREE.MeshBasicMaterial({
    color: 0xe8c872,
    transparent: true,
    opacity: 0.08,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    wireframe: true,
  })
);
coreGroup.add(crystalGlow);

function makeRing(radius, tube, tilt, speed) {
  const mesh = new THREE.Mesh(
    new THREE.TorusGeometry(radius, tube, 16, 180),
    new THREE.MeshStandardMaterial({
      color: 0xe8c872,
      metalness: 1,
      roughness: 0.22,
      emissive: 0x3a2a10,
      emissiveIntensity: 0.45,
    })
  );
  mesh.rotation.x = tilt;
  mesh.userData.speed = speed;
  return mesh;
}

const ringA = makeRing(2.05, 0.018, Math.PI / 2.15, 0.18);
const ringB = makeRing(2.55, 0.012, Math.PI / 3.4, -0.12);
const ringC = makeRing(3.1, 0.008, Math.PI / 5.2, 0.08);
coreGroup.add(ringA, ringB, ringC);

const halo = new THREE.Mesh(
  new THREE.RingGeometry(3.35, 3.55, 80),
  new THREE.MeshBasicMaterial({
    color: 0xe8c872,
    transparent: true,
    opacity: 0.18,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })
);
halo.rotation.x = Math.PI / 2.4;
coreGroup.add(halo);

scene.add(new THREE.AmbientLight(0x4a5878, 0.35));

const keyLight = new THREE.PointLight(0xffd89a, 28, 18, 2);
keyLight.position.set(4.2, 3.4, 4.8);
scene.add(keyLight);

const rimLight = new THREE.PointLight(0x6ea8ff, 18, 16, 2);
rimLight.position.set(-5.2, -1.4, -3.2);
scene.add(rimLight);

const fillLight = new THREE.PointLight(0xff9a4a, 10, 12, 2);
fillLight.position.set(-1.8, 4.6, 1.2);
scene.add(fillLight);

function resize() {
  const { clientWidth: width, clientHeight: height } = hero;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height, false);
}

window.addEventListener("resize", resize);
hero.addEventListener("pointermove", (event) => {
  const rect = hero.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
});

function introOffset(time) {
  const t = Math.min(time / 3.4, 1);
  const eased = 1 - Math.pow(1 - t, 3);
  return THREE.MathUtils.lerp(3.2, 0, eased);
}

function animate() {
  const elapsed = clock.getElapsedTime();
  pointerSmooth.lerp(pointer, 0.045);

  nebulaMaterial.uniforms.uTime.value = elapsed;
  starsFar.rotation.y = elapsed * 0.012;
  dust.rotation.y = -elapsed * 0.04;
  dust.rotation.x = elapsed * 0.01;

  crystal.rotation.y = elapsed * 0.22;
  crystal.rotation.x = elapsed * 0.08;
  crystalGlow.rotation.y = -elapsed * 0.16;
  crystalGlow.rotation.z = elapsed * 0.1;

  ringA.rotation.z = elapsed * ringA.userData.speed;
  ringB.rotation.y = elapsed * ringB.userData.speed;
  ringC.rotation.z = elapsed * ringC.userData.speed;
  halo.rotation.z = elapsed * 0.05;

  const breath = Math.sin(elapsed * 0.7) * 0.08;
  coreGroup.position.y = breath;
  coreGroup.rotation.y = pointerSmooth.x * 0.35;
  coreGroup.rotation.x = pointerSmooth.y * 0.18;

  const pull = introOffset(elapsed);
  camera.position.x = pointerSmooth.x * 0.55;
  camera.position.y = 0.12 + pointerSmooth.y * 0.28;
  camera.position.z = 9.4 + pull;
  camera.lookAt(0, 0.05, 0);

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

resize();
animate();
