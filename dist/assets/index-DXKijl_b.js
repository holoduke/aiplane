var zp=Object.defineProperty;var Vp=(r,e,t)=>e in r?zp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var wn=(r,e,t)=>Vp(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wa="180",Hp={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gp={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rd=0,Sc=1,Pd=2,Wp=3,Xp=0,Nc=1,Id=2,On=3,Gn=0,It=1,Rn=2,Hn=0,ji=1,Yt=2,Mc=3,bc=4,Dd=5,gi=100,Ld=101,Fd=102,Ud=103,Nd=104,Od=200,Bd=201,kd=202,zd=203,ta=204,na=205,Vd=206,Hd=207,Gd=208,Wd=209,Xd=210,qd=211,Yd=212,$d=213,Zd=214,ia=0,sa=1,ra=2,ts=3,oa=4,aa=5,la=6,ca=7,Xr=0,Kd=1,Jd=2,ni=0,jd=1,Qd=2,ef=3,tf=4,nf=5,sf=6,rf=7,wc="attached",of="detached",Xa=300,si=301,vi=302,Pr=303,Ir=304,Js=306,yi=1e3,tn=1001,ns=1002,Ft=1003,Oc=1004,qp=1004,Ns=1005,Yp=1005,pt=1006,Sr=1007,$p=1007,_n=1008,af=1008,dn=1009,Bc=1010,kc=1011,Vs=1012,qa=1013,ri=1014,nn=1015,bi=1016,Ya=1017,$a=1018,is=1020,zc=35902,Vc=35899,Hc=1021,Gc=1022,zt=1023,Hs=1026,Gs=1027,Ws=1028,qr=1029,Wc=1030,Za=1031,Zp=1032,Ka=1033,Mr=33776,br=33777,wr=33778,Er=33779,ha=35840,ua=35841,da=35842,fa=35843,pa=36196,ma=37492,ga=37496,xa=37808,va=37809,ya=37810,_a=37811,Sa=37812,Ma=37813,ba=37814,wa=37815,Ea=37816,Ta=37817,Aa=37818,Ca=37819,Ra=37820,Pa=37821,Ia=36492,Da=36494,La=36495,Fa=36283,Ua=36284,Na=36285,Oa=36286,lf=2200,cf=2201,hf=2202,Dr=2300,Ba=2301,Ko=2302,$i=2400,Zi=2401,Lr=2402,Ja=2500,Xc=2501,Kp=0,Jp=1,jp=2,uf=3200,df=3201,Qp=3202,em=3203,wi=0,ff=1,ei="",Et="srgb",ss="srgb-linear",Fr="linear",ct="srgb",tm=0,Xi=7680,nm=7681,im=7682,sm=7683,rm=34055,om=34056,am=5386,lm=512,cm=513,hm=514,um=515,dm=516,fm=517,pm=518,Ec=519,pf=512,mf=513,gf=514,qc=515,xf=516,vf=517,yf=518,_f=519,Ur=35044,mm=35048,gm=35040,xm=35045,vm=35049,ym=35041,_m=35046,Sm=35050,Mm=35042,bm="100",Tc="300 es",hn=2e3,Xs=2001,wm={COMPUTE:"compute",RENDER:"render"},Em={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Tm={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"};class Wn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kh=1234567;const Qi=Math.PI/180,qs=180/Math.PI;function un(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[r&255]+Ot[r>>8&255]+Ot[r>>16&255]+Ot[r>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function ze(r,e,t){return Math.max(e,Math.min(t,r))}function Yc(r,e){return(r%e+e)%e}function Am(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Cm(r,e,t){return r!==e?(t-r)/(e-r):0}function Tr(r,e,t){return(1-t)*r+t*e}function Rm(r,e,t,n){return Tr(r,e,1-Math.exp(-t*n))}function Pm(r,e=1){return e-Math.abs(Yc(r,e*2)-e)}function Im(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Dm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Lm(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Fm(r,e){return r+Math.random()*(e-r)}function Um(r){return r*(.5-Math.random())}function Nm(r){r!==void 0&&(kh=r);let e=kh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Om(r){return r*Qi}function Bm(r){return r*qs}function km(r){return(r&r-1)===0&&r!==0}function zm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Vm(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Hm(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function $t(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ke(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Le={DEG2RAD:Qi,RAD2DEG:qs,generateUUID:un,clamp:ze,euclideanModulo:Yc,mapLinear:Am,inverseLerp:Cm,lerp:Tr,damp:Rm,pingpong:Pm,smoothstep:Im,smootherstep:Dm,randInt:Lm,randFloat:Fm,randFloatSpread:Um,seededRandom:Nm,degToRad:Om,radToDeg:Bm,isPowerOfTwo:km,ceilPowerOfTwo:zm,floorPowerOfTwo:Vm,setQuaternionFromProperEuler:Hm,normalize:Ke,denormalize:$t};class K{constructor(e=0,t=0){K.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],m=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==m){let g=1-a;const p=l*d+c*f+u*m+h*x,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),E=Math.atan2(A,p*_);g=Math.sin(g*E)/A,a=Math.sin(a*E)/A}const v=a*_;if(l=l*g+d*v,c=c*g+f*v,u=u*g+m*v,h=h*g+x*v,g===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+u*h+l*f-c*d,e[t+1]=l*m+u*d+c*h-a*f,e[t+2]=c*m+u*f+a*d-l*h,e[t+3]=u*m-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return El.copy(this).projectOnVector(e),this.sub(El)}reflect(e){return this.sub(El.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const El=new w,zh=new Ut;class Ze{constructor(e,t,n,i,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],x=i[0],g=i[3],p=i[6],_=i[1],y=i[4],v=i[7],A=i[2],E=i[5],R=i[8];return s[0]=o*x+a*_+l*A,s[3]=o*g+a*y+l*E,s[6]=o*p+a*v+l*R,s[1]=c*x+u*_+h*A,s[4]=c*g+u*y+h*E,s[7]=c*p+u*v+h*R,s[2]=d*x+f*_+m*A,s[5]=d*g+f*y+m*E,s[8]=d*p+f*v+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,m=t*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=h*x,e[1]=(i*c-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(u*t-i*l)*x,e[5]=(i*s-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Tl.makeScale(e,t)),this}rotate(e){return this.premultiply(Tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tl=new Ze;function Sf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const Gm={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Os(r,e){return new Gm[r](e)}function Nr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Mf(){const r=Nr("canvas");return r.style.display="block",r}const Vh={};function Or(r){r in Vh||(Vh[r]=!0,console.warn(r))}function Wm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Hh=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gh=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xm(){const r={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(i.r=ii(i.r),i.g=ii(i.g),i.b=ii(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(i.r=zs(i.r),i.g=zs(i.g),i.b=zs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ei?Fr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Or("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Or("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ss]:{primaries:e,whitePoint:n,transfer:Fr,toXYZ:Hh,fromXYZ:Gh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Hh,fromXYZ:Gh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),r}const tt=Xm();function ii(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ds;class bf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ds===void 0&&(ds=Nr("canvas")),ds.width=e.width,ds.height=e.height;const i=ds.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ds}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ii(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ii(t[n]/255)*255):t[n]=ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qm=0;class xi{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=un(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Al(i[o].image)):s.push(Al(i[o]))}else s=Al(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Al(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ym=0;const Cl=new w;class Mt extends Wn{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=tn,i=tn,s=pt,o=_n,a=zt,l=dn,c=Mt.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=un(),this.name="",this.source=new xi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cl).x}get height(){return this.source.getSize(Cl).y}get depth(){return this.source.getSize(Cl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yi:e.x=e.x-Math.floor(e.x);break;case tn:e.x=e.x<0?0:1;break;case ns:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yi:e.y=e.y-Math.floor(e.y);break;case tn:e.y=e.y<0?0:1;break;case ns:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=Xa;Mt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,i=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(f+1)/2,A=(p+1)/2,E=(u+d)/4,R=(h+x)/4,P=(m+g)/4;return y>v&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=R/n):v>A?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=E/i,s=P/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=R/s,i=P/s),this.set(n,i,s,t),this}let _=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(h-x)/_,this.z=(d-u)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $c extends Wn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Mt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new xi(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fn extends $c{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ja extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $m extends fn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new ja(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Qa extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zm extends fn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Qa(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Ht{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,En):En.fromBufferAttribute(s,o),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),to.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(e.matrixWorld),this.union(to)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),no.subVectors(this.max,or),fs.subVectors(e.a,or),ps.subVectors(e.b,or),ms.subVectors(e.c,or),ai.subVectors(ps,fs),li.subVectors(ms,ps),Pi.subVectors(fs,ms);let t=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Pi.z,Pi.y,ai.z,0,-ai.x,li.z,0,-li.x,Pi.z,0,-Pi.x,-ai.y,ai.x,0,-li.y,li.x,0,-Pi.y,Pi.x,0];return!Rl(t,fs,ps,ms,no)||(t=[1,0,0,0,1,0,0,0,1],!Rl(t,fs,ps,ms,no))?!1:(io.crossVectors(ai,li),t=[io.x,io.y,io.z],Rl(t,fs,ps,ms,no))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qn=[new w,new w,new w,new w,new w,new w,new w,new w],En=new w,to=new Ht,fs=new w,ps=new w,ms=new w,ai=new w,li=new w,Pi=new w,or=new w,no=new w,io=new w,Ii=new w;function Rl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ii.fromArray(r,s);const a=i.x*Math.abs(Ii.x)+i.y*Math.abs(Ii.y)+i.z*Math.abs(Ii.z),l=e.dot(Ii),c=t.dot(Ii),u=n.dot(Ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Km=new Ht,ar=new w,Pl=new w;class Nt{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Km.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ar,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(Pl)),this.expandByPoint(ar.copy(e.center).sub(Pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yn=new w,Il=new w,so=new w,ci=new w,Dl=new w,ro=new w,Ll=new w;class js{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Il.copy(e).add(t).multiplyScalar(.5),so.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(Il);const s=e.distanceTo(t)*.5,o=-this.direction.dot(so),a=ci.dot(this.direction),l=-ci.dot(so),c=ci.lengthSq(),u=Math.abs(1-o*o);let h,d,f,m;if(u>0)if(h=o*l-a,d=o*a-l,m=s*u,h>=0)if(d>=-m)if(d<=m){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Il).addScaledVector(so,d),f}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,i,s){Dl.subVectors(t,e),ro.subVectors(n,e),Ll.crossVectors(Dl,ro);let o=this.direction.dot(Ll),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,e);const l=a*this.direction.dot(ro.crossVectors(ci,ro));if(l<0)return null;const c=a*this.direction.dot(Dl.cross(ci));if(c<0||l+c>o)return null;const u=-a*ci.dot(Ll);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(e,t,n,i,s,o,a,l,c,u,h,d,f,m,x,g){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,f,m,x,g)}set(e,t,n,i,s,o,a,l,c,u,h,d,f,m,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/gs.setFromMatrixColumn(e,0).length(),s=1/gs.setFromMatrixColumn(e,1).length(),o=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,m=c*u,x=c*h;t[0]=d+x*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,m=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+m,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jm,e,jm)}lookAt(e,t,n){const i=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),hi.crossVectors(n,an),hi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),hi.crossVectors(n,an)),hi.normalize(),oo.crossVectors(an,hi),i[0]=hi.x,i[4]=oo.x,i[8]=an.x,i[1]=hi.y,i[5]=oo.y,i[9]=an.y,i[2]=hi.z,i[6]=oo.z,i[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],_=n[3],y=n[7],v=n[11],A=n[15],E=i[0],R=i[4],P=i[8],M=i[12],b=i[1],I=i[5],U=i[9],k=i[13],q=i[2],H=i[6],X=i[10],Z=i[14],z=i[3],ue=i[7],fe=i[11],Me=i[15];return s[0]=o*E+a*b+l*q+c*z,s[4]=o*R+a*I+l*H+c*ue,s[8]=o*P+a*U+l*X+c*fe,s[12]=o*M+a*k+l*Z+c*Me,s[1]=u*E+h*b+d*q+f*z,s[5]=u*R+h*I+d*H+f*ue,s[9]=u*P+h*U+d*X+f*fe,s[13]=u*M+h*k+d*Z+f*Me,s[2]=m*E+x*b+g*q+p*z,s[6]=m*R+x*I+g*H+p*ue,s[10]=m*P+x*U+g*X+p*fe,s[14]=m*M+x*k+g*Z+p*Me,s[3]=_*E+y*b+v*q+A*z,s[7]=_*R+y*I+v*H+A*ue,s[11]=_*P+y*U+v*X+A*fe,s[15]=_*M+y*k+v*Z+A*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+x*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+g*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],_=h*g*c-x*d*c+x*l*f-a*g*f-h*l*p+a*d*p,y=m*d*c-u*g*c-m*l*f+o*g*f+u*l*p-o*d*p,v=u*x*c-m*h*c+m*a*f-o*x*f-u*a*p+o*h*p,A=m*h*l-u*x*l-m*a*d+o*x*d+u*a*g-o*h*g,E=t*_+n*y+i*v+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=_*R,e[1]=(x*d*s-h*g*s-x*i*f+n*g*f+h*i*p-n*d*p)*R,e[2]=(a*g*s-x*l*s+x*i*c-n*g*c-a*i*p+n*l*p)*R,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*R,e[4]=y*R,e[5]=(u*g*s-m*d*s+m*i*f-t*g*f-u*i*p+t*d*p)*R,e[6]=(m*l*s-o*g*s-m*i*c+t*g*c+o*i*p-t*l*p)*R,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*f+t*l*f)*R,e[8]=v*R,e[9]=(m*h*s-u*x*s-m*n*f+t*x*f+u*n*p-t*h*p)*R,e[10]=(o*x*s-m*a*s+m*n*c-t*x*c-o*n*p+t*a*p)*R,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*R,e[12]=A*R,e[13]=(u*x*i-m*h*i+m*n*d-t*x*d-u*n*g+t*h*g)*R,e[14]=(m*a*i-o*x*i-m*n*l+t*x*l+o*n*g-t*a*g)*R,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,m=s*h,x=o*u,g=o*h,p=a*h,_=l*c,y=l*u,v=l*h,A=n.x,E=n.y,R=n.z;return i[0]=(1-(x+p))*A,i[1]=(f+v)*A,i[2]=(m-y)*A,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(d+p))*E,i[6]=(g+_)*E,i[7]=0,i[8]=(m+y)*R,i[9]=(g-_)*R,i[10]=(1-(d+x))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=gs.set(i[0],i[1],i[2]).length();const o=gs.set(i[4],i[5],i[6]).length(),a=gs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Tn.copy(this);const c=1/s,u=1/o,h=1/a;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=h,Tn.elements[9]*=h,Tn.elements[10]*=h,t.setFromRotationMatrix(Tn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=hn,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let m,x;if(l)m=s/(o-s),x=o*s/(o-s);else if(a===hn)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Xs)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=hn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,x;if(l)m=1/(o-s),x=o/(o-s);else if(a===hn)m=-2/(o-s),x=-(o+s)/(o-s);else if(a===Xs)m=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gs=new w,Tn=new Ue,Jm=new w(0,0,0),jm=new w(1,1,1),hi=new w,oo=new w,an=new w,Wh=new Ue,Xh=new Ut;class pn{constructor(e=0,t=0,n=0,i=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class el{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qm=0;const qh=new w,xs=new Ut,$n=new Ue,ao=new w,lr=new w,eg=new w,tg=new Ut,Yh=new w(1,0,0),$h=new w(0,1,0),Zh=new w(0,0,1),Kh={type:"added"},ng={type:"removed"},vs={type:"childadded",child:null},Fl={type:"childremoved",child:null};class st extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DEFAULT_UP.clone();const e=new w,t=new pn,n=new Ut,i=new w(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Ze}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=st.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new el,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(Yh,e)}rotateY(e){return this.rotateOnAxis($h,e)}rotateZ(e){return this.rotateOnAxis(Zh,e)}translateOnAxis(e,t){return qh.copy(e).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yh,e)}translateY(e){return this.translateOnAxis($h,e)}translateZ(e){return this.translateOnAxis(Zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ao.copy(e):ao.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(lr,ao,this.up):$n.lookAt(ao,lr,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),xs.setFromRotationMatrix($n),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kh),vs.child=e,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ng),Fl.child=e,this.dispatchEvent(Fl),Fl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kh),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,eg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,tg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}st.DEFAULT_UP=new w(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new w,Zn=new w,Ul=new w,Kn=new w,ys=new w,_s=new w,Jh=new w,Nl=new w,Ol=new w,Bl=new w,kl=new it,zl=new it,Vl=new it;class en{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),An.subVectors(e,t),i.cross(An);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){An.subVectors(i,t),Zn.subVectors(n,t),Ul.subVectors(e,t);const o=An.dot(An),a=An.dot(Zn),l=An.dot(Ul),c=Zn.dot(Zn),u=Zn.dot(Ul),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,m=(o*u-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return kl.setScalar(0),zl.setScalar(0),Vl.setScalar(0),kl.fromBufferAttribute(e,t),zl.fromBufferAttribute(e,n),Vl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(kl,s.x),o.addScaledVector(zl,s.y),o.addScaledVector(Vl,s.z),o}static isFrontFacing(e,t,n,i){return An.subVectors(n,t),Zn.subVectors(e,t),An.cross(Zn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),An.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return en.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;ys.subVectors(i,n),_s.subVectors(s,n),Nl.subVectors(e,n);const l=ys.dot(Nl),c=_s.dot(Nl);if(l<=0&&c<=0)return t.copy(n);Ol.subVectors(e,i);const u=ys.dot(Ol),h=_s.dot(Ol);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ys,o);Bl.subVectors(e,s);const f=ys.dot(Bl),m=_s.dot(Bl);if(m>=0&&f<=m)return t.copy(s);const x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(_s,a);const g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return Jh.subVectors(s,i),a=(h-u)/(h-u+(f-m)),t.copy(i).addScaledVector(Jh,a);const p=1/(g+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(ys,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},lo={h:0,s:0,l:0};function Hl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ee{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=tt.workingColorSpace){if(e=Yc(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Hl(o,s,e+1/3),this.g=Hl(o,s,e),this.b=Hl(o,s,e-1/3)}return tt.colorSpaceToWorking(this,i),this}setStyle(e,t=Et){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=wf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return tt.workingToColorSpace(Bt.copy(this),e),Math.round(ze(Bt.r*255,0,255))*65536+Math.round(ze(Bt.g*255,0,255))*256+Math.round(ze(Bt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Bt.copy(this),t);const n=Bt.r,i=Bt.g,s=Bt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Et){tt.workingToColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,i=Bt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(lo);const n=Tr(ui.h,lo.h,t),i=Tr(ui.s,lo.s,t),s=Tr(ui.l,lo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new ee;ee.NAMES=wf;let ig=0;class Lt extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=un(),this.name="",this.type="Material",this.blending=ji,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=na,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ta&&(n.blendSrc=this.blendSrc),this.blendDst!==na&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vt extends Lt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Xr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ti=sg();function sg(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function Jt(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=ze(r,-65504,65504),ti.floatView[0]=r;const e=ti.uint32View[0],t=e>>23&511;return ti.baseTable[t]+((e&8388607)>>ti.shiftTable[t])}function vr(r){const e=r>>10;return ti.uint32View[0]=ti.mantissaTable[ti.offsetTable[e]+(r&1023)]+ti.exponentTable[e],ti.floatView[0]}class rg{static toHalfFloat(e){return Jt(e)}static fromHalfFloat(e){return vr(e)}}const wt=new w,co=new K;let og=0;class ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:og++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ur,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$t(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$t(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$t(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$t(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$t(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ur&&(e.usage=this.usage),e}}class ag extends ut{constructor(e,t,n){super(new Int8Array(e),t,n)}}class lg extends ut{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class cg extends ut{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class hg extends ut{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Zc extends ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ug extends ut{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Kc extends ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dg extends ut{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=vr(this.array[e*this.itemSize]);return this.normalized&&(t=$t(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=Jt(t),this}getY(e){let t=vr(this.array[e*this.itemSize+1]);return this.normalized&&(t=$t(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=Jt(t),this}getZ(e){let t=vr(this.array[e*this.itemSize+2]);return this.normalized&&(t=$t(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=Jt(t),this}getW(e){let t=vr(this.array[e*this.itemSize+3]);return this.normalized&&(t=$t(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=Jt(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=Jt(t),this.array[e+1]=Jt(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.array[e+0]=Jt(t),this.array[e+1]=Jt(n),this.array[e+2]=Jt(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.array[e+0]=Jt(t),this.array[e+1]=Jt(n),this.array[e+2]=Jt(i),this.array[e+3]=Jt(s),this}}class _e extends ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fg=0;const xn=new Ue,Gl=new st,Ss=new w,ln=new Ht,cr=new Ht,Ct=new w;class Ye extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sf(e)?Kc:Zc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return Gl.lookAt(e),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ht);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(ln.min,cr.min),ln.expandByPoint(Ct),Ct.addVectors(ln.max,cr.max),ln.expandByPoint(Ct)):(ln.expandByPoint(cr.min),ln.expandByPoint(cr.max))}ln.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ct.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(e,c),Ct.add(Ss)),i=Math.max(i,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ut(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new w,l[P]=new w;const c=new w,u=new w,h=new w,d=new K,f=new K,m=new K,x=new w,g=new w;function p(P,M,b){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,b),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,M),m.fromBufferAttribute(s,b),u.sub(c),h.sub(c),f.sub(d),m.sub(d);const I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(I),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(I),a[P].add(x),a[M].add(x),a[b].add(x),l[P].add(g),l[M].add(g),l[b].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,M=_.length;P<M;++P){const b=_[P],I=b.start,U=b.count;for(let k=I,q=I+U;k<q;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new w,v=new w,A=new w,E=new w;function R(P){A.fromBufferAttribute(i,P),E.copy(A);const M=a[P];y.copy(M),y.sub(A.multiplyScalar(A.dot(M))).normalize(),v.crossVectors(E,M);const I=v.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,I)}for(let P=0,M=_.length;P<M;++P){const b=_[P],I=b.start,U=b.count;for(let k=I,q=I+U;k<q;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new w,s=new w,o=new w,a=new w,l=new w,c=new w,u=new w,h=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new ut(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ye,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jh=new Ue,Di=new js,ho=new Nt,Qh=new w,uo=new w,fo=new w,po=new w,Wl=new w,mo=new w,eu=new w,go=new w;class qe extends st{constructor(e=new Ye,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){mo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Wl.fromBufferAttribute(h,e),o?mo.addScaledVector(Wl,u):mo.addScaledVector(Wl.sub(t),u))}t.add(mo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(s),Di.copy(e.ray).recast(e.near),!(ho.containsPoint(Di.origin)===!1&&(Di.intersectSphere(ho,Qh)===null||Di.origin.distanceToSquared(Qh)>(e.far-e.near)**2))&&(jh.copy(s).invert(),Di.copy(e.ray).applyMatrix4(jh),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=o[g.materialIndex],_=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=_,A=y;v<A;v+=3){const E=a.getX(v),R=a.getX(v+1),P=a.getX(v+2);i=xo(this,p,e,n,c,u,h,E,R,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const _=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);i=xo(this,o,e,n,c,u,h,_,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=o[g.materialIndex],_=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=_,A=y;v<A;v+=3){const E=v,R=v+1,P=v+2;i=xo(this,p,e,n,c,u,h,E,R,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const _=g,y=g+1,v=g+2;i=xo(this,o,e,n,c,u,h,_,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function pg(r,e,t,n,i,s,o,a){let l;if(e.side===It?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Gn,a),l===null)return null;go.copy(a),go.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(go);return c<t.near||c>t.far?null:{distance:c,point:go.clone(),object:r}}function xo(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,uo),r.getVertexPosition(l,fo),r.getVertexPosition(c,po);const u=pg(r,e,t,n,uo,fo,po,eu);if(u){const h=new w;en.getBarycoord(eu,uo,fo,po,h),i&&(u.uv=en.getInterpolatedAttribute(i,a,l,c,h,new K)),s&&(u.uv1=en.getInterpolatedAttribute(s,a,l,c,h,new K)),o&&(u.normal=en.getInterpolatedAttribute(o,a,l,c,h,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new w,materialIndex:0};en.getNormal(uo,fo,po,d.normal),u.face=d,u.barycoord=h}return u}class oi extends Ye{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(h,2));function m(x,g,p,_,y,v,A,E,R,P,M){const b=v/R,I=A/P,U=v/2,k=A/2,q=E/2,H=R+1,X=P+1;let Z=0,z=0;const ue=new w;for(let fe=0;fe<X;fe++){const Me=fe*I-k;for(let We=0;We<H;We++){const Xe=We*b-U;ue[x]=Xe*_,ue[g]=Me*y,ue[p]=q,c.push(ue.x,ue.y,ue.z),ue[x]=0,ue[g]=0,ue[p]=E>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(We/R),h.push(1-fe/P),Z+=1}}for(let fe=0;fe<P;fe++)for(let Me=0;Me<R;Me++){const We=d+Me+H*fe,Xe=d+Me+H*(fe+1),Qe=d+(Me+1)+H*(fe+1),et=d+(Me+1)+H*fe;l.push(We,Xe,et),l.push(Xe,Qe,et),z+=6}a.addGroup(f,z,M),f+=z,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qt(r){const e={};for(let t=0;t<r.length;t++){const n=Ys(r[t]);for(const i in n)e[i]=n[i]}return e}function mg(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ef(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Yr={clone:Ys,merge:qt};var gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class St extends Lt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gg,this.fragmentShader=xg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=mg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class tl extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new w,tu=new K,nu=new K;class Pt extends tl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,tu,nu),t.subVectors(nu,tu)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ms=-90,bs=1;class Tf extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Pt(Ms,bs,e,t);i.layers=this.layers,this.add(i);const s=new Pt(Ms,bs,e,t);s.layers=this.layers,this.add(s);const o=new Pt(Ms,bs,e,t);o.layers=this.layers,this.add(o);const a=new Pt(Ms,bs,e,t);a.layers=this.layers,this.add(a);const l=new Pt(Ms,bs,e,t);l.layers=this.layers,this.add(l);const c=new Pt(Ms,bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class $r extends Mt{constructor(e=[],t=si,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Af extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new $r(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new oi(5,5,5),s=new St({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:Hn});s.uniforms.tEquirect.value=t;const o=new qe(i,s),a=t.minFilter;return t.minFilter===_n&&(t.minFilter=pt),new Tf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class kn extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vg={type:"move"};class Jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new kn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class nl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ee(e),this.density=t}clone(){return new nl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ee(e),this.near=t,this.far=n}clone(){return new _i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Jc extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class il{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ur,this.updateRanges=[],this.version=0,this.uuid=un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new w;class rs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=$t(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$t(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$t(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$t(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$t(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new rs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class jc extends Lt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ws;const hr=new w,Es=new w,Ts=new w,As=new K,ur=new K,Cf=new Ue,vo=new w,dr=new w,yo=new w,iu=new K,Xl=new K,su=new K;class Rf extends st{constructor(e=new jc){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new Ye;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new il(t,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new rs(n,3,0,!1)),ws.setAttribute("uv",new rs(n,2,3,!1))}this.geometry=ws,this.material=e,this.center=new K(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),Cf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-Ts.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;_o(vo.set(-.5,-.5,0),Ts,o,Es,i,s),_o(dr.set(.5,-.5,0),Ts,o,Es,i,s),_o(yo.set(.5,.5,0),Ts,o,Es,i,s),iu.set(0,0),Xl.set(1,0),su.set(1,1);let a=e.ray.intersectTriangle(vo,dr,yo,!1,hr);if(a===null&&(_o(dr.set(-.5,.5,0),Ts,o,Es,i,s),Xl.set(0,1),a=e.ray.intersectTriangle(vo,yo,dr,!1,hr),a===null))return;const l=e.ray.origin.distanceTo(hr);l<e.near||l>e.far||t.push({distance:l,point:hr.clone(),uv:en.getInterpolation(hr,vo,dr,yo,iu,Xl,su,new K),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function _o(r,e,t,n,i,s){As.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(ur.x=s*As.x-i*As.y,ur.y=i*As.x+s*As.y):ur.copy(As),r.copy(e),r.x+=ur.x,r.y+=ur.y,r.applyMatrix4(Cf)}const So=new w,ru=new w;class Pf extends st{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){So.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(So);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){So.setFromMatrixPosition(e.matrixWorld),ru.setFromMatrixPosition(this.matrixWorld);const n=So.distanceTo(ru)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const ou=new w,au=new it,lu=new it,yg=new w,cu=new Ue,Mo=new w,ql=new Nt,hu=new Ue,Yl=new js;class If extends qe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wc,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ht),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mo),this.boundingBox.expandByPoint(Mo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mo),this.boundingSphere.expandByPoint(Mo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ql.copy(this.boundingSphere),ql.applyMatrix4(i),e.ray.intersectsSphere(ql)!==!1&&(hu.copy(i).invert(),Yl.copy(e.ray).applyMatrix4(hu),!(this.boundingBox!==null&&Yl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Yl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===of?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;au.fromBufferAttribute(i.attributes.skinIndex,e),lu.fromBufferAttribute(i.attributes.skinWeight,e),ou.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=lu.getComponent(s);if(o!==0){const a=au.getComponent(s);cu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(yg.copy(ou).applyMatrix4(cu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Qc extends st{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Sn extends Mt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Ft,u=Ft,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uu=new Ue,_g=new Ue;class sl{constructor(e=[],t=[]){this.uuid=un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:_g;uu.multiplyMatrices(a,t[s]),uu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new sl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Sn(t,e,e,zt,nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Qc),this.bones.push(o),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class $s extends ut{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Cs=new Ue,du=new Ue,bo=[],fu=new Ht,Sg=new Ue,fr=new qe,pr=new Nt;class Df extends qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $s(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Sg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ht),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),fu.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(fu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),pr.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),e.ray.intersectsSphere(pr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Cs),du.multiplyMatrices(n,Cs),fr.matrixWorld=du,fr.raycast(e,bo);for(let o=0,a=bo.length;o<a;o++){const l=bo[o];l.instanceId=s,l.object=this,t.push(l)}bo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $s(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sn(new Float32Array(i*this.count),i,this.count,Ws,nn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const $l=new w,Mg=new w,bg=new Ze;class pi{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=$l.subVectors(n,t).cross(Mg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($l),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bg.getNormalMatrix(e),i=this.coplanarPoint($l).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new Nt,wg=new K(.5,.5),wo=new w;class Qs{constructor(e=new pi,t=new pi,n=new pi,i=new pi,s=new pi,o=new pi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],m=s[8],x=s[9],g=s[10],p=s[11],_=s[12],y=s[13],v=s[14],A=s[15];if(i[0].setComponents(c-o,f-u,p-m,A-_).normalize(),i[1].setComponents(c+o,f+u,p+m,A+_).normalize(),i[2].setComponents(c+a,f+h,p+x,A+y).normalize(),i[3].setComponents(c-a,f-h,p-x,A-y).normalize(),n)i[4].setComponents(l,d,g,v).normalize(),i[5].setComponents(c-l,f-d,p-g,A-v).normalize();else if(i[4].setComponents(c-l,f-d,p-g,A-v).normalize(),t===hn)i[5].setComponents(c+l,f+d,p+g,A+v).normalize();else if(t===Xs)i[5].setComponents(l,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){Li.center.set(0,0,0);const t=wg.distanceTo(e.center);return Li.radius=.7071067811865476+t,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(wo.x=i.normal.x>0?e.max.x:e.min.x,wo.y=i.normal.y>0?e.max.y:e.min.y,wo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Fn=new Ue,Un=new Qs;class rl{constructor(){this.coordinateSystem=hn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Fn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Un.setFromProjectionMatrix(Fn,i.coordinateSystem,i.reversedDepth),Un.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Fn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Un.setFromProjectionMatrix(Fn,i.coordinateSystem,i.reversedDepth),Un.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Fn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Un.setFromProjectionMatrix(Fn,i.coordinateSystem,i.reversedDepth),Un.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Fn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Un.setFromProjectionMatrix(Fn,i.coordinateSystem,i.reversedDepth),Un.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Fn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Un.setFromProjectionMatrix(Fn,i.coordinateSystem,i.reversedDepth),Un.containsPoint(e))return!0}return!1}clone(){return new rl}}function Zl(r,e){return r-e}function Eg(r,e){return r.z-e.z}function Tg(r,e){return e.z-r.z}class Ag{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const s=this.pool,o=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const a=s[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}const Kt=new Ue,Cg=new ee(1,1,1),pu=new Qs,Rg=new rl,Eo=new Ht,Fi=new Nt,mr=new w,mu=new w,Pg=new w,Kl=new Ag,kt=new qe,To=[];function Ig(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let o=0;o<n;o++)e.setComponent(s+t,o,r.getComponent(s,o))}else e.array.set(r.array,t*n);e.needsUpdate=!0}function Ui(r,e){if(r.constructor!==e.constructor){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)e[n]=r[n]}else{const t=Math.min(r.length,e.length);e.set(new r.constructor(r.buffer,0,t))}}class Lf extends qe{constructor(e,t,n=t*2,i){super(new Ye,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Sn(t,e,e,zt,nn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Sn(t,e,e,qr,ri);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Sn(t,e,e,zt,nn);n.colorSpace=tt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const o=e.getAttribute(s),{array:a,itemSize:l,normalized:c}=o,u=new a.constructor(n*l),h=new ut(u,l,c);t.setAttribute(s,h)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new ut(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ht);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Kt),this.getBoundingBoxAt(s,Eo).applyMatrix4(Kt),e.union(Eo)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Kt),this.getBoundingSphereAt(s,Fi).applyMatrix4(Kt),e.union(Fi)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Zl),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const s=this._matricesTexture;Kt.identity().toArray(s.image.data,i*16),s.needsUpdate=!0;const o=this._colorsTexture;return o&&(Cg.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const o=e.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Zl),l=this._availableGeometryIds.shift(),s[l]=i):(l=this._geometryCount,this._geometryCount++,s.push(i)),this.setGeometryAt(l,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(i&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(const u in n.attributes){const h=t.getAttribute(u),d=n.getAttribute(u);Ig(h,d,l);const f=h.itemSize;for(let m=h.count,x=c;m<x;m++){const g=l+m;for(let p=0;p<f;p++)d.setComponent(g,p,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(i){const u=a.indexStart,h=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let d=0;d<o.count;d++)s.setX(u+d,l+o.getX(d));for(let d=o.count,f=h;d<f;d++)s.setX(u+d,l);s.needsUpdate=!0,s.addUpdateRange(u,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,s=n.length;i<s;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),s=this.geometry;for(let o=0,a=n.length;o<a;o++){const l=i[o],c=n[l];if(c.active!==!1){if(s.index!==null){if(c.indexStart!==t){const{indexStart:u,vertexStart:h,reservedIndexCount:d}=c,f=s.index,m=f.array,x=e-h;for(let g=u;g<u+d;g++)m[g]=m[g]+x;f.array.copyWithin(t,u,u+d),f.addUpdateRange(t,d),c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:u,reservedVertexCount:h}=c,d=s.attributes;for(const f in d){const m=d[f],{array:x,itemSize:g}=m;x.copyWithin(e*g,u*g,(u+h)*g),m.addUpdateRange(e*g,h*g)}c.vertexStart=e}e+=c.reservedVertexCount,c.start=s.index?c.indexStart:c.vertexStart,this._nextIndexStart=s.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const s=new Ht,o=n.index,a=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let u=l;o&&(u=o.getX(u)),s.expandByPoint(mr.fromBufferAttribute(a,u))}i.boundingBox=s}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const s=new Nt;this.getBoundingBoxAt(e,Eo),Eo.getCenter(s.center);const o=n.index,a=n.attributes.position;let l=0;for(let c=i.start,u=i.start+i.count;c<u;c++){let h=c;o&&(h=o.getX(h)),mr.fromBufferAttribute(a,h),l=Math.max(l,s.center.distanceToSquared(mr))}s.radius=Math.sqrt(l),i.boundingSphere=s}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Zl);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),s=new Int32Array(e);Ui(this._multiDrawCounts,i),Ui(this._multiDrawStarts,s),this._multiDrawCounts=i,this._multiDrawStarts=s,this._maxInstanceCount=e;const o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Ui(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Ui(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Ui(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Ye,this._initializeGeometry(s));const o=this.geometry;s.index&&Ui(s.index.array,o.index.array);for(const a in s.attributes)Ui(s.attributes[a].array,o.attributes[a].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,s=this.matrixWorld,o=this.geometry;kt.material=this.material,kt.geometry.index=o.index,kt.geometry.attributes=o.attributes,kt.geometry.boundingBox===null&&(kt.geometry.boundingBox=new Ht),kt.geometry.boundingSphere===null&&(kt.geometry.boundingSphere=new Nt);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;const c=n[a].geometryIndex,u=i[c];kt.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,kt.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,kt.geometry.boundingBox),this.getBoundingSphereAt(c,kt.geometry.boundingSphere),kt.raycast(e,To);for(let h=0,d=To.length;h<d;h++){const f=To[h];f.object=this,f.batchId=a,t.push(f)}To.length=0}kt.material=null,kt.geometry.index=null,kt.geometry.attributes={},kt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,u=this._multiDrawCounts,h=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,m=f.image.data,x=n.isArrayCamera?Rg:pu;d&&!n.isArrayCamera&&(Kt.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),pu.setFromProjectionMatrix(Kt,n.coordinateSystem,n.reversedDepth));let g=0;if(this.sortObjects){Kt.copy(this.matrixWorld).invert(),mr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Kt),mu.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Kt);for(let y=0,v=l.length;y<v;y++)if(l[y].visible&&l[y].active){const A=l[y].geometryIndex;this.getMatrixAt(y,Kt),this.getBoundingSphereAt(A,Fi).applyMatrix4(Kt);let E=!1;if(d&&(E=!x.intersectsSphere(Fi,n)),!E){const R=h[A],P=Pg.subVectors(Fi.center,mr).dot(mu);Kl.push(R.start,R.count,P,y)}}const p=Kl.list,_=this.customSort;_===null?p.sort(s.transparent?Tg:Eg):_.call(this,p,n);for(let y=0,v=p.length;y<v;y++){const A=p[y];c[g]=A.start*a,u[g]=A.count,m[g]=A.index,g++}Kl.reset()}else for(let p=0,_=l.length;p<_;p++)if(l[p].visible&&l[p].active){const y=l[p].geometryIndex;let v=!1;if(d&&(this.getMatrixAt(p,Kt),this.getBoundingSphereAt(y,Fi).applyMatrix4(Kt),v=!x.intersectsSphere(Fi,n)),!v){const A=h[y];c[g]=A.start*a,u[g]=A.count,m[g]=p,g++}}f.needsUpdate=!0,this._multiDrawCount=g,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,o){this.onBeforeRender(e,null,i,s,o)}}class Dt extends Lt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ka=new w,za=new w,gu=new Ue,gr=new js,Ao=new Nt,Jl=new w,xu=new w;class Si extends st{constructor(e=new Ye,t=new Dt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ka.fromBufferAttribute(t,i-1),za.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ka.distanceTo(za);e.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(i),Ao.radius+=s,e.ray.intersectsSphere(Ao)===!1)return;gu.copy(i).invert(),gr.copy(e.ray).applyMatrix4(gu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){const p=u.getX(x),_=u.getX(x+1),y=Co(this,e,gr,l,p,_,x);y&&t.push(y)}if(this.isLineLoop){const x=u.getX(m-1),g=u.getX(f),p=Co(this,e,gr,l,x,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){const p=Co(this,e,gr,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=Co(this,e,gr,l,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Co(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(ka.fromBufferAttribute(a,i),za.fromBufferAttribute(a,s),t.distanceSqToSegment(ka,za,Jl,xu)>n)return;Jl.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Jl);if(!(c<e.near||c>e.far))return{distance:c,point:xu.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const vu=new w,yu=new w;class Mn extends Si{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)vu.fromBufferAttribute(t,i),yu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+vu.distanceTo(yu);e.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ff extends Si{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ki extends Lt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _u=new Ue,Ac=new js,Ro=new Nt,Po=new w;class Ar extends st{constructor(e=new Ye,t=new Ki){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(i),Ro.radius+=s,e.ray.intersectsSphere(Ro)===!1)return;_u.copy(i).invert(),Ac.copy(e.ray).applyMatrix4(_u);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,x=f;m<x;m++){const g=c.getX(m);Po.fromBufferAttribute(h,g),Su(Po,g,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,x=f;m<x;m++)Po.fromBufferAttribute(h,m),Su(Po,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Su(r,e,t,n,i,s,o){const a=Ac.distanceSqToPoint(r);if(a<t){const l=new w;Ac.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Uf extends Mt{constructor(e,t,n,i,s=pt,o=pt,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function h(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}}class Dg extends Uf{constructor(e,t,n,i,s,o,a,l){super({},e,t,n,i,s,o,a,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class Lg extends Mt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Ft,this.minFilter=Ft,this.generateMipmaps=!1,this.needsUpdate=!0}}class ol extends Mt{constructor(e,t,n,i,s,o,a,l,c,u,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Fg extends ol{constructor(e,t,n,i,s,o){super(e,t,n,s,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=tn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ug extends ol{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,si),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Nf extends Mt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class al extends Mt{constructor(e,t,n=ri,i,s,o,a=Ft,l=Ft,c,u=Hs,h=1){if(u!==Hs&&u!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class eh extends Mt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ll extends Ye{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,m=n*2+s,x=i+1,g=new w,p=new w;for(let _=0;_<=m;_++){let y=0,v=0,A=0,E=0;if(_<=n){const M=_/n,b=M*Math.PI/2;v=-u-e*Math.cos(b),A=e*Math.sin(b),E=-e*Math.cos(b),y=M*h}else if(_<=n+s){const M=(_-n)/s;v=-u+M*t,A=e,E=0,y=h+M*d}else{const M=(_-n-s)/n,b=M*Math.PI/2;v=u+e*Math.sin(b),A=e*Math.cos(b),E=e*Math.sin(b),y=h+d+M*h}const R=Math.max(0,Math.min(1,y/f));let P=0;_===0?P=.5/i:_===m&&(P=-.5/i);for(let M=0;M<=i;M++){const b=M/i,I=b*Math.PI*2,U=Math.sin(I),k=Math.cos(I);p.x=-A*k,p.y=v,p.z=A*U,a.push(p.x,p.y,p.z),g.set(-A*k,E,A*U),g.normalize(),l.push(g.x,g.y,g.z),c.push(b+P,R)}if(_>0){const M=(_-1)*x;for(let b=0;b<i;b++){const I=M+b,U=M+b+1,k=_*x+b,q=_*x+b+1;o.push(I,U,k),o.push(U,q,k)}}}this.setIndex(o),this.setAttribute("position",new _e(a,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Zs extends Ye{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new w,u=new K;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(a,3)),this.setAttribute("uv",new _e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class zn extends Ye{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],f=[];let m=0;const x=[],g=n/2;let p=0;_(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new _e(h,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(f,2));function _(){const v=new w,A=new w;let E=0;const R=(t-e)/n;for(let P=0;P<=s;P++){const M=[],b=P/s,I=b*(t-e)+e;for(let U=0;U<=i;U++){const k=U/i,q=k*l+a,H=Math.sin(q),X=Math.cos(q);A.x=I*H,A.y=-b*n+g,A.z=I*X,h.push(A.x,A.y,A.z),v.set(H,R,X).normalize(),d.push(v.x,v.y,v.z),f.push(k,1-b),M.push(m++)}x.push(M)}for(let P=0;P<i;P++)for(let M=0;M<s;M++){const b=x[M][P],I=x[M+1][P],U=x[M+1][P+1],k=x[M][P+1];(e>0||M!==0)&&(u.push(b,I,k),E+=3),(t>0||M!==s-1)&&(u.push(I,U,k),E+=3)}c.addGroup(p,E,0),p+=E}function y(v){const A=m,E=new K,R=new w;let P=0;const M=v===!0?e:t,b=v===!0?1:-1;for(let U=1;U<=i;U++)h.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),m++;const I=m;for(let U=0;U<=i;U++){const q=U/i*l+a,H=Math.cos(q),X=Math.sin(q);R.x=M*X,R.y=g*b,R.z=M*H,h.push(R.x,R.y,R.z),d.push(0,b,0),E.x=H*.5+.5,E.y=X*.5*b+.5,f.push(E.x,E.y),m++}for(let U=0;U<i;U++){const k=A+U,q=I+U;v===!0?u.push(q,q+1,k):u.push(q+1,q,k),P+=3}c.addGroup(p,P,v===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mi extends zn{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Mi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ei extends Ye{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new _e(s,3)),this.setAttribute("normal",new _e(s.slice(),3)),this.setAttribute("uv",new _e(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const y=new w,v=new w,A=new w;for(let E=0;E<t.length;E+=3)f(t[E+0],y),f(t[E+1],v),f(t[E+2],A),l(y,v,A,_)}function l(_,y,v,A){const E=A+1,R=[];for(let P=0;P<=E;P++){R[P]=[];const M=_.clone().lerp(v,P/E),b=y.clone().lerp(v,P/E),I=E-P;for(let U=0;U<=I;U++)U===0&&P===E?R[P][U]=M:R[P][U]=M.clone().lerp(b,U/I)}for(let P=0;P<E;P++)for(let M=0;M<2*(E-P)-1;M++){const b=Math.floor(M/2);M%2===0?(d(R[P][b+1]),d(R[P+1][b]),d(R[P][b])):(d(R[P][b+1]),d(R[P+1][b+1]),d(R[P+1][b]))}}function c(_){const y=new w;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(_),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function u(){const _=new w;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];const v=g(_)/2/Math.PI+.5,A=p(_)/Math.PI+.5;o.push(v,1-A)}m(),h()}function h(){for(let _=0;_<o.length;_+=6){const y=o[_+0],v=o[_+2],A=o[_+4],E=Math.max(y,v,A),R=Math.min(y,v,A);E>.9&&R<.1&&(y<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),A<.2&&(o[_+4]+=1))}}function d(_){s.push(_.x,_.y,_.z)}function f(_,y){const v=_*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function m(){const _=new w,y=new w,v=new w,A=new w,E=new K,R=new K,P=new K;for(let M=0,b=0;M<s.length;M+=9,b+=6){_.set(s[M+0],s[M+1],s[M+2]),y.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),E.set(o[b+0],o[b+1]),R.set(o[b+2],o[b+3]),P.set(o[b+4],o[b+5]),A.copy(_).add(y).add(v).divideScalar(3);const I=g(A);x(E,b+0,_,I),x(R,b+2,y,I),x(P,b+4,v,I)}}function x(_,y,v,A){A<0&&_.x===1&&(o[y]=_.x-1),v.x===0&&v.z===0&&(o[y]=A/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.vertices,e.indices,e.radius,e.details)}}class cl extends Ei{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cl(e.radius,e.detail)}}const Io=new w,Do=new w,jl=new w,Lo=new en;class Of extends Ye{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Qi*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:x,b:g,c:p}=Lo;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Lo.getNormal(jl),h[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,h[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let _=0;_<3;_++){const y=(_+1)%3,v=h[_],A=h[y],E=Lo[u[_]],R=Lo[u[y]],P=`${v}_${A}`,M=`${A}_${v}`;M in d&&d[M]?(jl.dot(d[M].normal)<=s&&(f.push(E.x,E.y,E.z),f.push(R.x,R.y,R.z)),d[M]=null):P in d||(d[P]={index0:c[_],index1:c[y],normal:jl.clone()})}}for(const m in d)if(d[m]){const{index0:x,index1:g}=d[m];Io.fromBufferAttribute(a,x),Do.fromBufferAttribute(a,g),f.push(Io.x,Io.y,Io.z),f.push(Do.x,Do.y,Do.z)}this.setAttribute("position",new _e(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new K:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new w,i=[],s=[],o=[],a=new w,l=new Ue;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new w)}s[0]=new w,o[0]=new w;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(ze(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(ze(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class hl extends Dn{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new K){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Bf extends hl{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function th(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Fo=new w,Ql=new th,ec=new th,tc=new th;class kf extends Dn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Fo.subVectors(i[0],i[1]).add(i[0]),c=Fo);const h=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Fo.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Fo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Ql.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,x,g),ec.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,x,g),tc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,x,g)}else this.curveType==="catmullrom"&&(Ql.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ec.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),tc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Ql.calc(l),ec.calc(l),tc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Mu(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function Ng(r,e){const t=1-r;return t*t*e}function Og(r,e){return 2*(1-r)*r*e}function Bg(r,e){return r*r*e}function Cr(r,e,t,n){return Ng(r,e)+Og(r,t)+Bg(r,n)}function kg(r,e){const t=1-r;return t*t*t*e}function zg(r,e){const t=1-r;return 3*t*t*r*e}function Vg(r,e){return 3*(1-r)*r*r*e}function Hg(r,e){return r*r*r*e}function Rr(r,e,t,n,i){return kg(r,e)+zg(r,t)+Vg(r,n)+Hg(r,i)}class nh extends Dn{constructor(e=new K,t=new K,n=new K,i=new K){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new K){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Rr(e,i.x,s.x,o.x,a.x),Rr(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zf extends Dn{constructor(e=new w,t=new w,n=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new w){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Rr(e,i.x,s.x,o.x,a.x),Rr(e,i.y,s.y,o.y,a.y),Rr(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ih extends Dn{constructor(e=new K,t=new K){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new K){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vf extends Dn{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sh extends Dn{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Cr(e,i.x,s.x,o.x),Cr(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rh extends Dn{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Cr(e,i.x,s.x,o.x),Cr(e,i.y,s.y,o.y),Cr(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oh extends Dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new K){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Mu(a,l.x,c.x,u.x,h.x),Mu(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new K().fromArray(i))}return this}}var Va=Object.freeze({__proto__:null,ArcCurve:Bf,CatmullRomCurve3:kf,CubicBezierCurve:nh,CubicBezierCurve3:zf,EllipseCurve:hl,LineCurve:ih,LineCurve3:Vf,QuadraticBezierCurve:sh,QuadraticBezierCurve3:rh,SplineCurve:oh});class Hf extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Va[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Va[i.type]().fromJSON(i))}return this}}class Ha extends Hf{constructor(e){super(),this.type="Path",this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ih(this.currentPoint.clone(),new K(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new sh(this.currentPoint.clone(),new K(e,t),new K(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new nh(this.currentPoint.clone(),new K(e,t),new K(n,i),new K(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new oh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new hl(e,t,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class es extends Ha{constructor(e){super(e),this.uuid=un(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ha().fromJSON(i))}return this}}function Gg(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Gf(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=$g(r,e,s,t)),r.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let d=t;d<i;d+=t){const f=r[d],m=r[d+1];f<a&&(a=f),m<l&&(l=m),f>u&&(u=f),m>h&&(h=m)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Br(s,o,t,a,l,c,0),o}function Gf(r,e,t,n,i){let s;if(i===r0(r,e,t,n)>0)for(let o=e;o<t;o+=n)s=bu(o/n|0,r[o],r[o+1],s);else for(let o=t-n;o>=e;o-=n)s=bu(o/n|0,r[o],r[o+1],s);return s&&Ks(s,s.next)&&(zr(s),s=s.next),s}function os(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ks(t,t.next)||vt(t.prev,t,t.next)===0)){if(zr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Br(r,e,t,n,i,s,o){if(!r)return;!o&&s&&Qg(r,n,i,s);let a=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?Xg(r,n,i,s):Wg(r)){e.push(l.i,r.i,c.i),zr(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=qg(os(r),e),Br(r,e,t,n,i,s,2)):o===2&&Yg(r,e,t,n,i,s):Br(os(r),e,t,n,i,s,1);break}}}function Wg(r){const e=r.prev,t=r,n=r.next;if(vt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(i,s,o),h=Math.min(a,l,c),d=Math.max(i,s,o),f=Math.max(a,l,c);let m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&yr(i,a,s,l,o,c,m.x,m.y)&&vt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Xg(r,e,t,n){const i=r.prev,s=r,o=r.next;if(vt(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,d=o.y,f=Math.min(a,l,c),m=Math.min(u,h,d),x=Math.max(a,l,c),g=Math.max(u,h,d),p=Cc(f,m,e,t,n),_=Cc(x,g,e,t,n);let y=r.prevZ,v=r.nextZ;for(;y&&y.z>=p&&v&&v.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&yr(a,u,l,h,c,d,y.x,y.y)&&vt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&yr(a,u,l,h,c,d,v.x,v.y)&&vt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&yr(a,u,l,h,c,d,y.x,y.y)&&vt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&yr(a,u,l,h,c,d,v.x,v.y)&&vt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function qg(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Ks(n,i)&&Xf(n,t,t.next,i)&&kr(n,i)&&kr(i,n)&&(e.push(n.i,t.i,i.i),zr(t),zr(t.next),t=r=i),t=t.next}while(t!==r);return os(t)}function Yg(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&n0(o,a)){let l=qf(o,a);o=os(o,o.next),l=os(l,l.next),Br(o,e,t,n,i,s,0),Br(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function $g(r,e,t,n){const i=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=Gf(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(t0(c))}i.sort(Zg);for(let s=0;s<i.length;s++)t=Kg(i[s],t);return t}function Zg(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Kg(r,e){const t=Jg(r,e);if(!t)return e;const n=qf(t,r);return os(n,n.next),os(t,t.next)}function Jg(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,o;if(Ks(r,t))return t;do{if(Ks(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Wf(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const h=Math.abs(i-t.y)/(n-t.x);kr(t,r)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&jg(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function jg(r,e){return vt(r.prev,r,e.prev)<0&&vt(e.next,r,r.next)<0}function Qg(r,e,t,n){let i=r;do i.z===0&&(i.z=Cc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,e0(i)}function e0(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,t*=2}while(e>1);return r}function Cc(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function t0(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Wf(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function yr(r,e,t,n,i,s,o,a){return!(r===o&&e===a)&&Wf(r,e,t,n,i,s,o,a)}function n0(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!i0(r,e)&&(kr(r,e)&&kr(e,r)&&s0(r,e)&&(vt(r.prev,r,e.prev)||vt(r,e.prev,e))||Ks(r,e)&&vt(r.prev,r,r.next)>0&&vt(e.prev,e,e.next)>0)}function vt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ks(r,e){return r.x===e.x&&r.y===e.y}function Xf(r,e,t,n){const i=No(vt(r,e,t)),s=No(vt(r,e,n)),o=No(vt(t,n,r)),a=No(vt(t,n,e));return!!(i!==s&&o!==a||i===0&&Uo(r,t,e)||s===0&&Uo(r,n,e)||o===0&&Uo(t,r,n)||a===0&&Uo(t,e,n))}function Uo(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function No(r){return r>0?1:r<0?-1:0}function i0(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Xf(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function kr(r,e){return vt(r.prev,r,r.next)<0?vt(r,e,r.next)>=0&&vt(r,r.prev,e)>=0:vt(r,e,r.prev)<0||vt(r,r.next,e)<0}function s0(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function qf(r,e){const t=Rc(r.i,r.x,r.y),n=Rc(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function bu(r,e,t,n){const i=Rc(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function zr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Rc(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function r0(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class o0{static triangulate(e,t,n=2){return Gg(e,t,n)}}class Pn{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Pn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];wu(e),Eu(n,e);let o=e.length;t.forEach(wu);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Eu(n,t[l]);const a=o0.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function wu(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Eu(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class ul extends Ye{constructor(e=new es([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new _e(i,3)),this.setAttribute("uv",new _e(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:a0;let y,v=!1,A,E,R,P;p&&(y=p.getSpacedPoints(u),v=!0,d=!1,A=p.computeFrenetFrames(u,!1),E=new w,R=new w,P=new w),d||(g=0,f=0,m=0,x=0);const M=a.extractPoints(c);let b=M.shape;const I=M.holes;if(!Pn.isClockWise(b)){b=b.reverse();for(let re=0,te=I.length;re<te;re++){const Q=I[re];Pn.isClockWise(Q)&&(I[re]=Q.reverse())}}function k(re){const Q=10000000000000001e-36;let L=re[0];for(let $=1;$<=re.length;$++){const oe=$%re.length,J=re[oe],Ne=J.x-L.x,Oe=J.y-L.y,C=Ne*Ne+Oe*Oe,S=Math.max(Math.abs(J.x),Math.abs(J.y),Math.abs(L.x),Math.abs(L.y)),O=Q*S*S;if(C<=O){re.splice(oe,1),$--;continue}L=J}}k(b),I.forEach(k);const q=I.length,H=b;for(let re=0;re<q;re++){const te=I[re];b=b.concat(te)}function X(re,te,Q){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(te,Q)}const Z=b.length;function z(re,te,Q){let L,$,oe;const J=re.x-te.x,Ne=re.y-te.y,Oe=Q.x-re.x,C=Q.y-re.y,S=J*J+Ne*Ne,O=J*C-Ne*Oe;if(Math.abs(O)>Number.EPSILON){const V=Math.sqrt(S),ie=Math.sqrt(Oe*Oe+C*C),Y=te.x-Ne/V,Ce=te.y+J/V,de=Q.x-C/ie,ve=Q.y+Oe/ie,Te=((de-Y)*C-(ve-Ce)*Oe)/(J*C-Ne*Oe);L=Y+J*Te-re.x,$=Ce+Ne*Te-re.y;const ae=L*L+$*$;if(ae<=2)return new K(L,$);oe=Math.sqrt(ae/2)}else{let V=!1;J>Number.EPSILON?Oe>Number.EPSILON&&(V=!0):J<-Number.EPSILON?Oe<-Number.EPSILON&&(V=!0):Math.sign(Ne)===Math.sign(C)&&(V=!0),V?(L=-Ne,$=J,oe=Math.sqrt(S)):(L=J,$=Ne,oe=Math.sqrt(S/2))}return new K(L/oe,$/oe)}const ue=[];for(let re=0,te=H.length,Q=te-1,L=re+1;re<te;re++,Q++,L++)Q===te&&(Q=0),L===te&&(L=0),ue[re]=z(H[re],H[Q],H[L]);const fe=[];let Me,We=ue.concat();for(let re=0,te=q;re<te;re++){const Q=I[re];Me=[];for(let L=0,$=Q.length,oe=$-1,J=L+1;L<$;L++,oe++,J++)oe===$&&(oe=0),J===$&&(J=0),Me[L]=z(Q[L],Q[oe],Q[J]);fe.push(Me),We=We.concat(Me)}let Xe;if(g===0)Xe=Pn.triangulateShape(H,I);else{const re=[],te=[];for(let Q=0;Q<g;Q++){const L=Q/g,$=f*Math.cos(L*Math.PI/2),oe=m*Math.sin(L*Math.PI/2)+x;for(let J=0,Ne=H.length;J<Ne;J++){const Oe=X(H[J],ue[J],oe);Ae(Oe.x,Oe.y,-$),L===0&&re.push(Oe)}for(let J=0,Ne=q;J<Ne;J++){const Oe=I[J];Me=fe[J];const C=[];for(let S=0,O=Oe.length;S<O;S++){const V=X(Oe[S],Me[S],oe);Ae(V.x,V.y,-$),L===0&&C.push(V)}L===0&&te.push(C)}}Xe=Pn.triangulateShape(re,te)}const Qe=Xe.length,et=m+x;for(let re=0;re<Z;re++){const te=d?X(b[re],We[re],et):b[re];v?(R.copy(A.normals[0]).multiplyScalar(te.x),E.copy(A.binormals[0]).multiplyScalar(te.y),P.copy(y[0]).add(R).add(E),Ae(P.x,P.y,P.z)):Ae(te.x,te.y,0)}for(let re=1;re<=u;re++)for(let te=0;te<Z;te++){const Q=d?X(b[te],We[te],et):b[te];v?(R.copy(A.normals[re]).multiplyScalar(Q.x),E.copy(A.binormals[re]).multiplyScalar(Q.y),P.copy(y[re]).add(R).add(E),Ae(P.x,P.y,P.z)):Ae(Q.x,Q.y,h/u*re)}for(let re=g-1;re>=0;re--){const te=re/g,Q=f*Math.cos(te*Math.PI/2),L=m*Math.sin(te*Math.PI/2)+x;for(let $=0,oe=H.length;$<oe;$++){const J=X(H[$],ue[$],L);Ae(J.x,J.y,h+Q)}for(let $=0,oe=I.length;$<oe;$++){const J=I[$];Me=fe[$];for(let Ne=0,Oe=J.length;Ne<Oe;Ne++){const C=X(J[Ne],Me[Ne],L);v?Ae(C.x,C.y+y[u-1].y,y[u-1].x+Q):Ae(C.x,C.y,h+Q)}}}j(),ne();function j(){const re=i.length/3;if(d){let te=0,Q=Z*te;for(let L=0;L<Qe;L++){const $=Xe[L];be($[2]+Q,$[1]+Q,$[0]+Q)}te=u+g*2,Q=Z*te;for(let L=0;L<Qe;L++){const $=Xe[L];be($[0]+Q,$[1]+Q,$[2]+Q)}}else{for(let te=0;te<Qe;te++){const Q=Xe[te];be(Q[2],Q[1],Q[0])}for(let te=0;te<Qe;te++){const Q=Xe[te];be(Q[0]+Z*u,Q[1]+Z*u,Q[2]+Z*u)}}n.addGroup(re,i.length/3-re,0)}function ne(){const re=i.length/3;let te=0;ge(H,te),te+=H.length;for(let Q=0,L=I.length;Q<L;Q++){const $=I[Q];ge($,te),te+=$.length}n.addGroup(re,i.length/3-re,1)}function ge(re,te){let Q=re.length;for(;--Q>=0;){const L=Q;let $=Q-1;$<0&&($=re.length-1);for(let oe=0,J=u+g*2;oe<J;oe++){const Ne=Z*oe,Oe=Z*(oe+1),C=te+L+Ne,S=te+$+Ne,O=te+$+Oe,V=te+L+Oe;He(C,S,O,V)}}}function Ae(re,te,Q){l.push(re),l.push(te),l.push(Q)}function be(re,te,Q){at(re),at(te),at(Q);const L=i.length/3,$=_.generateTopUV(n,i,L-3,L-2,L-1);D($[0]),D($[1]),D($[2])}function He(re,te,Q,L){at(re),at(te),at(L),at(te),at(Q),at(L);const $=i.length/3,oe=_.generateSideWallUV(n,i,$-6,$-3,$-2,$-1);D(oe[0]),D(oe[1]),D(oe[3]),D(oe[1]),D(oe[2]),D(oe[3])}function at(re){i.push(l[re*3+0]),i.push(l[re*3+1]),i.push(l[re*3+2])}function D(re){s.push(re.x),s.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return l0(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Va[i.type]().fromJSON(i)),new ul(n,e.options)}}const a0={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new K(s,o),new K(a,l),new K(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],x=e[s*3],g=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new K(o,1-l),new K(c,1-h),new K(d,1-m),new K(x,1-p)]:[new K(a,1-l),new K(u,1-h),new K(f,1-m),new K(g,1-p)]}};function l0(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class dl extends Ei{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new dl(e.radius,e.detail)}}class fl extends Ye{constructor(e=[new K(0,-.5),new K(.5,0),new K(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=ze(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/t,h=new w,d=new K,f=new w,m=new w,x=new w;let g=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(m)}for(let _=0;_<=t;_++){const y=n+_*u*i,v=Math.sin(y),A=Math.cos(y);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*v,h.y=e[E].y,h.z=e[E].x*A,o.push(h.x,h.y,h.z),d.x=_/t,d.y=E/(e.length-1),a.push(d.x,d.y);const R=l[3*E+0]*v,P=l[3*E+1],M=l[3*E+0]*A;c.push(R,P,M)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){const v=y+_*e.length,A=v,E=v+e.length,R=v+e.length+1,P=v+1;s.push(A,E,P),s.push(R,P,E)}this.setIndex(s),this.setAttribute("position",new _e(o,3)),this.setAttribute("uv",new _e(a,2)),this.setAttribute("normal",new _e(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.points,e.segments,e.phiStart,e.phiLength)}}class Zr extends Ei{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zr(e.radius,e.detail)}}class ls extends Ye{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],m=[],x=[],g=[];for(let p=0;p<u;p++){const _=p*d-o;for(let y=0;y<c;y++){const v=y*h-s;m.push(v,-_,0),x.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const y=_+c*p,v=_+c*(p+1),A=_+1+c*(p+1),E=_+1+c*p;f.push(y,v,E),f.push(v,A,E)}this.setIndex(f),this.setAttribute("position",new _e(m,3)),this.setAttribute("normal",new _e(x,3)),this.setAttribute("uv",new _e(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.widthSegments,e.heightSegments)}}class er extends Ye{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/i,f=new w,m=new K;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){const p=s+g/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}h+=d}for(let x=0;x<i;x++){const g=x*(n+1);for(let p=0;p<n;p++){const _=p+g,y=_,v=_+n+1,A=_+n+2,E=_+1;a.push(y,v,E),a.push(v,A,E)}}this.setIndex(a),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class pl extends Ye{constructor(e=new es([new K(0,.5),new K(-.5,-.5),new K(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new _e(i,3)),this.setAttribute("normal",new _e(s,3)),this.setAttribute("uv",new _e(o,2));function c(u){const h=i.length/3,d=u.extractPoints(t);let f=d.shape;const m=d.holes;Pn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const _=m[g];Pn.isClockWise(_)===!0&&(m[g]=_.reverse())}const x=Pn.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const _=m[g];f=f.concat(_)}for(let g=0,p=f.length;g<p;g++){const _=f[g];i.push(_.x,_.y,0),s.push(0,0,1),o.push(_.x,_.y)}for(let g=0,p=x.length;g<p;g++){const _=x[g],y=_[0]+h,v=_[1]+h,A=_[2]+h;n.push(y,v,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return c0(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new pl(n,e.curveSegments)}}function c0(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class sn extends Ye{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new w,d=new w,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){const _=[],y=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){const E=A/t;h.x=-e*Math.cos(i+E*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(i+E*s)*Math.sin(o+y*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(E+v,1-y),_.push(c++)}u.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){const y=u[p][_+1],v=u[p][_],A=u[p+1][_],E=u[p+1][_+1];(p!==0||o>0)&&f.push(y,v,E),(p!==n-1||l<Math.PI)&&f.push(v,A,E)}this.setIndex(f),this.setAttribute("position",new _e(m,3)),this.setAttribute("normal",new _e(x,3)),this.setAttribute("uv",new _e(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ml extends Ei{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ml(e.radius,e.detail)}}class Kr extends Ye{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new w,h=new w,d=new w;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const x=m/i*s,g=f/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(x),h.y=(e+t*Math.cos(g))*Math.sin(x),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const x=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,_=(i+1)*f+m;o.push(x,g,_),o.push(g,p,_)}this.setIndex(o),this.setAttribute("position",new _e(a,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class gl extends Ye{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],u=[],h=new w,d=new w,f=new w,m=new w,x=new w,g=new w,p=new w;for(let y=0;y<=n;++y){const v=y/n*s*Math.PI*2;_(v,s,o,e,f),_(v+.01,s,o,e,m),g.subVectors(m,f),p.addVectors(m,f),x.crossVectors(g,p),p.crossVectors(x,g),x.normalize(),p.normalize();for(let A=0;A<=i;++A){const E=A/i*Math.PI*2,R=-t*Math.cos(E),P=t*Math.sin(E);h.x=f.x+(R*p.x+P*x.x),h.y=f.y+(R*p.y+P*x.y),h.z=f.z+(R*p.z+P*x.z),l.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),c.push(d.x,d.y,d.z),u.push(y/n),u.push(A/i)}}for(let y=1;y<=n;y++)for(let v=1;v<=i;v++){const A=(i+1)*(y-1)+(v-1),E=(i+1)*y+(v-1),R=(i+1)*y+v,P=(i+1)*(y-1)+v;a.push(A,E,P),a.push(E,R,P)}this.setIndex(a),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(u,2));function _(y,v,A,E,R){const P=Math.cos(y),M=Math.sin(y),b=A/v*y,I=Math.cos(b);R.x=E*(2+I)*.5*P,R.y=E*(2+I)*M*.5,R.z=E*Math.sin(b)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class xl extends Ye{constructor(e=new rh(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new w,l=new w,c=new K;let u=new w;const h=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new _e(h,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(f,2));function x(){for(let y=0;y<t;y++)g(y);g(s===!1?t:0),_(),p()}function g(y){u=e.getPointAt(y/t,u);const v=o.normals[y],A=o.binormals[y];for(let E=0;E<=i;E++){const R=E/i*Math.PI*2,P=Math.sin(R),M=-Math.cos(R);l.x=M*v.x+P*A.x,l.y=M*v.y+P*A.y,l.z=M*v.z+P*A.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let v=1;v<=i;v++){const A=(i+1)*(y-1)+(v-1),E=(i+1)*y+(v-1),R=(i+1)*y+v,P=(i+1)*(y-1)+v;m.push(A,E,P),m.push(E,R,P)}}function _(){for(let y=0;y<=t;y++)for(let v=0;v<=i;v++)c.x=y/t,c.y=v/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new xl(new Va[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Yf extends Ye{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new w,s=new w;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],d=h.start,f=h.count;for(let m=d,x=d+f;m<x;m+=3)for(let g=0;g<3;g++){const p=a.getX(m+g),_=a.getX(m+(g+1)%3);i.fromBufferAttribute(o,p),s.fromBufferAttribute(o,_),Tu(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;i.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),Tu(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new _e(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Tu(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var Au=Object.freeze({__proto__:null,BoxGeometry:oi,CapsuleGeometry:ll,CircleGeometry:Zs,ConeGeometry:Mi,CylinderGeometry:zn,DodecahedronGeometry:cl,EdgesGeometry:Of,ExtrudeGeometry:ul,IcosahedronGeometry:dl,LatheGeometry:fl,OctahedronGeometry:Zr,PlaneGeometry:ls,PolyhedronGeometry:Ei,RingGeometry:er,ShapeGeometry:pl,SphereGeometry:sn,TetrahedronGeometry:ml,TorusGeometry:Kr,TorusKnotGeometry:gl,TubeGeometry:xl,WireframeGeometry:Yf});class $f extends Lt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ee(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Zf extends St{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jt extends Lt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wi,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kf extends jt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class vl extends Lt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ee(16777215),this.specular=new ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wi,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Xr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jf extends Lt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ee(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wi,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class jf extends Lt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wi,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Qf extends Lt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wi,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Xr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ah extends Lt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lh extends Lt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ep extends Lt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ee(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wi,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tp extends Dt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Ji(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function np(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ip(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Pc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function ch(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}function h0(r,e,t,n,i=30){const s=r.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],d=[];for(let f=0;f<c.times.length;++f){const m=c.times[f]*i;if(!(m<t||m>=n)){h.push(c.times[f]);for(let x=0;x<u;++x)d.push(c.values[f*u+x])}}h.length!==0&&(c.times=Ji(h,c.times.constructor),c.values=Ji(d,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s}function u0(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const m=a.times.length-1;let x;if(s<=a.times[0]){const p=u,_=h-u;x=a.values.slice(p,_)}else if(s>=a.times[m]){const p=m*h+u,_=p+h-u;x=a.values.slice(p,_)}else{const p=a.createInterpolant(),_=u,y=h-u;p.evaluate(s),x=p.resultBuffer.slice(_,y)}l==="quaternion"&&new Ut().fromArray(x).normalize().conjugate().toArray(x);const g=c.times.length;for(let p=0;p<g;++p){const _=p*f+d;if(l==="quaternion")Ut.multiplyQuaternionsFlat(c.values,_,x,0,c.values,_);else{const y=f-d*2;for(let v=0;v<y;++v)c.values[_+v]-=x[v]}}}return r.blendMode=Xc,r}class d0{static convertArray(e,t){return Ji(e,t)}static isTypedArray(e){return np(e)}static getKeyframeOrder(e){return ip(e)}static sortedArray(e,t,n){return Pc(e,t,n)}static flattenJSON(e,t,n,i){ch(e,t,n,i)}static subclip(e,t,n,i,s=30){return h0(e,t,n,i,s)}static makeClipAdditive(e,t=0,n=e,i=30){return u0(e,t,n,i)}}class Jr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class sp extends Jr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$i,endingEnd:$i}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zi:s=e,a=2*t-n;break;case Lr:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zi:o=e,l=2*n-t;break;case Lr:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,_=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*x+.5*m,v=f*g-f*x;for(let A=0;A!==a;++A)s[A]=p*o[u+A]+_*o[c+A]+y*o[l+A]+v*o[h+A];return s}}class hh extends Jr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class rp extends Jr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class bn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ji(t,this.TimeBufferType),this.values=Ji(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ji(e.times,Array),values:Ji(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new rp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Dr:t=this.InterpolantFactoryMethodDiscrete;break;case Ba:t=this.InterpolantFactoryMethodLinear;break;case Ko:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dr;case this.InterpolantFactoryMethodLinear:return Ba;case this.InterpolantFactoryMethodSmooth:return Ko}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&np(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ko,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){const x=t[h+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Ba;class cs extends bn{constructor(e,t,n){super(e,t,n)}}cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Dr;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;class uh extends bn{constructor(e,t,n,i){super(e,t,n,i)}}uh.prototype.ValueTypeName="color";class Vr extends bn{constructor(e,t,n,i){super(e,t,n,i)}}Vr.prototype.ValueTypeName="number";class op extends Jr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ut.slerpFlat(s,0,o,c-a,o,c,l);return s}}class jr extends bn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new op(this.times,this.values,this.getValueSize(),e)}}jr.prototype.ValueTypeName="quaternion";jr.prototype.InterpolantFactoryMethodSmooth=void 0;class hs extends bn{constructor(e,t,n){super(e,t,n)}}hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Dr;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;class Hr extends bn{constructor(e,t,n,i){super(e,t,n,i)}}Hr.prototype.ValueTypeName="vector";class Gr{constructor(e="",t=-1,n=[],i=Ja){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=un(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(p0(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(bn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=ip(l);l=Pc(l,1,u),c=Pc(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Vr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,m,x){if(f.length!==0){const g=[],p=[];ch(f,g,p,m),g.length!==0&&x.push(new h(d,g,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(const x in f){const g=[],p=[];for(let _=0;_!==d[m].morphTargets.length;++_){const y=d[m];g.push(y.time),p.push(y.morphTarget===x?1:0)}i.push(new Vr(".morphTargetInfluence["+x+"]",g,p))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(Hr,f+".position",d,"pos",i),n(jr,f+".quaternion",d,"rot",i),n(Hr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function f0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vr;case"vector":case"vector2":case"vector3":case"vector4":return Hr;case"color":return uh;case"quaternion":return jr;case"bool":case"boolean":return cs;case"string":return hs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function p0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=f0(r.type);if(r.times===void 0){const t=[],n=[];ch(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Vn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class dh{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const fh=new dh;class Gt{constructor(e){this.manager=e!==void 0?e:fh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Gt.DEFAULT_MATERIAL_NAME="__DEFAULT";const Jn={};class m0 extends Error{constructor(e,t){super(e),this.response=t}}class In extends Gt{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Vn.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Jn[e]!==void 0){Jn[e].push({onLoad:t,onProgress:n,onError:i});return}Jn[e]=[],Jn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Jn[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let x=0;const g=new ReadableStream({start(p){_();function _(){h.read().then(({done:y,value:v})=>{if(y)p.close();else{x+=v.byteLength;const A=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let E=0,R=u.length;E<R;E++){const P=u[E];P.onProgress&&P.onProgress(A)}p.enqueue(v),_()}},y=>{p.error(y)})}}});return new Response(g)}else throw new m0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Vn.add(`file:${e}`,c);const u=Jn[e];delete Jn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Jn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Jn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class g0 extends Gt{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new In(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Gr.parse(e[n]);t.push(i)}return t}}class x0 extends Gt{constructor(e){super(e)}load(e,t,n,i){const s=this,o=[],a=new ol,l=new In(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function u(h){l.load(e[h],function(d){const f=s.parse(d,!0);o[h]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(a.minFilter=pt),a.image=o,a.format=f.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let h=0,d=e.length;h<d;++h)u(h);else l.load(e,function(h){const d=s.parse(h,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let m=0;m<f;m++){o[m]={mipmaps:[]};for(let x=0;x<d.mipmapCount;x++)o[m].mipmaps.push(d.mipmaps[m*d.mipmapCount+x]),o[m].format=d.format,o[m].width=d.width,o[m].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=pt),a.format=d.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}const Rs=new WeakMap;class Wr extends Gt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Vn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=Rs.get(o);h===void 0&&(h=[],Rs.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=Nr("img");function l(){u(),t&&t(this);const h=Rs.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Rs.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),Vn.remove(`image:${e}`);const d=Rs.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(h)}Rs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Vn.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class v0 extends Gt{constructor(e){super(e)}load(e,t,n,i){const s=new $r;s.colorSpace=Et;const o=new Wr(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class y0 extends Gt{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Sn,a=new In(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:tn,o.wrapT=c.wrapT!==void 0?c.wrapT:tn,o.magFilter=c.magFilter!==void 0?c.magFilter:pt,o.minFilter=c.minFilter!==void 0?c.minFilter:pt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=_n),c.mipmapCount===1&&(o.minFilter=pt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class ph extends Gt{constructor(e){super(e)}load(e,t,n,i){const s=new Mt,o=new Wr(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ti extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ap extends Ti{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const nc=new Ue,Cu=new w,Ru=new w;class mh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cu),Ru.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ru),t.updateMatrixWorld(),nc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _0 extends mh{constructor(){super(new Pt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=qs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class lp extends Ti{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new _0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Pu=new Ue,xr=new w,ic=new w;class S0 extends mh{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new K(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),xr.setFromMatrixPosition(e.matrixWorld),n.position.copy(xr),ic.copy(n.position),ic.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ic),n.updateMatrixWorld(),i.makeTranslation(-xr.x,-xr.y,-xr.z),Pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pu,n.coordinateSystem,n.reversedDepth)}}class cp extends Ti{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new S0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tr extends tl{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class M0 extends mh{constructor(){super(new tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gh extends Ti{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.shadow=new M0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xh extends Ti{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hp extends Ti{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class up{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new w)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class dp extends Ti{constructor(e=new up,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class yl extends Gt{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,o=new In(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new ee().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(i.uniforms[s]={},o.type){case"t":i.uniforms[s].value=n(o.value);break;case"c":i.uniforms[s].value=new ee().setHex(o.value);break;case"v2":i.uniforms[s].value=new K().fromArray(o.value);break;case"v3":i.uniforms[s].value=new w().fromArray(o.value);break;case"v4":i.uniforms[s].value=new it().fromArray(o.value);break;case"m3":i.uniforms[s].value=new Ze().fromArray(o.value);break;case"m4":i.uniforms[s].value=new Ue().fromArray(o.value);break;default:i.uniforms[s].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new K().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new K().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return yl.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:$f,SpriteMaterial:jc,RawShaderMaterial:Zf,ShaderMaterial:St,PointsMaterial:Ki,MeshPhysicalMaterial:Kf,MeshStandardMaterial:jt,MeshPhongMaterial:vl,MeshToonMaterial:Jf,MeshNormalMaterial:jf,MeshLambertMaterial:Qf,MeshDepthMaterial:ah,MeshDistanceMaterial:lh,MeshBasicMaterial:Vt,MeshMatcapMaterial:ep,LineDashedMaterial:tp,LineBasicMaterial:Dt,Material:Lt};return new t[e]}}class Ga{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class fp extends Ye{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class pp extends Gt{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new In(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,m){if(t[m]!==void 0)return t[m];const g=f.interleavedBuffers[m],p=s(f,g.buffer),_=Os(g.type,p),y=new il(_,g.stride);return y.uuid=g.uuid,t[m]=y,y}function s(f,m){if(n[m]!==void 0)return n[m];const g=f.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}const o=e.isInstancedBufferGeometry?new fp:new Ye,a=e.data.index;if(a!==void 0){const f=Os(a.type,a.array);o.setIndex(new ut(f,1))}const l=e.data.attributes;for(const f in l){const m=l[f];let x;if(m.isInterleavedBufferAttribute){const g=i(e.data,m.data);x=new rs(g,m.itemSize,m.offset,m.normalized)}else{const g=Os(m.type,m.array),p=m.isInstancedBufferAttribute?$s:ut;x=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(x.name=m.name),m.usage!==void 0&&x.setUsage(m.usage),o.setAttribute(f,x)}const c=e.data.morphAttributes;if(c)for(const f in c){const m=c[f],x=[];for(let g=0,p=m.length;g<p;g++){const _=m[g];let y;if(_.isInterleavedBufferAttribute){const v=i(e.data,_.data);y=new rs(v,_.itemSize,_.offset,_.normalized)}else{const v=Os(_.type,_.array);y=new ut(v,_.itemSize,_.normalized)}_.name!==void 0&&(y.name=_.name),x.push(y)}o.morphAttributes[f]=x}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let f=0,m=h.length;f!==m;++f){const x=h[f];o.addGroup(x.start,x.count,x.materialIndex)}const d=e.data.boundingSphere;return d!==void 0&&(o.boundingSphere=new Nt().fromJSON(d)),e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class b0 extends Gt{constructor(e){super(e)}load(e,t,n,i){const s=this,o=this.path===""?Ga.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new In(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(h){i!==void 0&&i(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Ga.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new In(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const o=await s.loadAsync(e,t),a=JSON.parse(o),l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(c)}),a=this.parseTextures(e.textures,o),l=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,s,l,a,n),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),this.bindLightTargets(c),t!==void 0){let h=!1;for(const d in o)if(o[d].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,s),a=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,i,a,o,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new es().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=new sl().fromJSON(e[s],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new pp;for(let s=0,o=e.length;s<o;s++){let a;const l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in Au?a=Au[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new yl;s.setTextures(t);for(let o=0,a=e.length;o<a;o++){const l=e[o];n[l.uuid]===void 0&&(n[l.uuid]=s.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=Gr.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function o(l){return n.manager.itemStart(l),s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(u)}else return l.data?{data:Os(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new dh(t);s=new Wr(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){const h=e[c],d=h.url;if(Array.isArray(d)){const f=[];for(let m=0,x=d.length;m<x;m++){const g=d[m],p=a(g);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new Sn(p.data,p.width,p.height)))}i[h.uuid]=new xi(f)}else{const f=a(h.url);i[h.uuid]=new xi(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(o){if(typeof o=="string"){const a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(l)}else return o.data?{data:Os(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new Wr(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const l=e[o],c=l.url;if(Array.isArray(c)){const u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=await s(f);m!==null&&(m instanceof HTMLImageElement?u.push(m):u.push(new Sn(m.data,m.width,m.height)))}n[l.uuid]=new xi(u)}else{const u=await s(l.url);n[l.uuid]=new xi(u)}}}return n}parseTextures(e,t){function n(s,o){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const i={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=e[s];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const l=t[a.image],c=l.data;let u;Array.isArray(c)?(u=new $r,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new Sn:u=new Mt,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=a.uuid,a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=n(a.mapping,w0)),a.channel!==void 0&&(u.channel=a.channel),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&(u.wrapS=n(a.wrap[0],Iu),u.wrapT=n(a.wrap[1],Iu)),a.format!==void 0&&(u.format=a.format),a.internalFormat!==void 0&&(u.internalFormat=a.internalFormat),a.type!==void 0&&(u.type=a.type),a.colorSpace!==void 0&&(u.colorSpace=a.colorSpace),a.minFilter!==void 0&&(u.minFilter=n(a.minFilter,Du)),a.magFilter!==void 0&&(u.magFilter=n(a.magFilter,Du)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.generateMipmaps!==void 0&&(u.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(u.compareFunction=a.compareFunction),a.userData!==void 0&&(u.userData=a.userData),i[a.uuid]=u}return i}parseObject(e,t,n,i,s){let o;function a(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let m=0,x=d.length;m<x;m++){const g=d[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let u,h;switch(e.type){case"Scene":o=new Jc,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new ee(e.background):o.background=c(e.background)),e.environment!==void 0&&(o.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new _i(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new nl(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new Pt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new tr(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new xh(e.color,e.intensity);break;case"DirectionalLight":o=new gh(e.color,e.intensity),o.target=e.target||"";break;case"PointLight":o=new cp(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new hp(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new lp(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),o.target=e.target||"";break;case"HemisphereLight":o=new ap(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new dp().fromJSON(e);break;case"SkinnedMesh":u=a(e.geometry),h=l(e.material),o=new If(u,h),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":u=a(e.geometry),h=l(e.material),o=new qe(u,h);break;case"InstancedMesh":u=a(e.geometry),h=l(e.material);const d=e.count,f=e.instanceMatrix,m=e.instanceColor;o=new Df(u,h,d),o.instanceMatrix=new $s(new Float32Array(f.array),16),m!==void 0&&(o.instanceColor=new $s(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":u=a(e.geometry),h=l(e.material),o=new Lf(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,h),o.geometry=u,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._geometryInfo=e.geometryInfo.map(x=>{let g=null,p=null;return x.boundingBox!==void 0&&(g=new Ht().fromJSON(x.boundingBox)),x.boundingSphere!==void 0&&(p=new Nt().fromJSON(x.boundingSphere)),{...x,boundingBox:g,boundingSphere:p}}),o._instanceInfo=e.instanceInfo,o._availableInstanceIds=e._availableInstanceIds,o._availableGeometryIds=e._availableGeometryIds,o._nextIndexStart=e.nextIndexStart,o._nextVertexStart=e.nextVertexStart,o._geometryCount=e.geometryCount,o._maxInstanceCount=e.maxInstanceCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._matricesTexture=c(e.matricesTexture.uuid),o._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(o._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(o.boundingSphere=new Nt().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(o.boundingBox=new Ht().fromJSON(e.boundingBox));break;case"LOD":o=new Pf;break;case"Line":o=new Si(a(e.geometry),l(e.material));break;case"LineLoop":o=new Ff(a(e.geometry),l(e.material));break;case"LineSegments":o=new Mn(a(e.geometry),l(e.material));break;case"PointCloud":case"Points":o=new Ar(a(e.geometry),l(e.material));break;case"Sprite":o=new Rf(l(e.material));break;case"Group":o=new kn;break;case"Bone":o=new Qc;break;default:o=new st}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(o.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)o.add(this.parseObject(d[f],t,n,i,s))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const m=d[f];o.animations.push(s[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const m=d[f],x=o.getObjectByProperty("uuid",m.object);x!==void 0&&o.addLevel(x,m.distance,m.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new st}})}}const w0={UVMapping:Xa,CubeReflectionMapping:si,CubeRefractionMapping:vi,EquirectangularReflectionMapping:Pr,EquirectangularRefractionMapping:Ir,CubeUVReflectionMapping:Js},Iu={RepeatWrapping:yi,ClampToEdgeWrapping:tn,MirroredRepeatWrapping:ns},Du={NearestFilter:Ft,NearestMipmapNearestFilter:Oc,NearestMipmapLinearFilter:Ns,LinearFilter:pt,LinearMipmapNearestFilter:Sr,LinearMipmapLinearFilter:_n},sc=new WeakMap;class E0 extends Gt{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Vn.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(sc.has(o)===!0)i&&i(sc.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Vn.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),sc.set(l,c),Vn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Vn.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let Oo;class vh{static getContext(){return Oo===void 0&&(Oo=new(window.AudioContext||window.webkitAudioContext)),Oo}static setContext(e){Oo=e}}class T0 extends Gt{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new In(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const c=l.slice(0);vh.getContext().decodeAudioData(c,function(h){t(h)}).catch(a)}catch(c){a(c)}},n,i);function a(l){i?i(l):console.error(l),s.manager.itemError(e)}}}const Lu=new Ue,Fu=new Ue,Ni=new Ue;class A0{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Pt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Pt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Ni.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,o=t.near*Math.tan(Qi*t.fov*.5)/t.zoom;let a,l;Fu.elements[12]=-i,Lu.elements[12]=i,a=-o*t.aspect+s,l=o*t.aspect+s,Ni.elements[0]=2*t.near/(l-a),Ni.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(Ni),a=-o*t.aspect-s,l=o*t.aspect-s,Ni.elements[0]=2*t.near/(l-a),Ni.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(Ni)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Fu),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Lu)}}class mp extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _l{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Oi=new w,rc=new Ut,C0=new w,Bi=new w,ki=new w;class R0 extends st{constructor(){super(),this.type="AudioListener",this.context=vh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new _l}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Oi,rc,C0),Bi.set(0,0,-1).applyQuaternion(rc),ki.set(0,1,0).applyQuaternion(rc),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Oi.x,n),t.positionY.linearRampToValueAtTime(Oi.y,n),t.positionZ.linearRampToValueAtTime(Oi.z,n),t.forwardX.linearRampToValueAtTime(Bi.x,n),t.forwardY.linearRampToValueAtTime(Bi.y,n),t.forwardZ.linearRampToValueAtTime(Bi.z,n),t.upX.linearRampToValueAtTime(ki.x,n),t.upY.linearRampToValueAtTime(ki.y,n),t.upZ.linearRampToValueAtTime(ki.z,n)}else t.setPosition(Oi.x,Oi.y,Oi.z),t.setOrientation(Bi.x,Bi.y,Bi.z,ki.x,ki.y,ki.z)}}let gp=class extends st{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}};const zi=new w,Uu=new Ut,P0=new w,Vi=new w;class I0 extends gp{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(zi,Uu,P0),Vi.set(0,0,1).applyQuaternion(Uu);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(zi.x,n),t.positionY.linearRampToValueAtTime(zi.y,n),t.positionZ.linearRampToValueAtTime(zi.z,n),t.orientationX.linearRampToValueAtTime(Vi.x,n),t.orientationY.linearRampToValueAtTime(Vi.y,n),t.orientationZ.linearRampToValueAtTime(Vi.z,n)}else t.setPosition(zi.x,zi.y,zi.z),t.setOrientation(Vi.x,Vi.y,Vi.z)}}class D0{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class xp{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Ut.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;Ut.multiplyQuaternionsFlat(e,o,e,t,e,n),Ut.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const yh="\\[\\]\\.:\\/",L0=new RegExp("["+yh+"]","g"),_h="[^"+yh+"]",F0="[^"+yh.replace("\\.","")+"]",U0=/((?:WC+[\/:])*)/.source.replace("WC",_h),N0=/(WCOD+)?/.source.replace("WCOD",F0),O0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_h),B0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_h),k0=new RegExp("^"+U0+N0+O0+B0+"$"),z0=["material","materials","bones","map"];class V0{constructor(e,t,n){const i=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rt{constructor(e,t,n){this.path=t,this.parsedPath=n||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,n):new rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(L0,"")}static parseTrackName(e){const t=k0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);z0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=V0;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class H0{constructor(){this.isAnimationObjectGroup=!0,this.uuid=un(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length;let a,l=e.length,c=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){const d=arguments[u],f=d.uuid;let m=t[f];if(m===void 0){m=l++,t[f]=m,e.push(d);for(let x=0,g=o;x!==g;++x)s[x].push(new rt(d,n[x],i[x]))}else if(m<c){a=e[m];const x=--c,g=e[x];t[g.uuid]=m,e[m]=g,t[f]=x,e[x]=d;for(let p=0,_=o;p!==_;++p){const y=s[p],v=y[x];let A=y[m];y[m]=v,A===void 0&&(A=new rt(d,n[p],i[p])),y[x]=A}}else e[m]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const l=arguments[o],c=l.uuid,u=t[c];if(u!==void 0&&u>=s){const h=s++,d=e[h];t[d.uuid]=u,e[u]=d,t[c]=h,e[h]=l;for(let f=0,m=i;f!==m;++f){const x=n[f],g=x[h],p=x[u];x[u]=g,x[h]=p}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){const c=arguments[a],u=c.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<s){const d=--s,f=e[d],m=--o,x=e[m];t[f.uuid]=h,e[h]=f,t[x.uuid]=d,e[d]=x,e.pop();for(let g=0,p=i;g!==p;++g){const _=n[g],y=_[d],v=_[m];_[h]=y,_[d]=v,_.pop()}}else{const d=--o,f=e[d];d>0&&(t[f.uuid]=h),e[h]=f,e.pop();for(let m=0,x=i;m!==x;++m){const g=n[m];g[h]=g[d],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,h=new Array(c);i=s.length,n[e]=i,o.push(e),a.push(t),s.push(h);for(let d=u,f=l.length;d!==f;++d){const m=l[d];h[d]=new rt(m,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=e[a];t[c]=n,o[n]=l,o.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}}class vp{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:$i,endingEnd:$i};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=cf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Xc:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Ja:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===hf;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===lf){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Zi,i.endingEnd=Zi):(e?i.endingStart=this.zeroSlopeAtStart?Zi:$i:i.endingStart=Lr,t?i.endingEnd=this.zeroSlopeAtEnd?Zi:$i:i.endingEnd=Lr)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const G0=new Float32Array(1);class W0 extends Wn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const d=i[h],f=d.name;let m=u[f];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const x=t&&t._propertyBindings[h].binding.parsedPath;m=new xp(rt.create(n,f,x),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new hh(new Float32Array(2),new Float32Array(2),1,G0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?Gr.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ja),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new vp(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Gr.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class X0 extends $c{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new Qa(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Sh{constructor(e){this.value=e}clone(){return new Sh(this.value.clone===void 0?this.value:this.value.clone())}}let q0=0;class Y0 extends Wn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:q0++}),this.name="",this.usage=Ur,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<s.length;o++)this.uniforms.push(s[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class $0 extends il{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Z0{constructor(e,t,n,i,s,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Nu=new Ue;class Mh{constructor(e,t,n=0,i=1/0){this.ray=new js(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new el,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nu),this}intersectObject(e,t=!0,n=[]){return Ic(e,this,n,t),n.sort(Ou),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ic(e[i],this,n,t);return n.sort(Ou),n}}function Ou(r,e){return r.distance-e.distance}function Ic(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Ic(s[o],e,t,!0)}}class K0{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=J0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function J0(){this._document.hidden===!1&&this.reset()}class j0{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Q0{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class bh{constructor(e,t,n,i){bh.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}const Bu=new K;class ex{constructor(e=new K(1/0,1/0),t=new K(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Bu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bu).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ku=new w,Bo=new w,Ps=new w,Is=new w,oc=new w,tx=new w,nx=new w;class ix{constructor(e=new w,t=new w){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){ku.subVectors(e,this.start),Bo.subVectors(this.end,this.start);const n=Bo.dot(Bo);let s=Bo.dot(ku)/n;return t&&(s=ze(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=tx,n=nx){const i=10000000000000001e-32;let s,o;const a=this.start,l=e.start,c=this.end,u=e.end;Ps.subVectors(c,a),Is.subVectors(u,l),oc.subVectors(a,l);const h=Ps.dot(Ps),d=Is.dot(Is),f=Is.dot(oc);if(h<=i&&d<=i)return t.copy(a),n.copy(l),t.sub(n),t.dot(t);if(h<=i)s=0,o=f/d,o=ze(o,0,1);else{const m=Ps.dot(oc);if(d<=i)o=0,s=ze(-m/h,0,1);else{const x=Ps.dot(Is),g=h*d-x*x;g!==0?s=ze((x*f-m*d)/g,0,1):s=0,o=(x*s+f)/d,o<0?(o=0,s=ze(-m/h,0,1)):o>1&&(o=1,s=ze((x-m)/h,0,1))}}return t.copy(a).add(Ps.multiplyScalar(s)),n.copy(l).add(Is.multiplyScalar(o)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const zu=new w;class sx extends st{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new Ye,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,u=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new _e(i,3));const s=new Dt({fog:!1,toneMapped:!1});this.cone=new Mn(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),zu.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(zu),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const fi=new w,ko=new Ue,ac=new Ue;class rx extends Mn{constructor(e){const t=yp(e),n=new Ye,i=[],s=[];for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(0,0,0),s.push(0,0,0))}n.setAttribute("position",new _e(i,3)),n.setAttribute("color",new _e(s,3));const o=new Dt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const a=new ee(255),l=new ee(65280);this.setColors(a,l)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");ac.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(ko.multiplyMatrices(ac,a.matrixWorld),fi.setFromMatrixPosition(ko),i.setXYZ(o,fi.x,fi.y,fi.z),ko.multiplyMatrices(ac,a.parent.matrixWorld),fi.setFromMatrixPosition(ko),i.setXYZ(o+1,fi.x,fi.y,fi.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let s=0;s<i.count;s+=2)i.setXYZ(s,e.r,e.g,e.b),i.setXYZ(s+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function yp(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push(...yp(r.children[t]));return e}class ox extends qe{constructor(e,t,n){const i=new sn(t,4,2),s=new Vt({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const ax=new w,Vu=new ee,Hu=new ee;class lx extends st{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Zr(t);i.rotateY(Math.PI*.5),this.material=new Vt({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),o=new Float32Array(s.count*3);i.setAttribute("color",new ut(o,3)),this.add(new qe(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Vu.copy(this.light.color),Hu.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?Vu:Hu;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(ax.setFromMatrixPosition(this.light.matrixWorld).negate())}}class cx extends Mn{constructor(e=10,t=10,n=4473924,i=8947848){n=new ee(n),i=new ee(i);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,m=-a;d<=t;d++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const x=d===s?n:i;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}const u=new Ye;u.setAttribute("position",new _e(l,3)),u.setAttribute("color",new _e(c,3));const h=new Dt({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class hx extends Mn{constructor(e=10,t=16,n=8,i=64,s=4473924,o=8947848){s=new ee(s),o=new ee(o);const a=[],l=[];if(t>1)for(let h=0;h<t;h++){const d=h/t*(Math.PI*2),f=Math.sin(d)*e,m=Math.cos(d)*e;a.push(0,0,0),a.push(f,0,m);const x=h&1?s:o;l.push(x.r,x.g,x.b),l.push(x.r,x.g,x.b)}for(let h=0;h<n;h++){const d=h&1?s:o,f=e-e/n*h;for(let m=0;m<i;m++){let x=m/i*(Math.PI*2),g=Math.sin(x)*f,p=Math.cos(x)*f;a.push(g,0,p),l.push(d.r,d.g,d.b),x=(m+1)/i*(Math.PI*2),g=Math.sin(x)*f,p=Math.cos(x)*f,a.push(g,0,p),l.push(d.r,d.g,d.b)}}const c=new Ye;c.setAttribute("position",new _e(a,3)),c.setAttribute("color",new _e(l,3));const u=new Dt({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Gu=new w,zo=new w,Wu=new w;class ux extends st{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new Ye;i.setAttribute("position",new _e([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new Dt({fog:!1,toneMapped:!1});this.lightPlane=new Si(i,s),this.add(this.lightPlane),i=new Ye,i.setAttribute("position",new _e([0,0,0,0,0,1],3)),this.targetLine=new Si(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Gu.setFromMatrixPosition(this.light.matrixWorld),zo.setFromMatrixPosition(this.light.target.matrixWorld),Wu.subVectors(zo,Gu),this.lightPlane.lookAt(zo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(zo),this.targetLine.scale.z=Wu.length()}}const Vo=new w,_t=new tl;class _p extends Mn{constructor(e){const t=new Ye,n=new Dt({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(m,x){l(m),l(x)}function l(m){i.push(0,0,0),s.push(0,0,0),o[m]===void 0&&(o[m]=[]),o[m].push(i.length/3-1)}t.setAttribute("position",new _e(i,3)),t.setAttribute("color",new _e(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const c=new ee(16755200),u=new ee(16711680),h=new ee(43775),d=new ee(16777215),f=new ee(3355443);this.setColors(c,u,h,d,f)}setColors(e,t,n,i,s){const a=this.geometry.getAttribute("color");return a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;let s,o;if(_t.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,o=0;else if(this.camera.coordinateSystem===hn)s=-1,o=1;else if(this.camera.coordinateSystem===Xs)s=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);bt("c",t,e,_t,0,0,s),bt("t",t,e,_t,0,0,o),bt("n1",t,e,_t,-n,-i,s),bt("n2",t,e,_t,n,-i,s),bt("n3",t,e,_t,-n,i,s),bt("n4",t,e,_t,n,i,s),bt("f1",t,e,_t,-n,-i,o),bt("f2",t,e,_t,n,-i,o),bt("f3",t,e,_t,-n,i,o),bt("f4",t,e,_t,n,i,o),bt("u1",t,e,_t,n*.7,i*1.1,s),bt("u2",t,e,_t,-n*.7,i*1.1,s),bt("u3",t,e,_t,0,i*2,s),bt("cf1",t,e,_t,-n,0,o),bt("cf2",t,e,_t,n,0,o),bt("cf3",t,e,_t,0,-i,o),bt("cf4",t,e,_t,0,i,o),bt("cn1",t,e,_t,-n,0,s),bt("cn2",t,e,_t,n,0,s),bt("cn3",t,e,_t,0,-i,s),bt("cn4",t,e,_t,0,i,s),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function bt(r,e,t,n,i,s,o){Vo.set(i,s,o).unproject(n);const a=e[r];if(a!==void 0){const l=t.getAttribute("position");for(let c=0,u=a.length;c<u;c++)l.setXYZ(a[c],Vo.x,Vo.y,Vo.z)}}const Ho=new Ht;class dx extends Mn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),s=new Ye;s.setIndex(new ut(n,1)),s.setAttribute("position",new ut(i,3)),super(s,new Dt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Ho.setFromObject(this.object),Ho.isEmpty())return;const e=Ho.min,t=Ho.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class fx extends Mn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new Ye;s.setIndex(new ut(n,1)),s.setAttribute("position",new _e(i,3)),super(s,new Dt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class px extends Si{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Ye;o.setAttribute("position",new _e(s,3)),o.computeBoundingSphere(),super(o,new Dt({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Ye;l.setAttribute("position",new _e(a,3)),l.computeBoundingSphere(),this.add(new qe(l,new Vt({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Xu=new w;let Go,lc;class mx extends st{constructor(e=new w(0,0,1),t=new w(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",Go===void 0&&(Go=new Ye,Go.setAttribute("position",new _e([0,0,0,0,1,0],3)),lc=new Mi(.5,1,5,1),lc.translate(0,-.5,0)),this.position.copy(t),this.line=new Si(Go,new Dt({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new qe(lc,new Vt({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Xu.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Xu,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class gx extends Mn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ye;i.setAttribute("position",new _e(t,3)),i.setAttribute("color",new _e(n,3));const s=new Dt({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new ee,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class xx{constructor(){this.type="ShapePath",this.color=new ee,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ha,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const _=[];for(let y=0,v=p.length;y<v;y++){const A=p[y],E=new es;E.curves=A.curves,_.push(E)}return _}function n(p,_){const y=_.length;let v=!1;for(let A=y-1,E=0;E<y;A=E++){let R=_[A],P=_[E],M=P.x-R.x,b=P.y-R.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(R=_[E],M=-M,P=_[A],b=-b),p.y<R.y||p.y>P.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{const I=b*(p.x-R.x)-M*(p.y-R.y);if(I===0)return!0;if(I<0)continue;v=!v}}else{if(p.y!==R.y)continue;if(P.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=P.x)return!0}}return v}const i=Pn.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new es,l.curves=a.curves,c.push(l),c;let u=!i(s[0].getPoints());u=e?!u:u;const h=[],d=[];let f=[],m=0,x;d[m]=void 0,f[m]=[];for(let p=0,_=s.length;p<_;p++)a=s[p],x=a.getPoints(),o=i(x),o=e?!o:o,o?(!u&&d[m]&&m++,d[m]={s:new es,p:x},d[m].s.curves=a.curves,u&&m++,f[m]=[]):f[m].push({h:a,p:x[0]});if(!d[0])return t(s);if(d.length>1){let p=!1,_=0;for(let y=0,v=d.length;y<v;y++)h[y]=[];for(let y=0,v=d.length;y<v;y++){const A=f[y];for(let E=0;E<A.length;E++){const R=A[E];let P=!0;for(let M=0;M<d.length;M++)n(R.p,d[M].p)&&(y!==M&&_++,P?(P=!1,h[M].push(R)):p=!0);P&&h[y].push(R)}}_>0&&p===!1&&(f=h)}let g;for(let p=0,_=d.length;p<_;p++){l=d[p].s,c.push(l),g=f[p];for(let y=0,v=g.length;y<v;y++)l.holes.push(g[y].h)}return c}}class vx extends Wn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function yx(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function _x(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function Sx(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function Dc(r,e,t,n){const i=Mx(n);switch(t){case Hc:return r*e;case Ws:return r*e/i.components*i.byteLength;case qr:return r*e/i.components*i.byteLength;case Wc:return r*e*2/i.components*i.byteLength;case Za:return r*e*2/i.components*i.byteLength;case Gc:return r*e*3/i.components*i.byteLength;case zt:return r*e*4/i.components*i.byteLength;case Ka:return r*e*4/i.components*i.byteLength;case Mr:case br:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wr:case Er:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ua:case fa:return Math.max(r,16)*Math.max(e,8)/4;case ha:case da:return Math.max(r,8)*Math.max(e,8)/2;case pa:case ma:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ga:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case va:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ya:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case _a:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ba:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case wa:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ea:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ca:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ra:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Pa:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ia:case Da:case La:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Fa:case Ua:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Na:case Oa:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mx(r){switch(r){case dn:case Bc:return{byteLength:1,components:1};case Vs:case kc:case bi:return{byteLength:2,components:1};case Ya:case $a:return{byteLength:2,components:4};case ri:case qa:case nn:return{byteLength:4,components:1};case zc:case Vc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}class bx{static contain(e,t){return yx(e,t)}static cover(e,t){return _x(e,t)}static fill(e){return Sx(e)}static getByteLength(e,t,n,i){return Dc(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sp(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function wx(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],x=h[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const x=h[f];r.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Ex=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tx=`#ifdef USE_ALPHAHASH
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
#endif`,Ax=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Px=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ix=`#ifdef USE_AOMAP
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
#endif`,Dx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lx=`#ifdef USE_BATCHING
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
#endif`,Fx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ux=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ox=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bx=`#ifdef USE_IRIDESCENCE
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
#endif`,kx=`#ifdef USE_BUMPMAP
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
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$x=`#define PI 3.141592653589793
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
} // validated`,Zx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kx=`vec3 transformedNormal = objectNormal;
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
#endif`,Jx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ev=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tv="gl_FragColor = linearToOutputTexel( gl_FragColor );",nv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iv=`#ifdef USE_ENVMAP
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
#endif`,sv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rv=`#ifdef USE_ENVMAP
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
#endif`,ov=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,av=`#ifdef USE_ENVMAP
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
#endif`,lv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dv=`#ifdef USE_GRADIENTMAP
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
}`,fv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gv=`uniform bool receiveShadow;
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
#endif`,xv=`#ifdef USE_ENVMAP
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
#endif`,vv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yv=`varying vec3 vViewPosition;
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
material.specularStrength = specularStrength;`,Sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mv=`PhysicalMaterial material;
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
#endif`,bv=`struct PhysicalMaterial {
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
}`,wv=`
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
#endif`,Ev=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Av=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Iv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fv=`#if defined( USE_POINTS_UV )
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
#endif`,Uv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ov=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kv=`#ifdef USE_MORPHNORMALS
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
#endif`,Vv=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,Gv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yv=`#ifdef USE_NORMALMAP
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
#endif`,$v=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jv=`#ifdef OPAQUE
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
}`,ey=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ty=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ny=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ry=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ay=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ly=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cy=`float getShadowMask() {
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
}`,hy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uy=`#ifdef USE_SKINNING
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
#endif`,dy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fy=`#ifdef USE_SKINNING
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
#endif`,py=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,my=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vy=`#ifdef USE_TRANSMISSION
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
#endif`,yy=`#ifdef USE_TRANSMISSION
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
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,by=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ey=`uniform sampler2D t2D;
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
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ry=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`#include <common>
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
}`,Iy=`#if DEPTH_PACKING == 3200
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
}`,Dy=`#define DISTANCE
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
}`,Ly=`#define DISTANCE
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
}`,Fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ny=`uniform float scale;
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
}`,Oy=`uniform vec3 diffuse;
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
}`,By=`#include <common>
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
}`,ky=`uniform vec3 diffuse;
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
}`,zy=`#define LAMBERT
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
}`,Vy=`#define LAMBERT
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
}`,Hy=`#define MATCAP
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
}`,Gy=`#define MATCAP
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
}`,Wy=`#define NORMAL
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
}`,Xy=`#define NORMAL
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
}`,qy=`#define PHONG
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
}`,Yy=`#define PHONG
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
}`,$y=`#define STANDARD
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
}`,Zy=`#define STANDARD
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
}`,Ky=`#define TOON
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
}`,Jy=`#define TOON
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
}`,jy=`uniform float size;
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
}`,Qy=`uniform vec3 diffuse;
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
}`,e_=`#include <common>
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
}`,t_=`uniform vec3 color;
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
}`,n_=`uniform float rotation;
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
}`,i_=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Ex,alphahash_pars_fragment:Tx,alphamap_fragment:Ax,alphamap_pars_fragment:Cx,alphatest_fragment:Rx,alphatest_pars_fragment:Px,aomap_fragment:Ix,aomap_pars_fragment:Dx,batching_pars_vertex:Lx,batching_vertex:Fx,begin_vertex:Ux,beginnormal_vertex:Nx,bsdfs:Ox,iridescence_fragment:Bx,bumpmap_pars_fragment:kx,clipping_planes_fragment:zx,clipping_planes_pars_fragment:Vx,clipping_planes_pars_vertex:Hx,clipping_planes_vertex:Gx,color_fragment:Wx,color_pars_fragment:Xx,color_pars_vertex:qx,color_vertex:Yx,common:$x,cube_uv_reflection_fragment:Zx,defaultnormal_vertex:Kx,displacementmap_pars_vertex:Jx,displacementmap_vertex:jx,emissivemap_fragment:Qx,emissivemap_pars_fragment:ev,colorspace_fragment:tv,colorspace_pars_fragment:nv,envmap_fragment:iv,envmap_common_pars_fragment:sv,envmap_pars_fragment:rv,envmap_pars_vertex:ov,envmap_physical_pars_fragment:xv,envmap_vertex:av,fog_vertex:lv,fog_pars_vertex:cv,fog_fragment:hv,fog_pars_fragment:uv,gradientmap_pars_fragment:dv,lightmap_pars_fragment:fv,lights_lambert_fragment:pv,lights_lambert_pars_fragment:mv,lights_pars_begin:gv,lights_toon_fragment:vv,lights_toon_pars_fragment:yv,lights_phong_fragment:_v,lights_phong_pars_fragment:Sv,lights_physical_fragment:Mv,lights_physical_pars_fragment:bv,lights_fragment_begin:wv,lights_fragment_maps:Ev,lights_fragment_end:Tv,logdepthbuf_fragment:Av,logdepthbuf_pars_fragment:Cv,logdepthbuf_pars_vertex:Rv,logdepthbuf_vertex:Pv,map_fragment:Iv,map_pars_fragment:Dv,map_particle_fragment:Lv,map_particle_pars_fragment:Fv,metalnessmap_fragment:Uv,metalnessmap_pars_fragment:Nv,morphinstance_vertex:Ov,morphcolor_vertex:Bv,morphnormal_vertex:kv,morphtarget_pars_vertex:zv,morphtarget_vertex:Vv,normal_fragment_begin:Hv,normal_fragment_maps:Gv,normal_pars_fragment:Wv,normal_pars_vertex:Xv,normal_vertex:qv,normalmap_pars_fragment:Yv,clearcoat_normal_fragment_begin:$v,clearcoat_normal_fragment_maps:Zv,clearcoat_pars_fragment:Kv,iridescence_pars_fragment:Jv,opaque_fragment:jv,packing:Qv,premultiplied_alpha_fragment:ey,project_vertex:ty,dithering_fragment:ny,dithering_pars_fragment:iy,roughnessmap_fragment:sy,roughnessmap_pars_fragment:ry,shadowmap_pars_fragment:oy,shadowmap_pars_vertex:ay,shadowmap_vertex:ly,shadowmask_pars_fragment:cy,skinbase_vertex:hy,skinning_pars_vertex:uy,skinning_vertex:dy,skinnormal_vertex:fy,specularmap_fragment:py,specularmap_pars_fragment:my,tonemapping_fragment:gy,tonemapping_pars_fragment:xy,transmission_fragment:vy,transmission_pars_fragment:yy,uv_pars_fragment:_y,uv_pars_vertex:Sy,uv_vertex:My,worldpos_vertex:by,background_vert:wy,background_frag:Ey,backgroundCube_vert:Ty,backgroundCube_frag:Ay,cube_vert:Cy,cube_frag:Ry,depth_vert:Py,depth_frag:Iy,distanceRGBA_vert:Dy,distanceRGBA_frag:Ly,equirect_vert:Fy,equirect_frag:Uy,linedashed_vert:Ny,linedashed_frag:Oy,meshbasic_vert:By,meshbasic_frag:ky,meshlambert_vert:zy,meshlambert_frag:Vy,meshmatcap_vert:Hy,meshmatcap_frag:Gy,meshnormal_vert:Wy,meshnormal_frag:Xy,meshphong_vert:qy,meshphong_frag:Yy,meshphysical_vert:$y,meshphysical_frag:Zy,meshtoon_vert:Ky,meshtoon_frag:Jy,points_vert:jy,points_frag:Qy,shadow_vert:e_,shadow_frag:t_,sprite_vert:n_,sprite_frag:i_},me={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Cn={basic:{uniforms:qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ee(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:qt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:qt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ee(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:qt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:qt([me.points,me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:qt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:qt([me.common,me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:qt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:qt([me.sprite,me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:qt([me.common,me.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:qt([me.lights,me.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Cn.physical={uniforms:qt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Wo={r:0,b:0,g:0},Hi=new pn,s_=new Ue;function r_(r,e,t,n,i,s,o){const a=new ee(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function m(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function x(y){let v=!1;const A=m(y);A===null?p(a,l):A&&A.isColor&&(p(A,1),v=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(y,v){const A=m(v);A&&(A.isCubeTexture||A.mapping===Js)?(u===void 0&&(u=new qe(new oi(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:Ys(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Hi.copy(v.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(s_.makeRotationFromEuler(Hi)),u.material.toneMapped=tt.getTransfer(A.colorSpace)!==ct,(h!==A||d!==A.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,f=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new qe(new ls(2,2),new St({name:"BackgroundMaterial",uniforms:Ys(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=tt.getTransfer(A.colorSpace)!==ct,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=A,d=A.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(Wo,Ef(r)),n.buffers.color.setClear(Wo.r,Wo.g,Wo.b,v,o)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:x,addToRenderList:g,dispose:_}}function o_(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(b,I,U,k,q){let H=!1;const X=h(k,U,I);s!==X&&(s=X,c(s.object)),H=f(b,k,U,q),H&&m(b,k,U,q),q!==null&&e.update(q,r.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,v(b,I,U,k),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function u(b){return r.deleteVertexArray(b)}function h(b,I,U){const k=U.wireframe===!0;let q=n[b.id];q===void 0&&(q={},n[b.id]=q);let H=q[I.id];H===void 0&&(H={},q[I.id]=H);let X=H[k];return X===void 0&&(X=d(l()),H[k]=X),X}function d(b){const I=[],U=[],k=[];for(let q=0;q<t;q++)I[q]=0,U[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:k,object:b,attributes:{},index:null}}function f(b,I,U,k){const q=s.attributes,H=I.attributes;let X=0;const Z=U.getAttributes();for(const z in Z)if(Z[z].location>=0){const fe=q[z];let Me=H[z];if(Me===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(Me=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(Me=b.instanceColor)),fe===void 0||fe.attribute!==Me||Me&&fe.data!==Me.data)return!0;X++}return s.attributesNum!==X||s.index!==k}function m(b,I,U,k){const q={},H=I.attributes;let X=0;const Z=U.getAttributes();for(const z in Z)if(Z[z].location>=0){let fe=H[z];fe===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(fe=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(fe=b.instanceColor));const Me={};Me.attribute=fe,fe&&fe.data&&(Me.data=fe.data),q[z]=Me,X++}s.attributes=q,s.attributesNum=X,s.index=k}function x(){const b=s.newAttributes;for(let I=0,U=b.length;I<U;I++)b[I]=0}function g(b){p(b,0)}function p(b,I){const U=s.newAttributes,k=s.enabledAttributes,q=s.attributeDivisors;U[b]=1,k[b]===0&&(r.enableVertexAttribArray(b),k[b]=1),q[b]!==I&&(r.vertexAttribDivisor(b,I),q[b]=I)}function _(){const b=s.newAttributes,I=s.enabledAttributes;for(let U=0,k=I.length;U<k;U++)I[U]!==b[U]&&(r.disableVertexAttribArray(U),I[U]=0)}function y(b,I,U,k,q,H,X){X===!0?r.vertexAttribIPointer(b,I,U,q,H):r.vertexAttribPointer(b,I,U,k,q,H)}function v(b,I,U,k){x();const q=k.attributes,H=U.getAttributes(),X=I.defaultAttributeValues;for(const Z in H){const z=H[Z];if(z.location>=0){let ue=q[Z];if(ue===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor)),ue!==void 0){const fe=ue.normalized,Me=ue.itemSize,We=e.get(ue);if(We===void 0)continue;const Xe=We.buffer,Qe=We.type,et=We.bytesPerElement,j=Qe===r.INT||Qe===r.UNSIGNED_INT||ue.gpuType===qa;if(ue.isInterleavedBufferAttribute){const ne=ue.data,ge=ne.stride,Ae=ue.offset;if(ne.isInstancedInterleavedBuffer){for(let be=0;be<z.locationSize;be++)p(z.location+be,ne.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let be=0;be<z.locationSize;be++)g(z.location+be);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let be=0;be<z.locationSize;be++)y(z.location+be,Me/z.locationSize,Qe,fe,ge*et,(Ae+Me/z.locationSize*be)*et,j)}else{if(ue.isInstancedBufferAttribute){for(let ne=0;ne<z.locationSize;ne++)p(z.location+ne,ue.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ne=0;ne<z.locationSize;ne++)g(z.location+ne);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let ne=0;ne<z.locationSize;ne++)y(z.location+ne,Me/z.locationSize,Qe,fe,Me*et,Me/z.locationSize*ne*et,j)}}else if(X!==void 0){const fe=X[Z];if(fe!==void 0)switch(fe.length){case 2:r.vertexAttrib2fv(z.location,fe);break;case 3:r.vertexAttrib3fv(z.location,fe);break;case 4:r.vertexAttrib4fv(z.location,fe);break;default:r.vertexAttrib1fv(z.location,fe)}}}}_()}function A(){P();for(const b in n){const I=n[b];for(const U in I){const k=I[U];for(const q in k)u(k[q].object),delete k[q];delete I[U]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;const I=n[b.id];for(const U in I){const k=I[U];for(const q in k)u(k[q].object),delete k[q];delete I[U]}delete n[b.id]}function R(b){for(const I in n){const U=n[I];if(U[b.id]===void 0)continue;const k=U[b.id];for(const q in k)u(k[q].object),delete k[q];delete U[b.id]}}function P(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function a_(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let m=0;for(let x=0;x<h;x++)m+=u[x]*d[x];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function l_(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==zt&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const P=R===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==dn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==nn&&!P)}function l(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:A,maxSamples:E}}function c_(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new pi,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=r.get(h);if(!i||m===null||m.length===0||s&&!g)s?u(null):c();else{const _=s?0:n,y=_*4;let v=p.clippingState||null;l.value=v,v=u(m,d,y,f);for(let A=0;A!==y;++A)v[A]=t[A];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){const x=h!==null?h.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const p=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=f;y!==x;++y,v+=4)o.copy(h[y]).applyMatrix4(_,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function h_(r){let e=new WeakMap;function t(o,a){return a===Pr?o.mapping=si:a===Ir&&(o.mapping=vi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pr||a===Ir)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Af(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Bs=4,qu=[.125,.215,.35,.446,.526,.582],Yi=20,cc=new tr,Yu=new ee;let hc=null,uc=0,dc=0,fc=!1;const qi=(1+Math.sqrt(5))/2,Ds=1/qi,$u=[new w(-qi,Ds,0),new w(qi,Ds,0),new w(-Ds,0,qi),new w(Ds,0,qi),new w(0,qi,-Ds),new w(0,qi,Ds),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],u_=new w;class Lc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=u_}=s;hc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hc,uc,dc),this._renderer.xr.enabled=fc,e.scissorTest=!1,Xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===si||e.mapping===vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pt,minFilter:pt,generateMipmaps:!1,type:bi,format:zt,colorSpace:ss,depthBuffer:!1},i=Zu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d_(s)),this._blurMaterial=f_(s,e,t)}return i}_compileMaterial(e){const t=new qe(this._lodPlanes[0],e);this._renderer.compile(t,cc)}_sceneToCubeUV(e,t,n,i,s){const l=new Pt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Yu),h.toneMapping=ni,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const x=new Vt({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new qe(new oi,x);let p=!1;const _=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,p=!0):(x.color.copy(Yu),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const A=this._cubeSize;Xo(i,v*A,y>2?A:0,A,A),h.setRenderTarget(i),p&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===si||e.mapping===vi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new qe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Xo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,cc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$u[(i-s-1)%$u.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new qe(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Yi-1),x=s/m,g=isFinite(s)?1+Math.floor(u*x):Yi;g>Yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Yi}`);const p=[];let _=0;for(let R=0;R<Yi;++R){const P=R/x,M=Math.exp(-P*P/2);p.push(M),R===0?_+=M:R<g&&(_+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const v=this._sizeLods[i],A=3*v*(i>y-Bs?i-y+Bs:0),E=4*(this._cubeSize-v);Xo(t,A,E,3*v,2*v),l.setRenderTarget(t),l.render(h,cc)}}function d_(r){const e=[],t=[],n=[];let i=r;const s=r-Bs+1+qu.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Bs?l=qu[o-r+Bs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,x=3,g=2,p=1,_=new Float32Array(x*m*f),y=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let E=0;E<f;E++){const R=E%3*2/3-1,P=E>2?0:-1,M=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];_.set(M,x*m*E),y.set(d,g*m*E);const b=[E,E,E,E,E,E];v.set(b,p*m*E)}const A=new Ye;A.setAttribute("position",new ut(_,x)),A.setAttribute("uv",new ut(y,g)),A.setAttribute("faceIndex",new ut(v,p)),e.push(A),i>Bs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zu(r,e,t){const n=new fn(r,e,t);return n.texture.mapping=Js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function f_(r,e,t){const n=new Float32Array(Yi),i=new w(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wh(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Ku(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wh(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Ju(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function wh(){return`

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
	`}function p_(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Pr||l===Ir,u=l===si||l===vi;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Lc(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Lc(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function m_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Or("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function g_(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,m=h.attributes.position;let x=0;if(f!==null){const _=f.array;x=f.version;for(let y=0,v=_.length;y<v;y+=3){const A=_[y+0],E=_[y+1],R=_[y+2];d.push(A,E,E,R,R,A)}}else if(m!==void 0){const _=m.array;x=m.version;for(let y=0,v=_.length/3-1;y<v;y+=3){const A=y+0,E=y+1,R=y+2;d.push(A,E,E,R,R,A)}}else return;const g=new(Sf(d)?Kc:Zc)(d,1);g.version=x;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function x_(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,d*o,m),t.update(f,n,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function h(d,f,m,x){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,x,0,m);let p=0;for(let _=0;_<m;_++)p+=f[_]*x[_];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function v_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function y_(r,e,t){const n=new WeakMap,i=new it;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let b=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),x===!0&&(v=2),g===!0&&(v=3);let A=a.attributes.position.count*v,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*E*4*h),P=new ja(R,A,E,h);P.type=nn,P.needsUpdate=!0;const M=v*4;for(let I=0;I<h;I++){const U=p[I],k=_[I],q=y[I],H=A*E*4*I;for(let X=0;X<U.count;X++){const Z=X*M;m===!0&&(i.fromBufferAttribute(U,X),R[H+Z+0]=i.x,R[H+Z+1]=i.y,R[H+Z+2]=i.z,R[H+Z+3]=0),x===!0&&(i.fromBufferAttribute(k,X),R[H+Z+4]=i.x,R[H+Z+5]=i.y,R[H+Z+6]=i.z,R[H+Z+7]=0),g===!0&&(i.fromBufferAttribute(q,X),R[H+Z+8]=i.x,R[H+Z+9]=i.y,R[H+Z+10]=i.z,R[H+Z+11]=q.itemSize===4?i.w:1)}}d={count:h,texture:P,size:new K(A,E)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",x),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function __(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Mp=new Mt,ju=new al(1,1),bp=new ja,wp=new Qa,Ep=new $r,Qu=[],ed=[],td=new Float32Array(16),nd=new Float32Array(9),id=new Float32Array(4);function nr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Qu[i];if(s===void 0&&(s=new Float32Array(i),Qu[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Tt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function At(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Sl(r,e){let t=ed[e];t===void 0&&(t=new Int32Array(e),ed[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function S_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function M_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2fv(this.addr,e),At(t,e)}}function b_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;r.uniform3fv(this.addr,e),At(t,e)}}function w_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4fv(this.addr,e),At(t,e)}}function E_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;id.set(n),r.uniformMatrix2fv(this.addr,!1,id),At(t,n)}}function T_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;nd.set(n),r.uniformMatrix3fv(this.addr,!1,nd),At(t,n)}}function A_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;td.set(n),r.uniformMatrix4fv(this.addr,!1,td),At(t,n)}}function C_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function R_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2iv(this.addr,e),At(t,e)}}function P_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;r.uniform3iv(this.addr,e),At(t,e)}}function I_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4iv(this.addr,e),At(t,e)}}function D_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function L_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2uiv(this.addr,e),At(t,e)}}function F_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;r.uniform3uiv(this.addr,e),At(t,e)}}function U_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4uiv(this.addr,e),At(t,e)}}function N_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ju.compareFunction=qc,s=ju):s=Mp,t.setTexture2D(e||s,i)}function O_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||wp,i)}function B_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ep,i)}function k_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||bp,i)}function z_(r){switch(r){case 5126:return S_;case 35664:return M_;case 35665:return b_;case 35666:return w_;case 35674:return E_;case 35675:return T_;case 35676:return A_;case 5124:case 35670:return C_;case 35667:case 35671:return R_;case 35668:case 35672:return P_;case 35669:case 35673:return I_;case 5125:return D_;case 36294:return L_;case 36295:return F_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return k_}}function V_(r,e){r.uniform1fv(this.addr,e)}function H_(r,e){const t=nr(e,this.size,2);r.uniform2fv(this.addr,t)}function G_(r,e){const t=nr(e,this.size,3);r.uniform3fv(this.addr,t)}function W_(r,e){const t=nr(e,this.size,4);r.uniform4fv(this.addr,t)}function X_(r,e){const t=nr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function q_(r,e){const t=nr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Y_(r,e){const t=nr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function $_(r,e){r.uniform1iv(this.addr,e)}function Z_(r,e){r.uniform2iv(this.addr,e)}function K_(r,e){r.uniform3iv(this.addr,e)}function J_(r,e){r.uniform4iv(this.addr,e)}function j_(r,e){r.uniform1uiv(this.addr,e)}function Q_(r,e){r.uniform2uiv(this.addr,e)}function eS(r,e){r.uniform3uiv(this.addr,e)}function tS(r,e){r.uniform4uiv(this.addr,e)}function nS(r,e,t){const n=this.cache,i=e.length,s=Sl(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Mp,s[o])}function iS(r,e,t){const n=this.cache,i=e.length,s=Sl(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||wp,s[o])}function sS(r,e,t){const n=this.cache,i=e.length,s=Sl(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Ep,s[o])}function rS(r,e,t){const n=this.cache,i=e.length,s=Sl(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||bp,s[o])}function oS(r){switch(r){case 5126:return V_;case 35664:return H_;case 35665:return G_;case 35666:return W_;case 35674:return X_;case 35675:return q_;case 35676:return Y_;case 5124:case 35670:return $_;case 35667:case 35671:return Z_;case 35668:case 35672:return K_;case 35669:case 35673:return J_;case 5125:return j_;case 36294:return Q_;case 36295:return eS;case 36296:return tS;case 35678:case 36198:case 36298:case 36306:case 35682:return nS;case 35679:case 36299:case 36307:return iS;case 35680:case 36300:case 36308:case 36293:return sS;case 36289:case 36303:case 36311:case 36292:return rS}}class aS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=z_(t.type)}}class lS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oS(t.type)}}class cS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const pc=/(\w+)(\])?(\[|\.)?/g;function sd(r,e){r.seq.push(e),r.map[e.id]=e}function hS(r,e,t){const n=r.name,i=n.length;for(pc.lastIndex=0;;){const s=pc.exec(n),o=pc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){sd(t,c===void 0?new aS(a,r,e):new lS(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new cS(a),sd(t,h)),t=h}}}class jo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);hS(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function rd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const uS=37297;let dS=0;function fS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const od=new Ze;function pS(r){tt._getMatrix(od,tt.workingColorSpace,r);const e=`mat3( ${od.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(r)){case Fr:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ad(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+fS(r.getShaderSource(e),a)}else return s}function mS(r,e){const t=pS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gS(r,e){let t;switch(e){case jd:t="Linear";break;case Qd:t="Reinhard";break;case ef:t="Cineon";break;case tf:t="ACESFilmic";break;case sf:t="AgX";break;case rf:t="Neutral";break;case nf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qo=new w;function xS(){tt.getLuminanceCoefficients(qo);const r=qo.x.toFixed(4),e=qo.y.toFixed(4),t=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function yS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _S(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function _r(r){return r!==""}function ld(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(r){return r.replace(SS,bS)}const MS=new Map;function bS(r,e){let t=je[e];if(t===void 0){const n=MS.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Fc(t)}const wS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hd(r){return r.replace(wS,ES)}function ES(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ud(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function TS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Nc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Id?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function AS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case si:case vi:e="ENVMAP_TYPE_CUBE";break;case Js:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case vi:e="ENVMAP_MODE_REFRACTION";break}return e}function RS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Xr:e="ENVMAP_BLENDING_MULTIPLY";break;case Kd:e="ENVMAP_BLENDING_MIX";break;case Jd:e="ENVMAP_BLENDING_ADD";break}return e}function PS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function IS(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=TS(t),c=AS(t),u=CS(t),h=RS(t),d=PS(t),f=vS(t),m=yS(s),x=i.createProgram();let g,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(_r).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(_r).join(`
`),p.length>0&&(p+=`
`)):(g=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),p=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?je.tonemapping_pars_fragment:"",t.toneMapping!==ni?gS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,mS("linearToOutputTexel",t.outputColorSpace),xS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),o=Fc(o),o=ld(o,t),o=cd(o,t),a=Fc(a),a=ld(a,t),a=cd(a,t),o=hd(o),a=hd(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+g+o,v=_+p+a,A=rd(i,i.VERTEX_SHADER,y),E=rd(i,i.FRAGMENT_SHADER,v);i.attachShader(x,A),i.attachShader(x,E),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(I){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(x)||"",k=i.getShaderInfoLog(A)||"",q=i.getShaderInfoLog(E)||"",H=U.trim(),X=k.trim(),Z=q.trim();let z=!0,ue=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,A,E);else{const fe=ad(i,A,"vertex"),Me=ad(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+fe+`
`+Me)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(X===""||Z==="")&&(ue=!1);ue&&(I.diagnostics={runnable:z,programLog:H,vertexShader:{log:X,prefix:g},fragmentShader:{log:Z,prefix:p}})}i.deleteShader(A),i.deleteShader(E),P=new jo(i,x),M=_S(i,x)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(x,uS)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}let DS=0;class LS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new FS(e),t.set(e,n)),n}}class FS{constructor(e){this.id=DS++,this.code=e,this.usedTimes=0}}function US(r,e,t,n,i,s,o){const a=new el,l=new LS,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,b,I,U,k){const q=U.fog,H=k.geometry,X=M.isMeshStandardMaterial?U.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),z=Z&&Z.mapping===Js?Z.image.height:null,ue=m[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const fe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Me=fe!==void 0?fe.length:0;let We=0;H.morphAttributes.position!==void 0&&(We=1),H.morphAttributes.normal!==void 0&&(We=2),H.morphAttributes.color!==void 0&&(We=3);let Xe,Qe,et,j;if(ue){const lt=Cn[ue];Xe=lt.vertexShader,Qe=lt.fragmentShader}else Xe=M.vertexShader,Qe=M.fragmentShader,l.update(M),et=l.getVertexShaderID(M),j=l.getFragmentShaderID(M);const ne=r.getRenderTarget(),ge=r.state.buffers.depth.getReversed(),Ae=k.isInstancedMesh===!0,be=k.isBatchedMesh===!0,He=!!M.map,at=!!M.matcap,D=!!Z,re=!!M.aoMap,te=!!M.lightMap,Q=!!M.bumpMap,L=!!M.normalMap,$=!!M.displacementMap,oe=!!M.emissiveMap,J=!!M.metalnessMap,Ne=!!M.roughnessMap,Oe=M.anisotropy>0,C=M.clearcoat>0,S=M.dispersion>0,O=M.iridescence>0,V=M.sheen>0,ie=M.transmission>0,Y=Oe&&!!M.anisotropyMap,Ce=C&&!!M.clearcoatMap,de=C&&!!M.clearcoatNormalMap,ve=C&&!!M.clearcoatRoughnessMap,Te=O&&!!M.iridescenceMap,ae=O&&!!M.iridescenceThicknessMap,Se=V&&!!M.sheenColorMap,Ve=V&&!!M.sheenRoughnessMap,Ie=!!M.specularMap,xe=!!M.specularColorMap,Je=!!M.specularIntensityMap,F=ie&&!!M.transmissionMap,he=ie&&!!M.thicknessMap,pe=!!M.gradientMap,Ee=!!M.alphaMap,le=M.alphaTest>0,se=!!M.alphaHash,Pe=!!M.extensions;let $e=ni;M.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&($e=r.toneMapping);const ft={shaderID:ue,shaderType:M.type,shaderName:M.name,vertexShader:Xe,fragmentShader:Qe,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:j,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:be,batchingColor:be&&k._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&k.instanceColor!==null,instancingMorph:Ae&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?r.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ss,alphaToCoverage:!!M.alphaToCoverage,map:He,matcap:at,envMap:D,envMapMode:D&&Z.mapping,envMapCubeUVHeight:z,aoMap:re,lightMap:te,bumpMap:Q,normalMap:L,displacementMap:d&&$,emissiveMap:oe,normalMapObjectSpace:L&&M.normalMapType===ff,normalMapTangentSpace:L&&M.normalMapType===wi,metalnessMap:J,roughnessMap:Ne,anisotropy:Oe,anisotropyMap:Y,clearcoat:C,clearcoatMap:Ce,clearcoatNormalMap:de,clearcoatRoughnessMap:ve,dispersion:S,iridescence:O,iridescenceMap:Te,iridescenceThicknessMap:ae,sheen:V,sheenColorMap:Se,sheenRoughnessMap:Ve,specularMap:Ie,specularColorMap:xe,specularIntensityMap:Je,transmission:ie,transmissionMap:F,thicknessMap:he,gradientMap:pe,opaque:M.transparent===!1&&M.blending===ji&&M.alphaToCoverage===!1,alphaMap:Ee,alphaTest:le,alphaHash:se,combine:M.combine,mapUv:He&&x(M.map.channel),aoMapUv:re&&x(M.aoMap.channel),lightMapUv:te&&x(M.lightMap.channel),bumpMapUv:Q&&x(M.bumpMap.channel),normalMapUv:L&&x(M.normalMap.channel),displacementMapUv:$&&x(M.displacementMap.channel),emissiveMapUv:oe&&x(M.emissiveMap.channel),metalnessMapUv:J&&x(M.metalnessMap.channel),roughnessMapUv:Ne&&x(M.roughnessMap.channel),anisotropyMapUv:Y&&x(M.anisotropyMap.channel),clearcoatMapUv:Ce&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:de&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&x(M.sheenRoughnessMap.channel),specularMapUv:Ie&&x(M.specularMap.channel),specularColorMapUv:xe&&x(M.specularColorMap.channel),specularIntensityMapUv:Je&&x(M.specularIntensityMap.channel),transmissionMapUv:F&&x(M.transmissionMap.channel),thicknessMapUv:he&&x(M.thicknessMap.channel),alphaMapUv:Ee&&x(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(L||Oe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!H.attributes.uv&&(He||Ee),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ge,skinning:k.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:We,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:$e,decodeVideoTexture:He&&M.map.isVideoTexture===!0&&tt.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:oe&&M.emissiveMap.isVideoTexture===!0&&tt.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Rn,flipSided:M.side===It,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Pe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&M.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function p(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)b.push(I),b.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(_(b,M),y(b,M),b.push(r.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function _(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function y(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const b=m[M.type];let I;if(b){const U=Cn[b];I=Yr.clone(U.uniforms)}else I=M.uniforms;return I}function A(M,b){let I;for(let U=0,k=u.length;U<k;U++){const q=u[U];if(q.cacheKey===b){I=q,++I.usedTimes;break}}return I===void 0&&(I=new IS(r,b,M,s),u.push(I)),I}function E(M){if(--M.usedTimes===0){const b=u.indexOf(M);u[b]=u[u.length-1],u.pop(),M.destroy()}}function R(M){l.remove(M)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:E,releaseShaderCache:R,programs:u,dispose:P}}function NS(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function OS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function dd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function fd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,m,x,g){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:x,group:g},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=x,p.group=g),e++,p}function a(h,d,f,m,x,g){const p=o(h,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,m,x,g){const p=o(h,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||OS),n.length>1&&n.sort(d||dd),i.length>1&&i.sort(d||dd)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function BS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new fd,r.set(n,[o])):i>=s.length?(o=new fd,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function kS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new ee};break;case"SpotLight":t={position:new w,direction:new w,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":t={color:new ee,position:new w,halfWidth:new w,halfHeight:new w};break}return r[e.id]=t,t}}}function zS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let VS=0;function HS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function GS(r){const e=new kS,t=zS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);const i=new w,s=new Ue,o=new Ue;function a(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,_=0,y=0,v=0,A=0,E=0,R=0;c.sort(HS);for(let M=0,b=c.length;M<b;M++){const I=c[M],U=I.color,k=I.intensity,q=I.distance,H=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=U.r*k,h+=U.g*k,d+=U.b*k;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],k);R++}else if(I.isDirectionalLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Z=I.shadow,z=t.get(I);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=I.shadow.matrix,_++}n.directional[f]=X,f++}else if(I.isSpotLight){const X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(U).multiplyScalar(k),X.distance=q,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[x]=X;const Z=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,Z.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[x]=Z.matrix,I.castShadow){const z=t.get(I);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=H,v++}x++}else if(I.isRectAreaLight){const X=e.get(I);X.color.copy(U).multiplyScalar(k),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=X,g++}else if(I.isPointLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){const Z=I.shadow,z=t.get(I);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,z.shadowCameraNear=Z.camera.near,z.shadowCameraFar=Z.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=I.shadow.matrix,y++}n.point[m]=X,m++}else if(I.isHemisphereLight){const X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(k),X.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[p]=X,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==_||P.numPointShadows!==y||P.numSpotShadows!==v||P.numSpotMaps!==A||P.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,P.directionalLength=f,P.pointLength=m,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=_,P.numPointShadows=y,P.numSpotShadows=v,P.numSpotMaps=A,P.numLightProbes=R,n.version=VS++)}function l(c,u){let h=0,d=0,f=0,m=0,x=0;const g=u.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){const y=c[p];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),h++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function pd(r){const e=new GS(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function WS(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new pd(r),e.set(i,[a])):s>=o.length?(a=new pd(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const XS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qS=`uniform sampler2D shadow_pass;
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
}`;function YS(r,e,t){let n=new Qs;const i=new K,s=new K,o=new it,a=new ah({depthPacking:df}),l=new lh,c={},u=t.maxTextureSize,h={[Gn]:It,[It]:Gn,[Rn]:Rn},d=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:XS,fragmentShader:qS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ye;m.setAttribute("position",new ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new qe(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let p=this.type;this.render=function(E,R,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const M=r.getRenderTarget(),b=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),U=r.state;U.setBlending(Hn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=p!==On&&this.type===On,q=p===On&&this.type!==On;for(let H=0,X=E.length;H<X;H++){const Z=E[H],z=Z.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const ue=z.getFrameExtents();if(i.multiply(ue),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ue.x),i.x=s.x*ue.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ue.y),i.y=s.y*ue.y,z.mapSize.y=s.y)),z.map===null||k===!0||q===!0){const Me=this.type!==On?{minFilter:Ft,magFilter:Ft}:{};z.map!==null&&z.map.dispose(),z.map=new fn(i.x,i.y,Me),z.map.texture.name=Z.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const fe=z.getViewportCount();for(let Me=0;Me<fe;Me++){const We=z.getViewport(Me);o.set(s.x*We.x,s.y*We.y,s.x*We.z,s.y*We.w),U.viewport(o),z.updateMatrices(Z,Me),n=z.getFrustum(),v(R,P,z.camera,Z,this.type)}z.isPointLightShadow!==!0&&this.type===On&&_(z,P),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(M,b,I)};function _(E,R){const P=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new fn(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(R,null,P,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(R,null,P,f,x,null)}function y(E,R,P,M){let b=null;const I=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)b=I;else if(b=P.isPointLight===!0?l:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=b.uuid,k=R.uuid;let q=c[U];q===void 0&&(q={},c[U]=q);let H=q[k];H===void 0&&(H=b.clone(),q[k]=H,R.addEventListener("dispose",A)),b=H}if(b.visible=R.visible,b.wireframe=R.wireframe,M===On?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:h[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const U=r.properties.get(b);U.light=P}return b}function v(E,R,P,M,b){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===On)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const k=e.update(E),q=E.material;if(Array.isArray(q)){const H=k.groups;for(let X=0,Z=H.length;X<Z;X++){const z=H[X],ue=q[z.materialIndex];if(ue&&ue.visible){const fe=y(E,ue,M,b);E.onBeforeShadow(r,E,R,P,k,fe,z),r.renderBufferDirect(P,null,k,fe,E,z),E.onAfterShadow(r,E,R,P,k,fe,z)}}}else if(q.visible){const H=y(E,q,M,b);E.onBeforeShadow(r,E,R,P,k,H,null),r.renderBufferDirect(P,null,k,H,E,null),E.onAfterShadow(r,E,R,P,k,H,null)}}const U=E.children;for(let k=0,q=U.length;k<q;k++)v(U[k],R,P,M,b)}function A(E){E.target.removeEventListener("dispose",A);for(const P in c){const M=c[P],b=E.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const $S={[ia]:sa,[ra]:la,[oa]:ca,[ts]:aa,[sa]:ia,[la]:ra,[ca]:oa,[aa]:ts};function ZS(r,e){function t(){let F=!1;const he=new it;let pe=null;const Ee=new it(0,0,0,0);return{setMask:function(le){pe!==le&&!F&&(r.colorMask(le,le,le,le),pe=le)},setLocked:function(le){F=le},setClear:function(le,se,Pe,$e,ft){ft===!0&&(le*=$e,se*=$e,Pe*=$e),he.set(le,se,Pe,$e),Ee.equals(he)===!1&&(r.clearColor(le,se,Pe,$e),Ee.copy(he))},reset:function(){F=!1,pe=null,Ee.set(-1,0,0,0)}}}function n(){let F=!1,he=!1,pe=null,Ee=null,le=null;return{setReversed:function(se){if(he!==se){const Pe=e.get("EXT_clip_control");se?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),he=se;const $e=le;le=null,this.setClear($e)}},getReversed:function(){return he},setTest:function(se){se?ne(r.DEPTH_TEST):ge(r.DEPTH_TEST)},setMask:function(se){pe!==se&&!F&&(r.depthMask(se),pe=se)},setFunc:function(se){if(he&&(se=$S[se]),Ee!==se){switch(se){case ia:r.depthFunc(r.NEVER);break;case sa:r.depthFunc(r.ALWAYS);break;case ra:r.depthFunc(r.LESS);break;case ts:r.depthFunc(r.LEQUAL);break;case oa:r.depthFunc(r.EQUAL);break;case aa:r.depthFunc(r.GEQUAL);break;case la:r.depthFunc(r.GREATER);break;case ca:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ee=se}},setLocked:function(se){F=se},setClear:function(se){le!==se&&(he&&(se=1-se),r.clearDepth(se),le=se)},reset:function(){F=!1,pe=null,Ee=null,le=null,he=!1}}}function i(){let F=!1,he=null,pe=null,Ee=null,le=null,se=null,Pe=null,$e=null,ft=null;return{setTest:function(lt){F||(lt?ne(r.STENCIL_TEST):ge(r.STENCIL_TEST))},setMask:function(lt){he!==lt&&!F&&(r.stencilMask(lt),he=lt)},setFunc:function(lt,Xn,Ln){(pe!==lt||Ee!==Xn||le!==Ln)&&(r.stencilFunc(lt,Xn,Ln),pe=lt,Ee=Xn,le=Ln)},setOp:function(lt,Xn,Ln){(se!==lt||Pe!==Xn||$e!==Ln)&&(r.stencilOp(lt,Xn,Ln),se=lt,Pe=Xn,$e=Ln)},setLocked:function(lt){F=lt},setClear:function(lt){ft!==lt&&(r.clearStencil(lt),ft=lt)},reset:function(){F=!1,he=null,pe=null,Ee=null,le=null,se=null,Pe=null,$e=null,ft=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,_=null,y=null,v=null,A=null,E=null,R=new ee(0,0,0),P=0,M=!1,b=null,I=null,U=null,k=null,q=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(z)[1]),X=Z>=1):z.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),X=Z>=2);let ue=null,fe={};const Me=r.getParameter(r.SCISSOR_BOX),We=r.getParameter(r.VIEWPORT),Xe=new it().fromArray(Me),Qe=new it().fromArray(We);function et(F,he,pe,Ee){const le=new Uint8Array(4),se=r.createTexture();r.bindTexture(F,se),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Pe=0;Pe<pe;Pe++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,Ee,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(he+Pe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return se}const j={};j[r.TEXTURE_2D]=et(r.TEXTURE_2D,r.TEXTURE_2D,1),j[r.TEXTURE_CUBE_MAP]=et(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[r.TEXTURE_2D_ARRAY]=et(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),j[r.TEXTURE_3D]=et(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(r.DEPTH_TEST),o.setFunc(ts),Q(!1),L(Sc),ne(r.CULL_FACE),re(Hn);function ne(F){u[F]!==!0&&(r.enable(F),u[F]=!0)}function ge(F){u[F]!==!1&&(r.disable(F),u[F]=!1)}function Ae(F,he){return h[F]!==he?(r.bindFramebuffer(F,he),h[F]=he,F===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=he),F===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=he),!0):!1}function be(F,he){let pe=f,Ee=!1;if(F){pe=d.get(he),pe===void 0&&(pe=[],d.set(he,pe));const le=F.textures;if(pe.length!==le.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let se=0,Pe=le.length;se<Pe;se++)pe[se]=r.COLOR_ATTACHMENT0+se;pe.length=le.length,Ee=!0}}else pe[0]!==r.BACK&&(pe[0]=r.BACK,Ee=!0);Ee&&r.drawBuffers(pe)}function He(F){return m!==F?(r.useProgram(F),m=F,!0):!1}const at={[gi]:r.FUNC_ADD,[Ld]:r.FUNC_SUBTRACT,[Fd]:r.FUNC_REVERSE_SUBTRACT};at[Ud]=r.MIN,at[Nd]=r.MAX;const D={[Od]:r.ZERO,[Bd]:r.ONE,[kd]:r.SRC_COLOR,[ta]:r.SRC_ALPHA,[Xd]:r.SRC_ALPHA_SATURATE,[Gd]:r.DST_COLOR,[Vd]:r.DST_ALPHA,[zd]:r.ONE_MINUS_SRC_COLOR,[na]:r.ONE_MINUS_SRC_ALPHA,[Wd]:r.ONE_MINUS_DST_COLOR,[Hd]:r.ONE_MINUS_DST_ALPHA,[qd]:r.CONSTANT_COLOR,[Yd]:r.ONE_MINUS_CONSTANT_COLOR,[$d]:r.CONSTANT_ALPHA,[Zd]:r.ONE_MINUS_CONSTANT_ALPHA};function re(F,he,pe,Ee,le,se,Pe,$e,ft,lt){if(F===Hn){x===!0&&(ge(r.BLEND),x=!1);return}if(x===!1&&(ne(r.BLEND),x=!0),F!==Dd){if(F!==g||lt!==M){if((p!==gi||v!==gi)&&(r.blendEquation(r.FUNC_ADD),p=gi,v=gi),lt)switch(F){case ji:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Yt:r.blendFunc(r.ONE,r.ONE);break;case Mc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case bc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ji:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Yt:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Mc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}_=null,y=null,A=null,E=null,R.set(0,0,0),P=0,g=F,M=lt}return}le=le||he,se=se||pe,Pe=Pe||Ee,(he!==p||le!==v)&&(r.blendEquationSeparate(at[he],at[le]),p=he,v=le),(pe!==_||Ee!==y||se!==A||Pe!==E)&&(r.blendFuncSeparate(D[pe],D[Ee],D[se],D[Pe]),_=pe,y=Ee,A=se,E=Pe),($e.equals(R)===!1||ft!==P)&&(r.blendColor($e.r,$e.g,$e.b,ft),R.copy($e),P=ft),g=F,M=!1}function te(F,he){F.side===Rn?ge(r.CULL_FACE):ne(r.CULL_FACE);let pe=F.side===It;he&&(pe=!pe),Q(pe),F.blending===ji&&F.transparent===!1?re(Hn):re(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const Ee=F.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),oe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ne(r.SAMPLE_ALPHA_TO_COVERAGE):ge(r.SAMPLE_ALPHA_TO_COVERAGE)}function Q(F){b!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),b=F)}function L(F){F!==Rd?(ne(r.CULL_FACE),F!==I&&(F===Sc?r.cullFace(r.BACK):F===Pd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ge(r.CULL_FACE),I=F}function $(F){F!==U&&(X&&r.lineWidth(F),U=F)}function oe(F,he,pe){F?(ne(r.POLYGON_OFFSET_FILL),(k!==he||q!==pe)&&(r.polygonOffset(he,pe),k=he,q=pe)):ge(r.POLYGON_OFFSET_FILL)}function J(F){F?ne(r.SCISSOR_TEST):ge(r.SCISSOR_TEST)}function Ne(F){F===void 0&&(F=r.TEXTURE0+H-1),ue!==F&&(r.activeTexture(F),ue=F)}function Oe(F,he,pe){pe===void 0&&(ue===null?pe=r.TEXTURE0+H-1:pe=ue);let Ee=fe[pe];Ee===void 0&&(Ee={type:void 0,texture:void 0},fe[pe]=Ee),(Ee.type!==F||Ee.texture!==he)&&(ue!==pe&&(r.activeTexture(pe),ue=pe),r.bindTexture(F,he||j[F]),Ee.type=F,Ee.texture=he)}function C(){const F=fe[ue];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function O(){try{r.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{r.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{r.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{r.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{r.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{r.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{r.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{r.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{r.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(F){Xe.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Xe.copy(F))}function Ve(F){Qe.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Qe.copy(F))}function Ie(F,he){let pe=c.get(he);pe===void 0&&(pe=new WeakMap,c.set(he,pe));let Ee=pe.get(F);Ee===void 0&&(Ee=r.getUniformBlockIndex(he,F.name),pe.set(F,Ee))}function xe(F,he){const Ee=c.get(he).get(F);l.get(he)!==Ee&&(r.uniformBlockBinding(he,Ee,F.__bindingPointIndex),l.set(he,Ee))}function Je(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ue=null,fe={},h={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,_=null,y=null,v=null,A=null,E=null,R=new ee(0,0,0),P=0,M=!1,b=null,I=null,U=null,k=null,q=null,Xe.set(0,0,r.canvas.width,r.canvas.height),Qe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:ge,bindFramebuffer:Ae,drawBuffers:be,useProgram:He,setBlending:re,setMaterial:te,setFlipSided:Q,setCullFace:L,setLineWidth:$,setPolygonOffset:oe,setScissorTest:J,activeTexture:Ne,bindTexture:Oe,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:O,texImage2D:Te,texImage3D:ae,updateUBOMapping:Ie,uniformBlockBinding:xe,texStorage2D:de,texStorage3D:ve,texSubImage2D:V,texSubImage3D:ie,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ce,scissor:Se,viewport:Ve,reset:Je}}function KS(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new K,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,S){return f?new OffscreenCanvas(C,S):Nr("canvas")}function x(C,S,O){let V=1;const ie=Oe(C);if((ie.width>O||ie.height>O)&&(V=O/Math.max(ie.width,ie.height)),V<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(V*ie.width),Ce=Math.floor(V*ie.height);h===void 0&&(h=m(Y,Ce));const de=S?m(Y,Ce):h;return de.width=Y,de.height=Ce,de.getContext("2d").drawImage(C,0,0,Y,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Y+"x"+Ce+")."),de}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(C,S,O,V,ie=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=S;if(S===r.RED&&(O===r.FLOAT&&(Y=r.R32F),O===r.HALF_FLOAT&&(Y=r.R16F),O===r.UNSIGNED_BYTE&&(Y=r.R8)),S===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.R8UI),O===r.UNSIGNED_SHORT&&(Y=r.R16UI),O===r.UNSIGNED_INT&&(Y=r.R32UI),O===r.BYTE&&(Y=r.R8I),O===r.SHORT&&(Y=r.R16I),O===r.INT&&(Y=r.R32I)),S===r.RG&&(O===r.FLOAT&&(Y=r.RG32F),O===r.HALF_FLOAT&&(Y=r.RG16F),O===r.UNSIGNED_BYTE&&(Y=r.RG8)),S===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RG8UI),O===r.UNSIGNED_SHORT&&(Y=r.RG16UI),O===r.UNSIGNED_INT&&(Y=r.RG32UI),O===r.BYTE&&(Y=r.RG8I),O===r.SHORT&&(Y=r.RG16I),O===r.INT&&(Y=r.RG32I)),S===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),O===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),O===r.UNSIGNED_INT&&(Y=r.RGB32UI),O===r.BYTE&&(Y=r.RGB8I),O===r.SHORT&&(Y=r.RGB16I),O===r.INT&&(Y=r.RGB32I)),S===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),O===r.UNSIGNED_INT&&(Y=r.RGBA32UI),O===r.BYTE&&(Y=r.RGBA8I),O===r.SHORT&&(Y=r.RGBA16I),O===r.INT&&(Y=r.RGBA32I)),S===r.RGB&&(O===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),O===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),S===r.RGBA){const Ce=ie?Fr:tt.getTransfer(V);O===r.FLOAT&&(Y=r.RGBA32F),O===r.HALF_FLOAT&&(Y=r.RGBA16F),O===r.UNSIGNED_BYTE&&(Y=Ce===ct?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(C,S){let O;return C?S===null||S===ri||S===is?O=r.DEPTH24_STENCIL8:S===nn?O=r.DEPTH32F_STENCIL8:S===Vs&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ri||S===is?O=r.DEPTH_COMPONENT24:S===nn?O=r.DEPTH_COMPONENT32F:S===Vs&&(O=r.DEPTH_COMPONENT16),O}function A(C,S){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ft&&C.minFilter!==pt?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function E(C){const S=C.target;S.removeEventListener("dispose",E),P(S),S.isVideoTexture&&u.delete(S)}function R(C){const S=C.target;S.removeEventListener("dispose",R),b(S)}function P(C){const S=n.get(C);if(S.__webglInit===void 0)return;const O=C.source,V=d.get(O);if(V){const ie=V[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&M(C),Object.keys(V).length===0&&d.delete(O)}n.remove(C)}function M(C){const S=n.get(C);r.deleteTexture(S.__webglTexture);const O=C.source,V=d.get(O);delete V[S.__cacheKey],o.memory.textures--}function b(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(S.__webglFramebuffer[V]))for(let ie=0;ie<S.__webglFramebuffer[V].length;ie++)r.deleteFramebuffer(S.__webglFramebuffer[V][ie]);else r.deleteFramebuffer(S.__webglFramebuffer[V]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[V])}else{if(Array.isArray(S.__webglFramebuffer))for(let V=0;V<S.__webglFramebuffer.length;V++)r.deleteFramebuffer(S.__webglFramebuffer[V]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let V=0;V<S.__webglColorRenderbuffer.length;V++)S.__webglColorRenderbuffer[V]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[V]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=C.textures;for(let V=0,ie=O.length;V<ie;V++){const Y=n.get(O[V]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(O[V])}n.remove(C)}let I=0;function U(){I=0}function k(){const C=I;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),I+=1,C}function q(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function H(C,S){const O=n.get(C);if(C.isVideoTexture&&J(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const V=C.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(O,C,S);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+S)}function X(C,S){const O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){j(O,C,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+S)}function Z(C,S){const O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){j(O,C,S);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+S)}function z(C,S){const O=n.get(C);if(C.version>0&&O.__version!==C.version){ne(O,C,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+S)}const ue={[yi]:r.REPEAT,[tn]:r.CLAMP_TO_EDGE,[ns]:r.MIRRORED_REPEAT},fe={[Ft]:r.NEAREST,[Oc]:r.NEAREST_MIPMAP_NEAREST,[Ns]:r.NEAREST_MIPMAP_LINEAR,[pt]:r.LINEAR,[Sr]:r.LINEAR_MIPMAP_NEAREST,[_n]:r.LINEAR_MIPMAP_LINEAR},Me={[pf]:r.NEVER,[_f]:r.ALWAYS,[mf]:r.LESS,[qc]:r.LEQUAL,[gf]:r.EQUAL,[yf]:r.GEQUAL,[xf]:r.GREATER,[vf]:r.NOTEQUAL};function We(C,S){if(S.type===nn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===pt||S.magFilter===Sr||S.magFilter===Ns||S.magFilter===_n||S.minFilter===pt||S.minFilter===Sr||S.minFilter===Ns||S.minFilter===_n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,ue[S.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ue[S.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ue[S.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,fe[S.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,fe[S.minFilter]),S.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ft||S.minFilter!==Ns&&S.minFilter!==_n||S.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Xe(C,S){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",E));const V=S.source;let ie=d.get(V);ie===void 0&&(ie={},d.set(V,ie));const Y=q(S);if(Y!==C.__cacheKey){ie[Y]===void 0&&(ie[Y]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ie[Y].usedTimes++;const Ce=ie[C.__cacheKey];Ce!==void 0&&(ie[C.__cacheKey].usedTimes--,Ce.usedTimes===0&&M(S)),C.__cacheKey=Y,C.__webglTexture=ie[Y].texture}return O}function Qe(C,S,O){return Math.floor(Math.floor(C/O)/S)}function et(C,S,O,V){const Y=C.updateRanges;if(Y.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,O,V,S.data);else{Y.sort((ae,Se)=>ae.start-Se.start);let Ce=0;for(let ae=1;ae<Y.length;ae++){const Se=Y[Ce],Ve=Y[ae],Ie=Se.start+Se.count,xe=Qe(Ve.start,S.width,4),Je=Qe(Se.start,S.width,4);Ve.start<=Ie+1&&xe===Je&&Qe(Ve.start+Ve.count-1,S.width,4)===xe?Se.count=Math.max(Se.count,Ve.start+Ve.count-Se.start):(++Ce,Y[Ce]=Ve)}Y.length=Ce+1;const de=r.getParameter(r.UNPACK_ROW_LENGTH),ve=r.getParameter(r.UNPACK_SKIP_PIXELS),Te=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let ae=0,Se=Y.length;ae<Se;ae++){const Ve=Y[ae],Ie=Math.floor(Ve.start/4),xe=Math.ceil(Ve.count/4),Je=Ie%S.width,F=Math.floor(Ie/S.width),he=xe,pe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Je),r.pixelStorei(r.UNPACK_SKIP_ROWS,F),t.texSubImage2D(r.TEXTURE_2D,0,Je,F,he,pe,O,V,S.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,de),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,Te)}}function j(C,S,O){let V=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(V=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(V=r.TEXTURE_3D);const ie=Xe(C,S),Y=S.source;t.bindTexture(V,C.__webglTexture,r.TEXTURE0+O);const Ce=n.get(Y);if(Y.version!==Ce.__version||ie===!0){t.activeTexture(r.TEXTURE0+O);const de=tt.getPrimaries(tt.workingColorSpace),ve=S.colorSpace===ei?null:tt.getPrimaries(S.colorSpace),Te=S.colorSpace===ei||de===ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ae=x(S.image,!1,i.maxTextureSize);ae=Ne(S,ae);const Se=s.convert(S.format,S.colorSpace),Ve=s.convert(S.type);let Ie=y(S.internalFormat,Se,Ve,S.colorSpace,S.isVideoTexture);We(V,S);let xe;const Je=S.mipmaps,F=S.isVideoTexture!==!0,he=Ce.__version===void 0||ie===!0,pe=Y.dataReady,Ee=A(S,ae);if(S.isDepthTexture)Ie=v(S.format===Gs,S.type),he&&(F?t.texStorage2D(r.TEXTURE_2D,1,Ie,ae.width,ae.height):t.texImage2D(r.TEXTURE_2D,0,Ie,ae.width,ae.height,0,Se,Ve,null));else if(S.isDataTexture)if(Je.length>0){F&&he&&t.texStorage2D(r.TEXTURE_2D,Ee,Ie,Je[0].width,Je[0].height);for(let le=0,se=Je.length;le<se;le++)xe=Je[le],F?pe&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,xe.width,xe.height,Se,Ve,xe.data):t.texImage2D(r.TEXTURE_2D,le,Ie,xe.width,xe.height,0,Se,Ve,xe.data);S.generateMipmaps=!1}else F?(he&&t.texStorage2D(r.TEXTURE_2D,Ee,Ie,ae.width,ae.height),pe&&et(S,ae,Se,Ve)):t.texImage2D(r.TEXTURE_2D,0,Ie,ae.width,ae.height,0,Se,Ve,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){F&&he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ee,Ie,Je[0].width,Je[0].height,ae.depth);for(let le=0,se=Je.length;le<se;le++)if(xe=Je[le],S.format!==zt)if(Se!==null)if(F){if(pe)if(S.layerUpdates.size>0){const Pe=Dc(xe.width,xe.height,S.format,S.type);for(const $e of S.layerUpdates){const ft=xe.data.subarray($e*Pe/xe.data.BYTES_PER_ELEMENT,($e+1)*Pe/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,$e,xe.width,xe.height,1,Se,ft)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,xe.width,xe.height,ae.depth,Se,xe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,le,Ie,xe.width,xe.height,ae.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?pe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,xe.width,xe.height,ae.depth,Se,Ve,xe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,le,Ie,xe.width,xe.height,ae.depth,0,Se,Ve,xe.data)}else{F&&he&&t.texStorage2D(r.TEXTURE_2D,Ee,Ie,Je[0].width,Je[0].height);for(let le=0,se=Je.length;le<se;le++)xe=Je[le],S.format!==zt?Se!==null?F?pe&&t.compressedTexSubImage2D(r.TEXTURE_2D,le,0,0,xe.width,xe.height,Se,xe.data):t.compressedTexImage2D(r.TEXTURE_2D,le,Ie,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?pe&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,xe.width,xe.height,Se,Ve,xe.data):t.texImage2D(r.TEXTURE_2D,le,Ie,xe.width,xe.height,0,Se,Ve,xe.data)}else if(S.isDataArrayTexture)if(F){if(he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ee,Ie,ae.width,ae.height,ae.depth),pe)if(S.layerUpdates.size>0){const le=Dc(ae.width,ae.height,S.format,S.type);for(const se of S.layerUpdates){const Pe=ae.data.subarray(se*le/ae.data.BYTES_PER_ELEMENT,(se+1)*le/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,se,ae.width,ae.height,1,Se,Ve,Pe)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Se,Ve,ae.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ie,ae.width,ae.height,ae.depth,0,Se,Ve,ae.data);else if(S.isData3DTexture)F?(he&&t.texStorage3D(r.TEXTURE_3D,Ee,Ie,ae.width,ae.height,ae.depth),pe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Se,Ve,ae.data)):t.texImage3D(r.TEXTURE_3D,0,Ie,ae.width,ae.height,ae.depth,0,Se,Ve,ae.data);else if(S.isFramebufferTexture){if(he)if(F)t.texStorage2D(r.TEXTURE_2D,Ee,Ie,ae.width,ae.height);else{let le=ae.width,se=ae.height;for(let Pe=0;Pe<Ee;Pe++)t.texImage2D(r.TEXTURE_2D,Pe,Ie,le,se,0,Se,Ve,null),le>>=1,se>>=1}}else if(Je.length>0){if(F&&he){const le=Oe(Je[0]);t.texStorage2D(r.TEXTURE_2D,Ee,Ie,le.width,le.height)}for(let le=0,se=Je.length;le<se;le++)xe=Je[le],F?pe&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,Se,Ve,xe):t.texImage2D(r.TEXTURE_2D,le,Ie,Se,Ve,xe);S.generateMipmaps=!1}else if(F){if(he){const le=Oe(ae);t.texStorage2D(r.TEXTURE_2D,Ee,Ie,le.width,le.height)}pe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Se,Ve,ae)}else t.texImage2D(r.TEXTURE_2D,0,Ie,Se,Ve,ae);g(S)&&p(V),Ce.__version=Y.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ne(C,S,O){if(S.image.length!==6)return;const V=Xe(C,S),ie=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+O);const Y=n.get(ie);if(ie.version!==Y.__version||V===!0){t.activeTexture(r.TEXTURE0+O);const Ce=tt.getPrimaries(tt.workingColorSpace),de=S.colorSpace===ei?null:tt.getPrimaries(S.colorSpace),ve=S.colorSpace===ei||Ce===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Te=S.isCompressedTexture||S.image[0].isCompressedTexture,ae=S.image[0]&&S.image[0].isDataTexture,Se=[];for(let se=0;se<6;se++)!Te&&!ae?Se[se]=x(S.image[se],!0,i.maxCubemapSize):Se[se]=ae?S.image[se].image:S.image[se],Se[se]=Ne(S,Se[se]);const Ve=Se[0],Ie=s.convert(S.format,S.colorSpace),xe=s.convert(S.type),Je=y(S.internalFormat,Ie,xe,S.colorSpace),F=S.isVideoTexture!==!0,he=Y.__version===void 0||V===!0,pe=ie.dataReady;let Ee=A(S,Ve);We(r.TEXTURE_CUBE_MAP,S);let le;if(Te){F&&he&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ee,Je,Ve.width,Ve.height);for(let se=0;se<6;se++){le=Se[se].mipmaps;for(let Pe=0;Pe<le.length;Pe++){const $e=le[Pe];S.format!==zt?Ie!==null?F?pe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,$e.width,$e.height,Ie,$e.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,Je,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,$e.width,$e.height,Ie,xe,$e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,Je,$e.width,$e.height,0,Ie,xe,$e.data)}}}else{if(le=S.mipmaps,F&&he){le.length>0&&Ee++;const se=Oe(Se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ee,Je,se.width,se.height)}for(let se=0;se<6;se++)if(ae){F?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Se[se].width,Se[se].height,Ie,xe,Se[se].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Je,Se[se].width,Se[se].height,0,Ie,xe,Se[se].data);for(let Pe=0;Pe<le.length;Pe++){const ft=le[Pe].image[se].image;F?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,ft.width,ft.height,Ie,xe,ft.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,Je,ft.width,ft.height,0,Ie,xe,ft.data)}}else{F?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ie,xe,Se[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Je,Ie,xe,Se[se]);for(let Pe=0;Pe<le.length;Pe++){const $e=le[Pe];F?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,Ie,xe,$e.image[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,Je,Ie,xe,$e.image[se])}}}g(S)&&p(r.TEXTURE_CUBE_MAP),Y.__version=ie.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ge(C,S,O,V,ie,Y){const Ce=s.convert(O.format,O.colorSpace),de=s.convert(O.type),ve=y(O.internalFormat,Ce,de,O.colorSpace),Te=n.get(S),ae=n.get(O);if(ae.__renderTarget=S,!Te.__hasExternalTextures){const Se=Math.max(1,S.width>>Y),Ve=Math.max(1,S.height>>Y);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,Y,ve,Se,Ve,S.depth,0,Ce,de,null):t.texImage2D(ie,Y,ve,Se,Ve,0,Ce,de,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),oe(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,V,ie,ae.__webglTexture,0,$(S)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,V,ie,ae.__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(C,S,O){if(r.bindRenderbuffer(r.RENDERBUFFER,C),S.depthBuffer){const V=S.depthTexture,ie=V&&V.isDepthTexture?V.type:null,Y=v(S.stencilBuffer,ie),Ce=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=$(S);oe(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de,Y,S.width,S.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,de,Y,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Y,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ce,r.RENDERBUFFER,C)}else{const V=S.textures;for(let ie=0;ie<V.length;ie++){const Y=V[ie],Ce=s.convert(Y.format,Y.colorSpace),de=s.convert(Y.type),ve=y(Y.internalFormat,Ce,de,Y.colorSpace),Te=$(S);O&&oe(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,ve,S.width,S.height):oe(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Te,ve,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ve,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=n.get(S.depthTexture);V.__renderTarget=S,(!V.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);const ie=V.__webglTexture,Y=$(S);if(S.depthTexture.format===Hs)oe(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0);else if(S.depthTexture.format===Gs)oe(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function He(C){const S=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const V=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),V){const ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,V.removeEventListener("dispose",ie)};V.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=V}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const V=C.texture.mipmaps;V&&V.length>0?be(S.__webglFramebuffer[0],C):be(S.__webglFramebuffer,C)}else if(O){S.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[V]),S.__webglDepthbuffer[V]===void 0)S.__webglDepthbuffer[V]=r.createRenderbuffer(),Ae(S.__webglDepthbuffer[V],C,!1);else{const ie=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[V];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,Y)}}else{const V=C.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Ae(S.__webglDepthbuffer,C,!1);else{const ie=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,Y)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function at(C,S,O){const V=n.get(C);S!==void 0&&ge(V.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&He(C)}function D(C){const S=C.texture,O=n.get(C),V=n.get(S);C.addEventListener("dispose",R);const ie=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Ce=ie.length>1;if(Ce||(V.__webglTexture===void 0&&(V.__webglTexture=r.createTexture()),V.__version=S.version,o.memory.textures++),Y){O.__webglFramebuffer=[];for(let de=0;de<6;de++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[de]=[];for(let ve=0;ve<S.mipmaps.length;ve++)O.__webglFramebuffer[de][ve]=r.createFramebuffer()}else O.__webglFramebuffer[de]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let de=0;de<S.mipmaps.length;de++)O.__webglFramebuffer[de]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(Ce)for(let de=0,ve=ie.length;de<ve;de++){const Te=n.get(ie[de]);Te.__webglTexture===void 0&&(Te.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&oe(C)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let de=0;de<ie.length;de++){const ve=ie[de];O.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[de]);const Te=s.convert(ve.format,ve.colorSpace),ae=s.convert(ve.type),Se=y(ve.internalFormat,Te,ae,ve.colorSpace,C.isXRRenderTarget===!0),Ve=$(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve,Se,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,O.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Ae(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture),We(r.TEXTURE_CUBE_MAP,S);for(let de=0;de<6;de++)if(S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)ge(O.__webglFramebuffer[de][ve],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve);else ge(O.__webglFramebuffer[de],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(S)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let de=0,ve=ie.length;de<ve;de++){const Te=ie[de],ae=n.get(Te);let Se=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Se=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Se,ae.__webglTexture),We(Se,Te),ge(O.__webglFramebuffer,C,Te,r.COLOR_ATTACHMENT0+de,Se,0),g(Te)&&p(Se)}t.unbindTexture()}else{let de=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,V.__webglTexture),We(de,S),S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)ge(O.__webglFramebuffer[ve],C,S,r.COLOR_ATTACHMENT0,de,ve);else ge(O.__webglFramebuffer,C,S,r.COLOR_ATTACHMENT0,de,0);g(S)&&p(de),t.unbindTexture()}C.depthBuffer&&He(C)}function re(C){const S=C.textures;for(let O=0,V=S.length;O<V;O++){const ie=S[O];if(g(ie)){const Y=_(C),Ce=n.get(ie).__webglTexture;t.bindTexture(Y,Ce),p(Y),t.unbindTexture()}}}const te=[],Q=[];function L(C){if(C.samples>0){if(oe(C)===!1){const S=C.textures,O=C.width,V=C.height;let ie=r.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=n.get(C),de=S.length>1;if(de)for(let Te=0;Te<S.length;Te++)t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const ve=C.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Te=0;Te<S.length;Te++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),de){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[Te]);const ae=n.get(S[Te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ae,0)}r.blitFramebuffer(0,0,O,V,0,0,O,V,ie,r.NEAREST),l===!0&&(te.length=0,Q.length=0,te.push(r.COLOR_ATTACHMENT0+Te),C.depthBuffer&&C.resolveDepthBuffer===!1&&(te.push(Y),Q.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Q)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let Te=0;Te<S.length;Te++){t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[Te]);const ae=n.get(S[Te]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,ae,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function $(C){return Math.min(i.maxSamples,C.samples)}function oe(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function J(C){const S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function Ne(C,S){const O=C.colorSpace,V=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==ss&&O!==ei&&(tt.getTransfer(O)===ct?(V!==zt||ie!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function Oe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=z,this.rebindTextures=at,this.setupRenderTarget=D,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=oe}function Tp(r,e){function t(n,i=ei){let s;const o=tt.getTransfer(i);if(n===dn)return r.UNSIGNED_BYTE;if(n===Ya)return r.UNSIGNED_SHORT_4_4_4_4;if(n===$a)return r.UNSIGNED_SHORT_5_5_5_1;if(n===zc)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Vc)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bc)return r.BYTE;if(n===kc)return r.SHORT;if(n===Vs)return r.UNSIGNED_SHORT;if(n===qa)return r.INT;if(n===ri)return r.UNSIGNED_INT;if(n===nn)return r.FLOAT;if(n===bi)return r.HALF_FLOAT;if(n===Hc)return r.ALPHA;if(n===Gc)return r.RGB;if(n===zt)return r.RGBA;if(n===Hs)return r.DEPTH_COMPONENT;if(n===Gs)return r.DEPTH_STENCIL;if(n===Ws)return r.RED;if(n===qr)return r.RED_INTEGER;if(n===Wc)return r.RG;if(n===Za)return r.RG_INTEGER;if(n===Ka)return r.RGBA_INTEGER;if(n===Mr||n===br||n===wr||n===Er)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Mr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Mr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===br)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ha||n===ua||n===da||n===fa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ha)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ua)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===da)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pa||n===ma||n===ga)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===pa||n===ma)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ga)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xa||n===va||n===ya||n===_a||n===Sa||n===Ma||n===ba||n===wa||n===Ea||n===Ta||n===Aa||n===Ca||n===Ra||n===Pa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===xa)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===va)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ya)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_a)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sa)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ma)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ba)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wa)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ea)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ta)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Aa)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ca)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ra)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pa)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ia||n===Da||n===La)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ia)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Da)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===La)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fa||n===Ua||n===Na||n===Oa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Fa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ua)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Na)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const JS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jS=`
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

}`;class QS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new eh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new St({vertexShader:JS,fragmentShader:jS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eM extends Wn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null;const x=typeof XRWebGLBinding<"u",g=new QS,p={},_=t.getContextAttributes();let y=null,v=null;const A=[],E=[],R=new K;let P=null;const M=new Pt;M.viewport=new it;const b=new Pt;b.viewport=new it;const I=[M,b],U=new mp;let k=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=A[j];return ne===void 0&&(ne=new Jo,A[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=A[j];return ne===void 0&&(ne=new Jo,A[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=A[j];return ne===void 0&&(ne=new Jo,A[j]=ne),ne.getHandSpace()};function H(j){const ne=E.indexOf(j.inputSource);if(ne===-1)return;const ge=A[ne];ge!==void 0&&(ge.update(j.inputSource,j.frame,c||o),ge.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",Z);for(let j=0;j<A.length;j++){const ne=E[j];ne!==null&&(E[j]=null,A[j].disconnect(ne))}k=null,q=null,g.reset();for(const j in p)delete p[j];e.setRenderTarget(y),f=null,d=null,h=null,i=null,v=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",X),i.addEventListener("inputsourceschange",Z),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Ae=null,be=null;_.depth&&(be=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=_.stencil?Gs:Hs,Ae=_.stencil?is:ri);const He={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(He),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new fn(d.textureWidth,d.textureHeight,{format:zt,type:dn,depthTexture:new al(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ge={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new fn(f.framebufferWidth,f.framebufferHeight,{format:zt,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(j){for(let ne=0;ne<j.removed.length;ne++){const ge=j.removed[ne],Ae=E.indexOf(ge);Ae>=0&&(E[Ae]=null,A[Ae].disconnect(ge))}for(let ne=0;ne<j.added.length;ne++){const ge=j.added[ne];let Ae=E.indexOf(ge);if(Ae===-1){for(let He=0;He<A.length;He++)if(He>=E.length){E.push(ge),Ae=He;break}else if(E[He]===null){E[He]=ge,Ae=He;break}if(Ae===-1)break}const be=A[Ae];be&&be.connect(ge)}}const z=new w,ue=new w;function fe(j,ne,ge){z.setFromMatrixPosition(ne.matrixWorld),ue.setFromMatrixPosition(ge.matrixWorld);const Ae=z.distanceTo(ue),be=ne.projectionMatrix.elements,He=ge.projectionMatrix.elements,at=be[14]/(be[10]-1),D=be[14]/(be[10]+1),re=(be[9]+1)/be[5],te=(be[9]-1)/be[5],Q=(be[8]-1)/be[0],L=(He[8]+1)/He[0],$=at*Q,oe=at*L,J=Ae/(-Q+L),Ne=J*-Q;if(ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ne),j.translateZ(J),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),be[10]===-1)j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Oe=at+J,C=D+J,S=$-Ne,O=oe+(Ae-Ne),V=re*D/C*Oe,ie=te*D/C*Oe;j.projectionMatrix.makePerspective(S,O,V,ie,Oe,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Me(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ne=j.near,ge=j.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(ge=g.depthFar)),U.near=b.near=M.near=ne,U.far=b.far=M.far=ge,(k!==U.near||q!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),k=U.near,q=U.far),U.layers.mask=j.layers.mask|6,M.layers.mask=U.layers.mask&3,b.layers.mask=U.layers.mask&5;const Ae=j.parent,be=U.cameras;Me(U,Ae);for(let He=0;He<be.length;He++)Me(be[He],Ae);be.length===2?fe(U,M,b):U.projectionMatrix.copy(M.projectionMatrix),We(j,U,Ae)};function We(j,ne,ge){ge===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(ge.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=qs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(j){return p[j]};let Xe=null;function Qe(j,ne){if(u=ne.getViewerPose(c||o),m=ne,u!==null){const ge=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ae=!1;ge.length!==U.cameras.length&&(U.cameras.length=0,Ae=!0);for(let D=0;D<ge.length;D++){const re=ge[D];let te=null;if(f!==null)te=f.getViewport(re);else{const L=h.getViewSubImage(d,re);te=L.viewport,D===0&&(e.setRenderTargetTextures(v,L.colorTexture,L.depthStencilTexture),e.setRenderTarget(v))}let Q=I[D];Q===void 0&&(Q=new Pt,Q.layers.enable(D),Q.viewport=new it,I[D]=Q),Q.matrix.fromArray(re.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(re.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(te.x,te.y,te.width,te.height),D===0&&(U.matrix.copy(Q.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ae===!0&&U.cameras.push(Q)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const D=h.getDepthInformation(ge[0]);D&&D.isValid&&D.texture&&g.init(D,i.renderState)}if(be&&be.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let D=0;D<ge.length;D++){const re=ge[D].camera;if(re){let te=p[re];te||(te=new eh,p[re]=te);const Q=h.getCameraImage(re);te.sourceTexture=Q}}}}for(let ge=0;ge<A.length;ge++){const Ae=E[ge],be=A[ge];Ae!==null&&be!==void 0&&be.update(Ae,ne,c||o)}Xe&&Xe(j,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),m=null}const et=new Sp;et.setAnimationLoop(Qe),this.setAnimationLoop=function(j){Xe=j},this.dispose=function(){}}}const Gi=new pn,tM=new Ue;function nM(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ef(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,_,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,_,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===It&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===It&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const _=e.get(p),y=_.envMap,v=_.envMapRotation;y&&(g.envMap.value=y,Gi.copy(v),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),g.envMapRotation.value.setFromMatrix4(tM.makeRotationFromEuler(Gi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===It&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const _=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function iM(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const v=y.program;n.uniformBlockBinding(_,v)}function c(_,y){let v=i[_.id];v===void 0&&(m(_),v=u(_),i[_.id]=v,_.addEventListener("dispose",g));const A=y.program;n.updateUBOMapping(_,A);const E=e.render.frame;s[_.id]!==E&&(d(_),s[_.id]=E)}function u(_){const y=h();_.__bindingPointIndex=y;const v=r.createBuffer(),A=_.__size,E=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,A,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=i[_.id],v=_.uniforms,A=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let E=0,R=v.length;E<R;E++){const P=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,b=P.length;M<b;M++){const I=P[M];if(f(I,E,M,A)===!0){const U=I.__offset,k=Array.isArray(I.value)?I.value:[I.value];let q=0;for(let H=0;H<k.length;H++){const X=k[H],Z=x(X);typeof X=="number"||typeof X=="boolean"?(I.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,U+q,I.__data)):X.isMatrix3?(I.__data[0]=X.elements[0],I.__data[1]=X.elements[1],I.__data[2]=X.elements[2],I.__data[3]=0,I.__data[4]=X.elements[3],I.__data[5]=X.elements[4],I.__data[6]=X.elements[5],I.__data[7]=0,I.__data[8]=X.elements[6],I.__data[9]=X.elements[7],I.__data[10]=X.elements[8],I.__data[11]=0):(X.toArray(I.__data,q),q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,y,v,A){const E=_.value,R=y+"_"+v;if(A[R]===void 0)return typeof E=="number"||typeof E=="boolean"?A[R]=E:A[R]=E.clone(),!0;{const P=A[R];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return A[R]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function m(_){const y=_.uniforms;let v=0;const A=16;for(let R=0,P=y.length;R<P;R++){const M=Array.isArray(y[R])?y[R]:[y[R]];for(let b=0,I=M.length;b<I;b++){const U=M[b],k=Array.isArray(U.value)?U.value:[U.value];for(let q=0,H=k.length;q<H;q++){const X=k[q],Z=x(X),z=v%A,ue=z%Z.boundary,fe=z+ue;v+=ue,fe!==0&&A-fe<Z.storage&&(v+=A-fe),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=Z.storage}}}const E=v%A;return E>0&&(v+=A-E),_.__size=v,_.__cache={},this}function x(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function g(_){const y=_.target;y.removeEventListener("dispose",g);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Ap{constructor(e={}){const{canvas:t=Mf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const _=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=Et;let E=0,R=0,P=null,M=-1,b=null;const I=new it,U=new it;let k=null;const q=new ee(0);let H=0,X=t.width,Z=t.height,z=1,ue=null,fe=null;const Me=new it(0,0,X,Z),We=new it(0,0,X,Z);let Xe=!1;const Qe=new Qs;let et=!1,j=!1;const ne=new Ue,ge=new w,Ae=new it,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function at(){return P===null?z:1}let D=n;function re(T,N){return t.getContext(T,N)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wa}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",le,!1),D===null){const N="webgl2";if(D=re(N,T),D===null)throw re(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let te,Q,L,$,oe,J,Ne,Oe,C,S,O,V,ie,Y,Ce,de,ve,Te,ae,Se,Ve,Ie,xe,Je;function F(){te=new m_(D),te.init(),Ie=new Tp(D,te),Q=new l_(D,te,e,Ie),L=new ZS(D,te),Q.reversedDepthBuffer&&d&&L.buffers.depth.setReversed(!0),$=new v_(D),oe=new NS,J=new KS(D,te,L,oe,Q,Ie,$),Ne=new h_(v),Oe=new p_(v),C=new wx(D),xe=new o_(D,C),S=new g_(D,C,$,xe),O=new __(D,S,C,$),ae=new y_(D,Q,J),de=new c_(oe),V=new US(v,Ne,Oe,te,Q,xe,de),ie=new nM(v,oe),Y=new BS,Ce=new WS(te),Te=new r_(v,Ne,Oe,L,O,f,l),ve=new YS(v,O,Q),Je=new iM(D,$,Q,L),Se=new a_(D,te,$),Ve=new x_(D,te,$),$.programs=V.programs,v.capabilities=Q,v.extensions=te,v.properties=oe,v.renderLists=Y,v.shadowMap=ve,v.state=L,v.info=$}F();const he=new eM(v,D);this.xr=he,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=te.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=te.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(X,Z,!1))},this.getSize=function(T){return T.set(X,Z)},this.setSize=function(T,N,G=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,Z=N,t.width=Math.floor(T*z),t.height=Math.floor(N*z),G===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(X*z,Z*z).floor()},this.setDrawingBufferSize=function(T,N,G){X=T,Z=N,z=G,t.width=Math.floor(T*G),t.height=Math.floor(N*G),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(Me)},this.setViewport=function(T,N,G,W){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,N,G,W),L.viewport(I.copy(Me).multiplyScalar(z).round())},this.getScissor=function(T){return T.copy(We)},this.setScissor=function(T,N,G,W){T.isVector4?We.set(T.x,T.y,T.z,T.w):We.set(T,N,G,W),L.scissor(U.copy(We).multiplyScalar(z).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(T){L.setScissorTest(Xe=T)},this.setOpaqueSort=function(T){ue=T},this.setTransparentSort=function(T){fe=T},this.getClearColor=function(T){return T.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,G=!0){let W=0;if(T){let B=!1;if(P!==null){const ce=P.texture.format;B=ce===Ka||ce===Za||ce===qr}if(B){const ce=P.texture.type,ye=ce===dn||ce===ri||ce===Vs||ce===is||ce===Ya||ce===$a,Re=Te.getClearColor(),we=Te.getClearAlpha(),ke=Re.r,Ge=Re.g,Fe=Re.b;ye?(m[0]=ke,m[1]=Ge,m[2]=Fe,m[3]=we,D.clearBufferuiv(D.COLOR,0,m)):(x[0]=ke,x[1]=Ge,x[2]=Fe,x[3]=we,D.clearBufferiv(D.COLOR,0,x))}else W|=D.COLOR_BUFFER_BIT}N&&(W|=D.DEPTH_BUFFER_BIT),G&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Te.dispose(),Y.dispose(),Ce.dispose(),oe.dispose(),Ne.dispose(),Oe.dispose(),O.dispose(),xe.dispose(),Je.dispose(),V.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ln),he.removeEventListener("sessionend",Lh),Ci.stop()};function pe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=$.autoReset,N=ve.enabled,G=ve.autoUpdate,W=ve.needsUpdate,B=ve.type;F(),$.autoReset=T,ve.enabled=N,ve.autoUpdate=G,ve.needsUpdate=W,ve.type=B}function le(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function se(T){const N=T.target;N.removeEventListener("dispose",se),Pe(N)}function Pe(T){$e(T),oe.remove(T)}function $e(T){const N=oe.get(T).programs;N!==void 0&&(N.forEach(function(G){V.releaseProgram(G)}),T.isShaderMaterial&&V.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,G,W,B,ce){N===null&&(N=be);const ye=B.isMesh&&B.matrixWorld.determinant()<0,Re=Fp(T,N,G,W,B);L.setMaterial(W,ye);let we=G.index,ke=1;if(W.wireframe===!0){if(we=S.getWireframeAttribute(G),we===void 0)return;ke=2}const Ge=G.drawRange,Fe=G.attributes.position;let nt=Ge.start*ke,ht=(Ge.start+Ge.count)*ke;ce!==null&&(nt=Math.max(nt,ce.start*ke),ht=Math.min(ht,(ce.start+ce.count)*ke)),we!==null?(nt=Math.max(nt,0),ht=Math.min(ht,we.count)):Fe!=null&&(nt=Math.max(nt,0),ht=Math.min(ht,Fe.count));const yt=ht-nt;if(yt<0||yt===1/0)return;xe.setup(B,W,Re,G,we);let mt,dt=Se;if(we!==null&&(mt=C.get(we),dt=Ve,dt.setIndex(mt)),B.isMesh)W.wireframe===!0?(L.setLineWidth(W.wireframeLinewidth*at()),dt.setMode(D.LINES)):dt.setMode(D.TRIANGLES);else if(B.isLine){let Be=W.linewidth;Be===void 0&&(Be=1),L.setLineWidth(Be*at()),B.isLineSegments?dt.setMode(D.LINES):B.isLineLoop?dt.setMode(D.LINE_LOOP):dt.setMode(D.LINE_STRIP)}else B.isPoints?dt.setMode(D.POINTS):B.isSprite&&dt.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Or("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))dt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Be=B._multiDrawStarts,gt=B._multiDrawCounts,ot=B._multiDrawCount,rn=we?C.get(we).bytesPerElement:1,us=oe.get(W).currentProgram.getUniforms();for(let on=0;on<ot;on++)us.setValue(D,"_gl_DrawID",on),dt.render(Be[on]/rn,gt[on])}else if(B.isInstancedMesh)dt.renderInstances(nt,yt,B.count);else if(G.isInstancedBufferGeometry){const Be=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,gt=Math.min(G.instanceCount,Be);dt.renderInstances(nt,yt,gt)}else dt.render(nt,yt)};function ft(T,N,G){T.transparent===!0&&T.side===Rn&&T.forceSinglePass===!1?(T.side=It,T.needsUpdate=!0,eo(T,N,G),T.side=Gn,T.needsUpdate=!0,eo(T,N,G),T.side=Rn):eo(T,N,G)}this.compile=function(T,N,G=null){G===null&&(G=T),p=Ce.get(G),p.init(N),y.push(p),G.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),T!==G&&T.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const W=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ce=B.material;if(ce)if(Array.isArray(ce))for(let ye=0;ye<ce.length;ye++){const Re=ce[ye];ft(Re,G,B),W.add(Re)}else ft(ce,G,B),W.add(ce)}),p=y.pop(),W},this.compileAsync=function(T,N,G=null){const W=this.compile(T,N,G);return new Promise(B=>{function ce(){if(W.forEach(function(ye){oe.get(ye).currentProgram.isReady()&&W.delete(ye)}),W.size===0){B(T);return}setTimeout(ce,10)}te.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let lt=null;function Xn(T){lt&&lt(T)}function Ln(){Ci.stop()}function Lh(){Ci.start()}const Ci=new Sp;Ci.setAnimationLoop(Xn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(T){lt=T,he.setAnimationLoop(T),T===null?Ci.stop():Ci.start()},he.addEventListener("sessionstart",Ln),he.addEventListener("sessionend",Lh),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(N),N=he.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,N,P),p=Ce.get(T,y.length),p.init(N),y.push(p),ne.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Qe.setFromProjectionMatrix(ne,hn,N.reversedDepth),j=this.localClippingEnabled,et=de.init(this.clippingPlanes,j),g=Y.get(T,_.length),g.init(),_.push(g),he.enabled===!0&&he.isPresenting===!0){const ce=v.xr.getDepthSensingMesh();ce!==null&&bl(ce,N,-1/0,v.sortObjects)}bl(T,N,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ue,fe),He=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,He&&Te.addToRenderList(g,T),this.info.render.frame++,et===!0&&de.beginShadows();const G=p.state.shadowsArray;ve.render(G,T,N),et===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=g.opaque,B=g.transmissive;if(p.setupLights(),N.isArrayCamera){const ce=N.cameras;if(B.length>0)for(let ye=0,Re=ce.length;ye<Re;ye++){const we=ce[ye];Uh(W,B,T,we)}He&&Te.render(T);for(let ye=0,Re=ce.length;ye<Re;ye++){const we=ce[ye];Fh(g,T,we,we.viewport)}}else B.length>0&&Uh(W,B,T,N),He&&Te.render(T),Fh(g,T,N);P!==null&&R===0&&(J.updateMultisampleRenderTarget(P),J.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(v,T,N),xe.resetDefaultState(),M=-1,b=null,y.pop(),y.length>0?(p=y[y.length-1],et===!0&&de.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function bl(T,N,G,W){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Qe.intersectsSprite(T)){W&&Ae.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ne);const ye=O.update(T),Re=T.material;Re.visible&&g.push(T,ye,Re,G,Ae.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Qe.intersectsObject(T))){const ye=O.update(T),Re=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ae.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ae.copy(ye.boundingSphere.center)),Ae.applyMatrix4(T.matrixWorld).applyMatrix4(ne)),Array.isArray(Re)){const we=ye.groups;for(let ke=0,Ge=we.length;ke<Ge;ke++){const Fe=we[ke],nt=Re[Fe.materialIndex];nt&&nt.visible&&g.push(T,ye,nt,G,Ae.z,Fe)}}else Re.visible&&g.push(T,ye,Re,G,Ae.z,null)}}const ce=T.children;for(let ye=0,Re=ce.length;ye<Re;ye++)bl(ce[ye],N,G,W)}function Fh(T,N,G,W){const B=T.opaque,ce=T.transmissive,ye=T.transparent;p.setupLightsView(G),et===!0&&de.setGlobalState(v.clippingPlanes,G),W&&L.viewport(I.copy(W)),B.length>0&&Qr(B,N,G),ce.length>0&&Qr(ce,N,G),ye.length>0&&Qr(ye,N,G),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function Uh(T,N,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new fn(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?bi:dn,minFilter:_n,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ce=p.state.transmissionRenderTarget[W.id],ye=W.viewport||I;ce.setSize(ye.z*v.transmissionResolutionScale,ye.w*v.transmissionResolutionScale);const Re=v.getRenderTarget(),we=v.getActiveCubeFace(),ke=v.getActiveMipmapLevel();v.setRenderTarget(ce),v.getClearColor(q),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear(),He&&Te.render(G);const Ge=v.toneMapping;v.toneMapping=ni;const Fe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),et===!0&&de.setGlobalState(v.clippingPlanes,W),Qr(T,G,W),J.updateMultisampleRenderTarget(ce),J.updateRenderTargetMipmap(ce),te.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let ht=0,yt=N.length;ht<yt;ht++){const mt=N[ht],dt=mt.object,Be=mt.geometry,gt=mt.material,ot=mt.group;if(gt.side===Rn&&dt.layers.test(W.layers)){const rn=gt.side;gt.side=It,gt.needsUpdate=!0,Nh(dt,G,W,Be,gt,ot),gt.side=rn,gt.needsUpdate=!0,nt=!0}}nt===!0&&(J.updateMultisampleRenderTarget(ce),J.updateRenderTargetMipmap(ce))}v.setRenderTarget(Re,we,ke),v.setClearColor(q,H),Fe!==void 0&&(W.viewport=Fe),v.toneMapping=Ge}function Qr(T,N,G){const W=N.isScene===!0?N.overrideMaterial:null;for(let B=0,ce=T.length;B<ce;B++){const ye=T[B],Re=ye.object,we=ye.geometry,ke=ye.group;let Ge=ye.material;Ge.allowOverride===!0&&W!==null&&(Ge=W),Re.layers.test(G.layers)&&Nh(Re,N,G,we,Ge,ke)}}function Nh(T,N,G,W,B,ce){T.onBeforeRender(v,N,G,W,B,ce),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(v,N,G,W,T,ce),B.transparent===!0&&B.side===Rn&&B.forceSinglePass===!1?(B.side=It,B.needsUpdate=!0,v.renderBufferDirect(G,N,W,B,T,ce),B.side=Gn,B.needsUpdate=!0,v.renderBufferDirect(G,N,W,B,T,ce),B.side=Rn):v.renderBufferDirect(G,N,W,B,T,ce),T.onAfterRender(v,N,G,W,B,ce)}function eo(T,N,G){N.isScene!==!0&&(N=be);const W=oe.get(T),B=p.state.lights,ce=p.state.shadowsArray,ye=B.state.version,Re=V.getParameters(T,B.state,ce,N,G),we=V.getProgramCacheKey(Re);let ke=W.programs;W.environment=T.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(T.isMeshStandardMaterial?Oe:Ne).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",se),ke=new Map,W.programs=ke);let Ge=ke.get(we);if(Ge!==void 0){if(W.currentProgram===Ge&&W.lightsStateVersion===ye)return Bh(T,Re),Ge}else Re.uniforms=V.getUniforms(T),T.onBeforeCompile(Re,v),Ge=V.acquireProgram(Re,we),ke.set(we,Ge),W.uniforms=Re.uniforms;const Fe=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=de.uniform),Bh(T,Re),W.needsLights=Np(T),W.lightsStateVersion=ye,W.needsLights&&(Fe.ambientLightColor.value=B.state.ambient,Fe.lightProbe.value=B.state.probe,Fe.directionalLights.value=B.state.directional,Fe.directionalLightShadows.value=B.state.directionalShadow,Fe.spotLights.value=B.state.spot,Fe.spotLightShadows.value=B.state.spotShadow,Fe.rectAreaLights.value=B.state.rectArea,Fe.ltc_1.value=B.state.rectAreaLTC1,Fe.ltc_2.value=B.state.rectAreaLTC2,Fe.pointLights.value=B.state.point,Fe.pointLightShadows.value=B.state.pointShadow,Fe.hemisphereLights.value=B.state.hemi,Fe.directionalShadowMap.value=B.state.directionalShadowMap,Fe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Fe.spotShadowMap.value=B.state.spotShadowMap,Fe.spotLightMatrix.value=B.state.spotLightMatrix,Fe.spotLightMap.value=B.state.spotLightMap,Fe.pointShadowMap.value=B.state.pointShadowMap,Fe.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Ge,W.uniformsList=null,Ge}function Oh(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=jo.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function Bh(T,N){const G=oe.get(T);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Fp(T,N,G,W,B){N.isScene!==!0&&(N=be),J.resetTextureUnits();const ce=N.fog,ye=W.isMeshStandardMaterial?N.environment:null,Re=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ss,we=(W.isMeshStandardMaterial?Oe:Ne).get(W.envMap||ye),ke=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ge=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Fe=!!G.morphAttributes.position,nt=!!G.morphAttributes.normal,ht=!!G.morphAttributes.color;let yt=ni;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(yt=v.toneMapping);const mt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,dt=mt!==void 0?mt.length:0,Be=oe.get(W),gt=p.state.lights;if(et===!0&&(j===!0||T!==b)){const Wt=T===b&&W.id===M;de.setState(W,T,Wt)}let ot=!1;W.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==gt.state.version||Be.outputColorSpace!==Re||B.isBatchedMesh&&Be.batching===!1||!B.isBatchedMesh&&Be.batching===!0||B.isBatchedMesh&&Be.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Be.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Be.instancing===!1||!B.isInstancedMesh&&Be.instancing===!0||B.isSkinnedMesh&&Be.skinning===!1||!B.isSkinnedMesh&&Be.skinning===!0||B.isInstancedMesh&&Be.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Be.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Be.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Be.instancingMorph===!1&&B.morphTexture!==null||Be.envMap!==we||W.fog===!0&&Be.fog!==ce||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==de.numPlanes||Be.numIntersection!==de.numIntersection)||Be.vertexAlphas!==ke||Be.vertexTangents!==Ge||Be.morphTargets!==Fe||Be.morphNormals!==nt||Be.morphColors!==ht||Be.toneMapping!==yt||Be.morphTargetsCount!==dt)&&(ot=!0):(ot=!0,Be.__version=W.version);let rn=Be.currentProgram;ot===!0&&(rn=eo(W,N,B));let us=!1,on=!1,rr=!1;const xt=rn.getUniforms(),mn=Be.uniforms;if(L.useProgram(rn.program)&&(us=!0,on=!0,rr=!0),W.id!==M&&(M=W.id,on=!0),us||b!==T){L.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),xt.setValue(D,"projectionMatrix",T.projectionMatrix),xt.setValue(D,"viewMatrix",T.matrixWorldInverse);const Zt=xt.map.cameraPosition;Zt!==void 0&&Zt.setValue(D,ge.setFromMatrixPosition(T.matrixWorld)),Q.logarithmicDepthBuffer&&xt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&xt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,on=!0,rr=!0)}if(B.isSkinnedMesh){xt.setOptional(D,B,"bindMatrix"),xt.setOptional(D,B,"bindMatrixInverse");const Wt=B.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),xt.setValue(D,"boneTexture",Wt.boneTexture,J))}B.isBatchedMesh&&(xt.setOptional(D,B,"batchingTexture"),xt.setValue(D,"batchingTexture",B._matricesTexture,J),xt.setOptional(D,B,"batchingIdTexture"),xt.setValue(D,"batchingIdTexture",B._indirectTexture,J),xt.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&xt.setValue(D,"batchingColorTexture",B._colorsTexture,J));const gn=G.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&ae.update(B,G,rn),(on||Be.receiveShadow!==B.receiveShadow)&&(Be.receiveShadow=B.receiveShadow,xt.setValue(D,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(mn.envMap.value=we,mn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(mn.envMapIntensity.value=N.environmentIntensity),on&&(xt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&Up(mn,rr),ce&&W.fog===!0&&ie.refreshFogUniforms(mn,ce),ie.refreshMaterialUniforms(mn,W,z,Z,p.state.transmissionRenderTarget[T.id]),jo.upload(D,Oh(Be),mn,J)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(jo.upload(D,Oh(Be),mn,J),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&xt.setValue(D,"center",B.center),xt.setValue(D,"modelViewMatrix",B.modelViewMatrix),xt.setValue(D,"normalMatrix",B.normalMatrix),xt.setValue(D,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Wt=W.uniformsGroups;for(let Zt=0,wl=Wt.length;Zt<wl;Zt++){const Ri=Wt[Zt];Je.update(Ri,rn),Je.bind(Ri,rn)}}return rn}function Up(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Np(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,N,G){const W=oe.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),oe.get(T.texture).__webglTexture=N,oe.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){const G=oe.get(T);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0};const Op=D.createFramebuffer();this.setRenderTarget=function(T,N=0,G=0){P=T,E=N,R=G;let W=!0,B=null,ce=!1,ye=!1;if(T){const we=oe.get(T);if(we.__useDefaultFramebuffer!==void 0)L.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(we.__webglFramebuffer===void 0)J.setupRenderTarget(T);else if(we.__hasExternalTextures)J.rebindTextures(T,oe.get(T.texture).__webglTexture,oe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Fe=T.depthTexture;if(we.__boundDepthTexture!==Fe){if(Fe!==null&&oe.has(Fe)&&(T.width!==Fe.image.width||T.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(T)}}const ke=T.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ye=!0);const Ge=oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ge[N])?B=Ge[N][G]:B=Ge[N],ce=!0):T.samples>0&&J.useMultisampledRTT(T)===!1?B=oe.get(T).__webglMultisampledFramebuffer:Array.isArray(Ge)?B=Ge[G]:B=Ge,I.copy(T.viewport),U.copy(T.scissor),k=T.scissorTest}else I.copy(Me).multiplyScalar(z).floor(),U.copy(We).multiplyScalar(z).floor(),k=Xe;if(G!==0&&(B=Op),L.bindFramebuffer(D.FRAMEBUFFER,B)&&W&&L.drawBuffers(T,B),L.viewport(I),L.scissor(U),L.setScissorTest(k),ce){const we=oe.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,we.__webglTexture,G)}else if(ye){const we=N;for(let ke=0;ke<T.textures.length;ke++){const Ge=oe.get(T.textures[ke]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ke,Ge.__webglTexture,G,we)}}else if(T!==null&&G!==0){const we=oe.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,we.__webglTexture,G)}M=-1},this.readRenderTargetPixels=function(T,N,G,W,B,ce,ye,Re=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){L.bindFramebuffer(D.FRAMEBUFFER,we);try{const ke=T.textures[Re],Ge=ke.format,Fe=ke.type;if(!Q.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-W&&G>=0&&G<=T.height-B&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Re),D.readPixels(N,G,W,B,Ie.convert(Ge),Ie.convert(Fe),ce))}finally{const ke=P!==null?oe.get(P).__webglFramebuffer:null;L.bindFramebuffer(D.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(T,N,G,W,B,ce,ye,Re=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we)if(N>=0&&N<=T.width-W&&G>=0&&G<=T.height-B){L.bindFramebuffer(D.FRAMEBUFFER,we);const ke=T.textures[Re],Ge=ke.format,Fe=ke.type;if(!Q.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,nt),D.bufferData(D.PIXEL_PACK_BUFFER,ce.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Re),D.readPixels(N,G,W,B,Ie.convert(Ge),Ie.convert(Fe),0);const ht=P!==null?oe.get(P).__webglFramebuffer:null;L.bindFramebuffer(D.FRAMEBUFFER,ht);const yt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Wm(D,yt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,nt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ce),D.deleteBuffer(nt),D.deleteSync(yt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,G=0){const W=Math.pow(2,-G),B=Math.floor(T.image.width*W),ce=Math.floor(T.image.height*W),ye=N!==null?N.x:0,Re=N!==null?N.y:0;J.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,ye,Re,B,ce),L.unbindTexture()};const Bp=D.createFramebuffer(),kp=D.createFramebuffer();this.copyTextureToTexture=function(T,N,G=null,W=null,B=0,ce=null){ce===null&&(B!==0?(Or("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=B,B=0):ce=0);let ye,Re,we,ke,Ge,Fe,nt,ht,yt;const mt=T.isCompressedTexture?T.mipmaps[ce]:T.image;if(G!==null)ye=G.max.x-G.min.x,Re=G.max.y-G.min.y,we=G.isBox3?G.max.z-G.min.z:1,ke=G.min.x,Ge=G.min.y,Fe=G.isBox3?G.min.z:0;else{const gn=Math.pow(2,-B);ye=Math.floor(mt.width*gn),Re=Math.floor(mt.height*gn),T.isDataArrayTexture?we=mt.depth:T.isData3DTexture?we=Math.floor(mt.depth*gn):we=1,ke=0,Ge=0,Fe=0}W!==null?(nt=W.x,ht=W.y,yt=W.z):(nt=0,ht=0,yt=0);const dt=Ie.convert(N.format),Be=Ie.convert(N.type);let gt;N.isData3DTexture?(J.setTexture3D(N,0),gt=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(J.setTexture2DArray(N,0),gt=D.TEXTURE_2D_ARRAY):(J.setTexture2D(N,0),gt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const ot=D.getParameter(D.UNPACK_ROW_LENGTH),rn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),us=D.getParameter(D.UNPACK_SKIP_PIXELS),on=D.getParameter(D.UNPACK_SKIP_ROWS),rr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,mt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ke),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ge),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Fe);const xt=T.isDataArrayTexture||T.isData3DTexture,mn=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){const gn=oe.get(T),Wt=oe.get(N),Zt=oe.get(gn.__renderTarget),wl=oe.get(Wt.__renderTarget);L.bindFramebuffer(D.READ_FRAMEBUFFER,Zt.__webglFramebuffer),L.bindFramebuffer(D.DRAW_FRAMEBUFFER,wl.__webglFramebuffer);for(let Ri=0;Ri<we;Ri++)xt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,oe.get(T).__webglTexture,B,Fe+Ri),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,oe.get(N).__webglTexture,ce,yt+Ri)),D.blitFramebuffer(ke,Ge,ye,Re,nt,ht,ye,Re,D.DEPTH_BUFFER_BIT,D.NEAREST);L.bindFramebuffer(D.READ_FRAMEBUFFER,null),L.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||T.isRenderTargetTexture||oe.has(T)){const gn=oe.get(T),Wt=oe.get(N);L.bindFramebuffer(D.READ_FRAMEBUFFER,Bp),L.bindFramebuffer(D.DRAW_FRAMEBUFFER,kp);for(let Zt=0;Zt<we;Zt++)xt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,gn.__webglTexture,B,Fe+Zt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,gn.__webglTexture,B),mn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Wt.__webglTexture,ce,yt+Zt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Wt.__webglTexture,ce),B!==0?D.blitFramebuffer(ke,Ge,ye,Re,nt,ht,ye,Re,D.COLOR_BUFFER_BIT,D.NEAREST):mn?D.copyTexSubImage3D(gt,ce,nt,ht,yt+Zt,ke,Ge,ye,Re):D.copyTexSubImage2D(gt,ce,nt,ht,ke,Ge,ye,Re);L.bindFramebuffer(D.READ_FRAMEBUFFER,null),L.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else mn?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(gt,ce,nt,ht,yt,ye,Re,we,dt,Be,mt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(gt,ce,nt,ht,yt,ye,Re,we,dt,mt.data):D.texSubImage3D(gt,ce,nt,ht,yt,ye,Re,we,dt,Be,mt):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ce,nt,ht,ye,Re,dt,Be,mt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ce,nt,ht,mt.width,mt.height,dt,mt.data):D.texSubImage2D(D.TEXTURE_2D,ce,nt,ht,ye,Re,dt,Be,mt);D.pixelStorei(D.UNPACK_ROW_LENGTH,ot),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,us),D.pixelStorei(D.UNPACK_SKIP_ROWS,on),D.pixelStorei(D.UNPACK_SKIP_IMAGES,rr),ce===0&&N.generateMipmaps&&D.generateMipmap(gt),L.unbindTexture()},this.initRenderTarget=function(T){oe.get(T).__webglFramebuffer===void 0&&J.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?J.setTextureCube(T,0):T.isData3DTexture?J.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?J.setTexture2DArray(T,0):J.setTexture2D(T,0),L.unbindTexture()},this.resetState=function(){E=0,R=0,P=null,L.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const sM=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:tf,AddEquation:gi,AddOperation:Jd,AdditiveAnimationBlendMode:Xc,AdditiveBlending:Yt,AgXToneMapping:sf,AlphaFormat:Hc,AlwaysCompare:_f,AlwaysDepth:sa,AlwaysStencilFunc:Ec,AmbientLight:xh,AnimationAction:vp,AnimationClip:Gr,AnimationLoader:g0,AnimationMixer:W0,AnimationObjectGroup:H0,AnimationUtils:d0,ArcCurve:Bf,ArrayCamera:mp,ArrowHelper:mx,AttachedBindMode:wc,Audio:gp,AudioAnalyser:D0,AudioContext:vh,AudioListener:R0,AudioLoader:T0,AxesHelper:gx,BackSide:It,BasicDepthPacking:uf,BasicShadowMap:Xp,BatchedMesh:Lf,Bone:Qc,BooleanKeyframeTrack:cs,Box2:ex,Box3:Ht,Box3Helper:fx,BoxGeometry:oi,BoxHelper:dx,BufferAttribute:ut,BufferGeometry:Ye,BufferGeometryLoader:pp,ByteType:Bc,Cache:Vn,Camera:tl,CameraHelper:_p,CanvasTexture:Nf,CapsuleGeometry:ll,CatmullRomCurve3:kf,CineonToneMapping:ef,CircleGeometry:Zs,ClampToEdgeWrapping:tn,Clock:_l,Color:ee,ColorKeyframeTrack:uh,ColorManagement:tt,CompressedArrayTexture:Fg,CompressedCubeTexture:Ug,CompressedTexture:ol,CompressedTextureLoader:x0,ConeGeometry:Mi,ConstantAlphaFactor:$d,ConstantColorFactor:qd,Controls:vx,CubeCamera:Tf,CubeReflectionMapping:si,CubeRefractionMapping:vi,CubeTexture:$r,CubeTextureLoader:v0,CubeUVReflectionMapping:Js,CubicBezierCurve:nh,CubicBezierCurve3:zf,CubicInterpolant:sp,CullFaceBack:Sc,CullFaceFront:Pd,CullFaceFrontBack:Wp,CullFaceNone:Rd,Curve:Dn,CurvePath:Hf,CustomBlending:Dd,CustomToneMapping:nf,CylinderGeometry:zn,Cylindrical:Q0,Data3DTexture:Qa,DataArrayTexture:ja,DataTexture:Sn,DataTextureLoader:y0,DataUtils:rg,DecrementStencilOp:sm,DecrementWrapStencilOp:om,DefaultLoadingManager:fh,DepthFormat:Hs,DepthStencilFormat:Gs,DepthTexture:al,DetachedBindMode:of,DirectionalLight:gh,DirectionalLightHelper:ux,DiscreteInterpolant:rp,DodecahedronGeometry:cl,DoubleSide:Rn,DstAlphaFactor:Vd,DstColorFactor:Gd,DynamicCopyUsage:Sm,DynamicDrawUsage:mm,DynamicReadUsage:vm,EdgesGeometry:Of,EllipseCurve:hl,EqualCompare:gf,EqualDepth:oa,EqualStencilFunc:hm,EquirectangularReflectionMapping:Pr,EquirectangularRefractionMapping:Ir,Euler:pn,EventDispatcher:Wn,ExternalTexture:eh,ExtrudeGeometry:ul,FileLoader:In,Float16BufferAttribute:dg,Float32BufferAttribute:_e,FloatType:nn,Fog:_i,FogExp2:nl,FramebufferTexture:Lg,FrontSide:Gn,Frustum:Qs,FrustumArray:rl,GLBufferAttribute:Z0,GLSL1:bm,GLSL3:Tc,GreaterCompare:xf,GreaterDepth:la,GreaterEqualCompare:yf,GreaterEqualDepth:aa,GreaterEqualStencilFunc:pm,GreaterStencilFunc:dm,GridHelper:cx,Group:kn,HalfFloatType:bi,HemisphereLight:ap,HemisphereLightHelper:lx,IcosahedronGeometry:dl,ImageBitmapLoader:E0,ImageLoader:Wr,ImageUtils:bf,IncrementStencilOp:im,IncrementWrapStencilOp:rm,InstancedBufferAttribute:$s,InstancedBufferGeometry:fp,InstancedInterleavedBuffer:$0,InstancedMesh:Df,Int16BufferAttribute:hg,Int32BufferAttribute:ug,Int8BufferAttribute:ag,IntType:qa,InterleavedBuffer:il,InterleavedBufferAttribute:rs,Interpolant:Jr,InterpolateDiscrete:Dr,InterpolateLinear:Ba,InterpolateSmooth:Ko,InterpolationSamplingMode:Tm,InterpolationSamplingType:Em,InvertStencilOp:am,KeepStencilOp:Xi,KeyframeTrack:bn,LOD:Pf,LatheGeometry:fl,Layers:el,LessCompare:mf,LessDepth:ra,LessEqualCompare:qc,LessEqualDepth:ts,LessEqualStencilFunc:um,LessStencilFunc:cm,Light:Ti,LightProbe:dp,Line:Si,Line3:ix,LineBasicMaterial:Dt,LineCurve:ih,LineCurve3:Vf,LineDashedMaterial:tp,LineLoop:Ff,LineSegments:Mn,LinearFilter:pt,LinearInterpolant:hh,LinearMipMapLinearFilter:af,LinearMipMapNearestFilter:$p,LinearMipmapLinearFilter:_n,LinearMipmapNearestFilter:Sr,LinearSRGBColorSpace:ss,LinearToneMapping:jd,LinearTransfer:Fr,Loader:Gt,LoaderUtils:Ga,LoadingManager:dh,LoopOnce:lf,LoopPingPong:hf,LoopRepeat:cf,MOUSE:Hp,Material:Lt,MaterialLoader:yl,MathUtils:Le,Matrix2:bh,Matrix3:Ze,Matrix4:Ue,MaxEquation:Nd,Mesh:qe,MeshBasicMaterial:Vt,MeshDepthMaterial:ah,MeshDistanceMaterial:lh,MeshLambertMaterial:Qf,MeshMatcapMaterial:ep,MeshNormalMaterial:jf,MeshPhongMaterial:vl,MeshPhysicalMaterial:Kf,MeshStandardMaterial:jt,MeshToonMaterial:Jf,MinEquation:Ud,MirroredRepeatWrapping:ns,MixOperation:Kd,MultiplyBlending:bc,MultiplyOperation:Xr,NearestFilter:Ft,NearestMipMapLinearFilter:Yp,NearestMipMapNearestFilter:qp,NearestMipmapLinearFilter:Ns,NearestMipmapNearestFilter:Oc,NeutralToneMapping:rf,NeverCompare:pf,NeverDepth:ia,NeverStencilFunc:lm,NoBlending:Hn,NoColorSpace:ei,NoToneMapping:ni,NormalAnimationBlendMode:Ja,NormalBlending:ji,NotEqualCompare:vf,NotEqualDepth:ca,NotEqualStencilFunc:fm,NumberKeyframeTrack:Vr,Object3D:st,ObjectLoader:b0,ObjectSpaceNormalMap:ff,OctahedronGeometry:Zr,OneFactor:Bd,OneMinusConstantAlphaFactor:Zd,OneMinusConstantColorFactor:Yd,OneMinusDstAlphaFactor:Hd,OneMinusDstColorFactor:Wd,OneMinusSrcAlphaFactor:na,OneMinusSrcColorFactor:zd,OrthographicCamera:tr,PCFShadowMap:Nc,PCFSoftShadowMap:Id,PMREMGenerator:Lc,Path:Ha,PerspectiveCamera:Pt,Plane:pi,PlaneGeometry:ls,PlaneHelper:px,PointLight:cp,PointLightHelper:ox,Points:Ar,PointsMaterial:Ki,PolarGridHelper:hx,PolyhedronGeometry:Ei,PositionalAudio:I0,PropertyBinding:rt,PropertyMixer:xp,QuadraticBezierCurve:sh,QuadraticBezierCurve3:rh,Quaternion:Ut,QuaternionKeyframeTrack:jr,QuaternionLinearInterpolant:op,RED_GREEN_RGTC2_Format:Na,RED_RGTC1_Format:Fa,REVISION:Wa,RGBADepthPacking:df,RGBAFormat:zt,RGBAIntegerFormat:Ka,RGBA_ASTC_10x10_Format:Ca,RGBA_ASTC_10x5_Format:Ea,RGBA_ASTC_10x6_Format:Ta,RGBA_ASTC_10x8_Format:Aa,RGBA_ASTC_12x10_Format:Ra,RGBA_ASTC_12x12_Format:Pa,RGBA_ASTC_4x4_Format:xa,RGBA_ASTC_5x4_Format:va,RGBA_ASTC_5x5_Format:ya,RGBA_ASTC_6x5_Format:_a,RGBA_ASTC_6x6_Format:Sa,RGBA_ASTC_8x5_Format:Ma,RGBA_ASTC_8x6_Format:ba,RGBA_ASTC_8x8_Format:wa,RGBA_BPTC_Format:Ia,RGBA_ETC2_EAC_Format:ga,RGBA_PVRTC_2BPPV1_Format:fa,RGBA_PVRTC_4BPPV1_Format:da,RGBA_S3TC_DXT1_Format:br,RGBA_S3TC_DXT3_Format:wr,RGBA_S3TC_DXT5_Format:Er,RGBDepthPacking:Qp,RGBFormat:Gc,RGBIntegerFormat:Zp,RGB_BPTC_SIGNED_Format:Da,RGB_BPTC_UNSIGNED_Format:La,RGB_ETC1_Format:pa,RGB_ETC2_Format:ma,RGB_PVRTC_2BPPV1_Format:ua,RGB_PVRTC_4BPPV1_Format:ha,RGB_S3TC_DXT1_Format:Mr,RGDepthPacking:em,RGFormat:Wc,RGIntegerFormat:Za,RawShaderMaterial:Zf,Ray:js,Raycaster:Mh,RectAreaLight:hp,RedFormat:Ws,RedIntegerFormat:qr,ReinhardToneMapping:Qd,RenderTarget:$c,RenderTarget3D:X0,RepeatWrapping:yi,ReplaceStencilOp:nm,ReverseSubtractEquation:Fd,RingGeometry:er,SIGNED_RED_GREEN_RGTC2_Format:Oa,SIGNED_RED_RGTC1_Format:Ua,SRGBColorSpace:Et,SRGBTransfer:ct,Scene:Jc,ShaderChunk:je,ShaderLib:Cn,ShaderMaterial:St,ShadowMaterial:$f,Shape:es,ShapeGeometry:pl,ShapePath:xx,ShapeUtils:Pn,ShortType:kc,Skeleton:sl,SkeletonHelper:rx,SkinnedMesh:If,Source:xi,Sphere:Nt,SphereGeometry:sn,Spherical:j0,SphericalHarmonics3:up,SplineCurve:oh,SpotLight:lp,SpotLightHelper:sx,Sprite:Rf,SpriteMaterial:jc,SrcAlphaFactor:ta,SrcAlphaSaturateFactor:Xd,SrcColorFactor:kd,StaticCopyUsage:_m,StaticDrawUsage:Ur,StaticReadUsage:xm,StereoCamera:A0,StreamCopyUsage:Mm,StreamDrawUsage:gm,StreamReadUsage:ym,StringKeyframeTrack:hs,SubtractEquation:Ld,SubtractiveBlending:Mc,TOUCH:Gp,TangentSpaceNormalMap:wi,TetrahedronGeometry:ml,Texture:Mt,TextureLoader:ph,TextureUtils:bx,Timer:K0,TimestampQuery:wm,TorusGeometry:Kr,TorusKnotGeometry:gl,Triangle:en,TriangleFanDrawMode:jp,TriangleStripDrawMode:Jp,TrianglesDrawMode:Kp,TubeGeometry:xl,UVMapping:Xa,Uint16BufferAttribute:Zc,Uint32BufferAttribute:Kc,Uint8BufferAttribute:lg,Uint8ClampedBufferAttribute:cg,Uniform:Sh,UniformsGroup:Y0,UniformsLib:me,UniformsUtils:Yr,UnsignedByteType:dn,UnsignedInt101111Type:Vc,UnsignedInt248Type:is,UnsignedInt5999Type:zc,UnsignedIntType:ri,UnsignedShort4444Type:Ya,UnsignedShort5551Type:$a,UnsignedShortType:Vs,VSMShadowMap:On,Vector2:K,Vector3:w,Vector4:it,VectorKeyframeTrack:Hr,VideoFrameTexture:Dg,VideoTexture:Uf,WebGL3DRenderTarget:Zm,WebGLArrayRenderTarget:$m,WebGLCoordinateSystem:hn,WebGLCubeRenderTarget:Af,WebGLRenderTarget:fn,WebGLRenderer:Ap,WebGLUtils:Tp,WebGPUCoordinateSystem:Xs,WebXRController:Jo,WireframeGeometry:Yf,WrapAroundEnding:Lr,ZeroCurvatureEnding:$i,ZeroFactor:Od,ZeroSlopeEnding:Zi,ZeroStencilOp:tm,createCanvasElement:Mf},Symbol.toStringTag,{value:"Module"})),Uc={canvas:!!window.CanvasRenderingContext2D,webgl:(function(){try{return!!window.WebGLRenderingContext&&!!document.createElement("canvas").getContext("experimental-webgl")}catch{return!1}})(),workers:!!window.Worker,fileapi:window.File&&window.FileReader&&window.FileList&&window.Blob,getWebGLErrorMessage:function(){var r=document.createElement("div");return r.id="webgl-error-message",r.style.fontFamily="monospace",r.style.fontSize="13px",r.style.fontWeight="normal",r.style.textAlign="center",r.style.background="#fff",r.style.color="#000",r.style.padding="1.5em",r.style.width="400px",r.style.margin="5em auto 0",this.webgl||(r.innerHTML=window.WebGLRenderingContext?['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join(`
`):['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join(`
`)),r},addGetWebGLMessage:function(r){var e,t,n;r=r||{},e=r.parent!==void 0?r.parent:document.body,t=r.id!==void 0?r.id:"oldie",n=Uc.getWebGLErrorMessage(),n.id=t,e.appendChild(n)}};function rM(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Qo={exports:{}},oM=Qo.exports,md;function aM(){return md||(md=1,(function(r,e){(function(t,n){r.exports=n()})(oM,function(){var t=function(){function n(f){return o.appendChild(f.dom),f}function i(f){for(var m=0;m<o.children.length;m++)o.children[m].style.display=m===f?"block":"none";s=f}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(f){f.preventDefault(),i(++s%o.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,u=n(new t.Panel("FPS","#0ff","#002")),h=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:o,addPanel:n,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var f=(performance||Date).now();if(h.update(f-a,200),f>l+1e3&&(u.update(1e3*c/(f-l),100),l=f,c=0,d)){var m=performance.memory;d.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return f},update:function(){a=this.end()},domElement:o,setMode:i}};return t.Panel=function(n,i,s){var o=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,h=48*c,d=3*c,f=2*c,m=3*c,x=15*c,g=74*c,p=30*c,_=document.createElement("canvas");_.width=u,_.height=h,_.style.cssText="width:80px;height:48px";var y=_.getContext("2d");return y.font="bold "+9*c+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=s,y.fillRect(0,0,u,h),y.fillStyle=i,y.fillText(n,d,f),y.fillRect(m,x,g,p),y.fillStyle=s,y.globalAlpha=.9,y.fillRect(m,x,g,p),{dom:_,update:function(v,A){o=Math.min(o,v),a=Math.max(a,v),y.fillStyle=s,y.globalAlpha=1,y.fillRect(0,0,u,x),y.fillStyle=i,y.fillText(l(v)+" "+n+" ("+l(o)+"-"+l(a)+")",d,f),y.drawImage(_,m+c,x,g-c,p,m,x,g-c,p),y.fillRect(m+g-c,x,c,p),y.fillStyle=s,y.globalAlpha=.9,y.fillRect(m+g-c,x,c,l((1-v/A)*p))}}},t})})(Qo)),Qo.exports}var lM=aM();const cM=rM(lM),Qt=document.getElementById("threejs-container"),De=new Pt(70,1,1,3e4);De.position.z=80;De.fov=100;De.up=new w(0,1,1);De.layers.enable(0);De.layers.enable(1);const Cp=function(){De.aspect=Qt.offsetWidth/Qt.offsetHeight,De.updateProjectionMatrix()};window.addEventListener("resize",Cp,!1);Cp();const hM={cube:new oi(200,200,200),sky:new sn(8e3,64,64),sky2:new sn(5e3,64,64)},uM="/assets/sky-B_yyG3VD.png",dM="/assets/rock-CymjyKHO.jpg",Rp="/assets/mars-CIj7eIDb.png",Eh=new ph,Ml=Eh.load(uM),ir=Eh.load(dM);ir.magFilter=pt;ir.generateMipmaps=!0;ir.minFilter=_n;const Ai=Eh.load(Rp);Ai.magFilter=pt;Ai.generateMipmaps=!0;Ai.minFilter=_n;Ai.onLoad=()=>{console.log("Mars texture loaded successfully:",Rp)};Ai.onError=r=>{console.error("Failed to load Mars texture:",r)};const Pp=r=>{const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d");return t.fillStyle=r,t.fillRect(0,0,64,64),new Nf(e)},Th=Pp("#4a7c59"),Ah=Pp("#ffffff"),ks={sky:Ml,grass:Th,rock:ir,snow:Ah,mars:Ai};[Ml,Th,ir,Ah,Ai].forEach(r=>{r.wrapS=r.wrapT=yi});[Th,ir,Ah,Ai].forEach(r=>{r.wrapS=r.wrapT=yi});Ml.wrapS=tn;Ml.wrapT=tn;const fM=`varying float vDistance;
varying float vElevation;

void main() {
  vDistance = distance( cameraPosition, position );

  // Calculate elevation angle from camera to vertex
  vec3 worldPos = (modelMatrix * vec4(position, 1.0)).xyz;
  vec3 dirToVertex = normalize(worldPos - cameraPosition);
  vElevation = dirToVertex.z; // Z component gives us elevation (-1 to 1)

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,pM=`uniform vec3 uHorizonColor;
uniform vec3 uSkyColor;

varying float vDistance;
varying float vElevation;

void main() {
  // Use elevation angle for gradient (horizon = 0, zenith = 1, nadir = -1)
  float blend = smoothstep( -0.1, 0.6, vElevation );
  vec3 color = mix( uHorizonColor, uSkyColor, blend );
  gl_FragColor = vec4( color, 0.8 ); // Semi-transparent
}
`,mM={atmosphere:new St({uniforms:{uHorizonColor:{type:"c",value:new ee(16773592)},uSkyColor:{type:"c",value:new ee(16382463)}},vertexShader:fM,fragmentShader:pM,side:It,depthWrite:!1}),sky:new Vt({map:ks.sky,side:It})},cn=new Jc;cn.fog=new _i(0,300,1e3);const Ch=[{time:0,horizon:529954,sky:263951,intensity:.05},{time:5.5,horizon:6893642,sky:792624,intensity:.25},{time:6.8,horizon:16689010,sky:7245759,intensity:.6},{time:12,horizon:15792383,sky:12113136,intensity:1},{time:18.5,horizon:15792383,sky:12113136,intensity:.9},{time:19.5,horizon:16757626,sky:8167632,intensity:.65},{time:20.5,horizon:2699618,sky:726576,intensity:.2},{time:24,horizon:529954,sky:263951,intensity:.05}],gM=new ee(.92,.96,1);function xM(r,e=Ch){const t=(r%24+24)%24;let n=0;for(let d=0;d<e.length-1;d++){const f=e[d],m=e[d+1];if(t>=f.time&&t<=m.time){n=d;break}t>=e[e.length-1].time&&(n=e.length-1)}const i=e[n],s=e[(n+1)%e.length];let o=s.time-i.time;o<=0&&(o+=24);let a=t-i.time;a<0&&(a+=24);const l=o===0?0:Le.clamp(a/o,0,1),c=new ee(i.horizon).lerp(new ee(s.horizon),l),u=new ee(i.sky).lerp(new ee(s.sky),l),h=Le.lerp(i.intensity,s.intensity,l);return{horizonColor:c,skyColor:u,intensity:h}}function vM(r){const e=(r%24+24)%24,t=e/24*Math.PI*2,n=Math.sin((e-6)/12*Math.PI),s=(Le.clamp(n,-.35,1)+.35)/1.35,o=Le.lerp(Le.degToRad(-20),Le.degToRad(80),s);return new w(Math.cos(o)*Math.sin(t),Math.cos(o)*Math.cos(t),Math.sin(o)).normalize()}const yM=new ee(.6,.75,.98),_M=new ee(1,.75,.52),SM=new ee(.32,.44,.6),MM=new ee(.6,.48,.36),bM=new ee(.62,.76,.98),wM=new ee(.98,.68,.52),gd=new ee,Yo=new ee,xd=new ee,Wi={daylight:[{time:0,horizon:10336255,sky:2969501,intensity:.3},{time:6,horizon:12179199,sky:6261974,intensity:.8},{time:12,horizon:15004415,sky:12573951,intensity:1},{time:18,horizon:12440319,sky:7049942,intensity:.75},{time:24,horizon:10336255,sky:2969501,intensity:.3}],golden:[{time:0,horizon:1313039,sky:328457,intensity:.04},{time:5.5,horizon:8010269,sky:2299667,intensity:.22},{time:6.8,horizon:16757850,sky:8672826,intensity:.55},{time:12,horizon:16774338,sky:14993013,intensity:.95},{time:18.5,horizon:16770205,sky:13082709,intensity:.8},{time:19.5,horizon:16747579,sky:7356975,intensity:.5},{time:20.5,horizon:2822176,sky:985622,intensity:.18},{time:24,horizon:1313039,sky:328457,intensity:.04}],alpine:[{time:0,horizon:594207,sky:329747,intensity:.06},{time:5.5,horizon:5009345,sky:1845064,intensity:.28},{time:6.8,horizon:10672639,sky:4884432,intensity:.65},{time:12,horizon:15398655,sky:12115711,intensity:1},{time:18.5,horizon:13363199,sky:7779327,intensity:.85},{time:19.5,horizon:8101631,sky:3099560,intensity:.55},{time:20.5,horizon:1714767,sky:725799,intensity:.2},{time:24,horizon:594207,sky:329747,intensity:.06}],crystal:[{time:0,horizon:660514,sky:198157,intensity:.08},{time:5.5,horizon:2046575,sky:594472,intensity:.2},{time:7,horizon:4175615,sky:1525668,intensity:.55},{time:12,horizon:12252159,sky:7652095,intensity:1.05},{time:18,horizon:8245503,sky:3106248,intensity:.85},{time:20,horizon:3951016,sky:1120836,intensity:.35},{time:24,horizon:660514,sky:198157,intensity:.08}],vulcanic:[{time:0,horizon:2097923,sky:524545,intensity:.05},{time:5.5,horizon:4130564,sky:1114626,intensity:.12},{time:7,horizon:8131591,sky:2753538,intensity:.25},{time:12,horizon:8131591,sky:4130820,intensity:.4},{time:17.5,horizon:8131591,sky:2753538,intensity:.22},{time:19.5,horizon:4261637,sky:1245955,intensity:.1},{time:24,horizon:2097923,sky:524545,intensity:.05}],mars:[{time:0,horizon:2823432,sky:6040079,intensity:.08},{time:5.5,horizon:6040079,sky:6040079,intensity:.15},{time:7,horizon:9192992,sky:6040079,intensity:.35},{time:12,horizon:13003562,sky:7025944,intensity:.7},{time:17.5,horizon:11031592,sky:4858898,intensity:.5},{time:19.5,horizon:7024920,sky:6040079,intensity:.2},{time:24,horizon:2823432,sky:6040079,intensity:.08}]},mc=["Volcanic","Terrain","Snowy","Toon","Realistic","Crystal","Mars"],vd={Terrain:{name:"Terrain",skyMode:"atmosphere",fogColor:12573951,fogNearScale:.9,fogFarScale:1,horizon:15004415,skyColor:12573951,skyKeyframes:Wi.daylight},Snowy:{name:"Snowy",skyMode:"atmosphere",horizon:12573951,skyColor:16382463,fogColor:12573951,fogNearScale:250/300,fogFarScale:.9,skyKeyframes:Wi.alpine},Toon:{name:"Toon",skyMode:"orange",fogColor:9418239,fogNearScale:.85,fogFarScale:.95,skyKeyframes:Wi.golden},Realistic:{name:"Realistic",skyMode:"atmosphere",horizon:14151935,skyColor:8898559,fogColor:8963839,fogNearAbsolute:220,fogFarAbsolute:520,skyKeyframes:Wi.alpine},Volcanic:{name:"Volcanic",skyMode:"atmosphere",horizon:4395795,skyColor:1838092,fogColor:3412241,fogNearScale:.8,fogFarScale:.92,skyKeyframes:Wi.vulcanic},Crystal:{name:"Crystal",skyMode:"atmosphere",horizon:10213887,skyColor:6269183,fogColor:9683711,fogNearScale:.7,fogFarScale:.96,skyKeyframes:Wi.crystal},Mars:{name:"Mars",skyMode:"atmosphere",horizon:13003562,skyColor:7025944,fogColor:11031592,fogNearScale:.6,fogFarScale:.85,skyKeyframes:Wi.mars}};class EM{constructor(e){this.app=e}getEnvironment(e){const t=mc[e]||mc[0];return{shaderName:t,config:vd[t]||vd[mc[0]]}}applyEnvironment(e){const{scene:t,material:n}=this.app,{shaderName:i,config:s}=this.getEnvironment(e),o=this.app;t.fog||(t.fog=o.sceneFog||new _i(0,300,1e3)),o.sceneFog=t.fog,o.environmentName=i,o.baseFogNear==null&&(o.baseFogNear=t.fog.near),o.baseFogFar==null&&(o.baseFogFar=t.fog.far),o.sky&&(o.sky.visible=!0);const a=s.skyMode!=="classic";o.sky2&&(o.sky2.visible=a,a&&(s.horizon&&(n.atmosphere.uniforms.uHorizonColor.value=new ee(s.horizon)),s.skyColor&&(n.atmosphere.uniforms.uSkyColor.value=new ee(s.skyColor))));const l=o.terrain.worldWidth/1024,c=o.baseFogNear??t.fog.near??300,u=o.baseFogFar??t.fog.far??800,h=s.fogNearAbsolute!=null?s.fogNearAbsolute*l:(s.fogNearScale??1)*c*l,d=s.fogFarAbsolute!=null?s.fogFarAbsolute*l:(s.fogFarScale??1)*u*l,f=h*o.fogNearScale,m=Math.max(d*o.fogFarScale,f+1),x=Math.min(m*Math.min(o.fadeStartScale,.95),m*Math.min(o.fadeEndScale,1)-1),g=Math.max(m*Math.min(o.fadeEndScale,1),x+1);if(o.fogEnabled){const p=o.sceneFog||t.fog;p.color.set(s.fogColor??0),p.near=f,p.far=m,t.fog=p,o.terrain.updateFog(t.fog)}else t.fog=null,o.terrain.updateFog(null);return o.terrain.updateFade(x,g),o.terrain.updateSmoothFactor(o.normalSmoothFactor),o.skyKeyframes=s.skyKeyframes||Ch,{shaderName:i,config:s}}setupSky(){const e=this.app,{scene:t,texture:n,geometry:i,material:s}=this.app,o=new Vt({map:n.sky,side:It,depthWrite:!1});e.sky=new qe(i.sky,o),e.sky.visible=!0,e.sky.frustumCulled=!1,t.add(e.sky),e.sky2=new qe(i.sky2,s.atmosphere),e.sky2.renderOrder=1e4,t.add(e.sky2),t.fog||(t.fog=new _i(0,300,1e3)),e.sceneFog=t.fog,e.baseFogNear=t.fog.near,e.baseFogFar=t.fog.far}updateSun(){const e=this.app,t=xM(e.sunTime,e.skyKeyframes),n=vM(e.sunTime);e.sunDirection.copy(n),e.currentSunIntensity=e.sunStrengthBase*t.intensity;const i=new w(-n.y,n.x,0);i.lengthSq()<1e-4&&i.set(1,0,0),i.normalize(),e.ambientDirection.copy(i);const s=Le.clamp(e.sunWarmth,0,1);if(e.ambientColor.lerpColors(SM,MM,s),gd.lerpColors(yM,_M,s),e.sunLightColor.copy(gd),Yo.copy(t.skyColor),Yo.lerp(t.horizonColor,.2),Yo.lerp(gM,.55),e.skyTintColor.copy(Yo),xd.lerpColors(bM,wM,s),e.skyTintColor.lerp(xd,.35),e.terrain&&(e.terrain.updateSun(e.sunDirection,e.currentSunIntensity),e.terrain.updateSunWarmth(e.sunWarmth),e.terrain.updateAmbient(i,e.ambientStrength,e.ambientColor),e.terrain.updateSkyTint(e.skyTintColor,e.skyTintStrength)),e.updateDebugLight(),e.debugSunLight&&e.debugSunLight.color.copy(e.sunLightColor),e.debugAmbientLight&&e.debugAmbientLight.color.copy(e.ambientColor),e.material.atmosphere.uniforms.uHorizonColor&&e.material.atmosphere.uniforms.uHorizonColor.value.copy(t.horizonColor),e.material.atmosphere.uniforms.uSkyColor&&e.material.atmosphere.uniforms.uSkyColor.value.copy(t.skyColor),e.sunMesh){const o=Math.max(.35,e.currentSunIntensity);e.sunMesh.material.color.copy(e.sunLightColor).multiplyScalar(o)}e.lensFlare&&(e.lensFlare.setSunIntensity(e.currentSunIntensity),e.lensFlare.setSunColor(e.sunLightColor)),e.debugObelisk&&e.debugObelisk.isGroup&&e.debugObelisk.children.forEach(o=>{if(o.material&&o.material.uniforms){const a=o.material.uniforms;a.uSunDirection&&a.uSunDirection.value.copy(e.sunDirection),a.uSunIntensity&&(a.uSunIntensity.value=e.currentSunIntensity),a.uSunColor&&a.uSunColor.value.copy(e.sunLightColor),a.uAmbientStrength&&(a.uAmbientStrength.value=e.ambientStrength),a.uAmbientColor&&a.uAmbientColor.value.copy(e.ambientColor)}})}}class TM{constructor(e=null){this.perm=new Uint8Array(512);const t=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];let n=t;if(e!==null){n=[...t];let i=this._mulberry32(e);for(let s=n.length-1;s>0;s--){const o=Math.floor(i()*(s+1));[n[s],n[o]]=[n[o],n[s]]}}for(let i=0;i<512;i++)this.perm[i]=n[i&255]}fade(e){return e*e*e*(e*(e*6-15)+10)}lerp(e,t,n){return t+e*(n-t)}grad(e,t,n,i){const s=e&15,o=s<8?t:n,a=s<4?n:s===12||s===14?t:i;return((s&1)===0?o:-o)+((s&2)===0?a:-a)}noise(e,t,n){const i=Math.floor(e)&255,s=Math.floor(t)&255,o=Math.floor(n)&255;e-=Math.floor(e),t-=Math.floor(t),n-=Math.floor(n);const a=this.fade(e),l=this.fade(t),c=this.fade(n),u=this.perm[i]+s,h=this.perm[u]+o,d=this.perm[u+1]+o,f=this.perm[i+1]+s,m=this.perm[f]+o,x=this.perm[f+1]+o;return this.lerp(c,this.lerp(l,this.lerp(a,this.grad(this.perm[h],e,t,n),this.grad(this.perm[m],e-1,t,n)),this.lerp(a,this.grad(this.perm[d],e,t-1,n),this.grad(this.perm[x],e-1,t-1,n))),this.lerp(l,this.lerp(a,this.grad(this.perm[h+1],e,t,n-1),this.grad(this.perm[m+1],e-1,t,n-1)),this.lerp(a,this.grad(this.perm[d+1],e,t-1,n-1),this.grad(this.perm[x+1],e-1,t-1,n-1))))}noise2D(e,t){return this.noise(e,t,0)}noise1D(e){return this.noise(e,0,0)}fbm(e,t,n,i=4,s=.5,o=2){let a=0,l=1,c=1,u=0;for(let h=0;h<i;h++)a+=this.noise(e*l,t*l,n*l)*c,u+=c,c*=s,l*=o;return a/u}turbulence(e,t,n,i=4){let s=0,o=1,a=1,l=0;for(let c=0;c<i;c++)s+=Math.abs(this.noise(e*o,t*o,n*o))*a,l+=a,a*=.5,o*=2;return s/l}_mulberry32(e){return function(){let t=e+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}generate2D(e,t,n=.05){const i=new Float32Array(e*t);for(let s=0;s<t;s++)for(let o=0;o<e;o++){const a=this.noise2D(o*n,s*n);i[s*e+o]=a}return i}static thermalErosion(e,t,n,i=30,s=.01){const o=e.slice(),a=[[1,0],[-1,0],[0,1],[0,-1]];for(let l=0;l<i;l++)for(let c=1;c<n-1;c++)for(let u=1;u<t-1;u++){const h=c*t+u;let d=0,f=-1;for(const[m,x]of a){const g=(c+x)*t+(u+m),p=o[h]-o[g];p>d&&(d=p,f=g)}if(d>s&&f>=0){const m=d*.5;o[h]-=m,o[f]+=m}}return o}static hydraulicErosion(e,t,n,i=1e4,s=.05,o=4,a=.1,l=.3){const c=e.slice(),u=Math.random;for(let h=0;h<i;h++){let d=u()*(t-1),f=u()*(n-1),m=0,x=0,g=0,p=1;for(let _=0;_<30;_++){const y=Math.floor(d),v=Math.floor(f);if(y<1||v<1||y>=t-1||v>=n-1)break;const A=v*t+y,E=c[A],R=(c[A+1]-c[A-1])*.5,P=(c[A+t]-c[A-t])*.5;m=m*s-R*(1-s),x=x*s-P*(1-s);const M=Math.sqrt(m*m+x*x)||1;m/=M,x/=M,d+=m,f+=x;const b=Math.floor(f)*t+Math.floor(d),U=c[b]-E,k=Math.max(-U*p*o,.01);if(g>k){const q=(g-k)*a;c[A]+=q,g-=q}else{const q=Math.min((k-g)*l,c[A]);c[A]-=q,g+=q}p=Math.sqrt(p*p+U*.1)}}return c}static smoothHeightmap(e,t,n,i=1){const s=e.slice(),o=e.slice();for(let a=0;a<i;a++){for(let l=1;l<n-1;l++)for(let c=1;c<t-1;c++){const u=l*t+c;let h=0;h+=s[u],h+=s[u-1],h+=s[u+1],h+=s[u-t],h+=s[u+t],o[u]=h/5}s.set(o)}return s}}class AM{constructor(e={}){this.width=e.width||256,this.height=e.height||this.width,this.heightScale=1,this.heightGain=1,this.octaves=e.octaves||4,this.qualityMultiplier=e.qualityMultiplier||5,this.smoothStrength=e.smoothStrength||.25,this.maxSmoothPasses=120,this.size=this.width*this.height,this.baseHeight=new Float32Array(this.size),this.workingA=new Float32Array(this.size),this.workingB=new Float32Array(this.size),this.finalData=new Uint8Array(this.size),console.log(`🏔️ HeightmapGenerator initialized (${this.width}x${this.height})`)}generate(e={}){const t=e.seed||Math.random()*100,n=e.heightGain??this.heightGain,i=e.smoothStrength??this.smoothStrength;return console.log(`⛰️ Generating heightmap (seed: ${t.toFixed(2)})`),this.generateBaseHeight(t),i>0&&this.applySmoothing(i),this.writeTextureData(n),{data:this.finalData.slice(),width:this.width,height:this.height,heightScale:this.heightScale,heightGain:n}}generateBaseHeight(e=Math.random()*100){const t=new TM;this.baseHeight.fill(0);let n=0,i=1;for(let s=0;s<this.octaves;s++){for(let o=0;o<this.size;o++){const a=o%this.width,l=Math.floor(o/this.width),c=Math.abs(t.noise(a/i,l/i,e));this.baseHeight[o]+=c*i,this.baseHeight[o]>n&&(n=this.baseHeight[o])}i*=this.qualityMultiplier}this.heightScale=n>0?255/n:1}applySmoothing(e){const t=Le.clamp(e,0,1),n=Math.round(t*this.maxSmoothPasses);if(this.workingA.set(this.baseHeight),n>0&&t>0){let i=this.workingA,s=this.workingB;for(let o=0;o<n;o++){const a=n>1?o/Math.max(n-1,1):1,l=Le.lerp(.15,.85,Math.max(t,a));this.smoothPass(i,s,l);const c=i;i=s,s=c}n%2===1&&this.workingA.set(this.workingB)}}smoothPass(e,t,n){for(let i=0;i<this.width;i++)t[i]=e[i],t[(this.height-1)*this.width+i]=e[(this.height-1)*this.width+i];for(let i=1;i<this.height-1;i++){const s=i*this.width;t[s]=e[s],t[s+this.width-1]=e[s+this.width-1];for(let o=1;o<this.width-1;o++){const a=s+o,l=e[a],c=e[a-1]+e[a+1]+e[a-this.width]+e[a+this.width],u=e[a-this.width-1]+e[a-this.width+1]+e[a+this.width-1]+e[a+this.width+1],h=(l*4+c*2+u)/16;t[a]=Le.lerp(l,h,n)}}}writeTextureData(e=1){for(let t=0;t<this.size;t++){const n=Math.max(0,Math.min(255,Math.round(this.workingA[t]*this.heightScale*e)));this.finalData[t]=n}}sampleHeight(e,t,n=1024){const i={x:e/n,y:t/n},s=g=>{const p=Math.floor(g);let _=g-p;return p%2!==0&&(_=1-_),_},o=s(i.x)*this.width,a=s(i.y)*this.height,l=Math.min(this.size-1,Math.max(0,Math.floor(a)*this.width+Math.floor(o)));let c=this.finalData[l]/255*1024;const u=s(i.x*16)*this.width,h=s(i.y*16)*this.height,d=Math.min(this.size-1,Math.max(0,Math.floor(h)*this.width+Math.floor(u)));c+=this.finalData[d]/255*64;const f=s(i.x*256)*this.width,m=s(i.y*256)*this.height,x=Math.min(this.size-1,Math.max(0,Math.floor(m)*this.width+Math.floor(f)));return c+=this.finalData[x]/255*4,c*c/2e3}resize(e,t=e){this.width=e,this.height=t,this.size=e*t,this.baseHeight=new Float32Array(this.size),this.workingA=new Float32Array(this.size),this.workingB=new Float32Array(this.size),this.finalData=new Uint8Array(this.size),console.log(`📏 HeightmapGenerator resized to ${e}x${t}`)}getConfig(){return{width:this.width,height:this.height,octaves:this.octaves,qualityMultiplier:this.qualityMultiplier,smoothStrength:this.smoothStrength,heightGain:this.heightGain}}}class CM{constructor(e={}){this.width=e.width||256,this.height=e.height||this.width,this.generator=new AM({width:this.width,height:this.height,octaves:e.octaves,qualityMultiplier:e.qualityMultiplier,smoothStrength:e.smoothStrength});const t=this.generator.generate({seed:e.seed,heightGain:e.heightGain});this.texture=new Sn(t.data,this.width,this.height,Ws,dn),this.setupTextureParameters(),this.texture.needsUpdate=!0,console.log(`🎨 TerrainTexture created (${this.width}x${this.height})`)}setupTextureParameters(){this.texture.wrapS=ns,this.texture.wrapT=ns,this.texture.magFilter=pt,this.texture.minFilter=af,this.texture.generateMipmaps=!0}regenerate(e={}){console.log("🔄 Regenerating terrain texture...");const t=this.generator.generate(e);return this.texture.image.data=t.data,this.texture.needsUpdate=!0,this}resize(e,t=e){if(e===this.width&&t===this.height)return this;console.log(`📏 Resizing terrain texture from ${this.width}x${this.height} to ${e}x${t}`),this.width=e,this.height=t,this.generator.resize(e,t);const n=this.generator.generate();return this.texture&&typeof this.texture.dispose=="function"&&this.texture.dispose(),this.texture=new Sn(n.data,e,t,Ws,dn),this.setupTextureParameters(),this.texture.needsUpdate=!0,this}setSmoothing(e){return this.generator.smoothStrength=Le.clamp(e,0,1),this.regenerate()}setHeightGain(e){return this.generator.heightGain=Le.clamp(e,0,4),this.regenerate()}sampleHeight(e,t){return this.generator.sampleHeight(e,t)}getTexture(){return this.texture}getConfig(){return{width:this.width,height:this.height,...this.generator.getConfig()}}getDimensions(){return{width:this.width,height:this.height}}dispose(){this.texture&&typeof this.texture.dispose=="function"&&this.texture.dispose(),console.log("🗑️ TerrainTexture disposed")}}const RM=.25,yd=256,Ip=64,Dp=1024;let as=new CM({width:yd,height:yd,smoothStrength:RM});const PM=as.getTexture();function IM(){return as.width}function DM(r){const e=LM(Le.clamp(Math.round(r),Ip,Dp));return e===as.width||(as.resize(e),console.log(`🔧 Noise width set to: ${e}x${e}`)),e}function _d(r){const e=Le.clamp(r,0,1);as.setSmoothing(e),console.log(`🔧 Noise smoothing set to: ${e.toFixed(3)}`)}function Sd(r){const e=Le.clamp(r,0,4);as.setHeightGain(e),console.log(`🔧 Noise height gain set to: ${e.toFixed(3)}`)}function mi(r,e){return as.sampleHeight(r,e)}function LM(r){const e=Math.ceil(Math.log2(r));return Math.pow(2,e)}console.log("🌄 Noise system initialized");Qt.innerHTML="";const Rt=new Ap({clearColor:0});Rt.sortObjects=!1;Rt.autoClear=!1;Qt.appendChild(Rt.domElement);let Rh=1;const Ph=()=>{Rt.setPixelRatio(Rh),Rt.setSize(Qt.offsetWidth,Qt.offsetHeight)};window.addEventListener("resize",Ph,!1);Ph();function FM(r){Rh=Le.clamp(r,.5,3),Ph()}function UM(){return Rh}const NM=`precision highp float;
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
`,OM=`precision highp float;
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

  // Get height and calculate normal with Mars-specific flattening
  float originalHeight = getHeight(vPosition);

  // Flatten low terrain areas - more aggressive flattening but preserve some height for shadows
  float flattenHeight = 60.0; // Below this height, terrain gets progressively flatter
  float heightReduction = 1.0 - smoothstep(0.0, flattenHeight, originalHeight);

  // Make very low areas mostly flat but keep some height variation for shadow casting
  float smoothingAmount = mix(0.99, 0.7, smoothstep(20.0, 60.0, originalHeight)); // 92% flat at bottom (was 98%), 70% at transition
  float finalHeight = mix(originalHeight, originalHeight * (1.0 - smoothingAmount), heightReduction);

  // Ensure minimum height variation for shadow casting
  float minHeightForShadows = originalHeight * 0.01; // Always keep at least 5% of original height
  finalHeight = max(finalHeight, minHeightForShadows);
  //finalHeight = 100.0;

  vPosition = vPosition + normal * finalHeight;
  vNormal = getNormal();
  //vNormal = normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}`,BM=`precision highp float;
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
`,kM=`precision highp float;
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
}`,zM=`
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
`,VM=`precision highp float;
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
`,HM=`precision highp float;
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
  float depthMask = smoothstep(lavaLevel + 2.0, lavaLevel - 9.0, height);
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
`,GM=`precision highp float;
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

  for (int i = 0; i < 3; ++i) {
    value += amplitude * noise(p);
    p = p * 2.2 + shift;
    amplitude *= 0.3;
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

  float sparkle = noise(worldPos * 0.22 + vec3(8.2, -1.7, 3.4));
  blend += vec3(1.35, 1.6, 1.9) * sparkle * 0.25;

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
  vec3 color = mix(prism * 0.3, prism * 0.8, fresnel); // Overall darker base

  float sunStrength = clamp(uSunIntensity, 0.0, 6.0) * shadowFactor;
  float diffuse = max(dot(refinedNormal, sunDir), 0.0);
  color += prism * pow(diffuse, 1.5) * sunStrength * 0.6;
  float sunInfluence = clamp(diffuse * sunStrength, 0.0, 1.0);
  vec3 sunTint = mix(vec3(0.62, 0.75, 0.98), vec3(1.05, 0.72, 0.48), clamp(uSunWarmth, 0.0, 1.0));
  color = mix(color, color * sunTint, sunInfluence * 0.4);

  vec3 halfVec = normalize(sunDir + viewDir);
  float specular = pow(max(dot(refinedNormal, halfVec), 0.0), 96.0);
  vec3 specTint = mix(vec3(1.2, 1.1, 1.4), sunTint, 0.65);
  color += specTint * specular * uSpecularStrength * sunStrength * 5.4;

  float ambientTerm = max(dot(refinedNormal, normalize(uAmbientDirection)), 0.0);
  color += uAmbientColor * ambientTerm * (uAmbientIntensity * 0.6) * (0.3 + 0.7 * shadowFactor); // Darker ambient, affected by shadows

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
`,WM=`precision highp float;
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

uniform sampler2D uMars;

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

  // Clean Mars color with height-based shading
  vec3 baseColor = vec3(0.8, 0.6, 0.4); // Solid Mars-like color

  // Smooth transition between flat and rocky areas
  vec3 sunDir = normalize(uSunDirection);
  float diffuse = max(dot(normal, sunDir), 0.0);
  float ambient = 0.25; // Increased ambient for lighter mountain shadows
  float lighting = ambient + diffuse * 0.8 * shadowFactor; // Increased diffuse contrast

  // Calculate transition factor for smooth blending
  float transitionFactor = smoothstep(30.0, 40.0, height); // Smooth transition from 30 to 80

  if (height < 80.0) {
    // Calculate noise intensity based on height - minimum noise at bottom, more textured higher up
    float heightBasedNoise = smoothstep(0.0, 60.0, height); // 0 at bottom, 1 at height 60
    float noiseIntensity = mix(0.15, 1.2, heightBasedNoise); // Minimum 15% noise at bottom, 120% at top

    // Sample mars texture at different scales for flat areas
    vec3 texture1 = texture2D(uMars, vPosition.xy * 0.015).rgb;
    vec3 texture2 = texture2D(uMars, vPosition.xy * 0.03).rgb;
    vec3 textureColor = mix(texture1, texture2, 0.3);

    // Blend texture with smooth color based on height and apply lighting with shadows
    vec3 smoothColor = vec3(0.85, 0.5, 0.35); // Reddish Mars color
    vec3 textureBlend = mix(smoothColor, textureColor, noiseIntensity);

    // Mix between minimal lighting (for very flat areas) and full lighting (for higher areas)
    vec3 simpleFlatColor = textureBlend * (0.5 + 0.5 * shadowFactor); // Darker shadows on flat terrain
    vec3 litFlatColor = textureBlend * (ambient + diffuse * 0.8 * shadowFactor); // Full lighting and shadows

    // Transition factor for lighting influence (0 at very bottom, 1 at transition height)
    float lightingMix = smoothstep(10.0, 16.0, height);
    vec3 flatColor = mix(simpleFlatColor, litFlatColor, lightingMix);
    
    // Lit rocky color for higher areas - same reddish color
    vec3 rockyColor = vec3(0.85, 0.5, 0.35) * lighting;

    // Smooth transition between flat and rocky
    baseColor = mix(flatColor, rockyColor, transitionFactor);
  } else {
    // Full rocky areas with normal lighting - same reddish color
    baseColor = vec3(0.85, 0.5, 0.35) * lighting;
  }

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
}`,XM=`precision highp float;

varying vec3 vNormal;
varying vec3 vPosition;
varying float vMorphFactor;

void main() {
  // Depth-only pass, color output is disabled.
  gl_FragColor = vec4(1.0);
}
`,qM=`vec3 colorForScale(float scale) {
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
`,YM=`uniform int uEdgeMorph;

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
`,$M=`uniform sampler2D uShadowMap0;
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
`,Ls=Object.freeze({NONE:0,TOP:1,LEFT:2,BOTTOM:4,RIGHT:8}),ZM=new Map([["colorScale.glsl",qM],["edgemorph.glsl",YM],["terrainShadow.glsl",$M]]);function Qn(r){const e=/#include\s+[<"]?([^>"]+)[">]?/g;return r.replace(e,(t,n)=>ZM.get(n.trim())||"")}const Bn=Qn(NM),KM=Qn(OM),$o=[{name:"Volcanic",source:Qn(HM),vertexShader:Bn},{name:"Terrain",source:Qn(BM),vertexShader:Bn},{name:"Snowy",source:Qn(kM),vertexShader:Bn},{name:"Toon",source:Qn(zM),vertexShader:Bn},{name:"Realistic",source:Qn(VM),vertexShader:Bn},{name:"Crystal",source:Qn(GM),vertexShader:Bn},{name:"Mars",source:Qn(WM),vertexShader:KM}];class JM extends st{constructor(e,t=1024,n=12,i=128,{enableShadows:s=!1,defaultShaderIndex:o=6}={}){super(),this.worldWidth=t,this.levels=n,this.resolution=i,this.heightData=e,this.offset=new w(0,0,0),this.activeShaderIndex=o,this.fade={start:0,end:0},this.morphRegion=.3,this.sunDirection=new w(0,1,0),this.sunIntensity=1,this.sunWarmth=.55,this.ambientDirection=new w(1,0,0),this.ambientIntensity=.2,this.ambientColor=new ee(.45,.42,.35),this.smoothFactor=.5,this.specularStrength=1,this.skyTintColor=new ee(.62,.72,.88),this.skyTintStrength=.15,this.shadowsEnabled=s,this._cascadeEnabledVec=new w(1,1,1),this.tileGeometry=new ls(1,1,this.resolution,this.resolution),this.tileGeometry.translate(.5,.5,0),this.createTileGrid()}createTileGrid(){const e=this.worldWidth/Math.pow(2,this.levels);for(const t of[-1,0])for(const n of[-1,0])this.createTile(t*e,n*e,e,Ls.NONE);for(let t=0;t<this.levels-1;t++){const n=e*Math.pow(2,t);for(let i=-2;i<2;i++)for(let s=-2;s<2;s++){if(i>-2&&i<1&&s>-2&&s<1)continue;let o=Ls.NONE;i===-2&&(o|=Ls.LEFT),i===1&&(o|=Ls.RIGHT),s===-2&&(o|=Ls.BOTTOM),s===1&&(o|=Ls.TOP),this.createTile(i*n,s*n,n,o)}}}createTile(e,t,n,i){const o={uEdgeMorph:{value:i},uGlobalOffset:{value:this.offset},uHeightData:{value:this.heightData},uGrass:{value:ks.grass},uRock:{value:ks.rock},uSnow:{value:ks.snow},uMars:{value:ks.mars},uTileOffset:{value:new K(e,t)},uScale:{value:n},uTileResolution:{value:this.resolution},uFogColor:{value:cn.fog?cn.fog.color.clone():new ee(0)},uFogNear:{value:cn.fog?cn.fog.near:0},uFogFar:{value:cn.fog?cn.fog.far:1},uMorphRegion:{value:this.morphRegion},uSunDirection:{value:this.sunDirection.clone()},uSunIntensity:{value:this.sunIntensity},uSunWarmth:{value:this.sunWarmth},uAmbientDirection:{value:this.ambientDirection.clone()},uAmbientIntensity:{value:this.ambientIntensity},uAmbientColor:{value:this.ambientColor.clone()},uSmoothFactor:{value:this.smoothFactor},uSpecularStrength:{value:this.specularStrength},uFadeStart:{value:this.fade.start},uFadeEnd:{value:this.fade.end},uSkyTintColor:{value:this.skyTintColor.clone()},uSkyTintStrength:{value:this.skyTintStrength},uViewMatrix:{value:new Ue},uShadowMatrices:{value:Array.from({length:3},()=>new Ue)},uCascadeSplits:{value:new it(0,0,0,0)},uShadowBias:{value:.0015},uShadowStrength:{value:.65},uShadowsEnabled:{value:this.shadowsEnabled?1:0},uCascadeEnabled:{value:new w(1,1,1)},uShadowTexelSize:{value:new K(.0009765625,.0009765625)},uShadowSoftness:{value:1},uShadowMap0:{value:null},uShadowMap1:{value:null},uShadowMap2:{value:null}},a=$o[this.activeShaderIndex],l=new St({uniforms:o,vertexShader:a.vertexShader||Bn,fragmentShader:a.source,transparent:!0}),c=new St({uniforms:o,vertexShader:a.vertexShader||Bn,fragmentShader:XM,transparent:!1,depthWrite:!0});c.colorWrite=!1;const u=new qe(this.tileGeometry,l);u.frustumCulled=!1,u.matrixAutoUpdate=!1,u.updateMatrix(),u.castShadow=this.shadowsEnabled,u.receiveShadow=this.shadowsEnabled,u.userData.mainMaterial=l,u.userData.depthMaterial=c,this.add(u)}setShader(e=0){const t=$o.length,n=(e%t+t)%t;this.activeShaderIndex=n;const i=$o[this.activeShaderIndex];return this.children.forEach(s=>{var l,c;const o=(l=s.userData)==null?void 0:l.mainMaterial,a=(c=s.userData)==null?void 0:c.depthMaterial;o instanceof St&&(o.fragmentShader=i.source,o.vertexShader=i.vertexShader||Bn,o.needsUpdate=!0),a instanceof St&&(a.vertexShader=i.vertexShader||Bn,a.needsUpdate=!0)}),this.activeShaderIndex}updateFog(e){this.children.forEach(t=>{var i,s;const n=(s=(i=t.userData)==null?void 0:i.mainMaterial)==null?void 0:s.uniforms;n&&(e?(n.uFogColor.value.copy(e.color),n.uFogNear.value=e.near,n.uFogFar.value=e.far):(n.uFogNear.value=1e9,n.uFogFar.value=1e9))})}updateFade(e,t){t>e?(this.fade.start=e,this.fade.end=t):(this.fade.start=0,this.fade.end=0),this.children.forEach(n=>{var s,o;const i=(o=(s=n.userData)==null?void 0:s.mainMaterial)==null?void 0:o.uniforms;i&&(i.uFadeStart.value=this.fade.start,i.uFadeEnd.value=this.fade.end)})}setShadowsEnabled(e){this.shadowsEnabled=!!e,this.children.forEach(t=>{var i,s;t.castShadow=this.shadowsEnabled,t.receiveShadow=this.shadowsEnabled;const n=(s=(i=t.userData)==null?void 0:i.mainMaterial)==null?void 0:s.uniforms;n&&n.uShadowsEnabled&&(n.uShadowsEnabled.value=this.shadowsEnabled?1:0)})}updateMorphRegion(e){this.morphRegion=Math.max(e,.001),this.children.forEach(t=>{var i,s;const n=(s=(i=t.userData)==null?void 0:i.mainMaterial)==null?void 0:s.uniforms;n&&(n.uMorphRegion.value=this.morphRegion)})}updateSun(e,t){this.sunDirection.copy(e).normalize(),this.sunIntensity=t,this.children.forEach(n=>{var s,o;const i=(o=(s=n.userData)==null?void 0:s.mainMaterial)==null?void 0:o.uniforms;i&&(i.uSunDirection&&i.uSunDirection.value.copy(this.sunDirection),i.uSunIntensity&&(i.uSunIntensity.value=this.sunIntensity),i.uSunWarmth&&(i.uSunWarmth.value=this.sunWarmth))})}updateSunWarmth(e){this.sunWarmth=e,this.children.forEach(t=>{var i,s;const n=(s=(i=t.userData)==null?void 0:i.mainMaterial)==null?void 0:s.uniforms;!n||!n.uSunWarmth||(n.uSunWarmth.value=this.sunWarmth)})}useDepthMaterial(e){this.children.forEach(t=>{var n,i;!((n=t.userData)!=null&&n.mainMaterial)||!((i=t.userData)!=null&&i.depthMaterial)||(t.material=e?t.userData.depthMaterial:t.userData.mainMaterial)})}updateShadowUniforms(e,t,n,i,s,o,a,l,c){a&&this._cascadeEnabledVec.set(a[0]?1:0,a[1]?1:0,a[2]?1:0),this.children.forEach(u=>{var d,f;const h=(f=(d=u.userData)==null?void 0:d.mainMaterial)==null?void 0:f.uniforms;if(h){if(h.uShadowsEnabled&&(h.uShadowsEnabled.value=o?1:0),h.uShadowBias&&(h.uShadowBias.value=i),h.uShadowStrength&&(h.uShadowStrength.value=s),h.uCascadeSplits&&t&&h.uCascadeSplits.value.copy(t),h.uShadowMatrices&&e){const m=h.uShadowMatrices.value;for(let x=0;x<m.length;x++)e[x]?m[x].copy(e[x]):m[x].identity()}if(n&&(h.uShadowMap0&&(h.uShadowMap0.value=n[0]||null),h.uShadowMap1&&(h.uShadowMap1.value=n[1]||null),h.uShadowMap2&&(h.uShadowMap2.value=n[2]||null)),l&&h.uShadowTexelSize){const m=1/l;h.uShadowTexelSize.value.set(m,m)}h.uShadowSoftness&&c!==void 0&&(h.uShadowSoftness.value=c),a&&h.uCascadeEnabled?h.uCascadeEnabled.value.set(a[0]?1:0,a[1]?1:0,a[2]?1:0):h.uCascadeEnabled&&h.uCascadeEnabled.value.copy(this._cascadeEnabledVec)}})}updateCascadeEnabled(e){const t=this._cascadeEnabledVec||new w(1,1,1);t.set(e[0]?1:0,e[1]?1:0,e[2]?1:0),this._cascadeEnabledVec=t,this.children.forEach(n=>{var s,o;const i=(o=(s=n.userData)==null?void 0:s.mainMaterial)==null?void 0:o.uniforms;!i||!i.uCascadeEnabled||i.uCascadeEnabled.value.copy(t)})}updateViewMatrix(e){this.children.forEach(t=>{var i,s;const n=(s=(i=t.userData)==null?void 0:i.mainMaterial)==null?void 0:s.uniforms;!n||!n.uViewMatrix||n.uViewMatrix.value.copy(e)})}updateAmbient(e,t,n){this.ambientDirection.copy(e).normalize(),this.ambientIntensity=t,n&&this.ambientColor.copy(n),this.children.forEach(i=>{var o,a;const s=(a=(o=i.userData)==null?void 0:o.mainMaterial)==null?void 0:a.uniforms;s&&(s.uAmbientDirection&&s.uAmbientDirection.value.copy(this.ambientDirection),s.uAmbientIntensity&&(s.uAmbientIntensity.value=this.ambientIntensity),s.uAmbientColor&&s.uAmbientColor.value.copy(this.ambientColor))})}updateSmoothFactor(e){this.smoothFactor=Le.clamp(e,0,1),this.children.forEach(t=>{var i,s;const n=(s=(i=t.userData)==null?void 0:i.mainMaterial)==null?void 0:s.uniforms;n&&n.uSmoothFactor&&(n.uSmoothFactor.value=this.smoothFactor)})}updateSpecularStrength(e){this.specularStrength=Math.max(e,0),this.children.forEach(t=>{var i,s;const n=(s=(i=t.userData)==null?void 0:i.mainMaterial)==null?void 0:s.uniforms;n&&n.uSpecularStrength&&(n.uSpecularStrength.value=this.specularStrength)})}updateSkyTint(e,t){e&&this.skyTintColor.copy(e),typeof t=="number"&&(this.skyTintStrength=Math.max(t,0)),this.children.forEach(n=>{var s,o;const i=(o=(s=n.userData)==null?void 0:s.mainMaterial)==null?void 0:o.uniforms;i&&(i.uSkyTintColor&&i.uSkyTintColor.value.copy(this.skyTintColor),i.uSkyTintStrength&&(i.uSkyTintStrength.value=this.skyTintStrength))})}cycleShader(){const e=(this.activeShaderIndex+1)%$o.length;return this.setShader(e)}}class jM{constructor(e,t,n){this.scene=e,this.camera=t,this.renderer=n,this.lensFlareGroup=new kn,this.flareElements=[],this.sunPosition=new w,this.screenPosition=new K,this.raycaster=new Mh,this.occluded=!1,this.visibility=0,this.init()}init(){this.createLensFlareElements(),this.lensFlareGroup.renderOrder=1e4,this.scene.add(this.lensFlareGroup),console.log("✨ Lens flare system initialized")}createLensFlareElements(){[{distance:0,size:2200,color:new ee(1,.95,.8),opacity:.8,type:"sun"},{distance:.25,size:1200,color:new ee(1,.6,.3),opacity:.35,type:"ghost"},{distance:.45,size:900,color:new ee(.7,1,.5),opacity:.25,type:"ring"},{distance:.75,size:1500,color:new ee(.5,.8,1),opacity:.25,type:"ghost"},{distance:1.05,size:600,color:new ee(1,.4,.7),opacity:.28,type:"ring"},{distance:1.35,size:800,color:new ee(.9,.9,.3),opacity:.22,type:"ghost"},{distance:1.65,size:500,color:new ee(.7,.4,1),opacity:.18,type:"ring"}].forEach(t=>{const n=this.createFlareElement(t);this.flareElements.push({mesh:n,distance:t.distance,baseSize:t.size,baseOpacity:t.opacity,type:t.type,intensity:1,baseColor:t.color.clone(),tintStrength:t.type==="sun"?.85:.4}),this.lensFlareGroup.add(n)})}createFlareElement(e){let t;e.type==="sun"?t=new Zs(1,48):e.type==="ring"?t=new er(.6,1,48):t=new Zs(1,32);const n=new St({uniforms:{color:{value:e.color},opacity:{value:e.opacity},center:{value:new K(.5,.5)},time:{value:0}},vertexShader:`
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
      `,transparent:!0,blending:Yt,depthTest:!1,depthWrite:!1}),i=new qe(t,n);return i.renderOrder=10001,i.frustumCulled=!1,i.userData.baseSize=e.size,i}setSunColor(e){e&&this.flareElements.forEach(t=>{const n=t.mesh.material.uniforms;n!=null&&n.color&&n.color.value.copy(t.baseColor).lerp(e,t.tintStrength)})}update(e,t,n){if(!t){console.log("🔥 Lens flare: No sun position provided");return}this.sunPosition.copy(t);const i=this.sunPosition.clone();if(i.project(this.camera),this.screenPosition.set(i.x,i.y),i.z>1){this.lensFlareGroup.visible=!1;return}if(this.checkOcclusion(n),this.occluded){this.visibility=0,this.lensFlareGroup.visible=!1;return}const o=new w(0,0,-1);o.applyQuaternion(this.camera.quaternion);const a=this.sunPosition.clone().sub(this.camera.position).normalize(),l=o.dot(a);let c=Le.clamp((l+.2)/1.2,0,1);a.z<-.05&&(c=0);const u=1-Math.exp(-e*6);if(this.visibility=Le.lerp(this.visibility,c,u),this.visibility=Le.clamp(this.visibility,0,1),this.visibility<=.02){this.lensFlareGroup.visible=!1;return}this.lensFlareGroup.visible=!0,this.updateFlareElements(e,this.visibility)}checkOcclusion(e){if(!e){this.occluded=!1;return}if(!e.userData.lensFlareMeshes){const a=[];e.traverse(l=>{l.isMesh&&l.visible&&a.push(l)}),e.userData.lensFlareMeshes=a}const t=e.userData.lensFlareMeshes;if(!t.length){this.occluded=!1;return}const n=this.camera.position,i=this.sunPosition.clone().sub(n),s=i.length();if(s<=.001){this.occluded=!1;return}i.normalize(),this.raycaster.set(n,i),this.raycaster.far=s;const o=this.raycaster.intersectObjects(t,!0);this.occluded=o.some(a=>a.distance<s)}updateFlareElements(e,t){const n=this.camera.position.distanceTo(this.sunPosition),i=-this.screenPosition.x,s=-this.screenPosition.y;this.flareElements.forEach((o,a)=>{const l=o.mesh;let c;if(a===0)c=this.sunPosition.clone();else{const h=this.screenPosition.x+i*o.distance,d=this.screenPosition.y+s*o.distance;c=new w(h,d,.6).unproject(this.camera);const m=c.sub(this.camera.position).normalize(),x=n*(1+o.distance*.6);c=this.camera.position.clone().add(m.multiplyScalar(x))}if(l.position.copy(c),l.lookAt(this.camera.position),l.material.uniforms){l.material.uniforms.time.value+=e;const h=Le.clamp(o.baseOpacity*t*o.intensity,0,1);l.material.uniforms.opacity.value=h}const u=o.baseSize*(.6+.6*t);l.scale.setScalar(u)})}setSunIntensity(e){const t=Le.clamp(e,0,2);this.flareElements.forEach(n=>{n.intensity=t})}cleanup(){this.lensFlareGroup&&(this.scene.remove(this.lensFlareGroup),this.flareElements.forEach(e=>{e.mesh.geometry.dispose(),e.mesh.material.dispose()}),this.flareElements=[])}}const QM=`// Don't redeclare built-in Three.js uniforms and attributes
// They are already available: modelMatrix, viewMatrix, projectionMatrix, normalMatrix, position, normal

varying vec3 vWorldNormal;
varying vec3 vWorldPosition;

void main() {
  // Transform normal to world space (not view space)
  vWorldNormal = normalize(mat3(modelMatrix) * normal);

  // Transform position to world space
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;

  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}`,eb=`precision highp float;

uniform vec3 uBaseColor;
uniform vec3 uSunDirection;
uniform float uSunIntensity;
uniform vec3 uSunColor;
uniform float uAmbientStrength;
uniform vec3 uAmbientColor;

varying vec3 vWorldNormal;
varying vec3 vWorldPosition;

void main() {
  vec3 normal = normalize(vWorldNormal);

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
}`,tb={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class sr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const nb=new tr(-1,1,1,-1,0,1);class ib extends Ye{constructor(){super(),this.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new _e([0,2,0,0,2,0],2))}}const sb=new ib;class Ih{constructor(e){this._mesh=new qe(sb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,nb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ea extends sr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof St?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Yr.clone(e.uniforms),this.material=new St({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ih(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Md extends sr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class rb extends sr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ob{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new K);this._width=n.width,this._height=n.height,t=new fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ea(tb),this.copyPass.material.blending=Hn,this.clock=new _l}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Md!==void 0&&(o instanceof Md?n=!0:o instanceof rb&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new K);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ab extends sr{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ee}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const lb={name:"BrightnessContrastShader",uniforms:{tDiffuse:{value:null},brightness:{value:0},contrast:{value:0}},vertexShader:`

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

		}`},Dh=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,cb=`uniform sampler2D tDiffuse;
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
`,hb=`uniform sampler2D tDiffuse;
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
`,ub=`uniform sampler2D tDiffuse;
uniform sampler2D tBloom;
uniform float uBloomStrength;

varying vec2 vUv;

void main() {
  vec4 baseColor = texture2D(tDiffuse, vUv);
  vec3 bloomColor = texture2D(tBloom, vUv).rgb * uBloomStrength;
  gl_FragColor = vec4(baseColor.rgb + bloomColor, baseColor.a);
}
`,db={name:"AdjustableFXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new K(1/1024,1/512)},uContrastThreshold:{value:.0312},uRelativeThreshold:{value:.063},uSubpixelBlending:{value:1}},vertexShader:`
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
  `},gc={uniforms:{tDiffuse:{value:null},uThreshold:{value:1},uSoftKnee:{value:.5}},vertexShader:Dh,fragmentShader:cb},xc={uniforms:{tDiffuse:{value:null},uDirection:{value:new K(1,0)},uSigma:{value:3.5}},vertexShader:Dh,fragmentShader:hb},fb={uniforms:{tDiffuse:{value:null},tBloom:{value:null},uBloomStrength:{value:.75}},vertexShader:Dh,fragmentShader:ub};class pb extends sr{constructor(e,t=256){super(),this.material=new St({uniforms:Yr.clone(gc.uniforms),vertexShader:gc.vertexShader,fragmentShader:gc.fragmentShader}),this.uniforms=this.material.uniforms,this.renderTarget=e,this.fsQuad=new Ih(this.material),this.needsSwap=!1,this.resolutionPixels=Math.max(t,16),this._lastWidth=0,this._lastHeight=0}render(e,t,n){const i=e.getRenderTarget();this.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.renderTarget),e.clear(),this.fsQuad.render(e),e.setRenderTarget(i)}setSize(e,t){this._lastWidth=e,this._lastHeight=t;const n=this._computeScale(e,t),i=Math.max(Math.floor(e*n),1),s=Math.max(Math.floor(t*n),1);this.renderTarget.setSize(i,s)}_computeScale(e,t){const n=Math.max(e,t);return n<=0?1:Le.clamp(this.resolutionPixels/n,.01,1)}setResolutionPixels(e){this.resolutionPixels=Math.max(e,16),this._lastWidth>0&&this._lastHeight>0&&this.setSize(this._lastWidth,this._lastHeight)}}class bd extends sr{constructor(e,t,n=256){super(),this.material=new St({uniforms:Yr.clone(xc.uniforms),vertexShader:xc.vertexShader,fragmentShader:xc.fragmentShader}),this.uniforms=this.material.uniforms,this.uniforms.uDirection.value.copy(t),this.fsQuad=new Ih(this.material),this.renderTarget=e,this.inputTarget=null,this.needsSwap=!1,this.resolutionPixels=Math.max(n,16),this._lastWidth=0,this._lastHeight=0,this.isHorizontal=Math.abs(t.x)>=Math.abs(t.y)}setInputTarget(e){this.inputTarget=e}setDirection(e){this.uniforms.uDirection.value.copy(e)}setSigma(e){this.uniforms.uSigma.value=e}render(e,t,n){if(!this.inputTarget||!this.renderTarget)return;const i=e.getRenderTarget();this.uniforms.tDiffuse.value=this.inputTarget.texture,e.setRenderTarget(this.renderTarget),e.clear(),this.fsQuad.render(e),e.setRenderTarget(i)}setSize(e,t){this._lastWidth=e,this._lastHeight=t;const n=this._computeScale(e,t),i=Math.max(Math.floor(e*n),1),s=Math.max(Math.floor(t*n),1);this.renderTarget.setSize(i,s),this.isHorizontal?this.setDirection(new K(1/i,0)):this.setDirection(new K(0,1/s))}_computeScale(e,t){const n=Math.max(e,t);return n<=0?1:Le.clamp(this.resolutionPixels/n,.01,1)}setResolutionPixels(e){this.resolutionPixels=Math.max(e,16),this._lastWidth>0&&this._lastHeight>0&&this.setSize(this._lastWidth,this._lastHeight)}}function mb({renderer:r,scene:e,camera:t,bloomStrength:n,bloomThreshold:i=1,bloomSoftKnee:s=.5,bloomSigma:o=4.5,bloomResolution:a=64,aaEnabled:l=!0,aaSubpixelBlending:c=1,aaContrastThreshold:u=.0312,aaRelativeThreshold:h=.063,brightness:d,contrast:f}){const m=new K;r.getSize(m);const x=new ab(e,t),g=new ob(r);g.setPixelRatio(r.getPixelRatio()),g.addPass(x);const p={minFilter:pt,magFilter:pt,format:zt,type:bi,depthBuffer:!1,stencilBuffer:!1},_=new fn(1,1,p);_.texture.name="Bloom.TargetA",_.texture.generateMipmaps=!1;const y=_.clone();y.texture.name="Bloom.TargetB";const v=Math.max(a,16),A=new pb(_,v);A.uniforms.uThreshold.value=i,A.uniforms.uSoftKnee.value=s,g.addPass(A);const E=new bd(y,new K(1/m.x,0),v);E.setInputTarget(_),E.setSigma(o),g.addPass(E);const R=new bd(_,new K(0,1/m.y),v);R.setInputTarget(y),R.setSigma(o),g.addPass(R);const P=new ea(fb);P.material.uniforms.tBloom.value=_.texture,P.material.uniforms.uBloomStrength.value=n,g.addPass(P);const M=new ea(db);M.material.uniforms.uSubpixelBlending.value=c,M.material.uniforms.uContrastThreshold.value=u,M.material.uniforms.uRelativeThreshold.value=h,M.enabled=l,g.addPass(M);const b=new ea(lb);b.material.uniforms.brightness.value=d,b.material.uniforms.contrast.value=f,b.renderToScreen=!0,g.addPass(b);let I=m.x,U=m.y;const k=(X,Z)=>{I=X,U=Z,g.setPixelRatio(r.getPixelRatio()),g.setSize(X,Z);const z=r.getPixelRatio();M.material.uniforms.resolution.value.set(1/(X*z),1/(Z*z))};return k(m.x,m.y),{composer:g,renderPass:x,brightPass:A,blurPassH:E,blurPassV:R,compositePass:P,fxaaPass:M,brightnessContrastPass:b,bloomTargetA:_,bloomTargetB:y,handleResize:k,setBloomResolution:X=>{const Z=Math.max(X,16);A.setResolutionPixels(Z),E.setResolutionPixels(Z),R.setResolutionPixels(Z),g.setSize(I,U)},applyAntialiasSettings:({enabled:X,subpixel:Z,contrastThreshold:z,relativeThreshold:ue})=>{X!=null&&(M.enabled=X),Z!=null&&(M.material.uniforms.uSubpixelBlending.value=Z),z!=null&&(M.material.uniforms.uContrastThreshold.value=z),ue!=null&&(M.material.uniforms.uRelativeThreshold.value=ue)}}}function gb({container:r,onStart:e}){const t=document.createElement("div");t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.display="flex",t.style.flexDirection="column",t.style.alignItems="center",t.style.justifyContent="center",t.style.background="rgba(2, 6, 12, 0.82)",t.style.zIndex="-1",t.style.textAlign="center",t.style.transition="opacity 0.35s ease";const n=document.createElement("div");n.textContent="Fighter Jet Recon",n.style.fontSize="42px",n.style.fontWeight="600",n.style.letterSpacing="4px",n.style.color="#e7f2ff",n.style.textTransform="uppercase",n.style.marginBottom="28px",t.appendChild(n);const i=document.createElement("div");i.textContent="Press Enter or click to begin your sortie",i.style.fontSize="18px",i.style.color="#a8c6ff",i.style.marginBottom="36px",t.appendChild(i);const s=document.createElement("button");s.textContent="Start Mission",s.style.fontSize="16px",s.style.padding="12px 28px",s.style.borderRadius="999px",s.style.border="1px solid rgba(255, 255, 255, 0.45)",s.style.color="#0a1524",s.style.background="linear-gradient(135deg, #f4f9ff, #c7dcff)",s.style.cursor="pointer",s.style.fontWeight="600",s.style.textTransform="uppercase",s.style.letterSpacing="1.2px",s.addEventListener("click",()=>e==null?void 0:e()),t.appendChild(s),r.appendChild(t);function o(){t.parentNode&&t.parentNode.removeChild(t)}function a(l=350){t.style.pointerEvents="none",t.style.opacity="0",window.setTimeout(o,l)}return{overlay:t,button:s,destroy:o,fadeOut:a}}function xb({app:r,container:e,applyShaderEnvironment:t,createTerrain:n,setTerrainSmoothing:i,setHeightGain:s}){const o=document.createElement("div");o.style.position="absolute",o.style.top="10px",o.style.right="10px",o.style.padding="10px",o.style.background="rgba(0, 0, 0, 0.55)",o.style.color="#fff",o.style.fontFamily="monospace",o.style.fontSize="12px",o.style.lineHeight="1.5",o.style.borderRadius="4px",o.style.pointerEvents="auto",o.style.maxWidth="220px";const a=(L,{defaultOpen:$=!1}={})=>{const oe=document.createElement("div");oe.style.marginBottom="12px";const J=document.createElement("button");J.type="button",J.style.display="block",J.style.width="100%",J.style.background="rgba(255, 255, 255, 0.08)",J.style.border="1px solid rgba(255, 255, 255, 0.18)",J.style.color="#fff",J.style.fontFamily="inherit",J.style.fontSize="12px",J.style.textAlign="left",J.style.padding="4px 8px",J.style.cursor="pointer",J.style.borderRadius="4px",J.style.marginBottom="6px";let Ne=$;const Oe=()=>{J.textContent=`${Ne?"▼":"►"} ${L}`};Oe();const C=document.createElement("div");return C.style.display=Ne?"block":"none",C.style.paddingBottom="4px",C.style.borderBottom="1px solid rgba(255, 255, 255, 0.1)",J.addEventListener("click",()=>{Ne=!Ne,C.style.display=Ne?"block":"none",Oe()}),oe.appendChild(J),oe.appendChild(C),o.appendChild(oe),{addLabel:V=>{const ie=document.createElement("div");return ie.textContent=V,ie.style.margin="4px 0",C.appendChild(ie),ie},addSlider:({min:V,max:ie,value:Y,step:Ce=1,onInput:de})=>{const ve=document.createElement("input");return ve.type="range",ve.min=String(V),ve.max=String(ie),ve.value=String(Y),ve.step=String(Ce),ve.style.width="100%",ve.style.marginBottom="6px",ve.addEventListener("input",Te=>{const ae=Number(Te.target.value);de(ae,ve)}),C.appendChild(ve),ve},header:J,body:C}},l=a("Atmosphere",{defaultOpen:!0}),c=a("Terrain",{defaultOpen:!0}),u=a("Lighting",{defaultOpen:!1}),h=a("Shadows",{defaultOpen:!1}),d=a("Post FX",{defaultOpen:!1}),f=l.addLabel("Fog near: 10%");l.addSlider({min:1,max:200,value:10,onInput:L=>{r.fogNearScale=L/100,f.textContent=`Fog near: ${L}%`,t(r.terrain.activeShaderIndex)}});const m=l.addLabel(`Fog far: ${Math.round(r.fogFarScale*100)}%`);l.addSlider({min:5,max:300,value:Math.round(r.fogFarScale*100),onInput:L=>{r.fogFarScale=Math.max(L/100,.05),m.textContent=`Fog far: ${L}%`,t(r.terrain.activeShaderIndex)}});const x=l.addLabel(`Fade start: ${Math.round(r.fadeStartScale*100)}%`);l.addSlider({min:0,max:95,value:Math.round(r.fadeStartScale*100),onInput:L=>{r.fadeStartScale=Math.min(L/100,.95),x.textContent=`Fade start: ${L}%`,t(r.terrain.activeShaderIndex)}});const g=l.addLabel(`Fade end: ${Math.round(r.fadeEndScale*100)}%`);l.addSlider({min:50,max:100,value:Math.round(r.fadeEndScale*100),onInput:L=>{r.fadeEndScale=Math.max(L/100,r.fadeStartScale+.05),g.textContent=`Fade end: ${Math.round(r.fadeEndScale*100)}%`,t(r.terrain.activeShaderIndex)}});const p=l.addLabel(`Sky tint: ${Math.round(r.skyTintStrength*100)}%`);l.addSlider({min:0,max:50,value:Math.round(r.skyTintStrength*100),onInput:L=>{var $;r.skyTintStrength=L/100,p.textContent=`Sky tint: ${L}%`,($=r.terrain)==null||$.updateSkyTint(r.skyTintColor,r.skyTintStrength)}});const _=c.addLabel(`Morph width: ${Math.round(r.morphRegion*100)}%`);c.addSlider({min:5,max:100,value:Math.round(r.morphRegion*100),onInput:L=>{var $;r.morphRegion=Math.max(L/100,.05),_.textContent=`Morph width: ${L}%`,($=r.terrain)==null||$.updateMorphRegion(r.morphRegion)}});const y=c.addLabel(`Terrain smooth: ${Math.round(r.heightSmoothStrength*100)}%`);c.addSlider({min:0,max:100,value:Math.round(r.heightSmoothStrength*100),onInput:L=>{const $=L/100;y.textContent=`Terrain smooth: ${L}%`,i==null||i($)}});const v=L=>L.toFixed(2),A=c.addLabel(`Height multiplier: ${v(r.heightGain)}×`);c.addSlider({min:0,max:200,value:Math.round(r.heightGain*100),onInput:L=>{const $=L/100;A.textContent=`Height multiplier: ${v($)}×`,s==null||s($)}});const E=c.addLabel(`LOD levels: ${r.terrainLevels}`);c.addSlider({min:2,max:32,value:r.terrainLevels,onInput:L=>{r.terrainLevels=Math.max(2,Math.min(32,Math.round(L))),E.textContent=`LOD levels: ${r.terrainLevels}`,n(),t(r.terrain.activeShaderIndex)}});const R=c.addLabel(`Tile resolution: ${r.terrainResolution}`);c.addSlider({min:16,max:4096,step:16,value:r.terrainResolution,onInput:L=>{r.terrainResolution=Math.max(8,Math.round(L/16)*16),R.textContent=`Tile resolution: ${r.terrainResolution}`,n(),t(r.terrain.activeShaderIndex)}});const P=c.addLabel(`Noise resolution: ${r.noiseResolution}`);c.addSlider({min:64,max:1024,step:64,value:r.noiseResolution,onInput:(L,$)=>{r.setNoiseResolution(L),P.textContent=`Noise resolution: ${r.noiseResolution}`,$.value=String(r.noiseResolution),n(),t(r.terrain.activeShaderIndex)}});const M=u.addLabel(`Ambient strength: ${Math.round(r.ambientStrength*100)}%`);u.addSlider({min:0,max:200,value:Math.round(r.ambientStrength*100),onInput:L=>{var $;r.ambientStrength=L/100,M.textContent=`Ambient strength: ${L}%`,($=r.terrain)==null||$.updateAmbient(r.ambientDirection,r.ambientStrength,r.ambientColor)}});const b=u.addLabel(`Normal smoothing: ${Math.round(r.normalSmoothFactor*100)}%`);u.addSlider({min:0,max:100,value:Math.round(r.normalSmoothFactor*100),onInput:L=>{var $;r.normalSmoothFactor=L/100,b.textContent=`Normal smoothing: ${L}%`,($=r.terrain)==null||$.updateSmoothFactor(r.normalSmoothFactor)}});const I=u.addLabel(`Specular strength: ${Math.round(r.specularStrength*100)}%`);u.addSlider({min:0,max:300,value:Math.round(r.specularStrength*100),onInput:L=>{var $;r.specularStrength=L/100,I.textContent=`Specular strength: ${L}%`,($=r.terrain)==null||$.updateSpecularStrength(r.specularStrength)}});const U=u.addLabel(`Sun strength: ${Math.round(r.sunStrengthBase*100)}%`);u.addSlider({min:0,max:200,value:Math.round(r.sunStrengthBase*100),onInput:L=>{r.sunStrengthBase=L/100,U.textContent=`Sun strength: ${L}%`,r.updateSun()}});const k=u.addLabel(`Sun warmth: ${Math.round(r.sunWarmth*100)}%`);u.addSlider({min:0,max:100,value:Math.round(r.sunWarmth*100),onInput:L=>{r.sunWarmth=L/100,k.textContent=`Sun warmth: ${L}%`,r.updateSun()}});const q=u.addLabel(`Time: ${r.sunTime.toFixed(1)}h`);u.addSlider({min:0,max:24,value:r.sunTime,step:.1,onInput:L=>{r.sunTime=L,q.textContent=`Time: ${L.toFixed(1)}h`,r.updateSun()}});const H=h.addLabel(`Shadows: ${r.shadowsEnabled?"On":"Off"}`);H.style.cursor="pointer",H.style.userSelect="none",H.addEventListener("click",()=>{r.setShadowEnabled(!r.shadowsEnabled),H.textContent=`Shadows: ${r.shadowsEnabled?"On":"Off"}`});const X=h.addLabel(`Shadow strength: ${Math.round(r.shadowStrength*100)}%`);h.addSlider({min:0,max:100,value:Math.round(r.shadowStrength*100),onInput:L=>{r.setShadowStrength(L/100),X.textContent=`Shadow strength: ${L}%`}});const Z=h.addLabel(`Shadow softness: ${r.shadowSoftness.toFixed(2)}`);h.addSlider({min:10,max:400,value:Math.round(r.shadowSoftness*100),onInput:L=>{const $=Math.min(Math.max(L/100,.1),4);r.setShadowSoftness($),Z.textContent=`Shadow softness: ${$.toFixed(2)}`}});const z=h.addLabel(`Shadow bias: ${r.shadowBias.toExponential(2)}`);h.addSlider({min:5,max:300,value:Math.round(r.shadowBias*1e5),onInput:L=>{const $=Math.min(Math.max(L/1e5,1e-5),.01);r.setShadowBias($),z.textContent=`Shadow bias: ${$.toExponential(2)}`}});const ue=h.addLabel(`Shadow distance: ${Math.round(r.shadowMaxDistance)}`);h.addSlider({min:100,max:7e3,step:100,value:Math.round(r.shadowMaxDistance),onInput:L=>{r.setShadowMaxDistance(L),ue.textContent=`Shadow distance: ${Math.round(r.shadowMaxDistance)}`}});const fe=h.addLabel(`Shadow resolution: ${r.shadowResolution}`);h.addSlider({min:256,max:2048,step:256,value:r.shadowResolution,onInput:(L,$)=>{r.setShadowResolution(L),fe.textContent=`Shadow resolution: ${r.shadowResolution}`,$.value=String(r.shadowResolution)}});const Me=h.addLabel(`Show cascades: ${r.shadowDebugEnabled?"On":"Off"}`);Me.style.cursor="pointer",Me.style.userSelect="none",Me.addEventListener("click",()=>{const L=!r.shadowDebugEnabled;r.setShadowDebugEnabled(L),Me.textContent=`Show cascades: ${L?"On":"Off"}`}),["Cascade 1","Cascade 2","Cascade 3"].forEach((L,$)=>{const oe=h.addLabel(`${L}: ${r.shadowCascadeEnabled[$]?"On":"Off"}`);oe.style.cursor="pointer",oe.style.userSelect="none",oe.addEventListener("click",()=>{const J=!r.shadowCascadeEnabled[$];r.setShadowCascadeEnabled($,J),oe.textContent=`${L}: ${J?"On":"Off"}`})});const Xe=d.addLabel(`Bloom: ${r.bloomEnabled?"On":"Off"}`);Xe.style.cursor="pointer",Xe.style.userSelect="none",Xe.addEventListener("click",()=>{r.bloomEnabled=!r.bloomEnabled,Xe.textContent=`Bloom: ${r.bloomEnabled?"On":"Off"}`});let Qe;const et=d.addLabel(`Post FX: ${r.postProcessingEnabled?"On":"Off"}`);et.style.cursor="pointer",et.style.userSelect="none",et.addEventListener("click",()=>{r.setPostProcessingEnabled(!r.postProcessingEnabled),et.textContent=`Post FX: ${r.postProcessingEnabled?"On":"Off"}`,Qe&&(Qe.textContent=`Antialias: ${r.aaEnabled&&r.postProcessingEnabled?"On":"Off"}`)}),Qe=d.addLabel(`Antialias: ${r.aaEnabled&&r.postProcessingEnabled?"On":"Off"}`),Qe.style.cursor="pointer",Qe.style.userSelect="none",Qe.addEventListener("click",()=>{r.setAntialiasEnabled(!r.aaEnabled),Qe.textContent=`Antialias: ${r.aaEnabled&&r.postProcessingEnabled?"On":"Off"}`});const j=d.addLabel(`AA blend: ${Math.round(r.aaSubpixelBlending*100)}%`);d.addSlider({min:0,max:150,value:Math.round(r.aaSubpixelBlending*100),onInput:L=>{r.setAntialiasSubpixel(L/100),j.textContent=`AA blend: ${L}%`}});const ne=d.addLabel(`AA contrast: ${Math.round(r.aaContrastThreshold*1e3)/1e3}`);d.addSlider({min:1,max:200,value:Math.round(r.aaContrastThreshold*1e3),onInput:L=>{const $=L/1e3;r.setAntialiasContrast($),ne.textContent=`AA contrast: ${Math.round($*1e3)/1e3}`}});const ge=d.addLabel(`AA relative: ${Math.round(r.aaRelativeThreshold*1e3)/1e3}`);d.addSlider({min:1,max:300,value:Math.round(r.aaRelativeThreshold*1e3),onInput:L=>{const $=L/1e3;r.setAntialiasRelative($),ge.textContent=`AA relative: ${Math.round($*1e3)/1e3}`}});const Ae=d.addLabel(`Bloom strength: ${Math.round(r.bloomStrength*100)}%`);d.addSlider({min:0,max:200,value:Math.round(r.bloomStrength*100),onInput:L=>{r.bloomStrength=L/100,Ae.textContent=`Bloom strength: ${L}%`,r.bloomStrength<=.001?(r.bloomEnabled=!1,Xe.textContent="Bloom: Off"):r.bloomEnabled||(r.bloomEnabled=!0,Xe.textContent="Bloom: On")}});const be=d.addLabel(`Bloom threshold: ${r.bloomThreshold.toFixed(2)}`);d.addSlider({min:0,max:300,value:Math.round(r.bloomThreshold*100),onInput:L=>{r.bloomThreshold=L/100,be.textContent=`Bloom threshold: ${r.bloomThreshold.toFixed(2)}`,r.applyBloomSettings()}});const He=d.addLabel(`Bloom knee: ${r.bloomSoftKnee.toFixed(2)}`);d.addSlider({min:0,max:100,value:Math.round(r.bloomSoftKnee*100),onInput:L=>{r.bloomSoftKnee=L/100,He.textContent=`Bloom knee: ${r.bloomSoftKnee.toFixed(2)}`,r.applyBloomSettings()}});const at=d.addLabel(`Bloom blur sigma: ${r.bloomSigma.toFixed(2)}`);d.addSlider({min:10,max:120,value:Math.round(r.bloomSigma*10),step:5,onInput:L=>{r.bloomSigma=L/10,at.textContent=`Bloom blur sigma: ${r.bloomSigma.toFixed(2)}`,r.applyBloomSettings()}});const D=d.addLabel(`Bloom resolution: ${r.bloomResolution}px`);d.addSlider({min:32,max:512,value:r.bloomResolution,step:16,onInput:L=>{r.setBloomResolution(L),D.textContent=`Bloom resolution: ${r.bloomResolution}px`}});const re=d.addLabel(`Contrast: ${Math.round(r.contrastAdjustment*100)}%`);d.addSlider({min:-50,max:50,value:Math.round(r.contrastAdjustment*100),onInput:L=>{r.contrastAdjustment=L/100,re.textContent=`Contrast: ${L}%`,r.brightnessContrastPass&&(r.brightnessContrastPass.material.uniforms.contrast.value=r.contrastAdjustment)}});const te=d.addLabel(`Brightness: ${Math.round(r.brightnessAdjustment*100)}%`);d.addSlider({min:-50,max:50,value:Math.round(r.brightnessAdjustment*100),onInput:L=>{r.brightnessAdjustment=L/100,te.textContent=`Brightness: ${L}%`,r.brightnessContrastPass&&(r.brightnessContrastPass.material.uniforms.brightness.value=r.brightnessAdjustment)}});const Q=d.addLabel(`Render scale: ${Math.round(r.renderPixelRatio*100)}%`);return d.addSlider({min:50,max:200,value:Math.round(r.renderPixelRatio*100),onInput:L=>{const $=L/100;r.setRenderPixelRatio($),Q.textContent=`Render scale: ${Math.round(r.renderPixelRatio*100)}%`}}),e.appendChild(o),{panel:o}}const vb="Environment";function wd(r){return r?`Environment: ${r}`:vb}function yb({app:r,container:e}){const t=document.createElement("div");t.style.position="absolute",t.style.top="auto",t.style.left="10px",t.style.bottom="10px",t.style.pointerEvents="auto",t.style.zIndex="20";const n=document.createElement("button");n.textContent=wd(r.environmentName),n.style.padding="8px 18px",n.style.borderRadius="999px",n.style.border="1px solid rgba(255, 255, 255, 0.45)",n.style.background="linear-gradient(135deg, rgba(240, 246, 255, 0.95), rgba(173, 199, 255, 0.85))",n.style.color="#0a1524",n.style.fontFamily="monospace",n.style.fontSize="12px",n.style.fontWeight="600",n.style.textTransform="uppercase",n.style.letterSpacing="1.2px",n.style.cursor="pointer",n.style.boxShadow="0 2px 8px rgba(0, 10, 20, 0.35)";const i=s=>{n.textContent=wd(s)};return n.addEventListener("click",()=>{if(!r.terrain)return;const s=r.terrain.cycleShader(),o=r.applyShaderEnvironment(s);i((o==null?void 0:o.name)??r.environmentName)}),t.appendChild(n),e.appendChild(t),{wrapper:t,button:n,update:i}}const _b=/^[og]\s*(.+)?/,Sb=/^mtllib /,Mb=/^usemtl /,bb=/^usemap /,Ed=/\s+/,Td=new w,vc=new w,Ad=new w,Cd=new w,vn=new w,Zo=new ee;function wb(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,s=this.object.geometry.normals;Td.fromArray(i,e),vc.fromArray(i,t),Ad.fromArray(i,n),vn.subVectors(Ad,vc),Cd.subVectors(Td,vc),vn.cross(Cd),vn.normalize(),s.push(vn.x,vn.y,vn.z),s.push(vn.x,vn.y,vn.z),s.push(vn.x,vn.y,vn.z)},addColor:function(e,t,n){const i=this.colors,s=this.object.geometry.colors;i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[e+0],i[e+1]),s.push(i[t+0],i[t+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,s,o,a,l,c){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),d=this.parseVertexIndex(t,u),f=this.parseVertexIndex(n,u);if(this.addVertex(h,d,f),this.addColor(h,d,f),a!==void 0&&a!==""){const m=this.normals.length;h=this.parseNormalIndex(a,m),d=this.parseNormalIndex(l,m),f=this.parseNormalIndex(c,m),this.addNormal(h,d,f)}else this.addFaceNormal(h,d,f);if(i!==void 0&&i!==""){const m=this.uvs.length;h=this.parseUVIndex(i,m),d=this.parseUVIndex(s,m),f=this.parseUVIndex(o,m),this.addUV(h,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],i))}};return r.startObject("",!1),r}class Eb extends Gt{constructor(e){super(e),this.materials=null}load(e,t,n,i){const s=this,o=new In(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new wb;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const h=c.split(Ed);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(Zo.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6]),Et),t.colors.push(Zo.r,Zo.g,Zo.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const d=c.slice(1).trim().split(Ed),f=[];for(let x=0,g=d.length;x<g;x++){const p=d[x];if(p.length>0){const _=p.split("/");f.push(_)}}const m=f[0];for(let x=1,g=f.length-1;x<g;x++){const p=f[x],_=f[x+1];t.addFace(m[0],p[0],_[0],m[1],p[1],_[1],m[2],p[2],_[2])}}else if(u==="l"){const h=c.substring(1).trim().split(" ");let d=[];const f=[];if(c.indexOf("/")===-1)d=h;else for(let m=0,x=h.length;m<x;m++){const g=h[m].split("/");g[0]!==""&&d.push(g[0]),g[1]!==""&&f.push(g[1])}t.addLineGeometry(d,f)}else if(u==="p"){const d=c.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((i=_b.exec(c))!==null){const h=(" "+i[0].slice(1).trim()).slice(1);t.startObject(h)}else if(Mb.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(Sb.test(c))t.materialLibraries.push(c.substring(7).trim());else if(bb.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(i=c.split(" "),i.length>1){const d=i[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const s=new kn;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],u=c.geometry,h=c.materials,d=u.type==="Line",f=u.type==="Points";let m=!1;if(u.vertices.length===0)continue;const x=new Ye;x.setAttribute("position",new _e(u.vertices,3)),u.normals.length>0&&x.setAttribute("normal",new _e(u.normals,3)),u.colors.length>0&&(m=!0,x.setAttribute("color",new _e(u.colors,3))),u.hasUVIndices===!0&&x.setAttribute("uv",new _e(u.uvs,2));const g=[];for(let _=0,y=h.length;_<y;_++){const v=h[_],A=v.name+"_"+v.smooth+"_"+m;let E=t.materials[A];if(this.materials!==null){if(E=this.materials.create(v.name),d&&E&&!(E instanceof Dt)){const R=new Dt;Lt.prototype.copy.call(R,E),R.color.copy(E.color),E=R}else if(f&&E&&!(E instanceof Ki)){const R=new Ki({size:10,sizeAttenuation:!1});Lt.prototype.copy.call(R,E),R.color.copy(E.color),R.map=E.map,E=R}}E===void 0&&(d?E=new Dt:f?E=new Ki({size:1,sizeAttenuation:!1}):E=new vl,E.name=v.name,E.flatShading=!v.smooth,E.vertexColors=m,t.materials[A]=E),g.push(E)}let p;if(g.length>1){for(let _=0,y=h.length;_<y;_++){const v=h[_];x.addGroup(v.groupStart,v.groupCount,_)}d?p=new Mn(x,g):f?p=new Ar(x,g):p=new qe(x,g)}else d?p=new Mn(x,g[0]):f?p=new Ar(x,g[0]):p=new qe(x,g[0]);p.name=c.name,s.add(p)}else if(t.vertices.length>0){const a=new Ki({size:1,sizeAttenuation:!1}),l=new Ye;l.setAttribute("position",new _e(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new _e(t.colors,3)),a.vertexColors=!0);const c=new Ar(l,a);s.add(c)}return s}}class Tb extends Gt{constructor(e){super(e)}load(e,t,n,i){const s=this,o=this.path===""?Ga.extractUrlBase(e):this.path,a=new In(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){const n=e.split(`
`);let i={};const s=/\s+/,o={};for(let l=0;l<n.length;l++){let c=n[l];if(c=c.trim(),c.length===0||c.charAt(0)==="#")continue;const u=c.indexOf(" ");let h=u>=0?c.substring(0,u):c;h=h.toLowerCase();let d=u>=0?c.substring(u+1):"";if(d=d.trim(),h==="newmtl")i={name:d},o[d]=i;else if(h==="ka"||h==="kd"||h==="ks"||h==="ke"){const f=d.split(s,3);i[h]=[parseFloat(f[0]),parseFloat(f[1]),parseFloat(f[2])]}else i[h]=d}const a=new Ab(this.resourcePath||t,this.materialOptions);return a.setCrossOrigin(this.crossOrigin),a.setManager(this.manager),a.setMaterials(o),a}}class Ab{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:Gn,this.wrap=this.options.wrap!==void 0?this.options.wrap:yi}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const t={};for(const n in e){const i=e[n],s={};t[n]=s;for(const o in i){let a=!0,l=i[o];const c=o.toLowerCase();switch(c){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(a=!1);break}a&&(s[c]=l)}}return t}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const t=this,n=this.materialsInfo[e],i={name:e,side:this.side};function s(a,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:a+l}function o(a,l){if(i[a])return;const c=t.getTextureParams(l,i),u=t.loadTexture(s(t.baseUrl,c.url));u.repeat.copy(c.scale),u.offset.copy(c.offset),u.wrapS=t.wrap,u.wrapT=t.wrap,(a==="map"||a==="emissiveMap")&&(u.colorSpace=Et),i[a]=u}for(const a in n){const l=n[a];let c;if(l!=="")switch(a.toLowerCase()){case"kd":i.color=tt.colorSpaceToWorking(new ee().fromArray(l),Et);break;case"ks":i.specular=tt.colorSpaceToWorking(new ee().fromArray(l),Et);break;case"ke":i.emissive=tt.colorSpaceToWorking(new ee().fromArray(l),Et);break;case"map_kd":o("map",l);break;case"map_ks":o("specularMap",l);break;case"map_ke":o("emissiveMap",l);break;case"norm":o("normalMap",l);break;case"map_bump":case"bump":o("bumpMap",l);break;case"disp":o("displacementMap",l);break;case"map_d":o("alphaMap",l),i.transparent=!0;break;case"ns":i.shininess=parseFloat(l);break;case"d":c=parseFloat(l),c<1&&(i.opacity=c,i.transparent=!0);break;case"tr":c=parseFloat(l),this.options&&this.options.invertTrProperty&&(c=1-c),c>0&&(i.opacity=1-c,i.transparent=!0);break}}return this.materials[e]=new vl(i),this.materials[e]}getTextureParams(e,t){const n={scale:new K(1,1),offset:new K(0,0)},i=e.split(/\s+/);let s;return s=i.indexOf("-bm"),s>=0&&(t.bumpScale=parseFloat(i[s+1]),i.splice(s,2)),s=i.indexOf("-mm"),s>=0&&(t.displacementBias=parseFloat(i[s+1]),t.displacementScale=parseFloat(i[s+2]),i.splice(s,3)),s=i.indexOf("-s"),s>=0&&(n.scale.set(parseFloat(i[s+1]),parseFloat(i[s+2])),i.splice(s,4)),s=i.indexOf("-o"),s>=0&&(n.offset.set(parseFloat(i[s+1]),parseFloat(i[s+2])),i.splice(s,4)),n.url=i.join(" ").trim(),n}loadTexture(e,t,n,i,s){const o=this.manager!==void 0?this.manager:fh;let a=o.getHandler(e);a===null&&(a=new ph(o)),a.setCrossOrigin&&a.setCrossOrigin(this.crossOrigin);const l=a.load(e,n,i,s);return t!==void 0&&(l.mapping=t),l}}class Cb{constructor(e){this.scene=e,this.flashEffects=[],this._flashGeometry=null,this._flashMaterial=null,console.log("✨ Environment Effects Manager initialized")}createTerrainCollisionFlash(e,t=null){const n={position:e.clone(),normal:t||new w(0,0,1),creationTime:Date.now(),duration:300,effects:[]},i=3;this._flashGeometry||(this._flashGeometry=new sn(i,4,4),this._flashMaterial=new jt({color:16777215,transparent:!0,opacity:1,emissive:16777215,emissiveIntensity:15,metalness:0,roughness:1,blending:Yt}));const s=new qe(this._flashGeometry,this._flashMaterial.clone());s.position.copy(e),s.position.addScaledVector(n.normal,2),s.castShadow=!1,s.receiveShadow=!1,s.layers.set(1),this.scene.add(s),n.effects.push({type:"flash",mesh:s}),this.createSparkParticles(e,n.normal,n),this.flashEffects.push(n),console.log("⚡ Created terrain collision flash at:",e)}createSparkParticles(e,t,n){for(let s=0;s<6;s++){const o=new sn(.8,4,4),a=new jt({color:16776960,transparent:!0,opacity:1,emissive:16776960,emissiveIntensity:10,metalness:0,roughness:1,blending:Yt}),l=new qe(o,a);l.position.copy(e),l.castShadow=!1,l.receiveShadow=!1,l.layers.set(1);const c=new w((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2).normalize(),u=t.clone().multiplyScalar(.7).add(c.multiplyScalar(.3)).normalize();l.velocity=u.multiplyScalar(80+Math.random()*60),this.scene.add(l),n.effects.push({type:"spark",mesh:l,velocity:l.velocity.clone(),life:150+Math.random()*100})}}update(e){const t=Date.now();for(let n=this.flashEffects.length-1;n>=0;n--){const i=this.flashEffects[n],s=t-i.creationTime,o=s/i.duration;if(o>1){i.effects.forEach(a=>{this.scene.remove(a.mesh),a.mesh.geometry&&a.mesh.geometry!==this._flashGeometry&&a.mesh.geometry.dispose(),a.mesh.material&&a.mesh.material!==this._flashMaterial&&a.mesh.material.dispose()}),this.flashEffects.splice(n,1);continue}i.effects.forEach(a=>{const l=a.mesh;switch(a.type){case"flash":const c=Math.max(0,1-o*3);l.material.opacity=c,l.material.emissiveIntensity=15*c,l.scale.setScalar(1+o*.3);break;case"spark":if(s<=a.life){const u=s/a.life;l.position.add(a.velocity.clone().multiplyScalar(e)),a.velocity.z-=150*e,l.material.opacity=Math.max(0,1-u),l.material.emissiveIntensity=Math.max(0,10*(1-u)),l.scale.setScalar(1-u*.3)}break}})}}dispose(){this.flashEffects.forEach(e=>{e.effects.forEach(t=>{this.scene.remove(t.mesh),t.mesh.geometry&&t.mesh.geometry!==this._flashGeometry&&t.mesh.geometry.dispose(),t.mesh.material&&t.mesh.material!==this._flashMaterial&&t.mesh.material.dispose()})}),this._flashGeometry&&(this._flashGeometry.dispose(),this._flashGeometry=null),this._flashMaterial&&(this._flashMaterial.dispose(),this._flashMaterial=null),this.flashEffects=[],this.scene=null,console.log("🗑️ Environment Effects Manager disposed")}}class Rb{constructor(e,t,n=null){this.scene=e,this.camera=t,this.collisionDetector=n,this.mesh=null,this.velocity=new w;const i=this.findLowTerrainSpawn();this.position=new w(i.x,i.y,i.z),this.baseSpeed=300,this.forwardSpeed=this.baseSpeed,this.maxSpeed=200,this.steerSpeed=900,this.maxSteerAngle=Math.PI/3,this.acceleration=800,this.currentTurnRate=0,this.maxTurnRate=39.5,this.turnAcceleration=460,this.turnDamping=.3,this.bankAngle=0,this.maxBankAngle=Math.PI/4,this.pitchAngle=0,this.maxPitchAngle=Math.PI/10,this.maxTurnAngle=360*Math.PI/180,this.currentTurnAngle=0,this.worldZRotation=0,this.angularVelocity=new w,this.thrust=1,this.targetThrust=1,this.afterburner=!1,this.steeringInput=0,this.targetYawRate=0,this.cameraPosition=new w(0,-1900,1500),this.cameraLookAt=new w,this.cameraRotation=new Ut,this.autoDescentEnabled=!0,this.startAltitude=800,this.targetAltitude=200,this.descentDuration=10,this.descentStartTime=null,this.hasDescended=!1,this.initialPosition=null,this.health=100,this.distanceTraveled=0,this.startY=0,this.exhaustGlows=[],this.lasers=[],this.laserSpeed=2e3,this.lastLaserTime=0,this.laserCooldown=150,this.bombs=[],this.bombSpeed=12e3,this.lastBombTime=0,this.bombCooldown=500,this.explosions=[],this._tempVector1=new w,this._tempVector2=new w,this._tempVector3=new w,this._laserCoreGeometry=null,this._laserGlowGeometry=null,this._laserCoreMaterial=null,this._laserGlowMaterial=null,this._bombCoreGeometry=null,this._bombGlowGeometry=null,this._bombCoreMaterial=null,this._bombGlowMaterial=null,this.environmentEffects=new Cb(e),this.loadJetModel()}findLowTerrainSpawn(){console.log("🗺️ Scanning terrain for low spawn point...");let e=1/0,t={x:0,y:0,z:200};const n=2e3,i=100,s=this.autoDescentEnabled?this.startAltitude:50;for(let o=-n;o<=n;o+=i)for(let a=-n;a<=n;a+=i)try{const l=mi(o,a);l<e&&(e=l,t={x:o,y:a,z:l+s})}catch{continue}return console.log(`✅ Found spawn point at: (${t.x}, ${t.y}, ${t.z}), terrain height: ${e}, altitude: ${s}`),this.autoDescentEnabled&&(this.initialPosition={...t},console.log(`🛫 Auto-descent enabled: Starting at ${this.startAltitude}m, will descend to ${this.targetAltitude}m over ${this.descentDuration}s`)),t}async loadJetModel(){try{st.DEFAULT_UP.set(0,0,1);const e=new Tb;e.setPath("/assets/spaceship/");const t=await new Promise((o,a)=>{e.load("justigue_league_flying_vehicle.mtl",o,void 0,a)});t.preload();const n=new Eb;n.setPath("/assets/spaceship/"),n.setMaterials(t);const i=await new Promise((o,a)=>{n.load("justigue_league_flying_vehicle.obj",o,void 0,a)}),s=new kn;i.scale.setScalar(.05),i.rotation.set(Math.PI/2,Math.PI,0),i.position.set(0,0,-5),s.add(i),s.position.copy(this.position),this.mesh=s,this.mesh.traverse(o=>{o.isMesh&&(o.castShadow=!1,o.receiveShadow=!0,o.material&&(o.material.map&&(o.material.map.flipY=!1),o.material.needsUpdate=!0))}),this.createAdvancedExhaustSystem(),this.scene.add(this.mesh),console.log("🚀 Justice League spaceship (OBJ) loaded successfully")}catch(e){console.warn("Failed to load OBJ spaceship model, trying without materials:",e)}}createAdvancedExhaustSystem(){const e=[new w(-20,120,-250),new w(20,120,-250)];this.exhaustGlows=[],e.forEach((t,n)=>{const i=new Mi(10,50,6),s=new jt({color:43775,transparent:!0,opacity:.9,emissive:43775,emissiveIntensity:2,metalness:0,roughness:1}),o=new qe(i,s);o.position.copy(t),o.rotation.y=-Math.PI/2,o.rotation.z=Math.PI/2;const a=new Mi(20,100,6),l=new jt({color:26316,transparent:!0,opacity:.4,emissive:26316,emissiveIntensity:3.5,blending:Yt,metalness:0,roughness:1}),c=new qe(a,l);c.position.copy(t),c.rotation.y=-Math.PI/2,c.rotation.z=Math.PI/2,this.exhaustGlows.push({core:o,halo:c}),this.mesh&&this.mesh.children[0]&&(this.mesh.children[0].add(o),this.mesh.children[0].add(c))})}update(e){this.updateFlightDynamics(e),window.game&&window.game.gameStarted&&this.autoFlyForward(e),this.mesh&&this.position.copy(this.mesh.position),this.updateAdvancedEffects(e),this.updateLasers(e),this.updateBombs(e),this.updateExplosions(e),this.environmentEffects.update(e),window.game&&window.game.gameStarted&&this.updateAdvancedCamera(e)}updateFlightDynamics(e){if(!this.mesh)return;this.thrust=Le.lerp(this.thrust,this.targetThrust,e*2);const n=this.baseSpeed*this.thrust-this.forwardSpeed,i=Math.sign(n)*this.acceleration*e;if(this.forwardSpeed=Math.max(80,Math.min(this.maxSpeed,this.forwardSpeed+i)),this.steeringInput!==0){const o=this.steeringInput*this.maxBankAngle;this.bankAngle=Le.lerp(this.bankAngle,o,3*e),this.mesh.rotation.y=this.bankAngle;const l=this.steeringInput*1.5;this.currentTurnRate=Le.lerp(this.currentTurnRate,l,3*e),this.worldZRotation+=-this.currentTurnRate*e,this.mesh.rotation.set(0,this.bankAngle,0);const c=new w(0,0,1);this.mesh.rotateOnWorldAxis(c,this.worldZRotation)}else{this.targetYawRate=0;const s=4;this.bankAngle=Le.lerp(this.bankAngle,0,s*e);const o=3;this.currentTurnRate=Le.lerp(this.currentTurnRate,0,o*e),this.mesh.rotation.set(0,this.bankAngle,0);const a=new w(0,0,1);this.mesh.rotateOnWorldAxis(a,this.worldZRotation)}this.forwardDirection=new w(0,1,0),this.forwardDirection.applyQuaternion(this.mesh.quaternion)}autoFlyForward(e){if(!this.mesh||!this.forwardDirection)return;const t=this.forwardDirection.clone().multiplyScalar(this.forwardSpeed*e);this.mesh.position.add(t),this.distanceTraveled+=this.forwardSpeed*e}updateAdvancedEffects(e){this.updateExhaustGlow(e),this.updateEngineGlow()}updateExhaustGlow(e){if(!this.exhaustGlows)return;const t=Date.now()*.001,n=this.thrust,i=Math.min(this.forwardSpeed/this.maxSpeed,1);this.exhaustGlows.forEach((s,o)=>{const a=.8+Math.sin(t*8+o)*.2,l=n*a,c=1.5+l*1;s.core.material.emissiveIntensity=c,s.core.material.opacity=.7+l*.3;const u=1+l*.8;s.halo.material.emissiveIntensity=u,s.halo.material.opacity=.3+l*.2;const h=1+i*.3;s.core.scale.setScalar(h),s.halo.scale.setScalar(h),this.afterburner?(s.core.material.color&&s.core.material.color.setHex(16729088),s.core.material.emissive&&s.core.material.emissive.setHex(16729088),s.halo.material.color&&s.halo.material.color.setHex(16737792),s.halo.material.emissive&&s.halo.material.emissive.setHex(16737792)):(s.core.material.color&&s.core.material.color.setHex(43775),s.core.material.emissive&&s.core.material.emissive.setHex(43775),s.halo.material.color&&s.halo.material.color.setHex(26316),s.halo.material.emissive&&s.halo.material.emissive.setHex(26316))})}updateEngineGlow(){this.mesh&&this.mesh.traverse(e=>{if(e.userData&&e.userData.isExhaustGlow){const t=this.thrust;e.material&&(e.material.opacity=.4+t*.6,this.afterburner?e.material.color.setHex(16729088):e.material.color.setHex(33023))}})}updateAdvancedCamera(e){if(!this.mesh)return;const t=-20,n=10,i=1-Math.exp(-2*e);this.cameraRotation.slerp(this.mesh.quaternion,i),this._tempVector1.set(0,-1,0),this._tempVector1.applyQuaternion(this.cameraRotation),this._tempVector2.copy(this._tempVector1).multiplyScalar(t),this._tempVector2.z+=n;const s=new w(0,0,5);s.applyQuaternion(this.cameraRotation),this._tempVector2.add(s),this._tempVector1.copy(this.mesh.position).add(this._tempVector2);const o=1-Math.exp(-3*e);this.cameraPosition.lerp(this._tempVector1,o),this.camera.position.copy(this.cameraPosition),this._tempVector2.set(0,1,0),this._tempVector2.applyQuaternion(this.cameraRotation);const a=600+this.forwardSpeed*.3+Math.abs(this.currentTurnRate)*20;if(this._tempVector1.copy(this.mesh.position).add(this._tempVector2.multiplyScalar(a)),Math.abs(this.bankAngle)>.1){const c=this.bankAngle*9.15;this.camera.rotation.y=Le.lerp(this.camera.rotation.y,c,e*3)}else this.camera.rotation.y=Le.lerp(this.camera.rotation.y,0,e*4);const l=1-Math.exp(-3*e);this.cameraLookAt.lerp(this._tempVector1,l),this.camera.lookAt(this.cameraLookAt)}steerRight(e){this.mesh&&(this.steeringInput=1)}steerLeft(e){this.mesh&&(this.steeringInput=-1)}stabilize(e){this.steeringInput=0}toggleAfterburner(){this.afterburner=!this.afterburner,this.targetThrust=this.afterburner?1.5:1}fireBomb(){if(!this.mesh)return;const e=Date.now();if(e-this.lastBombTime<this.bombCooldown)return;this.lastBombTime=e,this._tempVector1.set(0,1,0),this._tempVector1.applyQuaternion(this.mesh.quaternion);const t=new w(0,40,0);this._tempVector2.copy(t),this._tempVector2.applyMatrix4(this.mesh.matrixWorld),this.createBomb(this._tempVector2,this._tempVector1)}createBomb(e,t){this._bombCoreGeometry||(this._bombCoreGeometry=new zn(6,6,400,8),this._bombGlowGeometry=new zn(12,12,400,8),this._bombCoreMaterial=new jt({color:16711680,transparent:!0,opacity:1,emissive:16711680,emissiveIntensity:4.5,metalness:0,roughness:1}),this._bombGlowMaterial=new jt({color:16729088,transparent:!0,opacity:.4,emissive:16729088,emissiveIntensity:3,blending:Yt,metalness:0,roughness:1}));const i=new qe(this._bombCoreGeometry,this._bombCoreMaterial),s=new qe(this._bombGlowGeometry,this._bombGlowMaterial);i.position.copy(e),s.position.copy(e),this._tempVector3.set(0,1,0);const o=new Ut;o.setFromUnitVectors(this._tempVector3,t.normalize()),i.quaternion.copy(o),s.quaternion.copy(o);const a={mesh:i,glow:s,position:e.clone(),direction:t.clone().normalize(),velocity:t.clone().normalize().multiplyScalar(this.bombSpeed),creationTime:Date.now(),exploded:!1};this.bombs.push(a),this.scene.add(i),this.scene.add(s)}fireLasers(){if(!this.mesh)return;const e=Date.now();if(e-this.lastLaserTime<this.laserCooldown)return;this.lastLaserTime=e,this._tempVector1.set(0,1,0),this._tempVector1.applyQuaternion(this.mesh.quaternion),[new w(-8,40,-5),new w(8,40,-5)].forEach(n=>{this._tempVector2.copy(n),this._tempVector2.applyMatrix4(this.mesh.matrixWorld),this.createLaser(this._tempVector2,this._tempVector1)})}createLaser(e,t){this._laserCoreGeometry||(this._laserCoreGeometry=new zn(.3,.3,100,3),this._laserGlowGeometry=new zn(1,1,100,4),this._laserCoreMaterial=new jt({color:65280,transparent:!0,opacity:1,emissive:65280,emissiveIntensity:8,metalness:0,roughness:1}),this._laserGlowMaterial=new jt({color:65280,transparent:!0,opacity:.4,emissive:65280,emissiveIntensity:12,blending:Yt,metalness:0,roughness:1}));const i=new qe(this._laserCoreGeometry,this._laserCoreMaterial),s=new qe(this._laserGlowGeometry,this._laserGlowMaterial);i.position.copy(e),s.position.copy(e),this._tempVector3.set(0,1,0);const o=new Ut;o.setFromUnitVectors(this._tempVector3,t.normalize()),i.quaternion.copy(o),s.quaternion.copy(o),i.material.color.setHex(65280),i.material.emissive.setHex(65280),s.material.color.setHex(65280),s.material.emissive.setHex(65280),i.material.opacity=1,s.material.opacity=.4;const a={mesh:i,glow:s,position:e.clone(),direction:t.clone().normalize(),velocity:t.clone().normalize().multiplyScalar(this.laserSpeed),life:3e3,creationTime:Date.now()};this.lasers.push(a),this.scene.add(i),this.scene.add(s)}updateLasers(e){const t=Date.now();for(let n=this.lasers.length-1;n>=0;n--){const i=this.lasers[n];if(i.collisionTime){const a=(t-i.collisionTime)/i.fadeOutDuration;if(a>=1){console.log("🔫💨 Laser faded out after collision"),this.scene.remove(i.mesh),this.scene.remove(i.glow),this.lasers.splice(n,1);continue}const l=Math.pow(1-a,3),c=1+Math.sin(t*.01)*.02;i.mesh.material.emissiveIntensity=6*l*c,i.glow.material.opacity=.2*l*c,i.mesh.material.opacity=.6*l}else if(t-i.creationTime>i.life){this.scene.remove(i.mesh),this.scene.remove(i.glow),this.lasers.splice(n,1);continue}if(i.justBounced)i.justBounced=!1;else{let o=null;if(this.collisionDetector&&(o=this.collisionDetector.checkLaserTerrainCollision(i.position,i.velocity,e)),o){console.log("🎯 Laser hit terrain!",o.point),this.environmentEffects.createTerrainCollisionFlash(o.point,o.normal);const l=i.direction.clone().clone().setZ(0).normalize(),c=new w(0,0,1),u=Math.random()*Math.PI*2,h=Math.random()*.8,d=new w().crossVectors(l,c).normalize(),f=l.clone().multiplyScalar(Math.cos(u)*h).add(d.clone().multiplyScalar(Math.sin(u)*h)),m=c.clone().add(f).add(l.multiplyScalar(.3)).normalize(),x=i.velocity.length()*.8,g=m.multiplyScalar(x);if(i.velocity=g,i.position.copy(o.point),i.position.addScaledVector(g.clone().normalize(),5),i.bounces=(i.bounces||0)+1,i.justBounced=!0,i.collisionTime||(i.collisionTime=t,i.fadeOutDuration=150+Math.random()*50,i.mesh.material.color.setHex(16711680),i.mesh.material.emissive.setHex(16711680),i.glow.material.color.setHex(16729088),i.glow.material.emissive.setHex(16729088)),i.bounces>3){console.log("🔫💥 Laser expired after 3 bounces"),this.scene.remove(i.mesh),this.scene.remove(i.glow),this.lasers.splice(n,1);continue}i.mesh.material.emissiveIntensity=Math.min(15,i.mesh.material.emissiveIntensity*1.2),i.glow.material.emissiveIntensity=Math.min(20,i.glow.material.emissiveIntensity*1.2)}}const s=i.velocity.clone().multiplyScalar(e);if(i.position.add(s),i.mesh.position.copy(i.position),i.glow.position.copy(i.position),this.collisionDetector){const o=this.collisionDetector.checkLaserEnemyCollision(i.position,150);if(o.length>0){console.log(`🔫💥 Laser hit ${o.length} enemies!`),this.scene.remove(i.mesh),this.scene.remove(i.glow),this.lasers.splice(n,1);continue}}if(!i.collisionTime){const o=1+Math.sin(t*.01)*.2;i.mesh.material.emissiveIntensity=8*o,i.glow.material.opacity=.4*o}}}updateBombs(e){const t=Date.now();for(let n=this.bombs.length-1;n>=0;n--){const i=this.bombs[n];if(!i.exploded&&(t-i.creationTime>500||this.checkBombEnemyCollision(i))){if(this.createExplosion(i.position.clone()),window.game&&window.game.enemyManager){console.log("💣 Bomb exploding at:",i.position);const s=window.game.enemyManager.damageEnemiesInArea(i.position,300,9999);console.log(`💣💥 Bomb hit ${s.length} enemies!`)}this.scene.remove(i.mesh),this.scene.remove(i.glow),this.bombs.splice(n,1);continue}if(!i.exploded){i.position.add(i.velocity.clone().multiplyScalar(e)),i.mesh.position.copy(i.position),i.glow.position.copy(i.position);const s=1+Math.sin(t*.02)*.3;i.mesh.material.emissiveIntensity=1.5*s,i.glow.material.opacity=.4*s}}}createExplosion(e){const t={position:e.clone(),creationTime:Date.now(),duration:800,effects:[]},n=new sn(50,16,16),i=new jt({color:16755200,transparent:!0,opacity:1,emissive:16755200,emissiveIntensity:3,metalness:0,roughness:1}),s=new qe(n,i);s.position.copy(e),this.scene.add(s),t.effects.push({type:"core",mesh:s});const o=new sn(100,12,12),a=new jt({color:16729088,transparent:!0,opacity:.6,emissive:16729088,emissiveIntensity:2,blending:Yt,metalness:0,roughness:1}),l=new qe(o,a);l.position.copy(e),this.scene.add(l),t.effects.push({type:"glow",mesh:l});for(let c=0;c<3;c++){const u=new er(10+c*20,15+c*25,16),h=new jt({color:16777096,transparent:!0,opacity:.8,emissive:16777096,emissiveIntensity:1.5,side:Rn,blending:Yt,metalness:0,roughness:1}),d=new qe(u,h);d.position.copy(e),d.position.y+=(c-1)*10,this.scene.add(d),t.effects.push({type:"shockwave",mesh:d,startTime:Date.now()+c*20})}this.explosions.push(t)}updateExplosions(e){const t=Date.now();for(let n=this.explosions.length-1;n>=0;n--){const i=this.explosions[n],o=(t-i.creationTime)/i.duration;if(o>1){i.effects.forEach(a=>{this.scene.remove(a.mesh),a.mesh.geometry.dispose(),a.mesh.material.dispose()}),this.explosions.splice(n,1);continue}i.effects.forEach(a=>{const l=a.mesh;switch(a.type){case"core":const c=1+o*3;l.scale.setScalar(c),l.material.opacity=Math.max(0,1-o*1.5),l.material.emissiveIntensity=Math.max(0,3*(1-o));break;case"glow":const u=1+o*2;l.scale.setScalar(u),l.material.opacity=Math.max(0,.6*(1-o*.8)),l.material.emissiveIntensity=Math.max(0,2*(1-o*.5));break;case"shockwave":const h=t-(a.startTime||i.creationTime);if(h>0){const d=Math.min(h/1e3,1),f=1+d*8;l.scale.setScalar(f),l.material.opacity=Math.max(0,.8*(1-d)),l.material.emissiveIntensity=Math.max(0,1.5*(1-d*.7)),l.rotation.z+=e*2}break}})}}getTerrainHeightAtPosition(e=null,t=null){if(window.game&&window.game.terrain&&window.game.terrain.getHeightAtPosition){const n=e!==null?e:this.mesh.position.x,i=t!==null?t:this.mesh.position.z;return window.game.terrain.getHeightAtPosition(n,i)}return 0}checkBombEnemyCollision(e){if(!window.game||!window.game.enemyManager)return!1;for(const t of window.game.enemyManager.enemies)if(!t.isDestroyed()&&e.position.distanceTo(t.getPosition())<100)return!0;return!1}takeDamage(e){return this.health=Math.max(0,this.health-e),console.log(`💥 Player took ${e} damage! Health: ${this.health}`),this.health<=0&&(console.log("💀 Player destroyed!"),this.createPlayerDeathExplosion(),setTimeout(()=>{window.game&&window.game.hud&&window.game.hud.showGameOver()},2e3)),this.health<=0}createPlayerDeathExplosion(){if(!this.mesh)return;const e=this.mesh.position.clone();console.log("💥🔥 Creating player death explosion at:",e);const t=new sn(100,16,16),n=new Vt({color:16755200,transparent:!0,opacity:1,blending:Yt}),i=new qe(t,n);i.position.copy(e),this.scene.add(i);const s=[];for(let u=0;u<5;u++){const h=new Kr(50+u*30,10,8,16),d=new Vt({color:u%2===0?16729088:16776960,transparent:!0,opacity:.8,blending:Yt}),f=new qe(h,d);f.position.copy(e),f.rotation.x=Math.random()*Math.PI,f.rotation.y=Math.random()*Math.PI,f.rotation.z=Math.random()*Math.PI,s.push(f),this.scene.add(f)}const o=[];for(let u=0;u<30;u++){const h=new oi(Math.random()*20+5,Math.random()*20+5,Math.random()*20+5),d=new Vt({color:Math.random()>.5?4473924:8947848,transparent:!0,opacity:1}),f=new qe(h,d);f.position.copy(e),f.velocity=new w((Math.random()-.5)*2e3,(Math.random()-.5)*2e3,(Math.random()-.5)*2e3),f.angularVelocity=new w((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10),o.push(f),this.scene.add(f)}const a=[];for(let u=0;u<50;u++){const h=new sn(Math.random()*5+2,4,4),d=new Vt({color:Math.random()>.5?16776960:16746496,transparent:!0,opacity:1,blending:Yt}),f=new qe(h,d);f.position.copy(e),f.velocity=new w((Math.random()-.5)*1500,(Math.random()-.5)*1500,(Math.random()-.5)*1500),a.push(f),this.scene.add(f)}this.mesh&&(this.mesh.visible=!1);let l=0;const c=()=>{l+=16;const u=l/3e3;if(u>1){this.scene.remove(i),s.forEach(h=>this.scene.remove(h)),o.forEach(h=>this.scene.remove(h)),a.forEach(h=>this.scene.remove(h));return}i.scale.setScalar(1+u*4),i.material.opacity=1-u,s.forEach((h,d)=>{h.scale.setScalar(1+u*(2+d*.5)),h.material.opacity=.8-u,h.rotation.x+=.05,h.rotation.y+=.03,h.rotation.z+=.02}),o.forEach(h=>{h.position.add(h.velocity.clone().multiplyScalar(.016)),h.rotation.x+=h.angularVelocity.x*.016,h.rotation.y+=h.angularVelocity.y*.016,h.rotation.z+=h.angularVelocity.z*.016,h.material.opacity=1-u,h.velocity.y-=500*.016}),a.forEach(h=>{h.position.add(h.velocity.clone().multiplyScalar(.016)),h.material.opacity=1-u,h.scale.setScalar(1-u*.5)}),requestAnimationFrame(c)};c()}getStats(){const e=Math.round((this.mesh.position.y-this.startY)/1e3);return{speed:Math.round(this.forwardSpeed*3.6),altitude:Math.round(this.mesh.position.z),health:this.health,position:this.mesh.position,distance:Math.max(0,e)}}dispose(){this.collisionDetector&&(this.collisionDetector.dispose(),this.collisionDetector=null),this.environmentEffects&&(this.environmentEffects.dispose(),this.environmentEffects=null),this.mesh&&this.scene&&this.scene.remove(this.mesh),console.log("🗑️ Player disposed")}}class Pb{constructor(e){this.player=e,this.keys={},this.mouseX=0,this.mouseY=0,this.isMouseLocked=!1,this.game=null,this.touchActive=!1,this.touchSteerInput=0,this.activeTouches=new Map,this.steerTouchId=null,this.steerCenter={x:0,y:0},this.setupEventListeners()}setupEventListeners(){document.addEventListener("keydown",this.onKeyDown.bind(this)),document.addEventListener("keyup",this.onKeyUp.bind(this)),document.addEventListener("mousemove",this.onMouseMove.bind(this)),document.addEventListener("click",this.onMouseClick.bind(this)),document.addEventListener("pointerlockchange",this.onPointerLockChange.bind(this)),document.addEventListener("touchstart",this.onTouchStart.bind(this),{passive:!1}),document.addEventListener("touchmove",this.onTouchMove.bind(this),{passive:!1}),document.addEventListener("touchend",this.onTouchEnd.bind(this),{passive:!1}),document.addEventListener("touchcancel",this.onTouchEnd.bind(this),{passive:!1}),document.body.addEventListener("click",()=>{document.body.requestPointerLock()})}onKeyDown(e){switch(this.keys[e.code]=!0,e.code){case"Escape":this.game&&this.game.isGameActive()&&this.game.pauseGame(),this.isMouseLocked&&document.exitPointerLock();break;case"ShiftLeft":case"ShiftRight":!this.keys.ShiftLeft&&!this.keys.ShiftRight&&this.player.toggleAfterburner();break}}onKeyUp(e){this.keys[e.code]=!1}onMouseMove(e){this.isMouseLocked&&(this.mouseX+=e.movementX*.002,this.mouseY+=e.movementY*.002,this.mouseY=Math.max(-Math.PI/3,Math.min(Math.PI/3,this.mouseY)))}onMouseClick(e){this.isMouseLocked&&this.shoot()}onPointerLockChange(){const e=this.isMouseLocked;this.isMouseLocked=document.pointerLockElement===document.body,e&&!this.isMouseLocked&&this.game&&this.game.isGameActive()&&this.game.pauseGame()}onTouchStart(e){e.preventDefault();for(let t=0;t<e.changedTouches.length;t++){const n=e.changedTouches[t];this.activeTouches.set(n.identifier,{x:n.clientX,y:n.clientY,startX:n.clientX,startY:n.clientY})}this.updateSteeringFromTouches()}onTouchMove(e){e.preventDefault();for(let t=0;t<e.changedTouches.length;t++){const n=e.changedTouches[t];this.activeTouches.has(n.identifier)&&(this.activeTouches.get(n.identifier).x=n.clientX,this.activeTouches.get(n.identifier).y=n.clientY)}this.updateSteeringFromTouches()}onTouchEnd(e){e.preventDefault();for(let t=0;t<e.changedTouches.length;t++){const n=e.changedTouches[t];this.activeTouches.delete(n.identifier)}this.updateSteeringFromTouches()}updateSteeringFromTouches(){const e=window.innerHeight,t=window.innerWidth;if(this.steerTouchId===null||!this.activeTouches.has(this.steerTouchId)){this.touchActive=!1,this.touchSteerInput=0,this.steerTouchId=null;for(const[n,i]of this.activeTouches){if(i.y<e*.5)continue;const s=t-140,o=e-200;if(!(i.x>s&&i.y>o)){this.steerTouchId=n,this.steerCenter.x=i.startX,this.steerCenter.y=i.startY,this.touchActive=!0;break}}}if(this.steerTouchId!==null&&this.activeTouches.has(this.steerTouchId)){const n=this.activeTouches.get(this.steerTouchId),i=n.x-this.steerCenter.x;n.y-this.steerCenter.y;let o=i/120;this.touchSteerInput=Math.max(-.6,Math.min(.6,o)),Math.abs(i)<15&&(this.touchSteerInput=0),this.touchActive=!0}}update(e=1/60){let t=!1;if((this.keys.KeyA||this.keys.ArrowLeft)&&(this.player.steerLeft(e),t=!0),(this.keys.KeyD||this.keys.ArrowRight)&&(this.player.steerRight(e),t=!0),!t&&this.touchActive&&this.touchSteerInput!==0){if(this.touchSteerInput<0){const n=Math.abs(this.touchSteerInput),i=Math.ceil(n*1);for(let s=0;s<i;s++)this.player.steerLeft(e)}else if(this.touchSteerInput>0){const n=this.touchSteerInput,i=Math.ceil(n*1);for(let s=0;s<i;s++)this.player.steerRight(e)}t=!0}(this.keys.Space||window.game&&window.game.hud&&window.game.hud.shootButtonPressed)&&this.player.fireLasers(),(this.keys.KeyB||window.game&&window.game.hud&&window.game.hud.bombButtonPressed)&&this.player.fireBomb(),t||this.player.stabilize(e)}getControlsHelp(){return["A/D or Arrow Keys: Steer Left/Right","Touch (bottom half): Steer Left/Right","Space: Fire Lasers","B: Fire Bomb","Shift: Afterburner","Fighter jet flies forward automatically!"]}enable(){console.log("🎮 Input enabled")}disable(){this.keys={},this.touchActive=!1,this.touchSteerInput=0,this.activeTouches.clear(),this.steerTouchId=null,console.log("🎮 Input disabled")}dispose(){this.disable()}}class Ib{constructor(e){wn(this,"findTerrainMesh",()=>{if(!this.scene)return;let e=null;this.scene.traverse(t=>{e||t.isMesh&&t.geometry&&t.geometry.getAttribute&&t.geometry.getAttribute("position")&&t.geometry.getAttribute("position").count>9e3&&(e=t)}),this.terrainMesh=e,this.terrainMesh?console.log("🗺️ Terrain mesh found for collision detection",this.terrainMesh):console.warn("⚠️ No terrain mesh found for collision detection")});wn(this,"checkLaserTerrainCollision",(e,t,n)=>{const i=t.clone().normalize(),s=t.length()*n,o=5,a=new w;console.log(`[Collision] Checking laser at ${e.x.toFixed(2)}, ${e.y.toFixed(2)}, ${e.z.toFixed(2)}`);let l=-3*o;for(;l<s;){a.copy(e).addScaledVector(i,l);try{const c=mi(a.x,a.y);if(console.log(`[Collision] Step: dist=${l.toFixed(2)}, testPoint=(${a.x.toFixed(2)}, ${a.y.toFixed(2)}, ${a.z.toFixed(2)}), terrainHeight=${c.toFixed(2)}`),a.z<=c){console.log("[Collision] HIT!");const u=a;u.z=c;const h=this.calculateTerrainNormal(u.x,u.y);return{hit:!0,point:u,normal:h,distance:e.distanceTo(u),terrainHeight:c}}}catch(c){console.error("[Collision] Error sampling height:",c)}l+=o}a.copy(e).addScaledVector(i,s);try{const c=mi(a.x,a.y);if(console.log(`[Collision] Final Step: dist=${s.toFixed(2)}, testPoint=(${a.x.toFixed(2)}, ${a.y.toFixed(2)}, ${a.z.toFixed(2)}), terrainHeight=${c.toFixed(2)}`),a.z<=c){console.log("[Collision] HIT!");const u=a;u.z=c;const h=this.calculateTerrainNormal(u.x,u.y);return{hit:!0,point:u,normal:h,distance:e.distanceTo(u),terrainHeight:c}}}catch(c){return console.error("[Collision] Error sampling height at final step:",c),null}return null});wn(this,"calculateTerrainNormal",(e,t)=>{try{const i=mi(e-5,t),s=mi(e+5,t),o=mi(e,t-5),a=mi(e,t+5),l=(s-i)/10,c=(a-o)/10,u=new w(-l,-c,1);return u.normalize(),u}catch{return new w(0,0,1)}});wn(this,"calculateReflection",(e,t,n=.8)=>{const i=e.dot(t),s=e.clone().sub(t.clone().multiplyScalar(2*i));return s.multiplyScalar(n),s});wn(this,"checkPointTerrainCollision",(e,t=0)=>{if(!this.terrainMesh)return null;this.raycaster.set(e,new w(0,0,-1));const n=this.raycaster.intersectObject(this.terrainMesh);if(n.length>0){const i=n[0],s=i.point.z;if(e.z<=s+t)return{hit:!0,point:i.point,terrainHeight:s,penetration:s+t-e.z}}return null});wn(this,"getTerrainHeight",(e,t)=>{if(!this.terrainMesh)return null;const n=new w(e,t,1e4);this.raycaster.set(n,new w(0,0,-1));const i=this.raycaster.intersectObject(this.terrainMesh);return i.length>0?i[0].point.z:null});wn(this,"checkSphereCollision",(e,t,n,i)=>e.distanceTo(n)<=t+i);wn(this,"checkLaserEnemyCollision",(e,t=150)=>window.game&&window.game.enemyManager?window.game.enemyManager.damageEnemiesInArea(e,t,25):[]);wn(this,"update",()=>{this.terrainMesh||this.findTerrainMesh()});wn(this,"dispose",()=>{this.terrainMesh=null,this.scene=null,console.log("🗑️ Collision detector disposed")});this.scene=e,this.terrainMesh=null,this.raycaster=new Mh,console.log("🎯 Collision detector initialized")}}class Db{constructor(e){this.uiManager=e,this.currentScreen="main-menu",console.log("📺 Screen Manager initialized")}showMainMenu(){console.log("📺 Transitioning to main menu"),this.hideAllScreens(),this.uiManager.showStartScreen(),this.currentScreen="main-menu"}showGame(){console.log("📺 Transitioning to game"),this.hideAllScreens(),this.currentScreen="game"}showPause(){console.log("📺 Transitioning to pause"),this.uiManager.showPauseScreen(),this.currentScreen="paused"}resumeGame(){console.log("📺 Resuming game from pause"),this.uiManager.hidePauseScreen(),this.currentScreen="game"}hideAllScreens(){console.log("📺 Hiding all screens"),this.uiManager.hideStartScreen(),this.uiManager.hidePauseScreen()}getCurrentScreen(){return this.currentScreen}isInMainMenu(){return this.currentScreen==="main-menu"}isInGame(){return this.currentScreen==="game"}isPaused(){return this.currentScreen==="paused"}dispose(){this.hideAllScreens(),console.log("🗑️ Screen Manager disposed")}}class Lb{constructor(e){this.game=e,this.pauseScreen=null,this.screenManager=new Db(this),console.log("🎨 UI Manager initialized")}showStartScreen(){let e=document.getElementById("start-screen");e||(this.createStartScreen(),e=document.getElementById("start-screen")),e&&(e.style.display="flex"),document.exitPointerLock()}hideStartScreen(){const e=document.getElementById("start-screen");e&&(e.style.display="none")}createStartScreen(){if(document.getElementById("start-screen"))return;const e=document.createElement("div");e.id="start-screen",e.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(ellipse at center, rgba(0, 17, 34, 0.4) 0%, rgba(0, 0, 0, 0.6) 70%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      font-family: 'Courier New', monospace;
      color: white;
      overflow: hidden;
    `;const t=document.createElement("div");t.style.cssText=`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: transparent;
      z-index: -1;
    `;for(let g=0;g<30;g++){const p=document.createElement("div");p.style.cssText=`
        position: absolute;
        width: 2px;
        height: 2px;
        background: #fff;
        border-radius: 50%;
        left: ${Math.random()*100}%;
        top: ${Math.random()*100}%;
        opacity: ${.2+Math.random()*.4};
      `,t.appendChild(p)}const n=document.createElement("div");n.style.cssText=`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 255, 0, 0.01) 2px,
        rgba(0, 255, 0, 0.01) 4px
      );
      pointer-events: none;
      z-index: 10;
    `;const i=document.createElement("div");i.style.cssText=`
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 50%;
      background-image:
        linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
      background-size: 50px 50px;
      transform: perspective(500px) rotateX(60deg);
      pointer-events: none;
      opacity: 0.15;
    `;const s=document.createElement("h1");s.textContent="VIBEJET",s.style.cssText=`
      font-family: monospace;
      font-size: 6rem;
      font-weight: bold;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 8px;
      color: #00ff00;
      text-shadow: 0 0 10px #00ff00;
      position: relative;
      z-index: 5;
      text-align: center;
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
    `;const o=document.createElement("div");o.textContent=">> VIBE CODE FIGHTER JET GAME <<",o.style.cssText=`
      font-size: 1.2rem;
      color: #00ff00;
      margin-bottom: 3rem;
      text-align: center;
      text-shadow: 0 0 10px #00ff00;
      animation: typewriter 2s steps(32, end) 1s both;
      white-space: nowrap;
      overflow: hidden;
      border-right: 2px solid #00ff00;
      animation: typewriter 2s steps(32, end) 1s both, blink 0.5s ease-in-out 3s, removeCursor 0.1s ease-in-out 3.5s both;
    `;const a=document.createElement("div");a.textContent="INSERT PROMPTS TO MAKE IT BETTER",a.style.cssText=`
      position: absolute;
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1rem;
      color: #00ff00;
      animation: pulse 1.5s infinite;
      text-shadow: 0 0 5px #00ff00;
    `;const l=document.createElement("div");l.style.cssText=`
      display: flex;
      gap: 3rem;
      flex-direction: column;
      align-items: center;
      z-index: 5;
    `;const c=(g,p,_,y)=>{const v=document.createElement("button");v.innerHTML=`
        <span style="display: block; position: relative; z-index: 2;">${g}</span>
      `,v.style.cssText=`
        padding: 1.5rem 4rem;
        font-size: 1.8rem;
        font-weight: 900;
        font-family: 'Courier New', monospace;
        background: transparent;
        color: ${p};
        border: 3px solid ${p};
        border-radius: 12px;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 2px;
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
        width: 500px;
        white-space: nowrap;
        text-shadow: 0 0 5px ${p};
        box-shadow:
          0 0 10px ${p},
          inset 0 0 10px rgba(255, 255, 255, 0.2);
      `;const A=document.createElement("div");return A.style.cssText=`
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(0, 255, 0, 0.2), transparent);
        transition: left 0.5s ease;
        z-index: 1;
      `,v.appendChild(A),v.addEventListener("mouseenter",()=>{v.style.transform="scale(1.05) translateY(-5px)",v.style.boxShadow=`
          0 0 20px ${p},
          inset 0 0 20px rgba(255, 255, 255, 0.3)
        `,v.style.background="rgba(0, 255, 0, 0.1)",A.style.left="100%"}),v.addEventListener("mouseleave",()=>{v.style.transform="scale(1) translateY(0)",v.style.boxShadow=`
          0 0 10px ${p},
          inset 0 0 10px rgba(255, 255, 255, 0.2)
        `,v.style.background="transparent",A.style.left="-100%"}),v.addEventListener("click",y),v},u=c(">>> ENGAGE <<<","#00ff00","#008000",()=>this.game.startGame("play")),h=c(">>> EXPLORE <<<","#00ff00","#008000",()=>this.game.startGame("float")),d=document.createElement("style");d.textContent=`
      @keyframes rainbow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      @keyframes titleTypewriter {
        from { width: 0; }
        to { width: 100%; }
      }

      @keyframes titleBlink {
        0%, 50% { border-color: #00ff00; }
        51%, 100% { border-color: transparent; }
      }

      @keyframes typewriter {
        from { width: 0; }
        to { width: 100%; }
      }

      @keyframes blink {
        0%, 50% { border-color: #00ff00; }
        51%, 100% { border-color: transparent; }
      }

      @keyframes removeCursor {
        0% { border-right: 2px solid #00ff00; }
        100% { border-right: none; }
      }

      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
      }
    `,document.head.appendChild(d),e.appendChild(t),e.appendChild(i),e.appendChild(n),e.appendChild(s),e.appendChild(o),l.appendChild(u),l.appendChild(h),e.appendChild(l),e.appendChild(a);const f=document.createElement("div");f.id="mute-button",f.style.cssText=`
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      background-color: rgba(0, 255, 0, 0.2);
      border: 2px solid #00ff00;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1001;
    `;const m=`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
      </svg>
    `,x=`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <line x1="23" y1="1" x2="1" y2="23"></line>
      </svg>
    `;f.innerHTML=m,f.addEventListener("click",()=>{this.game.app.audioManager.toggleMusic()?f.innerHTML=m:f.innerHTML=x}),e.appendChild(f),document.body.appendChild(e),console.log("🚀 Epic arcade start screen created")}showPauseScreen(){if(this.pauseScreen)return;this.pauseScreen=document.createElement("div"),this.pauseScreen.id="pause-screen",this.pauseScreen.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 2000;
      font-family: monospace;
      color: #00ff00;
      text-align: center;
      backdrop-filter: blur(1px);
    `;const e=document.createElement("div");e.textContent="GAME PAUSED",e.style.cssText=`
      font-size: 4rem;
      font-weight: bold;
      color: #00ff00;
      text-shadow: 0 0 20px #00ff00;
      margin-bottom: 2rem;
      letter-spacing: 8px;
      animation: pausePulse 2s ease-in-out infinite;
    `;const t=document.createElement("div");t.textContent="PRESS SPACE OR ENTER TO CONTINUE",t.style.cssText=`
      font-size: 1.2rem;
      color: #ffff00;
      text-shadow: 0 0 10px #ffff00;
      animation: pauseBlink 1.5s ease-in-out infinite;
      margin-bottom: 1rem;
    `;const n=document.createElement("button");n.textContent="EXIT TO MAIN MENU",n.style.cssText=`
      padding: 0.8rem 2rem;
      font-size: 1rem;
      font-weight: bold;
      font-family: monospace;
      background: linear-gradient(135deg, #ff4444, #cc0000);
      color: #fff;
      border: 2px solid #ff4444;
      border-radius: 8px;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-top: 1rem;
      transition: all 0.3s ease;
      text-shadow: none;
      box-shadow: 0 0 15px rgba(255, 68, 68, 0.5);
    `,n.addEventListener("mouseenter",()=>{n.style.transform="scale(1.05)",n.style.boxShadow="0 0 25px rgba(255, 68, 68, 0.8)"}),n.addEventListener("mouseleave",()=>{n.style.transform="scale(1)",n.style.boxShadow="0 0 15px rgba(255, 68, 68, 0.5)"}),n.addEventListener("click",()=>{this.screenManager.showMainMenu(),this.game.stopGame()});const i=document.createElement("div");i.style.cssText=`
      font-size: 0.9rem;
      color: #00ffff;
      text-shadow: 0 0 5px #00ffff;
      line-height: 1.5;
      margin-top: 2rem;
      opacity: 0.8;
      height: 100px;
    `,this.systemMessages=["FLIGHT SYSTEMS: STANDBY","NAVIGATION: LOCKED","WEAPONS: SAFE","RADAR SYSTEMS: ACTIVE","WEAPON SYSTEMS: RELOADED","ENGINE DIAGNOSTICS: OPTIMAL","TARGETING COMPUTER: CALIBRATED","DEFENSIVE SYSTEMS: ONLINE","FUEL RESERVES: SUFFICIENT","COMMUNICATION ARRAY: OPERATIONAL","STEALTH MODE: AVAILABLE","MISSILE GUIDANCE: UPDATED","AWAITING PILOT INPUT..."],this.currentMessageIndex=0,this.messageElement=document.createElement("div"),this.messageElement.style.cssText=`
      white-space: nowrap;
      overflow: hidden;
      border-right: 2px solid #00ffff;
    `,i.appendChild(this.messageElement),this.startSystemMessageCycle();const s=document.createElement("style");s.textContent=`
      @keyframes pausePulse {
        0%, 100% {
          transform: scale(1);
          text-shadow: 0 0 20px #00ff00;
        }
        50% {
          transform: scale(1.05);
          text-shadow: 0 0 30px #00ff00, 0 0 40px #00ff00;
        }
      }

      @keyframes pauseBlink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
    `,document.head.appendChild(s),this.pauseScreen.appendChild(e),this.pauseScreen.appendChild(t),this.pauseScreen.appendChild(n),this.pauseScreen.appendChild(i),document.body.appendChild(this.pauseScreen),this.setupPauseListeners(),console.log("⏸️ Syndicate-style pause screen shown")}hidePauseScreen(){this.pauseScreen&&(this.stopSystemMessageCycle(),this.pauseScreen.remove(),this.pauseScreen=null,this.removePauseListeners(),console.log("▶️ Pause screen hidden"))}setupPauseListeners(){this.onPauseKeyDown=e=>{(e.code==="Space"||e.code==="Enter"||e.code==="NumpadEnter")&&(this.game.pauseGame(),e.preventDefault())},this.onPauseClick=()=>{this.game.pauseGame()},document.addEventListener("keydown",this.onPauseKeyDown),document.addEventListener("click",this.onPauseClick)}removePauseListeners(){this.onPauseKeyDown&&(document.removeEventListener("keydown",this.onPauseKeyDown),this.onPauseKeyDown=null),this.onPauseClick&&(document.removeEventListener("click",this.onPauseClick),this.onPauseClick=null)}startSystemMessageCycle(){this.typeCurrentMessage()}stopSystemMessageCycle(){this.messageTimeout&&(clearTimeout(this.messageTimeout),this.messageTimeout=null),this.typingTimeout&&(clearTimeout(this.typingTimeout),this.typingTimeout=null)}typeCurrentMessage(){if(!this.messageElement||!this.systemMessages)return;const e=this.systemMessages[this.currentMessageIndex];let t=0;this.messageElement.textContent="";const n=()=>{t<e.length?(this.messageElement.textContent=e.substring(0,t+1),t++,this.typingTimeout=setTimeout(n,50)):this.messageTimeout=setTimeout(()=>{this.currentMessageIndex=(this.currentMessageIndex+1)%this.systemMessages.length,this.typeCurrentMessage()},1500)};n()}dispose(){this.screenManager.dispose(),console.log("🗑️ UI Manager disposed")}}class Fb{constructor(e){this.app=e,this.scene=cn,this.camera=De,this.renderer=Rt,this.gameStarted=!1,this.gamePaused=!1,this.gameOver=!1,this.collisionDetector=new Ib(cn),this.uiManager=new Lb(this),this.inputManager=null,this.player=null,this.enemyManager=null,this.hud=null,this.gameMode="play",this.originalCameraPosition=null,this.originalCameraTarget=null,this.lastUpdateTime=0,this.deltaTime=0,this.pauseCameraAngle=0,this.pauseCameraDistance=50,this.pauseCameraHeight=100,console.log("🎮 Game system initialized")}async startGame(e="play"){var t,n;console.log(`🚀 Starting game in ${e} mode`),this.gameMode=e,this.gameStarted=!0,this.gameOver=!1,this.gamePaused=!1,this.originalCameraPosition||(this.originalCameraPosition=this.camera.position.clone(),this.originalCameraTarget=((n=(t=this.app.controls)==null?void 0:t.target)==null?void 0:n.clone())||new w),e==="play"?await this.initializePlayMode():e==="float"&&this.initializeFloatMode(),this.inputManager&&this.inputManager.enable(),this.app.startExperience&&this.app.startExperience(),this.app.useFreeCamera=!1,e==="play"?this.app.audioManager.transitionToGame():this.app.audioManager.stopAll(),this.uiManager.screenManager.showGame(),this.hideUIForGameMode(e),console.log(`✅ Game started in ${e} mode`)}async initializePlayMode(){console.log("🎮 Initializing play mode..."),this.player=new Rb(this.scene,this.camera,this.collisionDetector),this.inputManager=new Pb(this.player),this.inputManager.game=this;let e=0;for(;!this.player.mesh&&e<50;)await new Promise(t=>setTimeout(t,100)),e++;this.player.mesh?console.log("✅ Player loaded successfully"):console.warn("⚠️ Player took too long to load, continuing anyway"),this.app.controls&&(this.app.controls.enabled=!1),this.setupPlayCamera()}initializeFloatMode(){var t;console.log("🌊 Initializing float mode..."),this.app.controls&&(this.app.controls.enabled=!1),this.app.useFreeCamera=!0,this.camera.rotation.order="YXZ",this.camera.rotation.set(0,0,0),this.camera.quaternion.set(0,0,0,1),this.camera.updateMatrixWorld(!0),this.camera.up.set(0,0,1),this.app.lookTarget&&(this.app.lookTarget=null),this.app.introActive=!1,console.log("🎥 Float mode camera setup:",{useFreeCamera:this.app.useFreeCamera,controlsEnabled:(t=this.app.controls)==null?void 0:t.enabled,pointerLocked:this.app.pointerLocked,introActive:this.app.introActive,center:this.app.center}),setTimeout(()=>{console.log("🔍 Checking useFreeCamera after delay:",this.app.useFreeCamera),this.app.useFreeCamera||(console.warn("⚠️ useFreeCamera was reset to false! Setting it back to true."),this.app.useFreeCamera=!0)},200);const e=new w;this.camera.getWorldDirection(e).normalize(),this.app.cameraRotation.x=Math.asin(Le.clamp(e.z,-1,1)),this.app.cameraRotation.y=Math.atan2(e.x,e.y),this.camera.position.copy(this.originalCameraPosition),setTimeout(()=>{const n=this.renderer.domElement,i=()=>{const s=n.requestPointerLock||n.mozRequestPointerLock||n.webkitRequestPointerLock;return s?(s.call(n),!0):!1};if(!this.app.pointerLocked){const s=i();console.log("🔒 Pointer lock attempted:",s),s||console.warn("Could not lock mouse pointer for free camera")}},100),this.player=null}setupPlayCamera(){this.player&&(this.camera.position.set(0,-1900,1500),this.camera.lookAt(this.player.position))}pauseGame(){!this.gameStarted||this.gameOver||(this.gamePaused=!this.gamePaused,this.gamePaused?(this.inputManager.disable(),this.uiManager.screenManager.showPause(),console.log("⏸️ Game paused")):(this.inputManager.enable(),this.uiManager.screenManager.resumeGame(),console.log("▶️ Game resumed")))}stopGame(){console.trace(),console.log("🛑 Stopping game"),this.gameStarted=!1,this.gamePaused=!1,this.inputManager&&this.inputManager.disable(),document.pointerLockElement&&document.exitPointerLock(),this.player&&this.player.mesh&&(this.scene.remove(this.player.mesh),this.player=null),this.app.controls&&(this.app.controls.enabled=!0,this.originalCameraPosition&&(this.camera.position.copy(this.originalCameraPosition),this.app.controls.target.copy(this.originalCameraTarget))),this.uiManager.screenManager.showMainMenu(),this.hideUIForMainMenu(),this.app.audioManager.transitionToMainMenu(),this.app.introActive=!0,this.app.introElapsed=0}restartGame(){console.log("🔄 Restarting game");const e=this.gameMode;this.stopGame(),setTimeout(()=>{this.startGame(e)},100)}update(e){if(!(!this.gameStarted||this.gameOver)){if(this.deltaTime=e,this.gamePaused&&this.player&&this.player.mesh){this.updatePauseCamera(e);return}this.inputManager&&this.gameMode==="play"&&this.inputManager.update(e),this.collisionDetector.update(),this.player&&this.gameMode==="play"&&this.player.update(e),this.enemyManager&&this.enemyManager.update(e),this.hud&&this.hud.update(e)}}handleInput(e){const t=this.inputManager.getMovementInput(),n=this.inputManager.getActionInput();this.player&&this.gameMode==="play"&&(t.left&&!t.right?this.player.steerLeft(e):t.right&&!t.left?this.player.steerRight(e):this.player.stabilize(e),n.fireLasers&&this.player.fireLasers(),n.fireBombs&&this.player.fireBomb(),n.afterburner?this.player.afterburner||this.player.toggleAfterburner():this.player.afterburner&&this.player.toggleAfterburner()),n.pause&&this.pauseGame(),n.restart&&this.restartGame()}isGameActive(){return this.gameStarted&&!this.gamePaused&&!this.gameOver}isPlayMode(){return this.gameMode==="play"}isFloatMode(){return this.gameMode==="float"}hideUIForGameMode(e){var t;if(e==="play"){(t=this.app.controlPanel)!=null&&t.panel&&(this.app.controlPanel.panel.style.display="none"),this.app.introOverlay&&(this.app.introOverlay.style.display="none");const n=document.getElementById("controls-info");n&&(n.style.display="none")}else e==="float"&&this.showUIForFloatMode()}showUIForFloatMode(){var n,i;(n=this.app.controlPanel)!=null&&n.panel&&(this.app.controlPanel.panel.style.display="block"),this.app.introOverlay&&(this.app.introOverlay.style.display="block");const e=document.getElementById("controls-info");e&&(e.style.display="block");const t=document.querySelector('div[style*="bottom: 10px"][style*="right: 10px"]');t&&(t.style.display="block"),(i=this.app.environmentToggle)!=null&&i.element&&(this.app.environmentToggle.element.style.display="block")}hideUIForMainMenu(){var n,i;(n=this.app.controlPanel)!=null&&n.panel&&(this.app.controlPanel.panel.style.display="none"),this.app.introOverlay&&(this.app.introOverlay.style.display="none");const e=document.getElementById("controls-info");e&&(e.style.display="none");const t=document.querySelector('div[style*="bottom: 10px"][style*="right: 10px"]');t&&(t.style.display="none"),(i=this.app.environmentToggle)!=null&&i.element&&(this.app.environmentToggle.element.style.display="none")}updatePauseCamera(e){if(!this.player||!this.player.mesh)return;this.pauseCameraAngle+=e*.5;const t=this.player.mesh.position,n=t.x+Math.cos(this.pauseCameraAngle)*this.pauseCameraDistance,i=t.y+Math.sin(this.pauseCameraAngle)*this.pauseCameraDistance,s=t.z+this.pauseCameraHeight;this.camera.position.set(n,i,s),this.camera.lookAt(t)}dispose(){this.stopGame(),this.inputManager&&this.inputManager.dispose(),this.uiManager.dispose(),console.log("🗑️ Game disposed")}}class Ub{constructor(){this.audioSources=new Map,this.currentMusic=null,this.masterVolume=1,this.musicVolume=.6,this.previousMusicVolume=this.musicVolume,this.effectsVolume=.8,this.isMuted=!1,console.log("🔊 Audio Manager initialized")}registerAudio(e,t,n={}){const i=new Audio(t);return i.loop=n.loop||!1,i.volume=n.volume||(n.type==="music"?this.musicVolume:this.effectsVolume),i.preload="auto",this.audioSources.set(e,{audio:i,type:n.type||"effect",isPlaying:!1,fadeInterval:null}),console.log(`🔊 Registered audio: ${e} (${n.type||"effect"})`),i}playAudio(e,t={}){const n=this.audioSources.get(e);if(!n){console.warn(`🔊 Audio not found: ${e}`);return}const{audio:i}=n;n.type==="music"&&this.currentMusic&&this.currentMusic!==e&&this.stopMusic(),i.currentTime=0;const s=i.play();s!==void 0&&s.then(()=>{n.isPlaying=!0,n.type==="music"&&(this.currentMusic=e),console.log(`🔊 Playing: ${e}`)}).catch(o=>{console.warn(`🔊 Failed to play ${e}:`,o)})}stopAudio(e){const t=this.audioSources.get(e);if(!t){console.warn(`🔊 Audio not found: ${e}`);return}const{audio:n}=t;n.pause(),n.currentTime=0,t.isPlaying=!1,t.type==="music"&&this.currentMusic===e&&(this.currentMusic=null),t.fadeInterval&&(clearInterval(t.fadeInterval),t.fadeInterval=null),console.log(`🔊 Stopped: ${e}`)}fadeOut(e,t=1e3){const n=this.audioSources.get(e);if(!n||!n.isPlaying)return;const{audio:i}=n,s=i.volume,o=s/(t/50);n.fadeInterval&&clearInterval(n.fadeInterval),n.fadeInterval=setInterval(()=>{i.volume=Math.max(0,i.volume-o),i.volume<=0&&(clearInterval(n.fadeInterval),n.fadeInterval=null,this.stopAudio(e),i.volume=s)},50),console.log(`🔊 Fading out: ${e} over ${t}ms`)}fadeIn(e,t=1e3){const n=this.audioSources.get(e);if(!n){console.warn(`🔊 Audio not found: ${e}`);return}const{audio:i}=n,s=n.type==="music"?this.musicVolume:this.effectsVolume;i.volume=0,this.playAudio(e);const o=s/(t/50);n.fadeInterval&&clearInterval(n.fadeInterval),n.fadeInterval=setInterval(()=>{i.volume=Math.min(s,i.volume+o),i.volume>=s&&(clearInterval(n.fadeInterval),n.fadeInterval=null)},50),console.log(`🔊 Fading in: ${e} over ${t}ms`)}playMusic(e,t=!0){t?this.fadeIn(e,1500):this.playAudio(e)}stopMusic(e=!0){this.currentMusic&&(e?this.fadeOut(this.currentMusic,1e3):this.stopAudio(this.currentMusic))}stopAll(){console.log("🔊 Stopping all audio");for(const[e,t]of this.audioSources)t.isPlaying&&this.stopAudio(e);this.currentMusic=null}pauseAll(){console.log("🔊 Pausing all audio");for(const[e,t]of this.audioSources)t.isPlaying&&t.audio.pause()}resumeAll(){console.log("🔊 Resuming all audio");for(const[e,t]of this.audioSources)if(t.isPlaying){const n=t.audio.play();n!==void 0&&n.catch(i=>{console.warn(`🔊 Failed to resume ${e}:`,i)})}}setMasterVolume(e){this.masterVolume=Math.max(0,Math.min(1,e)),this.updateAllVolumes()}setMusicVolume(e){this.musicVolume=Math.max(0,Math.min(1,e)),this.updateMusicVolumes()}setEffectsVolume(e){this.effectsVolume=Math.max(0,Math.min(1,e)),this.updateEffectVolumes()}updateAllVolumes(){for(const[e,t]of this.audioSources){const n=t.type==="music"?this.musicVolume:this.effectsVolume;t.audio.volume=n*this.masterVolume}}updateMusicVolumes(){for(const[e,t]of this.audioSources)t.type==="music"&&(t.audio.volume=this.musicVolume*this.masterVolume)}updateEffectVolumes(){for(const[e,t]of this.audioSources)t.type==="effect"&&(t.audio.volume=this.effectsVolume*this.masterVolume)}isPlaying(e){const t=this.audioSources.get(e);return t?t.isPlaying:!1}getCurrentMusic(){return this.currentMusic}transitionToMainMenu(){console.log("🔊 Transitioning audio to main menu"),this.stopAll(),this.playMusic("menu-music",!0)}transitionToGame(){console.log("🔊 Transitioning audio to game"),this.stopAll(),this.playMusic("game-music",!0)}transitionToPause(){console.log("🔊 Transitioning audio to pause"),this.pauseAll()}transitionFromPause(){console.log("🔊 Transitioning audio from pause"),this.resumeAll()}transitionToFloat(){console.log("🔊 Transitioning audio to float mode"),this.stopAll()}toggleMusic(){return this.isMuted=!this.isMuted,this.isMuted?(this.musicVolume>0&&(this.previousMusicVolume=this.musicVolume),this.setMusicVolume(0)):this.setMusicVolume(this.previousMusicVolume||.6),!this.isMuted}dispose(){this.stopAll();for(const[e,t]of this.audioSources)t.fadeInterval&&clearInterval(t.fadeInterval);this.audioSources.clear(),this.currentMusic=null,console.log("🗑️ Audio Manager disposed")}}const yc=2,Nn=new w(0,0,1);new ee(.6,.75,.98);new ee(1,.75,.52);new ee(.32,.44,.6);new ee(.6,.48,.36);new ee(.62,.76,.98);new ee(.98,.68,.52);const jn=new w,_c=new w,Fs=new w,Nb=new w,Ob=new w;new ee;new ee;const Us={lastX:0,lastY:0},yn=document.createElement("div");new ee;class Bb{constructor(){this.clock=new _l,this.keys={},this.cameraRotation={x:0,y:0},this.moveSpeed=2,this.lookSpeed=.004,this.stats=null,this.useFreeCamera=!0,this.lookTarget=null,this.pointerLocked=!1,this.mouseDragging=!1,this.fogEnabled=!0,this.sceneFog=null,this.baseFogNear=300,this.baseFogFar=800,this.fogNearScale=.34,this.fogFarScale=.71,this.fadeStartScale=.9,this.fadeEndScale=1,this.morphRegion=.9,this.bloomEnabled=!0,this.bloomStrength=.05,this.bloomThreshold=1,this.bloomSoftKnee=.76,this.bloomSigma=4,this.bloomResolution=356,this.aaEnabled=!0,this.aaSubpixelBlending=1,this.aaContrastThreshold=.0312,this.aaRelativeThreshold=.063,this.sunTime=16.7,this.sunStrengthBase=1.2,this.sunDirection=new w(0,1,0),this.currentSunIntensity=1,this.sunWarmth=.75,this.sunLightColor=new ee(1,.85,.65),this.ambientStrength=.3,this.ambientColor=new ee(.45,.42,.35),this.ambientDirection=new w(1,0,0),this.normalSmoothFactor=.65,this.specularStrength=1,this.skyTintStrength=.15,this.skyTintColor=new ee(.62,.72,.88),this.contrastAdjustment=.1,this.brightnessAdjustment=-.06,this.noiseResolution=IM(),this.shadowsEnabled=!0,this.shadowCascadeCount=3,this.shadowResolution=4192,this.shadowLambda=.6,this.shadowMaxDistance=3600,this.shadowBias=.0015,this.shadowStrength=1,this.shadowSoftness=1,this.shadowCascadeOverlap=.1,this.shadowCascades=[],this.shadowMatrices=[],this.shadowSplitsVec=new it(0,0,0,0),this.shadowTempCorners=Array.from({length:8},()=>new w),this.debugAmbientLight=null,this.debugSunLight=null,this.cameraForward=new w(0,1,0),this.viewMatrix=new Ue,this.shadowCascadeEnabled=[!0,!0,!0],this.shadowDebugEnabled=!1,this.shadowDebugHelpers=[],this.introActive=!0,this.introElapsed=0,this.introOverlay=null,this.introController=null,this.composer=null,this.brightPass=null,this.blurPassH=null,this.blurPassV=null,this.compositePass=null,this.fxaaPass=null,this.brightnessContrastPass=null,this.updateBloomResolutionFn=null,this.applyAASettingsFn=null,this.renderPixelRatio=UM(),this.environmentToggle=null,this.game=null,this.audioManager=null,this.postProcessingEnabled=!0,this.handleComposerResize=null,this.lensFlare=null,this.sunWorldPosition=new w,this.sunDistance=15e3,this.terrainLevels=5,this.terrainResolution=192,this.terrain=null,this.center=null,this.sky=null,this.sky2=null,this.sunMesh=null,this.material=mM,this.scene=cn,this.texture=ks,this.geometry=hM,this.heightSmoothStrength=.02,this.heightGain=.84,this.skyKeyframes=Ch,this.environmentManager=new EM(this),this.applyShaderEnvironment=this.applyShaderEnvironment.bind(this),this.animate=this.animate.bind(this),this.startExperience=this.startExperience.bind(this),this.setBloomResolution=this.setBloomResolution.bind(this),this.setRenderPixelRatio=this.setRenderPixelRatio.bind(this),this.setPostProcessingEnabled=this.setPostProcessingEnabled.bind(this),this.setAntialiasEnabled=this.setAntialiasEnabled.bind(this),this.setAntialiasSubpixel=this.setAntialiasSubpixel.bind(this),this.setAntialiasContrast=this.setAntialiasContrast.bind(this),this.setAntialiasRelative=this.setAntialiasRelative.bind(this),this.setNoiseResolution=this.setNoiseResolution.bind(this),this.setupShadows=this.setupShadows.bind(this),this.renderShadowMaps=this.renderShadowMaps.bind(this),this.setShadowEnabled=this.setShadowEnabled.bind(this),this.setShadowStrength=this.setShadowStrength.bind(this),this.setShadowBias=this.setShadowBias.bind(this),this.setShadowMaxDistance=this.setShadowMaxDistance.bind(this),this.setShadowResolution=this.setShadowResolution.bind(this),this.setShadowCascadeEnabled=this.setShadowCascadeEnabled.bind(this),this.setShadowSoftness=this.setShadowSoftness.bind(this)}init(){var t;this.setupStats(),this.setupHud(),this.setupAudio();const e=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);this.terrainResolution=e?96:192,_d(this.heightSmoothStrength),Sd(this.heightGain),this.createTerrain(),this.setupPostProcessing(),this.setupShadows(),this.setupLensFlare(),this.setupSunMesh(),this.setupDebugHelpers(),this.setupSky(),this.setupIntroOverlay(),De.position.set(0,0,50),De.up.copy(Nn),De.lookAt(new w(0,1,0)),De.updateMatrixWorld(!0),this.viewMatrix.copy(De.matrixWorldInverse),De.getWorldDirection(this.cameraForward),this.cameraForward.normalize(),this.center=new w(0,0,0),this.lookTarget=this.center.clone(),this.updateDebugLight(),(t=this.terrain)==null||t.updateViewMatrix(this.viewMatrix),this.setupEnvironmentToggle(),this.setupControlPanel(),this.setupInputHandlers(),this.setupGame(),this.applyShaderEnvironment(this.terrain.activeShaderIndex)}setupStats(){this.stats=new cM,this.stats.showPanel(0),this.stats.dom.style.position="absolute",this.stats.dom.style.left="10px",this.stats.dom.style.bottom="10px",this.stats.dom.style.top="auto",document.body.appendChild(this.stats.dom)}setupHud(){yn.style.position="absolute",yn.style.bottom="10px",yn.style.right="10px",yn.style.padding="6px 10px",yn.style.background="rgba(0, 0, 0, 0.45)",yn.style.color="#fff",yn.style.fontFamily="monospace",yn.style.fontSize="12px",yn.style.lineHeight="1.4",yn.style.pointerEvents="none",Qt.appendChild(yn)}setupAudio(){this.audioManager=new Ub,this.audioManager.registerAudio("menu-music","/src/assets/audio/SkylineShowdown.mp3",{type:"music",loop:!0}),this.audioManager.registerAudio("game-music","/src/assets/audio/level1.mp3",{type:"music",loop:!0})}createTerrain(){const e=this.terrain?this.terrain.activeShaderIndex:yc;if(this.terrain){const t=new Set,n=new Set;this.terrain.traverse(i=>{var s,o;i.geometry&&n.add(i.geometry),i.material&&t.add(i.material),(s=i.userData)!=null&&s.mainMaterial&&t.add(i.userData.mainMaterial),(o=i.userData)!=null&&o.depthMaterial&&t.add(i.userData.depthMaterial)}),t.forEach(i=>{var s;return(s=i==null?void 0:i.dispose)==null?void 0:s.call(i)}),n.forEach(i=>{var s;return(s=i==null?void 0:i.dispose)==null?void 0:s.call(i)}),this.scene.remove(this.terrain)}this.terrain=new JM(PM,8192,this.terrainLevels,this.terrainResolution,{enableShadows:this.shadowsEnabled,defaultShaderIndex:yc}),this.scene.add(this.terrain),this.terrain.setShader(e),this.terrain.setShadowsEnabled(this.shadowsEnabled),this.terrain.updateMorphRegion(this.morphRegion),this.terrain.updateSun(this.sunDirection,this.currentSunIntensity),this.terrain.updateAmbient(this.ambientDirection,this.ambientStrength,this.ambientColor),this.terrain.updateSmoothFactor(this.normalSmoothFactor),this.terrain.updateSpecularStrength(this.specularStrength),this.terrain.updateSkyTint(this.skyTintColor,this.skyTintStrength),this.applyShadowUniformsToTerrain(),this.terrain.updateCascadeEnabled(this.shadowCascadeEnabled),this.terrain.updateViewMatrix(this.viewMatrix)}setupPostProcessing(){const{composer:e,brightPass:t,blurPassH:n,blurPassV:i,compositePass:s,fxaaPass:o,brightnessContrastPass:a,setBloomResolution:l,applyAntialiasSettings:c,handleResize:u}=mb({renderer:Rt,scene:this.scene,camera:De,bloomStrength:this.bloomStrength,bloomThreshold:this.bloomThreshold,bloomSoftKnee:this.bloomSoftKnee,bloomSigma:this.bloomSigma,bloomResolution:this.bloomResolution,aaEnabled:this.aaEnabled,aaSubpixelBlending:this.aaSubpixelBlending,aaContrastThreshold:this.aaContrastThreshold,aaRelativeThreshold:this.aaRelativeThreshold,brightness:this.brightnessAdjustment,contrast:this.contrastAdjustment});this.composer=e,this.brightPass=t,this.blurPassH=n,this.blurPassV=i,this.compositePass=s,this.fxaaPass=o,this.brightnessContrastPass=a,this.updateBloomResolutionFn=l,this.applyAASettingsFn=c,this.brightPass&&(this.brightPass.material.uniforms.uThreshold.value=this.bloomThreshold,this.brightPass.material.uniforms.uSoftKnee.value=this.bloomSoftKnee),this.blurPassH&&(this.blurPassH.material.uniforms.uSigma.value=this.bloomSigma),this.blurPassV&&(this.blurPassV.material.uniforms.uSigma.value=this.bloomSigma),this.compositePass&&(this.compositePass.material.uniforms.uBloomStrength.value=this.bloomStrength),this.setBloomResolution(this.bloomResolution),this.handleComposerResize=()=>{this.composer&&u(Qt.offsetWidth,Qt.offsetHeight)},window.addEventListener("resize",this.handleComposerResize),this.handleComposerResize(),this.applyBloomSettings(),this.applyAntialiasSettings()}applyBloomSettings(){this.brightPass&&(this.brightPass.material.uniforms.uThreshold.value=this.bloomThreshold,this.brightPass.material.uniforms.uSoftKnee.value=this.bloomSoftKnee),this.blurPassH&&this.blurPassH.setSigma(this.bloomSigma),this.blurPassV&&this.blurPassV.setSigma(this.bloomSigma)}setBloomResolution(e){var n;const t=Le.clamp(e,32,1024);this.bloomResolution=t,(n=this.updateBloomResolutionFn)==null||n.call(this,t)}setRenderPixelRatio(e){var n;const t=Le.clamp(e,.5,3);this.renderPixelRatio=t,FM(t),(n=this.handleComposerResize)==null||n.call(this)}setPostProcessingEnabled(e){this.postProcessingEnabled=!!e,this.applyAntialiasSettings()}setNoiseResolution(e){const t=Le.clamp(e,Ip,Dp),n=Math.pow(2,Math.round(Math.log2(t))),i=DM(n);this.noiseResolution=i}setShadowEnabled(e){var n,i;const t=!!e;this.shadowsEnabled!==t&&(this.shadowsEnabled=t,t?(this.setupShadows(),this.renderShadowMaps()):(this.shadowCascades.forEach(s=>{var o,a;(a=(o=s.renderTarget)==null?void 0:o.dispose)==null||a.call(o)}),this.shadowCascades=[],this.shadowMatrices=[],this.shadowSplitsVec.set(0,0,0,0),(n=this.terrain)==null||n.setShadowsEnabled(!1),this.applyShadowUniformsToTerrain()),(i=this.terrain)==null||i.updateCascadeEnabled(this.shadowCascadeEnabled))}setShadowStrength(e){this.shadowStrength=Le.clamp(e,0,1),this.applyShadowUniformsToTerrain(),this.renderShadowMaps()}setShadowBias(e){this.shadowBias=Le.clamp(e,1e-5,.01),this.applyShadowUniformsToTerrain()}setShadowMaxDistance(e){this.shadowMaxDistance=Math.max(50,e),this.calculateShadowCascades(),this.renderShadowMaps()}setShadowResolution(e){const t=Math.max(128,Math.min(2048,e)),n=Math.pow(2,Math.round(Math.log2(t)));n!==this.shadowResolution&&(this.shadowResolution=n,this.setupShadows(),this.renderShadowMaps())}setShadowSoftness(e){this.shadowSoftness=Le.clamp(e,.1,4),this.applyShadowUniformsToTerrain()}setShadowCascadeEnabled(e,t){var n;e<0||e>=this.shadowCascadeEnabled.length||(this.shadowCascadeEnabled[e]=!!t,(n=this.terrain)==null||n.updateCascadeEnabled(this.shadowCascadeEnabled),this.applyShadowUniformsToTerrain(),this.shadowsEnabled&&this.renderShadowMaps(),this.shadowDebugHelpers[e]&&(this.shadowDebugHelpers[e].visible=this.shadowDebugEnabled&&this.shadowCascadeEnabled[e]))}setShadowDebugEnabled(e){this.shadowDebugEnabled=!!e,this.shadowDebugHelpers.forEach((t,n)=>{t&&(t.visible=this.shadowDebugEnabled&&this.shadowCascadeEnabled[n])})}setAntialiasEnabled(e){this.aaEnabled=!!e,this.applyAntialiasSettings()}setAntialiasSubpixel(e){this.aaSubpixelBlending=Le.clamp(e,0,1.5),this.applyAntialiasSettings()}setAntialiasContrast(e){this.aaContrastThreshold=Le.clamp(e,.001,.2),this.applyAntialiasSettings()}setAntialiasRelative(e){this.aaRelativeThreshold=Le.clamp(e,.001,.3),this.applyAntialiasSettings()}applyAntialiasSettings(){var e;(e=this.applyAASettingsFn)==null||e.call(this,{enabled:this.aaEnabled&&this.postProcessingEnabled,subpixel:this.aaSubpixelBlending,contrastThreshold:this.aaContrastThreshold,relativeThreshold:this.aaRelativeThreshold})}setupLensFlare(){this.lensFlare=new jM(this.scene,De,Rt),this.lensFlare.setSunColor(this.sunLightColor)}setupSunMesh(){const e=new sn(200,16,16),t=new Vt({color:16777096,fog:!1,depthTest:!0,depthWrite:!0,transparent:!0,opacity:1,blending:Yt});t.color.multiplyScalar(2),this.sunMesh=new qe(e,t),this.sunMesh.frustumCulled=!0,this.scene.add(this.sunMesh)}setupDebugHelpers(){const n=new zn(28,52,420,6,1),i=new Mi(15,80,6);let s;try{s=new St({uniforms:{uBaseColor:{value:new ee(13687008)},uSunDirection:{value:this.sunDirection.clone()},uSunIntensity:{value:this.currentSunIntensity},uSunColor:{value:this.sunLightColor.clone()},uAmbientStrength:{value:this.ambientStrength},uAmbientColor:{value:this.ambientColor.clone()}},vertexShader:QM,fragmentShader:eb}),console.log("Obelisk custom shader created successfully")}catch(f){console.error("Shader creation failed, using fallback:",f),s=new Vt({color:16737792})}const o=new qe(n,s),a=new qe(i,s),l=new kn;o.rotation.x=Math.PI/2,a.rotation.x=Math.PI/2,a.position.z=420*.5+80*.5,l.add(o),l.add(a);const c=200,u=120,h=mi(c,u),d=h-420*.2;l.position.set(c,u,d),o.castShadow=!0,o.receiveShadow=!0,a.castShadow=!0,a.receiveShadow=!0,this.scene.add(l),this.debugObelisk=l,console.log(`Obelisk created at position: (${c}, ${u}, ${d.toFixed(2)})`),console.log(`Terrain height at obelisk: ${h.toFixed(2)}`),console.log("Obelisk with spike added to scene"),this.debugAmbientLight=new xh(16777215,.35),this.scene.add(this.debugAmbientLight),this.debugSunLight=new gh(16777215,.7),this.debugSunLight.castShadow=!1,this.scene.add(this.debugSunLight),this.debugSunLight.target.position.copy(this.center??new w),this.scene.add(this.debugSunLight.target),this.updateDebugLight()}setupSky(){this.environmentManager.setupSky()}setupShadows(){var e,t;if(this.shadowCascades.forEach(n=>{var i,s,o,a,l,c,u;(s=(i=n.renderTarget)==null?void 0:i.dispose)==null||s.call(i),n.helper&&((o=n.helper.parent)==null||o.remove(n.helper),(l=(a=n.helper.geometry)==null?void 0:a.dispose)==null||l.call(a),(u=(c=n.helper.material)==null?void 0:c.dispose)==null||u.call(c))}),this.shadowCascades=[],this.shadowMatrices=[],this.shadowDebugHelpers=[],!this.shadowsEnabled){(e=this.terrain)==null||e.setShadowsEnabled(!1),this.applyShadowUniformsToTerrain();return}for(let n=0;n<this.shadowCascadeCount;n++){const i=new fn(this.shadowResolution,this.shadowResolution);i.texture.minFilter=pt,i.texture.magFilter=pt,i.texture.generateMipmaps=!1,i.depthTexture=new al(this.shadowResolution,this.shadowResolution),i.depthTexture.type=is;const s=new tr(-1,1,1,-1,.1,2048),o=new _p(s);o.visible=this.shadowDebugEnabled,this.scene.add(o),this.shadowCascades.push({camera:s,renderTarget:i,helper:o}),this.shadowDebugHelpers.push(o),this.shadowMatrices.push(new Ue)}this.shadowSplitsVec.set(0,0,0,this.shadowMaxDistance),(t=this.terrain)==null||t.setShadowsEnabled(!0),this.applyShadowUniformsToTerrain()}applyShadowUniformsToTerrain(){if(!this.terrain)return;const e=[null,null,null];for(let t=0;t<Math.min(this.shadowCascades.length,e.length);t++)e[t]=this.shadowCascades[t].renderTarget.depthTexture;this.terrain.updateShadowUniforms(this.shadowMatrices,this.shadowSplitsVec,e,this.shadowBias,this.shadowStrength,this.shadowsEnabled&&this.shadowCascades.length>0,this.shadowCascadeEnabled,this.shadowResolution,this.shadowSoftness),this.terrain.updateCascadeEnabled(this.shadowCascadeEnabled),this.viewMatrix&&this.terrain.updateViewMatrix(this.viewMatrix)}calculateShadowCascades(){if(!this.shadowCascades.length||!this.shadowsEnabled)return;const e=De,t=e.near,n=Math.min(this.shadowMaxDistance,e.far),i=this.shadowLambda,s=this.shadowCascades.length,o=[];for(let u=0;u<s;u++){const h=(u+1)/s,d=t*Math.pow(n/t,h),f=t+(n-t)*h,m=Le.lerp(f,d,i);o.push(m)}const a=[];let l=t,c=t;for(let u=0;u<s;u++){const h=o[u];if(h==null)continue;const f=Math.max(h-c,0)*this.shadowCascadeOverlap,m=l,x=Math.min(n,h+f);x>m+.001&&this.updateCascadeCamera(u,m,x,e);const g=Math.max(m+.001,h-f);a[u]=g,l=g,c=h}this.shadowSplitsVec.set(a[0]??n,a[1]??n,a[2]??n,n),this.applyShadowUniformsToTerrain()}updateCascadeCamera(e,t,n,i){var Oe;const s=this.shadowCascades[e];if(!s)return;const o=new w;i.getWorldDirection(o),o.normalize();const a=new w().copy(i.up).normalize(),l=new w().crossVectors(o,a).normalize();a.crossVectors(l,o).normalize();const c=new w().copy(i.position),u=Math.tan(Le.degToRad(i.fov*.5)),h=i.aspect,d=c.clone().add(o.clone().multiplyScalar(t)),f=c.clone().add(o.clone().multiplyScalar(n)),m=u*t,x=m*h,g=u*n,p=g*h,_=this.shadowTempCorners,y=a.clone().multiplyScalar(m),v=l.clone().multiplyScalar(x),A=a.clone().multiplyScalar(g),E=l.clone().multiplyScalar(p);_[0].copy(d).sub(v).sub(y),_[1].copy(d).add(v).sub(y),_[2].copy(d).sub(v).add(y),_[3].copy(d).add(v).add(y),_[4].copy(f).sub(E).sub(A),_[5].copy(f).add(E).sub(A),_[6].copy(f).sub(E).add(A),_[7].copy(f).add(E).add(A);const P=this.sunDirection.clone().normalize().clone().negate(),M=Math.abs(P.z)>.99?new w(1,0,0):new w(0,0,1),b=new w().crossVectors(M,P).normalize(),I=new w().crossVectors(P,b).normalize(),U={x:1/0,y:1/0,z:1/0},k={x:-1/0,y:-1/0,z:-1/0},q=Nb.copy(i.position),H=q.dot(b),X=q.dot(I),Z=q.dot(P),z=C=>{const S=C.dot(b),O=C.dot(I),V=C.dot(P);S<U.x&&(U.x=S),O<U.y&&(U.y=O),V<U.z&&(U.z=V),S>k.x&&(k.x=S),O>k.y&&(k.y=O),V>k.z&&(k.z=V)};for(let C=0;C<8;C++)z(_[C]);z(q),(Oe=this.terrain)!=null&&Oe.offset&&z(Ob.copy(this.terrain.offset));const ue=this.shadowCascades.length||1,fe=ue>1?e/(ue-1):0,Me=Le.lerp(400,this.shadowMaxDistance,fe);z(q.clone().addScaledVector(Nn,-Me));const We=Le.lerp(600,1200,fe);z(q.clone().addScaledVector(Nn,We));const Xe=Le.lerp(18,60,fe),Qe=Le.lerp(100,300,fe),et=(U.x+k.x)*.5,j=(U.y+k.y)*.5;let ne=Le.lerp(H,et,fe),ge=Le.lerp(X,j,fe),Ae=Math.max(Math.abs(ne-U.x),Math.abs(ne-k.x)),be=Math.max(Math.abs(ge-U.y),Math.abs(ge-k.y)),He=Math.max(Ae,be)+Xe;He=Math.max(He,.001);const at=U.z-Qe,D=k.z+Qe,re=Math.max(1,D-at),te=(at+D)*.5,Q=re*.5,L=He*2/this.shadowResolution;L>0&&(ne=Math.round((ne-H)/L)*L+H,ge=Math.round((ge-X)/L)*L+X),Ae=Math.max(Math.abs(ne-U.x),Math.abs(ne-k.x)),be=Math.max(Math.abs(ge-U.y),Math.abs(ge-k.y)),He=Math.max(He,Ae+Xe,be+Xe);const $=He,oe=q.clone().addScaledVector(b,ne-H).addScaledVector(I,ge-X).addScaledVector(P,te-Z),J=s.camera,Ne=oe.clone().sub(P.clone().multiplyScalar(Q));J.position.copy(Ne),J.up.copy(I),J.lookAt(oe),J.updateMatrixWorld(!0),J.matrixWorldInverse.copy(J.matrixWorld).invert(),J.left=-He,J.right=He,J.bottom=-$,J.top=$,J.near=.1,J.far=re,J.updateProjectionMatrix(),J.updateMatrixWorld(!0),J.matrixWorldInverse.copy(J.matrixWorld).invert(),this.shadowMatrices[e].copy(J.projectionMatrix).multiply(J.matrixWorldInverse),s.helper&&(s.helper.update(),s.helper.visible=this.shadowDebugEnabled&&this.shadowCascadeEnabled[e])}renderShadowMaps(){var o,a,l;if(!this.shadowsEnabled||!this.shadowCascades.length||!this.terrain)return;this.calculateShadowCascades();const e=Rt.getRenderTarget(),t=Rt.autoClear,n=(o=this.sky)==null?void 0:o.visible,i=(a=this.sky2)==null?void 0:a.visible,s=(l=this.sunMesh)==null?void 0:l.visible;this.sky&&(this.sky.visible=!1),this.sky2&&(this.sky2.visible=!1),this.sunMesh&&(this.sunMesh.visible=!1),this.terrain.useDepthMaterial(!0),Rt.autoClear=!0;for(let c=0;c<this.shadowCascades.length;c++){const u=this.shadowCascades[c];this.shadowCascadeEnabled[c]&&(Rt.setRenderTarget(u.renderTarget),Rt.clear(!0,!0,!0),Rt.render(this.scene,u.camera))}this.terrain.useDepthMaterial(!1),this.sky!==void 0&&(this.sky.visible=n),this.sky2!==void 0&&(this.sky2.visible=i),this.sunMesh!==void 0&&(this.sunMesh.visible=s),Rt.setRenderTarget(e),Rt.autoClear=t}setupIntroOverlay(){this.introController=gb({container:Qt,onStart:this.startExperience}),this.introOverlay=this.introController.overlay}setupControlPanel(){this.controlPanel=xb({app:this,container:Qt,applyShaderEnvironment:this.applyShaderEnvironment,createTerrain:()=>this.createTerrain(),setTerrainSmoothing:e=>this.setTerrainSmoothing(e),setHeightGain:e=>this.setHeightGain(e)})}setupEnvironmentToggle(){this.environmentToggle=yb({app:this,container:Qt})}setupGame(){var n,i;this.game=new Fb(this),window.game=this.game,this.game.uiManager.showStartScreen(),this.audioManager.transitionToMainMenu(),(n=this.controlPanel)!=null&&n.panel&&(this.controlPanel.panel.style.display="none");const e=document.getElementById("controls-info");e&&(e.style.display="none");const t=document.querySelector('div[style*="bottom: 10px"][style*="right: 10px"]');t&&(t.style.display="none"),(i=this.environmentToggle)!=null&&i.element&&(this.environmentToggle.element.style.display="none"),console.log("🎮 Game system integrated with TerrainApp")}setupInputHandlers(){const e=Rt.domElement;e.tabIndex=0;const t=()=>document.pointerLockElement||document.mozPointerLockElement||document.webkitPointerLockElement,n=()=>{const h=e.requestPointerLock||e.mozRequestPointerLock||e.webkitRequestPointerLock;return h?(h.call(e),!0):!1},i=()=>{const h=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock;h==null||h.call(document)},s=()=>{this.pointerLocked=t()===e,this.pointerLocked?(this.mouseDragging=!1,document.body.style.cursor="none"):(document.body.style.cursor="auto",this.game&&this.game.gameMode==="float"&&console.log("🚪 Pointer unlocked in float mode - returning to main menu"))},o=h=>{console.warn("Pointer lock failed",h)},a=(h,d)=>{this.cameraRotation.y-=h*this.lookSpeed,this.cameraRotation.x-=d*this.lookSpeed},l=h=>{if(this.useFreeCamera){if(this.pointerLocked){const d=h.movementX??h.mozMovementX??h.webkitMovementX??0,f=h.movementY??h.mozMovementY??h.webkitMovementY??0;a(d,f)}else if(this.mouseDragging){const d=h.clientX-Us.lastX,f=h.clientY-Us.lastY;Us.lastX=h.clientX,Us.lastY=h.clientY,a(d,f)}}},c=h=>{if(!this.useFreeCamera||h.button!==0)return;e.focus(),n()||(this.mouseDragging=!0,Us.lastX=h.clientX,Us.lastY=h.clientY)},u=()=>{this.mouseDragging=!1};document.addEventListener("pointerlockchange",s),document.addEventListener("mozpointerlockchange",s),document.addEventListener("webkitpointerlockchange",s),document.addEventListener("pointerlockerror",o),document.addEventListener("mozpointerlockerror",o),document.addEventListener("webkitpointerlockerror",o),document.addEventListener("mousemove",l),document.addEventListener("pointermove",l),document.addEventListener("mouseup",u),e.addEventListener("mousedown",c),e.addEventListener("mouseleave",u),document.addEventListener("keydown",h=>{if(this.introActive&&(h.code==="Enter"||h.code==="NumpadEnter")){this.startExperience(),h.preventDefault();return}if(this.keys[h.code]=!0,h.code==="KeyT"){const f=this.terrain.cycleShader();this.applyShaderEnvironment(f),h.preventDefault()}if(h.code==="KeyF"&&(this.fogEnabled=!this.fogEnabled,this.fogEnabled?(this.sceneFog||(this.sceneFog=new _i(0,this.baseFogNear,this.baseFogFar)),cn.fog=this.sceneFog):(this.sceneFog=cn.fog,cn.fog=null),this.applyShaderEnvironment(this.terrain.activeShaderIndex),h.preventDefault()),h.code==="KeyP"&&this.stats){const f=this.stats.dom.children;let m=0;for(let g=0;g<f.length;g++)if(f[g].style.display==="block"){m=g;break}const x=(m+1)%3;this.stats.showPanel(x),h.preventDefault()}h.code==="ArrowUp"&&(this.cameraRotation.x=Math.min(this.cameraRotation.x+.1,Math.PI/2),h.preventDefault()),h.code==="ArrowDown"&&(this.cameraRotation.x=Math.max(this.cameraRotation.x-.1,-Math.PI/2),h.preventDefault()),h.code==="ArrowLeft"&&(this.cameraRotation.y+=.1,h.preventDefault()),h.code==="ArrowRight"&&(this.cameraRotation.y-=.1,h.preventDefault()),h.code==="KeyC"&&(this.useFreeCamera=!this.useFreeCamera,this.useFreeCamera?(De.rotation.order="YXZ",De.getWorldDirection(jn).normalize(),this.cameraRotation.x=Math.asin(Le.clamp(jn.z,-1,1)),this.cameraRotation.y=Math.atan2(jn.x,jn.y),this.pointerLocked||n()||(this.mouseDragging=!1)):(De.up.copy(Nn),De.lookAt(this.center),this.mouseDragging=!1,this.pointerLocked&&i()),h.preventDefault()),h.code==="Escape"&&(this.game&&this.game.gameMode==="float"&&(console.log("🚪 Escape pressed in float mode - returning to main menu"),this.game.stopGame()),h.preventDefault()),["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","Space","ShiftLeft","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(h.code)&&h.preventDefault()}),document.addEventListener("keyup",h=>{this.keys[h.code]=!1}),Qt.addEventListener("contextmenu",h=>h.preventDefault())}applyShaderEnvironment(e=yc){var i;const{config:t}=this.environmentManager.applyEnvironment(e);this.environmentManager.updateSun();const n=(t==null?void 0:t.name)||this.environmentName||"Environment";return(i=this.environmentToggle)==null||i.update(n),t}updateDebugLight(){if(!this.debugSunLight)return;const e=this.center?this.center.clone():new w,t=this.sunDirection.clone().normalize().multiplyScalar(600);this.debugSunLight.position.copy(e).add(t),this.debugSunLight.intensity=Math.max(.1,this.currentSunIntensity),this.debugSunLight.target&&(this.debugSunLight.target.position.copy(e),this.debugSunLight.target.updateMatrixWorld(!0))}startExperience(){var e,t;this.introActive&&(this.introActive=!1,this.introElapsed=0,Object.keys(this.keys).forEach(n=>{this.keys[n]=!1}),(t=(e=this.introController)==null?void 0:e.fadeOut)==null||t.call(e))}animate(){var t,n,i;window.requestAnimationFrame(this.animate),(t=this.stats)==null||t.begin();const e=this.clock.getDelta();if(this.introActive&&(this.introElapsed+=e),this.scene.fog&&this.terrain.updateFog(this.scene.fog),this.introActive){const s=900+65*Math.sin(this.introElapsed*.45),o=this.introElapsed*.18,a=210+55*Math.sin(this.introElapsed*.2),l=120*Math.sin(this.introElapsed*.6);De.position.set(this.center.x+Math.cos(o)*s,this.center.y+Math.sin(o)*s,a),Fs.copy(this.center).addScaledVector(Nn,60+30*Math.sin(this.introElapsed*.8)),Fs.x+=Math.cos(o+Math.PI/2)*l,Fs.y+=Math.sin(o+Math.PI/2)*l,De.up.copy(Nn),De.lookAt(Fs),this.cameraRotation.x=De.rotation.x,this.cameraRotation.y=De.rotation.y}else{const s=this.moveSpeed;if(this.useFreeCamera){const o=Math.PI/2-.01;this.cameraRotation.x=Le.clamp(this.cameraRotation.x,-o,o);const a=Math.cos(this.cameraRotation.x);jn.set(Math.sin(this.cameraRotation.y)*a,Math.cos(this.cameraRotation.y)*a,Math.sin(this.cameraRotation.x)).normalize(),_c.crossVectors(jn,Nn).normalize(),Fs.copy(jn).add(De.position),De.up.copy(Nn),De.lookAt(Fs),this.keys.KeyW&&De.position.addScaledVector(jn,s),this.keys.KeyS&&De.position.addScaledVector(jn,-s),this.keys.KeyA&&De.position.addScaledVector(_c,-s),this.keys.KeyD&&De.position.addScaledVector(_c,s),(this.keys.KeyQ||this.keys.Space)&&De.position.addScaledVector(Nn,s),(this.keys.KeyE||this.keys.ShiftLeft)&&De.position.addScaledVector(Nn,-s)}else this.keys.KeyW&&(De.position.y-=s),this.keys.KeyS&&(De.position.y+=s),this.keys.KeyA&&(De.position.x-=s),this.keys.KeyD&&(De.position.x+=s),(this.keys.KeyQ||this.keys.Space)&&(De.position.z+=s),(this.keys.KeyE||this.keys.ShiftLeft)&&(De.position.z-=s),De.lookAt(this.center),this.cameraRotation.x=De.rotation.x,this.cameraRotation.y=De.rotation.y}if(this.terrain.offset.x=De.position.x,this.terrain.offset.y=De.position.y,this.sunWorldPosition&&this.sunDirection&&(this.sunWorldPosition.copy(De.position).addScaledVector(this.sunDirection,this.sunDistance),this.sunMesh&&this.sunMesh.position.copy(this.sunWorldPosition)),this.sky&&(this.sky.position.copy(De.position),this.sky.updateMatrixWorld()),this.sky2&&(this.sky2.position.copy(De.position),this.sky2.updateMatrixWorld()),this.game&&this.game.update(e),De.updateMatrixWorld(!0),this.viewMatrix.copy(De.matrixWorldInverse),(n=this.terrain)==null||n.updateViewMatrix(this.viewMatrix),this.lensFlare?(this.lensFlare.update(e,this.sunWorldPosition,this.terrain),this.lensFlare.setSunColor(this.sunLightColor),this.sunMesh&&(this.sunMesh.visible=this.currentSunIntensity>.02&&!this.lensFlare.occluded)):this.sunMesh&&(this.sunMesh.visible=this.currentSunIntensity>.02),yn.textContent=`Camera: ${De.position.x.toFixed(1)}, ${De.position.y.toFixed(1)}, ${De.position.z.toFixed(1)}
Rotation: ${this.cameraRotation.x.toFixed(2)}, ${this.cameraRotation.y.toFixed(2)}
Fog: ${this.fogEnabled?"On":"Off"}
Sun: ${this.sunTime.toFixed(1)}h`,this.shadowsEnabled&&this.shadowCascades.length&&this.renderShadowMaps(),this.composer&&this.postProcessingEnabled){const s=this.bloomEnabled&&this.bloomStrength>.001;this.compositePass&&(this.compositePass.material.uniforms.uBloomStrength.value=s?this.bloomStrength:0),this.brightPass&&(this.brightPass.enabled=s),this.blurPassH&&(this.blurPassH.enabled=s),this.blurPassV&&(this.blurPassV.enabled=s),this.composer.render()}else this.brightPass&&(this.brightPass.enabled=!1),this.blurPassH&&(this.blurPassH.enabled=!1),this.blurPassV&&(this.blurPassV.enabled=!1),Rt.render(this.scene,De);(i=this.stats)==null||i.end()}setTerrainSmoothing(e){this.heightSmoothStrength=Le.clamp(e,0,1),_d(this.heightSmoothStrength)}setHeightGain(e){this.heightGain=Le.clamp(e,0,4),Sd(this.heightGain)}}const Lp=new Bb;window.THREE=sM;Uc.webgl||(Uc.addGetWebGLMessage(),Qt.innerHTML="");Lp.init();Lp.animate();
