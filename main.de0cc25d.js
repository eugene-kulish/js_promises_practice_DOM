parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function n(n,e){var t=document.createElement("div");t.dataset.qa="notification",t.className="notification ".concat("success"===e?"success":"warning"),t.classList.add(n.toLowerCase()),t.innerText="".concat(n," promise was ").concat("success"===e?"resolved":"rejected"),document.body.append(t)}var e=new Promise(function(n,e){document.addEventListener("click",function(){n("First")}),setTimeout(function(){return e("First")},3e3)}),t=Promise.race([new Promise(function(n){document.addEventListener("click",function(){n("Second")})}),new Promise(function(n){document.addEventListener("contextmenu",function(){n("Second")})})]),c=Promise.all([new Promise(function(n){document.addEventListener("click",function(){n("Third")})}),new Promise(function(n){document.addEventListener("contextmenu",function(){n("Third")})})]);e.then(function(e){return n(e,"success")}).catch(function(e){return n(e,"error")}),t.then(function(e){return n(e,"success")}).catch(function(e){return n(e,"error")}),c.then(function(e){return n(e[0],"success")}).catch(function(e){return n(e[0],"error")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.de0cc25d.js.map