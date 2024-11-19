/*! For license information please see main.8022e007a912b85d7675.bundle.js.LICENSE.txt */
!function(){var e,t,n,r,o={11:function(e,t,n){e.exports=function(e,t,n,r){"use strict";return class extends n{constructor(t,n){super(),(t=r.getElement(t))&&(this._element=t,this._config=this._getConfig(n),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),t.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){r.executeAfterTransition(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(t){return e.get(r.getElement(t),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.3.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}}(n(269),n(956),n(105),n(35))},647:function(e,t,n){e.exports=function(e,t,n,r){"use strict";const o=".bs.collapse",i=`show${o}`,s=`shown${o}`,l=`hide${o}`,a=`hidden${o}`,u=`click${o}.data-api`,c="show",d="collapse",f="collapsing",g=`:scope .${d} .${d}`,h='[data-bs-toggle="collapse"]',m={parent:null,toggle:!0},p={parent:"(null|element)",toggle:"boolean"};class b extends e{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const r=n.find(h);for(const e of r){const t=n.getSelectorFromElement(e),r=n.find(t).filter((e=>e===this._element));null!==t&&r.length&&this._triggerArray.push(e)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return m}static get DefaultType(){return p}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((e=>e!==this._element)).map((e=>b.getOrCreateInstance(e,{toggle:!1})))),e.length&&e[0]._isTransitioning)return;if(t.trigger(this._element,i).defaultPrevented)return;for(const t of e)t.hide();const n=this._getDimension();this._element.classList.remove(d),this._element.classList.add(f),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=`scroll${n[0].toUpperCase()+n.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(f),this._element.classList.add(d,c),this._element.style[n]="",t.trigger(this._element,s)}),this._element,!0),this._element.style[n]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(t.trigger(this._element,l).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,r.reflow(this._element),this._element.classList.add(f),this._element.classList.remove(d,c);for(const e of this._triggerArray){const t=n.getElementFromSelector(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;this._element.style[e]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(f),this._element.classList.add(d),t.trigger(this._element,a)}),this._element,!0)}_isShown(e=this._element){return e.classList.contains(c)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=r.getElement(e.parent),e}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(h);for(const t of e){const e=n.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){const t=n.find(g,this._config.parent);return n.find(e,this._config.parent).filter((e=>!t.includes(e)))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const n of e)n.classList.toggle("collapsed",!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each((function(){const n=b.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}return t.on(document,u,h,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();for(const e of n.getMultipleElementsFromSelector(this))b.getOrCreateInstance(e,{toggle:!1}).toggle()})),r.defineJQueryPlugin(b),b}(n(11),n(956),n(411),n(35))},269:function(e){e.exports=function(){"use strict";const e=new Map;return{set(t,n,r){e.has(t)||e.set(t,new Map);const o=e.get(t);o.has(n)||0===o.size?o.set(n,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`)},get(t,n){return e.has(t)&&e.get(t).get(n)||null},remove(t,n){if(!e.has(t))return;const r=e.get(t);r.delete(n),0===r.size&&e.delete(t)}}}()},956:function(e,t,n){e.exports=function(e){"use strict";const t=/[^.]*(?=\..*)\.|.*/,n=/\..*/,r=/::\d+$/,o={};let i=1;const s={mouseenter:"mouseover",mouseleave:"mouseout"},l=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function a(e,t){return t&&`${t}::${i++}`||e.uidEvent||i++}function u(e){const t=a(e);return e.uidEvent=t,o[t]=o[t]||{},o[t]}function c(e,t,n=null){return Object.values(e).find((e=>e.callable===t&&e.delegationSelector===n))}function d(e,t,n){const r="string"==typeof t,o=r?n:t||n;let i=m(e);return l.has(i)||(i=e),[r,o,i]}function f(e,n,r,o,i){if("string"!=typeof n||!e)return;let[l,f,g]=d(n,r,o);if(n in s){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};f=e(f)}const h=u(e),m=h[g]||(h[g]={}),y=c(m,f,l?r:null);if(y)return void(y.oneOff=y.oneOff&&i);const _=a(f,n.replace(t,"")),v=l?function(e,t,n){return function r(o){const i=e.querySelectorAll(t);for(let{target:s}=o;s&&s!==this;s=s.parentNode)for(const l of i)if(l===s)return b(o,{delegateTarget:s}),r.oneOff&&p.off(e,o.type,t,n),n.apply(s,[o])}}(e,r,f):function(e,t){return function n(r){return b(r,{delegateTarget:e}),n.oneOff&&p.off(e,r.type,t),t.apply(e,[r])}}(e,f);v.delegationSelector=l?r:null,v.callable=f,v.oneOff=i,v.uidEvent=_,m[_]=v,e.addEventListener(g,v,l)}function g(e,t,n,r,o){const i=c(t[n],r,o);i&&(e.removeEventListener(n,i,Boolean(o)),delete t[n][i.uidEvent])}function h(e,t,n,r){const o=t[n]||{};for(const[i,s]of Object.entries(o))i.includes(r)&&g(e,t,n,s.callable,s.delegationSelector)}function m(e){return e=e.replace(n,""),s[e]||e}const p={on(e,t,n,r){f(e,t,n,r,!1)},one(e,t,n,r){f(e,t,n,r,!0)},off(e,t,n,o){if("string"!=typeof t||!e)return;const[i,s,l]=d(t,n,o),a=l!==t,c=u(e),f=c[l]||{},m=t.startsWith(".");if(void 0===s){if(m)for(const n of Object.keys(c))h(e,c,n,t.slice(1));for(const[n,o]of Object.entries(f)){const i=n.replace(r,"");a&&!t.includes(i)||g(e,c,l,o.callable,o.delegationSelector)}}else{if(!Object.keys(f).length)return;g(e,c,l,s,i?n:null)}},trigger(t,n,r){if("string"!=typeof n||!t)return null;const o=e.getjQuery();let i=null,s=!0,l=!0,a=!1;n!==m(n)&&o&&(i=o.Event(n,r),o(t).trigger(i),s=!i.isPropagationStopped(),l=!i.isImmediatePropagationStopped(),a=i.isDefaultPrevented());const u=b(new Event(n,{bubbles:s,cancelable:!0}),r);return a&&u.preventDefault(),l&&t.dispatchEvent(u),u.defaultPrevented&&i&&i.preventDefault(),u}};function b(e,t={}){for(const[n,r]of Object.entries(t))try{e[n]=r}catch(t){Object.defineProperty(e,n,{configurable:!0,get(){return r}})}return e}return p}(n(35))},333:function(e){e.exports=function(){"use strict";function e(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function t(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}return{setDataAttribute(e,n,r){e.setAttribute(`data-bs-${t(n)}`,r)},removeDataAttribute(e,n){e.removeAttribute(`data-bs-${t(n)}`)},getDataAttributes(t){if(!t)return{};const n={},r=Object.keys(t.dataset).filter((e=>e.startsWith("bs")&&!e.startsWith("bsConfig")));for(const o of r){let r=o.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),n[r]=e(t.dataset[o])}return n},getDataAttribute(n,r){return e(n.getAttribute(`data-bs-${t(r)}`))}}}()},411:function(e,t,n){e.exports=function(e){"use strict";const t=t=>{let n=t.getAttribute("data-bs-target");if(!n||"#"===n){let e=t.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),n=e&&"#"!==e?e.trim():null}return n?n.split(",").map((t=>e.parseSelector(t))).join(","):null},n={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter((e=>e.matches(t)))},parents(e,t){const n=[];let r=e.parentNode.closest(t);for(;r;)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const n=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(",");return this.find(n,t).filter((t=>!e.isDisabled(t)&&e.isVisible(t)))},getSelectorFromElement(e){const r=t(e);return r&&n.findOne(r)?r:null},getElementFromSelector(e){const r=t(e);return r?n.findOne(r):null},getMultipleElementsFromSelector(e){const r=t(e);return r?n.find(r):[]}};return n}(n(35))},105:function(e,t,n){e.exports=function(e,t){"use strict";return class{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(n,r){const o=t.isElement(r)?e.getDataAttribute(r,"config"):{};return{...this.constructor.Default,..."object"==typeof o?o:{},...t.isElement(r)?e.getDataAttributes(r):{},..."object"==typeof n?n:{}}}_typeCheckConfig(e,n=this.constructor.DefaultType){for(const[r,o]of Object.entries(n)){const n=e[r],i=t.isElement(n)?"element":t.toType(n);if(!new RegExp(o).test(i))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${i}" but expected type "${o}".`)}}}}(n(333),n(35))},35:function(e,t){!function(e){"use strict";const t="transitionend",n=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,((e,t)=>`#${CSS.escape(t)}`))),e),r=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),o=Number.parseFloat(n);return r||o?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0},o=e=>{e.dispatchEvent(new Event(t))},i=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),s=e=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?s(e.parentNode):null},l=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,a=[],u=e=>{"loading"===document.readyState?(a.length||document.addEventListener("DOMContentLoaded",(()=>{for(const e of a)e()})),a.push(e)):e()},c=(e,t=[],n=e)=>"function"==typeof e?e(...t):n;e.defineJQueryPlugin=e=>{u((()=>{const t=l();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}}))},e.execute=c,e.executeAfterTransition=(e,n,i=!0)=>{if(!i)return void c(e);const s=r(n)+5;let l=!1;const a=({target:r})=>{r===n&&(l=!0,n.removeEventListener(t,a),c(e))};n.addEventListener(t,a),setTimeout((()=>{l||o(n)}),s)},e.findShadowRoot=s,e.getElement=e=>i(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(n(e)):null,e.getNextActiveElement=(e,t,n,r)=>{const o=e.length;let i=e.indexOf(t);return-1===i?!n&&r?e[o-1]:e[0]:(i+=n?1:-1,r&&(i=(i+o)%o),e[Math.max(0,Math.min(i,o-1))])},e.getTransitionDurationFromElement=r,e.getUID=e=>{do{e+=Math.floor(1e6*Math.random())}while(document.getElementById(e));return e},e.getjQuery=l,e.isDisabled=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),e.isElement=i,e.isRTL=()=>"rtl"===document.documentElement.dir,e.isVisible=e=>{if(!i(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n)return!1;if(null===t)return!1}return t},e.noop=()=>{},e.onDOMContentLoaded=u,e.parseSelector=n,e.reflow=e=>{e.offsetHeight},e.toType=e=>null==e?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),e.triggerTransitionEnd=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}(t)}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return o[e].call(n.exports,n,n.exports,s),n.exports}s.m=o,s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},s.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var o=Object.create(null);s.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&r&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((function(e){i[e]=function(){return n[e]}}));return i.default=function(){return n},s.d(o,i),o},s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,n){return s.f[n](e,t),t}),[]))},s.u=function(e){return e+"."+s.h()+".bundle.js"},s.miniCssF=function(e){},s.h=function(){return"8022e007a912b85d7675"},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},r="kcc-athletics:",s.l=function(e,t,o,i){if(n[e])n[e].push(t);else{var l,a;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+o){l=d;break}}l||(a=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.setAttribute("data-webpack",r+o),l.src=e),n[e]=[t];var f=function(t,r){l.onerror=l.onload=null,clearTimeout(g);var o=n[e];if(delete n[e],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(r)})),t)return t(r)},g=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),a&&document.head.appendChild(l)}},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="/assets/js/dist/",function(){var e={792:0};s.f.j=function(t,n){var r=s.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var i=s.p+s.u(t),l=new Error;s.l(i,(function(n){if(s.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,r[1](l)}}),"chunk-"+t,t)}};var t=function(t,n){var r,o,i=n[0],l=n[1],a=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)s.o(l,r)&&(s.m[r]=l[r]);a&&a(s)}for(t&&t(n);u<i.length;u++)o=i[u],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunkkcc_athletics=self.webpackChunkkcc_athletics||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),function(){"use strict";var e=s(647),t=s.n(e);window.addEventListener("load",(async()=>{if(document.getElementById("emergencyAlerts")&&(window.sessionStorage.getItem("Alert-Content")?s.e(664).then(s.bind(s,664)).then((e=>{let{default:t}=e;return t()})):s.e(589).then(s.bind(s,589)).then((e=>{let{default:t}=e;return gapi.load("client",t)}))),document.getElementById("heroSlider")&&s.e(303).then(s.bind(s,303)).then((e=>{let{default:t}=e;return t()})),document.querySelector("img[data-src]")&&s.e(79).then(s.bind(s,79)).then((e=>{let{default:t}=e;return t()})),document.querySelector(".js-more-btn")&&s.e(244).then(s.bind(s,244)).then((e=>{let{default:t}=e;return t()})),document.getElementById("accordion")&&s.e(128).then(s.bind(s,128)).then((e=>{let{default:n}=e;return n(t())})),s.e(102).then(s.bind(s,102)).then((e=>{let{default:t}=e;return t()})),document.querySelector('[data-bs-toggle="dropdown"]')){const{default:e}=await s.e(453).then(s.t.bind(s,453,23))}if(document.querySelector('[data-bs-toggle="modal"]')){const{default:e}=await s.e(635).then(s.t.bind(s,635,23))}document.getElementById("Stats")&&s.e(990).then(s.bind(s,990)).then((e=>{let{default:t}=e;return gapi.load("client",t)})),document.getElementById("Roster")&&s.e(976).then(s.bind(s,976)).then((e=>{let{default:t}=e;return gapi.load("client",t)})),document.getElementById("Schedule")&&s.e(914).then(s.bind(s,914)).then((e=>{let{default:t}=e;return gapi.load("client",t)})),document.getElementById("scheduleDiv")&&s.e(681).then(s.bind(s,681)).then((e=>{let{default:t}=e;return t()})),document.getElementById("yt_list")&&Promise.all([s.e(635),s.e(725)]).then(s.bind(s,725)).then((e=>{let{default:t}=e;return t()})),document.getElementById("SearchTermForm")&&s.e(354).then(s.bind(s,354)).then((e=>{let{default:t}=e;return t()}))}))}()}();