"use strict";(self.webpackChunkkcc_athletics=self.webpackChunkkcc_athletics||[]).push([[37],{37:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(666);function r(e,t,n){const a=document.createElement("div"),r=t+"Modal";var s;return a.classList.add("modal","fade"),a.setAttribute("role","dialog"),a.setAttribute("aria-hidden","true"),a.setAttribute("tabindex","-1"),a.setAttribute("aria-labelledby",t),a.setAttribute("id",r),a.setAttribute("data-roster-hash",`#${s=n,s.trim().replace(/[^A-Za-z\s]/g,"").replace(/\s/g,"-").toLowerCase()}`),e.appendChild(a),a}function s(e){const t=document.createElement("div");return t.classList.add("modal-dialog","modal-dialog-centered"),t.setAttribute("role","document"),e.appendChild(t),t}function o(e){const t=document.createElement("div");return t.classList.add("modal-content"),e.appendChild(t),t}function c(e){const t=document.createElement("div");return t.classList.add("modal-header"),e.appendChild(t),t}function l(e,t,n){const a=document.createElement("h5"),r=function(){const e=document.createElement("button"),t=document.createElement("span");return t.setAttribute("aria-hidden","true"),t.innerHTML="&times;",e.classList.add("close"),e.setAttribute("type","button"),e.setAttribute("data-dismiss","modal"),e.setAttribute("aria-label","close"),e.appendChild(t),e}();return a.classList.add("modal-title"),a.setAttribute("id",n),a.innerHTML=t+" Bio",e.appendChild(a),e.appendChild(r),a}function d(e,t,n){const a=document.createElement("div");return a.classList.add("modal-body"),a.innerHTML=n.join(""),e.appendChild(a),a}function i(e,t,n){const a=document.createElement("div"),r=document.createElement("img");let s="Photo of player "+e,o="https://cdn.kcc.edu/athletics/roster-img/"+t+".jpg";return r.alt=s,r.src="/assets/img/placeholder_4by3.jpg",r.setAttribute("data-src",o),r.width="290",r.height="393",r.setAttribute("onerror","this.onerror=null;this.src='https://cdn.kcc.edu/athletics/roster-img/blank-avatar.jpg'"),r.classList.add("roster__img"),a.classList.add("text-center","float-md-left"),a.appendChild(r),n.appendChild(a),n}function u(e,t,n){const a=document.createElement("h6");a.classList.add("roster__player");const r="_na_"!==t;return a.innerHTML=r?"#"+t+" "+e:e,n.appendChild(a),n}function h(e,t){const n=document.createElement("p");return" "==t||"_na_"===t?n.innerHTML="":function(e,t){const a=document.createElement("span"),r=document.createElement("strong");n.classList.add("mb-0"),r.innerHTML=e+":",n.appendChild(r),a.innerHTML="&nbsp"+t,n.appendChild(a)}(e,t),n}function p(e){const t=document.createElement("div"),n=document.createElement("button");return t.classList.add("modal-footer"),n.setAttribute("type","button"),n.setAttribute("data-dismiss","modal"),n.classList.add("btn","btn-secondary"),n.innerHTML="Close",t.appendChild(n),e.appendChild(t),e}function m(e,t){const n=document.createElement("th");return e.appendChild(n),"Image"===t||"Bio"===t||"Intended Major"===t||"High School Coach"===t||"Parents"===t||"Siblings"===t?n.classList.add("none"):("Jersey"===t||"player"===t)&&n.classList.add("all"),t+=":",n.innerHTML=t,n}function b(e,t,n){const a=document.createElement("tr");e.appendChild(a);for(var r=0;r<t.length;r++)f(a,t[r]);return a}function f(e,t,n){const a=document.createElement("td");return"_na_"===t&&(t=" "),e.appendChild(a),a.innerHTML=t,a}var g=function(e){const t=function(e){const t=document.createElement("table");return t.classList.add("display","table","table-striped","table-hover"),t.setAttribute("width","100%"),t.setAttribute("id","responsiveTable"),e.innerHTML="",e.append(t),t}(document.getElementById("Roster")),n=function(e){const t=document.createElement("thead");return e.appendChild(t),t}(t),a=function(e){const t=document.createElement("tbody");return e.appendChild(t),t}(t);let f=e.result.values,g=f.length,v=f[1],C=function(e,t){const n=t.length;return e.forEach((e=>{let t=n-e.length;Array.from({length:t},((t,n)=>e.push("")))})),e}(f.slice(2,g),v);(function(e){const t=document.getElementById("modalDiv"),n=e.result.values,a=n[1],m=n.length,b=n.slice(2,m);for(let g=0,v=b.length;g<v;g++){let C=b[g],L=[],E=(a[g],C[0].trim()),A=C[1].trim(),y=C[2].trim();"_na_"==E&&(E="blank-avatar");let _=y.replace(/[\W_]+/g,"");const w=o(s(r(t,_,y))),k=(l(c(w),y,_),d(w,0,L));i(y,E,k),u(y,A,k);let T=[];for(var f=2;f<C.length;f++){let j=C[f];const I=h(a[f],j);T.push(I)}function M(e,t){const n=document.createElement("p");for(let t=0,a=e.length;t<a;t++){let a=e[t];n.appendChild(a)}return t.appendChild(n),t}M(T,k),p(w)}})(e),function(e,t){const n=document.createElement("tr");e.appendChild(n);for(var a=0;a<t.length;a++)m(n,t[a])}(n,v);for(let e=0,t=C.length;e<t;e++){let t=C[e],n=t[2],r=n.replace(/[\W_]+/g,""),s=r+"Modal";t[2]=`<span class="roster--hover"><button type="button" class="btn btn-link buttons__roster--name" data-toggle="modal" data-target="#${s}">${n}</button>`,t[2]+=`<button class="btn btn-link roster--hidden-till-hover" data-clipboard-text="https://athletics.kcc.edu${window.location.pathname}#${L=n,L.trim().replace(/[^A-Za-z\s]/g,"").replace(/\s/g,"-").toLowerCase()}">#</button></span>`,b(a,C[e])}var L},v=function(){const e=(0,a.Z)();gapi.client.init({apiKey:"AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest"]}).then((()=>gapi.client.sheets.spreadsheets.values.get(e))).then((e=>g(e))).then((()=>{$("#responsiveTable").DataTable({responsive:!0,paging:!1,order:[]})})).then((()=>{document.querySelector('input[type="search"].form-control').setAttribute("placeholder","Search roster..."),n.e(997).then(n.bind(n,997)).then((e=>{let{default:t}=e;return t()}))})).then((()=>{n.e(152).then(n.t.bind(n,152,23)).then((e=>{let{default:t}=e;const n=document.querySelectorAll("button[data-clipboard-text]"),a=document.getElementById("clipText");new t(n).on("success",(e=>{a.innerHTML=`<span class="text-white">Copied: ${e.text}</span>`,a.classList.add("roster__cliptext--show"),window.setTimeout((()=>{a.classList.remove("roster__cliptext--show")}),2e3)}))}))})).then((()=>{n.e(621).then(n.bind(n,621)).then((e=>{let{default:t}=e;return t()}))}),(e=>console.error(`Execute error: ${e.message}`,e)))}},666:function(e,t){const n="13cd6P3Ze7bBJugzlQ2Uk2dFWc677wE68ghL94JZcnmI",a="1odoxnNnm3ldZFpND9SDj6JhPXIct60FVJSFvcshX2aw",r="1CjI-KFAmasBUipURvXRtGuu6kWYbrNmo49VPeg7d6Os",s="1zBMYYFRJLLgUu9XKR8voz37o5Nz1dMVAdfy3cj3W_PI",o="1kh9ordjrIok0lrh8hcl8vE6TFUJIORU4T-sC_UC4STQ",c="1CR7waySsJVjNEq7OuWGA7y1-FXWnE4hsvybYUg9l8cw",l="1qZHyYT_fJE6jajEUjFJK8Z8yKYbu76YnJ9ec3Vzk-KM",d="1tzACDaWtF9Vohd20ooWsTxSyRaAxAKvpnvxmoO6biAI",i="1-RkDZ4YpX4XGFvOL7jgXuCm_rLD843NjzPoWJ-Otnf8",u=window.location.pathname,h=-1!==u.search("/baseball"),p=-1!==u.search("/mens-basketball"),m=-1!==u.search("/womens-soccer"),b=-1!==u.search("/soccer"),f=-1!==u.search("/womens-basketball"),g=-1!==u.search("/softball"),v=-1!==u.search("/volleyball"),C=-1!==u.search("/roster"),L=-1!==u.search("/schedule"),E=-1!==u.search("/stats"),A="/"===u;function y(e,t){return e.spreadsheetId=t}function _(e,t){return e.range=t}function w(e,t){return function(e,t){C?y(e,a):L?y(e,n):E?function(e){h?y(e,r):p?y(e,s):m?y(e,o):b?y(e,c):f?y(e,i):g?y(e,l):v&&y(e,d)}(e):y(e,n)}(e),function(e,t){C||L?_(e,t):E?function(e){_(e,[]),e.includeGridData=!1}(e):_(e,A?t+" Current!A1:I15":t+" Current")}(e,t),e}t.Z=function(){let e={};return w(e,h?"Baseball":p?"Mens Basketball":f?"Womens Basketball":b?"Soccer":m?"Womens Soccer":g?"Softball":v?"Volleyball":"All"),e}}}]);