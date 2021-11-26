(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"039a":function(t,e,a){"use strict";a("7174")},"0ea0":function(t,e,a){},1223:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container mt-5"},[a("b-card",{attrs:{title:"Bienvenido a la configuracion","sub-title":t.infoToken.username}},[a("hr"),a("b-card-text",[t._v(" Esta seccion es dedicada para la configuracion de tu perfil y perfiles de usuario, intenta trabajar de manera adecuada con la informacion. ")]),a("div",{staticClass:"container"},[a("h4",[t._v("Tu informacion")]),a("div",{staticClass:"d-flex"},[a("h5",[t._v(" Usuario: "),a("span",[t._v(" "+t._s(t.userInfo.username)+" ")])])]),a("div",{staticClass:"d-flex"},[a("h5",[t._v(" Email: "),a("span",[t._v(" "+t._s(t.userInfo.email)+" ")])])]),a("div",{staticClass:"d-flex"},[a("h5",[t._v(" Cuenta creada el: "),a("span",[t._v(" "+t._s(t.moment(t.userInfo.updatedAt).format("MMMM d, YYYY"))+" ")])])])])],1)],1)])},o=[],s=a("bc3a"),i=a.n(s),r={data:function(){return{infoToken:"",userInfo:{}}},mounted:function(){this.infoToken=JSON.parse(localStorage.getItem("userInfo"))||[],this.getUserById()},methods:{getUserById:function(){var t=this;console.log(this.infoToken,"data"),i.a.get("http://localhost:4000/api/v1/user/".concat(this.infoToken.id)).then((function(e){t.userInfo=e.data,console.log(t.userInfo)}))}}},c=r,l=a("2877"),d=Object(l["a"])(c,n,o,!1,null,null,null);e["default"]=d.exports},"159b":function(t,e,a){var n=a("da84"),o=a("fdbc"),s=a("17c2"),i=a("9112");for(var r in o){var c=n[r],l=c&&c.prototype;if(l&&l.forEach!==s)try{i(l,"forEach",s)}catch(d){l.forEach=s}}},"17c2":function(t,e,a){"use strict";var n=a("b727").forEach,o=a("a640"),s=o("forEach");t.exports=s?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,a){var n=a("d039"),o=a("b622"),s=a("2d00"),i=o("species");t.exports=function(t){return s>=51||!n((function(){var e=[],a=e.constructor={};return a[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1feb":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-background"},[n("div",{staticClass:"container",attrs:{id:"app"}},[n("div",{staticClass:"abs-center"},[n("b-card",{staticStyle:{"max-width":"20rem"},attrs:{title:"Registrarse"}},[n("img",{attrs:{src:a("b640"),width:"80"}}),n("b-card-body",[n("form",[n("b-form-input",{staticClass:"mb-2 my-3",attrs:{type:"email",placeholder:"Email..."},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("b-form-input",{staticClass:"mb-2 my-3",attrs:{type:"text",placeholder:"Usuario..."},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),n("b-form-input",{staticClass:"my-3",attrs:{type:"password",placeholder:"Contraseña..."},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("div",[n("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),n("b-button",{staticClass:"my-2 btn",attrs:{variant:"outline-warning text-black",disabled:(t.username&&t.password&&t.email,!1)},on:{click:t.enviarDatos}},[t._v(" Registrarse ")])],1),n("b-row",[n("b-col",{staticClass:"my-2"},[n("router-link",{attrs:{to:"/login"}},[n("a",[t._v("Ir al inicio de sesión")])])],1)],1)],1)],1)],1)])])},o=[],s=(a("159b"),a("b0c0"),a("bc3a")),i=a.n(s),r={name:"registro",data:function(){return{email:"",username:"",password:"",options:[],selected:null}},mounted:function(){this.getRoles()},methods:{getRoles:function(){var t=this;i.a.get("http://localhost:4000/api/v1/roles").then((function(e){console.log(e),e.data.forEach((function(e){console.log(e),t.options.push(e.name)}))}))},enviarDatos:function(){var t=this;if(!this.username.length||!this.password.length||!this.email.length)return t.$vToastify.info("Llena todos los datos para continuar");i.a.post("http://localhost:4000/api/v1/user/register",{username:t.username,email:t.email,password:t.password,roles:t.selected}).then((function(e){console.log(e),200==e.status?(t.$vToastify.success("Registrado con exito, prueba iniciando sesión"),t.$router.push("/login")):t.$vToastify.error("valida tus datos")})).catch((function(e){t.$vToastify.error("Ha ocurrido un error")}))}}},c=r,l=(a("f30e"),a("2877")),d=Object(l["a"])(c,n,o,!1,null,null,null);e["default"]=d.exports},"281b":function(t,e,a){"use strict";a.r(e);var n,o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-background"},[t.cotizations.length>=1?a("div",{staticClass:"container",attrs:{id:"app"}},[a("div",{staticClass:"h2 pt-5 mb-0"},[a("h2",{staticClass:"text-white"},[a("b-icon",{attrs:{icon:"list-task"}}),t._v(" Contabilidad")],1)]),a("section",[t._m(0),a("div",{staticClass:"tbl-content"},[a("table",{attrs:{cellpadding:"0",cellspacing:"0",border:"0"}},[a("tbody",t._l(t.cotizations,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.state&&"Pagado"))]),a("td",[t._v(t._s(e.state&&"Procesando"))]),a("td",[a("button",{staticClass:"btn btn-primary",on:{click:function(a){return t.handleApprove(e._id)}}},[t._v("Aprobar")]),a("a",{staticClass:"btn btn-danger",attrs:{href:"#"}},[t._v("Rechazar")])])])})),0)])])])]):a("div",{staticClass:"mt-5"},[a("h3",{staticClass:"text-white"},[t._v("No hay nada que mostrar...")])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tbl-header"},[a("table",{attrs:{cellpadding:"0",cellspacing:"0",border:"0"}},[a("thead",[a("tr",[a("th",[t._v("Nombre")]),a("th",[t._v("Estado")]),a("th",[t._v("Orden")]),a("th",[t._v("Acciones")])])])])])}],i=a("bc3a"),r=a.n(i),c=new Uint8Array(16);function l(){if(!n&&(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(c)}var d=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function u(t){return"string"===typeof t&&d.test(t)}for(var f=u,p=[],h=0;h<256;++h)p.push((h+256).toString(16).substr(1));function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=(p[t[e+0]]+p[t[e+1]]+p[t[e+2]]+p[t[e+3]]+"-"+p[t[e+4]]+p[t[e+5]]+"-"+p[t[e+6]]+p[t[e+7]]+"-"+p[t[e+8]]+p[t[e+9]]+"-"+p[t[e+10]]+p[t[e+11]]+p[t[e+12]]+p[t[e+13]]+p[t[e+14]]+p[t[e+15]]).toLowerCase();if(!f(a))throw TypeError("Stringified UUID is invalid");return a}var m=v;function b(t,e,a){t=t||{};var n=t.random||(t.rng||l)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){a=a||0;for(var o=0;o<16;++o)e[a+o]=n[o];return e}return m(n)}var g=b,_={name:"Contabilidad",data:function(){return{cotizations:[]}},mounted:function(){this.getCotizationsPay()},methods:{getCotizationsPay:function(){var t=this;r.a.get("http://localhost:4000/api/v1/cotization/pay").then((function(e){t.cotizations=e.data,console.log(e.data.length)}))},handleApprove:function(t){var e=this;r.a.post("http://localhost:4000/api/v1/create/order",{name:g(),id:t}).then((function(t){return e.$vToastify.success("Orden creada correctamente")}))}}},C=_,y=(a("a985"),a("2877")),w=Object(y["a"])(C,o,s,!1,null,null,null);e["default"]=w.exports},"29b4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container mt-5"},[a("b-card",{attrs:{title:"Bienvenido a la configuracion","sub-title":t.infoToken.username}},[a("hr"),a("b-card-text",[t._v(" Esta seccion es dedicada para la configuracion de tu perfil y perfiles de usuario, intenta trabajar de manera adecuada con la informacion. ")]),a("div",{staticClass:"container"},[a("h4",[t._v("Tu informacion")]),a("div",{staticClass:"d-flex"},[a("h5",[t._v(" Usuario: "),a("span",[t._v(" "+t._s(t.userInfo.username)+" ")])])]),a("div",{staticClass:"d-flex"},[a("h5",[t._v(" Email: "),a("span",[t._v(" "+t._s(t.userInfo.email)+" ")])])]),a("div",{staticClass:"d-flex"},[a("h5",[t._v(" Cuenta creada el: "),a("span",[t._v(" "+t._s(t.moment(t.userInfo.updatedAt).format("MMMM d, YYYY"))+" ")])])])]),a("hr")],1)],1)])},o=[],s=(a("159b"),a("b0c0"),a("bc3a")),i=a.n(s),r={data:function(){return{name:"",nameState:null,submittedNames:[],options:[],selected:null,infoToken:"",userInfo:{}}},mounted:function(){this.getUsers(),this.infoToken=JSON.parse(localStorage.getItem("userInfo"))||[],this.getUserById()},methods:{getUsers:function(){var t=this;i.a.get("http://localhost:4000/api/v1/user").then((function(e){e.data.forEach((function(e){t.options.push({value:e.username,text:e.username})}))}))},getUserById:function(){var t=this;console.log(this.infoToken,"data"),i.a.get("http://localhost:4000/api/v1/user/".concat(this.infoToken.id)).then((function(e){t.userInfo=e.data,console.log(t.userInfo)}))},checkFormValidity:function(){var t=this.$refs.form.checkValidity();return this.nameState=t,t},resetModal:function(){this.name="",this.nameState=null,this.selected=null},handleOk:function(t){t.preventDefault(),this.handleSubmit()},handleSubmit:function(){var t=this;this.checkFormValidity()&&(this.submittedNames.push(this.name),i.a.post("http://localhost:4000/api/v1/user/update/rol",{username:this.selected,roles:this.name}).then((function(t){return console.log(t)})),this.$nextTick((function(){t.$bvModal.hide("modal-prevent-closing")})))}}},c=r,l=a("2877"),d=Object(l["a"])(c,n,o,!1,null,null,null);e["default"]=d.exports},"578a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-background"},[n("div",{staticClass:"container",attrs:{id:"app"}},[n("div",{staticClass:"abs-center"},[n("b-card",{staticStyle:{"max-width":"20rem"},attrs:{title:"Iniciar sesión"}},[n("img",{attrs:{src:a("b640"),width:"80"}}),n("b-card-body",[n("form",[n("b-form-input",{staticClass:"mb-2 my-3",attrs:{type:"text",placeholder:"Usuario..."},model:{value:t.usuario,callback:function(e){t.usuario=e},expression:"usuario"}}),n("b-form-input",{staticClass:"my-3",attrs:{type:"password",placeholder:"Contraseña..."},model:{value:t.clave,callback:function(e){t.clave=e},expression:"clave"}}),n("b-button",{staticClass:"my-2",attrs:{variant:"outline-warning",disabled:(t.usuario&&t.clave,!1)},on:{click:t.enviarDatos}},[t._v(" Iniciar sesión ")])],1)])],1)],1)])])},o=[],s=a("bc3a"),i=a.n(s);function r(t){this.message=t}r.prototype=new Error,r.prototype.name="InvalidCharacterError";var c="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(t){var e=String(t).replace(/=+$/,"");if(e.length%4==1)throw new r("'atob' failed: The string to be decoded is not correctly encoded.");for(var a,n,o=0,s=0,i="";n=e.charAt(s++);~n&&(a=o%4?64*a+n:n,o++%4)?i+=String.fromCharCode(255&a>>(-2*o&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return i};function l(t){var e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return function(t){return decodeURIComponent(c(t).replace(/(.)/g,(function(t,e){var a=e.charCodeAt(0).toString(16).toUpperCase();return a.length<2&&(a="0"+a),"%"+a})))}(e)}catch(t){return c(e)}}function d(t){this.message=t}function u(t,e){if("string"!=typeof t)throw new d("Invalid token specified");var a=!0===(e=e||{}).header?0:1;try{return JSON.parse(l(t.split(".")[a]))}catch(t){throw new d("Invalid token specified: "+t.message)}}d.prototype=new Error,d.prototype.name="InvalidTokenError";var f=u,p={name:"Login",data:function(){return{usuario:"",clave:""}},methods:{enviarDatos:function(){var t=this;if(console.log(t.usuario,t.clave),!this.usuario.length||!this.clave.length)return t.$vToastify.info("Llena todos los datos para continuar");i.a.post("http://localhost:4000/api/v1/user/login",{username:t.usuario,password:t.clave}).then((function(e){if(200==e.status){localStorage.setItem("token",e.data.token),t.$vToastify.success("Logueado con exito");var a=e.data.token,n=f(a);switch(localStorage.setItem("userInfo",JSON.stringify(n)),n.role){case"admin":t.$router.push("/crear-promociones");break;case"sale":t.$router.push("/crear-promociones");break;case"invent":t.$router.push("/servicios");break;case"cont":t.$router.push("/contabilidad");break;default:break}}else t.$vToastify.error("valida tus datos")})).catch((function(){t.$vToastify.error("Ha ocurrido un error")}))}}},h=p,v=(a("039a"),a("2877")),m=Object(v["a"])(h,n,o,!1,null,null,null);e["default"]=m.exports},6502:function(t,e,a){"use strict";a("eb05")},"65f0":function(t,e,a){var n=a("861d"),o=a("e8b5"),s=a("b622"),i=s("species");t.exports=function(t,e){var a;return o(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!o(a.prototype)?n(a)&&(a=a[i],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},"6e9e":function(t,e,a){},7174:function(t,e,a){},8418:function(t,e,a){"use strict";var n=a("c04e"),o=a("9bf2"),s=a("5c6c");t.exports=function(t,e,a){var i=n(e);i in t?o.f(t,i,s(0,a)):t[i]=a}},"99af":function(t,e,a){"use strict";var n=a("23e7"),o=a("d039"),s=a("e8b5"),i=a("861d"),r=a("7b0b"),c=a("50c4"),l=a("8418"),d=a("65f0"),u=a("1dde"),f=a("b622"),p=a("2d00"),h=f("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",b=p>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),g=u("concat"),_=function(t){if(!i(t))return!1;var e=t[h];return void 0!==e?!!e:s(t)},C=!b||!g;n({target:"Array",proto:!0,forced:C},{concat:function(t){var e,a,n,o,s,i=r(this),u=d(i,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(s=-1===e?i:arguments[e],_(s)){if(o=c(s.length),f+o>v)throw TypeError(m);for(a=0;a<o;a++,f++)a in s&&l(u,f,s[a])}else{if(f>=v)throw TypeError(m);l(u,f++,s)}return u.length=f,u}})},"9d72":function(t,e,a){},a640:function(t,e,a){"use strict";var n=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&n((function(){a.call(null,e||function(){throw 1},1)}))}},a92a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-background"},[a("div",{staticClass:"container",attrs:{id:"app"}},[a("div",{staticClass:"h2 d-flex justify-content-center pt-5 mb-5 text-white"},[a("h2",[a("b-icon",{attrs:{icon:"person-fill"}}),t._v(" Agregar nuevo Producto/Catálogo ")],1),a("div",[a("b-modal",{ref:"modal",attrs:{id:"modal-prevent-closing",title:"Agregar productos"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOk}},[a("b-card",{staticClass:"text-center",attrs:{title:"Ingrese datos del producto"}},[a("b-form-group",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit(e)}}},[a("b-form-input",{staticClass:"mt-3",attrs:{placeholder:"Ingrese el nombre..."},model:{value:t.product.name,callback:function(e){t.$set(t.product,"name","string"===typeof e?e.trim():e)},expression:"product.name"}})],1),a("b-form-group",[a("b-form-input",{attrs:{placeholder:"Ingrese el número de Marca..."},model:{value:t.product.brand,callback:function(e){t.$set(t.product,"brand","string"===typeof e?e.trim():e)},expression:"product.brand"}})],1),a("b-form-group",[a("b-form-input",{attrs:{placeholder:"Ingrese el Precio..."},model:{value:t.product.price,callback:function(e){t.$set(t.product,"price","string"===typeof e?e.trim():e)},expression:"product.price"}})],1),a("b-form-group",[a("b-form-input",{attrs:{placeholder:"Ingrese el precio de venta..."},model:{value:t.product.price_sell,callback:function(e){t.$set(t.product,"price_sell",t._n(e))},expression:"product.price_sell"}})],1),a("b-form-group",[a("b-form-input",{attrs:{placeholder:"Ingrese la cantidad..."},model:{value:t.product.stock,callback:function(e){t.$set(t.product,"stock",t._n(e))},expression:"product.stock"}})],1)],1)],1),a("b-modal",{ref:"modal",attrs:{id:"modal-prevent-closing2",title:"Agregar productos"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOkCatalog}},[a("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleCatalog(e)}}},[a("label",[t._v(" Elije un catalogo ")]),a("div",[a("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),a("label",[t._v(" Elije un producto ")]),a("div",[a("b-form-select",{attrs:{options:t.optionsTwo},model:{value:t.selectedTwo,callback:function(e){t.selectedTwo=e},expression:"selectedTwo"}})],1),a("div",{staticClass:"mt-3"},[t._v(" Catalogs: "),a("strong",[t._v(t._s(t.selected))])]),a("div",{staticClass:"mt-3"},[t._v(" Product: "),a("strong",[t._v(t._s(t.selectedTwo))])])])])],1)]),a("div",{staticClass:"d-flex justify-content-end"},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-prevent-closing",modifiers:{"modal-prevent-closing":!0}}],staticClass:"m-0 ml-3",attrs:{variant:"warning"}},[t._v("Agregar productos")]),t.products.length>0?a("div",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-prevent-closing2",modifiers:{"modal-prevent-closing2":!0}}],staticClass:"m-0 ml-3",attrs:{variant:"warning"}},[t._v("Agregar Catálogo")])],1):a("div")],1),a("div",[t._v(t._s(this.output))]),t.products.length>0?a("section",[a("h1",[t._v("SECCIÓN de productos")]),t._m(0),a("div",{staticClass:"tbl-content"},[a("table",{attrs:{cellpadding:"0",cellspacing:"0",border:"0"}},[a("tbody",t._l(t.products,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.brand))]),a("td",[t._v(t._s(e.price))]),a("td",[t._v(t._s(e.price_sell))]),a("td",[t._v(t._s(e.stock))]),t._m(1,!0)])})),0)])])]):a("div",[a("h2",{staticClass:"mt-5 text-white"},[t._v("No hay productos...")])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tbl-header"},[a("table",{attrs:{cellpadding:"0",cellspacing:"0",border:"0"}},[a("thead",[a("tr",[a("th",[t._v("Nombre")]),a("th",[t._v("Marca")]),a("th",[t._v("Precio")]),a("th",[t._v("Precio de Venta")]),a("th",[t._v("Cantidad")]),a("th",[t._v("Acciones")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Editar")]),a("a",{staticClass:"btn btn-danger",attrs:{href:"#"}},[t._v("x")])])}],s=(a("159b"),a("b0c0"),a("bc3a")),i=a.n(s),r=a("91c9"),c={name:"agregar-cliente",components:{mdbTbl:r["mdbTbl"],mdbTblHead:r["mdbTblHead"],mdbTblBody:r["mdbTblBody"]},data:function(){return{output:null,products:[],catalogs:[],options:[],optionsTwo:[],selected:null,selectedTwo:null,name:"",nameState:null,submittedNames:[],product:{name:"",brand:"",price:"",price_sell:"",stock:""}}},created:function(){this.getAllProducts(),this.getAllCatalogs(),console.log(this.products.length)},methods:{createdProduct:function(){},getAllProducts:function(){var t=this;i.a.get("http://localhost:4000/api/v1/products").then((function(e){console.log(e),t.products=e.data,e.data.forEach((function(e){console.log(e),t.optionsTwo.push({value:e._id,text:e.name})}))}))},getAllCatalogs:function(){var t=this;i.a.get("http://localhost:4000/api/v1/catalog").then((function(e){e.data.forEach((function(e){t.options.push({value:e.name,text:e.name})}))}))},resetModal:function(){this.name="",this.nameState=null,this.selected=null,this.selectedTwo=null},handleOk:function(t){t.preventDefault(),this.handleSubmit()},handleSubmit:function(){var t=this;this.submittedNames.push(this.name),this.product!=={}&&i.a.post("http://localhost:4000/api/v1/products",this.product).then((function(e){t.getAllProducts(),t.product={name:"",brand:"",price:"",price_sell:"",stock:""}})),null===this.selected&&null===this.selectedTwo||i.a.post("http://localhost:4000/api/v1/add/product",{name:this.selected,products:this.selectedTwo}).then((function(t){return console.log(t)})),this.$nextTick((function(){t.$bvModal.hide("modal-prevent-closing")}))},handleOkCatalog:function(t){t.preventDefault(),this.handleCatalog()},handleCatalog:function(){var t=this;this.submittedNames.push(this.name),null===this.selected&&null===this.selectedTwo||i.a.post("http://localhost:4000/api/v1/add/product",{name:this.selected,products:this.selectedTwo}).then((function(t){return console.log(t)})),this.$nextTick((function(){t.$bvModal.hide("modal-prevent-closing2")}))}}},l=c,d=(a("6502"),a("2877")),u=Object(d["a"])(l,n,o,!1,null,null,null);e["default"]=u.exports},a985:function(t,e,a){"use strict";a("6e9e")},b727:function(t,e,a){var n=a("0366"),o=a("44ad"),s=a("7b0b"),i=a("50c4"),r=a("65f0"),c=[].push,l=function(t){var e=1==t,a=2==t,l=3==t,d=4==t,u=6==t,f=7==t,p=5==t||u;return function(h,v,m,b){for(var g,_,C=s(h),y=o(C),w=n(v,m,3),k=i(y.length),x=0,T=b||r,I=e?T(h,k):a||f?T(h,0):void 0;k>x;x++)if((p||x in y)&&(g=y[x],_=w(g,x,C),t))if(e)I[x]=_;else if(_)switch(t){case 3:return!0;case 5:return g;case 6:return x;case 2:c.call(I,g)}else switch(t){case 4:return!1;case 7:c.call(I,g)}return u?-1:l||d?d:I}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},d305:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-background"},[t.cotizations.length>=0?a("div",{staticClass:"container",attrs:{id:"app"}},[a("div",{staticClass:"h2 pt-5 mb-3"},[a("h2",{staticClass:"text-white"},[a("b-icon",{attrs:{icon:"person-badge"}}),t._v("Solicitud de cotizaciones ")],1)]),a("section",[t._m(0),a("div",{staticClass:"tbl-content"},[a("table",{attrs:{cellpadding:"0",cellspacing:"0",border:"0"}},[a("tbody",t._l(t.cotizations,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.offer?"si":"no"))]),a("td",[t._v(t._s(e.state?"Pagado":"No Pagado"))]),a("td",[a("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-prevent-closing",modifiers:{"modal-prevent-closing":!0}}],staticClass:"btn btn-primary",on:{click:function(a){return t.verifyId(e._id)}}},[t._v(" Atender ")]),a("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"btn btn-warning",on:{click:function(a){return t.getAllData(e._id)}}},[t._v(" Verificar ")])])])})),0)])])])]):a("div",{staticClass:"mt-5"},[a("h3",{staticClass:"text-white"},[t._v(" No hay cotizaciones que mostrar... ")])]),a("b-modal",{ref:"modal",attrs:{id:"modal-prevent-closing",title:"Buscar un cliente"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOk}},[a("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit(e)}}},[a("label",[t._v(" Elije un usuario ")]),a("div",[a("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),a("div",{staticClass:"mt-3"},[t._v(" Selected: "),a("strong",[t._v(t._s(t.selected))])])])]),a("div",[a("b-modal",{attrs:{id:"modal-1",title:"Cotizaciones de clientes"}},t._l(t.data,(function(e,n){return a("div",{key:e.id},[a("div",{staticClass:"container w-full"},[a("h4",{staticClass:"text-center"},[t._v(" Cotizacion "+t._s(n+1)+" ")]),a("hr"),a("p",{staticClass:"font-weight-bold"},[t._v("Nombre del cliente: "),a("span",{staticClass:"font-weight-normal"},[t._v(" "+t._s(e.name)+" "+t._s(e.lastname)+" ")])]),a("p",{staticClass:"font-weight-bold"},[t._v("DNI: "),a("span",{staticClass:"font-weight-normal"},[t._v(" "+t._s(e.dni)+" ")])]),t._l(t.products,(function(e,n){return a("div",{key:e.id},[a("hr"),a("p",{staticClass:"font-weight-bold"},[t._v("Producto: "+t._s(n+1)+" "),a("span",{staticClass:"font-weight-normal"},[t._v(" "+t._s(e.name)+"$ ")])]),a("p",{staticClass:"font-weight-bold"},[t._v("Precio a pagar: "+t._s(n+1)+" "),a("span",{staticClass:"font-weight-normal"},[t._v(" "+t._s(e.price_sell)+"$ ")])]),a("hr")])})),a("h4",[t._v("Monto Total: "+t._s(t.totalPriceSell)+"$")]),a("hr")],2)])})),0)],1)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tbl-header"},[a("table",{attrs:{cellpadding:"0",cellspacing:"0",border:"0"}},[a("thead",[a("tr",[a("th",[t._v("Nombre")]),a("th",[t._v("Oferta")]),a("th",[t._v("Promoción")]),a("th",[t._v("Acciones")])])])])])}],s=(a("159b"),a("99af"),a("b0c0"),a("bc3a")),i=a.n(s),r={name:"Cotizaciones",data:function(){return{cotizations:[],clients:[],products:[],data:[],id:"",submittedNames:[],options:[],selected:null}},computed:{totalPriceSell:function(){var t=0;return this.products.forEach((function(e){t+=parseInt(e.price_sell)})),t}},mounted:function(){this.getAllCatalogs(),this.getAllClients()},methods:{getAllCatalogs:function(){var t=this;i.a.get("http://localhost:4000/api/v1/cotization").then((function(e){t.cotizations=e.data}))},getAllClients:function(){var t=this;i.a.get("http://localhost:4000/api/v1/client").then((function(e){t.clients=e.data,e.data.forEach((function(e){t.options.push({value:e._id,text:"".concat(e.name," ").concat(e.lastname," ")})}))}))},getAllData:function(t){var e=this;i.a.get("http://localhost:4000/api/v1/cotization/client/".concat(t)).then((function(t){e.data=t.data.clients,t.data.catalog.forEach((function(t){e.products=t.products,console.log(e.products)}))}))},verifyId:function(t){this.id=t},checkFormValidity:function(){var t=this.$refs.form.checkValidity();return this.nameState=t,t},resetModal:function(){this.name="",this.nameState=null,this.selected=null},handleOk:function(t){t.preventDefault(),this.handleSubmit()},handleSubmit:function(){var t=this;this.checkFormValidity()&&(this.submittedNames.push(this.name),i.a.post("http://localhost:4000/api/v1/add/cotization",{idClient:this.selected,idCotization:this.id}).then((function(e){i.a.post("http://localhost:4000/api/v1/add/client",{clientId:t.selected,cotizationId:t.id}).then((function(t){return console.log(t,"client")}))})),this.$nextTick((function(){t.$bvModal.hide("modal-prevent-closing")})))}}},c=r,l=(a("ed15"),a("2877")),d=Object(l["a"])(c,n,o,!1,null,null,null);e["default"]=d.exports},e8b5:function(t,e,a){var n=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},eb05:function(t,e,a){},ed15:function(t,e,a){"use strict";a("9d72")},ee16:function(t,e,a){},f30e:function(t,e,a){"use strict";a("0ea0")},f567:function(t,e,a){"use strict";a("ee16")},fec8:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-background"},[t.orders.length>=1?a("div",{staticClass:"container",attrs:{id:"app"}},[a("div",{staticClass:"h2 pt-5 mb-0"},[a("h2",{staticClass:"text-white"},[a("b-icon",{attrs:{icon:"wrench"}}),t._v(" Inventario")],1)]),a("section",[t._m(0),a("div",{staticClass:"tbl-content"},[a("table",{attrs:{cellpadding:"0",cellspacing:"0",border:"0"}},[a("tbody",t._l(t.orders,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.state&&"Procesado"))]),a("td",[t._v(t._s(e.cotizations[0]))])])})),0)])])])]):a("div",{staticClass:"mt-5"},[a("h3",{staticClass:"text-white"},[t._v(" No hay órdenes que mostrar ")])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tbl-header"},[a("table",{attrs:{cellpadding:"0",cellspacing:"0",border:"0"}},[a("thead",[a("tr",[a("th",[t._v("Nombre")]),a("th",[t._v("Estado")]),a("th",[t._v("Cotización")])])])])])}],s=a("bc3a"),i=a.n(s),r={name:"agregar-servicio",data:function(){return{orders:[]}},mounted:function(){this.getAllOrders()},methods:{getAllOrders:function(){var t=this;i.a.get("http://localhost:4000/api/v1/orders").then((function(e){console.log(e.data),t.orders=e.data}))}}},c=r,l=(a("f567"),a("2877")),d=Object(l["a"])(c,n,o,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=about.aeafe02c.js.map