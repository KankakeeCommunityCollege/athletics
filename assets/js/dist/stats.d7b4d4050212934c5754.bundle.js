!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}({0:function(e,t){var n=f("/baseball"),r=f("/mens-basketball"),o=f("/womens-soccer"),a=f("/soccer"),u=f("/womens-basketball"),i=f("/softball"),c=f("/volleyball"),l=f("/roster"),s=f("/schedule"),p=f("/stats");window.location.pathname;function f(e){return-1!==window.location.href.replace(/(^\w+:|^)\/\//,"").indexOf(e)}function d(e,t){return e.spreadsheetId=t}function b(e,t){return e.range=t}function h(e,t){return l?d(e,"1odoxnNnm3ldZFpND9SDj6JhPXIct60FVJSFvcshX2aw"):s?d(e,"13cd6P3Ze7bBJugzlQ2Uk2dFWc677wE68ghL94JZcnmI"):p?function(e){n?d(e,"1CjI-KFAmasBUipURvXRtGuu6kWYbrNmo49VPeg7d6Os"):r?d(e,"1zBMYYFRJLLgUu9XKR8voz37o5Nz1dMVAdfy3cj3W_PI"):o?d(e,"1kh9ordjrIok0lrh8hcl8vE6TFUJIORU4T-sC_UC4STQ"):a?d(e,"1CR7waySsJVjNEq7OuWGA7y1-FXWnE4hsvybYUg9l8cw"):u?d(e,"1-RkDZ4YpX4XGFvOL7jgXuCm_rLD843NjzPoWJ-Otnf8"):i?d(e,"1qZHyYT_fJE6jajEUjFJK8Z8yKYbu76YnJ9ec3Vzk-KM"):c&&d(e,"1tzACDaWtF9Vohd20ooWsTxSyRaAxAKvpnvxmoO6biAI")}(e):d(e,"13cd6P3Ze7bBJugzlQ2Uk2dFWc677wE68ghL94JZcnmI"),e}function v(e,t){return l||s?b(e,t):p?function(e){b(e,[]),e.includeGridData=!1}(e):b(e,t+" Current"),e}function g(e,t){return h(e),v(e,t),e}e.exports=function(){var e={};return g(e,n?"Baseball":r?"Mens Basketball":u?"Womens Basketball":a?"Soccer":o?"Womens Soccer":i?"Softball":c?"Volleyball":"All"),console.log(e),e}},4:function(e,t){e.exports=function(e){var t,n={},r=(window.location.host,window.location.href.replace(/(^\w+:|^)\/\//,"")),o=r.indexOf("/baseball")>-1,a=r.indexOf("/mens-basketball")>-1,u=r.indexOf("/womens-soccer")>-1,i=r.indexOf("/soccer")>-1,c=r.indexOf("/womens-basketball")>-1,l=r.indexOf("/softball")>-1,s=r.indexOf("/volleyball")>-1;function p(e){n.spreadsheetId=e}return r.indexOf("/stats"),t=e,o?p("1CjI-KFAmasBUipURvXRtGuu6kWYbrNmo49VPeg7d6Os"):a?p("1zBMYYFRJLLgUu9XKR8voz37o5Nz1dMVAdfy3cj3W_PI"):u?p("1kh9ordjrIok0lrh8hcl8vE6TFUJIORU4T-sC_UC4STQ"):i?p("1CR7waySsJVjNEq7OuWGA7y1-FXWnE4hsvybYUg9l8cw"):c?p("1-RkDZ4YpX4XGFvOL7jgXuCm_rLD843NjzPoWJ-Otnf8"):l?p("1qZHyYT_fJE6jajEUjFJK8Z8yKYbu76YnJ9ec3Vzk-KM"):s&&p("1tzACDaWtF9Vohd20ooWsTxSyRaAxAKvpnvxmoO6biAI"),function(e){n.ranges=e}(t),n}},8:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),u=n.n(a);function i(e,t,n,r,o){return n=n.replace(r,""),t.setAttribute("colspan",o),t.classList.add("table__red-category"),e.appendChild(t),t.innerHTML=n,t}function c(e,t){var n=-1!=(t=t.trim()).search(/^\*\*[^\d\w]\*?\*?/g),r=document.createElement("td");return n?function(e,t,n){var r={"^\\*\\*\\s":"2","^\\*\\*\\*\\s":"3","^\\*\\*\\*\\*\\s":"4","^\\*\\*\\*\\*\\*\\s":"5"};for(var o in r)if(r.hasOwnProperty(o)){var a=new RegExp(o,"g");a.test(n)&&i(e,t,n,a,r[o])}}(e,r,t):function(e,t,n){-1!=n.search(/^__(.+)__$/g)&&(t.classList.add("table__highlighted-cell"),n=n.replace(/^__|__$/g,"")),e.appendChild(t),t.innerHTML=n}(e,r,t),r}function l(e,t){var n=document.createElement("tr");t.appendChild(n);for(var r=0;r<e.length;r++)c(n,e[r]);return t}var s=function(e,t,n,r){var o,a=null!==r;o=a?function(e){var t=document.createElement("div");return t.innerHTML=e,t}(r):null,a&&e.appendChild(o);for(var u=function(e){var t=document.createElement("table"),n=document.createElement("tbody"),r=document.createElement("a");return r.setAttribute("href","#page-top"),r.innerHTML="Back to top",t.classList.add("table","table-striped","table-hover"),t.setAttribute("width","100%"),t.setAttribute("id","responsiveTable"),t.appendChild(n),e.appendChild(t),e.appendChild(r),n}(e),i=0;i<t.length;i++)l(t[i],u);return e};function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){f=function(e,t){return new a(e,void 0,t)};var n=b(RegExp),r=RegExp.prototype,o=new WeakMap;function a(e,t,r){var a=n.call(this,e,t);return o.set(a,r||o.get(e)),a}function u(e,t){var n=o.get(t);return Object.keys(n).reduce((function(t,r){return t[r]=e[n[r]],t}),Object.create(null))}return d(a,n),a.prototype.exec=function(e){var t=r.exec.call(this,e);return t&&(t.groups=u(t,this)),t},a.prototype[Symbol.replace]=function(e,t){if("string"==typeof t){var n=o.get(this);return r[Symbol.replace].call(this,e,t.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+n[t]})))}if("function"==typeof t){var a=this;return r[Symbol.replace].call(this,e,(function(){var e=[];return e.push.apply(e,arguments),"object"!==p(e[e.length-1])&&e.push(u(e,a)),t.apply(this,e)}))}return r[Symbol.replace].call(this,e,t)},f.apply(this,arguments)}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}function b(e){var t="function"==typeof Map?new Map:void 0;return(b=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return h(e,arguments,y(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),g(r,e)})(e)}function h(e,t,n){return(h=v()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&g(o,n.prototype),o}).apply(null,arguments)}function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,n){switch(t){case"h3":return e.replace(n,'<h3 class="blue-heading mt-4 mb-3">$<text></h3>');case"p":return e.replace(n,"<p>$<text></p>");case"li":return e.replace(n,"<li>$<text></li>");case"ul":return e.replace(n,"<ul>");case"/ul":return e.replace(n,"</ul>")}}var x=function(e){var t=e.toString(),n=f(/\*\*(.+)\*\*/gm,{text:1}),r=[/^<<<.*|^>>>.*/gm,/^$/gm],o={h3:f(/^##[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF](.+)/gm,{text:1}),p:f(/^([\0-\x08\x0E-\x1F!"\$-,\.-;=\?-z\|-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uFEFE\uFF00-\uFFFF].+)/gm,{text:1}),li:f(/^\x2D[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF](.+)/gm,{text:1}),ul:/{:list}/gm,"/ul":/{:!list}/gm};for(var a in o)o.hasOwnProperty(a)&&(t=m(t,a,o[a]));t=t.replace(n,"<strong>$<text></strong>");for(var u=0;u<r.length;u++)t=t.replace(r[u],"");return t};function F(e,t){var n=document.createElement("div"),r=document.createElement("h2"),o=e.toLowerCase().replace(/\s|\//g,"-"),a=o+"-tab",u=0==t;return r.classList.add("main-heading","typography__main-heading--margin-top","text-center"),r.innerHTML=e,u&&n.classList.add("show","active"),n.classList.add("tab-pane","fade"),n.setAttribute("id",o),n.setAttribute("role","tabpanel"),n.setAttribute("aria-labelledby",a),n.appendChild(r),n}function w(e,t,n){var r,o=e.toLowerCase().replace(/\s|\//g,"-"),a=o+"-tab",u=document.createElement("li"),i=document.createElement("a"),c=0==n;return u.classList.add("nav-tabs"),i.classList.add("nav-link"),c?(r="true",i.classList.add("active")):r="false",i.setAttribute("href","#"+o),i.setAttribute("data-toggle","tab"),i.setAttribute("aria-selected",r),i.setAttribute("id",a),i.setAttribute("role","tab"),i.setAttribute("aria-controls",o),i.innerHTML=e,u.appendChild(i),t.appendChild(u),t}function O(e,t,n,r){e.innerHTML="",e.appendChild(t),n.appendChild(r),e.appendChild(n)}var A=function(e){for(var t=e.result.valueRanges,n=document.getElementById("data"),r=function(){var e=document.createElement("ul");return e.classList.add("nav","nav-tabs"),e.setAttribute("id","statisticTabs"),e.setAttribute("role","tablist"),e}(),o=function(){var e=document.createElement("div");return e.classList.add("tab-content"),e.setAttribute("id","statisticTabContent"),e}(),a=0;a<t.length;a++){var u=t[a],i=u.range.match(/^'.+'!/g).toString().replace(/'|!/g,""),c=u.values;console.log(c);var l=void 0,p=null,f=c[0].toString(),d=c.length;-1!==f.search(/^>>>/g)?(l=c.splice(1,d),p=c.splice(0,1)):l=c,null!==p&&(p=x(p));var b=w(i,r,a),h=F(i,a);O(n,b,o,s(h,l,i,p))}};var E=function(){var e=o()();gapi.client.init({apiKey:"AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest"]}).then((function(){gapi.client.sheets.spreadsheets.get(e).then((function(e){new Promise((function(t,n){for(var r=[],o=e.result.sheets,a=0;a<o.length;a++){var i=o[a].properties.title;r.push(i)}var c=u()(r);return gapi.client.sheets.spreadsheets.values.batchGet(c).then((function(e){A(e)}),(function(e){console.error("Execute error",e)}))})).then((function(){new Promise((function(e,t){$("#responsiveTable").DataTable({responsive:!0,paging:!1,order:[[1,"asc"]]}),e()})).then((function(){document.querySelector('input[type="search"].form-control').setAttribute("placeholder","Search roster...")}))}))}),(function(e){console.error("Execute error",e)}))}))};document.addEventListener("DOMContentLoaded",(function(){gapi.load("client",E)}))}});