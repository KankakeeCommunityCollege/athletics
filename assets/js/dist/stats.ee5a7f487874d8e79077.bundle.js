!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}({0:function(e,t){e.exports=function(){var e={},t=(window.location.host,window.location.href.replace(/(^\w+:|^)\/\//,"")),n=t.indexOf("/baseball")>-1,o=t.indexOf("/mens-basketball")>-1,r=t.indexOf("/soccer")>-1,a=t.indexOf("/womens-basketball")>-1,i=t.indexOf("/softball")>-1,s=t.indexOf("/volleyball")>-1,l=t.indexOf("/roster")>-1,c=t.indexOf("/schedule")>-1,u=t.indexOf("/stats")>-1,d="13cd6P3Ze7bBJugzlQ2Uk2dFWc677wE68ghL94JZcnmI",f="14pczY6IjNEy3zdqyNRhCZFLfWLEP4Uv3EGwIp7uXrLo",b="1CjI-KFAmasBUipURvXRtGuu6kWYbrNmo49VPeg7d6Os",p="/1zBMYYFRJLLgUu9XKR8voz37o5Nz1dMVAdfy3cj3W_PI",v="1CR7waySsJVjNEq7OuWGA7y1-FXWnE4hsvybYUg9l8cw",g="1qZHyYT_fJE6jajEUjFJK8Z8yKYbu76YnJ9ec3Vzk-KM",h="1tzACDaWtF9Vohd20ooWsTxSyRaAxAKvpnvxmoO6biAI",m="1-RkDZ4YpX4XGFvOL7jgXuCm_rLD843NjzPoWJ-Otnf8";function y(e){l?x(f):c?x(d):u?n?x(b):o?x(p):r?x(v):a?x(m):i?x(g):s&&x(h):x(d)}function O(t){l||c?A(t):u?(A([]),e.includeGridData=!1):A(t+" Current")}function x(t){e.spreadsheetId=t}function A(t){e.range=t}function w(e){y(),O(e)}return w(n?"Baseball":o?"Mens Basketball":r?"Soccer":a?"Womens Basketball":i?"Softball":s?"Volleyball":"All"),console.log(e),e}},10:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(4),i=n.n(a);var s=function(e){function t(e){var t=document.createElement("div");return t.classList.add("tab-content"),t.setAttribute("id","statisticTabContent"),t}function n(e,t,n){var o=t.toLowerCase().replace(/\s|\//g,"-"),r=document.createElement("div");r.classList.add("tab-pane","fade"),r.setAttribute("id",o),e.appendChild(r)}function o(e,t,n){var o,r=e.toLowerCase().replace(/\s|\//g,"-"),a=r+"-tab",i=document.createElement("li"),s=document.createElement("a");return console.log(a),o=0==n?"true":"false",i.classList.add("nav-tabs"),s.classList.add("nav-link"),s.setAttribute("href","#"+r),s.setAttribute("data-toggle","tab"),s.setAttribute("aria-selected",o),s.setAttribute("id",a),s.setAttribute("role","tab"),s.setAttribute("aria-controls",r),i.appendChild(s),t.appendChild(i),i}var r=e.result.valueRanges,a=document.getElementById("data"),i=function(e){var t=document.createElement("ul");return t.classList.add("nav","nav-tabs"),t.setAttribute("id","statisticTabs"),t.setAttribute("role","tablist"),console.log(e),e.appendChild(t),t}(a);console.log(r);for(var s=0;s<r.length;s++)for(var l=r[s],c=l.range.match(/^'.+'!/g).toString().replace(/'|!/g,""),u=l.values,d=s,f=(o(c,i,d),n(t(),c),0);f<u.length;f++)u[f]};var l=function(){var e=r()();gapi.client.init({apiKey:"AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest"]}).then(function(){gapi.client.sheets.spreadsheets.get(e).then(function(e){new Promise(function(t,n){for(var o=[],r=e.result.sheets,a=0;a<r.length;a++){var l=r[a].properties.title;o.push(l)}var c=i()(o);return gapi.client.sheets.spreadsheets.values.batchGet(c).then(function(e){s(e)},function(e){console.error("Execute error",e)})}).then(function(){new Promise(function(e,t){$("#responsiveTable").DataTable({responsive:!0,paging:!1,order:[[1,"asc"]]}),e()}).then(function(){document.querySelector('input[type="search"].form-control').setAttribute("placeholder","Search roster...")})})},function(e){console.error("Execute error",e)})})};document.addEventListener("DOMContentLoaded",function(){gapi.load("client",l)})},4:function(e,t){e.exports=function(e){var t,n={},o=(window.location.host,window.location.href.replace(/(^\w+:|^)\/\//,"")),r=o.indexOf("/baseball")>-1,a=o.indexOf("/mens-basketball")>-1,i=o.indexOf("/soccer")>-1,s=o.indexOf("/womens-basketball")>-1,l=o.indexOf("/softball")>-1,c=o.indexOf("/volleyball")>-1,u=(o.indexOf("/stats"),"/1zBMYYFRJLLgUu9XKR8voz37o5Nz1dMVAdfy3cj3W_PI"),d="1CR7waySsJVjNEq7OuWGA7y1-FXWnE4hsvybYUg9l8cw",f="1qZHyYT_fJE6jajEUjFJK8Z8yKYbu76YnJ9ec3Vzk-KM",b="1tzACDaWtF9Vohd20ooWsTxSyRaAxAKvpnvxmoO6biAI",p="1-RkDZ4YpX4XGFvOL7jgXuCm_rLD843NjzPoWJ-Otnf8";function v(e){n.spreadsheetId=e}return t=e,r?v("1CjI-KFAmasBUipURvXRtGuu6kWYbrNmo49VPeg7d6Os"):a?v(u):i?v(d):s?v(p):l?v(f):c&&v(b),function(e){n.ranges=e}(t),console.log(n),n}}});