webpackJsonp([1],{"+PQj":function(t,e){},"3loX":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav"},[e("router-link",{staticClass:"router-link",attrs:{to:"/home",tag:"div"}},[e("span",{staticClass:"fa fa-ravelry fa-2x"})]),this._v(" "),e("router-link",{staticClass:"router-link",attrs:{to:"/discover",tag:"div"}},[e("span",{staticClass:"fa fa-superpowers fa-2x"})]),this._v(" "),e("router-link",{staticClass:"router-link",attrs:{to:"/login",tag:"div"}},[e("span",{staticClass:"fa fa-user fa-2x"})])],1)},staticRenderFns:[]};var n=a("VU/8")({},s,!1,function(t){a("sHZK")},"data-v-11eaefcc",null).exports,c=a("mtWM"),o=a.n(c),r={data:function(){return{data:[]}},created:function(){var t=this;o.a.get("/huaban/api/data.json").then(function(e){console.log(e),console.log(e.data.pins),t.data=e.data.pins})},methods:{gotolink:function(t){window.open(t)},gotosearch:function(){this.$router.push("/search")}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"search-wrap"},[a("div",{staticClass:"search",on:{click:t.gotosearch}},[a("span",{staticClass:"icon fa fa-search fa-1x"}),t._v(" "),a("span",[t._v("搜索")])])]),t._v(" "),a("div",{staticClass:"list"},t._l(t.data,function(e){return a("div",{staticClass:"item"},[a("div",{staticClass:"img",on:{click:function(a){t.gotolink(e.link)}}},[a("img",{attrs:{src:"http://img.hb.aicdn.com/"+e.file.key,alt:""}})]),t._v(" "),a("div",{staticClass:"msg"},[a("div",{staticClass:"title"},[t._v(t._s(e.board.title))]),t._v(" "),a("div",{staticClass:"user"},[a("div",{staticClass:"head"},[a("img",{attrs:{src:"http://img.hb.aicdn.com/"+e.user.avatar.key,alt:""}})]),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(e.user.username))])])])])}))])},staticRenderFns:[]};var d=a("VU/8")(r,l,!1,function(t){a("vyF8")},"data-v-6cc61068",null).exports,f={data:function(){return{data:[],label:[{img:"http://img.hb.aicdn.com/fc0a42c6d2e7f638485a392bf3cc40ebf7ec74c9c361-gQgaiR_sq320",text:"摄影"},{img:"http://img.hb.aicdn.com/3ef794c7003edbc489e7b6eae0dc91503259225c7934-1MjcjY_sq320",text:"生活百科"},{img:"http://img.hb.aicdn.com/719237151f8cd217033876e1fa8c1e7dc16b393b5df2-Etzexv_sq320",text:"礼物"},{img:"http://img.hb.aicdn.com/1a99aa11700f7ed01d51914c9061e5cd3ce5632c13b15-gJCMyX_sq320",text:"甜品"},{img:"http://img.hb.aicdn.com/436a73eaa52e84f239fc591a96b07896f48e625290d1-osC5Lg_sq320",text:"旅行"}],selection:[{img:"http://img.hb.aicdn.com/5cb2997c40bad1f589b3afc75f751581cc641983162f1-QfxSUK_fw658"},{img:"http://img.hb.aicdn.com/71c38dc329227639e09298fdbbcf587200aa7efbb6d23-JKpUi3_fw658"},{img:"http://img.hb.aicdn.com/dce540633158264629cf05bbc342303b0174246335c91-ptq7gV_fw658"},{img:"http://img.hb.aicdn.com/65f2c5f940f5dd440ff954215049bf538bfe2c22bbd6-yBcO0f_fw658"},{img:"http://img.hb.aicdn.com/061630835565d6559be2ba3542f15e973daaf4111555d-OgLjzY_fw658"}],interst:[{img:"http://img.hb.aicdn.com/69f9bfe82105214a63fb6fa968fe56965434f4e01bbe7-ZNDENK_fw658",text:"草莓"},{img:"http://img.hb.aicdn.com/87173a33921d655ea1d79f2acc4f340402682a3498cc-1WNGx5_fw658",text:"衍纸"},{img:"http://img.hb.aicdn.com/8fefa9fab7ac7b849767d11c474d0d8ab13218b21c292-9ctlKn_sq320",text:"节气"},{img:"http://img.hb.aicdn.com/1c98e5290413ec645ac063969735ff1fae1e6b6eace1-Lwd8c5_sq320",text:"家居"},{img:"http://img.hb.aicdn.com/3ef794c7003edbc489e7b6eae0dc91503259225c7934-1MjcjY_sq320",text:"宠物"}]}},created:function(){var t=this;o.a.get("/huaban/api/data.json").then(function(e){console.log(e.data.pins),t.data=e.data.pins})},methods:{gotolink:function(t){window.open(t)}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"discover"},[a("div",{staticClass:"nav"},[t._m(0),t._v(" "),a("div",{staticClass:"label"},t._l(t.label,function(e){return a("div",{staticClass:"item",style:{background:"url("+e.img+") center center",backgroundSize:"cover"}},[t._v("\n               "+t._s(e.text)+"\n           ")])})),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"label selection"},t._l(t.selection,function(t){return a("div",{staticClass:"item",style:{background:"url("+t.img+") center center",backgroundSize:"cover"}})})),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"label interst"},t._l(t.interst,function(e){return a("div",{staticClass:"item-wrap"},[a("div",{staticClass:"item",style:{background:"url("+e.img+") center center",backgroundSize:"cover"}}),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(e.text))])])}))]),t._v(" "),t._m(3),t._v(" "),a("div",{staticClass:"list"},t._l(t.data,function(e){return a("div",{staticClass:"item"},[a("div",{staticClass:"img",on:{click:function(a){t.gotolink(e.link)}}},[a("img",{attrs:{src:"http://img.hb.aicdn.com/"+e.file.key,alt:""}})]),t._v(" "),a("div",{staticClass:"msg"},[a("div",{staticClass:"msg-title"},[t._v(t._s(e.board.title))])])])}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("span",[this._v("发现")]),this._v(" "),e("span",{staticClass:"icon fa fa-search fa-1x"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("span",[this._v("精选图片")]),this._v(" "),e("span",{staticClass:"icon fa fa-angle-right fa-1x"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("span",[this._v("推荐兴趣")]),this._v(" "),e("span",{staticClass:"icon fa fa-angle-right fa-1x"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"discover-title"},[e("span",[this._v("发现采集")])])}]};var u=a("VU/8")(f,m,!1,function(t){a("Qlix")},"data-v-70e1b1fa",null).exports,h={components:{"hua-nav":n,home:d,discover:u}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app"},[e("hua-nav"),this._v(" "),e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var v=a("VU/8")(h,p,!1,function(t){a("+PQj")},null,null).exports,g=a("/ocq"),b=a("Au9i"),_={data:function(){return{message:"",password:""}},methods:{goback:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")},login:function(){this.message&&this.password?Object(b.MessageBox)("提示","无此用户"):Object(b.MessageBox)("提示","登录失败")}}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"login"},[a("div",{staticClass:"header"},[a("span",{staticClass:"icon fa fa-times",on:{click:t.goback}}),t._v(" "),a("span",[t._v("登录")])]),t._v(" "),a("div",{staticClass:"title"},[t._v("账号登录")]),t._v(" "),a("div",{staticClass:"input-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{type:"text",placeholder:"邮箱/手机号"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-wrap button",on:{click:t.login}},[a("input",{attrs:{type:"button",value:"登录"}})]),t._v(" "),a("div",{staticClass:"prompt"},[a("span",[t._v("忘记密码?")]),t._v(" "),a("span",[t._v("手机注册")])])])])},staticRenderFns:[]};var C=a("VU/8")(_,x,!1,function(t){a("Ta15")},"data-v-018a9e75",null).exports,w={activated:function(){document.getElementById("input").focus()},methods:{goback:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")}}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"search"},[e("div",{staticClass:"header"},[e("span",{staticClass:"fa fa-arrow-left",on:{click:this.goback}}),this._v(" "),e("input",{attrs:{type:"text",id:"input",placeholder:"搜索"}}),this._v(" "),e("span",{staticClass:"fa fa-search"})])])])},staticRenderFns:[]};var k=a("VU/8")(w,y,!1,function(t){a("3loX")},"data-v-19f27966",null).exports;i.default.use(g.a);var E=new g.a({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:d},{path:"/discover",name:"discover",component:u},{path:"/login",name:"login",component:C},{path:"/search",name:"search",component:k}]});a("d8/S"),a("tb/R"),a("fI06"),a("XS2Z"),a("waFx");i.default.config.productionTip=!1,new i.default({el:"#app",router:E,components:{App:v},template:"<App/>"})},Qlix:function(t,e){},Ta15:function(t,e){},XS2Z:function(t,e){},"d8/S":function(t,e){},fI06:function(t,e){},sHZK:function(t,e){},"tb/R":function(t,e){},vyF8:function(t,e){},waFx:function(t,e){!function(){var t="@charset \"utf-8\";html{overflow-y:scroll;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html *{outline:0;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}html,body{font-family:sans-serif}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0}input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}abbr,acronym{border:0;font-variant:normal}del{text-decoration:line-through}address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:500}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:500}q:before,q:after{content:''}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}a:hover{text-decoration:underline}ins,a{text-decoration:none}",e=document.createElement("style");if(document.getElementsByTagName("head")[0].appendChild(e),e.styleSheet)e.styleSheet.disabled||(e.styleSheet.cssText=t);else try{e.innerHTML=t}catch(a){e.innerText=t}}(),function(t,e){function a(){var e=n.getBoundingClientRect().width;e/r>540&&(e=540*r);var a=e/10;n.style.fontSize=a+"px",d.rem=t.rem=a}var i,s=t.document,n=s.documentElement,c=s.querySelector('meta[name="viewport"]'),o=s.querySelector('meta[name="flexible"]'),r=0,l=0,d=e.flexible||(e.flexible={});if(c){var f=c.getAttribute("content").match(/initial\-scale=([\d\.]+)/);f&&(l=parseFloat(f[1]),r=parseInt(1/l))}else if(o){var m=o.getAttribute("content");if(m){var u=m.match(/initial\-dpr=([\d\.]+)/),h=m.match(/maximum\-dpr=([\d\.]+)/);u&&(r=parseFloat(u[1]),l=parseFloat((1/r).toFixed(2))),h&&(r=parseFloat(h[1]),l=parseFloat((1/r).toFixed(2)))}}if(!r&&!l){var p=(t.navigator.appVersion.match(/android/gi),t.navigator.appVersion.match(/iphone/gi)),v=t.devicePixelRatio;l=1/(r=p?v>=3&&(!r||r>=3)?3:v>=2&&(!r||r>=2)?2:1:1)}if(n.setAttribute("data-dpr",r),!c)if((c=s.createElement("meta")).setAttribute("name","viewport"),c.setAttribute("content","initial-scale="+l+", maximum-scale="+l+", minimum-scale="+l+", user-scalable=no"),n.firstElementChild)n.firstElementChild.appendChild(c);else{var g=s.createElement("div");g.appendChild(c),s.write(g.innerHTML)}t.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(a,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(i),i=setTimeout(a,300))},!1),"complete"===s.readyState?s.body.style.fontSize=12*r+"px":s.addEventListener("DOMContentLoaded",function(){s.body.style.fontSize=12*r+"px"},!1),a(),d.dpr=t.dpr=r,d.refreshRem=a,d.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},d.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))}},["NHnr"]);
//# sourceMappingURL=app.927a986863c7a872bfd5.js.map