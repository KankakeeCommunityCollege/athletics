(self.webpackChunkkcc_athletics=self.webpackChunkkcc_athletics||[]).push([[3],{384:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return a}}),r(6992),r(1539),r(3948);var n=r(5139);r(4916),r(5306);var o={spreadsheetId:"1plXBiZY5pVbhNT-mszxEuqCl4zy8wMnz9gXXbbT_yLs",range:"Alerts"},i={apiKey:"AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest"]},a=function(){document.getElementById("emergencyAlerts")&&gapi.client.init(i).then((function(){return gapi.client.sheets.spreadsheets.values.get(o)})).then((function(t){return(0,n.Z)(t),t})).then((function(t){!function(t){for(var e=t.result.values,r=e[1],n=e[2],o=0,i=n.length;o<i;o++){var a=n[o],c=r[o];window.sessionStorage.setItem(c.replace(" ","-"),a)}}(t)}),(function(t){console.error("Execute error",t)}))}},5139:function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(t,e){return new r(t,void 0,e)};var t=RegExp.prototype,e=new WeakMap;function r(t,n,o){var i=new RegExp(t,n);return e.set(i,o||e.get(t)),a(i,r.prototype)}function c(t,r){var n=e.get(r);return Object.keys(n).reduce((function(e,r){return e[r]=t[n[r]],e}),Object.create(null))}return i(r,RegExp),r.prototype.exec=function(e){var r=t.exec.call(this,e);return r&&(r.groups=c(r,this)),r},r.prototype[Symbol.replace]=function(r,o){if("string"==typeof o){var i=e.get(this);return t[Symbol.replace].call(this,r,o.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+i[e]})))}if("function"==typeof o){var a=this;return t[Symbol.replace].call(this,r,(function(){var t=arguments;return"object"!==n(t[t.length-1])&&(t=[].slice.call(t)).push(c(t,a)),o.apply(this,t)}))}return t[Symbol.replace].call(this,r,o)},o.apply(this,arguments)}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}r.d(e,{Z:function(){return y}}),r(6992),r(1539),r(3948),r(1249),r(2526),r(1817),r(2165),r(8783),r(7042),r(8309),r(1038),r(4916),r(5306),r(4603),r(9714),r(4129),r(8206),r(3510),r(7941);var c={strong:/\*\*([^\*]*)\*\*/g,em:/_([^_]*)_/g};function u(t,e,r){return t.replace(e,r)}function l(t,e){var r={"\\*":"__asterisk__","\\_":"__underscore__","\\[":"__openBracket__","\\]":"__closeBracket__","\\(":"__openParenthesis__","\\)":"__closeParenthesis__"};for(var n in r)r.hasOwnProperty(n)&&(!0===e?t=u(t,n,r[n]):!1===e&&(t=u(t,r[n],n.replace(/^\\/g,""))));return t}function s(t,e){if(""===e)return t;for(var r in c)c.hasOwnProperty(r)&&(t=t.replace(c[r],"<"+r+">$1</"+r+">"));return t}function f(t,e){return""===e?t:t.replace(/^(.*)$/gm,'<p class="typography__alert">$1</p>')}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var y=function(t){var e,r,n,i,a,u=(e=t.result.values[2],r=6,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,r)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),y=u[0],h=u[1],v=u[2],g=u[3],m=u[4],d=u[5];if("FALSE"!==y){var _=document.getElementById("emergencyAlerts"),b=new Date,w=new Date(m),S=new Date(d),A="FALSE"===g||"TRUE"===g&&w.getTime()<=b.getTime()&&S.getTime()>b.getTime(),k="TRUE"===h||"FALSE"===h&&"/"==window.location.pathname,E='\n<div class="container">\n  <div class="row">\n    <div class="col">\n      <div class="alert alert-warning">\n        '.concat((n=function(t){for(var e in c)c.hasOwnProperty(e)&&(t=t.replace(c[e],s));return t}(l(v,!0)),i=function(t){return t.replace(o(/\[((?:(?!\])[\s\S])*)\]\(((?:(?!\))[\s\S])*)\)/g,{linkText:1,linkHref:2}),'<a href="$<linkHref>" target="_blank" rel="noopener noreferrer">$<linkText></a>')}(n),a=function(t){return t.replace(/^(.*)$/gm,f)}(i),l(a,!1)),"\n        </div>\n    </div>\n  </div>\n</div>");[b,w,S].map((function(t){return t.setHours(0,0,0,0)})),A&&k&&function(t,e){t.innerHTML=e,t.classList.add("position__offset-alert--visible")}(_,E)}}},8457:function(t,e,r){"use strict";var n=r(9974),o=r(7908),i=r(3411),a=r(7659),c=r(4411),u=r(7466),l=r(6135),s=r(8554),f=r(1246);t.exports=function(t){var e=o(t),r=c(this),p=arguments.length,y=p>1?arguments[1]:void 0,h=void 0!==y;h&&(y=n(y,p>2?arguments[2]:void 0,2));var v,g,m,d,_,b,w=f(e),S=0;if(!w||this==Array&&a(w))for(v=u(e.length),g=r?new this(v):Array(v);v>S;S++)b=h?y(e[S],S):e[S],l(g,S,b);else for(_=(d=s(e,w)).next,g=r?new this:[];!(m=_.call(d)).done;S++)b=h?i(d,y,[m.value,S],!0):m.value,l(g,S,b);return g.length=S,g}},3411:function(t,e,r){var n=r(9670),o=r(9212);t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(e){o(t,"throw",e)}}},1038:function(t,e,r){var n=r(2109),o=r(8457);n({target:"Array",stat:!0,forced:!r(7072)((function(t){Array.from(t)}))},{from:o})},1249:function(t,e,r){"use strict";var n=r(2109),o=r(2092).map;n({target:"Array",proto:!0,forced:!r(1194)("map")},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},8309:function(t,e,r){var n=r(9781),o=r(6530).EXISTS,i=r(3070).f,a=Function.prototype,c=a.toString,u=/^\s*function ([^ (]*)/;n&&!o&&i(a,"name",{configurable:!0,get:function(){try{return c.call(this).match(u)[1]}catch(t){return""}}})}}]);