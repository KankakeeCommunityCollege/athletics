!function(e){var s={};function l(n){if(s[n])return s[n].exports;var t=s[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=s,l.d=function(e,s,n){l.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,s){if(1&s&&(e=l(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var t in e)l.d(n,t,function(s){return e[s]}.bind(null,t));return n},l.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(s,"a",s),s},l.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},l.p="",l(l.s=9)}({0:function(e,s){e.exports=function(){var e={},s=(window.location.host,window.location.href.replace(/(^\w+:|^)\/\//,"")),l=-1!==s.indexOf("/baseball"),n=-1!==s.indexOf("/mens-basketball"),t=-1!==s.indexOf("/womens-soccer"),d=-1!==s.indexOf("/soccer"),r=-1!==s.indexOf("/womens-basketball"),i=-1!==s.indexOf("/softball"),c=-1!==s.indexOf("/volleyball"),o=-1!==s.indexOf("/roster"),a=-1!==s.indexOf("/schedule"),u=-1!==s.indexOf("/stats"),p="13cd6P3Ze7bBJugzlQ2Uk2dFWc677wE68ghL94JZcnmI";function v(e){o?h("1odoxnNnm3ldZFpND9SDj6JhPXIct60FVJSFvcshX2aw"):a?h(p):u?l?h("1CjI-KFAmasBUipURvXRtGuu6kWYbrNmo49VPeg7d6Os"):n?h("1zBMYYFRJLLgUu9XKR8voz37o5Nz1dMVAdfy3cj3W_PI"):d?h("1CR7waySsJVjNEq7OuWGA7y1-FXWnE4hsvybYUg9l8cw"):r?h("1-RkDZ4YpX4XGFvOL7jgXuCm_rLD843NjzPoWJ-Otnf8"):i?h("1qZHyYT_fJE6jajEUjFJK8Z8yKYbu76YnJ9ec3Vzk-KM"):c&&h("1tzACDaWtF9Vohd20ooWsTxSyRaAxAKvpnvxmoO6biAI"):h(p)}function f(s){o||a?b(s):u?(b([]),e.includeGridData=!1):b(s+" Current")}function h(s){e.spreadsheetId=s}function b(s){e.range=s}function _(e){v(),f(e)}return _(l?"Baseball":n?"Mens Basketball":d?"Soccer":r?"Womens Basketball":t?"Womens Soccer":i?"Softball":c?"Volleyball":"All"),e}},9:function(e,s,l){"use strict";l.r(s);var n=document.getElementById("scheduleDiv");function t(e,s){return"TBD"===e||"TBA"===e||"tba"===e||"tbd"===e||""===e?"":s}function d(e){var s=e.split("/");return s[1]<=9?0+s[1]:s[1]}function r(e,s){return"Cancelled"===e?"#666":"Home"===s?"#c61f48":"#0f3b63"}function i(e,s,l,n){var t=document.createElement("div"),d=document.createElement("span"),r=document.createElement("span"),i="background-color:"+n+";";return d.classList.add("schedule-slider__m","d-block"),r.classList.add("schedule-slider__day","d-block"),t.classList.add("schedule-slider__l","text-center","col-2"),t.setAttribute("style",i),d.innerHTML=s,r.innerHTML=l,t.appendChild(d),t.appendChild(r),e.appendChild(t),t}function c(e,s,l){return"Cancelled"===e?"Cancelled":s+" "+l}function o(e,s,l,n,t){var d=document.createElement("div"),r=document.createElement("div"),i=document.createElement("span"),c=document.createElement("span"),o=document.createElement("span"),a=document.createElement("span");return d.classList.add("schedule-slider__r","col-10"),r.classList.add("schedule-slider__sport--wrapper"),i.classList.add("schedule-slider__sport","d-block"),c.classList.add("schedule-slider__opponent","d-block"),o.classList.add("schedule-slider__where","d-block"),a.classList.add("schedule-slider__time","d-block"),i.innerHTML=s,c.innerHTML="vs. "+l,o.innerHTML=n,a.innerHTML=t,r.appendChild(i),e.appendChild(d),d.appendChild(r),d.appendChild(c),d.appendChild(o),d.appendChild(a),d}function a(e){var s,l,a,u=(s=n,l="div",a=document.createElement(l),s.appendChild(a),a);u.classList.add("schedule-slider");for(var p=0,v=e.length;p<v;p++){var f=e[p],h=f[0],b=(f[1],f[2]),_=f[6],m=t(f[3],f[4]),g=c(_,f[3],m),w=f[5],k=f[8],y=["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sep.","Oct.","Nov.","Dec."][h.split("/")[0]-1],x=d(h),S=r(_,w),T=document.createElement("div"),L=document.createElement("div");i(L,y,x,S),o(L,k,b,w,g);L.classList.add("row","schedule-slider__row"),T.appendChild(L),u.appendChild(T)}}var u=function(e){var s=e.result.values,l=s.length,t=s.slice(1,l);n.innerHTML="","#N/A"===t[0].toString()?n.innerHTML='<div class="schedule-slider"><div><div class="row schedule-slider__row"><div class="schedule-slider__l text-center col-2" style="background-color:#999"></div><div class="schedule-slider__r col-10"><div class="schedule-slider__sport--wrapper"><span class="schedule-slider__sport d-block">&nbsp;</span></div><br><span class="schedule-slider__where d-block">Check back for upcoming games closer to the season.</span></div></div></div><div><div class="row schedule-slider__row"><div class="schedule-slider__l text-center col-2" style="background-color:#999"></div><div class="schedule-slider__r col-10"><div class="schedule-slider__sport--wrapper"><span class="schedule-slider__sport d-block">&nbsp;</span></div></div></div></div><div><div class="row schedule-slider__row"><div class="schedule-slider__l text-center col-2" style="background-color:#999"></div><div class="schedule-slider__r col-10"><div class="schedule-slider__sport--wrapper"><span class="schedule-slider__sport d-block">&nbsp;</span></div></div></div></div></div>':a(t)},p=l(0),v=l.n(p);function f(){var e=v()();gapi.client.init({apiKey:"AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest"]}).then((function(){gapi.client.sheets.spreadsheets.values.get(e).then((function(e){!function(e){var s=e.result.values[0][0];void 0!==e&&void 0!==s&&"undefined"!==e&&"undefined"!==s||gapi.load("client",f)}(e),new Promise((function(s,l){u(e),s()})).then((function(){$(".schedule-slider").slick({dots:!1,infinite:!1,autoplay:!1,slidesToShow:3,slidesToScroll:1,adaptiveHeight:!1,prevArrow:'<img class="a-left control-c prev slick-prev" src="../assets/img/blue-prev.svg">',nextArrow:'<img class="a-right control-c next slick-next" src="../assets/img/blue-next.svg">',responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1}}]})}))}),(function(e){console.error("Execute error",e)}))}))}var h=f;document.addEventListener("DOMContentLoaded",(function(){$(".schedule-slider-temp").slick({dots:!1,infinite:!1,autoplay:!1,slidesToShow:3,slidesToScroll:1,adaptiveHeight:!1,prevArrow:'<img class="a-left control-c prev slick-prev" src="../assets/img/blue-prev.svg">',nextArrow:'<img class="a-right control-c next slick-next" src="../assets/img/blue-next.svg">',responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1}}]}),gapi.load("client",h)}))}});