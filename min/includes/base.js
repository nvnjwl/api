function _gup(e,n){n||(n=location.href);var t="[\\?&]"+(e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"))+"=([^&#]*)",l=new RegExp(t).exec(n);return null===l?null:l[1]}function show(e){void 0!=e&&_elemRemoveClass(_el(e),"spl_H")}function hide(e){void 0!=e&&_elemAddClass(_el(e),"spl_H")}function _el(e){return"string"==typeof e?document.getElementById(e)||document.querySelector(e):e}function _checkforsplclass(e){return e}function _elemRemoveClass(e,n){if(n=_checkforsplclass(n),null!=e&&null!=_el(e)){var t=_elsa(_el(e),"class").toString().replace(/\s\s/gi," ").split(" ");-1!==t.indexOf(n)&&delete t[t.indexOf(n)],_elsa(_el(e),"class",t.join(" "))}}function _elemHasClass(e,n){if(null==e||null==_el(e))return!1;var t=_elsa(_el(e),"class");return null!=t&&-1!==t.toString().replace(/\s\s/gi," ").split(" ").indexOf(n)}function _elemAddClass(e,n){if(n=_checkforsplclass(n),null!=_el(e)){var t=_elsa(_el(e),"class").replace(/\s\s/g," ").split(" ");return-1===t.indexOf(n)&&t.push(n),_elsa(_el(e),"class",t.join(" "))}}function _er(e){return _el(e).parentNode.removeChild(_el(e))}function _elr(e){if(void 0!=e&&null!=e)return _el(e).getBoundingClientRect()}function _c3z(e,n){return e+":"+n+";-moz-"+e+":"+n+";-webkit-"+e+":"+n+";-o-"+e+":"+n+";-ms-"+e+":"+n+";"}function _vr(e,n,t){return e>=t?t:e<=n?n:e}function _f(e){return void 0===e||isNaN(e)?0:parseFloat(e)}function _num(e){return void 0===e||isNaN(e)?0:Math.round(parseFloat(e),0)}function _mr(e){return void 0===e||isNaN(e)?0:Math.round(e)}function _mf(e){return void 0===e||isNaN(e)?0:Math.floor(e)}function _elc(e,n){var t=n&&n.a?n.a:[],l=n&&n.e?n.e:[],r=n&&n.h?n.h:"",i=n&&n.v?n.v:"",o=document.createElement(e);""!==r&&(o.innerHTML=r),""!==i&&(o.value=i);for(var s=0;s<t.length;s++)_elsa(o,t[s].substring(0,t[s].indexOf("=")),t[s].substring(t[s].indexOf("=")+1));for(var u=0;u<l.length;u++)_elemAttachListener(o,l[u].n,t[u].fn);return o}function _elemListenersAttach(e){try{for(var n=1;n<arguments.length;n+=2)for(var t=arguments[n].split(" "),l=0;l<t.length;l++)_elemAttachListener(_el(e),t[l],arguments[n+1]);return _el(e)}catch(e){}}function _elemListenersRemove(e){try{for(var n=1;n<arguments.length;n+=2)for(var t=arguments[n].split(" "),l=0;l<t.length;l++)_elemRemoveListener(_el(e),t[l],arguments[n+1]);return _el(e)}catch(e){}}function _elrel(e,n){var t=_el(e),l=t.cloneNode(!0);return t.parentNode.replaceChild(l,t),l}function _elemAttachListener(e,n,t){return window.addEventListener?_el(e).addEventListener(n,t):_el(e).attachEvent("on"+n,t,!1),_el(e)}function _elemRemoveListener(e,n,t){return window.removeEventListener?_el(e).removeEventListener(n,t):_el(e).detachEvent("on"+n,t,!1),_el(e)}function _eleminnerHTML(e,n){if(null!=_el(e))return(void 0!==n?_el(e).innerHTML=n:_el(e).innerHTML)||""}function _els(e,n,t){return n?n&&_el(e).style[n]&&!t?_el(e).style[n]:!(!n||!t)&&(_el(e).style[n]=t):_el(e).style}function _elsa(e,n,t){if("class"==n&&(t=_checkforsplclass(t)),null!=_el(e))return void 0===t?_el(e).getAttribute(n):(_el(e).setAttribute(n,t),!0)}function _eltip(e,n,t){var l,r=null,i=function(){var e=l.getAttribute("data-title")||"";_eleminnerHTML(_el(n),e);var r=_elr(l),i=_elr(n),o=r.left+r.width/2-i.width/2;void 0!=t&&null!=t&&(o=_vr(o,_elr(t.videoElem).left,_elr(t.videoElem).right-i.width)),_elsa(n,"style","opacity:1;left:"+o+"px;top:"+(r.top-30)+"px")},o=function(e){clearTimeout(r),r=setTimeout(function(){_eleminnerHTML(n,""),_elsa(n,"style","")},e)};_elemListenersAttach(e,"mousenter mouseover click mousemove",function(e){"active"==_elsa(this,"data-state")?o(0):(l=this,clearTimeout(r),r=setTimeout(i,10))}),_elemListenersAttach(e,"mouseleave onmouseout",function(e){o(100)})}function _eli(e,n){e=_el(e),n=_el(n);for(var t=e.parentNode;null!==t&&t!==document&&null!==n;){if(n===t)return!0;t=t.parentNode}return!1}function findScript(e){var n,t=document.getElementsByTagName("script"),l=t.length;for(n=0;n<l;n++)if(t[n].src==e)return t[n];return null}function loadJs(e,n,t,l){function r(e,n){"loaded"===e.readyState||"complete"===e.readyState?n():setTimeout(function(){r(e,n)},20)}var i;if(null==(i=this.findScript(e))){var o=document.getElementsByTagName("head")[0];(i=document.createElement("script")).type="text/javascript",i.src=e,i.async=!0,t&&(i.id=t),"function"==typeof n&&(void 0!==i.addEventListener?(i.addEventListener("load",n,!1),i.addEventListener("error",function(){n("FAILURE")},!1)):i.onreadystatechange=function(){i.onreadystatechange=null,r(i,n)}),o.appendChild(i)}else{"function"==typeof n&&n(!0)}}function oempty(e){for(var n in e)if(e.hasOwnProperty(n))return!1;return!0}function olen(e){var n=0;if(null===(e=e||null))return n;for(var t in e)e.hasOwnProperty(t)&&(n+=1);return n}function objectsLength(e){var n=0;if(null===(e=e||null))return n;for(var t in e)e.hasOwnProperty(t)&&(n+=1);return n}function sprintf(e){for(var n=1;n<arguments.length;n++)e=e.replace(/%s/,arguments[n]);return e}function isHlsJsSupported(){return!(!window.MediaSource||!window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')||"IE"===SPL.UA.getBrowser().name)}function _JSF(e){return JSON.stringify(e)}function _isfs(){try{return!!window.fsevt&&(document[fsevt[2]]||!1)}catch(e){return!1}}function extractIU(e){if(void 0!==e&&null!==e){var n=(e=decodeURIComponent(e)).split("/");if(n.length<3)return"";n.splice(0,3);var t="",l="",r="";for(n.length>0&&(t=n.shift()),n.length>0&&(l=n.shift());n.length>0;)r+=n.shift(),n.length>0&&(r+=".");if(""!=t)return"&iu1="+t+"&iu2="+l+"&iu3="+r}return""}function getSF(e){if(void 0===e)return"";if(""==e)return"";var n=e.split(".");e="";var t=n.length;if(t>0){t>2&&(t=2);var l;for(l=0;l<t;l++){for(var r="",i=0;i<=l;i++)r+=n[i],i<l&&(r+="_");e+=r,l<t-1&&(e+="%2C")}}return e}function _cleanupjsonp(e){!function(e){setTimeout(function(){try{_er(e)&&delete window[e]}catch(e){}},100)}(e)}function replacePairs(e,n){for(k in n)e=e.replace("["+k+"]",n[k]);return e}function _hideTimeline(){try{var e=!function(){var e=!1;return function(n){/iphone|ipad/i.test(n)&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}();if(document.getElementById("hidetimelineStyle"))return;var n=document.createElement("style");n.setAttribute("id","hidetimelineStyle"),document.head.appendChild(n);var t=n.sheet;t.addRule("video::-webkit-media-controls-timeline","visibility: hidden;display: none;display: flex;"),e?function(e){e.addRule("video::-webkit-media-controls-current-time-display","color: transparent;background-image: url(image/live.svg);background-repeat:no-repeat;background-position:center;")}(t):function(e){e.addRule("video::-webkit-media-controls-current-time-display","visibility: hidden; display: none;display: flex;")}(t),t.addRule("video::-webkit-media-controls-time-remaining-display","visibility: hidden; display: none;display: flex;"),t.addRule("video::-webkit-media-controls-panel","display: flex"),t.addRule("video::-webkit-media-controls-fullscreen-button","display: table-row"),t.addRule("video::-webkit-media-controls-volume-slider","{display: table-row")}catch(e){}}function _showTimeline(){try{var e=document.getElementById("hidetimelineStyle");for(e&&e.parentNode&&e.parentNode.removeChild(e);e;)e&&e.parentNode&&e.parentNode.removeChild(e),e=document.getElementById("hidetimelineStyle")}catch(e){}}function _toInt(e){function n(e){return"number"==typeof e?e:"string"==typeof e?e=e.replace(/\D/g,""):void 0}try{e=n(e)}catch(n){e=e}return e=n(e),parseInt(.5+parseInt(e))}function _copyTextToClipboard(e){var n=document.createElement("textarea");n.style.position="fixed",n.style.top=0,n.style.left=0,n.style.width="2em",n.style.height="2em",n.style.padding=0,n.style.border="none",n.style.outline="none",n.style.boxShadow="none",n.style.background="transparent",n.value=e,document.body.appendChild(n),n.select();try{document.execCommand("copy")}catch(e){}document.body.removeChild(n)}window._KEYS={space:32,left:37,up:38,right:39,down:40},window.SPL={conf:{},controls:{},plugins:{},players:{},playerObj:{},allPlayerList:[],DEFAULT:{},CID:{}};var ISADBLOCKER=!0;window._lr=function(e,n){e=e||"log";try{window._debug&&console&&console[e]&&console[e].apply(window,n)}catch(e){}},window._l=function(){_lr("log",arguments)},window._li=function(){_lr("info",arguments)},window._ld=function(){_lr("debug",arguments)},window._le=function(){_lr("error",arguments)},window._efn=function(){};try{SPL.hasFlash=void 0!==navigator.plugins&&"object"==typeof navigator.plugins["Shockwave Flash"]||window.ActiveXObject&&!1!==new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(e){SPL.hasFlash=!1}window._debug=!0,fsevt=[];var L,J=["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "),"requestFullscreen cancelFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "),"webkitRequestFullscreen webkitExitFullScreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),"webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),["webkitEnterFullscreen","webkitendfullscreen"],"mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "),"msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" "),"msRequestFullscreen msCancelFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")];for(L=0;L<J.length;L++)if(J[L][1]in document){window.fsevt=J[L];break}