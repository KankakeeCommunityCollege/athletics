(self.webpackChunkkcc_athletics=self.webpackChunkkcc_athletics||[]).push([[410],{4410:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return l}}),e(4747),e(2479),e(2222),e(1539),e(8674),e(9600),e(2526),e(1817),e(2165),e(6992),e(8783),e(3948),e(7042),e(8309),e(1038);document.querySelectorAll("a.video-link");function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var o=document.getElementById("yt_player"),c=document.getElementById("yt_list"),a="https://athletics.kcc.edu",i=["https://www.googleapis.com/youtube/v3/playlistItems?part=snippet","&playlistId=".concat("PLEnNvZd4X-lVSveRGpbsXLCmf7hYXX97q"),"&key=".concat("AIzaSyCDtQhcIZrqG_uw3OAJvQ5zhtLYWvInZV4"),"&maxResults=".concat("10")],l=function(){fetch(i.join("")).then((function(t){return t.json()})).then((function(t){return t.items.forEach((function(t){var n,e,o=(n=Object.values(t.snippet),e=9,function(t){if(Array.isArray(t))return t}(n)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,c=[],a=!0,i=!1;try{for(e=e.call(t);!(a=(r=e.next()).done)&&(c.push(r.value),!n||c.length!==n);a=!0);}catch(t){i=!0,o=t}finally{try{a||null==e.return||e.return()}finally{if(i)throw o}}return c}}(n,e)||function(t,n){if(t){if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[2],l=o[4],s=o[8],u='\n      <div class="item">\n        <a class="video-link" data-videoid="'.concat(s.videoId,'" data-toggle="modal" data-target="#exampleModalCenter" href="#" tabindex="-1">\n          <img class="img-fluid" src="').concat(a,'/assets/img/yt-loading.png" data-src="').concat(l.medium.url,'">\n        </a>\n        <h3 class="video-carousel__title">').concat(i,"</h3>\n      </div>");c.insertAdjacentHTML("beforeend",u)})),function(t,n){var e={dots:!1,infinite:!1,autoplay:!1,slidesToShow:3,slidesToScroll:1,adaptiveHeight:!1,prevArrow:'<img class="a-left control-c prev slick-prev" src="'.concat(n,'/assets/img/blue-prev.svg">'),nextArrow:'<img class="a-right control-c next slick-next" src="'.concat(n,'/assets/img/blue-next.svg">'),responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1}}]};$(t).slick(e)}(c,a),[].forEach.call(document.querySelectorAll("img[data-src]"),(function(t){t.setAttribute("src",t.getAttribute("data-src")),t.onload=function(){t.removeAttribute("data-src")}})),function(t){document.querySelectorAll("a.video-link").forEach((function(n){n.addEventListener("click",(function(e){t.src="https://youtube.com/embed/".concat(n.dataset.videoid,"?controls=0&showinfo=0&rel=0&autoplay=1")}))}))}(o),void function(t){$("#exampleModalCenter").on("hide.bs.modal",(function(n){t.src=""}))}(o)}))}},8533:function(t,n,e){"use strict";var r=e(2092).forEach,o=e(9341)("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},8457:function(t,n,e){"use strict";var r=e(9974),o=e(7908),c=e(3411),a=e(7659),i=e(4411),l=e(7466),s=e(6135),u=e(8554),f=e(1246);t.exports=function(t){var n=o(t),e=i(this),d=arguments.length,h=d>1?arguments[1]:void 0,v=void 0!==h;v&&(h=r(h,d>2?arguments[2]:void 0,2));var p,y,m,g,b,w,A=f(n),S=0;if(!A||this==Array&&a(A))for(p=l(n.length),y=e?new this(p):Array(p);p>S;S++)w=v?h(n[S],S):n[S],s(y,S,w);else for(b=(g=u(n,A)).next,y=e?new this:[];!(m=b.call(g)).done;S++)w=v?c(g,h,[m.value,S],!0):m.value,s(y,S,w);return y.length=S,y}},9341:function(t,n,e){"use strict";var r=e(7293);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},3411:function(t,n,e){var r=e(9670),o=e(9212);t.exports=function(t,n,e,c){try{return c?n(r(e)[0],e[1]):n(e)}catch(n){o(t,"throw",n)}}},4699:function(t,n,e){var r=e(9781),o=e(1956),c=e(5656),a=e(5296).f,i=function(t){return function(n){for(var e,i=c(n),l=o(i),s=l.length,u=0,f=[];s>u;)e=l[u++],r&&!a.call(i,e)||f.push(t?[e,i[e]]:i[e]);return f}};t.exports={entries:i(!0),values:i(!1)}},2222:function(t,n,e){"use strict";var r=e(2109),o=e(7293),c=e(3157),a=e(111),i=e(7908),l=e(7466),s=e(6135),u=e(5417),f=e(1194),d=e(5112),h=e(7392),v=d("isConcatSpreadable"),p=9007199254740991,y="Maximum allowed index exceeded",m=h>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),g=f("concat"),b=function(t){if(!a(t))return!1;var n=t[v];return void 0!==n?!!n:c(t)};r({target:"Array",proto:!0,forced:!m||!g},{concat:function(t){var n,e,r,o,c,a=i(this),f=u(a,0),d=0;for(n=-1,r=arguments.length;n<r;n++)if(b(c=-1===n?a:arguments[n])){if(d+(o=l(c.length))>p)throw TypeError(y);for(e=0;e<o;e++,d++)e in c&&s(f,d,c[e])}else{if(d>=p)throw TypeError(y);s(f,d++,c)}return f.length=d,f}})},1038:function(t,n,e){var r=e(2109),o=e(8457);r({target:"Array",stat:!0,forced:!e(7072)((function(t){Array.from(t)}))},{from:o})},9600:function(t,n,e){"use strict";var r=e(2109),o=e(8361),c=e(5656),a=e(9341),i=[].join,l=o!=Object,s=a("join",",");r({target:"Array",proto:!0,forced:l||!s},{join:function(t){return i.call(c(this),void 0===t?",":t)}})},8309:function(t,n,e){var r=e(9781),o=e(6530).EXISTS,c=e(3070).f,a=Function.prototype,i=a.toString,l=/^\s*function ([^ (]*)/;r&&!o&&c(a,"name",{configurable:!0,get:function(){try{return i.call(this).match(l)[1]}catch(t){return""}}})},2479:function(t,n,e){var r=e(2109),o=e(4699).values;r({target:"Object",stat:!0},{values:function(t){return o(t)}})},4747:function(t,n,e){var r=e(7854),o=e(8324),c=e(8509),a=e(8533),i=e(8880),l=function(t){if(t&&t.forEach!==a)try{i(t,"forEach",a)}catch(n){t.forEach=a}};for(var s in o)o[s]&&l(r[s]&&r[s].prototype);l(c)}}]);