(self.webpackChunkkcc_athletics=self.webpackChunkkcc_athletics||[]).push([[37],{37:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return g}}),n(6992),n(1539),n(3948),n(8674),n(8783);var r=n(139);function a(t,e,n){var r=document.createElement("div"),a=e+"Modal";return r.classList.add("modal","fade"),r.setAttribute("role","dialog"),r.setAttribute("aria-hidden","true"),r.setAttribute("tabindex","-1"),r.setAttribute("aria-labelledby",e),r.setAttribute("id",a),r.setAttribute("data-roster-hash","#".concat(n.trim().replace(/[^A-Za-z\s]/g,"").replace(/\s/g,"-").toLowerCase())),t.appendChild(r),r}function o(t){var e=document.createElement("div");return e.classList.add("modal-content"),t.appendChild(e),e}function c(t){var e=document.createElement("div");return e.classList.add("modal-header"),t.appendChild(e),e}function i(t,e,n){var r=document.createElement("h5"),a=function(){var t=document.createElement("button"),e=document.createElement("span");return e.setAttribute("aria-hidden","true"),e.innerHTML="&times;",t.classList.add("close"),t.setAttribute("type","button"),t.setAttribute("data-dismiss","modal"),t.setAttribute("aria-label","close"),t.appendChild(e),t}();return r.classList.add("modal-title"),r.setAttribute("id",n),r.innerHTML=e+" Bio",t.appendChild(r),t.appendChild(a),r}function s(t,e,n){var r=document.createElement("div");return r.classList.add("modal-body"),r.innerHTML=n.join(""),t.appendChild(r),r}function l(t,e,n){var r=document.createElement("div"),a=document.createElement("img"),o="Photo of player "+t,c="https://cdn.kcc.edu/athletics/roster-img/"+e+".jpg";return a.alt=o,a.src="/assets/img/placeholder_4by3.jpg",a.setAttribute("data-src",c),a.width="290",a.height="393",a.setAttribute("onerror","this.onerror=null;this.src='https://cdn.kcc.edu/athletics/roster-img/blank-avatar.jpg'"),a.classList.add("roster__img"),r.classList.add("text-center","float-md-left"),r.appendChild(a),n.appendChild(r),n}function u(t,e,n){var r=document.createElement("h6");r.classList.add("roster__player");var a="_na_"!==e;return r.innerHTML=a?"#"+e+" "+t:t,n.appendChild(r),n}function d(t,e){var n=document.createElement("p");return" "==e||"_na_"===e?n.innerHTML="":function(t,e){var r=document.createElement("span"),a=document.createElement("strong");n.classList.add("mb-0"),a.innerHTML=t+":",n.appendChild(a),r.innerHTML="&nbsp"+e,n.appendChild(r)}(t,e),n}function f(t){var e=document.createElement("div"),n=document.createElement("button");return e.classList.add("modal-footer"),n.setAttribute("type","button"),n.setAttribute("data-dismiss","modal"),n.classList.add("btn","btn-secondary"),n.innerHTML="Close",e.appendChild(n),t.appendChild(e),t}n(4916),n(5306),n(3210),n(4747),n(1038),n(7042),n(2222),n(9600);function p(t,e){var n=document.createElement("th");return t.appendChild(n),"Image"===e||"Bio"===e||"Intended Major"===e||"High School Coach"===e||"Parents"===e||"Siblings"===e?n.classList.add("none"):("Jersey"===e||"player"===e)&&n.classList.add("all"),e+=":",n.innerHTML=e,n}function v(t,e,n){var r=document.createElement("tr");t.appendChild(r);for(var a=0;a<e.length;a++)h(r,e[a]);return r}function h(t,e,n){var r=document.createElement("td");return"_na_"===e&&(e=" "),t.appendChild(r),r.innerHTML=e,r}var m=function(t){var e=function(t){var e=document.createElement("table");return e.classList.add("display","table","table-striped","table-hover"),e.setAttribute("width","100%"),e.setAttribute("id","responsiveTable"),t.innerHTML="",t.append(e),e}(document.getElementById("Roster")),n=function(t){var e=document.createElement("thead");return t.appendChild(e),e}(e),r=function(t){var e=document.createElement("tbody");return t.appendChild(e),e}(e),h=t.result.values,m=h.length,g=h[1],x=function(t,e){var n=e.length;return t.forEach((function(t){var e=n-t.length;Array.from({length:e},(function(e,n){return t.push("")}))})),t}(h.slice(2,m),g);(function(t){for(var e=document.getElementById("modalDiv"),n=t.result.values,r=n[1],p=n.length,v=n.slice(2,p),h=0,m=v.length;h<m;h++){var g=v[h],x=(r[h],g[0].trim()),b=g[1].trim(),y=g[2].trim();"_na_"==x&&(x="blank-avatar");for(var E=y.replace(/[\W_]+/g,""),A=o((R=a(e,E,y),T=void 0,(T=document.createElement("div")).classList.add("modal-dialog","modal-dialog-centered"),T.setAttribute("role","document"),R.appendChild(T),T)),w=(i(c(A),y,E),s(A,0,[])),C=(l(y,x,w),u(y,b,w),[]),I=2;I<g.length;I++){var L=g[I],_=d(r[I],L);C.push(_)}function k(t,e){for(var n=document.createElement("p"),r=0,a=t.length;r<a;r++){var o=t[r];n.appendChild(o)}return e.appendChild(n),e}k(C,w),f(A)}var R,T})(t),function(t,e){var n=document.createElement("tr");t.appendChild(n);for(var r=0;r<e.length;r++)p(n,e[r])}(n,g);for(var b=0,y=x.length;b<y;b++){var E=x[b],A=E[2],w=A.replace(/[\W_]+/g,""),C=w+"Modal";E[2]='<span class="roster--hover"><button type="button" class="btn btn-link buttons__roster--name" data-toggle="modal" data-target="#'.concat(C,'">').concat(A,"</button>"),E[2]+='<button class="btn btn-link roster--hidden-till-hover" data-clipboard-text="https://athletics.kcc.edu'.concat(window.location.pathname,"#").concat(A.trim().replace(/[^A-Za-z\s]/g,"").replace(/\s/g,"-").toLowerCase(),'">#</button></span>'),v(r,x[b])}},g=function(){var t=(0,r.Z)();gapi.client.init({apiKey:"AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest"]}).then((function(){return gapi.client.sheets.spreadsheets.values.get(t)})).then((function(t){return m(t)})).then((function(){$("#responsiveTable").DataTable({responsive:!0,paging:!1,order:[]})})).then((function(){document.querySelector('input[type="search"].form-control').setAttribute("placeholder","Search roster..."),n.e(997).then(n.bind(n,1997)).then((function(t){return(0,t.default)()}))})).then((function(){n.e(152).then(n.t.bind(n,2152,23)).then((function(t){var e=t.default,n=document.querySelectorAll("button[data-clipboard-text]"),r=document.getElementById("clipText");new e(n).on("success",(function(t){r.innerHTML='<span class="text-white">Copied: '.concat(t.text,"</span>"),r.classList.add("roster__cliptext--show"),window.setTimeout((function(){r.classList.remove("roster__cliptext--show")}),2e3)}))}))})).then((function(){n.e(621).then(n.bind(n,4621)).then((function(t){return(0,t.default)()}))}),(function(t){return console.error("Execute error: ".concat(t.message),t)}))}},139:function(t,e,n){"use strict";n(4916),n(4765);var r="13cd6P3Ze7bBJugzlQ2Uk2dFWc677wE68ghL94JZcnmI",a=window.location.pathname,o=-1!==a.search("/baseball"),c=-1!==a.search("/mens-basketball"),i=-1!==a.search("/womens-soccer"),s=-1!==a.search("/soccer"),l=-1!==a.search("/womens-basketball"),u=-1!==a.search("/softball"),d=-1!==a.search("/volleyball"),f=-1!==a.search("/roster"),p=-1!==a.search("/schedule"),v=-1!==a.search("/stats"),h="/"===a;function m(t,e){return t.spreadsheetId=e}function g(t,e){return t.range=e}function x(t,e){return function(t,e){f?m(t,"1odoxnNnm3ldZFpND9SDj6JhPXIct60FVJSFvcshX2aw"):p?m(t,r):v?function(t){o?m(t,"1CjI-KFAmasBUipURvXRtGuu6kWYbrNmo49VPeg7d6Os"):c?m(t,"1zBMYYFRJLLgUu9XKR8voz37o5Nz1dMVAdfy3cj3W_PI"):i?m(t,"1kh9ordjrIok0lrh8hcl8vE6TFUJIORU4T-sC_UC4STQ"):s?m(t,"1CR7waySsJVjNEq7OuWGA7y1-FXWnE4hsvybYUg9l8cw"):l?m(t,"1-RkDZ4YpX4XGFvOL7jgXuCm_rLD843NjzPoWJ-Otnf8"):u?m(t,"1qZHyYT_fJE6jajEUjFJK8Z8yKYbu76YnJ9ec3Vzk-KM"):d&&m(t,"1tzACDaWtF9Vohd20ooWsTxSyRaAxAKvpnvxmoO6biAI")}(t):m(t,r)}(t),function(t,e){f||p?g(t,e):v?function(t){g(t,[]),t.includeGridData=!1}(t):g(t,h?e+" Current!A1:I15":e+" Current")}(t,e),t}e.Z=function(){var t={};return x(t,o?"Baseball":c?"Mens Basketball":l?"Womens Basketball":s?"Soccer":i?"Womens Soccer":u?"Softball":d?"Volleyball":"All"),t}},1530:function(t,e,n){"use strict";var r=n(8710).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},8533:function(t,e,n){"use strict";var r=n(2092).forEach,a=n(9341)("forEach");t.exports=a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},8457:function(t,e,n){"use strict";var r=n(9974),a=n(7908),o=n(3411),c=n(7659),i=n(4411),s=n(7466),l=n(6135),u=n(8554),d=n(1246);t.exports=function(t){var e=a(t),n=i(this),f=arguments.length,p=f>1?arguments[1]:void 0,v=void 0!==p;v&&(p=r(p,f>2?arguments[2]:void 0,2));var h,m,g,x,b,y,E=d(e),A=0;if(!E||this==Array&&c(E))for(h=s(e.length),m=n?new this(h):Array(h);h>A;A++)y=v?p(e[A],A):e[A],l(m,A,y);else for(b=(x=u(e,E)).next,m=n?new this:[];!(g=b.call(x)).done;A++)y=v?o(x,p,[g.value,A],!0):g.value,l(m,A,y);return m.length=A,m}},2092:function(t,e,n){var r=n(9974),a=n(8361),o=n(7908),c=n(7466),i=n(5417),s=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,u=4==t,d=6==t,f=7==t,p=5==t||d;return function(v,h,m,g){for(var x,b,y=o(v),E=a(y),A=r(h,m,3),w=c(E.length),C=0,I=g||i,L=e?I(v,w):n||f?I(v,0):void 0;w>C;C++)if((p||C in E)&&(b=A(x=E[C],C,y),t))if(e)L[C]=b;else if(b)switch(t){case 3:return!0;case 5:return x;case 6:return C;case 2:s.call(L,x)}else switch(t){case 4:return!1;case 7:s.call(L,x)}return d?-1:l||u?u:L}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},1194:function(t,e,n){var r=n(7293),a=n(5112),o=n(7392),c=a("species");t.exports=function(t){return o>=51||!r((function(){var e=[];return(e.constructor={})[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},9341:function(t,e,n){"use strict";var r=n(7293);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},7475:function(t,e,n){var r=n(3157),a=n(4411),o=n(111),c=n(5112)("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,(a(e)&&(e===Array||r(e.prototype))||o(e)&&null===(e=e[c]))&&(e=void 0)),void 0===e?Array:e}},5417:function(t,e,n){var r=n(7475);t.exports=function(t,e){return new(r(t))(0===e?0:e)}},3411:function(t,e,n){var r=n(9670),a=n(9212);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){a(t,"throw",e)}}},6135:function(t,e,n){"use strict";var r=n(4948),a=n(3070),o=n(9114);t.exports=function(t,e,n){var c=r(e);c in t?a.f(t,c,o(0,n)):t[c]=n}},7007:function(t,e,n){"use strict";n(4916);var r=n(1320),a=n(2261),o=n(7293),c=n(5112),i=n(8880),s=c("species"),l=RegExp.prototype;t.exports=function(t,e,n,u){var d=c(t),f=!o((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),p=f&&!o((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[s]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!f||!p||n){var v=/./[d],h=e(d,""[t],(function(t,e,n,r,o){var c=e.exec;return c===a||c===l.exec?f&&!o?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}));r(String.prototype,t,h[0]),r(l,d,h[1])}u&&i(l[d],"sham",!0)}},647:function(t,e,n){var r=n(7908),a=Math.floor,o="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,i=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,s,l,u){var d=n+t.length,f=s.length,p=i;return void 0!==l&&(l=r(l),p=c),o.call(u,p,(function(r,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(d);case"<":c=l[o.slice(1,-1)];break;default:var i=+o;if(0===i)return r;if(i>f){var u=a(i/10);return 0===u?r:u<=f?void 0===s[u-1]?o.charAt(1):s[u-1]+o.charAt(1):r}c=s[i-1]}return void 0===c?"":c}))}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},7651:function(t,e,n){var r=n(9670),a=n(614),o=n(4326),c=n(2261);t.exports=function(t,e){var n=t.exec;if(a(n)){var i=n.call(t,e);return null!==i&&r(i),i}if("RegExp"===o(t))return c.call(t,e);throw TypeError("RegExp#exec called on incompatible receiver")}},2261:function(t,e,n){"use strict";var r,a,o=n(1340),c=n(7066),i=n(2999),s=n(2309),l=n(30),u=n(9909).get,d=n(9441),f=n(7168),p=RegExp.prototype.exec,v=s("native-string-replace",String.prototype.replace),h=p,m=(r=/a/,a=/b*/g,p.call(r,"a"),p.call(a,"a"),0!==r.lastIndex||0!==a.lastIndex),g=i.UNSUPPORTED_Y||i.BROKEN_CARET,x=void 0!==/()??/.exec("")[1];(m||x||g||d||f)&&(h=function(t){var e,n,r,a,i,s,d,f=this,b=u(f),y=o(t),E=b.raw;if(E)return E.lastIndex=f.lastIndex,e=h.call(E,y),f.lastIndex=E.lastIndex,e;var A=b.groups,w=g&&f.sticky,C=c.call(f),I=f.source,L=0,_=y;if(w&&(-1===(C=C.replace("y","")).indexOf("g")&&(C+="g"),_=y.slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==y.charAt(f.lastIndex-1))&&(I="(?: "+I+")",_=" "+_,L++),n=new RegExp("^(?:"+I+")",C)),x&&(n=new RegExp("^"+I+"$(?!\\s)",C)),m&&(r=f.lastIndex),a=p.call(w?n:f,_),w?a?(a.input=a.input.slice(L),a[0]=a[0].slice(L),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:m&&a&&(f.lastIndex=f.global?a.index+a[0].length:r),x&&a&&a.length>1&&v.call(a[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(a[i]=void 0)})),a&&A)for(a.groups=s=l(null),i=0;i<A.length;i++)s[(d=A[i])[0]]=a[d[1]];return a}),t.exports=h},7066:function(t,e,n){"use strict";var r=n(9670);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},2999:function(t,e,n){var r=n(7293),a=n(7854).RegExp;e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},9441:function(t,e,n){var r=n(7293),a=n(7854).RegExp;t.exports=r((function(){var t=a(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},7168:function(t,e,n){var r=n(7293),a=n(7854).RegExp;t.exports=r((function(){var t=a("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1150:function(t){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},6091:function(t,e,n){var r=n(6530).PROPER,a=n(7293),o=n(1361);t.exports=function(t){return a((function(){return!!o[t]()||"​᠎"!=="​᠎"[t]()||r&&o[t].name!==t}))}},3111:function(t,e,n){var r=n(4488),a=n(1340),o="["+n(1361)+"]",c=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),s=function(t){return function(e){var n=a(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(i,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},1361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},2222:function(t,e,n){"use strict";var r=n(2109),a=n(7293),o=n(3157),c=n(111),i=n(7908),s=n(7466),l=n(6135),u=n(5417),d=n(1194),f=n(5112),p=n(7392),v=f("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",g=p>=51||!a((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),x=d("concat"),b=function(t){if(!c(t))return!1;var e=t[v];return void 0!==e?!!e:o(t)};r({target:"Array",proto:!0,forced:!g||!x},{concat:function(t){var e,n,r,a,o,c=i(this),d=u(c,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(b(o=-1===e?c:arguments[e])){if(f+(a=s(o.length))>h)throw TypeError(m);for(n=0;n<a;n++,f++)n in o&&l(d,f,o[n])}else{if(f>=h)throw TypeError(m);l(d,f++,o)}return d.length=f,d}})},1038:function(t,e,n){var r=n(2109),a=n(8457);r({target:"Array",stat:!0,forced:!n(7072)((function(t){Array.from(t)}))},{from:a})},9600:function(t,e,n){"use strict";var r=n(2109),a=n(8361),o=n(5656),c=n(9341),i=[].join,s=a!=Object,l=c("join",",");r({target:"Array",proto:!0,forced:s||!l},{join:function(t){return i.call(o(this),void 0===t?",":t)}})},7042:function(t,e,n){"use strict";var r=n(2109),a=n(3157),o=n(4411),c=n(111),i=n(1400),s=n(7466),l=n(5656),u=n(6135),d=n(5112),f=n(1194)("slice"),p=d("species"),v=[].slice,h=Math.max;r({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var n,r,d,f=l(this),m=s(f.length),g=i(t,m),x=i(void 0===e?m:e,m);if(a(f)&&(n=f.constructor,(o(n)&&(n===Array||a(n.prototype))||c(n)&&null===(n=n[p]))&&(n=void 0),n===Array||void 0===n))return v.call(f,g,x);for(r=new(void 0===n?Array:n)(h(x-g,0)),d=0;g<x;g++,d++)g in f&&u(r,d,f[g]);return r.length=d,r}})},4916:function(t,e,n){"use strict";var r=n(2109),a=n(2261);r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},5306:function(t,e,n){"use strict";var r=n(7007),a=n(7293),o=n(9670),c=n(614),i=n(9958),s=n(7466),l=n(1340),u=n(4488),d=n(1530),f=n(8173),p=n(647),v=n(7651),h=n(5112)("replace"),m=Math.max,g=Math.min,x="$0"==="a".replace(/./,"$0"),b=!!/./[h]&&""===/./[h]("a","$0");r("replace",(function(t,e,n){var r=b?"$":"$0";return[function(t,n){var r=u(this),a=null==t?void 0:f(t,h);return a?a.call(t,r,n):e.call(l(r),t,n)},function(t,a){var u=o(this),f=l(t);if("string"==typeof a&&-1===a.indexOf(r)&&-1===a.indexOf("$<")){var h=n(e,u,f,a);if(h.done)return h.value}var x=c(a);x||(a=l(a));var b=u.global;if(b){var y=u.unicode;u.lastIndex=0}for(var E=[];;){var A=v(u,f);if(null===A)break;if(E.push(A),!b)break;""===l(A[0])&&(u.lastIndex=d(f,s(u.lastIndex),y))}for(var w,C="",I=0,L=0;L<E.length;L++){A=E[L];for(var _=l(A[0]),R=m(g(i(A.index),f.length),0),T=[],k=1;k<A.length;k++)T.push(void 0===(w=A[k])?w:String(w));var M=A.groups;if(x){var S=[_].concat(T,R,f);void 0!==M&&S.push(M);var j=l(a.apply(void 0,S))}else j=p(_,f,R,T,M,a);R>=I&&(C+=f.slice(I,R)+j,I=R+_.length)}return C+f.slice(I)}]}),!!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!x||b)},4765:function(t,e,n){"use strict";var r=n(7007),a=n(9670),o=n(4488),c=n(1150),i=n(1340),s=n(8173),l=n(7651);r("search",(function(t,e,n){return[function(e){var n=o(this),r=null==e?void 0:s(e,t);return r?r.call(e,n):new RegExp(e)[t](i(n))},function(t){var r=a(this),o=i(t),s=n(e,r,o);if(s.done)return s.value;var u=r.lastIndex;c(u,0)||(r.lastIndex=0);var d=l(r,o);return c(r.lastIndex,u)||(r.lastIndex=u),null===d?-1:d.index}]}))},3210:function(t,e,n){"use strict";var r=n(2109),a=n(3111).trim;r({target:"String",proto:!0,forced:n(6091)("trim")},{trim:function(){return a(this)}})},4747:function(t,e,n){var r=n(7854),a=n(8324),o=n(8509),c=n(8533),i=n(8880),s=function(t){if(t&&t.forEach!==c)try{i(t,"forEach",c)}catch(e){t.forEach=c}};for(var l in a)a[l]&&s(r[l]&&r[l].prototype);s(o)}}]);