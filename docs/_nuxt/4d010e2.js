(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{226:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},227:function(t,e,r){"use strict";var n=r(6),l=r(228).trim;n({target:"String",proto:!0,forced:r(229)("trim")},{trim:function(){return l(this)}})},228:function(t,e,r){var n=r(3),l=r(21),o=r(11),c=r(226),f=n("".replace),d="["+c+"]",h=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),m=function(t){return function(e){var r=o(l(e));return 1&t&&(r=f(r,h,"")),2&t&&(r=f(r,v,"")),r}};t.exports={start:m(1),end:m(2),trim:m(3)}},229:function(t,e,r){var n=r(70).PROPER,l=r(5),o=r(226);t.exports=function(t){return l((function(){return!!o[t]()||"​᠎"!=="​᠎"[t]()||n&&o[t].name!==t}))}},230:function(t,e,r){"use strict";r.r(e);r(27),r(125),r(227),r(57),r(58),r(53),r(16),r(26),r(54),r(34),r(33),r(55),r(56),r(35);function n(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(f)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var o={data:function(){return{search:""}},props:{data:{type:Array,required:!0},field:{type:String,required:!0}},methods:{filter:function(){var t=[];if(void 0===this.search)return this.data;if(""===this.search.trim())return this.data;var e,r=n(this.data);try{for(r.s();!(e=r.n()).done;){var dt=e.value;dt[this.field]&&dt[this.field].toLowerCase().includes(this.search.toLowerCase())&&t.push(dt)}}catch(t){r.e(t)}finally{r.f()}this.$emit("filtered-dt",t)}}},c=r(43),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"Search for recipe"},domProps:{value:t.search},on:{keydown:t.filter,input:function(e){e.target.composing||(t.search=e.target.value)}}})}),[],!1,null,null,null);e.default=component.exports},232:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{mobile:{hovering:!1},list:[{link:"red-lentil-curry",name:"Red Lentil Curry",tags:["curry","indian","lentils"]}],filteredList:[]}},mounted:function(){this.filteredList=this.list},methods:{filteredResult:function(t){this.filteredList=t}}},l=r(43),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"md:flex md:flex-col p-2 w-60 pt-4 hidden overflow-y-scroll"},[r("div",{staticClass:"pt-2 pb-2"},[r("Search",{attrs:{data:t.list,field:"name"},on:{"filtered-dt":t.filteredResult}})],1),t._v(" "),r("p",{staticClass:"text-2xl font-extrabold"},[t._v("Recipes")]),t._v(" "),r("div",{staticClass:"flex flex-col items-center pt-8"},[r("ul",{staticClass:"h-screen"},t._l(t.filteredList,(function(e){return r("li",{key:e.name,staticClass:"break-words hover:text-blue-500 font-semibold p-2"},[r("a",{attrs:{href:"recipes/"+e.link}},[t._v(t._s(e.name))])])})),0)])]),t._v(" "),r("div",{staticClass:"flex w-full md:hidden"},[r("div",{staticClass:"flex flex-col w-full align-middle"},[r("div",{staticClass:"flex flex-row w-full bg-gray-100"},[r("p",{staticClass:"w-min h-full p-1 pr-2 text-2xl font-extrabold",on:{click:function(e){t.mobile.hovering=!t.mobile.hovering}}},[t._v("\n          Recipes\n        ")])]),t._v(" "),r("ul",{staticClass:"pt-4 p-1 overflow-y-scroll m-h-32",class:{hidden:!t.mobile.hovering}},[r("li",{staticClass:"break-words hover:text-blue-500 font-semibold"},[r("Search",{staticClass:"w-1/2 justify-end\t",attrs:{data:t.list,field:"name"},on:{"filtered-dt":t.filteredResult}})],1),t._v(" "),t._l(t.filteredList,(function(e){return r("li",{key:e.name,staticClass:"break-words hover:text-blue-500 font-semibold"},[r("a",{attrs:{href:"recipes/"+e.link}},[t._v(t._s(e.name))])])}))],2)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Search:r(230).default})}}]);