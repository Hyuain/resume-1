parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),a="\n/* 您好，我叫张钰海\n * 接下来我将写一个 html 页面\n * 首先我要准备一个 div\n **/\n#div1 {\n    border: 1px solid red;\n    width: 400px;\n    height: 400px;\n}\n/* 接下来我把 div 变成一个太极图\n * 看好了哦\n * 首先把 div 变成一个圆\n **/\n#div1 {\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0, 0, 0, .5);\n    border: none;\n}\n/* 太极图以一条曲线将圆形分为两半\n * 形成一半白一半黑\n   白者像阳，黑者像阴\n **/\n#div1 {\n    background: linear-gradient(\n        90deg, rgba(255,255,255,1) 0%,\n        rgba(255,255,255,1) 50%,\n        rgba(0,0,0,1) 50%,\n        rgba(0,0,0,1) 100%);\n}\n/* 阳中有阴，阴中有阳\n * 分开的两半，酷似两条鱼\n * 所以俗称阴阳鱼\n **/\n#div1::before {\n    width: 200px;\n    height: 200px;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: rgb(0,0,0);\n    background: radial-gradient(\n        circle,\n        rgba(0,0,0,1) 0%,\n        rgba(0,0,0,1) 25%,\n        rgba(255,255,255,1) 25%,\n        rgba(255,255,255,1) 100%);\n    border-radius: 50%;\n}\n#div1::after {\n    width: 200px;\n    height: 200px;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: rgb(255,255,255);\n    background: radial-gradient(\n        circle,\n        rgba(255,255,255,1) 0%,\n        rgba(255,255,255,1) 25%,\n        rgba(0,0,0,1) 25%,\n        rgba(0,0,0,1) 100%);\n    border-radius: 50%;\n}\n",e="",d=0,t=function t(){d<a.length&&setTimeout(function(){"\n"===a[d]?e+="<br>":" "===a[d]?e+="&nbsp":e+=a[d],n.innerHTML=e,r.innerHTML=a.substring(0,d+1),d++,window.scrollTo(0,99999),n.scrollTo(0,99999),t()},50)};t();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.8fa60891.js.map