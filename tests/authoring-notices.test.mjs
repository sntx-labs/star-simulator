import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {TWIGL_PRESETS} from '../authoring/star-simulator/twigl-presets.js';
const hash=s=>createHash('sha256').update(s).digest('hex');
const provenance=JSON.parse(await readFile(new URL('../public/experiments/twigl-plume-sphere/yohei-shader-provenance.json',import.meta.url),'utf8'));
test('editable source retains all six exact shader strings and complete MIT notice',async()=>{
 const source=(await readFile(new URL('../authoring/star-simulator/twigl-presets.js',import.meta.url),'utf8')).replace(/\r\n/g,'\n');
 const mit=(await readFile(new URL('../public/experiments/twigl-plume-sphere/licenses/YOHEI-MIT.txt',import.meta.url),'utf8')).trim();
 for(const line of mit.split('\n').filter(Boolean))assert.ok(source.includes(' * '+line));
 assert.equal(hash(source),provenance.releaseAuthoring.sha256);
 assert.equal(TWIGL_PRESETS.length,6);
 for(const snippet of provenance.snippets)assert.equal(hash(TWIGL_PRESETS.find(s=>s.id===snippet.id).source),snippet.sourceTextSha256);
});
