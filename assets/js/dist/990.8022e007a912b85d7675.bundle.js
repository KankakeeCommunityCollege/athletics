"use strict";(self.webpackChunkkcc_athletics=self.webpackChunkkcc_athletics||[]).push([[990],{553:function(e,t){const n="13cd6P3Ze7bBJugzlQ2Uk2dFWc677wE68ghL94JZcnmI",a=window.location.pathname,s=-1!==a.search("/baseball"),c=-1!==a.search("/mens-basketball"),r=-1!==a.search("/womens-soccer"),l=-1!==a.search("/soccer"),o=-1!==a.search("/womens-basketball"),i=-1!==a.search("/softball"),u=-1!==a.search("/volleyball"),d=-1!==a.search("/roster"),h=-1!==a.search("/schedule"),p=-1!==a.search("/stats"),b="/"===a;function m(e,t){return e.spreadsheetId=t}function g(e,t){return e.range=t}function f(e,t){return function(e){d?m(e,"1odoxnNnm3ldZFpND9SDj6JhPXIct60FVJSFvcshX2aw"):h?m(e,n):p?function(e){s?m(e,"1CjI-KFAmasBUipURvXRtGuu6kWYbrNmo49VPeg7d6Os"):c?m(e,"1zBMYYFRJLLgUu9XKR8voz37o5Nz1dMVAdfy3cj3W_PI"):r?m(e,"1kh9ordjrIok0lrh8hcl8vE6TFUJIORU4T-sC_UC4STQ"):l?m(e,"1CR7waySsJVjNEq7OuWGA7y1-FXWnE4hsvybYUg9l8cw"):o?m(e,"1-RkDZ4YpX4XGFvOL7jgXuCm_rLD843NjzPoWJ-Otnf8"):i?m(e,"1qZHyYT_fJE6jajEUjFJK8Z8yKYbu76YnJ9ec3Vzk-KM"):u&&m(e,"1tzACDaWtF9Vohd20ooWsTxSyRaAxAKvpnvxmoO6biAI")}(e):m(e,n)}(e),function(e,t){d||h?g(e,t):p?function(e){g(e,[]),e.includeGridData=!1}(e):g(e,b?t+" Current!A1:I15":t+" Current")}(e,t),e}t.A=function(){let e={};return f(e,s?"Baseball":c?"Mens Basketball":o?"Womens Basketball":l?"Soccer":r?"Womens Soccer":i?"Softball":u?"Volleyball":"All"),e}},990:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(553);let s={};const c=window.location.pathname,r=-1!==c.search("/baseball"),l=-1!==c.search("/mens-basketball"),o=-1!==c.search("/womens-soccer"),i=-1!==c.search("/soccer"),u=-1!==c.search("/womens-basketball"),d=-1!==c.search("/softball"),h=-1!==c.search("/volleyball");function p(e){s.spreadsheetId=e}c.search("/stats");var b=function(e){return t=e,r?p("1CjI-KFAmasBUipURvXRtGuu6kWYbrNmo49VPeg7d6Os"):l?p("1zBMYYFRJLLgUu9XKR8voz37o5Nz1dMVAdfy3cj3W_PI"):o?p("1kh9ordjrIok0lrh8hcl8vE6TFUJIORU4T-sC_UC4STQ"):i?p("1CR7waySsJVjNEq7OuWGA7y1-FXWnE4hsvybYUg9l8cw"):u?p("1-RkDZ4YpX4XGFvOL7jgXuCm_rLD843NjzPoWJ-Otnf8"):d?p("1qZHyYT_fJE6jajEUjFJK8Z8yKYbu76YnJ9ec3Vzk-KM"):h&&p("1tzACDaWtF9Vohd20ooWsTxSyRaAxAKvpnvxmoO6biAI"),function(e){s.ranges=e}(t),s;var t};function m(e,t,n,a,s){return t.setAttribute("colspan",s),t.classList.add("table__red-category"),t.innerHTML=n.replace(a,""),e.append(t),t}var g=function(e,t,n,a){const s=null===a?null:function(e){let t=document.createElement("div");return t.innerHTML=e,t}(a);null!==a&&e.append(s);const c=function(e){const t=document.createElement("table"),n=document.createElement("tbody"),a=document.createElement("a");return a.href="#page-top",a.innerHTML="Back to top",t.classList.add("table","table-striped","table-hover"),t.setAttribute("width","100%"),t.id="responsiveTable",t.append(n),e.append(t),e.append(a),n}(e);return t.forEach((e=>{!function(e,t){const n=document.createElement("tr");e.forEach((e=>function(e,t){const n=document.createElement("td");return-1!==t.search(/^\*\*[^\d\w]\*?\*?/g)?function(e,t,n){const a={"^\\*\\*\\s":"2","^\\*\\*\\*\\s":"3","^\\*\\*\\*\\*\\s":"4","^\\*\\*\\*\\*\\*\\s":"5"};for(const s in a){let c=new RegExp(s,"g");c.test(n)&&m(e,t,n,c,a[s])}}(e,n,t):function(e,t,n){-1!==n.search(/^__(.+)__$/g)&&(t.classList.add("table__highlighted-cell"),n=n.replace(/^__|__$/g,"")),t.innerHTML=n,e.append(t)}(e,n,t),n}(n,e))),t.append(n)}(e,c)})),e};function f(e,t,n){switch(t){case"h3":return e.replace(n,'<h3 class="blue-heading mt-4 mb-3">$<text></h3>');case"p":return e.replace(n,"<p>$<text></p>");case"li":return e.replace(n,"<li>$<text></li>");case"ul":return e.replace(n,"<ul>");case"/ul":return e.replace(n,"</ul>")}}const v=document.getElementById("Stats");var E=function(e){const t=function(){const e=document.createElement("ul");return e.classList.add("nav","nav-tabs"),e.id="statisticTabs",e.setAttribute("role","tablist"),e}(),n=function(){const e=document.createElement("div");return e.classList.add("tab-content"),e.id="statisticTabContent",e}();e.result.valueRanges.forEach(((e,a)=>{const s=e.range.match(/^'.+'!/g).toString().replace(/'|!/g,""),c=e.values,r=-1===c[0].toString().search(/^>>>/g),l=r?c:c.splice(1,c.length),o=r?null:function(e){let t=e.toString();const n={h3:/^##\s(?<text>.+)/gm,p:/^(?<text>[^-{<#>\s].+)/gm,li:/^-\s(?<text>.+)/gm,ul:/{:list}/gm,"/ul":/{:!list}/gm};for(let e in n)t=f(t,e,n[e]);return t=t.replace(/\*\*(?<text>.+)\*\*/gm,"<strong>$<text></strong>"),[/^<<<.*|^>>>.*/gm,/^$/gm].forEach((e=>t=t.replace(e,""))),t}(c.splice(0,1));let i=function(e,t,n){const a=document.createElement("li"),s=document.createElement("a"),c=e.toLowerCase().replace(/\s|\//g,"-"),r=c+"-tab",l=n?"true":"false";return a.classList.add("nav-tabs"),s.classList.add("nav-link"),n&&s.classList.add("active"),s.href=`#${c}`,s.setAttribute("data-bs-toggle","tab"),s.setAttribute("aria-selected",l),s.id=r,s.setAttribute("role","tab"),s.setAttribute("aria-controls",c),s.innerHTML=e,a.append(s),t.append(a),t}(s,t,0==a),u=function(e,t){const n=document.createElement("div"),a=document.createElement("h2"),s=e.toLowerCase().replace(/\s|\//g,"-"),c=s+"-tab";return a.classList.add("main-heading","typography__main-heading--margin-top","text-center"),a.innerHTML=e,t&&n.classList.add("show","active"),n.classList.add("tab-pane","fade"),n.id=s,n.setAttribute("role","tabpanel"),n.setAttribute("aria-labelledby",c),n.append(a),n}(s,0==a),d=g(u,l,0,o);!function(e,t,n,a){e.innerHTML="",e.append(t),n.append(a),e.append(n)}(v,i,n,d)}))};const A={apiKey:"AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest"]},L=(0,a.A)();var w=function(){gapi.client.init(A).then((()=>gapi.client.sheets.spreadsheets.get(L))).then((e=>{let t=[];e.result.sheets.forEach((e=>t.push(e.properties.title)));let n=b(t);return gapi.client.sheets.spreadsheets.values.batchGet(n)})).then((async e=>{E(e);const{default:t}=await n.e(13).then(n.t.bind(n,13,23))}),(e=>console.error(`Execute error: ${e.message}`,e)))}}}]);