(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[3],{119:function(e,s,t){"use strict";var c=t(54),r=t(1);s.a=function(e){return e.map((function(e){return Object(r.jsx)(c.a,{image:e.image,is_accessory:!0,price:e.price,id:e.id,title:e.title})}))}},121:function(e,s,t){"use strict";t.r(s);var c=t(0),r=t(4),a=t(1),o=function(e){return Object(a.jsx)("div",{className:"w-100",children:Object(a.jsx)("div",{className:"",children:Object(a.jsxs)("select",{style:{fontSize:"1.3em"},className:"form-control",onChange:function(s){e.setAccessory(Object(r.a)(Object(r.a)({},e.filters),{},{sort_by_price:s.target.value}),1)},children:[Object(a.jsx)("option",{value:"null",children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u041d\u043e\u0432\u044b\u0435"}),Object(a.jsx)("option",{value:"true",children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u041f\u043e\u0434\u0435\u0448\u0435\u0432\u043b\u0435"}),Object(a.jsx)("option",{value:"false",children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u041f\u043e\u0434\u043e\u0440\u043e\u0436\u0435"})]})})})},i=t(38),n=function(e){return Object(c.useEffect)((function(){e.setCategorysThunk()}),[]),Object(c.useEffect)((function(){e.setAccessorysThunk({category:e.match.params.id,sort_by_price:null},1)}),[e.match.params.id]),Object(a.jsx)("div",{children:Object(a.jsx)(i.a,{url:"/accessuars",topic:"\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b",mainFilter:e.categorys,otherFilters:o({filters:e.filters,setAccessory:e.setAccessorysThunk}),page:e.page,totalCount:e.totalCount,assorty:e.accessorys,setAssorty:e.setAccessorysThunk,allFilters:e.filters})})},u=t(20),l=t(30),y=t(65),f=t(11),j=t(119);s.default=Object(u.d)(Object(l.b)((function(e){return{accessorys:Object(j.a)(e.accessorys.accessorys),filters:e.accessorys.filters,categorys:e.accessorys.categorys,totalCount:e.accessorys.totalCount,page:e.accessorys.page}}),{setAccessorysThunk:y.b,setCategorysThunk:y.c}),f.f)(n)}}]);
//# sourceMappingURL=3.a428a12f.chunk.js.map