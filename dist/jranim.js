var JRAnim;!function(){"use strict";var n={d:function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o:function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}},e={};!function(){function t(n,e){for(var t in e)if(null==n[t]){var i=e[t];n[t]=i}return n}n.d(e,{default:function(){return r}});var i=function(n,e){var t=!1;return function(){if(!t){var i=this,o=arguments;t=!0,setTimeout((function(){n.apply(i,o),t=!1}),e)}}};function o(n,e){var t,i=100/(t=e.offset,(t=parseInt(t))<=0?t=1:t>100&&(t=100),t);n.forEach((function(n){var t=n.offsetHeight,o=window.pageYOffset||document.documentElement.scrollTop,r=n.getBoundingClientRect().top+o,a=window.innerHeight-t/i;t>window.innerHeight&&(a=window.innerHeight-window.innerHeight/i),pageYOffset>r-a&&pageYOffset<r+t?n.classList.add(e.animClass):e.animToggle&&n.classList.remove(e.animClass)}))}var r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={animElem:".anim",animClass:"anim-show",animToggle:!0,offset:1},r=t(n,e),a=document.querySelectorAll(r.animElem),f=Array.prototype.slice.call(a),s=o.bind(this,f,r);f.length>0&&(window.addEventListener("scroll",i(s,100)),window.addEventListener("resize",i(s,100)),setTimeout((function(){o(f,r)}),300))}}(),JRAnim=e.default}();
//# sourceMappingURL=jranim.js.map