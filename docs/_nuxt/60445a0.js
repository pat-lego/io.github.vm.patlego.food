(window.webpackJsonp=window.webpackJsonp||[]).push([[11,5,6,7,10],{231:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},232:function(t,e,n){"use strict";var r=n(6),l=n(233).trim;r({target:"String",proto:!0,forced:n(234)("trim")},{trim:function(){return l(this)}})},233:function(t,e,n){var r=n(3),l=n(21),o=n(11),c=n(231),f=r("".replace),d="["+c+"]",m=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),v=function(t){return function(e){var n=o(l(e));return 1&t&&(n=f(n,m,"")),2&t&&(n=f(n,h,"")),n}};t.exports={start:v(1),end:v(2),trim:v(3)}},234:function(t,e,n){var r=n(73).PROPER,l=n(5),o=n(231);t.exports=function(t){return l((function(){return!!o[t]()||"​᠎"!=="​᠎"[t]()||r&&o[t].name!==t}))}},235:function(t,e,n){"use strict";n.r(e);n(29),n(127),n(232),n(58),n(59),n(54),n(16),n(28),n(55),n(36),n(35),n(56),n(57),n(37);function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var o={data:function(){return{search:""}},props:{data:{type:Array,required:!0},field:{type:String,required:!0}},methods:{searchFn:function(t,e){var n=[];if(void 0===this.search)return this.$emit("filtered-dt",this.data),this.data;if(""===this.search.trim())return this.$emit("filtered-dt",this.data),this.data;var l,o=r(this.data);try{for(o.s();!(l=o.n()).done;){var dt=l.value;dt[this.field]&&dt[this.field].toLowerCase().includes(this.search.toLowerCase())&&n.push(dt)}}catch(t){o.e(t)}finally{o.f()}return this.$emit("filtered-dt",n),n}},watch:{search:function(t,e){this.searchFn(t,e)}}},c=n(44),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"md:flex hidden"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"Search for recipe"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"flex md:hidden"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"Search for recipe"},domProps:{value:t.search},on:{keydown:t.searchFn,input:function(e){e.target.composing||(t.search=e.target.value)}}})])])}),[],!1,null,null,null);e.default=component.exports},236:function(t,e,n){"use strict";n.r(e);var r=n(44),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{staticClass:"twitter-follow-button",attrs:{href:"https://twitter.com/_patlego?ref_src=twsrc%5Etfw","data-show-count":"false"}},[t._v("Follow @_patlego")]),t._v(" "),n("script",{attrs:{async:"",src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}})])}],!1,null,null,null);e.default=component.exports},237:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{mobile:{hovering:!1},list:[{link:"red-lentil-curry",name:"Red Lentil Curry",tags:["curry","indian","lentils"]},{link:"naan-bread",name:"Naan Bread",tags:["bread","indian","naan","curry"]},{link:"chicken-parm",name:"Chicken Parmesan",tags:["chicken","italian","parmesan"]},{link:"meat-loaf",name:"Meat Loaf",tags:["meat","loaf","canadian"]},{link:"mashed-potatoes",name:"Fluffy Garlic Mashed Potatoes",tags:["garlic","mashed","potatoes"]},{link:"lemon-garlic-beans",name:"Lemon Garlic Green Beans",tags:["lemon","garlic","green beans"]}],filteredList:[]}},mounted:function(){this.filteredList=this.list},methods:{filteredResult:function(t){this.filteredList=t}}},l=n(44),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"md:flex md:flex-col p-2 w-60 pt-4 hidden overflow-y-scroll"},[n("div",{staticClass:"pt-2 pb-2"},[n("Search",{attrs:{data:t.list,field:"name"},on:{"filtered-dt":t.filteredResult}})],1),t._v(" "),n("p",{staticClass:"text-2xl font-extrabold"},[t._v("Recipes")]),t._v(" "),n("div",{staticClass:"flex flex-col items-center pt-8"},[n("ul",{staticClass:"h-screen"},t._l(t.filteredList,(function(e){return n("li",{key:e.name,staticClass:"break-words hover:text-blue-500 font-semibold p-2"},[n("nuxt-link",{attrs:{to:"/recipes/"+e.link}},[t._v(t._s(e.name))])],1)})),0)])]),t._v(" "),n("div",{staticClass:"flex w-full md:hidden"},[n("div",{staticClass:"flex flex-col w-full align-middle"},[n("div",{staticClass:"flex flex-row w-full"},[n("p",{staticClass:"w-min h-full p-1 pr-2 text-2xl font-extrabold",on:{click:function(e){t.mobile.hovering=!t.mobile.hovering}}},[t._v("\n          Recipes\n        ")])]),t._v(" "),n("div",{staticClass:"flex"},[n("ul",{staticClass:"\n            absolute\n            pt-4\n            p-1\n            z-30\n            overflow-y-scroll\n            m-h-32\n            bg-blue-300\n            rounded-md\n            max-h-56\n          ",class:{hidden:!t.mobile.hovering}},[n("li",{staticClass:"break-words hover:text-blue-500 font-semibold"},[n("Search",{staticClass:"w-1/2 justify-end",attrs:{data:t.list,field:"name"},on:{"filtered-dt":t.filteredResult}})],1),t._v(" "),t._l(t.filteredList,(function(e){return n("li",{key:e.name,staticClass:"\n              m-1\n              break-words\n              hover:text-blue-500\n              font-semibold\n              border-t-2 border-black\n              w-full\n              h-6\n            "},[n("nuxt-link",{staticClass:"h-full w-full",attrs:{to:"/recipes/"+e.link}},[t._v(t._s(e.name))])],1)}))],2)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Search:n(235).default})},238:function(t,e,n){"use strict";n.r(e);var r=n(44),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:"https://instagram.com/patrique.legault",target:"_blank"}},[n("span",[n("span",{staticClass:"text-red-200 hover:text-red-400"},[t._v("\n        Follow "),n("font-awesome-icon",{attrs:{icon:["fab","instagram-square"],size:"lg"}})],1)])])])}),[],!1,null,null,null);e.default=component.exports},239:function(t,e,n){t.exports=n.p+"img/20210824_193539.9990f20.jpg"},244:function(t,e,n){var content=n(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("4dde3f23",content,!0,{sourceMap:!1})},245:function(t,e,n){t.exports=n.p+"img/pat_kitchen.fb3f3bf.jpg"},246:function(t,e,n){t.exports=n.p+"img/pepper_assistant.2f18e51.jpg"},247:function(t,e,n){var map={"./20200621_184505.jpg":248,"./20200731_200116.jpg":249,"./20200927_194448.jpg":250,"./20201213_175242.jpg":251,"./20201225_183903.jpg":252,"./20210123_105527.jpg":253,"./20210330_190042.jpg":254,"./20210511_182730.jpg":255,"./20210722_200052.jpg":256,"./20210815_190343.jpg":257,"./20210824_193539.jpg":239,"./20211023_183442.jpg":258,"./20211024_172139.jpg":259};function r(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=l,t.exports=r,r.id=247},248:function(t,e,n){t.exports=n.p+"img/20200621_184505.bf3ed09.jpg"},249:function(t,e,n){t.exports=n.p+"img/20200731_200116.b30fbdb.jpg"},250:function(t,e,n){t.exports=n.p+"img/20200927_194448.999dee8.jpg"},251:function(t,e,n){t.exports=n.p+"img/20201213_175242.d377d89.jpg"},252:function(t,e,n){t.exports=n.p+"img/20201225_183903.93a4f38.jpg"},253:function(t,e,n){t.exports=n.p+"img/20210123_105527.7dd62ba.jpg"},254:function(t,e,n){t.exports=n.p+"img/20210330_190042.d682875.jpg"},255:function(t,e,n){t.exports=n.p+"img/20210511_182730.2c8a103.jpg"},256:function(t,e,n){t.exports=n.p+"img/20210722_200052.2ebed71.jpg"},257:function(t,e,n){t.exports=n.p+"img/20210815_190343.8755381.jpg"},258:function(t,e,n){t.exports=n.p+"img/20211023_183442.f932a93.jpg"},259:function(t,e,n){t.exports=n.p+"img/20211024_172139.073356f.jpg"},260:function(t,e,n){"use strict";n(244)},261:function(t,e,n){var r=n(60)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\np[data-v-94edbeda]{\n  font-family:"Oswald",sans-serif\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},268:function(t,e,n){"use strict";n.r(e);n(236);var r={head:function(){return{title:"PatLego Recipes",meta:[{hid:"description",name:"description",content:"The digital recipe book of Patrique Legault, find healthy and easy to make recipes, from Italian to Indian cuisine there is something for everyone."}],script:[{json:{"@context":"http://schema.org","@type":"Article",name:"PatLego Recipes",author:{"@type":"Person",name:"Patrique Legault"},image:"https://food.pat-lego.com".concat(n(239)),thumbnail:"https://food.pat-lego.com".concat(n(239)),keywords:"cooking, home food, recipes, delicious, home meals, Patrique, Legault, simple"},type:"application/ld+json"}]}},data:function(){return{food:[{row:["20200621_184505.jpg","20200731_200116.jpg","20200927_194448.jpg"]},{row:["20201213_175242.jpg","20201225_183903.jpg","20210123_105527.jpg"]},{row:["20210330_190042.jpg","20210511_182730.jpg","20210722_200052.jpg"]},{row:["20210815_190343.jpg","20210824_193539.jpg","20211023_183442.jpg"]},{row:["20211024_172139.jpg"]}]}}},l=(n(260),n(44)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col md:flex-row h-full"},[r("Sidebar"),t._v(" "),r("div",{staticClass:"flex flex-col w-full md:border-l-4"},[r("p",{staticClass:"\n        flex\n        w-full\n        font-extrabold\n        justify-center\n        md:text-3xl\n        text-xl\n        p-2\n        md:p-6\n        uppercase\n      "},[t._v("\n      Welcome to my recipe book\n    ")]),t._v(" "),r("div",{staticClass:"flex flex-row justify-center w-full"},[r("twitter-follow",{staticClass:"p-2"}),t._v(" "),r("instagram-follow",{staticClass:"p-2"})],1),t._v(" "),r("div",{staticClass:"flex md:flex-row flex-col"},[r("div",{staticClass:"w-1/2 flex flex-col justify-center items-center w-full"},[r("img",{staticClass:"\n            md:h-110\n            object-contain\n            md:object-scale-down\n            transition\n            duration-500\n            ease-in-out\n            transform\n            hover:-translate-y-1 hover:scale-105\n          ",attrs:{src:n(245)}}),t._v(" "),r("p",{staticClass:"text-2xl"},[t._v("This is me (Pat)")])]),t._v(" "),r("div",{staticClass:"w-1/2 flex flex-col justify-center items-center w-full"},[r("img",{staticClass:"\n            md:h-110\n            object-contain\n            md:object-scale-down\n            transition\n            duration-500\n            ease-in-out\n            transform\n            hover:-translate-y-1 hover:scale-105\n          ",attrs:{src:n(246)}}),t._v(" "),r("p",{staticClass:"text-2xl"},[t._v("This is my assistant")])])]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"flex flex-col w-full h-auto"},t._l(t.food,(function(e){return r("div",{key:e.row.name,staticClass:"flex flex-row w-full justify-center p-1 md:p-2"},t._l(e.row,(function(t){return r("img",{key:t,staticClass:"w-1/3 object-contain md:object-scale-down pl-1 pr-1",attrs:{src:n(247)("./"+t)}})})),0)})),0)])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex w-full justify-center p-2 md:p-8"},[n("p",{staticClass:"text-2xl uppercase"},[t._v("Together we build this....")])])}],!1,null,"94edbeda",null);e.default=component.exports;installComponents(component,{Sidebar:n(237).default,TwitterFollow:n(236).default,InstagramFollow:n(238).default})}}]);