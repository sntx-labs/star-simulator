// Rendering budgets are applied before GPU allocation and after every visual preset.
export const GRAPHICS_PROFILES = Object.freeze({
  high: Object.freeze({ label: 'High', particles: 180000, surfaceMesh: 'showcase', textureResolution: 1024, fieldResolution: 2048, fieldSteps: 6, sourceOctaves: 32, sourceRaySteps: 160, volumeSteps: 40, volumeOctaves: 5, dpr: 1.5, quality: 'high' }),
  medium: Object.freeze({ label: 'Medium', particles: 90000, surfaceMesh: 'detailed', textureResolution: 512, fieldResolution: 512, fieldSteps: 3, sourceOctaves: 12, sourceRaySteps: 64, volumeSteps: 14, volumeOctaves: 3, dpr: 1, quality: 'balanced' }),
  low: Object.freeze({ label: 'Low', particles: 30000, surfaceMesh: 'balanced', textureResolution: 256, fieldResolution: 256, fieldSteps: 2, sourceOctaves: 8, sourceRaySteps: 40, volumeSteps: 8, volumeOctaves: 2, dpr: 0.75, quality: 'low' }),
});
export function graphicsProfile(level) {
  return Object.hasOwn(GRAPHICS_PROFILES, level) ? GRAPHICS_PROFILES[level] : GRAPHICS_PROFILES.medium;
}
export function applyGraphicsProfile(settings, level) {
  const profile = graphicsProfile(level);
  const result = { ...settings, quality: profile.quality };
  for (const key of ['fieldSteps', 'sourceOctaves', 'sourceRaySteps', 'volumeSteps', 'volumeOctaves', 'dpr']) {
    result[key] = Math.min(settings[key], profile[key]);
  }
  for (const key of ['textureResolution', 'fieldResolution']) result[key] = String(Math.min(Number(settings[key]), profile[key]));
  const meshes = ['balanced', 'detailed', 'ultra', 'extreme', 'showcase'];
  result.surfaceMesh = meshes[Math.min(Math.max(0, meshes.indexOf(settings.surfaceMesh)), meshes.indexOf(profile.surfaceMesh))];
  return result;
}
