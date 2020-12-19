!function(i){"use strict";i.fn.fitVids=function(e){var t,n,o={customSelector:null,ignore:null};return document.getElementById("fit-vids-style")||(t=document.head||document.getElementsByTagName("head")[0],(n=document.createElement("div")).innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-container{flex-grow: 1;width:100%;}.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',t.appendChild(n.childNodes[1])),e&&i.extend(o,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];o.customSelector&&e.push(o.customSelector);var r=".fitvidsignore";o.ignore&&(r=r+", "+o.ignore);e=i(this).find(e.join(","));(e=(e=e.not("object object")).not(r)).each(function(){var e,t,n=i(this);0<n.parents(r).length||"embed"===this.tagName.toLowerCase()&&n.parent("object").length||n.parent(".fluid-width-video-wrapper").length||(n.css("height")||n.css("width")||!isNaN(n.attr("height"))&&!isNaN(n.attr("width"))||(n.attr("height",9),n.attr("width",16)),e=("object"===this.tagName.toLowerCase()||n.attr("height")&&!isNaN(parseInt(n.attr("height"),10))?parseInt(n.attr("height"),10):n.height())/(isNaN(parseInt(n.attr("width"),10))?n.width():parseInt(n.attr("width"),10)),n.attr("name")||(t="fitvid"+i.fn.fitVids._count,n.attr("name",t),i.fn.fitVids._count++),n.wrap('<div class="fluid-width-video-container"><div class="fluid-width-video-wrapper"></div></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),n.removeAttr("height").removeAttr("width"))})})},i.fn.fitVids._count=0}(window.jQuery||window.Zepto),function(e){e.addEventListener("DOMContentLoaded",function(){e.querySelectorAll(".kg-gallery-image img").forEach(function(e){var t=e.closest(".kg-gallery-image"),e=e.attributes.width.value/e.attributes.height.value;t.style.flex=e+" 1 0%"})})}((window,document)),function(t,n){var r,o,i,a,s,c,l,h=n.querySelector("link[rel=next]");function u(){if(404===this.status)return t.removeEventListener("scroll",f),void t.removeEventListener("resize",p);this.response.querySelectorAll(".post-card").forEach(function(e){r.appendChild(n.importNode(e,!0))});var e=this.response.querySelector("link[rel=next]");e?h.href=e.href:(t.removeEventListener("scroll",f),t.removeEventListener("resize",p)),l=n.documentElement.scrollHeight,a=i=!1}function e(){var e;a||(s+c<=l-o?i=!1:(a=!0,(e=new t.XMLHttpRequest).responseType="document",e.addEventListener("load",u),e.open("GET",h.href),e.send(null)))}function d(){i||t.requestAnimationFrame(e),i=!0}function f(){s=t.scrollY,d()}function p(){c=t.innerHeight,l=n.documentElement.scrollHeight,d()}!h||(r=n.querySelector(".post-feed"))&&(a=i=!(o=300),s=t.scrollY,c=t.innerHeight,l=n.documentElement.scrollHeight,t.addEventListener("scroll",f,{passive:!0}),t.addEventListener("resize",p),d())}(window,document),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Fuse",[],t):"object"==typeof exports?exports.Fuse=t():e.Fuse=t()}(this,function(){return r={},o.m=n=[function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=n(2),w=n(8),A=n(0),n=(function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(S.prototype,[{key:"setCollection",value:function(e){return this.list=e}},{key:"search",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),r=n.tokenSearchers,n=n.fullSearcher,r=this._search(r,n),n=r.weights,r=r.results;return this._computeScore(n,r),this.options.shouldSort&&this._sort(r),t.limit&&"number"==typeof t.limit&&(r=r.slice(0,t.limit)),this._format(r)}},{key:"_prepareSearchers",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,o=n.length;r<o;r+=1)t.push(new i(n[r],this.options));return{tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=1<arguments.length?arguments[1]:void 0,n=this.list,r={},o=[];if("string"==typeof n[0]){for(var i=0,a=n.length;i<a;i+=1)this._analyze({key:"",value:n[i],record:i,index:i},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t});return{weights:null,results:o}}for(var s={},c=0,l=n.length;c<l;c+=1)for(var h=n[c],u=0,d=this.options.keys.length;u<d;u+=1){var f=this.options.keys[u];if("string"!=typeof f){if(s[f.name]={weight:1-f.weight||1},f.weight<=0||1<f.weight)throw new Error("Key weight has to be > 0 and <= 1");f=f.name}else s[f]={weight:1};this._analyze({key:f,value:this.options.getFn(h,f),record:h,index:c},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t})}return{weights:s,results:o}}},{key:"_analyze",value:function(e,t){var n=e.key,r=e.arrayIndex,o=void 0===r?-1:r,i=e.value,a=e.record,s=e.index,r=t.tokenSearchers,c=void 0===r?[]:r,e=t.fullSearcher,l=void 0===e?[]:e,r=t.resultMap,h=void 0===r?{}:r,e=t.results,u=void 0===e?[]:e;if(null!=i){var d=!1,f=-1,p=0;if("string"==typeof i){this._log("\nKey: ".concat(""===n?"-":n));r=l.search(i);if(this._log('Full text: "'.concat(i,'", score: ').concat(r.score)),this.options.tokenize){for(var v=i.split(this.options.tokenSeparator),g=[],m=0;m<c.length;m+=1){var y=c[m];this._log('\nPattern: "'.concat(y.pattern,'"'));for(var w=!1,S=0;S<v.length;S+=1){var b=v[S],k=y.search(b),x={};k.isMatch?(x[b]=k.score,w=d=!0,g.push(k.score)):(x[b]=1,this.options.matchAllTokens||g.push(1)),this._log('Token: "'.concat(b,'", score: ').concat(x[b]))}w&&(p+=1)}f=g[0];for(var L=g.length,M=1;M<L;M+=1)f+=g[M];f/=L,this._log("Token score average:",f)}t=r.score;-1<f&&(t=(t+f)/2),this._log("Score average:",t);e=!this.options.tokenize||!this.options.matchAllTokens||p>=c.length;this._log("\nCheck Matches: ".concat(e)),(d||r.isMatch)&&e&&((e=h[s])?e.output.push({key:n,arrayIndex:o,value:i,score:t,matchedIndices:r.matchedIndices}):(h[s]={item:a,output:[{key:n,arrayIndex:o,value:i,score:t,matchedIndices:r.matchedIndices}]},u.push(h[s])))}else if(A(i))for(var _=0,C=i.length;_<C;_+=1)this._analyze({key:n,arrayIndex:_,value:i[_],record:a,index:s},{resultMap:h,results:u,tokenSearchers:c,fullSearcher:l})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,r=t.length;n<r;n+=1){for(var o=t[n].output,i=o.length,a=1,s=1,c=0;c<i;c+=1){var l=e?e[o[c].key].weight:1,h=(1===l?o[c].score:o[c].score||.001)*l;1!==l?s=Math.min(s,h):a*=o[c].nScore=h}t[n].score=1===s?a:s,this._log(t[n])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var n,t=[];this.options.verbose&&(n=[],this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===h(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t})),n=null);var r=[];this.options.includeMatches&&r.push(function(e,t){var n=e.output;t.matches=[];for(var r=0,o=n.length;r<o;r+=1){var i,a=n[r];0!==a.matchedIndices.length&&(i={indices:a.matchedIndices,value:a.value},a.key&&(i.key=a.key),a.hasOwnProperty("arrayIndex")&&-1<a.arrayIndex&&(i.arrayIndex=a.arrayIndex),t.matches.push(i))}}),this.options.includeScore&&r.push(function(e,t){t.score=e.score});for(var o=0,i=e.length;o<i;o+=1){var a=e[o];if(this.options.id&&(a.item=this.options.getFn(a.item,this.options.id)[0]),r.length){for(var s={item:a.item},c=0,l=r.length;c<l;c+=1)r[c](a,s);t.push(s)}else t.push(a.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}]),S);function S(e,t){var n=t.location,r=void 0===n?0:n,o=t.distance,i=void 0===o?100:o,a=t.threshold,s=void 0===a?.6:a,c=t.maxPatternLength,l=void 0===c?32:c,h=t.caseSensitive,u=void 0!==h&&h,d=t.tokenSeparator,f=void 0===d?/ +/g:d,p=t.findAllMatches,v=void 0!==p&&p,g=t.minMatchCharLength,m=void 0===g?1:g,y=t.id,n=void 0===y?null:y,o=t.keys,a=void 0===o?[]:o,c=t.shouldSort,h=void 0===c||c,d=t.getFn,p=void 0===d?w:d,g=t.sortFn,y=void 0===g?function(e,t){return e.score-t.score}:g,o=t.tokenize,c=void 0!==o&&o,d=t.matchAllTokens,g=void 0!==d&&d,o=t.includeMatches,d=void 0!==o&&o,o=t.includeScore,o=void 0!==o&&o,t=t.verbose,t=void 0!==t&&t;!function(e){if(!(e instanceof S))throw new TypeError("Cannot call a class as a function")}(this),this.options={location:r,distance:i,threshold:s,maxPatternLength:l,isCaseSensitive:u,tokenSeparator:f,findAllMatches:v,minMatchCharLength:m,id:n,keys:a,includeMatches:d,includeScore:o,shouldSort:h,getFn:p,sortFn:y,verbose:t,tokenize:c,matchAllTokens:g},this.setCollection(e)}e.exports=n},function(e,t,n){var a=n(3),s=n(4),l=n(7),n=(function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(h.prototype,[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,n=t.maxPatternLength,r=t.tokenSeparator;if(this.pattern.length>n)return a(e,this.pattern,r);var o=this.options,i=o.location,t=o.distance,n=o.threshold,r=o.findAllMatches,o=o.minMatchCharLength;return s(e,this.pattern,this.patternAlphabet,{location:i,distance:t,threshold:n,findAllMatches:r,minMatchCharLength:o})}}]),h);function h(e,t){var n=t.location,r=void 0===n?0:n,o=t.distance,i=void 0===o?100:o,a=t.threshold,s=void 0===a?.6:a,c=t.maxPatternLength,n=void 0===c?32:c,o=t.isCaseSensitive,a=void 0!==o&&o,c=t.tokenSeparator,o=void 0===c?/ +/g:c,c=t.findAllMatches,c=void 0!==c&&c,t=t.minMatchCharLength,t=void 0===t?1:t;!function(e){if(!(e instanceof h))throw new TypeError("Cannot call a class as a function")}(this),this.options={location:r,distance:i,threshold:s,maxPatternLength:n,isCaseSensitive:a,tokenSeparator:o,findAllMatches:c,minMatchCharLength:t},this.pattern=this.options.isCaseSensitive?e:e.toLowerCase(),this.pattern.length<=n&&(this.patternAlphabet=l(this.pattern))}e.exports=n},function(e,t){var c=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:/ +/g,n=new RegExp(t.replace(c,"\\$&").replace(n,"|")),r=e.match(n),n=!!r,o=[];if(n)for(var i=0,a=r.length;i<a;i+=1){var s=r[i];o.push([e.indexOf(s),s.length-1])}return{score:n?.5:1,isMatch:n,matchedIndices:o}}},function(e,t,n){var j=n(5),I=n(6);e.exports=function(e,t,n,r){for(var o=r.location,i=void 0===o?0:o,a=r.distance,s=void 0===a?100:a,o=r.threshold,a=void 0===o?.6:o,o=r.findAllMatches,c=void 0!==o&&o,r=r.minMatchCharLength,r=void 0===r?1:r,l=i,h=e.length,u=a,d=e.indexOf(t,l),f=t.length,p=[],v=0;v<h;v+=1)p[v]=0;-1!==d&&(a=j(t,{errors:0,currentLocation:d,expectedLocation:l,distance:s}),u=Math.min(a,u),-1!==(d=e.lastIndexOf(t,l+f))&&(a=j(t,{errors:0,currentLocation:d,expectedLocation:l,distance:s}),u=Math.min(a,u))),d=-1;for(var g=[],m=1,y=f+h,w=1<<(f<=31?f-1:30),S=0;S<f;S+=1){for(var b=0,k=y;b<k;)j(t,{errors:S,currentLocation:l+k,expectedLocation:l,distance:s})<=u?b=k:y=k,k=Math.floor((y-b)/2+b);y=k;var x=Math.max(1,l-k+1),L=c?h:Math.min(l+k,h)+f,M=Array(L+2);M[L+1]=(1<<S)-1;for(var _=L;x<=_;--_){var C=_-1,A=n[e.charAt(C)];if(A&&(p[C]=1),M[_]=(M[_+1]<<1|1)&A,0!==S&&(M[_]|=(g[_+1]|g[_])<<1|1|g[_+1]),M[_]&w&&(m=j(t,{errors:S,currentLocation:C,expectedLocation:l,distance:s}))<=u){if(u=m,(d=C)<=l)break;x=Math.max(1,2*l-d)}}if(j(t,{errors:S+1,currentLocation:l,expectedLocation:l,distance:s})>u)break;g=M}return{isMatch:0<=d,score:0===m?.001:m,matchedIndices:I(p,r)}}},function(e,t){e.exports=function(e,t){var n=t.errors,r=void 0===n?0:n,o=t.currentLocation,n=void 0===o?0:o,o=t.expectedLocation,o=void 0===o?0:o,t=t.distance,t=void 0===t?100:t,e=r/e.length,n=Math.abs(o-n);return t?e+n/t:n?1:e}},function(e,t){e.exports=function(){for(var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1,r=[],o=-1,i=0,a=t.length;i<a;i+=1){var s=t[i];s&&-1===o?o=i:s||-1===o||((e=i-1)-o+1>=n&&r.push([o,e]),o=-1)}return t[i-1]&&n<=i-o&&r.push([o,i-1]),r}},function(e,t){e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var o=0;o<n;o+=1)t[e.charAt(o)]|=1<<n-o-1;return t}},function(e,t,n){var h=n(0);e.exports=function(e,t){return function e(t,n,r){if(n){var o=n.indexOf("."),i=n,a=null;-1!==o&&(i=n.slice(0,o),a=n.slice(o+1));var s=t[i];if(null!=s)if(a||"string"!=typeof s&&"number"!=typeof s)if(h(s))for(var c=0,l=s.length;c<l;c+=1)e(s[c],a,r);else a&&e(s,a,r);else r.push(s.toString())}else r.push(t);return r}(e,t,[])}}],o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1);function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var n,r}),function(a,s){a.Casper||(a.Casper={}),a.Casper.stickyNavTitle=function(e){var t=s.querySelector(e.navSelector),n=s.querySelector(e.titleSelector),r=a.scrollY,o=!1;function i(){n.getBoundingClientRect().top+a.scrollY+(n.offsetHeight+35)<=r?t.classList.add(e.activeClass):t.classList.remove(e.activeClass),o=!1}a.addEventListener("scroll",function(){r=a.scrollY,o||requestAnimationFrame(i),o=!0},{passive:!0}),i()}}(window,document);
//# sourceMappingURL=casper.js.map