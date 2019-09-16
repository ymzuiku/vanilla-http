"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}).apply(this,arguments)},__awaiter=this&&this.__awaiter||function(n,u,a,s){return new(a=a||Promise)(function(e,t){function r(n){try{i(s.next(n))}catch(n){t(n)}}function o(n){try{i(s.throw(n))}catch(n){t(n)}}function i(n){n.done?e(n.value):function(e){return e instanceof a?e:new a(function(n){n(e)})}(n.value).then(r,o)}i((s=s.apply(n,u||[])).next())})},__generator=this&&this.__generator||function(t,r){var o,i,u,n,a={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return n={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function e(e){return function(n){return function(e){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,i&&(u=2&e[0]?i.return:e[0]?i.throw||((u=i.return)&&u.call(i),0):i.next)&&!(u=u.call(i,e[1])).done)return u;switch(i=0,u&&(e=[2&e[0],u.value]),e[0]){case 0:case 1:u=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,i=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(!(u=0<(u=a.trys).length&&u[u.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!u||e[1]>u[0]&&e[1]<u[3])){a.label=e[1];break}if(6===e[0]&&a.label<u[1]){a.label=u[1],u=e;break}if(u&&a.label<u[2]){a.label=u[2],a.ops.push(e);break}u[2]&&a.ops.pop(),a.trys.pop();continue}e=r.call(t,a)}catch(n){e=[6,n],i=0}finally{o=u=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,n])}}};function request(o,i){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(n){return[2,new Promise(function(e,t){var r=new XMLHttpRequest;r.open(o.method,""+i.url+o.url),r.timeout=o.timeout||i.timeout,r.responseType=o.responseType||i.responseType,i&&i.headers&&Object.keys(i.headers).forEach(function(n){r.setRequestHeader(n,i.headers[n])}),o.headers&&Object.keys(o.headers).forEach(function(n){r.setRequestHeader(n,o.headers[n])}),o.onloadend&&(r.onloadend=o.onloadend),o.onloadstart&&(r.onloadstart=o.onloadstart),o.onprogress&&(r.onprogress=o.onprogress),r.onload=function(n){o.onload&&o.onload(n),e(n)},r.onabort=function(n){o.onabort&&o.onabort(n),t(n)},r.onerror=function(n){o.onerror&&o.onerror(n),t(n)},r.ontimeout=function(n){o.ontimeout&&o.ontimeout(n),t(n)},r.send(o.body?JSON.stringify(o.body):void 0)})]})})}exports.__esModule=!0,exports.Mula=function(n){var o=__assign({headers:{"Content-Type":"application/json"},timeout:9e3,url:"",responseType:"json"},n);return{reoquest:function(e){return __awaiter(void 0,void 0,void 0,function(){return __generator(this,function(n){return[2,request(e,o)]})})},GET:function(e,t,r){return __awaiter(void 0,void 0,void 0,function(){return __generator(this,function(n){return[2,request(__assign({url:e,body:t,method:"GET"},r),o)]})})},POST:function(e,t,r){return __awaiter(void 0,void 0,void 0,function(){return __generator(this,function(n){return[2,request(__assign({url:e,body:t,method:"POST"},r),o)]})})},DELETE:function(e,t,r){return __awaiter(void 0,void 0,void 0,function(){return __generator(this,function(n){return[2,request(__assign({url:e,body:t,method:"DELETE"},r),o)]})})},PUT:function(e,t,r){return __awaiter(void 0,void 0,void 0,function(){return __generator(this,function(n){return[2,request(__assign({url:e,body:t,method:"PUT"},r),o)]})})},OPTIONS:function(e,t,r){return __awaiter(void 0,void 0,void 0,function(){return __generator(this,function(n){return[2,request(__assign({url:e,body:t,method:"OPTIONS"},r),o)]})})}}};