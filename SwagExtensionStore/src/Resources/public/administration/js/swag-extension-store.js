(function(){var e,t,n,i,r,o,s,a,l={497:function(e,t,n){Shopware.Component.override("sw-dashboard-index",()=>n.e(948).then(n.bind(n,948))),Shopware.Component.register("sw-dashboard-statistics-promotion-card",()=>n.e(554).then(n.bind(n,554)))}},p={};function d(e){var t=p[e];if(void 0!==t)return t.exports;var n=p[e]={id:e,exports:{}};return l[e](n,n.exports,d),n.exports}d.m=l,d.d=function(e,t){for(var n in t)d.o(t,n)&&!d.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},d.f={},d.e=function(e){return Promise.all(Object.keys(d.f).reduce(function(t,n){return d.f[n](e,t),t},[]))},d.u=function(e){return"static/js/"+({31:"047c91043d980435dc3e",53:"13a36cf351ebaac33dbb",85:"b77c2852dd9340050e8c",90:"f25a223c24c149198225",195:"5621556a351f65a2fe0f",202:"2e1a0be9eca0e6d33f32",257:"d15a90e2f71dc098505f",340:"8b4ee1c3cd984ffdbbc3",368:"e5de3efdaae22665f06c",554:"60b9d94422e16b44e68c",623:"ca1cadea52c4548d54e6",814:"b3ff0e3fa8f415c147b6",941:"fafcfc6c539d0c3b8427",948:"6ab77c3a7fb225a687e1",973:"e87d0004f5415e9cc6d1"})[e]+".js"},d.miniCssF=function(e){return"static/css/"+e+".css"},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="administration:",d.l=function(n,i,r,o){if(e[n]){e[n].push(i);return}if(void 0!==r)for(var s,a,l=document.getElementsByTagName("script"),p=0;p<l.length;p++){var c=l[p];if(c.getAttribute("src")==n||c.getAttribute("data-webpack")==t+r){s=c;break}}s||(a=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,d.nc&&s.setAttribute("nonce",d.nc),s.setAttribute("data-webpack",t+r),s.src=n),e[n]=[i];var h=function(t,i){s.onerror=s.onload=null,clearTimeout(u);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach(function(e){return e(i)}),t)return t(i)},u=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),a&&document.head.appendChild(s)},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="bundles/swagextensionstore/",n=function(e,t,n,i){var r=document.createElement("link");return r.rel="stylesheet",r.type="text/css",r.onerror=r.onload=function(o){if(r.onerror=r.onload=null,"load"===o.type)n();else{var s=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.href||t,l=Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=a,r.parentNode.removeChild(r),i(l)}},r.href=t,document.head.appendChild(r),r},i=function(e,t){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var r=n[i],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}for(var s=document.getElementsByTagName("style"),i=0;i<s.length;i++){var r=s[i],o=r.getAttribute("data-href");if(o===e||o===t)return r}},r={984:0},d.f.miniCss=function(e,t){r[e]?t.push(r[e]):0!==r[e]&&({31:1,85:1,90:1,195:1,202:1,257:1,340:1,368:1,554:1,623:1,814:1,941:1,948:1,973:1})[e]&&t.push(r[e]=new Promise(function(t,r){var o=d.miniCssF(e),s=d.p+o;if(i(o,s))return t();n(e,s,t,r)}).then(function(){r[e]=0},function(t){throw delete r[e],t}))},o={984:0},d.f.j=function(e,t){var n=d.o(o,e)?o[e]:void 0;if(0!==n){if(n)t.push(n[2]);else{var i=new Promise(function(t,i){n=o[e]=[t,i]});t.push(n[2]=i);var r=d.p+d.u(e),s=Error();d.l(r,function(t){if(d.o(o,e)&&(0!==(n=o[e])&&(o[e]=void 0),n)){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",s.name="ChunkLoadError",s.type=i,s.request=r,n[1](s)}},"chunk-"+e,e)}}},s=function(e,t){var n,i,r=t[0],s=t[1],a=t[2],l=0;if(r.some(function(e){return 0!==o[e]})){for(n in s)d.o(s,n)&&(d.m[n]=s[n]);a&&a(d)}for(e&&e(t);l<r.length;l++)i=r[l],d.o(o,i)&&o[i]&&o[i][0](),o[i]=0},(a=window["webpackJsonpPluginswag-extension-store"]=window["webpackJsonpPluginswag-extension-store"]||[]).forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a)),window?.__sw__?.assetPath&&(d.p=window.__sw__.assetPath+"/bundles/swagextensionstore/"),function(){"use strict";let{Criteria:e}=Shopware.Data;class t extends Shopware.Classes.ApiService{constructor(e,t,n="extension-store"){super(e,t,n),this.name="extensionStoreDataService"}async listingFilters(e){return(await this.httpClient.get(`_action/${this.apiEndpoint}/store-filters`,{headers:this.basicHeaders(e),version:3})).data}async getExtensionList(e,t){let n=this._getCriteriaFromSearch(e),{data:i}=await this.httpClient.post(`_action/${this.apiEndpoint}/list`,n.parse(),{headers:this.basicHeaders(t),version:3}),r=[];return r.total=i.meta.total,r.push(...i.data),r}async getExtensionByName(e,t){return this.getExtensionList({term:e},t).then(t=>t.find(t=>t.name===e)??null)}async getDetail(e,t){let{data:n}=await this.httpClient.get(`_action/${this.apiEndpoint}/detail/${e}`,{headers:this.basicHeaders(t),version:3});return n}async getReviews(t,n,i){let r=new e(t,n),{data:o}=await this.httpClient.get(`_action/${this.apiEndpoint}/${i}/reviews`,{headers:this.basicHeaders(),params:r.parse(),version:3});return o}basicHeaders(e=null){let t={"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${this.loginService.getToken()}`};return e&&e.languageId&&(t["sw-language-id"]=e.languageId),t}_getCriteriaFromSearch({page:t=1,limit:n=25,rating:i=null,category:r=null,term:o=null,sorting:s=null,filter:a={}}={}){let l=new e(t,n);o&&l.setTerm(o);let p=[];return null!==i&&p.push(e.equals("rating",i)),Object.entries(a).forEach(([t,n])=>{p.push(e.equals(t,n))}),null!==r&&p.push(e.equals("category",r)),p.length>0&&l.addFilter(e.multi("AND",p)),s&&(l.resetSorting(),l.addSorting(s)),l}}class n extends Shopware.Classes.ApiService{constructor(e,t,n="extension-store"){super(e,t,n),this.name="extensionStoreLicensesService"}newCart(e,t){return this.httpClient.post(`/_action/${this.apiEndpoint}/cart/new`,{extensionId:e,variantId:t},{headers:this.basicHeaders(),version:3})}orderCart(e){return this.httpClient.post(`/_action/${this.apiEndpoint}/cart/order`,e,{headers:this.basicHeaders(),version:3})}getPaymentMeans(){return this.httpClient.get(`/_action/${this.apiEndpoint}/cart/payment-means`,{headers:this.basicHeaders(),version:3})}basicHeaders(e=null){let t={"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${this.loginService.getToken()}`};return e&&e.languageId&&(t["sw-language-id"]=e.languageId),t}}Shopware.Component.register("sw-extension-store-index",()=>d.e(202).then(d.bind(d,202))),Shopware.Component.register("sw-extension-store-listing",()=>d.e(31).then(d.bind(d,31))),Shopware.Component.register("sw-extension-store-detail",()=>d.e(257).then(d.bind(d,257))),Shopware.Component.register("sw-extension-store-slider",()=>d.e(941).then(d.bind(d,941))),Shopware.Component.register("sw-extension-store-listing-filter",()=>d.e(85).then(d.bind(d,85))),Shopware.Component.register("sw-extension-buy-modal",()=>d.e(340).then(d.bind(d,340))),Shopware.Component.register("sw-extension-listing-card",()=>d.e(90).then(d.bind(d,90))),Shopware.Component.register("sw-extension-store-update-warning",()=>d.e(623).then(d.bind(d,623))),Shopware.Component.register("sw-extension-label",()=>d.e(814).then(d.bind(d,814))),Shopware.Component.register("sw-extension-type-label",()=>d.e(53).then(d.bind(d,53))),Shopware.Component.register("sw-extension-store-label-display",()=>d.e(368).then(d.bind(d,368))),Shopware.Component.register("sw-extension-store-error-card",()=>d.e(973).then(d.bind(d,973))),Shopware.Component.register("sw-extension-store-statistics-promotion",()=>d.e(195).then(d.bind(d,195))),Shopware.Application.addServiceProvider("extensionStoreDataService",()=>new t(Shopware.Application.getContainer("init").httpClient,Shopware.Service("loginService"))),Shopware.Application.addServiceProvider("extensionStoreLicensesService",()=>new n(Shopware.Application.getContainer("init").httpClient,Shopware.Service("loginService"))),Shopware.Module.register("sw-extension-store",{title:"sw-extension-store.general.title",name:"sw-extension-store.general.title",routePrefixName:"sw.extension",routePrefixPath:"sw/extension",routes:{store:{path:"store",redirect:{name:"sw.extension.store.listing"},meta:{privilege:"system.extension_store"},component:"sw-extension-store-index",children:{listing:{path:"listing",component:"sw-extension-store-listing",redirect:{name:"sw.extension.store.listing.app"},meta:{privilege:"system.extension_store"},children:{app:{path:"app",component:"sw-extension-store-listing",propsData:{isTheme:!1},meta:{privilege:"system.extension_store"}},theme:{path:"theme",component:"sw-extension-store-listing",propsData:{isTheme:!0},meta:{privilege:"system.extension_store"}}}}}},"store.detail":{component:"sw-extension-store-detail",path:"store/detail/:id",meta:{parentPath:"sw.extension.store",privilege:"system.extension_store"},props:{default:e=>({id:e.params.id})}}},routeMiddleware(e,t){"sw.extension.store.landing-page"===t.name&&(t.redirect={name:"sw.extension.store.listing"}),e(t)}}),d(497)}()})();