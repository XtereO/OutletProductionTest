(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[4],{120:function(e,c,s){"use strict";var t=s(54),i=s(1);c.a=function(e){return e.map((function(e){return Object(i.jsx)(t.a,{image:e.image,is_accessory:!0,price:e.price,id:e.id,title:e.title})}))}},124:function(e,c,s){"use strict";s.r(c);var t=s(25),i=s(22),a=s(66),r=s(0),l=s(53),n=s(1),j=function(e){Object(r.useEffect)((function(){e.setAccessoryThunk(e.match.params.id)}),[e.match.params.id]);var c=[{title:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",value:e.category.title},{title:"\u0426\u0435\u043d\u0430",value:e.price}].map((function(e){return Object(n.jsxs)("li",{className:"list-group-item center",children:[e.title," - ",e.value]})}));return Object(n.jsxs)("div",{className:"",children:[Object(n.jsx)("span",{className:"text-secondary",children:e.is_available?"\u0415\u0441\u0442\u044c \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438":"\u041d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"}),Object(n.jsxs)("h3",{children:["\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440 - ",e.title]}),Object(n.jsxs)("div",{className:"row mx-2",children:[Object(n.jsx)("div",{className:"col-md-6 card py-4 mt-1",children:Object(n.jsx)("img",{src:e.image,className:"w-100"})}),Object(n.jsx)("div",{className:"col-md-6 mt-1",children:Object(n.jsxs)("ul",{className:"list-group",children:[Object(n.jsx)("li",{className:"list-group-item",style:{background:"#007BFF",color:"white"},children:"\u041e\u0431\u0449\u0438\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438"}),c]})})]}),e.suggested.length>0&&Object(n.jsxs)("div",{className:"m-2",children:[Object(n.jsx)("div",{children:Object(n.jsx)("h3",{children:"\u0422\u0430\u043a\u0436\u0435 \u0432\u0430\u0441 \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432\u0430\u0442\u044c:"})}),Object(n.jsx)("div",{children:Object(n.jsx)(l.a,{content:e.suggested,limit:!0})})]})]})},d=s(11),u=s(120);c.default=Object(i.d)(Object(t.b)((function(e){return{title:e.accessory.title,price:e.accessory.price,image:e.accessory.image,category:e.accessory.category,is_available:e.accessory.is_available,suggested:Object(u.a)(e.accessory.suggested)}}),{setAccessoryThunk:a.b}),d.f)(j)}}]);
//# sourceMappingURL=4.3fb2d271.chunk.js.map