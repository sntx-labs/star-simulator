# Star Simulator

Source repository for [Star Simulator](https://labs.sntx.co/experiments/twigl-plume-sphere/). Updated from Syntax Labs version 67, commit `9fd851a087b5618b95d486e2af84e1170acdf627`, on 2026-10-03.

## Run the current Labs version

Requires Node.js 20 or newer. No dependency installation is needed for this published version.

```sh
git clone https://github.com/sntx-labs/star-simulator.git
cd star-simulator
npm run labs:verify
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

Taylor approved this Star Simulator source release on October 9, 2026. Taylor-owned code is MIT-licensed under LICENSE. Preserve the six Yohei snippets' full MIT notice, all dependency notices, and font terms; see THIRD_PARTY_NOTICES.md. This release does not publish ASTERION or other project repositories.

The running website is still deployed separately through Sites. Pushing to this repository does not redeploy or change its public URL.

To prepare runtime assets for the separate authoring snapshot, run `npm run labs:authoring`, then follow the printed npm install/build instructions. The published snapshot remains the reference for current Labs behavior.

## Graphics selection

The published experience waits for an explicit High, Medium, or Low choice before loading the scene. Rendering budgets are applied before GPU allocation and reapplied when switching any of the six visual presets. The editable authoring snapshot shares the budget module; the published shell remains the reference for the entry screen.

Chromosphere Surge is the starting visual preset at every graphics level. Azure Plume and the other four presets remain selectable.

## Project links and coding-assistant prompt

The shared project-card module incorporates the October 8 release fixes and October 9 Star MIT release scope. Star's public source action is enabled after anonymous repository and ZIP access is verified. Other source actions remain unavailable until their own release. The Star runtime adds the full Yohei MIT banner to the existing bundle; the executable payload is unchanged. Exact source and bundle fingerprints are recorded in public/experiments/twigl-plume-sphere/yohei-shader-provenance.json. The live Labs website is deployed separately.

`labs:verify` checks the reference file hashes before editing. Expected mismatches after intentional runtime edits should be reviewed and the snapshot manifest updated deliberately; do not suppress unexplained differences. `labs:build` assembles the runtime and does not recompile an authoring snapshot.

Follow [@taylor_sntx on Twitter/X](https://x.com/taylor_sntx) for more experiments. Want an experience like this, designed for your product? Work with Syntax on a custom implementation: [sntx.co](https://sntx.co/).

The custom-implementation offer is also shown in the project card and copied prompt. It is an invitation to commission work, not an additional license restriction.
