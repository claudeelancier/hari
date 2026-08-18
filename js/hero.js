import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";

const canvas = document.getElementById("hero-canvas");
const hero = document.getElementById("hero");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

splitHeadline();
setupCursor();

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
  powerPreference: "high-performance",
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x000000, 0);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 60);
camera.position.set(-0.35, 0.12, 8.4);

const clock = new THREE.Clock();
const pointer = new THREE.Vector2(0.15, 0.05);
const pointerSmooth = new THREE.Vector2(0.15, 0.05);

const cloth = new THREE.Mesh(
  new THREE.PlaneGeometry(9.4, 12.2, 180, 220),
  new THREE.ShaderMaterial({
    transparent: true,
    side: THREE.DoubleSide,
    uniforms: {
      uTime: { value: 0 },
      uPointer: { value: pointerSmooth },
      uReduce: { value: reduceMotion ? 1 : 0 },
    },
    vertexShader: `
      uniform float uTime;
      uniform vec2 uPointer;
      uniform float uReduce;
      varying vec3 vNormalW;
      varying vec3 vPos;
      varying float vWave;

      float wave(vec2 p, float t) {
        float w = sin(p.x * 1.35 + t * 0.72) * 0.62;
        w += sin(p.y * 1.95 - t * 0.55 + p.x * 0.4) * 0.42;
        w += sin((p.x + p.y) * 2.8 + t * 1.05) * 0.16;
        w += sin(length(p - vec2(uPointer.x * 2.2, uPointer.y * 1.5)) * 3.4 - t * 1.15) * 0.32;
        return w;
      }

      void main() {
        vec3 pos = position;
        float t = uTime * mix(1.0, 0.0, uReduce);
        float w = wave(pos.xy * 0.42, t);
        pos.z += w * (1.55 + uPointer.y * 0.28);
        pos.x += uPointer.x * 0.35;
        pos.y += sin(uTime * 0.18) * 0.08;

        vec3 tPos = pos + vec3(0.04, 0.0, 0.0);
        tPos.z += wave(tPos.xy * 0.42, t) * 1.55;
        vec3 bPos = pos + vec3(0.0, 0.04, 0.0);
        bPos.z += wave(bPos.xy * 0.42, t) * 1.55;
        vNormalW = normalize(cross(tPos - pos, bPos - pos));
        vWave = w;
        vPos = pos;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vNormalW;
      varying vec3 vPos;
      varying float vWave;
      uniform vec2 uPointer;

      void main() {
        vec3 n = normalize(vNormalW);
        vec3 view = normalize(vec3(0.15, 0.35, 1.0) - vPos * 0.08);
        float fres = pow(1.0 - max(dot(n, view), 0.0), 2.4);

        vec3 ivory = vec3(0.98, 0.95, 0.90);
        vec3 champagne = vec3(0.86, 0.72, 0.48);
        vec3 clay = vec3(0.76, 0.36, 0.18);
        vec3 aqua = vec3(0.72, 0.84, 0.82);

        float fold = smoothstep(-0.55, 0.7, vWave);
        vec3 col = mix(ivory, champagne, fold * 0.88);
        col = mix(col, aqua, fres * 0.62);
        col = mix(col, clay, pow(max(n.x * 0.55 + 0.2, 0.0), 1.6) * 0.38);
        col += fres * 0.32;
        col += vec3(0.12, 0.07, 0.03) * (uPointer.x * 0.5 + 0.5) * 0.22;
        col += vec3(1.0, 0.96, 0.9) * pow(max(n.z, 0.0), 8.0) * 0.35;

        float edge = smoothstep(5.1, 0.9, abs(vPos.x)) * smoothstep(6.4, 1.6, abs(vPos.y));
        float alpha = 0.92 * edge;
        gl_FragColor = vec4(col, alpha);
      }
    `,
  })
);
cloth.position.set(2.35, -0.15, 0);
cloth.rotation.y = -0.42;
cloth.rotation.x = -0.12;
scene.add(cloth);

function makeMotes(count) {
  const positions = new Float32Array(count * 3);
  const speeds = new Float32Array(count);
  for (let i = 0; i < count; i += 1) {
    positions[i * 3] = (Math.random() - 0.2) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    speeds[i] = 0.12 + Math.random() * 0.35;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aSpeed", new THREE.BufferAttribute(speeds, 1));
  const material = new THREE.PointsMaterial({
    color: 0xb08d57,
    size: 0.035,
    transparent: true,
    opacity: 0.45,
    depthWrite: false,
  });
  const points = new THREE.Points(geometry, material);
  points.userData.speeds = speeds;
  return points;
}

const motes = makeMotes(220);
scene.add(motes);

const hemi = new THREE.HemisphereLight(0xfff6e8, 0xc9b7a0, 1.15);
scene.add(hemi);
const key = new THREE.DirectionalLight(0xffe6c4, 1.4);
key.position.set(4, 6, 5);
scene.add(key);
const rim = new THREE.DirectionalLight(0x9ec4c0, 0.55);
rim.position.set(-5, 1, 3);
scene.add(rim);

function resize() {
  const width = hero.clientWidth;
  const height = hero.clientHeight;
  camera.aspect = width / Math.max(height, 1);
  camera.updateProjectionMatrix();
  renderer.setSize(width, height, false);
}

resize();
window.addEventListener("resize", resize);

hero.addEventListener("pointermove", (event) => {
  const rect = hero.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
});

function tick() {
  const t = clock.getElapsedTime();
  pointerSmooth.lerp(pointer, 0.045);
  cloth.material.uniforms.uTime.value = t;
  cloth.rotation.y = -0.42 + pointerSmooth.x * 0.12;
  cloth.rotation.x = -0.12 + pointerSmooth.y * 0.08;
  camera.position.x = -0.35 + pointerSmooth.x * 0.28;
  camera.position.y = 0.12 + pointerSmooth.y * 0.16;
  camera.lookAt(1.4, 0.05, 0);

  const pos = motes.geometry.attributes.position;
  const speeds = motes.userData.speeds;
  if (!reduceMotion) {
    for (let i = 0; i < speeds.length; i += 1) {
      pos.array[i * 3 + 1] += Math.sin(t * speeds[i] + i) * 0.002;
      pos.array[i * 3] += Math.cos(t * speeds[i] * 0.6 + i) * 0.0012;
    }
    pos.needsUpdate = true;
  }

  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);

function splitHeadline() {
  const title = document.querySelector("[data-split]");
  if (!title || reduceMotion) return;
  const nodes = [...title.childNodes];
  title.textContent = "";
  let delay = 0;
  nodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent.split("").forEach((char) => {
        const span = document.createElement("span");
        span.className = "char";
        span.textContent = char === " " ? "\u00a0" : char;
        span.style.animationDelay = `${0.18 + delay * 0.028}s`;
        title.appendChild(span);
        delay += 1;
      });
    } else if (node.nodeName === "EM") {
      const em = document.createElement("em");
      node.textContent.split("").forEach((char) => {
        const span = document.createElement("span");
        span.className = "char";
        span.textContent = char === " " ? "\u00a0" : char;
        span.style.animationDelay = `${0.18 + delay * 0.028}s`;
        em.appendChild(span);
        delay += 1;
      });
      title.appendChild(em);
    }
  });
}

function setupCursor() {
  const root = document.querySelector(".cursor");
  const ring = document.querySelector(".cursor__ring");
  const dot = document.querySelector(".cursor__dot");
  if (!root || window.matchMedia("(pointer: coarse)").matches) return;
  document.body.classList.add("has-cursor");
  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let rx = x;
  let ry = y;
  window.addEventListener("pointermove", (event) => {
    x = event.clientX;
    y = event.clientY;
    dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
  });
  const hot = "a, button";
  document.querySelectorAll(hot).forEach((el) => {
    el.addEventListener("pointerenter", () => root.classList.add("is-hot"));
    el.addEventListener("pointerleave", () => root.classList.remove("is-hot"));
  });
  function follow() {
    rx += (x - rx) * 0.18;
    ry += (y - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(follow);
  }
  follow();
}
