(function () {
  var canvas = document.getElementById("hero-canvas");
  var hero = document.getElementById("hero");

  if (!hero || !canvas || typeof THREE === "undefined") {
    return;
  }

  var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0xf7f3eb, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  var scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0xf4ead8, 0.028);

  var camera = new THREE.PerspectiveCamera(42, 1, 0.1, 80);
  camera.position.set(0, 0.15, 9.4);

  var clock = new THREE.Clock();
  var pointer = new THREE.Vector2(0, 0);
  var pointerSmooth = new THREE.Vector2(0, 0);

  var nebulaMaterial = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    uniforms: {
      uTime: { value: 0 },
    },
    vertexShader: [
      "varying vec3 vPos;",
      "void main() {",
      "  vPos = position;",
      "  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
      "}",
    ].join("\n"),
    fragmentShader: [
      "varying vec3 vPos;",
      "uniform float uTime;",
      "void main() {",
      "  vec3 n = normalize(vPos);",
      "  float sweep = 0.5 + 0.5 * sin(n.y * 2.2 + uTime * 0.14);",
      "  vec3 ivory = vec3(0.98, 0.96, 0.92);",
      "  vec3 sand = vec3(0.93, 0.86, 0.72);",
      "  vec3 gold = vec3(0.78, 0.58, 0.24);",
      "  vec3 col = mix(ivory, sand, pow(max(n.y * 0.45 + 0.55, 0.0), 1.4));",
      "  col = mix(col, gold, sweep * 0.12 * (1.0 - abs(n.y)));",
      "  gl_FragColor = vec4(col, 1.0);",
      "}",
    ].join("\n"),
  });
  scene.add(new THREE.Mesh(new THREE.SphereGeometry(28, 48, 48), nebulaMaterial));

  function makeField(count, radius, size, color, opacity) {
    var positions = new Float32Array(count * 3);
    var i;
    for (i = 0; i < count; i += 1) {
      var r = radius * Math.cbrt(Math.random());
      var theta = Math.random() * Math.PI * 2;
      var phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.55;
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    var geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    var material = new THREE.PointsMaterial({
      color: color,
      size: size,
      transparent: true,
      opacity: opacity,
      depthWrite: false,
    });
    return new THREE.Points(geometry, material);
  }

  var starsFar = makeField(900, 20, 0.035, 0xb07a1e, 0.45);
  var dust = makeField(380, 8.2, 0.05, 0x8a5c12, 0.55);
  scene.add(starsFar, dust);

  var coreGroup = new THREE.Group();
  scene.add(coreGroup);

  var crystal = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.15, 0),
    new THREE.MeshPhysicalMaterial({
      color: 0xf0d7a2,
      metalness: 0.55,
      roughness: 0.18,
      clearcoat: 1,
      clearcoatRoughness: 0.12,
      reflectivity: 1,
      emissive: 0xc9a056,
      emissiveIntensity: 0.18,
    })
  );
  coreGroup.add(crystal);

  var crystalGlow = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.28, 1),
    new THREE.MeshBasicMaterial({
      color: 0x8a5c12,
      transparent: true,
      opacity: 0.28,
      wireframe: true,
      depthWrite: false,
    })
  );
  coreGroup.add(crystalGlow);

  function makeRing(radius, tube, tilt, speed) {
    var mesh = new THREE.Mesh(
      new THREE.TorusGeometry(radius, tube, 16, 180),
      new THREE.MeshStandardMaterial({
        color: 0xc9a05a,
        metalness: 0.85,
        roughness: 0.2,
        emissive: 0x8a5c12,
        emissiveIntensity: 0.2,
      })
    );
    mesh.rotation.x = tilt;
    mesh.userData.speed = speed;
    return mesh;
  }

  var ringA = makeRing(2.05, 0.02, Math.PI / 2.15, 0.22);
  var ringB = makeRing(2.55, 0.014, Math.PI / 3.4, -0.16);
  var ringC = makeRing(3.1, 0.01, Math.PI / 5.2, 0.1);
  coreGroup.add(ringA, ringB, ringC);

  var halo = new THREE.Mesh(
    new THREE.RingGeometry(3.35, 3.55, 80),
    new THREE.MeshBasicMaterial({
      color: 0xb07a1e,
      transparent: true,
      opacity: 0.28,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
  );
  halo.rotation.x = Math.PI / 2.4;
  coreGroup.add(halo);

  scene.add(new THREE.AmbientLight(0xfff6e8, 0.9));
  scene.add(new THREE.HemisphereLight(0xffffff, 0xd7c4a3, 1.2));

  var keyLight = new THREE.PointLight(0xfff1d0, 32, 20, 2);
  keyLight.position.set(4.2, 3.4, 4.8);
  scene.add(keyLight);

  var rimLight = new THREE.PointLight(0xffffff, 16, 16, 2);
  rimLight.position.set(-5.2, -1.4, -3.2);
  scene.add(rimLight);

  var fillLight = new THREE.PointLight(0xe8b45a, 12, 14, 2);
  fillLight.position.set(-1.8, 4.6, 1.2);
  scene.add(fillLight);

  function resize() {
    var width = hero.clientWidth;
    var height = hero.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }

  window.addEventListener("resize", resize);
  hero.addEventListener("pointermove", function (event) {
    var rect = hero.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
  });

  function introOffset(time) {
    var t = Math.min(time / 2.6, 1);
    var eased = 1 - Math.pow(1 - t, 3);
    return THREE.MathUtils.lerp(2.6, 0, eased);
  }

  function animate() {
    var elapsed = clock.getElapsedTime();
    pointerSmooth.lerp(pointer, 0.045);

    nebulaMaterial.uniforms.uTime.value = elapsed;
    starsFar.rotation.y = elapsed * 0.02;
    dust.rotation.y = -elapsed * 0.05;
    dust.rotation.x = elapsed * 0.015;

    crystal.rotation.y = elapsed * 0.28;
    crystal.rotation.x = elapsed * 0.1;
    crystalGlow.rotation.y = -elapsed * 0.2;
    crystalGlow.rotation.z = elapsed * 0.12;

    ringA.rotation.z = elapsed * ringA.userData.speed;
    ringB.rotation.y = elapsed * ringB.userData.speed;
    ringC.rotation.z = elapsed * ringC.userData.speed;
    halo.rotation.z = elapsed * 0.08;

    coreGroup.position.y = Math.sin(elapsed * 0.8) * 0.1;
    coreGroup.rotation.y = pointerSmooth.x * 0.4;
    coreGroup.rotation.x = pointerSmooth.y * 0.2;

    camera.position.x = pointerSmooth.x * 0.55;
    camera.position.y = 0.12 + pointerSmooth.y * 0.28;
    camera.position.z = 9.4 + introOffset(elapsed);
    camera.lookAt(0, 0.05, 0);

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  resize();
  animate();
  hero.classList.add("is-live");
})();
