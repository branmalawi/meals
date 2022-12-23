/*! For license information please see app~309f7e27.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmeals=self.webpackChunkmeals||[]).push([[924],{9080:(t,e,r)=>{r.d(e,{Z:()=>l});var n=r(9958),o=r(6510);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function h(t,e,r,o){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),c=new j(o||[]);return n(i,"_invoke",{value:L(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var d={};function p(){}function v(){}function y(){}var g={};s(g,c,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(O([])));w&&w!==e&&r.call(w,c)&&(g=w);var b=y.prototype=p.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function o(n,i,c,u){var l=f(t[n],t,i);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==a(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return o("throw",t,c,u)}))}u(l.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return G()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function O(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:G}}function G(){return{value:void 0,done:!0}}return v.prototype=y,n(b,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:v,configurable:!0}),v.displayName=s(y,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(_.prototype),s(_.prototype,u,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(h(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(b),s(b,l,"Generator"),s(b,c,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function c(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){c(a,n,o,i,u,"next",t)}function u(t){c(a,n,o,i,u,"throw",t)}i(void 0)}))}}const l={render:function(){return u(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n    <div class="catalogue">\n      <div class="catalogue__heading">\n        <h2>favorite restaurant</h2>\n      </div>\n      <div class="catalogue__list"></div>\n    </div>\n    ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){var t=this;return u(i().mark((function e(){var r,a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.Z.getAllRestaurants();case 2:r=e.sent,a=document.querySelector(".catalogue__list"),c=document.querySelector(".catalogue"),0===r.length&&t._isEmpty(c),r.forEach((function(t){a.innerHTML+=(0,o.yx)(t)}));case 7:case"end":return e.stop()}}),e)})))()},_isEmpty:function(t){t.innerHTML="\n      <div class=\"catalogue__nodata\">\n        <img src='assets/backgrounds/nodata.svg' alt='empty data'>\n        <h1>Oops.. Empty favorite restaurant</h1>\n      </div>\n    "}}},8750:(t,e,r)=>{r.d(e,{Z:()=>s});var n=r(2780),o=r(9895),a=r(6510);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function c(){c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function h(t,e,r,o){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),c=new j(o||[]);return n(i,"_invoke",{value:L(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var d={};function p(){}function v(){}function y(){}var g={};s(g,a,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(O([])));w&&w!==e&&r.call(w,a)&&(g=w);var b=y.prototype=p.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function o(n,a,c,u){var l=f(t[n],t,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==i(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return o("throw",t,c,u)}))}u(l.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return G()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:G}}function G(){return{value:void 0,done:!0}}return v.prototype=y,n(b,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:v,configurable:!0}),v.displayName=s(y,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(_.prototype),s(_.prototype,u,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(h(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(b),s(b,l,"Generator"),s(b,a,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function u(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){u(a,n,o,i,c,"next",t)}function c(t){u(a,n,o,i,c,"throw",t)}i(void 0)}))}}const s={render:function(){return l(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n    <div class="hero">\n      <picture>\n        <source media="(max-width: 480px)" srcset="assets/backgrounds/hero/hero-small.jpg" width="480" height="320">\n        <source media="(max-width: 800px)" srcset="assets/backgrounds/hero/hero-medium.jpg" width="800" height="533">\n        <img src="assets/backgrounds/hero/hero-large.jpg" alt="" width="1200" height="800">\n      </picture>\n      <div>\n      <h1 tabindex="0">welcom to meals</h1>\n      <p tabindex="0">Your culinary adventure awaits here.</p>\n      </div>\n    </div>\n    <div class="catalogue">\n      <div class="catalogue__heading">\n        <h2 tabindex="0">catalogue restaurant</h2>\n      </div>\n      <div class="catalogue__list">\n        <catalogue-placeholder></catalogue-placeholder>\n        <catalogue-placeholder></catalogue-placeholder>\n        <catalogue-placeholder></catalogue-placeholder>\n        <catalogue-placeholder></catalogue-placeholder>\n        <catalogue-placeholder></catalogue-placeholder>\n        <catalogue-placeholder></catalogue-placeholder>\n        <catalogue-placeholder></catalogue-placeholder>\n        <catalogue-placeholder></catalogue-placeholder>\n      </div>\n    </div>\n    ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return l(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.Z.home();case 3:e=t.sent,(r=document.querySelector(".catalogue__list")).innerHTML="",e.forEach((function(t){r.innerHTML+=(0,a.yx)(t)})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),o.Z.disconnect("tidak dapat terhubung, coba cek ulang koneksi anda dan refresh halaman ini");case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},6510:(t,e,r)=>{r.d(e,{Wc:()=>u,ci:()=>s,ji:()=>c,kV:()=>i,m1:()=>a,ty:()=>l,yx:()=>o});var n=r(9961),o=function(t){return'\n  <div class="catalogue__list-item">\n    <div class="catalogue__item-image">\n      <img data-src="'.concat(n.Z.BASE_IMAGE_URL_SMALL+t.pictureId,'" alt="').concat(t.name,'" class="lazyload" tabindex="0" width="100%" height="auto">\n      <p class="rate">').concat(t.rating,' <span style="color: gold;">★</span></p>\n    </div>\n    <div class="catalogue__item-data">\n      <h3 tabindex="0" >').concat(t.name,'</h3>\n      <p tabindex="0" ><span>◉</span> ').concat(t.city,'</p>\n      <a href="/#/detail/').concat(t.id,'" aria-label="check detail restaurant"><img src="./assets/icons/detail.svg" alt="detail resto" width="100%" height="100%"/></a>\n    </div>\n  </div>')},a=function(t){return'\n  <div class="detail__image">\n    <picture>\n        <source media="(max-width: 400px)" data-srcset="'.concat(n.Z.BASE_IMAGE_URL_SMALL+t.pictureId,'" class="lazyload">\n        <img data-src="').concat(n.Z.BASE_IMAGE_URL_MEDIUM+t.pictureId,'" alt="').concat(t.name,'" class="lazyload" tabindex="0">\n      </picture>\n    <p class="detail__rating" tabindex="0" >').concat(t.rating,' <span style="color: gold;">★</span></p>\n  </div>\n  <div class="detail__data">\n    <h1 tabindex="0" >').concat(t.name,'</h1>\n    <p tabindex="0" ><span>◉</span> ').concat(t.address,", ").concat(t.city,'</p>\n    <div id="likeButtonContainer"></div>\n    <div class="categories"></div>\n  </div>\n  <div class="detail__deskription"><p tabindex="0" >').concat(t.description,"</p></div>\n")},i=function(t){return"<span>".concat(t.name,"</span>")},c=function(t){return'\n  <div class="menu__list-item">\n    <div class="menu__image">\n      <picture>\n        <source data-srcset="'.concat(t.source_webp,'" type="image/webp" class="lazyload">\n        <img data-src="').concat(t.source_jpg,'" alt="').concat(t.name,'" class="lazyload">\n      </picture> \n    </div>\n    <div class="menu__data">\n      <p tabindex="0" >').concat(t.name,'</p>\n      <p class="menu__rating" tabindex="0">').concat(t.rate,' <i class="fa-solid fa-star"></i></p>\n      <p tabindex="0" >').concat(t.price,'</p>\n      <p tabindex="0" >').concat(t.description,"</p>\n    </div>\n  </div>\n")},u=function(t){return'\n  <div class="review__list-item">\n    <img src="./assets/backgrounds/reviewer.svg" alt="'.concat(t.name,'" loading="lazy"/>\n    <div>\n      <p tabindex="0">').concat(t.name,'</p>\n      <p tabindex="0">').concat(t.review,'</p>\n    </div>\n    <p tabindex="0" >').concat(t.date,"</p>\n  </div>\n")},l=function(){return'\n<button aria-label="like the restaurant" id="likeButton"></button> \n'},s=function(){return'\n<button aria-label="unlike the restaurant" id="likeButton"></button> \n'}}}]);
//# sourceMappingURL=app~309f7e27.bundle.js.map