"use strict";(self.webpackChunkkcc_athletics=self.webpackChunkkcc_athletics||[]).push([[45],{45:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var c=n(666);const s=document.getElementById("Schedule"),a=["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sep.","Oct.","Nov.","Dec."];let[r,o,l]=[0,0,0];function u(e){let[t,n]=e.split(/\//);return`${a[t-1]}&nbsp;${n}`}var i=function(e){const t=function(e){const t=document.createElement("table");return t.classList.add("display","table","table-striped","table-hover"),t.setAttribute("width","100%"),t.id="responsiveTable",e.innerHTML="",e.append(t),t}(s),n=function(e){const t=document.createElement("thead");return e.append(t),t}(t),c=function(e){const t=document.createElement("tbody");return e.append(t),t}(t),a=e.result.values,i=a[0],d=a.slice(1,a.length);i[9]='Record <span class="typography__muted-small-caps">(W - L - T)</span>',function(e,t){const n=document.createElement("tr");e.append(n),t.forEach((e=>function(e,t){const n=document.createElement("th");return n.innerHTML=t+=":",e.append(n),n}(n,e)))}(n,i),function(e,t){t.forEach((t=>{let[n,c,,,,,,,,]=t;const s=""!==n?u(n):" ",a=""!==c?u(c):"";t[0]=`${s}${""===a?"":" - "+a}`,function(e,t){const n=document.createElement("tr"),c=t[5];t=function(e){let t=e[6].trim();const n=""===t||-1!==t.search(/^([Cc]ancelled|[Pp]ostponed|C)$/),c=t.split(/,(?:\s+)?|;(?:\s+)?/);c.length>1?c.forEach((e=>{"W"===e&&(r+=1),"L"===e&&(o+=1),"T"===e&&(l+=1)})):("W"===t&&(r+=1),"L"===t&&(o+=1),"T"===t&&(l+=1));let s=n?"":`${r} - ${o}${0===l?"":` - ${l}`}`;return e[9]=s,e}(t),e.append(n),t.forEach(((e,t)=>function(e,t,n,c){const s=document.createElement("td"),a="Home"==c?"tables--red":"tables--blue";return n&&s.classList.add(a),s.innerHTML=t,e.append(s),s}(n,e,0===t,c)))}(e,t)}))}(c,d)};const d={apiKey:"AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest"]},h=(0,c.Z)();var p=function(){gapi.client.init(d).then((()=>gapi.client.sheets.spreadsheets.values.get(h))).then((e=>{i(e)})).then((()=>{$("#responsiveTable").DataTable({responsive:!0,paging:!1,order:[],columnDefs:[{visible:!1,targets:[1,8]}]})})).then((()=>{document.querySelector('input[type="search"].form-control').setAttribute("placeholder","Search schedule...")}),(e=>console.error(`Execute error ${e.message}`,e)))}},666:function(e,t){const n="13cd6P3Ze7bBJugzlQ2Uk2dFWc677wE68ghL94JZcnmI",c="1odoxnNnm3ldZFpND9SDj6JhPXIct60FVJSFvcshX2aw",s="1CjI-KFAmasBUipURvXRtGuu6kWYbrNmo49VPeg7d6Os",a="1zBMYYFRJLLgUu9XKR8voz37o5Nz1dMVAdfy3cj3W_PI",r="1kh9ordjrIok0lrh8hcl8vE6TFUJIORU4T-sC_UC4STQ",o="1CR7waySsJVjNEq7OuWGA7y1-FXWnE4hsvybYUg9l8cw",l="1qZHyYT_fJE6jajEUjFJK8Z8yKYbu76YnJ9ec3Vzk-KM",u="1tzACDaWtF9Vohd20ooWsTxSyRaAxAKvpnvxmoO6biAI",i="1-RkDZ4YpX4XGFvOL7jgXuCm_rLD843NjzPoWJ-Otnf8",d=window.location.pathname,h=-1!==d.search("/baseball"),p=-1!==d.search("/mens-basketball"),b=-1!==d.search("/womens-soccer"),f=-1!==d.search("/soccer"),m=-1!==d.search("/womens-basketball"),v=-1!==d.search("/softball"),g=-1!==d.search("/volleyball"),y=-1!==d.search("/roster"),E=-1!==d.search("/schedule"),k=-1!==d.search("/stats"),A="/"===d;function w(e,t){return e.spreadsheetId=t}function T(e,t){return e.range=t}function F(e,t){return function(e,t){y?w(e,c):E?w(e,n):k?function(e){h?w(e,s):p?w(e,a):b?w(e,r):f?w(e,o):m?w(e,i):v?w(e,l):g&&w(e,u)}(e):w(e,n)}(e),function(e,t){y||E?T(e,t):k?function(e){T(e,[]),e.includeGridData=!1}(e):T(e,A?t+" Current!A1:I15":t+" Current")}(e,t),e}t.Z=function(){let e={};return F(e,h?"Baseball":p?"Mens Basketball":m?"Womens Basketball":f?"Soccer":b?"Womens Soccer":v?"Softball":g?"Volleyball":"All"),e}}}]);