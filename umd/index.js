!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).vanillaHttp={})}(this,function(t){"use strict";var l=function(){return(l=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function u(u,i,a,s){return new(a=a||Promise)(function(t,e){function n(t){try{o(s.next(t))}catch(t){e(t)}}function r(t){try{o(s.throw(t))}catch(t){e(t)}}function o(e){e.done?t(e.value):new a(function(t){t(e.value)}).then(n,r)}o((s=s.apply(u,i||[])).next())})}function i(n,r){var o,u,i,t,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,u&&(i=2&e[0]?u.return:e[0]?u.throw||((i=u.return)&&i.call(u),0):u.next)&&!(i=i.call(u,e[1])).done)return i;switch(u=0,i&&(e=[2&e[0],i.value]),e[0]){case 0:case 1:i=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,u=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(!(i=0<(i=a.trys).length&&i[i.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!i||e[1]>i[0]&&e[1]<i[3])){a.label=e[1];break}if(6===e[0]&&a.label<i[1]){a.label=i[1],i=e;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(e);break}i[2]&&a.ops.pop(),a.trys.pop();continue}e=r.call(n,a)}catch(t){e=[6,t],u=0}finally{o=i=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}}var a=void 0,s=require("querystring-number");function c(c,f){return u(this,void 0,void 0,function(){return i(this,function(t){return[2,new Promise(function(u,i){var t,a=new(f.XMLHttpRequest||XMLHttpRequest);t=f.baseURL?""+f.baseURL+c.url:c.url,a.open(c.method,t),a.timeout=c.timeout||f.timeout,a.responseType=c.responseType||f.responseType;var e=l({},f.headers,c.headers);Object.keys(e).forEach(function(t){a.setRequestHeader(t,e[t])});var s={onload:!0,onabort:!1,onerror:!1,ontimeout:!1,onloadend:null,onloadstart:null,onprogress:null};Object.keys(s).forEach(function(e){var n=s[e],r=f[e],o=c[e];a[e]=function(t){t=f.reducer(t,e),t=r&&r(t)||t,t=o&&o(t)||t,null!==n&&(n?u(t):i(t))}}),c.body?a.send(JSON.stringify(c.body)):a.send()})]})})}function e(t,e){if(!t)return t;var n=t;return"object"==typeof(t=t.target&&t.target.response||t)&&(t.__http__={total:n.total,status:n.target&&n.target.status,readyState:n.target&&n.target.readyState,responseType:n.target&&n.target.responseType,responseURL:n.target&&n.target.responseURL,statusText:n.target&&n.target.statusText,timeStamp:n.timeStamp}),t}function n(t){var o=l({headers:{"Content-Type":"application/json"},timeout:5e3,url:"",responseType:"json",reducer:e},t);return{reoquest:function(e){return u(a,void 0,void 0,function(){return i(this,function(t){return[2,c(e,o)]})})},get:function(e,n,r){return u(a,void 0,void 0,function(){return i(this,function(t){return n&&(e=e+"?"+s.stringify(n)),[2,c(l({url:e,method:"GET"},r),o)]})})},post:function(e,n,r){return u(a,void 0,void 0,function(){return i(this,function(t){return[2,c(l({url:e,body:n,method:"POST"},r),o)]})})},delete:function(e,n,r){return u(a,void 0,void 0,function(){return i(this,function(t){return[2,c(l({url:e,body:n,method:"DELETE"},r),o)]})})},put:function(e,n,r){return u(a,void 0,void 0,function(){return i(this,function(t){return[2,c(l({url:e,body:n,method:"PUT"},r),o)]})})},options:function(e,n,r){return u(a,void 0,void 0,function(){return i(this,function(t){return[2,c(l({url:e,body:n,method:"OPTIONS"},r),o)]})})}}}t.VanillaHttp=n,t.default=n,t.defaultReducer=e,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
