(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{103:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),r=c(20),n=c.n(r),i=(c(73),c(40)),l=(c.p,c(74),c(75),c(108)),j=c(105),o=c(106),d=c(11),b=c(1),m=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(l.a,{bg:"primary",fixed:"top",collapseOnSelect:!0,expand:"md",variant:"primary",children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(l.a.Brand,{children:Object(b.jsx)(d.b,{to:"aboutus",className:"NavbarLink mr-4",children:"OutletSPb"})}),Object(b.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(b.jsx)(l.a.Collapse,{id:"responsive-navbar-nav",children:Object(b.jsxs)(o.a,{className:"mr-auto",children:[Object(b.jsx)(o.a.Link,{children:Object(b.jsx)(d.b,{to:"/rims",className:"NavbarLink mr-4",children:"\u041e\u043f\u0440\u0430\u0432\u044b"})}),Object(b.jsx)(o.a.Link,{children:Object(b.jsx)(d.b,{to:"/sunglasses",className:"NavbarLink mr-4",children:"\u0421\u043e\u043b\u043d\u0446\u0435\u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0435 \u043e\u0447\u043a\u0438"})}),Object(b.jsx)(o.a.Link,{children:Object(b.jsx)(d.b,{to:"/lens",className:"NavbarLink mr-4",children:"\u041b\u0438\u043d\u0437\u044b"})}),Object(b.jsx)(o.a.Link,{children:Object(b.jsx)(d.b,{to:"/accessuars",className:"NavbarLink mr-4",children:"\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b"})})]})})]})})})},h=c(107),u=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(h.a,{children:[Object(b.jsxs)(h.a.Item,{children:[Object(b.jsx)("img",{src:"https://www.logosaum.com/uploads/posts/2019-11/1572872810_s1200-1.jpg",className:"w-100 h-50"}),Object(b.jsxs)(h.a.Caption,{children:[Object(b.jsx)("h3",{children:"Forest "}),Object(b.jsx)("p",{children:"youuuuu its forest"})]})]}),Object(b.jsxs)(h.a.Item,{children:[Object(b.jsx)("img",{src:"https://www.metislighting.it/wp/wp-content/uploads/Brioni.jpg",className:"w-100 h-50"}),Object(b.jsxs)(h.a.Caption,{children:[Object(b.jsx)("h3",{children:"Brioni"}),Object(b.jsx)("p",{children:"Simple brand"})]})]}),Object(b.jsxs)(h.a.Item,{children:[Object(b.jsx)("img",{src:"https://i.pinimg.com/originals/e8/06/ed/e806ed214d72766ec572234c138cb272.jpg",className:"w-100 h-50"}),Object(b.jsxs)(h.a.Caption,{children:[Object(b.jsx)("h3",{children:"Gucci"}),Object(b.jsx)("p",{children:"Not Simple brand"})]})]})]})})},O=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"btn btn-outline-primary",children:"Prev"}),Object(b.jsx)("button",{className:"btn btn-light",children:"1"}),Object(b.jsx)("button",{className:"btn btn-primary",children:"2"}),Object(b.jsx)("button",{className:"btn btn-outline-primary",children:"Next"})]})},x=c(15),p=function(e){var t=e.content;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"row",children:Object(x.a)(t).slice(0,3)}),Object(b.jsx)("div",{className:"row",children:Object(x.a)(t).slice(3,6)}),Object(b.jsx)("div",{className:"row",children:Object(x.a)(t).slice(6,9)})]})},f=function(e){var t=e.mainFilter.map((function(t){return Object(b.jsx)("li",{className:"list-group-item center",children:Object(b.jsx)(d.b,{to:"".concat(e.url,"/").concat(t.id),className:"text-dark",style:{textDecoration:"none"},children:t.title})})}));return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h3",{children:e.topic}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-3 mt-2",children:Object(b.jsx)("ul",{className:"list-group",children:t})}),Object(b.jsxs)("div",{className:"col-md-9 mt-2",children:[Object(b.jsx)("div",{children:e.otherFilters}),Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{content:e.assorty}),Object(b.jsx)("div",{className:"right mt-4",children:Object(b.jsx)(O,{})})]})]})]})]})},v=c(7),g=c(23),N=c(16),w=c(50),y=s.a.memo((function(e){return Object(a.useEffect)((function(){}),[e.filters]),Object(b.jsx)(w.b,{initialValues:{color:e.filters.color,material:e.filters.material,shape:e.filters.shape,brand:e.filters.brand,is_available:e.filters.is_available,sort_by_price:e.filters.sort_by_price,colors:e.allParams.colors,materials:e.allParams.materials,shapes:e.allParams.shapes,brands:e.allParams.brands},onSubmit:function(t){var c={color:t.color,material:t.material,shape:t.shape,brand:t.brand,is_available:t.is_available,sort_by_price:t.sort_by_price,gender:e.filters.gender};e.setFilter(c,1)},children:function(e){var t=e.values,c=e.handleSubmit,a=e.handleChange,s=t.colors.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.title})})),r=t.materials.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.title})})),n=t.shapes.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.title})})),i=t.brands.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.title})}));return Object(b.jsxs)("form",{onSubmit:c,children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-md-4 d-flex center",children:[Object(b.jsx)("div",{className:"m-2",children:Object(b.jsx)("label",{htmlFor:"color",children:Object(b.jsx)("h5",{children:"\u0426\u0432\u0435\u0442"})})}),Object(b.jsx)("div",{children:Object(b.jsx)("select",{id:"color",name:"color",className:"form-control",onChange:a,children:s})})]}),Object(b.jsxs)("div",{className:"col-md-4 d-flex center",children:[Object(b.jsx)("div",{className:"m-2",children:Object(b.jsx)("label",{htmlFor:"material",children:Object(b.jsx)("h5",{children:"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b"})})}),Object(b.jsx)("div",{children:Object(b.jsx)("select",{id:"material",name:"material",className:"form-control",onChange:a,children:r})})]}),Object(b.jsxs)("div",{className:"col-md-4 d-flex center",children:[Object(b.jsx)("div",{className:"m-2",children:Object(b.jsx)("label",{htmlFor:"shape",children:Object(b.jsx)("h5",{children:"\u0424\u043e\u0440\u043c\u0430"})})}),Object(b.jsx)("div",{children:Object(b.jsx)("select",{id:"shape",name:"shape",className:"form-control",onChange:a,children:n})})]})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-md-4 d-flex center",children:[Object(b.jsx)("div",{className:"m-2",children:Object(b.jsx)("label",{htmlFor:"brand",children:Object(b.jsx)("h5",{children:"\u0411\u0440\u044d\u043d\u0434"})})}),Object(b.jsx)("div",{children:Object(b.jsx)("select",{id:"brand",name:"brand",className:"form-control",onChange:a,children:i})})]}),Object(b.jsx)("div",{className:"col-md-4 d-flex center",children:Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{className:"m-2",style:{fontSize:"1.4em"},children:"\u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"}),Object(b.jsx)(w.a,{type:"checkbox",name:"is_available"})]})}),Object(b.jsx)("div",{className:"col-md-4 d-flex center",children:Object(b.jsx)("div",{children:Object(b.jsxs)("select",{name:"sort_by_price",onChange:a,className:"form-control",children:[Object(b.jsx)("option",{value:"null",children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u041d\u043e\u0432\u044b\u0435"}),Object(b.jsx)("option",{value:"true",children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u041f\u043e\u0434\u0435\u0448\u0435\u0432\u043b\u0435"}),Object(b.jsx)("option",{value:"false",children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u041f\u043e\u0434\u043e\u0440\u043e\u0436\u0435"})]})})})]}),Object(b.jsx)("button",{className:"btn btn-outline-primary mt-2 w-100",children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"})]})}})})),_=s.a.memo((function(e){return Object(a.useEffect)((function(){e.setRimsThunk(Object(N.a)(Object(N.a)({},e.filters),{},{gender:e.match.params.id?e.match.params.id:0}),1)}),[e.match.params.id]),Object(a.useEffect)((function(){e.setAllParamsThunk()}),[]),Object(b.jsx)("div",{children:Object(b.jsx)(f,{topic:"\u041e\u043f\u0440\u0430\u0432\u044b",allParams:e.allParams,mainFilter:e.allParams.genders,page:e.page,totalCount:e.totalCount,assorty:e.rims,setAssorty:e.setRimsThunk,url:"/rims",otherFilters:y({filters:e.filters,allParams:e.allParams,setFilter:e.setRimsThunk})})})})),k=c(39),C=c(31),P=c.n(C),S=c(49),F=c(65),L=c.n(F),T=c(66),R=c.n(T).a.get("csrftoken"),E=L.a.create({withCredentials:!0,baseURL:"http://127.0.0.1:8000/api/",headers:{"X-CSRFToken":R}}),I=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return E.get("glassesrims/?is_sunglasses=".concat(c,"&is_available=").concat(e.is_available,"&brand=").concat(e.brand,"&color=").concat(e.color,"&shape=").concat(e.shape,"&material=").concat(e.material,"&gender=").concat(e.gender,"&sort_price=").concat(e.sort_by_price))},A=function(){return E.get("colors/")},B=function(){return E.get("materials/")},M=function(){return E.get("shapes/")},D=function(){return E.get("brands/")},J=function(){return E.get("genders/")},z="rimsReducer/SET_RIMS",G="rimsReducer/SET_ALL_PARAMS",U={allParams:{colors:[{title:"\u0412\u0441\u0435",id:0}],materials:[{title:"\u0412\u0441\u0435",id:0}],shapes:[{title:"\u0412\u0441\u0435",id:0}],genders:[{title:"\u0412\u0441\u0435",id:0}],brands:[{title:"\u0412\u0441\u0435",id:0,description:"",image:""}]},filters:{color:0,material:0,shape:0,brand:0,is_available:!0,gender:0,sort_by_price:null},page:1,totalCount:0,rims:[]},V=function(e,t,c,a){return{type:z,rims:e,filters:t,page:c,totalCount:a}},X=function(e){return{type:G,allParams:e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(N.a)(Object(N.a)({},e),{},{totalCount:t.totalCount,rims:Object(x.a)(t.rims),filters:Object(N.a)({},t.filters),page:t.page});case G:return Object(N.a)(Object(N.a)({},e),{},{allParams:Object(N.a)({},t.allParams)});default:return e}},H=function(e){var t=Object(a.useState)(!1),c=Object(i.a)(t,2),s=c[0],r=c[1],n=function(){r(!s)};return Object(b.jsx)("div",{className:"col-md-4 mt-2",children:Object(b.jsxs)("div",{className:"card",onMouseEnter:n,onMouseLeave:n,children:[Object(b.jsx)("div",{className:"center",children:Object(b.jsx)("img",{src:e.image,className:s?"ItemOn":"ItemExit"})}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsxs)("span",{className:"text-secondary",children:["\u0410\u0440\u0442\u0438\u043a\u0443\u043b ",e.article]}),Object(b.jsx)("br",{}),"\u0426\u0435\u043d\u0430 ",e.price," \u20bd"]}),Object(b.jsxs)("div",{className:"right",children:[Object(b.jsx)("br",{}),s?Object(b.jsx)(d.b,{to:"/rim/".concat(e.id),children:Object(b.jsx)("button",{className:"btn btn-warning text-white",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})}):e.brand]})]})]})})},K=function(e){return e.map((function(e){return Object(b.jsx)(H,{brand:e.brand.title,image:e.image,price:e.price,article:e.article,id:e.id})}))},Q=Object(g.d)(v.e,Object(k.b)((function(e){return{allParams:e.rims.allParams,filters:e.rims.filters,page:e.rims.page,totalCount:e.rims.totalCount,rims:K(e.rims.rims)}}),{setRimsThunk:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(){var c=Object(S.a)(P.a.mark((function c(a){var s;return P.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,I(e,t);case 2:s=c.sent,a(V(s.data.results,e,t,s.data.count));case 4:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()},setAllParamsThunk:function(){return function(){var e=Object(S.a)(P.a.mark((function e(t){var c,a,s,r,n,i;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:return c=e.sent,e.next=5,J();case 5:return a=e.sent,e.next=8,M();case 8:return s=e.sent,e.next=11,A();case 11:return r=e.sent,e.next=14,B();case 14:n=e.sent,i={brands:[{title:"\u0412\u0441\u0435",id:0}].concat(Object(x.a)(c.data)),genders:[{title:"\u0412\u0441\u0435",id:0}].concat(Object(x.a)(a.data)),shapes:[{title:"\u0412\u0441\u0435",id:0}].concat(Object(x.a)(s.data)),colors:[{title:"\u0412\u0441\u0435",id:0}].concat(Object(x.a)(r.data)),materials:[{title:"\u0412\u0441\u0435",id:0}].concat(Object(x.a)(n.data))},t(X(i));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(_),W=c(67),Y=Object(g.c)({rims:q}),Z=Object(g.e)(Y,Object(g.a)(W.a));var $=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2);return t[0],t[1],Object(b.jsx)(d.a,{children:Object(b.jsx)(k.a,{store:Z,children:Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(m,{})}),Object(b.jsx)(u,{}),Object(b.jsx)("div",{className:"mt-4",children:Object(b.jsx)(v.a,{path:"/rims/:id?",render:function(){return Object(b.jsx)(Q,{})}})})]})})})},ee=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,109)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),r(e),n(e)}))};n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)($,{})}),document.getElementById("root")),ee()},73:function(e,t,c){},74:function(e,t,c){}},[[103,1,2]]]);
//# sourceMappingURL=main.817acc2e.chunk.js.map