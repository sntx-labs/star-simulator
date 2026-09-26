// Curated directly from the local twigl-deep-field Yohei archive.
// The compact sources are preserved; the surrounding runtime adapts Twigl globals
// and bounded loops for Three.js' WebGL shader pipeline.
export const TWIGL_PRESETS = [
  {
    id: "1986780675169808394",
    label: "Log interference / violet",
    family: "Log interference",
    source: "float i,e,R,s;vec3 q,p,d=vec3(FC.xy/r-.5,.2);for(q.yz--;i++<99.;){o.rgb+=hsv(.6+e,.4,min(e*s*e/.01,.3-e)/9.);s=1.;p=q+=d*e*R*.3;p=vec3(log2(R=length(p))-t*.3,exp(-p.z/R+.5),atan(p.x,p.y)-t*.3)-1.5;for(e=--p.y;s<1e3;s+=s)e+=-abs(dot(cos(p.zxy*s),.2-sin(p*s)))/s*.24;}",
  },
  {
    id: "1877626433008496846",
    label: "Interference veil",
    family: "Log interference",
    source: "float i,e,R,s;vec3 q,p,d=vec3(FC.xy/r-vec2(.4),.4);for(q.xz--;i++<79.;){o.rgb+=hsv(e,-d.y,min(s*e,.4-e)/20.);s=1.;p=q+=d*e*R*.6;p=vec3(log(R=length(p)),exp(.7-p.z/R),atan(p.x,p.y)+sin(t*.5)*.2);for(e=--p.y;s<4e2;s+=s)e+=dot(sin(p.zxy*s+sin(t)*.6)-1.,cos(p*s))/s*.2;}",
  },
  {
    id: "1880739133716570129",
    label: "Distance lattice",
    family: "Distance lattice",
    source: "float i,d=1.,m;vec3 p,q,u;u+=1.;for(;i++<99.&&d>5e-7;){d=min(length(fract(p.xz)-.5)-.13,.5-abs(p.y));m=1.;for(int j;j++<9;m+=m)q=p*m*9.*rotate3D(t*.5,vec3(1)),d-=(dot(sin(q),u))/m*.02;p+=normalize(vec3(FC.xy-r*.5,r.y*.35))*d*.6;}o+=8./i*vec4(.5,vec3(1.5));",
  },
  {
    id: "1900460641590403482",
    label: "Microscopic ring",
    family: "Microscopic ring",
    source: "vec3 p,q;for(float i,g,e;i++<28.;o+=(p.x,.05*exp(-pow(i,4.)*e))){p=vec3((FC.xy-.5*r)/r.y*g,g-2.4)*rotate3D(t*.8,FC.zxz);q=(sin(p*50.));g+=e=max(abs(length(p)-1.)-.003,-(fract(distance(q,p*.001)))/299.)+.002;}",
  },
  {
    id: "1936046385700176266",
    label: "Amber log fold",
    family: "Log interference",
    source: "float i,e,R,s;vec3 q,p,d=vec3(FC.xy/r-vec2(.5,0),.4);for(q.zy--;i++<99.;){o.rgb+=hsv(.1,-R*.6,min(e*s,.6-e)/35.);s=1.;p=q+=d*e*R*.23;p=vec3(log2(R=length(p))-t*.8,exp(.17-p.z/R),atan(p.x,p.y)-t*.4);for(e=--p.y;s<1e3;s+=s)e+=dot(sin(p.xyx*s)-.5,.4-cos(p.zxz*s))/s*.3;}",
  },
  {
    id: "1961047535101059204",
    label: "Matrix tide",
    family: "Matrix wave",
    source: "mat2 m=rotate2D(.5);for(float i,e,g,s,h=.45;i++<57.;g+=e*h){vec3 p=vec3((FC.xy-h*r*.7)/r.y*g,g)+h;s=4.;for(e=p.y-g*h*1.3;s<1e3;s*=1.4)p.zx*=m,e+=cos(t*.5+s*p.x)/s*.5;o.rgb+=e/3.*hsv(.57,e-p.y,.3);}",
  },
];

function splitDeclarations(value) {
  const declarations = [];
  let depth = 0;
  let current = "";
  for (const character of value) {
    if (character === "(" || character === "[" || character === "{") depth += 1;
    if (character === ")" || character === "]" || character === "}") depth -= 1;
    if (character === "," && depth === 0) {
      declarations.push(current);
      current = "";
    } else current += character;
  }
  declarations.push(current);
  return declarations;
}

function zeroFor(type) {
  if (type === "int") return "0";
  if (type === "float") return "0.0";
  return `${type}(0.0)`;
}

export function initializeTwiglLocals(source) {
  return source.replace(/\b(float|int|vec2|vec3|vec4)\s+([^;]+);/g, (_, type, declarationList) => {
    const declarations = splitDeclarations(declarationList).map(declaration => {
      const value = declaration.trim();
      return value.includes("=") ? value : `${value}=${zeroFor(type)}`;
    });
    return `${type} ${declarations.join(",")};`;
  });
}

function splitLoopHeader(header) {
  const parts = [];
  let depth = 0;
  let current = "";
  for (const character of header) {
    if (character === "(" || character === "[" || character === "{") depth += 1;
    if (character === ")" || character === "]" || character === "}") depth -= 1;
    if (character === ";" && depth === 0) {
      parts.push(current);
      current = "";
    } else current += character;
  }
  parts.push(current);
  return parts;
}

function closingIndex(source, openIndex, openCharacter, closeCharacter) {
  let depth = 0;
  for (let index = openIndex; index < source.length; index += 1) {
    if (source[index] === openCharacter) depth += 1;
    if (source[index] === closeCharacter) {
      depth -= 1;
      if (depth === 0) return index;
    }
  }
  return -1;
}

function statementEnd(source, startIndex) {
  let depth = 0;
  for (let index = startIndex; index < source.length; index += 1) {
    const character = source[index];
    if (character === "(" || character === "[") depth += 1;
    if (character === ")" || character === "]") depth -= 1;
    if (character === ";" && depth === 0) return index + 1;
  }
  return source.length;
}

function staticLoopLimit(condition) {
  const bound = condition.match(/<\s*([0-9.]+(?:e[+-]?\d+)?)/i)?.[1];
  if (!bound) return 48;
  const numericBound = Number.parseFloat(bound);
  if (!Number.isFinite(numericBound)) return 48;
  const dynamicScaleLoop = !/[ij]\s*\+\+|\+\+\s*[ij]/.test(condition);
  return Math.max(1, Math.min(dynamicScaleLoop ? 32 : 160, Math.ceil(numericBound)));
}

export function lowerTwiglLoops(source, loopState = { index: 0 }, loopDepth = 0) {
  let output = "";
  let cursor = 0;
  while (cursor < source.length) {
    const loopStart = source.indexOf("for(", cursor);
    if (loopStart < 0) return output + source.slice(cursor);
    output += source.slice(cursor, loopStart);
    const headerEnd = closingIndex(source, loopStart + 3, "(", ")");
    if (headerEnd < 0) return output + source.slice(loopStart);
    const [initializer = "", condition = "true", increment = ""] = splitLoopHeader(source.slice(loopStart + 4, headerEnd));
    let bodyStart = headerEnd + 1;
    while (/\s/.test(source[bodyStart] || "")) bodyStart += 1;
    const isBlock = source[bodyStart] === "{";
    const bodyEnd = isBlock ? closingIndex(source, bodyStart, "{", "}") : statementEnd(source, bodyStart);
    if (bodyEnd < 0) return output + source.slice(loopStart);
    const rawBody = isBlock ? source.slice(bodyStart + 1, bodyEnd) : source.slice(bodyStart, bodyEnd);
    const loweredBody = lowerTwiglLoops(rawBody, loopState, loopDepth + 1);
    const name = `_twiglLoop${loopState.index++}`;
    const initializerCode = initializer.trim();
    const incrementCode = increment.trim();
    const iterationUniform = loopDepth === 0 ? "uRaySteps" : "uOctaves";
    output += `{${initializerCode ? `${initializerCode};` : ""}for(int ${name}=0;${name}<${staticLoopLimit(condition)};${name}++){if(float(${name})>=${iterationUniform})break;if(!(${condition.trim() || "true"}))break;${loweredBody}${incrementCode ? `${incrementCode};` : ""}}}`;
    cursor = isBlock ? bodyEnd + 1 : bodyEnd;
  }
  return output;
}

export function makeTwiglFragmentSource(rawSource) {
  return `
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
      ${lowerTwiglLoops(initializeTwiglLocals(rawSource))}
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
  `;
}
