"use strict";(self.webpackChunkkcc_athletics=self.webpackChunkkcc_athletics||[]).push([[914],{914:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var c=n(553);const s=document.getElementById("Schedule"),r=["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sep.","Oct.","Nov.","Dec."];let[a,o,l]=[0,0,0];function u(e,t){return""===t||" "===t?e:`${e} - ${t}`}function i(e){const t=e.split("/").map((e=>e<10?`0${e}`:e)),[n,c,s]=t;return`${s}-${n}-${c}`}function d(e){let[t,n]=e.split(/\//);return`${r[t-1]}&nbsp;${n}`}var h=function(e){const t=function(e){const t=document.createElement("table");return t.classList.add("display","table","table-striped","table-hover"),t.setAttribute("width","100%"),t.id="responsiveTable",e.innerHTML="",e.append(t),t}(s),n=function(e){const t=document.createElement("thead");return e.append(t),t}(t),c=function(e){const t=document.createElement("tbody");return e.append(t),t}(t),r=e.result.values,h=r[0],p=r.slice(1,r.length).filter((e=>-1===e.join("").search(/^\s+$/)&&""!==e.join("")));(function(e,t){const n=document.createElement("tr");e.append(n),t.forEach((e=>function(e,t){const n=document.createElement("th"),c="Start"!==t?t:"Date";return n.innerHTML=c+":",e.append(n),n}(n,e)))})(n,["iso_date","Date",...h,'Record <span class="typography__muted-small-caps">(W - L - T)</span>']),function(e,t){t.forEach((t=>{let[n,c,...s]=t;const r=""!==n?d(n):" ",h=""!==c?d(c):"",p=[i(n),u(n,c),`${r}${""===h?"":" - "+h}`,c,...s];!function(e,t){const n=document.createElement("tr"),c=t[7];t=function(e){let t=e[8].trim();const n=""===t||-1!==t.search(/^([Cc]ancelled|[Pp]ostponed|C)$/),c=t.split(/,(?:\s+)?|;(?:\s+)?/);c.length>1?c.forEach((e=>{"W"===e&&(a+=1),"L"===e&&(o+=1),"T"===e&&(l+=1)})):("W"===t&&(a+=1),"L"===t&&(o+=1),"T"===t&&(l+=1));let s=n?"":`${a} - ${o}${0===l?"":` - ${l}`}`;return e[11]=s,e}(t),e.append(n),t.forEach(((e,t)=>function(e,t,n,c){const s=document.createElement("td"),r=-1!==c.search("Home")?"tables--red":"tables--blue";return n&&s.classList.add(r),s.innerHTML=t,e.append(s),s}(n,e,2===t,c)))}(e,p)}))}(c,p)};const p={apiKey:"AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest"]},f=(0,c.A)();var m=function(){gapi.client.init(p).then((()=>gapi.client.sheets.spreadsheets.values.get(f))).then((e=>{h(e)})).then((()=>{$("#responsiveTable").DataTable({responsive:!0,paging:!1,order:[],columnDefs:[{visible:!1,targets:[0,1,3,10]},{orderData:0,targets:2}],dom:"Bfrti",buttons:[{extend:"print",text:'Print&nbsp;<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z"/><circle cx="18" cy="11.5" r="1"/></svg>',exportOptions:{columns:[1,4,5,6,7]},customize:function(e){e.document.body.querySelector("table").insertAdjacentHTML("afterend",'<p style="text-align: center;">\n  <em>Game schedules are subject to change, check https://athletics.kcc.edu for postponements and cancellations.</em>\n</p>')}}]})})).then((()=>{document.querySelector('input[type="search"].form-control').setAttribute("placeholder","Search schedule...")}),(e=>console.error(`Execute error ${e.message}`,e)))}},553:function(e,t){const n="13cd6P3Ze7bBJugzlQ2Uk2dFWc677wE68ghL94JZcnmI",c="1odoxnNnm3ldZFpND9SDj6JhPXIct60FVJSFvcshX2aw",s="1CjI-KFAmasBUipURvXRtGuu6kWYbrNmo49VPeg7d6Os",r="1zBMYYFRJLLgUu9XKR8voz37o5Nz1dMVAdfy3cj3W_PI",a="1kh9ordjrIok0lrh8hcl8vE6TFUJIORU4T-sC_UC4STQ",o="1CR7waySsJVjNEq7OuWGA7y1-FXWnE4hsvybYUg9l8cw",l="1qZHyYT_fJE6jajEUjFJK8Z8yKYbu76YnJ9ec3Vzk-KM",u="1tzACDaWtF9Vohd20ooWsTxSyRaAxAKvpnvxmoO6biAI",i="1-RkDZ4YpX4XGFvOL7jgXuCm_rLD843NjzPoWJ-Otnf8",d=window.location.pathname,h=-1!==d.search("/baseball"),p=-1!==d.search("/mens-basketball"),f=-1!==d.search("/womens-soccer"),m=-1!==d.search("/soccer"),b=-1!==d.search("/womens-basketball"),v=-1!==d.search("/softball"),g=-1!==d.search("/volleyball"),y=-1!==d.search("/roster"),w=-1!==d.search("/schedule"),E=-1!==d.search("/stats"),k="/"===d;function A(e,t){return e.spreadsheetId=t}function $(e,t){return e.range=t}function S(e,t){return function(e,t){y?A(e,c):w?A(e,n):E?function(e){h?A(e,s):p?A(e,r):f?A(e,a):m?A(e,o):b?A(e,i):v?A(e,l):g&&A(e,u)}(e):A(e,n)}(e),function(e,t){y||w?$(e,t):E?function(e){$(e,[]),e.includeGridData=!1}(e):$(e,k?t+" Current!A1:I15":t+" Current")}(e,t),e}t.A=function(){let e={};return S(e,h?"Baseball":p?"Mens Basketball":b?"Womens Basketball":m?"Soccer":f?"Womens Soccer":v?"Softball":g?"Volleyball":"All"),e}}}]);