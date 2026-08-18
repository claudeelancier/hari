(function () {
  "use strict";

  if (!window.THREE) return;

  var THREE = window.THREE;
  var canvas = document.getElementById("hero-canvas");
  var hero = document.getElementById("hero");
  if (!canvas || !hero) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  splitHeadline();
  setupCursor();

  var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(38, 1, 0.1, 60);
  camera.position.set(-0.35, 0.12, 8.4);

  var clock = new THREE.Clock();
  var pointer = new THREE.Vector2(0.15, 0.05);
  var pointerSmooth = new THREE.Vector2(0.15, 0.05);

  var clothMaterial = new THREE.ShaderMaterial({
    transparent: true,
    side: THREE.DoubleSide,
    uniforms: {
      uTime: { value: 0 },
      uPointer: { value: pointerSmooth },
      uReduce: { value: reduceMotion ? 1 : 0 },
    },
    vertexShader:
      "uniform float uTime;\n" +
      "uniform vec2 uPointer;\n" +
      "uniform float uReduce;\n" +
      "varying vec3 vNormalW;\n" +
      "varying vec3 vPos;\n" +
      "varying float vWave;\n" +
      "float wave(vec2 p, float t) {\n" +
      "  float w = sin(p.x * 1.55 + t * 0.68) * 0.72;\n" +
      "  w += sin(p.y * 2.15 - t * 0.52 + p.x * 0.45) * 0.48;\n" +
      "  w += sin((p.x + p.y) * 3.1 + t * 0.95) * 0.18;\n" +
      "  w += sin(length(p - vec2(uPointer.x * 2.2, uPointer.y * 1.5)) * 3.6 - t * 1.1) * 0.34;\n" +
      "  return w;\n" +
      "}\n" +
      "void main() {\n" +
      "  vec3 pos = position;\n" +
      "  float t = uTime * mix(1.0, 0.0, uReduce);\n" +
      "  float w = wave(pos.xy * 0.42, t);\n" +
      "  pos.z += w * (1.7 + uPointer.y * 0.3);\n" +
      "  pos.x += uPointer.x * 0.35;\n" +
      "  pos.y += sin(uTime * 0.18) * 0.08;\n" +
      "  vec3 tPos = pos + vec3(0.035, 0.0, 0.0);\n" +
      "  tPos.z += wave(tPos.xy * 0.42, t) * 1.7;\n" +
      "  vec3 bPos = pos + vec3(0.0, 0.035, 0.0);\n" +
      "  bPos.z += wave(bPos.xy * 0.42, t) * 1.7;\n" +
      "  vNormalW = normalize(cross(tPos - pos, bPos - pos));\n" +
      "  vWave = w;\n" +
      "  vPos = pos;\n" +
      "  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n" +
      "}\n",
    fragmentShader:
      "varying vec3 vNormalW;\n" +
      "varying vec3 vPos;\n" +
      "varying float vWave;\n" +
      "uniform vec2 uPointer;\n" +
      "void main() {\n" +
      "  vec3 n = normalize(vNormalW);\n" +
      "  vec3 view = normalize(vec3(0.2, 0.4, 1.0) - vPos * 0.08);\n" +
      "  float fres = pow(1.0 - max(dot(n, view), 0.0), 2.2);\n" +
      "  vec3 ivory = vec3(0.99, 0.96, 0.91);\n" +
      "  vec3 champagne = vec3(0.88, 0.74, 0.48);\n" +
      "  vec3 clay = vec3(0.78, 0.38, 0.18);\n" +
      "  vec3 aqua = vec3(0.74, 0.85, 0.83);\n" +
      "  float fold = smoothstep(-0.6, 0.75, vWave);\n" +
      "  vec3 col = mix(ivory, champagne, fold * 0.9);\n" +
      "  col = mix(col, aqua, fres * 0.55);\n" +
      "  col = mix(col, clay, pow(max(n.x * 0.55 + 0.22, 0.0), 1.5) * 0.4);\n" +
      "  col += fres * 0.28;\n" +
      "  col += vec3(1.0, 0.97, 0.92) * pow(max(n.z, 0.0), 7.0) * 0.42;\n" +
      "  col += vec3(0.12, 0.06, 0.02) * (uPointer.x * 0.5 + 0.5) * 0.18;\n" +
      "  float edge = smoothstep(5.2, 0.7, abs(vPos.x)) * smoothstep(6.5, 1.4, abs(vPos.y));\n" +
      "  gl_FragColor = vec4(col, 0.96 * edge);\n" +
      "}\n",
  });

  var cloth = new THREE.Mesh(new THREE.PlaneGeometry(9.6, 12.4, 200, 240), clothMaterial);
  cloth.position.set(2.35, -0.15, 0);
  cloth.rotation.y = -0.42;
  cloth.rotation.x = -0.12;
  scene.add(cloth);

  var underCloth = cloth.clone();
  underCloth.material = clothMaterial.clone();
  underCloth.position.z = -0.55;
  underCloth.position.x = 2.55;
  underCloth.rotation.y = -0.52;
  underCloth.scale.set(1.08, 1.05, 1);
  scene.add(underCloth);

  function makeMotes(count) {
    var positions = new Float32Array(count * 3);
    var speeds = new Float32Array(count);
    var i;
    for (i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.2) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      speeds[i] = 0.12 + Math.random() * 0.35;
    }
    var geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    var material = new THREE.PointsMaterial({
      color: 0xb08d57,
      size: 0.035,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
    });
    var points = new THREE.Points(geometry, material);
    points.userData.speeds = speeds;
    return points;
  }

  var motes = makeMotes(220);
  scene.add(motes);

  scene.add(new THREE.HemisphereLight(0xfff6e8, 0xc9b7a0, 1.2));
  var key = new THREE.DirectionalLight(0xffe6c4, 1.5);
  key.position.set(4, 6, 5);
  scene.add(key);
  var rim = new THREE.DirectionalLight(0x9ec4c0, 0.6);
  rim.position.set(-5, 1, 3);
  scene.add(rim);

  function resize() {
    var width = hero.clientWidth;
    var height = hero.clientHeight;
    camera.aspect = width / Math.max(height, 1);
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
    pointerSmooth.lerp(pointer, 0.045);
    cloth.material.uniforms.uTime.value = t;
    underCloth.material.uniforms.uTime.value = t * 0.86 + 1.2;
    cloth.rotation.y = -0.42 + pointerSmooth.x * 0.12;
    cloth.rotation.x = -0.12 + pointerSmooth.y * 0.08;
    camera.position.x = -0.35 + pointerSmooth.x * 0.28;
    camera.position.y = 0.12 + pointerSmooth.y * 0.16;
    camera.lookAt(1.4, 0.05, 0);

    var pos = motes.geometry.attributes.position;
    var speeds = motes.userData.speeds;
    var i;
    if (!reduceMotion) {
      for (i = 0; i < speeds.length; i += 1) {
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
    var title = document.querySelector("[data-split]");
    if (!title || reduceMotion) return;
    var nodes = Array.prototype.slice.call(title.childNodes);
    title.textContent = "";
    var delay = 0;
    nodes.forEach(function (node) {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent.split("").forEach(function (char) {
          var span = document.createElement("span");
          span.className = "char";
          span.textContent = char === " " ? "\u00a0" : char;
          span.style.animationDelay = 0.18 + delay * 0.028 + "s";
          title.appendChild(span);
          delay += 1;
        });
      } else if (node.nodeName === "EM") {
        var em = document.createElement("em");
        node.textContent.split("").forEach(function (char) {
          var span = document.createElement("span");
          span.className = "char";
          span.textContent = char === " " ? "\u00a0" : char;
          span.style.animationDelay = 0.18 + delay * 0.028 + "s";
          em.appendChild(span);
          delay += 1;
        });
        title.appendChild(em);
      }
    });
  }

  function setupCursor() {
    var root = document.querySelector(".cursor");
    var ring = document.querySelector(".cursor__ring");
    var dot = document.querySelector(".cursor__dot");
    if (!root || !ring || !dot) return;
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
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.transform = "translate(" + rx + "px," + ry + "px) translate(-50%,-50%)";
      requestAnimationFrame(follow);
    }
    follow();
  }
})();
