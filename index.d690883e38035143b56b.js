!function(s){function e(e){for(var r,t,n=e[0],a=e[1],c=e[2],o=0,u=[];o<n.length;o++)t=n[o],Object.prototype.hasOwnProperty.call(i,t)&&i[t]&&u.push(i[t][0]),i[t]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(s[r]=a[r]);for(p&&p(e);u.length;)u.shift()();return f.push.apply(f,c||[]),l()}function l(){for(var e,r=0;r<f.length;r++){for(var t=f[r],n=!0,a=1;a<t.length;a++){var c=t[a];0!==i[c]&&(n=!1)}n&&(f.splice(r--,1),e=o(o.s=t[0]))}return e}var t={},i={0:0},f=[];function o(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return s[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=s,o.c=t,o.d=function(e,r,t){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(r,e){if(1&e&&(r=o(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)o.d(t,n,function(e){return r[e]}.bind(null,n));return t},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="/tetris-react-hooks/";var r=window.webpackJsonp=window.webpackJsonp||[],n=r.push.bind(r);r.push=e,r=r.slice();for(var a=0;a<r.length;a++)e(r[a]);var p=n;f.push([9,1]),l()}({1:function(e,r,t){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var o={}.hasOwnProperty;function u(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var n=typeof t;if("string"==n||"number"==n)e.push(t);else if(Array.isArray(t)&&t.length){var a=u.apply(null,t);a&&e.push(a)}else if("object"==n)for(var c in t)o.call(t,c)&&t[c]&&e.push(c)}}return e.join(" ")}e.exports?(u.default=u,e.exports=u):void 0===(n=function(){return u}.apply(r,[]))||(e.exports=n)}()},8:function(e,r,t){},9:function(e,r,t){"use strict";t.r(r);var u=t(0),i=t.n(u),n=t(2),a=t.n(n);t(8);function s(e){switch(e){case 0:return[[1,0],[1,0],[1,1]];case 1:return[[1,1,1],[1,0,0]];case 2:return[[1,1],[0,1],[0,1]];case 3:return[[0,0,1],[1,1,1]]}}function l(e){switch(e){case 0:return[[1,1],[1,0],[1,0]];case 1:return[[1,1,1],[0,0,1]];case 2:return[[0,1],[0,1],[1,1]];case 3:return[[1,0,0],[1,1,1]]}}function f(e){switch(e){case 0:case 2:return[[1,0],[1,1],[0,1]];case 1:case 3:return[[0,1,1],[1,1,0]]}}function p(e){switch(e){case 0:case 2:return[[0,1],[1,1],[1,0]];case 1:case 3:return[[1,1,0],[0,1,1]]}}function h(){return[[1,1],[1,1]]}function v(e){switch(e){case 0:case 2:return[[1],[1],[1],[1]];case 1:case 3:return[[1,1,1,1]]}}function m(e){switch(e){case 0:return[[1,0],[1,1],[1,0]];case 1:return[[1,1,1],[0,1,0]];case 2:return[[0,1],[1,1],[0,1]];case 3:return[[0,1,0],[1,1,1]]}}function b(e,r){var t,n=(t=Object.values([s,l,f,p,h,v,m]))[Math.floor(Math.random()*t.length)],a=n(0),c=a.length,o=a[0].length;return{col:Math.floor((r-o)/2),row:e-c,style:16*Math.floor(4*Math.random())+Math.floor(7*Math.random())+1,orientation:0,func:n,mask:function(e){return this.func(0===arguments.length?this.orientation:e)}}}function d(e,r,t,n,a,c){if(!(r<0||t<0||t+e[0].length>c)){for(var o=0;o<e.length;o++)for(var u=0;u<e[0].length;u++)if(e[o][u]&&n[(r+o)*c+t+u])return;return 1}}function S(e,r,t,n,a,c,o){for(var u=new Uint8Array(a),s=0;s<e.length;s++)for(var l=0;l<e[0].length;l++)e[s][l]&&(u[(r+s)*o+t+l]=n);return u}function c(e,r){for(var t=[],n=0;n<e.length;n+=r)t.push(e.slice(n,n+r));return t}function y(e,r,t){return c(e,t).filter(function(e){return e.every(function(e){return e})}).length}function g(e,r,t){var n=c(e,t).filter(function(e){return e.some(function(e){return!e})});if(n.length===r)return e;var a=new Uint8Array(r*t);return n.forEach(function(e,r){a.set(e,r*t)}),a}function o(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t}function w(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach(function(e){O(r,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))})}return r}function O(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var E="best-score",j=10,k=20,P=["INIT","RESTART","PAUSE","RESUME","DOWN","LEFT","RIGHT","DOWN","ROTATE","DROP"].reduce(function(e,r){return e[r]=r,e},{});function N(e){for(var r=arguments.length,t=new Array(1<r?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return{type:e,payload:t}}function T(e){for(var r=w({},e,{currentShape:w({},e.currentShape)});!d(r.currentShape.mask(),r.currentShape.row,r.currentShape.col,r.buffer,0,j);)r.currentShape.row+=1,r.gameOver=!0;return r}function A(){return T({cols:j,rows:k,buffer:new Uint8Array(k*j),currentShape:b(k,j),nextShape:b(k,j),overflow:!1,gameOver:!1,gamePaused:!1,score:0,bestScore:Number(localStorage.getItem(E)||0),level:0})}function R(e,r){var t=w({},e);return d(t.currentShape.mask(),t.currentShape.row,t.currentShape.col+r,t.buffer,0,j)&&(t.currentShape=w({},t.currentShape,{col:t.currentShape.col+r})),t}function M(e,r){switch(r.type){case P.INIT:case P.RESTART:return A();case P.PAUSE:return w({},e,{gamePaused:!0});case P.RESUME:return w({},e,{gamePaused:!1});case P.DOWN:return function(e){var r=w({},e);if(d(r.currentShape.mask(),r.currentShape.row-1,r.currentShape.col,r.buffer,0,j))return r.currentShape=w({},r.currentShape,{row:r.currentShape.row-1}),r;r.buffer=S(r.currentShape.mask(),r.currentShape.row,r.currentShape.col,r.currentShape.style,r.buffer,0,j);var t=y(r.buffer,0,j);if(t){switch(t){default:case 1:r.score=r.score+100;break;case 2:r.score=r.score+300;break;case 3:r.score=r.score+400;break;case 4:r.score=r.score+800}r.score>r.bestScore&&(localStorage.setItem(E,r.score),r.bestScore=r.score),r.level=Math.min(Math.floor(r.score/500),9),r.buffer=g(r.buffer,k,j)}return r.currentShape=r.nextShape,r.nextShape=b(k,j),T(r)}(e);case P.LEFT:return R(e,-1);case P.RIGHT:return R(e,1);case P.ROTATE:return t=w({},e),n=0<=t.currentShape.orientation+1?(t.currentShape.orientation+1)%4:3,c=a=0,3===(o=t.currentShape.mask(0).length)&&([1,3].includes(n)&&(c=-1),[0,2].includes(n)&&(c=1)),4===o&&([1,3].includes(n)&&(c=-1,a=1),[0,2].includes(n)&&(a=-(c=1))),d(t.currentShape.mask(n),t.currentShape.row+a,t.currentShape.col+c,t.buffer,0,j)&&(t.currentShape=w({},t.currentShape,{orientation:n,row:t.currentShape.row+a,col:t.currentShape.col+c})),t;case P.DROP:return function(e){for(var r=w({},e);d(r.currentShape.mask(),r.currentShape.row-1,r.currentShape.col,r.buffer,0,j);)r.currentShape=w({},r.currentShape,{row:r.currentShape.row-1});return r}(e);default:return e}var t,n,a,c,o}var x=t(1),I=t.n(x);function D(e){var o,r=e.buffer,t=e.rows,u=e.cols,n=e.shape;function a(e,r){var t=o[e*u+r]-1,n=I()("cell","default");if(0<=t){var a=t%16||0,c=t>>>4||0;n=I()("cell","color-"+a,"fill-"+c)}return i.a.createElement("div",{className:n,key:r+"x"+e})}function c(e){for(var r=[],t=0;t<u;t++)r.push(a(e,t));return i.a.createElement("div",{className:"row",key:e},r)}return o=n?S(n.mask(),n.row,n.col,n.style,r,0,u):r,function(){for(var e=[],r=0;r<t;r++)e.unshift(c(r));return i.a.createElement("div",{className:"board"},e)}()}var U=Object(u.memo)(function(e){var t=e.shape,n=e.pos,a=t&&t.func(0)||[],c=a.length,o=a.length&&a[0].length,u=function(e,r){return a[e][r]?t.style-1:-1};function s(e,r){var t=u(e,r),n=I()("cell","default");if(0<=t){var a=t%16||0,c=t>>>4||0;n=I()("cell","color-"+a,"fill-"+c)}return i.a.createElement("div",{className:n,key:r+"x"+e})}function l(e){for(var r=[],t=0;t<o;t++)r.push(s(e,t));return i.a.createElement("div",{className:"row",key:e},r)}return function(){for(var e=[],r=0;r<c;r++)e.unshift(l(r));return i.a.createElement("div",{className:I()("shape",n)},e)}()});var L=Object(u.memo)(function(e){var r=e.shape,t=e.score,n=e.level;return i.a.createElement("aside",{className:"side-panel"},i.a.createElement("div",{className:"score"},"Current score is: ",t),i.a.createElement("div",{className:"level"},"Current Level is: ",n+1),i.a.createElement(U,{shape:r}))});function C(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],n=!0,a=!1,c=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(t.push(o.value),!r||t.length!==r);n=!0);}catch(e){a=!0,c=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw c}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var _=Object(u.memo)(function(){var e=C(Object(u.useReducer)(M,{},A),2),t=e[0],n=e[1];function a(){n(N(P.RESTART))}function c(){n(N(P.RESUME))}function o(){n(N(P.DOWN))}return Object(u.useEffect)(function(){function e(e){if(t.gameOver)e.repeat||a();else if(t.gamePaused)e.repeat||c();else switch(console.log(e),e.key){case"Pause":n(N(P.PAUSE));break;case"ArrowDown":o();break;case"ArrowLeft":n(N(P.LEFT));break;case"ArrowRight":n(N(P.RIGHT));break;case"ArrowUp":n(N(P.ROTATE));break;case" ":n(N(P.DROP))}}var r=setInterval(function(){t.gameOver||t.gamePaused||o()},1e3-100*t.level);return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e),clearInterval(r)}},[t]),i.a.createElement("div",{className:"game"},t.gameOver&&i.a.createElement("div",{className:"gameover",onClick:a},i.a.createElement("div",{className:"message"},i.a.createElement("p",null,"Game is over"),i.a.createElement("p",{className:"score"},"Your score is ",t.score),i.a.createElement("p",{className:"score"},"Best score is ",t.bestScore),i.a.createElement("div",{className:"cta"},"Click to restart."))),t.gamePaused&&i.a.createElement("div",{className:"gamepaused",onClick:c},i.a.createElement("div",{className:"message"},"Game is paused.",i.a.createElement("div",{className:"cta"},"Click to resume."))),i.a.createElement("div",{className:"central-zone"},i.a.createElement(D,{buffer:t.buffer,rows:t.rows,cols:t.cols,shape:t.currentShape}),i.a.createElement(L,{shape:t.nextShape,score:t.score,level:t.level})))});a.a.render(i.a.createElement(_,null),document.getElementById("root"))}});