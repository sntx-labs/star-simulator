# TWIGL / Plume Sphere

A self-contained Three.js study that renders compact TWIGL fragment programs into a live offscreen `WebGLRenderTarget`, then samples that GPU texture in the sphere, halo, and particle shaders every frame.

## Local review

```powershell
npm install
npm run dev
```

Production check:

```powershell
npm run build
npm run preview
```

Press <kbd>~</kbd> to toggle the `sh-panel` controls. Drag to orbit and scroll or pinch to reframe. The panel is contextual: changing the active material path reveals only the controls used by that shader branch, and secondary options such as TWIGL volume driving, halo tuning, auto-orbit speed, and bloom shaping appear only when enabled. The source-domain folder exposes the compact shader's nested detail/octave limit, primary ray steps, symmetry folding, domain scale/rotation/offset/warp, and source color grade before the result reaches the sphere.

The curated compact sources in `twigl-presets.js` are adapted from the local `twigl-deep-field/` Yohei archive and remain attributed in the interface and source metadata.

## License

Taylor-owned code is MIT-licensed under ../../LICENSE. Preserve the full Yohei MIT header in twigl-presets.js and the exact source mapping and other grants in ../../THIRD_PARTY_NOTICES.md. This archived authoring snapshot is not a byte-identical build of the current Labs runtime.
