(self.webpackChunkkcc_athletics=self.webpackChunkkcc_athletics||[]).push([[45],{1045:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return v}}),e(6992),e(1539),e(3948);var r=e(139);function a(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,a,c=[],o=!0,i=!1;try{for(e=e.call(t);!(o=(r=e.next()).done)&&(c.push(r.value),!n||c.length!==n);o=!0);}catch(t){i=!0,a=t}finally{try{o||null==e.return||e.return()}finally{if(i)throw a}}return c}}(t,n)||function(t,n){if(t){if("string"==typeof t)return c(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e(4747),e(3210),e(4916),e(4765),e(3123),e(2222),e(7042),e(2526),e(1817),e(2165),e(8783),e(8309),e(1038);var o=document.getElementById("Schedule"),i=["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sep.","Oct.","Nov.","Dec."];var u=0,l=0,s=0;function f(t){var n=a(t.split(/\//),2),e=n[0],r=n[1];return"".concat(i[e-1],"&nbsp;").concat(r)}var h=function(t){var n=function(t){var n=document.createElement("table");return n.classList.add("display","table","table-striped","table-hover"),n.setAttribute("width","100%"),n.id="responsiveTable",t.innerHTML="",t.append(n),n}(o),e=function(t){var n=document.createElement("thead");return t.append(n),n}(n),r=function(t){var n=document.createElement("tbody");return t.append(n),n}(n),c=t.result.values,i=c[0],h=c.slice(1,c.length);i[9]='Record <span class="typography__muted-small-caps">(W - L - T)</span>',function(t,n){var e=document.createElement("tr");t.append(e),n.forEach((function(t){return function(t,n){var e=document.createElement("th");return e.innerHTML=n+=":",t.append(e),e}(e,t)}))}(e,i),function(t,n){n.forEach((function(n){var e=a(n,9),r=e[0],c=e[1],o=""!==r?f(r):" ",i=""!==c?f(c):"";n[0]="".concat(o).concat(""===i?"":" - "+i),function(t,n){var e=document.createElement("tr"),r=n[5];n=function(t){var n=t[6].trim(),e=""===n||-1!==n.search(/^([Cc]ancelled|[Pp]ostponed|C)$/),r=n.split(/,(?:\s+)?|;(?:\s+)?/);r.length>1?r.forEach((function(t){"W"===t&&(u+=1),"L"===t&&(l+=1),"T"===t&&(s+=1)})):("W"===n&&(u+=1),"L"===n&&(l+=1),"T"===n&&(s+=1));var a=0===s?"":" - ".concat(s),c=e?"":"".concat(u," - ").concat(l).concat(a);return t[9]=c,t}(n),t.append(e),n.forEach((function(t,n){return function(t,n,e,r){var a=document.createElement("td"),c="Home"==r?"tables--red":"tables--blue";return e&&a.classList.add(c),a.innerHTML=n,t.append(a),a}(e,t,0===n,r)}))}(t,n)}))}(r,h)},d={apiKey:"AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest"]},p=(0,r.Z)(),v=function(){gapi.client.init(d).then((function(){return gapi.client.sheets.spreadsheets.values.get(p)})).then((function(t){h(t)})).then((function(){$("#responsiveTable").DataTable({responsive:!0,paging:!1,order:[],columnDefs:[{visible:!1,targets:[1,8]}]})})).then((function(){document.querySelector('input[type="search"].form-control').setAttribute("placeholder","Search schedule...")}),(function(t){return console.error("Execute error ".concat(t.message),t)}))}},139:function(t,n,e){"use strict";e(4916),e(4765);var r="13cd6P3Ze7bBJugzlQ2Uk2dFWc677wE68ghL94JZcnmI",a=window.location.pathname,c=-1!==a.search("/baseball"),o=-1!==a.search("/mens-basketball"),i=-1!==a.search("/womens-soccer"),u=-1!==a.search("/soccer"),l=-1!==a.search("/womens-basketball"),s=-1!==a.search("/softball"),f=-1!==a.search("/volleyball"),h=-1!==a.search("/roster"),d=-1!==a.search("/schedule"),p=-1!==a.search("/stats"),v="/"===a;function g(t,n){return t.spreadsheetId=n}function m(t,n){return t.range=n}function b(t,n){return function(t,n){h?g(t,"1odoxnNnm3ldZFpND9SDj6JhPXIct60FVJSFvcshX2aw"):d?g(t,r):p?function(t){c?g(t,"1CjI-KFAmasBUipURvXRtGuu6kWYbrNmo49VPeg7d6Os"):o?g(t,"1zBMYYFRJLLgUu9XKR8voz37o5Nz1dMVAdfy3cj3W_PI"):i?g(t,"1kh9ordjrIok0lrh8hcl8vE6TFUJIORU4T-sC_UC4STQ"):u?g(t,"1CR7waySsJVjNEq7OuWGA7y1-FXWnE4hsvybYUg9l8cw"):l?g(t,"1-RkDZ4YpX4XGFvOL7jgXuCm_rLD843NjzPoWJ-Otnf8"):s?g(t,"1qZHyYT_fJE6jajEUjFJK8Z8yKYbu76YnJ9ec3Vzk-KM"):f&&g(t,"1tzACDaWtF9Vohd20ooWsTxSyRaAxAKvpnvxmoO6biAI")}(t):g(t,r)}(t),function(t,n){h||d?m(t,n):p?function(t){m(t,[]),t.includeGridData=!1}(t):m(t,v?n+" Current!A1:I15":n+" Current")}(t,n),t}n.Z=function(){var t={};return b(t,c?"Baseball":o?"Mens Basketball":l?"Womens Basketball":u?"Soccer":i?"Womens Soccer":s?"Softball":f?"Volleyball":"All"),t}},8533:function(t,n,e){"use strict";var r=e(2092).forEach,a=e(9341)("forEach");t.exports=a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},8457:function(t,n,e){"use strict";var r=e(9974),a=e(7908),c=e(3411),o=e(7659),i=e(4411),u=e(7466),l=e(6135),s=e(8554),f=e(1246);t.exports=function(t){var n=a(t),e=i(this),h=arguments.length,d=h>1?arguments[1]:void 0,p=void 0!==d;p&&(d=r(d,h>2?arguments[2]:void 0,2));var v,g,m,b,y,x,E=f(n),w=0;if(!E||this==Array&&o(E))for(v=u(n.length),g=e?new this(v):Array(v);v>w;w++)x=p?d(n[w],w):n[w],l(g,w,x);else for(y=(b=s(n,E)).next,g=e?new this:[];!(m=y.call(b)).done;w++)x=p?c(b,d,[m.value,w],!0):m.value,l(g,w,x);return g.length=w,g}},9341:function(t,n,e){"use strict";var r=e(7293);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},3411:function(t,n,e){var r=e(9670),a=e(9212);t.exports=function(t,n,e,c){try{return c?n(r(e)[0],e[1]):n(e)}catch(n){a(t,"throw",n)}}},7850:function(t,n,e){var r=e(111),a=e(4326),c=e(5112)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[c])?!!n:"RegExp"==a(t))}},1150:function(t){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},6091:function(t,n,e){var r=e(6530).PROPER,a=e(7293),c=e(1361);t.exports=function(t){return a((function(){return!!c[t]()||"​᠎"!=="​᠎"[t]()||r&&c[t].name!==t}))}},3111:function(t,n,e){var r=e(4488),a=e(1340),c="["+e(1361)+"]",o=RegExp("^"+c+c+"*"),i=RegExp(c+c+"*$"),u=function(t){return function(n){var e=a(r(n));return 1&t&&(e=e.replace(o,"")),2&t&&(e=e.replace(i,"")),e}};t.exports={start:u(1),end:u(2),trim:u(3)}},1361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},2222:function(t,n,e){"use strict";var r=e(2109),a=e(7293),c=e(3157),o=e(111),i=e(7908),u=e(7466),l=e(6135),s=e(5417),f=e(1194),h=e(5112),d=e(7392),p=h("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",m=d>=51||!a((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),b=f("concat"),y=function(t){if(!o(t))return!1;var n=t[p];return void 0!==n?!!n:c(t)};r({target:"Array",proto:!0,forced:!m||!b},{concat:function(t){var n,e,r,a,c,o=i(this),f=s(o,0),h=0;for(n=-1,r=arguments.length;n<r;n++)if(y(c=-1===n?o:arguments[n])){if(h+(a=u(c.length))>v)throw TypeError(g);for(e=0;e<a;e++,h++)e in c&&l(f,h,c[e])}else{if(h>=v)throw TypeError(g);l(f,h++,c)}return f.length=h,f}})},1038:function(t,n,e){var r=e(2109),a=e(8457);r({target:"Array",stat:!0,forced:!e(7072)((function(t){Array.from(t)}))},{from:a})},8309:function(t,n,e){var r=e(9781),a=e(6530).EXISTS,c=e(3070).f,o=Function.prototype,i=o.toString,u=/^\s*function ([^ (]*)/;r&&!a&&c(o,"name",{configurable:!0,get:function(){try{return i.call(this).match(u)[1]}catch(t){return""}}})},4765:function(t,n,e){"use strict";var r=e(7007),a=e(9670),c=e(4488),o=e(1150),i=e(1340),u=e(8173),l=e(7651);r("search",(function(t,n,e){return[function(n){var e=c(this),r=null==n?void 0:u(n,t);return r?r.call(n,e):new RegExp(n)[t](i(e))},function(t){var r=a(this),c=i(t),u=e(n,r,c);if(u.done)return u.value;var s=r.lastIndex;o(s,0)||(r.lastIndex=0);var f=l(r,c);return o(r.lastIndex,s)||(r.lastIndex=s),null===f?-1:f.index}]}))},3123:function(t,n,e){"use strict";var r=e(7007),a=e(7850),c=e(9670),o=e(4488),i=e(6707),u=e(1530),l=e(7466),s=e(1340),f=e(8173),h=e(7651),d=e(2261),p=e(2999),v=e(7293),g=p.UNSUPPORTED_Y,m=[].push,b=Math.min,y=4294967295,x=!v((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));r("split",(function(t,n,e){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var r=s(o(this)),c=void 0===e?y:e>>>0;if(0===c)return[];if(void 0===t)return[r];if(!a(t))return n.call(r,t,c);for(var i,u,l,f=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=new RegExp(t.source,h+"g");(i=d.call(v,r))&&!((u=v.lastIndex)>p&&(f.push(r.slice(p,i.index)),i.length>1&&i.index<r.length&&m.apply(f,i.slice(1)),l=i[0].length,p=u,f.length>=c));)v.lastIndex===i.index&&v.lastIndex++;return p===r.length?!l&&v.test("")||f.push(""):f.push(r.slice(p)),f.length>c?f.slice(0,c):f}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,e){var a=o(this),c=null==n?void 0:f(n,t);return c?c.call(n,a,e):r.call(s(a),n,e)},function(t,a){var o=c(this),f=s(t),d=e(r,o,f,a,r!==n);if(d.done)return d.value;var p=i(o,RegExp),v=o.unicode,m=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(g?"g":"y"),x=new p(g?"^(?:"+o.source+")":o,m),E=void 0===a?y:a>>>0;if(0===E)return[];if(0===f.length)return null===h(x,f)?[f]:[];for(var w=0,A=0,S=[];A<f.length;){x.lastIndex=g?0:A;var I,T=h(x,g?f.slice(A):f);if(null===T||(I=b(l(x.lastIndex+(g?A:0)),f.length))===w)A=u(f,A,v);else{if(S.push(f.slice(w,A)),S.length===E)return S;for(var k=1;k<=T.length-1;k++)if(S.push(T[k]),S.length===E)return S;A=w=I}}return S.push(f.slice(w)),S}]}),!x,g)},3210:function(t,n,e){"use strict";var r=e(2109),a=e(3111).trim;r({target:"String",proto:!0,forced:e(6091)("trim")},{trim:function(){return a(this)}})},4747:function(t,n,e){var r=e(7854),a=e(8324),c=e(8509),o=e(8533),i=e(8880),u=function(t){if(t&&t.forEach!==o)try{i(t,"forEach",o)}catch(n){t.forEach=o}};for(var l in a)a[l]&&u(r[l]&&r[l].prototype);u(c)}}]);