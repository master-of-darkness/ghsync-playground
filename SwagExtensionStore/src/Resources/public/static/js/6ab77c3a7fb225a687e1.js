(window["webpackJsonpPluginswag-extension-store"]=window["webpackJsonpPluginswag-extension-store"]||[]).push([[948],{687:function(){},948:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}}),n(191);var r=Shopware.Component.wrapComponentConfig({template:"{% block sw_dashboard_index_content_intro_card %}\n    {% parent %}\n    <sw-dashboard-statistics-promotion-card />\n{% endblock %}\n"})},191:function(e,t,n){var r=n(687);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),n(346).Z("6ab58140",r,!0,{})},346:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var s=t[o],a=s[0],i={id:e+":"+o,css:s[1],media:s[2],sourceMap:s[3]};r[a]?r[a].parts.push(i):n.push(r[a]={id:a,parts:[i]})}return n}n.d(t,{Z:function(){return h}});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},a=o&&(document.head||document.getElementsByTagName("head")[0]),i=null,d=0,u=!1,c=function(){},l=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,o){u=n,l=o||{};var a=r(e,t);return v(a),function(t){for(var n=[],o=0;o<a.length;o++){var i=s[a[o].id];i.refs--,n.push(i)}t?v(a=r(e,t)):a=[];for(var o=0;o<n.length;o++){var i=n[o];if(0===i.refs){for(var d=0;d<i.parts.length;d++)i.parts[d]();delete s[i.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=s[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(m(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(m(n.parts[o]));s[n.id]={id:n.id,refs:1,parts:a}}}}function g(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function m(e){var t,n,r=document.querySelector("style["+p+'~="'+e.id+'"]');if(r){if(u)return c;r.parentNode.removeChild(r)}if(f){var o=d++;t=y.bind(null,r=i||(i=g()),o,!1),n=y.bind(null,r,o,!0)}else t=w.bind(null,r=g()),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){r?(r.css!==e.css||r.media!==e.media||r.sourceMap!==e.sourceMap)&&t(e=r):n()}}var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function y(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var s=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function w(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),l.ssrId&&e.setAttribute(p,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);