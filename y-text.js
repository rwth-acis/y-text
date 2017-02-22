/**
 * yjs - A framework for real-time p2p shared editing on any data
 * @version v12.1.4
 * @link http://y-js.org
 * @license MIT
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.yText=t()}}(function(){return function t(e,n,r){function i(s,l){if(!n[s]){if(!e[s]){var u="function"==typeof require&&require;if(!l&&u)return u(s,!0);if(o)return o(s,!0);var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}var f=n[s]={exports:{}};e[s][0].call(f.exports,function(t){var n=e[s][1][t];return i(n?n:t)},f,f.exports,t,e,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e,n){function r(t,e,n){if(t==e)return t?[[p,t]]:[];(n<0||t.length<n)&&(n=null);var r=l(t,e),o=t.substring(0,r);t=t.substring(r),e=e.substring(r),r=u(t,e);var s=t.substring(t.length-r);t=t.substring(0,t.length-r),e=e.substring(0,e.length-r);var a=i(t,e);return o&&a.unshift([p,o]),s&&a.push([p,s]),f(a),null!=n&&(a=h(a,n)),a}function i(t,e){var n;if(!t)return[[d,e]];if(!e)return[[v,t]];var i=t.length>e.length?t:e,s=t.length>e.length?e:t,l=i.indexOf(s);if(l!=-1)return n=[[d,i.substring(0,l)],[p,s],[d,i.substring(l+s.length)]],t.length>e.length&&(n[0][0]=n[2][0]=v),n;if(1==s.length)return[[v,t],[d,e]];var u=a(t,e);if(u){var f=u[0],c=u[1],h=u[2],g=u[3],b=u[4],y=r(f,h),x=r(c,g);return y.concat([[p,b]],x)}return o(t,e)}function o(t,e){for(var n=t.length,r=e.length,i=Math.ceil((n+r)/2),o=i,l=2*i,u=new Array(l),a=new Array(l),f=0;f<l;f++)u[f]=-1,a[f]=-1;u[o+1]=0,a[o+1]=0;for(var c=n-r,h=c%2!=0,g=0,p=0,b=0,y=0,x=0;x<i;x++){for(var w=-x+g;w<=x-p;w+=2){var m,A=o+w;m=w==-x||w!=x&&u[A-1]<u[A+1]?u[A+1]:u[A-1]+1;for(var O=m-w;m<n&&O<r&&t.charAt(m)==e.charAt(O);)m++,O++;if(u[A]=m,m>n)p+=2;else if(O>r)g+=2;else if(h){var T=o+c-w;if(T>=0&&T<l&&a[T]!=-1){var S=n-a[T];if(m>=S)return s(t,e,m,O)}}}for(var _=-x+b;_<=x-y;_+=2){var S,T=o+_;S=_==-x||_!=x&&a[T-1]<a[T+1]?a[T+1]:a[T-1]+1;for(var k=S-_;S<n&&k<r&&t.charAt(n-S-1)==e.charAt(r-k-1);)S++,k++;if(a[T]=S,S>n)y+=2;else if(k>r)b+=2;else if(!h){var A=o+c-_;if(A>=0&&A<l&&u[A]!=-1){var m=u[A],O=o+m-A;if(S=n-S,m>=S)return s(t,e,m,O)}}}}return[[v,t],[d,e]]}function s(t,e,n,i){var o=t.substring(0,n),s=e.substring(0,i),l=t.substring(n),u=e.substring(i),a=r(o,s),f=r(l,u);return a.concat(f)}function l(t,e){if(!t||!e||t.charAt(0)!=e.charAt(0))return 0;for(var n=0,r=Math.min(t.length,e.length),i=r,o=0;n<i;)t.substring(o,i)==e.substring(o,i)?(n=i,o=n):r=i,i=Math.floor((r-n)/2+n);return i}function u(t,e){if(!t||!e||t.charAt(t.length-1)!=e.charAt(e.length-1))return 0;for(var n=0,r=Math.min(t.length,e.length),i=r,o=0;n<i;)t.substring(t.length-i,t.length-o)==e.substring(e.length-i,e.length-o)?(n=i,o=n):r=i,i=Math.floor((r-n)/2+n);return i}function a(t,e){function n(t,e,n){for(var r,i,o,s,a=t.substring(n,n+Math.floor(t.length/4)),f=-1,c="";(f=e.indexOf(a,f+1))!=-1;){var h=l(t.substring(n),e.substring(f)),g=u(t.substring(0,n),e.substring(0,f));c.length<g+h&&(c=e.substring(f-g,f)+e.substring(f,f+h),r=t.substring(0,n-g),i=t.substring(n+h),o=e.substring(0,f-g),s=e.substring(f+h))}return 2*c.length>=t.length?[r,i,o,s,c]:null}var r=t.length>e.length?t:e,i=t.length>e.length?e:t;if(r.length<4||2*i.length<r.length)return null;var o,s=n(r,i,Math.ceil(r.length/4)),a=n(r,i,Math.ceil(r.length/2));if(!s&&!a)return null;o=a?s&&s[4].length>a[4].length?s:a:s;var f,c,h,g;t.length>e.length?(f=o[0],c=o[1],h=o[2],g=o[3]):(h=o[0],g=o[1],f=o[2],c=o[3]);var v=o[4];return[f,c,h,g,v]}function f(t){t.push([p,""]);for(var e,n=0,r=0,i=0,o="",s="";n<t.length;)switch(t[n][0]){case d:i++,s+=t[n][1],n++;break;case v:r++,o+=t[n][1],n++;break;case p:r+i>1?(0!==r&&0!==i&&(e=l(s,o),0!==e&&(n-r-i>0&&t[n-r-i-1][0]==p?t[n-r-i-1][1]+=s.substring(0,e):(t.splice(0,0,[p,s.substring(0,e)]),n++),s=s.substring(e),o=o.substring(e)),e=u(s,o),0!==e&&(t[n][1]=s.substring(s.length-e)+t[n][1],s=s.substring(0,s.length-e),o=o.substring(0,o.length-e))),0===r?t.splice(n-i,r+i,[d,s]):0===i?t.splice(n-r,r+i,[v,o]):t.splice(n-r-i,r+i,[v,o],[d,s]),n=n-r-i+(r?1:0)+(i?1:0)+1):0!==n&&t[n-1][0]==p?(t[n-1][1]+=t[n][1],t.splice(n,1)):n++,i=0,r=0,o="",s=""}""===t[t.length-1][1]&&t.pop();var a=!1;for(n=1;n<t.length-1;)t[n-1][0]==p&&t[n+1][0]==p&&(t[n][1].substring(t[n][1].length-t[n-1][1].length)==t[n-1][1]?(t[n][1]=t[n-1][1]+t[n][1].substring(0,t[n][1].length-t[n-1][1].length),t[n+1][1]=t[n-1][1]+t[n+1][1],t.splice(n-1,1),a=!0):t[n][1].substring(0,t[n+1][1].length)==t[n+1][1]&&(t[n-1][1]+=t[n+1][1],t[n][1]=t[n][1].substring(t[n+1][1].length)+t[n+1][1],t.splice(n+1,1),a=!0)),n++;a&&f(t)}function c(t,e){if(0===e)return[p,t];for(var n=0,r=0;r<t.length;r++){var i=t[r];if(i[0]===v||i[0]===p){var o=n+i[1].length;if(e===o)return[r+1,t];if(e<o){t=t.slice();var s=e-n,l=[i[0],i[1].slice(0,s)],u=[i[0],i[1].slice(s)];return t.splice(r,1,l,u),[r+1,t]}n=o}}throw new Error("cursor_pos is out of bounds!")}function h(t,e){var n=c(t,e),r=n[1],i=n[0],o=r[i],s=r[i+1];if(null==o)return t;if(o[0]!==p)return t;if(null!=s&&o[1]+s[1]===s[1]+o[1])return r.splice(i,2,s,o),g(r,i,2);if(null!=s&&0===s[1].indexOf(o[1])){r.splice(i,2,[s[0],o[1]],[0,o[1]]);var l=s[1].slice(o[1].length);return l.length>0&&r.splice(i+2,0,[s[0],l]),g(r,i,3)}return t}function g(t,e,n){for(var r=e+n-1;r>=0&&r>=e-1;r--)if(r+1<t.length){var i=t[r],o=t[r+1];i[0]===o[1]&&t.splice(r,2,[i[0],i[1]+o[1]])}return t}var v=-1,d=1,p=0,b=r;b.INSERT=d,b.DELETE=v,b.EQUAL=p,e.exports=b},{}],2:[function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t){t.requestModules(["Array"]).then(function(){var e=function(t){function e(t,n,o){r(this,e);var s=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,o));return s.textfields=[],s.aceInstances=[],s}return o(e,t),l(e,[{key:"toString",value:function(){return this._content.map(function(t){return t.val}).join("")}},{key:"insert",value:function(t,n){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insert",this).call(this,t,n.split(""))}},{key:"unbindAll",value:function(){this.unbindTextareaAll(),this.unbindAceAll()}},{key:"unbindAce",value:function(t){var e=this.aceInstances.findIndex(function(e){return e.editor===t});if(e>=0){var n=this.aceInstances[e];this.unobserve(n.yCallback),n.editor.off("change",n.aceCallback),this.aceInstances.splice(e,1)}}},{key:"unbindAceAll",value:function(t){for(var e=this.aceInstances.length-1;e>=0;e--)this.unbindAce(this.aceInstances[e].editor)}},{key:"bindAce",value:function(t,e){function n(t){if(s){s=!1;try{t()}catch(t){throw s=!0,new Error(t)}s=!0}}function r(e){n(function(){var n,r,i=t.getSession().getDocument();"insert"===e.action?(n=i.positionToIndex(e.start,0),o.insert(n,e.lines.join("\n"))):"remove"===e.action&&(n=i.positionToIndex(e.start,0),r=e.lines.join("\n").length,o.delete(n,r))})}function i(e){var r=t.getSession().getDocument();n(function(){if("insert"===e.type){var t=r.indexToPosition(e.index,0);r.insert(t,e.values.join(""))}else if("delete"===e.type){var n=r.indexToPosition(e.index,0),i=r.indexToPosition(e.index+e.length,0),o=new a(n.row,n.column,i.row,i.column);r.remove(o)}})}var o=this;e=e||{};var s=!0;t.setValue(this.toString()),t.on("change",r),t.selection.clearSelection();var l;l="undefined"!=typeof ace&&null==e.aceClass?ace:e.aceClass;var u=e.aceRequire||l.require,a=u("ace/range").Range;this.observe(i),this.aceInstances.push({editor:t,yCallback:i,aceCallback:r})}},{key:"bind",value:function(){var t=arguments[0];t instanceof Element?this.bindTextarea.apply(this,arguments):null!=t&&null!=t.session&&null!=t.getSession&&null!=t.setValue?this.bindAce.apply(this,arguments):console.error("Cannot bind, unsupported editor!")}},{key:"unbindTextarea",value:function(t){var e=this.textfields.findIndex(function(e){return e.editor===t});if(e>=0){var n=this.textfields[e];this.unobserve(n.yCallback);var r=n.editor;r.removeEventListener("input",n.eventListener),this.textfields.splice(e,1)}}},{key:"unbindTextareaAll",value:function(){for(var t=this.textfields.length-1;t>=0;t--)this.unbindTextarea(this.textfields[t].editor)}},{key:"bindTextarea",value:function(t,e){function n(t){if(o){o=!1;try{t()}catch(t){throw o=!0,new Error(t)}o=!0}}function r(t){n(function(){var e,n;if("insert"===t.type){e=t.index,n=function(t){return t<=e?t:t+=1};var r=l(n);u(r)}else"delete"===t.type&&(e=t.index,n=function(t){return t<e?t:t-=1},r=l(n),u(r))})}e=e||window,null==e.getSelection&&(e=window);for(var i=0;i<this.textfields.length;i++)if(this.textfields[i].editor===t)return;var o=!0,s=this;t.value=this.toString();var l,u,f,c;null!=t.selectionStart&&null!=t.setSelectionRange?(l=function(e){var n=t.selectionStart,r=t.selectionEnd;return null!=e&&(n=e(n),r=e(r)),{left:n,right:r}},u=function(e){f(s.toString()),t.setSelectionRange(e.left,e.right)},f=function(e){t.value=e},c=function(){return t.value}):(l=function(n){var r={},i=e.getSelection(),o=t.textContent.length;r.left=Math.min(i.anchorOffset,o),r.right=Math.min(i.focusOffset,o),null!=n&&(r.left=n(r.left),r.right=n(r.right));var s=i.focusNode;return s===t||s===t.childNodes[0]?r.isReal=!0:r.isReal=!1,r},u=function(n){f(s.toString());var r=t.childNodes[0];if(n.isReal&&null!=r){n.left<0&&(n.left=0),n.right=Math.max(n.left,n.right),n.right>r.length&&(n.right=r.length),n.left=Math.min(n.left,n.right);var i=document.createRange();i.setStart(r,n.left),i.setEnd(r,n.right);var o=e.getSelection();o.removeAllRanges(),o.addRange(i)}},f=function(e){t.innerText=e},c=function(){return t.innerText}),f(this.toString()),this.observe(r);var h=function(){n(function(){for(var t=l(function(t){return t}),e=s.toString(),n=c(),r=a(e,n,t.left),i=0,o=0;o<r.length;o++){var u=r[o];0===u[0]?i+=u[1].length:u[0]===-1?s.delete(i,u[1].length):(s.insert(i,u[1]),i+=u[1].length)}})};t.addEventListener("input",h),this.textfields.push({editor:t,yCallback:r,eventListener:h})}},{key:"_destroy",value:function(){this.unbindAll(),this.textfields=null,this.aceInstances=null,u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"_destroy",this).call(this)}}]),e}(t.Array.typeDefinition.class);t.extend("Text",new t.utils.CustomTypeDefinition({name:"Text",class:e,struct:"List",initType:regeneratorRuntime.mark(function n(r,i){var o;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o=[],n.delegateYield(t.Struct.List.map.call(this,i,function(t){if(t.hasOwnProperty("opContent"))throw new Error("Text must not contain types!");t.content.forEach(function(e,n){o.push({id:[t.id[0],t.id[1]+n],val:t.content[n]})})}),"t0",2);case 2:return n.abrupt("return",new e(r,i.id,o));case 3:case"end":return n.stop()}},n,this)}),createType:function(t,n){return new e(t,n.id,[])}}))})}var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function t(e,n,r){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,r)}if("value"in i)return i.value;var s=i.get;if(void 0!==s)return s.call(r)},a=t("fast-diff");e.exports=s,"undefined"!=typeof Y&&s(Y)},{"fast-diff":1}]},{},[2])(2)});
//# sourceMappingURL=y-text.js.map
