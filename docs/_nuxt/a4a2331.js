(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2,3,4,5,6,7],{230:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},231:function(t,e,n){"use strict";var r=n(6),l=n(232).trim;r({target:"String",proto:!0,forced:n(233)("trim")},{trim:function(){return l(this)}})},232:function(t,e,n){var r=n(3),l=n(21),o=n(11),c=n(230),d=r("".replace),f="["+c+"]",m=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),v=function(t){return function(e){var n=o(l(e));return 1&t&&(n=d(n,m,"")),2&t&&(n=d(n,h,"")),n}};t.exports={start:v(1),end:v(2),trim:v(3)}},233:function(t,e,n){var r=n(73).PROPER,l=n(5),o=n(230);t.exports=function(t){return l((function(){return!!o[t]()||"​᠎"!=="​᠎"[t]()||r&&o[t].name!==t}))}},234:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{mobile:{hovering:!1},list:[{link:"red-lentil-curry",name:"Red Lentil Curry",tags:["curry","indian","lentils"]},{link:"naan-bread",name:"Naan Bread",tags:["bread","indian","naan","curry"]}],filteredList:[]}},mounted:function(){this.filteredList=this.list},methods:{filteredResult:function(t){this.filteredList=t}}},l=n(44),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"md:flex md:flex-col p-2 w-60 pt-4 hidden overflow-y-scroll"},[n("div",{staticClass:"pt-2 pb-2"},[n("Search",{attrs:{data:t.list,field:"name"},on:{"filtered-dt":t.filteredResult}})],1),t._v(" "),n("p",{staticClass:"text-2xl font-extrabold"},[t._v("Recipes")]),t._v(" "),n("div",{staticClass:"flex flex-col items-center pt-8"},[n("ul",{staticClass:"h-screen"},t._l(t.filteredList,(function(e){return n("li",{key:e.name,staticClass:"break-words hover:text-blue-500 font-semibold p-2 "},[n("nuxt-link",{attrs:{to:"/recipes/"+e.link}},[t._v(t._s(e.name))])],1)})),0)])]),t._v(" "),n("div",{staticClass:"flex w-full md:hidden"},[n("div",{staticClass:"flex flex-col w-full align-middle"},[n("div",{staticClass:"flex flex-row w-full"},[n("p",{staticClass:"w-min h-full p-1 pr-2 text-2xl font-extrabold",on:{click:function(e){t.mobile.hovering=!t.mobile.hovering}}},[t._v("\n          Recipes\n        ")])]),t._v(" "),n("div",{staticClass:"flex"},[n("ul",{staticClass:"absolute pt-4 p-1 z-30 overflow-y-scroll m-h-32 bg-blue-300 rounded-md max-h-56",class:{hidden:!t.mobile.hovering}},[n("li",{staticClass:"break-words hover:text-blue-500 font-semibold"},[n("Search",{staticClass:"w-1/2 justify-end",attrs:{data:t.list,field:"name"},on:{"filtered-dt":t.filteredResult}})],1),t._v(" "),t._l(t.filteredList,(function(e){return n("li",{key:e.name,staticClass:"\n              m-1\n              break-words\n              hover:text-blue-500\n              font-semibold\n              border-t-2 border-black\n              w-full\n              h-6\n            "},[n("nuxt-link",{staticClass:"h-full w-full",attrs:{to:"/recipes/"+e.link}},[t._v(t._s(e.name))])],1)}))],2)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Search:n(235).default})},235:function(t,e,n){"use strict";n.r(e);n(29),n(127),n(231),n(58),n(59),n(54),n(16),n(28),n(55),n(36),n(35),n(56),n(57),n(37);function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){d=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var o={data:function(){return{search:""}},props:{data:{type:Array,required:!0},field:{type:String,required:!0}},methods:{searchFn:function(t,e){var n=[];if(void 0===this.search)return this.$emit("filtered-dt",this.data),this.data;if(""===this.search.trim())return this.$emit("filtered-dt",this.data),this.data;var l,o=r(this.data);try{for(o.s();!(l=o.n()).done;){var dt=l.value;dt[this.field]&&dt[this.field].toLowerCase().includes(this.search.toLowerCase())&&n.push(dt)}}catch(t){o.e(t)}finally{o.f()}return this.$emit("filtered-dt",n),n}},watch:{search:function(t,e){this.searchFn(t,e)}}},c=n(44),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"md:flex hidden"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"Search for recipe"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"flex md:hidden"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"Search for recipe"},domProps:{value:t.search},on:{keydown:t.searchFn,input:function(e){e.target.composing||(t.search=e.target.value)}}})])])}),[],!1,null,null,null);e.default=component.exports},236:function(t,e,n){"use strict";n.r(e);n(28),n(54);var r={props:{ingredients:{type:Array,required:!0},direction:{type:String,required:!1,default:"down"}},computed:{formatIngredients:function(){for(var i=0;i<this.ingredients.length;i++)this.ingredients[i].name=this.ingredients[i].name.charAt(0).toUpperCase()+this.ingredients[i].name.slice(1).toLowerCase();return this.ingredients}},methods:{collapse:function(){"up"===this.direction?this.direction="down":this.direction="up"}}},l=n(44),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex w-full"},[n("div",{staticClass:"hidden md:flex flex-col w-full"},[t._m(0),t._v(" "),n("ul",{staticClass:"flex flex-col w-full justify-center"},t._l(t.formatIngredients,(function(e){return n("li",{key:e.name,staticClass:"flex flex-col items-center justify-start w-full p-2"},[n("p",{staticClass:"font-bold"},[t._v(t._s(e.name))]),t._v(" "),n("p",[n("span",{staticClass:"italic"},[t._v("Amount:")]),t._v(" "+t._s(e.amount)+"\n          "+t._s(e.unit)+"\n        ")]),t._v(" "),e.optional?n("p",{staticClass:"italic bold"},[t._v("\n          Optional\n        ")]):t._e()])})),0)]),t._v(" "),n("div",{staticClass:"pt-4 md:hidden flex flex-col w-full justify-center items-center"},[n("div",{staticClass:"flex flex-row w-full justify-center",on:{click:t.collapse}},[n("p",{staticClass:"flex w-1/2 justify-end pb-2 text-2xl text-center"},[t._v("Ingredients")]),t._v(" "),n("div",{staticClass:"w-1/5 p-2"},[n("font-awesome-icon",{attrs:{icon:["fas","arrow-"+t.direction]}})],1)]),t._v(" "),n("ul",{staticClass:"flex flex-col w-full justify-center",class:{hidden:"up"===t.direction}},t._l(t.formatIngredients,(function(e){return n("li",{key:e.name,staticClass:"flex flex-col items-center justify-start w-full"},[n("p",{staticClass:"font-bold"},[t._v(t._s(e.name))]),t._v(" "),n("p",[n("span",{staticClass:"italic"},[t._v("Amount:")]),t._v(" "+t._s(e.amount)+"\n          "+t._s(e.unit)+"\n        ")])])})),0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row w-full justify-center"},[n("p",{staticClass:"pb-2 text-2xl w-full text-center"},[t._v("Ingredients")])])}],!1,null,null,null);e.default=component.exports},237:function(t,e,n){"use strict";n.r(e);var r={props:{steps:{type:Array,required:!0},direction:{type:String,required:!1,default:"down"}},methods:{collapse:function(){"up"===this.direction?this.direction="down":this.direction="up"}}},l=n(44),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex w-full"},[n("div",{staticClass:"hidden md:flex flex-col w-full"},[t._m(0),t._v(" "),n("div",{staticClass:"flex w-full justify-center"},[n("ul",{staticClass:"flex flex-col w-2/3"},t._l(t.steps,(function(e){return n("li",{key:e.name,staticClass:"flex flex-row w-full p-4 break-words"},[n("i",{staticClass:"pr-2"},[t._v(t._s(e.number))]),t._v(" "),n("p",{staticClass:"font-bold"},[t._v(t._s(e.name))])])})),0)])]),t._v(" "),n("div",{staticClass:"pt-4 md:hidden flex flex-col w-full justify-center items-center"},[n("div",{staticClass:"flex flex-row w-full justify-center",on:{click:t.collapse}},[n("p",{staticClass:"flex w-1/3 pb-2 text-2xl justify-end"},[t._v("Steps")]),t._v(" "),n("div",{staticClass:"w-1/5 p-2"},[n("font-awesome-icon",{attrs:{icon:["fas","arrow-"+t.direction]}})],1)]),t._v(" "),n("div",{staticClass:"flex w-full justify-center"},[n("ul",{staticClass:"flex flex-col w-full",class:{hidden:"up"===t.direction}},t._l(t.steps,(function(e){return n("li",{key:e.name,staticClass:"flex flex-row w-full p-4"},[n("i",{staticClass:"pr-2"},[t._v(t._s(e.number))]),t._v(" "),n("p",{staticClass:"font-bold"},[t._v(t._s(e.name))])])})),0)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row w-full justify-center"},[n("p",{staticClass:"pb-2 text-2xl w-full text-center"},[t._v("Steps")])])}],!1,null,null,null);e.default=component.exports},238:function(t,e,n){"use strict";n.r(e);var r={methods:{home:function(){this.$router.push("/")}}},l=n(44),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md:rounded-md md:border-2 md:border-indigo-600 md:hover:bg-indigo-300"},[n("button",{staticClass:"md:p-4",on:{click:t.home}},[t._v("Home")])])}),[],!1,null,null,null);e.default=component.exports},239:function(t,e,n){"use strict";n.r(e);var r=n(236),l=n(237),o=n(238),c={components:{Sidebar:n(234).default,Home:o.default,Ingredients:r.default,Steps:l.default},props:{title:{type:String,required:!0},ingredients:{type:Array,required:!0},steps:{type:Array,required:!0}}},d=n(44),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col md:flex-row h-full"},[n("Sidebar"),t._v(" "),n("div",{staticClass:"md:pt-10 flex flex-col w-full md:border-l-4"},[n("div",{staticClass:"flex w-full justify-start md:justify-end"},[n("div",{staticClass:"pl-1 md:pr-4"},[n("Home")],1)]),t._v(" "),n("div",{staticClass:"flex w-full justify-center h-5 md:h-10"},[n("p",{staticClass:"font-bold text-xl md:text-3xl underline text-center"},[t._v("\n        "+t._s(t.title)+"\n      ")])]),t._v(" "),n("div",{staticClass:"flex flex-col md:flex-row"},[n("div",{staticClass:"flex w-full md:w-1/2 md:pt-10"},[n("Ingredients",{attrs:{ingredients:t.ingredients,direction:"down"}})],1),t._v(" "),n("div",{staticClass:"flex w-full md:w-1/2 md:pt-10"},[n("Steps",{attrs:{steps:t.steps,direction:"up"}})],1)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Sidebar:n(234).default,Home:n(238).default,Ingredients:n(236).default,Steps:n(237).default})},260:function(t,e,n){"use strict";n.r(e);var r={head:function(){return{title:"Red Lentil Curry"}},components:{Recipe:n(239).default},data:function(){return{ingredients:[{name:"Coconut oil",amount:1,unit:"tablespoon"},{name:"Cumin powder",amount:1,unit:"tablespoon"},{name:"Cardamom powder",amount:1,unit:"tablespoon"},{name:"Garam Masala powder",amount:1,unit:"tablespoon"},{name:"Garlic",amount:12,unit:"cloves"},{name:"crushed tomatoes",amount:28,unit:"ounces"},{name:"chooped ginger",amount:2,unit:"tablespoons"},{name:"turmeric",amount:1,unit:"tablespoon"},{name:"sea salt",amount:2,unit:"teaspoons"},{name:"Dried red lentils",amount:1,unit:"cup"},{name:"cayenne powder",amount:1,unit:"teaspoon",optional:!0},{name:"water",amount:1,unit:"cups"},{name:"vegetable broth",amount:2,unit:"cups"},{name:"coconut milk",amount:15,unit:"ounces"},{name:"cherry tomatoes",amount:15,unit:void 0},{name:"cilantro",amount:1,unit:"cup"}],steps:[{name:"Heat the coconut oil in a large pot or skillet over medium-high heat. Add the cumin, cardamom and garam masala powder and toast until fragrant, about 30 - 45 seconds. Add the garlic to the pot and let it brown, about 2 minutes.",number:1},{name:"Add the can of crushed tomatoes, ginger, turmeric, and sea salt to the pot and cook, stirring the pot a few times, for 5 minutes. Add the lentils and, if using, the cayenne powder, and the water and the broth to the pot and bring it to a boil. Reduce the heat to low, cover the pot, and let it simmer for 35-40 minutes, or until the lentils are soft. Stir the pot a few times to prevent the lentils from sticking to the bottom. If the curry starts to look dry, add an extra ½ – 1 cup of water.",number:2},{name:"Once the lentils are soft and the curry is thick, add the coconut milk and bring the pot back to a simmer. Remove the pot from the heat.",number:3},{name:"Using a ladle scoop some curry in a bowl and then top the curry with some fresh halved cherry tomatoes and cilantro.",number:4}]}}},l=n(44),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Recipe",{attrs:{ingredients:t.ingredients,steps:t.steps,title:"Red Lentil Curry"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Recipe:n(239).default})}}]);