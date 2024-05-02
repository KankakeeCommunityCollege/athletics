"use strict";(self.webpackChunkkcc_athletics=self.webpackChunkkcc_athletics||[]).push([[976],{976:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var a=n(553);function r(t,e,n){const a=document.createElement("div"),r=e+"Modal";var s;return a.classList.add("modal","fade"),a.setAttribute("role","dialog"),a.setAttribute("aria-hidden","true"),a.setAttribute("tabindex","-1"),a.setAttribute("aria-labelledby",e),a.setAttribute("id",r),a.setAttribute("data-roster-hash",`#${s=n,s.trim().replace(/[^A-Za-z\s]/g,"").replace(/\s/g,"-").toLowerCase()}`),t.appendChild(a),a}function s(t){const e=document.createElement("div");return e.classList.add("modal-dialog","modal-dialog-centered"),e.setAttribute("role","document"),t.appendChild(e),e}function o(t){const e=document.createElement("div");return e.classList.add("modal-content"),t.appendChild(e),e}function c(t){const e=document.createElement("div");return e.classList.add("modal-header"),t.appendChild(e),e}function l(t,e,n){const a=document.createElement("h5"),r=function(){const t=document.createElement("button");return t.classList.add("btn-close"),t.setAttribute("type","button"),t.setAttribute("data-bs-dismiss","modal"),t.setAttribute("aria-label","close"),t}();return a.classList.add("modal-title"),a.setAttribute("id",n),a.innerHTML=e+" Bio",t.appendChild(a),t.appendChild(r),a}function d(t,e,n){const a=document.createElement("div");return a.classList.add("modal-body"),a.innerHTML=n.join(""),t.appendChild(a),a}function i(t,e,n){const a=document.createElement("div"),r=document.createElement("img");let s="Photo of player "+t,o="https://cdn.kcc.edu/athletics/roster-img/"+e+".jpg";return r.alt=s,r.src="/assets/img/placeholder_4by3.jpg",r.setAttribute("data-src",o),r.width="290",r.height="393",r.setAttribute("onerror","this.onerror=null;this.src='https://cdn.kcc.edu/athletics/roster-img/blank-avatar.jpg'"),r.classList.add("roster__img"),a.classList.add("text-center","float-md-start"),a.appendChild(r),n.appendChild(a),n}function u(t,e,n){const a=document.createElement("h6");a.classList.add("roster__player");const r="_na_"!==e;return a.innerHTML=r?"#"+e+" "+t:t,n.appendChild(a),n}function h(t,e){const n=document.createElement("p");return" "==e||"_na_"===e?n.innerHTML="":function(t,e){const a=document.createElement("span"),r=document.createElement("strong");n.classList.add("mb-0"),r.innerHTML=t+":",n.appendChild(r),a.innerHTML="&nbsp"+e,n.appendChild(a)}(t,e),n}function p(t){const e=document.createElement("div"),n=document.createElement("button");return e.classList.add("modal-footer"),n.setAttribute("type","button"),n.setAttribute("data-bs-dismiss","modal"),n.classList.add("btn","btn-secondary"),n.innerHTML="Close",e.appendChild(n),t.appendChild(e),t}function m(t,e){const n=document.createElement("th");return t.appendChild(n),"Image"===e||"Bio"===e||"Intended Major"===e||"High School Coach"===e||"Parents"===e||"Siblings"===e?n.classList.add("never"):("Jersey"===e||"player"===e)&&n.classList.add("all"),e+=":",n.innerHTML=e,n}function b(t,e,n){const a=document.createElement("tr");t.appendChild(a);for(var r=0;r<e.length;r++)f(a,e[r]);return a}function f(t,e,n){const a=document.createElement("td");return"_na_"===e&&(e=" "),t.appendChild(a),a.innerHTML=e,a}var g=function(t){const e=function(t){const e=document.createElement("table");return e.classList.add("display","table","table-striped","table-hover"),e.setAttribute("width","100%"),e.setAttribute("id","responsiveTable"),t.innerHTML="",t.append(e),e}(document.getElementById("Roster")),n=function(t){const e=document.createElement("thead");return t.appendChild(e),e}(e),a=function(t){const e=document.createElement("tbody");return t.appendChild(e),e}(e);let f=t.result.values,g=f.length,v=f[1],C=function(t,e){const n=e.length;return t.forEach((t=>{let e=n-t.length;Array.from({length:e},((e,n)=>t.push("")))})),t}(f.slice(2,g),v);(function(t){const e=document.getElementById("modalDiv"),n=t.result.values,a=n[1],m=n.length,b=n.slice(2,m);for(let g=0,v=b.length;g<v;g++){let C=b[g],L=[],y=(a[g],C[0].trim()),A=C[1].trim(),E=C[2].trim();"_na_"==y&&(y="blank-avatar");let w=E.replace(/[\W_]+/g,"");const _=o(s(r(e,w,E))),k=(l(c(_),E,w),d(_,0,L));i(E,y,k),u(E,A,k);let T=[];for(var f=2;f<C.length;f++){let x=C[f];const H=h(a[f],x);T.push(H)}function M(t,e){const n=document.createElement("p");for(let e=0,a=t.length;e<a;e++){let a=t[e];n.appendChild(a)}return e.appendChild(n),e}M(T,k),p(_)}})(t),function(t,e){const n=document.createElement("tr");t.appendChild(n);for(var a=0;a<e.length;a++)m(n,e[a])}(n,v);for(let t=0,e=C.length;t<e;t++){let e=C[t],n=e[2],r=n.replace(/[\W_]+/g,""),s=r+"Modal";e[2]=`<span class="roster--hover"><button type="button" class="btn btn-link buttons__roster--name" data-bs-toggle="modal" data-bs-target="#${s}">${n}</button>`,e[2]+=`<button class="btn btn-link roster--hidden-till-hover" data-clipboard-text="https://athletics.kcc.edu${window.location.pathname}#${L=n,L.trim().replace(/[^A-Za-z\s]/g,"").replace(/\s/g,"-").toLowerCase()}">#</button></span>`,b(a,C[t])}var L};const v={apiKey:"AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest"]},C=(0,a.A)();function L(){const t=[1,2,3,4,5,6,7];return-1!==window.location.pathname.search(/\/baseball\//)?[...t,8]:t}var y=function(){gapi.client.init(v).then((()=>gapi.client.sheets.spreadsheets.values.get(C))).then((async t=>{g(t);const{default:e}=await n.e(635).then(n.t.bind(n,635,23));return e})).then((t=>($("#responsiveTable").DataTable({responsive:!0,paging:!1,order:[],dom:"Bfrti",buttons:[{extend:"print",text:'Print&nbsp;<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z"/><circle cx="18" cy="11.5" r="1"/></svg>',exportOptions:{columns:L()},customize:function(t){t.document.body.querySelectorAll("td:nth-child(2)").forEach((t=>t.innerHTML=t.innerHTML.replace(/#$/,"")))}}]}),t))).then((t=>(document.querySelector('input[type="search"].form-control').setAttribute("placeholder","Search roster..."),n.e(79).then(n.bind(n,79)).then((t=>{let{default:e}=t;return e()})),t))).then((t=>(n.e(576).then(n.t.bind(n,576,23)).then((t=>{let{default:e}=t;const n=document.querySelectorAll("button[data-clipboard-text]"),a=document.getElementById("clipText");new e(n).on("success",(t=>{a.innerHTML=`<span class="text-white">Copied: ${t.text}</span>`,a.classList.add("roster__cliptext--show"),window.setTimeout((()=>{a.classList.remove("roster__cliptext--show")}),2e3)}))})),t))).then((t=>{n.e(847).then(n.bind(n,847)).then((e=>{let{default:n}=e;return n(t)}))}),(t=>console.error(`Execute error: ${t.message}`,t)))}},553:function(t,e){const n="13cd6P3Ze7bBJugzlQ2Uk2dFWc677wE68ghL94JZcnmI",a="1odoxnNnm3ldZFpND9SDj6JhPXIct60FVJSFvcshX2aw",r="1CjI-KFAmasBUipURvXRtGuu6kWYbrNmo49VPeg7d6Os",s="1zBMYYFRJLLgUu9XKR8voz37o5Nz1dMVAdfy3cj3W_PI",o="1kh9ordjrIok0lrh8hcl8vE6TFUJIORU4T-sC_UC4STQ",c="1CR7waySsJVjNEq7OuWGA7y1-FXWnE4hsvybYUg9l8cw",l="1qZHyYT_fJE6jajEUjFJK8Z8yKYbu76YnJ9ec3Vzk-KM",d="1tzACDaWtF9Vohd20ooWsTxSyRaAxAKvpnvxmoO6biAI",i="1-RkDZ4YpX4XGFvOL7jgXuCm_rLD843NjzPoWJ-Otnf8",u=window.location.pathname,h=-1!==u.search("/baseball"),p=-1!==u.search("/mens-basketball"),m=-1!==u.search("/womens-soccer"),b=-1!==u.search("/soccer"),f=-1!==u.search("/womens-basketball"),g=-1!==u.search("/softball"),v=-1!==u.search("/volleyball"),C=-1!==u.search("/roster"),L=-1!==u.search("/schedule"),y=-1!==u.search("/stats"),A="/"===u;function E(t,e){return t.spreadsheetId=e}function w(t,e){return t.range=e}function _(t,e){return function(t,e){C?E(t,a):L?E(t,n):y?function(t){h?E(t,r):p?E(t,s):m?E(t,o):b?E(t,c):f?E(t,i):g?E(t,l):v&&E(t,d)}(t):E(t,n)}(t),function(t,e){C||L?w(t,e):y?function(t){w(t,[]),t.includeGridData=!1}(t):w(t,A?e+" Current!A1:I15":e+" Current")}(t,e),t}e.A=function(){let t={};return _(t,h?"Baseball":p?"Mens Basketball":f?"Womens Basketball":b?"Soccer":m?"Womens Soccer":g?"Softball":v?"Volleyball":"All"),t}}}]);