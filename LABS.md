# Star Simulator

Private working repository for [Star Simulator](https://labs.sntx.co/experiments/twigl-plume-sphere/). Updated from Syntax Labs version 67, commit `9fd851a087b5618b95d486e2af84e1170acdf627`, on 2026-10-03.

## Run the current Labs version

Requires Node.js 20 or newer. No dependency installation is needed for this published version.

```sh
npm run labs:dev
```

Open the localhost URL printed by the server. The original experiment path is preserved so its Syntax header, SHPanel, loading animation, mobile controls and relative asset links continue to work. Set the PORT environment variable to use a different port.

```sh
npm run labs:verify
npm run labs:build
```

The build copies the current experience to `dist/` and assembles the large assets from their checked-in parts, validating SHA-256 hashes. It does not recompile the archived authoring snapshot.

## Editing

Current runtime files: `public/experiments/twigl-plume-sphere/`. Shared controls and loading code: `public/ui/`.

Editable authoring files are retained in `authoring/star-simulator/`. This is an additional development snapshot, not a guarantee of byte-identical reproduction of the current Labs bundle; some Labs changes were made after the original build. Retain the checked-in published version when working on those differences.

## Publication and rights

Keep this repository private until the owner approves publication. No new blanket open-source license is assigned by this migration. Existing licenses, attribution and third-party notices remain applicable. Review bundled textures, models, fonts, shaders and dependencies before public release. Private visibility does not revoke licenses previously granted for public versions.

The running website is still deployed separately through Sites. Pushing to this repository does not redeploy or change its public URL.

To prepare runtime assets for the separate authoring snapshot, run `npm run labs:authoring`, then follow the printed npm install/build instructions. The published snapshot remains the reference for current Labs behavior.

## Graphics selection

The published experience waits for an explicit High, Medium, or Low choice before loading the scene. Rendering budgets are applied before GPU allocation and reapplied when switching any of the six visual presets. The editable authoring snapshot shares the budget module; the published shell remains the reference for the entry screen.

Chromosphere Surge is the starting visual preset at every graphics level. Azure Plume and the other four presets remain selectable.
