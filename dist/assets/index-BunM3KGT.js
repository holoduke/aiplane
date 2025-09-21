(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ka="180",Hp={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vp={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Md=0,mc=1,bd=2,Gp=3,Wp=0,Lc=1,wd=2,Dn=3,Kn=0,It=1,Ln=2,Un=0,Wi=1,wr=2,gc=3,xc=4,Ed=5,ci=100,Td=101,Ad=102,Cd=103,Rd=104,Pd=200,Id=201,Dd=202,Ld=203,Jo=204,Qo=205,Fd=206,Ud=207,Nd=208,Od=209,Bd=210,zd=211,kd=212,Hd=213,Vd=214,jo=0,ea=1,ta=2,Yi=3,na=4,ia=5,sa=6,ra=7,kr=0,Gd=1,Wd=2,$n=0,Xd=1,qd=2,Yd=3,$d=4,Zd=5,Kd=6,Jd=7,vc="attached",Qd="detached",Ha=300,Jn=301,ui=302,Er=303,Tr=304,Ws=306,$i=1e3,Qt=1001,Zi=1002,Lt=1003,Fc=1004,Xp=1004,Rs=1005,qp=1005,xt=1006,mr=1007,Yp=1007,wn=1008,jd=1008,vn=1009,Uc=1010,Nc=1011,Fs=1012,Va=1013,Qn=1014,jt=1015,mi=1016,Ga=1017,Wa=1018,Ki=1020,Oc=35902,Bc=35899,zc=1021,kc=1022,Bt=1023,Us=1026,Ns=1027,Hr=1028,Vr=1029,Hc=1030,Xa=1031,$p=1032,qa=1033,gr=33776,xr=33777,vr=33778,_r=33779,oa=35840,aa=35841,la=35842,ca=35843,ha=36196,ua=37492,da=37496,fa=37808,pa=37809,ma=37810,ga=37811,xa=37812,va=37813,_a=37814,ya=37815,Sa=37816,Ma=37817,ba=37818,wa=37819,Ea=37820,Ta=37821,Aa=36492,Ca=36494,Ra=36495,Pa=36283,Ia=36284,Da=36285,La=36286,ef=2200,tf=2201,nf=2202,Ar=2300,Fa=2301,qo=2302,ki=2400,Hi=2401,Cr=2402,Ya=2500,Vc=2501,Zp=0,Kp=1,Jp=2,sf=3200,rf=3201,Qp=3202,jp=3203,gi=0,of=1,qn="",Zt="srgb",Ji="srgb-linear",Rr="linear",ht="srgb",em=0,Oi=7680,tm=7681,nm=7682,im=7683,sm=34055,rm=34056,om=5386,am=512,lm=513,cm=514,hm=515,um=516,dm=517,fm=518,_c=519,af=512,lf=513,cf=514,Gc=515,hf=516,uf=517,df=518,ff=519,Pr=35044,pm=35048,mm=35040,gm=35045,xm=35049,vm=35041,_m=35046,ym=35050,Sm=35042,Mm="100",yc="300 es",cn=2e3,Os=2001,bm={COMPUTE:"compute",RENDER:"render"},wm={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Em={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"};class Nn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uh=1234567;const Xi=Math.PI/180,Bs=180/Math.PI;function hn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[r&255]+Ut[r>>8&255]+Ut[r>>16&255]+Ut[r>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function ze(r,e,t){return Math.max(e,Math.min(t,r))}function Wc(r,e){return(r%e+e)%e}function Tm(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Am(r,e,t){return r!==e?(t-r)/(e-r):0}function yr(r,e,t){return(1-t)*r+t*e}function Cm(r,e,t,n){return yr(r,e,1-Math.exp(-t*n))}function Rm(r,e=1){return e-Math.abs(Wc(r,e*2)-e)}function Pm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Im(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Dm(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Lm(r,e){return r+Math.random()*(e-r)}function Fm(r){return r*(.5-Math.random())}function Um(r){r!==void 0&&(Uh=r);let e=Uh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nm(r){return r*Xi}function Om(r){return r*Bs}function Bm(r){return(r&r-1)===0&&r!==0}function zm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function km(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Hm(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*p,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*p,a*c);break;case"ZYZ":r.set(l*p,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Wt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ze(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Xe={DEG2RAD:Xi,RAD2DEG:Bs,generateUUID:hn,clamp:ze,euclideanModulo:Wc,mapLinear:Tm,inverseLerp:Am,lerp:yr,damp:Cm,pingpong:Rm,smoothstep:Pm,smootherstep:Im,randInt:Dm,randFloat:Lm,randFloatSpread:Fm,seededRandom:Um,degToRad:Nm,radToDeg:Om,isPowerOfTwo:Bm,ceilPowerOfTwo:zm,floorPowerOfTwo:km,setQuaternionFromProperEuler:Hm,normalize:Ze,denormalize:Wt};class J{constructor(e=0,t=0){J.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class en{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],p=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==p){let g=1-a;const m=l*d+c*f+u*p+h*x,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const E=Math.sqrt(v),A=Math.atan2(E,m*y);g=Math.sin(g*A)/E,a=Math.sin(a*A)/E}const _=a*y;if(l=l*g+d*_,c=c*g+f*_,u=u*g+p*_,h=h*g+x*_,g===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,n=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sl.copy(this).projectOnVector(e),this.sub(Sl)}reflect(e){return this.sub(Sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sl=new T,Nh=new en;class Ye{constructor(e,t,n,i,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],x=i[0],g=i[3],m=i[6],y=i[1],v=i[4],_=i[7],E=i[2],A=i[5],R=i[8];return s[0]=o*x+a*y+l*E,s[3]=o*g+a*v+l*A,s[6]=o*m+a*_+l*R,s[1]=c*x+u*y+h*E,s[4]=c*g+u*v+h*A,s[7]=c*m+u*_+h*R,s[2]=d*x+f*y+p*E,s[5]=d*g+f*v+p*A,s[8]=d*m+f*_+p*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,p=t*h+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=h*x,e[1]=(i*c-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(u*t-i*l)*x,e[5]=(i*s-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ml.makeScale(e,t)),this}rotate(e){return this.premultiply(Ml.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ml=new Ye;function pf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const Vm={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Ps(r,e){return new Vm[r](e)}function Ir(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function mf(){const r=Ir("canvas");return r.style.display="block",r}const Oh={};function Dr(r){r in Oh||(Oh[r]=!0,console.warn(r))}function Gm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Bh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zh=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wm(){const r={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ht&&(i.r=Zn(i.r),i.g=Zn(i.g),i.b=Zn(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(i.r=Ls(i.r),i.g=Ls(i.g),i.b=Ls(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qn?Rr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Dr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Dr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ji]:{primaries:e,whitePoint:n,transfer:Rr,toXYZ:Bh,fromXYZ:zh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Bh,fromXYZ:zh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),r}const it=Wm();function Zn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ls(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ss;class gf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ss===void 0&&(ss=Ir("canvas")),ss.width=e.width,ss.height=e.height;const i=ss.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ss}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ir("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Zn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xm=0;class hi{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=hn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(bl(i[o].image)):s.push(bl(i[o]))}else s=bl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function bl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?gf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qm=0;const wl=new T;class bt extends Nn{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=Qt,i=Qt,s=xt,o=wn,a=Bt,l=vn,c=bt.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=hn(),this.name="",this.source=new hi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wl).x}get height(){return this.source.getSize(wl).y}get depth(){return this.source.getSize(wl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ha)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $i:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case Zi:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $i:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case Zi:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Ha;bt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,_=(f+1)/2,E=(m+1)/2,A=(u+d)/4,R=(h+x)/4,P=(p+g)/4;return v>_&&v>E?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=R/n):_>E?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=A/i,s=P/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=R/s,i=P/s),this.set(n,i,s,t),this}let y=Math.sqrt((g-p)*(g-p)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(h-x)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xc extends Nn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new bt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new hi(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends Xc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $a extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ym extends un{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new $a(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Za extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $m extends un{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Za(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class zt{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yn):yn.fromBufferAttribute(s,o),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),jr.subVectors(this.max,js),rs.subVectors(e.a,js),os.subVectors(e.b,js),as.subVectors(e.c,js),ei.subVectors(os,rs),ti.subVectors(as,os),Mi.subVectors(rs,as);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-Mi.z,Mi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,Mi.z,0,-Mi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-Mi.y,Mi.x,0];return!El(t,rs,os,as,jr)||(t=[1,0,0,0,1,0,0,0,1],!El(t,rs,os,as,jr))?!1:(eo.crossVectors(ei,ti),t=[eo.x,eo.y,eo.z],El(t,rs,os,as,jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zn=[new T,new T,new T,new T,new T,new T,new T,new T],yn=new T,Qr=new zt,rs=new T,os=new T,as=new T,ei=new T,ti=new T,Mi=new T,js=new T,jr=new T,eo=new T,bi=new T;function El(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){bi.fromArray(r,s);const a=i.x*Math.abs(bi.x)+i.y*Math.abs(bi.y)+i.z*Math.abs(bi.z),l=e.dot(bi),c=t.dot(bi),u=n.dot(bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Zm=new zt,er=new T,Tl=new T;class Ft{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;er.subVectors(e,this.center);const t=er.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(er,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(er.copy(e.center).add(Tl)),this.expandByPoint(er.copy(e.center).sub(Tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const kn=new T,Al=new T,to=new T,ni=new T,Cl=new T,no=new T,Rl=new T;class Xs{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Al.copy(e).add(t).multiplyScalar(.5),to.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(Al);const s=e.distanceTo(t)*.5,o=-this.direction.dot(to),a=ni.dot(this.direction),l=-ni.dot(to),c=ni.lengthSq(),u=Math.abs(1-o*o);let h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=s*u,h>=0)if(d>=-p)if(d<=p){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Al).addScaledVector(to,d),f}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,i,s){Cl.subVectors(t,e),no.subVectors(n,e),Rl.crossVectors(Cl,no);let o=this.direction.dot(Rl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,e);const l=a*this.direction.dot(no.crossVectors(ni,no));if(l<0)return null;const c=a*this.direction.dot(Cl.cross(ni));if(c<0||l+c>o)return null;const u=-a*ni.dot(Rl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,n,i,s,o,a,l,c,u,h,d,f,p,x,g){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,f,p,x,g)}set(e,t,n,i,s,o,a,l,c,u,h,d,f,p,x,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ls.setFromMatrixColumn(e,0).length(),s=1/ls.setFromMatrixColumn(e,1).length(),o=1/ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,p=c*u,x=c*h;t[0]=d+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,p=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Km,e,Jm)}lookAt(e,t,n){const i=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ii.crossVectors(n,rn),ii.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ii.crossVectors(n,rn)),ii.normalize(),io.crossVectors(rn,ii),i[0]=ii.x,i[4]=io.x,i[8]=rn.x,i[1]=ii.y,i[5]=io.y,i[9]=rn.y,i[2]=ii.z,i[6]=io.z,i[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],y=n[3],v=n[7],_=n[11],E=n[15],A=i[0],R=i[4],P=i[8],M=i[12],b=i[1],I=i[5],U=i[9],z=i[13],q=i[2],V=i[6],X=i[10],Z=i[14],k=i[3],ue=i[7],fe=i[11],Se=i[15];return s[0]=o*A+a*b+l*q+c*k,s[4]=o*R+a*I+l*V+c*ue,s[8]=o*P+a*U+l*X+c*fe,s[12]=o*M+a*z+l*Z+c*Se,s[1]=u*A+h*b+d*q+f*k,s[5]=u*R+h*I+d*V+f*ue,s[9]=u*P+h*U+d*X+f*fe,s[13]=u*M+h*z+d*Z+f*Se,s[2]=p*A+x*b+g*q+m*k,s[6]=p*R+x*I+g*V+m*ue,s[10]=p*P+x*U+g*X+m*fe,s[14]=p*M+x*z+g*Z+m*Se,s[3]=y*A+v*b+_*q+E*k,s[7]=y*R+v*I+_*V+E*ue,s[11]=y*P+v*U+_*X+E*fe,s[15]=y*M+v*z+_*Z+E*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+x*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+g*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],y=h*g*c-x*d*c+x*l*f-a*g*f-h*l*m+a*d*m,v=p*d*c-u*g*c-p*l*f+o*g*f+u*l*m-o*d*m,_=u*x*c-p*h*c+p*a*f-o*x*f-u*a*m+o*h*m,E=p*h*l-u*x*l-p*a*d+o*x*d+u*a*g-o*h*g,A=t*y+n*v+i*_+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=y*R,e[1]=(x*d*s-h*g*s-x*i*f+n*g*f+h*i*m-n*d*m)*R,e[2]=(a*g*s-x*l*s+x*i*c-n*g*c-a*i*m+n*l*m)*R,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*R,e[4]=v*R,e[5]=(u*g*s-p*d*s+p*i*f-t*g*f-u*i*m+t*d*m)*R,e[6]=(p*l*s-o*g*s-p*i*c+t*g*c+o*i*m-t*l*m)*R,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*f+t*l*f)*R,e[8]=_*R,e[9]=(p*h*s-u*x*s-p*n*f+t*x*f+u*n*m-t*h*m)*R,e[10]=(o*x*s-p*a*s+p*n*c-t*x*c-o*n*m+t*a*m)*R,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*R,e[12]=E*R,e[13]=(u*x*i-p*h*i+p*n*d-t*x*d-u*n*g+t*h*g)*R,e[14]=(p*a*i-o*x*i-p*n*l+t*x*l+o*n*g-t*a*g)*R,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,p=s*h,x=o*u,g=o*h,m=a*h,y=l*c,v=l*u,_=l*h,E=n.x,A=n.y,R=n.z;return i[0]=(1-(x+m))*E,i[1]=(f+_)*E,i[2]=(p-v)*E,i[3]=0,i[4]=(f-_)*A,i[5]=(1-(d+m))*A,i[6]=(g+y)*A,i[7]=0,i[8]=(p+v)*R,i[9]=(g-y)*R,i[10]=(1-(d+x))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ls.set(i[0],i[1],i[2]).length();const o=ls.set(i[4],i[5],i[6]).length(),a=ls.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Sn.copy(this);const c=1/s,u=1/o,h=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,t.setFromRotationMatrix(Sn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=cn,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let p,x;if(l)p=s/(o-s),x=o*s/(o-s);else if(a===cn)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Os)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=cn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let p,x;if(l)p=1/(o-s),x=o/(o-s);else if(a===cn)p=-2/(o-s),x=-(o+s)/(o-s);else if(a===Os)p=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ls=new T,Sn=new Fe,Km=new T(0,0,0),Jm=new T(1,1,1),ii=new T,io=new T,rn=new T,kh=new Fe,Hh=new en;class dn{constructor(e=0,t=0,n=0,i=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class Ka{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qm=0;const Vh=new T,cs=new en,Hn=new Fe,so=new T,tr=new T,jm=new T,eg=new en,Gh=new T(1,0,0),Wh=new T(0,1,0),Xh=new T(0,0,1),qh={type:"added"},tg={type:"removed"},hs={type:"childadded",child:null},Pl={type:"childremoved",child:null};class st extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DEFAULT_UP.clone();const e=new T,t=new dn,n=new en,i=new T(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Ye}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=st.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(Gh,e)}rotateY(e){return this.rotateOnAxis(Wh,e)}rotateZ(e){return this.rotateOnAxis(Xh,e)}translateOnAxis(e,t){return Vh.copy(e).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gh,e)}translateY(e){return this.translateOnAxis(Wh,e)}translateZ(e){return this.translateOnAxis(Xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?so.copy(e):so.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(tr,so,this.up):Hn.lookAt(so,tr,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),cs.setFromRotationMatrix(Hn),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qh),hs.child=e,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tg),Pl.child=e,this.dispatchEvent(Pl),Pl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qh),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,jm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,eg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}st.DEFAULT_UP=new T(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new T,Vn=new T,Il=new T,Gn=new T,us=new T,ds=new T,Yh=new T,Dl=new T,Ll=new T,Fl=new T,Ul=new nt,Nl=new nt,Ol=new nt;class Jt{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Mn.subVectors(e,t),i.cross(Mn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Mn.subVectors(i,t),Vn.subVectors(n,t),Il.subVectors(e,t);const o=Mn.dot(Mn),a=Mn.dot(Vn),l=Mn.dot(Il),c=Vn.dot(Vn),u=Vn.dot(Il),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Ul.setScalar(0),Nl.setScalar(0),Ol.setScalar(0),Ul.fromBufferAttribute(e,t),Nl.fromBufferAttribute(e,n),Ol.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ul,s.x),o.addScaledVector(Nl,s.y),o.addScaledVector(Ol,s.z),o}static isFrontFacing(e,t,n,i){return Mn.subVectors(n,t),Vn.subVectors(e,t),Mn.cross(Vn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Mn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Jt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;us.subVectors(i,n),ds.subVectors(s,n),Dl.subVectors(e,n);const l=us.dot(Dl),c=ds.dot(Dl);if(l<=0&&c<=0)return t.copy(n);Ll.subVectors(e,i);const u=us.dot(Ll),h=ds.dot(Ll);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(us,o);Fl.subVectors(e,s);const f=us.dot(Fl),p=ds.dot(Fl);if(p>=0&&f<=p)return t.copy(s);const x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(ds,a);const g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return Yh.subVectors(s,i),a=(h-u)/(h-u+(f-p)),t.copy(i).addScaledVector(Yh,a);const m=1/(g+x+d);return o=x*m,a=d*m,t.copy(n).addScaledVector(us,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},ro={h:0,s:0,l:0};function Bl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=Wc(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Bl(o,s,e+1/3),this.g=Bl(o,s,e),this.b=Bl(o,s,e-1/3)}return it.colorSpaceToWorking(this,i),this}setStyle(e,t=Zt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const n=xf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return it.workingToColorSpace(Nt.copy(this),e),Math.round(ze(Nt.r*255,0,255))*65536+Math.round(ze(Nt.g*255,0,255))*256+Math.round(ze(Nt.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Nt.copy(this),t);const n=Nt.r,i=Nt.g,s=Nt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Zt){it.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,i=Nt.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(ro);const n=yr(si.h,ro.h,t),i=yr(si.s,ro.s,t),s=yr(si.l,ro.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new oe;oe.NAMES=xf;let ng=0;class kt extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=hn(),this.name="",this.type="Material",this.blending=Wi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=Qo,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jo&&(n.blendSrc=this.blendSrc),this.blendDst!==Qo&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xn extends kt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yn=ig();function ig(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function $t(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=ze(r,-65504,65504),Yn.floatView[0]=r;const e=Yn.uint32View[0],t=e>>23&511;return Yn.baseTable[t]+((e&8388607)>>Yn.shiftTable[t])}function ur(r){const e=r>>10;return Yn.uint32View[0]=Yn.mantissaTable[Yn.offsetTable[e]+(r&1023)]+Yn.exponentTable[e],Yn.floatView[0]}class sg{static toHalfFloat(e){return $t(e)}static fromHalfFloat(e){return ur(e)}}const Tt=new T,oo=new J;let rg=0;class dt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pr,this.updateRanges=[],this.gpuType=jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oo.fromBufferAttribute(this,t),oo.applyMatrix3(e),this.setXY(t,oo.x,oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pr&&(e.usage=this.usage),e}}class og extends dt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class ag extends dt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class lg extends dt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class cg extends dt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class qc extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hg extends dt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Yc extends dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ug extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=ur(this.array[e*this.itemSize]);return this.normalized&&(t=Wt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=$t(t),this}getY(e){let t=ur(this.array[e*this.itemSize+1]);return this.normalized&&(t=Wt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=$t(t),this}getZ(e){let t=ur(this.array[e*this.itemSize+2]);return this.normalized&&(t=Wt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=$t(t),this}getW(e){let t=ur(this.array[e*this.itemSize+3]);return this.normalized&&(t=Wt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=$t(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=$t(t),this.array[e+1]=$t(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[e+0]=$t(t),this.array[e+1]=$t(n),this.array[e+2]=$t(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.array[e+0]=$t(t),this.array[e+1]=$t(n),this.array[e+2]=$t(i),this.array[e+3]=$t(s),this}}class be extends dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let dg=0;const mn=new Fe,zl=new st,fs=new T,on=new zt,nr=new zt,Rt=new T;class $e extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pf(e)?Yc:qc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return zl.lookAt(e),zl.updateMatrix(),this.applyMatrix4(zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new be(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ft);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(on.min,nr.min),on.expandByPoint(Rt),Rt.addVectors(on.max,nr.max),on.expandByPoint(Rt)):(on.expandByPoint(nr.min),on.expandByPoint(nr.max))}on.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Rt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rt.fromBufferAttribute(a,c),l&&(fs.fromBufferAttribute(e,c),Rt.add(fs)),i=Math.max(i,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new T,l[P]=new T;const c=new T,u=new T,h=new T,d=new J,f=new J,p=new J,x=new T,g=new T;function m(P,M,b){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,b),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,M),p.fromBufferAttribute(s,b),u.sub(c),h.sub(c),f.sub(d),p.sub(d);const I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(I),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(I),a[P].add(x),a[M].add(x),a[b].add(x),l[P].add(g),l[M].add(g),l[b].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,M=y.length;P<M;++P){const b=y[P],I=b.start,U=b.count;for(let z=I,q=I+U;z<q;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const v=new T,_=new T,E=new T,A=new T;function R(P){E.fromBufferAttribute(i,P),A.copy(E);const M=a[P];v.copy(M),v.sub(E.multiplyScalar(E.dot(M))).normalize(),_.crossVectors(A,M);const I=_.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,I)}for(let P=0,M=y.length;P<M;++P){const b=y[P],I=b.start,U=b.count;for(let z=I,q=I+U;z<q;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new T,s=new T,o=new T,a=new T,l=new T,c=new T,u=new T,h=new T;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let m=0;m<u;m++)d[p++]=c[f++]}return new dt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $e,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $h=new Fe,wi=new Xs,ao=new Ft,Zh=new T,lo=new T,co=new T,ho=new T,kl=new T,uo=new T,Kh=new T,fo=new T;class pt extends st{constructor(e=new $e,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){uo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(kl.fromBufferAttribute(h,e),o?uo.addScaledVector(kl,u):uo.addScaledVector(kl.sub(t),u))}t.add(uo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(s),wi.copy(e.ray).recast(e.near),!(ao.containsPoint(wi.origin)===!1&&(wi.intersectSphere(ao,Zh)===null||wi.origin.distanceToSquared(Zh)>(e.far-e.near)**2))&&($h.copy(s).invert(),wi.copy(e.ray).applyMatrix4($h),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){const g=d[p],m=o[g.materialIndex],y=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,E=v;_<E;_+=3){const A=a.getX(_),R=a.getX(_+1),P=a.getX(_+2);i=po(this,m,e,n,c,u,h,A,R,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const y=a.getX(g),v=a.getX(g+1),_=a.getX(g+2);i=po(this,o,e,n,c,u,h,y,v,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){const g=d[p],m=o[g.materialIndex],y=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,E=v;_<E;_+=3){const A=_,R=_+1,P=_+2;i=po(this,m,e,n,c,u,h,A,R,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const y=g,v=g+1,_=g+2;i=po(this,o,e,n,c,u,h,y,v,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function fg(r,e,t,n,i,s,o,a){let l;if(e.side===It?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Kn,a),l===null)return null;fo.copy(a),fo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(fo);return c<t.near||c>t.far?null:{distance:c,point:fo.clone(),object:r}}function po(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,lo),r.getVertexPosition(l,co),r.getVertexPosition(c,ho);const u=fg(r,e,t,n,lo,co,ho,Kh);if(u){const h=new T;Jt.getBarycoord(Kh,lo,co,ho,h),i&&(u.uv=Jt.getInterpolatedAttribute(i,a,l,c,h,new J)),s&&(u.uv1=Jt.getInterpolatedAttribute(s,a,l,c,h,new J)),o&&(u.normal=Jt.getInterpolatedAttribute(o,a,l,c,h,new T),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new T,materialIndex:0};Jt.getNormal(lo,co,ho,d.normal),u.face=d,u.barycoord=h}return u}class xi extends $e{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(h,2));function p(x,g,m,y,v,_,E,A,R,P,M){const b=_/R,I=E/P,U=_/2,z=E/2,q=A/2,V=R+1,X=P+1;let Z=0,k=0;const ue=new T;for(let fe=0;fe<X;fe++){const Se=fe*I-z;for(let Ge=0;Ge<V;Ge++){const We=Ge*b-U;ue[x]=We*y,ue[g]=Se*v,ue[m]=q,c.push(ue.x,ue.y,ue.z),ue[x]=0,ue[g]=0,ue[m]=A>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(Ge/R),h.push(1-fe/P),Z+=1}}for(let fe=0;fe<P;fe++)for(let Se=0;Se<R;Se++){const Ge=d+Se+V*fe,We=d+Se+V*(fe+1),Qe=d+(Se+1)+V*(fe+1),je=d+(Se+1)+V*fe;l.push(Ge,We,je),l.push(We,Qe,je),k+=6}a.addGroup(f,k,M),f+=k,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Gt(r){const e={};for(let t=0;t<r.length;t++){const n=zs(r[t]);for(const i in n)e[i]=n[i]}return e}function pg(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function vf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Gr={clone:zs,merge:Gt};var mg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Et extends kt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mg,this.fragmentShader=gg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=pg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ja extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new T,Jh=new J,Qh=new J;class Pt extends Ja{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,Jh,Qh),t.subVectors(Qh,Jh)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ps=-90,ms=1;class _f extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Pt(ps,ms,e,t);i.layers=this.layers,this.add(i);const s=new Pt(ps,ms,e,t);s.layers=this.layers,this.add(s);const o=new Pt(ps,ms,e,t);o.layers=this.layers,this.add(o);const a=new Pt(ps,ms,e,t);a.layers=this.layers,this.add(a);const l=new Pt(ps,ms,e,t);l.layers=this.layers,this.add(l);const c=new Pt(ps,ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Wr extends bt{constructor(e=[],t=Jn,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yf extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xi(5,5,5),s=new Et({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:Un});s.uniforms.tEquirect.value=t;const o=new pt(i,s),a=t.minFilter;return t.minFilter===wn&&(t.minFilter=xt),new _f(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class Vi extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xg={type:"move"};class Yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Qa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new oe(e),this.density=t}clone(){return new Qa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class di{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new oe(e),this.near=t,this.far=n}clone(){return new di(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $c extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ja{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pr,this.updateRanges=[],this.version=0,this.uuid=hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new T;class Qi{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Wt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Zc extends kt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let gs;const ir=new T,xs=new T,vs=new T,_s=new J,sr=new J,Sf=new Fe,mo=new T,rr=new T,go=new T,jh=new J,Hl=new J,eu=new J;class Mf extends st{constructor(e=new Zc){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new $e;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ja(t,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new Qi(n,3,0,!1)),gs.setAttribute("uv",new Qi(n,2,3,!1))}this.geometry=gs,this.material=e,this.center=new J(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),Sf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-vs.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;xo(mo.set(-.5,-.5,0),vs,o,xs,i,s),xo(rr.set(.5,-.5,0),vs,o,xs,i,s),xo(go.set(.5,.5,0),vs,o,xs,i,s),jh.set(0,0),Hl.set(1,0),eu.set(1,1);let a=e.ray.intersectTriangle(mo,rr,go,!1,ir);if(a===null&&(xo(rr.set(-.5,.5,0),vs,o,xs,i,s),Hl.set(0,1),a=e.ray.intersectTriangle(mo,go,rr,!1,ir),a===null))return;const l=e.ray.origin.distanceTo(ir);l<e.near||l>e.far||t.push({distance:l,point:ir.clone(),uv:Jt.getInterpolation(ir,mo,rr,go,jh,Hl,eu,new J),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function xo(r,e,t,n,i,s){_s.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(sr.x=s*_s.x-i*_s.y,sr.y=i*_s.x+s*_s.y):sr.copy(_s),r.copy(e),r.x+=sr.x,r.y+=sr.y,r.applyMatrix4(Sf)}const vo=new T,tu=new T;class bf extends st{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){vo.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(vo);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){vo.setFromMatrixPosition(e.matrixWorld),tu.setFromMatrixPosition(this.matrixWorld);const n=vo.distanceTo(tu)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const nu=new T,iu=new nt,su=new nt,vg=new T,ru=new Fe,_o=new T,Vl=new Ft,ou=new Fe,Gl=new Xs;class wf extends pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=vc,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new zt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_o),this.boundingBox.expandByPoint(_o)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ft),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_o),this.boundingSphere.expandByPoint(_o)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vl.copy(this.boundingSphere),Vl.applyMatrix4(i),e.ray.intersectsSphere(Vl)!==!1&&(ou.copy(i).invert(),Gl.copy(e.ray).applyMatrix4(ou),!(this.boundingBox!==null&&Gl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===vc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Qd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;iu.fromBufferAttribute(i.attributes.skinIndex,e),su.fromBufferAttribute(i.attributes.skinWeight,e),nu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=su.getComponent(s);if(o!==0){const a=iu.getComponent(s);ru.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(vg.copy(nu).applyMatrix4(ru),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Kc extends st{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Tn extends bt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Lt,u=Lt,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const au=new Fe,_g=new Fe;class el{constructor(e=[],t=[]){this.uuid=hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:_g;au.multiplyMatrices(a,t[s]),au.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new el(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Tn(t,e,e,Bt,jt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Kc),this.bones.push(o),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class ks extends dt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ys=new Fe,lu=new Fe,yo=[],cu=new zt,yg=new Fe,or=new pt,ar=new Ft;class Ef extends pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ks(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,yg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),cu.copy(e.boundingBox).applyMatrix4(ys),this.boundingBox.union(cu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ft),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),ar.copy(e.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),e.ray.intersectsSphere(ar)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ys),lu.multiplyMatrices(n,ys),or.matrixWorld=lu,or.raycast(e,yo);for(let o=0,a=yo.length;o<a;o++){const l=yo[o];l.instanceId=s,l.object=this,t.push(l)}yo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ks(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tn(new Float32Array(i*this.count),i,this.count,Hr,jt));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Wl=new T,Sg=new T,Mg=new Ye;class li{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Wl.subVectors(n,t).cross(Sg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Wl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Mg.getNormalMatrix(e),i=this.coplanarPoint(Wl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Ft,bg=new J(.5,.5),So=new T;class qs{constructor(e=new li,t=new li,n=new li,i=new li,s=new li,o=new li){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],p=s[8],x=s[9],g=s[10],m=s[11],y=s[12],v=s[13],_=s[14],E=s[15];if(i[0].setComponents(c-o,f-u,m-p,E-y).normalize(),i[1].setComponents(c+o,f+u,m+p,E+y).normalize(),i[2].setComponents(c+a,f+h,m+x,E+v).normalize(),i[3].setComponents(c-a,f-h,m-x,E-v).normalize(),n)i[4].setComponents(l,d,g,_).normalize(),i[5].setComponents(c-l,f-d,m-g,E-_).normalize();else if(i[4].setComponents(c-l,f-d,m-g,E-_).normalize(),t===cn)i[5].setComponents(c+l,f+d,m+g,E+_).normalize();else if(t===Os)i[5].setComponents(l,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){Ei.center.set(0,0,0);const t=bg.distanceTo(e.center);return Ei.radius=.7071067811865476+t,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(So.x=i.normal.x>0?e.max.x:e.min.x,So.y=i.normal.y>0?e.max.y:e.min.y,So.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(So)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Rn=new Fe,Pn=new qs;class tl{constructor(){this.coordinateSystem=cn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Rn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Pn.setFromProjectionMatrix(Rn,i.coordinateSystem,i.reversedDepth),Pn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Rn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Pn.setFromProjectionMatrix(Rn,i.coordinateSystem,i.reversedDepth),Pn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Rn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Pn.setFromProjectionMatrix(Rn,i.coordinateSystem,i.reversedDepth),Pn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Rn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Pn.setFromProjectionMatrix(Rn,i.coordinateSystem,i.reversedDepth),Pn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Rn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Pn.setFromProjectionMatrix(Rn,i.coordinateSystem,i.reversedDepth),Pn.containsPoint(e))return!0}return!1}clone(){return new tl}}function Xl(r,e){return r-e}function wg(r,e){return r.z-e.z}function Eg(r,e){return e.z-r.z}class Tg{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const s=this.pool,o=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const a=s[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}const Yt=new Fe,Ag=new oe(1,1,1),hu=new qs,Cg=new tl,Mo=new zt,Ti=new Ft,lr=new T,uu=new T,Rg=new T,ql=new Tg,Ot=new pt,bo=[];function Pg(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let o=0;o<n;o++)e.setComponent(s+t,o,r.getComponent(s,o))}else e.array.set(r.array,t*n);e.needsUpdate=!0}function Ai(r,e){if(r.constructor!==e.constructor){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)e[n]=r[n]}else{const t=Math.min(r.length,e.length);e.set(new r.constructor(r.buffer,0,t))}}class Tf extends pt{constructor(e,t,n=t*2,i){super(new $e,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Tn(t,e,e,Bt,jt);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Tn(t,e,e,Vr,Qn);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Tn(t,e,e,Bt,jt);n.colorSpace=it.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const o=e.getAttribute(s),{array:a,itemSize:l,normalized:c}=o,u=new a.constructor(n*l),h=new dt(u,l,c);t.setAttribute(s,h)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new dt(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zt);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Yt),this.getBoundingBoxAt(s,Mo).applyMatrix4(Yt),e.union(Mo)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ft);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Yt),this.getBoundingSphereAt(s,Ti).applyMatrix4(Yt),e.union(Ti)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Xl),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const s=this._matricesTexture;Yt.identity().toArray(s.image.data,i*16),s.needsUpdate=!0;const o=this._colorsTexture;return o&&(Ag.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const o=e.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Xl),l=this._availableGeometryIds.shift(),s[l]=i):(l=this._geometryCount,this._geometryCount++,s.push(i)),this.setGeometryAt(l,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(i&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(const u in n.attributes){const h=t.getAttribute(u),d=n.getAttribute(u);Pg(h,d,l);const f=h.itemSize;for(let p=h.count,x=c;p<x;p++){const g=l+p;for(let m=0;m<f;m++)d.setComponent(g,m,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(i){const u=a.indexStart,h=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let d=0;d<o.count;d++)s.setX(u+d,l+o.getX(d));for(let d=o.count,f=h;d<f;d++)s.setX(u+d,l);s.needsUpdate=!0,s.addUpdateRange(u,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,s=n.length;i<s;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),s=this.geometry;for(let o=0,a=n.length;o<a;o++){const l=i[o],c=n[l];if(c.active!==!1){if(s.index!==null){if(c.indexStart!==t){const{indexStart:u,vertexStart:h,reservedIndexCount:d}=c,f=s.index,p=f.array,x=e-h;for(let g=u;g<u+d;g++)p[g]=p[g]+x;f.array.copyWithin(t,u,u+d),f.addUpdateRange(t,d),c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:u,reservedVertexCount:h}=c,d=s.attributes;for(const f in d){const p=d[f],{array:x,itemSize:g}=p;x.copyWithin(e*g,u*g,(u+h)*g),p.addUpdateRange(e*g,h*g)}c.vertexStart=e}e+=c.reservedVertexCount,c.start=s.index?c.indexStart:c.vertexStart,this._nextIndexStart=s.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const s=new zt,o=n.index,a=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let u=l;o&&(u=o.getX(u)),s.expandByPoint(lr.fromBufferAttribute(a,u))}i.boundingBox=s}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const s=new Ft;this.getBoundingBoxAt(e,Mo),Mo.getCenter(s.center);const o=n.index,a=n.attributes.position;let l=0;for(let c=i.start,u=i.start+i.count;c<u;c++){let h=c;o&&(h=o.getX(h)),lr.fromBufferAttribute(a,h),l=Math.max(l,s.center.distanceToSquared(lr))}s.radius=Math.sqrt(l),i.boundingSphere=s}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Xl);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),s=new Int32Array(e);Ai(this._multiDrawCounts,i),Ai(this._multiDrawStarts,s),this._multiDrawCounts=i,this._multiDrawStarts=s,this._maxInstanceCount=e;const o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Ai(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Ai(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Ai(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new $e,this._initializeGeometry(s));const o=this.geometry;s.index&&Ai(s.index.array,o.index.array);for(const a in s.attributes)Ai(s.attributes[a].array,o.attributes[a].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,s=this.matrixWorld,o=this.geometry;Ot.material=this.material,Ot.geometry.index=o.index,Ot.geometry.attributes=o.attributes,Ot.geometry.boundingBox===null&&(Ot.geometry.boundingBox=new zt),Ot.geometry.boundingSphere===null&&(Ot.geometry.boundingSphere=new Ft);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;const c=n[a].geometryIndex,u=i[c];Ot.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,Ot.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,Ot.geometry.boundingBox),this.getBoundingSphereAt(c,Ot.geometry.boundingSphere),Ot.raycast(e,bo);for(let h=0,d=bo.length;h<d;h++){const f=bo[h];f.object=this,f.batchId=a,t.push(f)}bo.length=0}Ot.material=null,Ot.geometry.index=null,Ot.geometry.attributes={},Ot.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,u=this._multiDrawCounts,h=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,p=f.image.data,x=n.isArrayCamera?Cg:hu;d&&!n.isArrayCamera&&(Yt.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),hu.setFromProjectionMatrix(Yt,n.coordinateSystem,n.reversedDepth));let g=0;if(this.sortObjects){Yt.copy(this.matrixWorld).invert(),lr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Yt),uu.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Yt);for(let v=0,_=l.length;v<_;v++)if(l[v].visible&&l[v].active){const E=l[v].geometryIndex;this.getMatrixAt(v,Yt),this.getBoundingSphereAt(E,Ti).applyMatrix4(Yt);let A=!1;if(d&&(A=!x.intersectsSphere(Ti,n)),!A){const R=h[E],P=Rg.subVectors(Ti.center,lr).dot(uu);ql.push(R.start,R.count,P,v)}}const m=ql.list,y=this.customSort;y===null?m.sort(s.transparent?Eg:wg):y.call(this,m,n);for(let v=0,_=m.length;v<_;v++){const E=m[v];c[g]=E.start*a,u[g]=E.count,p[g]=E.index,g++}ql.reset()}else for(let m=0,y=l.length;m<y;m++)if(l[m].visible&&l[m].active){const v=l[m].geometryIndex;let _=!1;if(d&&(this.getMatrixAt(m,Yt),this.getBoundingSphereAt(v,Ti).applyMatrix4(Yt),_=!x.intersectsSphere(Ti,n)),!_){const E=h[v];c[g]=E.start*a,u[g]=E.count,p[g]=m,g++}}f.needsUpdate=!0,this._multiDrawCount=g,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,o){this.onBeforeRender(e,null,i,s,o)}}class Xt extends kt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ua=new T,Na=new T,du=new Fe,cr=new Xs,wo=new Ft,Yl=new T,fu=new T;class fi extends st{constructor(e=new $e,t=new Xt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ua.fromBufferAttribute(t,i-1),Na.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ua.distanceTo(Na);e.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(i),wo.radius+=s,e.ray.intersectsSphere(wo)===!1)return;du.copy(i).invert(),cr.copy(e.ray).applyMatrix4(du);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){const m=u.getX(x),y=u.getX(x+1),v=Eo(this,e,cr,l,m,y,x);v&&t.push(v)}if(this.isLineLoop){const x=u.getX(p-1),g=u.getX(f),m=Eo(this,e,cr,l,x,g,p-1);m&&t.push(m)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){const m=Eo(this,e,cr,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){const x=Eo(this,e,cr,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Eo(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Ua.fromBufferAttribute(a,i),Na.fromBufferAttribute(a,s),t.distanceSqToSegment(Ua,Na,Yl,fu)>n)return;Yl.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Yl);if(!(c<e.near||c>e.far))return{distance:c,point:fu.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const pu=new T,mu=new T;class On extends fi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)pu.fromBufferAttribute(t,i),mu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+pu.distanceTo(mu);e.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Af extends fi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Jc extends kt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gu=new Fe,Sc=new Xs,To=new Ft,Ao=new T;class Cf extends st{constructor(e=new $e,t=new Jc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(i),To.radius+=s,e.ray.intersectsSphere(To)===!1)return;gu.copy(i).invert(),Sc.copy(e.ray).applyMatrix4(gu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,x=f;p<x;p++){const g=c.getX(p);Ao.fromBufferAttribute(h,g),xu(Ao,g,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,x=f;p<x;p++)Ao.fromBufferAttribute(h,p),xu(Ao,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function xu(r,e,t,n,i,s,o){const a=Sc.distanceSqToPoint(r);if(a<t){const l=new T;Sc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Rf extends bt{constructor(e,t,n,i,s=xt,o=xt,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function h(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}}class Ig extends Rf{constructor(e,t,n,i,s,o,a,l){super({},e,t,n,i,s,o,a,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class Dg extends bt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Lt,this.minFilter=Lt,this.generateMipmaps=!1,this.needsUpdate=!0}}class nl extends bt{constructor(e,t,n,i,s,o,a,l,c,u,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Lg extends nl{constructor(e,t,n,i,s,o){super(e,t,n,s,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Qt,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fg extends nl{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Jn),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Pf extends bt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class il extends bt{constructor(e,t,n=Qn,i,s,o,a=Lt,l=Lt,c,u=Us,h=1){if(u!==Us&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Qc extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sl extends $e{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,p=n*2+s,x=i+1,g=new T,m=new T;for(let y=0;y<=p;y++){let v=0,_=0,E=0,A=0;if(y<=n){const M=y/n,b=M*Math.PI/2;_=-u-e*Math.cos(b),E=e*Math.sin(b),A=-e*Math.cos(b),v=M*h}else if(y<=n+s){const M=(y-n)/s;_=-u+M*t,E=e,A=0,v=h+M*d}else{const M=(y-n-s)/n,b=M*Math.PI/2;_=u+e*Math.sin(b),E=e*Math.cos(b),A=e*Math.sin(b),v=h+d+M*h}const R=Math.max(0,Math.min(1,v/f));let P=0;y===0?P=.5/i:y===p&&(P=-.5/i);for(let M=0;M<=i;M++){const b=M/i,I=b*Math.PI*2,U=Math.sin(I),z=Math.cos(I);m.x=-E*z,m.y=_,m.z=E*U,a.push(m.x,m.y,m.z),g.set(-E*z,A,E*U),g.normalize(),l.push(g.x,g.y,g.z),c.push(b+P,R)}if(y>0){const M=(y-1)*x;for(let b=0;b<i;b++){const I=M+b,U=M+b+1,z=y*x+b,q=y*x+b+1;o.push(I,U,z),o.push(U,q,z)}}}this.setIndex(o),this.setAttribute("position",new be(a,3)),this.setAttribute("normal",new be(l,3)),this.setAttribute("uv",new be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Hs extends $e{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new T,u=new J;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new be(o,3)),this.setAttribute("normal",new be(a,3)),this.setAttribute("uv",new be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ys extends $e{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],f=[];let p=0;const x=[],g=n/2;let m=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new be(h,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(f,2));function y(){const _=new T,E=new T;let A=0;const R=(t-e)/n;for(let P=0;P<=s;P++){const M=[],b=P/s,I=b*(t-e)+e;for(let U=0;U<=i;U++){const z=U/i,q=z*l+a,V=Math.sin(q),X=Math.cos(q);E.x=I*V,E.y=-b*n+g,E.z=I*X,h.push(E.x,E.y,E.z),_.set(V,R,X).normalize(),d.push(_.x,_.y,_.z),f.push(z,1-b),M.push(p++)}x.push(M)}for(let P=0;P<i;P++)for(let M=0;M<s;M++){const b=x[M][P],I=x[M+1][P],U=x[M+1][P+1],z=x[M][P+1];(e>0||M!==0)&&(u.push(b,I,z),A+=3),(t>0||M!==s-1)&&(u.push(I,U,z),A+=3)}c.addGroup(m,A,0),m+=A}function v(_){const E=p,A=new J,R=new T;let P=0;const M=_===!0?e:t,b=_===!0?1:-1;for(let U=1;U<=i;U++)h.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),p++;const I=p;for(let U=0;U<=i;U++){const q=U/i*l+a,V=Math.cos(q),X=Math.sin(q);R.x=M*X,R.y=g*b,R.z=M*V,h.push(R.x,R.y,R.z),d.push(0,b,0),A.x=V*.5+.5,A.y=X*.5*b+.5,f.push(A.x,A.y),p++}for(let U=0;U<i;U++){const z=E+U,q=I+U;_===!0?u.push(q,q+1,z):u.push(q+1,q,z),P+=3}c.addGroup(m,P,_===!0?1:2),m+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xr extends Ys{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Xr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vi extends $e{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new be(s,3)),this.setAttribute("normal",new be(s.slice(),3)),this.setAttribute("uv",new be(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const v=new T,_=new T,E=new T;for(let A=0;A<t.length;A+=3)f(t[A+0],v),f(t[A+1],_),f(t[A+2],E),l(v,_,E,y)}function l(y,v,_,E){const A=E+1,R=[];for(let P=0;P<=A;P++){R[P]=[];const M=y.clone().lerp(_,P/A),b=v.clone().lerp(_,P/A),I=A-P;for(let U=0;U<=I;U++)U===0&&P===A?R[P][U]=M:R[P][U]=M.clone().lerp(b,U/I)}for(let P=0;P<A;P++)for(let M=0;M<2*(A-P)-1;M++){const b=Math.floor(M/2);M%2===0?(d(R[P][b+1]),d(R[P+1][b]),d(R[P][b])):(d(R[P][b+1]),d(R[P+1][b+1]),d(R[P+1][b]))}}function c(y){const v=new T;for(let _=0;_<s.length;_+=3)v.x=s[_+0],v.y=s[_+1],v.z=s[_+2],v.normalize().multiplyScalar(y),s[_+0]=v.x,s[_+1]=v.y,s[_+2]=v.z}function u(){const y=new T;for(let v=0;v<s.length;v+=3){y.x=s[v+0],y.y=s[v+1],y.z=s[v+2];const _=g(y)/2/Math.PI+.5,E=m(y)/Math.PI+.5;o.push(_,1-E)}p(),h()}function h(){for(let y=0;y<o.length;y+=6){const v=o[y+0],_=o[y+2],E=o[y+4],A=Math.max(v,_,E),R=Math.min(v,_,E);A>.9&&R<.1&&(v<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),E<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,v){const _=y*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function p(){const y=new T,v=new T,_=new T,E=new T,A=new J,R=new J,P=new J;for(let M=0,b=0;M<s.length;M+=9,b+=6){y.set(s[M+0],s[M+1],s[M+2]),v.set(s[M+3],s[M+4],s[M+5]),_.set(s[M+6],s[M+7],s[M+8]),A.set(o[b+0],o[b+1]),R.set(o[b+2],o[b+3]),P.set(o[b+4],o[b+5]),E.copy(y).add(v).add(_).divideScalar(3);const I=g(E);x(A,b+0,y,I),x(R,b+2,v,I),x(P,b+4,_,I)}}function x(y,v,_,E){E<0&&y.x===1&&(o[v]=y.x-1),_.x===0&&_.z===0&&(o[v]=E/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.vertices,e.indices,e.radius,e.details)}}class rl extends vi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rl(e.radius,e.detail)}}const Co=new T,Ro=new T,$l=new T,Po=new Jt;class If extends $e{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Xi*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:x,b:g,c:m}=Po;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Po.getNormal($l),h[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,h[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const v=(y+1)%3,_=h[y],E=h[v],A=Po[u[y]],R=Po[u[v]],P=`${_}_${E}`,M=`${E}_${_}`;M in d&&d[M]?($l.dot(d[M].normal)<=s&&(f.push(A.x,A.y,A.z),f.push(R.x,R.y,R.z)),d[M]=null):P in d||(d[P]={index0:c[y],index1:c[v],normal:$l.clone()})}}for(const p in d)if(d[p]){const{index0:x,index1:g}=d[p];Co.fromBufferAttribute(a,x),Ro.fromBufferAttribute(a,g),f.push(Co.x,Co.y,Co.z),f.push(Ro.x,Ro.y,Ro.z)}this.setAttribute("position",new be(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new J:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new T,i=[],s=[],o=[],a=new T,l=new Fe;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new T)}s[0]=new T,o[0]=new T;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(ze(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(ze(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ol extends An{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new J){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Df extends ol{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function jc(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Io=new T,Zl=new jc,Kl=new jc,Jl=new jc;class Lf extends An{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new T){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Io.subVectors(i[0],i[1]).add(i[0]),c=Io);const h=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Io.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Io),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Zl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,x,g),Kl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,x,g),Jl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(Zl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Kl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Jl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Zl.calc(l),Kl.calc(l),Jl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function vu(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function Ug(r,e){const t=1-r;return t*t*e}function Ng(r,e){return 2*(1-r)*r*e}function Og(r,e){return r*r*e}function Sr(r,e,t,n){return Ug(r,e)+Ng(r,t)+Og(r,n)}function Bg(r,e){const t=1-r;return t*t*t*e}function zg(r,e){const t=1-r;return 3*t*t*r*e}function kg(r,e){return 3*(1-r)*r*r*e}function Hg(r,e){return r*r*r*e}function Mr(r,e,t,n,i){return Bg(r,e)+zg(r,t)+kg(r,n)+Hg(r,i)}class eh extends An{constructor(e=new J,t=new J,n=new J,i=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new J){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Mr(e,i.x,s.x,o.x,a.x),Mr(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ff extends An{constructor(e=new T,t=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new T){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Mr(e,i.x,s.x,o.x,a.x),Mr(e,i.y,s.y,o.y,a.y),Mr(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class th extends An{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uf extends An{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nh extends An{constructor(e=new J,t=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Sr(e,i.x,s.x,o.x),Sr(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ih extends An{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Sr(e,i.x,s.x,o.x),Sr(e,i.y,s.y,o.y),Sr(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sh extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new J){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(vu(a,l.x,c.x,u.x,h.x),vu(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new J().fromArray(i))}return this}}var Oa=Object.freeze({__proto__:null,ArcCurve:Df,CatmullRomCurve3:Lf,CubicBezierCurve:eh,CubicBezierCurve3:Ff,EllipseCurve:ol,LineCurve:th,LineCurve3:Uf,QuadraticBezierCurve:nh,QuadraticBezierCurve3:ih,SplineCurve:sh});class Nf extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oa[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Oa[i.type]().fromJSON(i))}return this}}class Ba extends Nf{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new th(this.currentPoint.clone(),new J(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new nh(this.currentPoint.clone(),new J(e,t),new J(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new eh(this.currentPoint.clone(),new J(e,t),new J(n,i),new J(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new sh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new ol(e,t,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class qi extends Ba{constructor(e){super(e),this.uuid=hn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ba().fromJSON(i))}return this}}function Vg(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Of(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Yg(r,e,s,t)),r.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let d=t;d<i;d+=t){const f=r[d],p=r[d+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Lr(s,o,t,a,l,c,0),o}function Of(r,e,t,n,i){let s;if(i===s0(r,e,t,n)>0)for(let o=e;o<t;o+=n)s=_u(o/n|0,r[o],r[o+1],s);else for(let o=t-n;o>=e;o-=n)s=_u(o/n|0,r[o],r[o+1],s);return s&&Vs(s,s.next)&&(Ur(s),s=s.next),s}function ji(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Vs(t,t.next)||yt(t.prev,t,t.next)===0)){if(Ur(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Lr(r,e,t,n,i,s,o){if(!r)return;!o&&s&&Qg(r,n,i,s);let a=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?Wg(r,n,i,s):Gg(r)){e.push(l.i,r.i,c.i),Ur(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Xg(ji(r),e),Lr(r,e,t,n,i,s,2)):o===2&&qg(r,e,t,n,i,s):Lr(ji(r),e,t,n,i,s,1);break}}}function Gg(r){const e=r.prev,t=r,n=r.next;if(yt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(i,s,o),h=Math.min(a,l,c),d=Math.max(i,s,o),f=Math.max(a,l,c);let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&dr(i,a,s,l,o,c,p.x,p.y)&&yt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Wg(r,e,t,n){const i=r.prev,s=r,o=r.next;if(yt(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,d=o.y,f=Math.min(a,l,c),p=Math.min(u,h,d),x=Math.max(a,l,c),g=Math.max(u,h,d),m=Mc(f,p,e,t,n),y=Mc(x,g,e,t,n);let v=r.prevZ,_=r.nextZ;for(;v&&v.z>=m&&_&&_.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&dr(a,u,l,h,c,d,v.x,v.y)&&yt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==i&&_!==o&&dr(a,u,l,h,c,d,_.x,_.y)&&yt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=m;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&dr(a,u,l,h,c,d,v.x,v.y)&&yt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==i&&_!==o&&dr(a,u,l,h,c,d,_.x,_.y)&&yt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Xg(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Vs(n,i)&&zf(n,t,t.next,i)&&Fr(n,i)&&Fr(i,n)&&(e.push(n.i,t.i,i.i),Ur(t),Ur(t.next),t=r=i),t=t.next}while(t!==r);return ji(t)}function qg(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&t0(o,a)){let l=kf(o,a);o=ji(o,o.next),l=ji(l,l.next),Lr(o,e,t,n,i,s,0),Lr(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Yg(r,e,t,n){const i=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=Of(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(e0(c))}i.sort($g);for(let s=0;s<i.length;s++)t=Zg(i[s],t);return t}function $g(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Zg(r,e){const t=Kg(r,e);if(!t)return e;const n=kf(t,r);return ji(n,n.next),ji(t,t.next)}function Kg(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,o;if(Vs(r,t))return t;do{if(Vs(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Bf(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const h=Math.abs(i-t.y)/(n-t.x);Fr(t,r)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Jg(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Jg(r,e){return yt(r.prev,r,e.prev)<0&&yt(e.next,r,r.next)<0}function Qg(r,e,t,n){let i=r;do i.z===0&&(i.z=Mc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,jg(i)}function jg(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,t*=2}while(e>1);return r}function Mc(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function e0(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Bf(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function dr(r,e,t,n,i,s,o,a){return!(r===o&&e===a)&&Bf(r,e,t,n,i,s,o,a)}function t0(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!n0(r,e)&&(Fr(r,e)&&Fr(e,r)&&i0(r,e)&&(yt(r.prev,r,e.prev)||yt(r,e.prev,e))||Vs(r,e)&&yt(r.prev,r,r.next)>0&&yt(e.prev,e,e.next)>0)}function yt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Vs(r,e){return r.x===e.x&&r.y===e.y}function zf(r,e,t,n){const i=Lo(yt(r,e,t)),s=Lo(yt(r,e,n)),o=Lo(yt(t,n,r)),a=Lo(yt(t,n,e));return!!(i!==s&&o!==a||i===0&&Do(r,t,e)||s===0&&Do(r,n,e)||o===0&&Do(t,r,n)||a===0&&Do(t,e,n))}function Do(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Lo(r){return r>0?1:r<0?-1:0}function n0(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&zf(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Fr(r,e){return yt(r.prev,r,r.next)<0?yt(r,e,r.next)>=0&&yt(r,r.prev,e)>=0:yt(r,e,r.prev)<0||yt(r,r.next,e)<0}function i0(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function kf(r,e){const t=bc(r.i,r.x,r.y),n=bc(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function _u(r,e,t,n){const i=bc(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ur(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function bc(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function s0(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class r0{static triangulate(e,t,n=2){return Vg(e,t,n)}}class En{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return En.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];yu(e),Su(n,e);let o=e.length;t.forEach(yu);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Su(n,t[l]);const a=r0.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function yu(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Su(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class al extends $e{constructor(e=new qi([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new be(i,3)),this.setAttribute("uv",new be(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:o0;let v,_=!1,E,A,R,P;m&&(v=m.getSpacedPoints(u),_=!0,d=!1,E=m.computeFrenetFrames(u,!1),A=new T,R=new T,P=new T),d||(g=0,f=0,p=0,x=0);const M=a.extractPoints(c);let b=M.shape;const I=M.holes;if(!En.isClockWise(b)){b=b.reverse();for(let se=0,ee=I.length;se<ee;se++){const j=I[se];En.isClockWise(j)&&(I[se]=j.reverse())}}function z(se){const j=10000000000000001e-36;let L=se[0];for(let $=1;$<=se.length;$++){const re=$%se.length,K=se[re],Ue=K.x-L.x,Ne=K.y-L.y,C=Ue*Ue+Ne*Ne,S=Math.max(Math.abs(K.x),Math.abs(K.y),Math.abs(L.x),Math.abs(L.y)),O=j*S*S;if(C<=O){se.splice(re,1),$--;continue}L=K}}z(b),I.forEach(z);const q=I.length,V=b;for(let se=0;se<q;se++){const ee=I[se];b=b.concat(ee)}function X(se,ee,j){return ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(ee,j)}const Z=b.length;function k(se,ee,j){let L,$,re;const K=se.x-ee.x,Ue=se.y-ee.y,Ne=j.x-se.x,C=j.y-se.y,S=K*K+Ue*Ue,O=K*C-Ue*Ne;if(Math.abs(O)>Number.EPSILON){const H=Math.sqrt(S),ne=Math.sqrt(Ne*Ne+C*C),Y=ee.x-Ue/H,Ce=ee.y+K/H,de=j.x-C/ne,ve=j.y+Ne/ne,Te=((de-Y)*C-(ve-Ce)*Ne)/(K*C-Ue*Ne);L=Y+K*Te-se.x,$=Ce+Ue*Te-se.y;const ae=L*L+$*$;if(ae<=2)return new J(L,$);re=Math.sqrt(ae/2)}else{let H=!1;K>Number.EPSILON?Ne>Number.EPSILON&&(H=!0):K<-Number.EPSILON?Ne<-Number.EPSILON&&(H=!0):Math.sign(Ue)===Math.sign(C)&&(H=!0),H?(L=-Ue,$=K,re=Math.sqrt(S)):(L=K,$=Ue,re=Math.sqrt(S/2))}return new J(L/re,$/re)}const ue=[];for(let se=0,ee=V.length,j=ee-1,L=se+1;se<ee;se++,j++,L++)j===ee&&(j=0),L===ee&&(L=0),ue[se]=k(V[se],V[j],V[L]);const fe=[];let Se,Ge=ue.concat();for(let se=0,ee=q;se<ee;se++){const j=I[se];Se=[];for(let L=0,$=j.length,re=$-1,K=L+1;L<$;L++,re++,K++)re===$&&(re=0),K===$&&(K=0),Se[L]=k(j[L],j[re],j[K]);fe.push(Se),Ge=Ge.concat(Se)}let We;if(g===0)We=En.triangulateShape(V,I);else{const se=[],ee=[];for(let j=0;j<g;j++){const L=j/g,$=f*Math.cos(L*Math.PI/2),re=p*Math.sin(L*Math.PI/2)+x;for(let K=0,Ue=V.length;K<Ue;K++){const Ne=X(V[K],ue[K],re);Ae(Ne.x,Ne.y,-$),L===0&&se.push(Ne)}for(let K=0,Ue=q;K<Ue;K++){const Ne=I[K];Se=fe[K];const C=[];for(let S=0,O=Ne.length;S<O;S++){const H=X(Ne[S],Se[S],re);Ae(H.x,H.y,-$),L===0&&C.push(H)}L===0&&ee.push(C)}}We=En.triangulateShape(se,ee)}const Qe=We.length,je=p+x;for(let se=0;se<Z;se++){const ee=d?X(b[se],Ge[se],je):b[se];_?(R.copy(E.normals[0]).multiplyScalar(ee.x),A.copy(E.binormals[0]).multiplyScalar(ee.y),P.copy(v[0]).add(R).add(A),Ae(P.x,P.y,P.z)):Ae(ee.x,ee.y,0)}for(let se=1;se<=u;se++)for(let ee=0;ee<Z;ee++){const j=d?X(b[ee],Ge[ee],je):b[ee];_?(R.copy(E.normals[se]).multiplyScalar(j.x),A.copy(E.binormals[se]).multiplyScalar(j.y),P.copy(v[se]).add(R).add(A),Ae(P.x,P.y,P.z)):Ae(j.x,j.y,h/u*se)}for(let se=g-1;se>=0;se--){const ee=se/g,j=f*Math.cos(ee*Math.PI/2),L=p*Math.sin(ee*Math.PI/2)+x;for(let $=0,re=V.length;$<re;$++){const K=X(V[$],ue[$],L);Ae(K.x,K.y,h+j)}for(let $=0,re=I.length;$<re;$++){const K=I[$];Se=fe[$];for(let Ue=0,Ne=K.length;Ue<Ne;Ue++){const C=X(K[Ue],Se[Ue],L);_?Ae(C.x,C.y+v[u-1].y,v[u-1].x+j):Ae(C.x,C.y,h+j)}}}Q(),te();function Q(){const se=i.length/3;if(d){let ee=0,j=Z*ee;for(let L=0;L<Qe;L++){const $=We[L];Me($[2]+j,$[1]+j,$[0]+j)}ee=u+g*2,j=Z*ee;for(let L=0;L<Qe;L++){const $=We[L];Me($[0]+j,$[1]+j,$[2]+j)}}else{for(let ee=0;ee<Qe;ee++){const j=We[ee];Me(j[2],j[1],j[0])}for(let ee=0;ee<Qe;ee++){const j=We[ee];Me(j[0]+Z*u,j[1]+Z*u,j[2]+Z*u)}}n.addGroup(se,i.length/3-se,0)}function te(){const se=i.length/3;let ee=0;ge(V,ee),ee+=V.length;for(let j=0,L=I.length;j<L;j++){const $=I[j];ge($,ee),ee+=$.length}n.addGroup(se,i.length/3-se,1)}function ge(se,ee){let j=se.length;for(;--j>=0;){const L=j;let $=j-1;$<0&&($=se.length-1);for(let re=0,K=u+g*2;re<K;re++){const Ue=Z*re,Ne=Z*(re+1),C=ee+L+Ue,S=ee+$+Ue,O=ee+$+Ne,H=ee+L+Ne;He(C,S,O,H)}}}function Ae(se,ee,j){l.push(se),l.push(ee),l.push(j)}function Me(se,ee,j){lt(se),lt(ee),lt(j);const L=i.length/3,$=y.generateTopUV(n,i,L-3,L-2,L-1);D($[0]),D($[1]),D($[2])}function He(se,ee,j,L){lt(se),lt(ee),lt(L),lt(ee),lt(j),lt(L);const $=i.length/3,re=y.generateSideWallUV(n,i,$-6,$-3,$-2,$-1);D(re[0]),D(re[1]),D(re[3]),D(re[1]),D(re[2]),D(re[3])}function lt(se){i.push(l[se*3+0]),i.push(l[se*3+1]),i.push(l[se*3+2])}function D(se){s.push(se.x),s.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return a0(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Oa[i.type]().fromJSON(i)),new al(n,e.options)}}const o0={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new J(s,o),new J(a,l),new J(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],p=e[i*3+2],x=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new J(o,1-l),new J(c,1-h),new J(d,1-p),new J(x,1-m)]:[new J(a,1-l),new J(u,1-h),new J(f,1-p),new J(g,1-m)]}};function a0(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ll extends vi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ll(e.radius,e.detail)}}class cl extends $e{constructor(e=[new J(0,-.5),new J(.5,0),new J(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=ze(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/t,h=new T,d=new J,f=new T,p=new T,x=new T;let g=0,m=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let y=0;y<=t;y++){const v=n+y*u*i,_=Math.sin(v),E=Math.cos(v);for(let A=0;A<=e.length-1;A++){h.x=e[A].x*_,h.y=e[A].y,h.z=e[A].x*E,o.push(h.x,h.y,h.z),d.x=y/t,d.y=A/(e.length-1),a.push(d.x,d.y);const R=l[3*A+0]*_,P=l[3*A+1],M=l[3*A+0]*E;c.push(R,P,M)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){const _=v+y*e.length,E=_,A=_+e.length,R=_+e.length+1,P=_+1;s.push(E,A,P),s.push(R,P,A)}this.setIndex(s),this.setAttribute("position",new be(o,3)),this.setAttribute("uv",new be(a,2)),this.setAttribute("normal",new be(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.points,e.segments,e.phiStart,e.phiLength)}}class qr extends vi{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new qr(e.radius,e.detail)}}class es extends $e{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],x=[],g=[];for(let m=0;m<u;m++){const y=m*d-o;for(let v=0;v<c;v++){const _=v*h-s;p.push(_,-y,0),x.push(0,0,1),g.push(v/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const v=y+c*m,_=y+c*(m+1),E=y+1+c*(m+1),A=y+1+c*m;f.push(v,_,A),f.push(_,E,A)}this.setIndex(f),this.setAttribute("position",new be(p,3)),this.setAttribute("normal",new be(x,3)),this.setAttribute("uv",new be(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yr extends $e{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/i,f=new T,p=new J;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){const m=s+g/n*o;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let x=0;x<i;x++){const g=x*(n+1);for(let m=0;m<n;m++){const y=m+g,v=y,_=y+n+1,E=y+n+2,A=y+1;a.push(v,_,A),a.push(_,E,A)}}this.setIndex(a),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class hl extends $e{constructor(e=new qi([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new be(i,3)),this.setAttribute("normal",new be(s,3)),this.setAttribute("uv",new be(o,2));function c(u){const h=i.length/3,d=u.extractPoints(t);let f=d.shape;const p=d.holes;En.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const y=p[g];En.isClockWise(y)===!0&&(p[g]=y.reverse())}const x=En.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const y=p[g];f=f.concat(y)}for(let g=0,m=f.length;g<m;g++){const y=f[g];i.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let g=0,m=x.length;g<m;g++){const y=x[g],v=y[0]+h,_=y[1]+h,E=y[2]+h;n.push(v,_,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return l0(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new hl(n,e.curveSegments)}}function l0(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class pi extends $e{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new T,d=new T,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){const y=[],v=m/n;let _=0;m===0&&o===0?_=.5/t:m===n&&l===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){const A=E/t;h.x=-e*Math.cos(i+A*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(i+A*s)*Math.sin(o+v*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(A+_,1-v),y.push(c++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){const v=u[m][y+1],_=u[m][y],E=u[m+1][y],A=u[m+1][y+1];(m!==0||o>0)&&f.push(v,_,A),(m!==n-1||l<Math.PI)&&f.push(_,E,A)}this.setIndex(f),this.setAttribute("position",new be(p,3)),this.setAttribute("normal",new be(x,3)),this.setAttribute("uv",new be(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ul extends vi{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ul(e.radius,e.detail)}}class dl extends $e{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new T,h=new T,d=new T;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){const x=p/i*s,g=f/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(x),h.y=(e+t*Math.cos(g))*Math.sin(x),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(p/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){const x=(i+1)*f+p-1,g=(i+1)*(f-1)+p-1,m=(i+1)*(f-1)+p,y=(i+1)*f+p;o.push(x,g,y),o.push(g,m,y)}this.setIndex(o),this.setAttribute("position",new be(a,3)),this.setAttribute("normal",new be(l,3)),this.setAttribute("uv",new be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class fl extends $e{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],u=[],h=new T,d=new T,f=new T,p=new T,x=new T,g=new T,m=new T;for(let v=0;v<=n;++v){const _=v/n*s*Math.PI*2;y(_,s,o,e,f),y(_+.01,s,o,e,p),g.subVectors(p,f),m.addVectors(p,f),x.crossVectors(g,m),m.crossVectors(x,g),x.normalize(),m.normalize();for(let E=0;E<=i;++E){const A=E/i*Math.PI*2,R=-t*Math.cos(A),P=t*Math.sin(A);h.x=f.x+(R*m.x+P*x.x),h.y=f.y+(R*m.y+P*x.y),h.z=f.z+(R*m.z+P*x.z),l.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),c.push(d.x,d.y,d.z),u.push(v/n),u.push(E/i)}}for(let v=1;v<=n;v++)for(let _=1;_<=i;_++){const E=(i+1)*(v-1)+(_-1),A=(i+1)*v+(_-1),R=(i+1)*v+_,P=(i+1)*(v-1)+_;a.push(E,A,P),a.push(A,R,P)}this.setIndex(a),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(u,2));function y(v,_,E,A,R){const P=Math.cos(v),M=Math.sin(v),b=E/_*v,I=Math.cos(b);R.x=A*(2+I)*.5*P,R.y=A*(2+I)*M*.5,R.z=A*Math.sin(b)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class pl extends $e{constructor(e=new ih(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new T,l=new T,c=new J;let u=new T;const h=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new be(h,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(f,2));function x(){for(let v=0;v<t;v++)g(v);g(s===!1?t:0),y(),m()}function g(v){u=e.getPointAt(v/t,u);const _=o.normals[v],E=o.binormals[v];for(let A=0;A<=i;A++){const R=A/i*Math.PI*2,P=Math.sin(R),M=-Math.cos(R);l.x=M*_.x+P*E.x,l.y=M*_.y+P*E.y,l.z=M*_.z+P*E.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=t;v++)for(let _=1;_<=i;_++){const E=(i+1)*(v-1)+(_-1),A=(i+1)*v+(_-1),R=(i+1)*v+_,P=(i+1)*(v-1)+_;p.push(E,A,P),p.push(A,R,P)}}function y(){for(let v=0;v<=t;v++)for(let _=0;_<=i;_++)c.x=v/t,c.y=_/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new pl(new Oa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Hf extends $e{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new T,s=new T;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],d=h.start,f=h.count;for(let p=d,x=d+f;p<x;p+=3)for(let g=0;g<3;g++){const m=a.getX(p+g),y=a.getX(p+(g+1)%3);i.fromBufferAttribute(o,m),s.fromBufferAttribute(o,y),Mu(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;i.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),Mu(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new be(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Mu(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var bu=Object.freeze({__proto__:null,BoxGeometry:xi,CapsuleGeometry:sl,CircleGeometry:Hs,ConeGeometry:Xr,CylinderGeometry:Ys,DodecahedronGeometry:rl,EdgesGeometry:If,ExtrudeGeometry:al,IcosahedronGeometry:ll,LatheGeometry:cl,OctahedronGeometry:qr,PlaneGeometry:es,PolyhedronGeometry:vi,RingGeometry:Yr,ShapeGeometry:hl,SphereGeometry:pi,TetrahedronGeometry:ul,TorusGeometry:dl,TorusKnotGeometry:fl,TubeGeometry:pl,WireframeGeometry:Hf});class Vf extends kt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new oe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Gf extends Et{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rh extends kt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wf extends rh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Xf extends kt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new oe(16777215),this.specular=new oe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qf extends kt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new oe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Yf extends kt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class $f extends kt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oh extends kt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ah extends kt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Zf extends kt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new oe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kf extends Xt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Gi(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Jf(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Qf(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function wc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function lh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}function c0(r,e,t,n,i=30){const s=r.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],d=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*i;if(!(p<t||p>=n)){h.push(c.times[f]);for(let x=0;x<u;++x)d.push(c.values[f*u+x])}}h.length!==0&&(c.times=Gi(h,c.times.constructor),c.values=Gi(d,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s}function h0(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=a.times.length-1;let x;if(s<=a.times[0]){const m=u,y=h-u;x=a.values.slice(m,y)}else if(s>=a.times[p]){const m=p*h+u,y=m+h-u;x=a.values.slice(m,y)}else{const m=a.createInterpolant(),y=u,v=h-u;m.evaluate(s),x=m.resultBuffer.slice(y,v)}l==="quaternion"&&new en().fromArray(x).normalize().conjugate().toArray(x);const g=c.times.length;for(let m=0;m<g;++m){const y=m*f+d;if(l==="quaternion")en.multiplyQuaternionsFlat(c.values,y,x,0,c.values,y);else{const v=f-d*2;for(let _=0;_<v;++_)c.values[y+_]-=x[_]}}}return r.blendMode=Vc,r}class u0{static convertArray(e,t){return Gi(e,t)}static isTypedArray(e){return Jf(e)}static getKeyframeOrder(e){return Qf(e)}static sortedArray(e,t,n){return wc(e,t,n)}static flattenJSON(e,t,n,i){lh(e,t,n,i)}static subclip(e,t,n,i,s=30){return c0(e,t,n,i,s)}static makeClipAdditive(e,t=0,n=e,i=30){return h0(e,t,n,i)}}class $r{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class jf extends $r{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ki,endingEnd:ki}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hi:s=e,a=2*t-n;break;case Cr:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hi:o=e,l=2*n-t;break;case Cr:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,y=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,v=(-1-f)*g+(1.5+f)*x+.5*p,_=f*g-f*x;for(let E=0;E!==a;++E)s[E]=m*o[u+E]+y*o[c+E]+v*o[l+E]+_*o[h+E];return s}}class ch extends $r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class ep extends $r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class _n{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gi(t,this.TimeBufferType),this.values=Gi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Gi(e.times,Array),values:Gi(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ep(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ar:t=this.InterpolantFactoryMethodDiscrete;break;case Fa:t=this.InterpolantFactoryMethodLinear;break;case qo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return Fa;case this.InterpolantFactoryMethodSmooth:return qo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Jf(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===qo,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){const x=t[h+p];if(x!==t[d+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Fa;class ts extends _n{constructor(e,t,n){super(e,t,n)}}ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Ar;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;class hh extends _n{constructor(e,t,n,i){super(e,t,n,i)}}hh.prototype.ValueTypeName="color";class Nr extends _n{constructor(e,t,n,i){super(e,t,n,i)}}Nr.prototype.ValueTypeName="number";class tp extends $r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)en.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Zr extends _n{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new tp(this.times,this.values,this.getValueSize(),e)}}Zr.prototype.ValueTypeName="quaternion";Zr.prototype.InterpolantFactoryMethodSmooth=void 0;class ns extends _n{constructor(e,t,n){super(e,t,n)}}ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Ar;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;class Or extends _n{constructor(e,t,n,i){super(e,t,n,i)}}Or.prototype.ValueTypeName="vector";class Br{constructor(e="",t=-1,n=[],i=Ya){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=hn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(f0(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(_n.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Qf(l);l=wc(l,1,u),c=wc(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Nr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,p,x){if(f.length!==0){const g=[],m=[];lh(f,g,m,p),g.length!==0&&x.push(new h(d,g,m))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let x=0;x<d[p].morphTargets.length;x++)f[d[p].morphTargets[x]]=-1;for(const x in f){const g=[],m=[];for(let y=0;y!==d[p].morphTargets.length;++y){const v=d[p];g.push(v.time),m.push(v.morphTarget===x?1:0)}i.push(new Nr(".morphTargetInfluence["+x+"]",g,m))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(Or,f+".position",d,"pos",i),n(Zr,f+".quaternion",d,"rot",i),n(Or,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function d0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Nr;case"vector":case"vector2":case"vector3":case"vector4":return Or;case"color":return hh;case"quaternion":return Zr;case"bool":case"boolean":return ts;case"string":return ns}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function f0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=d0(r.type);if(r.times===void 0){const t=[],n=[];lh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Fn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class uh{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const np=new uh;class tn{constructor(e){this.manager=e!==void 0?e:np,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}tn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wn={};class p0 extends Error{constructor(e,t){super(e),this.response=t}}class jn extends tn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Fn.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Wn[e]!==void 0){Wn[e].push({onLoad:t,onProgress:n,onError:i});return}Wn[e]=[],Wn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Wn[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let x=0;const g=new ReadableStream({start(m){y();function y(){h.read().then(({done:v,value:_})=>{if(v)m.close();else{x+=_.byteLength;const E=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let A=0,R=u.length;A<R;A++){const P=u[A];P.onProgress&&P.onProgress(E)}m.enqueue(_),y()}},v=>{m.error(v)})}}});return new Response(g)}else throw new p0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Fn.add(`file:${e}`,c);const u=Wn[e];delete Wn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Wn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Wn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class m0 extends tn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new jn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Br.parse(e[n]);t.push(i)}return t}}class g0 extends tn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=[],a=new nl,l=new jn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function u(h){l.load(e[h],function(d){const f=s.parse(d,!0);o[h]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(a.minFilter=xt),a.image=o,a.format=f.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let h=0,d=e.length;h<d;++h)u(h);else l.load(e,function(h){const d=s.parse(h,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){o[p]={mipmaps:[]};for(let x=0;x<d.mipmapCount;x++)o[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+x]),o[p].format=d.format,o[p].width=d.width,o[p].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=xt),a.format=d.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}const Ss=new WeakMap;class zr extends tn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=Ss.get(o);h===void 0&&(h=[],Ss.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=Ir("img");function l(){u(),t&&t(this);const h=Ss.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Ss.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),Fn.remove(`image:${e}`);const d=Ss.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(h)}Ss.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Fn.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class x0 extends tn{constructor(e){super(e)}load(e,t,n,i){const s=new Wr;s.colorSpace=Zt;const o=new zr(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class v0 extends tn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Tn,a=new jn(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Qt,o.wrapT=c.wrapT!==void 0?c.wrapT:Qt,o.magFilter=c.magFilter!==void 0?c.magFilter:xt,o.minFilter=c.minFilter!==void 0?c.minFilter:xt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=wn),c.mipmapCount===1&&(o.minFilter=xt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class ip extends tn{constructor(e){super(e)}load(e,t,n,i){const s=new bt,o=new zr(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class _i extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class sp extends _i{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ql=new Fe,wu=new T,Eu=new T;class dh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(wu),Eu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eu),t.updateMatrixWorld(),Ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ql,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ql)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _0 extends dh{constructor(){super(new Pt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Bs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class rp extends _i{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new _0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Tu=new Fe,hr=new T,jl=new T;class y0 extends dh{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),hr.setFromMatrixPosition(e.matrixWorld),n.position.copy(hr),jl.copy(n.position),jl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jl),n.updateMatrixWorld(),i.makeTranslation(-hr.x,-hr.y,-hr.z),Tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu,n.coordinateSystem,n.reversedDepth)}}class op extends _i{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new y0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $s extends Ja{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class S0 extends dh{constructor(){super(new $s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fh extends _i{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.shadow=new S0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ph extends _i{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ap extends _i{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class lp{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new T)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class cp extends _i{constructor(e=new lp,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class ml extends tn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,o=new jn(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(i.uniforms[s]={},o.type){case"t":i.uniforms[s].value=n(o.value);break;case"c":i.uniforms[s].value=new oe().setHex(o.value);break;case"v2":i.uniforms[s].value=new J().fromArray(o.value);break;case"v3":i.uniforms[s].value=new T().fromArray(o.value);break;case"v4":i.uniforms[s].value=new nt().fromArray(o.value);break;case"m3":i.uniforms[s].value=new Ye().fromArray(o.value);break;case"m4":i.uniforms[s].value=new Fe().fromArray(o.value);break;default:i.uniforms[s].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new J().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return ml.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:Vf,SpriteMaterial:Zc,RawShaderMaterial:Gf,ShaderMaterial:Et,PointsMaterial:Jc,MeshPhysicalMaterial:Wf,MeshStandardMaterial:rh,MeshPhongMaterial:Xf,MeshToonMaterial:qf,MeshNormalMaterial:Yf,MeshLambertMaterial:$f,MeshDepthMaterial:oh,MeshDistanceMaterial:ah,MeshBasicMaterial:xn,MeshMatcapMaterial:Zf,LineDashedMaterial:Kf,LineBasicMaterial:Xt,Material:kt};return new t[e]}}class Ec{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class hp extends $e{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class up extends tn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new jn(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,p){if(t[p]!==void 0)return t[p];const g=f.interleavedBuffers[p],m=s(f,g.buffer),y=Ps(g.type,m),v=new ja(y,g.stride);return v.uuid=g.uuid,t[p]=v,v}function s(f,p){if(n[p]!==void 0)return n[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const o=e.isInstancedBufferGeometry?new hp:new $e,a=e.data.index;if(a!==void 0){const f=Ps(a.type,a.array);o.setIndex(new dt(f,1))}const l=e.data.attributes;for(const f in l){const p=l[f];let x;if(p.isInterleavedBufferAttribute){const g=i(e.data,p.data);x=new Qi(g,p.itemSize,p.offset,p.normalized)}else{const g=Ps(p.type,p.array),m=p.isInstancedBufferAttribute?ks:dt;x=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(x.name=p.name),p.usage!==void 0&&x.setUsage(p.usage),o.setAttribute(f,x)}const c=e.data.morphAttributes;if(c)for(const f in c){const p=c[f],x=[];for(let g=0,m=p.length;g<m;g++){const y=p[g];let v;if(y.isInterleavedBufferAttribute){const _=i(e.data,y.data);v=new Qi(_,y.itemSize,y.offset,y.normalized)}else{const _=Ps(y.type,y.array);v=new dt(_,y.itemSize,y.normalized)}y.name!==void 0&&(v.name=y.name),x.push(v)}o.morphAttributes[f]=x}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let f=0,p=h.length;f!==p;++f){const x=h[f];o.addGroup(x.start,x.count,x.materialIndex)}const d=e.data.boundingSphere;return d!==void 0&&(o.boundingSphere=new Ft().fromJSON(d)),e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class M0 extends tn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=this.path===""?Ec.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new jn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(h){i!==void 0&&i(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Ec.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new jn(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const o=await s.loadAsync(e,t),a=JSON.parse(o),l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(c)}),a=this.parseTextures(e.textures,o),l=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,s,l,a,n),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),this.bindLightTargets(c),t!==void 0){let h=!1;for(const d in o)if(o[d].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,s),a=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,i,a,o,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new qi().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=new el().fromJSON(e[s],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new up;for(let s=0,o=e.length;s<o;s++){let a;const l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in bu?a=bu[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new ml;s.setTextures(t);for(let o=0,a=e.length;o<a;o++){const l=e[o];n[l.uuid]===void 0&&(n[l.uuid]=s.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=Br.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function o(l){return n.manager.itemStart(l),s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(u)}else return l.data?{data:Ps(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new uh(t);s=new zr(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){const h=e[c],d=h.url;if(Array.isArray(d)){const f=[];for(let p=0,x=d.length;p<x;p++){const g=d[p],m=a(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new Tn(m.data,m.width,m.height)))}i[h.uuid]=new hi(f)}else{const f=a(h.url);i[h.uuid]=new hi(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(o){if(typeof o=="string"){const a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(l)}else return o.data?{data:Ps(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new zr(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const l=e[o],c=l.url;if(Array.isArray(c)){const u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=await s(f);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new Tn(p.data,p.width,p.height)))}n[l.uuid]=new hi(u)}else{const u=await s(l.url);n[l.uuid]=new hi(u)}}}return n}parseTextures(e,t){function n(s,o){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const i={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=e[s];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const l=t[a.image],c=l.data;let u;Array.isArray(c)?(u=new Wr,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new Tn:u=new bt,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=a.uuid,a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=n(a.mapping,b0)),a.channel!==void 0&&(u.channel=a.channel),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&(u.wrapS=n(a.wrap[0],Au),u.wrapT=n(a.wrap[1],Au)),a.format!==void 0&&(u.format=a.format),a.internalFormat!==void 0&&(u.internalFormat=a.internalFormat),a.type!==void 0&&(u.type=a.type),a.colorSpace!==void 0&&(u.colorSpace=a.colorSpace),a.minFilter!==void 0&&(u.minFilter=n(a.minFilter,Cu)),a.magFilter!==void 0&&(u.magFilter=n(a.magFilter,Cu)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.generateMipmaps!==void 0&&(u.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(u.compareFunction=a.compareFunction),a.userData!==void 0&&(u.userData=a.userData),i[a.uuid]=u}return i}parseObject(e,t,n,i,s){let o;function a(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let p=0,x=d.length;p<x;p++){const g=d[p];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let u,h;switch(e.type){case"Scene":o=new $c,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new oe(e.background):o.background=c(e.background)),e.environment!==void 0&&(o.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new di(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new Qa(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new Pt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new $s(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new ph(e.color,e.intensity);break;case"DirectionalLight":o=new fh(e.color,e.intensity),o.target=e.target||"";break;case"PointLight":o=new op(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new ap(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new rp(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),o.target=e.target||"";break;case"HemisphereLight":o=new sp(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new cp().fromJSON(e);break;case"SkinnedMesh":u=a(e.geometry),h=l(e.material),o=new wf(u,h),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":u=a(e.geometry),h=l(e.material),o=new pt(u,h);break;case"InstancedMesh":u=a(e.geometry),h=l(e.material);const d=e.count,f=e.instanceMatrix,p=e.instanceColor;o=new Ef(u,h,d),o.instanceMatrix=new ks(new Float32Array(f.array),16),p!==void 0&&(o.instanceColor=new ks(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":u=a(e.geometry),h=l(e.material),o=new Tf(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,h),o.geometry=u,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._geometryInfo=e.geometryInfo.map(x=>{let g=null,m=null;return x.boundingBox!==void 0&&(g=new zt().fromJSON(x.boundingBox)),x.boundingSphere!==void 0&&(m=new Ft().fromJSON(x.boundingSphere)),{...x,boundingBox:g,boundingSphere:m}}),o._instanceInfo=e.instanceInfo,o._availableInstanceIds=e._availableInstanceIds,o._availableGeometryIds=e._availableGeometryIds,o._nextIndexStart=e.nextIndexStart,o._nextVertexStart=e.nextVertexStart,o._geometryCount=e.geometryCount,o._maxInstanceCount=e.maxInstanceCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._matricesTexture=c(e.matricesTexture.uuid),o._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(o._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(o.boundingSphere=new Ft().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(o.boundingBox=new zt().fromJSON(e.boundingBox));break;case"LOD":o=new bf;break;case"Line":o=new fi(a(e.geometry),l(e.material));break;case"LineLoop":o=new Af(a(e.geometry),l(e.material));break;case"LineSegments":o=new On(a(e.geometry),l(e.material));break;case"PointCloud":case"Points":o=new Cf(a(e.geometry),l(e.material));break;case"Sprite":o=new Mf(l(e.material));break;case"Group":o=new Vi;break;case"Bone":o=new Kc;break;default:o=new st}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(o.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)o.add(this.parseObject(d[f],t,n,i,s))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const p=d[f];o.animations.push(s[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const p=d[f],x=o.getObjectByProperty("uuid",p.object);x!==void 0&&o.addLevel(x,p.distance,p.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new st}})}}const b0={UVMapping:Ha,CubeReflectionMapping:Jn,CubeRefractionMapping:ui,EquirectangularReflectionMapping:Er,EquirectangularRefractionMapping:Tr,CubeUVReflectionMapping:Ws},Au={RepeatWrapping:$i,ClampToEdgeWrapping:Qt,MirroredRepeatWrapping:Zi},Cu={NearestFilter:Lt,NearestMipmapNearestFilter:Fc,NearestMipmapLinearFilter:Rs,LinearFilter:xt,LinearMipmapNearestFilter:mr,LinearMipmapLinearFilter:wn},ec=new WeakMap;class w0 extends tn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fn.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(ec.has(o)===!0)i&&i(ec.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Fn.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ec.set(l,c),Fn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Fn.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let Fo;class mh{static getContext(){return Fo===void 0&&(Fo=new(window.AudioContext||window.webkitAudioContext)),Fo}static setContext(e){Fo=e}}class E0 extends tn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new jn(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const c=l.slice(0);mh.getContext().decodeAudioData(c,function(h){t(h)}).catch(a)}catch(c){a(c)}},n,i);function a(l){i?i(l):console.error(l),s.manager.itemError(e)}}}const Ru=new Fe,Pu=new Fe,Ci=new Fe;class T0{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Pt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Pt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Ci.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,o=t.near*Math.tan(Xi*t.fov*.5)/t.zoom;let a,l;Pu.elements[12]=-i,Ru.elements[12]=i,a=-o*t.aspect+s,l=o*t.aspect+s,Ci.elements[0]=2*t.near/(l-a),Ci.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(Ci),a=-o*t.aspect-s,l=o*t.aspect-s,Ci.elements[0]=2*t.near/(l-a),Ci.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(Ci)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Pu),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Ru)}}class dp extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class gl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ri=new T,tc=new en,A0=new T,Pi=new T,Ii=new T;class C0 extends st{constructor(){super(),this.type="AudioListener",this.context=mh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new gl}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ri,tc,A0),Pi.set(0,0,-1).applyQuaternion(tc),Ii.set(0,1,0).applyQuaternion(tc),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ri.x,n),t.positionY.linearRampToValueAtTime(Ri.y,n),t.positionZ.linearRampToValueAtTime(Ri.z,n),t.forwardX.linearRampToValueAtTime(Pi.x,n),t.forwardY.linearRampToValueAtTime(Pi.y,n),t.forwardZ.linearRampToValueAtTime(Pi.z,n),t.upX.linearRampToValueAtTime(Ii.x,n),t.upY.linearRampToValueAtTime(Ii.y,n),t.upZ.linearRampToValueAtTime(Ii.z,n)}else t.setPosition(Ri.x,Ri.y,Ri.z),t.setOrientation(Pi.x,Pi.y,Pi.z,Ii.x,Ii.y,Ii.z)}}class fp extends st{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const Di=new T,Iu=new en,R0=new T,Li=new T;class P0 extends fp{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Di,Iu,R0),Li.set(0,0,1).applyQuaternion(Iu);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Di.x,n),t.positionY.linearRampToValueAtTime(Di.y,n),t.positionZ.linearRampToValueAtTime(Di.z,n),t.orientationX.linearRampToValueAtTime(Li.x,n),t.orientationY.linearRampToValueAtTime(Li.y,n),t.orientationZ.linearRampToValueAtTime(Li.z,n)}else t.setPosition(Di.x,Di.y,Di.z),t.setOrientation(Li.x,Li.y,Li.z)}}class I0{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class pp{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){en.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;en.multiplyQuaternionsFlat(e,o,e,t,e,n),en.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const gh="\\[\\]\\.:\\/",D0=new RegExp("["+gh+"]","g"),xh="[^"+gh+"]",L0="[^"+gh.replace("\\.","")+"]",F0=/((?:WC+[\/:])*)/.source.replace("WC",xh),U0=/(WCOD+)?/.source.replace("WCOD",L0),N0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xh),O0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xh),B0=new RegExp("^"+F0+U0+N0+O0+"$"),z0=["material","materials","bones","map"];class k0{constructor(e,t,n){const i=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rt{constructor(e,t,n){this.path=t,this.parsedPath=n||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,n):new rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(D0,"")}static parseTrackName(e){const t=B0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);z0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=k0;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class H0{constructor(){this.isAnimationObjectGroup=!0,this.uuid=hn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length;let a,l=e.length,c=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){const d=arguments[u],f=d.uuid;let p=t[f];if(p===void 0){p=l++,t[f]=p,e.push(d);for(let x=0,g=o;x!==g;++x)s[x].push(new rt(d,n[x],i[x]))}else if(p<c){a=e[p];const x=--c,g=e[x];t[g.uuid]=p,e[p]=g,t[f]=x,e[x]=d;for(let m=0,y=o;m!==y;++m){const v=s[m],_=v[x];let E=v[p];v[p]=_,E===void 0&&(E=new rt(d,n[m],i[m])),v[x]=E}}else e[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const l=arguments[o],c=l.uuid,u=t[c];if(u!==void 0&&u>=s){const h=s++,d=e[h];t[d.uuid]=u,e[u]=d,t[c]=h,e[h]=l;for(let f=0,p=i;f!==p;++f){const x=n[f],g=x[h],m=x[u];x[u]=g,x[h]=m}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){const c=arguments[a],u=c.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<s){const d=--s,f=e[d],p=--o,x=e[p];t[f.uuid]=h,e[h]=f,t[x.uuid]=d,e[d]=x,e.pop();for(let g=0,m=i;g!==m;++g){const y=n[g],v=y[d],_=y[p];y[h]=v,y[d]=_,y.pop()}}else{const d=--o,f=e[d];d>0&&(t[f.uuid]=h),e[h]=f,e.pop();for(let p=0,x=i;p!==x;++p){const g=n[p];g[h]=g[d],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,h=new Array(c);i=s.length,n[e]=i,o.push(e),a.push(t),s.push(h);for(let d=u,f=l.length;d!==f;++d){const p=l[d];h[d]=new rt(p,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=e[a];t[c]=n,o[n]=l,o.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}}class mp{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:ki,endingEnd:ki};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=tf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Vc:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Ya:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===nf;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===ef){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Hi,i.endingEnd=Hi):(e?i.endingStart=this.zeroSlopeAtStart?Hi:ki:i.endingStart=Cr,t?i.endingEnd=this.zeroSlopeAtEnd?Hi:ki:i.endingEnd=Cr)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const V0=new Float32Array(1);class G0 extends Nn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const d=i[h],f=d.name;let p=u[f];if(p!==void 0)++p.referenceCount,o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const x=t&&t._propertyBindings[h].binding.parsedPath;p=new pp(rt.create(n,f,x),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new ch(new Float32Array(2),new Float32Array(2),1,V0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?Br.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ya),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new mp(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Br.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class W0 extends Xc{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new Za(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class vh{constructor(e){this.value=e}clone(){return new vh(this.value.clone===void 0?this.value:this.value.clone())}}let X0=0;class q0 extends Nn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:X0++}),this.name="",this.usage=Pr,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<s.length;o++)this.uniforms.push(s[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class Y0 extends ja{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class $0{constructor(e,t,n,i,s,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Du=new Fe;class gp{constructor(e,t,n=0,i=1/0){this.ray=new Xs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Du.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Du),this}intersectObject(e,t=!0,n=[]){return Tc(e,this,n,t),n.sort(Lu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Tc(e[i],this,n,t);return n.sort(Lu),n}}function Lu(r,e){return r.distance-e.distance}function Tc(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Tc(s[o],e,t,!0)}}class Z0{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=K0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function K0(){this._document.hidden===!1&&this.reset()}class J0{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Q0{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class _h{constructor(e,t,n,i){_h.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}const Fu=new J;class j0{constructor(e=new J(1/0,1/0),t=new J(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fu).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Uu=new T,Uo=new T,Ms=new T,bs=new T,nc=new T,ex=new T,tx=new T;class nx{constructor(e=new T,t=new T){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Uu.subVectors(e,this.start),Uo.subVectors(this.end,this.start);const n=Uo.dot(Uo);let s=Uo.dot(Uu)/n;return t&&(s=ze(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=ex,n=tx){const i=10000000000000001e-32;let s,o;const a=this.start,l=e.start,c=this.end,u=e.end;Ms.subVectors(c,a),bs.subVectors(u,l),nc.subVectors(a,l);const h=Ms.dot(Ms),d=bs.dot(bs),f=bs.dot(nc);if(h<=i&&d<=i)return t.copy(a),n.copy(l),t.sub(n),t.dot(t);if(h<=i)s=0,o=f/d,o=ze(o,0,1);else{const p=Ms.dot(nc);if(d<=i)o=0,s=ze(-p/h,0,1);else{const x=Ms.dot(bs),g=h*d-x*x;g!==0?s=ze((x*f-p*d)/g,0,1):s=0,o=(x*s+f)/d,o<0?(o=0,s=ze(-p/h,0,1)):o>1&&(o=1,s=ze((x-p)/h,0,1))}}return t.copy(a).add(Ms.multiplyScalar(s)),n.copy(l).add(bs.multiplyScalar(o)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Nu=new T;class ix extends st{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new $e,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,u=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new be(i,3));const s=new Xt({fog:!1,toneMapped:!1});this.cone=new On(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Nu.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Nu),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const oi=new T,No=new Fe,ic=new Fe;class sx extends On{constructor(e){const t=xp(e),n=new $e,i=[],s=[];for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(0,0,0),s.push(0,0,0))}n.setAttribute("position",new be(i,3)),n.setAttribute("color",new be(s,3));const o=new Xt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const a=new oe(255),l=new oe(65280);this.setColors(a,l)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");ic.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(No.multiplyMatrices(ic,a.matrixWorld),oi.setFromMatrixPosition(No),i.setXYZ(o,oi.x,oi.y,oi.z),No.multiplyMatrices(ic,a.parent.matrixWorld),oi.setFromMatrixPosition(No),i.setXYZ(o+1,oi.x,oi.y,oi.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let s=0;s<i.count;s+=2)i.setXYZ(s,e.r,e.g,e.b),i.setXYZ(s+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function xp(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push(...xp(r.children[t]));return e}class rx extends pt{constructor(e,t,n){const i=new pi(t,4,2),s=new xn({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const ox=new T,Ou=new oe,Bu=new oe;class ax extends st{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new qr(t);i.rotateY(Math.PI*.5),this.material=new xn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),o=new Float32Array(s.count*3);i.setAttribute("color",new dt(o,3)),this.add(new pt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Ou.copy(this.light.color),Bu.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?Ou:Bu;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(ox.setFromMatrixPosition(this.light.matrixWorld).negate())}}class lx extends On{constructor(e=10,t=10,n=4473924,i=8947848){n=new oe(n),i=new oe(i);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,p=-a;d<=t;d++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);const x=d===s?n:i;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}const u=new $e;u.setAttribute("position",new be(l,3)),u.setAttribute("color",new be(c,3));const h=new Xt({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class cx extends On{constructor(e=10,t=16,n=8,i=64,s=4473924,o=8947848){s=new oe(s),o=new oe(o);const a=[],l=[];if(t>1)for(let h=0;h<t;h++){const d=h/t*(Math.PI*2),f=Math.sin(d)*e,p=Math.cos(d)*e;a.push(0,0,0),a.push(f,0,p);const x=h&1?s:o;l.push(x.r,x.g,x.b),l.push(x.r,x.g,x.b)}for(let h=0;h<n;h++){const d=h&1?s:o,f=e-e/n*h;for(let p=0;p<i;p++){let x=p/i*(Math.PI*2),g=Math.sin(x)*f,m=Math.cos(x)*f;a.push(g,0,m),l.push(d.r,d.g,d.b),x=(p+1)/i*(Math.PI*2),g=Math.sin(x)*f,m=Math.cos(x)*f,a.push(g,0,m),l.push(d.r,d.g,d.b)}}const c=new $e;c.setAttribute("position",new be(a,3)),c.setAttribute("color",new be(l,3));const u=new Xt({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const zu=new T,Oo=new T,ku=new T;class hx extends st{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new $e;i.setAttribute("position",new be([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new Xt({fog:!1,toneMapped:!1});this.lightPlane=new fi(i,s),this.add(this.lightPlane),i=new $e,i.setAttribute("position",new be([0,0,0,0,0,1],3)),this.targetLine=new fi(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),zu.setFromMatrixPosition(this.light.matrixWorld),Oo.setFromMatrixPosition(this.light.target.matrixWorld),ku.subVectors(Oo,zu),this.lightPlane.lookAt(Oo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Oo),this.targetLine.scale.z=ku.length()}}const Bo=new T,Mt=new Ja;class vp extends On{constructor(e){const t=new $e,n=new Xt({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,x){l(p),l(x)}function l(p){i.push(0,0,0),s.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1)}t.setAttribute("position",new be(i,3)),t.setAttribute("color",new be(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const c=new oe(16755200),u=new oe(16711680),h=new oe(43775),d=new oe(16777215),f=new oe(3355443);this.setColors(c,u,h,d,f)}setColors(e,t,n,i,s){const a=this.geometry.getAttribute("color");return a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;let s,o;if(Mt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,o=0;else if(this.camera.coordinateSystem===cn)s=-1,o=1;else if(this.camera.coordinateSystem===Os)s=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);wt("c",t,e,Mt,0,0,s),wt("t",t,e,Mt,0,0,o),wt("n1",t,e,Mt,-n,-i,s),wt("n2",t,e,Mt,n,-i,s),wt("n3",t,e,Mt,-n,i,s),wt("n4",t,e,Mt,n,i,s),wt("f1",t,e,Mt,-n,-i,o),wt("f2",t,e,Mt,n,-i,o),wt("f3",t,e,Mt,-n,i,o),wt("f4",t,e,Mt,n,i,o),wt("u1",t,e,Mt,n*.7,i*1.1,s),wt("u2",t,e,Mt,-n*.7,i*1.1,s),wt("u3",t,e,Mt,0,i*2,s),wt("cf1",t,e,Mt,-n,0,o),wt("cf2",t,e,Mt,n,0,o),wt("cf3",t,e,Mt,0,-i,o),wt("cf4",t,e,Mt,0,i,o),wt("cn1",t,e,Mt,-n,0,s),wt("cn2",t,e,Mt,n,0,s),wt("cn3",t,e,Mt,0,-i,s),wt("cn4",t,e,Mt,0,i,s),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function wt(r,e,t,n,i,s,o){Bo.set(i,s,o).unproject(n);const a=e[r];if(a!==void 0){const l=t.getAttribute("position");for(let c=0,u=a.length;c<u;c++)l.setXYZ(a[c],Bo.x,Bo.y,Bo.z)}}const zo=new zt;class ux extends On{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),s=new $e;s.setIndex(new dt(n,1)),s.setAttribute("position",new dt(i,3)),super(s,new Xt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&zo.setFromObject(this.object),zo.isEmpty())return;const e=zo.min,t=zo.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class dx extends On{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new $e;s.setIndex(new dt(n,1)),s.setAttribute("position",new be(i,3)),super(s,new Xt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class fx extends fi{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new $e;o.setAttribute("position",new be(s,3)),o.computeBoundingSphere(),super(o,new Xt({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new $e;l.setAttribute("position",new be(a,3)),l.computeBoundingSphere(),this.add(new pt(l,new xn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Hu=new T;let ko,sc;class px extends st{constructor(e=new T(0,0,1),t=new T(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",ko===void 0&&(ko=new $e,ko.setAttribute("position",new be([0,0,0,0,1,0],3)),sc=new Xr(.5,1,5,1),sc.translate(0,-.5,0)),this.position.copy(t),this.line=new fi(ko,new Xt({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new pt(sc,new xn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Hu.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Hu,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class mx extends On{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new $e;i.setAttribute("position",new be(t,3)),i.setAttribute("color",new be(n,3));const s=new Xt({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new oe,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class gx{constructor(){this.type="ShapePath",this.color=new oe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ba,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const y=[];for(let v=0,_=m.length;v<_;v++){const E=m[v],A=new qi;A.curves=E.curves,y.push(A)}return y}function n(m,y){const v=y.length;let _=!1;for(let E=v-1,A=0;A<v;E=A++){let R=y[E],P=y[A],M=P.x-R.x,b=P.y-R.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(R=y[A],M=-M,P=y[E],b=-b),m.y<R.y||m.y>P.y)continue;if(m.y===R.y){if(m.x===R.x)return!0}else{const I=b*(m.x-R.x)-M*(m.y-R.y);if(I===0)return!0;if(I<0)continue;_=!_}}else{if(m.y!==R.y)continue;if(P.x<=m.x&&m.x<=R.x||R.x<=m.x&&m.x<=P.x)return!0}}return _}const i=En.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new qi,l.curves=a.curves,c.push(l),c;let u=!i(s[0].getPoints());u=e?!u:u;const h=[],d=[];let f=[],p=0,x;d[p]=void 0,f[p]=[];for(let m=0,y=s.length;m<y;m++)a=s[m],x=a.getPoints(),o=i(x),o=e?!o:o,o?(!u&&d[p]&&p++,d[p]={s:new qi,p:x},d[p].s.curves=a.curves,u&&p++,f[p]=[]):f[p].push({h:a,p:x[0]});if(!d[0])return t(s);if(d.length>1){let m=!1,y=0;for(let v=0,_=d.length;v<_;v++)h[v]=[];for(let v=0,_=d.length;v<_;v++){const E=f[v];for(let A=0;A<E.length;A++){const R=E[A];let P=!0;for(let M=0;M<d.length;M++)n(R.p,d[M].p)&&(v!==M&&y++,P?(P=!1,h[M].push(R)):m=!0);P&&h[v].push(R)}}y>0&&m===!1&&(f=h)}let g;for(let m=0,y=d.length;m<y;m++){l=d[m].s,c.push(l),g=f[m];for(let v=0,_=g.length;v<_;v++)l.holes.push(g[v].h)}return c}}class xx extends Nn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function vx(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function _x(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function yx(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function Ac(r,e,t,n){const i=Sx(n);switch(t){case zc:return r*e;case Hr:return r*e/i.components*i.byteLength;case Vr:return r*e/i.components*i.byteLength;case Hc:return r*e*2/i.components*i.byteLength;case Xa:return r*e*2/i.components*i.byteLength;case kc:return r*e*3/i.components*i.byteLength;case Bt:return r*e*4/i.components*i.byteLength;case qa:return r*e*4/i.components*i.byteLength;case gr:case xr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case vr:case _r:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case aa:case ca:return Math.max(r,16)*Math.max(e,8)/4;case oa:case la:return Math.max(r,8)*Math.max(e,8)/2;case ha:case ua:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case da:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case pa:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ma:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ga:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case xa:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case va:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case _a:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ya:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Sa:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ba:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case wa:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ea:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ta:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Aa:case Ca:case Ra:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Pa:case Ia:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Da:case La:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sx(r){switch(r){case vn:case Uc:return{byteLength:1,components:1};case Fs:case Nc:case mi:return{byteLength:2,components:1};case Ga:case Wa:return{byteLength:2,components:4};case Qn:case Va:case jt:return{byteLength:4,components:1};case Oc:case Bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}class Mx{static contain(e,t){return vx(e,t)}static cover(e,t){return _x(e,t)}static fill(e){return yx(e)}static getByteLength(e,t,n,i){return Ac(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ka);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _p(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function bx(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){const p=h[d],x=h[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){const x=h[f];r.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var wx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ex=`#ifdef USE_ALPHAHASH
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
#endif`,Tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ax=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Px=`#ifdef USE_AOMAP
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
#endif`,Ix=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dx=`#ifdef USE_BATCHING
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
#endif`,Lx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ox=`#ifdef USE_IRIDESCENCE
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
#endif`,Bx=`#ifdef USE_BUMPMAP
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
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yx=`#define PI 3.141592653589793
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
} // validated`,$x=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zx=`vec3 transformedNormal = objectNormal;
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
#endif`,Kx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ev="gl_FragColor = linearToOutputTexel( gl_FragColor );",tv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nv=`#ifdef USE_ENVMAP
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
#endif`,iv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sv=`#ifdef USE_ENVMAP
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
#endif`,rv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ov=`#ifdef USE_ENVMAP
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
#endif`,av=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uv=`#ifdef USE_GRADIENTMAP
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
}`,dv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mv=`uniform bool receiveShadow;
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
#endif`,gv=`#ifdef USE_ENVMAP
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
#endif`,xv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_v=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sv=`PhysicalMaterial material;
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
#endif`,Mv=`struct PhysicalMaterial {
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
}`,bv=`
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
#endif`,wv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ev=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Av=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lv=`#if defined( USE_POINTS_UV )
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
#endif`,Fv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ov=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zv=`#ifdef USE_MORPHTARGETS
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
#endif`,kv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qv=`#ifdef USE_NORMALMAP
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
#endif`,Yv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$v=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,o_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l_=`float getShadowMask() {
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
}`,c_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h_=`#ifdef USE_SKINNING
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
#endif`,u_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d_=`#ifdef USE_SKINNING
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
#endif`,f_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x_=`#ifdef USE_TRANSMISSION
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
#endif`,v_=`#ifdef USE_TRANSMISSION
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
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w_=`uniform sampler2D t2D;
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R_=`#include <common>
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
}`,P_=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,I_=`#define DISTANCE
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
}`,D_=`#define DISTANCE
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
}`,L_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`uniform float scale;
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
}`,N_=`uniform vec3 diffuse;
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
}`,O_=`#include <common>
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
}`,B_=`uniform vec3 diffuse;
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
}`,z_=`#define LAMBERT
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
}`,k_=`#define LAMBERT
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
}`,H_=`#define MATCAP
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
}`,V_=`#define MATCAP
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
}`,G_=`#define NORMAL
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
}`,W_=`#define NORMAL
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
}`,X_=`#define PHONG
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
}`,q_=`#define PHONG
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
}`,Y_=`#define STANDARD
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
}`,$_=`#define STANDARD
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
}`,Z_=`#define TOON
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
}`,K_=`#define TOON
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
}`,J_=`uniform float size;
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
}`,Q_=`uniform vec3 diffuse;
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
}`,j_=`#include <common>
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
}`,ey=`uniform vec3 color;
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
}`,ty=`uniform float rotation;
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
}`,ny=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:wx,alphahash_pars_fragment:Ex,alphamap_fragment:Tx,alphamap_pars_fragment:Ax,alphatest_fragment:Cx,alphatest_pars_fragment:Rx,aomap_fragment:Px,aomap_pars_fragment:Ix,batching_pars_vertex:Dx,batching_vertex:Lx,begin_vertex:Fx,beginnormal_vertex:Ux,bsdfs:Nx,iridescence_fragment:Ox,bumpmap_pars_fragment:Bx,clipping_planes_fragment:zx,clipping_planes_pars_fragment:kx,clipping_planes_pars_vertex:Hx,clipping_planes_vertex:Vx,color_fragment:Gx,color_pars_fragment:Wx,color_pars_vertex:Xx,color_vertex:qx,common:Yx,cube_uv_reflection_fragment:$x,defaultnormal_vertex:Zx,displacementmap_pars_vertex:Kx,displacementmap_vertex:Jx,emissivemap_fragment:Qx,emissivemap_pars_fragment:jx,colorspace_fragment:ev,colorspace_pars_fragment:tv,envmap_fragment:nv,envmap_common_pars_fragment:iv,envmap_pars_fragment:sv,envmap_pars_vertex:rv,envmap_physical_pars_fragment:gv,envmap_vertex:ov,fog_vertex:av,fog_pars_vertex:lv,fog_fragment:cv,fog_pars_fragment:hv,gradientmap_pars_fragment:uv,lightmap_pars_fragment:dv,lights_lambert_fragment:fv,lights_lambert_pars_fragment:pv,lights_pars_begin:mv,lights_toon_fragment:xv,lights_toon_pars_fragment:vv,lights_phong_fragment:_v,lights_phong_pars_fragment:yv,lights_physical_fragment:Sv,lights_physical_pars_fragment:Mv,lights_fragment_begin:bv,lights_fragment_maps:wv,lights_fragment_end:Ev,logdepthbuf_fragment:Tv,logdepthbuf_pars_fragment:Av,logdepthbuf_pars_vertex:Cv,logdepthbuf_vertex:Rv,map_fragment:Pv,map_pars_fragment:Iv,map_particle_fragment:Dv,map_particle_pars_fragment:Lv,metalnessmap_fragment:Fv,metalnessmap_pars_fragment:Uv,morphinstance_vertex:Nv,morphcolor_vertex:Ov,morphnormal_vertex:Bv,morphtarget_pars_vertex:zv,morphtarget_vertex:kv,normal_fragment_begin:Hv,normal_fragment_maps:Vv,normal_pars_fragment:Gv,normal_pars_vertex:Wv,normal_vertex:Xv,normalmap_pars_fragment:qv,clearcoat_normal_fragment_begin:Yv,clearcoat_normal_fragment_maps:$v,clearcoat_pars_fragment:Zv,iridescence_pars_fragment:Kv,opaque_fragment:Jv,packing:Qv,premultiplied_alpha_fragment:jv,project_vertex:e_,dithering_fragment:t_,dithering_pars_fragment:n_,roughnessmap_fragment:i_,roughnessmap_pars_fragment:s_,shadowmap_pars_fragment:r_,shadowmap_pars_vertex:o_,shadowmap_vertex:a_,shadowmask_pars_fragment:l_,skinbase_vertex:c_,skinning_pars_vertex:h_,skinning_vertex:u_,skinnormal_vertex:d_,specularmap_fragment:f_,specularmap_pars_fragment:p_,tonemapping_fragment:m_,tonemapping_pars_fragment:g_,transmission_fragment:x_,transmission_pars_fragment:v_,uv_pars_fragment:__,uv_pars_vertex:y_,uv_vertex:S_,worldpos_vertex:M_,background_vert:b_,background_frag:w_,backgroundCube_vert:E_,backgroundCube_frag:T_,cube_vert:A_,cube_frag:C_,depth_vert:R_,depth_frag:P_,distanceRGBA_vert:I_,distanceRGBA_frag:D_,equirect_vert:L_,equirect_frag:F_,linedashed_vert:U_,linedashed_frag:N_,meshbasic_vert:O_,meshbasic_frag:B_,meshlambert_vert:z_,meshlambert_frag:k_,meshmatcap_vert:H_,meshmatcap_frag:V_,meshnormal_vert:G_,meshnormal_frag:W_,meshphong_vert:X_,meshphong_frag:q_,meshphysical_vert:Y_,meshphysical_frag:$_,meshtoon_vert:Z_,meshtoon_frag:K_,points_vert:J_,points_frag:Q_,shadow_vert:j_,shadow_frag:ey,sprite_vert:ty,sprite_frag:ny},me={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},bn={basic:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new oe(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Gt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Gt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new oe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Gt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Gt([me.points,me.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Gt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Gt([me.common,me.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Gt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Gt([me.sprite,me.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Gt([me.common,me.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Gt([me.lights,me.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};bn.physical={uniforms:Gt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Ho={r:0,b:0,g:0},Fi=new dn,iy=new Fe;function sy(r,e,t,n,i,s,o){const a=new oe(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function p(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function x(v){let _=!1;const E=p(v);E===null?m(a,l):E&&E.isColor&&(m(E,1),_=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(v,_){const E=p(_);E&&(E.isCubeTexture||E.mapping===Ws)?(u===void 0&&(u=new pt(new xi(1,1,1),new Et({name:"BackgroundCubeMaterial",uniforms:zs(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Fi.copy(_.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(iy.makeRotationFromEuler(Fi)),u.material.toneMapped=it.getTransfer(E.colorSpace)!==ht,(h!==E||d!==E.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,f=r.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new pt(new es(2,2),new Et({name:"BackgroundMaterial",uniforms:zs(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=it.getTransfer(E.colorSpace)!==ht,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,f=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,_){v.getRGB(Ho,vf(r)),n.buffers.color.setClear(Ho.r,Ho.g,Ho.b,_,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:x,addToRenderList:g,dispose:y}}function ry(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(b,I,U,z,q){let V=!1;const X=h(z,U,I);s!==X&&(s=X,c(s.object)),V=f(b,z,U,q),V&&p(b,z,U,q),q!==null&&e.update(q,r.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(b,I,U,z),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function u(b){return r.deleteVertexArray(b)}function h(b,I,U){const z=U.wireframe===!0;let q=n[b.id];q===void 0&&(q={},n[b.id]=q);let V=q[I.id];V===void 0&&(V={},q[I.id]=V);let X=V[z];return X===void 0&&(X=d(l()),V[z]=X),X}function d(b){const I=[],U=[],z=[];for(let q=0;q<t;q++)I[q]=0,U[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:z,object:b,attributes:{},index:null}}function f(b,I,U,z){const q=s.attributes,V=I.attributes;let X=0;const Z=U.getAttributes();for(const k in Z)if(Z[k].location>=0){const fe=q[k];let Se=V[k];if(Se===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(Se=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(Se=b.instanceColor)),fe===void 0||fe.attribute!==Se||Se&&fe.data!==Se.data)return!0;X++}return s.attributesNum!==X||s.index!==z}function p(b,I,U,z){const q={},V=I.attributes;let X=0;const Z=U.getAttributes();for(const k in Z)if(Z[k].location>=0){let fe=V[k];fe===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(fe=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(fe=b.instanceColor));const Se={};Se.attribute=fe,fe&&fe.data&&(Se.data=fe.data),q[k]=Se,X++}s.attributes=q,s.attributesNum=X,s.index=z}function x(){const b=s.newAttributes;for(let I=0,U=b.length;I<U;I++)b[I]=0}function g(b){m(b,0)}function m(b,I){const U=s.newAttributes,z=s.enabledAttributes,q=s.attributeDivisors;U[b]=1,z[b]===0&&(r.enableVertexAttribArray(b),z[b]=1),q[b]!==I&&(r.vertexAttribDivisor(b,I),q[b]=I)}function y(){const b=s.newAttributes,I=s.enabledAttributes;for(let U=0,z=I.length;U<z;U++)I[U]!==b[U]&&(r.disableVertexAttribArray(U),I[U]=0)}function v(b,I,U,z,q,V,X){X===!0?r.vertexAttribIPointer(b,I,U,q,V):r.vertexAttribPointer(b,I,U,z,q,V)}function _(b,I,U,z){x();const q=z.attributes,V=U.getAttributes(),X=I.defaultAttributeValues;for(const Z in V){const k=V[Z];if(k.location>=0){let ue=q[Z];if(ue===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor)),ue!==void 0){const fe=ue.normalized,Se=ue.itemSize,Ge=e.get(ue);if(Ge===void 0)continue;const We=Ge.buffer,Qe=Ge.type,je=Ge.bytesPerElement,Q=Qe===r.INT||Qe===r.UNSIGNED_INT||ue.gpuType===Va;if(ue.isInterleavedBufferAttribute){const te=ue.data,ge=te.stride,Ae=ue.offset;if(te.isInstancedInterleavedBuffer){for(let Me=0;Me<k.locationSize;Me++)m(k.location+Me,te.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Me=0;Me<k.locationSize;Me++)g(k.location+Me);r.bindBuffer(r.ARRAY_BUFFER,We);for(let Me=0;Me<k.locationSize;Me++)v(k.location+Me,Se/k.locationSize,Qe,fe,ge*je,(Ae+Se/k.locationSize*Me)*je,Q)}else{if(ue.isInstancedBufferAttribute){for(let te=0;te<k.locationSize;te++)m(k.location+te,ue.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let te=0;te<k.locationSize;te++)g(k.location+te);r.bindBuffer(r.ARRAY_BUFFER,We);for(let te=0;te<k.locationSize;te++)v(k.location+te,Se/k.locationSize,Qe,fe,Se*je,Se/k.locationSize*te*je,Q)}}else if(X!==void 0){const fe=X[Z];if(fe!==void 0)switch(fe.length){case 2:r.vertexAttrib2fv(k.location,fe);break;case 3:r.vertexAttrib3fv(k.location,fe);break;case 4:r.vertexAttrib4fv(k.location,fe);break;default:r.vertexAttrib1fv(k.location,fe)}}}}y()}function E(){P();for(const b in n){const I=n[b];for(const U in I){const z=I[U];for(const q in z)u(z[q].object),delete z[q];delete I[U]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;const I=n[b.id];for(const U in I){const z=I[U];for(const q in z)u(z[q].object),delete z[q];delete I[U]}delete n[b.id]}function R(b){for(const I in n){const U=n[I];if(U[b.id]===void 0)continue;const z=U[b.id];for(const q in z)u(z[q].object),delete z[q];delete U[b.id]}}function P(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function oy(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x]*d[x];t.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ay(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==Bt&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const P=R===mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==vn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==jt&&!P)}function l(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:E,maxSamples:A}}function ly(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new li,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!g)s?u(null):c();else{const y=s?0:n,v=y*4;let _=m.clippingState||null;l.value=_,_=u(p,d,v,f);for(let E=0;E!==v;++E)_[E]=t[E];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){const x=h!==null?h.length:0;let g=null;if(x!==0){if(g=l.value,p!==!0||g===null){const m=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,_=f;v!==x;++v,_+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function cy(r){let e=new WeakMap;function t(o,a){return a===Er?o.mapping=Jn:a===Tr&&(o.mapping=ui),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Er||a===Tr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new yf(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Is=4,Vu=[.125,.215,.35,.446,.526,.582],zi=20,rc=new $s,Gu=new oe;let oc=null,ac=0,lc=0,cc=!1;const Bi=(1+Math.sqrt(5))/2,ws=1/Bi,Wu=[new T(-Bi,ws,0),new T(Bi,ws,0),new T(-ws,0,Bi),new T(ws,0,Bi),new T(0,Bi,-ws),new T(0,Bi,ws),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],hy=new T;class Cc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=hy}=s;oc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oc,ac,lc),this._renderer.xr.enabled=cc,e.scissorTest=!1,Vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jn||e.mapping===ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xt,minFilter:xt,generateMipmaps:!1,type:mi,format:Bt,colorSpace:Ji,depthBuffer:!1},i=Xu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uy(s)),this._blurMaterial=dy(s,e,t)}return i}_compileMaterial(e){const t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,rc)}_sceneToCubeUV(e,t,n,i,s){const l=new Pt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Gu),h.toneMapping=$n,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const x=new xn({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new pt(new xi,x);let m=!1;const y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,m=!0):(x.color.copy(Gu),m=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[v],s.y,s.z)):_===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[v]));const E=this._cubeSize;Vo(i,_*E,v>2?E:0,E,E),h.setRenderTarget(i),m&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Jn||e.mapping===ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qu());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Vo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,rc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Wu[(i-s-1)%Wu.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new pt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*zi-1),x=s/p,g=isFinite(s)?1+Math.floor(u*x):zi;g>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${zi}`);const m=[];let y=0;for(let R=0;R<zi;++R){const P=R/x,M=Math.exp(-P*P/2);m.push(M),R===0?y+=M:R<g&&(y+=2*M)}for(let R=0;R<m.length;R++)m[R]=m[R]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-n;const _=this._sizeLods[i],E=3*_*(i>v-Is?i-v+Is:0),A=4*(this._cubeSize-_);Vo(t,E,A,3*_,2*_),l.setRenderTarget(t),l.render(h,rc)}}function uy(r){const e=[],t=[],n=[];let i=r;const s=r-Is+1+Vu.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Is?l=Vu[o-r+Is-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,x=3,g=2,m=1,y=new Float32Array(x*p*f),v=new Float32Array(g*p*f),_=new Float32Array(m*p*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,P=A>2?0:-1,M=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];y.set(M,x*p*A),v.set(d,g*p*A);const b=[A,A,A,A,A,A];_.set(b,m*p*A)}const E=new $e;E.setAttribute("position",new dt(y,x)),E.setAttribute("uv",new dt(v,g)),E.setAttribute("faceIndex",new dt(_,m)),e.push(E),i>Is&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xu(r,e,t){const n=new un(r,e,t);return n.texture.mapping=Ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function dy(r,e,t){const n=new Float32Array(zi),i=new T(0,1,0);return new Et({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function qu(){return new Et({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Yu(){return new Et({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function yh(){return`

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
	`}function fy(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Er||l===Tr,u=l===Jn||l===ui;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Cc(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Cc(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function py(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Dr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function my(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,p=h.attributes.position;let x=0;if(f!==null){const y=f.array;x=f.version;for(let v=0,_=y.length;v<_;v+=3){const E=y[v+0],A=y[v+1],R=y[v+2];d.push(E,A,A,R,R,E)}}else if(p!==void 0){const y=p.array;x=p.version;for(let v=0,_=y.length/3-1;v<_;v+=3){const E=v+0,A=v+1,R=v+2;d.push(E,A,A,R,R,E)}}else return;const g=new(pf(d)?Yc:qc)(d,1);g.version=x;const m=s.get(h);m&&e.remove(m),s.set(h,g)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function gy(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,p){p!==0&&(r.drawElementsInstanced(n,f,s,d*o,p),t.update(f,n,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}function h(d,f,p,x){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,x,0,p);let m=0;for(let y=0;y<p;y++)m+=f[y]*x[y];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function xy(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function vy(r,e,t){const n=new WeakMap,i=new nt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let b=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let _=0;p===!0&&(_=1),x===!0&&(_=2),g===!0&&(_=3);let E=a.attributes.position.count*_,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*A*4*h),P=new $a(R,E,A,h);P.type=jt,P.needsUpdate=!0;const M=_*4;for(let I=0;I<h;I++){const U=m[I],z=y[I],q=v[I],V=E*A*4*I;for(let X=0;X<U.count;X++){const Z=X*M;p===!0&&(i.fromBufferAttribute(U,X),R[V+Z+0]=i.x,R[V+Z+1]=i.y,R[V+Z+2]=i.z,R[V+Z+3]=0),x===!0&&(i.fromBufferAttribute(z,X),R[V+Z+4]=i.x,R[V+Z+5]=i.y,R[V+Z+6]=i.z,R[V+Z+7]=0),g===!0&&(i.fromBufferAttribute(q,X),R[V+Z+8]=i.x,R[V+Z+9]=i.y,R[V+Z+10]=i.z,R[V+Z+11]=q.itemSize===4?i.w:1)}}d={count:h,texture:P,size:new J(E,A)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const x=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",x),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function _y(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const yp=new bt,$u=new il(1,1),Sp=new $a,Mp=new Za,bp=new Wr,Zu=[],Ku=[],Ju=new Float32Array(16),Qu=new Float32Array(9),ju=new Float32Array(4);function Zs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Zu[i];if(s===void 0&&(s=new Float32Array(i),Zu[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function At(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ct(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function xl(r,e){let t=Ku[e];t===void 0&&(t=new Int32Array(e),Ku[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function yy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Sy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2fv(this.addr,e),Ct(t,e)}}function My(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;r.uniform3fv(this.addr,e),Ct(t,e)}}function by(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4fv(this.addr,e),Ct(t,e)}}function wy(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;ju.set(n),r.uniformMatrix2fv(this.addr,!1,ju),Ct(t,n)}}function Ey(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;Qu.set(n),r.uniformMatrix3fv(this.addr,!1,Qu),Ct(t,n)}}function Ty(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;Ju.set(n),r.uniformMatrix4fv(this.addr,!1,Ju),Ct(t,n)}}function Ay(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Cy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2iv(this.addr,e),Ct(t,e)}}function Ry(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3iv(this.addr,e),Ct(t,e)}}function Py(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4iv(this.addr,e),Ct(t,e)}}function Iy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Dy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2uiv(this.addr,e),Ct(t,e)}}function Ly(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3uiv(this.addr,e),Ct(t,e)}}function Fy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4uiv(this.addr,e),Ct(t,e)}}function Uy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?($u.compareFunction=Gc,s=$u):s=yp,t.setTexture2D(e||s,i)}function Ny(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Mp,i)}function Oy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bp,i)}function By(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sp,i)}function zy(r){switch(r){case 5126:return yy;case 35664:return Sy;case 35665:return My;case 35666:return by;case 35674:return wy;case 35675:return Ey;case 35676:return Ty;case 5124:case 35670:return Ay;case 35667:case 35671:return Cy;case 35668:case 35672:return Ry;case 35669:case 35673:return Py;case 5125:return Iy;case 36294:return Dy;case 36295:return Ly;case 36296:return Fy;case 35678:case 36198:case 36298:case 36306:case 35682:return Uy;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return Oy;case 36289:case 36303:case 36311:case 36292:return By}}function ky(r,e){r.uniform1fv(this.addr,e)}function Hy(r,e){const t=Zs(e,this.size,2);r.uniform2fv(this.addr,t)}function Vy(r,e){const t=Zs(e,this.size,3);r.uniform3fv(this.addr,t)}function Gy(r,e){const t=Zs(e,this.size,4);r.uniform4fv(this.addr,t)}function Wy(r,e){const t=Zs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Xy(r,e){const t=Zs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function qy(r,e){const t=Zs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Yy(r,e){r.uniform1iv(this.addr,e)}function $y(r,e){r.uniform2iv(this.addr,e)}function Zy(r,e){r.uniform3iv(this.addr,e)}function Ky(r,e){r.uniform4iv(this.addr,e)}function Jy(r,e){r.uniform1uiv(this.addr,e)}function Qy(r,e){r.uniform2uiv(this.addr,e)}function jy(r,e){r.uniform3uiv(this.addr,e)}function eS(r,e){r.uniform4uiv(this.addr,e)}function tS(r,e,t){const n=this.cache,i=e.length,s=xl(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||yp,s[o])}function nS(r,e,t){const n=this.cache,i=e.length,s=xl(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Mp,s[o])}function iS(r,e,t){const n=this.cache,i=e.length,s=xl(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||bp,s[o])}function sS(r,e,t){const n=this.cache,i=e.length,s=xl(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Sp,s[o])}function rS(r){switch(r){case 5126:return ky;case 35664:return Hy;case 35665:return Vy;case 35666:return Gy;case 35674:return Wy;case 35675:return Xy;case 35676:return qy;case 5124:case 35670:return Yy;case 35667:case 35671:return $y;case 35668:case 35672:return Zy;case 35669:case 35673:return Ky;case 5125:return Jy;case 36294:return Qy;case 36295:return jy;case 36296:return eS;case 35678:case 36198:case 36298:case 36306:case 35682:return tS;case 35679:case 36299:case 36307:return nS;case 35680:case 36300:case 36308:case 36293:return iS;case 36289:case 36303:case 36311:case 36292:return sS}}class oS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zy(t.type)}}class aS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rS(t.type)}}class lS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const hc=/(\w+)(\])?(\[|\.)?/g;function ed(r,e){r.seq.push(e),r.map[e.id]=e}function cS(r,e,t){const n=r.name,i=n.length;for(hc.lastIndex=0;;){const s=hc.exec(n),o=hc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ed(t,c===void 0?new oS(a,r,e):new aS(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new lS(a),ed(t,h)),t=h}}}class $o{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);cS(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function td(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const hS=37297;let uS=0;function dS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const nd=new Ye;function fS(r){it._getMatrix(nd,it.workingColorSpace,r);const e=`mat3( ${nd.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(r)){case Rr:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function id(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+dS(r.getShaderSource(e),a)}else return s}function pS(r,e){const t=fS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mS(r,e){let t;switch(e){case Xd:t="Linear";break;case qd:t="Reinhard";break;case Yd:t="Cineon";break;case $d:t="ACESFilmic";break;case Kd:t="AgX";break;case Jd:t="Neutral";break;case Zd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Go=new T;function gS(){it.getLuminanceCoefficients(Go);const r=Go.x.toFixed(4),e=Go.y.toFixed(4),t=Go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function vS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _S(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function fr(r){return r!==""}function sd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(r){return r.replace(yS,MS)}const SS=new Map;function MS(r,e){let t=Je[e];if(t===void 0){const n=SS.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rc(t)}const bS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function od(r){return r.replace(bS,wS)}function wS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ad(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ES(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Lc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===wd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function TS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Jn:case ui:e="ENVMAP_TYPE_CUBE";break;case Ws:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ui:e="ENVMAP_MODE_REFRACTION";break}return e}function CS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case kr:e="ENVMAP_BLENDING_MULTIPLY";break;case Gd:e="ENVMAP_BLENDING_MIX";break;case Wd:e="ENVMAP_BLENDING_ADD";break}return e}function RS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function PS(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ES(t),c=TS(t),u=AS(t),h=CS(t),d=RS(t),f=xS(t),p=vS(s),x=i.createProgram();let g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(fr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(fr).join(`
`),m.length>0&&(m+=`
`)):(g=[ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),m=[ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?Je.tonemapping_pars_fragment:"",t.toneMapping!==$n?mS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,pS("linearToOutputTexel",t.outputColorSpace),gS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),o=Rc(o),o=sd(o,t),o=rd(o,t),a=Rc(a),a=sd(a,t),a=rd(a,t),o=od(o),a=od(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=y+g+o,_=y+m+a,E=td(i,i.VERTEX_SHADER,v),A=td(i,i.FRAGMENT_SHADER,_);i.attachShader(x,E),i.attachShader(x,A),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(I){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(x)||"",z=i.getShaderInfoLog(E)||"",q=i.getShaderInfoLog(A)||"",V=U.trim(),X=z.trim(),Z=q.trim();let k=!0,ue=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,E,A);else{const fe=id(i,E,"vertex"),Se=id(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+fe+`
`+Se)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(X===""||Z==="")&&(ue=!1);ue&&(I.diagnostics={runnable:k,programLog:V,vertexShader:{log:X,prefix:g},fragmentShader:{log:Z,prefix:m}})}i.deleteShader(E),i.deleteShader(A),P=new $o(i,x),M=_S(i,x)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(x,hS)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=A,this}let IS=0;class DS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new LS(e),t.set(e,n)),n}}class LS{constructor(e){this.id=IS++,this.code=e,this.usedTimes=0}}function FS(r,e,t,n,i,s,o){const a=new Ka,l=new DS,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,b,I,U,z){const q=U.fog,V=z.geometry,X=M.isMeshStandardMaterial?U.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),k=Z&&Z.mapping===Ws?Z.image.height:null,ue=p[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const fe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Se=fe!==void 0?fe.length:0;let Ge=0;V.morphAttributes.position!==void 0&&(Ge=1),V.morphAttributes.normal!==void 0&&(Ge=2),V.morphAttributes.color!==void 0&&(Ge=3);let We,Qe,je,Q;if(ue){const ct=bn[ue];We=ct.vertexShader,Qe=ct.fragmentShader}else We=M.vertexShader,Qe=M.fragmentShader,l.update(M),je=l.getVertexShaderID(M),Q=l.getFragmentShaderID(M);const te=r.getRenderTarget(),ge=r.state.buffers.depth.getReversed(),Ae=z.isInstancedMesh===!0,Me=z.isBatchedMesh===!0,He=!!M.map,lt=!!M.matcap,D=!!Z,se=!!M.aoMap,ee=!!M.lightMap,j=!!M.bumpMap,L=!!M.normalMap,$=!!M.displacementMap,re=!!M.emissiveMap,K=!!M.metalnessMap,Ue=!!M.roughnessMap,Ne=M.anisotropy>0,C=M.clearcoat>0,S=M.dispersion>0,O=M.iridescence>0,H=M.sheen>0,ne=M.transmission>0,Y=Ne&&!!M.anisotropyMap,Ce=C&&!!M.clearcoatMap,de=C&&!!M.clearcoatNormalMap,ve=C&&!!M.clearcoatRoughnessMap,Te=O&&!!M.iridescenceMap,ae=O&&!!M.iridescenceThicknessMap,ye=H&&!!M.sheenColorMap,ke=H&&!!M.sheenRoughnessMap,Ie=!!M.specularMap,xe=!!M.specularColorMap,Ke=!!M.specularIntensityMap,F=ne&&!!M.transmissionMap,he=ne&&!!M.thicknessMap,pe=!!M.gradientMap,Ee=!!M.alphaMap,le=M.alphaTest>0,ie=!!M.alphaHash,Pe=!!M.extensions;let qe=$n;M.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(qe=r.toneMapping);const mt={shaderID:ue,shaderType:M.type,shaderName:M.name,vertexShader:We,fragmentShader:Qe,defines:M.defines,customVertexShaderID:je,customFragmentShaderID:Q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Me,batchingColor:Me&&z._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&z.instanceColor!==null,instancingMorph:Ae&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ji,alphaToCoverage:!!M.alphaToCoverage,map:He,matcap:lt,envMap:D,envMapMode:D&&Z.mapping,envMapCubeUVHeight:k,aoMap:se,lightMap:ee,bumpMap:j,normalMap:L,displacementMap:d&&$,emissiveMap:re,normalMapObjectSpace:L&&M.normalMapType===of,normalMapTangentSpace:L&&M.normalMapType===gi,metalnessMap:K,roughnessMap:Ue,anisotropy:Ne,anisotropyMap:Y,clearcoat:C,clearcoatMap:Ce,clearcoatNormalMap:de,clearcoatRoughnessMap:ve,dispersion:S,iridescence:O,iridescenceMap:Te,iridescenceThicknessMap:ae,sheen:H,sheenColorMap:ye,sheenRoughnessMap:ke,specularMap:Ie,specularColorMap:xe,specularIntensityMap:Ke,transmission:ne,transmissionMap:F,thicknessMap:he,gradientMap:pe,opaque:M.transparent===!1&&M.blending===Wi&&M.alphaToCoverage===!1,alphaMap:Ee,alphaTest:le,alphaHash:ie,combine:M.combine,mapUv:He&&x(M.map.channel),aoMapUv:se&&x(M.aoMap.channel),lightMapUv:ee&&x(M.lightMap.channel),bumpMapUv:j&&x(M.bumpMap.channel),normalMapUv:L&&x(M.normalMap.channel),displacementMapUv:$&&x(M.displacementMap.channel),emissiveMapUv:re&&x(M.emissiveMap.channel),metalnessMapUv:K&&x(M.metalnessMap.channel),roughnessMapUv:Ue&&x(M.roughnessMap.channel),anisotropyMapUv:Y&&x(M.anisotropyMap.channel),clearcoatMapUv:Ce&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:de&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:ke&&x(M.sheenRoughnessMap.channel),specularMapUv:Ie&&x(M.specularMap.channel),specularColorMapUv:xe&&x(M.specularColorMap.channel),specularIntensityMapUv:Ke&&x(M.specularIntensityMap.channel),transmissionMapUv:F&&x(M.transmissionMap.channel),thicknessMapUv:he&&x(M.thicknessMap.channel),alphaMapUv:Ee&&x(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(L||Ne),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!V.attributes.uv&&(He||Ee),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ge,skinning:z.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ge,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:qe,decodeVideoTexture:He&&M.map.isVideoTexture===!0&&it.getTransfer(M.map.colorSpace)===ht,decodeVideoTextureEmissive:re&&M.emissiveMap.isVideoTexture===!0&&it.getTransfer(M.emissiveMap.colorSpace)===ht,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ln,flipSided:M.side===It,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Pe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&M.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function m(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)b.push(I),b.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(y(b,M),v(b,M),b.push(r.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function y(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function v(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){const b=p[M.type];let I;if(b){const U=bn[b];I=Gr.clone(U.uniforms)}else I=M.uniforms;return I}function E(M,b){let I;for(let U=0,z=u.length;U<z;U++){const q=u[U];if(q.cacheKey===b){I=q,++I.usedTimes;break}}return I===void 0&&(I=new PS(r,b,M,s),u.push(I)),I}function A(M){if(--M.usedTimes===0){const b=u.indexOf(M);u[b]=u[u.length-1],u.pop(),M.destroy()}}function R(M){l.remove(M)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:E,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:P}}function US(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function NS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ld(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function cd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,p,x,g){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:x,group:g},r[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=x,m.group=g),e++,m}function a(h,d,f,p,x,g){const m=o(h,d,f,p,x,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(h,d,f,p,x,g){const m=o(h,d,f,p,x,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||NS),n.length>1&&n.sort(d||ld),i.length>1&&i.sort(d||ld)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function OS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new cd,r.set(n,[o])):i>=s.length?(o=new cd,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function BS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new oe};break;case"SpotLight":t={position:new T,direction:new T,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":t={color:new oe,position:new T,halfWidth:new T,halfHeight:new T};break}return r[e.id]=t,t}}}function zS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let kS=0;function HS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function VS(r){const e=new BS,t=zS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const i=new T,s=new Fe,o=new Fe;function a(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,y=0,v=0,_=0,E=0,A=0,R=0;c.sort(HS);for(let M=0,b=c.length;M<b;M++){const I=c[M],U=I.color,z=I.intensity,q=I.distance,V=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=U.r*z,h+=U.g*z,d+=U.b*z;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],z);R++}else if(I.isDirectionalLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Z=I.shadow,k=t.get(I);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=I.shadow.matrix,y++}n.directional[f]=X,f++}else if(I.isSpotLight){const X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(U).multiplyScalar(z),X.distance=q,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[x]=X;const Z=I.shadow;if(I.map&&(n.spotLightMap[E]=I.map,E++,Z.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[x]=Z.matrix,I.castShadow){const k=t.get(I);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=V,_++}x++}else if(I.isRectAreaLight){const X=e.get(I);X.color.copy(U).multiplyScalar(z),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=X,g++}else if(I.isPointLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){const Z=I.shadow,k=t.get(I);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,k.shadowCameraNear=Z.camera.near,k.shadowCameraFar=Z.camera.far,n.pointShadow[p]=k,n.pointShadowMap[p]=V,n.pointShadowMatrix[p]=I.shadow.matrix,v++}n.point[p]=X,p++}else if(I.isHemisphereLight){const X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(z),X.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[m]=X,m++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==p||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==m||P.numDirectionalShadows!==y||P.numPointShadows!==v||P.numSpotShadows!==_||P.numSpotMaps!==E||P.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,P.directionalLength=f,P.pointLength=p,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=m,P.numDirectionalShadows=y,P.numPointShadows=v,P.numSpotShadows=_,P.numSpotMaps=E,P.numLightProbes=R,n.version=kS++)}function l(c,u){let h=0,d=0,f=0,p=0,x=0;const g=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const v=c[m];if(v.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),h++}else if(v.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),f++}else if(v.isRectAreaLight){const _=n.rectArea[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function hd(r){const e=new VS(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function GS(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new hd(r),e.set(i,[a])):s>=o.length?(a=new hd(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const WS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XS=`uniform sampler2D shadow_pass;
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
}`;function qS(r,e,t){let n=new qs;const i=new J,s=new J,o=new nt,a=new oh({depthPacking:rf}),l=new ah,c={},u=t.maxTextureSize,h={[Kn]:It,[It]:Kn,[Ln]:Ln},d=new Et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:WS,fragmentShader:XS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new $e;p.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new pt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lc;let m=this.type;this.render=function(A,R,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const M=r.getRenderTarget(),b=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),U=r.state;U.setBlending(Un),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=m!==Dn&&this.type===Dn,q=m===Dn&&this.type!==Dn;for(let V=0,X=A.length;V<X;V++){const Z=A[V],k=Z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const ue=k.getFrameExtents();if(i.multiply(ue),s.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ue.x),i.x=s.x*ue.x,k.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ue.y),i.y=s.y*ue.y,k.mapSize.y=s.y)),k.map===null||z===!0||q===!0){const Se=this.type!==Dn?{minFilter:Lt,magFilter:Lt}:{};k.map!==null&&k.map.dispose(),k.map=new un(i.x,i.y,Se),k.map.texture.name=Z.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const fe=k.getViewportCount();for(let Se=0;Se<fe;Se++){const Ge=k.getViewport(Se);o.set(s.x*Ge.x,s.y*Ge.y,s.x*Ge.z,s.y*Ge.w),U.viewport(o),k.updateMatrices(Z,Se),n=k.getFrustum(),_(R,P,k.camera,Z,this.type)}k.isPointLightShadow!==!0&&this.type===Dn&&y(k,P),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(M,b,I)};function y(A,R){const P=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new un(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(R,null,P,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(R,null,P,f,x,null)}function v(A,R,P,M){let b=null;const I=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)b=I;else if(b=P.isPointLight===!0?l:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=b.uuid,z=R.uuid;let q=c[U];q===void 0&&(q={},c[U]=q);let V=q[z];V===void 0&&(V=b.clone(),q[z]=V,R.addEventListener("dispose",E)),b=V}if(b.visible=R.visible,b.wireframe=R.wireframe,M===Dn?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:h[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const U=r.properties.get(b);U.light=P}return b}function _(A,R,P,M,b){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Dn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const z=e.update(A),q=A.material;if(Array.isArray(q)){const V=z.groups;for(let X=0,Z=V.length;X<Z;X++){const k=V[X],ue=q[k.materialIndex];if(ue&&ue.visible){const fe=v(A,ue,M,b);A.onBeforeShadow(r,A,R,P,z,fe,k),r.renderBufferDirect(P,null,z,fe,A,k),A.onAfterShadow(r,A,R,P,z,fe,k)}}}else if(q.visible){const V=v(A,q,M,b);A.onBeforeShadow(r,A,R,P,z,V,null),r.renderBufferDirect(P,null,z,V,A,null),A.onAfterShadow(r,A,R,P,z,V,null)}}const U=A.children;for(let z=0,q=U.length;z<q;z++)_(U[z],R,P,M,b)}function E(A){A.target.removeEventListener("dispose",E);for(const P in c){const M=c[P],b=A.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const YS={[jo]:ea,[ta]:sa,[na]:ra,[Yi]:ia,[ea]:jo,[sa]:ta,[ra]:na,[ia]:Yi};function $S(r,e){function t(){let F=!1;const he=new nt;let pe=null;const Ee=new nt(0,0,0,0);return{setMask:function(le){pe!==le&&!F&&(r.colorMask(le,le,le,le),pe=le)},setLocked:function(le){F=le},setClear:function(le,ie,Pe,qe,mt){mt===!0&&(le*=qe,ie*=qe,Pe*=qe),he.set(le,ie,Pe,qe),Ee.equals(he)===!1&&(r.clearColor(le,ie,Pe,qe),Ee.copy(he))},reset:function(){F=!1,pe=null,Ee.set(-1,0,0,0)}}}function n(){let F=!1,he=!1,pe=null,Ee=null,le=null;return{setReversed:function(ie){if(he!==ie){const Pe=e.get("EXT_clip_control");ie?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),he=ie;const qe=le;le=null,this.setClear(qe)}},getReversed:function(){return he},setTest:function(ie){ie?te(r.DEPTH_TEST):ge(r.DEPTH_TEST)},setMask:function(ie){pe!==ie&&!F&&(r.depthMask(ie),pe=ie)},setFunc:function(ie){if(he&&(ie=YS[ie]),Ee!==ie){switch(ie){case jo:r.depthFunc(r.NEVER);break;case ea:r.depthFunc(r.ALWAYS);break;case ta:r.depthFunc(r.LESS);break;case Yi:r.depthFunc(r.LEQUAL);break;case na:r.depthFunc(r.EQUAL);break;case ia:r.depthFunc(r.GEQUAL);break;case sa:r.depthFunc(r.GREATER);break;case ra:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ee=ie}},setLocked:function(ie){F=ie},setClear:function(ie){le!==ie&&(he&&(ie=1-ie),r.clearDepth(ie),le=ie)},reset:function(){F=!1,pe=null,Ee=null,le=null,he=!1}}}function i(){let F=!1,he=null,pe=null,Ee=null,le=null,ie=null,Pe=null,qe=null,mt=null;return{setTest:function(ct){F||(ct?te(r.STENCIL_TEST):ge(r.STENCIL_TEST))},setMask:function(ct){he!==ct&&!F&&(r.stencilMask(ct),he=ct)},setFunc:function(ct,Bn,Cn){(pe!==ct||Ee!==Bn||le!==Cn)&&(r.stencilFunc(ct,Bn,Cn),pe=ct,Ee=Bn,le=Cn)},setOp:function(ct,Bn,Cn){(ie!==ct||Pe!==Bn||qe!==Cn)&&(r.stencilOp(ct,Bn,Cn),ie=ct,Pe=Bn,qe=Cn)},setLocked:function(ct){F=ct},setClear:function(ct){mt!==ct&&(r.clearStencil(ct),mt=ct)},reset:function(){F=!1,he=null,pe=null,Ee=null,le=null,ie=null,Pe=null,qe=null,mt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,y=null,v=null,_=null,E=null,A=null,R=new oe(0,0,0),P=0,M=!1,b=null,I=null,U=null,z=null,q=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),X=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),X=Z>=2);let ue=null,fe={};const Se=r.getParameter(r.SCISSOR_BOX),Ge=r.getParameter(r.VIEWPORT),We=new nt().fromArray(Se),Qe=new nt().fromArray(Ge);function je(F,he,pe,Ee){const le=new Uint8Array(4),ie=r.createTexture();r.bindTexture(F,ie),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Pe=0;Pe<pe;Pe++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,Ee,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(he+Pe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return ie}const Q={};Q[r.TEXTURE_2D]=je(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=je(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=je(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=je(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(r.DEPTH_TEST),o.setFunc(Yi),j(!1),L(mc),te(r.CULL_FACE),se(Un);function te(F){u[F]!==!0&&(r.enable(F),u[F]=!0)}function ge(F){u[F]!==!1&&(r.disable(F),u[F]=!1)}function Ae(F,he){return h[F]!==he?(r.bindFramebuffer(F,he),h[F]=he,F===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=he),F===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=he),!0):!1}function Me(F,he){let pe=f,Ee=!1;if(F){pe=d.get(he),pe===void 0&&(pe=[],d.set(he,pe));const le=F.textures;if(pe.length!==le.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let ie=0,Pe=le.length;ie<Pe;ie++)pe[ie]=r.COLOR_ATTACHMENT0+ie;pe.length=le.length,Ee=!0}}else pe[0]!==r.BACK&&(pe[0]=r.BACK,Ee=!0);Ee&&r.drawBuffers(pe)}function He(F){return p!==F?(r.useProgram(F),p=F,!0):!1}const lt={[ci]:r.FUNC_ADD,[Td]:r.FUNC_SUBTRACT,[Ad]:r.FUNC_REVERSE_SUBTRACT};lt[Cd]=r.MIN,lt[Rd]=r.MAX;const D={[Pd]:r.ZERO,[Id]:r.ONE,[Dd]:r.SRC_COLOR,[Jo]:r.SRC_ALPHA,[Bd]:r.SRC_ALPHA_SATURATE,[Nd]:r.DST_COLOR,[Fd]:r.DST_ALPHA,[Ld]:r.ONE_MINUS_SRC_COLOR,[Qo]:r.ONE_MINUS_SRC_ALPHA,[Od]:r.ONE_MINUS_DST_COLOR,[Ud]:r.ONE_MINUS_DST_ALPHA,[zd]:r.CONSTANT_COLOR,[kd]:r.ONE_MINUS_CONSTANT_COLOR,[Hd]:r.CONSTANT_ALPHA,[Vd]:r.ONE_MINUS_CONSTANT_ALPHA};function se(F,he,pe,Ee,le,ie,Pe,qe,mt,ct){if(F===Un){x===!0&&(ge(r.BLEND),x=!1);return}if(x===!1&&(te(r.BLEND),x=!0),F!==Ed){if(F!==g||ct!==M){if((m!==ci||_!==ci)&&(r.blendEquation(r.FUNC_ADD),m=ci,_=ci),ct)switch(F){case Wi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wr:r.blendFunc(r.ONE,r.ONE);break;case gc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case xc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Wi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case gc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,v=null,E=null,A=null,R.set(0,0,0),P=0,g=F,M=ct}return}le=le||he,ie=ie||pe,Pe=Pe||Ee,(he!==m||le!==_)&&(r.blendEquationSeparate(lt[he],lt[le]),m=he,_=le),(pe!==y||Ee!==v||ie!==E||Pe!==A)&&(r.blendFuncSeparate(D[pe],D[Ee],D[ie],D[Pe]),y=pe,v=Ee,E=ie,A=Pe),(qe.equals(R)===!1||mt!==P)&&(r.blendColor(qe.r,qe.g,qe.b,mt),R.copy(qe),P=mt),g=F,M=!1}function ee(F,he){F.side===Ln?ge(r.CULL_FACE):te(r.CULL_FACE);let pe=F.side===It;he&&(pe=!pe),j(pe),F.blending===Wi&&F.transparent===!1?se(Un):se(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const Ee=F.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),re(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):ge(r.SAMPLE_ALPHA_TO_COVERAGE)}function j(F){b!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),b=F)}function L(F){F!==Md?(te(r.CULL_FACE),F!==I&&(F===mc?r.cullFace(r.BACK):F===bd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ge(r.CULL_FACE),I=F}function $(F){F!==U&&(X&&r.lineWidth(F),U=F)}function re(F,he,pe){F?(te(r.POLYGON_OFFSET_FILL),(z!==he||q!==pe)&&(r.polygonOffset(he,pe),z=he,q=pe)):ge(r.POLYGON_OFFSET_FILL)}function K(F){F?te(r.SCISSOR_TEST):ge(r.SCISSOR_TEST)}function Ue(F){F===void 0&&(F=r.TEXTURE0+V-1),ue!==F&&(r.activeTexture(F),ue=F)}function Ne(F,he,pe){pe===void 0&&(ue===null?pe=r.TEXTURE0+V-1:pe=ue);let Ee=fe[pe];Ee===void 0&&(Ee={type:void 0,texture:void 0},fe[pe]=Ee),(Ee.type!==F||Ee.texture!==he)&&(ue!==pe&&(r.activeTexture(pe),ue=pe),r.bindTexture(F,he||Q[F]),Ee.type=F,Ee.texture=he)}function C(){const F=fe[ue];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function O(){try{r.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function H(){try{r.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{r.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{r.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{r.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{r.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{r.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{r.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{r.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(F){We.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),We.copy(F))}function ke(F){Qe.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Qe.copy(F))}function Ie(F,he){let pe=c.get(he);pe===void 0&&(pe=new WeakMap,c.set(he,pe));let Ee=pe.get(F);Ee===void 0&&(Ee=r.getUniformBlockIndex(he,F.name),pe.set(F,Ee))}function xe(F,he){const Ee=c.get(he).get(F);l.get(he)!==Ee&&(r.uniformBlockBinding(he,Ee,F.__bindingPointIndex),l.set(he,Ee))}function Ke(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ue=null,fe={},h={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,y=null,v=null,_=null,E=null,A=null,R=new oe(0,0,0),P=0,M=!1,b=null,I=null,U=null,z=null,q=null,We.set(0,0,r.canvas.width,r.canvas.height),Qe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:ge,bindFramebuffer:Ae,drawBuffers:Me,useProgram:He,setBlending:se,setMaterial:ee,setFlipSided:j,setCullFace:L,setLineWidth:$,setPolygonOffset:re,setScissorTest:K,activeTexture:Ue,bindTexture:Ne,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:O,texImage2D:Te,texImage3D:ae,updateUBOMapping:Ie,uniformBlockBinding:xe,texStorage2D:de,texStorage3D:ve,texSubImage2D:H,texSubImage3D:ne,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ce,scissor:ye,viewport:ke,reset:Ke}}function ZS(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new J,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,S){return f?new OffscreenCanvas(C,S):Ir("canvas")}function x(C,S,O){let H=1;const ne=Ne(C);if((ne.width>O||ne.height>O)&&(H=O/Math.max(ne.width,ne.height)),H<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(H*ne.width),Ce=Math.floor(H*ne.height);h===void 0&&(h=p(Y,Ce));const de=S?p(Y,Ce):h;return de.width=Y,de.height=Ce,de.getContext("2d").drawImage(C,0,0,Y,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Y+"x"+Ce+")."),de}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function g(C){return C.generateMipmaps}function m(C){r.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(C,S,O,H,ne=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=S;if(S===r.RED&&(O===r.FLOAT&&(Y=r.R32F),O===r.HALF_FLOAT&&(Y=r.R16F),O===r.UNSIGNED_BYTE&&(Y=r.R8)),S===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.R8UI),O===r.UNSIGNED_SHORT&&(Y=r.R16UI),O===r.UNSIGNED_INT&&(Y=r.R32UI),O===r.BYTE&&(Y=r.R8I),O===r.SHORT&&(Y=r.R16I),O===r.INT&&(Y=r.R32I)),S===r.RG&&(O===r.FLOAT&&(Y=r.RG32F),O===r.HALF_FLOAT&&(Y=r.RG16F),O===r.UNSIGNED_BYTE&&(Y=r.RG8)),S===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RG8UI),O===r.UNSIGNED_SHORT&&(Y=r.RG16UI),O===r.UNSIGNED_INT&&(Y=r.RG32UI),O===r.BYTE&&(Y=r.RG8I),O===r.SHORT&&(Y=r.RG16I),O===r.INT&&(Y=r.RG32I)),S===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),O===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),O===r.UNSIGNED_INT&&(Y=r.RGB32UI),O===r.BYTE&&(Y=r.RGB8I),O===r.SHORT&&(Y=r.RGB16I),O===r.INT&&(Y=r.RGB32I)),S===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),O===r.UNSIGNED_INT&&(Y=r.RGBA32UI),O===r.BYTE&&(Y=r.RGBA8I),O===r.SHORT&&(Y=r.RGBA16I),O===r.INT&&(Y=r.RGBA32I)),S===r.RGB&&(O===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),O===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),S===r.RGBA){const Ce=ne?Rr:it.getTransfer(H);O===r.FLOAT&&(Y=r.RGBA32F),O===r.HALF_FLOAT&&(Y=r.RGBA16F),O===r.UNSIGNED_BYTE&&(Y=Ce===ht?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(C,S){let O;return C?S===null||S===Qn||S===Ki?O=r.DEPTH24_STENCIL8:S===jt?O=r.DEPTH32F_STENCIL8:S===Fs&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Qn||S===Ki?O=r.DEPTH_COMPONENT24:S===jt?O=r.DEPTH_COMPONENT32F:S===Fs&&(O=r.DEPTH_COMPONENT16),O}function E(C,S){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Lt&&C.minFilter!==xt?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){const S=C.target;S.removeEventListener("dispose",A),P(S),S.isVideoTexture&&u.delete(S)}function R(C){const S=C.target;S.removeEventListener("dispose",R),b(S)}function P(C){const S=n.get(C);if(S.__webglInit===void 0)return;const O=C.source,H=d.get(O);if(H){const ne=H[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(C),Object.keys(H).length===0&&d.delete(O)}n.remove(C)}function M(C){const S=n.get(C);r.deleteTexture(S.__webglTexture);const O=C.source,H=d.get(O);delete H[S.__cacheKey],o.memory.textures--}function b(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(S.__webglFramebuffer[H]))for(let ne=0;ne<S.__webglFramebuffer[H].length;ne++)r.deleteFramebuffer(S.__webglFramebuffer[H][ne]);else r.deleteFramebuffer(S.__webglFramebuffer[H]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[H])}else{if(Array.isArray(S.__webglFramebuffer))for(let H=0;H<S.__webglFramebuffer.length;H++)r.deleteFramebuffer(S.__webglFramebuffer[H]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let H=0;H<S.__webglColorRenderbuffer.length;H++)S.__webglColorRenderbuffer[H]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[H]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=C.textures;for(let H=0,ne=O.length;H<ne;H++){const Y=n.get(O[H]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(O[H])}n.remove(C)}let I=0;function U(){I=0}function z(){const C=I;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),I+=1,C}function q(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function V(C,S){const O=n.get(C);if(C.isVideoTexture&&K(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const H=C.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(O,C,S);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+S)}function X(C,S){const O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Q(O,C,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+S)}function Z(C,S){const O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Q(O,C,S);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+S)}function k(C,S){const O=n.get(C);if(C.version>0&&O.__version!==C.version){te(O,C,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+S)}const ue={[$i]:r.REPEAT,[Qt]:r.CLAMP_TO_EDGE,[Zi]:r.MIRRORED_REPEAT},fe={[Lt]:r.NEAREST,[Fc]:r.NEAREST_MIPMAP_NEAREST,[Rs]:r.NEAREST_MIPMAP_LINEAR,[xt]:r.LINEAR,[mr]:r.LINEAR_MIPMAP_NEAREST,[wn]:r.LINEAR_MIPMAP_LINEAR},Se={[af]:r.NEVER,[ff]:r.ALWAYS,[lf]:r.LESS,[Gc]:r.LEQUAL,[cf]:r.EQUAL,[df]:r.GEQUAL,[hf]:r.GREATER,[uf]:r.NOTEQUAL};function Ge(C,S){if(S.type===jt&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===xt||S.magFilter===mr||S.magFilter===Rs||S.magFilter===wn||S.minFilter===xt||S.minFilter===mr||S.minFilter===Rs||S.minFilter===wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,ue[S.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ue[S.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ue[S.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,fe[S.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,fe[S.minFilter]),S.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Lt||S.minFilter!==Rs&&S.minFilter!==wn||S.type===jt&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function We(C,S){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));const H=S.source;let ne=d.get(H);ne===void 0&&(ne={},d.set(H,ne));const Y=q(S);if(Y!==C.__cacheKey){ne[Y]===void 0&&(ne[Y]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ne[Y].usedTimes++;const Ce=ne[C.__cacheKey];Ce!==void 0&&(ne[C.__cacheKey].usedTimes--,Ce.usedTimes===0&&M(S)),C.__cacheKey=Y,C.__webglTexture=ne[Y].texture}return O}function Qe(C,S,O){return Math.floor(Math.floor(C/O)/S)}function je(C,S,O,H){const Y=C.updateRanges;if(Y.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,O,H,S.data);else{Y.sort((ae,ye)=>ae.start-ye.start);let Ce=0;for(let ae=1;ae<Y.length;ae++){const ye=Y[Ce],ke=Y[ae],Ie=ye.start+ye.count,xe=Qe(ke.start,S.width,4),Ke=Qe(ye.start,S.width,4);ke.start<=Ie+1&&xe===Ke&&Qe(ke.start+ke.count-1,S.width,4)===xe?ye.count=Math.max(ye.count,ke.start+ke.count-ye.start):(++Ce,Y[Ce]=ke)}Y.length=Ce+1;const de=r.getParameter(r.UNPACK_ROW_LENGTH),ve=r.getParameter(r.UNPACK_SKIP_PIXELS),Te=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let ae=0,ye=Y.length;ae<ye;ae++){const ke=Y[ae],Ie=Math.floor(ke.start/4),xe=Math.ceil(ke.count/4),Ke=Ie%S.width,F=Math.floor(Ie/S.width),he=xe,pe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ke),r.pixelStorei(r.UNPACK_SKIP_ROWS,F),t.texSubImage2D(r.TEXTURE_2D,0,Ke,F,he,pe,O,H,S.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,de),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,Te)}}function Q(C,S,O){let H=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(H=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(H=r.TEXTURE_3D);const ne=We(C,S),Y=S.source;t.bindTexture(H,C.__webglTexture,r.TEXTURE0+O);const Ce=n.get(Y);if(Y.version!==Ce.__version||ne===!0){t.activeTexture(r.TEXTURE0+O);const de=it.getPrimaries(it.workingColorSpace),ve=S.colorSpace===qn?null:it.getPrimaries(S.colorSpace),Te=S.colorSpace===qn||de===ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ae=x(S.image,!1,i.maxTextureSize);ae=Ue(S,ae);const ye=s.convert(S.format,S.colorSpace),ke=s.convert(S.type);let Ie=v(S.internalFormat,ye,ke,S.colorSpace,S.isVideoTexture);Ge(H,S);let xe;const Ke=S.mipmaps,F=S.isVideoTexture!==!0,he=Ce.__version===void 0||ne===!0,pe=Y.dataReady,Ee=E(S,ae);if(S.isDepthTexture)Ie=_(S.format===Ns,S.type),he&&(F?t.texStorage2D(r.TEXTURE_2D,1,Ie,ae.width,ae.height):t.texImage2D(r.TEXTURE_2D,0,Ie,ae.width,ae.height,0,ye,ke,null));else if(S.isDataTexture)if(Ke.length>0){F&&he&&t.texStorage2D(r.TEXTURE_2D,Ee,Ie,Ke[0].width,Ke[0].height);for(let le=0,ie=Ke.length;le<ie;le++)xe=Ke[le],F?pe&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,xe.width,xe.height,ye,ke,xe.data):t.texImage2D(r.TEXTURE_2D,le,Ie,xe.width,xe.height,0,ye,ke,xe.data);S.generateMipmaps=!1}else F?(he&&t.texStorage2D(r.TEXTURE_2D,Ee,Ie,ae.width,ae.height),pe&&je(S,ae,ye,ke)):t.texImage2D(r.TEXTURE_2D,0,Ie,ae.width,ae.height,0,ye,ke,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){F&&he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ee,Ie,Ke[0].width,Ke[0].height,ae.depth);for(let le=0,ie=Ke.length;le<ie;le++)if(xe=Ke[le],S.format!==Bt)if(ye!==null)if(F){if(pe)if(S.layerUpdates.size>0){const Pe=Ac(xe.width,xe.height,S.format,S.type);for(const qe of S.layerUpdates){const mt=xe.data.subarray(qe*Pe/xe.data.BYTES_PER_ELEMENT,(qe+1)*Pe/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,qe,xe.width,xe.height,1,ye,mt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,xe.width,xe.height,ae.depth,ye,xe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,le,Ie,xe.width,xe.height,ae.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?pe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,xe.width,xe.height,ae.depth,ye,ke,xe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,le,Ie,xe.width,xe.height,ae.depth,0,ye,ke,xe.data)}else{F&&he&&t.texStorage2D(r.TEXTURE_2D,Ee,Ie,Ke[0].width,Ke[0].height);for(let le=0,ie=Ke.length;le<ie;le++)xe=Ke[le],S.format!==Bt?ye!==null?F?pe&&t.compressedTexSubImage2D(r.TEXTURE_2D,le,0,0,xe.width,xe.height,ye,xe.data):t.compressedTexImage2D(r.TEXTURE_2D,le,Ie,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?pe&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,xe.width,xe.height,ye,ke,xe.data):t.texImage2D(r.TEXTURE_2D,le,Ie,xe.width,xe.height,0,ye,ke,xe.data)}else if(S.isDataArrayTexture)if(F){if(he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ee,Ie,ae.width,ae.height,ae.depth),pe)if(S.layerUpdates.size>0){const le=Ac(ae.width,ae.height,S.format,S.type);for(const ie of S.layerUpdates){const Pe=ae.data.subarray(ie*le/ae.data.BYTES_PER_ELEMENT,(ie+1)*le/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ie,ae.width,ae.height,1,ye,ke,Pe)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ye,ke,ae.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ie,ae.width,ae.height,ae.depth,0,ye,ke,ae.data);else if(S.isData3DTexture)F?(he&&t.texStorage3D(r.TEXTURE_3D,Ee,Ie,ae.width,ae.height,ae.depth),pe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ye,ke,ae.data)):t.texImage3D(r.TEXTURE_3D,0,Ie,ae.width,ae.height,ae.depth,0,ye,ke,ae.data);else if(S.isFramebufferTexture){if(he)if(F)t.texStorage2D(r.TEXTURE_2D,Ee,Ie,ae.width,ae.height);else{let le=ae.width,ie=ae.height;for(let Pe=0;Pe<Ee;Pe++)t.texImage2D(r.TEXTURE_2D,Pe,Ie,le,ie,0,ye,ke,null),le>>=1,ie>>=1}}else if(Ke.length>0){if(F&&he){const le=Ne(Ke[0]);t.texStorage2D(r.TEXTURE_2D,Ee,Ie,le.width,le.height)}for(let le=0,ie=Ke.length;le<ie;le++)xe=Ke[le],F?pe&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,ye,ke,xe):t.texImage2D(r.TEXTURE_2D,le,Ie,ye,ke,xe);S.generateMipmaps=!1}else if(F){if(he){const le=Ne(ae);t.texStorage2D(r.TEXTURE_2D,Ee,Ie,le.width,le.height)}pe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye,ke,ae)}else t.texImage2D(r.TEXTURE_2D,0,Ie,ye,ke,ae);g(S)&&m(H),Ce.__version=Y.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function te(C,S,O){if(S.image.length!==6)return;const H=We(C,S),ne=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+O);const Y=n.get(ne);if(ne.version!==Y.__version||H===!0){t.activeTexture(r.TEXTURE0+O);const Ce=it.getPrimaries(it.workingColorSpace),de=S.colorSpace===qn?null:it.getPrimaries(S.colorSpace),ve=S.colorSpace===qn||Ce===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Te=S.isCompressedTexture||S.image[0].isCompressedTexture,ae=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let ie=0;ie<6;ie++)!Te&&!ae?ye[ie]=x(S.image[ie],!0,i.maxCubemapSize):ye[ie]=ae?S.image[ie].image:S.image[ie],ye[ie]=Ue(S,ye[ie]);const ke=ye[0],Ie=s.convert(S.format,S.colorSpace),xe=s.convert(S.type),Ke=v(S.internalFormat,Ie,xe,S.colorSpace),F=S.isVideoTexture!==!0,he=Y.__version===void 0||H===!0,pe=ne.dataReady;let Ee=E(S,ke);Ge(r.TEXTURE_CUBE_MAP,S);let le;if(Te){F&&he&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ee,Ke,ke.width,ke.height);for(let ie=0;ie<6;ie++){le=ye[ie].mipmaps;for(let Pe=0;Pe<le.length;Pe++){const qe=le[Pe];S.format!==Bt?Ie!==null?F?pe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,0,0,qe.width,qe.height,Ie,qe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,Ke,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,0,0,qe.width,qe.height,Ie,xe,qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,Ke,qe.width,qe.height,0,Ie,xe,qe.data)}}}else{if(le=S.mipmaps,F&&he){le.length>0&&Ee++;const ie=Ne(ye[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ee,Ke,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ae){F?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ye[ie].width,ye[ie].height,Ie,xe,ye[ie].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ke,ye[ie].width,ye[ie].height,0,Ie,xe,ye[ie].data);for(let Pe=0;Pe<le.length;Pe++){const mt=le[Pe].image[ie].image;F?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,0,0,mt.width,mt.height,Ie,xe,mt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,Ke,mt.width,mt.height,0,Ie,xe,mt.data)}}else{F?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ie,xe,ye[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ke,Ie,xe,ye[ie]);for(let Pe=0;Pe<le.length;Pe++){const qe=le[Pe];F?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,0,0,Ie,xe,qe.image[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,Ke,Ie,xe,qe.image[ie])}}}g(S)&&m(r.TEXTURE_CUBE_MAP),Y.__version=ne.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ge(C,S,O,H,ne,Y){const Ce=s.convert(O.format,O.colorSpace),de=s.convert(O.type),ve=v(O.internalFormat,Ce,de,O.colorSpace),Te=n.get(S),ae=n.get(O);if(ae.__renderTarget=S,!Te.__hasExternalTextures){const ye=Math.max(1,S.width>>Y),ke=Math.max(1,S.height>>Y);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,Y,ve,ye,ke,S.depth,0,Ce,de,null):t.texImage2D(ne,Y,ve,ye,ke,0,Ce,de,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),re(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,H,ne,ae.__webglTexture,0,$(S)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,H,ne,ae.__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(C,S,O){if(r.bindRenderbuffer(r.RENDERBUFFER,C),S.depthBuffer){const H=S.depthTexture,ne=H&&H.isDepthTexture?H.type:null,Y=_(S.stencilBuffer,ne),Ce=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=$(S);re(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de,Y,S.width,S.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,de,Y,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Y,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ce,r.RENDERBUFFER,C)}else{const H=S.textures;for(let ne=0;ne<H.length;ne++){const Y=H[ne],Ce=s.convert(Y.format,Y.colorSpace),de=s.convert(Y.type),ve=v(Y.internalFormat,Ce,de,Y.colorSpace),Te=$(S);O&&re(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,ve,S.width,S.height):re(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Te,ve,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ve,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Me(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=n.get(S.depthTexture);H.__renderTarget=S,(!H.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);const ne=H.__webglTexture,Y=$(S);if(S.depthTexture.format===Us)re(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0);else if(S.depthTexture.format===Ns)re(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function He(C){const S=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const H=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),H){const ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,H.removeEventListener("dispose",ne)};H.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=H}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const H=C.texture.mipmaps;H&&H.length>0?Me(S.__webglFramebuffer[0],C):Me(S.__webglFramebuffer,C)}else if(O){S.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[H]),S.__webglDepthbuffer[H]===void 0)S.__webglDepthbuffer[H]=r.createRenderbuffer(),Ae(S.__webglDepthbuffer[H],C,!1);else{const ne=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[H];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,Y)}}else{const H=C.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Ae(S.__webglDepthbuffer,C,!1);else{const ne=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,Y)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function lt(C,S,O){const H=n.get(C);S!==void 0&&ge(H.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&He(C)}function D(C){const S=C.texture,O=n.get(C),H=n.get(S);C.addEventListener("dispose",R);const ne=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Ce=ne.length>1;if(Ce||(H.__webglTexture===void 0&&(H.__webglTexture=r.createTexture()),H.__version=S.version,o.memory.textures++),Y){O.__webglFramebuffer=[];for(let de=0;de<6;de++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[de]=[];for(let ve=0;ve<S.mipmaps.length;ve++)O.__webglFramebuffer[de][ve]=r.createFramebuffer()}else O.__webglFramebuffer[de]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let de=0;de<S.mipmaps.length;de++)O.__webglFramebuffer[de]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(Ce)for(let de=0,ve=ne.length;de<ve;de++){const Te=n.get(ne[de]);Te.__webglTexture===void 0&&(Te.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&re(C)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let de=0;de<ne.length;de++){const ve=ne[de];O.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[de]);const Te=s.convert(ve.format,ve.colorSpace),ae=s.convert(ve.type),ye=v(ve.internalFormat,Te,ae,ve.colorSpace,C.isXRRenderTarget===!0),ke=$(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,ke,ye,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,O.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Ae(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture),Ge(r.TEXTURE_CUBE_MAP,S);for(let de=0;de<6;de++)if(S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)ge(O.__webglFramebuffer[de][ve],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve);else ge(O.__webglFramebuffer[de],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(S)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let de=0,ve=ne.length;de<ve;de++){const Te=ne[de],ae=n.get(Te);let ye=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ye=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ye,ae.__webglTexture),Ge(ye,Te),ge(O.__webglFramebuffer,C,Te,r.COLOR_ATTACHMENT0+de,ye,0),g(Te)&&m(ye)}t.unbindTexture()}else{let de=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,H.__webglTexture),Ge(de,S),S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)ge(O.__webglFramebuffer[ve],C,S,r.COLOR_ATTACHMENT0,de,ve);else ge(O.__webglFramebuffer,C,S,r.COLOR_ATTACHMENT0,de,0);g(S)&&m(de),t.unbindTexture()}C.depthBuffer&&He(C)}function se(C){const S=C.textures;for(let O=0,H=S.length;O<H;O++){const ne=S[O];if(g(ne)){const Y=y(C),Ce=n.get(ne).__webglTexture;t.bindTexture(Y,Ce),m(Y),t.unbindTexture()}}}const ee=[],j=[];function L(C){if(C.samples>0){if(re(C)===!1){const S=C.textures,O=C.width,H=C.height;let ne=r.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=n.get(C),de=S.length>1;if(de)for(let Te=0;Te<S.length;Te++)t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const ve=C.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Te=0;Te<S.length;Te++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),de){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[Te]);const ae=n.get(S[Te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ae,0)}r.blitFramebuffer(0,0,O,H,0,0,O,H,ne,r.NEAREST),l===!0&&(ee.length=0,j.length=0,ee.push(r.COLOR_ATTACHMENT0+Te),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ee.push(Y),j.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,j)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let Te=0;Te<S.length;Te++){t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[Te]);const ae=n.get(S[Te]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,ae,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function $(C){return Math.min(i.maxSamples,C.samples)}function re(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function K(C){const S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function Ue(C,S){const O=C.colorSpace,H=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Ji&&O!==qn&&(it.getTransfer(O)===ht?(H!==Bt||ne!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function Ne(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=k,this.rebindTextures=lt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=re}function wp(r,e){function t(n,i=qn){let s;const o=it.getTransfer(i);if(n===vn)return r.UNSIGNED_BYTE;if(n===Ga)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Wa)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Oc)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Bc)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Uc)return r.BYTE;if(n===Nc)return r.SHORT;if(n===Fs)return r.UNSIGNED_SHORT;if(n===Va)return r.INT;if(n===Qn)return r.UNSIGNED_INT;if(n===jt)return r.FLOAT;if(n===mi)return r.HALF_FLOAT;if(n===zc)return r.ALPHA;if(n===kc)return r.RGB;if(n===Bt)return r.RGBA;if(n===Us)return r.DEPTH_COMPONENT;if(n===Ns)return r.DEPTH_STENCIL;if(n===Hr)return r.RED;if(n===Vr)return r.RED_INTEGER;if(n===Hc)return r.RG;if(n===Xa)return r.RG_INTEGER;if(n===qa)return r.RGBA_INTEGER;if(n===gr||n===xr||n===vr||n===_r)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===gr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===gr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_r)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oa||n===aa||n===la||n===ca)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===oa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===aa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===la)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ca)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ha||n===ua||n===da)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ha||n===ua)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===da)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fa||n===pa||n===ma||n===ga||n===xa||n===va||n===_a||n===ya||n===Sa||n===Ma||n===ba||n===wa||n===Ea||n===Ta)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===fa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ma)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ga)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===va)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_a)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ya)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ma)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ba)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ea)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ta)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Aa||n===Ca||n===Ra)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Aa)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ca)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ra)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pa||n===Ia||n===Da||n===La)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Pa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ia)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Da)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===La)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const KS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JS=`
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

}`;class QS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Qc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Et({vertexShader:KS,fragmentShader:JS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jS extends Nn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null;const x=typeof XRWebGLBinding<"u",g=new QS,m={},y=t.getContextAttributes();let v=null,_=null;const E=[],A=[],R=new J;let P=null;const M=new Pt;M.viewport=new nt;const b=new Pt;b.viewport=new nt;const I=[M,b],U=new dp;let z=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let te=E[Q];return te===void 0&&(te=new Yo,E[Q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Q){let te=E[Q];return te===void 0&&(te=new Yo,E[Q]=te),te.getGripSpace()},this.getHand=function(Q){let te=E[Q];return te===void 0&&(te=new Yo,E[Q]=te),te.getHandSpace()};function V(Q){const te=A.indexOf(Q.inputSource);if(te===-1)return;const ge=E[te];ge!==void 0&&(ge.update(Q.inputSource,Q.frame,c||o),ge.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",Z);for(let Q=0;Q<E.length;Q++){const te=A[Q];te!==null&&(A[Q]=null,E[Q].disconnect(te))}z=null,q=null,g.reset();for(const Q in m)delete m[Q];e.setRenderTarget(v),f=null,d=null,h=null,i=null,_=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",X),i.addEventListener("inputsourceschange",Z),y.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Ae=null,Me=null;y.depth&&(Me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=y.stencil?Ns:Us,Ae=y.stencil?Ki:Qn);const He={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(He),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new un(d.textureWidth,d.textureHeight,{format:Bt,type:vn,depthTexture:new il(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ge={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new un(f.framebufferWidth,f.framebufferHeight,{format:Bt,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),je.setContext(i),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(Q){for(let te=0;te<Q.removed.length;te++){const ge=Q.removed[te],Ae=A.indexOf(ge);Ae>=0&&(A[Ae]=null,E[Ae].disconnect(ge))}for(let te=0;te<Q.added.length;te++){const ge=Q.added[te];let Ae=A.indexOf(ge);if(Ae===-1){for(let He=0;He<E.length;He++)if(He>=A.length){A.push(ge),Ae=He;break}else if(A[He]===null){A[He]=ge,Ae=He;break}if(Ae===-1)break}const Me=E[Ae];Me&&Me.connect(ge)}}const k=new T,ue=new T;function fe(Q,te,ge){k.setFromMatrixPosition(te.matrixWorld),ue.setFromMatrixPosition(ge.matrixWorld);const Ae=k.distanceTo(ue),Me=te.projectionMatrix.elements,He=ge.projectionMatrix.elements,lt=Me[14]/(Me[10]-1),D=Me[14]/(Me[10]+1),se=(Me[9]+1)/Me[5],ee=(Me[9]-1)/Me[5],j=(Me[8]-1)/Me[0],L=(He[8]+1)/He[0],$=lt*j,re=lt*L,K=Ae/(-j+L),Ue=K*-j;if(te.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ue),Q.translateZ(K),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Me[10]===-1)Q.projectionMatrix.copy(te.projectionMatrix),Q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Ne=lt+K,C=D+K,S=$-Ue,O=re+(Ae-Ue),H=se*D/C*Ne,ne=ee*D/C*Ne;Q.projectionMatrix.makePerspective(S,O,H,ne,Ne,C),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Se(Q,te){te===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(te.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let te=Q.near,ge=Q.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(ge=g.depthFar)),U.near=b.near=M.near=te,U.far=b.far=M.far=ge,(z!==U.near||q!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,q=U.far),U.layers.mask=Q.layers.mask|6,M.layers.mask=U.layers.mask&3,b.layers.mask=U.layers.mask&5;const Ae=Q.parent,Me=U.cameras;Se(U,Ae);for(let He=0;He<Me.length;He++)Se(Me[He],Ae);Me.length===2?fe(U,M,b):U.projectionMatrix.copy(M.projectionMatrix),Ge(Q,U,Ae)};function Ge(Q,te,ge){ge===null?Q.matrix.copy(te.matrixWorld):(Q.matrix.copy(ge.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(te.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(te.projectionMatrix),Q.projectionMatrixInverse.copy(te.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Bs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(Q){return m[Q]};let We=null;function Qe(Q,te){if(u=te.getViewerPose(c||o),p=te,u!==null){const ge=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Ae=!1;ge.length!==U.cameras.length&&(U.cameras.length=0,Ae=!0);for(let D=0;D<ge.length;D++){const se=ge[D];let ee=null;if(f!==null)ee=f.getViewport(se);else{const L=h.getViewSubImage(d,se);ee=L.viewport,D===0&&(e.setRenderTargetTextures(_,L.colorTexture,L.depthStencilTexture),e.setRenderTarget(_))}let j=I[D];j===void 0&&(j=new Pt,j.layers.enable(D),j.viewport=new nt,I[D]=j),j.matrix.fromArray(se.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(se.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ee.x,ee.y,ee.width,ee.height),D===0&&(U.matrix.copy(j.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ae===!0&&U.cameras.push(j)}const Me=i.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const D=h.getDepthInformation(ge[0]);D&&D.isValid&&D.texture&&g.init(D,i.renderState)}if(Me&&Me.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let D=0;D<ge.length;D++){const se=ge[D].camera;if(se){let ee=m[se];ee||(ee=new Qc,m[se]=ee);const j=h.getCameraImage(se);ee.sourceTexture=j}}}}for(let ge=0;ge<E.length;ge++){const Ae=A[ge],Me=E[ge];Ae!==null&&Me!==void 0&&Me.update(Ae,te,c||o)}We&&We(Q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),p=null}const je=new _p;je.setAnimationLoop(Qe),this.setAnimationLoop=function(Q){We=Q},this.dispose=function(){}}}const Ui=new dn,eM=new Fe;function tM(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,vf(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,y,v,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,y,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===It&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===It&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=e.get(m),v=y.envMap,_=y.envMapRotation;v&&(g.envMap.value=v,Ui.copy(_),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),g.envMapRotation.value.setFromMatrix4(eM.makeRotationFromEuler(Ui)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===It&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function nM(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const _=v.program;n.uniformBlockBinding(y,_)}function c(y,v){let _=i[y.id];_===void 0&&(p(y),_=u(y),i[y.id]=_,y.addEventListener("dispose",g));const E=v.program;n.updateUBOMapping(y,E);const A=e.render.frame;s[y.id]!==A&&(d(y),s[y.id]=A)}function u(y){const v=h();y.__bindingPointIndex=v;const _=r.createBuffer(),E=y.__size,A=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,E,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,_),_}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=i[y.id],_=y.uniforms,E=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let A=0,R=_.length;A<R;A++){const P=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,b=P.length;M<b;M++){const I=P[M];if(f(I,A,M,E)===!0){const U=I.__offset,z=Array.isArray(I.value)?I.value:[I.value];let q=0;for(let V=0;V<z.length;V++){const X=z[V],Z=x(X);typeof X=="number"||typeof X=="boolean"?(I.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,U+q,I.__data)):X.isMatrix3?(I.__data[0]=X.elements[0],I.__data[1]=X.elements[1],I.__data[2]=X.elements[2],I.__data[3]=0,I.__data[4]=X.elements[3],I.__data[5]=X.elements[4],I.__data[6]=X.elements[5],I.__data[7]=0,I.__data[8]=X.elements[6],I.__data[9]=X.elements[7],I.__data[10]=X.elements[8],I.__data[11]=0):(X.toArray(I.__data,q),q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,v,_,E){const A=y.value,R=v+"_"+_;if(E[R]===void 0)return typeof A=="number"||typeof A=="boolean"?E[R]=A:E[R]=A.clone(),!0;{const P=E[R];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return E[R]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function p(y){const v=y.uniforms;let _=0;const E=16;for(let R=0,P=v.length;R<P;R++){const M=Array.isArray(v[R])?v[R]:[v[R]];for(let b=0,I=M.length;b<I;b++){const U=M[b],z=Array.isArray(U.value)?U.value:[U.value];for(let q=0,V=z.length;q<V;q++){const X=z[q],Z=x(X),k=_%E,ue=k%Z.boundary,fe=k+ue;_+=ue,fe!==0&&E-fe<Z.storage&&(_+=E-fe),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=_,_+=Z.storage}}}const A=_%E;return A>0&&(_+=E-A),y.__size=_,y.__cache={},this}function x(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function g(y){const v=y.target;v.removeEventListener("dispose",g);const _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Ep{constructor(e={}){const{canvas:t=mf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),x=new Int32Array(4);let g=null,m=null;const y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let E=!1;this._outputColorSpace=Zt;let A=0,R=0,P=null,M=-1,b=null;const I=new nt,U=new nt;let z=null;const q=new oe(0);let V=0,X=t.width,Z=t.height,k=1,ue=null,fe=null;const Se=new nt(0,0,X,Z),Ge=new nt(0,0,X,Z);let We=!1;const Qe=new qs;let je=!1,Q=!1;const te=new Fe,ge=new T,Ae=new nt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function lt(){return P===null?k:1}let D=n;function se(w,N){return t.getContext(w,N)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ka}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",le,!1),D===null){const N="webgl2";if(D=se(N,w),D===null)throw se(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ee,j,L,$,re,K,Ue,Ne,C,S,O,H,ne,Y,Ce,de,ve,Te,ae,ye,ke,Ie,xe,Ke;function F(){ee=new py(D),ee.init(),Ie=new wp(D,ee),j=new ay(D,ee,e,Ie),L=new $S(D,ee),j.reversedDepthBuffer&&d&&L.buffers.depth.setReversed(!0),$=new xy(D),re=new US,K=new ZS(D,ee,L,re,j,Ie,$),Ue=new cy(_),Ne=new fy(_),C=new bx(D),xe=new ry(D,C),S=new my(D,C,$,xe),O=new _y(D,S,C,$),ae=new vy(D,j,K),de=new ly(re),H=new FS(_,Ue,Ne,ee,j,xe,de),ne=new tM(_,re),Y=new OS,Ce=new GS(ee),Te=new sy(_,Ue,Ne,L,O,f,l),ve=new qS(_,O,j),Ke=new nM(D,$,j,L),ye=new oy(D,ee,$),ke=new gy(D,ee,$),$.programs=H.programs,_.capabilities=j,_.extensions=ee,_.properties=re,_.renderLists=Y,_.shadowMap=ve,_.state=L,_.info=$}F();const he=new jS(_,D);this.xr=he,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(X,Z,!1))},this.getSize=function(w){return w.set(X,Z)},this.setSize=function(w,N,G=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,Z=N,t.width=Math.floor(w*k),t.height=Math.floor(N*k),G===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(X*k,Z*k).floor()},this.setDrawingBufferSize=function(w,N,G){X=w,Z=N,k=G,t.width=Math.floor(w*G),t.height=Math.floor(N*G),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(Se)},this.setViewport=function(w,N,G,W){w.isVector4?Se.set(w.x,w.y,w.z,w.w):Se.set(w,N,G,W),L.viewport(I.copy(Se).multiplyScalar(k).round())},this.getScissor=function(w){return w.copy(Ge)},this.setScissor=function(w,N,G,W){w.isVector4?Ge.set(w.x,w.y,w.z,w.w):Ge.set(w,N,G,W),L.scissor(U.copy(Ge).multiplyScalar(k).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(w){L.setScissorTest(We=w)},this.setOpaqueSort=function(w){ue=w},this.setTransparentSort=function(w){fe=w},this.getClearColor=function(w){return w.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(w=!0,N=!0,G=!0){let W=0;if(w){let B=!1;if(P!==null){const ce=P.texture.format;B=ce===qa||ce===Xa||ce===Vr}if(B){const ce=P.texture.type,_e=ce===vn||ce===Qn||ce===Fs||ce===Ki||ce===Ga||ce===Wa,Re=Te.getClearColor(),we=Te.getClearAlpha(),Be=Re.r,Ve=Re.g,De=Re.b;_e?(p[0]=Be,p[1]=Ve,p[2]=De,p[3]=we,D.clearBufferuiv(D.COLOR,0,p)):(x[0]=Be,x[1]=Ve,x[2]=De,x[3]=we,D.clearBufferiv(D.COLOR,0,x))}else W|=D.COLOR_BUFFER_BIT}N&&(W|=D.DEPTH_BUFFER_BIT),G&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Te.dispose(),Y.dispose(),Ce.dispose(),re.dispose(),Ue.dispose(),Ne.dispose(),O.dispose(),xe.dispose(),Ke.dispose(),H.dispose(),he.dispose(),he.removeEventListener("sessionstart",Cn),he.removeEventListener("sessionend",Rh),yi.stop()};function pe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=$.autoReset,N=ve.enabled,G=ve.autoUpdate,W=ve.needsUpdate,B=ve.type;F(),$.autoReset=w,ve.enabled=N,ve.autoUpdate=G,ve.needsUpdate=W,ve.type=B}function le(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ie(w){const N=w.target;N.removeEventListener("dispose",ie),Pe(N)}function Pe(w){qe(w),re.remove(w)}function qe(w){const N=re.get(w).programs;N!==void 0&&(N.forEach(function(G){H.releaseProgram(G)}),w.isShaderMaterial&&H.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,G,W,B,ce){N===null&&(N=Me);const _e=B.isMesh&&B.matrixWorld.determinant()<0,Re=Up(w,N,G,W,B);L.setMaterial(W,_e);let we=G.index,Be=1;if(W.wireframe===!0){if(we=S.getWireframeAttribute(G),we===void 0)return;Be=2}const Ve=G.drawRange,De=G.attributes.position;let tt=Ve.start*Be,ut=(Ve.start+Ve.count)*Be;ce!==null&&(tt=Math.max(tt,ce.start*Be),ut=Math.min(ut,(ce.start+ce.count)*Be)),we!==null?(tt=Math.max(tt,0),ut=Math.min(ut,we.count)):De!=null&&(tt=Math.max(tt,0),ut=Math.min(ut,De.count));const St=ut-tt;if(St<0||St===1/0)return;xe.setup(B,W,Re,G,we);let gt,ft=ye;if(we!==null&&(gt=C.get(we),ft=ke,ft.setIndex(gt)),B.isMesh)W.wireframe===!0?(L.setLineWidth(W.wireframeLinewidth*lt()),ft.setMode(D.LINES)):ft.setMode(D.TRIANGLES);else if(B.isLine){let Oe=W.linewidth;Oe===void 0&&(Oe=1),L.setLineWidth(Oe*lt()),B.isLineSegments?ft.setMode(D.LINES):B.isLineLoop?ft.setMode(D.LINE_LOOP):ft.setMode(D.LINE_STRIP)}else B.isPoints?ft.setMode(D.POINTS):B.isSprite&&ft.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Dr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))ft.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Oe=B._multiDrawStarts,vt=B._multiDrawCounts,ot=B._multiDrawCount,nn=we?C.get(we).bytesPerElement:1,is=re.get(W).currentProgram.getUniforms();for(let sn=0;sn<ot;sn++)is.setValue(D,"_gl_DrawID",sn),ft.render(Oe[sn]/nn,vt[sn])}else if(B.isInstancedMesh)ft.renderInstances(tt,St,B.count);else if(G.isInstancedBufferGeometry){const Oe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,vt=Math.min(G.instanceCount,Oe);ft.renderInstances(tt,St,vt)}else ft.render(tt,St)};function mt(w,N,G){w.transparent===!0&&w.side===Ln&&w.forceSinglePass===!1?(w.side=It,w.needsUpdate=!0,Jr(w,N,G),w.side=Kn,w.needsUpdate=!0,Jr(w,N,G),w.side=Ln):Jr(w,N,G)}this.compile=function(w,N,G=null){G===null&&(G=w),m=Ce.get(G),m.init(N),v.push(m),G.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),w!==G&&w.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const W=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ce=B.material;if(ce)if(Array.isArray(ce))for(let _e=0;_e<ce.length;_e++){const Re=ce[_e];mt(Re,G,B),W.add(Re)}else mt(ce,G,B),W.add(ce)}),m=v.pop(),W},this.compileAsync=function(w,N,G=null){const W=this.compile(w,N,G);return new Promise(B=>{function ce(){if(W.forEach(function(_e){re.get(_e).currentProgram.isReady()&&W.delete(_e)}),W.size===0){B(w);return}setTimeout(ce,10)}ee.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let ct=null;function Bn(w){ct&&ct(w)}function Cn(){yi.stop()}function Rh(){yi.start()}const yi=new _p;yi.setAnimationLoop(Bn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(w){ct=w,he.setAnimationLoop(w),w===null?yi.stop():yi.start()},he.addEventListener("sessionstart",Cn),he.addEventListener("sessionend",Rh),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(N),N=he.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,N,P),m=Ce.get(w,v.length),m.init(N),v.push(m),te.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Qe.setFromProjectionMatrix(te,cn,N.reversedDepth),Q=this.localClippingEnabled,je=de.init(this.clippingPlanes,Q),g=Y.get(w,y.length),g.init(),y.push(g),he.enabled===!0&&he.isPresenting===!0){const ce=_.xr.getDepthSensingMesh();ce!==null&&_l(ce,N,-1/0,_.sortObjects)}_l(w,N,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(ue,fe),He=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,He&&Te.addToRenderList(g,w),this.info.render.frame++,je===!0&&de.beginShadows();const G=m.state.shadowsArray;ve.render(G,w,N),je===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=g.opaque,B=g.transmissive;if(m.setupLights(),N.isArrayCamera){const ce=N.cameras;if(B.length>0)for(let _e=0,Re=ce.length;_e<Re;_e++){const we=ce[_e];Ih(W,B,w,we)}He&&Te.render(w);for(let _e=0,Re=ce.length;_e<Re;_e++){const we=ce[_e];Ph(g,w,we,we.viewport)}}else B.length>0&&Ih(W,B,w,N),He&&Te.render(w),Ph(g,w,N);P!==null&&R===0&&(K.updateMultisampleRenderTarget(P),K.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(_,w,N),xe.resetDefaultState(),M=-1,b=null,v.pop(),v.length>0?(m=v[v.length-1],je===!0&&de.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function _l(w,N,G,W){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Qe.intersectsSprite(w)){W&&Ae.setFromMatrixPosition(w.matrixWorld).applyMatrix4(te);const _e=O.update(w),Re=w.material;Re.visible&&g.push(w,_e,Re,G,Ae.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Qe.intersectsObject(w))){const _e=O.update(w),Re=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ae.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ae.copy(_e.boundingSphere.center)),Ae.applyMatrix4(w.matrixWorld).applyMatrix4(te)),Array.isArray(Re)){const we=_e.groups;for(let Be=0,Ve=we.length;Be<Ve;Be++){const De=we[Be],tt=Re[De.materialIndex];tt&&tt.visible&&g.push(w,_e,tt,G,Ae.z,De)}}else Re.visible&&g.push(w,_e,Re,G,Ae.z,null)}}const ce=w.children;for(let _e=0,Re=ce.length;_e<Re;_e++)_l(ce[_e],N,G,W)}function Ph(w,N,G,W){const B=w.opaque,ce=w.transmissive,_e=w.transparent;m.setupLightsView(G),je===!0&&de.setGlobalState(_.clippingPlanes,G),W&&L.viewport(I.copy(W)),B.length>0&&Kr(B,N,G),ce.length>0&&Kr(ce,N,G),_e.length>0&&Kr(_e,N,G),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function Ih(w,N,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new un(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?mi:vn,minFilter:wn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ce=m.state.transmissionRenderTarget[W.id],_e=W.viewport||I;ce.setSize(_e.z*_.transmissionResolutionScale,_e.w*_.transmissionResolutionScale);const Re=_.getRenderTarget(),we=_.getActiveCubeFace(),Be=_.getActiveMipmapLevel();_.setRenderTarget(ce),_.getClearColor(q),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),He&&Te.render(G);const Ve=_.toneMapping;_.toneMapping=$n;const De=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),je===!0&&de.setGlobalState(_.clippingPlanes,W),Kr(w,G,W),K.updateMultisampleRenderTarget(ce),K.updateRenderTargetMipmap(ce),ee.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let ut=0,St=N.length;ut<St;ut++){const gt=N[ut],ft=gt.object,Oe=gt.geometry,vt=gt.material,ot=gt.group;if(vt.side===Ln&&ft.layers.test(W.layers)){const nn=vt.side;vt.side=It,vt.needsUpdate=!0,Dh(ft,G,W,Oe,vt,ot),vt.side=nn,vt.needsUpdate=!0,tt=!0}}tt===!0&&(K.updateMultisampleRenderTarget(ce),K.updateRenderTargetMipmap(ce))}_.setRenderTarget(Re,we,Be),_.setClearColor(q,V),De!==void 0&&(W.viewport=De),_.toneMapping=Ve}function Kr(w,N,G){const W=N.isScene===!0?N.overrideMaterial:null;for(let B=0,ce=w.length;B<ce;B++){const _e=w[B],Re=_e.object,we=_e.geometry,Be=_e.group;let Ve=_e.material;Ve.allowOverride===!0&&W!==null&&(Ve=W),Re.layers.test(G.layers)&&Dh(Re,N,G,we,Ve,Be)}}function Dh(w,N,G,W,B,ce){w.onBeforeRender(_,N,G,W,B,ce),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(_,N,G,W,w,ce),B.transparent===!0&&B.side===Ln&&B.forceSinglePass===!1?(B.side=It,B.needsUpdate=!0,_.renderBufferDirect(G,N,W,B,w,ce),B.side=Kn,B.needsUpdate=!0,_.renderBufferDirect(G,N,W,B,w,ce),B.side=Ln):_.renderBufferDirect(G,N,W,B,w,ce),w.onAfterRender(_,N,G,W,B,ce)}function Jr(w,N,G){N.isScene!==!0&&(N=Me);const W=re.get(w),B=m.state.lights,ce=m.state.shadowsArray,_e=B.state.version,Re=H.getParameters(w,B.state,ce,N,G),we=H.getProgramCacheKey(Re);let Be=W.programs;W.environment=w.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(w.isMeshStandardMaterial?Ne:Ue).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",ie),Be=new Map,W.programs=Be);let Ve=Be.get(we);if(Ve!==void 0){if(W.currentProgram===Ve&&W.lightsStateVersion===_e)return Fh(w,Re),Ve}else Re.uniforms=H.getUniforms(w),w.onBeforeCompile(Re,_),Ve=H.acquireProgram(Re,we),Be.set(we,Ve),W.uniforms=Re.uniforms;const De=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=de.uniform),Fh(w,Re),W.needsLights=Op(w),W.lightsStateVersion=_e,W.needsLights&&(De.ambientLightColor.value=B.state.ambient,De.lightProbe.value=B.state.probe,De.directionalLights.value=B.state.directional,De.directionalLightShadows.value=B.state.directionalShadow,De.spotLights.value=B.state.spot,De.spotLightShadows.value=B.state.spotShadow,De.rectAreaLights.value=B.state.rectArea,De.ltc_1.value=B.state.rectAreaLTC1,De.ltc_2.value=B.state.rectAreaLTC2,De.pointLights.value=B.state.point,De.pointLightShadows.value=B.state.pointShadow,De.hemisphereLights.value=B.state.hemi,De.directionalShadowMap.value=B.state.directionalShadowMap,De.directionalShadowMatrix.value=B.state.directionalShadowMatrix,De.spotShadowMap.value=B.state.spotShadowMap,De.spotLightMatrix.value=B.state.spotLightMatrix,De.spotLightMap.value=B.state.spotLightMap,De.pointShadowMap.value=B.state.pointShadowMap,De.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Ve,W.uniformsList=null,Ve}function Lh(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=$o.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Fh(w,N){const G=re.get(w);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Up(w,N,G,W,B){N.isScene!==!0&&(N=Me),K.resetTextureUnits();const ce=N.fog,_e=W.isMeshStandardMaterial?N.environment:null,Re=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ji,we=(W.isMeshStandardMaterial?Ne:Ue).get(W.envMap||_e),Be=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ve=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),De=!!G.morphAttributes.position,tt=!!G.morphAttributes.normal,ut=!!G.morphAttributes.color;let St=$n;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(St=_.toneMapping);const gt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ft=gt!==void 0?gt.length:0,Oe=re.get(W),vt=m.state.lights;if(je===!0&&(Q===!0||w!==b)){const Ht=w===b&&W.id===M;de.setState(W,w,Ht)}let ot=!1;W.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==vt.state.version||Oe.outputColorSpace!==Re||B.isBatchedMesh&&Oe.batching===!1||!B.isBatchedMesh&&Oe.batching===!0||B.isBatchedMesh&&Oe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Oe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Oe.instancing===!1||!B.isInstancedMesh&&Oe.instancing===!0||B.isSkinnedMesh&&Oe.skinning===!1||!B.isSkinnedMesh&&Oe.skinning===!0||B.isInstancedMesh&&Oe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Oe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Oe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Oe.instancingMorph===!1&&B.morphTexture!==null||Oe.envMap!==we||W.fog===!0&&Oe.fog!==ce||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==de.numPlanes||Oe.numIntersection!==de.numIntersection)||Oe.vertexAlphas!==Be||Oe.vertexTangents!==Ve||Oe.morphTargets!==De||Oe.morphNormals!==tt||Oe.morphColors!==ut||Oe.toneMapping!==St||Oe.morphTargetsCount!==ft)&&(ot=!0):(ot=!0,Oe.__version=W.version);let nn=Oe.currentProgram;ot===!0&&(nn=Jr(W,N,B));let is=!1,sn=!1,Qs=!1;const _t=nn.getUniforms(),fn=Oe.uniforms;if(L.useProgram(nn.program)&&(is=!0,sn=!0,Qs=!0),W.id!==M&&(M=W.id,sn=!0),is||b!==w){L.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),_t.setValue(D,"projectionMatrix",w.projectionMatrix),_t.setValue(D,"viewMatrix",w.matrixWorldInverse);const qt=_t.map.cameraPosition;qt!==void 0&&qt.setValue(D,ge.setFromMatrixPosition(w.matrixWorld)),j.logarithmicDepthBuffer&&_t.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&_t.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,sn=!0,Qs=!0)}if(B.isSkinnedMesh){_t.setOptional(D,B,"bindMatrix"),_t.setOptional(D,B,"bindMatrixInverse");const Ht=B.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),_t.setValue(D,"boneTexture",Ht.boneTexture,K))}B.isBatchedMesh&&(_t.setOptional(D,B,"batchingTexture"),_t.setValue(D,"batchingTexture",B._matricesTexture,K),_t.setOptional(D,B,"batchingIdTexture"),_t.setValue(D,"batchingIdTexture",B._indirectTexture,K),_t.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&_t.setValue(D,"batchingColorTexture",B._colorsTexture,K));const pn=G.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&ae.update(B,G,nn),(sn||Oe.receiveShadow!==B.receiveShadow)&&(Oe.receiveShadow=B.receiveShadow,_t.setValue(D,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(fn.envMap.value=we,fn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(fn.envMapIntensity.value=N.environmentIntensity),sn&&(_t.setValue(D,"toneMappingExposure",_.toneMappingExposure),Oe.needsLights&&Np(fn,Qs),ce&&W.fog===!0&&ne.refreshFogUniforms(fn,ce),ne.refreshMaterialUniforms(fn,W,k,Z,m.state.transmissionRenderTarget[w.id]),$o.upload(D,Lh(Oe),fn,K)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&($o.upload(D,Lh(Oe),fn,K),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&_t.setValue(D,"center",B.center),_t.setValue(D,"modelViewMatrix",B.modelViewMatrix),_t.setValue(D,"normalMatrix",B.normalMatrix),_t.setValue(D,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ht=W.uniformsGroups;for(let qt=0,yl=Ht.length;qt<yl;qt++){const Si=Ht[qt];Ke.update(Si,nn),Ke.bind(Si,nn)}}return nn}function Np(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Op(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,N,G){const W=re.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),re.get(w.texture).__webglTexture=N,re.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,N){const G=re.get(w);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0};const Bp=D.createFramebuffer();this.setRenderTarget=function(w,N=0,G=0){P=w,A=N,R=G;let W=!0,B=null,ce=!1,_e=!1;if(w){const we=re.get(w);if(we.__useDefaultFramebuffer!==void 0)L.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(we.__webglFramebuffer===void 0)K.setupRenderTarget(w);else if(we.__hasExternalTextures)K.rebindTextures(w,re.get(w.texture).__webglTexture,re.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const De=w.depthTexture;if(we.__boundDepthTexture!==De){if(De!==null&&re.has(De)&&(w.width!==De.image.width||w.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(w)}}const Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(_e=!0);const Ve=re.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ve[N])?B=Ve[N][G]:B=Ve[N],ce=!0):w.samples>0&&K.useMultisampledRTT(w)===!1?B=re.get(w).__webglMultisampledFramebuffer:Array.isArray(Ve)?B=Ve[G]:B=Ve,I.copy(w.viewport),U.copy(w.scissor),z=w.scissorTest}else I.copy(Se).multiplyScalar(k).floor(),U.copy(Ge).multiplyScalar(k).floor(),z=We;if(G!==0&&(B=Bp),L.bindFramebuffer(D.FRAMEBUFFER,B)&&W&&L.drawBuffers(w,B),L.viewport(I),L.scissor(U),L.setScissorTest(z),ce){const we=re.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,we.__webglTexture,G)}else if(_e){const we=N;for(let Be=0;Be<w.textures.length;Be++){const Ve=re.get(w.textures[Be]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Be,Ve.__webglTexture,G,we)}}else if(w!==null&&G!==0){const we=re.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,we.__webglTexture,G)}M=-1},this.readRenderTargetPixels=function(w,N,G,W,B,ce,_e,Re=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we){L.bindFramebuffer(D.FRAMEBUFFER,we);try{const Be=w.textures[Re],Ve=Be.format,De=Be.type;if(!j.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-W&&G>=0&&G<=w.height-B&&(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Re),D.readPixels(N,G,W,B,Ie.convert(Ve),Ie.convert(De),ce))}finally{const Be=P!==null?re.get(P).__webglFramebuffer:null;L.bindFramebuffer(D.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(w,N,G,W,B,ce,_e,Re=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we)if(N>=0&&N<=w.width-W&&G>=0&&G<=w.height-B){L.bindFramebuffer(D.FRAMEBUFFER,we);const Be=w.textures[Re],Ve=Be.format,De=Be.type;if(!j.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,tt),D.bufferData(D.PIXEL_PACK_BUFFER,ce.byteLength,D.STREAM_READ),w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Re),D.readPixels(N,G,W,B,Ie.convert(Ve),Ie.convert(De),0);const ut=P!==null?re.get(P).__webglFramebuffer:null;L.bindFramebuffer(D.FRAMEBUFFER,ut);const St=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Gm(D,St,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,tt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ce),D.deleteBuffer(tt),D.deleteSync(St),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,N=null,G=0){const W=Math.pow(2,-G),B=Math.floor(w.image.width*W),ce=Math.floor(w.image.height*W),_e=N!==null?N.x:0,Re=N!==null?N.y:0;K.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,_e,Re,B,ce),L.unbindTexture()};const zp=D.createFramebuffer(),kp=D.createFramebuffer();this.copyTextureToTexture=function(w,N,G=null,W=null,B=0,ce=null){ce===null&&(B!==0?(Dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=B,B=0):ce=0);let _e,Re,we,Be,Ve,De,tt,ut,St;const gt=w.isCompressedTexture?w.mipmaps[ce]:w.image;if(G!==null)_e=G.max.x-G.min.x,Re=G.max.y-G.min.y,we=G.isBox3?G.max.z-G.min.z:1,Be=G.min.x,Ve=G.min.y,De=G.isBox3?G.min.z:0;else{const pn=Math.pow(2,-B);_e=Math.floor(gt.width*pn),Re=Math.floor(gt.height*pn),w.isDataArrayTexture?we=gt.depth:w.isData3DTexture?we=Math.floor(gt.depth*pn):we=1,Be=0,Ve=0,De=0}W!==null?(tt=W.x,ut=W.y,St=W.z):(tt=0,ut=0,St=0);const ft=Ie.convert(N.format),Oe=Ie.convert(N.type);let vt;N.isData3DTexture?(K.setTexture3D(N,0),vt=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(K.setTexture2DArray(N,0),vt=D.TEXTURE_2D_ARRAY):(K.setTexture2D(N,0),vt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const ot=D.getParameter(D.UNPACK_ROW_LENGTH),nn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),is=D.getParameter(D.UNPACK_SKIP_PIXELS),sn=D.getParameter(D.UNPACK_SKIP_ROWS),Qs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Be),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ve),D.pixelStorei(D.UNPACK_SKIP_IMAGES,De);const _t=w.isDataArrayTexture||w.isData3DTexture,fn=N.isDataArrayTexture||N.isData3DTexture;if(w.isDepthTexture){const pn=re.get(w),Ht=re.get(N),qt=re.get(pn.__renderTarget),yl=re.get(Ht.__renderTarget);L.bindFramebuffer(D.READ_FRAMEBUFFER,qt.__webglFramebuffer),L.bindFramebuffer(D.DRAW_FRAMEBUFFER,yl.__webglFramebuffer);for(let Si=0;Si<we;Si++)_t&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,re.get(w).__webglTexture,B,De+Si),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,re.get(N).__webglTexture,ce,St+Si)),D.blitFramebuffer(Be,Ve,_e,Re,tt,ut,_e,Re,D.DEPTH_BUFFER_BIT,D.NEAREST);L.bindFramebuffer(D.READ_FRAMEBUFFER,null),L.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||w.isRenderTargetTexture||re.has(w)){const pn=re.get(w),Ht=re.get(N);L.bindFramebuffer(D.READ_FRAMEBUFFER,zp),L.bindFramebuffer(D.DRAW_FRAMEBUFFER,kp);for(let qt=0;qt<we;qt++)_t?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pn.__webglTexture,B,De+qt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pn.__webglTexture,B),fn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ht.__webglTexture,ce,St+qt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ht.__webglTexture,ce),B!==0?D.blitFramebuffer(Be,Ve,_e,Re,tt,ut,_e,Re,D.COLOR_BUFFER_BIT,D.NEAREST):fn?D.copyTexSubImage3D(vt,ce,tt,ut,St+qt,Be,Ve,_e,Re):D.copyTexSubImage2D(vt,ce,tt,ut,Be,Ve,_e,Re);L.bindFramebuffer(D.READ_FRAMEBUFFER,null),L.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else fn?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(vt,ce,tt,ut,St,_e,Re,we,ft,Oe,gt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(vt,ce,tt,ut,St,_e,Re,we,ft,gt.data):D.texSubImage3D(vt,ce,tt,ut,St,_e,Re,we,ft,Oe,gt):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ce,tt,ut,_e,Re,ft,Oe,gt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ce,tt,ut,gt.width,gt.height,ft,gt.data):D.texSubImage2D(D.TEXTURE_2D,ce,tt,ut,_e,Re,ft,Oe,gt);D.pixelStorei(D.UNPACK_ROW_LENGTH,ot),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,is),D.pixelStorei(D.UNPACK_SKIP_ROWS,sn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Qs),ce===0&&N.generateMipmaps&&D.generateMipmap(vt),L.unbindTexture()},this.initRenderTarget=function(w){re.get(w).__webglFramebuffer===void 0&&K.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?K.setTextureCube(w,0):w.isData3DTexture?K.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?K.setTexture2DArray(w,0):K.setTexture2D(w,0),L.unbindTexture()},this.resetState=function(){A=0,R=0,P=null,L.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const iM=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:$d,AddEquation:ci,AddOperation:Wd,AdditiveAnimationBlendMode:Vc,AdditiveBlending:wr,AgXToneMapping:Kd,AlphaFormat:zc,AlwaysCompare:ff,AlwaysDepth:ea,AlwaysStencilFunc:_c,AmbientLight:ph,AnimationAction:mp,AnimationClip:Br,AnimationLoader:m0,AnimationMixer:G0,AnimationObjectGroup:H0,AnimationUtils:u0,ArcCurve:Df,ArrayCamera:dp,ArrowHelper:px,AttachedBindMode:vc,Audio:fp,AudioAnalyser:I0,AudioContext:mh,AudioListener:C0,AudioLoader:E0,AxesHelper:mx,BackSide:It,BasicDepthPacking:sf,BasicShadowMap:Wp,BatchedMesh:Tf,Bone:Kc,BooleanKeyframeTrack:ts,Box2:j0,Box3:zt,Box3Helper:dx,BoxGeometry:xi,BoxHelper:ux,BufferAttribute:dt,BufferGeometry:$e,BufferGeometryLoader:up,ByteType:Uc,Cache:Fn,Camera:Ja,CameraHelper:vp,CanvasTexture:Pf,CapsuleGeometry:sl,CatmullRomCurve3:Lf,CineonToneMapping:Yd,CircleGeometry:Hs,ClampToEdgeWrapping:Qt,Clock:gl,Color:oe,ColorKeyframeTrack:hh,ColorManagement:it,CompressedArrayTexture:Lg,CompressedCubeTexture:Fg,CompressedTexture:nl,CompressedTextureLoader:g0,ConeGeometry:Xr,ConstantAlphaFactor:Hd,ConstantColorFactor:zd,Controls:xx,CubeCamera:_f,CubeReflectionMapping:Jn,CubeRefractionMapping:ui,CubeTexture:Wr,CubeTextureLoader:x0,CubeUVReflectionMapping:Ws,CubicBezierCurve:eh,CubicBezierCurve3:Ff,CubicInterpolant:jf,CullFaceBack:mc,CullFaceFront:bd,CullFaceFrontBack:Gp,CullFaceNone:Md,Curve:An,CurvePath:Nf,CustomBlending:Ed,CustomToneMapping:Zd,CylinderGeometry:Ys,Cylindrical:Q0,Data3DTexture:Za,DataArrayTexture:$a,DataTexture:Tn,DataTextureLoader:v0,DataUtils:sg,DecrementStencilOp:im,DecrementWrapStencilOp:rm,DefaultLoadingManager:np,DepthFormat:Us,DepthStencilFormat:Ns,DepthTexture:il,DetachedBindMode:Qd,DirectionalLight:fh,DirectionalLightHelper:hx,DiscreteInterpolant:ep,DodecahedronGeometry:rl,DoubleSide:Ln,DstAlphaFactor:Fd,DstColorFactor:Nd,DynamicCopyUsage:ym,DynamicDrawUsage:pm,DynamicReadUsage:xm,EdgesGeometry:If,EllipseCurve:ol,EqualCompare:cf,EqualDepth:na,EqualStencilFunc:cm,EquirectangularReflectionMapping:Er,EquirectangularRefractionMapping:Tr,Euler:dn,EventDispatcher:Nn,ExternalTexture:Qc,ExtrudeGeometry:al,FileLoader:jn,Float16BufferAttribute:ug,Float32BufferAttribute:be,FloatType:jt,Fog:di,FogExp2:Qa,FramebufferTexture:Dg,FrontSide:Kn,Frustum:qs,FrustumArray:tl,GLBufferAttribute:$0,GLSL1:Mm,GLSL3:yc,GreaterCompare:hf,GreaterDepth:sa,GreaterEqualCompare:df,GreaterEqualDepth:ia,GreaterEqualStencilFunc:fm,GreaterStencilFunc:um,GridHelper:lx,Group:Vi,HalfFloatType:mi,HemisphereLight:sp,HemisphereLightHelper:ax,IcosahedronGeometry:ll,ImageBitmapLoader:w0,ImageLoader:zr,ImageUtils:gf,IncrementStencilOp:nm,IncrementWrapStencilOp:sm,InstancedBufferAttribute:ks,InstancedBufferGeometry:hp,InstancedInterleavedBuffer:Y0,InstancedMesh:Ef,Int16BufferAttribute:cg,Int32BufferAttribute:hg,Int8BufferAttribute:og,IntType:Va,InterleavedBuffer:ja,InterleavedBufferAttribute:Qi,Interpolant:$r,InterpolateDiscrete:Ar,InterpolateLinear:Fa,InterpolateSmooth:qo,InterpolationSamplingMode:Em,InterpolationSamplingType:wm,InvertStencilOp:om,KeepStencilOp:Oi,KeyframeTrack:_n,LOD:bf,LatheGeometry:cl,Layers:Ka,LessCompare:lf,LessDepth:ta,LessEqualCompare:Gc,LessEqualDepth:Yi,LessEqualStencilFunc:hm,LessStencilFunc:lm,Light:_i,LightProbe:cp,Line:fi,Line3:nx,LineBasicMaterial:Xt,LineCurve:th,LineCurve3:Uf,LineDashedMaterial:Kf,LineLoop:Af,LineSegments:On,LinearFilter:xt,LinearInterpolant:ch,LinearMipMapLinearFilter:jd,LinearMipMapNearestFilter:Yp,LinearMipmapLinearFilter:wn,LinearMipmapNearestFilter:mr,LinearSRGBColorSpace:Ji,LinearToneMapping:Xd,LinearTransfer:Rr,Loader:tn,LoaderUtils:Ec,LoadingManager:uh,LoopOnce:ef,LoopPingPong:nf,LoopRepeat:tf,MOUSE:Hp,Material:kt,MaterialLoader:ml,MathUtils:Xe,Matrix2:_h,Matrix3:Ye,Matrix4:Fe,MaxEquation:Rd,Mesh:pt,MeshBasicMaterial:xn,MeshDepthMaterial:oh,MeshDistanceMaterial:ah,MeshLambertMaterial:$f,MeshMatcapMaterial:Zf,MeshNormalMaterial:Yf,MeshPhongMaterial:Xf,MeshPhysicalMaterial:Wf,MeshStandardMaterial:rh,MeshToonMaterial:qf,MinEquation:Cd,MirroredRepeatWrapping:Zi,MixOperation:Gd,MultiplyBlending:xc,MultiplyOperation:kr,NearestFilter:Lt,NearestMipMapLinearFilter:qp,NearestMipMapNearestFilter:Xp,NearestMipmapLinearFilter:Rs,NearestMipmapNearestFilter:Fc,NeutralToneMapping:Jd,NeverCompare:af,NeverDepth:jo,NeverStencilFunc:am,NoBlending:Un,NoColorSpace:qn,NoToneMapping:$n,NormalAnimationBlendMode:Ya,NormalBlending:Wi,NotEqualCompare:uf,NotEqualDepth:ra,NotEqualStencilFunc:dm,NumberKeyframeTrack:Nr,Object3D:st,ObjectLoader:M0,ObjectSpaceNormalMap:of,OctahedronGeometry:qr,OneFactor:Id,OneMinusConstantAlphaFactor:Vd,OneMinusConstantColorFactor:kd,OneMinusDstAlphaFactor:Ud,OneMinusDstColorFactor:Od,OneMinusSrcAlphaFactor:Qo,OneMinusSrcColorFactor:Ld,OrthographicCamera:$s,PCFShadowMap:Lc,PCFSoftShadowMap:wd,PMREMGenerator:Cc,Path:Ba,PerspectiveCamera:Pt,Plane:li,PlaneGeometry:es,PlaneHelper:fx,PointLight:op,PointLightHelper:rx,Points:Cf,PointsMaterial:Jc,PolarGridHelper:cx,PolyhedronGeometry:vi,PositionalAudio:P0,PropertyBinding:rt,PropertyMixer:pp,QuadraticBezierCurve:nh,QuadraticBezierCurve3:ih,Quaternion:en,QuaternionKeyframeTrack:Zr,QuaternionLinearInterpolant:tp,RED_GREEN_RGTC2_Format:Da,RED_RGTC1_Format:Pa,REVISION:ka,RGBADepthPacking:rf,RGBAFormat:Bt,RGBAIntegerFormat:qa,RGBA_ASTC_10x10_Format:wa,RGBA_ASTC_10x5_Format:Sa,RGBA_ASTC_10x6_Format:Ma,RGBA_ASTC_10x8_Format:ba,RGBA_ASTC_12x10_Format:Ea,RGBA_ASTC_12x12_Format:Ta,RGBA_ASTC_4x4_Format:fa,RGBA_ASTC_5x4_Format:pa,RGBA_ASTC_5x5_Format:ma,RGBA_ASTC_6x5_Format:ga,RGBA_ASTC_6x6_Format:xa,RGBA_ASTC_8x5_Format:va,RGBA_ASTC_8x6_Format:_a,RGBA_ASTC_8x8_Format:ya,RGBA_BPTC_Format:Aa,RGBA_ETC2_EAC_Format:da,RGBA_PVRTC_2BPPV1_Format:ca,RGBA_PVRTC_4BPPV1_Format:la,RGBA_S3TC_DXT1_Format:xr,RGBA_S3TC_DXT3_Format:vr,RGBA_S3TC_DXT5_Format:_r,RGBDepthPacking:Qp,RGBFormat:kc,RGBIntegerFormat:$p,RGB_BPTC_SIGNED_Format:Ca,RGB_BPTC_UNSIGNED_Format:Ra,RGB_ETC1_Format:ha,RGB_ETC2_Format:ua,RGB_PVRTC_2BPPV1_Format:aa,RGB_PVRTC_4BPPV1_Format:oa,RGB_S3TC_DXT1_Format:gr,RGDepthPacking:jp,RGFormat:Hc,RGIntegerFormat:Xa,RawShaderMaterial:Gf,Ray:Xs,Raycaster:gp,RectAreaLight:ap,RedFormat:Hr,RedIntegerFormat:Vr,ReinhardToneMapping:qd,RenderTarget:Xc,RenderTarget3D:W0,RepeatWrapping:$i,ReplaceStencilOp:tm,ReverseSubtractEquation:Ad,RingGeometry:Yr,SIGNED_RED_GREEN_RGTC2_Format:La,SIGNED_RED_RGTC1_Format:Ia,SRGBColorSpace:Zt,SRGBTransfer:ht,Scene:$c,ShaderChunk:Je,ShaderLib:bn,ShaderMaterial:Et,ShadowMaterial:Vf,Shape:qi,ShapeGeometry:hl,ShapePath:gx,ShapeUtils:En,ShortType:Nc,Skeleton:el,SkeletonHelper:sx,SkinnedMesh:wf,Source:hi,Sphere:Ft,SphereGeometry:pi,Spherical:J0,SphericalHarmonics3:lp,SplineCurve:sh,SpotLight:rp,SpotLightHelper:ix,Sprite:Mf,SpriteMaterial:Zc,SrcAlphaFactor:Jo,SrcAlphaSaturateFactor:Bd,SrcColorFactor:Dd,StaticCopyUsage:_m,StaticDrawUsage:Pr,StaticReadUsage:gm,StereoCamera:T0,StreamCopyUsage:Sm,StreamDrawUsage:mm,StreamReadUsage:vm,StringKeyframeTrack:ns,SubtractEquation:Td,SubtractiveBlending:gc,TOUCH:Vp,TangentSpaceNormalMap:gi,TetrahedronGeometry:ul,Texture:bt,TextureLoader:ip,TextureUtils:Mx,Timer:Z0,TimestampQuery:bm,TorusGeometry:dl,TorusKnotGeometry:fl,Triangle:Jt,TriangleFanDrawMode:Jp,TriangleStripDrawMode:Kp,TrianglesDrawMode:Zp,TubeGeometry:pl,UVMapping:Ha,Uint16BufferAttribute:qc,Uint32BufferAttribute:Yc,Uint8BufferAttribute:ag,Uint8ClampedBufferAttribute:lg,Uniform:vh,UniformsGroup:q0,UniformsLib:me,UniformsUtils:Gr,UnsignedByteType:vn,UnsignedInt101111Type:Bc,UnsignedInt248Type:Ki,UnsignedInt5999Type:Oc,UnsignedIntType:Qn,UnsignedShort4444Type:Ga,UnsignedShort5551Type:Wa,UnsignedShortType:Fs,VSMShadowMap:Dn,Vector2:J,Vector3:T,Vector4:nt,VectorKeyframeTrack:Or,VideoFrameTexture:Ig,VideoTexture:Rf,WebGL3DRenderTarget:$m,WebGLArrayRenderTarget:Ym,WebGLCoordinateSystem:cn,WebGLCubeRenderTarget:yf,WebGLRenderTarget:un,WebGLRenderer:Ep,WebGLUtils:wp,WebGPUCoordinateSystem:Os,WebXRController:Yo,WireframeGeometry:Hf,WrapAroundEnding:Cr,ZeroCurvatureEnding:ki,ZeroFactor:Pd,ZeroSlopeEnding:Hi,ZeroStencilOp:em,createCanvasElement:mf},Symbol.toStringTag,{value:"Module"})),Pc={canvas:!!window.CanvasRenderingContext2D,webgl:(function(){try{return!!window.WebGLRenderingContext&&!!document.createElement("canvas").getContext("experimental-webgl")}catch{return!1}})(),workers:!!window.Worker,fileapi:window.File&&window.FileReader&&window.FileList&&window.Blob,getWebGLErrorMessage:function(){var r=document.createElement("div");return r.id="webgl-error-message",r.style.fontFamily="monospace",r.style.fontSize="13px",r.style.fontWeight="normal",r.style.textAlign="center",r.style.background="#fff",r.style.color="#000",r.style.padding="1.5em",r.style.width="400px",r.style.margin="5em auto 0",this.webgl||(r.innerHTML=window.WebGLRenderingContext?['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join(`
`):['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join(`
`)),r},addGetWebGLMessage:function(r){var e,t,n;r=r||{},e=r.parent!==void 0?r.parent:document.body,t=r.id!==void 0?r.id:"oldie",n=Pc.getWebGLErrorMessage(),n.id=t,e.appendChild(n)}};function sM(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Zo={exports:{}},rM=Zo.exports,ud;function oM(){return ud||(ud=1,(function(r,e){(function(t,n){r.exports=n()})(rM,function(){var t=function(){function n(f){return o.appendChild(f.dom),f}function i(f){for(var p=0;p<o.children.length;p++)o.children[p].style.display=p===f?"block":"none";s=f}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(f){f.preventDefault(),i(++s%o.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,u=n(new t.Panel("FPS","#0ff","#002")),h=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:o,addPanel:n,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var f=(performance||Date).now();if(h.update(f-a,200),f>l+1e3&&(u.update(1e3*c/(f-l),100),l=f,c=0,d)){var p=performance.memory;d.update(p.usedJSHeapSize/1048576,p.jsHeapSizeLimit/1048576)}return f},update:function(){a=this.end()},domElement:o,setMode:i}};return t.Panel=function(n,i,s){var o=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,h=48*c,d=3*c,f=2*c,p=3*c,x=15*c,g=74*c,m=30*c,y=document.createElement("canvas");y.width=u,y.height=h,y.style.cssText="width:80px;height:48px";var v=y.getContext("2d");return v.font="bold "+9*c+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=s,v.fillRect(0,0,u,h),v.fillStyle=i,v.fillText(n,d,f),v.fillRect(p,x,g,m),v.fillStyle=s,v.globalAlpha=.9,v.fillRect(p,x,g,m),{dom:y,update:function(_,E){o=Math.min(o,_),a=Math.max(a,_),v.fillStyle=s,v.globalAlpha=1,v.fillRect(0,0,u,x),v.fillStyle=i,v.fillText(l(_)+" "+n+" ("+l(o)+"-"+l(a)+")",d,f),v.drawImage(y,p+c,x,g-c,m,p,x,g-c,m),v.fillRect(p+g-c,x,c,m),v.fillStyle=s,v.globalAlpha=.9,v.fillRect(p+g-c,x,c,l((1-_/E)*m))}}},t})})(Zo)),Zo.exports}var aM=oM();const lM=sM(aM),Kt=document.getElementById("threejs-container"),Le=new Pt(70,1,1,3e4);Le.position.z=80;Le.fov=70;Le.up=new T(0,1,1);const Tp=function(){Le.aspect=Kt.offsetWidth/Kt.offsetHeight,Le.updateProjectionMatrix()};window.addEventListener("resize",Tp,!1);Tp();const dd={cube:new xi(200,200,200),sky:new pi(8e3,64,64),sky2:new pi(5e3,64,64)},Ap="src/assets/textures/",Cp=new ip,vl=Cp.load(Ap+"sky.png"),Ks=Cp.load(Ap+"rock.jpg");Ks.magFilter=xt;Ks.generateMipmaps=!0;Ks.minFilter=wn;const Rp=r=>{const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d");return t.fillStyle=r,t.fillRect(0,0,64,64),new Pf(e)},Sh=Rp("#4a7c59"),Mh=Rp("#ffffff"),br={sky:vl,grass:Sh,rock:Ks,snow:Mh};[vl,Sh,Ks,Mh].forEach(r=>{r.wrapS=r.wrapT=$i});[Sh,Ks,Mh].forEach(r=>{r.wrapS=r.wrapT=$i});vl.wrapS=Qt;vl.wrapT=Qt;const cM=`varying float vDistance;
varying float vElevation;

void main() {
  vDistance = distance( cameraPosition, position );

  // Calculate elevation angle from camera to vertex
  vec3 worldPos = (modelMatrix * vec4(position, 1.0)).xyz;
  vec3 dirToVertex = normalize(worldPos - cameraPosition);
  vElevation = dirToVertex.z; // Z component gives us elevation (-1 to 1)

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,hM=`uniform vec3 uHorizonColor;
uniform vec3 uSkyColor;

varying float vDistance;
varying float vElevation;

void main() {
  // Use elevation angle for gradient (horizon = 0, zenith = 1, nadir = -1)
  float blend = smoothstep( -0.1, 0.6, vElevation );
  vec3 color = mix( uHorizonColor, uSkyColor, blend );
  gl_FragColor = vec4( color, 0.8 ); // Semi-transparent
}
`,Es={atmosphere:new Et({uniforms:{uHorizonColor:{type:"c",value:new oe(16773592)},uSkyColor:{type:"c",value:new oe(16382463)}},vertexShader:cM,fragmentShader:hM,side:It,depthWrite:!1}),sky:new xn({map:br.sky,side:It})};class uM{constructor(e=null){this.perm=new Uint8Array(512);const t=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];let n=t;if(e!==null){n=[...t];let i=this._mulberry32(e);for(let s=n.length-1;s>0;s--){const o=Math.floor(i()*(s+1));[n[s],n[o]]=[n[o],n[s]]}}for(let i=0;i<512;i++)this.perm[i]=n[i&255]}fade(e){return e*e*e*(e*(e*6-15)+10)}lerp(e,t,n){return t+e*(n-t)}grad(e,t,n,i){const s=e&15,o=s<8?t:n,a=s<4?n:s===12||s===14?t:i;return((s&1)===0?o:-o)+((s&2)===0?a:-a)}noise(e,t,n){const i=Math.floor(e)&255,s=Math.floor(t)&255,o=Math.floor(n)&255;e-=Math.floor(e),t-=Math.floor(t),n-=Math.floor(n);const a=this.fade(e),l=this.fade(t),c=this.fade(n),u=this.perm[i]+s,h=this.perm[u]+o,d=this.perm[u+1]+o,f=this.perm[i+1]+s,p=this.perm[f]+o,x=this.perm[f+1]+o;return this.lerp(c,this.lerp(l,this.lerp(a,this.grad(this.perm[h],e,t,n),this.grad(this.perm[p],e-1,t,n)),this.lerp(a,this.grad(this.perm[d],e,t-1,n),this.grad(this.perm[x],e-1,t-1,n))),this.lerp(l,this.lerp(a,this.grad(this.perm[h+1],e,t,n-1),this.grad(this.perm[p+1],e-1,t,n-1)),this.lerp(a,this.grad(this.perm[d+1],e,t-1,n-1),this.grad(this.perm[x+1],e-1,t-1,n-1))))}noise2D(e,t){return this.noise(e,t,0)}noise1D(e){return this.noise(e,0,0)}fbm(e,t,n,i=4,s=.5,o=2){let a=0,l=1,c=1,u=0;for(let h=0;h<i;h++)a+=this.noise(e*l,t*l,n*l)*c,u+=c,c*=s,l*=o;return a/u}turbulence(e,t,n,i=4){let s=0,o=1,a=1,l=0;for(let c=0;c<i;c++)s+=Math.abs(this.noise(e*o,t*o,n*o))*a,l+=a,a*=.5,o*=2;return s/l}_mulberry32(e){return function(){let t=e+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}generate2D(e,t,n=.05){const i=new Float32Array(e*t);for(let s=0;s<t;s++)for(let o=0;o<e;o++){const a=this.noise2D(o*n,s*n);i[s*e+o]=a}return i}static thermalErosion(e,t,n,i=30,s=.01){const o=e.slice(),a=[[1,0],[-1,0],[0,1],[0,-1]];for(let l=0;l<i;l++)for(let c=1;c<n-1;c++)for(let u=1;u<t-1;u++){const h=c*t+u;let d=0,f=-1;for(const[p,x]of a){const g=(c+x)*t+(u+p),m=o[h]-o[g];m>d&&(d=m,f=g)}if(d>s&&f>=0){const p=d*.5;o[h]-=p,o[f]+=p}}return o}static hydraulicErosion(e,t,n,i=1e4,s=.05,o=4,a=.1,l=.3){const c=e.slice(),u=Math.random;for(let h=0;h<i;h++){let d=u()*(t-1),f=u()*(n-1),p=0,x=0,g=0,m=1;for(let y=0;y<30;y++){const v=Math.floor(d),_=Math.floor(f);if(v<1||_<1||v>=t-1||_>=n-1)break;const E=_*t+v,A=c[E],R=(c[E+1]-c[E-1])*.5,P=(c[E+t]-c[E-t])*.5;p=p*s-R*(1-s),x=x*s-P*(1-s);const M=Math.sqrt(p*p+x*x)||1;p/=M,x/=M,d+=p,f+=x;const b=Math.floor(f)*t+Math.floor(d),U=c[b]-A,z=Math.max(-U*m*o,.01);if(g>z){const q=(g-z)*a;c[E]+=q,g-=q}else{const q=Math.min((z-g)*l,c[E]);c[E]-=q,g+=q}m=Math.sqrt(m*m+U*.1)}}return c}static smoothHeightmap(e,t,n,i=1){const s=e.slice(),o=e.slice();for(let a=0;a<i;a++){for(let l=1;l<n-1;l++)for(let c=1;c<t-1;c++){const u=l*t+c;let h=0;h+=s[u],h+=s[u-1],h+=s[u+1],h+=s[u-t],h+=s[u+t],o[u]=h/5}s.set(o)}return s}}const dM=256,Pp=64,Ip=1024,fM=.25,pM=120;let et=dM,an=et*et,Ds=new Float32Array(an),pr=new Float32Array(an),Ic=new Float32Array(an),Gs=new Uint8Array(an),Dp=1,za=fM,Dc=1;const ln=new Tn(Gs,et,et,Hr,vn);ln.wrapS=Zi;ln.wrapT=Zi;ln.magFilter=xt;ln.minFilter=jd;ln.generateMipmaps=!0;ln.needsUpdate=!0;Lp();const mM=Pp,gM=Ip;function xM(){return et}function vM(r){const e=bM(Xe.clamp(Math.round(r),Pp,Ip));return e===et||(et=e,an=et*et,Ds=new Float32Array(an),pr=new Float32Array(an),Ic=new Float32Array(an),Gs=new Uint8Array(an),typeof ln.dispose=="function"&&ln.dispose(),ln.image={data:Gs,width:et,height:et},ln.mipmaps=[],ln.needsUpdate=!0,Lp()),et}function fd(r){const e=Xe.clamp(r,0,1);Math.abs(e-za)<1e-4||(za=e,bh(e))}function pd(r){const e=Xe.clamp(r,0,4);Math.abs(e-Dc)<1e-4||(Dc=e,bh(za))}function _M(r,e){const t={x:r/1024,y:e/1024},n=Math.floor(t.x%1*et),i=Math.floor(t.y%1*et),s=Math.min(an-1,Math.max(0,i*et+n));let o=Gs[s]/255*1024;const a=Math.floor(t.x*16%1*et),l=Math.floor(t.y*16%1*et),c=Math.min(an-1,Math.max(0,l*et+a));return o+=Gs[c]/255*64,o*o/2e3}function Lp(){yM(),bh(za)}function yM(){const r=new uM,e=Math.random()*100;Ds.fill(0);let t=1,n=0;for(let i=0;i<4;i++){for(let s=0;s<an;s++){const o=s%et,a=Math.floor(s/et),l=Math.abs(r.noise(o/t,a/t,e));Ds[s]+=l*t,Ds[s]>n&&(n=Ds[s])}t*=5}Dp=n>0?255/n:1}function bh(r){const e=Xe.clamp(r,0,1),t=Math.round(e*pM);if(pr.set(Ds),t>0&&e>0){let n=pr,i=Ic;for(let s=0;s<t;s++){const o=t>1?s/Math.max(t-1,1):1,a=Xe.lerp(.15,.85,Math.max(e,o));SM(n,i,a);const l=n;n=i,i=l}t%2===1&&pr.set(Ic)}MM(pr)}function SM(r,e,t){for(let n=0;n<et;n++)e[n]=r[n],e[(et-1)*et+n]=r[(et-1)*et+n];for(let n=1;n<et-1;n++){const i=n*et;e[i]=r[i],e[i+et-1]=r[i+et-1];for(let s=1;s<et-1;s++){const o=i+s,a=r[o],l=r[o-1]+r[o+1]+r[o-et]+r[o+et],c=r[o-et-1]+r[o-et+1]+r[o+et-1]+r[o+et+1],u=(a*4+l*2+c)/16;e[o]=Xe.lerp(a,u,t)}}}function MM(r){for(let e=0;e<an;e++){const t=Math.max(0,Math.min(255,Math.round(r[e]*Dp*Dc)));Gs[e]=t}ln.needsUpdate=!0}function bM(r){const e=Math.ceil(Math.log2(r));return Math.pow(2,e)}Kt.innerHTML="";const Dt=new Ep({clearColor:0});Dt.sortObjects=!1;Dt.autoClear=!1;Kt.appendChild(Dt.domElement);let wh=1;const Eh=()=>{Dt.setPixelRatio(wh),Dt.setSize(Kt.offsetWidth,Kt.offsetHeight)};window.addEventListener("resize",Eh,!1);Eh();function wM(r){wh=Xe.clamp(r,.5,3),Eh()}function EM(){return wh}const at=new $c;at.fog=new di(0,300,1e3);const TM=`precision highp float;
precision highp sampler2D;

uniform vec3 uGlobalOffset;
uniform sampler2D uHeightData;
uniform vec2 uTileOffset;
uniform float uScale;
uniform float uTileResolution;
uniform float uMorphRegion;

varying vec3 vNormal;
varying vec3 vPosition;
varying float vMorphFactor;

float getHeight(vec3 p) {
  // Assume a 1024x1024 world
  float lod = 0.0;//log2(uScale) - 6.0;
  vec2 st = p.xy / 1024.0;

  // Sample multiple times to get more detail out of map
  float h = 1024.0 * texture2D(uHeightData, st).r;
  h += 64.0 * texture2D(uHeightData, 16.0 * st).r;
  h += 4.0 * texture2D(uHeightData, 256.0 * st).r;

  // Square the height, leads to more rocky looking terrain
  return h * h / 2000.0;
  //return h / 10.0;
}

vec3 getNormal() {
  // Get 2 vectors perpendicular to the unperturbed normal, and create at point at each (relative to position)
  //float delta = 1024.0 / 4.0;
  float delta = (vMorphFactor + 1.0) * uScale / uTileResolution;
  vec3 dA = delta * normalize(cross(normal.yzx, normal));
  vec3 dB = delta * normalize(cross(dA, normal));
  vec3 p = vPosition;
  vec3 pA = vPosition + dA;
  vec3 pB = vPosition + dB;

  // Now get the height at those points
  float h = getHeight(vPosition);
  float hA = getHeight(pA);
  float hB = getHeight(pB);

  // Update the points with their correct heights and calculate true normal
  p += normal * h;
  pA += normal * hA;
  pB += normal * hB;
  return normalize(cross(pB - p, pA - p));
}

uniform int uEdgeMorph;

#define EGDE_MORPH_TOP 1
#define EGDE_MORPH_LEFT 2
#define EGDE_MORPH_BOTTOM 4
#define EGDE_MORPH_RIGHT 8

// Poor man's bitwise &
bool edgePresent(int edge) {
  int e = uEdgeMorph / edge;
  return 2 * ( e / 2 ) != e;
}

// At the edges of tiles morph the vertices, if they are joining onto a higher layer
float calculateMorph(vec3 p) {
  float morphFactor = 0.0;
  float morphRegion = max(uMorphRegion, 0.0001);
  if( edgePresent(EGDE_MORPH_TOP) && p.y >= 1.0 - morphRegion ) {
    float m = 1.0 - clamp((1.0 - p.y) / morphRegion, 0.0, 1.0);
    morphFactor = max(m, morphFactor);
  }
  if( edgePresent(EGDE_MORPH_LEFT) && p.x <= morphRegion ) {
    float m = 1.0 - clamp(p.x / morphRegion, 0.0, 1.0);
    morphFactor = max(m, morphFactor);
  }
  if( edgePresent(EGDE_MORPH_BOTTOM) && p.y <= morphRegion ) {
    float m = 1.0 - clamp(p.y / morphRegion, 0.0, 1.0);
    morphFactor = max(m, morphFactor);
  }
  if( edgePresent(EGDE_MORPH_RIGHT) && p.x >= 1.0 - morphRegion ) {
    float m = 1.0 - clamp((1.0 - p.x) / morphRegion, 0.0, 1.0);
    morphFactor = max(m, morphFactor);
  }

  return morphFactor;
}

void main() {
  // Morph factor tells us how close we are to next level.
  // 0.0 is this level
  // 1.0 is next level
  vMorphFactor = calculateMorph(position);

  // Move into correct place
  vPosition = uScale * position + vec3(uTileOffset, 0.0) + uGlobalOffset;

  // Snap to grid
  float grid = uScale / uTileResolution;
  vPosition = floor(vPosition / grid) * grid;

  // Morph between zoom layers
  if( vMorphFactor > 0.0 ) {
    // Get position that we would have if we were on higher level grid
    grid = 2.0 * grid;
    vec3 position2 = floor(vPosition / grid) * grid;

    // Linearly interpolate the two, depending on morph factor
    vPosition = mix(vPosition, position2, vMorphFactor);
  }

  // Get height and calculate normal
  vPosition = vPosition + normal * getHeight(vPosition);
  vNormal = getNormal();
  //vNormal = normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
`,AM=`precision highp float;
precision highp sampler2D;

uniform float uScale;
uniform sampler2D uHeightData;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uFadeStart;
uniform float uFadeEnd;
uniform vec3 uSunDirection;
uniform float uSunIntensity;
uniform float uSunWarmth;
uniform float uSpecularStrength;
uniform vec3 uAmbientDirection;
uniform float uAmbientIntensity;
uniform vec3 uAmbientColor;
uniform float uSmoothFactor;
uniform vec3 uSkyTintColor;
uniform float uSkyTintStrength;
#include <terrainShadow.glsl>

varying float vMorphFactor;
varying vec3 vNormal;
varying vec3 vPosition;

vec3 colorForScale(float scale) {
  if ( scale > 32.0 ) {
    scale /= 32.0;
  }
  if ( scale <= 1.0 ) {
    return vec3(1.0, 0, 0);
  } else if ( scale <= 2.0 ) {
    return vec3(0, 1.0, 0);
  } else if ( scale <= 4.0 ) {
    return vec3(0, 0, 1.0);
  } else if ( scale <= 8.0 ) {
    return vec3(1.0, 1.0, 0);
  } else if ( scale <= 16.0 ) {
    return vec3(1.0, 0, 1.0);
  } else if ( scale <= 32.0 ) {
    return vec3(1.0, 1.0, 1.0);
  }

  // Shouldn't happen
  return vec3(0, 0, 0);
}

float getHeight(vec3 p) {
  // Assume a 1024x1024 world
  vec2 st = p.xy / 1024.0;

  // Sample multiple times to get more detail out of map
  float h = 1024.0 * texture2D(uHeightData, st).r;
  h += 64.0 * texture2D(uHeightData, 16.0 * st).r;
  h += 4.0 * texture2D(uHeightData, 256.0 * st).r;

  // Square the height, leads to more rocky looking terrain
  return h * h / 2000.0;
}

vec3 getNormal() {
  // Differentiate the position vector (this will give us two vectors perpendicular to the surface)
  // Before differentiating, add the displacement based on the height from the height map. By doing this
  // calculation here, rather than in the vertex shader, we get a per-fragment calculated normal, rather
  // than a per-vertex normal. This improves the look of distant low-vertex terrain.
  float height = getHeight( vPosition );
  vec3 p = vec3( vPosition.xy, height );
  vec3 dPositiondx = dFdx(p);
  vec3 dPositiondy = dFdy(p);

  // The normal is the cross product of the differentials
  return normalize(cross(dPositiondx, dPositiondy));
}

void main() {
  vec3 color = vec3(0.27, 0.27, 0.17);
  vec3 normal = normalize(mix(normalize(vNormal), getNormal(), uSmoothFactor));

  vec3 sunDir = normalize(uSunDirection);
  float viewDistance = length(cameraPosition - vPosition);
  float shadowFactor = computeShadowFactor(vPosition);
  float sunStrength = clamp(uSunIntensity, 0.0, 4.0) * shadowFactor;
  float diffuse = max(dot(normal, sunDir), 0.0);
  float diffuseTerm = pow(diffuse, 0.75) * sunStrength;
  color = mix(vec3(0.05, 0.05, 0.08), color, clamp(0.25 + diffuseTerm, 0.0, 1.2));
  float sunInfluence = clamp(diffuse * sunStrength, 0.0, 1.0);
  vec3 sunTint = mix(vec3(0.62, 0.75, 0.98), vec3(1.05, 0.72, 0.48), clamp(uSunWarmth, 0.0, 1.0));
  color = mix(color, color * sunTint, sunInfluence * 0.6);

  vec3 ambientDir = normalize(uAmbientDirection);
  float ambientTerm = max(dot(normal, ambientDir), 0.0) * uAmbientIntensity;
  color += uAmbientColor * ambientTerm;

  float skyFacing = clamp(normal.z, 0.0, 1.0);
  float skyTintMix = uSkyTintStrength * pow(skyFacing, 0.65);
  color = mix(color, uSkyTintColor, skyTintMix);

  vec3 viewDir = normalize(cameraPosition - vPosition);
  vec3 halfVector = normalize(sunDir + viewDir);
  float specular = pow(max(dot(normal, halfVector), 0.0), 30.0) * sunStrength * uSpecularStrength;
  vec3 specTint = mix(vec3(0.75, 0.82, 1.0), sunTint, 0.6);
  color += specTint * (0.08 * specular);

  // Add height fog
  float fogFactor = clamp( 1.0 - vPosition.z / 25.0, 0.0, 1.0 );
  fogFactor = pow( fogFactor, 5.4 );
  color = mix( color, vec3( 1.0, 0.9, 0.8 ), fogFactor );

  // Add distance fog
  float distToCamera = viewDistance;
  float fogRange = max(uFogFar - uFogNear, 0.0001);
  fogFactor = clamp((distToCamera - uFogNear) / fogRange, 0.0, 1.0);
  //fogFactor = fogFactor * ( 1.0 - clamp( ( camH - 5.0 ) / 8.0, 0.0, 1.0 ) );
  color = mix( color, uFogColor, fogFactor );

  float edgeFade = 1.0;
  if (uFadeEnd > uFadeStart) {
    float distToCamera = length(cameraPosition - vPosition);
    edgeFade = 1.0 - clamp((distToCamera - uFadeStart) / (uFadeEnd - uFadeStart), 0.0, 1.0);
  }
  color *= edgeFade;

  gl_FragColor = vec4(color, edgeFade);
}
`,CM=`precision highp float;
precision highp sampler2D;

uniform float uScale;
uniform sampler2D uHeightData;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uFadeStart;
uniform float uFadeEnd;
uniform vec3 uSunDirection;
uniform float uSunIntensity;
uniform float uSunWarmth; // This is now optional
uniform float uSpecularStrength;
uniform vec3 uAmbientDirection;
uniform float uAmbientIntensity;
uniform vec3 uAmbientColor;
uniform float uSmoothFactor;
uniform vec3 uSkyTintColor;
uniform float uSkyTintStrength;
#include <terrainShadow.glsl>

uniform sampler2D uGrass;
uniform sampler2D uRock;
uniform sampler2D uSnow;

varying float vMorphFactor;
varying vec3 vNormal;
varying vec3 vPosition;


void main() {
  // Base color
  vec3 terrainNormal = normalize(cross(dFdx(vPosition), dFdy(vPosition)));
  vec3 normal = normalize(mix(normalize(vNormal), terrainNormal, uSmoothFactor));
  vec3 sunDir = normalize(uSunDirection);
  float viewDistance = length(cameraPosition - vPosition);
  float shadowFactor = computeShadowFactor(vPosition);
  float sunStrength = clamp(uSunIntensity, 0.0, 4.0) * shadowFactor;

  // Combine textures based on height and normal
  float texScale = 0.03;

  float snowStick = dot( vec3( 0, 0, 1.0 ), normal );
  snowStick = pow( snowStick, 3.0 );
  snowStick = step( 0.2, snowStick );
  
  vec3 rock = texture2D( uRock, texScale * vPosition.xy ).rgb;
  vec3 snow = vec3( 0.93, 0.97, 1.0 );
  vec3 color = mix( rock, snow, snowStick );

  // Incident light
  float diffuse = max(dot(normal, sunDir), 0.0);
  float lightMix = 0.03 + 0.97 * pow(diffuse, 0.72) * sunStrength;
  color = mix(vec3(0.02, 0.02, 0.03), color, clamp(lightMix, 0.0, 1.2));
  color = mix(color, vec3(0.81, 0.9, 1.0), 0.2 * clamp(diffuse * sunStrength, 0.0, 1.0));
  
  // --- YELLOW COLOR REMOVED FROM SUN TINT ---
  vec3 sunTint = vec3(0.62, 0.78, 1.02); // Using a cool, neutral tint
  float sunInfluence = clamp(diffuse * sunStrength, 0.0, 1.0);
  color = mix(color, color * sunTint, sunInfluence * 0.55);

  vec3 ambientDir = normalize(uAmbientDirection);
  float ambientTerm = max(dot(normal, ambientDir), 0.0) * uAmbientIntensity;
  color += uAmbientColor * ambientTerm;

  float skyFacing = clamp(normal.z, 0.0, 1.0);
  float skyTintMix = uSkyTintStrength * pow(skyFacing, 0.75);
  color = mix(color, uSkyTintColor, skyTintMix);

  // Mix in specular light
  vec3 viewDir = normalize(cameraPosition - vPosition);
  vec3 halfVector = normalize(sunDir + viewDir);
  float specular = pow(max(dot(normal, halfVector), 0.0), 25.0) * sunStrength * uSpecularStrength;
  vec3 specTint = mix(vec3(0.9, 0.98, 1.0), sunTint, 0.5);
  color = mix(color, specTint, 0.15 * specular * uSpecularStrength);

  // Add height fog
  float fogFactor = clamp( 1.0 - vPosition.z / 155.0, 0.0, 1.0 );
  fogFactor = 0.96 * pow( fogFactor, 5.4 );
  vec3 fogColor = vec3( 0.86, 0.95, 1.0 );
  color = mix( color, fogColor, fogFactor );

  // Add distance fog
  float distToCamera = viewDistance;
  float fogRange = max(uFogFar - uFogNear, 0.0001);
  fogFactor = clamp((distToCamera - uFogNear) / fogRange, 0.0, 1.0);

  // --- YELLOW COLOR REMOVED FROM FOG ---
  fogColor = uFogColor; // Using the base fog color without the yellow tint
  color = mix( color, fogColor, fogFactor );

  float edgeFade = 1.0;
  if (uFadeEnd > uFadeStart) {
    float distToCameraFade = viewDistance;
    edgeFade = 1.0 - clamp((distToCameraFade - uFadeStart) / (uFadeEnd - uFadeStart), 0.0, 1.0);
  }
  color *= edgeFade;

  gl_FragColor = vec4(color, edgeFade);
}`,RM=`
precision highp float;
precision highp sampler2D;

uniform float uScale;
uniform sampler2D uHeightData;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uFadeStart;
uniform float uFadeEnd;
uniform vec3 uSunDirection;
uniform float uSunIntensity;
uniform float uSunWarmth;
uniform float uSpecularStrength;
uniform vec3 uAmbientDirection;
uniform float uAmbientIntensity;
uniform vec3 uAmbientColor;
uniform float uSmoothFactor;
uniform vec3 uSkyTintColor;
uniform float uSkyTintStrength;
#include <terrainShadow.glsl>

varying float vMorphFactor;
varying vec3 vNormal;
varying vec3 vPosition;

vec3 colorForScale(float scale) {
  if ( scale > 32.0 ) {
    scale /= 32.0;
  }
  if ( scale <= 1.0 ) {
    return vec3(1.0, 0, 0);
  } else if ( scale <= 2.0 ) {
    return vec3(0, 1.0, 0);
  } else if ( scale <= 4.0 ) {
    return vec3(0, 0, 1.0);
  } else if ( scale <= 8.0 ) {
    return vec3(1.0, 1.0, 0);
  } else if ( scale <= 16.0 ) {
    return vec3(1.0, 0, 1.0);
  } else if ( scale <= 32.0 ) {
    return vec3(1.0, 1.0, 1.0);
  }

  // Shouldn't happen
  return vec3(0, 0, 0);
}

float getHeight( vec3 p ) {
  // Assume a 1024x1024 world
  vec2 st = p.xy / 1024.0;

  // Sample multiple times to get more detail out of map
  float h = 1024.0 * texture2D(uHeightData, st).r;
  h += 64.0 * texture2D(uHeightData, 16.0 * st).r;
  //h += 4.0 * texture2D(uHeightData, 256.0 * st).r;

  // Square the height, leads to more rocky looking terrain
  return h * h / 2000.0;
}

void main() {
  vec3 sunDir = normalize(uSunDirection);
  float viewDistance = length(cameraPosition - vPosition);
  float shadowFactor = computeShadowFactor(vPosition);
  float sunStrength = clamp(uSunIntensity, 0.0, 4.0) * shadowFactor;

  // Combine textures based on height and normal (use rougher normal from vertex shader)
  float texScale = 0.03;

  // Grass stick determines effect of normal on presence of grass
  float grassStick = dot( vec3( 0, 0, 1.0 ), vNormal );
  grassStick = pow( grassStick, 3.0 );
  grassStick = step( 0.2, grassStick );

  vec3 water = vec3( 0.23, 0.08, 0.345 );
  vec3 terrainNormal = normalize(cross(dFdx(vPosition), dFdy(vPosition)));
  vec3 normal = normalize(mix(normalize(vNormal), terrainNormal, uSmoothFactor));
  vec3 grass = vec3( 0.12, 0.87, 0.14 );
  vec3 rock = vec3( 0.31, 0.11, 0.09 );
  float waterBlend = smoothstep( 7.0, 14.0, vPosition.z );
  float waterMask = 1.0 - waterBlend;
  vec3 color = mix( water, grass, waterBlend );
  color = mix( rock, color, grassStick );

  // Incident light (generate shadows and highlights)
  float incidence = max(dot(sunDir, normal), 0.0);
  float litAttenuation = 0.03 + 0.97 * pow(incidence, 0.01) * sunStrength;
  color = mix(vec3(0.0, 0.0, 0.0), color, clamp(litAttenuation, 0.0, 1.2));
  color = mix(color, vec3(0.81, 0.9, 1.0), 0.2 * clamp(incidence * sunStrength, 0.0, 1.0));
  float sunInfluence = clamp(incidence * sunStrength, 0.0, 1.0);
  vec3 sunTint = mix(vec3(0.62, 0.75, 0.98), vec3(1.05, 0.72, 0.48), clamp(uSunWarmth, 0.0, 1.0));
  color = mix(color, color * sunTint, sunInfluence * 0.6);
  vec3 ambientDir = normalize(uAmbientDirection);
  float ambientTerm = max(dot(normal, ambientDir), 0.0) * uAmbientIntensity;
  color += uAmbientColor * ambientTerm;

  if (waterMask > 0.0) {
    float shadowDarken = mix(0.35, 1.0, shadowFactor);
    color = mix(color * shadowDarken, color, 1.0 - clamp(waterMask, 0.0, 1.0));
  }

  float skyFacing = clamp(normal.z, 0.0, 1.0);
  float skyTintMix = uSkyTintStrength * pow(skyFacing, 0.65) * shadowFactor;
  color = mix(color, uSkyTintColor, skyTintMix);

  // Add height fog
  float fogFactor = smoothstep( 10.0, 8.0, vPosition.z );
  fogFactor = 0.93 * pow( fogFactor, 1.4 );
  //vec3 fogColor = mix( vec3( 0.86, 0.95, 1.0 ), vec3( 0.98, 0.77, 0.33), fogAngle );
  vec3 fogColor = vec3( 0.0, 0.6 + 0.4 * smoothstep( 3.0, 10.0, vPosition.z ), 0.935 );
  float waterShadow = mix(0.25, 1.0, shadowFactor);
  if (waterMask > 0.0) {
    fogColor = mix(fogColor * waterShadow, fogColor, waterBlend);
  }
  color = mix( color, fogColor, fogFactor );

  // Add distance fog
  float distToCamera = viewDistance;
  float fogRange = max(uFogFar - uFogNear, 0.0001);
  fogFactor = clamp((distToCamera - uFogNear) / fogRange, 0.0, 1.0);
  fogColor = uFogColor;
  if (waterMask > 0.0) {
    fogColor = mix(fogColor * waterShadow, fogColor, waterBlend);
  }
  color = mix( color, fogColor, fogFactor );

  float edgeFade = 1.0;
  if (uFadeEnd > uFadeStart) {
    float distToCameraFade = viewDistance;
    edgeFade = 1.0 - clamp((distToCameraFade - uFadeStart) / (uFadeEnd - uFadeStart), 0.0, 1.0);
  }
  color *= edgeFade;

  gl_FragColor = vec4(color, edgeFade);
}
`,PM=`precision highp float;
precision highp sampler2D;

uniform float uScale;
uniform sampler2D uHeightData;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uFadeStart;
uniform float uFadeEnd;
uniform vec3 uSunDirection;
uniform float uSunIntensity;
uniform float uSunWarmth;
uniform float uSpecularStrength;
uniform vec3 uAmbientDirection;
uniform float uAmbientIntensity;
uniform vec3 uAmbientColor;
uniform float uSmoothFactor;
uniform vec3 uSkyTintColor;
uniform float uSkyTintStrength;
#include <terrainShadow.glsl>

uniform sampler2D uGrass;
uniform sampler2D uRock;
uniform sampler2D uSnow;

varying float vMorphFactor;
varying vec3 vNormal;
varying vec3 vPosition;

float getHeight(vec3 p) {
  vec2 st = p.xy / 1024.0;

  float h = 1024.0 * texture2D(uHeightData, st).r;
  h += 64.0 * texture2D(uHeightData, 16.0 * st).r;
  return h * h / 2000.0;
}

vec3 getNormal() {
  float height = getHeight(vPosition);
  vec3 p = vec3(vPosition.xy, height);
  vec3 dPositiondx = dFdx(p);
  vec3 dPositiondy = dFdy(p);
  return normalize(cross(dPositiondx, dPositiondy));
}

void main() {
  vec3 normal = normalize(mix(vNormal, getNormal(), uSmoothFactor));
  float viewDistance = length(cameraPosition - vPosition);
  float shadowFactor = computeShadowFactor(vPosition);
  vec3 up = vec3(0.0, 0.0, 1.0);
  float slope = clamp(dot(normal, up), 0.0, 1.0);

  float height = vPosition.z;
  float texScale = 0.03;

  vec3 grass = texture2D(uGrass, texScale * vPosition.xy).rgb;
  vec3 rock = texture2D(uRock, texScale * vPosition.xy).rgb;
  vec3 snow = texture2D(uSnow, texScale * vPosition.xy).rgb;
  vec3 waterDeep = vec3(0.62, 0.66, 0.68);
  vec3 waterShallow = vec3(0.78, 0.81, 0.84);

  float waterLevel = 5.0;
  float grassUpper = 32.0;
  float rockLower = 28.0;
  float rockUpper = 75.0;
  float snowLower = 70.0;

  float waterWeight = 1.0 - smoothstep(waterLevel - 4.0, waterLevel + 2.0, height);
  float shallowFactor = smoothstep(waterLevel - 6.0, waterLevel + 1.0, height);
  vec3 water = mix(waterDeep, waterShallow, shallowFactor);

  float grassWeight = smoothstep(waterLevel - 6.0, grassUpper + 12.0, height);
  grassWeight *= 1.0 - smoothstep(rockLower - 6.0, rockLower + 10.0, height);
  grassWeight *= pow(slope, 1.5);

  float rockWeight = smoothstep(rockLower - 12.0, rockLower + 18.0, height);
  rockWeight *= 1.0 - smoothstep(rockUpper - 8.0, rockUpper + 12.0, height);
  float slopeRock = pow(1.0 - slope, 2.2);
  rockWeight = max(rockWeight, slopeRock);

  float snowStick = pow(slope, 3.0);
  float snowWeight = smoothstep(snowLower - 15.0, snowLower + 15.0, height) * snowStick;

  float total = waterWeight + grassWeight + rockWeight + snowWeight;
  if (total < 0.0001) {
    grassWeight = 1.0;
    total = 1.0;
  }

  vec3 color =
      (waterWeight * water + grassWeight * grass + rockWeight * rock + snowWeight * snow) /
      total;

  float waterContribution = waterWeight / total;

  vec3 sunDir = normalize(uSunDirection);
  float sunStrength = clamp(uSunIntensity, 0.0, 4.0) * shadowFactor;
  float incidence = max(dot(sunDir, normal), 0.0);
  incidence = pow(incidence, 0.8);
  color = mix(vec3(0.08, 0.06, 0.07), color, clamp(0.25 + 0.8 * incidence * sunStrength, 0.0, 1.2));
  float clampedWarmth = clamp(uSunWarmth, 0.0, 1.0);
  vec3 sunTint = mix(vec3(0.62, 0.75, 0.98), vec3(1.05, 0.72, 0.48), clampedWarmth);
  vec3 warmTint = mix(vec3(0.52, 0.62, 0.88), vec3(0.72, 0.4, 0.28), clampedWarmth);
  vec3 coolTint = mix(vec3(0.62, 0.78, 0.92), vec3(0.48, 0.68, 0.82), 1.0 - clampedWarmth);
  float reverseFacing = max(dot(normal, -sunDir), 0.0);
  color = mix(color, warmTint, clamp(rockWeight * reverseFacing * 0.45 * sunStrength, 0.0, 0.6));
  color = mix(color, coolTint, clamp(rockWeight * incidence * 0.25 * sunStrength, 0.0, 0.4));
  float sunInfluence = clamp(incidence * sunStrength, 0.0, 1.0);
  color = mix(color, color * sunTint, sunInfluence * 0.45);

  vec3 ambientDir = normalize(uAmbientDirection);
  float ambientTerm = max(dot(normal, ambientDir), 0.0) * uAmbientIntensity;
  color += uAmbientColor * ambientTerm;

  float skyFacing = clamp(normal.z, 0.0, 1.0);
  float dryWeight = clamp(1.0 - waterContribution, 0.0, 1.0);
  float skyTintMix = uSkyTintStrength * dryWeight * pow(skyFacing, 0.65);
  color = mix(color, uSkyTintColor, skyTintMix);

  vec3 viewDir = normalize(cameraPosition - vPosition);
  vec3 halfVector = normalize(viewDir + sunDir);
  float specular = pow(max(dot(normal, halfVector), 0.0), 20.0) * 1.6 * sunStrength * uSpecularStrength;
  vec3 specTint = mix(vec3(0.92, 0.98, 1.0), sunTint, 0.6);
  color = mix(color, specTint, 0.3 * specular * uSpecularStrength);

  if (waterContribution > 0.001) {
    float facing = clamp(1.0 - max(dot(normal, viewDir), 0.0), 0.0, 1.0);
    float fresnel = pow(facing, 3.0);
    vec3 reflectionColor = mix(water, vec3(0.7, 0.82, 0.95), fresnel);
    color = mix(
      color,
      reflectionColor,
      waterContribution * (0.35 + 0.45 * fresnel * sunStrength)
    );
  }

  float distToCamera = viewDistance;
  float fogRange = max(uFogFar - uFogNear, 0.0001);
  float fogFactor = clamp((distToCamera - uFogNear) / fogRange, 0.0, 1.0);
  vec3 fogTint = mix(uFogColor, vec3(0.78, 0.88, 1.0), 0.45);
  color = mix(color, fogTint, fogFactor);

  float edgeFade = 1.0;
  if (uFadeEnd > uFadeStart) {
    edgeFade = 1.0 - clamp((distToCamera - uFadeStart) / (uFadeEnd - uFadeStart), 0.0, 1.0);
  }
  color *= edgeFade;

  gl_FragColor = vec4(color, edgeFade);
}
`,IM=`precision highp float;
precision highp sampler2D;

uniform float uScale;
uniform sampler2D uHeightData;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uFadeStart;
uniform float uFadeEnd;
uniform vec3 uSunDirection;
uniform float uSunIntensity;
uniform float uSunWarmth;
uniform float uSpecularStrength;
uniform vec3 uAmbientDirection;
uniform float uAmbientIntensity;
uniform vec3 uAmbientColor;
uniform float uSmoothFactor;
#include <terrainShadow.glsl>

uniform sampler2D uRock;

varying float vMorphFactor;
varying vec3 vNormal;
varying vec3 vPosition;

float getHeight(vec3 p) {
  vec2 st = p.xy / 1024.0;
  float h = 1024.0 * texture2D(uHeightData, st).r;
  h += 64.0 * texture2D(uHeightData, 16.0 * st).r;
  return h * h / 2000.0;
}

vec3 getNormal() {
  float height = getHeight(vPosition);
  vec3 p = vec3(vPosition.xy, height);
  vec3 dPositiondx = dFdx(p);
  vec3 dPositiondy = dFdy(p);
  return normalize(cross(dPositiondx, dPositiondy));
}

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

void main() {
  vec3 normal = normalize(mix(vNormal, getNormal(), uSmoothFactor));
  float height = vPosition.z;
  float viewDistance = length(cameraPosition - vPosition);
  float shadowFactor = computeShadowFactor(vPosition);
  float texScale = 0.03;

  vec3 rockColor = texture2D(uRock, texScale * vPosition.xy).rgb;
  rockColor = mix(rockColor, vec3(0.3, 0.25, 0.22), 0.35);

  float lavaLevel = 8.5;
  float depthMask = smoothstep(lavaLevel + 2.0, lavaLevel - 14.0, height);
  float slope = 1.0 - clamp(dot(normal, vec3(0.0, 0.0, 1.0)), 0.0, 1.0);
  float slopeMask = pow(slope, 1.05);

  float lavaNoise = hash21(vPosition.xy * 0.12);
  lavaNoise += 0.5 * hash21(vPosition.yx * 0.22 + 17.0);
  lavaNoise += sin(vPosition.x * 0.08) * 0.25 + cos(vPosition.y * 0.12) * 0.25;
  lavaNoise = clamp(0.5 + 0.5 * lavaNoise, 0.0, 1.0);
  lavaNoise = clamp(lavaNoise, 0.0, 1.0);

  float lavaMask = clamp(mix(depthMask, depthMask * slopeMask, 0.25) + 0.22 * slopeMask, 0.0, 1.0);

  float ridgeHeightMask = smoothstep(lavaLevel + 2.0, lavaLevel + 1.5, height) * smoothstep(lavaLevel + 8.0, lavaLevel + 2.0, height);
  float ridgeNoise = pow(clamp(hash21(vPosition.xy * 0.34 + 12.37), 0.0, 1.0), 2.5);
  float ridgeContribution = ridgeHeightMask * slopeMask * ridgeNoise;
  lavaMask = clamp(lavaMask + 0.25 * ridgeContribution, 0.0, 1.0);

  lavaMask = smoothstep(0.1, 0.9, lavaMask);

  vec3 lavaHot = vec3(4.0, 1.25, 0.25);
  vec3 lavaCool = vec3(1.2, 0.14, 0.03);
  vec3 lavaColor = mix(lavaHot, lavaCool, pow(lavaNoise, 2.5));

  vec3 baseColor = mix(rockColor, lavaColor, lavaMask);

  vec3 sunDir = normalize(uSunDirection);
  float sunStrength = clamp(uSunIntensity, 0.0, 4.0) * shadowFactor;
  float diffuse = max(dot(normal, sunDir), 0.0);
  baseColor = mix(vec3(0.05, 0.04, 0.05), baseColor, 0.35 + 0.65 * pow(diffuse, 0.8) * sunStrength);
  float sunInfluence = clamp(diffuse * sunStrength, 0.0, 1.0);
  vec3 sunTint = mix(vec3(0.6, 0.72, 0.95), vec3(1.05, 0.7, 0.42), clamp(uSunWarmth, 0.0, 1.0));
  baseColor = mix(baseColor, baseColor * sunTint, sunInfluence * 0.45);

  vec3 ambientDir = normalize(uAmbientDirection);
  float ambientTerm = max(dot(normal, ambientDir), 0.0) * uAmbientIntensity;
  baseColor += uAmbientColor * ambientTerm;

  vec3 viewDir = normalize(cameraPosition - vPosition);
  vec3 halfVector = normalize(viewDir + sunDir);
  float specular = pow(max(dot(normal, halfVector), 0.0), 14.0) * sunStrength * uSpecularStrength;
  vec3 specTint = mix(vec3(0.45, 0.42, 0.38), sunTint, 0.55);
  baseColor += specTint * specular * 0.6;

  vec3 lavaGlow = lavaColor * lavaMask * 6.0;
  baseColor += lavaGlow;

  float distToCamera = viewDistance;
  float fogRange = max(uFogFar - uFogNear, 0.0001);
  float fogFactor = clamp((distToCamera - uFogNear) / fogRange, 0.0, 1.0);
  vec3 fogTint = mix(uFogColor, vec3(0.7, 0.25, 0.15), 0.25);
  baseColor = mix(baseColor, fogTint, fogFactor);

  float edgeFade = 1.0;
  if (uFadeEnd > uFadeStart) {
    edgeFade = 1.0 - clamp((distToCamera - uFadeStart) / (uFadeEnd - uFadeStart), 0.0, 1.0);
  }

  gl_FragColor = vec4(baseColor * edgeFade, edgeFade);
}
`,DM=`precision highp float;
precision highp sampler2D;

uniform float uScale;
uniform sampler2D uHeightData;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uFadeStart;
uniform float uFadeEnd;
uniform vec3 uSunDirection;
uniform float uSunIntensity;
uniform float uSunWarmth;
uniform float uSpecularStrength;
uniform vec3 uAmbientDirection;
uniform float uAmbientIntensity;
uniform vec3 uAmbientColor;
uniform float uSmoothFactor;
uniform vec3 uSkyTintColor;
uniform float uSkyTintStrength;
#include <terrainShadow.glsl>

varying float vMorphFactor;
varying vec3 vNormal;
varying vec3 vPosition;

float getHeight(vec3 p) {
  vec2 st = p.xy / 1024.0;
  float h = 1024.0 * texture2D(uHeightData, st).r;
  h += 64.0 * texture2D(uHeightData, 16.0 * st).r;
  h += 4.0 * texture2D(uHeightData, 256.0 * st).r;
  return h * h / 2000.0;
}

vec3 getNormal() {
  float height = getHeight(vPosition);
  vec3 p = vec3(vPosition.xy, height);
  vec3 dPositiondx = dFdx(p);
  vec3 dPositiondy = dFdy(p);
  return normalize(cross(dPositiondx, dPositiondy));
}

float hash(vec3 p) {
  return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
}

float noise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);

  float n000 = hash(i);
  float n100 = hash(i + vec3(1.0, 0.0, 0.0));
  float n010 = hash(i + vec3(0.0, 1.0, 0.0));
  float n110 = hash(i + vec3(1.0, 1.0, 0.0));
  float n001 = hash(i + vec3(0.0, 0.0, 1.0));
  float n101 = hash(i + vec3(1.0, 0.0, 1.0));
  float n011 = hash(i + vec3(0.0, 1.0, 1.0));
  float n111 = hash(i + vec3(1.0, 1.0, 1.0));

  vec3 u = f * f * (3.0 - 2.0 * f);

  float nx00 = mix(n000, n100, u.x);
  float nx10 = mix(n010, n110, u.x);
  float nx01 = mix(n001, n101, u.x);
  float nx11 = mix(n011, n111, u.x);

  float nxy0 = mix(nx00, nx10, u.y);
  float nxy1 = mix(nx01, nx11, u.y);

  return mix(nxy0, nxy1, u.z);
}

float fbm(vec3 p) {
  float value = 0.0;
  float amplitude = 0.3;
  vec3 shift = vec3(37.1, 17.3, 29.7);

  for (int i = 0; i < 4; ++i) {
    value += amplitude * noise(p);
    p = p * 2.2 + shift;
    amplitude *= 0.25;
  }

  return value;
}

vec3 prismPalette(vec3 worldPos) {
  vec3 scaled = worldPos * 0.08;
  float bandA = fbm(scaled * 1.4);
  float bandB = fbm(scaled * 3.6 + vec3(2.3, 4.1, -1.7));
  float bandC = fbm(scaled * 6.4 + vec3(-5.2, 3.7, 2.9));

  vec3 c1 = vec3(0.45, 0.88, 1.45);
  vec3 c2 = vec3(0.86, 0.55, 1.28);
  vec3 c3 = vec3(0.28, 1.05, 0.82);
  vec3 c4 = vec3(1.35, 0.82, 0.48);

  vec3 base = mix(c1, c2, smoothstep(0.15, 0.85, bandA));
  vec3 accent = mix(c3, c4, smoothstep(0.2, 0.8, bandB));
  vec3 blend = mix(base, accent, bandC);

  float sparkle = fbm(worldPos * 0.22 + vec3(8.2, -1.7, 3.4));
  blend += vec3(1.35, 1.6, 1.9) * sparkle * 0.35;

  return blend;
}

void main() {
  vec3 baseNormal = normalize(vNormal);
  vec3 refinedNormal = normalize(mix(baseNormal, getNormal(), uSmoothFactor));
  vec3 sunDir = normalize(uSunDirection);
  vec3 viewDir = normalize(cameraPosition - vPosition);
  float viewDistance = length(cameraPosition - vPosition);
  float shadowFactor = computeShadowFactor(vPosition);

  vec3 prism = prismPalette(vPosition);
  float facing = clamp(dot(refinedNormal, viewDir), 0.0, 1.0);
  float fresnel = pow(1.0 - facing, 2.5);
  vec3 color = mix(prism * 0.4, prism, fresnel);

  float sunStrength = clamp(uSunIntensity, 0.0, 6.0) * shadowFactor;
  float diffuse = max(dot(refinedNormal, sunDir), 0.0);
  color += prism * pow(diffuse, 1.5) * sunStrength * 0.6;
  float sunInfluence = clamp(diffuse * sunStrength, 0.0, 1.0);
  vec3 sunTint = mix(vec3(0.62, 0.75, 0.98), vec3(1.05, 0.72, 0.48), clamp(uSunWarmth, 0.0, 1.0));
  color = mix(color, color * sunTint, sunInfluence * 0.4);

  vec3 halfVec = normalize(sunDir + viewDir);
  float specular = pow(max(dot(refinedNormal, halfVec), 0.0), 96.0);
  vec3 specTint = mix(vec3(1.2, 1.1, 1.4), sunTint, 0.65);
  color += specTint * specular * uSpecularStrength * sunStrength * 2.4;

  float ambientTerm = max(dot(refinedNormal, normalize(uAmbientDirection)), 0.0);
  color += uAmbientColor * ambientTerm * (uAmbientIntensity * 1.2);

  float skyFacing = clamp(refinedNormal.z, 0.0, 1.0);
  float tintMix = uSkyTintStrength * pow(skyFacing, 0.8);
  color = mix(color, uSkyTintColor * 1.35, tintMix);

  float fogRange = max(uFogFar - uFogNear, 0.0001);
  float fogFactor = clamp((viewDistance - uFogNear) / fogRange, 0.0, 1.0);
  vec3 fogged = mix(color, uFogColor, fogFactor * 0.9);

  float edgeFade = 1.0;
  if (uFadeEnd > uFadeStart) {
    edgeFade = 1.0 - clamp((viewDistance - uFadeStart) / (uFadeEnd - uFadeStart), 0.0, 1.0);
  }

  gl_FragColor = vec4(fogged * edgeFade, edgeFade);
}
`,LM=`precision highp float;
precision highp sampler2D;

uniform float uScale;
uniform sampler2D uHeightData;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uFadeStart;
uniform float uFadeEnd;
uniform vec3 uSunDirection;
uniform float uSunIntensity;
uniform float uSunWarmth;
uniform float uSpecularStrength;
uniform vec3 uAmbientDirection;
uniform float uAmbientIntensity;
uniform vec3 uAmbientColor;
uniform float uSmoothFactor;
#include <terrainShadow.glsl>

uniform sampler2D uRock;

varying float vMorphFactor;
varying vec3 vNormal;
varying vec3 vPosition;

float getHeight(vec3 p) {
  vec2 st = p.xy / 1024.0;
  float h = 1024.0 * texture2D(uHeightData, st).r;
  h += 64.0 * texture2D(uHeightData, 16.0 * st).r;
  return h * h / 2000.0;
}

vec3 getNormal() {
  float height = getHeight(vPosition);
  vec3 p = vec3(vPosition.xy, height);
  vec3 dPositiondx = dFdx(p);
  vec3 dPositiondy = dFdy(p);
  return normalize(cross(dPositiondx, dPositiondy));
}

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

void main() {
  vec3 normal = normalize(mix(vNormal, getNormal(), uSmoothFactor));
  float height = vPosition.z;
  float viewDistance = length(cameraPosition - vPosition);
  float shadowFactor = computeShadowFactor(vPosition);
  float texScale = 0.025;

  // Base rock texture with Martian tint
  vec3 rockColor = texture2D(uRock, texScale * vPosition.xy).rgb;
  rockColor = mix(rockColor, vec3(0.45, 0.25, 0.15), 0.6); // Rusty brown base

  // Martian surface variations
  float slope = 1.0 - clamp(dot(normal, vec3(0.0, 0.0, 1.0)), 0.0, 1.0);

  // Generate noise for surface variation
  float noise1 = hash21(vPosition.xy * 0.08);
  float noise2 = hash21(vPosition.yx * 0.15 + 23.7);
  float noise3 = hash21(vPosition.xy * 0.32 + 45.2);
  float combinedNoise = noise1 * 0.5 + noise2 * 0.3 + noise3 * 0.2;

  // Different Martian soil colors
  vec3 marsRed = vec3(0.7, 0.25, 0.15);      // Iron oxide red
  vec3 marsOrange = vec3(0.8, 0.4, 0.2);     // Rusty orange
  vec3 marsBrown = vec3(0.5, 0.3, 0.2);      // Dark soil
  vec3 marsYellow = vec3(0.6, 0.5, 0.25);    // Dusty areas

  // Height-based color variation (like sediment layers)
  float heightFactor = clamp(height / 100.0, 0.0, 1.0);
  vec3 lowColor = mix(marsRed, marsBrown, combinedNoise);
  vec3 midColor = mix(marsOrange, marsRed, combinedNoise * 0.7);
  vec3 highColor = mix(marsYellow, marsOrange, combinedNoise * 0.5);

  vec3 heightColor = mix(lowColor, midColor, smoothstep(0.3, 0.7, heightFactor));
  heightColor = mix(heightColor, highColor, smoothstep(0.6, 1.0, heightFactor));

  // Slope-based variation (exposed rock on steep slopes)
  float slopeMask = pow(slope, 0.8);
  vec3 rockMarsColor = mix(rockColor, vec3(0.6, 0.35, 0.25), 0.4);
  vec3 surfaceColor = mix(heightColor, rockMarsColor, slopeMask * 0.6);

  // Add dust/sand in flat areas
  float flatMask = 1.0 - slope;
  vec3 dustColor = mix(marsRed, marsYellow, combinedNoise);
  surfaceColor = mix(surfaceColor, dustColor, flatMask * 0.3 * combinedNoise);

  vec3 baseColor = surfaceColor;

  // Sun lighting with Mars atmosphere tint
  vec3 sunDir = normalize(uSunDirection);
  float sunStrength = clamp(uSunIntensity, 0.0, 4.0) * shadowFactor;
  float diffuse = max(dot(normal, sunDir), 0.0);

  // Martian atmosphere scatters more red light
  baseColor = mix(vec3(0.08, 0.04, 0.03), baseColor, 0.25 + 0.75 * pow(diffuse, 0.9) * sunStrength);

  float sunInfluence = clamp(diffuse * sunStrength, 0.0, 1.0);
  vec3 sunTint = mix(vec3(0.8, 0.6, 0.5), vec3(1.1, 0.8, 0.4), clamp(uSunWarmth, 0.0, 1.0));
  baseColor = mix(baseColor, baseColor * sunTint, sunInfluence * 0.4);

  // Ambient lighting
  vec3 ambientDir = normalize(uAmbientDirection);
  float ambientTerm = max(dot(normal, ambientDir), 0.0) * uAmbientIntensity;
  vec3 marsAmbient = mix(uAmbientColor, vec3(0.6, 0.4, 0.3), 0.5); // Reddish ambient
  baseColor += marsAmbient * ambientTerm * 0.8;

  // Specular highlights (dusty surface, low specularity)
  vec3 viewDir = normalize(cameraPosition - vPosition);
  vec3 halfVector = normalize(viewDir + sunDir);
  float specular = pow(max(dot(normal, halfVector), 0.0), 8.0) * sunStrength * uSpecularStrength;
  vec3 specTint = mix(vec3(0.5, 0.4, 0.3), sunTint, 0.4);
  baseColor += specTint * specular * 0.2; // Low specularity for dusty Mars surface

  // Martian atmosphere fog (butterscotch/orange tint)
  float distToCamera = viewDistance;
  float fogRange = max(uFogFar - uFogNear, 0.0001);

  // Start with normalized distance
  float normalizedDistance = (distToCamera - uFogNear) / fogRange;
  normalizedDistance = clamp(normalizedDistance, 0.0, 1.0);

  // Apply smoothstep for gradual transition
  float fogFactor = smoothstep(0.0, 1.0, normalizedDistance);

  // Add slight exponential curve for more natural atmospheric effect
  fogFactor = 1.0 - exp(-2.0 * fogFactor);

  vec3 marsFogColor = mix(uFogColor, vec3(0.8, 0.5, 0.3), 0.6); // Orange-tinted fog
  baseColor = mix(baseColor, marsFogColor, fogFactor);

  // Edge fade with smoother transition
  float edgeFade = 1.0;
  if (uFadeEnd > uFadeStart) {
    float fadeRange = (distToCamera - uFadeStart) / (uFadeEnd - uFadeStart);
    fadeRange = clamp(fadeRange, 0.0, 1.0);
    // Use smoothstep for gradual edge fade
    edgeFade = 1.0 - smoothstep(0.0, 1.0, fadeRange);
  }

  gl_FragColor = vec4(baseColor * edgeFade, edgeFade);
}`,FM=`precision highp float;

varying vec3 vNormal;
varying vec3 vPosition;
varying float vMorphFactor;

void main() {
  // Depth-only pass, color output is disabled.
  gl_FragColor = vec4(1.0);
}
`,UM=`vec3 colorForScale(float scale) {
  if ( scale > 32.0 ) {
    scale /= 32.0;
  }
  if ( scale <= 1.0 ) {
    return vec3(1.0, 0, 0);
  } else if ( scale <= 2.0 ) {
    return vec3(0, 1.0, 0);
  } else if ( scale <= 4.0 ) {
    return vec3(0, 0, 1.0);
  } else if ( scale <= 8.0 ) {
    return vec3(1.0, 1.0, 0);
  } else if ( scale <= 16.0 ) {
    return vec3(1.0, 0, 1.0);
  } else if ( scale <= 32.0 ) {
    return vec3(1.0, 1.0, 1.0);
  }

  // Shouldn't happen
  return vec3(0, 0, 0);
}
`,NM=`uniform int uEdgeMorph;

#define EGDE_MORPH_TOP 1
#define EGDE_MORPH_LEFT 2
#define EGDE_MORPH_BOTTOM 4
#define EGDE_MORPH_RIGHT 8

// Poor man's bitwise &
bool edgePresent(int edge) {
  int e = uEdgeMorph / edge;
  return 2 * ( e / 2 ) != e;
}

#define MORPH_REGION 0.3

// At the edges of tiles morph the vertices, if they are joining onto a higher layer
float calculateMorph(vec3 p) {
  float morphFactor = 0.0;
  if( edgePresent(EGDE_MORPH_TOP) && p.y >= 1.0 - MORPH_REGION ) {
    float m = 1.0 - clamp((1.0 - p.y) / MORPH_REGION, 0.0, 1.0);
    morphFactor = max(m, morphFactor);
  }
  if( edgePresent(EGDE_MORPH_LEFT) && p.x <= MORPH_REGION ) {
    float m = 1.0 - clamp(p.x / MORPH_REGION, 0.0, 1.0);
    morphFactor = max(m, morphFactor);
  }
  if( edgePresent(EGDE_MORPH_BOTTOM) && p.y <= MORPH_REGION ) {
    float m = 1.0 - clamp(p.y / MORPH_REGION, 0.0, 1.0);
    morphFactor = max(m, morphFactor);
  }
  if( edgePresent(EGDE_MORPH_RIGHT) && p.x >= 1.0 - MORPH_REGION ) {
    float m = 1.0 - clamp((1.0 - p.x) / MORPH_REGION, 0.0, 1.0);
    morphFactor = max(m, morphFactor);
  }

  return morphFactor;
}
`,OM=`uniform sampler2D uShadowMap0;
uniform sampler2D uShadowMap1;
uniform sampler2D uShadowMap2;
uniform vec4 uCascadeSplits;
uniform mat4 uShadowMatrices[3];
uniform float uShadowBias;
uniform float uShadowStrength;
uniform float uShadowsEnabled;
uniform vec3 uCascadeEnabled;
uniform mat4 uViewMatrix;
uniform vec2 uShadowTexelSize;
uniform float uShadowSoftness;

float readShadowDepth(int cascadeIndex, vec2 uv) {
  if (cascadeIndex == 0) {
    return texture2D(uShadowMap0, uv).r;
  } else if (cascadeIndex == 1) {
    return texture2D(uShadowMap1, uv).r;
  }
  return texture2D(uShadowMap2, uv).r;
}

float filteredShadow(float currentDepth, int cascadeIndex, vec2 baseUV, float radius) {
  float occlusion = 0.0;
  float samples = 0.0;
  for (int x = -1; x <= 1; x++) {
    for (int y = -1; y <= 1; y++) {
      vec2 offset = vec2(float(x), float(y)) * uShadowTexelSize * radius;
      vec2 sampleUV = baseUV + offset;
      if (sampleUV.x < 0.0 || sampleUV.x > 1.0 || sampleUV.y < 0.0 || sampleUV.y > 1.0) {
        continue;
      }
      samples += 1.0;
      float shadowDepth = readShadowDepth(cascadeIndex, sampleUV);
      if (currentDepth > shadowDepth) {
        occlusion += 1.0;
      }
    }
  }
  if (samples <= 0.0) return 0.0;
  return occlusion / samples;
}

float sampleShadowCascade(int cascadeIndex, vec3 worldPos) {
  mat4 lightMatrix = uShadowMatrices[cascadeIndex];
  vec4 lightPos = lightMatrix * vec4(worldPos, 1.0);
  vec3 projCoords = lightPos.xyz / lightPos.w;
  projCoords = projCoords * 0.5 + 0.5;

  float currentDepth = projCoords.z - uShadowBias;
  if (projCoords.z > 1.0 || projCoords.z < 0.0) {
    return 1.0;
  }

  float cascadeScale = float(cascadeIndex) / 2.0;
  float baseRadius = mix(0.85, 2.4, cascadeScale);

  float hardPortion = filteredShadow(currentDepth, cascadeIndex, projCoords.xy, baseRadius);

  if (hardPortion <= 0.001 || hardPortion >= 0.999) {
    return mix(1.0, 1.0 - uShadowStrength, hardPortion);
  }

  float softRadius = baseRadius * uShadowSoftness;
  float softPortion = filteredShadow(currentDepth, cascadeIndex, projCoords.xy, softRadius);
  float penumbraBlend = smoothstep(0.0, 1.0, hardPortion);
  float finalPortion = mix(hardPortion, softPortion, penumbraBlend);
  return mix(1.0, 1.0 - uShadowStrength, finalPortion);
}

float computeShadowFactor(vec3 worldPos) {
  if (uShadowsEnabled < 0.5) {
    return 1.0;
  }

  vec4 viewPos = uViewMatrix * vec4(worldPos, 1.0);
  float viewDistance = -viewPos.z;
  if (viewDistance < 0.0 || viewDistance > uCascadeSplits.w) {
    return 1.0;
  }

  int cascadeIndex = 0;
  if (viewDistance > uCascadeSplits.x) cascadeIndex = 1;
  if (viewDistance > uCascadeSplits.y) cascadeIndex = 2;
  if (cascadeIndex > 2) cascadeIndex = 2;

  if (cascadeIndex == 0 && uCascadeEnabled.x < 0.5) return 1.0;
  if (cascadeIndex == 1 && uCascadeEnabled.y < 0.5) return 1.0;
  if (cascadeIndex == 2 && uCascadeEnabled.z < 0.5) return 1.0;

  return sampleShadowCascade(cascadeIndex, worldPos);
}
`,Ts=Object.freeze({NONE:0,TOP:1,LEFT:2,BOTTOM:4,RIGHT:8}),BM=new Map([["colorScale.glsl",UM],["edgemorph.glsl",NM],["terrainShadow.glsl",OM]]);function ai(r){const e=/#include\s+[<"]?([^>"]+)[">]?/g;return r.replace(e,(t,n)=>BM.get(n.trim())||"")}const md=ai(TM),Wo=[{name:"Volcanic",source:ai(IM)},{name:"Terrain",source:ai(AM)},{name:"Snowy",source:ai(CM)},{name:"Toon",source:ai(RM)},{name:"Realistic",source:ai(PM)},{name:"Crystal",source:ai(DM)},{name:"Mars",source:ai(LM)}];class zM extends st{constructor(e,t=1024,n=12,i=128,{enableShadows:s=!1}={}){super(),this.worldWidth=t,this.levels=n,this.resolution=i,this.heightData=e,this.offset=new T(0,0,0),this.activeShaderIndex=0,this.fade={start:0,end:0},this.morphRegion=.3,this.sunDirection=new T(0,1,0),this.sunIntensity=1,this.sunWarmth=.55,this.ambientDirection=new T(1,0,0),this.ambientIntensity=.2,this.ambientColor=new oe(.45,.42,.35),this.smoothFactor=.5,this.specularStrength=1,this.skyTintColor=new oe(.62,.72,.88),this.skyTintStrength=.15,this.shadowsEnabled=s,this._cascadeEnabledVec=new T(1,1,1),this.tileGeometry=new es(1,1,this.resolution,this.resolution),this.tileGeometry.translate(.5,.5,0),this.createTileGrid()}createTileGrid(){const e=this.worldWidth/Math.pow(2,this.levels);for(const t of[-1,0])for(const n of[-1,0])this.createTile(t*e,n*e,e,Ts.NONE);for(let t=0;t<this.levels-1;t++){const n=e*Math.pow(2,t);for(let i=-2;i<2;i++)for(let s=-2;s<2;s++){if(i>-2&&i<1&&s>-2&&s<1)continue;let o=Ts.NONE;i===-2&&(o|=Ts.LEFT),i===1&&(o|=Ts.RIGHT),s===-2&&(o|=Ts.BOTTOM),s===1&&(o|=Ts.TOP),this.createTile(i*n,s*n,n,o)}}}createTile(e,t,n,i){const o={uEdgeMorph:{value:i},uGlobalOffset:{value:this.offset},uHeightData:{value:this.heightData},uGrass:{value:br.grass},uRock:{value:br.rock},uSnow:{value:br.snow},uTileOffset:{value:new J(e,t)},uScale:{value:n},uTileResolution:{value:this.resolution},uFogColor:{value:at.fog?at.fog.color.clone():new oe(0)},uFogNear:{value:at.fog?at.fog.near:0},uFogFar:{value:at.fog?at.fog.far:1},uMorphRegion:{value:this.morphRegion},uSunDirection:{value:this.sunDirection.clone()},uSunIntensity:{value:this.sunIntensity},uSunWarmth:{value:this.sunWarmth},uAmbientDirection:{value:this.ambientDirection.clone()},uAmbientIntensity:{value:this.ambientIntensity},uAmbientColor:{value:this.ambientColor.clone()},uSmoothFactor:{value:this.smoothFactor},uSpecularStrength:{value:this.specularStrength},uFadeStart:{value:this.fade.start},uFadeEnd:{value:this.fade.end},uSkyTintColor:{value:this.skyTintColor.clone()},uSkyTintStrength:{value:this.skyTintStrength},uViewMatrix:{value:new Fe},uShadowMatrices:{value:Array.from({length:3},()=>new Fe)},uCascadeSplits:{value:new nt(0,0,0,0)},uShadowBias:{value:.0015},uShadowStrength:{value:.65},uShadowsEnabled:{value:this.shadowsEnabled?1:0},uCascadeEnabled:{value:new T(1,1,1)},uShadowTexelSize:{value:new J(.0009765625,.0009765625)},uShadowSoftness:{value:1},uShadowMap0:{value:null},uShadowMap1:{value:null},uShadowMap2:{value:null}},a=new Et({uniforms:o,vertexShader:md,fragmentShader:Wo[this.activeShaderIndex].source,transparent:!0}),l=new Et({uniforms:o,vertexShader:md,fragmentShader:FM,transparent:!1,depthWrite:!0});l.colorWrite=!1;const c=new pt(this.tileGeometry,a);c.frustumCulled=!1,c.matrixAutoUpdate=!1,c.updateMatrix(),c.castShadow=this.shadowsEnabled,c.receiveShadow=this.shadowsEnabled,c.userData.mainMaterial=a,c.userData.depthMaterial=l,this.add(c)}setShader(e=0){const t=Wo.length,n=(e%t+t)%t;this.activeShaderIndex=n;const i=Wo[this.activeShaderIndex];return this.children.forEach(s=>{var a;const o=(a=s.userData)==null?void 0:a.mainMaterial;o instanceof Et&&(o.fragmentShader=i.source,o.needsUpdate=!0)}),this.activeShaderIndex}updateFog(e){this.children.forEach(t=>{var i,s;const n=(s=(i=t.userData)==null?void 0:i.mainMaterial)==null?void 0:s.uniforms;n&&(e?(n.uFogColor.value.copy(e.color),n.uFogNear.value=e.near,n.uFogFar.value=e.far):(n.uFogNear.value=1e9,n.uFogFar.value=1e9))})}updateFade(e,t){t>e?(this.fade.start=e,this.fade.end=t):(this.fade.start=0,this.fade.end=0),this.children.forEach(n=>{var s,o;const i=(o=(s=n.userData)==null?void 0:s.mainMaterial)==null?void 0:o.uniforms;i&&(i.uFadeStart.value=this.fade.start,i.uFadeEnd.value=this.fade.end)})}setShadowsEnabled(e){this.shadowsEnabled=!!e,this.children.forEach(t=>{var i,s;t.castShadow=this.shadowsEnabled,t.receiveShadow=this.shadowsEnabled;const n=(s=(i=t.userData)==null?void 0:i.mainMaterial)==null?void 0:s.uniforms;n&&n.uShadowsEnabled&&(n.uShadowsEnabled.value=this.shadowsEnabled?1:0)})}updateMorphRegion(e){this.morphRegion=Math.max(e,.001),this.children.forEach(t=>{var i,s;const n=(s=(i=t.userData)==null?void 0:i.mainMaterial)==null?void 0:s.uniforms;n&&(n.uMorphRegion.value=this.morphRegion)})}updateSun(e,t){this.sunDirection.copy(e).normalize(),this.sunIntensity=t,this.children.forEach(n=>{var s,o;const i=(o=(s=n.userData)==null?void 0:s.mainMaterial)==null?void 0:o.uniforms;i&&(i.uSunDirection&&i.uSunDirection.value.copy(this.sunDirection),i.uSunIntensity&&(i.uSunIntensity.value=this.sunIntensity),i.uSunWarmth&&(i.uSunWarmth.value=this.sunWarmth))})}updateSunWarmth(e){this.sunWarmth=e,this.children.forEach(t=>{var i,s;const n=(s=(i=t.userData)==null?void 0:i.mainMaterial)==null?void 0:s.uniforms;!n||!n.uSunWarmth||(n.uSunWarmth.value=this.sunWarmth)})}useDepthMaterial(e){this.children.forEach(t=>{var n,i;!((n=t.userData)!=null&&n.mainMaterial)||!((i=t.userData)!=null&&i.depthMaterial)||(t.material=e?t.userData.depthMaterial:t.userData.mainMaterial)})}updateShadowUniforms(e,t,n,i,s,o,a,l,c){a&&this._cascadeEnabledVec.set(a[0]?1:0,a[1]?1:0,a[2]?1:0),this.children.forEach(u=>{var d,f;const h=(f=(d=u.userData)==null?void 0:d.mainMaterial)==null?void 0:f.uniforms;if(h){if(h.uShadowsEnabled&&(h.uShadowsEnabled.value=o?1:0),h.uShadowBias&&(h.uShadowBias.value=i),h.uShadowStrength&&(h.uShadowStrength.value=s),h.uCascadeSplits&&t&&h.uCascadeSplits.value.copy(t),h.uShadowMatrices&&e){const p=h.uShadowMatrices.value;for(let x=0;x<p.length;x++)e[x]?p[x].copy(e[x]):p[x].identity()}if(n&&(h.uShadowMap0&&(h.uShadowMap0.value=n[0]||null),h.uShadowMap1&&(h.uShadowMap1.value=n[1]||null),h.uShadowMap2&&(h.uShadowMap2.value=n[2]||null)),l&&h.uShadowTexelSize){const p=1/l;h.uShadowTexelSize.value.set(p,p)}h.uShadowSoftness&&c!==void 0&&(h.uShadowSoftness.value=c),a&&h.uCascadeEnabled?h.uCascadeEnabled.value.set(a[0]?1:0,a[1]?1:0,a[2]?1:0):h.uCascadeEnabled&&h.uCascadeEnabled.value.copy(this._cascadeEnabledVec)}})}updateCascadeEnabled(e){const t=this._cascadeEnabledVec||new T(1,1,1);t.set(e[0]?1:0,e[1]?1:0,e[2]?1:0),this._cascadeEnabledVec=t,this.children.forEach(n=>{var s,o;const i=(o=(s=n.userData)==null?void 0:s.mainMaterial)==null?void 0:o.uniforms;!i||!i.uCascadeEnabled||i.uCascadeEnabled.value.copy(t)})}updateViewMatrix(e){this.children.forEach(t=>{var i,s;const n=(s=(i=t.userData)==null?void 0:i.mainMaterial)==null?void 0:s.uniforms;!n||!n.uViewMatrix||n.uViewMatrix.value.copy(e)})}updateAmbient(e,t,n){this.ambientDirection.copy(e).normalize(),this.ambientIntensity=t,n&&this.ambientColor.copy(n),this.children.forEach(i=>{var o,a;const s=(a=(o=i.userData)==null?void 0:o.mainMaterial)==null?void 0:a.uniforms;s&&(s.uAmbientDirection&&s.uAmbientDirection.value.copy(this.ambientDirection),s.uAmbientIntensity&&(s.uAmbientIntensity.value=this.ambientIntensity),s.uAmbientColor&&s.uAmbientColor.value.copy(this.ambientColor))})}updateSmoothFactor(e){this.smoothFactor=Xe.clamp(e,0,1),this.children.forEach(t=>{var i,s;const n=(s=(i=t.userData)==null?void 0:i.mainMaterial)==null?void 0:s.uniforms;n&&n.uSmoothFactor&&(n.uSmoothFactor.value=this.smoothFactor)})}updateSpecularStrength(e){this.specularStrength=Math.max(e,0),this.children.forEach(t=>{var i,s;const n=(s=(i=t.userData)==null?void 0:i.mainMaterial)==null?void 0:s.uniforms;n&&n.uSpecularStrength&&(n.uSpecularStrength.value=this.specularStrength)})}updateSkyTint(e,t){e&&this.skyTintColor.copy(e),typeof t=="number"&&(this.skyTintStrength=Math.max(t,0)),this.children.forEach(n=>{var s,o;const i=(o=(s=n.userData)==null?void 0:s.mainMaterial)==null?void 0:o.uniforms;i&&(i.uSkyTintColor&&i.uSkyTintColor.value.copy(this.skyTintColor),i.uSkyTintStrength&&(i.uSkyTintStrength.value=this.skyTintStrength))})}cycleShader(){const e=(this.activeShaderIndex+1)%Wo.length;return this.setShader(e)}}class kM{constructor(e,t,n){this.scene=e,this.camera=t,this.renderer=n,this.lensFlareGroup=new Vi,this.flareElements=[],this.sunPosition=new T,this.screenPosition=new J,this.raycaster=new gp,this.occluded=!1,this.visibility=0,this.init()}init(){this.createLensFlareElements(),this.lensFlareGroup.renderOrder=1e4,this.scene.add(this.lensFlareGroup),console.log("✨ Lens flare system initialized")}createLensFlareElements(){[{distance:0,size:2200,color:new oe(1,.95,.8),opacity:.8,type:"sun"},{distance:.25,size:1200,color:new oe(1,.6,.3),opacity:.35,type:"ghost"},{distance:.45,size:900,color:new oe(.7,1,.5),opacity:.25,type:"ring"},{distance:.75,size:1500,color:new oe(.5,.8,1),opacity:.25,type:"ghost"},{distance:1.05,size:600,color:new oe(1,.4,.7),opacity:.28,type:"ring"},{distance:1.35,size:800,color:new oe(.9,.9,.3),opacity:.22,type:"ghost"},{distance:1.65,size:500,color:new oe(.7,.4,1),opacity:.18,type:"ring"}].forEach(t=>{const n=this.createFlareElement(t);this.flareElements.push({mesh:n,distance:t.distance,baseSize:t.size,baseOpacity:t.opacity,type:t.type,intensity:1,baseColor:t.color.clone(),tintStrength:t.type==="sun"?.85:.4}),this.lensFlareGroup.add(n)})}createFlareElement(e){let t;e.type==="sun"?t=new Hs(1,48):e.type==="ring"?t=new Yr(.6,1,48):t=new Hs(1,32);const n=new Et({uniforms:{color:{value:e.color},opacity:{value:e.opacity},center:{value:new J(.5,.5)},time:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 color;
        uniform float opacity;
        uniform vec2 center;
        uniform float time;
        varying vec2 vUv;
        
        void main() {
          vec2 uv = vUv - center;
          float dist = length(uv);
          
          float alpha = opacity;
          
          ${e.type==="sun"?`
            // Sun flare - bright center with soft falloff
            alpha *= (1.0 - smoothstep(0.0, 0.5, dist));
            alpha *= (1.0 + 0.1 * sin(time * 2.0 + dist * 10.0)); // Subtle shimmer
          `:e.type==="ring"?`
            // Ring flare
            float ringDist = abs(dist - 0.3);
            alpha *= (1.0 - smoothstep(0.0, 0.2, ringDist));
          `:`
            // Ghost flare - soft circular gradient
            alpha *= (1.0 - smoothstep(0.1, 0.4, dist));
            alpha *= (0.8 + 0.2 * sin(time * 3.0 + dist * 15.0)); // Subtle variation
          `}
          
          gl_FragColor = vec4(color, alpha);
        }
      `,transparent:!0,blending:wr,depthTest:!1,depthWrite:!1}),i=new pt(t,n);return i.renderOrder=10001,i.frustumCulled=!1,i.userData.baseSize=e.size,i}setSunColor(e){e&&this.flareElements.forEach(t=>{const n=t.mesh.material.uniforms;n!=null&&n.color&&n.color.value.copy(t.baseColor).lerp(e,t.tintStrength)})}update(e,t,n){if(!t){console.log("🔥 Lens flare: No sun position provided");return}this.sunPosition.copy(t);const i=this.sunPosition.clone();if(i.project(this.camera),this.screenPosition.set(i.x,i.y),i.z>1){this.lensFlareGroup.visible=!1;return}if(this.checkOcclusion(n),this.occluded){this.visibility=0,this.lensFlareGroup.visible=!1;return}const o=new T(0,0,-1);o.applyQuaternion(this.camera.quaternion);const a=this.sunPosition.clone().sub(this.camera.position).normalize(),l=o.dot(a);let c=Xe.clamp((l+.2)/1.2,0,1);a.z<-.05&&(c=0);const u=1-Math.exp(-e*6);if(this.visibility=Xe.lerp(this.visibility,c,u),this.visibility=Xe.clamp(this.visibility,0,1),this.visibility<=.02){this.lensFlareGroup.visible=!1;return}this.lensFlareGroup.visible=!0,this.updateFlareElements(e,this.visibility)}checkOcclusion(e){if(!e){this.occluded=!1;return}if(!e.userData.lensFlareMeshes){const a=[];e.traverse(l=>{l.isMesh&&l.visible&&a.push(l)}),e.userData.lensFlareMeshes=a}const t=e.userData.lensFlareMeshes;if(!t.length){this.occluded=!1;return}const n=this.camera.position,i=this.sunPosition.clone().sub(n),s=i.length();if(s<=.001){this.occluded=!1;return}i.normalize(),this.raycaster.set(n,i),this.raycaster.far=s;const o=this.raycaster.intersectObjects(t,!0);this.occluded=o.some(a=>a.distance<s)}updateFlareElements(e,t){const n=this.camera.position.distanceTo(this.sunPosition),i=-this.screenPosition.x,s=-this.screenPosition.y;this.flareElements.forEach((o,a)=>{const l=o.mesh;let c;if(a===0)c=this.sunPosition.clone();else{const h=this.screenPosition.x+i*o.distance,d=this.screenPosition.y+s*o.distance;c=new T(h,d,.6).unproject(this.camera);const p=c.sub(this.camera.position).normalize(),x=n*(1+o.distance*.6);c=this.camera.position.clone().add(p.multiplyScalar(x))}if(l.position.copy(c),l.lookAt(this.camera.position),l.material.uniforms){l.material.uniforms.time.value+=e;const h=Xe.clamp(o.baseOpacity*t*o.intensity,0,1);l.material.uniforms.opacity.value=h}const u=o.baseSize*(.6+.6*t);l.scale.setScalar(u)})}setSunIntensity(e){const t=Xe.clamp(e,0,2);this.flareElements.forEach(n=>{n.intensity=t})}cleanup(){this.lensFlareGroup&&(this.scene.remove(this.lensFlareGroup),this.flareElements.forEach(e=>{e.mesh.geometry.dispose(),e.mesh.material.dispose()}),this.flareElements=[])}}const HM=`// Don't redeclare built-in Three.js uniforms and attributes
// They are already available: modelMatrix, viewMatrix, projectionMatrix, normalMatrix, position, normal

varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorldPosition;

void main() {
  vNormal = normalize(normalMatrix * normal);
  vPosition = position;

  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;

  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}`,VM=`precision highp float;

uniform vec3 uBaseColor;
uniform vec3 uSunDirection;
uniform float uSunIntensity;
uniform vec3 uSunColor;
uniform float uAmbientStrength;
uniform vec3 uAmbientColor;

varying vec3 vNormal;
varying vec3 vWorldPosition;

void main() {
  vec3 normal = normalize(vNormal);

  // Sun lighting
  vec3 sunDir = normalize(uSunDirection);
  float sunDot = max(dot(normal, sunDir), 0.0);

  // Prevent completely black shadows - always keep some light
  float minLight = 0.2;
  float sunContribution = mix(minLight, 1.0, sunDot) * uSunIntensity;

  // Ambient lighting (fills in the shadows)
  float ambientContribution = uAmbientStrength;

  // Combine sun and ambient lighting
  vec3 lighting = uSunColor * sunContribution + uAmbientColor * ambientContribution;

  // Apply lighting to base color
  vec3 finalColor = uBaseColor * lighting;

  gl_FragColor = vec4(finalColor, 1.0);
}`,Th=[{time:0,horizon:529954,sky:263951,intensity:.05},{time:5.5,horizon:6893642,sky:792624,intensity:.25},{time:6.8,horizon:16689010,sky:7245759,intensity:.6},{time:12,horizon:15792383,sky:12113136,intensity:1},{time:18.5,horizon:15792383,sky:12113136,intensity:.9},{time:19.5,horizon:16757626,sky:8167632,intensity:.65},{time:20.5,horizon:2699618,sky:726576,intensity:.2},{time:24,horizon:529954,sky:263951,intensity:.05}],GM=new oe(.92,.96,1);function WM(r,e=Th){const t=(r%24+24)%24;let n=0;for(let d=0;d<e.length-1;d++){const f=e[d],p=e[d+1];if(t>=f.time&&t<=p.time){n=d;break}t>=e[e.length-1].time&&(n=e.length-1)}const i=e[n],s=e[(n+1)%e.length];let o=s.time-i.time;o<=0&&(o+=24);let a=t-i.time;a<0&&(a+=24);const l=o===0?0:Xe.clamp(a/o,0,1),c=new oe(i.horizon).lerp(new oe(s.horizon),l),u=new oe(i.sky).lerp(new oe(s.sky),l),h=Xe.lerp(i.intensity,s.intensity,l);return{horizonColor:c,skyColor:u,intensity:h}}function XM(r){const e=(r%24+24)%24,t=e/24*Math.PI*2,n=Math.sin((e-6)/12*Math.PI),s=(Xe.clamp(n,-.35,1)+.35)/1.35,o=Xe.lerp(Xe.degToRad(-20),Xe.degToRad(80),s);return new T(Math.cos(o)*Math.sin(t),Math.cos(o)*Math.cos(t),Math.sin(o)).normalize()}const qM={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Js{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const YM=new $s(-1,1,1,-1,0,1);class $M extends $e{constructor(){super(),this.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new be([0,2,0,0,2,0],2))}}const ZM=new $M;class Ah{constructor(e){this._mesh=new pt(ZM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,YM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ko extends Js{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Et?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Gr.clone(e.uniforms),this.material=new Et({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ah(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class gd extends Js{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class KM extends Js{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class JM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new J);this._width=n.width,this._height=n.height,t=new un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ko(qM),this.copyPass.material.blending=Un,this.clock=new gl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}gd!==void 0&&(o instanceof gd?n=!0:o instanceof KM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class QM extends Js{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new oe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const jM={name:"BrightnessContrastShader",uniforms:{tDiffuse:{value:null},brightness:{value:0},contrast:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float brightness;
		uniform float contrast;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			gl_FragColor.rgb += brightness;

			if (contrast > 0.0) {
				gl_FragColor.rgb = (gl_FragColor.rgb - 0.5) / (1.0 - contrast) + 0.5;
			} else {
				gl_FragColor.rgb = (gl_FragColor.rgb - 0.5) * (1.0 + contrast) + 0.5;
			}

		}`},Ch=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,eb=`uniform sampler2D tDiffuse;
uniform float uThreshold;
uniform float uSoftKnee;

varying vec2 vUv;

void main() {
  vec4 color = texture2D(tDiffuse, vUv);
  float brightness = dot(color.rgb, vec3(0.2126, 0.7152, 0.0722));

  float knee = uSoftKnee;
  float threshold = uThreshold - knee;
  float softness = clamp((brightness - threshold) / (knee + 1e-4), 0.0, 1.0);
  float weight = max(brightness - uThreshold, 0.0) + knee * softness;
  weight = max(weight, 0.0);

  gl_FragColor = color * weight;
}
`,tb=`uniform sampler2D tDiffuse;
uniform vec2 uDirection;
uniform float uSigma;

varying vec2 vUv;

float gaussian(float x, float sigma) {
  return exp(-(x * x) / (2.0 * sigma * sigma));
}

void main() {
  // 9-tap separable gaussian blur
  float sigma = max(uSigma, 0.0001);
  vec2 texel = uDirection;

  vec4 result = vec4(0.0);
  float total = 0.0;

  for (int i = -4; i <= 4; i++) {
    float offset = float(i);
    float weight = gaussian(offset, sigma);
    vec2 sampleUv = vUv + texel * offset;
    result += texture2D(tDiffuse, sampleUv) * weight;
    total += weight;
  }

  gl_FragColor = result / total;
}
`,nb=`uniform sampler2D tDiffuse;
uniform sampler2D tBloom;
uniform float uBloomStrength;

varying vec2 vUv;

void main() {
  vec4 baseColor = texture2D(tDiffuse, vUv);
  vec3 bloomColor = texture2D(tBloom, vUv).rgb * uBloomStrength;
  gl_FragColor = vec4(baseColor.rgb + bloomColor, baseColor.a);
}
`,ib={name:"AdjustableFXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new J(1/1024,1/512)},uContrastThreshold:{value:.0312},uRelativeThreshold:{value:.063},uSubpixelBlending:{value:1}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float uContrastThreshold;
    uniform float uRelativeThreshold;
    uniform float uSubpixelBlending;
    varying vec2 vUv;

    #define EDGE_STEP_COUNT 6
    #define EDGE_GUESS 8.0
    #define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
    const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT](EDGE_STEPS);

    vec4 Sample(sampler2D tex2D, vec2 uv) {
      return texture(tex2D, uv);
    }

    float SampleLuminance(sampler2D tex2D, vec2 uv) {
      return dot(Sample(tex2D, uv).rgb, vec3(0.3, 0.59, 0.11));
    }

    float SampleLuminance(sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset) {
      uv += texSize * vec2(uOffset, vOffset);
      return SampleLuminance(tex2D, uv);
    }

    struct LuminanceData {
      float m, n, e, s, w;
      float ne, nw, se, sw;
      float highest, lowest, contrast;
    };

    LuminanceData SampleLuminanceNeighborhood(sampler2D tex2D, vec2 texSize, vec2 uv) {
      LuminanceData l;
      l.m = SampleLuminance(tex2D, uv);
      l.n = SampleLuminance(tex2D, texSize, uv, 0.0, 1.0);
      l.e = SampleLuminance(tex2D, texSize, uv, 1.0, 0.0);
      l.s = SampleLuminance(tex2D, texSize, uv, 0.0, -1.0);
      l.w = SampleLuminance(tex2D, texSize, uv, -1.0, 0.0);
      l.ne = SampleLuminance(tex2D, texSize, uv, 1.0, 1.0);
      l.nw = SampleLuminance(tex2D, texSize, uv, -1.0, 1.0);
      l.se = SampleLuminance(tex2D, texSize, uv, 1.0, -1.0);
      l.sw = SampleLuminance(tex2D, texSize, uv, -1.0, -1.0);
      l.highest = max(max(max(max(l.n, l.e), l.s), l.w), l.m);
      l.lowest = min(min(min(min(l.n, l.e), l.s), l.w), l.m);
      l.contrast = l.highest - l.lowest;
      return l;
    }

    bool ShouldSkipPixel(LuminanceData l) {
      float threshold = max(uContrastThreshold, uRelativeThreshold * l.highest);
      return l.contrast < threshold;
    }

    float DeterminePixelBlendFactor(LuminanceData l) {
      float f = 2.0 * (l.n + l.e + l.s + l.w);
      f += l.ne + l.nw + l.se + l.sw;
      f *= 1.0 / 12.0;
      f = abs(f - l.m);
      f = l.contrast > 0.0 ? clamp(f / l.contrast, 0.0, 1.0) : 0.0;
      float blendFactor = smoothstep(0.0, 1.0, f);
      blendFactor = blendFactor * blendFactor;
      return blendFactor * uSubpixelBlending;
    }

    struct EdgeData {
      bool isHorizontal;
      float pixelStep;
      float oppositeLuminance;
      float gradient;
    };

    EdgeData DetermineEdge(vec2 texSize, LuminanceData l) {
      EdgeData e;
      float horizontal =
          abs(l.n + l.s - 2.0 * l.m) * 2.0 +
          abs(l.ne + l.se - 2.0 * l.e) +
          abs(l.nw + l.sw - 2.0 * l.w);
      float vertical =
          abs(l.e + l.w - 2.0 * l.m) * 2.0 +
          abs(l.ne + l.nw - 2.0 * l.n) +
          abs(l.se + l.sw - 2.0 * l.s);
      e.isHorizontal = horizontal >= vertical;

      float pLuminance = e.isHorizontal ? l.n : l.e;
      float nLuminance = e.isHorizontal ? l.s : l.w;
      float pGradient = abs(pLuminance - l.m);
      float nGradient = abs(nLuminance - l.m);

      e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

      if (pGradient < nGradient) {
        e.pixelStep = -e.pixelStep;
        e.oppositeLuminance = nLuminance;
        e.gradient = nGradient;
      } else {
        e.oppositeLuminance = pLuminance;
        e.gradient = pGradient;
      }

      return e;
    }

    vec2 DetermineEndpoints(vec2 texSize, vec2 uv, EdgeData edge) {
      float gradientThreshold = EDGE_GUESS * edge.gradient;
      vec2 uvEdge = edge.isHorizontal ? vec2(0.0, edge.pixelStep) : vec2(edge.pixelStep, 0.0);
      vec2 uvPerp = edge.isHorizontal ? vec2(texSize.x, 0.0) : vec2(0.0, texSize.y);

      vec2 uvNeg = uv;
      vec2 uvPos = uv;
      float luminanceNeg = 0.0;
      float luminancePos = 0.0;
      bool doneNeg = false;
      bool donePos = false;

      for (int i = 0; i < EDGE_STEP_COUNT; ++i) {
        float stepLength = edgeSteps[i];
        if (!doneNeg) {
          uvNeg -= uvEdge * stepLength;
          luminanceNeg = SampleLuminance(tDiffuse, uvNeg);
          float deltaNeg = abs(luminanceNeg - edge.oppositeLuminance);
          doneNeg = deltaNeg > gradientThreshold;
        }
        if (!donePos) {
          uvPos += uvEdge * stepLength;
          luminancePos = SampleLuminance(tDiffuse, uvPos);
          float deltaPos = abs(luminancePos - edge.oppositeLuminance);
          donePos = deltaPos > gradientThreshold;
        }
      }

      return vec2(doneNeg ? uvNeg.x : uv.x, donePos ? uvPos.x : uv.x);
    }

    void main() {
      vec2 texSize = resolution;
      LuminanceData l = SampleLuminanceNeighborhood(tDiffuse, texSize, vUv);
      if (ShouldSkipPixel(l)) {
        gl_FragColor = Sample(tDiffuse, vUv);
        return;
      }

      float blendFactor = DeterminePixelBlendFactor(l);
      EdgeData edge = DetermineEdge(texSize, l);
      vec2 uvEdge = edge.isHorizontal ? vec2(0.0, edge.pixelStep) : vec2(edge.pixelStep, 0.0);
      vec2 uvPerp = edge.isHorizontal ? vec2(texSize.x, 0.0) : vec2(0.0, texSize.y);

      vec2 uvNeg = vUv;
      vec2 uvPos = vUv;
      float luminanceNeg = l.m;
      float luminancePos = l.m;
      bool doneNeg = false;
      bool donePos = false;

      for (int i = 0; i < EDGE_STEP_COUNT; ++i) {
        float stepLength = edgeSteps[i];
        if (!doneNeg) {
          uvNeg -= uvEdge * stepLength;
          luminanceNeg = SampleLuminance(tDiffuse, uvNeg);
          doneNeg = abs(luminanceNeg - l.m) >= edge.gradient;
        }
        if (!donePos) {
          uvPos += uvEdge * stepLength;
          luminancePos = SampleLuminance(tDiffuse, uvPos);
          donePos = abs(luminancePos - l.m) >= edge.gradient;
        }
      }

      float distanceNeg = edge.isHorizontal ? uvNeg.y - vUv.y : uvNeg.x - vUv.x;
      float distancePos = edge.isHorizontal ? uvPos.y - vUv.y : uvPos.x - vUv.x;
      float distance = min(abs(distanceNeg), abs(distancePos));
      float edgeBlend = max(0.0, 1.0 - EDGE_GUESS * edge.gradient);
      edgeBlend *= edgeBlend;
      float finalBlend = min(blendFactor, edgeBlend);

      vec2 finalUv = vUv + uvPerp * finalBlend * sign(distanceNeg + distancePos) * 0.5;
      vec4 result = mix(Sample(tDiffuse, vUv), Sample(tDiffuse, finalUv), uSubpixelBlending);
      gl_FragColor = result;
    }
  `},uc={uniforms:{tDiffuse:{value:null},uThreshold:{value:1},uSoftKnee:{value:.5}},vertexShader:Ch,fragmentShader:eb},dc={uniforms:{tDiffuse:{value:null},uDirection:{value:new J(1,0)},uSigma:{value:3.5}},vertexShader:Ch,fragmentShader:tb},sb={uniforms:{tDiffuse:{value:null},tBloom:{value:null},uBloomStrength:{value:.75}},vertexShader:Ch,fragmentShader:nb};class rb extends Js{constructor(e,t=256){super(),this.material=new Et({uniforms:Gr.clone(uc.uniforms),vertexShader:uc.vertexShader,fragmentShader:uc.fragmentShader}),this.uniforms=this.material.uniforms,this.renderTarget=e,this.fsQuad=new Ah(this.material),this.needsSwap=!1,this.resolutionPixels=Math.max(t,16),this._lastWidth=0,this._lastHeight=0}render(e,t,n){const i=e.getRenderTarget();this.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.renderTarget),e.clear(),this.fsQuad.render(e),e.setRenderTarget(i)}setSize(e,t){this._lastWidth=e,this._lastHeight=t;const n=this._computeScale(e,t),i=Math.max(Math.floor(e*n),1),s=Math.max(Math.floor(t*n),1);this.renderTarget.setSize(i,s)}_computeScale(e,t){const n=Math.max(e,t);return n<=0?1:Xe.clamp(this.resolutionPixels/n,.01,1)}setResolutionPixels(e){this.resolutionPixels=Math.max(e,16),this._lastWidth>0&&this._lastHeight>0&&this.setSize(this._lastWidth,this._lastHeight)}}class xd extends Js{constructor(e,t,n=256){super(),this.material=new Et({uniforms:Gr.clone(dc.uniforms),vertexShader:dc.vertexShader,fragmentShader:dc.fragmentShader}),this.uniforms=this.material.uniforms,this.uniforms.uDirection.value.copy(t),this.fsQuad=new Ah(this.material),this.renderTarget=e,this.inputTarget=null,this.needsSwap=!1,this.resolutionPixels=Math.max(n,16),this._lastWidth=0,this._lastHeight=0,this.isHorizontal=Math.abs(t.x)>=Math.abs(t.y)}setInputTarget(e){this.inputTarget=e}setDirection(e){this.uniforms.uDirection.value.copy(e)}setSigma(e){this.uniforms.uSigma.value=e}render(e,t,n){if(!this.inputTarget||!this.renderTarget)return;const i=e.getRenderTarget();this.uniforms.tDiffuse.value=this.inputTarget.texture,e.setRenderTarget(this.renderTarget),e.clear(),this.fsQuad.render(e),e.setRenderTarget(i)}setSize(e,t){this._lastWidth=e,this._lastHeight=t;const n=this._computeScale(e,t),i=Math.max(Math.floor(e*n),1),s=Math.max(Math.floor(t*n),1);this.renderTarget.setSize(i,s),this.isHorizontal?this.setDirection(new J(1/i,0)):this.setDirection(new J(0,1/s))}_computeScale(e,t){const n=Math.max(e,t);return n<=0?1:Xe.clamp(this.resolutionPixels/n,.01,1)}setResolutionPixels(e){this.resolutionPixels=Math.max(e,16),this._lastWidth>0&&this._lastHeight>0&&this.setSize(this._lastWidth,this._lastHeight)}}function ob({renderer:r,scene:e,camera:t,bloomStrength:n,bloomThreshold:i=1,bloomSoftKnee:s=.5,bloomSigma:o=4.5,bloomResolution:a=64,aaEnabled:l=!0,aaSubpixelBlending:c=1,aaContrastThreshold:u=.0312,aaRelativeThreshold:h=.063,brightness:d,contrast:f}){const p=new J;r.getSize(p);const x=new QM(e,t),g=new JM(r);g.setPixelRatio(r.getPixelRatio()),g.addPass(x);const m={minFilter:xt,magFilter:xt,format:Bt,type:mi,depthBuffer:!1,stencilBuffer:!1},y=new un(1,1,m);y.texture.name="Bloom.TargetA",y.texture.generateMipmaps=!1;const v=y.clone();v.texture.name="Bloom.TargetB";const _=Math.max(a,16),E=new rb(y,_);E.uniforms.uThreshold.value=i,E.uniforms.uSoftKnee.value=s,g.addPass(E);const A=new xd(v,new J(1/p.x,0),_);A.setInputTarget(y),A.setSigma(o),g.addPass(A);const R=new xd(y,new J(0,1/p.y),_);R.setInputTarget(v),R.setSigma(o),g.addPass(R);const P=new Ko(sb);P.material.uniforms.tBloom.value=y.texture,P.material.uniforms.uBloomStrength.value=n,g.addPass(P);const M=new Ko(ib);M.material.uniforms.uSubpixelBlending.value=c,M.material.uniforms.uContrastThreshold.value=u,M.material.uniforms.uRelativeThreshold.value=h,M.enabled=l,g.addPass(M);const b=new Ko(jM);b.material.uniforms.brightness.value=d,b.material.uniforms.contrast.value=f,b.renderToScreen=!0,g.addPass(b);let I=p.x,U=p.y;const z=(X,Z)=>{I=X,U=Z,g.setPixelRatio(r.getPixelRatio()),g.setSize(X,Z);const k=r.getPixelRatio();M.material.uniforms.resolution.value.set(1/(X*k),1/(Z*k))};return z(p.x,p.y),{composer:g,renderPass:x,brightPass:E,blurPassH:A,blurPassV:R,compositePass:P,fxaaPass:M,brightnessContrastPass:b,bloomTargetA:y,bloomTargetB:v,handleResize:z,setBloomResolution:X=>{const Z=Math.max(X,16);E.setResolutionPixels(Z),A.setResolutionPixels(Z),R.setResolutionPixels(Z),g.setSize(I,U)},applyAntialiasSettings:({enabled:X,subpixel:Z,contrastThreshold:k,relativeThreshold:ue})=>{X!=null&&(M.enabled=X),Z!=null&&(M.material.uniforms.uSubpixelBlending.value=Z),k!=null&&(M.material.uniforms.uContrastThreshold.value=k),ue!=null&&(M.material.uniforms.uRelativeThreshold.value=ue)}}}function ab({container:r,onStart:e}){const t=document.createElement("div");t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.display="flex",t.style.flexDirection="column",t.style.alignItems="center",t.style.justifyContent="center",t.style.background="rgba(2, 6, 12, 0.82)",t.style.zIndex="-1",t.style.textAlign="center",t.style.transition="opacity 0.35s ease";const n=document.createElement("div");n.textContent="Fighter Jet Recon",n.style.fontSize="42px",n.style.fontWeight="600",n.style.letterSpacing="4px",n.style.color="#e7f2ff",n.style.textTransform="uppercase",n.style.marginBottom="28px",t.appendChild(n);const i=document.createElement("div");i.textContent="Press Enter or click to begin your sortie",i.style.fontSize="18px",i.style.color="#a8c6ff",i.style.marginBottom="36px",t.appendChild(i);const s=document.createElement("button");s.textContent="Start Mission",s.style.fontSize="16px",s.style.padding="12px 28px",s.style.borderRadius="999px",s.style.border="1px solid rgba(255, 255, 255, 0.45)",s.style.color="#0a1524",s.style.background="linear-gradient(135deg, #f4f9ff, #c7dcff)",s.style.cursor="pointer",s.style.fontWeight="600",s.style.textTransform="uppercase",s.style.letterSpacing="1.2px",s.addEventListener("click",()=>e==null?void 0:e()),t.appendChild(s),r.appendChild(t);function o(){t.parentNode&&t.parentNode.removeChild(t)}function a(l=350){t.style.pointerEvents="none",t.style.opacity="0",window.setTimeout(o,l)}return{overlay:t,button:s,destroy:o,fadeOut:a}}function lb({app:r,container:e,applyShaderEnvironment:t,createTerrain:n,setTerrainSmoothing:i,setHeightGain:s}){const o=document.createElement("div");o.style.position="absolute",o.style.top="10px",o.style.right="10px",o.style.padding="10px",o.style.background="rgba(0, 0, 0, 0.55)",o.style.color="#fff",o.style.fontFamily="monospace",o.style.fontSize="12px",o.style.lineHeight="1.5",o.style.borderRadius="4px",o.style.pointerEvents="auto",o.style.maxWidth="220px";const a=(L,{defaultOpen:$=!1}={})=>{const re=document.createElement("div");re.style.marginBottom="12px";const K=document.createElement("button");K.type="button",K.style.display="block",K.style.width="100%",K.style.background="rgba(255, 255, 255, 0.08)",K.style.border="1px solid rgba(255, 255, 255, 0.18)",K.style.color="#fff",K.style.fontFamily="inherit",K.style.fontSize="12px",K.style.textAlign="left",K.style.padding="4px 8px",K.style.cursor="pointer",K.style.borderRadius="4px",K.style.marginBottom="6px";let Ue=$;const Ne=()=>{K.textContent=`${Ue?"▼":"►"} ${L}`};Ne();const C=document.createElement("div");return C.style.display=Ue?"block":"none",C.style.paddingBottom="4px",C.style.borderBottom="1px solid rgba(255, 255, 255, 0.1)",K.addEventListener("click",()=>{Ue=!Ue,C.style.display=Ue?"block":"none",Ne()}),re.appendChild(K),re.appendChild(C),o.appendChild(re),{addLabel:H=>{const ne=document.createElement("div");return ne.textContent=H,ne.style.margin="4px 0",C.appendChild(ne),ne},addSlider:({min:H,max:ne,value:Y,step:Ce=1,onInput:de})=>{const ve=document.createElement("input");return ve.type="range",ve.min=String(H),ve.max=String(ne),ve.value=String(Y),ve.step=String(Ce),ve.style.width="100%",ve.style.marginBottom="6px",ve.addEventListener("input",Te=>{const ae=Number(Te.target.value);de(ae,ve)}),C.appendChild(ve),ve},header:K,body:C}},l=a("Atmosphere",{defaultOpen:!0}),c=a("Terrain",{defaultOpen:!0}),u=a("Lighting",{defaultOpen:!1}),h=a("Shadows",{defaultOpen:!1}),d=a("Post FX",{defaultOpen:!1}),f=l.addLabel("Fog near: 10%");l.addSlider({min:1,max:200,value:10,onInput:L=>{r.fogNearScale=L/100,f.textContent=`Fog near: ${L}%`,t(r.terrain.activeShaderIndex)}});const p=l.addLabel(`Fog far: ${Math.round(r.fogFarScale*100)}%`);l.addSlider({min:5,max:300,value:Math.round(r.fogFarScale*100),onInput:L=>{r.fogFarScale=Math.max(L/100,.05),p.textContent=`Fog far: ${L}%`,t(r.terrain.activeShaderIndex)}});const x=l.addLabel(`Fade start: ${Math.round(r.fadeStartScale*100)}%`);l.addSlider({min:0,max:95,value:Math.round(r.fadeStartScale*100),onInput:L=>{r.fadeStartScale=Math.min(L/100,.95),x.textContent=`Fade start: ${L}%`,t(r.terrain.activeShaderIndex)}});const g=l.addLabel(`Fade end: ${Math.round(r.fadeEndScale*100)}%`);l.addSlider({min:50,max:100,value:Math.round(r.fadeEndScale*100),onInput:L=>{r.fadeEndScale=Math.max(L/100,r.fadeStartScale+.05),g.textContent=`Fade end: ${Math.round(r.fadeEndScale*100)}%`,t(r.terrain.activeShaderIndex)}});const m=l.addLabel(`Sky tint: ${Math.round(r.skyTintStrength*100)}%`);l.addSlider({min:0,max:50,value:Math.round(r.skyTintStrength*100),onInput:L=>{var $;r.skyTintStrength=L/100,m.textContent=`Sky tint: ${L}%`,($=r.terrain)==null||$.updateSkyTint(r.skyTintColor,r.skyTintStrength)}});const y=c.addLabel(`Morph width: ${Math.round(r.morphRegion*100)}%`);c.addSlider({min:5,max:100,value:Math.round(r.morphRegion*100),onInput:L=>{var $;r.morphRegion=Math.max(L/100,.05),y.textContent=`Morph width: ${L}%`,($=r.terrain)==null||$.updateMorphRegion(r.morphRegion)}});const v=c.addLabel(`Terrain smooth: ${Math.round(r.heightSmoothStrength*100)}%`);c.addSlider({min:0,max:100,value:Math.round(r.heightSmoothStrength*100),onInput:L=>{const $=L/100;v.textContent=`Terrain smooth: ${L}%`,i==null||i($)}});const _=L=>L.toFixed(2),E=c.addLabel(`Height multiplier: ${_(r.heightGain)}×`);c.addSlider({min:0,max:200,value:Math.round(r.heightGain*100),onInput:L=>{const $=L/100;E.textContent=`Height multiplier: ${_($)}×`,s==null||s($)}});const A=c.addLabel(`LOD levels: ${r.terrainLevels}`);c.addSlider({min:2,max:32,value:r.terrainLevels,onInput:L=>{r.terrainLevels=Math.max(2,Math.min(32,Math.round(L))),A.textContent=`LOD levels: ${r.terrainLevels}`,n(),t(r.terrain.activeShaderIndex)}});const R=c.addLabel(`Tile resolution: ${r.terrainResolution}`);c.addSlider({min:16,max:4096,step:16,value:r.terrainResolution,onInput:L=>{r.terrainResolution=Math.max(8,Math.round(L/16)*16),R.textContent=`Tile resolution: ${r.terrainResolution}`,n(),t(r.terrain.activeShaderIndex)}});const P=c.addLabel(`Noise resolution: ${r.noiseResolution}`);c.addSlider({min:64,max:1024,step:64,value:r.noiseResolution,onInput:(L,$)=>{r.setNoiseResolution(L),P.textContent=`Noise resolution: ${r.noiseResolution}`,$.value=String(r.noiseResolution),n(),t(r.terrain.activeShaderIndex)}});const M=u.addLabel(`Ambient strength: ${Math.round(r.ambientStrength*100)}%`);u.addSlider({min:0,max:200,value:Math.round(r.ambientStrength*100),onInput:L=>{var $;r.ambientStrength=L/100,M.textContent=`Ambient strength: ${L}%`,($=r.terrain)==null||$.updateAmbient(r.ambientDirection,r.ambientStrength,r.ambientColor)}});const b=u.addLabel(`Normal smoothing: ${Math.round(r.normalSmoothFactor*100)}%`);u.addSlider({min:0,max:100,value:Math.round(r.normalSmoothFactor*100),onInput:L=>{var $;r.normalSmoothFactor=L/100,b.textContent=`Normal smoothing: ${L}%`,($=r.terrain)==null||$.updateSmoothFactor(r.normalSmoothFactor)}});const I=u.addLabel(`Specular strength: ${Math.round(r.specularStrength*100)}%`);u.addSlider({min:0,max:300,value:Math.round(r.specularStrength*100),onInput:L=>{var $;r.specularStrength=L/100,I.textContent=`Specular strength: ${L}%`,($=r.terrain)==null||$.updateSpecularStrength(r.specularStrength)}});const U=u.addLabel(`Sun strength: ${Math.round(r.sunStrengthBase*100)}%`);u.addSlider({min:0,max:200,value:Math.round(r.sunStrengthBase*100),onInput:L=>{r.sunStrengthBase=L/100,U.textContent=`Sun strength: ${L}%`,r.updateSun()}});const z=u.addLabel(`Sun warmth: ${Math.round(r.sunWarmth*100)}%`);u.addSlider({min:0,max:100,value:Math.round(r.sunWarmth*100),onInput:L=>{r.sunWarmth=L/100,z.textContent=`Sun warmth: ${L}%`,r.updateSun()}});const q=u.addLabel(`Time: ${r.sunTime.toFixed(1)}h`);u.addSlider({min:0,max:24,value:r.sunTime,step:.1,onInput:L=>{r.sunTime=L,q.textContent=`Time: ${L.toFixed(1)}h`,r.updateSun()}});const V=h.addLabel(`Shadows: ${r.shadowsEnabled?"On":"Off"}`);V.style.cursor="pointer",V.style.userSelect="none",V.addEventListener("click",()=>{r.setShadowEnabled(!r.shadowsEnabled),V.textContent=`Shadows: ${r.shadowsEnabled?"On":"Off"}`});const X=h.addLabel(`Shadow strength: ${Math.round(r.shadowStrength*100)}%`);h.addSlider({min:0,max:100,value:Math.round(r.shadowStrength*100),onInput:L=>{r.setShadowStrength(L/100),X.textContent=`Shadow strength: ${L}%`}});const Z=h.addLabel(`Shadow softness: ${r.shadowSoftness.toFixed(2)}`);h.addSlider({min:10,max:400,value:Math.round(r.shadowSoftness*100),onInput:L=>{const $=Math.min(Math.max(L/100,.1),4);r.setShadowSoftness($),Z.textContent=`Shadow softness: ${$.toFixed(2)}`}});const k=h.addLabel(`Shadow bias: ${r.shadowBias.toExponential(2)}`);h.addSlider({min:5,max:300,value:Math.round(r.shadowBias*1e5),onInput:L=>{const $=Math.min(Math.max(L/1e5,1e-5),.01);r.setShadowBias($),k.textContent=`Shadow bias: ${$.toExponential(2)}`}});const ue=h.addLabel(`Shadow distance: ${Math.round(r.shadowMaxDistance)}`);h.addSlider({min:100,max:7e3,step:100,value:Math.round(r.shadowMaxDistance),onInput:L=>{r.setShadowMaxDistance(L),ue.textContent=`Shadow distance: ${Math.round(r.shadowMaxDistance)}`}});const fe=h.addLabel(`Shadow resolution: ${r.shadowResolution}`);h.addSlider({min:256,max:2048,step:256,value:r.shadowResolution,onInput:(L,$)=>{r.setShadowResolution(L),fe.textContent=`Shadow resolution: ${r.shadowResolution}`,$.value=String(r.shadowResolution)}});const Se=h.addLabel(`Show cascades: ${r.shadowDebugEnabled?"On":"Off"}`);Se.style.cursor="pointer",Se.style.userSelect="none",Se.addEventListener("click",()=>{const L=!r.shadowDebugEnabled;r.setShadowDebugEnabled(L),Se.textContent=`Show cascades: ${L?"On":"Off"}`}),["Cascade 1","Cascade 2","Cascade 3"].forEach((L,$)=>{const re=h.addLabel(`${L}: ${r.shadowCascadeEnabled[$]?"On":"Off"}`);re.style.cursor="pointer",re.style.userSelect="none",re.addEventListener("click",()=>{const K=!r.shadowCascadeEnabled[$];r.setShadowCascadeEnabled($,K),re.textContent=`${L}: ${K?"On":"Off"}`})});const We=d.addLabel(`Bloom: ${r.bloomEnabled?"On":"Off"}`);We.style.cursor="pointer",We.style.userSelect="none",We.addEventListener("click",()=>{r.bloomEnabled=!r.bloomEnabled,We.textContent=`Bloom: ${r.bloomEnabled?"On":"Off"}`});let Qe;const je=d.addLabel(`Post FX: ${r.postProcessingEnabled?"On":"Off"}`);je.style.cursor="pointer",je.style.userSelect="none",je.addEventListener("click",()=>{r.setPostProcessingEnabled(!r.postProcessingEnabled),je.textContent=`Post FX: ${r.postProcessingEnabled?"On":"Off"}`,Qe&&(Qe.textContent=`Antialias: ${r.aaEnabled&&r.postProcessingEnabled?"On":"Off"}`)}),Qe=d.addLabel(`Antialias: ${r.aaEnabled&&r.postProcessingEnabled?"On":"Off"}`),Qe.style.cursor="pointer",Qe.style.userSelect="none",Qe.addEventListener("click",()=>{r.setAntialiasEnabled(!r.aaEnabled),Qe.textContent=`Antialias: ${r.aaEnabled&&r.postProcessingEnabled?"On":"Off"}`});const Q=d.addLabel(`AA blend: ${Math.round(r.aaSubpixelBlending*100)}%`);d.addSlider({min:0,max:150,value:Math.round(r.aaSubpixelBlending*100),onInput:L=>{r.setAntialiasSubpixel(L/100),Q.textContent=`AA blend: ${L}%`}});const te=d.addLabel(`AA contrast: ${Math.round(r.aaContrastThreshold*1e3)/1e3}`);d.addSlider({min:1,max:200,value:Math.round(r.aaContrastThreshold*1e3),onInput:L=>{const $=L/1e3;r.setAntialiasContrast($),te.textContent=`AA contrast: ${Math.round($*1e3)/1e3}`}});const ge=d.addLabel(`AA relative: ${Math.round(r.aaRelativeThreshold*1e3)/1e3}`);d.addSlider({min:1,max:300,value:Math.round(r.aaRelativeThreshold*1e3),onInput:L=>{const $=L/1e3;r.setAntialiasRelative($),ge.textContent=`AA relative: ${Math.round($*1e3)/1e3}`}});const Ae=d.addLabel(`Bloom strength: ${Math.round(r.bloomStrength*100)}%`);d.addSlider({min:0,max:200,value:Math.round(r.bloomStrength*100),onInput:L=>{r.bloomStrength=L/100,Ae.textContent=`Bloom strength: ${L}%`,r.bloomStrength<=.001?(r.bloomEnabled=!1,We.textContent="Bloom: Off"):r.bloomEnabled||(r.bloomEnabled=!0,We.textContent="Bloom: On")}});const Me=d.addLabel(`Bloom threshold: ${r.bloomThreshold.toFixed(2)}`);d.addSlider({min:0,max:300,value:Math.round(r.bloomThreshold*100),onInput:L=>{r.bloomThreshold=L/100,Me.textContent=`Bloom threshold: ${r.bloomThreshold.toFixed(2)}`,r.applyBloomSettings()}});const He=d.addLabel(`Bloom knee: ${r.bloomSoftKnee.toFixed(2)}`);d.addSlider({min:0,max:100,value:Math.round(r.bloomSoftKnee*100),onInput:L=>{r.bloomSoftKnee=L/100,He.textContent=`Bloom knee: ${r.bloomSoftKnee.toFixed(2)}`,r.applyBloomSettings()}});const lt=d.addLabel(`Bloom blur sigma: ${r.bloomSigma.toFixed(2)}`);d.addSlider({min:10,max:120,value:Math.round(r.bloomSigma*10),step:5,onInput:L=>{r.bloomSigma=L/10,lt.textContent=`Bloom blur sigma: ${r.bloomSigma.toFixed(2)}`,r.applyBloomSettings()}});const D=d.addLabel(`Bloom resolution: ${r.bloomResolution}px`);d.addSlider({min:32,max:512,value:r.bloomResolution,step:16,onInput:L=>{r.setBloomResolution(L),D.textContent=`Bloom resolution: ${r.bloomResolution}px`}});const se=d.addLabel(`Contrast: ${Math.round(r.contrastAdjustment*100)}%`);d.addSlider({min:-50,max:50,value:Math.round(r.contrastAdjustment*100),onInput:L=>{r.contrastAdjustment=L/100,se.textContent=`Contrast: ${L}%`,r.brightnessContrastPass&&(r.brightnessContrastPass.material.uniforms.contrast.value=r.contrastAdjustment)}});const ee=d.addLabel(`Brightness: ${Math.round(r.brightnessAdjustment*100)}%`);d.addSlider({min:-50,max:50,value:Math.round(r.brightnessAdjustment*100),onInput:L=>{r.brightnessAdjustment=L/100,ee.textContent=`Brightness: ${L}%`,r.brightnessContrastPass&&(r.brightnessContrastPass.material.uniforms.brightness.value=r.brightnessAdjustment)}});const j=d.addLabel(`Render scale: ${Math.round(r.renderPixelRatio*100)}%`);return d.addSlider({min:50,max:200,value:Math.round(r.renderPixelRatio*100),onInput:L=>{const $=L/100;r.setRenderPixelRatio($),j.textContent=`Render scale: ${Math.round(r.renderPixelRatio*100)}%`}}),e.appendChild(o),{panel:o}}const Ni={daylight:[{time:0,horizon:10336255,sky:2969501,intensity:.3},{time:6,horizon:12179199,sky:6261974,intensity:.8},{time:12,horizon:15004415,sky:12573951,intensity:1},{time:18,horizon:12440319,sky:7049942,intensity:.75},{time:24,horizon:10336255,sky:2969501,intensity:.3}],golden:[{time:0,horizon:1313039,sky:328457,intensity:.04},{time:5.5,horizon:8010269,sky:2299667,intensity:.22},{time:6.8,horizon:16757850,sky:8672826,intensity:.55},{time:12,horizon:16774338,sky:14993013,intensity:.95},{time:18.5,horizon:16770205,sky:13082709,intensity:.8},{time:19.5,horizon:16747579,sky:7356975,intensity:.5},{time:20.5,horizon:2822176,sky:985622,intensity:.18},{time:24,horizon:1313039,sky:328457,intensity:.04}],alpine:[{time:0,horizon:594207,sky:329747,intensity:.06},{time:5.5,horizon:5009345,sky:1845064,intensity:.28},{time:6.8,horizon:10672639,sky:4884432,intensity:.65},{time:12,horizon:15398655,sky:12115711,intensity:1},{time:18.5,horizon:13363199,sky:7779327,intensity:.85},{time:19.5,horizon:8101631,sky:3099560,intensity:.55},{time:20.5,horizon:1714767,sky:725799,intensity:.2},{time:24,horizon:594207,sky:329747,intensity:.06}],crystal:[{time:0,horizon:660514,sky:198157,intensity:.08},{time:5.5,horizon:2046575,sky:594472,intensity:.2},{time:7,horizon:4175615,sky:1525668,intensity:.55},{time:12,horizon:12252159,sky:7652095,intensity:1.05},{time:18,horizon:8245503,sky:3106248,intensity:.85},{time:20,horizon:3951016,sky:1120836,intensity:.35},{time:24,horizon:660514,sky:198157,intensity:.08}],vulcanic:[{time:0,horizon:2097923,sky:524545,intensity:.05},{time:5.5,horizon:4130564,sky:1114626,intensity:.12},{time:7,horizon:8131591,sky:2753538,intensity:.25},{time:12,horizon:8131591,sky:4130820,intensity:.4},{time:17.5,horizon:8131591,sky:2753538,intensity:.22},{time:19.5,horizon:4261637,sky:1245955,intensity:.1},{time:24,horizon:2097923,sky:524545,intensity:.05}],mars:[{time:0,horizon:2823432,sky:6040079,intensity:.08},{time:5.5,horizon:6040079,sky:6040079,intensity:.15},{time:7,horizon:9192992,sky:6040079,intensity:.35},{time:12,horizon:13003562,sky:7025944,intensity:.7},{time:17.5,horizon:11031592,sky:4858898,intensity:.5},{time:19.5,horizon:7024920,sky:6040079,intensity:.2},{time:24,horizon:2823432,sky:6040079,intensity:.08}]},fc=["Volcanic","Terrain","Snowy","Toon","Realistic","Crystal","Mars"],vd={Terrain:{name:"Terrain",skyMode:"atmosphere",fogColor:12573951,fogNearScale:.9,fogFarScale:1,horizon:15004415,skyColor:12573951,skyKeyframes:Ni.daylight},Snowy:{name:"Snowy",skyMode:"atmosphere",horizon:12573951,skyColor:16382463,fogColor:12573951,fogNearScale:250/300,fogFarScale:.9,skyKeyframes:Ni.alpine},Toon:{name:"Toon",skyMode:"classic",fogColor:9418239,fogNearScale:.85,fogFarScale:.95,skyKeyframes:Ni.golden},Realistic:{name:"Realistic",skyMode:"atmosphere",horizon:14151935,skyColor:8898559,fogColor:8963839,fogNearAbsolute:220,fogFarAbsolute:520,skyKeyframes:Ni.alpine},Volcanic:{name:"Volcanic",skyMode:"atmosphere",horizon:4395795,skyColor:1838092,fogColor:3412241,fogNearScale:.8,fogFarScale:.92,skyKeyframes:Ni.vulcanic},Crystal:{name:"Crystal",skyMode:"atmosphere",horizon:10213887,skyColor:6269183,fogColor:9683711,fogNearScale:.7,fogFarScale:.96,skyKeyframes:Ni.crystal},Mars:{name:"Mars",skyMode:"atmosphere",horizon:13003562,skyColor:7025944,fogColor:11031592,fogNearScale:.4,fogFarScale:1.2,skyKeyframes:Ni.mars}};function cb(r){const e=fc[r]||fc[0];return{shaderName:e,config:vd[e]||vd[fc[0]]}}function hb(r,e,{scene:t,material:n}){const{shaderName:i,config:s}=cb(e);t.fog||(t.fog=r.sceneFog||new di(0,300,1e3)),r.sceneFog=t.fog,r.environmentName=i,r.baseFogNear==null&&(r.baseFogNear=t.fog.near),r.baseFogFar==null&&(r.baseFogFar=t.fog.far),r.sky&&(r.sky.visible=!0);const o=s.skyMode!=="classic";r.sky2&&(r.sky2.visible=o,o&&(s.horizon&&(n.atmosphere.uniforms.uHorizonColor.value=new oe(s.horizon)),s.skyColor&&(n.atmosphere.uniforms.uSkyColor.value=new oe(s.skyColor))));const a=r.terrain.worldWidth/1024,l=r.baseFogNear??t.fog.near??300,c=r.baseFogFar??t.fog.far??800,u=s.fogNearAbsolute!=null?s.fogNearAbsolute*a:(s.fogNearScale??1)*l*a,h=s.fogFarAbsolute!=null?s.fogFarAbsolute*a:(s.fogFarScale??1)*c*a,d=u*r.fogNearScale,f=Math.max(h*r.fogFarScale,d+1),p=Math.min(f*Math.min(r.fadeStartScale,.95),f*Math.min(r.fadeEndScale,1)-1),x=Math.max(f*Math.min(r.fadeEndScale,1),p+1);if(r.fogEnabled){const g=r.sceneFog||t.fog;g.color.set(s.fogColor??0),g.near=d,g.far=f,t.fog=g,r.terrain.updateFog(t.fog)}else t.fog=null,r.terrain.updateFog(null);return r.terrain.updateFade(p,x),r.terrain.updateSmoothFactor(r.normalSmoothFactor),r.skyKeyframes=s.skyKeyframes||Th,{shaderName:i,config:s}}const ub="Environment";function _d(r){return r?`Environment: ${r}`:ub}function db({app:r,container:e}){const t=document.createElement("div");t.style.position="absolute",t.style.top="auto",t.style.left="10px",t.style.bottom="10px",t.style.pointerEvents="auto",t.style.zIndex="20";const n=document.createElement("button");n.textContent=_d(r.environmentName),n.style.padding="8px 18px",n.style.borderRadius="999px",n.style.border="1px solid rgba(255, 255, 255, 0.45)",n.style.background="linear-gradient(135deg, rgba(240, 246, 255, 0.95), rgba(173, 199, 255, 0.85))",n.style.color="#0a1524",n.style.fontFamily="monospace",n.style.fontSize="12px",n.style.fontWeight="600",n.style.textTransform="uppercase",n.style.letterSpacing="1.2px",n.style.cursor="pointer",n.style.boxShadow="0 2px 8px rgba(0, 10, 20, 0.35)";const i=s=>{n.textContent=_d(s)};return n.addEventListener("click",()=>{if(!r.terrain)return;const s=r.terrain.cycleShader(),o=r.applyShaderEnvironment(s);i((o==null?void 0:o.name)??r.environmentName)}),t.appendChild(n),e.appendChild(t),{wrapper:t,button:n,update:i}}const In=new T(0,0,1),fb=new oe(.6,.75,.98),pb=new oe(1,.75,.52),mb=new oe(.32,.44,.6),gb=new oe(.6,.48,.36),xb=new oe(.62,.76,.98),vb=new oe(.98,.68,.52),Xn=new T,pc=new T,As=new T,_b=new T,yb=new T,yd=new oe,Sd=new oe,Cs={lastX:0,lastY:0},gn=document.createElement("div"),Xo=new oe;class Sb{constructor(){this.clock=new gl,this.keys={},this.cameraRotation={x:0,y:0},this.moveSpeed=2,this.lookSpeed=.004,this.stats=null,this.useFreeCamera=!0,this.lookTarget=null,this.pointerLocked=!1,this.mouseDragging=!1,this.fogEnabled=!0,this.sceneFog=null,this.baseFogNear=300,this.baseFogFar=800,this.fogNearScale=.34,this.fogFarScale=.71,this.fadeStartScale=.9,this.fadeEndScale=1,this.morphRegion=.9,this.bloomEnabled=!0,this.bloomStrength=.05,this.bloomThreshold=1,this.bloomSoftKnee=.76,this.bloomSigma=4,this.bloomResolution=356,this.aaEnabled=!0,this.aaSubpixelBlending=1,this.aaContrastThreshold=.0312,this.aaRelativeThreshold=.063,this.sunTime=16.7,this.sunStrengthBase=1.2,this.sunDirection=new T(0,1,0),this.currentSunIntensity=1,this.sunWarmth=.75,this.sunLightColor=new oe(1,.85,.65),this.ambientStrength=.3,this.ambientColor=new oe(.45,.42,.35),this.ambientDirection=new T(1,0,0),this.normalSmoothFactor=.65,this.specularStrength=1,this.skyTintStrength=.15,this.skyTintColor=new oe(.62,.72,.88),this.contrastAdjustment=.1,this.brightnessAdjustment=-.06,this.noiseResolution=xM(),this.shadowsEnabled=!0,this.shadowCascadeCount=3,this.shadowResolution=2048,this.shadowLambda=.6,this.shadowMaxDistance=5e3,this.shadowBias=.0015,this.shadowStrength=1,this.shadowSoftness=1,this.shadowCascadeOverlap=.1,this.shadowCascades=[],this.shadowMatrices=[],this.shadowSplitsVec=new nt(0,0,0,0),this.shadowTempCorners=Array.from({length:8},()=>new T),this.debugAmbientLight=null,this.debugSunLight=null,this.cameraForward=new T(0,1,0),this.viewMatrix=new Fe,this.shadowCascadeEnabled=[!0,!0,!0],this.shadowDebugEnabled=!1,this.shadowDebugHelpers=[],this.introActive=!0,this.introElapsed=0,this.introOverlay=null,this.introController=null,this.composer=null,this.brightPass=null,this.blurPassH=null,this.blurPassV=null,this.compositePass=null,this.fxaaPass=null,this.brightnessContrastPass=null,this.updateBloomResolutionFn=null,this.applyAASettingsFn=null,this.renderPixelRatio=EM(),this.environmentToggle=null,this.postProcessingEnabled=!0,this.handleComposerResize=null,this.lensFlare=null,this.sunWorldPosition=new T,this.sunDistance=15e3,this.terrainLevels=5,this.terrainResolution=192,this.terrain=null,this.center=null,this.sky=null,this.sky2=null,this.sunMesh=null,this.heightSmoothStrength=.02,this.heightGain=.84,this.skyKeyframes=Th,this.applyShaderEnvironment=this.applyShaderEnvironment.bind(this),this.updateSun=this.updateSun.bind(this),this.animate=this.animate.bind(this),this.startExperience=this.startExperience.bind(this),this.setBloomResolution=this.setBloomResolution.bind(this),this.setRenderPixelRatio=this.setRenderPixelRatio.bind(this),this.setPostProcessingEnabled=this.setPostProcessingEnabled.bind(this),this.setAntialiasEnabled=this.setAntialiasEnabled.bind(this),this.setAntialiasSubpixel=this.setAntialiasSubpixel.bind(this),this.setAntialiasContrast=this.setAntialiasContrast.bind(this),this.setAntialiasRelative=this.setAntialiasRelative.bind(this),this.setNoiseResolution=this.setNoiseResolution.bind(this),this.setupShadows=this.setupShadows.bind(this),this.renderShadowMaps=this.renderShadowMaps.bind(this),this.setShadowEnabled=this.setShadowEnabled.bind(this),this.setShadowStrength=this.setShadowStrength.bind(this),this.setShadowBias=this.setShadowBias.bind(this),this.setShadowMaxDistance=this.setShadowMaxDistance.bind(this),this.setShadowResolution=this.setShadowResolution.bind(this),this.setShadowCascadeEnabled=this.setShadowCascadeEnabled.bind(this),this.setShadowSoftness=this.setShadowSoftness.bind(this)}init(){var t;this.setupStats(),this.setupHud();const e=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);this.terrainResolution=e?96:192,fd(this.heightSmoothStrength),pd(this.heightGain),this.createTerrain(),this.setupPostProcessing(),this.setupShadows(),this.setupLensFlare(),this.setupSunMesh(),this.setupDebugHelpers(),this.setupSky(),this.setupIntroOverlay(),Le.position.set(0,0,50),Le.up.copy(In),Le.lookAt(new T(0,1,0)),Le.updateMatrixWorld(!0),this.viewMatrix.copy(Le.matrixWorldInverse),Le.getWorldDirection(this.cameraForward),this.cameraForward.normalize(),this.center=new T(0,0,0),this.lookTarget=this.center.clone(),this.updateDebugLight(),(t=this.terrain)==null||t.updateViewMatrix(this.viewMatrix),this.setupEnvironmentToggle(),this.setupControlPanel(),this.setupInputHandlers(),this.applyShaderEnvironment(this.terrain.activeShaderIndex)}setupStats(){this.stats=new lM,this.stats.showPanel(0),this.stats.dom.style.position="absolute",this.stats.dom.style.left="10px",this.stats.dom.style.bottom="10px",this.stats.dom.style.top="auto",document.body.appendChild(this.stats.dom)}setupHud(){gn.style.position="absolute",gn.style.bottom="10px",gn.style.right="10px",gn.style.padding="6px 10px",gn.style.background="rgba(0, 0, 0, 0.45)",gn.style.color="#fff",gn.style.fontFamily="monospace",gn.style.fontSize="12px",gn.style.lineHeight="1.4",gn.style.pointerEvents="none",Kt.appendChild(gn)}createTerrain(){const e=this.terrain?this.terrain.activeShaderIndex:0;if(this.terrain){const t=new Set,n=new Set;this.terrain.traverse(i=>{var s,o;i.geometry&&n.add(i.geometry),i.material&&t.add(i.material),(s=i.userData)!=null&&s.mainMaterial&&t.add(i.userData.mainMaterial),(o=i.userData)!=null&&o.depthMaterial&&t.add(i.userData.depthMaterial)}),t.forEach(i=>{var s;return(s=i==null?void 0:i.dispose)==null?void 0:s.call(i)}),n.forEach(i=>{var s;return(s=i==null?void 0:i.dispose)==null?void 0:s.call(i)}),at.remove(this.terrain)}this.terrain=new zM(ln,8192,this.terrainLevels,this.terrainResolution,{enableShadows:this.shadowsEnabled}),at.add(this.terrain),this.terrain.setShader(e),this.terrain.setShadowsEnabled(this.shadowsEnabled),this.terrain.updateMorphRegion(this.morphRegion),this.terrain.updateSun(this.sunDirection,this.currentSunIntensity),this.terrain.updateAmbient(this.ambientDirection,this.ambientStrength,this.ambientColor),this.terrain.updateSmoothFactor(this.normalSmoothFactor),this.terrain.updateSpecularStrength(this.specularStrength),this.terrain.updateSkyTint(this.skyTintColor,this.skyTintStrength),this.applyShadowUniformsToTerrain(),this.terrain.updateCascadeEnabled(this.shadowCascadeEnabled),this.terrain.updateViewMatrix(this.viewMatrix)}setupPostProcessing(){const{composer:e,brightPass:t,blurPassH:n,blurPassV:i,compositePass:s,fxaaPass:o,brightnessContrastPass:a,setBloomResolution:l,applyAntialiasSettings:c,handleResize:u}=ob({renderer:Dt,scene:at,camera:Le,bloomStrength:this.bloomStrength,bloomThreshold:this.bloomThreshold,bloomSoftKnee:this.bloomSoftKnee,bloomSigma:this.bloomSigma,bloomResolution:this.bloomResolution,aaEnabled:this.aaEnabled,aaSubpixelBlending:this.aaSubpixelBlending,aaContrastThreshold:this.aaContrastThreshold,aaRelativeThreshold:this.aaRelativeThreshold,brightness:this.brightnessAdjustment,contrast:this.contrastAdjustment});this.composer=e,this.brightPass=t,this.blurPassH=n,this.blurPassV=i,this.compositePass=s,this.fxaaPass=o,this.brightnessContrastPass=a,this.updateBloomResolutionFn=l,this.applyAASettingsFn=c,this.brightPass&&(this.brightPass.material.uniforms.uThreshold.value=this.bloomThreshold,this.brightPass.material.uniforms.uSoftKnee.value=this.bloomSoftKnee),this.blurPassH&&(this.blurPassH.material.uniforms.uSigma.value=this.bloomSigma),this.blurPassV&&(this.blurPassV.material.uniforms.uSigma.value=this.bloomSigma),this.compositePass&&(this.compositePass.material.uniforms.uBloomStrength.value=this.bloomStrength),this.setBloomResolution(this.bloomResolution),this.handleComposerResize=()=>{this.composer&&u(Kt.offsetWidth,Kt.offsetHeight)},window.addEventListener("resize",this.handleComposerResize),this.handleComposerResize(),this.applyBloomSettings(),this.applyAntialiasSettings()}applyBloomSettings(){this.brightPass&&(this.brightPass.material.uniforms.uThreshold.value=this.bloomThreshold,this.brightPass.material.uniforms.uSoftKnee.value=this.bloomSoftKnee),this.blurPassH&&this.blurPassH.setSigma(this.bloomSigma),this.blurPassV&&this.blurPassV.setSigma(this.bloomSigma)}setBloomResolution(e){var n;const t=Xe.clamp(e,32,1024);this.bloomResolution=t,(n=this.updateBloomResolutionFn)==null||n.call(this,t)}setRenderPixelRatio(e){var n;const t=Xe.clamp(e,.5,3);this.renderPixelRatio=t,wM(t),(n=this.handleComposerResize)==null||n.call(this)}setPostProcessingEnabled(e){this.postProcessingEnabled=!!e,this.applyAntialiasSettings()}setNoiseResolution(e){const t=Xe.clamp(e,mM,gM),n=Math.pow(2,Math.round(Math.log2(t))),i=vM(n);this.noiseResolution=i}setShadowEnabled(e){var n,i;const t=!!e;this.shadowsEnabled!==t&&(this.shadowsEnabled=t,t?(this.setupShadows(),this.renderShadowMaps()):(this.shadowCascades.forEach(s=>{var o,a;(a=(o=s.renderTarget)==null?void 0:o.dispose)==null||a.call(o)}),this.shadowCascades=[],this.shadowMatrices=[],this.shadowSplitsVec.set(0,0,0,0),(n=this.terrain)==null||n.setShadowsEnabled(!1),this.applyShadowUniformsToTerrain()),(i=this.terrain)==null||i.updateCascadeEnabled(this.shadowCascadeEnabled))}setShadowStrength(e){this.shadowStrength=Xe.clamp(e,0,1),this.applyShadowUniformsToTerrain(),this.renderShadowMaps()}setShadowBias(e){this.shadowBias=Xe.clamp(e,1e-5,.01),this.applyShadowUniformsToTerrain()}setShadowMaxDistance(e){this.shadowMaxDistance=Math.max(50,e),this.calculateShadowCascades(),this.renderShadowMaps()}setShadowResolution(e){const t=Math.max(128,Math.min(2048,e)),n=Math.pow(2,Math.round(Math.log2(t)));n!==this.shadowResolution&&(this.shadowResolution=n,this.setupShadows(),this.renderShadowMaps())}setShadowSoftness(e){this.shadowSoftness=Xe.clamp(e,.1,4),this.applyShadowUniformsToTerrain()}setShadowCascadeEnabled(e,t){var n;e<0||e>=this.shadowCascadeEnabled.length||(this.shadowCascadeEnabled[e]=!!t,(n=this.terrain)==null||n.updateCascadeEnabled(this.shadowCascadeEnabled),this.applyShadowUniformsToTerrain(),this.shadowsEnabled&&this.renderShadowMaps(),this.shadowDebugHelpers[e]&&(this.shadowDebugHelpers[e].visible=this.shadowDebugEnabled&&this.shadowCascadeEnabled[e]))}setShadowDebugEnabled(e){this.shadowDebugEnabled=!!e,this.shadowDebugHelpers.forEach((t,n)=>{t&&(t.visible=this.shadowDebugEnabled&&this.shadowCascadeEnabled[n])})}setAntialiasEnabled(e){this.aaEnabled=!!e,this.applyAntialiasSettings()}setAntialiasSubpixel(e){this.aaSubpixelBlending=Xe.clamp(e,0,1.5),this.applyAntialiasSettings()}setAntialiasContrast(e){this.aaContrastThreshold=Xe.clamp(e,.001,.2),this.applyAntialiasSettings()}setAntialiasRelative(e){this.aaRelativeThreshold=Xe.clamp(e,.001,.3),this.applyAntialiasSettings()}applyAntialiasSettings(){var e;(e=this.applyAASettingsFn)==null||e.call(this,{enabled:this.aaEnabled&&this.postProcessingEnabled,subpixel:this.aaSubpixelBlending,contrastThreshold:this.aaContrastThreshold,relativeThreshold:this.aaRelativeThreshold})}setupLensFlare(){this.lensFlare=new kM(at,Le,Dt),this.lensFlare.setSunColor(this.sunLightColor)}setupSunMesh(){const e=new pi(200,16,16),t=new xn({color:16777096,fog:!1,depthTest:!0,depthWrite:!0,transparent:!0,opacity:1,blending:wr});t.color.multiplyScalar(2),this.sunMesh=new pt(e,t),this.sunMesh.frustumCulled=!0,at.add(this.sunMesh)}setupDebugHelpers(){const t=new Ys(28,52,420,6,1);let n;try{n=new Et({uniforms:{uBaseColor:{value:new oe(13687008)},uSunDirection:{value:this.sunDirection.clone()},uSunIntensity:{value:this.currentSunIntensity},uSunColor:{value:this.sunLightColor.clone()},uAmbientStrength:{value:this.ambientStrength},uAmbientColor:{value:this.ambientColor.clone()}},vertexShader:HM,fragmentShader:VM}),console.log("Obelisk custom shader created successfully")}catch(c){console.error("Shader creation failed, using fallback:",c),n=new xn({color:16737792})}const i=new pt(t,n);i.rotation.x=Math.PI/2;const s=200,o=120,a=_M(s,o),l=a+420*.5;i.position.set(s,o,l),i.castShadow=!0,i.receiveShadow=!0,at.add(i),this.debugObelisk=i,console.log(`Obelisk created at position: (${s}, ${o}, ${l.toFixed(2)})`),console.log(`Terrain height at obelisk: ${a.toFixed(2)}`),console.log("Obelisk added to scene"),this.debugAmbientLight=new ph(16777215,.35),at.add(this.debugAmbientLight),this.debugSunLight=new fh(16777215,.7),this.debugSunLight.castShadow=!1,at.add(this.debugSunLight),this.debugSunLight.target.position.copy(this.center??new T),at.add(this.debugSunLight.target),this.updateDebugLight()}setupSky(){const e=new xn({map:br.sky,side:It,depthWrite:!1});this.sky=new pt(dd.sky,e),this.sky.visible=!0,this.sky.frustumCulled=!1,at.add(this.sky),this.sky2=new pt(dd.sky2,Es.atmosphere),this.sky2.renderOrder=1e4,at.add(this.sky2),at.fog||(at.fog=new di(0,300,1e3)),this.sceneFog=at.fog,this.baseFogNear=at.fog.near,this.baseFogFar=at.fog.far}setupShadows(){var e,t;if(this.shadowCascades.forEach(n=>{var i,s,o,a,l,c,u;(s=(i=n.renderTarget)==null?void 0:i.dispose)==null||s.call(i),n.helper&&((o=n.helper.parent)==null||o.remove(n.helper),(l=(a=n.helper.geometry)==null?void 0:a.dispose)==null||l.call(a),(u=(c=n.helper.material)==null?void 0:c.dispose)==null||u.call(c))}),this.shadowCascades=[],this.shadowMatrices=[],this.shadowDebugHelpers=[],!this.shadowsEnabled){(e=this.terrain)==null||e.setShadowsEnabled(!1),this.applyShadowUniformsToTerrain();return}for(let n=0;n<this.shadowCascadeCount;n++){const i=new un(this.shadowResolution,this.shadowResolution);i.texture.minFilter=xt,i.texture.magFilter=xt,i.texture.generateMipmaps=!1,i.depthTexture=new il(this.shadowResolution,this.shadowResolution),i.depthTexture.type=Ki;const s=new $s(-1,1,1,-1,.1,2048),o=new vp(s);o.visible=this.shadowDebugEnabled,at.add(o),this.shadowCascades.push({camera:s,renderTarget:i,helper:o}),this.shadowDebugHelpers.push(o),this.shadowMatrices.push(new Fe)}this.shadowSplitsVec.set(0,0,0,this.shadowMaxDistance),(t=this.terrain)==null||t.setShadowsEnabled(!0),this.applyShadowUniformsToTerrain()}applyShadowUniformsToTerrain(){if(!this.terrain)return;const e=[null,null,null];for(let t=0;t<Math.min(this.shadowCascades.length,e.length);t++)e[t]=this.shadowCascades[t].renderTarget.depthTexture;this.terrain.updateShadowUniforms(this.shadowMatrices,this.shadowSplitsVec,e,this.shadowBias,this.shadowStrength,this.shadowsEnabled&&this.shadowCascades.length>0,this.shadowCascadeEnabled,this.shadowResolution,this.shadowSoftness),this.terrain.updateCascadeEnabled(this.shadowCascadeEnabled),this.viewMatrix&&this.terrain.updateViewMatrix(this.viewMatrix)}calculateShadowCascades(){if(!this.shadowCascades.length||!this.shadowsEnabled)return;const e=Le,t=e.near,n=Math.min(this.shadowMaxDistance,e.far),i=this.shadowLambda,s=this.shadowCascades.length,o=[];for(let u=0;u<s;u++){const h=(u+1)/s,d=t*Math.pow(n/t,h),f=t+(n-t)*h,p=Xe.lerp(f,d,i);o.push(p)}const a=[];let l=t,c=t;for(let u=0;u<s;u++){const h=o[u];if(h==null)continue;const f=Math.max(h-c,0)*this.shadowCascadeOverlap,p=l,x=Math.min(n,h+f);x>p+.001&&this.updateCascadeCamera(u,p,x,e);const g=Math.max(p+.001,h-f);a[u]=g,l=g,c=h}this.shadowSplitsVec.set(a[0]??n,a[1]??n,a[2]??n,n),this.applyShadowUniformsToTerrain()}updateCascadeCamera(e,t,n,i){var Ne;const s=this.shadowCascades[e];if(!s)return;const o=new T;i.getWorldDirection(o),o.normalize();const a=new T().copy(i.up).normalize(),l=new T().crossVectors(o,a).normalize();a.crossVectors(l,o).normalize();const c=new T().copy(i.position),u=Math.tan(Xe.degToRad(i.fov*.5)),h=i.aspect,d=c.clone().add(o.clone().multiplyScalar(t)),f=c.clone().add(o.clone().multiplyScalar(n)),p=u*t,x=p*h,g=u*n,m=g*h,y=this.shadowTempCorners,v=a.clone().multiplyScalar(p),_=l.clone().multiplyScalar(x),E=a.clone().multiplyScalar(g),A=l.clone().multiplyScalar(m);y[0].copy(d).sub(_).sub(v),y[1].copy(d).add(_).sub(v),y[2].copy(d).sub(_).add(v),y[3].copy(d).add(_).add(v),y[4].copy(f).sub(A).sub(E),y[5].copy(f).add(A).sub(E),y[6].copy(f).sub(A).add(E),y[7].copy(f).add(A).add(E);const P=this.sunDirection.clone().normalize().clone().negate(),M=Math.abs(P.z)>.99?new T(1,0,0):new T(0,0,1),b=new T().crossVectors(M,P).normalize(),I=new T().crossVectors(P,b).normalize(),U={x:1/0,y:1/0,z:1/0},z={x:-1/0,y:-1/0,z:-1/0},q=_b.copy(i.position),V=q.dot(b),X=q.dot(I),Z=q.dot(P),k=C=>{const S=C.dot(b),O=C.dot(I),H=C.dot(P);S<U.x&&(U.x=S),O<U.y&&(U.y=O),H<U.z&&(U.z=H),S>z.x&&(z.x=S),O>z.y&&(z.y=O),H>z.z&&(z.z=H)};for(let C=0;C<8;C++)k(y[C]);k(q),(Ne=this.terrain)!=null&&Ne.offset&&k(yb.copy(this.terrain.offset));const ue=this.shadowCascades.length||1,fe=ue>1?e/(ue-1):0,Se=Xe.lerp(400,this.shadowMaxDistance,fe);k(q.clone().addScaledVector(In,-Se));const Ge=Xe.lerp(600,1200,fe);k(q.clone().addScaledVector(In,Ge));const We=Xe.lerp(18,60,fe),Qe=Xe.lerp(100,300,fe),je=(U.x+z.x)*.5,Q=(U.y+z.y)*.5;let te=Xe.lerp(V,je,fe),ge=Xe.lerp(X,Q,fe),Ae=Math.max(Math.abs(te-U.x),Math.abs(te-z.x)),Me=Math.max(Math.abs(ge-U.y),Math.abs(ge-z.y)),He=Math.max(Ae,Me)+We;He=Math.max(He,.001);const lt=U.z-Qe,D=z.z+Qe,se=Math.max(1,D-lt),ee=(lt+D)*.5,j=se*.5,L=He*2/this.shadowResolution;L>0&&(te=Math.round((te-V)/L)*L+V,ge=Math.round((ge-X)/L)*L+X),Ae=Math.max(Math.abs(te-U.x),Math.abs(te-z.x)),Me=Math.max(Math.abs(ge-U.y),Math.abs(ge-z.y)),He=Math.max(He,Ae+We,Me+We);const $=He,re=q.clone().addScaledVector(b,te-V).addScaledVector(I,ge-X).addScaledVector(P,ee-Z),K=s.camera,Ue=re.clone().sub(P.clone().multiplyScalar(j));K.position.copy(Ue),K.up.copy(I),K.lookAt(re),K.updateMatrixWorld(!0),K.matrixWorldInverse.copy(K.matrixWorld).invert(),K.left=-He,K.right=He,K.bottom=-$,K.top=$,K.near=.1,K.far=se,K.updateProjectionMatrix(),K.updateMatrixWorld(!0),K.matrixWorldInverse.copy(K.matrixWorld).invert(),this.shadowMatrices[e].copy(K.projectionMatrix).multiply(K.matrixWorldInverse),s.helper&&(s.helper.update(),s.helper.visible=this.shadowDebugEnabled&&this.shadowCascadeEnabled[e])}renderShadowMaps(){var o,a,l;if(!this.shadowsEnabled||!this.shadowCascades.length||!this.terrain)return;this.calculateShadowCascades();const e=Dt.getRenderTarget(),t=Dt.autoClear,n=(o=this.sky)==null?void 0:o.visible,i=(a=this.sky2)==null?void 0:a.visible,s=(l=this.sunMesh)==null?void 0:l.visible;this.sky&&(this.sky.visible=!1),this.sky2&&(this.sky2.visible=!1),this.sunMesh&&(this.sunMesh.visible=!1),this.terrain.useDepthMaterial(!0),Dt.autoClear=!0;for(let c=0;c<this.shadowCascades.length;c++){const u=this.shadowCascades[c];this.shadowCascadeEnabled[c]&&(Dt.setRenderTarget(u.renderTarget),Dt.clear(!0,!0,!0),Dt.render(at,u.camera))}this.terrain.useDepthMaterial(!1),this.sky!==void 0&&(this.sky.visible=n),this.sky2!==void 0&&(this.sky2.visible=i),this.sunMesh!==void 0&&(this.sunMesh.visible=s),Dt.setRenderTarget(e),Dt.autoClear=t}setupIntroOverlay(){this.introController=ab({container:Kt,onStart:this.startExperience}),this.introOverlay=this.introController.overlay}setupControlPanel(){lb({app:this,container:Kt,applyShaderEnvironment:this.applyShaderEnvironment,createTerrain:()=>this.createTerrain(),setTerrainSmoothing:e=>this.setTerrainSmoothing(e),setHeightGain:e=>this.setHeightGain(e)})}setupEnvironmentToggle(){this.environmentToggle=db({app:this,container:Kt})}setupInputHandlers(){const e=Dt.domElement;e.tabIndex=0;const t=()=>document.pointerLockElement||document.mozPointerLockElement||document.webkitPointerLockElement,n=()=>{const h=e.requestPointerLock||e.mozRequestPointerLock||e.webkitRequestPointerLock;return h?(h.call(e),!0):!1},i=()=>{const h=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock;h==null||h.call(document)},s=()=>{this.pointerLocked=t()===e,this.pointerLocked?(this.mouseDragging=!1,document.body.style.cursor="none"):document.body.style.cursor="auto"},o=h=>{console.warn("Pointer lock failed",h)},a=(h,d)=>{this.cameraRotation.y-=h*this.lookSpeed,this.cameraRotation.x-=d*this.lookSpeed},l=h=>{if(this.useFreeCamera){if(this.pointerLocked){const d=h.movementX??h.mozMovementX??h.webkitMovementX??0,f=h.movementY??h.mozMovementY??h.webkitMovementY??0;a(d,f)}else if(this.mouseDragging){const d=h.clientX-Cs.lastX,f=h.clientY-Cs.lastY;Cs.lastX=h.clientX,Cs.lastY=h.clientY,a(d,f)}}},c=h=>{if(!this.useFreeCamera||h.button!==0)return;e.focus(),n()||(this.mouseDragging=!0,Cs.lastX=h.clientX,Cs.lastY=h.clientY)},u=()=>{this.mouseDragging=!1};document.addEventListener("pointerlockchange",s),document.addEventListener("mozpointerlockchange",s),document.addEventListener("webkitpointerlockchange",s),document.addEventListener("pointerlockerror",o),document.addEventListener("mozpointerlockerror",o),document.addEventListener("webkitpointerlockerror",o),document.addEventListener("mousemove",l),document.addEventListener("pointermove",l),document.addEventListener("mouseup",u),e.addEventListener("mousedown",c),e.addEventListener("mouseleave",u),document.addEventListener("keydown",h=>{if(this.introActive&&(h.code==="Enter"||h.code==="NumpadEnter")){this.startExperience(),h.preventDefault();return}if(this.keys[h.code]=!0,h.code==="KeyT"){const f=this.terrain.cycleShader();this.applyShaderEnvironment(f),h.preventDefault()}if(h.code==="KeyF"&&(this.fogEnabled=!this.fogEnabled,this.fogEnabled?(this.sceneFog||(this.sceneFog=new di(0,this.baseFogNear,this.baseFogFar)),at.fog=this.sceneFog):(this.sceneFog=at.fog,at.fog=null),this.applyShaderEnvironment(this.terrain.activeShaderIndex),h.preventDefault()),h.code==="KeyP"&&this.stats){const f=this.stats.dom.children;let p=0;for(let g=0;g<f.length;g++)if(f[g].style.display==="block"){p=g;break}const x=(p+1)%3;this.stats.showPanel(x),h.preventDefault()}h.code==="ArrowUp"&&(this.cameraRotation.x=Math.min(this.cameraRotation.x+.1,Math.PI/2),h.preventDefault()),h.code==="ArrowDown"&&(this.cameraRotation.x=Math.max(this.cameraRotation.x-.1,-Math.PI/2),h.preventDefault()),h.code==="ArrowLeft"&&(this.cameraRotation.y+=.1,h.preventDefault()),h.code==="ArrowRight"&&(this.cameraRotation.y-=.1,h.preventDefault()),h.code==="KeyC"&&(this.useFreeCamera=!this.useFreeCamera,this.useFreeCamera?(Le.rotation.order="YXZ",Le.getWorldDirection(Xn).normalize(),this.cameraRotation.x=Math.asin(Xe.clamp(Xn.z,-1,1)),this.cameraRotation.y=Math.atan2(Xn.x,Xn.y),this.pointerLocked||n()||(this.mouseDragging=!1)):(Le.up.copy(In),Le.lookAt(this.center),this.mouseDragging=!1,this.pointerLocked&&i()),h.preventDefault()),["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","Space","ShiftLeft","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(h.code)&&h.preventDefault()}),document.addEventListener("keyup",h=>{this.keys[h.code]=!1}),Kt.addEventListener("contextmenu",h=>h.preventDefault())}applyShaderEnvironment(e=0){var i;const{config:t}=hb(this,e,{scene:at,material:Es});this.updateSun();const n=(t==null?void 0:t.name)||this.environmentName||"Environment";return(i=this.environmentToggle)==null||i.update(n),t}updateSun(){const e=WM(this.sunTime,this.skyKeyframes),t=XM(this.sunTime);this.sunDirection.copy(t),this.currentSunIntensity=this.sunStrengthBase*e.intensity;const n=new T(-t.y,t.x,0);n.lengthSq()<1e-4&&n.set(1,0,0),n.normalize(),this.ambientDirection.copy(n);const i=Xe.clamp(this.sunWarmth,0,1);if(this.ambientColor.lerpColors(mb,gb,i),yd.lerpColors(fb,pb,i),this.sunLightColor.copy(yd),Xo.copy(e.skyColor),Xo.lerp(e.horizonColor,.2),Xo.lerp(GM,.55),this.skyTintColor.copy(Xo),Sd.lerpColors(xb,vb,i),this.skyTintColor.lerp(Sd,.35),this.terrain&&(this.terrain.updateSun(this.sunDirection,this.currentSunIntensity),this.terrain.updateSunWarmth(this.sunWarmth),this.terrain.updateAmbient(n,this.ambientStrength,this.ambientColor),this.terrain.updateSkyTint(this.skyTintColor,this.skyTintStrength)),this.updateDebugLight(),this.debugSunLight&&this.debugSunLight.color.copy(this.sunLightColor),this.debugAmbientLight&&this.debugAmbientLight.color.copy(this.ambientColor),Es.atmosphere.uniforms.uHorizonColor&&Es.atmosphere.uniforms.uHorizonColor.value.copy(e.horizonColor),Es.atmosphere.uniforms.uSkyColor&&Es.atmosphere.uniforms.uSkyColor.value.copy(e.skyColor),this.sunMesh){const s=Math.max(.35,this.currentSunIntensity);this.sunMesh.material.color.copy(this.sunLightColor).multiplyScalar(s)}if(this.lensFlare&&(this.lensFlare.setSunIntensity(this.currentSunIntensity),this.lensFlare.setSunColor(this.sunLightColor)),this.debugObelisk&&this.debugObelisk.material.uniforms){const s=this.debugObelisk.material.uniforms;s.uSunDirection&&s.uSunDirection.value.copy(this.sunDirection),s.uSunIntensity&&(s.uSunIntensity.value=this.currentSunIntensity),s.uSunColor&&s.uSunColor.value.copy(this.sunLightColor),s.uAmbientStrength&&(s.uAmbientStrength.value=this.ambientStrength),s.uAmbientColor&&s.uAmbientColor.value.copy(this.ambientColor)}}updateDebugLight(){if(!this.debugSunLight)return;const e=this.center?this.center.clone():new T,t=this.sunDirection.clone().normalize().multiplyScalar(600);this.debugSunLight.position.copy(e).add(t),this.debugSunLight.intensity=Math.max(.1,this.currentSunIntensity),this.debugSunLight.target&&(this.debugSunLight.target.position.copy(e),this.debugSunLight.target.updateMatrixWorld(!0))}startExperience(){var e,t;this.introActive&&(this.introActive=!1,this.introElapsed=0,Object.keys(this.keys).forEach(n=>{this.keys[n]=!1}),(t=(e=this.introController)==null?void 0:e.fadeOut)==null||t.call(e))}animate(){var t,n,i;window.requestAnimationFrame(this.animate),(t=this.stats)==null||t.begin();const e=this.clock.getDelta();if(this.introActive&&(this.introElapsed+=e),at.fog&&this.terrain.updateFog(at.fog),this.introActive){const s=900+65*Math.sin(this.introElapsed*.45),o=this.introElapsed*.18,a=210+55*Math.sin(this.introElapsed*.2),l=120*Math.sin(this.introElapsed*.6);Le.position.set(this.center.x+Math.cos(o)*s,this.center.y+Math.sin(o)*s,a),As.copy(this.center).addScaledVector(In,60+30*Math.sin(this.introElapsed*.8)),As.x+=Math.cos(o+Math.PI/2)*l,As.y+=Math.sin(o+Math.PI/2)*l,Le.up.copy(In),Le.lookAt(As),this.cameraRotation.x=Le.rotation.x,this.cameraRotation.y=Le.rotation.y}else{const s=this.moveSpeed;if(this.useFreeCamera){const o=Math.PI/2-.01;this.cameraRotation.x=Xe.clamp(this.cameraRotation.x,-o,o);const a=Math.cos(this.cameraRotation.x);Xn.set(Math.sin(this.cameraRotation.y)*a,Math.cos(this.cameraRotation.y)*a,Math.sin(this.cameraRotation.x)).normalize(),pc.crossVectors(Xn,In).normalize(),As.copy(Xn).add(Le.position),Le.up.copy(In),Le.lookAt(As),this.keys.KeyW&&Le.position.addScaledVector(Xn,s),this.keys.KeyS&&Le.position.addScaledVector(Xn,-s),this.keys.KeyA&&Le.position.addScaledVector(pc,-s),this.keys.KeyD&&Le.position.addScaledVector(pc,s),(this.keys.KeyQ||this.keys.Space)&&Le.position.addScaledVector(In,s),(this.keys.KeyE||this.keys.ShiftLeft)&&Le.position.addScaledVector(In,-s)}else this.keys.KeyW&&(Le.position.y-=s),this.keys.KeyS&&(Le.position.y+=s),this.keys.KeyA&&(Le.position.x-=s),this.keys.KeyD&&(Le.position.x+=s),(this.keys.KeyQ||this.keys.Space)&&(Le.position.z+=s),(this.keys.KeyE||this.keys.ShiftLeft)&&(Le.position.z-=s),Le.lookAt(this.center),this.cameraRotation.x=Le.rotation.x,this.cameraRotation.y=Le.rotation.y}if(this.terrain.offset.x=Le.position.x,this.terrain.offset.y=Le.position.y,this.sunWorldPosition&&this.sunDirection&&(this.sunWorldPosition.copy(Le.position).addScaledVector(this.sunDirection,this.sunDistance),this.sunMesh&&this.sunMesh.position.copy(this.sunWorldPosition)),this.sky&&(this.sky.position.copy(Le.position),this.sky.updateMatrixWorld()),this.sky2&&(this.sky2.position.copy(Le.position),this.sky2.updateMatrixWorld()),Le.updateMatrixWorld(!0),this.viewMatrix.copy(Le.matrixWorldInverse),(n=this.terrain)==null||n.updateViewMatrix(this.viewMatrix),this.lensFlare?(this.lensFlare.update(e,this.sunWorldPosition,this.terrain),this.lensFlare.setSunColor(this.sunLightColor),this.sunMesh&&(this.sunMesh.visible=this.currentSunIntensity>.02&&!this.lensFlare.occluded)):this.sunMesh&&(this.sunMesh.visible=this.currentSunIntensity>.02),gn.textContent=`Camera: ${Le.position.x.toFixed(1)}, ${Le.position.y.toFixed(1)}, ${Le.position.z.toFixed(1)}
Rotation: ${this.cameraRotation.x.toFixed(2)}, ${this.cameraRotation.y.toFixed(2)}
Fog: ${this.fogEnabled?"On":"Off"}
Sun: ${this.sunTime.toFixed(1)}h`,this.shadowsEnabled&&this.shadowCascades.length&&this.renderShadowMaps(),this.composer&&this.postProcessingEnabled){const s=this.bloomEnabled&&this.bloomStrength>.001;this.compositePass&&(this.compositePass.material.uniforms.uBloomStrength.value=s?this.bloomStrength:0),this.brightPass&&(this.brightPass.enabled=s),this.blurPassH&&(this.blurPassH.enabled=s),this.blurPassV&&(this.blurPassV.enabled=s),this.composer.render()}else this.brightPass&&(this.brightPass.enabled=!1),this.blurPassH&&(this.blurPassH.enabled=!1),this.blurPassV&&(this.blurPassV.enabled=!1),Dt.render(at,Le);(i=this.stats)==null||i.end()}setTerrainSmoothing(e){this.heightSmoothStrength=Xe.clamp(e,0,1),fd(this.heightSmoothStrength)}setHeightGain(e){this.heightGain=Xe.clamp(e,0,4),pd(this.heightGain)}}const Fp=new Sb;window.THREE=iM;Pc.webgl||(Pc.addGetWebGLMessage(),Kt.innerHTML="");Fp.init();Fp.animate();
