(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3,5,6,7,8],{230:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},231:function(t,e,l){"use strict";var n=l(6),r=l(232).trim;n({target:"String",proto:!0,forced:l(233)("trim")},{trim:function(){return r(this)}})},232:function(t,e,l){var n=l(3),r=l(21),o=l(11),c=l(230),f=n("".replace),d="["+c+"]",v=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),h=function(t){return function(e){var l=o(r(e));return 1&t&&(l=f(l,v,"")),2&t&&(l=f(l,m,"")),l}};t.exports={start:h(1),end:h(2),trim:h(3)}},233:function(t,e,l){var n=l(73).PROPER,r=l(5),o=l(230);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!=="​᠎"[t]()||n&&o[t].name!==t}))}},234:function(t,e,l){"use strict";l.r(e);var n={data:function(){return{mobile:{hovering:!1},list:[{link:"red-lentil-curry",name:"Red Lentil Curry",tags:["curry","indian","lentils"]},{link:"naan-bread",name:"Naan Bread",tags:["bread","indian","naan","curry"]}],filteredList:[]}},mounted:function(){this.filteredList=this.list},methods:{filteredResult:function(t){this.filteredList=t}}},r=l(44),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"md:flex md:flex-col p-2 w-60 pt-4 hidden overflow-y-scroll"},[l("div",{staticClass:"pt-2 pb-2"},[l("Search",{attrs:{data:t.list,field:"name"},on:{"filtered-dt":t.filteredResult}})],1),t._v(" "),l("p",{staticClass:"text-2xl font-extrabold"},[t._v("Recipes")]),t._v(" "),l("div",{staticClass:"flex flex-col items-center pt-8"},[l("ul",{staticClass:"h-screen"},t._l(t.filteredList,(function(e){return l("li",{key:e.name,staticClass:"break-words hover:text-blue-500 font-semibold p-2 "},[l("nuxt-link",{attrs:{to:"/recipes/"+e.link}},[t._v(t._s(e.name))])],1)})),0)])]),t._v(" "),l("div",{staticClass:"flex w-full md:hidden"},[l("div",{staticClass:"flex flex-col w-full align-middle"},[l("div",{staticClass:"flex flex-row w-full"},[l("p",{staticClass:"w-min h-full p-1 pr-2 text-2xl font-extrabold",on:{click:function(e){t.mobile.hovering=!t.mobile.hovering}}},[t._v("\n          Recipes\n        ")])]),t._v(" "),l("div",{staticClass:"flex"},[l("ul",{staticClass:"absolute pt-4 p-1 z-30 overflow-y-scroll m-h-32 bg-blue-300 rounded-md max-h-56",class:{hidden:!t.mobile.hovering}},[l("li",{staticClass:"break-words hover:text-blue-500 font-semibold"},[l("Search",{staticClass:"w-1/2 justify-end",attrs:{data:t.list,field:"name"},on:{"filtered-dt":t.filteredResult}})],1),t._v(" "),t._l(t.filteredList,(function(e){return l("li",{key:e.name,staticClass:"\n              m-1\n              break-words\n              hover:text-blue-500\n              font-semibold\n              border-t-2 border-black\n              w-full\n              h-6\n            "},[l("nuxt-link",{staticClass:"h-full w-full",attrs:{to:"/recipes/"+e.link}},[t._v(t._s(e.name))])],1)}))],2)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Search:l(235).default})},235:function(t,e,l){"use strict";l.r(e);l(29),l(127),l(231),l(58),l(59),l(54),l(16),l(28),l(55),l(36),l(35),l(56),l(57),l(37);function n(t,e){var l="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!l){if(Array.isArray(t)||(l=function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var l=Object.prototype.toString.call(t).slice(8,-1);"Object"===l&&t.constructor&&(l=t.constructor.name);if("Map"===l||"Set"===l)return Array.from(t);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return r(t,e)}(t))||e&&t&&"number"==typeof t.length){l&&(t=l);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){l=l.call(t)},n:function(){var t=l.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==l.return||l.return()}finally{if(f)throw o}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,l=new Array(e);i<e;i++)l[i]=t[i];return l}var o={data:function(){return{search:""}},props:{data:{type:Array,required:!0},field:{type:String,required:!0}},methods:{searchFn:function(t,e){var l=[];if(void 0===this.search)return this.$emit("filtered-dt",this.data),this.data;if(""===this.search.trim())return this.$emit("filtered-dt",this.data),this.data;var r,o=n(this.data);try{for(o.s();!(r=o.n()).done;){var dt=r.value;dt[this.field]&&dt[this.field].toLowerCase().includes(this.search.toLowerCase())&&l.push(dt)}}catch(t){o.e(t)}finally{o.f()}return this.$emit("filtered-dt",l),l}},watch:{search:function(t,e){this.searchFn(t,e)}}},c=l(44),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"md:flex hidden"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"Search for recipe"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),l("div",{staticClass:"flex md:hidden"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"Search for recipe"},domProps:{value:t.search},on:{keydown:t.searchFn,input:function(e){e.target.composing||(t.search=e.target.value)}}})])])}),[],!1,null,null,null);e.default=component.exports},236:function(t,e,l){"use strict";l.r(e);l(28),l(54);var n={props:{ingredients:{type:Array,required:!0},direction:{type:String,required:!1,default:"down"}},computed:{formatIngredients:function(){for(var i=0;i<this.ingredients.length;i++)this.ingredients[i].name=this.ingredients[i].name.charAt(0).toUpperCase()+this.ingredients[i].name.slice(1).toLowerCase();return this.ingredients}},methods:{collapse:function(){"up"===this.direction?this.direction="down":this.direction="up"}}},r=l(44),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex w-full"},[l("div",{staticClass:"hidden md:flex flex-col w-full"},[t._m(0),t._v(" "),l("ul",{staticClass:"flex flex-col w-full justify-center"},t._l(t.formatIngredients,(function(e){return l("li",{key:e.name,staticClass:"flex flex-col items-center justify-start w-full p-2"},[l("p",{staticClass:"font-bold"},[t._v(t._s(e.name))]),t._v(" "),l("p",[l("span",{staticClass:"italic"},[t._v("Amount:")]),t._v(" "+t._s(e.amount)+"\n          "+t._s(e.unit)+"\n        ")]),t._v(" "),e.optional?l("p",{staticClass:"italic bold"},[t._v("\n          Optional\n        ")]):t._e()])})),0)]),t._v(" "),l("div",{staticClass:"pt-4 md:hidden flex flex-col w-full justify-center items-center"},[l("div",{staticClass:"flex flex-row w-full justify-center",on:{click:t.collapse}},[l("p",{staticClass:"flex w-1/2 justify-end pb-2 text-2xl text-center"},[t._v("Ingredients")]),t._v(" "),l("div",{staticClass:"w-1/5 p-2"},[l("font-awesome-icon",{attrs:{icon:["fas","arrow-"+t.direction]}})],1)]),t._v(" "),l("ul",{staticClass:"flex flex-col w-full justify-center",class:{hidden:"up"===t.direction}},t._l(t.formatIngredients,(function(e){return l("li",{key:e.name,staticClass:"flex flex-col items-center justify-start w-full"},[l("p",{staticClass:"font-bold"},[t._v(t._s(e.name))]),t._v(" "),l("p",[l("span",{staticClass:"italic"},[t._v("Amount:")]),t._v(" "+t._s(e.amount)+"\n          "+t._s(e.unit)+"\n        ")])])})),0)])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-row w-full justify-center"},[l("p",{staticClass:"pb-2 text-2xl w-full text-center"},[t._v("Ingredients")])])}],!1,null,null,null);e.default=component.exports},237:function(t,e,l){"use strict";l.r(e);var n={props:{steps:{type:Array,required:!0},direction:{type:String,required:!1,default:"down"}},methods:{collapse:function(){"up"===this.direction?this.direction="down":this.direction="up"}}},r=l(44),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex w-full"},[l("div",{staticClass:"hidden md:flex flex-col w-full"},[t._m(0),t._v(" "),l("div",{staticClass:"flex w-full justify-center"},[l("ul",{staticClass:"flex flex-col w-2/3"},t._l(t.steps,(function(e){return l("li",{key:e.name,staticClass:"flex flex-row w-full p-4 break-words"},[l("i",{staticClass:"pr-2"},[t._v(t._s(e.number))]),t._v(" "),l("p",{staticClass:"font-bold"},[t._v(t._s(e.name))])])})),0)])]),t._v(" "),l("div",{staticClass:"pt-4 md:hidden flex flex-col w-full justify-center items-center"},[l("div",{staticClass:"flex flex-row w-full justify-center",on:{click:t.collapse}},[l("p",{staticClass:"flex w-1/3 pb-2 text-2xl justify-end"},[t._v("Steps")]),t._v(" "),l("div",{staticClass:"w-1/5 p-2"},[l("font-awesome-icon",{attrs:{icon:["fas","arrow-"+t.direction]}})],1)]),t._v(" "),l("div",{staticClass:"flex w-full justify-center"},[l("ul",{staticClass:"flex flex-col w-full",class:{hidden:"up"===t.direction}},t._l(t.steps,(function(e){return l("li",{key:e.name,staticClass:"flex flex-row w-full p-4"},[l("i",{staticClass:"pr-2"},[t._v(t._s(e.number))]),t._v(" "),l("p",{staticClass:"font-bold"},[t._v(t._s(e.name))])])})),0)])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-row w-full justify-center"},[l("p",{staticClass:"pb-2 text-2xl w-full text-center"},[t._v("Steps")])])}],!1,null,null,null);e.default=component.exports},238:function(t,e,l){"use strict";l.r(e);var n={methods:{home:function(){this.$router.push("/")}}},r=l(44),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"md:rounded-md md:border-2 md:border-indigo-600 md:hover:bg-indigo-300"},[l("button",{staticClass:"md:p-4",on:{click:t.home}},[t._v("Home")])])}),[],!1,null,null,null);e.default=component.exports},239:function(t,e,l){"use strict";l.r(e);l(28);var n={data:function(){return{visible:!0}},props:{suggestions:{type:Array,required:!1}},computed:{completeSuggestions:function(){this.visible=!1;var t=[];if(void 0===this.suggestions)return[];for(var i=0;i<this.suggestions.length;i++)this.suggestions[i].name&&this.suggestions[i].route&&(this.visible=!0,t.push(this.suggestions[i]));return t}}},r=l(44),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.visible?l("div",{staticClass:"flex w-full justify-center"},[l("div",{staticClass:"flex flex-col p-4"},[l("p",{staticClass:"font-bold text-xl md:text-2xl underline text-center"},[t._v("Suggestions")]),t._v(" "),l("ul",{staticClass:"w-full text-center"},t._l(t.completeSuggestions,(function(e){return l("li",{key:e.name,staticClass:"pt-2 h-5 md:h-10"},[l("font-awesome-icon",{staticClass:"pr-1",staticStyle:{"font-size":"20px"},attrs:{icon:["fas","arrow-right"]}}),l("nuxt-link",{staticClass:"hover:text-blue-500",attrs:{to:e.route}},[t._v(t._s(e.name))])],1)})),0)])]):t._e()}),[],!1,null,null,null);e.default=component.exports},240:function(t,e,l){"use strict";l.r(e);var n=l(236),r=l(237),o=l(238),c=l(234),f=l(239),d={components:{Sidebar:c.default,Home:o.default,Ingredients:n.default,Steps:r.default,Suggestions:f.default},props:{title:{type:String,required:!0},ingredients:{type:Array,required:!0},steps:{type:Array,required:!0},suggestions:{type:Array,required:!1,default:void 0}}},v=l(44),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-col md:flex-row h-full"},[l("Sidebar"),t._v(" "),l("div",{staticClass:"md:pt-10 flex flex-col w-full md:border-l-4"},[l("div",{staticClass:"flex w-full justify-start md:justify-end"},[l("div",{staticClass:"pl-1 md:pr-4"},[l("Home")],1)]),t._v(" "),l("div",{staticClass:"flex w-full justify-center h-5 md:h-10"},[l("p",{staticClass:"font-bold text-xl md:text-3xl underline text-center"},[t._v("\n        "+t._s(t.title)+"\n      ")])]),t._v(" "),l("div",{staticClass:"flex flex-col md:flex-row"},[l("div",{staticClass:"flex w-full md:w-1/2 md:pt-10"},[l("Ingredients",{attrs:{ingredients:t.ingredients,direction:"down"}})],1),t._v(" "),l("div",{staticClass:"flex w-full md:w-1/2 md:pt-10"},[l("Steps",{attrs:{steps:t.steps,direction:"up"}})],1)]),t._v(" "),l("div",{staticClass:"flex w-full"},[l("Suggestions",{attrs:{suggestions:t.suggestions}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Sidebar:l(234).default,Home:l(238).default,Ingredients:l(236).default,Steps:l(237).default,Suggestions:l(239).default})}}]);