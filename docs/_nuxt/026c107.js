(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4,5],{230:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},231:function(t,e,r){"use strict";var n=r(6),o=r(232).trim;n({target:"String",proto:!0,forced:r(233)("trim")},{trim:function(){return o(this)}})},232:function(t,e,r){var n=r(3),o=r(21),l=r(11),c=r(230),f=n("".replace),d="["+c+"]",m=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),h=function(t){return function(e){var r=l(o(e));return 1&t&&(r=f(r,m,"")),2&t&&(r=f(r,v,"")),r}};t.exports={start:h(1),end:h(2),trim:h(3)}},233:function(t,e,r){var n=r(73).PROPER,o=r(5),l=r(230);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||n&&l[t].name!==t}))}},234:function(t,e,r){"use strict";r.r(e);r(29),r(127),r(231),r(58),r(59),r(54),r(16),r(28),r(55),r(36),r(35),r(56),r(57),r(37);function n(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,f=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){f=!0,l=t},f:function(){try{c||null==r.return||r.return()}finally{if(f)throw l}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var l={data:function(){return{search:""}},props:{data:{type:Array,required:!0},field:{type:String,required:!0}},methods:{searchFn:function(t,e){var r=[];if(void 0===this.search)return this.$emit("filtered-dt",this.data),this.data;if(""===this.search.trim())return this.$emit("filtered-dt",this.data),this.data;var o,l=n(this.data);try{for(l.s();!(o=l.n()).done;){var dt=o.value;dt[this.field]&&dt[this.field].toLowerCase().includes(this.search.toLowerCase())&&r.push(dt)}}catch(t){l.e(t)}finally{l.f()}return this.$emit("filtered-dt",r),r}},watch:{search:function(t,e){this.searchFn(t,e)}}},c=r(44),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"md:flex hidden"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"Search for recipe"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"flex md:hidden"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"Search for recipe"},domProps:{value:t.search},on:{keydown:t.searchFn,input:function(e){e.target.composing||(t.search=e.target.value)}}})])])}),[],!1,null,null,null);e.default=component.exports},235:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{mobile:{hovering:!1},list:[{link:"red-lentil-curry",name:"Red Lentil Curry",tags:["curry","indian","lentils"]}],filteredList:[]}},mounted:function(){this.filteredList=this.list},methods:{filteredResult:function(t){this.filteredList=t}}},o=r(44),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"md:flex md:flex-col p-2 w-60 pt-4 hidden overflow-y-scroll"},[r("div",{staticClass:"pt-2 pb-2"},[r("Search",{attrs:{data:t.list,field:"name"},on:{"filtered-dt":t.filteredResult}})],1),t._v(" "),r("p",{staticClass:"text-2xl font-extrabold"},[t._v("Recipes")]),t._v(" "),r("div",{staticClass:"flex flex-col items-center pt-8"},[r("ul",{staticClass:"h-screen"},t._l(t.filteredList,(function(e){return r("li",{key:e.name,staticClass:"break-words hover:text-blue-500 font-semibold p-2"},[r("a",{attrs:{href:"recipes/"+e.link}},[t._v(t._s(e.name))])])})),0)])]),t._v(" "),r("div",{staticClass:"flex w-full md:hidden"},[r("div",{staticClass:"flex flex-col w-full align-middle"},[r("div",{staticClass:"flex flex-row w-full md:bg-gray-100"},[r("p",{staticClass:"w-min h-full p-1 pr-2 text-2xl font-extrabold",on:{click:function(e){t.mobile.hovering=!t.mobile.hovering}}},[t._v("\n          Recipes\n        ")])]),t._v(" "),r("ul",{staticClass:"pt-4 p-1 overflow-y-scroll m-h-32",class:{hidden:!t.mobile.hovering}},[r("li",{staticClass:"break-words hover:text-blue-500 font-semibold"},[r("Search",{staticClass:"w-1/2 justify-end",attrs:{data:t.list,field:"name"},on:{"filtered-dt":t.filteredResult}})],1),t._v(" "),t._l(t.filteredList,(function(e){return r("li",{key:e.name,staticClass:"break-words hover:text-blue-500 font-semibold"},[r("a",{attrs:{href:"recipes/"+e.link}},[t._v(t._s(e.name))])])}))],2)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Search:r(234).default})},237:function(t,e,r){var content=r(257);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("e313c5e0",content,!0,{sourceMap:!1})},240:function(t,e,r){t.exports=r.p+"img/pat_kitchen.fb3f3bf.jpg"},241:function(t,e,r){t.exports=r.p+"img/pepper_assistant.2f18e51.jpg"},242:function(t,e,r){var map={"./20200621_184505.jpg":243,"./20200731_200116.jpg":244,"./20200927_194448.jpg":245,"./20201213_175242.jpg":246,"./20201225_183903.jpg":247,"./20210123_105527.jpg":248,"./20210330_190042.jpg":249,"./20210511_182730.jpg":250,"./20210722_200052.jpg":251,"./20210815_190343.jpg":252,"./20210824_193539.jpg":253,"./20211023_183442.jpg":254,"./20211024_172139.jpg":255};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=242},243:function(t,e,r){t.exports=r.p+"img/20200621_184505.bf3ed09.jpg"},244:function(t,e,r){t.exports=r.p+"img/20200731_200116.b30fbdb.jpg"},245:function(t,e,r){t.exports=r.p+"img/20200927_194448.999dee8.jpg"},246:function(t,e,r){t.exports=r.p+"img/20201213_175242.d377d89.jpg"},247:function(t,e,r){t.exports=r.p+"img/20201225_183903.93a4f38.jpg"},248:function(t,e,r){t.exports=r.p+"img/20210123_105527.7dd62ba.jpg"},249:function(t,e,r){t.exports=r.p+"img/20210330_190042.d682875.jpg"},250:function(t,e,r){t.exports=r.p+"img/20210511_182730.2c8a103.jpg"},251:function(t,e,r){t.exports=r.p+"img/20210722_200052.2ebed71.jpg"},252:function(t,e,r){t.exports=r.p+"img/20210815_190343.8755381.jpg"},253:function(t,e,r){t.exports=r.p+"img/20210824_193539.9990f20.jpg"},254:function(t,e,r){t.exports=r.p+"img/20211023_183442.f932a93.jpg"},255:function(t,e,r){t.exports=r.p+"img/20211024_172139.073356f.jpg"},256:function(t,e,r){"use strict";r(237)},257:function(t,e,r){var n=r(60)((function(i){return i[1]}));n.push([t.i,'/*purgecss start ignore*/\np[data-v-33af16da]{\n  font-family:"Oswald",sans-serif\n}\n\n/*purgecss end ignore*/',""]),n.locals={},t.exports=n},259:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{food:[{row:["20200621_184505.jpg","20200731_200116.jpg","20200927_194448.jpg"]},{row:["20201213_175242.jpg","20201225_183903.jpg","20210123_105527.jpg"]},{row:["20210330_190042.jpg","20210511_182730.jpg","20210722_200052.jpg"]},{row:["20210815_190343.jpg","20210824_193539.jpg","20211023_183442.jpg"]},{row:["20211024_172139.jpg"]}]}}},o=(r(256),r(44)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col md:flex-row h-full"},[n("Sidebar"),t._v(" "),n("div",{staticClass:"flex flex-col w-full border-l-4 md:border-l-4"},[n("p",{staticClass:"flex w-full font-extrabold justify-center md:text-3xl text-xl p-2 md:p-8 uppercase"},[t._v("\n      Welcome to my recipe book\n    ")]),t._v(" "),n("div",{staticClass:"flex md:flex-row flex-col"},[n("div",{staticClass:"w-1/2 flex flex-col justify-center items-center w-full"},[n("img",{staticClass:"\n            md:h-110\n            object-contain\n            md:object-scale-down\n            transition\n            duration-500\n            ease-in-out\n            transform\n            hover:-translate-y-1 hover:scale-105\n          ",attrs:{src:r(240)}}),t._v(" "),n("p",{staticClass:"text-2xl"},[t._v("This is me (Pat)")])]),t._v(" "),n("div",{staticClass:"w-1/2 flex flex-col justify-center items-center w-full"},[n("img",{staticClass:"\n            md:h-110\n            object-contain\n            md:object-scale-down\n            transition\n            duration-500\n            ease-in-out\n            transform\n            hover:-translate-y-1 hover:scale-105\n          ",attrs:{src:r(241)}}),t._v(" "),n("p",{staticClass:"text-2xl"},[t._v("This is my assistant")])])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"flex flex-col w-full h-auto"},t._l(t.food,(function(e){return n("div",{key:e.row.name,staticClass:"flex flex-row w-full justify-center p-1 md:p-2"},t._l(e.row,(function(t){return n("img",{key:t,staticClass:"w-1/3 object-contain md:object-scale-down pl-1 pr-1",attrs:{src:r(242)("./"+t)}})})),0)})),0)])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex w-full justify-center p-2 md:p-8"},[r("p",{staticClass:"text-2xl uppercase"},[t._v("Together we build this....")])])}],!1,null,"33af16da",null);e.default=component.exports;installComponents(component,{Sidebar:r(235).default})}}]);