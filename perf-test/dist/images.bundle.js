(()=>{"use strict";var s={n:t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return s.d(o,{a:o}),o},d:(t,o)=>{for(var e in o)s.o(o,e)&&!s.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})},o:(s,t)=>Object.prototype.hasOwnProperty.call(s,t),r:s=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})}},t={};s.r(t),s.d(t,{default:()=>a,options:()=>i});const o=require("k6/http");var e=s.n(o);const p=require("k6"),i={scenarios:{imageproxy_images:{executor:"ramping-vus",startVUs:0,stages:[{duration:"10s",target:50},{duration:"60s",target:100},{duration:"10s",target:50}],gracefulRampDown:"5s"}},thresholds:{http_req_duration:["p(95)<200"],http_req_failed:["rate<0.01"]}},r={tags:{name:"imageproxy"}};function a(){const s=g(),t=e().get(s,{...r});(0,p.check)(t,{"is status 200":s=>(console.log(s.status,s.url),200===s.status)}),(0,p.sleep)(1)}const g=()=>{let s=h[m(0,h.length-1)];return s=s.replace(/x[0-9]+/,`x${m(100,1e3)}`),`http://localhost:8080${s}`},m=(s,t)=>Math.floor(Math.random()*(t-s+1)+s);let h=["/x220,375ml/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/h04/h19/14405062262814.png","/x1000,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/h43/hc1/14938355531806.png","/270x,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/h71/hb7/12267817926686.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hfd/h83/12034978611230.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hb4/h56/9683874873374.png","/x1000,50ml,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/h09/hbe/15448923635742.png","/sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hba/h71/9299438862366.png","/x1000,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/h95/h0a/15448916230174.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/h3a/h99/11192415289374.png","/x220,200ml,webp/https://storage.googleapis.com/hybris-public-production/sys_master/cmsmedia/hf6/h2c/8979036504094.png","/x155,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/h02/h5d/15449032687646.png","/x155,4pk,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/h36/h62/16964328456222.png","/sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/h6b/h86/8805919490078.png","/sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/h21/h5f/13763295019038.png","/sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/h07/h22/12338782142494.png","/sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/h02/h1a/14590886281246.png","/x450,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hf2/he7/26565062557726.png","/x450,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/had/hef/14521135136798.png","/x450,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/h91/hf4/8802820423710.png","/x450,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/h8a/hb9/13512306458654.png","/x450,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/h72/hdd/10777597444126.png","/x450,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/h63/h69/13713376870430.png","/x450,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/h48/hec/15280777723934.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hfd/hf2/8810640211998.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hfc/h4b/12245177139230.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hfa/hdf/12056616992798.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hf8/he1/14271263178782.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hf8/h7f/26701864632350.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hf7/hd0/16102248120350.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hf6/h79/16156004220958.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hf5/h7d/17159611777054.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hf4/ha7/8804650123294.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hf2/h60/15992134467614.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hf1/h1d/10675638468638.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hf0/h36/27446335406110.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hed/h69/28405437661214.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hec/hc8/9923797680158.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/heb/h84/13474955788318.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/heb/h80/28335705817118.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hea/h53/27178157375518.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/he7/h70/12322315173918.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/he7/h2d/26523099496478.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/he7/h28/27279495888926.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/he4/he7/14936818090014.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/he1/hd8/10873843417118.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/he1/h9c/14575203713054.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/he1/h35/28358492749854.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/he0/hf0/13909180448798.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/he0/h23/8798265049118.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hdf/hda/14202389987358.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hde/hb7/28597737947166.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hdc/h80/16036737417246.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hdb/h8f/26799410315294.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hd9/h2f/11941568741406.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hd5/h4f/16872939192350.png","/x220,sq,webp/https://storage.googleapis.com/hybris-public-production/sys_master/twmmedia/hd4/h59/28134069075998.png"];var c=exports;for(var b in t)c[b]=t[b];t.__esModule&&Object.defineProperty(c,"__esModule",{value:!0})})();
//# sourceMappingURL=images.bundle.js.map