(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  splitHeadline();
  setupCursor();
  setupMagnetic();

  if (!window.THREE) return;

  var THREE = window.THREE;
  var canvas = document.getElementById("hero-canvas");
  var hero = document.getElementById("hero");
  if (!canvas || !hero) return;

  var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.18;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(36, 1, 0.1, 80);
  camera.position.set(-0.55, 0.18, 8.2);

  var clock = new THREE.Clock();
  var pointer = new THREE.Vector2(0.22, 0.08);
  var pointerSmooth = new THREE.Vector2(0.22, 0.08);

  var clothUniforms = {
    uTime: { value: 0 },
    uPointer: { value: pointerSmooth },
    uReduce: { value: reduceMotion ? 1 : 0 },
    uShift: { value: 0 },
  };

  var clothMaterial = new THREE.ShaderMaterial({
    transparent: true,
    side: THREE.DoubleSide,
    uniforms: clothUniforms,
    vertexShader: [
      "uniform float uTime;",
      "uniform vec2 uPointer;",
      "uniform float uReduce;",
      "uniform float uShift;",
      "varying vec3 vNormalW;",
      "varying vec3 vPos;",
      "varying float vWave;",
      "float wave(vec2 p, float t) {",
      "  float w = sin(p.x * 1.35 + t * 0.82) * 0.86;",
      "  w += sin(p.y * 2.05 - t * 0.64 + p.x * 0.55) * 0.58;",
      "  w += sin((p.x * 1.4 + p.y) * 3.35 + t * 1.12) * 0.22;",
      "  w += cos(p.x * 4.4 - p.y * 1.8 + t * 0.48) * 0.16;",
      "  vec2 hit = vec2(uPointer.x * 2.6, uPointer.y * 1.8);",
      "  float d = length(p - hit);",
      "  w += sin(d * 4.2 - t * 1.55) * exp(-d * 0.55) * 0.72;",
      "  return w;",
      "}",
      "void main() {",
      "  vec3 pos = position;",
      "  float t = uTime * mix(1.0, 0.0, uReduce) + uShift;",
      "  float amp = 1.85 + uPointer.y * 0.28;",
      "  float w = wave(pos.xy * 0.4, t);",
      "  pos.z += w * amp;",
      "  pos.x += uPointer.x * 0.42;",
      "  pos.y += sin(uTime * 0.22 + uShift) * 0.1;",
      "  vec3 tPos = pos + vec3(0.03, 0.0, 0.0);",
      "  tPos.z += wave(tPos.xy * 0.4, t) * amp;",
      "  vec3 bPos = pos + vec3(0.0, 0.03, 0.0);",
      "  bPos.z += wave(bPos.xy * 0.4, t) * amp;",
      "  vNormalW = normalize(cross(tPos - pos, bPos - pos));",
      "  vWave = w;",
      "  vPos = pos;",
      "  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);",
      "}",
    ].join("\n"),
    fragmentShader: [
      "varying vec3 vNormalW;",
      "varying vec3 vPos;",
      "varying float vWave;",
      "uniform vec2 uPointer;",
      "uniform float uTime;",
      "void main() {",
      "  vec3 n = normalize(vNormalW);",
      "  vec3 view = normalize(vec3(0.15, 0.35, 1.15) - vPos * 0.07);",
      "  float ndv = max(dot(n, view), 0.0);",
      "  float fres = pow(1.0 - ndv, 2.4);",
      "  vec3 ivory = vec3(0.93, 0.88, 0.80);",
      "  vec3 gold = vec3(0.82, 0.62, 0.32);",
      "  vec3 copper = vec3(0.72, 0.28, 0.14);",
      "  vec3 ink = vec3(0.08, 0.09, 0.14);",
      "  vec3 aqua = vec3(0.42, 0.68, 0.78);",
      "  float fold = smoothstep(-0.85, 0.95, vWave);",
      "  vec3 col = mix(ink, ivory, 0.55 + fold * 0.35);",
      "  col = mix(col, gold, fold * 0.72);",
      "  col = mix(col, aqua, fres * 0.62);",
      "  col = mix(col, copper, pow(max(-n.x * 0.5 + 0.18, 0.0), 1.35) * 0.55);",
      "  vec3 specDir = normalize(vec3(0.55 + uPointer.x * 0.4, 0.85, 0.6));",
      "  float spec = pow(max(dot(n, specDir), 0.0), 28.0);",
      "  col += vec3(1.0, 0.94, 0.82) * spec * 0.85;",
      "  col += vec3(1.0, 0.96, 0.88) * pow(max(n.z, 0.0), 6.0) * 0.38;",
      "  col += fres * 0.22;",
      "  float pulse = 0.5 + 0.5 * sin(uTime * 0.7 + vPos.x * 0.4);",
      "  col += gold * pulse * 0.06;",
      "  float edge = smoothstep(5.4, 0.55, abs(vPos.x)) * smoothstep(6.6, 1.15, abs(vPos.y));",
      "  gl_FragColor = vec4(col, 0.97 * edge);",
      "}",
    ].join("\n"),
  });

  var cloth = new THREE.Mesh(new THREE.PlaneGeometry(10.2, 13.2, 220, 260), clothMaterial);
  cloth.position.set(2.45, -0.12, 0);
  cloth.rotation.set(-0.14, -0.46, 0.08);
  scene.add(cloth);

  var under = cloth.clone();
  under.material = clothMaterial.clone();
  under.material.uniforms.uTime = clothUniforms.uTime;
  under.material.uniforms.uPointer = clothUniforms.uPointer;
  under.material.uniforms.uReduce = clothUniforms.uReduce;
  under.material.uniforms.uShift = { value: 1.35 };
  under.position.set(2.7, -0.22, -0.62);
  under.rotation.set(-0.1, -0.58, 0.12);
  under.scale.set(1.1, 1.06, 1);
  scene.add(under);

  var ringGeo = new THREE.TorusGeometry(1.15, 0.018, 24, 180);
  var ringMat = new THREE.MeshStandardMaterial({
    color: 0xd7b07a,
    metalness: 1,
    roughness: 0.18,
    emissive: 0x3a2a14,
    emissiveIntensity: 0.55,
  });
  var ring = new THREE.Mesh(ringGeo, ringMat);
  ring.position.set(3.15, 0.55, 2.1);
  ring.rotation.set(0.7, -0.3, 0.4);
  scene.add(ring);

  var ring2 = ring.clone();
  ring2.scale.set(0.62, 0.62, 0.62);
  ring2.position.set(3.35, 0.15, 2.35);
  scene.add(ring2);

  function makeMotes(count) {
    var positions = new Float32Array(count * 3);
    var speeds = new Float32Array(count);
    var i;
    for (i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.15) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 9;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
      speeds[i] = 0.16 + Math.random() * 0.42;
    }
    var geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    var material = new THREE.PointsMaterial({
      color: 0xe8c992,
      size: 0.04,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    var points = new THREE.Points(geometry, material);
    points.userData.speeds = speeds;
    return points;
  }

  var motes = makeMotes(280);
  scene.add(motes);

  scene.add(new THREE.HemisphereLight(0xffe8c8, 0x1a2230, 0.95));
  var key = new THREE.DirectionalLight(0xffd9a8, 1.65);
  key.position.set(5, 6.5, 4.5);
  scene.add(key);
  var rim = new THREE.DirectionalLight(0x7eb4c8, 0.85);
  rim.position.set(-6, 1.2, 3.2);
  scene.add(rim);

  function resize() {
    var width = hero.clientWidth;
    var height = Math.max(hero.clientHeight, 1);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }

  resize();
  window.addEventListener("resize", resize);

  hero.addEventListener("pointermove", function (event) {
    var rect = hero.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
  });

  function tick() {
    var t = clock.getElapsedTime();
    pointerSmooth.lerp(pointer, 0.055);
    clothMaterial.uniforms.uTime.value = t;
    cloth.rotation.y = -0.46 + pointerSmooth.x * 0.16;
    cloth.rotation.x = -0.14 + pointerSmooth.y * 0.1;
    under.rotation.y = -0.58 + pointerSmooth.x * 0.1;
    ring.rotation.z = t * 0.18;
    ring.rotation.x = 0.7 + Math.sin(t * 0.35) * 0.12;
    ring2.rotation.z = -t * 0.28;
    camera.position.x = -0.55 + pointerSmooth.x * 0.32;
    camera.position.y = 0.18 + pointerSmooth.y * 0.18;
    camera.position.z = 8.2 + Math.sin(t * 0.12) * 0.12;
    camera.lookAt(1.55, 0.08, 0);

    var pos = motes.geometry.attributes.position;
    var speeds = motes.userData.speeds;
    var i;
    if (!reduceMotion) {
      for (i = 0; i < speeds.length; i += 1) {
        pos.array[i * 3 + 1] += Math.sin(t * speeds[i] + i) * 0.0024;
        pos.array[i * 3] += Math.cos(t * speeds[i] * 0.55 + i) * 0.0014;
      }
      pos.needsUpdate = true;
    }

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);

  function splitHeadline() {
    var title = document.querySelector("[data-split]");
    if (!title || reduceMotion) return;
    var nodes = Array.prototype.slice.call(title.childNodes);
    title.textContent = "";
    var delay = 0;
    nodes.forEach(function (node) {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent.split("").forEach(function (char) {
          appendChar(title, char, delay);
          delay += 1;
        });
      } else if (node.nodeName === "EM") {
        var em = document.createElement("em");
        node.textContent.split("").forEach(function (char) {
          appendChar(em, char, delay);
          delay += 1;
        });
        title.appendChild(em);
      }
    });
  }

  function appendChar(parent, char, delay) {
    var span = document.createElement("span");
    span.className = "char";
    span.textContent = char === " " ? "\u00a0" : char;
    span.style.animationDelay = 0.85 + delay * 0.032 + "s";
    parent.appendChild(span);
  }

  function setupCursor() {
    var root = document.querySelector(".cursor");
    var ringEl = document.querySelector(".cursor__ring");
    var dot = document.querySelector(".cursor__dot");
    if (!root || !ringEl || !dot) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    document.body.classList.add("has-cursor");
    var x = window.innerWidth / 2;
    var y = window.innerHeight / 2;
    var rx = x;
    var ry = y;
    window.addEventListener("pointermove", function (event) {
      x = event.clientX;
      y = event.clientY;
      dot.style.transform = "translate(" + x + "px," + y + "px) translate(-50%,-50%)";
    });
    document.querySelectorAll("a, button").forEach(function (el) {
      el.addEventListener("pointerenter", function () {
        root.classList.add("is-hot");
      });
      el.addEventListener("pointerleave", function () {
        root.classList.remove("is-hot");
      });
    });
    function follow() {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      ringEl.style.transform = "translate(" + rx + "px," + ry + "px) translate(-50%,-50%)";
      requestAnimationFrame(follow);
    }
    follow();
  }

  function setupMagnetic() {
    if (reduceMotion) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.querySelectorAll("[data-magnetic]").forEach(function (el) {
      el.addEventListener("pointermove", function (event) {
        var rect = el.getBoundingClientRect();
        var dx = event.clientX - (rect.left + rect.width / 2);
        var dy = event.clientY - (rect.top + rect.height / 2);
        el.style.transform = "translate(" + dx * 0.22 + "px," + dy * 0.28 + "px)";
      });
      el.addEventListener("pointerleave", function () {
        el.style.transform = "translate(0,0)";
        el.style.transition = "transform 0.55s cubic-bezier(0.16,1,0.3,1)";
      });
      el.addEventListener("pointerenter", function () {
        el.style.transition = "transform 0.12s linear";
      });
    });
  }
})();
