"use strict";(self.webpackChunkkcc_athletics=self.webpackChunkkcc_athletics||[]).push([[681],{553:function(s,e){const l="13cd6P3Ze7bBJugzlQ2Uk2dFWc677wE68ghL94JZcnmI",c=window.location.pathname,r=-1!==c.search("/baseball"),n=-1!==c.search("/mens-basketball"),i=-1!==c.search("/womens-soccer"),o=-1!==c.search("/soccer"),t=-1!==c.search("/womens-basketball"),d=-1!==c.search("/softball"),a=-1!==c.search("/volleyball"),u=-1!==c.search("/roster"),p=-1!==c.search("/schedule"),v=-1!==c.search("/stats"),h="/"===c;function _(s,e){return s.spreadsheetId=e}function b(s,e){return s.range=e}function g(s,e){return function(s){u?_(s,"1odoxnNnm3ldZFpND9SDj6JhPXIct60FVJSFvcshX2aw"):p?_(s,l):v?function(s){r?_(s,"1CjI-KFAmasBUipURvXRtGuu6kWYbrNmo49VPeg7d6Os"):n?_(s,"1zBMYYFRJLLgUu9XKR8voz37o5Nz1dMVAdfy3cj3W_PI"):i?_(s,"1kh9ordjrIok0lrh8hcl8vE6TFUJIORU4T-sC_UC4STQ"):o?_(s,"1CR7waySsJVjNEq7OuWGA7y1-FXWnE4hsvybYUg9l8cw"):t?_(s,"1-RkDZ4YpX4XGFvOL7jgXuCm_rLD843NjzPoWJ-Otnf8"):d?_(s,"1qZHyYT_fJE6jajEUjFJK8Z8yKYbu76YnJ9ec3Vzk-KM"):a&&_(s,"1tzACDaWtF9Vohd20ooWsTxSyRaAxAKvpnvxmoO6biAI")}(s):_(s,l)}(s),function(s,e){u||p?b(s,e):v?function(s){b(s,[]),s.includeGridData=!1}(s):b(s,h?e+" Current!A1:I15":e+" Current")}(s,e),s}e.A=function(){let s={};return g(s,r?"Baseball":n?"Mens Basketball":t?"Womens Basketball":o?"Soccer":i?"Womens Soccer":d?"Softball":a?"Volleyball":"All"),s}},681:function(s,e,l){l.r(e),l.d(e,{default:function(){return a}});const c=document.getElementById("scheduleDiv");var r=l(553);const n={apiKey:"AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest"]},i=(0,r.A)();let o=!1;var t=function s(){gapi.client.init(n).then((()=>gapi.client.sheets.spreadsheets.values.get(i))).then((e=>{if("#N/A"==e.result.values[1]&&(console.error(`Bad response from Google API: \n${e}`,e),!o))return o=!0,gapi.load("client",s);!function(s){const e=s.result.values.slice(1);c.innerHTML="","#N/A"===e[0].toString()?c.innerHTML='<div class="schedule-slider"><div><div class="row schedule-slider__row"><div class="schedule-slider__l text-center col-2" style="background-color:#999"></div><div class="schedule-slider__r col-10"><div class="schedule-slider__sport--wrapper"><span class="schedule-slider__sport d-block">&nbsp;</span></div><br><span class="schedule-slider__where d-block">Check back for upcoming games closer to the season.</span></div></div></div><div><div class="row schedule-slider__row"><div class="schedule-slider__l text-center col-2" style="background-color:#999"></div><div class="schedule-slider__r col-10"><div class="schedule-slider__sport--wrapper"><span class="schedule-slider__sport d-block">&nbsp;</span></div></div></div></div><div><div class="row schedule-slider__row"><div class="schedule-slider__l text-center col-2" style="background-color:#999"></div><div class="schedule-slider__r col-10"><div class="schedule-slider__sport--wrapper"><span class="schedule-slider__sport d-block">&nbsp;</span></div></div></div></div></div>':function(s){let e="",l=s.map((s=>function(s,e){return e+=`\n<div>\n  <div class="row schedule-slider__row">\n    ${function(s,e){let[l,,c,r,n,i,o,,t]=s;var d;return e+=`\n<div class="schedule-slider__l text-center col-2" style="background-color:${function(s,e){let l;return l="Cancelled"===s?"#666":"Home"===e?"#c61f48":"#0f3b63",l}(o,i)};">\n  <span class="schedule-slider__m d-block">${d=l,["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sep.","Oct.","Nov.","Dec."][d.split("/")[0]-1]}</span>\n  <span class="schedule-slider__day d-block">${function(s){const e=s.split("/");return e[1]<=9?0+e[1]:e[1]}(l)}</span>\n</div>\n<div class="schedule-slider__r col-10">\n  <div class="schedule-slider__sport--wrapper">\n    <span class="schedule-slider__sport d-block">${t}</span>\n  </div>\n  <span class="schedule-slider__opponent d-block">vs. ${c}</span>\n  <span class="schedule-slider__where d-block">${i}</span>\n  <span class="schedule-slider__time d-block">${function(s,e,l){let c;return c="Cancelled"===s?"Cancelled":"TBD"===e||"TBA"===e||"tba"===e||"tbd"===e||""===e?"TBD":e+" "+l,c}(o,r,n)}</span>\n</div>`,e}(s,e)}\n  </div>\n</div>`,e}(s,e))),r=l.join("");e+='<div class="schedule-slider">',e+=r,e+="</div>",c.innerHTML=e}(e)}(e)})).then((()=>{$(".schedule-slider").slick({dots:!1,infinite:!1,autoplay:!1,slidesToShow:3,slidesToScroll:1,adaptiveHeight:!1,prevArrow:'<img class="a-left control-c prev slick-prev" src="../assets/img/blue-prev.svg">',nextArrow:'<img class="a-right control-c next slick-next" src="../assets/img/blue-next.svg">',responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1}}]})}),(function(s){console.error("Execute error",s)}))};const d={dots:!1,infinite:!1,autoplay:!1,slidesToShow:3,slidesToScroll:1,adaptiveHeight:!1,prevArrow:'<img class="a-left control-c prev slick-prev" src="../assets/img/blue-prev.svg">',nextArrow:'<img class="a-right control-c next slick-next" src="../assets/img/blue-next.svg">',responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1}}]};function a(){$(".schedule-slider-temp").slick(d),gapi.load("client",t)}}}]);