(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{235:function(t,e,n){"use strict";n.r(e);n(28),n(54);var l={props:{ingredients:{type:Array,required:!0},direction:{type:String,required:!1,default:"down"}},computed:{formatIngredients:function(){for(var i=0;i<this.ingredients.length;i++)this.ingredients[i].name=this.ingredients[i].name.charAt(0).toUpperCase()+this.ingredients[i].name.slice(1).toLowerCase();return this.ingredients}},methods:{collapse:function(){"up"===this.direction?this.direction="down":this.direction="up"}}},r=n(44),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex w-full"},[n("div",{staticClass:"hidden md:flex flex-col w-full"},[t._m(0),t._v(" "),n("ul",{staticClass:"flex flex-col w-full justify-center"},t._l(t.formatIngredients,(function(e){return n("li",{key:e.name,staticClass:"flex flex-col items-center justify-start w-full p-2"},[n("p",{staticClass:"font-bold"},[t._v(t._s(e.name))]),t._v(" "),n("p",[n("span",{staticClass:"italic"},[t._v("Amount:")]),t._v(" "+t._s(e.amount)+"\n          "+t._s(e.unit)+"\n        ")]),t._v(" "),e.optional?n("p",{staticClass:"italic bold"},[t._v("\n          Optional\n        ")]):t._e()])})),0)]),t._v(" "),n("div",{staticClass:"pt-4 md:hidden flex flex-col w-full justify-center items-center"},[n("div",{staticClass:"flex flex-row w-full justify-center",on:{click:t.collapse}},[n("p",{staticClass:"flex w-1/2 justify-end pb-2 text-2xl text-center"},[t._v("Ingredients")]),t._v(" "),n("div",{staticClass:"w-1/5 p-2"},[n("font-awesome-icon",{attrs:{icon:["fas","arrow-"+t.direction]}})],1)]),t._v(" "),n("ul",{staticClass:"flex flex-col w-full justify-center",class:{hidden:"up"===t.direction}},t._l(t.formatIngredients,(function(e){return n("li",{key:e.name,staticClass:"flex flex-col items-center justify-start w-full"},[n("p",{staticClass:"font-bold"},[t._v(t._s(e.name))]),t._v(" "),n("p",[n("span",{staticClass:"italic"},[t._v("Amount:")]),t._v(" "+t._s(e.amount)+"\n          "+t._s(e.unit)+"\n        ")])])})),0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row w-full justify-center"},[n("p",{staticClass:"pb-2 text-2xl w-full text-center"},[t._v("Ingredients")])])}],!1,null,null,null);e.default=component.exports}}]);