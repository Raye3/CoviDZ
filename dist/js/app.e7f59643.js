(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],d=0,v=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("8a23"),r=a.n(n);r.a},"1a82":function(t,e,a){"use strict";var n=a("3faa"),r=a.n(n);r.a},"3faa":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("router-link",{attrs:{to:"/"}},[a("h1",{staticClass:"white--text"},[t._v("CoviDZ")])])],1),a("v-spacer"),a("div",{staticClass:"d-none d-md-flex"},[a("router-link",{attrs:{to:"/algeria"}},[a("v-btn",{attrs:{text:""}},[a("span",{staticClass:"mr-2"},[t._v("Algeria Stats")])])],1),a("router-link",{attrs:{to:"/world"}},[a("v-btn",{attrs:{text:""}},[a("span",{staticClass:"mr-2"},[t._v("World Stats")])])],1),a("router-link",{attrs:{to:"/instructions"}},[a("v-btn",{attrs:{text:""}},[a("span",{staticClass:"mr-2"},[t._v("Instructions")])])],1),a("v-btn",{attrs:{color:"black",href:"https://www.facebook.com/abdelhak0"}},[a("span",{staticClass:"mr-2"},[t._v("Creator")])])],1),a("div",[a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({staticClass:"d-sm-flex d-md-none",attrs:{text:"",color:"white",dark:""}},n),[a("v-icon",[t._v("mdi-menu")])],1)]}}])},[a("v-list",[t._l(t.menus,(function(e,n){return a("v-list-item",{key:n},[a("router-link",{attrs:{to:e.to}},[a("v-list-item-title",[t._v(t._s(e.name))])],1)],1)})),a("v-list-item",[a("v-btn",{attrs:{href:"https://www.facebook.com/abdelhak0",color:"black white--text"}},[t._v("Creator")])],1)],2)],1)],1)],1),a("v-content",[a("router-view")],1)],1)},s=[],i={name:"App",components:{},data:function(){return{menus:[{name:"Instructions",to:"/Instructions"},{name:"Algeria",to:"/algeria"},{name:"World",to:"/world"}]}},mounted:function(){}},o=i,l=(a("034f"),a("2877")),c=a("6544"),u=a.n(c),d=a("7496"),v=a("40dc"),f=a("8336"),p=a("a75b"),h=a("132d"),m=a("8860"),g=a("da13"),x=a("5d23"),y=a("e449"),b=a("2fa4"),C=Object(l["a"])(o,r,s,!1,null,null,null),_=C.exports;u()(C,{VApp:d["a"],VAppBar:v["a"],VBtn:f["a"],VContent:p["a"],VIcon:h["a"],VList:m["a"],VListItem:g["a"],VListItemTitle:x["b"],VMenu:y["a"],VSpacer:b["a"]});var w=a("f309");n["a"].use(w["a"]);var V=new w["a"]({}),k=a("bc3a"),j=a.n(k),S=a("8c4f"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{attrs:{"grid-list-xs":""}},[a("algeria")],1)],1)},P=[],T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xs":""}},[a("div",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-alert",{staticClass:"text-center",attrs:{text:"",border:"bottom",tile:"",color:"primary"}},[a("h1",[t._v("Algeria Covid-19 Statistics")])])],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"3",xs:"12",sm:"6"}},[a("v-card",{staticClass:"d-flex justify-center align-center",attrs:{tile:"",color:"orange",height:"100px"}},[a("h3",{staticClass:"white--text"},[t._v("Infected "+t._s(t.infected))])])],1),a("v-col",{attrs:{cols:"12",md:"3",xs:"12",sm:"6"}},[a("v-card",{staticClass:"d-flex justify-center align-center",attrs:{tile:"",color:"primary",height:"100px"}},[a("h3",{staticClass:"white--text"},[t._v("Hospitalized "+t._s(t.hospitalized))])])],1),a("v-col",{attrs:{cols:"12",md:"3",xs:"12",sm:"6"}},[a("v-card",{staticClass:"d-flex justify-center align-center",attrs:{tile:"",color:"success",height:"100px"}},[a("h3",{staticClass:"white--text"},[t._v("Recovered "+t._s(t.recovered))])])],1),a("v-col",{attrs:{cols:"12",md:"3",xs:"12",sm:"6"}},[a("v-card",{staticClass:"d-flex justify-center align-center",attrs:{tile:"",color:"error",height:"100px"}},[a("h3",{staticClass:"white--text"},[t._v("Deaths "+t._s(t.deaths))])])],1)],1),a("v-data-table",{staticClass:"elevation-1 my-5 py-5",attrs:{dark:"",headers:t.headers,items:t.items,"pagination.sync":"pagination","item-key":"id",loading:t.loadingStat,"loading-text":"Loading",search:t.search,"disable-pagination":"","hide-default-footer":""},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-text-field",{staticClass:"mx-4",attrs:{outlined:"",label:"Search by country name"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]},proxy:!0}])})],1)])},$=[],A={data:function(){return{headers:[{text:"Wilaya",align:"left",value:"region"},{text:"Cases",align:"center",value:"value"},{text:"new Cases",align:"center",value:"newly"}],items:[],loadingStat:!0,search:void 0,hospitalized:10,deaths:void 0,recovered:void 0,infected:void 0}},mounted:function(){var t=this;this.$http.get("https://api.apify.com/v2/key-value-stores/pp4Wo2slUJ78ZnaAi/records/LATEST?disableRedirect=true").then((function(e){var a;for(a in t.hospitalized=e.data.hospitalized,t.recovered=e.data.recovered,t.infected=e.data.infected,t.deaths=e.data.deceased,e.data.infectedByRegion)t.items.push(e.data.infectedByRegion[a]);t.loadingStat=!1}))}},I=A,E=a("0798"),R=a("b0af"),D=a("62ad"),L=a("a523"),z=a("8fea"),M=a("0fd9"),B=a("8654"),W=Object(l["a"])(I,T,$,!1,null,null,null),F=W.exports;u()(W,{VAlert:E["a"],VCard:R["a"],VCol:D["a"],VContainer:L["a"],VDataTable:z["a"],VRow:M["a"],VTextField:B["a"]});var J={name:"algeriaView",components:{algeria:F}},Z=J,H=Object(l["a"])(Z,O,P,!1,null,null,null),N=H.exports;u()(H,{VContainer:L["a"]});var U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{attrs:{"grid-list-xs":""}},[a("instructions")],1)],1)},q=[],G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"instu"},[a("v-row",{staticClass:"d-flex justify-center align-center"},[a("v-col",{attrs:{cols:"8"}},[a("v-alert",{staticClass:"text-center",attrs:{outlined:"",type:"primary"}},[a("h1",[t._v("Coming Soon ...")])])],1)],1)],1)},K=[],Q={},X=Q,Y=(a("1a82"),Object(l["a"])(X,G,K,!1,null,"e6344806",null)),tt=Y.exports;u()(Y,{VAlert:E["a"],VCol:D["a"],VRow:M["a"]});var et={name:"instructionsView",components:{instructions:tt},data:function(){return{}},mounted:function(){}},at=et,nt=Object(l["a"])(at,U,q,!1,null,null,null),rt=nt.exports;u()(nt,{VContainer:L["a"]});var st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{attrs:{"grid-list-xs":""}},[a("world")],1)],1)},it=[],ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xs":""}},[a("div",[a("v-data-table",{staticClass:"elevation-1 mt-5 pt-5",attrs:{dense:"",dark:"",headers:t.headers,items:t.items,"pagination.sync":"pagination","item-key":"id",loading:t.loadingStat,"loading-text":"Loading",search:t.search,"items-per-page":t.itemsPerPage},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-text-field",{staticClass:"mx-4",attrs:{outlined:"",label:"Search by country name"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]},proxy:!0},{key:"item.countryInfo.flag",fn:function(t){var e=t.item;return[a("div",{staticClass:"d-flex justify-center ma-2"},[a("v-img",{attrs:{src:e.countryInfo.flag,alt:e.country,width:"30px",height:"35px"}})],1)]}}])})],1)])},lt=[],ct={data:function(){return{headers:[{text:"Flag",align:"center",value:"countryInfo.flag",sortable:!1},{text:"Country Name",align:"center",value:"country"},{text:"Cases",align:"center",value:"cases"},{text:"Today Cases",align:"center",value:"todayCases"},{text:"Deaths",align:"center",value:"deaths"},{text:"Today Deaths",align:"center",value:"todayDeaths"},{text:"Recovered",align:"center",value:"recovered"},{text:"Active",align:"center",value:"active"}],itemsPerPage:30,itemsPerPagetext:["25","50","100"],loadingStat:!0,items:[],search:void 0}},watch:{},mounted:function(){var t=this;this.$http.get("https://corona.lmao.ninja/countries/").then((function(e){var a;for(a in e.data)t.items.push(e.data[a]);t.loadingStat=!1}))}},ut=ct,dt=a("adda"),vt=Object(l["a"])(ut,ot,lt,!1,null,null,null),ft=vt.exports;u()(vt,{VContainer:L["a"],VDataTable:z["a"],VImg:dt["a"],VTextField:B["a"]});var pt={name:"worldView",components:{world:ft},data:function(){return{}}},ht=pt,mt=Object(l["a"])(ht,st,it,!1,null,null,null),gt=mt.exports;u()(mt,{VContainer:L["a"]});var xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{attrs:{"grid-list-xs":""}},[a("home")],1)],1)},yt=[],bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xs":""}},[a("div",{staticClass:"main d-flex justify-center align-center"},[a("v-row",{staticClass:"d-flex justify-center align-center"},[a("v-col",{attrs:{cols:"8"}},[a("v-alert",{staticClass:"text-center",attrs:{outlined:"",type:"primary"}},[a("h1",[t._v("Covid-19 Tracker")])])],1)],1)],1)])},Ct=[],_t={},wt=_t,Vt=(a("f03d"),Object(l["a"])(wt,bt,Ct,!1,null,"dbb7dcee",null)),kt=Vt.exports;u()(Vt,{VAlert:E["a"],VCol:D["a"],VContainer:L["a"],VRow:M["a"]});var jt={components:{home:kt}},St=jt,Ot=Object(l["a"])(St,xt,yt,!1,null,null,null),Pt=Ot.exports;u()(Ot,{VContainer:L["a"]}),n["a"].use(S["a"]);var Tt=new S["a"]({routes:[{path:"/",name:"home",component:Pt},{path:"/instructions",name:"instructions",component:rt},{path:"/algeria",name:"algeria",component:N},{path:"/world",name:"world",component:gt}]});n["a"].config.productionTip=!1,n["a"].prototype.$http=j.a,new n["a"]({router:Tt,vuetify:V,render:function(t){return t(_)}}).$mount("#app")},"8a23":function(t,e,a){},f03d:function(t,e,a){"use strict";var n=a("f62b"),r=a.n(n);r.a},f62b:function(t,e,a){}});
//# sourceMappingURL=app.e7f59643.js.map