<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';
  import type * as THREE_TYPES from 'three';

  // ── Props ─────────────────────────────────────────────────────────────────
  interface Props {
    /**
     * Option A — pass a pre-built THREE.Object3D directly.
     * Must be created inside onMount in the parent (browser only).
     *   const mesh = new THREE.Mesh(geo, mat);
     *   <ProductViewer3D object={mesh} />
     */
    object?: THREE_TYPES.Object3D;

    /**
     * Option B — pass a factory function.
     * The component calls it with the THREE namespace so you don't
     * need a separate import in the parent.
     *   function build(THREE) { return new THREE.Mesh(...) }
     *   <ProductViewer3D buildObject={build} />
     */
    buildObject?: (THREE: typeof THREE_TYPES) => THREE_TYPES.Object3D;

    /**
     * Option C — pass a .glb / .gltf URL string.
     *   <ProductViewer3D modelUrl="/models/sneaker.glb" />
     */
    modelUrl?: string;

    /** Auto-rotate speed. 0 = disabled. */
    autoRotateSpeed?: number;

    /** CSS color string or 'transparent' */
    background?: string;
  }

  let {
    object,
    buildObject,
    modelUrl,
    autoRotateSpeed = 0.4,
    background      = 'transparent',
  }: Props = $props();

  // ── DOM refs ──────────────────────────────────────────────────────────────
  let canvas:  HTMLCanvasElement;
  let wrapper: HTMLDivElement;

  // ── Three.js handles ──────────────────────────────────────────────────────
  let renderer: THREE_TYPES.WebGLRenderer;
  let scene:    THREE_TYPES.Scene;
  let camera:   THREE_TYPES.PerspectiveCamera;
  let controls: import('three/addons/controls/OrbitControls.js').OrbitControls;
  let animId:   number;
  let ro:       ResizeObserver;

  // ── UI state ──────────────────────────────────────────────────────────────
  let rotating = $state(false);
  let loading  = $state(false);
  let errMsg   = $state('');
  let hovered  = $state(false);

  // ── Lifecycle ─────────────────────────────────────────────────────────────
  onMount(async () => {
    if (!browser) return;

    const THREE             = await import('three');
    const { OrbitControls } = await import('three/addons/controls/OrbitControls.js');

    rotating = autoRotateSpeed > 0;

    // ── Renderer ─────────────────────────────────────────────────────────────
    const { width, height } = wrapper.getBoundingClientRect();

    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha:     background === 'transparent',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace    = THREE.SRGBColorSpace;
    renderer.toneMapping         = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    renderer.shadowMap.enabled   = true;
    renderer.shadowMap.type      = THREE.PCFSoftShadowMap;

    // ── Scene ────────────────────────────────────────────────────────────────
    scene = new THREE.Scene();
    if (background !== 'transparent') {
      scene.background = new THREE.Color(background);
    }

    // ── Camera ───────────────────────────────────────────────────────────────
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.5, 4);

    // ── Lights ───────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    const key = new THREE.DirectionalLight(0xfff5e0, 2.5);
    key.position.set(3, 4, 3);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xd0e8ff, 1.0);
    fill.position.set(-4, 2, -2);
    scene.add(fill);

    scene.add(new THREE.DirectionalLight(0xffffff, 0.8).position.set(0, -2, -4) && new THREE.DirectionalLight(0xffffff, 0.8));
    scene.add(new THREE.HemisphereLight(0xffffff, 0x334455, 0.6));

    // Shadow catcher
    const plane = new THREE.Mesh(
      new THREE.CircleGeometry(3, 64),
      new THREE.ShadowMaterial({ opacity: 0.2 }),
    );
    plane.rotation.x    = -Math.PI / 2;
    plane.position.y    = -1.6;
    plane.receiveShadow = true;
    scene.add(plane);

    // ── Load / place the model ────────────────────────────────────────────────
    await resolveModel(THREE);

    // ── OrbitControls ────────────────────────────────────────────────────────
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping   = true;
    controls.dampingFactor   = 0.06;
    controls.autoRotate      = rotating;
    controls.autoRotateSpeed = autoRotateSpeed;
    controls.enableZoom      = true;
    controls.minDistance     = 1.5;
    controls.maxDistance     = 8;
    controls.maxPolarAngle   = Math.PI / 1.6;
    controls.minPolarAngle   = Math.PI / 6;

    // ── Render loop ──────────────────────────────────────────────────────────
    function animate() {
      animId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // ── Resize ────────────────────────────────────────────────────────────────
    ro = new ResizeObserver(() => {
      if (!renderer || !camera) return;
      const { width: w, height: h } = wrapper.getBoundingClientRect();
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    ro.observe(wrapper);
  });

  onDestroy(() => {
    if (!browser) return;
    cancelAnimationFrame(animId);
    ro?.disconnect();
    controls?.dispose();
    scene?.traverse((obj:any) => {
      const mesh = obj as THREE_TYPES.Mesh;
      if (mesh.isMesh) {
        mesh.geometry.dispose();
        const mat = mesh.material;
        Array.isArray(mat) ? mat.forEach((m) => m.dispose()) : mat.dispose();
      }
    });
    renderer?.dispose();
  });

  // ── Model resolution — tries A → B → C → fallback ────────────────────────
  async function resolveModel(THREE: typeof THREE_TYPES) {
    // ── A: direct Object3D prop ───────────────────────────────────────────────
    if (object) {
      autoCenter(object, THREE);
      scene.add(object);
      return;
    }

    // ── B: factory function prop ──────────────────────────────────────────────
    if (buildObject) {
      const built = buildObject(THREE);
      autoCenter(built, THREE);
      scene.add(built);
      return;
    }

    // ── C: .glb URL string ────────────────────────────────────────────────────
    if (modelUrl) {
      loading = true;
      try {
        const { GLTFLoader }  = await import('three/addons/loaders/GLTFLoader.js');
        const { DRACOLoader } = await import('three/addons/loaders/DRACOLoader.js');

        const draco = new DRACOLoader();
        draco.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');

        const loader = new GLTFLoader();
        loader.setDRACOLoader(draco);

        const gltf = await new Promise<any>((resolve, reject) =>
          loader.load(modelUrl!, resolve, undefined, reject)
        );

        gltf.scene.traverse((child: any) => {
          if (child.isMesh) { child.castShadow = true; child.receiveShadow = true; }
        });

        autoCenter(gltf.scene, THREE);
        scene.add(gltf.scene);
      } catch (e) {
        errMsg = 'Could not load model.';
        console.error(e);
        addFallback(THREE); // show fallback on error
      } finally {
        loading = false;
      }
      return;
    }

    // ── Fallback: built-in TorusKnot ──────────────────────────────────────────
    addFallback(THREE);
  }

  /** Centres and normalises scale of any Object3D to fit the viewport. */
  function autoCenter(obj: THREE_TYPES.Object3D, THREE: typeof THREE_TYPES) {
    const box    = new THREE.Box3().setFromObject(obj);
    const center = box.getCenter(new THREE.Vector3());
    const size   = box.getSize(new THREE.Vector3());
    const scale  = 2 / Math.max(size.x, size.y, size.z);
    obj.scale.setScalar(scale);
    obj.position.sub(center.multiplyScalar(scale));
    obj.traverse((child:any) => {
      const mesh = child as THREE_TYPES.Mesh;
      if (mesh.isMesh) { mesh.castShadow = true; mesh.receiveShadow = true; }
    });
  }

  /** Built-in TorusKnot shown when no prop is provided. */
  function addFallback(THREE: typeof THREE_TYPES) {
    const group = new THREE.Group();

    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.9, 0.28, 200, 32),
      new THREE.MeshStandardMaterial({ color: 0x84cc16, metalness: 0.55, roughness: 0.25 }),
    );
    knot.castShadow = true;
    group.add(knot);

    group.add(new THREE.Mesh(
      new THREE.TorusGeometry(1.35, 0.04, 16, 120),
      new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.9, roughness: 0.1, opacity: 0.35, transparent: true }),
    ));

    scene.add(group);
  }

  // ── Interaction ───────────────────────────────────────────────────────────
  function onEnter()       { hovered = true;  if (controls) controls.autoRotate = false; }
  function onLeave()       { hovered = false; if (controls) controls.autoRotate = rotating; }
  function toggleRotate()  { rotating = !rotating; if (controls) controls.autoRotate = rotating; }
  function zoomIn()        { if (camera) camera.position.multiplyScalar(0.85); }
  function zoomOut()       { if (camera) camera.position.multiplyScalar(1.15); }
  function reset()         { if (camera && controls) { camera.position.set(0, 0.5, 4); controls.reset(); } }
</script>


<!-- ── Template ──────────────────────────────────────────────────────────── -->
<div class="viewer-wrap">

  <div
    class="canvas-wrap"
    bind:this={wrapper}
    onmouseenter={onEnter}
    onmouseleave={onLeave}
    role="img"
    aria-label="Interactive 3D product viewer"
  >
    <canvas bind:this={canvas}></canvas>

    {#if loading}
      <div class="overlay">
        <div class="spinner"></div>
      </div>
    {/if}

    {#if errMsg}
      <div class="overlay">
        <span class="err">{errMsg}</span>
      </div>
    {/if}

    {#if !loading && !errMsg}
      <div class="hint" class:gone={hovered}>
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none"
          viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672z"/>
        </svg>
        Drag · Scroll to zoom
      </div>
    {/if}
  </div>

  <div class="bar">
    <button class="btn" onclick={reset}>↺ Reset</button>
    <button class="btn" class:active={rotating} onclick={toggleRotate}>
      {rotating ? '⏹ Stop' : '▶ Rotate'}
    </button>
    <div class="zoom">
      <button class="btn icon" onclick={zoomIn}  title="Zoom in">＋</button>
      <button class="btn icon" onclick={zoomOut} title="Zoom out">－</button>
    </div>
  </div>

</div>


<style>
  .viewer-wrap { display: flex; flex-direction: column; gap: 10px; width: 100%; }

  .canvas-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 4/3;
    border-radius: 16px;
    overflow: hidden;
    background: radial-gradient(ellipse at 50% 30%, #1c1c2e 0%, #0d0d14 100%);
    cursor: grab;
  }
  .canvas-wrap:active { cursor: grabbing; }

  canvas { display: block; width: 100% !important; height: 100% !important; }

  .overlay {
    position: absolute; inset: 0;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 12px;
    background: radial-gradient(ellipse at 50% 30%, #1c1c2e 0%, #0d0d14 100%);
    z-index: 10;
  }

  .spinner {
    width: 36px; height: 36px;
    border: 2.5px solid rgba(255,255,255,0.07);
    border-top-color: #84cc16;
    border-radius: 50%;
    animation: spin 0.75s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  .err { font-size: 13px; color: rgba(255,255,255,0.4); font-family: 'DM Sans', sans-serif; }

  .hint {
    position: absolute; bottom: 14px; left: 50%;
    transform: translateX(-50%);
    display: inline-flex; align-items: center; gap: 5px;
    padding: 5px 12px; border-radius: 100px;
    background: rgba(0,0,0,0.45); backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.07);
    color: rgba(255,255,255,0.45);
    font-size: 11px; font-family: 'DM Sans', sans-serif;
    pointer-events: none; white-space: nowrap;
    transition: opacity 0.3s;
  }
  .hint.gone { opacity: 0; }

  .bar { display: flex; align-items: center; gap: 6px; }
  .zoom { display: flex; gap: 4px; margin-left: auto; }

  .btn {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 6px 13px;
    font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500;
    color: var(--wa-muted, #71717a);
    background: var(--wa-surface, #f9fafb);
    border: 1px solid var(--wa-border, #e4e4e7);
    border-radius: 8px; cursor: pointer;
    transition: background 0.15s, color 0.15s;
  }
  .btn:hover     { background: var(--wa-close-hover, #e4e4e7); color: var(--wa-text, #09090b); }
  .btn.active    { background: #f0fdf4; border-color: #86efac; color: #16a34a; }
  .btn.icon      { padding: 6px 10px; }

  :global(.dark) .btn        { background: var(--wa-surface, #27272a); border-color: var(--wa-border, #3f3f46); color: var(--wa-muted, #a1a1aa); }
  :global(.dark) .btn:hover  { background: var(--wa-close-hover, #3f3f46); color: var(--wa-text, #fafafa); }
  :global(.dark) .btn.active { background: rgba(134,239,172,0.08); border-color: rgba(134,239,172,0.3); color: #4ade80; }
</style>