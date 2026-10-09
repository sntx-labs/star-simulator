import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const base=new URL('../public/experiments/twigl-plume-sphere/',import.meta.url);
const provenance=JSON.parse(await readFile(new URL('yohei-shader-provenance.json',base),'utf8'));
const bundle=await readFile(new URL('assets/'+provenance.localVerification.currentBundle,base),'utf8');
const mit=(await readFile(new URL('licenses/YOHEI-MIT.txt',base),'utf8')).replace(/\r\n/g,'\n');
const notice=(await readFile(new URL('THIRD_PARTY_NOTICES.md',base),'utf8')).replace(/\r\n/g,'\n');
const hash=value=>createHash('sha256').update(value).digest('hex');

test('all six shipped snippets match the recorded exact-source fingerprints and primary post mapping',()=>{
 const ids=['1986780675169808394','1877626433008496846','1880739133716570129','1900460641590403482','1936046385700176266','1961047535101059204'];
 assert.deepEqual(provenance.snippets.map(p=>p.id),ids);
 const literals=[...bundle.matchAll(/id:"(\d+)",label:"([^"]+)",family:"[^"]+",source:("(?:\\.|[^"\\])*")/g)];
 for(const snippet of provenance.snippets){
  const matches=literals.filter(m=>m[1]===snippet.id);assert.equal(matches.length,1,snippet.id);
  const text=JSON.parse(matches[0][3]);assert.equal(hash(text),snippet.sourceTextSha256);assert.equal(Buffer.byteLength(text),snippet.sourceUtf8Bytes);
  assert.equal(matches[0][2],snippet.label);assert.equal(snippet.sourceUrl,'https://x.com/YoheiNishitsuji/status/'+snippet.id);assert.ok(notice.includes(snippet.sourceUrl));
 }
 assert.deepEqual(provenance.snippets.filter(p=>p.activeDriver).map(p=>p.id),[ids[0]]);
 assert.ok(!ids.includes('2087274960939090242'));
});

test('the bundle carries the complete MIT grant and preserves its original executable payload',()=>{
 for(const line of mit.trim().split('\n').filter(Boolean))assert.ok(bundle.includes(' * '+line),line);
 assert.match(mit,/Copyright \(c\) 2025 Yohei Nishitsuji/);
 assert.match(mit,/Permission is hereby granted, free of charge/);
 assert.match(mit,/copies or substantial portions of the Software/);
 assert.match(mit,/AUTHORS OR COPYRIGHT HOLDERS BE LIABLE/);
 assert.ok(notice.includes(mit.trim()));
 const payload=bundle.slice(bundle.indexOf(' */\n')+' */\n'.length);
 assert.equal(hash(payload),provenance.localVerification.baselineBundleSha256);
 assert.equal(hash(bundle),provenance.localVerification.currentBundleSha256);
 assert.equal(provenance.localVerification.currentBundle,'star-simulator-'+hash(bundle).slice(0,10)+'.js');
 assert.match(payload,/SPDX-License-Identifier: MIT/,'Existing dependency notices remain in the unchanged payload');
});

test('the experience loads the noticed bundle and keeps Taylor and Yohei grants distinct',async()=>{
 const html=await readFile(new URL('experience.html',base),'utf8');
 assert.ok(html.includes(provenance.localVerification.currentBundle));assert.ok(!html.includes(provenance.localVerification.baselineBundle));
 assert.match(notice,/wrapper code is released under the \[MIT License\]/);
 const owned=await readFile(new URL('licenses/STAR-SIMULATOR-MIT.txt',base),'utf8');
 assert.match(owned,/Copyright \(c\) 2026 Taylor Allen/);assert.match(owned,/Permission is hereby granted/);
 assert.match(provenance.scope,/separately released under MIT/);
 assert.match(notice,/does not claim a new primary X verification/);
 assert.match(provenance.grant.evidenceBasis,/supplied by the existing October 7 trace/);
});
