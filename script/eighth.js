!function(){"use strict";function g(a){a[c]||(a[c]=0===f.length?++d:f.pop());var b=a[c];return e[b]||(e[b]=[])}function h(a){var b=a[c];e[b]&&(e[b]=null,a[c]=null,f.push(b))}function i(c,d,e,f){"function"==typeof e&&(f=e,e=null);var h=a.exec(d);d=h[1]||null;var i=h[2]||null;if(d){var j=f,k=f;j=e?function(a){for(var d=a.target;d&&d!==c;d=d.parentElement)if(b.call(d,e)){var f=k.call(d,a,d);return f===!1&&(a.stopPropagation(),a.preventDefault()),f}}:function(a){var b=k.call(c,a,c);return b===!1&&(a.stopPropagation(),a.preventDefault()),b},c.addEventListener(d,j,!1),g(c).push({eventName:d,callback:f,handler:j,namespace:i,selector:e})}}function j(b,c,d,e){"function"==typeof d&&(e=d,d=null);var f=a.exec(c||"");c=f[1];var i=f[2],j=g(b)||[];if(c||i||d||e){var k=j.filter(function(a){return!(i&&a.namespace!==i||c&&a.eventName!==c||e&&a.callback!==e||d&&a.selector!==d)});k.forEach(function(a){b.removeEventListener(a.eventName,a.handler,!1),j.splice(j.indexOf(a),1)}),0===j.length&&h(b)}else j.forEach(function(a){b.removeEventListener(a.eventName,a.handler,!1)}),h(b)}function k(a,b){if(b=b||document,!(this instanceof k))return new k(a,b);if(a)if("string"==typeof a)if(/^\s*</.test(a)){var c=document.createElement("div");c.innerHTML=a,this[0]=c.firstChild,c.removeChild(c.firstChild),this.length=1}else a=b.querySelector(a),null!==a?(this[0]=a,this.length=1):this.length=0;else this[0]=a,this.length=1;else this.length=0}var a=/^([^.]+)?(?:\.([^.]+))?$/,b=Element.prototype.matchesSelector||null;b||["webkit","moz","o","ms"].forEach(function(a){var c=Element.prototype[a+"MatchesSelector"];c&&(b=c)});var c="backboneNativeKey"+Math.random(),d=1,e={},f=[];if(k.prototype={hide:null,appendTo:null,find:null,attr:function(a){return Object.keys(a).forEach(function(b){switch(b){case"html":this[0].innerHTML=a[b];break;case"text":this[0].textContent=a[b];break;case"class":this[0].className=a[b];break;default:this[0].setAttribute(b,a[b])}},this),this},html:function(a){return this[0].innerHTML=a,this},remove:function(){var a=this[0];return a.parentElement&&a.parentElement.removeChild(a),function b(a){j(a);for(var c=0,d=a.childNodes.length;d>c;c++)a.childNodes[c].nodeType!==Node.TEXT_NODE&&b(a.childNodes[c])}(a),this},on:function(a,b,c){return i(this[0],a,b,c),this},off:function(a,b,c){return j(this[0],a,b,c),this},bind:function(a,b){return this.on(a,b)},unbind:function(a,b){return this.off(a,b)},delegate:function(a,b,c){return this.on(b,a,c)},undelegate:function(a,b,c){return this.off(b,a,c)}},k.ajax=function(a){a=a||{};var b=a.type||"GET",c=a.url,d=void 0===a.processData?!0:!!a.processData,e=a.contentType||"application/x-www-form-urlencoded; charset=UTF-8",f=a.data;if(d&&"object"==typeof f){var g=Object.keys(f).map(function(a){return encodeURIComponent(a)+"="+encodeURIComponent(f[a])});f=g.join("&")}!f||"GET"!==b&&"HEAD"!==b||(c+=(-1===c.indexOf("?")?"?":"&")+f,f=void 0);var h=new XMLHttpRequest;return h.open(b,c,!0),h.setRequestHeader("Content-Type",e),a.beforeSend&&a.beforeSend(h),h.onload=function(){var b=!1,c=h.responseText;if("json"===a.dataType)try{c=JSON.parse(c)}catch(d){b=!0}!b&&h.status>=200&&h.status<300?a.success&&a.success(c,h.statusText,h):a.error&&a.error(h)}.bind(this),h.onerror=h.onabort=function(){a.error&&a.error(h)},h.send(f),h},k.on=i,k.off=j,"undefined"!=typeof exports)module.exports=k;else{var l=this,m=l.Backbone?l.Backbone.Native:null,n=l.$;l.Backbone&&(l.Backbone.Native=k),l.$=k,k.noConflict=function(a){return l.$=n,a&&(l.Backbone.Native=m),k},l.Backbone&&(l.Backbone.setDomLibrary?l.Backbone.setDomLibrary(k):l.Backbone.$=k)}}.call(this);