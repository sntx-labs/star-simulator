import { graphicsProfile, applyGraphicsProfile } from "../graphics-profiles.js";
const starGraphicsLevel=new URLSearchParams(location.search).get("graphics"),starGraphics=graphicsProfile(starGraphicsLevel);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qa="172",ai={ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kc=0,ys=1,Wc=2,Ul=1,Xc=2,En=3,Ln=0,Lt=1,Tn=2,Dn=0,Ni=1,dr=2,Es=3,Ts=4,Yc=5,ii=100,qc=101,jc=102,Kc=103,Zc=104,$c=200,Jc=201,Qc=202,eu=203,ra=204,oa=205,tu=206,nu=207,iu=208,ru=209,ou=210,au=211,su=212,lu=213,cu=214,aa=0,sa=1,la=2,zi=3,ca=4,ua=5,ha=6,da=7,Fl=0,uu=1,hu=2,kn=0,Il=1,Nl=2,Ol=3,ja=4,du=5,Bl=6,zl=7,Vl=300,Vi=301,Hi=302,fa=303,pa=304,_o=306,co=1e3,Hn=1001,fr=1002,sn=1003,fu=1004,Ar=1005,It=1006,Co=1007,oi=1008,ln=1009,Hl=1010,Gl=1011,pr=1012,Ka=1013,li=1014,An=1015,dn=1016,Za=1017,$a=1018,Gi=1020,kl=35902,Wl=1021,Xl=1022,Xt=1023,Yl=1024,ql=1025,Oi=1026,ki=1027,jl=1028,Ja=1029,Kl=1030,Qa=1031,es=1033,Jr=33776,Qr=33777,eo=33778,to=33779,ma=35840,ga=35841,va=35842,_a=35843,xa=36196,Sa=37492,Ma=37496,ya=37808,Ea=37809,Ta=37810,ba=37811,wa=37812,Aa=37813,Ca=37814,Ra=37815,Da=37816,Pa=37817,La=37818,Ua=37819,Fa=37820,Ia=37821,no=36492,Na=36494,Oa=36495,Zl=36283,Ba=36284,za=36285,Va=36286,pu=3200,mu=3201,gu=0,vu=1,bn="",Wt="srgb",ci="srgb-linear",uo="linear",Qe="srgb",_i=7680,bs=519,_u=512,xu=513,Su=514,$l=515,Mu=516,yu=517,Eu=518,Tu=519,ws=35044,As="300 es",Cn=2e3,ho=2001;class di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cs=1234567;const lr=Math.PI/180,mr=180/Math.PI;function ji(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function Be(i,e,t){return Math.max(e,Math.min(t,i))}function ts(i,e){return(i%e+e)%e}function bu(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function wu(i,e,t){return i!==e?(t-i)/(e-i):0}function cr(i,e,t){return(1-t)*i+t*e}function Au(i,e,t,n){return cr(i,e,1-Math.exp(-t*n))}function Cu(i,e=1){return e-Math.abs(ts(i,e*2)-e)}function Ru(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Du(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Pu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Lu(i,e){return i+Math.random()*(e-i)}function Uu(i){return i*(.5-Math.random())}function Fu(i){i!==void 0&&(Cs=i);let e=Cs+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Iu(i){return i*lr}function Nu(i){return i*mr}function Ou(i){return(i&i-1)===0&&i!==0}function Bu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vu(i,e,t,n,r){const o=Math.cos,a=Math.sin,s=o(t/2),l=a(t/2),c=o((e+n)/2),h=a((e+n)/2),m=o((e-n)/2),p=a((e-n)/2),d=o((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(s*h,l*m,l*p,s*c);break;case"YZY":i.set(l*p,s*h,l*m,s*c);break;case"ZXZ":i.set(l*m,l*p,s*h,s*c);break;case"XZX":i.set(s*h,l*v,l*d,s*c);break;case"YXY":i.set(l*d,s*h,l*v,s*c);break;case"ZYZ":i.set(l*v,l*d,s*h,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Li(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const si={DEG2RAD:lr,RAD2DEG:mr,generateUUID:ji,clamp:Be,euclideanModulo:ts,mapLinear:bu,inverseLerp:wu,lerp:cr,damp:Au,pingpong:Cu,smoothstep:Ru,smootherstep:Du,randInt:Pu,randFloat:Lu,randFloatSpread:Uu,seededRandom:Fu,degToRad:Iu,radToDeg:Nu,isPowerOfTwo:Ou,ceilPowerOfTwo:Bu,floorPowerOfTwo:zu,setQuaternionFromProperEuler:Vu,normalize:Dt,denormalize:Li};class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*n-a*r+e.x,this.y=o*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,t,n,r,o,a,s,l,c){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,a,s,l,c)}set(e,t,n,r,o,a,s,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=s,h[3]=t,h[4]=o,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,a=n[0],s=n[3],l=n[6],c=n[1],h=n[4],m=n[7],p=n[2],d=n[5],v=n[8],S=r[0],g=r[3],u=r[6],w=r[1],b=r[4],y=r[7],F=r[2],D=r[5],C=r[8];return o[0]=a*S+s*w+l*F,o[3]=a*g+s*b+l*D,o[6]=a*u+s*y+l*C,o[1]=c*S+h*w+m*F,o[4]=c*g+h*b+m*D,o[7]=c*u+h*y+m*C,o[2]=p*S+d*w+v*F,o[5]=p*g+d*b+v*D,o[8]=p*u+d*y+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*s*c-n*o*h+n*s*l+r*o*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],h=e[8],m=h*a-s*c,p=s*l-h*o,d=c*o-a*l,v=t*m+n*p+r*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=m*S,e[1]=(r*c-h*n)*S,e[2]=(s*n-r*a)*S,e[3]=p*S,e[4]=(h*t-r*l)*S,e[5]=(r*o-s*t)*S,e[6]=d*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*o)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,a,s){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*a+c*s)+a+e,-r*c,r*l,-r*(-c*a+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Ro.makeScale(e,t)),this}rotate(e){return this.premultiply(Ro.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ro=new Ie;function Jl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function fo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hu(){const i=fo("canvas");return i.style.display="block",i}const Rs={};function Ui(i){i in Rs||(Rs[i]=!0,console.warn(i))}function Gu(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function ku(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Wu(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ds=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ps=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xu(){const i={enabled:!0,workingColorSpace:ci,spaces:{},convert:function(r,o,a){return this.enabled===!1||o===a||!o||!a||(this.spaces[o].transfer===Qe&&(r.r=Pn(r.r),r.g=Pn(r.g),r.b=Pn(r.b)),this.spaces[o].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(r.r=Bi(r.r),r.g=Bi(r.g),r.b=Bi(r.b))),r},fromWorkingColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},toWorkingColorSpace:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===bn?uo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,a){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ci]:{primaries:e,whitePoint:n,transfer:uo,toXYZ:Ds,fromXYZ:Ps,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:Ds,fromXYZ:Ps,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),i}const qe=Xu();function Pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let xi;class Yu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xi===void 0&&(xi=fo("canvas")),xi.width=e.width,xi.height=e.height;const n=xi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=Pn(o[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pn(t[n]/255)*255):t[n]=Pn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qu=0;class Ql{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,s=r.length;a<s;a++)r[a].isDataTexture?o.push(Do(r[a].image)):o.push(Do(r[a]))}else o=Do(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function Do(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ju=0;class Ot extends di{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Hn,r=Hn,o=It,a=oi,s=Xt,l=ln,c=Ot.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=ji(),this.name="",this.source=new Ql(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case co:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case fr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case co:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case fr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Vl;Ot.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*o,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*o,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*o,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const l=e.elements,c=l[0],h=l[4],m=l[8],p=l[1],d=l[5],v=l[9],S=l[2],g=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(m-S)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(m+S)<.1&&Math.abs(v+g)<.1&&Math.abs(c+d+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(d+1)/2,F=(u+1)/2,D=(h+p)/4,C=(m+S)/4,N=(v+g)/4;return b>y&&b>F?b<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(b),r=D/n,o=C/n):y>F?y<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),n=D/r,o=N/r):F<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(F),n=C/o,r=N/o),this.set(n,r,o,t),this}let w=Math.sqrt((g-v)*(g-v)+(m-S)*(m-S)+(p-h)*(p-h));return Math.abs(w)<.001&&(w=1),this.x=(g-v)/w,this.y=(m-S)/w,this.z=(p-h)/w,this.w=Math.acos((c+d+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ku extends di{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ot(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let s=0;s<a;s++)this.textures[s]=o.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Ql(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yt extends Ku{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ec extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zu extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ui{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,a,s){let l=n[r+0],c=n[r+1],h=n[r+2],m=n[r+3];const p=o[a+0],d=o[a+1],v=o[a+2],S=o[a+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=m;return}if(s===1){e[t+0]=p,e[t+1]=d,e[t+2]=v,e[t+3]=S;return}if(m!==S||l!==p||c!==d||h!==v){let g=1-s;const u=l*p+c*d+h*v+m*S,w=u>=0?1:-1,b=1-u*u;if(b>Number.EPSILON){const F=Math.sqrt(b),D=Math.atan2(F,u*w);g=Math.sin(g*D)/F,s=Math.sin(s*D)/F}const y=s*w;if(l=l*g+p*y,c=c*g+d*y,h=h*g+v*y,m=m*g+S*y,g===1-s){const F=1/Math.sqrt(l*l+c*c+h*h+m*m);l*=F,c*=F,h*=F,m*=F}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,r,o,a){const s=n[r],l=n[r+1],c=n[r+2],h=n[r+3],m=o[a],p=o[a+1],d=o[a+2],v=o[a+3];return e[t]=s*v+h*m+l*d-c*p,e[t+1]=l*v+h*p+c*m-s*d,e[t+2]=c*v+h*d+s*p-l*m,e[t+3]=h*v-s*m-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,a=e._order,s=Math.cos,l=Math.sin,c=s(n/2),h=s(r/2),m=s(o/2),p=l(n/2),d=l(r/2),v=l(o/2);switch(a){case"XYZ":this._x=p*h*m+c*d*v,this._y=c*d*m-p*h*v,this._z=c*h*v+p*d*m,this._w=c*h*m-p*d*v;break;case"YXZ":this._x=p*h*m+c*d*v,this._y=c*d*m-p*h*v,this._z=c*h*v-p*d*m,this._w=c*h*m+p*d*v;break;case"ZXY":this._x=p*h*m-c*d*v,this._y=c*d*m+p*h*v,this._z=c*h*v+p*d*m,this._w=c*h*m-p*d*v;break;case"ZYX":this._x=p*h*m-c*d*v,this._y=c*d*m+p*h*v,this._z=c*h*v-p*d*m,this._w=c*h*m+p*d*v;break;case"YZX":this._x=p*h*m+c*d*v,this._y=c*d*m+p*h*v,this._z=c*h*v-p*d*m,this._w=c*h*m-p*d*v;break;case"XZY":this._x=p*h*m-c*d*v,this._y=c*d*m-p*h*v,this._z=c*h*v+p*d*m,this._w=c*h*m+p*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],a=t[1],s=t[5],l=t[9],c=t[2],h=t[6],m=t[10],p=n+s+m;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(a-r)*d}else if(n>s&&n>m){const d=2*Math.sqrt(1+n-s-m);this._w=(h-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(o+c)/d}else if(s>m){const d=2*Math.sqrt(1+s-n-m);this._w=(o-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+m-n-s);this._w=(a-r)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,a=e._w,s=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*s+r*c-o*l,this._y=r*h+a*l+o*s-n*c,this._z=o*h+a*c+n*l-r*s,this._w=a*h-n*s-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,a=this._w;let s=a*e._w+n*e._x+r*e._y+o*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=n,this._y=r,this._z=o,this;const l=1-s*s;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,s),m=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=a*m+this._w*p,this._x=n*m+this._x*p,this._y=r*m+this._y*p,this._z=o*m+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ls.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ls.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,a=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*a,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*a,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,a=e.y,s=e.z,l=e.w,c=2*(a*r-s*n),h=2*(s*t-o*r),m=2*(o*n-a*t);return this.x=t+l*c+a*m-s*h,this.y=n+l*h+s*c-o*m,this.z=r+l*m+o*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,a=t.x,s=t.y,l=t.z;return this.x=r*l-o*s,this.y=o*a-n*l,this.z=n*s-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Po.copy(this).projectOnVector(e),this.sub(Po)}reflect(e){return this.sub(Po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Po=new I,Ls=new ui;class Sr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,s=o.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,tn):tn.fromBufferAttribute(o,a),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(e.matrixWorld),this.union(Cr)}const r=e.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),Rr.subVectors(this.max,tr),Si.subVectors(e.a,tr),Mi.subVectors(e.b,tr),yi.subVectors(e.c,tr),Fn.subVectors(Mi,Si),In.subVectors(yi,Mi),Kn.subVectors(Si,yi);let t=[0,-Fn.z,Fn.y,0,-In.z,In.y,0,-Kn.z,Kn.y,Fn.z,0,-Fn.x,In.z,0,-In.x,Kn.z,0,-Kn.x,-Fn.y,Fn.x,0,-In.y,In.x,0,-Kn.y,Kn.x,0];return!Lo(t,Si,Mi,yi,Rr)||(t=[1,0,0,0,1,0,0,0,1],!Lo(t,Si,Mi,yi,Rr))?!1:(Dr.crossVectors(Fn,In),t=[Dr.x,Dr.y,Dr.z],Lo(t,Si,Mi,yi,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vn=[new I,new I,new I,new I,new I,new I,new I,new I],tn=new I,Cr=new Sr,Si=new I,Mi=new I,yi=new I,Fn=new I,In=new I,Kn=new I,tr=new I,Rr=new I,Dr=new I,Zn=new I;function Lo(i,e,t,n,r){for(let o=0,a=i.length-3;o<=a;o+=3){Zn.fromArray(i,o);const s=r.x*Math.abs(Zn.x)+r.y*Math.abs(Zn.y)+r.z*Math.abs(Zn.z),l=e.dot(Zn),c=t.dot(Zn),h=n.dot(Zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>s)return!1}return!0}const $u=new Sr,nr=new I,Uo=new I;class xo{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$u.setFromPoints(e).getCenter(n);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);const t=nr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(nr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(Uo)),this.expandByPoint(nr.copy(e.center).sub(Uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new I,Fo=new I,Pr=new I,Nn=new I,Io=new I,Lr=new I,No=new I;class ns{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Fo.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),Nn.copy(this.origin).sub(Fo);const o=e.distanceTo(t)*.5,a=-this.direction.dot(Pr),s=Nn.dot(this.direction),l=-Nn.dot(Pr),c=Nn.lengthSq(),h=Math.abs(1-a*a);let m,p,d,v;if(h>0)if(m=a*l-s,p=a*s-l,v=o*h,m>=0)if(p>=-v)if(p<=v){const S=1/h;m*=S,p*=S,d=m*(m+a*p+2*s)+p*(a*m+p+2*l)+c}else p=o,m=Math.max(0,-(a*p+s)),d=-m*m+p*(p+2*l)+c;else p=-o,m=Math.max(0,-(a*p+s)),d=-m*m+p*(p+2*l)+c;else p<=-v?(m=Math.max(0,-(-a*o+s)),p=m>0?-o:Math.min(Math.max(-o,-l),o),d=-m*m+p*(p+2*l)+c):p<=v?(m=0,p=Math.min(Math.max(-o,-l),o),d=p*(p+2*l)+c):(m=Math.max(0,-(a*o+s)),p=m>0?o:Math.min(Math.max(-o,-l),o),d=-m*m+p*(p+2*l)+c);else p=a>0?-o:o,m=Math.max(0,-(a*p+s)),d=-m*m+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Fo).addScaledVector(Pr,p),d}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const n=_n.dot(this.direction),r=_n.dot(_n)-n*n,o=e.radius*e.radius;if(r>o)return null;const a=Math.sqrt(o-r),s=n-a,l=n+a;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,a,s,l;const c=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),h>=0?(o=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(o=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||o>r||((o>n||isNaN(n))&&(n=o),(a<r||isNaN(r))&&(r=a),m>=0?(s=(e.min.z-p.z)*m,l=(e.max.z-p.z)*m):(s=(e.max.z-p.z)*m,l=(e.min.z-p.z)*m),n>l||s>r)||((s>n||n!==n)&&(n=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,r,o){Io.subVectors(t,e),Lr.subVectors(n,e),No.crossVectors(Io,Lr);let a=this.direction.dot(No),s;if(a>0){if(r)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Nn.subVectors(this.origin,e);const l=s*this.direction.dot(Lr.crossVectors(Nn,Lr));if(l<0)return null;const c=s*this.direction.dot(Io.cross(Nn));if(c<0||l+c>a)return null;const h=-s*Nn.dot(No);return h<0?null:this.at(h/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,n,r,o,a,s,l,c,h,m,p,d,v,S,g){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,a,s,l,c,h,m,p,d,v,S,g)}set(e,t,n,r,o,a,s,l,c,h,m,p,d,v,S,g){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=o,u[5]=a,u[9]=s,u[13]=l,u[2]=c,u[6]=h,u[10]=m,u[14]=p,u[3]=d,u[7]=v,u[11]=S,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ei.setFromMatrixColumn(e,0).length(),o=1/Ei.setFromMatrixColumn(e,1).length(),a=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,a=Math.cos(n),s=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const p=a*h,d=a*m,v=s*h,S=s*m;t[0]=l*h,t[4]=-l*m,t[8]=c,t[1]=d+v*c,t[5]=p-S*c,t[9]=-s*l,t[2]=S-p*c,t[6]=v+d*c,t[10]=a*l}else if(e.order==="YXZ"){const p=l*h,d=l*m,v=c*h,S=c*m;t[0]=p+S*s,t[4]=v*s-d,t[8]=a*c,t[1]=a*m,t[5]=a*h,t[9]=-s,t[2]=d*s-v,t[6]=S+p*s,t[10]=a*l}else if(e.order==="ZXY"){const p=l*h,d=l*m,v=c*h,S=c*m;t[0]=p-S*s,t[4]=-a*m,t[8]=v+d*s,t[1]=d+v*s,t[5]=a*h,t[9]=S-p*s,t[2]=-a*c,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const p=a*h,d=a*m,v=s*h,S=s*m;t[0]=l*h,t[4]=v*c-d,t[8]=p*c+S,t[1]=l*m,t[5]=S*c+p,t[9]=d*c-v,t[2]=-c,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const p=a*l,d=a*c,v=s*l,S=s*c;t[0]=l*h,t[4]=S-p*m,t[8]=v*m+d,t[1]=m,t[5]=a*h,t[9]=-s*h,t[2]=-c*h,t[6]=d*m+v,t[10]=p-S*m}else if(e.order==="XZY"){const p=a*l,d=a*c,v=s*l,S=s*c;t[0]=l*h,t[4]=-m,t[8]=c*h,t[1]=p*m+S,t[5]=a*h,t[9]=d*m-v,t[2]=v*m-d,t[6]=s*h,t[10]=S*m+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ju,e,Qu)}lookAt(e,t,n){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),On.crossVectors(n,Gt),On.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),On.crossVectors(n,Gt)),On.normalize(),Ur.crossVectors(Gt,On),r[0]=On.x,r[4]=Ur.x,r[8]=Gt.x,r[1]=On.y,r[5]=Ur.y,r[9]=Gt.y,r[2]=On.z,r[6]=Ur.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,a=n[0],s=n[4],l=n[8],c=n[12],h=n[1],m=n[5],p=n[9],d=n[13],v=n[2],S=n[6],g=n[10],u=n[14],w=n[3],b=n[7],y=n[11],F=n[15],D=r[0],C=r[4],N=r[8],E=r[12],M=r[1],R=r[5],X=r[9],V=r[13],Z=r[2],$=r[6],q=r[10],Q=r[14],G=r[3],ae=r[7],de=r[11],ye=r[15];return o[0]=a*D+s*M+l*Z+c*G,o[4]=a*C+s*R+l*$+c*ae,o[8]=a*N+s*X+l*q+c*de,o[12]=a*E+s*V+l*Q+c*ye,o[1]=h*D+m*M+p*Z+d*G,o[5]=h*C+m*R+p*$+d*ae,o[9]=h*N+m*X+p*q+d*de,o[13]=h*E+m*V+p*Q+d*ye,o[2]=v*D+S*M+g*Z+u*G,o[6]=v*C+S*R+g*$+u*ae,o[10]=v*N+S*X+g*q+u*de,o[14]=v*E+S*V+g*Q+u*ye,o[3]=w*D+b*M+y*Z+F*G,o[7]=w*C+b*R+y*$+F*ae,o[11]=w*N+b*X+y*q+F*de,o[15]=w*E+b*V+y*Q+F*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],a=e[1],s=e[5],l=e[9],c=e[13],h=e[2],m=e[6],p=e[10],d=e[14],v=e[3],S=e[7],g=e[11],u=e[15];return v*(+o*l*m-r*c*m-o*s*p+n*c*p+r*s*d-n*l*d)+S*(+t*l*d-t*c*p+o*a*p-r*a*d+r*c*h-o*l*h)+g*(+t*c*m-t*s*d-o*a*m+n*a*d+o*s*h-n*c*h)+u*(-r*s*h-t*l*m+t*s*p+r*a*m-n*a*p+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],h=e[8],m=e[9],p=e[10],d=e[11],v=e[12],S=e[13],g=e[14],u=e[15],w=m*g*c-S*p*c+S*l*d-s*g*d-m*l*u+s*p*u,b=v*p*c-h*g*c-v*l*d+a*g*d+h*l*u-a*p*u,y=h*S*c-v*m*c+v*s*d-a*S*d-h*s*u+a*m*u,F=v*m*l-h*S*l-v*s*p+a*S*p+h*s*g-a*m*g,D=t*w+n*b+r*y+o*F;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/D;return e[0]=w*C,e[1]=(S*p*o-m*g*o-S*r*d+n*g*d+m*r*u-n*p*u)*C,e[2]=(s*g*o-S*l*o+S*r*c-n*g*c-s*r*u+n*l*u)*C,e[3]=(m*l*o-s*p*o-m*r*c+n*p*c+s*r*d-n*l*d)*C,e[4]=b*C,e[5]=(h*g*o-v*p*o+v*r*d-t*g*d-h*r*u+t*p*u)*C,e[6]=(v*l*o-a*g*o-v*r*c+t*g*c+a*r*u-t*l*u)*C,e[7]=(a*p*o-h*l*o+h*r*c-t*p*c-a*r*d+t*l*d)*C,e[8]=y*C,e[9]=(v*m*o-h*S*o-v*n*d+t*S*d+h*n*u-t*m*u)*C,e[10]=(a*S*o-v*s*o+v*n*c-t*S*c-a*n*u+t*s*u)*C,e[11]=(h*s*o-a*m*o-h*n*c+t*m*c+a*n*d-t*s*d)*C,e[12]=F*C,e[13]=(h*S*r-v*m*r+v*n*p-t*S*p-h*n*g+t*m*g)*C,e[14]=(v*s*r-a*S*r-v*n*l+t*S*l+a*n*g-t*s*g)*C,e[15]=(a*m*r-h*s*r+h*n*l-t*m*l-a*n*p+t*s*p)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,a=e.x,s=e.y,l=e.z,c=o*a,h=o*s;return this.set(c*a+n,c*s-r*l,c*l+r*s,0,c*s+r*l,h*s+n,h*l-r*a,0,c*l-r*s,h*l+r*a,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,a){return this.set(1,n,o,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,a=t._y,s=t._z,l=t._w,c=o+o,h=a+a,m=s+s,p=o*c,d=o*h,v=o*m,S=a*h,g=a*m,u=s*m,w=l*c,b=l*h,y=l*m,F=n.x,D=n.y,C=n.z;return r[0]=(1-(S+u))*F,r[1]=(d+y)*F,r[2]=(v-b)*F,r[3]=0,r[4]=(d-y)*D,r[5]=(1-(p+u))*D,r[6]=(g+w)*D,r[7]=0,r[8]=(v+b)*C,r[9]=(g-w)*C,r[10]=(1-(p+S))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=Ei.set(r[0],r[1],r[2]).length();const a=Ei.set(r[4],r[5],r[6]).length(),s=Ei.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],nn.copy(this);const c=1/o,h=1/a,m=1/s;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=m,nn.elements[9]*=m,nn.elements[10]*=m,t.setFromRotationMatrix(nn),n.x=o,n.y=a,n.z=s,this}makePerspective(e,t,n,r,o,a,s=Cn){const l=this.elements,c=2*o/(t-e),h=2*o/(n-r),m=(t+e)/(t-e),p=(n+r)/(n-r);let d,v;if(s===Cn)d=-(a+o)/(a-o),v=-2*a*o/(a-o);else if(s===ho)d=-a/(a-o),v=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,a,s=Cn){const l=this.elements,c=1/(t-e),h=1/(n-r),m=1/(a-o),p=(t+e)*c,d=(n+r)*h;let v,S;if(s===Cn)v=(a+o)*m,S=-2*m;else if(s===ho)v=o*m,S=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ei=new I,nn=new dt,Ju=new I(0,0,0),Qu=new I(1,1,1),On=new I,Ur=new I,Gt=new I,Us=new dt,Fs=new ui;class Un{constructor(e=0,t=0,n=0,r=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],a=r[4],s=r[8],l=r[1],c=r[5],h=r[9],m=r[2],p=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Be(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(Be(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-m,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(s,d));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Us.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Us,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fs.setFromEuler(this),this.setFromQuaternion(Fs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class tc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eh=0;const Is=new I,Ti=new ui,xn=new dt,Fr=new I,ir=new I,th=new I,nh=new ui,Ns=new I(1,0,0),Os=new I(0,1,0),Bs=new I(0,0,1),zs={type:"added"},ih={type:"removed"},bi={type:"childadded",child:null},Oo={type:"childremoved",child:null};class Bt extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new I,t=new Un,n=new ui,r=new I(1,1,1);function o(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ie}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(Ns,e)}rotateY(e){return this.rotateOnAxis(Os,e)}rotateZ(e){return this.rotateOnAxis(Bs,e)}translateOnAxis(e,t){return Is.copy(e).applyQuaternion(this.quaternion),this.position.add(Is.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ns,e)}translateY(e){return this.translateOnAxis(Os,e)}translateZ(e){return this.translateOnAxis(Bs,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fr.copy(e):Fr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(ir,Fr,this.up):xn.lookAt(Fr,ir,this.up),this.quaternion.setFromRotationMatrix(xn),r&&(xn.extractRotation(r.matrixWorld),Ti.setFromRotationMatrix(xn),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zs),bi.child=e,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ih),Oo.child=e,this.dispatchEvent(Oo),Oo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zs),bi.child=e,this.dispatchEvent(bi),bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,th),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,nh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const m=l[c];o(e.shapes,m)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(o(e.materials,this.material[l]));r.material=s}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(o(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),m=a(e.shapes),p=a(e.skeletons),d=a(e.animations),v=a(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(s){const l=[];for(const c in s){const h=s[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Bt.DEFAULT_UP=new I(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new I,Sn=new I,Bo=new I,Mn=new I,wi=new I,Ai=new I,Vs=new I,zo=new I,Vo=new I,Ho=new I,Go=new ht,ko=new ht,Wo=new ht;class on{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),rn.subVectors(e,t),r.cross(rn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){rn.subVectors(r,t),Sn.subVectors(n,t),Bo.subVectors(e,t);const a=rn.dot(rn),s=rn.dot(Sn),l=rn.dot(Bo),c=Sn.dot(Sn),h=Sn.dot(Bo),m=a*c-s*s;if(m===0)return o.set(0,0,0),null;const p=1/m,d=(c*l-s*h)*p,v=(a*h-s*l)*p;return o.set(1-d-v,v,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(e,t,n,r,o,a,s,l){return this.getBarycoord(e,t,n,r,Mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Mn.x),l.addScaledVector(a,Mn.y),l.addScaledVector(s,Mn.z),l)}static getInterpolatedAttribute(e,t,n,r,o,a){return Go.setScalar(0),ko.setScalar(0),Wo.setScalar(0),Go.fromBufferAttribute(e,t),ko.fromBufferAttribute(e,n),Wo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Go,o.x),a.addScaledVector(ko,o.y),a.addScaledVector(Wo,o.z),a}static isFrontFacing(e,t,n,r){return rn.subVectors(n,t),Sn.subVectors(e,t),rn.cross(Sn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),rn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return on.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let a,s;wi.subVectors(r,n),Ai.subVectors(o,n),zo.subVectors(e,n);const l=wi.dot(zo),c=Ai.dot(zo);if(l<=0&&c<=0)return t.copy(n);Vo.subVectors(e,r);const h=wi.dot(Vo),m=Ai.dot(Vo);if(h>=0&&m<=h)return t.copy(r);const p=l*m-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(wi,a);Ho.subVectors(e,o);const d=wi.dot(Ho),v=Ai.dot(Ho);if(v>=0&&d<=v)return t.copy(o);const S=d*c-l*v;if(S<=0&&c>=0&&v<=0)return s=c/(c-v),t.copy(n).addScaledVector(Ai,s);const g=h*v-d*m;if(g<=0&&m-h>=0&&d-v>=0)return Vs.subVectors(o,r),s=(m-h)/(m-h+(d-v)),t.copy(r).addScaledVector(Vs,s);const u=1/(g+S+p);return a=S*u,s=p*u,t.copy(n).addScaledVector(wi,a).addScaledVector(Ai,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function Xo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class we{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=qe.workingColorSpace){if(e=ts(e,1),t=Be(t,0,1),n=Be(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,a=2*n-o;this.r=Xo(a,o,e+1/3),this.g=Xo(a,o,e),this.b=Xo(a,o,e-1/3)}return qe.toWorkingColorSpace(this,r),this}setStyle(e,t=Wt){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=r[1],s=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=nc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return qe.fromWorkingColorSpace(At.copy(this),e),Math.round(Be(At.r*255,0,255))*65536+Math.round(Be(At.g*255,0,255))*256+Math.round(Be(At.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(At.copy(this),t);const n=At.r,r=At.g,o=At.b,a=Math.max(n,r,o),s=Math.min(n,r,o);let l,c;const h=(s+a)/2;if(s===a)l=0,c=0;else{const m=a-s;switch(c=h<=.5?m/(a+s):m/(2-a-s),a){case n:l=(r-o)/m+(r<o?6:0);break;case r:l=(o-n)/m+2;break;case o:l=(n-r)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Wt){qe.fromWorkingColorSpace(At.copy(this),e);const t=At.r,n=At.g,r=At.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(Ir);const n=cr(Bn.h,Ir.h,t),r=cr(Bn.s,Ir.s,t),o=cr(Bn.l,Ir.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new we;we.NAMES=nc;let rh=0;class Mr extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=Ni,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ra,this.blendDst=oa,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bs,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ra&&(n.blendSrc=this.blendSrc),this.blendDst!==oa&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bs&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const a=[];for(const s in o){const l=o[s];delete l.metadata,a.push(l)}return a}if(t){const o=r(e.textures),a=r(e.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class is extends Mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new I,Nr=new be;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ws,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array),o=Dt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ws&&(e.usage=this.usage),e}}class ic extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rc extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Jt extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let oh=0;const Zt=new dt,Yo=new Bt,Ci=new I,kt=new Sr,rr=new Sr,Mt=new I;class cn extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jl(e)?rc:ic)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Ie().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Yo.lookAt(e),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Jt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];kt.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const s=t[o];rr.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(kt.min,rr.min),kt.expandByPoint(Mt),Mt.addVectors(kt.max,rr.max),kt.expandByPoint(Mt)):(kt.expandByPoint(rr.min),kt.expandByPoint(rr.max))}kt.getCenter(n);let r=0;for(let o=0,a=e.count;o<a;o++)Mt.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(Mt));if(t)for(let o=0,a=t.length;o<a;o++){const s=t[o],l=this.morphTargetsRelative;for(let c=0,h=s.count;c<h;c++)Mt.fromBufferAttribute(s,c),l&&(Ci.fromBufferAttribute(e,c),Mt.add(Ci)),r=Math.max(r,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),s=[],l=[];for(let N=0;N<n.count;N++)s[N]=new I,l[N]=new I;const c=new I,h=new I,m=new I,p=new be,d=new be,v=new be,S=new I,g=new I;function u(N,E,M){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,E),m.fromBufferAttribute(n,M),p.fromBufferAttribute(o,N),d.fromBufferAttribute(o,E),v.fromBufferAttribute(o,M),h.sub(c),m.sub(c),d.sub(p),v.sub(p);const R=1/(d.x*v.y-v.x*d.y);isFinite(R)&&(S.copy(h).multiplyScalar(v.y).addScaledVector(m,-d.y).multiplyScalar(R),g.copy(m).multiplyScalar(d.x).addScaledVector(h,-v.x).multiplyScalar(R),s[N].add(S),s[E].add(S),s[M].add(S),l[N].add(g),l[E].add(g),l[M].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,E=w.length;N<E;++N){const M=w[N],R=M.start,X=M.count;for(let V=R,Z=R+X;V<Z;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const b=new I,y=new I,F=new I,D=new I;function C(N){F.fromBufferAttribute(r,N),D.copy(F);const E=s[N];b.copy(E),b.sub(F.multiplyScalar(F.dot(E))).normalize(),y.crossVectors(D,E);const R=y.dot(l[N])<0?-1:1;a.setXYZW(N,b.x,b.y,b.z,R)}for(let N=0,E=w.length;N<E;++N){const M=w[N],R=M.start,X=M.count;for(let V=R,Z=R+X;V<Z;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);const r=new I,o=new I,a=new I,s=new I,l=new I,c=new I,h=new I,m=new I;if(e)for(let p=0,d=e.count;p<d;p+=3){const v=e.getX(p+0),S=e.getX(p+1),g=e.getX(p+2);r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,S),a.fromBufferAttribute(t,g),h.subVectors(a,o),m.subVectors(r,o),h.cross(m),s.fromBufferAttribute(n,v),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,g),s.add(h),l.add(h),c.add(h),n.setXYZ(v,s.x,s.y,s.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)r.fromBufferAttribute(t,p+0),o.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,o),m.subVectors(r,o),h.cross(m),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(s,l){const c=s.array,h=s.itemSize,m=s.normalized,p=new c.constructor(l.length*h);let d=0,v=0;for(let S=0,g=l.length;S<g;S++){s.isInterleavedBufferAttribute?d=l[S]*s.data.stride+s.offset:d=l[S]*h;for(let u=0;u<h;u++)p[v++]=c[d++]}return new zt(p,h,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,n=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,n);t.setAttribute(s,c)}const o=this.morphAttributes;for(const s in o){const l=[],c=o[s];for(let h=0,m=c.length;h<m;h++){const p=c[h],d=e(p,n);l.push(d)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let m=0,p=c.length;m<p;m++){const d=c[m];h.push(d.toJSON(e.data))}h.length>0&&(r[l]=h,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const o=e.morphAttributes;for(const c in o){const h=[],m=o[c];for(let p=0,d=m.length;p<d;p++)h.push(m[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hs=new dt,$n=new ns,Or=new xo,Gs=new I,Br=new I,zr=new I,Vr=new I,qo=new I,Hr=new I,ks=new I,Gr=new I;class Nt extends Bt{constructor(e=new cn,t=new is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(o&&s){Hr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=s[l],m=o[l];h!==0&&(qo.fromBufferAttribute(m,e),a?Hr.addScaledVector(qo,h):Hr.addScaledVector(qo.sub(t),h))}t.add(Hr)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(o),$n.copy(e.ray).recast(e.near),!(Or.containsPoint($n.origin)===!1&&($n.intersectSphere(Or,Gs)===null||$n.origin.distanceToSquared(Gs)>(e.far-e.near)**2))&&(Hs.copy(o).invert(),$n.copy(e.ray).applyMatrix4(Hs),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,n){let r;const o=this.geometry,a=this.material,s=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,m=o.attributes.normal,p=o.groups,d=o.drawRange;if(s!==null)if(Array.isArray(a))for(let v=0,S=p.length;v<S;v++){const g=p[v],u=a[g.materialIndex],w=Math.max(g.start,d.start),b=Math.min(s.count,Math.min(g.start+g.count,d.start+d.count));for(let y=w,F=b;y<F;y+=3){const D=s.getX(y),C=s.getX(y+1),N=s.getX(y+2);r=kr(this,u,e,n,c,h,m,D,C,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,d.start),S=Math.min(s.count,d.start+d.count);for(let g=v,u=S;g<u;g+=3){const w=s.getX(g),b=s.getX(g+1),y=s.getX(g+2);r=kr(this,a,e,n,c,h,m,w,b,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,S=p.length;v<S;v++){const g=p[v],u=a[g.materialIndex],w=Math.max(g.start,d.start),b=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=w,F=b;y<F;y+=3){const D=y,C=y+1,N=y+2;r=kr(this,u,e,n,c,h,m,D,C,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let g=v,u=S;g<u;g+=3){const w=g,b=g+1,y=g+2;r=kr(this,a,e,n,c,h,m,w,b,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function ah(i,e,t,n,r,o,a,s){let l;if(e.side===Lt?l=n.intersectTriangle(a,o,r,!0,s):l=n.intersectTriangle(r,o,a,e.side===Ln,s),l===null)return null;Gr.copy(s),Gr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Gr);return c<t.near||c>t.far?null:{distance:c,point:Gr.clone(),object:i}}function kr(i,e,t,n,r,o,a,s,l,c){i.getVertexPosition(s,Br),i.getVertexPosition(l,zr),i.getVertexPosition(c,Vr);const h=ah(i,e,t,n,Br,zr,Vr,ks);if(h){const m=new I;on.getBarycoord(ks,Br,zr,Vr,m),r&&(h.uv=on.getInterpolatedAttribute(r,s,l,c,m,new be)),o&&(h.uv1=on.getInterpolatedAttribute(o,s,l,c,m,new be)),a&&(h.normal=on.getInterpolatedAttribute(a,s,l,c,m,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:s,b:l,c,normal:new I,materialIndex:0};on.getNormal(Br,zr,Vr,p.normal),h.face=p,h.barycoord=m}return h}class yr extends cn{constructor(e=1,t=1,n=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:a};const s=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],h=[],m=[];let p=0,d=0;v("z","y","x",-1,-1,n,t,e,a,o,0),v("z","y","x",1,-1,n,t,-e,a,o,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,o,4),v("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(m,2));function v(S,g,u,w,b,y,F,D,C,N,E){const M=y/C,R=F/N,X=y/2,V=F/2,Z=D/2,$=C+1,q=N+1;let Q=0,G=0;const ae=new I;for(let de=0;de<q;de++){const ye=de*R-V;for(let ze=0;ze<$;ze++){const tt=ze*M-X;ae[S]=tt*w,ae[g]=ye*b,ae[u]=Z,c.push(ae.x,ae.y,ae.z),ae[S]=0,ae[g]=0,ae[u]=D>0?1:-1,h.push(ae.x,ae.y,ae.z),m.push(ze/C),m.push(1-de/N),Q+=1}}for(let de=0;de<N;de++)for(let ye=0;ye<C;ye++){const ze=p+ye+$*de,tt=p+ye+$*(de+1),Y=p+(ye+1)+$*(de+1),ne=p+(ye+1)+$*de;l.push(ze,tt,ne),l.push(tt,Y,ne),G+=6}s.addGroup(d,G,E),d+=G,p+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Pt(i){const e={};for(let t=0;t<i.length;t++){const n=Wi(i[t]);for(const r in n)e[r]=n[r]}return e}function sh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function oc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const gr={clone:Wi,merge:Pt};var lh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ch=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gt extends Mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lh,this.fragmentShader=ch,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=sh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ac extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new I,Ws=new be,Xs=new be;class $t extends ac{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,Ws,Xs),t.subVectors(Xs,Ws)}setViewOffset(e,t,n,r,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ri=-90,Di=1;class uh extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(Ri,Di,e,t);r.layers=this.layers,this.add(r);const o=new $t(Ri,Di,e,t);o.layers=this.layers,this.add(o);const a=new $t(Ri,Di,e,t);a.layers=this.layers,this.add(a);const s=new $t(Ri,Di,e,t);s.layers=this.layers,this.add(s);const l=new $t(Ri,Di,e,t);l.layers=this.layers,this.add(l);const c=new $t(Ri,Di,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,a,s,l]=t;for(const c of t)this.remove(c);if(e===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,s,l,c,h]=this.children,m=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,s),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(m,p,d),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class sc extends Ot{constructor(e,t,n,r,o,a,s,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Vi,super(e,t,n,r,o,a,s,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hh extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new sc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new yr(5,5,5),o=new gt({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:Dn});o.uniforms.tEquirect.value=t;const a=new Nt(r,o),s=t.minFilter;return t.minFilter===oi&&(t.minFilter=It),new uh(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(o)}}class rs{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new we(e),this.density=t}clone(){return new rs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class os extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const jo=new I,dh=new I,fh=new Ie;class Vn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=jo.subVectors(n,t).cross(dh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(jo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fh.getNormalMatrix(e),r=this.coplanarPoint(jo).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new xo,Wr=new I;class lc{constructor(e=new Vn,t=new Vn,n=new Vn,r=new Vn,o=new Vn,a=new Vn){this.planes=[e,t,n,r,o,a]}set(e,t,n,r,o,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(r),s[4].copy(o),s[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Cn){const n=this.planes,r=e.elements,o=r[0],a=r[1],s=r[2],l=r[3],c=r[4],h=r[5],m=r[6],p=r[7],d=r[8],v=r[9],S=r[10],g=r[11],u=r[12],w=r[13],b=r[14],y=r[15];if(n[0].setComponents(l-o,p-c,g-d,y-u).normalize(),n[1].setComponents(l+o,p+c,g+d,y+u).normalize(),n[2].setComponents(l+a,p+h,g+v,y+w).normalize(),n[3].setComponents(l-a,p-h,g-v,y-w).normalize(),n[4].setComponents(l-s,p-m,g-S,y-b).normalize(),t===Cn)n[5].setComponents(l+s,p+m,g+S,y+b).normalize();else if(t===ho)n[5].setComponents(s,m,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Wr.x=r.normal.x>0?e.max.x:e.min.x,Wr.y=r.normal.y>0?e.max.y:e.min.y,Wr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ph extends Mr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ys=new dt,Ha=new ns,Xr=new xo,Yr=new I;class mh extends Bt{constructor(e=new cn,t=new ph){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(r),Xr.radius+=o,e.ray.intersectsSphere(Xr)===!1)return;Ys.copy(r).invert(),Ha.copy(e.ray).applyMatrix4(Ys);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=n.index,m=n.attributes.position;if(c!==null){const p=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let v=p,S=d;v<S;v++){const g=c.getX(v);Yr.fromBufferAttribute(m,g),qs(Yr,g,l,r,e,t,this)}}else{const p=Math.max(0,a.start),d=Math.min(m.count,a.start+a.count);for(let v=p,S=d;v<S;v++)Yr.fromBufferAttribute(m,v),qs(Yr,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}function qs(i,e,t,n,r,o,a){const s=Ha.distanceSqToPoint(i);if(s<t){const l=new I;Ha.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ar extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class cc extends Ot{constructor(e,t,n,r,o,a,s,l,c,h=Oi){if(h!==Oi&&h!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Oi&&(n=li),n===void 0&&h===ki&&(n=Gi),super(null,r,o,a,s,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ki extends cn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,a=t/2,s=Math.floor(n),l=Math.floor(r),c=s+1,h=l+1,m=e/s,p=t/l,d=[],v=[],S=[],g=[];for(let u=0;u<h;u++){const w=u*p-a;for(let b=0;b<c;b++){const y=b*m-o;v.push(y,-w,0),S.push(0,0,1),g.push(b/s),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let w=0;w<s;w++){const b=w+c*u,y=w+c*(u+1),F=w+1+c*(u+1),D=w+1+c*u;d.push(b,y,D),d.push(y,F,D)}this.setIndex(d),this.setAttribute("position",new Jt(v,3)),this.setAttribute("normal",new Jt(S,3)),this.setAttribute("uv",new Jt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.width,e.height,e.widthSegments,e.heightSegments)}}class So extends cn{constructor(e=1,t=32,n=16,r=0,o=Math.PI*2,a=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:o,thetaStart:a,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+s,Math.PI);let c=0;const h=[],m=new I,p=new I,d=[],v=[],S=[],g=[];for(let u=0;u<=n;u++){const w=[],b=u/n;let y=0;u===0&&a===0?y=.5/t:u===n&&l===Math.PI&&(y=-.5/t);for(let F=0;F<=t;F++){const D=F/t;m.x=-e*Math.cos(r+D*o)*Math.sin(a+b*s),m.y=e*Math.cos(a+b*s),m.z=e*Math.sin(r+D*o)*Math.sin(a+b*s),v.push(m.x,m.y,m.z),p.copy(m).normalize(),S.push(p.x,p.y,p.z),g.push(D+y,1-b),w.push(c++)}h.push(w)}for(let u=0;u<n;u++)for(let w=0;w<t;w++){const b=h[u][w+1],y=h[u][w],F=h[u+1][w],D=h[u+1][w+1];(u!==0||a>0)&&d.push(b,y,D),(u!==n-1||l<Math.PI)&&d.push(y,F,D)}this.setIndex(d),this.setAttribute("position",new Jt(v,3)),this.setAttribute("normal",new Jt(S,3)),this.setAttribute("uv",new Jt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gh extends gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vh extends Mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _h extends Mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Mo extends ac{constructor(e=-1,t=1,n=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,a=n+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,s-=h*this.view.offsetY,l=s-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class xh extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=js(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=js();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function js(){return performance.now()}class Ks{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Be(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Mh extends di{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Zs(i,e,t,n){const r=yh(n);switch(t){case Wl:return i*e;case Yl:return i*e;case ql:return i*e*2;case jl:return i*e/r.components*r.byteLength;case Ja:return i*e/r.components*r.byteLength;case Kl:return i*e*2/r.components*r.byteLength;case Qa:return i*e*2/r.components*r.byteLength;case Xl:return i*e*3/r.components*r.byteLength;case Xt:return i*e*4/r.components*r.byteLength;case es:return i*e*4/r.components*r.byteLength;case Jr:case Qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case eo:case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ga:case _a:return Math.max(i,16)*Math.max(e,8)/4;case ma:case va:return Math.max(i,8)*Math.max(e,8)/2;case xa:case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case La:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ia:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case no:case Na:case Oa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zl:case Ba:return Math.ceil(i/4)*Math.ceil(e/4)*8;case za:case Va:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yh(i){switch(i){case ln:case Hl:return{byteLength:1,components:1};case pr:case Gl:case dn:return{byteLength:2,components:1};case Za:case $a:return{byteLength:2,components:4};case li:case Ka:case An:return{byteLength:4,components:1};case kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function uc(){let i=null,e=!1,t=null,n=null;function r(o,a){t(o,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Eh(i){const e=new WeakMap;function t(s,l){const c=s.array,h=s.usage,m=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),s.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:m}}function n(s,l,c){const h=l.array,m=l.updateRanges;if(i.bindBuffer(c,s),m.length===0)i.bufferSubData(c,0,h);else{m.sort((d,v)=>d.start-v.start);let p=0;for(let d=1;d<m.length;d++){const v=m[p],S=m[d];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++p,m[p]=S)}m.length=p+1;for(let d=0,v=m.length;d<v;d++){const S=m[d];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function o(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(i.deleteBuffer(l.buffer),e.delete(s))}function a(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const h=e.get(s);(!h||h.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const c=e.get(s);if(c===void 0)e.set(s,t(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,s,l),c.version=s.version}}return{get:r,remove:o,update:a}}var Th=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ch=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ph=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Uh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ih=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Oh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$h=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",td=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,id=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,od=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ld=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,md=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_d=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Md=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ed=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Td=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ad=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ud=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Id=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Od=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$d=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ef=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,of=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,af=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,df=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ff=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_f=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ef=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Uf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,If=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$f=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ep=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,np=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ip=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:Th,alphahash_pars_fragment:bh,alphamap_fragment:wh,alphamap_pars_fragment:Ah,alphatest_fragment:Ch,alphatest_pars_fragment:Rh,aomap_fragment:Dh,aomap_pars_fragment:Ph,batching_pars_vertex:Lh,batching_vertex:Uh,begin_vertex:Fh,beginnormal_vertex:Ih,bsdfs:Nh,iridescence_fragment:Oh,bumpmap_pars_fragment:Bh,clipping_planes_fragment:zh,clipping_planes_pars_fragment:Vh,clipping_planes_pars_vertex:Hh,clipping_planes_vertex:Gh,color_fragment:kh,color_pars_fragment:Wh,color_pars_vertex:Xh,color_vertex:Yh,common:qh,cube_uv_reflection_fragment:jh,defaultnormal_vertex:Kh,displacementmap_pars_vertex:Zh,displacementmap_vertex:$h,emissivemap_fragment:Jh,emissivemap_pars_fragment:Qh,colorspace_fragment:ed,colorspace_pars_fragment:td,envmap_fragment:nd,envmap_common_pars_fragment:id,envmap_pars_fragment:rd,envmap_pars_vertex:od,envmap_physical_pars_fragment:gd,envmap_vertex:ad,fog_vertex:sd,fog_pars_vertex:ld,fog_fragment:cd,fog_pars_fragment:ud,gradientmap_pars_fragment:hd,lightmap_pars_fragment:dd,lights_lambert_fragment:fd,lights_lambert_pars_fragment:pd,lights_pars_begin:md,lights_toon_fragment:vd,lights_toon_pars_fragment:_d,lights_phong_fragment:xd,lights_phong_pars_fragment:Sd,lights_physical_fragment:Md,lights_physical_pars_fragment:yd,lights_fragment_begin:Ed,lights_fragment_maps:Td,lights_fragment_end:bd,logdepthbuf_fragment:wd,logdepthbuf_pars_fragment:Ad,logdepthbuf_pars_vertex:Cd,logdepthbuf_vertex:Rd,map_fragment:Dd,map_pars_fragment:Pd,map_particle_fragment:Ld,map_particle_pars_fragment:Ud,metalnessmap_fragment:Fd,metalnessmap_pars_fragment:Id,morphinstance_vertex:Nd,morphcolor_vertex:Od,morphnormal_vertex:Bd,morphtarget_pars_vertex:zd,morphtarget_vertex:Vd,normal_fragment_begin:Hd,normal_fragment_maps:Gd,normal_pars_fragment:kd,normal_pars_vertex:Wd,normal_vertex:Xd,normalmap_pars_fragment:Yd,clearcoat_normal_fragment_begin:qd,clearcoat_normal_fragment_maps:jd,clearcoat_pars_fragment:Kd,iridescence_pars_fragment:Zd,opaque_fragment:$d,packing:Jd,premultiplied_alpha_fragment:Qd,project_vertex:ef,dithering_fragment:tf,dithering_pars_fragment:nf,roughnessmap_fragment:rf,roughnessmap_pars_fragment:of,shadowmap_pars_fragment:af,shadowmap_pars_vertex:sf,shadowmap_vertex:lf,shadowmask_pars_fragment:cf,skinbase_vertex:uf,skinning_pars_vertex:hf,skinning_vertex:df,skinnormal_vertex:ff,specularmap_fragment:pf,specularmap_pars_fragment:mf,tonemapping_fragment:gf,tonemapping_pars_fragment:vf,transmission_fragment:_f,transmission_pars_fragment:xf,uv_pars_fragment:Sf,uv_pars_vertex:Mf,uv_vertex:yf,worldpos_vertex:Ef,background_vert:Tf,background_frag:bf,backgroundCube_vert:wf,backgroundCube_frag:Af,cube_vert:Cf,cube_frag:Rf,depth_vert:Df,depth_frag:Pf,distanceRGBA_vert:Lf,distanceRGBA_frag:Uf,equirect_vert:Ff,equirect_frag:If,linedashed_vert:Nf,linedashed_frag:Of,meshbasic_vert:Bf,meshbasic_frag:zf,meshlambert_vert:Vf,meshlambert_frag:Hf,meshmatcap_vert:Gf,meshmatcap_frag:kf,meshnormal_vert:Wf,meshnormal_frag:Xf,meshphong_vert:Yf,meshphong_frag:qf,meshphysical_vert:jf,meshphysical_frag:Kf,meshtoon_vert:Zf,meshtoon_frag:$f,points_vert:Jf,points_frag:Qf,shadow_vert:ep,shadow_frag:tp,sprite_vert:np,sprite_frag:ip},ie={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},hn={basic:{uniforms:Pt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Pt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new we(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Pt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Pt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Pt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new we(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Pt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Pt([ie.points,ie.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Pt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Pt([ie.common,ie.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Pt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Pt([ie.sprite,ie.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Pt([ie.common,ie.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Pt([ie.lights,ie.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};hn.physical={uniforms:Pt([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const qr={r:0,b:0,g:0},Qn=new Un,rp=new dt;function op(i,e,t,n,r,o,a){const s=new we(0);let l=o===!0?0:1,c,h,m=null,p=0,d=null;function v(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function S(b){let y=!1;const F=v(b);F===null?u(s,l):F&&F.isColor&&(u(F,1),y=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,y){const F=v(y);F&&(F.isCubeTexture||F.mapping===_o)?(h===void 0&&(h=new Nt(new yr(1,1,1),new gt({name:"BackgroundCubeMaterial",uniforms:Wi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Qn.copy(y.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),h.material.uniforms.envMap.value=F,h.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rp.makeRotationFromEuler(Qn)),h.material.toneMapped=qe.getTransfer(F.colorSpace)!==Qe,(m!==F||p!==F.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,m=F,p=F.version,d=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):F&&F.isTexture&&(c===void 0&&(c=new Nt(new Ki(2,2),new gt({name:"BackgroundMaterial",uniforms:Wi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=F,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=qe.getTransfer(F.colorSpace)!==Qe,F.matrixAutoUpdate===!0&&F.updateMatrix(),c.material.uniforms.uvTransform.value.copy(F.matrix),(m!==F||p!==F.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,m=F,p=F.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function u(b,y){b.getRGB(qr,oc(i)),n.buffers.color.setClear(qr.r,qr.g,qr.b,y,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return s},setClearColor:function(b,y=1){s.set(b),l=y,u(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,u(s,l)},render:S,addToRenderList:g,dispose:w}}function ap(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let o=r,a=!1;function s(M,R,X,V,Z){let $=!1;const q=m(V,X,R);o!==q&&(o=q,c(o.object)),$=d(M,V,X,Z),$&&v(M,V,X,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,y(M,R,X,V),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function m(M,R,X){const V=X.wireframe===!0;let Z=n[M.id];Z===void 0&&(Z={},n[M.id]=Z);let $=Z[R.id];$===void 0&&($={},Z[R.id]=$);let q=$[V];return q===void 0&&(q=p(l()),$[V]=q),q}function p(M){const R=[],X=[],V=[];for(let Z=0;Z<t;Z++)R[Z]=0,X[Z]=0,V[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:X,attributeDivisors:V,object:M,attributes:{},index:null}}function d(M,R,X,V){const Z=o.attributes,$=R.attributes;let q=0;const Q=X.getAttributes();for(const G in Q)if(Q[G].location>=0){const de=Z[G];let ye=$[G];if(ye===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),de===void 0||de.attribute!==ye||ye&&de.data!==ye.data)return!0;q++}return o.attributesNum!==q||o.index!==V}function v(M,R,X,V){const Z={},$=R.attributes;let q=0;const Q=X.getAttributes();for(const G in Q)if(Q[G].location>=0){let de=$[G];de===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(de=M.instanceColor));const ye={};ye.attribute=de,de&&de.data&&(ye.data=de.data),Z[G]=ye,q++}o.attributes=Z,o.attributesNum=q,o.index=V}function S(){const M=o.newAttributes;for(let R=0,X=M.length;R<X;R++)M[R]=0}function g(M){u(M,0)}function u(M,R){const X=o.newAttributes,V=o.enabledAttributes,Z=o.attributeDivisors;X[M]=1,V[M]===0&&(i.enableVertexAttribArray(M),V[M]=1),Z[M]!==R&&(i.vertexAttribDivisor(M,R),Z[M]=R)}function w(){const M=o.newAttributes,R=o.enabledAttributes;for(let X=0,V=R.length;X<V;X++)R[X]!==M[X]&&(i.disableVertexAttribArray(X),R[X]=0)}function b(M,R,X,V,Z,$,q){q===!0?i.vertexAttribIPointer(M,R,X,Z,$):i.vertexAttribPointer(M,R,X,V,Z,$)}function y(M,R,X,V){S();const Z=V.attributes,$=X.getAttributes(),q=R.defaultAttributeValues;for(const Q in $){const G=$[Q];if(G.location>=0){let ae=Z[Q];if(ae===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ae!==void 0){const de=ae.normalized,ye=ae.itemSize,ze=e.get(ae);if(ze===void 0)continue;const tt=ze.buffer,Y=ze.type,ne=ze.bytesPerElement,_e=Y===i.INT||Y===i.UNSIGNED_INT||ae.gpuType===Ka;if(ae.isInterleavedBufferAttribute){const se=ae.data,Re=se.stride,Le=ae.offset;if(se.isInstancedInterleavedBuffer){for(let Ve=0;Ve<G.locationSize;Ve++)u(G.location+Ve,se.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ve=0;Ve<G.locationSize;Ve++)g(G.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let Ve=0;Ve<G.locationSize;Ve++)b(G.location+Ve,ye/G.locationSize,Y,de,Re*ne,(Le+ye/G.locationSize*Ve)*ne,_e)}else{if(ae.isInstancedBufferAttribute){for(let se=0;se<G.locationSize;se++)u(G.location+se,ae.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let se=0;se<G.locationSize;se++)g(G.location+se);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let se=0;se<G.locationSize;se++)b(G.location+se,ye/G.locationSize,Y,de,ye*ne,ye/G.locationSize*se*ne,_e)}}else if(q!==void 0){const de=q[Q];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(G.location,de);break;case 3:i.vertexAttrib3fv(G.location,de);break;case 4:i.vertexAttrib4fv(G.location,de);break;default:i.vertexAttrib1fv(G.location,de)}}}}w()}function F(){N();for(const M in n){const R=n[M];for(const X in R){const V=R[X];for(const Z in V)h(V[Z].object),delete V[Z];delete R[X]}delete n[M]}}function D(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const X in R){const V=R[X];for(const Z in V)h(V[Z].object),delete V[Z];delete R[X]}delete n[M.id]}function C(M){for(const R in n){const X=n[R];if(X[M.id]===void 0)continue;const V=X[M.id];for(const Z in V)h(V[Z].object),delete V[Z];delete X[M.id]}}function N(){E(),a=!0,o!==r&&(o=r,c(o.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:N,resetDefaultState:E,dispose:F,releaseStatesOfGeometry:D,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:g,disableUnusedAttributes:w}}function sp(i,e,t){let n;function r(c){n=c}function o(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,m){m!==0&&(i.drawArraysInstanced(n,c,h,m),t.update(h,n,m))}function s(c,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,m);let d=0;for(let v=0;v<m;v++)d+=h[v];t.update(d,n,1)}function l(c,h,m,p){if(m===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<c.length;v++)a(c[v],h[v],p[v]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,m);let v=0;for(let S=0;S<m;S++)v+=h[S]*p[S];t.update(v,n,1)}}this.setMode=r,this.render=o,this.renderInstances=a,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function lp(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Xt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(C){const N=C===dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ln&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==An&&!N)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const m=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=v>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:m,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:F,maxSamples:D}}function cp(i){const e=this;let t=null,n=0,r=!1,o=!1;const a=new Vn,s=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,p){const d=m.length!==0||p||n!==0||r;return r=p,n=m.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,p){t=h(m,p,0)},this.setState=function(m,p,d){const v=m.clippingPlanes,S=m.clipIntersection,g=m.clipShadows,u=i.get(m);if(!r||v===null||v.length===0||o&&!g)o?h(null):c();else{const w=o?0:n,b=w*4;let y=u.clippingState||null;l.value=y,y=h(v,p,b,d);for(let F=0;F!==b;++F)y[F]=t[F];u.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(m,p,d,v){const S=m!==null?m.length:0;let g=null;if(S!==0){if(g=l.value,v!==!0||g===null){const u=d+S*4,w=p.matrixWorldInverse;s.getNormalMatrix(w),(g===null||g.length<u)&&(g=new Float32Array(u));for(let b=0,y=d;b!==S;++b,y+=4)a.copy(m[b]).applyMatrix4(w,s),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function up(i){let e=new WeakMap;function t(a,s){return s===fa?a.mapping=Vi:s===pa&&(a.mapping=Hi),a}function n(a){if(a&&a.isTexture){const s=a.mapping;if(s===fa||s===pa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new hh(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const s=a.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const Ii=4,$s=[.125,.215,.35,.446,.526,.582],ri=20,Ko=new Mo,Js=new we;let Zo=null,$o=0,Jo=0,Qo=!1;const ni=(1+Math.sqrt(5))/2,Pi=1/ni,Qs=[new I(-ni,Pi,0),new I(ni,Pi,0),new I(-Pi,0,ni),new I(Pi,0,ni),new I(0,ni,-Pi),new I(0,ni,Pi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class el{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Zo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zo,$o,Jo),this._renderer.xr.enabled=Qo,e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vi||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:dn,format:Xt,colorSpace:ci,depthBuffer:!1},r=tl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tl(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hp(o)),this._blurMaterial=dp(o,e,t)}return r}_compileMaterial(e){const t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,Ko)}_sceneToCubeUV(e,t,n,r){const s=new $t(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,p=h.toneMapping;h.getClearColor(Js),h.toneMapping=kn,h.autoClear=!1;const d=new is({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),v=new Nt(new yr,d);let S=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,S=!0):(d.color.copy(Js),S=!0);for(let u=0;u<6;u++){const w=u%3;w===0?(s.up.set(0,l[u],0),s.lookAt(c[u],0,0)):w===1?(s.up.set(0,0,l[u]),s.lookAt(0,c[u],0)):(s.up.set(0,l[u],0),s.lookAt(0,0,c[u]));const b=this._cubeSize;jr(r,w*b,u>2?b:0,b,b),h.setRenderTarget(r),S&&h.render(v,s),h.render(e,s)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=p,h.autoClear=m,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Vi||e.mapping===Hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=il()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nl());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new Nt(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=e;const l=this._cubeSize;jr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ko)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),s=Qs[(r-o-1)%Qs.length];this._blur(e,o-1,o,a,s)}t.autoClear=n}_blur(e,t,n,r,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",o),this._halfBlur(a,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,m=new Nt(this._lodPlanes[r],c),p=c.uniforms,d=this._sizeLods[n]-1,v=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*ri-1),S=o/v,g=isFinite(o)?1+Math.floor(h*S):ri;g>ri&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ri}`);const u=[];let w=0;for(let C=0;C<ri;++C){const N=C/S,E=Math.exp(-N*N/2);u.push(E),C===0?w+=E:C<g&&(w+=2*E)}for(let C=0;C<u.length;C++)u[C]=u[C]/w;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=u,p.latitudinal.value=a==="latitudinal",s&&(p.poleAxis.value=s);const{_lodMax:b}=this;p.dTheta.value=v,p.mipInt.value=b-n;const y=this._sizeLods[r],F=3*y*(r>b-Ii?r-b+Ii:0),D=4*(this._cubeSize-y);jr(t,F,D,3*y,2*y),l.setRenderTarget(t),l.render(m,Ko)}}function hp(i){const e=[],t=[],n=[];let r=i;const o=i-Ii+1+$s.length;for(let a=0;a<o;a++){const s=Math.pow(2,r);t.push(s);let l=1/s;a>i-Ii?l=$s[a-i+Ii-1]:a===0&&(l=0),n.push(l);const c=1/(s-2),h=-c,m=1+c,p=[h,h,m,h,m,m,h,h,m,m,h,m],d=6,v=6,S=3,g=2,u=1,w=new Float32Array(S*v*d),b=new Float32Array(g*v*d),y=new Float32Array(u*v*d);for(let D=0;D<d;D++){const C=D%3*2/3-1,N=D>2?0:-1,E=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];w.set(E,S*v*D),b.set(p,g*v*D);const M=[D,D,D,D,D,D];y.set(M,u*v*D)}const F=new cn;F.setAttribute("position",new zt(w,S)),F.setAttribute("uv",new zt(b,g)),F.setAttribute("faceIndex",new zt(y,u)),e.push(F),r>Ii&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function tl(i,e,t){const n=new Yt(i,e,t);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function dp(i,e,t){const n=new Float32Array(ri),r=new I(0,1,0);return new gt({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:as(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function nl(){return new gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:as(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function il(){return new gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:as(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function as(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fp(i){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===fa||l===pa,h=l===Vi||l===Hi;if(c||h){let m=e.get(s);const p=m!==void 0?m.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==p)return t===null&&(t=new el(i)),m=c?t.fromEquirectangular(s,m):t.fromCubemap(s,m),m.texture.pmremVersion=s.pmremVersion,e.set(s,m),m.texture;if(m!==void 0)return m.texture;{const d=s.image;return c&&d&&d.height>0||h&&d&&r(d)?(t===null&&(t=new el(i)),m=c?t.fromEquirectangular(s):t.fromCubemap(s),m.texture.pmremVersion=s.pmremVersion,e.set(s,m),s.addEventListener("dispose",o),m.texture):null}}}return s}function r(s){let l=0;const c=6;for(let h=0;h<c;h++)s[h]!==void 0&&l++;return l===c}function o(s){const l=s.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function pp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ui("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function mp(i,e,t,n){const r={},o=new WeakMap;function a(m){const p=m.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);p.removeEventListener("dispose",a),delete r[p.id];const d=o.get(p);d&&(e.remove(d),o.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function s(m,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,t.memory.geometries++),p}function l(m){const p=m.attributes;for(const d in p)e.update(p[d],i.ARRAY_BUFFER)}function c(m){const p=[],d=m.index,v=m.attributes.position;let S=0;if(d!==null){const w=d.array;S=d.version;for(let b=0,y=w.length;b<y;b+=3){const F=w[b+0],D=w[b+1],C=w[b+2];p.push(F,D,D,C,C,F)}}else if(v!==void 0){const w=v.array;S=v.version;for(let b=0,y=w.length/3-1;b<y;b+=3){const F=b+0,D=b+1,C=b+2;p.push(F,D,D,C,C,F)}}else return;const g=new(Jl(p)?rc:ic)(p,1);g.version=S;const u=o.get(m);u&&e.remove(u),o.set(m,g)}function h(m){const p=o.get(m);if(p){const d=m.index;d!==null&&p.version<d.version&&c(m)}else c(m);return o.get(m)}return{get:s,update:l,getWireframeAttribute:h}}function gp(i,e,t){let n;function r(p){n=p}let o,a;function s(p){o=p.type,a=p.bytesPerElement}function l(p,d){i.drawElements(n,d,o,p*a),t.update(d,n,1)}function c(p,d,v){v!==0&&(i.drawElementsInstanced(n,d,o,p*a,v),t.update(d,n,v))}function h(p,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,p,0,v);let g=0;for(let u=0;u<v;u++)g+=d[u];t.update(g,n,1)}function m(p,d,v,S){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<p.length;u++)c(p[u]/a,d[u],S[u]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,o,p,0,S,0,v);let u=0;for(let w=0;w<v;w++)u+=d[w]*S[w];t.update(u,n,1)}}this.setMode=r,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function vp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,s){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=s*(o/3);break;case i.LINES:t.lines+=s*(o/2);break;case i.LINE_STRIP:t.lines+=s*(o-1);break;case i.LINE_LOOP:t.lines+=s*o;break;case i.POINTS:t.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function _p(i,e,t){const n=new WeakMap,r=new ht;function o(a,s,l){const c=a.morphTargetInfluences,h=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,m=h!==void 0?h.length:0;let p=n.get(s);if(p===void 0||p.count!==m){let M=function(){N.dispose(),n.delete(s),s.removeEventListener("dispose",M)};var d=M;p!==void 0&&p.texture.dispose();const v=s.morphAttributes.position!==void 0,S=s.morphAttributes.normal!==void 0,g=s.morphAttributes.color!==void 0,u=s.morphAttributes.position||[],w=s.morphAttributes.normal||[],b=s.morphAttributes.color||[];let y=0;v===!0&&(y=1),S===!0&&(y=2),g===!0&&(y=3);let F=s.attributes.position.count*y,D=1;F>e.maxTextureSize&&(D=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const C=new Float32Array(F*D*4*m),N=new ec(C,F,D,m);N.type=An,N.needsUpdate=!0;const E=y*4;for(let R=0;R<m;R++){const X=u[R],V=w[R],Z=b[R],$=F*D*4*R;for(let q=0;q<X.count;q++){const Q=q*E;v===!0&&(r.fromBufferAttribute(X,q),C[$+Q+0]=r.x,C[$+Q+1]=r.y,C[$+Q+2]=r.z,C[$+Q+3]=0),S===!0&&(r.fromBufferAttribute(V,q),C[$+Q+4]=r.x,C[$+Q+5]=r.y,C[$+Q+6]=r.z,C[$+Q+7]=0),g===!0&&(r.fromBufferAttribute(Z,q),C[$+Q+8]=r.x,C[$+Q+9]=r.y,C[$+Q+10]=r.z,C[$+Q+11]=Z.itemSize===4?r.w:1)}}p={count:m,texture:N,size:new be(F,D)},n.set(s,p),s.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const S=s.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",S),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:o}}function xp(i,e,t,n){let r=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,m=e.get(l,h);if(r.get(m)!==c&&(e.update(m),r.set(m,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return m}function a(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}const hc=new Ot,rl=new cc(1,1),dc=new ec,fc=new Zu,pc=new sc,ol=[],al=[],sl=new Float32Array(16),ll=new Float32Array(9),cl=new Float32Array(4);function Zi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=ol[r];if(o===void 0&&(o=new Float32Array(r),ol[r]=o),e!==0){n.toArray(o,0);for(let a=1,s=0;a!==e;++a)s+=t,i[a].toArray(o,s)}return o}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yo(i,e){let t=al[e];t===void 0&&(t=new Int32Array(e),al[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Sp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function Ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function Tp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(xt(t,n))return;cl.set(n),i.uniformMatrix2fv(this.addr,!1,cl),St(t,n)}}function bp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(xt(t,n))return;ll.set(n),i.uniformMatrix3fv(this.addr,!1,ll),St(t,n)}}function wp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(xt(t,n))return;sl.set(n),i.uniformMatrix4fv(this.addr,!1,sl),St(t,n)}}function Ap(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function Rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function Dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function Pp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function Fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function Ip(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(rl.compareFunction=$l,o=rl):o=hc,t.setTexture2D(e||o,r)}function Np(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||fc,r)}function Op(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||pc,r)}function Bp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||dc,r)}function zp(i){switch(i){case 5126:return Sp;case 35664:return Mp;case 35665:return yp;case 35666:return Ep;case 35674:return Tp;case 35675:return bp;case 35676:return wp;case 5124:case 35670:return Ap;case 35667:case 35671:return Cp;case 35668:case 35672:return Rp;case 35669:case 35673:return Dp;case 5125:return Pp;case 36294:return Lp;case 36295:return Up;case 36296:return Fp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35679:case 36299:case 36307:return Np;case 35680:case 36300:case 36308:case 36293:return Op;case 36289:case 36303:case 36311:case 36292:return Bp}}function Vp(i,e){i.uniform1fv(this.addr,e)}function Hp(i,e){const t=Zi(e,this.size,2);i.uniform2fv(this.addr,t)}function Gp(i,e){const t=Zi(e,this.size,3);i.uniform3fv(this.addr,t)}function kp(i,e){const t=Zi(e,this.size,4);i.uniform4fv(this.addr,t)}function Wp(i,e){const t=Zi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xp(i,e){const t=Zi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Yp(i,e){const t=Zi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qp(i,e){i.uniform1iv(this.addr,e)}function jp(i,e){i.uniform2iv(this.addr,e)}function Kp(i,e){i.uniform3iv(this.addr,e)}function Zp(i,e){i.uniform4iv(this.addr,e)}function $p(i,e){i.uniform1uiv(this.addr,e)}function Jp(i,e){i.uniform2uiv(this.addr,e)}function Qp(i,e){i.uniform3uiv(this.addr,e)}function em(i,e){i.uniform4uiv(this.addr,e)}function tm(i,e,t){const n=this.cache,r=e.length,o=yo(t,r);xt(n,o)||(i.uniform1iv(this.addr,o),St(n,o));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||hc,o[a])}function nm(i,e,t){const n=this.cache,r=e.length,o=yo(t,r);xt(n,o)||(i.uniform1iv(this.addr,o),St(n,o));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||fc,o[a])}function im(i,e,t){const n=this.cache,r=e.length,o=yo(t,r);xt(n,o)||(i.uniform1iv(this.addr,o),St(n,o));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||pc,o[a])}function rm(i,e,t){const n=this.cache,r=e.length,o=yo(t,r);xt(n,o)||(i.uniform1iv(this.addr,o),St(n,o));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||dc,o[a])}function om(i){switch(i){case 5126:return Vp;case 35664:return Hp;case 35665:return Gp;case 35666:return kp;case 35674:return Wp;case 35675:return Xp;case 35676:return Yp;case 5124:case 35670:return qp;case 35667:case 35671:return jp;case 35668:case 35672:return Kp;case 35669:case 35673:return Zp;case 5125:return $p;case 36294:return Jp;case 36295:return Qp;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return rm}}class am{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zp(t.type)}}class sm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=om(t.type)}}class lm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const s=r[o];s.setValue(e,t[s.id],n)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function ul(i,e){i.seq.push(e),i.map[e.id]=e}function cm(i,e,t){const n=i.name,r=n.length;for(ea.lastIndex=0;;){const o=ea.exec(n),a=ea.lastIndex;let s=o[1];const l=o[2]==="]",c=o[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===r){ul(t,c===void 0?new am(s,i,e):new sm(s,i,e));break}else{let m=t.map[s];m===void 0&&(m=new lm(s),ul(t,m)),t=m}}}class io{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),a=e.getUniformLocation(t,o.name);cm(o,a,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,a=t.length;o!==a;++o){const s=t[o],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function hl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const um=37297;let hm=0;function dm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=r;a<o;a++){const s=a+1;n.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return n.join(`
`)}const dl=new Ie;function fm(i){qe._getMatrix(dl,qe.workingColorSpace,i);const e=`mat3( ${dl.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case uo:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+dm(i.getShaderSource(e),a)}else return r}function pm(i,e){const t=fm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mm(i,e){let t;switch(e){case Il:t="Linear";break;case Nl:t="Reinhard";break;case Ol:t="Cineon";break;case ja:t="ACESFilmic";break;case Bl:t="AgX";break;case zl:t="Neutral";break;case du:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Kr=new I;function gm(){qe.getLuminanceCoefficients(Kr);const i=Kr.x.toFixed(4),e=Kr.y.toFixed(4),t=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function _m(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),a=o.name;let s=1;o.type===i.FLOAT_MAT2&&(s=2),o.type===i.FLOAT_MAT3&&(s=3),o.type===i.FLOAT_MAT4&&(s=4),t[a]={type:o.type,location:i.getAttribLocation(e,a),locationSize:s}}return t}function sr(i){return i!==""}function pl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ml(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(i){return i.replace(Sm,ym)}const Mm=new Map;function ym(i,e){let t=Oe[e];if(t===void 0){const n=Mm.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ga(t)}const Em=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gl(i){return i.replace(Em,Tm)}function Tm(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function vl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ul?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function wm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vi:case Hi:e="ENVMAP_TYPE_CUBE";break;case _o:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Am(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hi:e="ENVMAP_MODE_REFRACTION";break}return e}function Cm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fl:e="ENVMAP_BLENDING_MULTIPLY";break;case uu:e="ENVMAP_BLENDING_MIX";break;case hu:e="ENVMAP_BLENDING_ADD";break}return e}function Rm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Dm(i,e,t,n){const r=i.getContext(),o=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=bm(t),c=wm(t),h=Am(t),m=Cm(t),p=Rm(t),d=vm(t),v=_m(o),S=r.createProgram();let g,u,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(sr).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(sr).join(`
`),u.length>0&&(u+=`
`)):(g=[vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),u=[vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==kn?mm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,pm("linearToOutputTexel",t.outputColorSpace),gm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),a=Ga(a),a=pl(a,t),a=ml(a,t),s=Ga(s),s=pl(s,t),s=ml(s,t),a=gl(a),s=gl(s),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",t.glslVersion===As?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===As?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const b=w+g+a,y=w+u+s,F=hl(r,r.VERTEX_SHADER,b),D=hl(r,r.FRAGMENT_SHADER,y);r.attachShader(S,F),r.attachShader(S,D),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function C(R){if(i.debug.checkShaderErrors){const X=r.getProgramInfoLog(S).trim(),V=r.getShaderInfoLog(F).trim(),Z=r.getShaderInfoLog(D).trim();let $=!0,q=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,F,D);else{const Q=fl(r,F,"vertex"),G=fl(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+X+`
`+Q+`
`+G)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(V===""||Z==="")&&(q=!1);q&&(R.diagnostics={runnable:$,programLog:X,vertexShader:{log:V,prefix:g},fragmentShader:{log:Z,prefix:u}})}r.deleteShader(F),r.deleteShader(D),N=new io(r,S),E=xm(r,S)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(S,um)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hm++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=F,this.fragmentShader=D,this}let Pm=0;class Lm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Um(e),t.set(e,n)),n}}class Um{constructor(e){this.id=Pm++,this.code=e,this.usedTimes=0}}function Fm(i,e,t,n,r,o,a){const s=new tc,l=new Lm,c=new Set,h=[],m=r.logarithmicDepthBuffer,p=r.vertexTextures;let d=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,M,R,X,V){const Z=X.fog,$=V.geometry,q=E.isMeshStandardMaterial?X.environment:null,Q=(E.isMeshStandardMaterial?t:e).get(E.envMap||q),G=Q&&Q.mapping===_o?Q.image.height:null,ae=v[E.type];E.precision!==null&&(d=r.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const de=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ye=de!==void 0?de.length:0;let ze=0;$.morphAttributes.position!==void 0&&(ze=1),$.morphAttributes.normal!==void 0&&(ze=2),$.morphAttributes.color!==void 0&&(ze=3);let tt,Y,ne,_e;if(ae){const Je=hn[ae];tt=Je.vertexShader,Y=Je.fragmentShader}else tt=E.vertexShader,Y=E.fragmentShader,l.update(E),ne=l.getVertexShaderID(E),_e=l.getFragmentShaderID(E);const se=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),Le=V.isInstancedMesh===!0,Ve=V.isBatchedMesh===!0,ot=!!E.map,We=!!E.matcap,ut=!!Q,A=!!E.aoMap,qt=!!E.lightMap,He=!!E.bumpMap,Ge=!!E.normalMap,Ee=!!E.displacementMap,it=!!E.emissiveMap,Se=!!E.metalnessMap,T=!!E.roughnessMap,_=E.anisotropy>0,O=E.clearcoat>0,j=E.dispersion>0,J=E.iridescence>0,W=E.sheen>0,xe=E.transmission>0,le=_&&!!E.anisotropyMap,fe=O&&!!E.clearcoatMap,Xe=O&&!!E.clearcoatNormalMap,te=O&&!!E.clearcoatRoughnessMap,pe=J&&!!E.iridescenceMap,Ce=J&&!!E.iridescenceThicknessMap,De=W&&!!E.sheenColorMap,me=W&&!!E.sheenRoughnessMap,ke=!!E.specularMap,Ne=!!E.specularColorMap,nt=!!E.specularIntensityMap,P=xe&&!!E.transmissionMap,re=xe&&!!E.thicknessMap,H=!!E.gradientMap,K=!!E.alphaMap,ue=E.alphaTest>0,ce=!!E.alphaHash,Fe=!!E.extensions;let at=kn;E.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(at=i.toneMapping);const bt={shaderID:ae,shaderType:E.type,shaderName:E.name,vertexShader:tt,fragmentShader:Y,defines:E.defines,customVertexShaderID:ne,customFragmentShaderID:_e,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Ve,batchingColor:Ve&&V._colorsTexture!==null,instancing:Le,instancingColor:Le&&V.instanceColor!==null,instancingMorph:Le&&V.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ci,alphaToCoverage:!!E.alphaToCoverage,map:ot,matcap:We,envMap:ut,envMapMode:ut&&Q.mapping,envMapCubeUVHeight:G,aoMap:A,lightMap:qt,bumpMap:He,normalMap:Ge,displacementMap:p&&Ee,emissiveMap:it,normalMapObjectSpace:Ge&&E.normalMapType===vu,normalMapTangentSpace:Ge&&E.normalMapType===gu,metalnessMap:Se,roughnessMap:T,anisotropy:_,anisotropyMap:le,clearcoat:O,clearcoatMap:fe,clearcoatNormalMap:Xe,clearcoatRoughnessMap:te,dispersion:j,iridescence:J,iridescenceMap:pe,iridescenceThicknessMap:Ce,sheen:W,sheenColorMap:De,sheenRoughnessMap:me,specularMap:ke,specularColorMap:Ne,specularIntensityMap:nt,transmission:xe,transmissionMap:P,thicknessMap:re,gradientMap:H,opaque:E.transparent===!1&&E.blending===Ni&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:ue,alphaHash:ce,combine:E.combine,mapUv:ot&&S(E.map.channel),aoMapUv:A&&S(E.aoMap.channel),lightMapUv:qt&&S(E.lightMap.channel),bumpMapUv:He&&S(E.bumpMap.channel),normalMapUv:Ge&&S(E.normalMap.channel),displacementMapUv:Ee&&S(E.displacementMap.channel),emissiveMapUv:it&&S(E.emissiveMap.channel),metalnessMapUv:Se&&S(E.metalnessMap.channel),roughnessMapUv:T&&S(E.roughnessMap.channel),anisotropyMapUv:le&&S(E.anisotropyMap.channel),clearcoatMapUv:fe&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:De&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:me&&S(E.sheenRoughnessMap.channel),specularMapUv:ke&&S(E.specularMap.channel),specularColorMapUv:Ne&&S(E.specularColorMap.channel),specularIntensityMapUv:nt&&S(E.specularIntensityMap.channel),transmissionMapUv:P&&S(E.transmissionMap.channel),thicknessMapUv:re&&S(E.thicknessMap.channel),alphaMapUv:K&&S(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ge||_),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!$.attributes.uv&&(ot||K),fog:!!Z,useFog:E.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Re,skinning:V.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:ze,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,decodeVideoTexture:ot&&E.map.isVideoTexture===!0&&qe.getTransfer(E.map.colorSpace)===Qe,decodeVideoTextureEmissive:it&&E.emissiveMap.isVideoTexture===!0&&qe.getTransfer(E.emissiveMap.colorSpace)===Qe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Tn,flipSided:E.side===Lt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Fe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&E.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function u(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)M.push(R),M.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(w(M,E),b(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function w(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function b(E,M){s.disableAll(),M.supportsVertexTextures&&s.enable(0),M.instancing&&s.enable(1),M.instancingColor&&s.enable(2),M.instancingMorph&&s.enable(3),M.matcap&&s.enable(4),M.envMap&&s.enable(5),M.normalMapObjectSpace&&s.enable(6),M.normalMapTangentSpace&&s.enable(7),M.clearcoat&&s.enable(8),M.iridescence&&s.enable(9),M.alphaTest&&s.enable(10),M.vertexColors&&s.enable(11),M.vertexAlphas&&s.enable(12),M.vertexUv1s&&s.enable(13),M.vertexUv2s&&s.enable(14),M.vertexUv3s&&s.enable(15),M.vertexTangents&&s.enable(16),M.anisotropy&&s.enable(17),M.alphaHash&&s.enable(18),M.batching&&s.enable(19),M.dispersion&&s.enable(20),M.batchingColor&&s.enable(21),E.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.reverseDepthBuffer&&s.enable(4),M.skinning&&s.enable(5),M.morphTargets&&s.enable(6),M.morphNormals&&s.enable(7),M.morphColors&&s.enable(8),M.premultipliedAlpha&&s.enable(9),M.shadowMapEnabled&&s.enable(10),M.doubleSided&&s.enable(11),M.flipSided&&s.enable(12),M.useDepthPacking&&s.enable(13),M.dithering&&s.enable(14),M.transmission&&s.enable(15),M.sheen&&s.enable(16),M.opaque&&s.enable(17),M.pointsUvs&&s.enable(18),M.decodeVideoTexture&&s.enable(19),M.decodeVideoTextureEmissive&&s.enable(20),M.alphaToCoverage&&s.enable(21),E.push(s.mask)}function y(E){const M=v[E.type];let R;if(M){const X=hn[M];R=gr.clone(X.uniforms)}else R=E.uniforms;return R}function F(E,M){let R;for(let X=0,V=h.length;X<V;X++){const Z=h[X];if(Z.cacheKey===M){R=Z,++R.usedTimes;break}}return R===void 0&&(R=new Dm(i,M,E,o),h.push(R)),R}function D(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function C(E){l.remove(E)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:y,acquireProgram:F,releaseProgram:D,releaseShaderCache:C,programs:h,dispose:N}}function Im(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let s=i.get(a);return s===void 0&&(s={},i.set(a,s)),s}function n(a){i.delete(a)}function r(a,s,l){i.get(a)[s]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function Nm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function _l(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xl(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function a(m,p,d,v,S,g){let u=i[e];return u===void 0?(u={id:m.id,object:m,geometry:p,material:d,groupOrder:v,renderOrder:m.renderOrder,z:S,group:g},i[e]=u):(u.id=m.id,u.object=m,u.geometry=p,u.material=d,u.groupOrder=v,u.renderOrder=m.renderOrder,u.z=S,u.group=g),e++,u}function s(m,p,d,v,S,g){const u=a(m,p,d,v,S,g);d.transmission>0?n.push(u):d.transparent===!0?r.push(u):t.push(u)}function l(m,p,d,v,S,g){const u=a(m,p,d,v,S,g);d.transmission>0?n.unshift(u):d.transparent===!0?r.unshift(u):t.unshift(u)}function c(m,p){t.length>1&&t.sort(m||Nm),n.length>1&&n.sort(p||_l),r.length>1&&r.sort(p||_l)}function h(){for(let m=e,p=i.length;m<p;m++){const d=i[m];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:s,unshift:l,finish:h,sort:c}}function Om(){let i=new WeakMap;function e(n,r){const o=i.get(n);let a;return o===void 0?(a=new xl,i.set(n,[a])):r>=o.length?(a=new xl,o.push(a)):a=o[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Bm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new we};break;case"SpotLight":t={position:new I,direction:new I,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function zm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Vm=0;function Hm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Gm(i){const e=new Bm,t=zm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const r=new I,o=new dt,a=new dt;function s(c){let h=0,m=0,p=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,v=0,S=0,g=0,u=0,w=0,b=0,y=0,F=0,D=0,C=0;c.sort(Hm);for(let E=0,M=c.length;E<M;E++){const R=c[E],X=R.color,V=R.intensity,Z=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=X.r*V,m+=X.g*V,p+=X.b*V;else if(R.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(R.sh.coefficients[q],V);C++}else if(R.isDirectionalLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Q=R.shadow,G=t.get(R);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=$,n.directionalShadowMatrix[d]=R.shadow.matrix,w++}n.directional[d]=q,d++}else if(R.isSpotLight){const q=e.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(X).multiplyScalar(V),q.distance=Z,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,n.spot[S]=q;const Q=R.shadow;if(R.map&&(n.spotLightMap[F]=R.map,F++,Q.updateMatrices(R),R.castShadow&&D++),n.spotLightMatrix[S]=Q.matrix,R.castShadow){const G=t.get(R);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.spotShadow[S]=G,n.spotShadowMap[S]=$,y++}S++}else if(R.isRectAreaLight){const q=e.get(R);q.color.copy(X).multiplyScalar(V),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=q,g++}else if(R.isPointLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){const Q=R.shadow,G=t.get(R);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,G.shadowCameraNear=Q.camera.near,G.shadowCameraFar=Q.camera.far,n.pointShadow[v]=G,n.pointShadowMap[v]=$,n.pointShadowMatrix[v]=R.shadow.matrix,b++}n.point[v]=q,v++}else if(R.isHemisphereLight){const q=e.get(R);q.skyColor.copy(R.color).multiplyScalar(V),q.groundColor.copy(R.groundColor).multiplyScalar(V),n.hemi[u]=q,u++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=p;const N=n.hash;(N.directionalLength!==d||N.pointLength!==v||N.spotLength!==S||N.rectAreaLength!==g||N.hemiLength!==u||N.numDirectionalShadows!==w||N.numPointShadows!==b||N.numSpotShadows!==y||N.numSpotMaps!==F||N.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=S,n.rectArea.length=g,n.point.length=v,n.hemi.length=u,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+F-D,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=C,N.directionalLength=d,N.pointLength=v,N.spotLength=S,N.rectAreaLength=g,N.hemiLength=u,N.numDirectionalShadows=w,N.numPointShadows=b,N.numSpotShadows=y,N.numSpotMaps=F,N.numLightProbes=C,n.version=Vm++)}function l(c,h){let m=0,p=0,d=0,v=0,S=0;const g=h.matrixWorldInverse;for(let u=0,w=c.length;u<w;u++){const b=c[u];if(b.isDirectionalLight){const y=n.directional[m];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),m++}else if(b.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(b.isRectAreaLight){const y=n.rectArea[v];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),a.identity(),o.copy(b.matrixWorld),o.premultiply(g),a.extractRotation(o),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const y=n.point[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),p++}else if(b.isHemisphereLight){const y=n.hemi[S];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(g),S++}}}return{setup:s,setupView:l,state:n}}function Sl(i){const e=new Gm(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function s(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:s,setupLightsView:l,pushLight:o,pushShadow:a}}function km(i){let e=new WeakMap;function t(r,o=0){const a=e.get(r);let s;return a===void 0?(s=new Sl(i),e.set(r,[s])):o>=a.length?(s=new Sl(i),a.push(s)):s=a[o],s}function n(){e=new WeakMap}return{get:t,dispose:n}}const Wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ym(i,e,t){let n=new lc;const r=new be,o=new be,a=new ht,s=new vh({depthPacking:mu}),l=new _h,c={},h=t.maxTextureSize,m={[Ln]:Lt,[Lt]:Ln,[Tn]:Tn},p=new gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Wm,fragmentShader:Xm}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const v=new cn;v.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Nt(v,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ul;let u=this.type;this.render=function(D,C,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Dn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const V=u!==En&&this.type===En,Z=u===En&&this.type!==En;for(let $=0,q=D.length;$<q;$++){const Q=D[$],G=Q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ae=G.getFrameExtents();if(r.multiply(ae),o.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/ae.x),r.x=o.x*ae.x,G.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/ae.y),r.y=o.y*ae.y,G.mapSize.y=o.y)),G.map===null||V===!0||Z===!0){const ye=this.type!==En?{minFilter:sn,magFilter:sn}:{};G.map!==null&&G.map.dispose(),G.map=new Yt(r.x,r.y,ye),G.map.texture.name=Q.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const de=G.getViewportCount();for(let ye=0;ye<de;ye++){const ze=G.getViewport(ye);a.set(o.x*ze.x,o.y*ze.y,o.x*ze.z,o.y*ze.w),X.viewport(a),G.updateMatrices(Q,ye),n=G.getFrustum(),y(C,N,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===En&&w(G,N),G.needsUpdate=!1}u=this.type,g.needsUpdate=!1,i.setRenderTarget(E,M,R)};function w(D,C){const N=e.update(S);p.defines.VSM_SAMPLES!==D.blurSamples&&(p.defines.VSM_SAMPLES=D.blurSamples,d.defines.VSM_SAMPLES=D.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Yt(r.x,r.y)),p.uniforms.shadow_pass.value=D.map.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(C,null,N,p,S,null),d.uniforms.shadow_pass.value=D.mapPass.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(C,null,N,d,S,null)}function b(D,C,N,E){let M=null;const R=N.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(R!==void 0)M=R;else if(M=N.isPointLight===!0?l:s,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const X=M.uuid,V=C.uuid;let Z=c[X];Z===void 0&&(Z={},c[X]=Z);let $=Z[V];$===void 0&&($=M.clone(),Z[V]=$,C.addEventListener("dispose",F)),M=$}if(M.visible=C.visible,M.wireframe=C.wireframe,E===En?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:m[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const X=i.properties.get(M);X.light=N}return M}function y(D,C,N,E,M){if(D.visible===!1)return;if(D.layers.test(C.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===En)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,D.matrixWorld);const V=e.update(D),Z=D.material;if(Array.isArray(Z)){const $=V.groups;for(let q=0,Q=$.length;q<Q;q++){const G=$[q],ae=Z[G.materialIndex];if(ae&&ae.visible){const de=b(D,ae,E,M);D.onBeforeShadow(i,D,C,N,V,de,G),i.renderBufferDirect(N,null,V,de,D,G),D.onAfterShadow(i,D,C,N,V,de,G)}}}else if(Z.visible){const $=b(D,Z,E,M);D.onBeforeShadow(i,D,C,N,V,$,null),i.renderBufferDirect(N,null,V,$,D,null),D.onAfterShadow(i,D,C,N,V,$,null)}}const X=D.children;for(let V=0,Z=X.length;V<Z;V++)y(X[V],C,N,E,M)}function F(D){D.target.removeEventListener("dispose",F);for(const N in c){const E=c[N],M=D.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const qm={[aa]:sa,[la]:ha,[ca]:da,[zi]:ua,[sa]:aa,[ha]:la,[da]:ca,[ua]:zi};function jm(i,e){function t(){let P=!1;const re=new ht;let H=null;const K=new ht(0,0,0,0);return{setMask:function(ue){H!==ue&&!P&&(i.colorMask(ue,ue,ue,ue),H=ue)},setLocked:function(ue){P=ue},setClear:function(ue,ce,Fe,at,bt){bt===!0&&(ue*=at,ce*=at,Fe*=at),re.set(ue,ce,Fe,at),K.equals(re)===!1&&(i.clearColor(ue,ce,Fe,at),K.copy(re))},reset:function(){P=!1,H=null,K.set(-1,0,0,0)}}}function n(){let P=!1,re=!1,H=null,K=null,ue=null;return{setReversed:function(ce){if(re!==ce){const Fe=e.get("EXT_clip_control");re?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const at=ue;ue=null,this.setClear(at)}re=ce},getReversed:function(){return re},setTest:function(ce){ce?se(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(ce){H!==ce&&!P&&(i.depthMask(ce),H=ce)},setFunc:function(ce){if(re&&(ce=qm[ce]),K!==ce){switch(ce){case aa:i.depthFunc(i.NEVER);break;case sa:i.depthFunc(i.ALWAYS);break;case la:i.depthFunc(i.LESS);break;case zi:i.depthFunc(i.LEQUAL);break;case ca:i.depthFunc(i.EQUAL);break;case ua:i.depthFunc(i.GEQUAL);break;case ha:i.depthFunc(i.GREATER);break;case da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ce}},setLocked:function(ce){P=ce},setClear:function(ce){ue!==ce&&(re&&(ce=1-ce),i.clearDepth(ce),ue=ce)},reset:function(){P=!1,H=null,K=null,ue=null,re=!1}}}function r(){let P=!1,re=null,H=null,K=null,ue=null,ce=null,Fe=null,at=null,bt=null;return{setTest:function(Je){P||(Je?se(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(Je){re!==Je&&!P&&(i.stencilMask(Je),re=Je)},setFunc:function(Je,Qt,gn){(H!==Je||K!==Qt||ue!==gn)&&(i.stencilFunc(Je,Qt,gn),H=Je,K=Qt,ue=gn)},setOp:function(Je,Qt,gn){(ce!==Je||Fe!==Qt||at!==gn)&&(i.stencilOp(Je,Qt,gn),ce=Je,Fe=Qt,at=gn)},setLocked:function(Je){P=Je},setClear:function(Je){bt!==Je&&(i.clearStencil(Je),bt=Je)},reset:function(){P=!1,re=null,H=null,K=null,ue=null,ce=null,Fe=null,at=null,bt=null}}}const o=new t,a=new n,s=new r,l=new WeakMap,c=new WeakMap;let h={},m={},p=new WeakMap,d=[],v=null,S=!1,g=null,u=null,w=null,b=null,y=null,F=null,D=null,C=new we(0,0,0),N=0,E=!1,M=null,R=null,X=null,V=null,Z=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Q=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=Q>=2);let ae=null,de={};const ye=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),tt=new ht().fromArray(ye),Y=new ht().fromArray(ze);function ne(P,re,H,K){const ue=new Uint8Array(4),ce=i.createTexture();i.bindTexture(P,ce),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<H;Fe++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(re+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return ce}const _e={};_e[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),s.setClear(0),se(i.DEPTH_TEST),a.setFunc(zi),He(!1),Ge(ys),se(i.CULL_FACE),A(Dn);function se(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Re(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Le(P,re){return m[P]!==re?(i.bindFramebuffer(P,re),m[P]=re,P===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=re),P===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Ve(P,re){let H=d,K=!1;if(P){H=p.get(re),H===void 0&&(H=[],p.set(re,H));const ue=P.textures;if(H.length!==ue.length||H[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,Fe=ue.length;ce<Fe;ce++)H[ce]=i.COLOR_ATTACHMENT0+ce;H.length=ue.length,K=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,K=!0);K&&i.drawBuffers(H)}function ot(P){return v!==P?(i.useProgram(P),v=P,!0):!1}const We={[ii]:i.FUNC_ADD,[qc]:i.FUNC_SUBTRACT,[jc]:i.FUNC_REVERSE_SUBTRACT};We[Kc]=i.MIN,We[Zc]=i.MAX;const ut={[$c]:i.ZERO,[Jc]:i.ONE,[Qc]:i.SRC_COLOR,[ra]:i.SRC_ALPHA,[ou]:i.SRC_ALPHA_SATURATE,[iu]:i.DST_COLOR,[tu]:i.DST_ALPHA,[eu]:i.ONE_MINUS_SRC_COLOR,[oa]:i.ONE_MINUS_SRC_ALPHA,[ru]:i.ONE_MINUS_DST_COLOR,[nu]:i.ONE_MINUS_DST_ALPHA,[au]:i.CONSTANT_COLOR,[su]:i.ONE_MINUS_CONSTANT_COLOR,[lu]:i.CONSTANT_ALPHA,[cu]:i.ONE_MINUS_CONSTANT_ALPHA};function A(P,re,H,K,ue,ce,Fe,at,bt,Je){if(P===Dn){S===!0&&(Re(i.BLEND),S=!1);return}if(S===!1&&(se(i.BLEND),S=!0),P!==Yc){if(P!==g||Je!==E){if((u!==ii||y!==ii)&&(i.blendEquation(i.FUNC_ADD),u=ii,y=ii),Je)switch(P){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dr:i.blendFunc(i.ONE,i.ONE);break;case Es:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ts:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Es:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ts:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}w=null,b=null,F=null,D=null,C.set(0,0,0),N=0,g=P,E=Je}return}ue=ue||re,ce=ce||H,Fe=Fe||K,(re!==u||ue!==y)&&(i.blendEquationSeparate(We[re],We[ue]),u=re,y=ue),(H!==w||K!==b||ce!==F||Fe!==D)&&(i.blendFuncSeparate(ut[H],ut[K],ut[ce],ut[Fe]),w=H,b=K,F=ce,D=Fe),(at.equals(C)===!1||bt!==N)&&(i.blendColor(at.r,at.g,at.b,bt),C.copy(at),N=bt),g=P,E=!1}function qt(P,re){P.side===Tn?Re(i.CULL_FACE):se(i.CULL_FACE);let H=P.side===Lt;re&&(H=!H),He(H),P.blending===Ni&&P.transparent===!1?A(Dn):A(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),o.setMask(P.colorWrite);const K=P.stencilWrite;s.setTest(K),K&&(s.setMask(P.stencilWriteMask),s.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),s.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),it(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(P){M!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),M=P)}function Ge(P){P!==kc?(se(i.CULL_FACE),P!==R&&(P===ys?i.cullFace(i.BACK):P===Wc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),R=P}function Ee(P){P!==X&&(q&&i.lineWidth(P),X=P)}function it(P,re,H){P?(se(i.POLYGON_OFFSET_FILL),(V!==re||Z!==H)&&(i.polygonOffset(re,H),V=re,Z=H)):Re(i.POLYGON_OFFSET_FILL)}function Se(P){P?se(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function T(P){P===void 0&&(P=i.TEXTURE0+$-1),ae!==P&&(i.activeTexture(P),ae=P)}function _(P,re,H){H===void 0&&(ae===null?H=i.TEXTURE0+$-1:H=ae);let K=de[H];K===void 0&&(K={type:void 0,texture:void 0},de[H]=K),(K.type!==P||K.texture!==re)&&(ae!==H&&(i.activeTexture(H),ae=H),i.bindTexture(P,re||_e[P]),K.type=P,K.texture=re)}function O(){const P=de[ae];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Xe(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function De(P){tt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),tt.copy(P))}function me(P){Y.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Y.copy(P))}function ke(P,re){let H=c.get(re);H===void 0&&(H=new WeakMap,c.set(re,H));let K=H.get(P);K===void 0&&(K=i.getUniformBlockIndex(re,P.name),H.set(P,K))}function Ne(P,re){const K=c.get(re).get(P);l.get(re)!==K&&(i.uniformBlockBinding(re,K,P.__bindingPointIndex),l.set(re,K))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ae=null,de={},m={},p=new WeakMap,d=[],v=null,S=!1,g=null,u=null,w=null,b=null,y=null,F=null,D=null,C=new we(0,0,0),N=0,E=!1,M=null,R=null,X=null,V=null,Z=null,tt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),o.reset(),a.reset(),s.reset()}return{buffers:{color:o,depth:a,stencil:s},enable:se,disable:Re,bindFramebuffer:Le,drawBuffers:Ve,useProgram:ot,setBlending:A,setMaterial:qt,setFlipSided:He,setCullFace:Ge,setLineWidth:Ee,setPolygonOffset:it,setScissorTest:Se,activeTexture:T,bindTexture:_,unbindTexture:O,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:pe,texImage3D:Ce,updateUBOMapping:ke,uniformBlockBinding:Ne,texStorage2D:Xe,texStorage3D:te,texSubImage2D:W,texSubImage3D:xe,compressedTexSubImage2D:le,compressedTexSubImage3D:fe,scissor:De,viewport:me,reset:nt}}function Km(i,e,t,n,r,o,a){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,h=new WeakMap;let m;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,_){return d?new OffscreenCanvas(T,_):fo("canvas")}function S(T,_,O){let j=1;const J=Se(T);if((J.width>O||J.height>O)&&(j=O/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const W=Math.floor(j*J.width),xe=Math.floor(j*J.height);m===void 0&&(m=v(W,xe));const le=_?v(W,xe):m;return le.width=W,le.height=xe,le.getContext("2d").drawImage(T,0,0,W,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+W+"x"+xe+")."),le}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function g(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,_,O,j,J=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=_;if(_===i.RED&&(O===i.FLOAT&&(W=i.R32F),O===i.HALF_FLOAT&&(W=i.R16F),O===i.UNSIGNED_BYTE&&(W=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.R8UI),O===i.UNSIGNED_SHORT&&(W=i.R16UI),O===i.UNSIGNED_INT&&(W=i.R32UI),O===i.BYTE&&(W=i.R8I),O===i.SHORT&&(W=i.R16I),O===i.INT&&(W=i.R32I)),_===i.RG&&(O===i.FLOAT&&(W=i.RG32F),O===i.HALF_FLOAT&&(W=i.RG16F),O===i.UNSIGNED_BYTE&&(W=i.RG8)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.RG8UI),O===i.UNSIGNED_SHORT&&(W=i.RG16UI),O===i.UNSIGNED_INT&&(W=i.RG32UI),O===i.BYTE&&(W=i.RG8I),O===i.SHORT&&(W=i.RG16I),O===i.INT&&(W=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.RGB8UI),O===i.UNSIGNED_SHORT&&(W=i.RGB16UI),O===i.UNSIGNED_INT&&(W=i.RGB32UI),O===i.BYTE&&(W=i.RGB8I),O===i.SHORT&&(W=i.RGB16I),O===i.INT&&(W=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),O===i.UNSIGNED_INT&&(W=i.RGBA32UI),O===i.BYTE&&(W=i.RGBA8I),O===i.SHORT&&(W=i.RGBA16I),O===i.INT&&(W=i.RGBA32I)),_===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),_===i.RGBA){const xe=J?uo:qe.getTransfer(j);O===i.FLOAT&&(W=i.RGBA32F),O===i.HALF_FLOAT&&(W=i.RGBA16F),O===i.UNSIGNED_BYTE&&(W=xe===Qe?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function y(T,_){let O;return T?_===null||_===li||_===Gi?O=i.DEPTH24_STENCIL8:_===An?O=i.DEPTH32F_STENCIL8:_===pr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===li||_===Gi?O=i.DEPTH_COMPONENT24:_===An?O=i.DEPTH_COMPONENT32F:_===pr&&(O=i.DEPTH_COMPONENT16),O}function F(T,_){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==sn&&T.minFilter!==It?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function D(T){const _=T.target;_.removeEventListener("dispose",D),N(_),_.isVideoTexture&&h.delete(_)}function C(T){const _=T.target;_.removeEventListener("dispose",C),M(_)}function N(T){const _=n.get(T);if(_.__webglInit===void 0)return;const O=T.source,j=p.get(O);if(j){const J=j[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(T),Object.keys(j).length===0&&p.delete(O)}n.remove(T)}function E(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const O=T.source,j=p.get(O);delete j[_.__cacheKey],a.memory.textures--}function M(T){const _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let J=0;J<_.__webglFramebuffer[j].length;J++)i.deleteFramebuffer(_.__webglFramebuffer[j][J]);else i.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)i.deleteFramebuffer(_.__webglFramebuffer[j]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=T.textures;for(let j=0,J=O.length;j<J;j++){const W=n.get(O[j]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(O[j])}n.remove(T)}let R=0;function X(){R=0}function V(){const T=R;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),R+=1,T}function Z(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function $(T,_){const O=n.get(T);if(T.isVideoTexture&&Ee(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,T,_);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function q(T,_){const O=n.get(T);if(T.version>0&&O.__version!==T.version){Y(O,T,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function Q(T,_){const O=n.get(T);if(T.version>0&&O.__version!==T.version){Y(O,T,_);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function G(T,_){const O=n.get(T);if(T.version>0&&O.__version!==T.version){ne(O,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}const ae={[co]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[fr]:i.MIRRORED_REPEAT},de={[sn]:i.NEAREST,[fu]:i.NEAREST_MIPMAP_NEAREST,[Ar]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[Co]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},ye={[_u]:i.NEVER,[Tu]:i.ALWAYS,[xu]:i.LESS,[$l]:i.LEQUAL,[Su]:i.EQUAL,[Eu]:i.GEQUAL,[Mu]:i.GREATER,[yu]:i.NOTEQUAL};function ze(T,_){if(_.type===An&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===It||_.magFilter===Co||_.magFilter===Ar||_.magFilter===oi||_.minFilter===It||_.minFilter===Co||_.minFilter===Ar||_.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ae[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ae[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ae[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,de[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,de[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ye[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===sn||_.minFilter!==Ar&&_.minFilter!==oi||_.type===An&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function tt(T,_){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",D));const j=_.source;let J=p.get(j);J===void 0&&(J={},p.set(j,J));const W=Z(_);if(W!==T.__cacheKey){J[W]===void 0&&(J[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[W].usedTimes++;const xe=J[T.__cacheKey];xe!==void 0&&(J[T.__cacheKey].usedTimes--,xe.usedTimes===0&&E(_)),T.__cacheKey=W,T.__webglTexture=J[W].texture}return O}function Y(T,_,O){let j=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=i.TEXTURE_3D);const J=tt(T,_),W=_.source;t.bindTexture(j,T.__webglTexture,i.TEXTURE0+O);const xe=n.get(W);if(W.version!==xe.__version||J===!0){t.activeTexture(i.TEXTURE0+O);const le=qe.getPrimaries(qe.workingColorSpace),fe=_.colorSpace===bn?null:qe.getPrimaries(_.colorSpace),Xe=_.colorSpace===bn||le===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let te=S(_.image,!1,r.maxTextureSize);te=it(_,te);const pe=o.convert(_.format,_.colorSpace),Ce=o.convert(_.type);let De=b(_.internalFormat,pe,Ce,_.colorSpace,_.isVideoTexture);ze(j,_);let me;const ke=_.mipmaps,Ne=_.isVideoTexture!==!0,nt=xe.__version===void 0||J===!0,P=W.dataReady,re=F(_,te);if(_.isDepthTexture)De=y(_.format===ki,_.type),nt&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,De,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,De,te.width,te.height,0,pe,Ce,null));else if(_.isDataTexture)if(ke.length>0){Ne&&nt&&t.texStorage2D(i.TEXTURE_2D,re,De,ke[0].width,ke[0].height);for(let H=0,K=ke.length;H<K;H++)me=ke[H],Ne?P&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,me.width,me.height,pe,Ce,me.data):t.texImage2D(i.TEXTURE_2D,H,De,me.width,me.height,0,pe,Ce,me.data);_.generateMipmaps=!1}else Ne?(nt&&t.texStorage2D(i.TEXTURE_2D,re,De,te.width,te.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te.width,te.height,pe,Ce,te.data)):t.texImage2D(i.TEXTURE_2D,0,De,te.width,te.height,0,pe,Ce,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ne&&nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,De,ke[0].width,ke[0].height,te.depth);for(let H=0,K=ke.length;H<K;H++)if(me=ke[H],_.format!==Xt)if(pe!==null)if(Ne){if(P)if(_.layerUpdates.size>0){const ue=Zs(me.width,me.height,_.format,_.type);for(const ce of _.layerUpdates){const Fe=me.data.subarray(ce*ue/me.data.BYTES_PER_ELEMENT,(ce+1)*ue/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,ce,me.width,me.height,1,pe,Fe)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,me.width,me.height,te.depth,pe,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,De,me.width,me.height,te.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,me.width,me.height,te.depth,pe,Ce,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,H,De,me.width,me.height,te.depth,0,pe,Ce,me.data)}else{Ne&&nt&&t.texStorage2D(i.TEXTURE_2D,re,De,ke[0].width,ke[0].height);for(let H=0,K=ke.length;H<K;H++)me=ke[H],_.format!==Xt?pe!==null?Ne?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,H,De,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?P&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,me.width,me.height,pe,Ce,me.data):t.texImage2D(i.TEXTURE_2D,H,De,me.width,me.height,0,pe,Ce,me.data)}else if(_.isDataArrayTexture)if(Ne){if(nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,De,te.width,te.height,te.depth),P)if(_.layerUpdates.size>0){const H=Zs(te.width,te.height,_.format,_.type);for(const K of _.layerUpdates){const ue=te.data.subarray(K*H/te.data.BYTES_PER_ELEMENT,(K+1)*H/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,te.width,te.height,1,pe,Ce,ue)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,pe,Ce,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,te.width,te.height,te.depth,0,pe,Ce,te.data);else if(_.isData3DTexture)Ne?(nt&&t.texStorage3D(i.TEXTURE_3D,re,De,te.width,te.height,te.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,pe,Ce,te.data)):t.texImage3D(i.TEXTURE_3D,0,De,te.width,te.height,te.depth,0,pe,Ce,te.data);else if(_.isFramebufferTexture){if(nt)if(Ne)t.texStorage2D(i.TEXTURE_2D,re,De,te.width,te.height);else{let H=te.width,K=te.height;for(let ue=0;ue<re;ue++)t.texImage2D(i.TEXTURE_2D,ue,De,H,K,0,pe,Ce,null),H>>=1,K>>=1}}else if(ke.length>0){if(Ne&&nt){const H=Se(ke[0]);t.texStorage2D(i.TEXTURE_2D,re,De,H.width,H.height)}for(let H=0,K=ke.length;H<K;H++)me=ke[H],Ne?P&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,pe,Ce,me):t.texImage2D(i.TEXTURE_2D,H,De,pe,Ce,me);_.generateMipmaps=!1}else if(Ne){if(nt){const H=Se(te);t.texStorage2D(i.TEXTURE_2D,re,De,H.width,H.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Ce,te)}else t.texImage2D(i.TEXTURE_2D,0,De,pe,Ce,te);g(_)&&u(j),xe.__version=W.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ne(T,_,O){if(_.image.length!==6)return;const j=tt(T,_),J=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const W=n.get(J);if(J.version!==W.__version||j===!0){t.activeTexture(i.TEXTURE0+O);const xe=qe.getPrimaries(qe.workingColorSpace),le=_.colorSpace===bn?null:qe.getPrimaries(_.colorSpace),fe=_.colorSpace===bn||xe===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Xe=_.isCompressedTexture||_.image[0].isCompressedTexture,te=_.image[0]&&_.image[0].isDataTexture,pe=[];for(let K=0;K<6;K++)!Xe&&!te?pe[K]=S(_.image[K],!0,r.maxCubemapSize):pe[K]=te?_.image[K].image:_.image[K],pe[K]=it(_,pe[K]);const Ce=pe[0],De=o.convert(_.format,_.colorSpace),me=o.convert(_.type),ke=b(_.internalFormat,De,me,_.colorSpace),Ne=_.isVideoTexture!==!0,nt=W.__version===void 0||j===!0,P=J.dataReady;let re=F(_,Ce);ze(i.TEXTURE_CUBE_MAP,_);let H;if(Xe){Ne&&nt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,re,ke,Ce.width,Ce.height);for(let K=0;K<6;K++){H=pe[K].mipmaps;for(let ue=0;ue<H.length;ue++){const ce=H[ue];_.format!==Xt?De!==null?Ne?P&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,0,0,ce.width,ce.height,De,ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,ke,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,0,0,ce.width,ce.height,De,me,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,ke,ce.width,ce.height,0,De,me,ce.data)}}}else{if(H=_.mipmaps,Ne&&nt){H.length>0&&re++;const K=Se(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,re,ke,K.width,K.height)}for(let K=0;K<6;K++)if(te){Ne?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,pe[K].width,pe[K].height,De,me,pe[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ke,pe[K].width,pe[K].height,0,De,me,pe[K].data);for(let ue=0;ue<H.length;ue++){const Fe=H[ue].image[K].image;Ne?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,0,0,Fe.width,Fe.height,De,me,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,ke,Fe.width,Fe.height,0,De,me,Fe.data)}}else{Ne?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,De,me,pe[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ke,De,me,pe[K]);for(let ue=0;ue<H.length;ue++){const ce=H[ue];Ne?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,0,0,De,me,ce.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,ke,De,me,ce.image[K])}}}g(_)&&u(i.TEXTURE_CUBE_MAP),W.__version=J.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function _e(T,_,O,j,J,W){const xe=o.convert(O.format,O.colorSpace),le=o.convert(O.type),fe=b(O.internalFormat,xe,le,O.colorSpace),Xe=n.get(_),te=n.get(O);if(te.__renderTarget=_,!Xe.__hasExternalTextures){const pe=Math.max(1,_.width>>W),Ce=Math.max(1,_.height>>W);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,W,fe,pe,Ce,_.depth,0,xe,le,null):t.texImage2D(J,W,fe,pe,Ce,0,xe,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ge(_)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,te.__webglTexture,0,He(_)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,J,te.__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(T,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){const j=_.depthTexture,J=j&&j.isDepthTexture?j.type:null,W=y(_.stencilBuffer,J),xe=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=He(_);Ge(_)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,W,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,W,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,W,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,T)}else{const j=_.textures;for(let J=0;J<j.length;J++){const W=j[J],xe=o.convert(W.format,W.colorSpace),le=o.convert(W.type),fe=b(W.internalFormat,xe,le,W.colorSpace),Xe=He(_);O&&Ge(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,fe,_.width,_.height):Ge(_)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe,fe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,fe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(_.depthTexture);j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$(_.depthTexture,0);const J=j.__webglTexture,W=He(_);if(_.depthTexture.format===Oi)Ge(_)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(_.depthTexture.format===ki)Ge(_)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Le(T){const _=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=j}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Re(_.__webglFramebuffer,T)}else if(O){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=i.createRenderbuffer(),se(_.__webglDepthbuffer[j],T,!1);else{const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,W)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),se(_.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,J)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(T,_,O){const j=n.get(T);_!==void 0&&_e(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Le(T)}function ot(T){const _=T.texture,O=n.get(T),j=n.get(_);T.addEventListener("dispose",C);const J=T.textures,W=T.isWebGLCubeRenderTarget===!0,xe=J.length>1;if(xe||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=_.version,a.memory.textures++),W){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let fe=0;fe<_.mipmaps.length;fe++)O.__webglFramebuffer[le][fe]=i.createFramebuffer()}else O.__webglFramebuffer[le]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<_.mipmaps.length;le++)O.__webglFramebuffer[le]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(xe)for(let le=0,fe=J.length;le<fe;le++){const Xe=n.get(J[le]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Ge(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){const fe=J[le];O.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[le]);const Xe=o.convert(fe.format,fe.colorSpace),te=o.convert(fe.type),pe=b(fe.internalFormat,Xe,te,fe.colorSpace,T.isXRRenderTarget===!0),Ce=He(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,pe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,O.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),se(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ze(i.TEXTURE_CUBE_MAP,_);for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)_e(O.__webglFramebuffer[le][fe],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,fe);else _e(O.__webglFramebuffer[le],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(_)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let le=0,fe=J.length;le<fe;le++){const Xe=J[le],te=n.get(Xe);t.bindTexture(i.TEXTURE_2D,te.__webglTexture),ze(i.TEXTURE_2D,Xe),_e(O.__webglFramebuffer,T,Xe,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,0),g(Xe)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(le=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,j.__webglTexture),ze(le,_),_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)_e(O.__webglFramebuffer[fe],T,_,i.COLOR_ATTACHMENT0,le,fe);else _e(O.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,le,0);g(_)&&u(le),t.unbindTexture()}T.depthBuffer&&Le(T)}function We(T){const _=T.textures;for(let O=0,j=_.length;O<j;O++){const J=_[O];if(g(J)){const W=w(T),xe=n.get(J).__webglTexture;t.bindTexture(W,xe),u(W),t.unbindTexture()}}}const ut=[],A=[];function qt(T){if(T.samples>0){if(Ge(T)===!1){const _=T.textures,O=T.width,j=T.height;let J=i.COLOR_BUFFER_BIT;const W=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(T),le=_.length>1;if(le)for(let fe=0;fe<_.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);const Xe=n.get(_[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xe,0)}i.blitFramebuffer(0,0,O,j,0,0,O,j,J,i.NEAREST),l===!0&&(ut.length=0,A.length=0,ut.push(i.COLOR_ATTACHMENT0+fe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ut.push(W),A.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let fe=0;fe<_.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);const Xe=n.get(_[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function He(T){return Math.min(r.maxSamples,T.samples)}function Ge(T){const _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ee(T){const _=a.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function it(T,_){const O=T.colorSpace,j=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==ci&&O!==bn&&(qe.getTransfer(O)===Qe?(j!==Xt||J!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function Se(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=X,this.setTexture2D=$,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=G,this.rebindTextures=Ve,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ge}function Zm(i,e){function t(n,r=bn){let o;const a=qe.getTransfer(r);if(n===ln)return i.UNSIGNED_BYTE;if(n===Za)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hl)return i.BYTE;if(n===Gl)return i.SHORT;if(n===pr)return i.UNSIGNED_SHORT;if(n===Ka)return i.INT;if(n===li)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===dn)return i.HALF_FLOAT;if(n===Wl)return i.ALPHA;if(n===Xl)return i.RGB;if(n===Xt)return i.RGBA;if(n===Yl)return i.LUMINANCE;if(n===ql)return i.LUMINANCE_ALPHA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===jl)return i.RED;if(n===Ja)return i.RED_INTEGER;if(n===Kl)return i.RG;if(n===Qa)return i.RG_INTEGER;if(n===es)return i.RGBA_INTEGER;if(n===Jr||n===Qr||n===eo||n===to)if(a===Qe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Jr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===eo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===to)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Jr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===eo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===to)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ma||n===ga||n===va||n===_a)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ma)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ga)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===va)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_a)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xa||n===Sa||n===Ma)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===xa||n===Sa)return a===Qe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ma)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ya||n===Ea||n===Ta||n===ba||n===wa||n===Aa||n===Ca||n===Ra||n===Da||n===Pa||n===La||n===Ua||n===Fa||n===Ia)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ya)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ea)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ta)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ba)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wa)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Aa)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ca)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ra)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Da)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ua)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fa)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ia)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===no||n===Na||n===Oa)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===no)return a===Qe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Na)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oa)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zl||n===Ba||n===za||n===Va)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===no)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Ba)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Va)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const $m={type:"move"};class ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const g=t.getJointPose(S,n),u=this._getHandJoint(c,S);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const h=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],p=h.position.distanceTo(m.position),d=.02,v=.005;c.inputState.pinching&&p>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent($m)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ar;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Jm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class eg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Ot,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gt({vertexShader:Jm,fragmentShader:Qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new Ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tg extends di{constructor(e,t){super();const n=this;let r=null,o=1,a=null,s="local-floor",l=1,c=null,h=null,m=null,p=null,d=null,v=null;const S=new eg,g=t.getContextAttributes();let u=null,w=null;const b=[],y=[],F=new be;let D=null;const C=new $t;C.viewport=new ht;const N=new $t;N.viewport=new ht;const E=[C,N],M=new xh;let R=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=b[Y];return ne===void 0&&(ne=new ta,b[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=b[Y];return ne===void 0&&(ne=new ta,b[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=b[Y];return ne===void 0&&(ne=new ta,b[Y]=ne),ne.getHandSpace()};function V(Y){const ne=y.indexOf(Y.inputSource);if(ne===-1)return;const _e=b[ne];_e!==void 0&&(_e.update(Y.inputSource,Y.frame,c||a),_e.dispatchEvent({type:Y.type,data:Y.inputSource}))}function Z(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",$);for(let Y=0;Y<b.length;Y++){const ne=y[Y];ne!==null&&(y[Y]=null,b[Y].disconnect(ne))}R=null,X=null,S.reset(),e.setRenderTarget(u),d=null,p=null,m=null,r=null,w=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return m},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(F),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let _e=null,se=null,Re=null;g.depth&&(Re=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=g.stencil?ki:Oi,se=g.stencil?Gi:li);const Le={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:o};m=new XRWebGLBinding(r,t),p=m.createProjectionLayer(Le),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),w=new Yt(p.textureWidth,p.textureHeight,{format:Xt,type:ln,depthTexture:new cc(p.textureWidth,p.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}else{const _e={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new Yt(d.framebufferWidth,d.framebufferHeight,{format:Xt,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(s),tt.setContext(r),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function $(Y){for(let ne=0;ne<Y.removed.length;ne++){const _e=Y.removed[ne],se=y.indexOf(_e);se>=0&&(y[se]=null,b[se].disconnect(_e))}for(let ne=0;ne<Y.added.length;ne++){const _e=Y.added[ne];let se=y.indexOf(_e);if(se===-1){for(let Le=0;Le<b.length;Le++)if(Le>=y.length){y.push(_e),se=Le;break}else if(y[Le]===null){y[Le]=_e,se=Le;break}if(se===-1)break}const Re=b[se];Re&&Re.connect(_e)}}const q=new I,Q=new I;function G(Y,ne,_e){q.setFromMatrixPosition(ne.matrixWorld),Q.setFromMatrixPosition(_e.matrixWorld);const se=q.distanceTo(Q),Re=ne.projectionMatrix.elements,Le=_e.projectionMatrix.elements,Ve=Re[14]/(Re[10]-1),ot=Re[14]/(Re[10]+1),We=(Re[9]+1)/Re[5],ut=(Re[9]-1)/Re[5],A=(Re[8]-1)/Re[0],qt=(Le[8]+1)/Le[0],He=Ve*A,Ge=Ve*qt,Ee=se/(-A+qt),it=Ee*-A;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(it),Y.translateZ(Ee),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Re[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Se=Ve+Ee,T=ot+Ee,_=He-it,O=Ge+(se-it),j=We*ot/T*Se,J=ut*ot/T*Se;Y.projectionMatrix.makePerspective(_,O,j,J,Se,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ae(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ne=Y.near,_e=Y.far;S.texture!==null&&(S.depthNear>0&&(ne=S.depthNear),S.depthFar>0&&(_e=S.depthFar)),M.near=N.near=C.near=ne,M.far=N.far=C.far=_e,(R!==M.near||X!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,X=M.far),C.layers.mask=Y.layers.mask|2,N.layers.mask=Y.layers.mask|4,M.layers.mask=C.layers.mask|N.layers.mask;const se=Y.parent,Re=M.cameras;ae(M,se);for(let Le=0;Le<Re.length;Le++)ae(Re[Le],se);Re.length===2?G(M,C,N):M.projectionMatrix.copy(C.projectionMatrix),de(Y,M,se)};function de(Y,ne,_e){_e===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(_e.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=mr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(Y){l=Y,p!==null&&(p.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(M)};let ye=null;function ze(Y,ne){if(h=ne.getViewerPose(c||a),v=ne,h!==null){const _e=h.views;d!==null&&(e.setRenderTargetFramebuffer(w,d.framebuffer),e.setRenderTarget(w));let se=!1;_e.length!==M.cameras.length&&(M.cameras.length=0,se=!0);for(let Le=0;Le<_e.length;Le++){const Ve=_e[Le];let ot=null;if(d!==null)ot=d.getViewport(Ve);else{const ut=m.getViewSubImage(p,Ve);ot=ut.viewport,Le===0&&(e.setRenderTargetTextures(w,ut.colorTexture,p.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(w))}let We=E[Le];We===void 0&&(We=new $t,We.layers.enable(Le),We.viewport=new ht,E[Le]=We),We.matrix.fromArray(Ve.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ve.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ot.x,ot.y,ot.width,ot.height),Le===0&&(M.matrix.copy(We.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),se===!0&&M.cameras.push(We)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Le=m.getDepthInformation(_e[0]);Le&&Le.isValid&&Le.texture&&S.init(e,Le,r.renderState)}}for(let _e=0;_e<b.length;_e++){const se=y[_e],Re=b[_e];se!==null&&Re!==void 0&&Re.update(se,ne,c||a)}ye&&ye(Y,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),v=null}const tt=new uc;tt.setAnimationLoop(ze),this.setAnimationLoop=function(Y){ye=Y},this.dispose=function(){}}}const ei=new Un,ng=new dt;function ig(i,e){function t(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function n(g,u){u.color.getRGB(g.fogColor.value,oc(i)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,w,b,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(g,u):u.isMeshToonMaterial?(o(g,u),m(g,u)):u.isMeshPhongMaterial?(o(g,u),h(g,u)):u.isMeshStandardMaterial?(o(g,u),p(g,u),u.isMeshPhysicalMaterial&&d(g,u,y)):u.isMeshMatcapMaterial?(o(g,u),v(g,u)):u.isMeshDepthMaterial?o(g,u):u.isMeshDistanceMaterial?(o(g,u),S(g,u)):u.isMeshNormalMaterial?o(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&s(g,u)):u.isPointsMaterial?l(g,u,w,b):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,t(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===Lt&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,t(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===Lt&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,t(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,t(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const w=e.get(u),b=w.envMap,y=w.envMapRotation;b&&(g.envMap.value=b,ei.copy(y),ei.x*=-1,ei.y*=-1,ei.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),g.envMapRotation.value.setFromMatrix4(ng.makeRotationFromEuler(ei)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform))}function s(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,w,b){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*w,g.scale.value=b*.5,u.map&&(g.map.value=u.map,t(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function m(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function p(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function d(g,u,w){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Lt&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,u){u.matcap&&(g.matcap.value=u.matcap)}function S(g,u){const w=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function rg(i,e,t,n){let r={},o={},a=[];const s=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const y=b.program;n.uniformBlockBinding(w,y)}function c(w,b){let y=r[w.id];y===void 0&&(v(w),y=h(w),r[w.id]=y,w.addEventListener("dispose",g));const F=b.program;n.updateUBOMapping(w,F);const D=e.render.frame;o[w.id]!==D&&(p(w),o[w.id]=D)}function h(w){const b=m();w.__bindingPointIndex=b;const y=i.createBuffer(),F=w.__size,D=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,F,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function m(){for(let w=0;w<s;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){const b=r[w.id],y=w.uniforms,F=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let D=0,C=y.length;D<C;D++){const N=Array.isArray(y[D])?y[D]:[y[D]];for(let E=0,M=N.length;E<M;E++){const R=N[E];if(d(R,D,E,F)===!0){const X=R.__offset,V=Array.isArray(R.value)?R.value:[R.value];let Z=0;for(let $=0;$<V.length;$++){const q=V[$],Q=S(q);typeof q=="number"||typeof q=="boolean"?(R.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,X+Z,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=0,R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=0,R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=0):(q.toArray(R.__data,Z),Z+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(w,b,y,F){const D=w.value,C=b+"_"+y;if(F[C]===void 0)return typeof D=="number"||typeof D=="boolean"?F[C]=D:F[C]=D.clone(),!0;{const N=F[C];if(typeof D=="number"||typeof D=="boolean"){if(N!==D)return F[C]=D,!0}else if(N.equals(D)===!1)return N.copy(D),!0}return!1}function v(w){const b=w.uniforms;let y=0;const F=16;for(let C=0,N=b.length;C<N;C++){const E=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,R=E.length;M<R;M++){const X=E[M],V=Array.isArray(X.value)?X.value:[X.value];for(let Z=0,$=V.length;Z<$;Z++){const q=V[Z],Q=S(q),G=y%F,ae=G%Q.boundary,de=G+ae;y+=ae,de!==0&&F-de<Q.storage&&(y+=F-de),X.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=y,y+=Q.storage}}}const D=y%F;return D>0&&(y+=F-D),w.__size=y,w.__cache={},this}function S(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function g(w){const b=w.target;b.removeEventListener("dispose",g);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete o[b.id]}function u(){for(const w in r)i.deleteBuffer(r[w]);a=[],r={},o={}}return{bind:l,update:c,dispose:u}}class og{constructor(e={}){const{canvas:t=Hu(),context:n=null,depth:r=!0,stencil:o=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const v=new Uint32Array(4),S=new Int32Array(4);let g=null,u=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this.toneMapping=kn,this.toneMappingExposure=1;const y=this;let F=!1,D=0,C=0,N=null,E=-1,M=null;const R=new ht,X=new ht;let V=null;const Z=new we(0);let $=0,q=t.width,Q=t.height,G=1,ae=null,de=null;const ye=new ht(0,0,q,Q),ze=new ht(0,0,q,Q);let tt=!1;const Y=new lc;let ne=!1,_e=!1;this.transmissionResolutionScale=1;const se=new dt,Re=new dt,Le=new I,Ve=new ht,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function ut(){return N===null?G:1}let A=n;function qt(x,L){return t.getContext(x,L)}try{const x={alpha:!0,depth:r,stencil:o,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qa}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",ce,!1),A===null){const L="webgl2";if(A=qt(L,x),A===null)throw qt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let He,Ge,Ee,it,Se,T,_,O,j,J,W,xe,le,fe,Xe,te,pe,Ce,De,me,ke,Ne,nt,P;function re(){He=new pp(A),He.init(),Ne=new Zm(A,He),Ge=new lp(A,He,e,Ne),Ee=new jm(A,He),Ge.reverseDepthBuffer&&p&&Ee.buffers.depth.setReversed(!0),it=new vp(A),Se=new Im,T=new Km(A,He,Ee,Se,Ge,Ne,it),_=new up(y),O=new fp(y),j=new Eh(A),nt=new ap(A,j),J=new mp(A,j,it,nt),W=new xp(A,J,j,it),De=new _p(A,Ge,T),te=new cp(Se),xe=new Fm(y,_,O,He,Ge,nt,te),le=new ig(y,Se),fe=new Om,Xe=new km(He),Ce=new op(y,_,O,Ee,W,d,l),pe=new Ym(y,W,Ge),P=new rg(A,it,Ge,Ee),me=new sp(A,He,it),ke=new gp(A,He,it),it.programs=xe.programs,y.capabilities=Ge,y.extensions=He,y.properties=Se,y.renderLists=fe,y.shadowMap=pe,y.state=Ee,y.info=it}re();const H=new tg(y,A);this.xr=H,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const x=He.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=He.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(x){x!==void 0&&(G=x,this.setSize(q,Q,!1))},this.getSize=function(x){return x.set(q,Q)},this.setSize=function(x,L,B=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=x,Q=L,t.width=Math.floor(x*G),t.height=Math.floor(L*G),B===!0&&(t.style.width=x+"px",t.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(q*G,Q*G).floor()},this.setDrawingBufferSize=function(x,L,B){q=x,Q=L,G=B,t.width=Math.floor(x*B),t.height=Math.floor(L*B),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(R)},this.getViewport=function(x){return x.copy(ye)},this.setViewport=function(x,L,B,z){x.isVector4?ye.set(x.x,x.y,x.z,x.w):ye.set(x,L,B,z),Ee.viewport(R.copy(ye).multiplyScalar(G).round())},this.getScissor=function(x){return x.copy(ze)},this.setScissor=function(x,L,B,z){x.isVector4?ze.set(x.x,x.y,x.z,x.w):ze.set(x,L,B,z),Ee.scissor(X.copy(ze).multiplyScalar(G).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(x){Ee.setScissorTest(tt=x)},this.setOpaqueSort=function(x){ae=x},this.setTransparentSort=function(x){de=x},this.getClearColor=function(x){return x.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(x=!0,L=!0,B=!0){let z=0;if(x){let U=!1;if(N!==null){const ee=N.texture.format;U=ee===es||ee===Qa||ee===Ja}if(U){const ee=N.texture.type,oe=ee===ln||ee===li||ee===pr||ee===Gi||ee===Za||ee===$a,he=Ce.getClearColor(),ge=Ce.getClearAlpha(),Pe=he.r,Ue=he.g,Te=he.b;oe?(v[0]=Pe,v[1]=Ue,v[2]=Te,v[3]=ge,A.clearBufferuiv(A.COLOR,0,v)):(S[0]=Pe,S[1]=Ue,S[2]=Te,S[3]=ge,A.clearBufferiv(A.COLOR,0,S))}else z|=A.COLOR_BUFFER_BIT}L&&(z|=A.DEPTH_BUFFER_BIT),B&&(z|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Ce.dispose(),fe.dispose(),Xe.dispose(),Se.dispose(),_.dispose(),O.dispose(),W.dispose(),nt.dispose(),P.dispose(),xe.dispose(),H.dispose(),H.removeEventListener("sessionstart",ms),H.removeEventListener("sessionend",gs),qn.stop()};function K(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const x=it.autoReset,L=pe.enabled,B=pe.autoUpdate,z=pe.needsUpdate,U=pe.type;re(),it.autoReset=x,pe.enabled=L,pe.autoUpdate=B,pe.needsUpdate=z,pe.type=U}function ce(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Fe(x){const L=x.target;L.removeEventListener("dispose",Fe),at(L)}function at(x){bt(x),Se.remove(x)}function bt(x){const L=Se.get(x).programs;L!==void 0&&(L.forEach(function(B){xe.releaseProgram(B)}),x.isShaderMaterial&&xe.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,B,z,U,ee){L===null&&(L=ot);const oe=U.isMesh&&U.matrixWorld.determinant()<0,he=Oc(x,L,B,z,U);Ee.setMaterial(z,oe);let ge=B.index,Pe=1;if(z.wireframe===!0){if(ge=J.getWireframeAttribute(B),ge===void 0)return;Pe=2}const Ue=B.drawRange,Te=B.attributes.position;let Ye=Ue.start*Pe,Ke=(Ue.start+Ue.count)*Pe;ee!==null&&(Ye=Math.max(Ye,ee.start*Pe),Ke=Math.min(Ke,(ee.start+ee.count)*Pe)),ge!==null?(Ye=Math.max(Ye,0),Ke=Math.min(Ke,ge.count)):Te!=null&&(Ye=Math.max(Ye,0),Ke=Math.min(Ke,Te.count));const ft=Ke-Ye;if(ft<0||ft===1/0)return;nt.setup(U,z,he,B,ge);let st,je=me;if(ge!==null&&(st=j.get(ge),je=ke,je.setIndex(st)),U.isMesh)z.wireframe===!0?(Ee.setLineWidth(z.wireframeLinewidth*ut()),je.setMode(A.LINES)):je.setMode(A.TRIANGLES);else if(U.isLine){let Ae=z.linewidth;Ae===void 0&&(Ae=1),Ee.setLineWidth(Ae*ut()),U.isLineSegments?je.setMode(A.LINES):U.isLineLoop?je.setMode(A.LINE_LOOP):je.setMode(A.LINE_STRIP)}else U.isPoints?je.setMode(A.POINTS):U.isSprite&&je.setMode(A.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)je.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))je.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ae=U._multiDrawStarts,yt=U._multiDrawCounts,Ze=U._multiDrawCount,en=ge?j.get(ge).bytesPerElement:1,vi=Se.get(z).currentProgram.getUniforms();for(let Ht=0;Ht<Ze;Ht++)vi.setValue(A,"_gl_DrawID",Ht),je.render(Ae[Ht]/en,yt[Ht])}else if(U.isInstancedMesh)je.renderInstances(Ye,ft,U.count);else if(B.isInstancedBufferGeometry){const Ae=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,yt=Math.min(B.instanceCount,Ae);je.renderInstances(Ye,ft,yt)}else je.render(Ye,ft)};function Je(x,L,B){x.transparent===!0&&x.side===Tn&&x.forceSinglePass===!1?(x.side=Lt,x.needsUpdate=!0,wr(x,L,B),x.side=Ln,x.needsUpdate=!0,wr(x,L,B),x.side=Tn):wr(x,L,B)}this.compile=function(x,L,B=null){B===null&&(B=x),u=Xe.get(B),u.init(L),b.push(u),B.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),x!==B&&x.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const z=new Set;return x.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ee=U.material;if(ee)if(Array.isArray(ee))for(let oe=0;oe<ee.length;oe++){const he=ee[oe];Je(he,B,U),z.add(he)}else Je(ee,B,U),z.add(ee)}),b.pop(),u=null,z},this.compileAsync=function(x,L,B=null){const z=this.compile(x,L,B);return new Promise(U=>{function ee(){if(z.forEach(function(oe){Se.get(oe).currentProgram.isReady()&&z.delete(oe)}),z.size===0){U(x);return}setTimeout(ee,10)}He.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Qt=null;function gn(x){Qt&&Qt(x)}function ms(){qn.stop()}function gs(){qn.start()}const qn=new uc;qn.setAnimationLoop(gn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(x){Qt=x,H.setAnimationLoop(x),x===null?qn.stop():qn.start()},H.addEventListener("sessionstart",ms),H.addEventListener("sessionend",gs),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(L),L=H.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,L,N),u=Xe.get(x,b.length),u.init(L),b.push(u),Re.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Y.setFromProjectionMatrix(Re),_e=this.localClippingEnabled,ne=te.init(this.clippingPlanes,_e),g=fe.get(x,w.length),g.init(),w.push(g),H.enabled===!0&&H.isPresenting===!0){const ee=y.xr.getDepthSensingMesh();ee!==null&&wo(ee,L,-1/0,y.sortObjects)}wo(x,L,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ae,de),We=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,We&&Ce.addToRenderList(g,x),this.info.render.frame++,ne===!0&&te.beginShadows();const B=u.state.shadowsArray;pe.render(B,x,L),ne===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=g.opaque,U=g.transmissive;if(u.setupLights(),L.isArrayCamera){const ee=L.cameras;if(U.length>0)for(let oe=0,he=ee.length;oe<he;oe++){const ge=ee[oe];_s(z,U,x,ge)}We&&Ce.render(x);for(let oe=0,he=ee.length;oe<he;oe++){const ge=ee[oe];vs(g,x,ge,ge.viewport)}}else U.length>0&&_s(z,U,x,L),We&&Ce.render(x),vs(g,x,L);N!==null&&C===0&&(T.updateMultisampleRenderTarget(N),T.updateRenderTargetMipmap(N)),x.isScene===!0&&x.onAfterRender(y,x,L),nt.resetDefaultState(),E=-1,M=null,b.pop(),b.length>0?(u=b[b.length-1],ne===!0&&te.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function wo(x,L,B,z){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)u.pushLight(x),x.castShadow&&u.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Y.intersectsSprite(x)){z&&Ve.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Re);const oe=W.update(x),he=x.material;he.visible&&g.push(x,oe,he,B,Ve.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Y.intersectsObject(x))){const oe=W.update(x),he=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ve.copy(x.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Ve.copy(oe.boundingSphere.center)),Ve.applyMatrix4(x.matrixWorld).applyMatrix4(Re)),Array.isArray(he)){const ge=oe.groups;for(let Pe=0,Ue=ge.length;Pe<Ue;Pe++){const Te=ge[Pe],Ye=he[Te.materialIndex];Ye&&Ye.visible&&g.push(x,oe,Ye,B,Ve.z,Te)}}else he.visible&&g.push(x,oe,he,B,Ve.z,null)}}const ee=x.children;for(let oe=0,he=ee.length;oe<he;oe++)wo(ee[oe],L,B,z)}function vs(x,L,B,z){const U=x.opaque,ee=x.transmissive,oe=x.transparent;u.setupLightsView(B),ne===!0&&te.setGlobalState(y.clippingPlanes,B),z&&Ee.viewport(R.copy(z)),U.length>0&&br(U,L,B),ee.length>0&&br(ee,L,B),oe.length>0&&br(oe,L,B),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function _s(x,L,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[z.id]===void 0&&(u.state.transmissionRenderTarget[z.id]=new Yt(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?dn:ln,minFilter:oi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const ee=u.state.transmissionRenderTarget[z.id],oe=z.viewport||R;ee.setSize(oe.z*y.transmissionResolutionScale,oe.w*y.transmissionResolutionScale);const he=y.getRenderTarget();y.setRenderTarget(ee),y.getClearColor(Z),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),We&&Ce.render(B);const ge=y.toneMapping;y.toneMapping=kn;const Pe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),u.setupLightsView(z),ne===!0&&te.setGlobalState(y.clippingPlanes,z),br(x,B,z),T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Te=0,Ye=L.length;Te<Ye;Te++){const Ke=L[Te],ft=Ke.object,st=Ke.geometry,je=Ke.material,Ae=Ke.group;if(je.side===Tn&&ft.layers.test(z.layers)){const yt=je.side;je.side=Lt,je.needsUpdate=!0,xs(ft,B,z,st,je,Ae),je.side=yt,je.needsUpdate=!0,Ue=!0}}Ue===!0&&(T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee))}y.setRenderTarget(he),y.setClearColor(Z,$),Pe!==void 0&&(z.viewport=Pe),y.toneMapping=ge}function br(x,L,B){const z=L.isScene===!0?L.overrideMaterial:null;for(let U=0,ee=x.length;U<ee;U++){const oe=x[U],he=oe.object,ge=oe.geometry,Pe=z===null?oe.material:z,Ue=oe.group;he.layers.test(B.layers)&&xs(he,L,B,ge,Pe,Ue)}}function xs(x,L,B,z,U,ee){x.onBeforeRender(y,L,B,z,U,ee),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),U.onBeforeRender(y,L,B,z,x,ee),U.transparent===!0&&U.side===Tn&&U.forceSinglePass===!1?(U.side=Lt,U.needsUpdate=!0,y.renderBufferDirect(B,L,z,U,x,ee),U.side=Ln,U.needsUpdate=!0,y.renderBufferDirect(B,L,z,U,x,ee),U.side=Tn):y.renderBufferDirect(B,L,z,U,x,ee),x.onAfterRender(y,L,B,z,U,ee)}function wr(x,L,B){L.isScene!==!0&&(L=ot);const z=Se.get(x),U=u.state.lights,ee=u.state.shadowsArray,oe=U.state.version,he=xe.getParameters(x,U.state,ee,L,B),ge=xe.getProgramCacheKey(he);let Pe=z.programs;z.environment=x.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(x.isMeshStandardMaterial?O:_).get(x.envMap||z.environment),z.envMapRotation=z.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,Pe===void 0&&(x.addEventListener("dispose",Fe),Pe=new Map,z.programs=Pe);let Ue=Pe.get(ge);if(Ue!==void 0){if(z.currentProgram===Ue&&z.lightsStateVersion===oe)return Ms(x,he),Ue}else he.uniforms=xe.getUniforms(x),x.onBeforeCompile(he,y),Ue=xe.acquireProgram(he,ge),Pe.set(ge,Ue),z.uniforms=he.uniforms;const Te=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Te.clippingPlanes=te.uniform),Ms(x,he),z.needsLights=zc(x),z.lightsStateVersion=oe,z.needsLights&&(Te.ambientLightColor.value=U.state.ambient,Te.lightProbe.value=U.state.probe,Te.directionalLights.value=U.state.directional,Te.directionalLightShadows.value=U.state.directionalShadow,Te.spotLights.value=U.state.spot,Te.spotLightShadows.value=U.state.spotShadow,Te.rectAreaLights.value=U.state.rectArea,Te.ltc_1.value=U.state.rectAreaLTC1,Te.ltc_2.value=U.state.rectAreaLTC2,Te.pointLights.value=U.state.point,Te.pointLightShadows.value=U.state.pointShadow,Te.hemisphereLights.value=U.state.hemi,Te.directionalShadowMap.value=U.state.directionalShadowMap,Te.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Te.spotShadowMap.value=U.state.spotShadowMap,Te.spotLightMatrix.value=U.state.spotLightMatrix,Te.spotLightMap.value=U.state.spotLightMap,Te.pointShadowMap.value=U.state.pointShadowMap,Te.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Ue,z.uniformsList=null,Ue}function Ss(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=io.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function Ms(x,L){const B=Se.get(x);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function Oc(x,L,B,z,U){L.isScene!==!0&&(L=ot),T.resetTextureUnits();const ee=L.fog,oe=z.isMeshStandardMaterial?L.environment:null,he=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ci,ge=(z.isMeshStandardMaterial?O:_).get(z.envMap||oe),Pe=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ue=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!B.morphAttributes.position,Ye=!!B.morphAttributes.normal,Ke=!!B.morphAttributes.color;let ft=kn;z.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ft=y.toneMapping);const st=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,je=st!==void 0?st.length:0,Ae=Se.get(z),yt=u.state.lights;if(ne===!0&&(_e===!0||x!==M)){const Rt=x===M&&z.id===E;te.setState(z,x,Rt)}let Ze=!1;z.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==yt.state.version||Ae.outputColorSpace!==he||U.isBatchedMesh&&Ae.batching===!1||!U.isBatchedMesh&&Ae.batching===!0||U.isBatchedMesh&&Ae.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ae.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ae.instancing===!1||!U.isInstancedMesh&&Ae.instancing===!0||U.isSkinnedMesh&&Ae.skinning===!1||!U.isSkinnedMesh&&Ae.skinning===!0||U.isInstancedMesh&&Ae.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ae.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ae.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ae.instancingMorph===!1&&U.morphTexture!==null||Ae.envMap!==ge||z.fog===!0&&Ae.fog!==ee||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==te.numPlanes||Ae.numIntersection!==te.numIntersection)||Ae.vertexAlphas!==Pe||Ae.vertexTangents!==Ue||Ae.morphTargets!==Te||Ae.morphNormals!==Ye||Ae.morphColors!==Ke||Ae.toneMapping!==ft||Ae.morphTargetsCount!==je)&&(Ze=!0):(Ze=!0,Ae.__version=z.version);let en=Ae.currentProgram;Ze===!0&&(en=wr(z,L,U));let vi=!1,Ht=!1,er=!1;const rt=en.getUniforms(),jt=Ae.uniforms;if(Ee.useProgram(en.program)&&(vi=!0,Ht=!0,er=!0),z.id!==E&&(E=z.id,Ht=!0),vi||M!==x){Ee.buffers.depth.getReversed()?(se.copy(x.projectionMatrix),ku(se),Wu(se),rt.setValue(A,"projectionMatrix",se)):rt.setValue(A,"projectionMatrix",x.projectionMatrix),rt.setValue(A,"viewMatrix",x.matrixWorldInverse);const Ut=rt.map.cameraPosition;Ut!==void 0&&Ut.setValue(A,Le.setFromMatrixPosition(x.matrixWorld)),Ge.logarithmicDepthBuffer&&rt.setValue(A,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&rt.setValue(A,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,Ht=!0,er=!0)}if(U.isSkinnedMesh){rt.setOptional(A,U,"bindMatrix"),rt.setOptional(A,U,"bindMatrixInverse");const Rt=U.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),rt.setValue(A,"boneTexture",Rt.boneTexture,T))}U.isBatchedMesh&&(rt.setOptional(A,U,"batchingTexture"),rt.setValue(A,"batchingTexture",U._matricesTexture,T),rt.setOptional(A,U,"batchingIdTexture"),rt.setValue(A,"batchingIdTexture",U._indirectTexture,T),rt.setOptional(A,U,"batchingColorTexture"),U._colorsTexture!==null&&rt.setValue(A,"batchingColorTexture",U._colorsTexture,T));const Kt=B.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&De.update(U,B,en),(Ht||Ae.receiveShadow!==U.receiveShadow)&&(Ae.receiveShadow=U.receiveShadow,rt.setValue(A,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(jt.envMap.value=ge,jt.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&L.environment!==null&&(jt.envMapIntensity.value=L.environmentIntensity),Ht&&(rt.setValue(A,"toneMappingExposure",y.toneMappingExposure),Ae.needsLights&&Bc(jt,er),ee&&z.fog===!0&&le.refreshFogUniforms(jt,ee),le.refreshMaterialUniforms(jt,z,G,Q,u.state.transmissionRenderTarget[x.id]),io.upload(A,Ss(Ae),jt,T)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(io.upload(A,Ss(Ae),jt,T),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&rt.setValue(A,"center",U.center),rt.setValue(A,"modelViewMatrix",U.modelViewMatrix),rt.setValue(A,"normalMatrix",U.normalMatrix),rt.setValue(A,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Rt=z.uniformsGroups;for(let Ut=0,Ao=Rt.length;Ut<Ao;Ut++){const jn=Rt[Ut];P.update(jn,en),P.bind(jn,en)}}return en}function Bc(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function zc(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(x,L,B){Se.get(x.texture).__webglTexture=L,Se.get(x.depthTexture).__webglTexture=B;const z=Se.get(x);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,L){const B=Se.get(x);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0};const Vc=A.createFramebuffer();this.setRenderTarget=function(x,L=0,B=0){N=x,D=L,C=B;let z=!0,U=null,ee=!1,oe=!1;if(x){const ge=Se.get(x);if(ge.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(A.FRAMEBUFFER,null),z=!1;else if(ge.__webglFramebuffer===void 0)T.setupRenderTarget(x);else if(ge.__hasExternalTextures)T.rebindTextures(x,Se.get(x.texture).__webglTexture,Se.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Te=x.depthTexture;if(ge.__boundDepthTexture!==Te){if(Te!==null&&Se.has(Te)&&(x.width!==Te.image.width||x.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(x)}}const Pe=x.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(oe=!0);const Ue=Se.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ue[L])?U=Ue[L][B]:U=Ue[L],ee=!0):x.samples>0&&T.useMultisampledRTT(x)===!1?U=Se.get(x).__webglMultisampledFramebuffer:Array.isArray(Ue)?U=Ue[B]:U=Ue,R.copy(x.viewport),X.copy(x.scissor),V=x.scissorTest}else R.copy(ye).multiplyScalar(G).floor(),X.copy(ze).multiplyScalar(G).floor(),V=tt;if(B!==0&&(U=Vc),Ee.bindFramebuffer(A.FRAMEBUFFER,U)&&z&&Ee.drawBuffers(x,U),Ee.viewport(R),Ee.scissor(X),Ee.setScissorTest(V),ee){const ge=Se.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+L,ge.__webglTexture,B)}else if(oe){const ge=Se.get(x.texture),Pe=L;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,ge.__webglTexture,B,Pe)}else if(x!==null&&B!==0){const ge=Se.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ge.__webglTexture,B)}E=-1},this.readRenderTargetPixels=function(x,L,B,z,U,ee,oe){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=Se.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&oe!==void 0&&(he=he[oe]),he){Ee.bindFramebuffer(A.FRAMEBUFFER,he);try{const ge=x.texture,Pe=ge.format,Ue=ge.type;if(!Ge.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-z&&B>=0&&B<=x.height-U&&A.readPixels(L,B,z,U,Ne.convert(Pe),Ne.convert(Ue),ee)}finally{const ge=N!==null?Se.get(N).__webglFramebuffer:null;Ee.bindFramebuffer(A.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(x,L,B,z,U,ee,oe){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=Se.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&oe!==void 0&&(he=he[oe]),he){const ge=x.texture,Pe=ge.format,Ue=ge.type;if(!Ge.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=x.width-z&&B>=0&&B<=x.height-U){Ee.bindFramebuffer(A.FRAMEBUFFER,he);const Te=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Te),A.bufferData(A.PIXEL_PACK_BUFFER,ee.byteLength,A.STREAM_READ),A.readPixels(L,B,z,U,Ne.convert(Pe),Ne.convert(Ue),0);const Ye=N!==null?Se.get(N).__webglFramebuffer:null;Ee.bindFramebuffer(A.FRAMEBUFFER,Ye);const Ke=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Gu(A,Ke,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Te),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ee),A.deleteBuffer(Te),A.deleteSync(Ke),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,L=null,B=0){x.isTexture!==!0&&(Ui("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,x=arguments[1]);const z=Math.pow(2,-B),U=Math.floor(x.image.width*z),ee=Math.floor(x.image.height*z),oe=L!==null?L.x:0,he=L!==null?L.y:0;T.setTexture2D(x,0),A.copyTexSubImage2D(A.TEXTURE_2D,B,0,0,oe,he,U,ee),Ee.unbindTexture()};const Hc=A.createFramebuffer(),Gc=A.createFramebuffer();this.copyTextureToTexture=function(x,L,B=null,z=null,U=0,ee=null){x.isTexture!==!0&&(Ui("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,x=arguments[1],L=arguments[2],ee=arguments[3]||0,B=null),ee===null&&(U!==0?(Ui("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=U,U=0):ee=0);let oe,he,ge,Pe,Ue,Te,Ye,Ke,ft;const st=x.isCompressedTexture?x.mipmaps[ee]:x.image;if(B!==null)oe=B.max.x-B.min.x,he=B.max.y-B.min.y,ge=B.isBox3?B.max.z-B.min.z:1,Pe=B.min.x,Ue=B.min.y,Te=B.isBox3?B.min.z:0;else{const Kt=Math.pow(2,-U);oe=Math.floor(st.width*Kt),he=Math.floor(st.height*Kt),x.isDataArrayTexture?ge=st.depth:x.isData3DTexture?ge=Math.floor(st.depth*Kt):ge=1,Pe=0,Ue=0,Te=0}z!==null?(Ye=z.x,Ke=z.y,ft=z.z):(Ye=0,Ke=0,ft=0);const je=Ne.convert(L.format),Ae=Ne.convert(L.type);let yt;L.isData3DTexture?(T.setTexture3D(L,0),yt=A.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(T.setTexture2DArray(L,0),yt=A.TEXTURE_2D_ARRAY):(T.setTexture2D(L,0),yt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,L.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,L.unpackAlignment);const Ze=A.getParameter(A.UNPACK_ROW_LENGTH),en=A.getParameter(A.UNPACK_IMAGE_HEIGHT),vi=A.getParameter(A.UNPACK_SKIP_PIXELS),Ht=A.getParameter(A.UNPACK_SKIP_ROWS),er=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,st.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,st.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Pe),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ue),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Te);const rt=x.isDataArrayTexture||x.isData3DTexture,jt=L.isDataArrayTexture||L.isData3DTexture;if(x.isDepthTexture){const Kt=Se.get(x),Rt=Se.get(L),Ut=Se.get(Kt.__renderTarget),Ao=Se.get(Rt.__renderTarget);Ee.bindFramebuffer(A.READ_FRAMEBUFFER,Ut.__webglFramebuffer),Ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ao.__webglFramebuffer);for(let jn=0;jn<ge;jn++)rt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Se.get(x).__webglTexture,U,Te+jn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Se.get(L).__webglTexture,ee,ft+jn)),A.blitFramebuffer(Pe,Ue,oe,he,Ye,Ke,oe,he,A.DEPTH_BUFFER_BIT,A.NEAREST);Ee.bindFramebuffer(A.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(U!==0||x.isRenderTargetTexture||Se.has(x)){const Kt=Se.get(x),Rt=Se.get(L);Ee.bindFramebuffer(A.READ_FRAMEBUFFER,Hc),Ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,Gc);for(let Ut=0;Ut<ge;Ut++)rt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Kt.__webglTexture,U,Te+Ut):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Kt.__webglTexture,U),jt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Rt.__webglTexture,ee,ft+Ut):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Rt.__webglTexture,ee),U!==0?A.blitFramebuffer(Pe,Ue,oe,he,Ye,Ke,oe,he,A.COLOR_BUFFER_BIT,A.NEAREST):jt?A.copyTexSubImage3D(yt,ee,Ye,Ke,ft+Ut,Pe,Ue,oe,he):A.copyTexSubImage2D(yt,ee,Ye,Ke,Pe,Ue,oe,he);Ee.bindFramebuffer(A.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else jt?x.isDataTexture||x.isData3DTexture?A.texSubImage3D(yt,ee,Ye,Ke,ft,oe,he,ge,je,Ae,st.data):L.isCompressedArrayTexture?A.compressedTexSubImage3D(yt,ee,Ye,Ke,ft,oe,he,ge,je,st.data):A.texSubImage3D(yt,ee,Ye,Ke,ft,oe,he,ge,je,Ae,st):x.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ee,Ye,Ke,oe,he,je,Ae,st.data):x.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ee,Ye,Ke,st.width,st.height,je,st.data):A.texSubImage2D(A.TEXTURE_2D,ee,Ye,Ke,oe,he,je,Ae,st);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ze),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,en),A.pixelStorei(A.UNPACK_SKIP_PIXELS,vi),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ht),A.pixelStorei(A.UNPACK_SKIP_IMAGES,er),ee===0&&L.generateMipmaps&&A.generateMipmap(yt),Ee.unbindTexture()},this.copyTextureToTexture3D=function(x,L,B=null,z=null,U=0){return x.isTexture!==!0&&(Ui("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,x=arguments[2],L=arguments[3],U=arguments[4]||0),Ui('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,L,B,z,U)},this.initRenderTarget=function(x){Se.get(x).__webglFramebuffer===void 0&&T.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?T.setTextureCube(x,0):x.isData3DTexture?T.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?T.setTexture2DArray(x,0):T.setTexture2D(x,0),Ee.unbindTexture()},this.resetState=function(){D=0,C=0,N=null,Ee.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const Ml={type:"change"},ss={type:"start"},mc={type:"end"},Zr=new ns,yl=new Vn,ag=Math.cos(70*si.DEG2RAD),_t=new I,Ft=2*Math.PI,et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},na=1e-6;class sg extends Mh{constructor(e,t=null){super(e,t),this.state=et.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ai.ROTATE,MIDDLE:ai.DOLLY,RIGHT:ai.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new ui,this._lastTargetPosition=new I,this._quat=new ui().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ks,this._sphericalDelta=new Ks,this._scale=1,this._panOffset=new I,this._rotateStart=new be,this._rotateEnd=new be,this._rotateDelta=new be,this._panStart=new be,this._panEnd=new be,this._panDelta=new be,this._dollyStart=new be,this._dollyEnd=new be,this._dollyDelta=new be,this._dollyDirection=new I,this._mouse=new be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cg.bind(this),this._onPointerDown=lg.bind(this),this._onPointerUp=ug.bind(this),this._onContextMenu=vg.bind(this),this._onMouseWheel=fg.bind(this),this._onKeyDown=pg.bind(this),this._onTouchStart=mg.bind(this),this._onTouchMove=gg.bind(this),this._onMouseDown=hg.bind(this),this._onMouseMove=dg.bind(this),this._interceptControlDown=_g.bind(this),this._interceptControlUp=xg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ml),this.update(),this.state=et.NONE}update(e=null){const t=this.object.position;_t.copy(t).sub(this.target),_t.applyQuaternion(this._quat),this._spherical.setFromVector3(_t),this.autoRotate&&this.state===et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ft:n>Math.PI&&(n-=Ft),r<-Math.PI?r+=Ft:r>Math.PI&&(r-=Ft),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=a!=this._spherical.radius}if(_t.setFromSpherical(this._spherical),_t.applyQuaternion(this._quatInverse),t.copy(this.target).add(_t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const s=_t.length();a=this._clampDistance(s*this._scale);const l=s-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const s=new I(this._mouse.x,this._mouse.y,0);s.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(s),this.object.updateMatrixWorld(),a=_t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Zr.origin.copy(this.object.position),Zr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zr.direction))<ag?this.object.lookAt(this.target):(yl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zr.intersectPlane(yl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>na||8*(1-this._lastQuaternion.dot(this.object.quaternion))>na||this._lastTargetPosition.distanceToSquared(this.target)>na?(this.dispatchEvent(Ml),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ft/60*this.autoRotateSpeed*e:Ft/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){_t.setFromMatrixColumn(t,0),_t.multiplyScalar(-e),this._panOffset.add(_t)}_panUp(e,t){this.screenSpacePanning===!0?_t.setFromMatrixColumn(t,1):(_t.setFromMatrixColumn(t,0),_t.crossVectors(this.object.up,_t)),_t.multiplyScalar(e),this._panOffset.add(_t)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;_t.copy(r).sub(this.target);let o=_t.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/n.clientHeight,this.object.matrix),this._panUp(2*t*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,o=t-n.top,a=n.width,s=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(o/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(n*n+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,s=(e.pageY+t.y)*.5;this._updateZoomParameters(a,s)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function lg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function cg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ug(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mc),this.state=et.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function hg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ai.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=et.DOLLY;break;case ai.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=et.ROTATE}break;case ai.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=et.PAN}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(ss)}function dg(i){switch(this.state){case et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function fg(i){this.enabled===!1||this.enableZoom===!1||this.state!==et.NONE||(i.preventDefault(),this.dispatchEvent(ss),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(mc))}function pg(i){this.enabled!==!1&&this._handleKeyDown(i)}function mg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Fi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=et.TOUCH_ROTATE;break;case Fi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=et.TOUCH_PAN;break;default:this.state=et.NONE}break;case 2:switch(this.touches.TWO){case Fi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=et.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=et.TOUCH_DOLLY_ROTATE;break;default:this.state=et.NONE}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(ss)}function gg(i){switch(this._trackPointer(i),this.state){case et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=et.NONE}}function vg(i){this.enabled!==!1&&i.preventDefault()}function _g(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const gc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class $i{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Sg=new Mo(-1,1,1,-1,0,1);class Mg extends cn{constructor(){super(),this.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Jt([0,2,0,0,2,0],2))}}const yg=new Mg;class ls{constructor(e){this._mesh=new Nt(yg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Sg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Eg extends $i{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=gr.clone(e.uniforms),this.material=new gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ls(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class El extends $i{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,s;this.inverse?(a=0,s=1):(a=1,s=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),o.buffers.stencil.setClear(s),o.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class Tg extends $i{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class bg{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new be);this._width=n.width,this._height=n.height,t=new Yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Eg(gc),this.copyPass.material.blending=Dn,this.clock=new Sh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,o=this.passes.length;r<o;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}El!==void 0&&(a instanceof El?n=!0:a instanceof Tg&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class wg extends $i{constructor(e,t,n=null,r=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new we}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const Ag={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new we(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Xi extends $i{constructor(e,t,n,r){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new be(e.x,e.y):new be(256,256),this.clearColor=new we(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Yt(o,a,{type:dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let m=0;m<this.nMips;m++){const p=new Yt(o,a,{type:dn});p.texture.name="UnrealBloomPass.h"+m,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const d=new Yt(o,a,{type:dn});d.texture.name="UnrealBloomPass.v"+m,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),o=Math.round(o/2),a=Math.round(a/2)}const s=Ag;this.highPassUniforms=gr.clone(s.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new gt({uniforms:this.highPassUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let m=0;m<this.nMips;m++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[m])),this.separableBlurMaterials[m].uniforms.invSize.value=new be(1/o,1/a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=gc;this.copyUniforms=gr.clone(h.uniforms),this.blendMaterial=new gt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:dr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new we,this.oldClearAlpha=1,this.basic=new is,this.fsQuad=new ls(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,r),this.renderTargetsVertical[o].setSize(n,r),this.separableBlurMaterials[o].uniforms.invSize.value=new be(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,o){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let s=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[l].uniforms.direction.value=Xi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Xi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),s=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new gt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new be(.5,.5)},direction:{value:new be(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new gt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Xi.BlurDirectionX=new be(1,0);Xi.BlurDirectionY=new be(0,1);const Cg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Rg extends $i{constructor(){super();const e=Cg;this.uniforms=gr.clone(e.uniforms),this.material=new gh({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ls(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},qe.getTransfer(this._outputColorSpace)===Qe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Il?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Nl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ol?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ja?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Bl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const ka=[{id:"1986780675169808394",label:"Log interference / violet",family:"Log interference",source:"float i,e,R,s;vec3 q,p,d=vec3(FC.xy/r-.5,.2);for(q.yz--;i++<99.;){o.rgb+=hsv(.6+e,.4,min(e*s*e/.01,.3-e)/9.);s=1.;p=q+=d*e*R*.3;p=vec3(log2(R=length(p))-t*.3,exp(-p.z/R+.5),atan(p.x,p.y)-t*.3)-1.5;for(e=--p.y;s<1e3;s+=s)e+=-abs(dot(cos(p.zxy*s),.2-sin(p*s)))/s*.24;}"},{id:"1877626433008496846",label:"Interference veil",family:"Log interference",source:"float i,e,R,s;vec3 q,p,d=vec3(FC.xy/r-vec2(.4),.4);for(q.xz--;i++<79.;){o.rgb+=hsv(e,-d.y,min(s*e,.4-e)/20.);s=1.;p=q+=d*e*R*.6;p=vec3(log(R=length(p)),exp(.7-p.z/R),atan(p.x,p.y)+sin(t*.5)*.2);for(e=--p.y;s<4e2;s+=s)e+=dot(sin(p.zxy*s+sin(t)*.6)-1.,cos(p*s))/s*.2;}"},{id:"1880739133716570129",label:"Distance lattice",family:"Distance lattice",source:"float i,d=1.,m;vec3 p,q,u;u+=1.;for(;i++<99.&&d>5e-7;){d=min(length(fract(p.xz)-.5)-.13,.5-abs(p.y));m=1.;for(int j;j++<9;m+=m)q=p*m*9.*rotate3D(t*.5,vec3(1)),d-=(dot(sin(q),u))/m*.02;p+=normalize(vec3(FC.xy-r*.5,r.y*.35))*d*.6;}o+=8./i*vec4(.5,vec3(1.5));"},{id:"1900460641590403482",label:"Microscopic ring",family:"Microscopic ring",source:"vec3 p,q;for(float i,g,e;i++<28.;o+=(p.x,.05*exp(-pow(i,4.)*e))){p=vec3((FC.xy-.5*r)/r.y*g,g-2.4)*rotate3D(t*.8,FC.zxz);q=(sin(p*50.));g+=e=max(abs(length(p)-1.)-.003,-(fract(distance(q,p*.001)))/299.)+.002;}"},{id:"1936046385700176266",label:"Amber log fold",family:"Log interference",source:"float i,e,R,s;vec3 q,p,d=vec3(FC.xy/r-vec2(.5,0),.4);for(q.zy--;i++<99.;){o.rgb+=hsv(.1,-R*.6,min(e*s,.6-e)/35.);s=1.;p=q+=d*e*R*.23;p=vec3(log2(R=length(p))-t*.8,exp(.17-p.z/R),atan(p.x,p.y)-t*.4);for(e=--p.y;s<1e3;s+=s)e+=dot(sin(p.xyx*s)-.5,.4-cos(p.zxz*s))/s*.3;}"},{id:"1961047535101059204",label:"Matrix tide",family:"Matrix wave",source:"mat2 m=rotate2D(.5);for(float i,e,g,s,h=.45;i++<57.;g+=e*h){vec3 p=vec3((FC.xy-h*r*.7)/r.y*g,g)+h;s=4.;for(e=p.y-g*h*1.3;s<1e3;s*=1.4)p.zx*=m,e+=cos(t*.5+s*p.x)/s*.5;o.rgb+=e/3.*hsv(.57,e-p.y,.3);}"}];function Dg(i){const e=[];let t=0,n="";for(const r of i)(r==="("||r==="["||r==="{")&&(t+=1),(r===")"||r==="]"||r==="}")&&(t-=1),r===","&&t===0?(e.push(n),n=""):n+=r;return e.push(n),e}function Pg(i){return i==="int"?"0":i==="float"?"0.0":`${i}(0.0)`}function Lg(i){return i.replace(/\b(float|int|vec2|vec3|vec4)\s+([^;]+);/g,(e,t,n)=>{const r=Dg(n).map(o=>{const a=o.trim();return a.includes("=")?a:`${a}=${Pg(t)}`});return`${t} ${r.join(",")};`})}function Ug(i){const e=[];let t=0,n="";for(const r of i)(r==="("||r==="["||r==="{")&&(t+=1),(r===")"||r==="]"||r==="}")&&(t-=1),r===";"&&t===0?(e.push(n),n=""):n+=r;return e.push(n),e}function Tl(i,e,t,n){let r=0;for(let o=e;o<i.length;o+=1)if(i[o]===t&&(r+=1),i[o]===n&&(r-=1,r===0))return o;return-1}function Fg(i,e){let t=0;for(let n=e;n<i.length;n+=1){const r=i[n];if((r==="("||r==="[")&&(t+=1),(r===")"||r==="]")&&(t-=1),r===";"&&t===0)return n+1}return i.length}function Ig(i){var r;const e=(r=i.match(/<\s*([0-9.]+(?:e[+-]?\d+)?)/i))==null?void 0:r[1];if(!e)return 48;const t=Number.parseFloat(e);if(!Number.isFinite(t))return 48;const n=!/[ij]\s*\+\+|\+\+\s*[ij]/.test(i);return Math.max(1,Math.min(n?32:160,Math.ceil(t)))}function vc(i,e={index:0},t=0){let n="",r=0;for(;r<i.length;){const o=i.indexOf("for(",r);if(o<0)return n+i.slice(r);n+=i.slice(r,o);const a=Tl(i,o+3,"(",")");if(a<0)return n+i.slice(o);const[s="",l="true",c=""]=Ug(i.slice(o+4,a));let h=a+1;for(;/\s/.test(i[h]||"");)h+=1;const m=i[h]==="{",p=m?Tl(i,h,"{","}"):Fg(i,h);if(p<0)return n+i.slice(o);const d=m?i.slice(h+1,p):i.slice(h,p),v=vc(d,e,t+1),S=`_twiglLoop${e.index++}`,g=s.trim(),u=c.trim(),w=t===0?"uRaySteps":"uOctaves";n+=`{${g?`${g};`:""}for(int ${S}=0;${S}<${Ig(l)};${S}++){if(float(${S})>=${w})break;if(!(${l.trim()||"true"}))break;${v}${u?`${u};`:""}}}`,r=m?p+1:p}return n}function Ng(i){return`
    precision highp float;

    uniform vec2 r;
    uniform float t;
    uniform float uTextureGain;
    uniform float uTextureContrast;
    uniform float uDomainScale;
    uniform float uDomainRotation;
    uniform vec2 uDomainOffset;
    uniform float uDomainSymmetry;
    uniform float uDomainWarp;
    uniform float uOctaves;
    uniform float uRaySteps;
    uniform float uHueShift;
    uniform float uSaturation;
    uniform float uTextureGamma;
    uniform float uInvert;

    mat2 rotate2D(float angle) {
      float cosine = cos(angle);
      float sine = sin(angle);
      return mat2(cosine, -sine, sine, cosine);
    }

    mat3 rotate3D(float angle, vec3 axis) {
      vec3 normalizedAxis = normalize(axis);
      float sine = sin(angle);
      float cosine = cos(angle);
      float complement = 1.0 - cosine;
      return mat3(
        complement * normalizedAxis.x * normalizedAxis.x + cosine,
        complement * normalizedAxis.x * normalizedAxis.y - normalizedAxis.z * sine,
        complement * normalizedAxis.x * normalizedAxis.z + normalizedAxis.y * sine,
        complement * normalizedAxis.x * normalizedAxis.y + normalizedAxis.z * sine,
        complement * normalizedAxis.y * normalizedAxis.y + cosine,
        complement * normalizedAxis.y * normalizedAxis.z - normalizedAxis.x * sine,
        complement * normalizedAxis.x * normalizedAxis.z - normalizedAxis.y * sine,
        complement * normalizedAxis.y * normalizedAxis.z + normalizedAxis.x * sine,
        complement * normalizedAxis.z * normalizedAxis.z + cosine
      );
    }

    vec3 hsv(float hue, float saturation, float brightness) {
      vec3 ramp = clamp(abs(fract(hue + vec3(0.0, 0.6666667, 0.3333333)) * 6.0 - 3.0) - 1.0, 0.0, 1.0);
      return brightness * mix(vec3(1.0), ramp, saturation);
    }

    vec2 twiglCoordinate(vec2 fragmentCoordinate) {
      vec2 point = (fragmentCoordinate - r * 0.5) / r.y;
      point = rotate2D(uDomainRotation) * point;
      point += uDomainOffset;
      float symmetry = max(1.0, floor(uDomainSymmetry + 0.5));
      if (symmetry > 1.5) {
        float sector = 6.28318530718 / symmetry;
        float angle = atan(point.y, point.x);
        angle = abs(mod(angle + sector * 0.5, sector) - sector * 0.5);
        point = vec2(cos(angle), sin(angle)) * length(point);
      }
      vec2 warp = sin(point.yx * vec2(7.1, 5.3) + vec2(t * 0.17, -t * 0.13));
      point += warp * uDomainWarp * 0.075;
      point *= uDomainScale;
      return point * r.y + r * 0.5;
    }

    vec3 rotateHue(vec3 color, float angle) {
      const vec3 axis = vec3(0.57735026919);
      float cosine = cos(angle);
      float sine = sin(angle);
      return color * cosine + cross(axis, color) * sine + axis * dot(axis, color) * (1.0 - cosine);
    }

    #define FC twiglCoordinate(gl_FragCoord.xy)

    void main() {
      vec4 o = vec4(0.0);
      ${vc(Lg(i))}
      vec3 color = max(o.rgb, 0.0) * uTextureGain;
      color = color / (1.0 + color * 0.72);
      color = max((color - 0.18) * uTextureContrast + 0.18, 0.0);
      float lightness = dot(color, vec3(0.2126, 0.7152, 0.0722));
      color = mix(vec3(lightness), color, uSaturation);
      color = max(rotateHue(color, uHueShift * 6.28318530718), 0.0);
      color = mix(color, 1.0 - clamp(color, 0.0, 1.0), uInvert);
      color = pow(max(color, 0.0), vec3(1.0 / max(uTextureGamma, 0.001)));
      float energy = dot(color, vec3(0.2126, 0.7152, 0.0722));
      gl_FragColor = vec4(color, clamp(energy * 1.6, 0.0, 1.0));
    }
  `}const yn=Object.freeze([Object.freeze({id:"slow-amber-fold",label:"01 / Slow Amber Fold",settings:Object.freeze({twiglPreset:"1936046385700176266",textureResolution:"1024",textureGain:2.3,textureContrast:.4,sourceScale:.2,sourceRotation:83,sourceOffsetX:0,sourceOffsetY:0,sourceSymmetry:1,sourceWarp:0,sourceOctaves:19,sourceRaySteps:101,sourceHue:0,sourceSaturation:1,sourceGamma:1.18,sourceInvert:!1,timeSpeed:.03,phase:-.09,uvScale:.47,uvRotation:-25,uvSeamFeather:.25,uvSeamIrregularity:.72,materialDomain:"organic",textureMix:.68,sourceColorMix:.14,emission:.62,displacement:.174,surfaceMesh:"showcase",roughness:.27,opacity:1,alphaInfluence:.08,fresnel:.81,surfaceContrast:2.62,baseColor:"#03040e",edgeColor:"#6572ff",accentColor:"#27b8ff",particleColor:"#5d66ff",particleHotColor:"#5fe2ff",particleDensity:1,particleSize:3.07,particleOpacity:.34,particleMotion:.53,plumeSpread:.88,textureResponse:1.33,particleSurfaceClearance:.014,haloEnabled:!0,haloIntensity:.72,haloSize:1.059,sphereScale:1,sphereY:-.01,cameraDistance:4.55,cameraFov:39,autoRotate:!0,rotateSpeed:.18,bloomStrength:.31,bloomRadius:.66,bloomThreshold:.09,exposure:.56,quality:"high",dpr:1.5,paused:!1})}),Object.freeze({id:"interference-veil",label:"02 / Interference Veil",settings:Object.freeze({twiglPreset:"1877626433008496846",textureResolution:"1024",textureGain:3.1,textureContrast:1.68,sourceScale:.41,sourceRotation:83,sourceOffsetX:0,sourceOffsetY:0,sourceSymmetry:1,sourceWarp:0,sourceOctaves:19,sourceRaySteps:101,sourceHue:0,sourceSaturation:1,sourceGamma:1.18,sourceInvert:!1,timeSpeed:.08,phase:-.09,uvScale:.47,uvRotation:-27,uvSeamFeather:.25,uvSeamIrregularity:.72,materialDomain:"organic",textureMix:1,sourceColorMix:1,emission:2.07,displacement:.047,surfaceMesh:"showcase",roughness:1,opacity:1,alphaInfluence:0,fresnel:0,surfaceContrast:.7,baseColor:"#03040e",edgeColor:"#6572ff",accentColor:"#27b8ff",particleColor:"#5d66ff",particleHotColor:"#5fe2ff",particleDensity:1,particleSize:.3,particleOpacity:.25,particleMotion:.72,plumeSpread:1.31,textureResponse:1.93,particleSurfaceClearance:0,haloEnabled:!0,haloIntensity:0,haloSize:1.005,sphereScale:1,sphereY:-.01,cameraDistance:4.55,cameraFov:39,autoRotate:!0,rotateSpeed:.18,bloomStrength:.31,bloomRadius:.66,bloomThreshold:.09,exposure:.56,quality:"high",dpr:1.5,paused:!1})}),Object.freeze({id:"violet-interference",label:"03 / Violet Interference",settings:Object.freeze({twiglPreset:"1986780675169808394",textureResolution:"1024",textureGain:.4,textureContrast:2.6,sourceScale:.41,sourceRotation:83,sourceOffsetX:0,sourceOffsetY:0,sourceSymmetry:1,sourceWarp:0,sourceOctaves:19,sourceRaySteps:101,sourceHue:0,sourceSaturation:1,sourceGamma:1.18,sourceInvert:!1,timeSpeed:.33,phase:-.09,uvScale:.25,uvRotation:-55,uvSeamFeather:.295,uvSeamIrregularity:1,materialDomain:"organic",textureMix:1,sourceColorMix:1,emission:2.07,displacement:.047,surfaceMesh:"showcase",roughness:1,opacity:1,alphaInfluence:0,fresnel:0,surfaceContrast:.7,baseColor:"#03040e",edgeColor:"#6572ff",accentColor:"#27b8ff",particleColor:"#5d66ff",particleHotColor:"#5fe2ff",particleDensity:1,particleSize:.96,particleOpacity:.25,particleMotion:.72,plumeSpread:1.31,textureResponse:1.93,particleSurfaceClearance:0,haloEnabled:!0,haloIntensity:0,haloSize:1.005,sphereScale:1,sphereY:-.01,cameraDistance:4.55,cameraFov:39,autoRotate:!0,rotateSpeed:.18,bloomStrength:.31,bloomRadius:.66,bloomThreshold:.09,exposure:.56,quality:"high",dpr:1.5,paused:!1})})]),_c=Object.freeze([...yn,Object.freeze({id:"octahedral-study",label:"04 / Octahedral Study",settings:Object.freeze({...yn[2].settings,materialDomain:"octahedral"})}),Object.freeze({id:"spherical-field-study",label:"05 / Spherical Living Field",settings:Object.freeze({...yn[2].settings,materialDomain:"sphericalField",fieldResolution:"1024",fieldSteps:3,fieldFeed:.026,fieldKill:.055,fieldDiffusion:.86,fieldDiffusionRatio:.48,fieldReaction:1,fieldTimeStep:.84,fieldForcing:.22,fieldSourceInjection:.025,fieldSourceSeed:.12,fieldSourceThreshold:.32,fieldFlow:.9,fieldFlowScale:1,fieldFlowWarp:.42,fieldMemory:.86,fieldSeedSize:.3,fieldContour:.285,fieldRidgeWidth:.17,textureMix:.9,sourceColorMix:.22,emission:.72,displacement:.065,surfaceContrast:1.52,roughness:.45,fresnel:.52,particleDensity:.76,particleSize:1.35,particleOpacity:.22,particleMotion:.46,plumeSpread:.72,textureResponse:1.08,haloIntensity:.36,bloomStrength:.28,exposure:.52})}),Object.freeze({id:"white-coral-labyrinth",label:"06 / White Coral Labyrinth",settings:Object.freeze({...yn[2].settings,materialDomain:"sphericalField",fieldResolution:"2048",fieldSteps:6,fieldFeed:.037,fieldKill:.057,fieldDiffusion:1,fieldDiffusionRatio:.48,fieldReaction:1,fieldTimeStep:.84,fieldForcing:.06,fieldSourceInjection:.025,fieldSourceSeed:.12,fieldSourceThreshold:.32,fieldFlow:.3,fieldFlowScale:1,fieldFlowWarp:.42,fieldMemory:.86,fieldSeedSize:.3,fieldContour:.285,fieldRidgeWidth:.17,textureMix:.83,sourceColorMix:.4,emission:2.11,displacement:.087,roughness:1,opacity:1,alphaInfluence:.01,fresnel:2.27,surfaceContrast:2.8,particleDensity:.97,particleSize:2.93,particleOpacity:.22,particleMotion:.46,plumeSpread:.72,textureResponse:1.08,particleSurfaceClearance:0,haloEnabled:!0,haloIntensity:.36,haloSize:1.005,bloomStrength:.28,exposure:.52})}),Object.freeze({id:"abyssal-current",label:"07 / Abyssal Current",settings:Object.freeze({...yn[2].settings,materialDomain:"sphericalField",fieldResolution:"2048",fieldSteps:6,fieldFeed:.022,fieldKill:.057,fieldDiffusion:1,fieldDiffusionRatio:.52,fieldReaction:1.42,fieldTimeStep:.91,fieldForcing:0,fieldSourceInjection:.48,fieldSourceSeed:0,fieldSourceThreshold:.34,fieldFlow:2.07,fieldFlowScale:.83,fieldFlowWarp:.57,fieldMemory:.99,fieldSeedSize:.95,fieldContour:.285,fieldRidgeWidth:.17,textureMix:.83,sourceColorMix:.4,emission:2.11,displacement:.087,roughness:1,opacity:1,alphaInfluence:.01,fresnel:2.27,surfaceContrast:2.8,particleDensity:.97,particleSize:2.93,particleOpacity:.22,particleMotion:.46,plumeSpread:.72,textureResponse:1.08,particleSurfaceClearance:0,haloEnabled:!0,haloIntensity:.36,haloSize:1.005,bloomStrength:0,bloomRadius:0,bloomThreshold:0,exposure:.39,quality:"ultra",dpr:1.85})}),Object.freeze({id:"glacial-undertow",label:"08 / Glacial Undertow",settings:Object.freeze({...yn[2].settings,materialDomain:"sphericalField",fieldResolution:"2048",fieldSteps:6,fieldFeed:.022,fieldKill:.057,fieldDiffusion:1,fieldDiffusionRatio:.52,fieldReaction:1.42,fieldTimeStep:.15,fieldForcing:0,fieldSourceInjection:.48,fieldSourceSeed:0,fieldSourceThreshold:.34,fieldFlow:2.07,fieldFlowScale:.83,fieldFlowWarp:.57,fieldMemory:.99,fieldSeedSize:.95,fieldContour:.285,fieldRidgeWidth:.17,textureMix:.83,sourceColorMix:.4,emission:2.11,displacement:.087,roughness:1,opacity:1,alphaInfluence:.01,fresnel:2.27,surfaceContrast:2.8,particleDensity:.97,particleSize:2.93,particleOpacity:.22,particleMotion:.46,plumeSpread:.72,textureResponse:1.08,particleSurfaceClearance:0,haloEnabled:!0,haloIntensity:.36,haloSize:1.005,bloomStrength:0,bloomRadius:0,bloomThreshold:0,exposure:.39,quality:"ultra",dpr:1.85})}),Object.freeze({id:"ember-current",label:"09 / Ember Current",settings:Object.freeze({...yn[2].settings,materialDomain:"sphericalField",fieldResolution:"2048",fieldSteps:6,fieldFeed:.022,fieldKill:.057,fieldDiffusion:1,fieldDiffusionRatio:.52,fieldReaction:1.42,fieldTimeStep:.15,fieldForcing:0,fieldSourceInjection:.48,fieldSourceSeed:0,fieldSourceThreshold:.3,fieldFlow:1.75,fieldFlowScale:.83,fieldFlowWarp:.57,fieldMemory:.99,fieldSeedSize:.95,fieldContour:.285,fieldRidgeWidth:.17,textureMix:.83,sourceColorMix:.4,emission:2.11,displacement:.087,roughness:1,opacity:1,alphaInfluence:.01,fresnel:2.27,surfaceContrast:2.8,edgeColor:"#000000",accentColor:"#0ac2ff",particleColor:"#ffab5c",particleHotColor:"#ff0000",particleDensity:.97,particleSize:2.93,particleOpacity:.22,particleMotion:.46,plumeSpread:.72,textureResponse:1.08,particleSurfaceClearance:0,haloEnabled:!0,haloIntensity:.36,haloSize:1.005,bloomStrength:.41,bloomRadius:0,bloomThreshold:0,exposure:.39,quality:"ultra",dpr:1.85})}),Object.freeze({id:"solar-mycelium",label:"10 / Solar Mycelium",settings:Object.freeze({...yn[2].settings,materialDomain:"sphericalField",fieldResolution:"2048",fieldSteps:6,fieldFeed:.022,fieldKill:.04,fieldDiffusion:1,fieldDiffusionRatio:.52,fieldReaction:1.42,fieldTimeStep:.15,fieldForcing:2.5,fieldSourceInjection:.48,fieldSourceSeed:.89,fieldSourceThreshold:.3,fieldFlow:.68,fieldFlowScale:.74,fieldFlowWarp:.57,fieldMemory:.99,fieldSeedSize:.95,fieldContour:.085,fieldRidgeWidth:.18,textureMix:.83,sourceColorMix:.4,emission:2.11,displacement:.087,roughness:1,opacity:1,alphaInfluence:.01,fresnel:2.27,surfaceContrast:2.8,baseColor:"#ffae00",edgeColor:"#ff7300",accentColor:"#ff7b00",particleColor:"#ff9147",particleHotColor:"#fef1c3",particleDensity:.97,particleSize:2.93,particleOpacity:.22,particleMotion:.46,plumeSpread:.72,textureResponse:1.08,particleSurfaceClearance:0,haloEnabled:!0,haloIntensity:.36,haloSize:1.005,bloomStrength:.41,bloomRadius:0,bloomThreshold:0,exposure:.39,quality:"ultra",dpr:1.85})}),Object.freeze({id:"ember-veins",label:"11 / Ember Veins",settings:Object.freeze({...yn[2].settings,materialDomain:"sphericalField",fieldResolution:"2048",fieldSteps:6,fieldFeed:.022,fieldKill:.057,fieldDiffusion:1,fieldDiffusionRatio:.52,fieldReaction:1.42,fieldTimeStep:.15,fieldForcing:0,fieldSourceInjection:.48,fieldSourceSeed:0,fieldSourceThreshold:.3,fieldFlow:1.75,fieldFlowScale:.83,fieldFlowWarp:.57,fieldMemory:.99,fieldSeedSize:.95,fieldContour:.285,fieldRidgeWidth:.17,fieldStreakBaseColor:"#ff7b00",fieldStreakHotColor:"#ff0000",fieldStreakBrightness:3.57,fieldColorAuthority:1,textureMix:.83,sourceColorMix:.4,emission:1.65,displacement:.087,roughness:1,opacity:1,alphaInfluence:0,fresnel:0,surfaceContrast:2.8,edgeColor:"#000000",accentColor:"#000000",particleColor:"#ffab5c",particleHotColor:"#ff0000",particleDensity:.97,particleSize:2.93,particleOpacity:.22,particleMotion:.46,plumeSpread:.72,textureResponse:1.08,particleSurfaceClearance:0,haloEnabled:!0,haloIntensity:.36,haloSize:1.005,bloomStrength:.41,bloomRadius:0,bloomThreshold:0,exposure:.39,quality:"ultra",dpr:1.85})}),Object.freeze({id:"solar-maelstrom",label:"12 / Solar Maelstrom",settings:Object.freeze({twiglPreset:"1986780675169808394",textureResolution:"1024",textureGain:.97,textureContrast:.63,sourceScale:.41,sourceRotation:83,sourceOffsetX:0,sourceOffsetY:0,sourceSymmetry:1,sourceWarp:0,sourceOctaves:19,sourceRaySteps:101,sourceHue:0,sourceSaturation:1,sourceGamma:1.18,sourceInvert:!1,timeSpeed:.15,phase:.52,uvScale:3.98,uvRotation:61,uvSeamFeather:.3,uvSeamIrregularity:.25,materialDomain:"solarVolume",fieldResolution:"512",fieldSteps:3,fieldFeed:.036,fieldKill:.061,fieldDiffusion:.82,fieldDiffusionRatio:.48,fieldReaction:1,fieldTimeStep:.84,fieldForcing:.12,fieldSourceInjection:.025,fieldSourceSeed:.12,fieldSourceThreshold:.32,fieldFlow:.38,fieldFlowScale:1,fieldFlowWarp:.42,fieldMemory:.86,fieldSeedSize:.3,fieldContour:.285,fieldRidgeWidth:.17,fieldStreakBaseColor:"#6fb8f8",fieldStreakHotColor:"#e9f9ff",fieldStreakBrightness:1,fieldColorAuthority:0,volumeScale:10,volumeWarp:3.3,volumeFlow:2.12,volumeGranulation:8,volumeDetail:6,volumeFilament:1,volumeContrast:.87,volumeDepth:.3,volumeSteps:20,volumeDensity:3.5,volumeAbsorption:6,volumeBrightness:.65,volumeEmission:4,volumeLimbGlow:.17,volumeBodyColor:"#160000",volumeMidColor:"#f02b00",volumeHotColor:"#ffd36a",volumeBasis:"twiglPlasma",volumeTwiglInfluence:.72,volumeTwiglScale:1.35,volumeSourceHeat:.58,volumeSourceDensity:.36,volumeSourceWarp:.82,volumeSourceFlow:.4,volumeDepthDecorrelation:.68,volumeOctaves:4,volumeLacunarity:2.08,volumeGain:.52,volumeCellularity:.82,volumeGranuleBoundary:.31,volumeSunspotScale:.72,volumeSunspotStrength:.48,textureMix:.68,sourceColorMix:.14,emission:.62,displacement:.174,surfaceMesh:"showcase",roughness:.27,opacity:1,alphaInfluence:.08,fresnel:.81,surfaceContrast:2.62,baseColor:"#03040e",edgeColor:"#6572ff",accentColor:"#27b8ff",particleColor:"#5d66ff",particleHotColor:"#5fe2ff",particleDensity:1,particleSize:3.07,particleOpacity:.34,particleMotion:.53,plumeSpread:.88,textureResponse:1.33,particleSurfaceClearance:.014,haloEnabled:!0,haloIntensity:.72,haloSize:1.059,sphereScale:1,sphereY:-.01,cameraDistance:4.55,cameraFov:39,autoRotate:!0,rotateSpeed:.18,bloomStrength:.31,bloomRadius:.66,bloomThreshold:.09,exposure:.56,quality:"high",dpr:1.5,paused:!1})}),Object.freeze({id:"chromosphere-surge",label:"13 / Chromosphere Surge",settings:Object.freeze({twiglPreset:"1986780675169808394",textureResolution:"1024",textureGain:.97,textureContrast:.57,sourceScale:.2,sourceRotation:83,sourceOffsetX:0,sourceOffsetY:0,sourceSymmetry:1,sourceWarp:0,sourceOctaves:17,sourceRaySteps:110,sourceHue:0,sourceSaturation:1,sourceGamma:1.11,sourceInvert:!1,timeSpeed:.06,phase:.52,uvScale:3.98,uvRotation:87,uvSeamFeather:.3,uvSeamIrregularity:.28,materialDomain:"solarVolume",fieldResolution:"2048",fieldSteps:3,fieldFeed:.036,fieldKill:.061,fieldDiffusion:.82,fieldDiffusionRatio:.48,fieldReaction:1,fieldTimeStep:.84,fieldForcing:.04,fieldSourceInjection:.025,fieldSourceSeed:.12,fieldSourceThreshold:.32,fieldFlow:.38,fieldFlowScale:1,fieldFlowWarp:.42,fieldMemory:.86,fieldSeedSize:.3,fieldContour:.35,fieldRidgeWidth:.185,fieldStreakBaseColor:"#6fb8f8",fieldStreakHotColor:"#e9f9ff",fieldStreakBrightness:1,fieldColorAuthority:0,volumeScale:10,volumeWarp:3.5,volumeFlow:2.5,volumeGranulation:8,volumeDetail:6,volumeFilament:1,volumeContrast:.88,volumeDepth:.67,volumeSteps:28,volumeDensity:1.91,volumeAbsorption:6,volumeBrightness:1.21,volumeEmission:1.67,volumeLimbGlow:.17,volumeBodyColor:"#160000",volumeMidColor:"#f02b00",volumeHotColor:"#ffd36a",volumeBasis:"twiglPlasma",volumeTwiglInfluence:.72,volumeTwiglScale:4.86,volumeSourceHeat:.15,volumeSourceDensity:.3,volumeSourceWarp:0,volumeSourceFlow:.56,volumeDepthDecorrelation:1.46,volumeOctaves:5,volumeLacunarity:2.69,volumeGain:.42,volumeCellularity:.4,volumeGranuleBoundary:.365,volumeSunspotScale:.5,volumeSunspotStrength:.51,textureMix:.74,sourceColorMix:.2,emission:.66,displacement:.24,surfaceMesh:"showcase",roughness:.27,opacity:1,alphaInfluence:.16,fresnel:.95,surfaceContrast:2.62,baseColor:"#03040e",edgeColor:"#6572ff",accentColor:"#27b8ff",particleColor:"#5d66ff",particleHotColor:"#5fe2ff",particleDensity:1,particleSize:2.7,particleOpacity:.86,particleMotion:.81,plumeSpread:1.06,textureResponse:1.33,particleSurfaceClearance:.014,haloEnabled:!0,haloIntensity:.72,haloSize:1.059,sphereScale:1,sphereY:-.01,cameraDistance:4.55,cameraFov:39,autoRotate:!0,rotateSpeed:.18,bloomStrength:.31,bloomRadius:.66,bloomThreshold:.09,exposure:.56,quality:"high",dpr:1.5,paused:!1})})]),cs=document.querySelector("#scene"),fi=Object.freeze({twiglPreset:"1986780675169808394",textureResolution:"1024",textureGain:.54,textureContrast:1.4,sourceScale:.41,sourceRotation:83,sourceOffsetX:0,sourceOffsetY:0,sourceSymmetry:1,sourceWarp:0,sourceOctaves:19,sourceRaySteps:101,sourceHue:0,sourceSaturation:1,sourceGamma:1.18,sourceInvert:!1,timeSpeed:.42,phase:.7,uvScale:3.44,uvRotation:18,uvSeamFeather:.12,uvSeamIrregularity:.72,materialDomain:"organic",fieldResolution:"512",fieldSteps:3,fieldFeed:.036,fieldKill:.061,fieldDiffusion:.82,fieldDiffusionRatio:.48,fieldReaction:1,fieldTimeStep:.84,fieldForcing:.12,fieldSourceInjection:.025,fieldSourceSeed:.12,fieldSourceThreshold:.32,fieldFlow:.38,fieldFlowScale:1,fieldFlowWarp:.42,fieldMemory:.86,fieldSeedSize:.3,fieldContour:.285,fieldRidgeWidth:.17,fieldStreakBaseColor:"#6fb8f8",fieldStreakHotColor:"#e9f9ff",fieldStreakBrightness:1,fieldColorAuthority:0,volumeScale:6.8,volumeWarp:.72,volumeFlow:.28,volumeGranulation:4.8,volumeDetail:3.4,volumeFilament:.58,volumeContrast:1.55,volumeDepth:.34,volumeSteps:24,volumeDensity:.92,volumeAbsorption:2.8,volumeBrightness:.92,volumeEmission:.68,volumeLimbGlow:.72,volumeBodyColor:"#160000",volumeMidColor:"#f02b00",volumeHotColor:"#ffd36a",volumeBasis:"twiglPlasma",volumeTwiglInfluence:.72,volumeTwiglScale:1.35,volumeSourceHeat:.58,volumeSourceDensity:.36,volumeSourceWarp:.82,volumeSourceFlow:.4,volumeDepthDecorrelation:.68,volumeOctaves:4,volumeLacunarity:2.08,volumeGain:.52,volumeCellularity:.82,volumeGranuleBoundary:.31,volumeSunspotScale:.72,volumeSunspotStrength:.48,textureMix:.68,sourceColorMix:.14,emission:.62,displacement:.174,surfaceMesh:"showcase",roughness:.27,opacity:1,alphaInfluence:.08,fresnel:.81,surfaceContrast:2.62,baseColor:"#03040e",edgeColor:"#6572ff",accentColor:"#27b8ff",particleColor:"#5d66ff",particleHotColor:"#5fe2ff",particleDensity:1,particleSize:3.07,particleOpacity:.34,particleMotion:.53,plumeSpread:.88,textureResponse:1.33,particleSurfaceClearance:.014,haloEnabled:!0,haloIntensity:.72,haloSize:1.059,sphereScale:1,sphereY:-.01,cameraDistance:4.55,cameraFov:39,autoRotate:!0,rotateSpeed:.18,bloomStrength:.31,bloomRadius:.66,bloomThreshold:.09,exposure:.56,quality:"high",dpr:1.5,paused:!1}),f=applyGraphicsProfile({...fi,..._c.find(preset=>preset.id==="chromosphere-surge").settings},starGraphicsLevel),bl=()=>ka.find(i=>i.id===f.twiglPreset)||ka[0],mt=new og({canvas:cs,antialias:!1,alpha:!1,powerPreference:starGraphicsLevel==="low"?"low-power":"high-performance"});mt.outputColorSpace=Wt;mt.toneMapping=ja;mt.toneMappingExposure=f.exposure;mt.setClearColor(131848,1);mt.debug.checkShaderErrors=!0;if(!mt.capabilities.isWebGL2)throw new Error("Star Simulator requires WebGL 2 for vertex texture sampling.");const pi=new os;pi.background=new we(131848);pi.fog=new rs(131848,.034);const ct=new $t(f.cameraFov,1,.01,80);ct.position.set(.08,.02,f.cameraDistance);const $e=new sg(ct,cs);$e.enableDamping=!0;$e.dampingFactor=.055;$e.enablePan=!0;$e.panSpeed=.82;$e.screenSpacePanning=!0;$e.mouseButtons.RIGHT=ai.PAN;$e.minDistance=0;$e.maxDistance=1/0;$e.minTargetRadius=0;$e.maxTargetRadius=1/0;$e.zoomToCursor=!0;$e.rotateSpeed=.5;$e.zoomSpeed=.62;$e.target.set(0,f.sphereY,0);function Og(){const i=Math.max(ct.position.distanceTo($e.target),1e-5),e=i<2?Math.max(1e-5,i*.005):Math.max(.01,i*5e-4),t=Math.max(80,i*4+20);(Math.abs(ct.near-e)>e*.01||Math.abs(ct.far-t)>t*.01)&&(ct.near=e,ct.far=t,ct.updateProjectionMatrix())}$e.addEventListener("change",Og);const Bg=new wg(pi,ct),ro=new Xi(new be(1,1),f.bloomStrength,f.bloomRadius,f.bloomThreshold),zg=new Rg,Yi=new bg(mt);Yi.addPass(Bg);Yi.addPass(ro);Yi.addPass(zg);const xc=new os,Vg=new Mo(-1,1,1,-1,0,1),Eo=new Nt(new Ki(2,2));Eo.frustumCulled=!1;xc.add(Eo);const Et={r:{value:new be},t:{value:0},uTextureGain:{value:f.textureGain},uTextureContrast:{value:f.textureContrast},uDomainScale:{value:f.sourceScale},uDomainRotation:{value:si.degToRad(f.sourceRotation)},uDomainOffset:{value:new be(f.sourceOffsetX,f.sourceOffsetY)},uDomainSymmetry:{value:f.sourceSymmetry},uDomainWarp:{value:f.sourceWarp},uOctaves:{value:f.sourceOctaves},uRaySteps:{value:f.sourceRaySteps},uHueShift:{value:f.sourceHue/360},uSaturation:{value:f.sourceSaturation},uTextureGamma:{value:f.sourceGamma},uInvert:{value:f.sourceInvert?1:0}},Sc=`
  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;function Mc(){const i=new gt({name:`TWIGL-${bl().id}`,uniforms:Et,vertexShader:Sc,fragmentShader:Ng(bl().source),depthTest:!1,depthWrite:!1});return i.toneMapped=!1,i}function yc(i){const e=new Yt(i,i,{minFilter:It,magFilter:It,format:Xt,type:ln,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});return e.texture.name="Live TWIGL surface",e.texture.colorSpace=ci,e.texture.wrapS=fr,e.texture.wrapT=fr,e}let oo=Mc(),wn=yc(Number(f.textureResolution));Eo.material=oo;Et.r.value.set(Number(f.textureResolution),Number(f.textureResolution));const Ec=new os,Hg=new Mo(-1,1,1,-1,0,1),us=new Nt(new Ki(2,2));us.frustumCulled=!1;Ec.add(us);const Gg=mt.extensions.has("EXT_color_buffer_float")?dn:ln;function po(i){const e=new Yt(i,Math.round(i*.5),{minFilter:It,magFilter:It,format:Xt,type:Gg,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});return e.texture.name="Spherical reaction field",e.texture.colorSpace=bn,e.texture.wrapS=co,e.texture.wrapT=Hn,e}const lt={uPrevious:{value:null},uTwigl:{value:wn.texture},uResolution:{value:new be},uTime:{value:0},uAngularStep:{value:0},uFeed:{value:f.fieldFeed},uKill:{value:f.fieldKill},uDiffusion:{value:f.fieldDiffusion},uDiffusionRatio:{value:f.fieldDiffusionRatio},uReaction:{value:f.fieldReaction},uTimeStep:{value:f.fieldTimeStep},uForcing:{value:f.fieldForcing},uSourceInjection:{value:f.fieldSourceInjection},uSourceSeed:{value:f.fieldSourceSeed},uSourceThreshold:{value:f.fieldSourceThreshold},uFlow:{value:f.fieldFlow},uFlowScale:{value:f.fieldFlowScale},uFlowWarp:{value:f.fieldFlowWarp},uMemory:{value:f.fieldMemory},uSeedSize:{value:f.fieldSeedSize},uReset:{value:1}},kg=new gt({name:"Direction-native spherical field simulation",uniforms:lt,vertexShader:Sc,fragmentShader:`
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
  `,depthTest:!1,depthWrite:!1,toneMapped:!1});us.material=kg;let an=po(Number(f.fieldResolution)),ur=po(Number(f.fieldResolution)),hi=!0;function Tc(){const i=Number(f.fieldResolution);lt.uResolution.value.set(i,Math.round(i*.5)),lt.uAngularStep.value=Math.PI*2/i}function bc(){const i=an,e=ur,t=Number(f.fieldResolution);an=po(t),ur=po(t),ve.uField.value=an.texture,Me.uField.value=an.texture,i.dispose(),e.dispose(),Tc(),hi=!0}function Er(){hi=!0}function Wg(i){lt.uTime.value=i;const e=Math.max(1,Math.round(f.fieldSteps));for(let t=0;t<e;t+=1){lt.uPrevious.value=an.texture,lt.uReset.value=hi&&t===0?1:0,mt.setRenderTarget(ur),mt.render(Ec,Hg);const n=an;an=ur,ur=n,hi=!1}ve.uField.value=an.texture,Me.uField.value=an.texture}Tc();const hs=`
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
`,mo={organic:0,octahedral:1,sphericalField:2,solarVolume:3},go={gyroid:0,cellular:1,twiglPlasma:2},Xg=`
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
`,ve={uTwigl:{value:wn.texture},uField:{value:an.texture},uUvScale:{value:f.uvScale},uUvRotation:{value:si.degToRad(f.uvRotation)},uUvSeamFeather:{value:f.uvSeamFeather},uUvSeamIrregularity:{value:f.uvSeamIrregularity},uMaterialDomain:{value:mo[f.materialDomain]},uFieldContour:{value:f.fieldContour},uFieldRidgeWidth:{value:f.fieldRidgeWidth},uFieldStreakBaseColor:{value:new we(f.fieldStreakBaseColor)},uFieldStreakHotColor:{value:new we(f.fieldStreakHotColor)},uFieldStreakBrightness:{value:f.fieldStreakBrightness},uFieldColorAuthority:{value:f.fieldColorAuthority},uVolumeTime:{value:0},uVolumeBasis:{value:go[f.volumeBasis]??2},uVolumeTwiglInfluence:{value:f.volumeTwiglInfluence},uVolumeTwiglScale:{value:f.volumeTwiglScale},uVolumeSourceHeat:{value:f.volumeSourceHeat},uVolumeSourceDensity:{value:f.volumeSourceDensity},uVolumeSourceWarp:{value:f.volumeSourceWarp},uVolumeSourceFlow:{value:f.volumeSourceFlow},uVolumeDepthDecorrelation:{value:f.volumeDepthDecorrelation},uVolumeOctaves:{value:f.volumeOctaves},uVolumeLacunarity:{value:f.volumeLacunarity},uVolumeGain:{value:f.volumeGain},uVolumeCellularity:{value:f.volumeCellularity},uVolumeGranuleBoundary:{value:f.volumeGranuleBoundary},uVolumeSunspotScale:{value:f.volumeSunspotScale},uVolumeSunspotStrength:{value:f.volumeSunspotStrength},uVolumeScale:{value:f.volumeScale},uVolumeWarp:{value:f.volumeWarp},uVolumeFlow:{value:f.volumeFlow},uVolumeGranulation:{value:f.volumeGranulation},uVolumeDetail:{value:f.volumeDetail},uVolumeFilament:{value:f.volumeFilament},uVolumeContrast:{value:f.volumeContrast},uVolumeDepth:{value:f.volumeDepth},uVolumeSteps:{value:f.volumeSteps},uVolumeDensity:{value:f.volumeDensity},uVolumeAbsorption:{value:f.volumeAbsorption},uVolumeBrightness:{value:f.volumeBrightness},uVolumeEmission:{value:f.volumeEmission},uVolumeLimbGlow:{value:f.volumeLimbGlow},uVolumeBodyColor:{value:new we(f.volumeBodyColor)},uVolumeMidColor:{value:new we(f.volumeMidColor)},uVolumeHotColor:{value:new we(f.volumeHotColor)},uObjectCameraPosition:{value:new I(0,0,4)},uDisplacement:{value:f.displacement},uTextureMix:{value:f.textureMix},uSourceColorMix:{value:f.sourceColorMix},uEmission:{value:f.emission},uRoughness:{value:f.roughness},uOpacity:{value:f.opacity},uAlphaInfluence:{value:f.alphaInfluence},uFresnel:{value:f.fresnel},uSurfaceContrast:{value:f.surfaceContrast},uBaseColor:{value:new we(f.baseColor)},uEdgeColor:{value:new we(f.edgeColor)},uAccentColor:{value:new we(f.accentColor)}},Yg=`
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

  ${hs}

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
`,qg=`
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

  ${hs}
  ${Xg}

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
`,jg=new gt({name:"TWIGL sphere surface",uniforms:ve,vertexShader:Yg,fragmentShader:qg,transparent:!0,depthWrite:!0,depthTest:!0,side:Ln}),wl={balanced:{widthSegments:192,heightSegments:128},detailed:{widthSegments:384,heightSegments:256},ultra:{widthSegments:512,heightSegments:320},extreme:{widthSegments:768,heightSegments:512},showcase:{widthSegments:1024,heightSegments:640}};function wc(){const i=wl[f.surfaceMesh]||wl.detailed;return new So(1,i.widthSegments,i.heightSegments)}let ao=wc();const Tr=new Nt(ao,jg);Tr.renderOrder=0;pi.add(Tr);function Ac(){const i=ao;ao=wc(),Tr.geometry=ao,i.dispose()}const so={uEdgeColor:{value:new we(f.edgeColor)},uAccentColor:{value:new we(f.accentColor)},uIntensity:{value:f.haloIntensity}},Kg=new gt({name:"Atmospheric rim",uniforms:so,vertexShader:`
    varying vec3 vWorldNormal;
    varying vec3 vWorldPosition;
    void main() {
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldNormal = normalize(mat3(modelMatrix) * normal);
      vWorldPosition = worldPosition.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
  `,fragmentShader:`
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
  `,transparent:!0,depthWrite:!1,blending:dr,side:Lt}),vr=new Nt(new So(1,128,96),Kg);vr.renderOrder=1;pi.add(vr);const Ji=starGraphics.particles,Qi=new cn,lo=new Float32Array(Ji*3),Cc=new Float32Array(Ji),Rc=new Float32Array(Ji),Dc=new Float32Array(Ji);let Al=1831565813;function ti(){Al+=1831565813;let i=Al;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}for(let i=0;i<Ji;i+=1){const e=ti()*2-1,t=ti()*Math.PI*2,n=Math.sqrt(Math.max(0,1-e*e)),r=Math.cos(t)*n,o=Math.sin(t)*n,a=Math.pow(ti(),2.25),s=1.015+a*.29+(ti()>.84?Math.pow(ti(),1.6)*.56:0);lo[i*3]=r*s,lo[i*3+1]=e*s,lo[i*3+2]=o*s,Cc[i]=ti(),Rc[i]=a,Dc[i]=ti()*Math.PI*2}Qi.setAttribute("position",new zt(lo,3));Qi.setAttribute("aSeed",new zt(Cc,1));Qi.setAttribute("aLayer",new zt(Rc,1));Qi.setAttribute("aPhase",new zt(Dc,1));const Me={uTwigl:{value:wn.texture},uField:{value:an.texture},uTime:{value:0},uUvScale:{value:f.uvScale},uUvRotation:{value:si.degToRad(f.uvRotation)},uUvSeamFeather:{value:f.uvSeamFeather},uUvSeamIrregularity:{value:f.uvSeamIrregularity},uMaterialDomain:{value:mo[f.materialDomain]},uFieldContour:{value:f.fieldContour},uFieldRidgeWidth:{value:f.fieldRidgeWidth},uFieldStreakBaseColor:{value:new we(f.fieldStreakBaseColor)},uFieldStreakHotColor:{value:new we(f.fieldStreakHotColor)},uFieldStreakBrightness:{value:f.fieldStreakBrightness},uFieldColorAuthority:{value:f.fieldColorAuthority},uVolumeTime:{value:0},uVolumeBasis:{value:go[f.volumeBasis]??2},uVolumeTwiglInfluence:{value:f.volumeTwiglInfluence},uVolumeTwiglScale:{value:f.volumeTwiglScale},uVolumeSourceHeat:{value:f.volumeSourceHeat},uVolumeSourceDensity:{value:f.volumeSourceDensity},uVolumeSourceWarp:{value:f.volumeSourceWarp},uVolumeSourceFlow:{value:f.volumeSourceFlow},uVolumeDepthDecorrelation:{value:f.volumeDepthDecorrelation},uVolumeOctaves:{value:f.volumeOctaves},uVolumeLacunarity:{value:f.volumeLacunarity},uVolumeGain:{value:f.volumeGain},uVolumeCellularity:{value:f.volumeCellularity},uVolumeGranuleBoundary:{value:f.volumeGranuleBoundary},uVolumeSunspotScale:{value:f.volumeSunspotScale},uVolumeSunspotStrength:{value:f.volumeSunspotStrength},uVolumeScale:{value:f.volumeScale},uVolumeWarp:{value:f.volumeWarp},uVolumeFlow:{value:f.volumeFlow},uVolumeGranulation:{value:f.volumeGranulation},uVolumeDetail:{value:f.volumeDetail},uVolumeFilament:{value:f.volumeFilament},uVolumeContrast:{value:f.volumeContrast},uVolumeBrightness:{value:f.volumeBrightness},uVolumeBodyColor:{value:new we(f.volumeBodyColor)},uVolumeMidColor:{value:new we(f.volumeMidColor)},uVolumeHotColor:{value:new we(f.volumeHotColor)},uDensity:{value:f.particleDensity},uPointSize:{value:f.particleSize},uOpacity:{value:f.particleOpacity},uMotion:{value:f.particleMotion},uPlumeSpread:{value:f.plumeSpread},uTextureResponse:{value:f.textureResponse},uSurfaceDisplacement:{value:f.displacement},uSurfaceClearance:{value:f.particleSurfaceClearance},uPixelRatio:{value:1},uParticleColor:{value:new we(f.particleColor)},uParticleHotColor:{value:new we(f.particleHotColor)}},Zg=new gt({name:"TWIGL-responsive plume particles",uniforms:Me,vertexShader:`
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

    ${hs}

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
  `,fragmentShader:`
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
  `,transparent:!0,depthWrite:!1,depthTest:!0,blending:dr,vertexColors:!1}),To=new mh(Qi,Zg);To.frustumCulled=!1;To.renderOrder=2;pi.add(To);const vo=new ar;pi.add(vo);vo.add(Tr,vr,To);const $g={low:.46,balanced:.68,high:.84,ultra:1};let Cl=1,Rl=1,_r=!0,Gn=1;function Pc(){const i=oo;oo=Mc(),Eo.material=oo,i.dispose(),hi=!0}function Lc(){const i=Number(f.textureResolution),e=wn;wn=yc(i),Et.r.value.set(i,i),ve.uTwigl.value=wn.texture,Me.uTwigl.value=wn.texture,lt.uTwigl.value=wn.texture,e.dispose(),hi=!0}function Ct(){Et.uTextureGain.value=f.textureGain,Et.uTextureContrast.value=f.textureContrast,Et.uDomainScale.value=f.sourceScale,Et.uDomainRotation.value=si.degToRad(f.sourceRotation),Et.uDomainOffset.value.set(f.sourceOffsetX,f.sourceOffsetY),Et.uDomainSymmetry.value=f.sourceSymmetry,Et.uDomainWarp.value=f.sourceWarp,Et.uOctaves.value=f.sourceOctaves,Et.uRaySteps.value=f.sourceRaySteps,Et.uHueShift.value=f.sourceHue/360,Et.uSaturation.value=f.sourceSaturation,Et.uTextureGamma.value=f.sourceGamma,Et.uInvert.value=f.sourceInvert?1:0,lt.uFeed.value=f.fieldFeed,lt.uKill.value=f.fieldKill,lt.uDiffusion.value=f.fieldDiffusion,lt.uDiffusionRatio.value=f.fieldDiffusionRatio,lt.uReaction.value=f.fieldReaction,lt.uTimeStep.value=f.fieldTimeStep,lt.uForcing.value=f.fieldForcing,lt.uSourceInjection.value=f.fieldSourceInjection,lt.uSourceSeed.value=f.fieldSourceSeed,lt.uSourceThreshold.value=f.fieldSourceThreshold,lt.uFlow.value=f.fieldFlow,lt.uFlowScale.value=f.fieldFlowScale,lt.uFlowWarp.value=f.fieldFlowWarp,lt.uMemory.value=f.fieldMemory,lt.uSeedSize.value=f.fieldSeedSize,ve.uUvScale.value=f.uvScale,ve.uUvRotation.value=si.degToRad(f.uvRotation),ve.uUvSeamFeather.value=f.uvSeamFeather,ve.uUvSeamIrregularity.value=f.uvSeamIrregularity,ve.uMaterialDomain.value=mo[f.materialDomain]??0,ve.uFieldContour.value=f.fieldContour,ve.uFieldRidgeWidth.value=f.fieldRidgeWidth,ve.uFieldStreakBaseColor.value.set(f.fieldStreakBaseColor),ve.uFieldStreakHotColor.value.set(f.fieldStreakHotColor),ve.uFieldStreakBrightness.value=f.fieldStreakBrightness,ve.uFieldColorAuthority.value=f.fieldColorAuthority,ve.uVolumeBasis.value=go[f.volumeBasis]??2,ve.uVolumeTwiglInfluence.value=f.volumeTwiglInfluence,ve.uVolumeTwiglScale.value=f.volumeTwiglScale,ve.uVolumeSourceHeat.value=f.volumeSourceHeat,ve.uVolumeSourceDensity.value=f.volumeSourceDensity,ve.uVolumeSourceWarp.value=f.volumeSourceWarp,ve.uVolumeSourceFlow.value=f.volumeSourceFlow,ve.uVolumeDepthDecorrelation.value=f.volumeDepthDecorrelation,ve.uVolumeOctaves.value=f.volumeOctaves,ve.uVolumeLacunarity.value=f.volumeLacunarity,ve.uVolumeGain.value=f.volumeGain,ve.uVolumeCellularity.value=f.volumeCellularity,ve.uVolumeGranuleBoundary.value=f.volumeGranuleBoundary,ve.uVolumeSunspotScale.value=f.volumeSunspotScale,ve.uVolumeSunspotStrength.value=f.volumeSunspotStrength,ve.uVolumeScale.value=f.volumeScale,ve.uVolumeWarp.value=f.volumeWarp,ve.uVolumeFlow.value=f.volumeFlow,ve.uVolumeGranulation.value=f.volumeGranulation,ve.uVolumeDetail.value=f.volumeDetail,ve.uVolumeFilament.value=f.volumeFilament,ve.uVolumeContrast.value=f.volumeContrast,ve.uVolumeDepth.value=f.volumeDepth,ve.uVolumeSteps.value=f.volumeSteps,ve.uVolumeDensity.value=f.volumeDensity,ve.uVolumeAbsorption.value=f.volumeAbsorption,ve.uVolumeBrightness.value=f.volumeBrightness,ve.uVolumeEmission.value=f.volumeEmission,ve.uVolumeLimbGlow.value=f.volumeLimbGlow,ve.uVolumeBodyColor.value.set(f.volumeBodyColor),ve.uVolumeMidColor.value.set(f.volumeMidColor),ve.uVolumeHotColor.value.set(f.volumeHotColor),ve.uDisplacement.value=f.displacement,ve.uTextureMix.value=f.textureMix,ve.uSourceColorMix.value=f.sourceColorMix,ve.uEmission.value=f.emission,ve.uRoughness.value=f.roughness,ve.uOpacity.value=f.opacity,ve.uAlphaInfluence.value=f.alphaInfluence,ve.uFresnel.value=f.fresnel,ve.uSurfaceContrast.value=f.surfaceContrast,ve.uBaseColor.value.set(f.baseColor),ve.uEdgeColor.value.set(f.edgeColor),ve.uAccentColor.value.set(f.accentColor),so.uEdgeColor.value.set(f.materialDomain==="solarVolume"?f.volumeMidColor:f.edgeColor),so.uAccentColor.value.set(f.materialDomain==="solarVolume"?f.volumeHotColor:f.accentColor),so.uIntensity.value=f.haloIntensity*(f.materialDomain==="solarVolume"?.42:1),vr.visible=f.haloEnabled,Me.uUvScale.value=f.uvScale,Me.uUvRotation.value=si.degToRad(f.uvRotation),Me.uUvSeamFeather.value=f.uvSeamFeather,Me.uUvSeamIrregularity.value=f.uvSeamIrregularity,Me.uMaterialDomain.value=mo[f.materialDomain]??0,Me.uFieldContour.value=f.fieldContour,Me.uFieldRidgeWidth.value=f.fieldRidgeWidth,Me.uFieldStreakBaseColor.value.set(f.fieldStreakBaseColor),Me.uFieldStreakHotColor.value.set(f.fieldStreakHotColor),Me.uFieldStreakBrightness.value=f.fieldStreakBrightness,Me.uFieldColorAuthority.value=f.fieldColorAuthority,Me.uVolumeBasis.value=go[f.volumeBasis]??2,Me.uVolumeTwiglInfluence.value=f.volumeTwiglInfluence,Me.uVolumeTwiglScale.value=f.volumeTwiglScale,Me.uVolumeSourceHeat.value=f.volumeSourceHeat,Me.uVolumeSourceDensity.value=f.volumeSourceDensity,Me.uVolumeSourceWarp.value=f.volumeSourceWarp,Me.uVolumeSourceFlow.value=f.volumeSourceFlow,Me.uVolumeDepthDecorrelation.value=f.volumeDepthDecorrelation,Me.uVolumeOctaves.value=f.volumeOctaves,Me.uVolumeLacunarity.value=f.volumeLacunarity,Me.uVolumeGain.value=f.volumeGain,Me.uVolumeCellularity.value=f.volumeCellularity,Me.uVolumeGranuleBoundary.value=f.volumeGranuleBoundary,Me.uVolumeSunspotScale.value=f.volumeSunspotScale,Me.uVolumeSunspotStrength.value=f.volumeSunspotStrength,Me.uVolumeScale.value=f.volumeScale,Me.uVolumeWarp.value=f.volumeWarp,Me.uVolumeFlow.value=f.volumeFlow,Me.uVolumeGranulation.value=f.volumeGranulation,Me.uVolumeDetail.value=f.volumeDetail,Me.uVolumeFilament.value=f.volumeFilament,Me.uVolumeContrast.value=f.volumeContrast,Me.uVolumeBrightness.value=f.volumeBrightness,Me.uVolumeBodyColor.value.set(f.volumeBodyColor),Me.uVolumeMidColor.value.set(f.volumeMidColor),Me.uVolumeHotColor.value.set(f.volumeHotColor),Me.uDensity.value=f.particleDensity,Me.uPointSize.value=f.particleSize,Me.uOpacity.value=f.particleOpacity,Me.uMotion.value=f.particleMotion,Me.uPlumeSpread.value=f.plumeSpread,Me.uTextureResponse.value=f.textureResponse,Me.uSurfaceDisplacement.value=f.displacement,Me.uSurfaceClearance.value=f.particleSurfaceClearance,Me.uParticleColor.value.set(f.particleColor),Me.uParticleHotColor.value.set(f.particleHotColor),vo.scale.setScalar(f.sphereScale),vo.position.y=f.sphereY,vr.scale.setScalar(f.haloSize),ct.fov=f.cameraFov+(Gn-1)*18,ct.updateProjectionMatrix(),$e.target.y=f.sphereY,ro.strength=f.bloomStrength,ro.radius=f.bloomRadius,ro.threshold=f.bloomThreshold,mt.toneMappingExposure=f.exposure,Qi.setDrawRange(0,Math.min(Ji,Math.floor(18e4*$g[f.quality])))}function Uc(){const i=ct.position.clone().sub($e.target).normalize();ct.position.copy($e.target).addScaledVector(i,f.cameraDistance*Gn),$e.update()}function Fc(){const i=Math.max(1,document.querySelector("#plume-stage").clientWidth),e=Math.max(1,document.querySelector("#plume-stage").clientHeight),t=Math.min(window.devicePixelRatio||1,f.dpr);if(!_r&&i===Cl&&e===Rl&&mt.getPixelRatio()===t)return;Cl=i,Rl=e;const n=i/e,r=n<.78?1+(.78-n)*1.65:1;if(Math.abs(r-Gn)>.001){const o=ct.position.clone().sub($e.target).normalize(),a=ct.position.distanceTo($e.target);ct.position.copy($e.target).addScaledVector(o,a*r/Gn),Gn=r}mt.setPixelRatio(t),mt.setSize(i,e,!1),Yi.setPixelRatio(t),Yi.setSize(i,e),Me.uPixelRatio.value=t,ct.aspect=n,ct.fov=f.cameraFov+(Gn-1)*18,ct.updateProjectionMatrix(),_r=!1}const Tt=window.LabsPanels.adapt(new window.SHPanel(document.querySelector("#controls"))),bo=[],Jg={scenePreset:"chromosphere-surge"};let xr=null,Wa=!1;function k(i,e=Ct){return bo.push(i),i.on("change",t=>{e(t),!Wa&&xr&&xr.setValue("custom")}),i}function Xa(i,e){Wa=!0,Object.assign(f,applyGraphicsProfile({...fi,...i},starGraphicsLevel)),bo.forEach(t=>t.setValue(f[t.property])),Pc(),Lc(),bc(),Ac(),ct.position.set(.08,f.sphereY+.03,f.cameraDistance*Gn),$e.target.set(0,f.sphereY,0),Ya=0,ps.input.textContent=f.paused?"Resume animation":"Pause animation",_r=!0,gi(),Ct(),$e.update(),xr.setValue(e),Wa=!1}const Qg=Tt.folder("Scene presets",{expanded:!0});xr=Qg.select(Jg,"scenePreset",{label:"Composition preset",options:[..._c.map(i=>({label:i.label,value:i.id})),{label:"Authored default",value:"authored-default"},{label:"Custom",value:"custom"}]});xr.on("change",({value:i})=>{if(i==="custom")return;if(i==="authored-default"){Xa(fi,i);return}const e=_c.find(t=>t.id===i);e&&Xa(e.settings,i)});const e0=Tt.folder("Material path",{expanded:!0});k(e0.select(f,"materialDomain",{label:"Active domain",options:[{label:"Organic projections",value:"organic"},{label:"Blended octahedral charts",value:"octahedral"},{label:"Spherical field simulation",value:"sphericalField"},{label:"Volumetric solar field",value:"solarVolume"}]}),({value:i})=>{i==="sphericalField"&&Er(),gi(),Ct()});const Ic=Tt.folder("Animation / timing",{expanded:!1});k(Ic.slider(f,"timeSpeed",{min:0,max:1.6,step:.01,label:"Time speed"}));k(Ic.slider(f,"phase",{min:-12,max:12,step:.01,label:"Time phase"}));const Rn=Tt.folder("TWIGL source",{expanded:!0});k(Rn.select(f,"twiglPreset",{label:"Preset / source",options:ka.map(i=>({label:i.label,value:i.id}))}),()=>{Pc(),Ct()});k(Rn.select(f,"textureResolution",{label:"Texture resolution",options:[{label:"256 × 256",value:"256"},{label:"512 × 512",value:"512"},{label:"768 × 768",value:"768"},{label:"1024 × 1024",value:"1024"}]}),Lc);k(Rn.slider(f,"textureGain",{min:.4,max:4,step:.01,label:"Texture gain"}));k(Rn.slider(f,"textureContrast",{min:0,max:2.6,step:.01,label:"Texture contrast"}));const t0=[k(Rn.slider(f,"uvScale",{min:.25,max:4.5,step:.01,label:"Mapping scale"})),k(Rn.slider(f,"uvRotation",{min:-180,max:180,step:1,label:"Mapping rotation"})),k(Rn.slider(f,"uvSeamFeather",{min:0,max:.3,step:.005,label:"Chart seam feather"})),k(Rn.slider(f,"uvSeamIrregularity",{min:0,max:1,step:.01,label:"Chart irregularity"}))],Vt=Tt.folder("Source domain / equation",{expanded:!0});k(Vt.slider(f,"sourceOctaves",{min:1,max:32,step:1,label:"Detail octaves"}));k(Vt.slider(f,"sourceRaySteps",{min:8,max:160,step:1,label:"Primary ray steps"}));k(Vt.slider(f,"sourceSymmetry",{min:1,max:16,step:1,label:"Angular symmetry"}));k(Vt.slider(f,"sourceScale",{min:.2,max:4,step:.01,label:"Source scale"}));k(Vt.slider(f,"sourceRotation",{min:-180,max:180,step:1,label:"Source rotation"}));k(Vt.slider(f,"sourceOffsetX",{min:-1.5,max:1.5,step:.01,label:"Source offset X"}));k(Vt.slider(f,"sourceOffsetY",{min:-1.5,max:1.5,step:.01,label:"Source offset Y"}));k(Vt.slider(f,"sourceWarp",{min:0,max:2.5,step:.01,label:"Domain warp"}));k(Vt.slider(f,"sourceHue",{min:-180,max:180,step:1,label:"Hue shift"}));k(Vt.slider(f,"sourceSaturation",{min:0,max:2.5,step:.01,label:"Saturation"}));k(Vt.slider(f,"sourceGamma",{min:.3,max:2.6,step:.01,label:"Texture gamma"}));k(Vt.toggle(f,"sourceInvert",{label:"Invert source"}));const Dl=new Set(["sourceOctaves","sourceRaySteps","sourceSymmetry","sourceScale","sourceRotation","sourceOffsetX","sourceOffsetY","sourceWarp","sourceHue","sourceSaturation","sourceGamma","sourceInvert"]);Vt.button("Reset source domain",()=>{Dl.forEach(i=>{f[i]=fi[i]}),bo.filter(i=>Dl.has(i.property)).forEach(i=>i.setValue(f[i.property])),Ct()});const fn=Tt.folder("Sphere material",{expanded:!0}),ds=[k(fn.slider(f,"textureMix",{min:0,max:1,step:.01,label:"Field color mix"})),k(fn.slider(f,"sourceColorMix",{min:0,max:1,step:.01,label:"Source color"})),k(fn.slider(f,"emission",{min:0,max:3.5,step:.01,label:"Surface emission"}))];k(fn.slider(f,"displacement",{min:0,max:.6,step:.001,label:"Displacement"}));k(fn.select(f,"surfaceMesh",{label:"Displacement mesh",options:[{label:"Balanced / 25k vertices",value:"balanced"},{label:"Detailed / 99k vertices",value:"detailed"},{label:"Ultra / 165k vertices",value:"ultra"},{label:"Extreme / 395k vertices",value:"extreme"},{label:"4090 Showcase / 657k vertices",value:"showcase"}]}),Ac);k(fn.slider(f,"surfaceContrast",{min:.4,max:2.8,step:.01,label:"Surface contrast"}));ds.push(k(fn.slider(f,"roughness",{min:.02,max:1,step:.01})));k(fn.slider(f,"opacity",{min:.35,max:1,step:.01}));ds.push(k(fn.slider(f,"alphaInfluence",{min:0,max:.85,step:.01,label:"Texture alpha"})),k(fn.slider(f,"fresnel",{min:0,max:2.8,step:.01,label:"Edge fresnel"})));const un=Tt.folder("Spherical field / reaction",{expanded:!0});k(un.select(f,"fieldResolution",{label:"Field resolution",options:[{label:"256 × 128",value:"256"},{label:"512 × 256",value:"512"},{label:"768 × 384",value:"768"},{label:"1024 × 512",value:"1024"},{label:"2048 × 1024 / 4090",value:"2048"}]}),bc);k(un.slider(f,"fieldSteps",{min:1,max:6,step:1,label:"Steps / frame"}));k(un.slider(f,"fieldFeed",{min:.003,max:.1,step:.001,label:"Growth feed"}));k(un.slider(f,"fieldKill",{min:.02,max:.095,step:.001,label:"Dissipation"}));k(un.slider(f,"fieldReaction",{min:.25,max:2.5,step:.01,label:"Reaction strength"}));k(un.slider(f,"fieldDiffusion",{min:.1,max:1.5,step:.01,label:"Chemical A diffusion"}));k(un.slider(f,"fieldDiffusionRatio",{min:.08,max:1,step:.01,label:"Chemical B diffusion"}));k(un.slider(f,"fieldTimeStep",{min:.15,max:1.35,step:.01,label:"Simulation timestep"}));k(un.slider(f,"fieldSeedSize",{min:.04,max:.95,step:.01,label:"Seed radius"}),()=>{Er(),Ct()});un.button("Reseed spherical field",Er);const mn=Tt.folder("Spherical field / TWIGL + flow",{expanded:!1});k(mn.slider(f,"fieldForcing",{min:0,max:2.5,step:.01,label:"TWIGL morphogen"}));k(mn.slider(f,"fieldSourceInjection",{min:0,max:.8,step:.005,label:"TWIGL injection"}));k(mn.slider(f,"fieldSourceSeed",{min:0,max:1,step:.01,label:"TWIGL seed amount"}),()=>{Er(),Ct()});k(mn.slider(f,"fieldSourceThreshold",{min:.05,max:.75,step:.01,label:"Source gate"}));k(mn.slider(f,"fieldFlow",{min:0,max:3,step:.01,label:"Tangent advection"}));k(mn.slider(f,"fieldFlowScale",{min:.2,max:4,step:.01,label:"Flow curl scale"}));k(mn.slider(f,"fieldFlowWarp",{min:0,max:1.2,step:.01,label:"Flow axis warp"}));k(mn.slider(f,"fieldMemory",{min:0,max:1,step:.01,label:"Source color memory"}));mn.button("Reseed from current TWIGL",Er);const mi=Tt.folder("Spherical field / shaping",{expanded:!1});k(mi.slider(f,"fieldContour",{min:.02,max:.75,step:.005,label:"Contour level"}));k(mi.slider(f,"fieldRidgeWidth",{min:.01,max:.35,step:.005,label:"Ridge width"}));k(mi.color(f,"fieldStreakBaseColor",{label:"Streak body"}));k(mi.color(f,"fieldStreakHotColor",{label:"Streak core"}));k(mi.slider(f,"fieldStreakBrightness",{min:0,max:4,step:.01,label:"Streak brightness"}));k(mi.slider(f,"fieldColorAuthority",{min:0,max:1,step:.01,label:"Color authority"}));const vt=Tt.folder("Volumetric solar field",{expanded:!0});k(vt.select(f,"volumeBasis",{label:"Volume basis",options:[{label:"Gyroid filaments / current",value:"gyroid"},{label:"Cellular FBM photosphere",value:"cellular"},{label:"TWIGL-driven plasma",value:"twiglPlasma"}]}),()=>{gi(),Ct()});k(vt.slider(f,"volumeScale",{min:.5,max:10,step:.01,label:"Convection scale"}));k(vt.slider(f,"volumeWarp",{min:0,max:3.5,step:.01,label:"Domain turbulence"}));k(vt.slider(f,"volumeFlow",{min:0,max:2.5,step:.01,label:"Plasma flow"}));k(vt.slider(f,"volumeGranulation",{min:.8,max:8,step:.01,label:"Granulation scale"}));k(vt.slider(f,"volumeDetail",{min:.5,max:6,step:.01,label:"Micro detail"}));k(vt.slider(f,"volumeFilament",{min:0,max:1,step:.01,label:"Filament sharpness"}));k(vt.slider(f,"volumeContrast",{min:.4,max:4,step:.01,label:"Plasma contrast"}));k(vt.slider(f,"volumeDepth",{min:.04,max:1.2,step:.01,label:"Ray depth"}));k(vt.slider(f,"volumeSteps",{min:6,max:40,step:1,label:"Raymarch steps"}));k(vt.slider(f,"volumeDensity",{min:.1,max:3.5,step:.01,label:"Plasma density"}));k(vt.slider(f,"volumeAbsorption",{min:0,max:6,step:.01,label:"Depth absorption"}));k(vt.slider(f,"volumeBrightness",{min:0,max:5,step:.01,label:"Photosphere brightness"}));k(vt.slider(f,"volumeEmission",{min:0,max:4,step:.01,label:"Plasma emission"}));k(vt.slider(f,"volumeLimbGlow",{min:0,max:4,step:.01,label:"Limb glow"}));k(vt.color(f,"volumeBodyColor",{label:"Sunspot color"}));k(vt.color(f,"volumeMidColor",{label:"Plasma body"}));k(vt.color(f,"volumeHotColor",{label:"Granule core"}));const Wn=Tt.folder("Solar volume / TWIGL driver",{expanded:!1});k(Wn.slider(f,"volumeTwiglInfluence",{min:0,max:1.5,step:.01,label:"Source influence"}));k(Wn.slider(f,"volumeTwiglScale",{min:.15,max:5,step:.01,label:"Source scale"}));k(Wn.slider(f,"volumeSourceHeat",{min:0,max:2,step:.01,label:"Heat influence"}));k(Wn.slider(f,"volumeSourceDensity",{min:0,max:1,step:.01,label:"Density influence"}));k(Wn.slider(f,"volumeSourceWarp",{min:0,max:3,step:.01,label:"Domain warp"}));k(Wn.slider(f,"volumeSourceFlow",{min:0,max:2,step:.01,label:"Source flow"}));k(Wn.slider(f,"volumeDepthDecorrelation",{min:0,max:2,step:.01,label:"Depth decorrelation"}));const Xn=Tt.folder("Solar volume / organic structure",{expanded:!1});k(Xn.slider(f,"volumeOctaves",{min:1,max:5,step:1,label:"FBM octaves"}));k(Xn.slider(f,"volumeLacunarity",{min:1.2,max:3.5,step:.01,label:"Octave spacing"}));k(Xn.slider(f,"volumeGain",{min:.15,max:.85,step:.01,label:"Octave persistence"}));k(Xn.slider(f,"volumeCellularity",{min:0,max:1,step:.01,label:"Cellular character"}));k(Xn.slider(f,"volumeGranuleBoundary",{min:.03,max:.6,step:.005,label:"Granule boundary"}));k(Xn.slider(f,"volumeSunspotScale",{min:.1,max:3,step:.01,label:"Sunspot scale"}));k(Xn.slider(f,"volumeSunspotStrength",{min:0,max:1.5,step:.01,label:"Sunspot strength"}));const Pl=new Set(["volumeBasis","volumeTwiglInfluence","volumeTwiglScale","volumeSourceHeat","volumeSourceDensity","volumeSourceWarp","volumeSourceFlow","volumeDepthDecorrelation","volumeOctaves","volumeLacunarity","volumeGain","volumeCellularity","volumeGranuleBoundary","volumeSunspotScale","volumeSunspotStrength","volumeScale","volumeWarp","volumeFlow","volumeGranulation","volumeDetail","volumeFilament","volumeContrast","volumeDepth","volumeSteps","volumeDensity","volumeAbsorption","volumeBrightness","volumeEmission","volumeLimbGlow","volumeBodyColor","volumeMidColor","volumeHotColor"]);vt.button("Reset solar volume",()=>{Pl.forEach(i=>{f[i]=fi[i]}),bo.filter(i=>Pl.has(i.property)).forEach(i=>i.setValue(f[i.property])),Ct()});const hr=Tt.folder("Palette",{expanded:!1}),n0=[k(hr.color(f,"baseColor",{label:"Silhouette"})),k(hr.color(f,"edgeColor",{label:"Violet edge"})),k(hr.color(f,"accentColor",{label:"Field accent"}))];k(hr.color(f,"particleColor",{label:"Particle base"}));k(hr.color(f,"particleHotColor",{label:"Particle hot"}));const pn=Tt.folder("Particle plume",{expanded:!0});k(pn.slider(f,"particleDensity",{min:.04,max:1,step:.01,label:"Density"}));k(pn.slider(f,"particleSize",{min:.3,max:4.2,step:.01,label:"Point size"}));k(pn.slider(f,"particleOpacity",{min:.04,max:1.2,step:.01,label:"Particle glow"}));k(pn.slider(f,"particleMotion",{min:0,max:1.8,step:.01,label:"Motion"}));k(pn.slider(f,"plumeSpread",{min:0,max:1.8,step:.01,label:"Radial plume"}));k(pn.slider(f,"textureResponse",{min:0,max:2.4,step:.01,label:"Field response"}));k(pn.slider(f,"particleSurfaceClearance",{min:0,max:.08,step:.001,label:"Surface clearance"}));k(pn.toggle(f,"haloEnabled",{label:"Halo"}),()=>{gi(),Ct()});const i0=[k(pn.slider(f,"haloIntensity",{min:0,max:2,step:.01,label:"Atmosphere"})),k(pn.slider(f,"haloSize",{min:1.005,max:1.18,step:.001,label:"Halo radius"}))],Yn=Tt.folder("Camera / framing",{expanded:!1});k(Yn.slider(f,"sphereScale",{min:.62,max:1.38,step:.01,label:"Sphere scale"}));k(Yn.slider(f,"sphereY",{min:-.7,max:.7,step:.01,label:"Vertical frame"}));k(Yn.slider(f,"cameraDistance",{min:2.8,max:7.8,step:.01,label:"Camera distance"}),()=>{Uc(),Ct()});k(Yn.slider(f,"cameraFov",{min:25,max:68,step:1,label:"Field of view"}));k(Yn.toggle(f,"autoRotate",{label:"Auto orbit"}),()=>{gi(),Ct()});const r0=k(Yn.slider(f,"rotateSpeed",{min:-1.2,max:1.2,step:.01,label:"Orbit speed"}));Yn.button("Recenter camera",()=>{$e.target.set(0,f.sphereY,0),ct.position.set(.08,f.sphereY+.03,f.cameraDistance*Gn),$e.update()});const qi=Tt.folder("Bloom / output",{expanded:!1});k(qi.slider(f,"bloomStrength",{min:0,max:2.8,step:.01,label:"Bloom"}),()=>{gi(),Ct()});const o0=[k(qi.slider(f,"bloomRadius",{min:0,max:1,step:.01,label:"Bloom radius"})),k(qi.slider(f,"bloomThreshold",{min:0,max:1,step:.01,label:"Bloom threshold"}))];k(qi.slider(f,"exposure",{min:.3,max:2,step:.01}));k(qi.select(f,"quality",{options:[{label:"Low / 83k particles",value:"low"},{label:"Balanced / 122k",value:"balanced"},{label:"High / 151k",value:"high"},{label:"Ultra / 180k",value:"ultra"}]}),Ct);k(qi.slider(f,"dpr",{min:.75,max:2,step:.05,label:"DPR cap"}),()=>{_r=!0,Ct()});function or(i,e){i.forEach(t=>t.setVisible(e))}function gi(){const i=f.materialDomain,e=i==="organic"||i==="octahedral",t=i==="sphericalField",n=i==="solarVolume",r=n&&f.volumeBasis==="twiglPlasma",o=!n||r;Rn.setVisible(o),Vt.setVisible(o),or(t0,e),un.setVisible(t),mn.setVisible(t),mi.setVisible(t),vt.setVisible(n),Wn.setVisible(r),Xn.setVisible(n&&f.volumeBasis!=="gyroid"),or(ds,!n),or(n0,!n),or(i0,f.haloEnabled),r0.setVisible(f.autoRotate),or(o0,f.bloomStrength>.001)}const fs=Tt.folder("Session",{expanded:!1}),ps=fs.button("Pause animation",()=>{f.paused=!f.paused,ps.input.textContent=f.paused?"Resume animation":"Pause animation"});function a0(){const i=Object.fromEntries(Object.keys(fi).map(e=>[e,f[e]]));return JSON.stringify({project:"star-simulator",version:1,settings:i},null,2)}async function s0(){const i=a0();try{await navigator.clipboard.writeText(i);return}catch{const e=document.createElement("textarea");e.value=i,e.setAttribute("readonly",""),e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.select();const t=document.execCommand("copy");if(e.remove(),!t)throw new Error("Clipboard copy failed")}}const $r=fs.button("Copy JSON",()=>{s0().then(()=>{$r.input.textContent="JSON copied",window.setTimeout(()=>{$r.input.textContent="Copy JSON"},1400)}).catch(()=>{$r.input.textContent="Copy unavailable",window.setTimeout(()=>{$r.input.textContent="Copy JSON"},1800)})});fs.button("Reset authored defaults",()=>{Xa(fi,"authored-default")});window.addEventListener("keydown",i=>{var e,t,n;i.code==="Space"&&!["INPUT","SELECT","TEXTAREA","BUTTON"].includes((e=document.activeElement)==null?void 0:e.tagName)&&(i.preventDefault(),ps.input.click()),i.key.toLowerCase()==="r"&&!["INPUT","SELECT","TEXTAREA"].includes((t=document.activeElement)==null?void 0:t.tagName)&&((n=Yn.body.querySelector(".sh-btn"))==null||n.click())});window.addEventListener("resize",()=>{_r=!0});cs.addEventListener("webglcontextlost",i=>{i.preventDefault()});let Ya=0,Ll=performance.now();const ia=new I;function Nc(i){const e=Math.min(.05,Math.max(0,(i-Ll)*.001));Ll=i,f.paused||(Ya+=e*f.timeSpeed),Fc(),$e.autoRotate=f.autoRotate&&!f.paused,$e.autoRotateSpeed=f.rotateSpeed,$e.update(e);const t=Ya+f.phase;Et.t.value=t,ve.uVolumeTime.value=t,Me.uTime.value=t,Me.uVolumeTime.value=t,ia.copy(ct.position),Tr.worldToLocal(ia),ve.uObjectCameraPosition.value.copy(ia),mt.setRenderTarget(wn),mt.setClearColor(0,1),mt.clear(),mt.render(xc,Vg),f.materialDomain==="sphericalField"&&(!f.paused||hi)&&Wg(t),mt.setRenderTarget(null),mt.setClearColor(131848,1),Yi.render(e),requestAnimationFrame(Nc)}gi();Ct();Uc();Fc();requestAnimationFrame(Nc);

new ResizeObserver(()=>{_r=true;Fc()}).observe(document.querySelector("#plume-stage"));
