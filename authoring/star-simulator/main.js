import "./style.css";
import "./sh-panel.css";
import "./sh-panel.js";

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { TWIGL_PRESETS, makeTwiglFragmentSource } from "./twigl-presets.js";
import { SCENE_PRESETS } from "./scene-presets.js";

const canvas = document.querySelector("#scene");

const defaults = Object.freeze({
  twiglPreset: "1986780675169808394",
  textureResolution: "1024",
  textureGain: 0.54,
  textureContrast: 1.4,
  sourceScale: 0.41,
  sourceRotation: 83,
  sourceOffsetX: 0,
  sourceOffsetY: 0,
  sourceSymmetry: 1,
  sourceWarp: 0,
  sourceOctaves: 19,
  sourceRaySteps: 101,
  sourceHue: 0,
  sourceSaturation: 1,
  sourceGamma: 1.18,
  sourceInvert: false,
  timeSpeed: 0.42,
  phase: 0.7,
  uvScale: 3.44,
  uvRotation: 18,
  uvSeamFeather: 0.12,
  uvSeamIrregularity: 0.72,
  materialDomain: "organic",
  fieldResolution: "512",
  fieldSteps: 3,
  fieldFeed: 0.036,
  fieldKill: 0.061,
  fieldDiffusion: 0.82,
  fieldDiffusionRatio: 0.48,
  fieldReaction: 1,
  fieldTimeStep: 0.84,
  fieldForcing: 0.12,
  fieldSourceInjection: 0.025,
  fieldSourceSeed: 0.12,
  fieldSourceThreshold: 0.32,
  fieldFlow: 0.38,
  fieldFlowScale: 1,
  fieldFlowWarp: 0.42,
  fieldMemory: 0.86,
  fieldSeedSize: 0.3,
  fieldContour: 0.285,
  fieldRidgeWidth: 0.17,
  fieldStreakBaseColor: "#6fb8f8",
  fieldStreakHotColor: "#e9f9ff",
  fieldStreakBrightness: 1,
  fieldColorAuthority: 0,
  volumeScale: 6.8,
  volumeWarp: 0.72,
  volumeFlow: 0.28,
  volumeGranulation: 4.8,
  volumeDetail: 3.4,
  volumeFilament: 0.58,
  volumeContrast: 1.55,
  volumeDepth: 0.34,
  volumeSteps: 24,
  volumeDensity: 0.92,
  volumeAbsorption: 2.8,
  volumeBrightness: 0.92,
  volumeEmission: 0.68,
  volumeLimbGlow: 0.72,
  volumeBodyColor: "#160000",
  volumeMidColor: "#f02b00",
  volumeHotColor: "#ffd36a",
  volumeBasis: "twiglPlasma",
  volumeTwiglInfluence: 0.72,
  volumeTwiglScale: 1.35,
  volumeSourceHeat: 0.58,
  volumeSourceDensity: 0.36,
  volumeSourceWarp: 0.82,
  volumeSourceFlow: 0.4,
  volumeDepthDecorrelation: 0.68,
  volumeOctaves: 4,
  volumeLacunarity: 2.08,
  volumeGain: 0.52,
  volumeCellularity: 0.82,
  volumeGranuleBoundary: 0.31,
  volumeSunspotScale: 0.72,
  volumeSunspotStrength: 0.48,
  textureMix: 0.68,
  sourceColorMix: 0.14,
  emission: 0.62,
  displacement: 0.174,
  surfaceMesh: "showcase",
  roughness: 0.27,
  opacity: 1,
  alphaInfluence: 0.08,
  fresnel: 0.81,
  surfaceContrast: 2.62,
  baseColor: "#03040e",
  edgeColor: "#6572ff",
  accentColor: "#27b8ff",
  particleColor: "#5d66ff",
  particleHotColor: "#5fe2ff",
  particleDensity: 1,
  particleSize: 3.07,
  particleOpacity: 0.34,
  particleMotion: 0.53,
  plumeSpread: 0.88,
  textureResponse: 1.33,
  particleSurfaceClearance: 0.014,
  haloEnabled: true,
  haloIntensity: 0.72,
  haloSize: 1.059,
  sphereScale: 1.0,
  sphereY: -0.01,
  cameraDistance: 4.55,
  cameraFov: 39,
  autoRotate: true,
  rotateSpeed: 0.18,
  bloomStrength: 0.31,
  bloomRadius: 0.66,
  bloomThreshold: 0.09,
  exposure: 0.56,
  quality: "high",
  dpr: 1.5,
  paused: false,
});

const state = { ...defaults };
const activePreset = () => TWIGL_PRESETS.find(preset => preset.id === state.twiglPreset) || TWIGL_PRESETS[0];

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: false,
  alpha: false,
  powerPreference: "high-performance",
});
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = state.exposure;
renderer.setClearColor(0x020308, 1);
renderer.debug.checkShaderErrors = true;

if (!renderer.capabilities.isWebGL2) {
  throw new Error("TWIGL / Plume Sphere requires WebGL 2 for vertex texture sampling.");
}

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x020308);
scene.fog = new THREE.FogExp2(0x020308, 0.034);

const camera = new THREE.PerspectiveCamera(state.cameraFov, 1, 0.01, 80);
camera.position.set(0.08, 0.02, state.cameraDistance);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.055;
controls.enablePan = true;
controls.panSpeed = 0.82;
controls.screenSpacePanning = true;
controls.mouseButtons.RIGHT = THREE.MOUSE.PAN;
controls.minDistance = 0;
controls.maxDistance = Infinity;
controls.minTargetRadius = 0;
controls.maxTargetRadius = Infinity;
controls.zoomToCursor = true;
controls.rotateSpeed = 0.5;
controls.zoomSpeed = 0.62;
controls.target.set(0, state.sphereY, 0);

function syncCameraClipping() {
  const distance = Math.max(camera.position.distanceTo(controls.target), 0.00001);
  const near = distance < 2
    ? Math.max(0.00001, distance * 0.005)
    : Math.max(0.01, distance * 0.0005);
  const far = Math.max(80, distance * 4 + 20);

  if (Math.abs(camera.near - near) > near * 0.01 || Math.abs(camera.far - far) > far * 0.01) {
    camera.near = near;
    camera.far = far;
    camera.updateProjectionMatrix();
  }
}

controls.addEventListener("change", syncCameraClipping);

const renderPass = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(new THREE.Vector2(1, 1), state.bloomStrength, state.bloomRadius, state.bloomThreshold);
const outputPass = new OutputPass();
const composer = new EffectComposer(renderer);
composer.addPass(renderPass);
composer.addPass(bloomPass);
composer.addPass(outputPass);

const twiglScene = new THREE.Scene();
const twiglCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const twiglQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2));
twiglQuad.frustumCulled = false;
twiglScene.add(twiglQuad);

const twiglUniforms = {
  r: { value: new THREE.Vector2() },
  t: { value: 0 },
  uTextureGain: { value: state.textureGain },
  uTextureContrast: { value: state.textureContrast },
  uDomainScale: { value: state.sourceScale },
  uDomainRotation: { value: THREE.MathUtils.degToRad(state.sourceRotation) },
  uDomainOffset: { value: new THREE.Vector2(state.sourceOffsetX, state.sourceOffsetY) },
  uDomainSymmetry: { value: state.sourceSymmetry },
  uDomainWarp: { value: state.sourceWarp },
  uOctaves: { value: state.sourceOctaves },
  uRaySteps: { value: state.sourceRaySteps },
  uHueShift: { value: state.sourceHue / 360 },
  uSaturation: { value: state.sourceSaturation },
  uTextureGamma: { value: state.sourceGamma },
  uInvert: { value: state.sourceInvert ? 1 : 0 },
};

const twiglVertexShader = `
  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

function createTwiglMaterial() {
  const material = new THREE.ShaderMaterial({
    name: `TWIGL-${activePreset().id}`,
    uniforms: twiglUniforms,
    vertexShader: twiglVertexShader,
    fragmentShader: makeTwiglFragmentSource(activePreset().source),
    depthTest: false,
    depthWrite: false,
  });
  material.toneMapped = false;
  return material;
}

function createTwiglTarget(size) {
  const target = new THREE.WebGLRenderTarget(size, size, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat,
    type: THREE.UnsignedByteType,
    depthBuffer: false,
    stencilBuffer: false,
    generateMipmaps: false,
  });
  target.texture.name = "Live TWIGL surface";
  target.texture.colorSpace = THREE.LinearSRGBColorSpace;
  target.texture.wrapS = THREE.MirroredRepeatWrapping;
  target.texture.wrapT = THREE.MirroredRepeatWrapping;
  return target;
}

let twiglMaterial = createTwiglMaterial();
let twiglTarget = createTwiglTarget(Number(state.textureResolution));
twiglQuad.material = twiglMaterial;
twiglUniforms.r.value.set(Number(state.textureResolution), Number(state.textureResolution));

const fieldScene = new THREE.Scene();
const fieldCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const fieldQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2));
fieldQuad.frustumCulled = false;
fieldScene.add(fieldQuad);
const fieldTargetType = renderer.extensions.has("EXT_color_buffer_float")
  ? THREE.HalfFloatType
  : THREE.UnsignedByteType;

function createFieldTarget(width) {
  const target = new THREE.WebGLRenderTarget(width, Math.round(width * 0.5), {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat,
    type: fieldTargetType,
    depthBuffer: false,
    stencilBuffer: false,
    generateMipmaps: false,
  });
  target.texture.name = "Spherical reaction field";
  target.texture.colorSpace = THREE.NoColorSpace;
  target.texture.wrapS = THREE.RepeatWrapping;
  target.texture.wrapT = THREE.ClampToEdgeWrapping;
  return target;
}

const fieldUniforms = {
  uPrevious: { value: null },
  uTwigl: { value: twiglTarget.texture },
  uResolution: { value: new THREE.Vector2() },
  uTime: { value: 0 },
  uAngularStep: { value: 0 },
  uFeed: { value: state.fieldFeed },
  uKill: { value: state.fieldKill },
  uDiffusion: { value: state.fieldDiffusion },
  uDiffusionRatio: { value: state.fieldDiffusionRatio },
  uReaction: { value: state.fieldReaction },
  uTimeStep: { value: state.fieldTimeStep },
  uForcing: { value: state.fieldForcing },
  uSourceInjection: { value: state.fieldSourceInjection },
  uSourceSeed: { value: state.fieldSourceSeed },
  uSourceThreshold: { value: state.fieldSourceThreshold },
  uFlow: { value: state.fieldFlow },
  uFlowScale: { value: state.fieldFlowScale },
  uFlowWarp: { value: state.fieldFlowWarp },
  uMemory: { value: state.fieldMemory },
  uSeedSize: { value: state.fieldSeedSize },
  uReset: { value: 1 },
};

const fieldMaterial = new THREE.ShaderMaterial({
  name: "Direction-native spherical field simulation",
  uniforms: fieldUniforms,
  vertexShader: twiglVertexShader,
  fragmentShader: `
    precision highp float;

    uniform sampler2D uPrevious;
    uniform sampler2D uTwigl;
    uniform vec2 uResolution;
    uniform float uTime;
    uniform float uAngularStep;
    uniform float uFeed;
    uniform float uKill;
    uniform float uDiffusion;
    uniform float uDiffusionRatio;
    uniform float uReaction;
    uniform float uTimeStep;
    uniform float uForcing;
    uniform float uSourceInjection;
    uniform float uSourceSeed;
    uniform float uSourceThreshold;
    uniform float uFlow;
    uniform float uFlowScale;
    uniform float uFlowWarp;
    uniform float uMemory;
    uniform float uSeedSize;
    uniform float uReset;

    const float PI = 3.141592653589793;
    const float TAU = 6.283185307179586;

    vec3 directionFromUv(vec2 uv) {
      float longitude = (uv.x - 0.5) * TAU;
      float latitude = (uv.y - 0.5) * PI;
      float ring = cos(latitude);
      return vec3(cos(longitude) * ring, sin(latitude), sin(longitude) * ring);
    }

    vec2 uvFromDirection(vec3 direction) {
      direction = normalize(direction);
      return vec2(
        fract(atan(direction.z, direction.x) / TAU + 0.5),
        asin(clamp(direction.y, -1.0, 1.0)) / PI + 0.5
      );
    }

    vec3 rotateAroundAxis(vec3 value, vec3 axis, float angle) {
      float cosine = cos(angle);
      float sine = sin(angle);
      return value * cosine + cross(axis, value) * sine + axis * dot(axis, value) * (1.0 - cosine);
    }

    float sourceLuma(vec2 uv) {
      vec3 color = texture2D(uTwigl, uv).rgb;
      return dot(color, vec3(0.2126, 0.7152, 0.0722));
    }

    float sphericalForcing(vec3 direction) {
      vec3 weights = pow(abs(direction), vec3(4.0));
      weights /= max(weights.x + weights.y + weights.z, 0.0001);
      float sampleX = sourceLuma(direction.zy * 0.46 + 0.5);
      float sampleY = sourceLuma(direction.xz * 0.46 + 0.5);
      float sampleZ = sourceLuma(direction.xy * 0.46 + 0.5);
      float source = dot(vec3(sampleX, sampleY, sampleZ), weights);
      source = 1.0 - exp(-source * 0.72);
      float sphericalGrain = sin(dot(direction, vec3(17.13, 11.71, 23.37)) + uTime * 0.071);
      sphericalGrain *= sin(dot(direction, vec3(-9.31, 29.17, 7.53)) - uTime * 0.043);
      return clamp(source * 0.9 + sphericalGrain * 0.075 + 0.025, 0.0, 1.0);
    }

    vec4 fieldAt(vec3 direction) {
      return texture2D(uPrevious, uvFromDirection(direction));
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / uResolution;
      vec3 direction = directionFromUv(uv);
      float forcing = sphericalForcing(direction);

      if (uReset > 0.5) {
        float seedEdge = mix(0.992, 0.90, clamp(uSeedSize, 0.0, 1.0));
        float seedCore = min(0.999, seedEdge + 0.029);
        float islands = 0.0;
        islands = max(islands, smoothstep(seedEdge, seedCore, dot(direction, normalize(vec3(0.73, 0.31, 0.61)))));
        islands = max(islands, smoothstep(seedEdge, seedCore, dot(direction, normalize(vec3(-0.42, 0.84, 0.34)))));
        islands = max(islands, smoothstep(seedEdge, seedCore, dot(direction, normalize(vec3(0.18, -0.72, 0.67)))));
        islands = max(islands, smoothstep(seedEdge, seedCore, dot(direction, normalize(vec3(-0.81, -0.22, 0.54)))));
        islands = max(islands, smoothstep(seedEdge, seedCore, dot(direction, normalize(vec3(0.55, 0.76, -0.35)))));
        islands = max(islands, smoothstep(seedEdge, seedCore, dot(direction, normalize(vec3(-0.21, 0.25, -0.95)))));
        islands = max(islands, smoothstep(seedEdge, seedCore, dot(direction, normalize(vec3(0.86, -0.48, -0.18)))));
        islands = max(islands, smoothstep(seedEdge, seedCore, dot(direction, normalize(vec3(-0.57, -0.71, -0.41)))));
        float sourceGate = smoothstep(uSourceThreshold, min(0.999, uSourceThreshold + 0.22), forcing);
        float chemicalB = clamp(islands * (0.82 + forcing * 0.12) + sourceGate * uSourceSeed * 0.94, 0.0, 0.94);
        gl_FragColor = vec4(1.0 - chemicalB * 0.46, chemicalB, forcing, 1.0);
        return;
      }

      vec3 flowAxis = normalize(vec3(0.58, 0.34, -0.74) + vec3(
        sin(direction.y * 5.7 * uFlowScale + uTime * 0.09),
        cos(direction.z * 4.9 * uFlowScale - uTime * 0.07),
        sin(direction.x * 6.3 * uFlowScale + uTime * 0.05)
      ) * uFlowWarp);
      float flowAngle = -uFlow * uAngularStep * (0.22 + forcing * 0.78);
      vec3 centerDirection = normalize(rotateAroundAxis(direction, flowAxis, flowAngle));

      vec3 poleReference = abs(centerDirection.y) > 0.985 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
      vec3 east = normalize(cross(poleReference, centerDirection));
      vec3 north = normalize(cross(centerDirection, east));
      float cosineStep = cos(uAngularStep);
      float sineStep = sin(uAngularStep);
      vec3 eastDirection = normalize(centerDirection * cosineStep + east * sineStep);
      vec3 westDirection = normalize(centerDirection * cosineStep - east * sineStep);
      vec3 northDirection = normalize(centerDirection * cosineStep + north * sineStep);
      vec3 southDirection = normalize(centerDirection * cosineStep - north * sineStep);

      float diagonalStep = uAngularStep * 1.41421356237;
      float diagonalCosine = cos(diagonalStep);
      float diagonalSine = sin(diagonalStep);
      vec3 northEastDirection = normalize(centerDirection * diagonalCosine + normalize(north + east) * diagonalSine);
      vec3 northWestDirection = normalize(centerDirection * diagonalCosine + normalize(north - east) * diagonalSine);
      vec3 southEastDirection = normalize(centerDirection * diagonalCosine + normalize(-north + east) * diagonalSine);
      vec3 southWestDirection = normalize(centerDirection * diagonalCosine + normalize(-north - east) * diagonalSine);

      vec4 center = fieldAt(centerDirection);
      vec4 eastState = fieldAt(eastDirection);
      vec4 westState = fieldAt(westDirection);
      vec4 northState = fieldAt(northDirection);
      vec4 southState = fieldAt(southDirection);
      vec4 northEastState = fieldAt(northEastDirection);
      vec4 northWestState = fieldAt(northWestDirection);
      vec4 southEastState = fieldAt(southEastDirection);
      vec4 southWestState = fieldAt(southWestDirection);
      vec4 cardinalSum = eastState + westState + northState + southState;
      vec4 diagonalSum = northEastState + northWestState + southEastState + southWestState;
      vec4 sphericalLaplacian = cardinalSum * 0.2 + diagonalSum * 0.05 - center;
      vec2 laplacian = sphericalLaplacian.rg;

      float chemicalA = center.r;
      float chemicalB = center.g;
      float reaction = chemicalA * chemicalB * chemicalB * uReaction;
      float timeStep = uTimeStep;
      float sourceModulation = (forcing - 0.5) * uForcing;
      float localFeed = clamp(uFeed + sourceModulation * 0.012, 0.001, 0.12);
      float localKill = clamp(uKill - sourceModulation * 0.009, 0.02, 0.12);
      chemicalA += (uDiffusion * laplacian.r - reaction + localFeed * (1.0 - chemicalA)) * timeStep;
      chemicalB += (uDiffusion * uDiffusionRatio * laplacian.g + reaction - (localKill + localFeed) * chemicalB) * timeStep;
      float sourceGate = smoothstep(uSourceThreshold, min(0.999, uSourceThreshold + 0.22), forcing);
      chemicalB += sourceGate * uSourceInjection * 0.018 * timeStep;
      chemicalA -= sourceGate * uSourceInjection * 0.0045 * timeStep;
      chemicalA = clamp(chemicalA, 0.0, 1.0);
      chemicalB = clamp(chemicalB, 0.0, 1.0);

      float memoryRate = mix(0.01, 0.0002, clamp(uMemory, 0.0, 1.0));
      float sourceMemory = clamp(center.b + sphericalLaplacian.b * uDiffusion * 0.22, 0.0, 1.0);
      sourceMemory = mix(sourceMemory, forcing, memoryRate * (0.25 + uForcing));
      gl_FragColor = vec4(chemicalA, chemicalB, sourceMemory, 1.0);
    }
  `,
  depthTest: false,
  depthWrite: false,
  toneMapped: false,
});
fieldQuad.material = fieldMaterial;

let fieldRead = createFieldTarget(Number(state.fieldResolution));
let fieldWrite = createFieldTarget(Number(state.fieldResolution));
let fieldNeedsReset = true;

function configureFieldResolution() {
  const width = Number(state.fieldResolution);
  fieldUniforms.uResolution.value.set(width, Math.round(width * 0.5));
  fieldUniforms.uAngularStep.value = Math.PI * 2 / width;
}

function replaceFieldTargets() {
  const previousRead = fieldRead;
  const previousWrite = fieldWrite;
  const width = Number(state.fieldResolution);
  fieldRead = createFieldTarget(width);
  fieldWrite = createFieldTarget(width);
  sphereUniforms.uField.value = fieldRead.texture;
  particleUniforms.uField.value = fieldRead.texture;
  previousRead.dispose();
  previousWrite.dispose();
  configureFieldResolution();
  fieldNeedsReset = true;
}

function resetSphericalField() {
  fieldNeedsReset = true;
}

function renderSphericalField(time) {
  fieldUniforms.uTime.value = time;
  const stepCount = Math.max(1, Math.round(state.fieldSteps));
  for (let step = 0; step < stepCount; step += 1) {
    fieldUniforms.uPrevious.value = fieldRead.texture;
    fieldUniforms.uReset.value = fieldNeedsReset && step === 0 ? 1 : 0;
    renderer.setRenderTarget(fieldWrite);
    renderer.render(fieldScene, fieldCamera);
    const previousRead = fieldRead;
    fieldRead = fieldWrite;
    fieldWrite = previousRead;
    fieldNeedsReset = false;
  }
  sphereUniforms.uField.value = fieldRead.texture;
  particleUniforms.uField.value = fieldRead.texture;
}

configureFieldResolution();

const triplanarFunctions = `
  vec2 rotateUv(vec2 uv, float angle) {
    float cosine = cos(angle);
    float sine = sin(angle);
    return mat2(cosine, -sine, sine, cosine) * uv;
  }

  float tileHash(vec2 value) {
    value = fract(value * vec2(123.34, 456.21));
    value += dot(value, value + 45.32);
    return fract(value.x * value.y);
  }

  float organicTileWeight(vec2 uv, float seed, float seamFeather, float irregularity) {
    vec2 tileId = floor(uv);
    vec2 local = fract(uv) - 0.5;
    float polarAngle = atan(local.y, local.x);
    float phase = tileHash(tileId + vec2(seed, seed * 1.731)) * 6.2831853;
    float ripple = sin(polarAngle * 5.0 + phase) * 0.55;
    ripple += sin(polarAngle * 9.0 - phase * 1.37) * 0.30;
    ripple += sin(polarAngle * 13.0 + phase * 0.73) * 0.15;
    float circularEdge = 0.49 - length(local) + ripple * 0.04 * irregularity;
    float rectangularSafety = 0.5 - max(abs(local.x), abs(local.y));
    float safeEdge = min(circularEdge, rectangularSafety);
    return smoothstep(0.0, max(seamFeather, 0.002), safeEdge);
  }

  vec2 organicTileUv(vec2 uv, float seed, float irregularity) {
    vec2 tileId = floor(uv);
    vec2 local = fract(uv) - 0.5;
    float randomValue = tileHash(tileId + vec2(seed, seed * 0.613));
    float spin = (randomValue - 0.5) * 1.4 * irregularity;
    vec2 drift = vec2(
      tileHash(tileId + vec2(seed * 1.17, 7.31)),
      tileHash(tileId + vec2(3.79, seed * 1.41))
    ) - 0.5;
    return tileId + rotateUv(local, spin) + 0.5 + drift * 0.026 * irregularity;
  }

  vec3 sampleTwiglTile(sampler2D source, vec2 uv, float seamFeather, float irregularity) {
    vec2 uvA = uv;
    vec2 uvB = uv + vec2(0.438, 0.727);
    vec2 uvC = uv + vec2(0.782, 0.319);
    float weightA = organicTileWeight(uvA, 11.7, seamFeather, irregularity);
    float weightB = organicTileWeight(uvB, 29.3, seamFeather, irregularity);
    float weightC = organicTileWeight(uvC, 47.9, seamFeather, irregularity);
    weightA = pow(weightA, 1.5) + 0.0001;
    weightB = pow(weightB, 1.5) + 0.0001;
    weightC = pow(weightC, 1.5) + 0.0001;
    vec3 sampleA = texture2D(source, organicTileUv(uvA, 11.7, irregularity)).rgb;
    vec3 sampleB = texture2D(source, organicTileUv(uvB, 29.3, irregularity)).rgb;
    vec3 sampleC = texture2D(source, organicTileUv(uvC, 47.9, irregularity)).rgb;
    return (sampleA * weightA + sampleB * weightB + sampleC * weightC) / (weightA + weightB + weightC);
  }

  vec3 sampleTwiglTriplanar(sampler2D source, vec3 position, vec3 normalDirection, float scale, float angle, float seamFeather, float irregularity) {
    vec3 weights = pow(abs(normalDirection), vec3(3.5));
    weights /= max(weights.x + weights.y + weights.z, 0.0001);
    vec2 uvX = rotateUv(position.zy * scale, angle) + 0.5;
    vec2 uvY = rotateUv(position.xz * scale, angle) + 0.5;
    vec2 uvZ = rotateUv(position.xy * scale, angle) + 0.5;
    vec3 xSample = sampleTwiglTile(source, uvX, seamFeather, irregularity);
    vec3 ySample = sampleTwiglTile(source, uvY, seamFeather, irregularity);
    vec3 zSample = sampleTwiglTile(source, uvZ, seamFeather, irregularity);
    return xSample * weights.x + ySample * weights.y + zSample * weights.z;
  }

  vec2 octEncodeSigned(vec3 direction) {
    direction /= max(abs(direction.x) + abs(direction.y) + abs(direction.z), 0.0001);
    vec2 encoded = direction.xy;
    if (direction.z < 0.0) {
      encoded = (1.0 - abs(encoded.yx)) * sign(encoded.xy + vec2(0.000001));
    }
    return encoded;
  }

  vec3 octWarpDirection(vec3 direction, float irregularity) {
    vec3 ripple = vec3(
      sin(dot(direction, vec3(3.1, 5.7, 2.3)) * 2.1),
      sin(dot(direction, vec3(-4.3, 2.9, 6.1)) * 1.7 + 1.8),
      sin(dot(direction, vec3(5.3, -3.7, 2.7)) * 1.9 - 0.9)
    );
    return normalize(direction + ripple * irregularity * 0.018);
  }

  vec3 sampleTwiglOctChart(sampler2D source, vec2 encoded, float scale, float angle) {
    vec2 uv = rotateUv(encoded * 0.5, angle) * max(scale, 0.001) + 0.5;
    return texture2D(source, uv).rgb;
  }

  float octChartWeight(vec2 encoded, float seamFeather) {
    float edgeDistance = 1.0 - max(abs(encoded.x), abs(encoded.y));
    float blendWidth = mix(0.035, 0.34, clamp(seamFeather / 0.3, 0.0, 1.0));
    return smoothstep(0.0, blendWidth, edgeDistance) + 0.0005;
  }

  vec3 sampleTwiglOctahedral(sampler2D source, vec3 direction, float scale, float angle, float seamFeather, float irregularity) {
    vec3 warped = octWarpDirection(normalize(direction), irregularity);
    vec3 directionA = warped;
    vec3 directionB = vec3(warped.z, warped.x, warped.y);
    vec3 directionC = vec3(warped.y, warped.z, warped.x);
    vec2 encodedA = octEncodeSigned(directionA);
    vec2 encodedB = octEncodeSigned(directionB);
    vec2 encodedC = octEncodeSigned(directionC);
    float weightA = pow(octChartWeight(encodedA, seamFeather), 2.0) + 0.0001;
    float weightB = pow(octChartWeight(encodedB, seamFeather), 2.0) + 0.0001;
    float weightC = pow(octChartWeight(encodedC, seamFeather), 2.0) + 0.0001;
    float directionalBias = irregularity * 0.28;
    weightA *= 1.0 + directionalBias * sin(dot(warped, vec3(4.7, 2.9, -3.3)) * 3.1);
    weightB *= 1.0 + directionalBias * sin(dot(warped, vec3(-2.7, 5.1, 3.9)) * 2.7 + 2.1);
    weightC *= 1.0 + directionalBias * sin(dot(warped, vec3(3.7, -4.3, 5.3)) * 2.9 - 1.4);
    vec3 sampleA = sampleTwiglOctChart(source, encodedA, scale, angle);
    vec3 sampleB = sampleTwiglOctChart(source, encodedB, scale, angle - 2.0943951);
    vec3 sampleC = sampleTwiglOctChart(source, encodedC, scale, angle + 2.0943951);
    return (sampleA * weightA + sampleB * weightB + sampleC * weightC) / (weightA + weightB + weightC);
  }

  vec2 sphericalFieldUv(vec3 direction) {
    direction = normalize(direction);
    return vec2(
      fract(atan(direction.z, direction.x) / 6.28318530718 + 0.5),
      asin(clamp(direction.y, -1.0, 1.0)) / 3.14159265359 + 0.5
    );
  }

  vec4 sampleSphericalField(sampler2D field, vec3 direction, float contour, float ridgeWidth, vec3 streakBaseColor, vec3 streakHotColor, float streakBrightness) {
    direction = normalize(direction);
    vec2 fieldUv = sphericalFieldUv(direction);
    vec4 fieldState = texture2D(field, fieldUv);
    float poleBlend = smoothstep(0.94, 0.998, abs(direction.y));
    vec4 poleAverage = (
      texture2D(field, vec2(0.125, fieldUv.y)) +
      texture2D(field, vec2(0.375, fieldUv.y)) +
      texture2D(field, vec2(0.625, fieldUv.y)) +
      texture2D(field, vec2(0.875, fieldUv.y))
    ) * 0.25;
    fieldState = mix(fieldState, poleAverage, poleBlend);
    float chemicalA = fieldState.r;
    float chemicalB = fieldState.g;
    float sourceMemory = fieldState.b;
    ridgeWidth = max(ridgeWidth, 0.002);
    float body = smoothstep(max(0.0, contour - ridgeWidth * 1.4), min(1.0, contour + ridgeWidth * 1.8), chemicalB);
    float membrane = 1.0 - smoothstep(ridgeWidth * 0.12, ridgeWidth, abs(chemicalB - contour));
    float depleted = smoothstep(0.06, 0.72, 1.0 - chemicalA);
    float energy = clamp(body * 0.48 + membrane * 0.34 + depleted * 0.16 + sourceMemory * 0.025, 0.0, 1.0);
    vec3 fieldColor = mix(streakBaseColor, streakHotColor, clamp(membrane * 0.78 + sourceMemory * 0.08, 0.0, 1.0));
    return vec4(fieldColor * energy * streakBrightness, energy);
  }

  float solarGyroid(vec3 point) {
    return dot(sin(point), cos(point.yzx)) / 3.0;
  }

  float solarHash(vec3 point) {
    point = fract(point * 0.1031);
    point += dot(point, point.yzx + 33.33);
    return fract((point.x + point.y) * point.z);
  }

  float solarNoise(vec3 point) {
    vec3 cell = floor(point);
    vec3 local = fract(point);
    local = local * local * (3.0 - 2.0 * local);
    float n000 = solarHash(cell + vec3(0.0, 0.0, 0.0));
    float n100 = solarHash(cell + vec3(1.0, 0.0, 0.0));
    float n010 = solarHash(cell + vec3(0.0, 1.0, 0.0));
    float n110 = solarHash(cell + vec3(1.0, 1.0, 0.0));
    float n001 = solarHash(cell + vec3(0.0, 0.0, 1.0));
    float n101 = solarHash(cell + vec3(1.0, 0.0, 1.0));
    float n011 = solarHash(cell + vec3(0.0, 1.0, 1.0));
    float n111 = solarHash(cell + vec3(1.0, 1.0, 1.0));
    float lower = mix(mix(n000, n100, local.x), mix(n010, n110, local.x), local.y);
    float upper = mix(mix(n001, n101, local.x), mix(n011, n111, local.x), local.y);
    return mix(lower, upper, local.z);
  }

  float solarFbm(vec3 point, float highQuality) {
    float value = 0.0;
    float amplitude = 0.5;
    float normalization = 0.0;
    float octaveCount = mix(1.0, clamp(uVolumeOctaves, 1.0, 5.0), highQuality);
    for (int octave = 0; octave < 5; octave += 1) {
      if (float(octave) >= octaveCount) break;
      value += solarNoise(point) * amplitude;
      normalization += amplitude;
      point = point * uVolumeLacunarity + vec3(7.13, -5.71, 3.91);
      amplitude *= uVolumeGain;
    }
    return value / max(normalization, 0.0001);
  }

  float solarLuminance(vec3 color) {
    return dot(color, vec3(0.2126, 0.7152, 0.0722));
  }

  vec4 sampleTwiglVolumeDriver(vec3 point) {
    float scale = max(uVolumeTwiglScale, 0.001);
    float decorrelation = uVolumeDepthDecorrelation;
    float sourceTime = uVolumeTime * uVolumeSourceFlow;
    vec3 flowPoint = point * scale;
    float radialPhase = length(point) * decorrelation * 2.4;
    flowPoint.xy = rotateUv(flowPoint.xy, radialPhase * 0.31 + sourceTime * 0.013);
    flowPoint.yz = rotateUv(flowPoint.yz, -radialPhase * 0.23 + sourceTime * 0.009);
    flowPoint += sin(flowPoint.yzx * 0.71 + vec3(0.0, 2.1, 4.2)) * decorrelation * 0.34;

    vec2 uvA = vec2(
      solarGyroid(flowPoint * 0.73 + vec3(1.7, -2.3, 0.9)),
      solarGyroid(flowPoint.yzx * 0.91 + vec3(-3.1, 0.8, 2.4))
    ) * 1.27 + 0.5 + vec2(sourceTime * 0.017, -sourceTime * 0.011);
    vec2 uvB = vec2(
      solarGyroid(flowPoint.zxy * 1.07 + vec3(4.3, 1.1, -2.7)),
      solarGyroid(flowPoint * 0.59 + vec3(-1.4, 3.8, 2.2))
    ) * 1.41 + 0.5 + vec2(-sourceTime * 0.013, sourceTime * 0.019) + 0.317;
    vec2 uvC = vec2(
      solarGyroid(flowPoint.yxz * 1.23 + vec3(0.6, -4.1, 3.5)),
      solarGyroid(flowPoint.zyx * 0.81 + vec3(2.9, 1.6, -3.7))
    ) * 1.16 + 0.5 + vec2(sourceTime * 0.009, sourceTime * 0.007) + 0.683;
    vec3 axes = vec3(
      solarLuminance(texture2D(uTwigl, fract(uvA)).rgb),
      solarLuminance(texture2D(uTwigl, fract(uvB)).rgb),
      solarLuminance(texture2D(uTwigl, fract(uvC)).rgb)
    );
    return vec4(axes, (axes.x + axes.y + axes.z) / 3.0);
  }

  vec4 evaluateSolarVolume(vec3 position, float highQuality) {
    vec3 point = position * uVolumeScale;
    float spin = uVolumeTime * uVolumeFlow;
    point.xz = rotateUv(point.xz, spin * 0.19);
    point.xy = rotateUv(point.xy, -spin * 0.11);
    vec3 drift = vec3(spin * 0.21, -spin * 0.13, spin * 0.17);

    vec4 sourceDriver = vec4(0.5);
    float sourceInfluence = 0.0;
    if (uVolumeBasis > 1.5) {
      sourceDriver = sampleTwiglVolumeDriver(point / max(uVolumeScale, 0.001));
      sourceInfluence = uVolumeTwiglInfluence;
      vec3 sourceVector = (sourceDriver.rgb - 0.5) * 2.0;
      point += sourceVector * uVolumeSourceFlow * sourceInfluence * (0.45 + sin(spin * 0.37) * 0.12);
    }

    vec3 warpVector = vec3(
      solarGyroid(point * 0.72 + drift),
      solarGyroid(point.yzx * 0.83 - drift.zxy + 2.17),
      solarGyroid(point.zxy * 0.91 + drift.yzx - 1.31)
    );
    vec3 sourceWarpVector = (sourceDriver.rgb - 0.5) * 2.0;
    vec3 warped = point + warpVector * uVolumeWarp + sourceWarpVector * uVolumeSourceWarp * sourceInfluence;
    float macroField = solarGyroid(warped * 0.68 + drift * 0.42);
    float convection = solarGyroid(warped * 1.37 - drift * 0.71 + macroField * 1.8);
    float granules = solarGyroid(warped * uVolumeGranulation + warpVector * 2.3 + drift);
    float detail = solarGyroid(warped * uVolumeDetail * 2.1 - drift * 1.7 + granules);
    float microGranules = solarGyroid(warped * uVolumeDetail * 4.6 + drift * 2.4 + detail * 1.3);

    float cellularBody = smoothstep(-0.52, 0.64, granules * 0.58 + detail * 0.31 + microGranules * 0.14);
    float brightRidges = 1.0 - smoothstep(0.035, mix(0.42, 0.075, uVolumeFilament), abs(convection + macroField * 0.48 + detail * 0.13));
    float granularRims = 1.0 - smoothstep(0.06, 0.34, abs(granules + detail * 0.2));
    float microRims = 1.0 - smoothstep(0.045, 0.27, abs(microGranules + granules * 0.18));
    float gyroidSunspots = smoothstep(0.34, 0.76, -macroField - convection * 0.24);
    float gyroidHeat = clamp(cellularBody * 0.38 + granularRims * 0.34 + microRims * 0.25 + brightRidges * 0.17 - gyroidSunspots * 0.26, 0.0, 1.0);

    float organicMass = solarFbm(warped * 0.48 + drift * 0.16, highQuality);
    float cellInterior = solarNoise(warped * uVolumeGranulation * 0.72 + warpVector * 1.9);
    float cellDetail = solarNoise(warped * uVolumeDetail * 2.4 - drift * 1.1 + organicMass * 2.7);
    float boundaryWidth = max(uVolumeGranuleBoundary, 0.015);
    float cellBoundary = 1.0 - smoothstep(boundaryWidth * 0.12, boundaryWidth, abs(cellInterior - 0.5));
    float detailBoundary = 1.0 - smoothstep(boundaryWidth * 0.08, boundaryWidth * 0.72, abs(cellDetail - 0.5));
    float cellularFill = smoothstep(0.2, 0.82, mix(organicMass, cellInterior, uVolumeCellularity));
    float spotNoise = solarNoise(warped * uVolumeSunspotScale * 0.42 + vec3(13.7, -8.3, 5.9));
    float organicSunspots = smoothstep(0.62, 0.88, 1.0 - spotNoise) * uVolumeSunspotStrength;
    float cellularHeat = clamp(cellularFill * 0.46 + cellBoundary * 0.38 + detailBoundary * 0.24 - organicSunspots, 0.0, 1.0);

    float sourceHeat = (sourceDriver.a - 0.5) * 2.0;
    float sourceDensity = mix(cellularHeat, sourceDriver.a, clamp(uVolumeSourceDensity * sourceInfluence, 0.0, 1.0));
    float twiglHeat = clamp(sourceDensity + sourceHeat * uVolumeSourceHeat * sourceInfluence * 0.52, 0.0, 1.0);

    float heat = gyroidHeat;
    if (uVolumeBasis > 1.5) {
      heat = twiglHeat;
    } else if (uVolumeBasis > 0.5) {
      heat = cellularHeat;
    }
    heat = clamp((heat - 0.5) * uVolumeContrast + 0.5, 0.0, 1.0);

    vec3 color = mix(uVolumeBodyColor, uVolumeMidColor, smoothstep(0.02, 0.62, heat));
    color = mix(color, uVolumeHotColor, smoothstep(0.54, 1.0, heat));
    color *= (0.22 + heat * 1.48) * uVolumeBrightness;
    return vec4(color, heat);
  }

  vec4 sampleSolarVolume(vec3 position) {
    return evaluateSolarVolume(position, 1.0);
  }

  vec4 sampleSolarVolumeFast(vec3 position) {
    return evaluateSolarVolume(position, 0.0);
  }

  vec4 sampleTwiglDomain(sampler2D source, sampler2D field, vec3 position, vec3 normalDirection, float scale, float angle, float seamFeather, float irregularity, float materialDomain, float fieldContour, float fieldRidgeWidth, vec3 streakBaseColor, vec3 streakHotColor, float streakBrightness) {
    vec4 result = vec4(0.0);
    if (materialDomain > 2.5) {
      result = sampleSolarVolumeFast(position);
    } else if (materialDomain > 1.5) {
      result = sampleSphericalField(field, normalize(position), fieldContour, fieldRidgeWidth, streakBaseColor, streakHotColor, streakBrightness);
    } else if (materialDomain > 0.5) {
      vec3 octahedral = sampleTwiglOctahedral(source, normalize(position), scale, angle, seamFeather, irregularity);
      result = vec4(octahedral, dot(octahedral, vec3(0.2126, 0.7152, 0.0722)));
    } else {
      vec3 organic = sampleTwiglTriplanar(source, position, normalDirection, scale, angle, seamFeather, irregularity);
      result = vec4(organic, dot(organic, vec3(0.2126, 0.7152, 0.0722)));
    }
    return result;
  }
`;

const materialDomainModes = {
  organic: 0,
  octahedral: 1,
  sphericalField: 2,
  solarVolume: 3,
};

const volumeBasisModes = {
  gyroid: 0,
  cellular: 1,
  twiglPlasma: 2,
};

const solarVolumeRaymarchFunctions = `
  vec4 raymarchSolarVolume(vec3 startPosition, vec3 rayDirection) {
    vec3 accumulatedColor = vec3(0.0);
    float accumulatedWeight = 0.0;
    float accumulatedDensity = 0.0;
    float steps = max(uVolumeSteps, 1.0);

    for (int index = 0; index < 40; index += 1) {
      if (float(index) >= steps) break;
      float travel = (float(index) + 0.35) / steps;
      float depth = travel * uVolumeDepth;
      vec4 volumeSample = sampleSolarVolume(startPosition + rayDirection * depth);
      float shell = exp(-depth * uVolumeAbsorption);
      float density = pow(max(volumeSample.a, 0.001), 1.35) * shell * uVolumeDensity;
      float weight = density * exp(-travel * 1.65);
      accumulatedColor += volumeSample.rgb * weight;
      accumulatedWeight += weight;
      accumulatedDensity += density / steps;
    }

    vec4 surfaceSample = sampleSolarVolume(startPosition);
    vec3 volumeColor = accumulatedColor / max(accumulatedWeight, 0.0001);
    float depthMix = clamp(accumulatedDensity * 0.46, 0.0, 0.72);
    vec3 color = mix(surfaceSample.rgb, volumeColor, depthMix);
    color *= 0.76 + clamp(accumulatedDensity, 0.0, 1.0) * 0.52;
    float energy = clamp(mix(surfaceSample.a, accumulatedDensity, 0.48), 0.0, 1.0);
    return vec4(color, energy);
  }
`;

const sphereUniforms = {
  uTwigl: { value: twiglTarget.texture },
  uField: { value: fieldRead.texture },
  uUvScale: { value: state.uvScale },
  uUvRotation: { value: THREE.MathUtils.degToRad(state.uvRotation) },
  uUvSeamFeather: { value: state.uvSeamFeather },
  uUvSeamIrregularity: { value: state.uvSeamIrregularity },
  uMaterialDomain: { value: materialDomainModes[state.materialDomain] },
  uFieldContour: { value: state.fieldContour },
  uFieldRidgeWidth: { value: state.fieldRidgeWidth },
  uFieldStreakBaseColor: { value: new THREE.Color(state.fieldStreakBaseColor) },
  uFieldStreakHotColor: { value: new THREE.Color(state.fieldStreakHotColor) },
  uFieldStreakBrightness: { value: state.fieldStreakBrightness },
  uFieldColorAuthority: { value: state.fieldColorAuthority },
  uVolumeTime: { value: 0 },
  uVolumeBasis: { value: volumeBasisModes[state.volumeBasis] ?? 2 },
  uVolumeTwiglInfluence: { value: state.volumeTwiglInfluence },
  uVolumeTwiglScale: { value: state.volumeTwiglScale },
  uVolumeSourceHeat: { value: state.volumeSourceHeat },
  uVolumeSourceDensity: { value: state.volumeSourceDensity },
  uVolumeSourceWarp: { value: state.volumeSourceWarp },
  uVolumeSourceFlow: { value: state.volumeSourceFlow },
  uVolumeDepthDecorrelation: { value: state.volumeDepthDecorrelation },
  uVolumeOctaves: { value: state.volumeOctaves },
  uVolumeLacunarity: { value: state.volumeLacunarity },
  uVolumeGain: { value: state.volumeGain },
  uVolumeCellularity: { value: state.volumeCellularity },
  uVolumeGranuleBoundary: { value: state.volumeGranuleBoundary },
  uVolumeSunspotScale: { value: state.volumeSunspotScale },
  uVolumeSunspotStrength: { value: state.volumeSunspotStrength },
  uVolumeScale: { value: state.volumeScale },
  uVolumeWarp: { value: state.volumeWarp },
  uVolumeFlow: { value: state.volumeFlow },
  uVolumeGranulation: { value: state.volumeGranulation },
  uVolumeDetail: { value: state.volumeDetail },
  uVolumeFilament: { value: state.volumeFilament },
  uVolumeContrast: { value: state.volumeContrast },
  uVolumeDepth: { value: state.volumeDepth },
  uVolumeSteps: { value: state.volumeSteps },
  uVolumeDensity: { value: state.volumeDensity },
  uVolumeAbsorption: { value: state.volumeAbsorption },
  uVolumeBrightness: { value: state.volumeBrightness },
  uVolumeEmission: { value: state.volumeEmission },
  uVolumeLimbGlow: { value: state.volumeLimbGlow },
  uVolumeBodyColor: { value: new THREE.Color(state.volumeBodyColor) },
  uVolumeMidColor: { value: new THREE.Color(state.volumeMidColor) },
  uVolumeHotColor: { value: new THREE.Color(state.volumeHotColor) },
  uObjectCameraPosition: { value: new THREE.Vector3(0, 0, 4) },
  uDisplacement: { value: state.displacement },
  uTextureMix: { value: state.textureMix },
  uSourceColorMix: { value: state.sourceColorMix },
  uEmission: { value: state.emission },
  uRoughness: { value: state.roughness },
  uOpacity: { value: state.opacity },
  uAlphaInfluence: { value: state.alphaInfluence },
  uFresnel: { value: state.fresnel },
  uSurfaceContrast: { value: state.surfaceContrast },
  uBaseColor: { value: new THREE.Color(state.baseColor) },
  uEdgeColor: { value: new THREE.Color(state.edgeColor) },
  uAccentColor: { value: new THREE.Color(state.accentColor) },
};

const sphereVertexShader = `
  uniform sampler2D uTwigl;
  uniform sampler2D uField;
  uniform float uUvScale;
  uniform float uUvRotation;
  uniform float uUvSeamFeather;
  uniform float uUvSeamIrregularity;
  uniform float uMaterialDomain;
  uniform float uFieldContour;
  uniform float uFieldRidgeWidth;
  uniform vec3 uFieldStreakBaseColor;
  uniform vec3 uFieldStreakHotColor;
  uniform float uFieldStreakBrightness;
  uniform float uVolumeTime;
  uniform float uVolumeBasis;
  uniform float uVolumeTwiglInfluence;
  uniform float uVolumeTwiglScale;
  uniform float uVolumeSourceHeat;
  uniform float uVolumeSourceDensity;
  uniform float uVolumeSourceWarp;
  uniform float uVolumeSourceFlow;
  uniform float uVolumeDepthDecorrelation;
  uniform float uVolumeOctaves;
  uniform float uVolumeLacunarity;
  uniform float uVolumeGain;
  uniform float uVolumeCellularity;
  uniform float uVolumeGranuleBoundary;
  uniform float uVolumeSunspotScale;
  uniform float uVolumeSunspotStrength;
  uniform float uVolumeScale;
  uniform float uVolumeWarp;
  uniform float uVolumeFlow;
  uniform float uVolumeGranulation;
  uniform float uVolumeDetail;
  uniform float uVolumeFilament;
  uniform float uVolumeContrast;
  uniform float uVolumeBrightness;
  uniform vec3 uVolumeBodyColor;
  uniform vec3 uVolumeMidColor;
  uniform vec3 uVolumeHotColor;
  uniform float uDisplacement;

  varying vec3 vObjectPosition;
  varying vec3 vObjectNormal;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;

  ${triplanarFunctions}

  void main() {
    vec3 objectNormal = normalize(normal);
    vec3 direction = normalize(position);
    vec4 domainSample = sampleTwiglDomain(uTwigl, uField, direction, objectNormal, uUvScale, uUvRotation, uUvSeamFeather, uUvSeamIrregularity, uMaterialDomain, uFieldContour, uFieldRidgeWidth, uFieldStreakBaseColor, uFieldStreakHotColor, uFieldStreakBrightness);
    float energy = domainSample.a;
    float centeredEnergy = energy - 0.24;
    float displacementScale = mix(1.0, 0.14, step(2.5, uMaterialDomain));
    vec3 displaced = position + objectNormal * centeredEnergy * uDisplacement * displacementScale;
    vec4 worldPosition = modelMatrix * vec4(displaced, 1.0);
    vObjectPosition = normalize(displaced);
    vObjectNormal = objectNormal;
    vWorldPosition = worldPosition.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * objectNormal);
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const sphereFragmentShader = `
  precision highp float;

  uniform sampler2D uTwigl;
  uniform sampler2D uField;
  uniform float uUvScale;
  uniform float uUvRotation;
  uniform float uUvSeamFeather;
  uniform float uUvSeamIrregularity;
  uniform float uMaterialDomain;
  uniform float uFieldContour;
  uniform float uFieldRidgeWidth;
  uniform vec3 uFieldStreakBaseColor;
  uniform vec3 uFieldStreakHotColor;
  uniform float uFieldStreakBrightness;
  uniform float uFieldColorAuthority;
  uniform float uVolumeTime;
  uniform float uVolumeBasis;
  uniform float uVolumeTwiglInfluence;
  uniform float uVolumeTwiglScale;
  uniform float uVolumeSourceHeat;
  uniform float uVolumeSourceDensity;
  uniform float uVolumeSourceWarp;
  uniform float uVolumeSourceFlow;
  uniform float uVolumeDepthDecorrelation;
  uniform float uVolumeOctaves;
  uniform float uVolumeLacunarity;
  uniform float uVolumeGain;
  uniform float uVolumeCellularity;
  uniform float uVolumeGranuleBoundary;
  uniform float uVolumeSunspotScale;
  uniform float uVolumeSunspotStrength;
  uniform float uVolumeScale;
  uniform float uVolumeWarp;
  uniform float uVolumeFlow;
  uniform float uVolumeGranulation;
  uniform float uVolumeDetail;
  uniform float uVolumeFilament;
  uniform float uVolumeContrast;
  uniform float uVolumeDepth;
  uniform float uVolumeSteps;
  uniform float uVolumeDensity;
  uniform float uVolumeAbsorption;
  uniform float uVolumeBrightness;
  uniform float uVolumeEmission;
  uniform float uVolumeLimbGlow;
  uniform vec3 uVolumeBodyColor;
  uniform vec3 uVolumeMidColor;
  uniform vec3 uVolumeHotColor;
  uniform vec3 uObjectCameraPosition;
  uniform float uTextureMix;
  uniform float uSourceColorMix;
  uniform float uEmission;
  uniform float uRoughness;
  uniform float uOpacity;
  uniform float uAlphaInfluence;
  uniform float uFresnel;
  uniform float uSurfaceContrast;
  uniform vec3 uBaseColor;
  uniform vec3 uEdgeColor;
  uniform vec3 uAccentColor;

  varying vec3 vObjectPosition;
  varying vec3 vObjectNormal;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;

  ${triplanarFunctions}
  ${solarVolumeRaymarchFunctions}

  void main() {
    vec3 objectNormal = normalize(vObjectNormal);
    vec3 worldNormal = normalize(vWorldNormal);
    vec3 displacedNormal = normalize(cross(dFdx(vWorldPosition), dFdy(vWorldPosition)));
    if (dot(displacedNormal, worldNormal) < 0.0) displacedNormal *= -1.0;
    float displacedNormalMix = uMaterialDomain > 0.5 ? 0.92 : 0.0;
    worldNormal = normalize(mix(worldNormal, displacedNormal, displacedNormalMix));
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    vec4 domainSample = sampleTwiglDomain(uTwigl, uField, vObjectPosition, objectNormal, uUvScale, uUvRotation, uUvSeamFeather, uUvSeamIrregularity, uMaterialDomain, uFieldContour, uFieldRidgeWidth, uFieldStreakBaseColor, uFieldStreakHotColor, uFieldStreakBrightness);
    float solarMode = step(2.5, uMaterialDomain);
    if (solarMode > 0.5) {
      vec3 volumeRay = normalize(vObjectPosition - uObjectCameraPosition);
      domainSample = raymarchSolarVolume(vObjectPosition, volumeRay);
    }
    vec3 source = domainSample.rgb;
    float energy = domainSample.a;
    energy = clamp((energy - 0.18) * uSurfaceContrast + 0.18, 0.0, 1.0);

    vec3 authoredColor = mix(uEdgeColor * 0.62, uAccentColor, smoothstep(0.08, 0.8, energy));
    float colorAuthority = max(step(1.5, uMaterialDomain) * uFieldColorAuthority, solarMode);
    float colorMix = mix(uSourceColorMix, 1.0, colorAuthority);
    vec3 textureColor = mix(authoredColor, source * 1.3, colorMix);

    vec3 keyDirection = normalize(vec3(-0.42, 0.62, 0.58));
    vec3 halfDirection = normalize(keyDirection + viewDirection);
    float diffuse = max(dot(worldNormal, keyDirection), 0.0);
    float specularPower = mix(150.0, 7.0, uRoughness);
    float specular = pow(max(dot(worldNormal, halfDirection), 0.0), specularPower) * (1.0 - uRoughness * 0.78);
    float fresnel = pow(1.0 - max(dot(worldNormal, viewDirection), 0.0), 2.45);

    vec3 core = uBaseColor * (0.48 + diffuse * 0.62);
    vec3 surface = mix(core, textureColor * (0.18 + diffuse * 0.66), uTextureMix);
    vec3 emissive = textureColor * pow(energy, 1.2) * uEmission;
    vec3 edge = uEdgeColor * fresnel * uFresnel * (0.72 + energy * 0.56);
    vec3 color = surface + emissive + edge + uAccentColor * specular * 0.7;
    float alpha = uOpacity * mix(1.0, smoothstep(0.025, 0.48, energy + fresnel * 0.62), uAlphaInfluence);
    if (solarMode > 0.5) {
      float facing = max(dot(worldNormal, viewDirection), 0.0);
      float limbDarkening = 0.3 + 0.7 * pow(facing, 0.42);
      vec3 solarSurface = source * limbDarkening * (0.32 + energy * 0.68);
      vec3 solarEmission = source * uVolumeEmission * (0.28 + energy * 1.52);
      vec3 limbColor = mix(uVolumeMidColor, uVolumeHotColor, energy) * fresnel * uVolumeLimbGlow;
      color = solarSurface + solarEmission + limbColor;
      alpha = uOpacity;
    }
    gl_FragColor = vec4(max(color, 0.0), alpha);
  }
`;

const sphereMaterial = new THREE.ShaderMaterial({
  name: "TWIGL sphere surface",
  uniforms: sphereUniforms,
  vertexShader: sphereVertexShader,
  fragmentShader: sphereFragmentShader,
  transparent: true,
  depthWrite: true,
  depthTest: true,
  side: THREE.FrontSide,
});

const sphereMeshPresets = {
  balanced: { widthSegments: 192, heightSegments: 128 },
  detailed: { widthSegments: 384, heightSegments: 256 },
  ultra: { widthSegments: 512, heightSegments: 320 },
  extreme: { widthSegments: 768, heightSegments: 512 },
  showcase: { widthSegments: 1024, heightSegments: 640 },
};

function createSphereGeometry() {
  const detail = sphereMeshPresets[state.surfaceMesh] || sphereMeshPresets.detailed;
  return new THREE.SphereGeometry(1, detail.widthSegments, detail.heightSegments);
}

let sphereGeometry = createSphereGeometry();
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.renderOrder = 0;
scene.add(sphere);

function replaceSphereGeometry() {
  const previousGeometry = sphereGeometry;
  sphereGeometry = createSphereGeometry();
  sphere.geometry = sphereGeometry;
  previousGeometry.dispose();
}

const haloUniforms = {
  uEdgeColor: { value: new THREE.Color(state.edgeColor) },
  uAccentColor: { value: new THREE.Color(state.accentColor) },
  uIntensity: { value: state.haloIntensity },
};

const haloMaterial = new THREE.ShaderMaterial({
  name: "Atmospheric rim",
  uniforms: haloUniforms,
  vertexShader: `
    varying vec3 vWorldNormal;
    varying vec3 vWorldPosition;
    void main() {
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldNormal = normalize(mat3(modelMatrix) * normal);
      vWorldPosition = worldPosition.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
  `,
  fragmentShader: `
    precision highp float;
    uniform vec3 uEdgeColor;
    uniform vec3 uAccentColor;
    uniform float uIntensity;
    varying vec3 vWorldNormal;
    varying vec3 vWorldPosition;
    void main() {
      vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
      float fresnel = pow(1.0 - abs(dot(normalize(vWorldNormal), viewDirection)), 2.75);
      vec3 color = mix(uEdgeColor, uAccentColor, fresnel * 0.45) * fresnel * uIntensity;
      gl_FragColor = vec4(color, fresnel * 0.34 * uIntensity);
    }
  `,
  transparent: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
  side: THREE.BackSide,
});

const halo = new THREE.Mesh(new THREE.SphereGeometry(1, 128, 96), haloMaterial);
halo.renderOrder = 1;
scene.add(halo);

const MAX_PARTICLES = 180000;
const particleGeometry = new THREE.BufferGeometry();
const particlePositions = new Float32Array(MAX_PARTICLES * 3);
const particleSeeds = new Float32Array(MAX_PARTICLES);
const particleLayers = new Float32Array(MAX_PARTICLES);
const particlePhases = new Float32Array(MAX_PARTICLES);

let randomState = 0x6d2b79f5;
function random() {
  randomState += 0x6d2b79f5;
  let value = randomState;
  value = Math.imul(value ^ value >>> 15, value | 1);
  value ^= value + Math.imul(value ^ value >>> 7, value | 61);
  return ((value ^ value >>> 14) >>> 0) / 4294967296;
}

for (let index = 0; index < MAX_PARTICLES; index += 1) {
  const y = random() * 2 - 1;
  const azimuth = random() * Math.PI * 2;
  const radial = Math.sqrt(Math.max(0, 1 - y * y));
  const directionX = Math.cos(azimuth) * radial;
  const directionZ = Math.sin(azimuth) * radial;
  const layer = Math.pow(random(), 2.25);
  const radius = 1.015 + layer * 0.29 + (random() > 0.84 ? Math.pow(random(), 1.6) * 0.56 : 0);
  particlePositions[index * 3] = directionX * radius;
  particlePositions[index * 3 + 1] = y * radius;
  particlePositions[index * 3 + 2] = directionZ * radius;
  particleSeeds[index] = random();
  particleLayers[index] = layer;
  particlePhases[index] = random() * Math.PI * 2;
}

particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
particleGeometry.setAttribute("aSeed", new THREE.BufferAttribute(particleSeeds, 1));
particleGeometry.setAttribute("aLayer", new THREE.BufferAttribute(particleLayers, 1));
particleGeometry.setAttribute("aPhase", new THREE.BufferAttribute(particlePhases, 1));

const particleUniforms = {
  uTwigl: { value: twiglTarget.texture },
  uField: { value: fieldRead.texture },
  uTime: { value: 0 },
  uUvScale: { value: state.uvScale },
  uUvRotation: { value: THREE.MathUtils.degToRad(state.uvRotation) },
  uUvSeamFeather: { value: state.uvSeamFeather },
  uUvSeamIrregularity: { value: state.uvSeamIrregularity },
  uMaterialDomain: { value: materialDomainModes[state.materialDomain] },
  uFieldContour: { value: state.fieldContour },
  uFieldRidgeWidth: { value: state.fieldRidgeWidth },
  uFieldStreakBaseColor: { value: new THREE.Color(state.fieldStreakBaseColor) },
  uFieldStreakHotColor: { value: new THREE.Color(state.fieldStreakHotColor) },
  uFieldStreakBrightness: { value: state.fieldStreakBrightness },
  uFieldColorAuthority: { value: state.fieldColorAuthority },
  uVolumeTime: { value: 0 },
  uVolumeBasis: { value: volumeBasisModes[state.volumeBasis] ?? 2 },
  uVolumeTwiglInfluence: { value: state.volumeTwiglInfluence },
  uVolumeTwiglScale: { value: state.volumeTwiglScale },
  uVolumeSourceHeat: { value: state.volumeSourceHeat },
  uVolumeSourceDensity: { value: state.volumeSourceDensity },
  uVolumeSourceWarp: { value: state.volumeSourceWarp },
  uVolumeSourceFlow: { value: state.volumeSourceFlow },
  uVolumeDepthDecorrelation: { value: state.volumeDepthDecorrelation },
  uVolumeOctaves: { value: state.volumeOctaves },
  uVolumeLacunarity: { value: state.volumeLacunarity },
  uVolumeGain: { value: state.volumeGain },
  uVolumeCellularity: { value: state.volumeCellularity },
  uVolumeGranuleBoundary: { value: state.volumeGranuleBoundary },
  uVolumeSunspotScale: { value: state.volumeSunspotScale },
  uVolumeSunspotStrength: { value: state.volumeSunspotStrength },
  uVolumeScale: { value: state.volumeScale },
  uVolumeWarp: { value: state.volumeWarp },
  uVolumeFlow: { value: state.volumeFlow },
  uVolumeGranulation: { value: state.volumeGranulation },
  uVolumeDetail: { value: state.volumeDetail },
  uVolumeFilament: { value: state.volumeFilament },
  uVolumeContrast: { value: state.volumeContrast },
  uVolumeBrightness: { value: state.volumeBrightness },
  uVolumeBodyColor: { value: new THREE.Color(state.volumeBodyColor) },
  uVolumeMidColor: { value: new THREE.Color(state.volumeMidColor) },
  uVolumeHotColor: { value: new THREE.Color(state.volumeHotColor) },
  uDensity: { value: state.particleDensity },
  uPointSize: { value: state.particleSize },
  uOpacity: { value: state.particleOpacity },
  uMotion: { value: state.particleMotion },
  uPlumeSpread: { value: state.plumeSpread },
  uTextureResponse: { value: state.textureResponse },
  uSurfaceDisplacement: { value: state.displacement },
  uSurfaceClearance: { value: state.particleSurfaceClearance },
  uPixelRatio: { value: 1 },
  uParticleColor: { value: new THREE.Color(state.particleColor) },
  uParticleHotColor: { value: new THREE.Color(state.particleHotColor) },
};

const particleMaterial = new THREE.ShaderMaterial({
  name: "TWIGL-responsive plume particles",
  uniforms: particleUniforms,
  vertexShader: `
    precision highp float;

    uniform sampler2D uTwigl;
    uniform sampler2D uField;
    uniform float uTime;
    uniform float uUvScale;
    uniform float uUvRotation;
    uniform float uUvSeamFeather;
    uniform float uUvSeamIrregularity;
    uniform float uMaterialDomain;
    uniform float uFieldContour;
    uniform float uFieldRidgeWidth;
    uniform vec3 uFieldStreakBaseColor;
    uniform vec3 uFieldStreakHotColor;
    uniform float uFieldStreakBrightness;
    uniform float uFieldColorAuthority;
    uniform float uVolumeTime;
    uniform float uVolumeBasis;
    uniform float uVolumeTwiglInfluence;
    uniform float uVolumeTwiglScale;
    uniform float uVolumeSourceHeat;
    uniform float uVolumeSourceDensity;
    uniform float uVolumeSourceWarp;
    uniform float uVolumeSourceFlow;
    uniform float uVolumeDepthDecorrelation;
    uniform float uVolumeOctaves;
    uniform float uVolumeLacunarity;
    uniform float uVolumeGain;
    uniform float uVolumeCellularity;
    uniform float uVolumeGranuleBoundary;
    uniform float uVolumeSunspotScale;
    uniform float uVolumeSunspotStrength;
    uniform float uVolumeScale;
    uniform float uVolumeWarp;
    uniform float uVolumeFlow;
    uniform float uVolumeGranulation;
    uniform float uVolumeDetail;
    uniform float uVolumeFilament;
    uniform float uVolumeContrast;
    uniform float uVolumeBrightness;
    uniform vec3 uVolumeBodyColor;
    uniform vec3 uVolumeMidColor;
    uniform vec3 uVolumeHotColor;
    uniform float uDensity;
    uniform float uPointSize;
    uniform float uMotion;
    uniform float uPlumeSpread;
    uniform float uTextureResponse;
    uniform float uSurfaceDisplacement;
    uniform float uSurfaceClearance;
    uniform float uPixelRatio;
    uniform vec3 uParticleColor;
    uniform vec3 uParticleHotColor;

    attribute float aSeed;
    attribute float aLayer;
    attribute float aPhase;
    varying vec3 vColor;
    varying float vAlpha;

    ${triplanarFunctions}

    void main() {
      if (aSeed > uDensity) {
        gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
        gl_PointSize = 0.0;
        vColor = vec3(0.0);
        vAlpha = 0.0;
        return;
      }

      vec3 direction = normalize(position);
      vec4 domainSample = sampleTwiglDomain(uTwigl, uField, direction, direction, uUvScale, uUvRotation, uUvSeamFeather, uUvSeamIrregularity, uMaterialDomain, uFieldContour, uFieldRidgeWidth, uFieldStreakBaseColor, uFieldStreakHotColor, uFieldStreakBrightness);
      vec3 source = domainSample.rgb;
      float energy = clamp(domainSample.a, 0.0, 1.0);
      vec3 reference = abs(direction.y) > 0.92 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
      vec3 tangent = normalize(cross(direction, reference));
      vec3 bitangent = normalize(cross(direction, tangent));
      float time = uTime;
      float waveA = sin(aPhase + time * (0.42 + aSeed * 0.54) + direction.y * 7.0);
      float waveB = cos(aPhase * 1.73 - time * 0.31 + direction.x * 8.0);
      float textureLift = energy * uTextureResponse;
      float displacedSurfaceRadius = 1.0 + (energy - 0.24) * uSurfaceDisplacement;
      float surfaceLift = max(displacedSurfaceRadius + uSurfaceClearance - length(position), 0.0);
      float plume = surfaceLift + aLayer * aLayer * uPlumeSpread * (0.12 + 0.2 * waveA) + textureLift * 0.055;
      vec3 animated = position + direction * plume;
      animated += tangent * waveA * uMotion * (0.016 + aLayer * 0.085);
      animated += bitangent * waveB * uMotion * (0.012 + aLayer * 0.06);

      vec4 modelViewPosition = modelViewMatrix * vec4(animated, 1.0);
      float perspective = 1.0 / max(0.35, -modelViewPosition.z * 0.36);
      float responseSize = 1.0 + textureLift * 1.85 + aLayer * 0.42;
      gl_PointSize = uPointSize * uPixelRatio * perspective * responseSize * mix(0.55, 1.25, aSeed);
      gl_Position = projectionMatrix * modelViewPosition;

      vec3 authored = mix(uParticleColor, uParticleHotColor, smoothstep(0.08, 0.75, energy));
      float sourceAuthority = max(step(1.5, uMaterialDomain) * uFieldColorAuthority, step(2.5, uMaterialDomain));
      float sourceMix = mix(0.28, 1.0, sourceAuthority);
      vec3 responsiveSource = source * mix(1.55, 0.42, step(2.5, uMaterialDomain));
      vColor = mix(authored, responsiveSource, sourceMix) * (0.65 + textureLift * 1.35);
      vAlpha = mix(0.14, 0.95, 1.0 - aLayer) * mix(0.58, 1.0, textureLift);
    }
  `,
  fragmentShader: `
    precision highp float;
    uniform float uOpacity;
    varying vec3 vColor;
    varying float vAlpha;
    void main() {
      vec2 point = gl_PointCoord * 2.0 - 1.0;
      float radius = length(point);
      if (radius > 1.0) discard;
      float core = exp(-radius * radius * 8.5);
      float mist = pow(max(0.0, 1.0 - radius), 2.15);
      float alpha = (core * 0.58 + mist * 0.42) * vAlpha * uOpacity;
      vec3 color = vColor * (0.72 + core * 1.65);
      gl_FragColor = vec4(color, alpha);
    }
  `,
  transparent: true,
  depthWrite: false,
  depthTest: true,
  blending: THREE.AdditiveBlending,
  vertexColors: false,
});

const particles = new THREE.Points(particleGeometry, particleMaterial);
particles.frustumCulled = false;
particles.renderOrder = 2;
scene.add(particles);

const rootGroup = new THREE.Group();
scene.add(rootGroup);
rootGroup.add(sphere, halo, particles);

const qualityFractions = { low: 0.46, balanced: 0.68, high: 0.84, ultra: 1 };
let viewportWidth = 1;
let viewportHeight = 1;
let needsResize = true;
let framingScale = 1;

function replaceTwiglSource() {
  const previousMaterial = twiglMaterial;
  twiglMaterial = createTwiglMaterial();
  twiglQuad.material = twiglMaterial;
  previousMaterial.dispose();
  fieldNeedsReset = true;
}

function replaceTwiglTarget() {
  const size = Number(state.textureResolution);
  const previousTarget = twiglTarget;
  twiglTarget = createTwiglTarget(size);
  twiglUniforms.r.value.set(size, size);
  sphereUniforms.uTwigl.value = twiglTarget.texture;
  particleUniforms.uTwigl.value = twiglTarget.texture;
  fieldUniforms.uTwigl.value = twiglTarget.texture;
  previousTarget.dispose();
  fieldNeedsReset = true;
}

function syncState() {
  twiglUniforms.uTextureGain.value = state.textureGain;
  twiglUniforms.uTextureContrast.value = state.textureContrast;
  twiglUniforms.uDomainScale.value = state.sourceScale;
  twiglUniforms.uDomainRotation.value = THREE.MathUtils.degToRad(state.sourceRotation);
  twiglUniforms.uDomainOffset.value.set(state.sourceOffsetX, state.sourceOffsetY);
  twiglUniforms.uDomainSymmetry.value = state.sourceSymmetry;
  twiglUniforms.uDomainWarp.value = state.sourceWarp;
  twiglUniforms.uOctaves.value = state.sourceOctaves;
  twiglUniforms.uRaySteps.value = state.sourceRaySteps;
  twiglUniforms.uHueShift.value = state.sourceHue / 360;
  twiglUniforms.uSaturation.value = state.sourceSaturation;
  twiglUniforms.uTextureGamma.value = state.sourceGamma;
  twiglUniforms.uInvert.value = state.sourceInvert ? 1 : 0;
  fieldUniforms.uFeed.value = state.fieldFeed;
  fieldUniforms.uKill.value = state.fieldKill;
  fieldUniforms.uDiffusion.value = state.fieldDiffusion;
  fieldUniforms.uDiffusionRatio.value = state.fieldDiffusionRatio;
  fieldUniforms.uReaction.value = state.fieldReaction;
  fieldUniforms.uTimeStep.value = state.fieldTimeStep;
  fieldUniforms.uForcing.value = state.fieldForcing;
  fieldUniforms.uSourceInjection.value = state.fieldSourceInjection;
  fieldUniforms.uSourceSeed.value = state.fieldSourceSeed;
  fieldUniforms.uSourceThreshold.value = state.fieldSourceThreshold;
  fieldUniforms.uFlow.value = state.fieldFlow;
  fieldUniforms.uFlowScale.value = state.fieldFlowScale;
  fieldUniforms.uFlowWarp.value = state.fieldFlowWarp;
  fieldUniforms.uMemory.value = state.fieldMemory;
  fieldUniforms.uSeedSize.value = state.fieldSeedSize;
  sphereUniforms.uUvScale.value = state.uvScale;
  sphereUniforms.uUvRotation.value = THREE.MathUtils.degToRad(state.uvRotation);
  sphereUniforms.uUvSeamFeather.value = state.uvSeamFeather;
  sphereUniforms.uUvSeamIrregularity.value = state.uvSeamIrregularity;
  sphereUniforms.uMaterialDomain.value = materialDomainModes[state.materialDomain] ?? 0;
  sphereUniforms.uFieldContour.value = state.fieldContour;
  sphereUniforms.uFieldRidgeWidth.value = state.fieldRidgeWidth;
  sphereUniforms.uFieldStreakBaseColor.value.set(state.fieldStreakBaseColor);
  sphereUniforms.uFieldStreakHotColor.value.set(state.fieldStreakHotColor);
  sphereUniforms.uFieldStreakBrightness.value = state.fieldStreakBrightness;
  sphereUniforms.uFieldColorAuthority.value = state.fieldColorAuthority;
  sphereUniforms.uVolumeBasis.value = volumeBasisModes[state.volumeBasis] ?? 2;
  sphereUniforms.uVolumeTwiglInfluence.value = state.volumeTwiglInfluence;
  sphereUniforms.uVolumeTwiglScale.value = state.volumeTwiglScale;
  sphereUniforms.uVolumeSourceHeat.value = state.volumeSourceHeat;
  sphereUniforms.uVolumeSourceDensity.value = state.volumeSourceDensity;
  sphereUniforms.uVolumeSourceWarp.value = state.volumeSourceWarp;
  sphereUniforms.uVolumeSourceFlow.value = state.volumeSourceFlow;
  sphereUniforms.uVolumeDepthDecorrelation.value = state.volumeDepthDecorrelation;
  sphereUniforms.uVolumeOctaves.value = state.volumeOctaves;
  sphereUniforms.uVolumeLacunarity.value = state.volumeLacunarity;
  sphereUniforms.uVolumeGain.value = state.volumeGain;
  sphereUniforms.uVolumeCellularity.value = state.volumeCellularity;
  sphereUniforms.uVolumeGranuleBoundary.value = state.volumeGranuleBoundary;
  sphereUniforms.uVolumeSunspotScale.value = state.volumeSunspotScale;
  sphereUniforms.uVolumeSunspotStrength.value = state.volumeSunspotStrength;
  sphereUniforms.uVolumeScale.value = state.volumeScale;
  sphereUniforms.uVolumeWarp.value = state.volumeWarp;
  sphereUniforms.uVolumeFlow.value = state.volumeFlow;
  sphereUniforms.uVolumeGranulation.value = state.volumeGranulation;
  sphereUniforms.uVolumeDetail.value = state.volumeDetail;
  sphereUniforms.uVolumeFilament.value = state.volumeFilament;
  sphereUniforms.uVolumeContrast.value = state.volumeContrast;
  sphereUniforms.uVolumeDepth.value = state.volumeDepth;
  sphereUniforms.uVolumeSteps.value = state.volumeSteps;
  sphereUniforms.uVolumeDensity.value = state.volumeDensity;
  sphereUniforms.uVolumeAbsorption.value = state.volumeAbsorption;
  sphereUniforms.uVolumeBrightness.value = state.volumeBrightness;
  sphereUniforms.uVolumeEmission.value = state.volumeEmission;
  sphereUniforms.uVolumeLimbGlow.value = state.volumeLimbGlow;
  sphereUniforms.uVolumeBodyColor.value.set(state.volumeBodyColor);
  sphereUniforms.uVolumeMidColor.value.set(state.volumeMidColor);
  sphereUniforms.uVolumeHotColor.value.set(state.volumeHotColor);
  sphereUniforms.uDisplacement.value = state.displacement;
  sphereUniforms.uTextureMix.value = state.textureMix;
  sphereUniforms.uSourceColorMix.value = state.sourceColorMix;
  sphereUniforms.uEmission.value = state.emission;
  sphereUniforms.uRoughness.value = state.roughness;
  sphereUniforms.uOpacity.value = state.opacity;
  sphereUniforms.uAlphaInfluence.value = state.alphaInfluence;
  sphereUniforms.uFresnel.value = state.fresnel;
  sphereUniforms.uSurfaceContrast.value = state.surfaceContrast;
  sphereUniforms.uBaseColor.value.set(state.baseColor);
  sphereUniforms.uEdgeColor.value.set(state.edgeColor);
  sphereUniforms.uAccentColor.value.set(state.accentColor);
  haloUniforms.uEdgeColor.value.set(state.materialDomain === "solarVolume" ? state.volumeMidColor : state.edgeColor);
  haloUniforms.uAccentColor.value.set(state.materialDomain === "solarVolume" ? state.volumeHotColor : state.accentColor);
  haloUniforms.uIntensity.value = state.haloIntensity * (state.materialDomain === "solarVolume" ? 0.42 : 1);
  halo.visible = state.haloEnabled;
  particleUniforms.uUvScale.value = state.uvScale;
  particleUniforms.uUvRotation.value = THREE.MathUtils.degToRad(state.uvRotation);
  particleUniforms.uUvSeamFeather.value = state.uvSeamFeather;
  particleUniforms.uUvSeamIrregularity.value = state.uvSeamIrregularity;
  particleUniforms.uMaterialDomain.value = materialDomainModes[state.materialDomain] ?? 0;
  particleUniforms.uFieldContour.value = state.fieldContour;
  particleUniforms.uFieldRidgeWidth.value = state.fieldRidgeWidth;
  particleUniforms.uFieldStreakBaseColor.value.set(state.fieldStreakBaseColor);
  particleUniforms.uFieldStreakHotColor.value.set(state.fieldStreakHotColor);
  particleUniforms.uFieldStreakBrightness.value = state.fieldStreakBrightness;
  particleUniforms.uFieldColorAuthority.value = state.fieldColorAuthority;
  particleUniforms.uVolumeBasis.value = volumeBasisModes[state.volumeBasis] ?? 2;
  particleUniforms.uVolumeTwiglInfluence.value = state.volumeTwiglInfluence;
  particleUniforms.uVolumeTwiglScale.value = state.volumeTwiglScale;
  particleUniforms.uVolumeSourceHeat.value = state.volumeSourceHeat;
  particleUniforms.uVolumeSourceDensity.value = state.volumeSourceDensity;
  particleUniforms.uVolumeSourceWarp.value = state.volumeSourceWarp;
  particleUniforms.uVolumeSourceFlow.value = state.volumeSourceFlow;
  particleUniforms.uVolumeDepthDecorrelation.value = state.volumeDepthDecorrelation;
  particleUniforms.uVolumeOctaves.value = state.volumeOctaves;
  particleUniforms.uVolumeLacunarity.value = state.volumeLacunarity;
  particleUniforms.uVolumeGain.value = state.volumeGain;
  particleUniforms.uVolumeCellularity.value = state.volumeCellularity;
  particleUniforms.uVolumeGranuleBoundary.value = state.volumeGranuleBoundary;
  particleUniforms.uVolumeSunspotScale.value = state.volumeSunspotScale;
  particleUniforms.uVolumeSunspotStrength.value = state.volumeSunspotStrength;
  particleUniforms.uVolumeScale.value = state.volumeScale;
  particleUniforms.uVolumeWarp.value = state.volumeWarp;
  particleUniforms.uVolumeFlow.value = state.volumeFlow;
  particleUniforms.uVolumeGranulation.value = state.volumeGranulation;
  particleUniforms.uVolumeDetail.value = state.volumeDetail;
  particleUniforms.uVolumeFilament.value = state.volumeFilament;
  particleUniforms.uVolumeContrast.value = state.volumeContrast;
  particleUniforms.uVolumeBrightness.value = state.volumeBrightness;
  particleUniforms.uVolumeBodyColor.value.set(state.volumeBodyColor);
  particleUniforms.uVolumeMidColor.value.set(state.volumeMidColor);
  particleUniforms.uVolumeHotColor.value.set(state.volumeHotColor);
  particleUniforms.uDensity.value = state.particleDensity;
  particleUniforms.uPointSize.value = state.particleSize;
  particleUniforms.uOpacity.value = state.particleOpacity;
  particleUniforms.uMotion.value = state.particleMotion;
  particleUniforms.uPlumeSpread.value = state.plumeSpread;
  particleUniforms.uTextureResponse.value = state.textureResponse;
  particleUniforms.uSurfaceDisplacement.value = state.displacement;
  particleUniforms.uSurfaceClearance.value = state.particleSurfaceClearance;
  particleUniforms.uParticleColor.value.set(state.particleColor);
  particleUniforms.uParticleHotColor.value.set(state.particleHotColor);
  rootGroup.scale.setScalar(state.sphereScale);
  rootGroup.position.y = state.sphereY;
  halo.scale.setScalar(state.haloSize);
  camera.fov = state.cameraFov + (framingScale - 1) * 18;
  camera.updateProjectionMatrix();
  controls.target.y = state.sphereY;
  bloomPass.strength = state.bloomStrength;
  bloomPass.radius = state.bloomRadius;
  bloomPass.threshold = state.bloomThreshold;
  renderer.toneMappingExposure = state.exposure;
  particleGeometry.setDrawRange(0, Math.floor(MAX_PARTICLES * qualityFractions[state.quality]));
}

function applyCameraDistance() {
  const direction = camera.position.clone().sub(controls.target).normalize();
  camera.position.copy(controls.target).addScaledVector(direction, state.cameraDistance * framingScale);
  controls.update();
}

function resize() {
  const width = Math.max(1, window.innerWidth);
  const height = Math.max(1, window.innerHeight);
  const pixelRatio = Math.min(window.devicePixelRatio || 1, state.dpr);
  if (!needsResize && width === viewportWidth && height === viewportHeight && renderer.getPixelRatio() === pixelRatio) return;
  viewportWidth = width;
  viewportHeight = height;
  const aspect = width / height;
  const nextFramingScale = aspect < 0.78 ? 1 + (0.78 - aspect) * 1.65 : 1;
  if (Math.abs(nextFramingScale - framingScale) > 0.001) {
    const direction = camera.position.clone().sub(controls.target).normalize();
    const currentDistance = camera.position.distanceTo(controls.target);
    camera.position.copy(controls.target).addScaledVector(direction, currentDistance * nextFramingScale / framingScale);
    framingScale = nextFramingScale;
  }
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(width, height, false);
  composer.setPixelRatio(pixelRatio);
  composer.setSize(width, height);
  particleUniforms.uPixelRatio.value = pixelRatio;
  camera.aspect = aspect;
  camera.fov = state.cameraFov + (framingScale - 1) * 18;
  camera.updateProjectionMatrix();
  needsResize = false;
}

const panel = new window.SHPanel(document.querySelector("#controls"));
const panelControllers = [];
const scenePresetState = { scenePreset: "authored-default" };
let scenePresetControl = null;
let applyingScenePreset = false;

function bind(control, handler = syncState) {
  panelControllers.push(control);
  control.on("change", event => {
    handler(event);
    if (!applyingScenePreset && scenePresetControl) {
      scenePresetControl.setValue("custom");
    }
  });
  return control;
}

function applySceneSettings(settings, presetId) {
  applyingScenePreset = true;
  Object.assign(state, defaults, settings);
  panelControllers.forEach(control => control.setValue(state[control.property]));
  replaceTwiglSource();
  replaceTwiglTarget();
  replaceFieldTargets();
  replaceSphereGeometry();
  camera.position.set(0.08, state.sphereY + 0.03, state.cameraDistance * framingScale);
  controls.target.set(0, state.sphereY, 0);
  elapsedTime = 0;
  pauseButton.input.textContent = state.paused ? "Resume animation" : "Pause animation";
  needsResize = true;
  updatePanelContext();
  syncState();
  controls.update();
  scenePresetControl.setValue(presetId);
  applyingScenePreset = false;
}

const scenePresetFolder = panel.folder("Scene presets", { expanded: true });
scenePresetControl = scenePresetFolder.select(scenePresetState, "scenePreset", {
  label: "Composition preset",
  options: [
    ...SCENE_PRESETS.map(preset => ({ label: preset.label, value: preset.id })),
    { label: "Authored default", value: "authored-default" },
    { label: "Custom", value: "custom" },
  ],
});
scenePresetControl.on("change", ({ value }) => {
  if (value === "custom") return;
  if (value === "authored-default") {
    applySceneSettings(defaults, value);
    return;
  }
  const preset = SCENE_PRESETS.find(entry => entry.id === value);
  if (preset) applySceneSettings(preset.settings, value);
});

const domainFolder = panel.folder("Material path", { expanded: true });
bind(domainFolder.select(state, "materialDomain", {
  label: "Active domain",
  options: [
    { label: "Organic projections", value: "organic" },
    { label: "Blended octahedral charts", value: "octahedral" },
    { label: "Spherical field simulation", value: "sphericalField" },
    { label: "Volumetric solar field", value: "solarVolume" },
  ],
}), ({ value }) => {
  if (value === "sphericalField") resetSphericalField();
  updatePanelContext();
  syncState();
});

const timingFolder = panel.folder("Animation / timing", { expanded: false });
bind(timingFolder.slider(state, "timeSpeed", { min: 0, max: 1.6, step: 0.01, label: "Time speed" }));
bind(timingFolder.slider(state, "phase", { min: -12, max: 12, step: 0.01, label: "Time phase" }));

const twiglFolder = panel.folder("TWIGL source", { expanded: true });
bind(twiglFolder.select(state, "twiglPreset", {
  label: "Preset / source",
  options: TWIGL_PRESETS.map(preset => ({ label: preset.label, value: preset.id })),
}), () => {
  replaceTwiglSource();
  syncState();
});
bind(twiglFolder.select(state, "textureResolution", {
  label: "Texture resolution",
  options: [
    { label: "256 × 256", value: "256" },
    { label: "512 × 512", value: "512" },
    { label: "768 × 768", value: "768" },
    { label: "1024 × 1024", value: "1024" },
  ],
}), replaceTwiglTarget);
bind(twiglFolder.slider(state, "textureGain", { min: 0.4, max: 4, step: 0.01, label: "Texture gain" }));
bind(twiglFolder.slider(state, "textureContrast", { min: 0, max: 2.6, step: 0.01, label: "Texture contrast" }));
const projectedMappingControls = [
  bind(twiglFolder.slider(state, "uvScale", { min: 0.25, max: 4.5, step: 0.01, label: "Mapping scale" })),
  bind(twiglFolder.slider(state, "uvRotation", { min: -180, max: 180, step: 1, label: "Mapping rotation" })),
  bind(twiglFolder.slider(state, "uvSeamFeather", { min: 0, max: 0.3, step: 0.005, label: "Chart seam feather" })),
  bind(twiglFolder.slider(state, "uvSeamIrregularity", { min: 0, max: 1, step: 0.01, label: "Chart irregularity" })),
];

const sourceDomainFolder = panel.folder("Source domain / equation", { expanded: true });
bind(sourceDomainFolder.slider(state, "sourceOctaves", { min: 1, max: 32, step: 1, label: "Detail octaves" }));
bind(sourceDomainFolder.slider(state, "sourceRaySteps", { min: 8, max: 160, step: 1, label: "Primary ray steps" }));
bind(sourceDomainFolder.slider(state, "sourceSymmetry", { min: 1, max: 16, step: 1, label: "Angular symmetry" }));
bind(sourceDomainFolder.slider(state, "sourceScale", { min: 0.2, max: 4, step: 0.01, label: "Source scale" }));
bind(sourceDomainFolder.slider(state, "sourceRotation", { min: -180, max: 180, step: 1, label: "Source rotation" }));
bind(sourceDomainFolder.slider(state, "sourceOffsetX", { min: -1.5, max: 1.5, step: 0.01, label: "Source offset X" }));
bind(sourceDomainFolder.slider(state, "sourceOffsetY", { min: -1.5, max: 1.5, step: 0.01, label: "Source offset Y" }));
bind(sourceDomainFolder.slider(state, "sourceWarp", { min: 0, max: 2.5, step: 0.01, label: "Domain warp" }));
bind(sourceDomainFolder.slider(state, "sourceHue", { min: -180, max: 180, step: 1, label: "Hue shift" }));
bind(sourceDomainFolder.slider(state, "sourceSaturation", { min: 0, max: 2.5, step: 0.01, label: "Saturation" }));
bind(sourceDomainFolder.slider(state, "sourceGamma", { min: 0.3, max: 2.6, step: 0.01, label: "Texture gamma" }));
bind(sourceDomainFolder.toggle(state, "sourceInvert", { label: "Invert source" }));
const sourceDomainKeys = new Set([
  "sourceOctaves", "sourceRaySteps", "sourceSymmetry", "sourceScale", "sourceRotation",
  "sourceOffsetX", "sourceOffsetY", "sourceWarp", "sourceHue", "sourceSaturation",
  "sourceGamma", "sourceInvert",
]);
sourceDomainFolder.button("Reset source domain", () => {
  sourceDomainKeys.forEach(key => { state[key] = defaults[key]; });
  panelControllers.filter(control => sourceDomainKeys.has(control.property)).forEach(control => control.setValue(state[control.property]));
  syncState();
});

const surfaceFolder = panel.folder("Sphere material", { expanded: true });
const projectedSurfaceControls = [
  bind(surfaceFolder.slider(state, "textureMix", { min: 0, max: 1, step: 0.01, label: "Field color mix" })),
  bind(surfaceFolder.slider(state, "sourceColorMix", { min: 0, max: 1, step: 0.01, label: "Source color" })),
  bind(surfaceFolder.slider(state, "emission", { min: 0, max: 3.5, step: 0.01, label: "Surface emission" })),
];
bind(surfaceFolder.slider(state, "displacement", { min: 0, max: 0.6, step: 0.001, label: "Displacement" }));
bind(surfaceFolder.select(state, "surfaceMesh", {
  label: "Displacement mesh",
  options: [
    { label: "Balanced / 25k vertices", value: "balanced" },
    { label: "Detailed / 99k vertices", value: "detailed" },
    { label: "Ultra / 165k vertices", value: "ultra" },
    { label: "Extreme / 395k vertices", value: "extreme" },
    { label: "4090 Showcase / 657k vertices", value: "showcase" },
  ],
}), replaceSphereGeometry);
bind(surfaceFolder.slider(state, "surfaceContrast", { min: 0.4, max: 2.8, step: 0.01, label: "Surface contrast" }));
projectedSurfaceControls.push(bind(surfaceFolder.slider(state, "roughness", { min: 0.02, max: 1, step: 0.01 })));
bind(surfaceFolder.slider(state, "opacity", { min: 0.35, max: 1, step: 0.01 }));
projectedSurfaceControls.push(
  bind(surfaceFolder.slider(state, "alphaInfluence", { min: 0, max: 0.85, step: 0.01, label: "Texture alpha" })),
  bind(surfaceFolder.slider(state, "fresnel", { min: 0, max: 2.8, step: 0.01, label: "Edge fresnel" })),
);

const fieldReactionFolder = panel.folder("Spherical field / reaction", { expanded: true });
bind(fieldReactionFolder.select(state, "fieldResolution", {
  label: "Field resolution",
  options: [
    { label: "256 × 128", value: "256" },
    { label: "512 × 256", value: "512" },
    { label: "768 × 384", value: "768" },
    { label: "1024 × 512", value: "1024" },
    { label: "2048 × 1024 / 4090", value: "2048" },
  ],
}), replaceFieldTargets);
bind(fieldReactionFolder.slider(state, "fieldSteps", { min: 1, max: 6, step: 1, label: "Steps / frame" }));
bind(fieldReactionFolder.slider(state, "fieldFeed", { min: 0.003, max: 0.1, step: 0.001, label: "Growth feed" }));
bind(fieldReactionFolder.slider(state, "fieldKill", { min: 0.02, max: 0.095, step: 0.001, label: "Dissipation" }));
bind(fieldReactionFolder.slider(state, "fieldReaction", { min: 0.25, max: 2.5, step: 0.01, label: "Reaction strength" }));
bind(fieldReactionFolder.slider(state, "fieldDiffusion", { min: 0.1, max: 1.5, step: 0.01, label: "Chemical A diffusion" }));
bind(fieldReactionFolder.slider(state, "fieldDiffusionRatio", { min: 0.08, max: 1, step: 0.01, label: "Chemical B diffusion" }));
bind(fieldReactionFolder.slider(state, "fieldTimeStep", { min: 0.15, max: 1.35, step: 0.01, label: "Simulation timestep" }));
bind(fieldReactionFolder.slider(state, "fieldSeedSize", { min: 0.04, max: 0.95, step: 0.01, label: "Seed radius" }), () => {
  resetSphericalField();
  syncState();
});
fieldReactionFolder.button("Reseed spherical field", resetSphericalField);

const fieldSourceFolder = panel.folder("Spherical field / TWIGL + flow", { expanded: false });
bind(fieldSourceFolder.slider(state, "fieldForcing", { min: 0, max: 2.5, step: 0.01, label: "TWIGL morphogen" }));
bind(fieldSourceFolder.slider(state, "fieldSourceInjection", { min: 0, max: 0.8, step: 0.005, label: "TWIGL injection" }));
bind(fieldSourceFolder.slider(state, "fieldSourceSeed", { min: 0, max: 1, step: 0.01, label: "TWIGL seed amount" }), () => {
  resetSphericalField();
  syncState();
});
bind(fieldSourceFolder.slider(state, "fieldSourceThreshold", { min: 0.05, max: 0.75, step: 0.01, label: "Source gate" }));
bind(fieldSourceFolder.slider(state, "fieldFlow", { min: 0, max: 3, step: 0.01, label: "Tangent advection" }));
bind(fieldSourceFolder.slider(state, "fieldFlowScale", { min: 0.2, max: 4, step: 0.01, label: "Flow curl scale" }));
bind(fieldSourceFolder.slider(state, "fieldFlowWarp", { min: 0, max: 1.2, step: 0.01, label: "Flow axis warp" }));
bind(fieldSourceFolder.slider(state, "fieldMemory", { min: 0, max: 1, step: 0.01, label: "Source color memory" }));
fieldSourceFolder.button("Reseed from current TWIGL", resetSphericalField);

const fieldShapeFolder = panel.folder("Spherical field / shaping", { expanded: false });
bind(fieldShapeFolder.slider(state, "fieldContour", { min: 0.02, max: 0.75, step: 0.005, label: "Contour level" }));
bind(fieldShapeFolder.slider(state, "fieldRidgeWidth", { min: 0.01, max: 0.35, step: 0.005, label: "Ridge width" }));
bind(fieldShapeFolder.color(state, "fieldStreakBaseColor", { label: "Streak body" }));
bind(fieldShapeFolder.color(state, "fieldStreakHotColor", { label: "Streak core" }));
bind(fieldShapeFolder.slider(state, "fieldStreakBrightness", { min: 0, max: 4, step: 0.01, label: "Streak brightness" }));
bind(fieldShapeFolder.slider(state, "fieldColorAuthority", { min: 0, max: 1, step: 0.01, label: "Color authority" }));

const volumeFolder = panel.folder("Volumetric solar field", { expanded: true });
bind(volumeFolder.select(state, "volumeBasis", {
  label: "Volume basis",
  options: [
    { label: "Gyroid filaments / current", value: "gyroid" },
    { label: "Cellular FBM photosphere", value: "cellular" },
    { label: "TWIGL-driven plasma", value: "twiglPlasma" },
  ],
}), () => {
  updatePanelContext();
  syncState();
});
bind(volumeFolder.slider(state, "volumeScale", { min: 0.5, max: 10, step: 0.01, label: "Convection scale" }));
bind(volumeFolder.slider(state, "volumeWarp", { min: 0, max: 3.5, step: 0.01, label: "Domain turbulence" }));
bind(volumeFolder.slider(state, "volumeFlow", { min: 0, max: 2.5, step: 0.01, label: "Plasma flow" }));
bind(volumeFolder.slider(state, "volumeGranulation", { min: 0.8, max: 8, step: 0.01, label: "Granulation scale" }));
bind(volumeFolder.slider(state, "volumeDetail", { min: 0.5, max: 6, step: 0.01, label: "Micro detail" }));
bind(volumeFolder.slider(state, "volumeFilament", { min: 0, max: 1, step: 0.01, label: "Filament sharpness" }));
bind(volumeFolder.slider(state, "volumeContrast", { min: 0.4, max: 4, step: 0.01, label: "Plasma contrast" }));
bind(volumeFolder.slider(state, "volumeDepth", { min: 0.04, max: 1.2, step: 0.01, label: "Ray depth" }));
bind(volumeFolder.slider(state, "volumeSteps", { min: 6, max: 40, step: 1, label: "Raymarch steps" }));
bind(volumeFolder.slider(state, "volumeDensity", { min: 0.1, max: 3.5, step: 0.01, label: "Plasma density" }));
bind(volumeFolder.slider(state, "volumeAbsorption", { min: 0, max: 6, step: 0.01, label: "Depth absorption" }));
bind(volumeFolder.slider(state, "volumeBrightness", { min: 0, max: 5, step: 0.01, label: "Photosphere brightness" }));
bind(volumeFolder.slider(state, "volumeEmission", { min: 0, max: 4, step: 0.01, label: "Plasma emission" }));
bind(volumeFolder.slider(state, "volumeLimbGlow", { min: 0, max: 4, step: 0.01, label: "Limb glow" }));
bind(volumeFolder.color(state, "volumeBodyColor", { label: "Sunspot color" }));
bind(volumeFolder.color(state, "volumeMidColor", { label: "Plasma body" }));
bind(volumeFolder.color(state, "volumeHotColor", { label: "Granule core" }));

const volumeSourceFolder = panel.folder("Solar volume / TWIGL driver", { expanded: false });
bind(volumeSourceFolder.slider(state, "volumeTwiglInfluence", { min: 0, max: 1.5, step: 0.01, label: "Source influence" }));
bind(volumeSourceFolder.slider(state, "volumeTwiglScale", { min: 0.15, max: 5, step: 0.01, label: "Source scale" }));
bind(volumeSourceFolder.slider(state, "volumeSourceHeat", { min: 0, max: 2, step: 0.01, label: "Heat influence" }));
bind(volumeSourceFolder.slider(state, "volumeSourceDensity", { min: 0, max: 1, step: 0.01, label: "Density influence" }));
bind(volumeSourceFolder.slider(state, "volumeSourceWarp", { min: 0, max: 3, step: 0.01, label: "Domain warp" }));
bind(volumeSourceFolder.slider(state, "volumeSourceFlow", { min: 0, max: 2, step: 0.01, label: "Source flow" }));
bind(volumeSourceFolder.slider(state, "volumeDepthDecorrelation", { min: 0, max: 2, step: 0.01, label: "Depth decorrelation" }));

const volumeTextureFolder = panel.folder("Solar volume / organic structure", { expanded: false });
bind(volumeTextureFolder.slider(state, "volumeOctaves", { min: 1, max: 5, step: 1, label: "FBM octaves" }));
bind(volumeTextureFolder.slider(state, "volumeLacunarity", { min: 1.2, max: 3.5, step: 0.01, label: "Octave spacing" }));
bind(volumeTextureFolder.slider(state, "volumeGain", { min: 0.15, max: 0.85, step: 0.01, label: "Octave persistence" }));
bind(volumeTextureFolder.slider(state, "volumeCellularity", { min: 0, max: 1, step: 0.01, label: "Cellular character" }));
bind(volumeTextureFolder.slider(state, "volumeGranuleBoundary", { min: 0.03, max: 0.6, step: 0.005, label: "Granule boundary" }));
bind(volumeTextureFolder.slider(state, "volumeSunspotScale", { min: 0.1, max: 3, step: 0.01, label: "Sunspot scale" }));
bind(volumeTextureFolder.slider(state, "volumeSunspotStrength", { min: 0, max: 1.5, step: 0.01, label: "Sunspot strength" }));

const volumeKeys = new Set([
  "volumeBasis", "volumeTwiglInfluence", "volumeTwiglScale", "volumeSourceHeat",
  "volumeSourceDensity", "volumeSourceWarp", "volumeSourceFlow", "volumeDepthDecorrelation",
  "volumeOctaves", "volumeLacunarity", "volumeGain", "volumeCellularity",
  "volumeGranuleBoundary", "volumeSunspotScale", "volumeSunspotStrength",
  "volumeScale", "volumeWarp", "volumeFlow", "volumeGranulation", "volumeDetail",
  "volumeFilament", "volumeContrast", "volumeDepth", "volumeSteps", "volumeDensity",
  "volumeAbsorption", "volumeBrightness", "volumeEmission", "volumeLimbGlow",
  "volumeBodyColor", "volumeMidColor", "volumeHotColor",
]);
volumeFolder.button("Reset solar volume", () => {
  volumeKeys.forEach(key => { state[key] = defaults[key]; });
  panelControllers.filter(control => volumeKeys.has(control.property)).forEach(control => control.setValue(state[control.property]));
  syncState();
});

const paletteFolder = panel.folder("Palette", { expanded: false });
const projectedPaletteControls = [
  bind(paletteFolder.color(state, "baseColor", { label: "Silhouette" })),
  bind(paletteFolder.color(state, "edgeColor", { label: "Violet edge" })),
  bind(paletteFolder.color(state, "accentColor", { label: "Field accent" })),
];
bind(paletteFolder.color(state, "particleColor", { label: "Particle base" }));
bind(paletteFolder.color(state, "particleHotColor", { label: "Particle hot" }));

const plumeFolder = panel.folder("Particle plume", { expanded: true });
bind(plumeFolder.slider(state, "particleDensity", { min: 0.04, max: 1, step: 0.01, label: "Density" }));
bind(plumeFolder.slider(state, "particleSize", { min: 0.3, max: 4.2, step: 0.01, label: "Point size" }));
bind(plumeFolder.slider(state, "particleOpacity", { min: 0.04, max: 1.2, step: 0.01, label: "Particle glow" }));
bind(plumeFolder.slider(state, "particleMotion", { min: 0, max: 1.8, step: 0.01, label: "Motion" }));
bind(plumeFolder.slider(state, "plumeSpread", { min: 0, max: 1.8, step: 0.01, label: "Radial plume" }));
bind(plumeFolder.slider(state, "textureResponse", { min: 0, max: 2.4, step: 0.01, label: "Field response" }));
bind(plumeFolder.slider(state, "particleSurfaceClearance", { min: 0, max: 0.08, step: 0.001, label: "Surface clearance" }));
bind(plumeFolder.toggle(state, "haloEnabled", { label: "Halo" }), () => {
  updatePanelContext();
  syncState();
});
const haloControls = [
  bind(plumeFolder.slider(state, "haloIntensity", { min: 0, max: 2, step: 0.01, label: "Atmosphere" })),
  bind(plumeFolder.slider(state, "haloSize", { min: 1.005, max: 1.18, step: 0.001, label: "Halo radius" })),
];

const cameraFolder = panel.folder("Camera / framing", { expanded: false });
bind(cameraFolder.slider(state, "sphereScale", { min: 0.62, max: 1.38, step: 0.01, label: "Sphere scale" }));
bind(cameraFolder.slider(state, "sphereY", { min: -0.7, max: 0.7, step: 0.01, label: "Vertical frame" }));
bind(cameraFolder.slider(state, "cameraDistance", { min: 2.8, max: 7.8, step: 0.01, label: "Camera distance" }), () => {
  applyCameraDistance();
  syncState();
});
bind(cameraFolder.slider(state, "cameraFov", { min: 25, max: 68, step: 1, label: "Field of view" }));
bind(cameraFolder.toggle(state, "autoRotate", { label: "Auto orbit" }), () => {
  updatePanelContext();
  syncState();
});
const rotateSpeedControl = bind(cameraFolder.slider(state, "rotateSpeed", { min: -1.2, max: 1.2, step: 0.01, label: "Orbit speed" }));
cameraFolder.button("Recenter camera", () => {
  controls.target.set(0, state.sphereY, 0);
  camera.position.set(0.08, state.sphereY + 0.03, state.cameraDistance * framingScale);
  controls.update();
});

const outputFolder = panel.folder("Bloom / output", { expanded: false });
bind(outputFolder.slider(state, "bloomStrength", { min: 0, max: 2.8, step: 0.01, label: "Bloom" }), () => {
  updatePanelContext();
  syncState();
});
const bloomDetailControls = [
  bind(outputFolder.slider(state, "bloomRadius", { min: 0, max: 1, step: 0.01, label: "Bloom radius" })),
  bind(outputFolder.slider(state, "bloomThreshold", { min: 0, max: 1, step: 0.01, label: "Bloom threshold" })),
];
bind(outputFolder.slider(state, "exposure", { min: 0.3, max: 2, step: 0.01 }));
bind(outputFolder.select(state, "quality", {
  options: [
    { label: "Low / 83k particles", value: "low" },
    { label: "Balanced / 122k", value: "balanced" },
    { label: "High / 151k", value: "high" },
    { label: "Ultra / 180k", value: "ultra" },
  ],
}), syncState);
bind(outputFolder.slider(state, "dpr", { min: 0.75, max: 2, step: 0.05, label: "DPR cap" }), () => {
  needsResize = true;
  syncState();
});

function setControlsVisible(controls, visible) {
  controls.forEach(control => control.setVisible(visible));
}

function updatePanelContext() {
  const domain = state.materialDomain;
  const projectedDomain = domain === "organic" || domain === "octahedral";
  const fieldDomain = domain === "sphericalField";
  const volumeDomain = domain === "solarVolume";
  const twiglVolume = volumeDomain && state.volumeBasis === "twiglPlasma";
  const usesTwiglSource = !volumeDomain || twiglVolume;

  twiglFolder.setVisible(usesTwiglSource);
  sourceDomainFolder.setVisible(usesTwiglSource);
  setControlsVisible(projectedMappingControls, projectedDomain);

  fieldReactionFolder.setVisible(fieldDomain);
  fieldSourceFolder.setVisible(fieldDomain);
  fieldShapeFolder.setVisible(fieldDomain);

  volumeFolder.setVisible(volumeDomain);
  volumeSourceFolder.setVisible(twiglVolume);
  volumeTextureFolder.setVisible(volumeDomain && state.volumeBasis !== "gyroid");

  setControlsVisible(projectedSurfaceControls, !volumeDomain);
  setControlsVisible(projectedPaletteControls, !volumeDomain);
  setControlsVisible(haloControls, state.haloEnabled);
  rotateSpeedControl.setVisible(state.autoRotate);
  setControlsVisible(bloomDetailControls, state.bloomStrength > 0.001);
}

const sessionFolder = panel.folder("Session", { expanded: false });
const pauseButton = sessionFolder.button("Pause animation", () => {
  state.paused = !state.paused;
  pauseButton.input.textContent = state.paused ? "Resume animation" : "Pause animation";
});

function settingsJson() {
  const settings = Object.fromEntries(Object.keys(defaults).map(key => [key, state[key]]));
  return JSON.stringify(settings, null, 2);
}

async function copySettingsJson() {
  const json = settingsJson();
  try {
    await navigator.clipboard.writeText(json);
    return;
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = json;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    if (!copied) throw new Error("Clipboard copy failed");
  }
}

const copyJsonButton = sessionFolder.button("Copy settings JSON", () => {
  copySettingsJson()
    .then(() => {
      copyJsonButton.input.textContent = "JSON copied";
      window.setTimeout(() => { copyJsonButton.input.textContent = "Copy settings JSON"; }, 1400);
    })
    .catch(() => {
      copyJsonButton.input.textContent = "Copy unavailable";
      window.setTimeout(() => { copyJsonButton.input.textContent = "Copy settings JSON"; }, 1800);
    });
});

sessionFolder.button("Reset authored defaults", () => {
  applySceneSettings(defaults, "authored-default");
});

window.addEventListener("keydown", event => {
  if (event.code === "Space" && !["INPUT", "SELECT", "TEXTAREA", "BUTTON"].includes(document.activeElement?.tagName)) {
    event.preventDefault();
    pauseButton.input.click();
  }
  if (event.key.toLowerCase() === "r" && !["INPUT", "SELECT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
    cameraFolder.body.querySelector(".sh-btn")?.click();
  }
});

window.addEventListener("resize", () => { needsResize = true; });
canvas.addEventListener("webglcontextlost", event => {
  event.preventDefault();
});

let elapsedTime = 0;
let lastFrameTime = performance.now();
const objectCameraPosition = new THREE.Vector3();

function frame(now) {
  const delta = Math.min(0.05, Math.max(0, (now - lastFrameTime) * 0.001));
  lastFrameTime = now;
  if (!state.paused) elapsedTime += delta * state.timeSpeed;
  resize();

  controls.autoRotate = state.autoRotate && !state.paused;
  controls.autoRotateSpeed = state.rotateSpeed;
  controls.update(delta);

  const shaderTime = elapsedTime + state.phase;
  twiglUniforms.t.value = shaderTime;
  sphereUniforms.uVolumeTime.value = shaderTime;
  particleUniforms.uTime.value = shaderTime;
  particleUniforms.uVolumeTime.value = shaderTime;
  objectCameraPosition.copy(camera.position);
  sphere.worldToLocal(objectCameraPosition);
  sphereUniforms.uObjectCameraPosition.value.copy(objectCameraPosition);
  renderer.setRenderTarget(twiglTarget);
  renderer.setClearColor(0x000000, 1);
  renderer.clear();
  renderer.render(twiglScene, twiglCamera);
  if (state.materialDomain === "sphericalField" && (!state.paused || fieldNeedsReset)) {
    renderSphericalField(shaderTime);
  }
  renderer.setRenderTarget(null);
  renderer.setClearColor(0x020308, 1);

  composer.render(delta);
  requestAnimationFrame(frame);
}

updatePanelContext();
syncState();
applyCameraDistance();
resize();
requestAnimationFrame(frame);
