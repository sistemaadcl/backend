(function(e){function t(t){for(var o,r,u=t[0],l=t[1],c=t[2],s=0,f=[];s<u.length;s++)r=u[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function u(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"915ed7ec"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"43d861cd"}[e]+".css",a=l.p+o,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===o||s===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],s=c.getAttribute("data-href");if(s===o||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],d.parentNode.removeChild(d),n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e);var f=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("b0c0"),n("becf"),n("cabf"),n("3c76");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},["InicioSesion"!==e.$route.name&&"Registro"!==e.$route.name?n("Navbar"):e._e(),n("router-view")],1)},a=[],i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("b-navbar",{staticClass:"px-5",attrs:{toggleable:"lg",type:"light",variant:"light"}},[o("b-navbar-brand",{attrs:{href:"#"}},[o("img",{staticClass:"mb-1",attrs:{src:n("b640"),width:"25"}}),e._v(" Sistema ADCL")]),o("b-navbar-toggle",{attrs:{target:"nav-collapse"}},[o("b-icon",{attrs:{icon:"three-dots",variant:"info"}})],1),o("b-collapse",{staticClass:"d-flex justify-content-end",attrs:{id:"nav-collapse","is-nav":""}},["Principal"!==e.$route.name?o("b-navbar-nav",[o("b-nav-item",[e._v(" "+e._s(e.infoToken.username)+" ")]),"cont"==e.infoToken.role||"admin"==e.infoToken.role?o("div",{staticClass:"d-flex"},[o("b-nav-item",{attrs:{to:"/contabilidad"}},[o("b-icon",{attrs:{icon:"list-task"}}),e._v(" Contabilidad ")],1)],1):e._e(),"invent"==e.infoToken.role||"admin"==e.infoToken.role?o("div",{staticClass:"d-flex"},[o("b-nav-item",{attrs:{to:"/servicios"}},[o("b-icon",{attrs:{icon:"envelope"}}),e._v(" Inventario ")],1)],1):e._e(),"sale"==e.infoToken.role||"admin"==e.infoToken.role?o("div",{staticClass:"d-flex"},[o("b-nav-item",{attrs:{to:"/cotizaciones",exact:""}},[o("b-icon",{attrs:{icon:"cloud-upload"}}),e._v(" Ventas Cotizaciones ")],1),o("b-nav-item",{attrs:{to:"/crear-promociones",exact:""}},[o("b-icon",{attrs:{icon:"tag-fill"}}),e._v(" Ventas Catalogo")],1)],1):e._e(),o("b-nav-item",{on:{click:e.logout}},[e._v("Salir")])],1):e._e(),"Principal"===e.$route.name?o("b-navbar-nav",{staticClass:"ml-auto fixed"},[o("b-nav-item",{attrs:{to:"/"}},[e._v("Registrarme")]),o("b-nav-item",{attrs:{to:"/login"}},[e._v("Iniciar")])],1):e._e()],1)],1)],1)},u=[],l={name:"Navbar",data:function(){return{infoToken:""}},methods:{logout:function(){var e=this;localStorage.removeItem("token"),localStorage.removeItem("userInfo"),e.$router.push("/login")}},created:function(){this.infoToken=JSON.parse(localStorage.getItem("userInfo"))||[]}},c=l,s=n("2877"),f=Object(s["a"])(c,i,u,!1,null,null,null),d=f.exports,p={name:"app",components:{Navbar:d}},b=p,m=(n("034f"),Object(s["a"])(b,r,a,!1,null,null,null)),v=m.exports,g=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),h=function(){var e=JSON.parse(JSON.stringify(localStorage.getItem("token")))||null;return console.log(e),null!=e},y=function(){var e=JSON.parse(localStorage.getItem("userInfo"))||null;return console.log(e),null!=e&&e};o["default"].use(g["a"]);var _=[{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"578a"))}},{path:"/",name:"Registro",component:function(){return n.e("about").then(n.bind(null,"1feb"))}},{path:"/crear-promociones",name:"Productos",meta:{requireAuth:!0},beforeEnter:function(e,t,n){"admin"===y().role||"sale"===y().role?n():n("/login")},component:function(){return n.e("about").then(n.bind(null,"a92a"))}},{path:"/cotizaciones",name:"Cotizaciones",meta:{requireAuth:!0},beforeEnter:function(e,t,n){"admin"===y().role||"sale"===y().role?n():n("/login")},component:function(){return n.e("about").then(n.bind(null,"d305"))}},{path:"/contabilidad",name:"Contabilidad",meta:{requireAuth:!0},beforeEnter:function(e,t,n){"admin"===y().role||"cont"===y().role?n():n("/login")},component:function(){return n.e("about").then(n.bind(null,"281b"))}},{path:"/servicios",name:"servicios",meta:{requireAuth:!0},beforeEnter:function(e,t,n){"admin"===y().role||"invent"===y().role?n():n("/login")},component:function(){return n.e("about").then(n.bind(null,"fec8"))}}],k=new g["a"]({mode:"history",base:"/",routes:_}),C=k,S=n("5f5b"),w=n("b1e0"),x=n("bc3a"),O=n.n(x),T=(n("f9e3"),n("2dd8"),n("6838")),E=n.n(T);o["default"].use(S["a"]),o["default"].use(w["a"]),o["default"].use(E.a),O.a.defaults.withCredentials=!0,o["default"].config.productionTip=!1,C.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requireAuth}))?"Login"===e.name||h()?n():n({name:"Login"}):n()})),new o["default"]({router:C,render:function(e){return e(v)}}).$mount("#app")},"85ec":function(e,t,n){},b640:function(e,t,n){e.exports=n.p+"img/logo.dc91a36d.jpg"}});
//# sourceMappingURL=app.b300bc9d.js.map