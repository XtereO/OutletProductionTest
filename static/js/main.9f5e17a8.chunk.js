(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{103:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s.n(c),r=s(25),n=s.n(r),i=(s(73),s(21)),l=(s.p,s(74),s(75),s(108)),o=s(105),d=s(106),j=s(13),u=s(1),b=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(l.a,{bg:"primary",fixed:"top",collapseOnSelect:!0,expand:"md",variant:"dark",children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(l.a.Brand,{children:Object(u.jsx)(j.b,{to:"/aboutus",style:{fontSize:"1.5em"},className:"NavbarLink mr-4",children:"Outlet-SPb"})}),Object(u.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(u.jsx)(l.a.Collapse,{id:"responsive-navbar-nav",children:Object(u.jsxs)(d.a,{className:"mr-auto",children:[Object(u.jsx)(d.a.Link,{children:Object(u.jsx)(j.b,{to:"/rims/0",className:"NavbarLink mr-4",children:"\u041e\u043f\u0440\u0430\u0432\u044b"})}),Object(u.jsx)(d.a.Link,{children:Object(u.jsx)(j.b,{to:"/sunglasses/0",className:"NavbarLink mr-4",children:"\u0421\u043e\u043b\u043d\u0446\u0435\u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0435 \u043e\u0447\u043a\u0438"})}),Object(u.jsx)(d.a.Link,{children:Object(u.jsx)(j.b,{to:"/lens",className:"NavbarLink mr-4",children:"\u041b\u0438\u043d\u0437\u044b"})}),Object(u.jsx)(d.a.Link,{children:Object(u.jsx)(j.b,{to:"/accessuars/0",className:"NavbarLink mr-4",children:"\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b"})})]})})]})})})},m=s(107),h=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(m.a,{children:[Object(u.jsxs)(m.a.Item,{children:[Object(u.jsx)("img",{src:"https://www.logosaum.com/uploads/posts/2019-11/1572872810_s1200-1.jpg",className:"w-100 h-50"}),Object(u.jsxs)(m.a.Caption,{children:[Object(u.jsx)("h3",{children:"Forest "}),Object(u.jsx)("p",{children:"youuuuu its forest"})]})]}),Object(u.jsxs)(m.a.Item,{children:[Object(u.jsx)("img",{src:"https://www.metislighting.it/wp/wp-content/uploads/Brioni.jpg",className:"w-100 h-50"}),Object(u.jsxs)(m.a.Caption,{children:[Object(u.jsx)("h3",{children:"Brioni"}),Object(u.jsx)("p",{children:"Simple brand"})]})]}),Object(u.jsxs)(m.a.Item,{children:[Object(u.jsx)("img",{src:"https://i.pinimg.com/originals/e8/06/ed/e806ed214d72766ec572234c138cb272.jpg",className:"w-100 h-50"}),Object(u.jsxs)(m.a.Caption,{children:[Object(u.jsx)("h3",{children:"Gucci"}),Object(u.jsx)("p",{children:"Not Simple brand"})]})]})]})})},O=s(8),x=s(12),p=s(4),f=function(e){var t=Object(c.useState)(e.page),s=Object(i.a)(t,2),a=s[0],r=s[1];Object(c.useEffect)((function(){e.setPage(e.filters,a);for(var t=[],s=function(e){var s=null;s=a==e?Object(u.jsx)("button",{className:"btn btn-light",onClick:function(){r(e)},children:e},e):Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){r(e)},children:e},e),t.push(s)},c=1;c<=Math.ceil(e.totalCount/9);c++)s(c);v([].concat(t).slice((h-1)*l,h*l))}),[a,e.totalCount]);for(var n=[],l=5,o=function(e){var t=null;t=a==e?Object(u.jsx)("button",{className:"btn btn-light",onClick:function(){r(e)},children:e},e):Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){r(e)},children:e},e),n.push(t)},d=1;d<=Math.ceil(e.totalCount/9);d++)o(d);for(var j=1;e.page>l*j;)j++;var b=Object(c.useState)(j),m=Object(i.a)(b,2),h=m[0],O=m[1],x=Object(c.useState)([].concat(n).slice(l*(j-1),l*j)),p=Object(i.a)(x,2),f=p[0],v=p[1];return Object(u.jsxs)("div",{children:[h>1&&Object(u.jsx)("button",{onClick:function(){var e=h-1;O(e);var t=[].concat(n).slice((e-1)*l,(e-1)*l+l);v(t)},className:"btn btn-outline-primary",children:"<"}),f,h*l<Math.ceil(e.totalCount/9)&&Object(u.jsx)("button",{onClick:function(){var e=h+1;O(e);var t=[].concat(n).slice((e-1)*l,(e-1)*l+l);v(t)},className:"btn btn-outline-primary",children:">"})]})},v=s(5),g=function(e){var t=e.content;return Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("div",{className:"row",children:Object(v.a)(t).slice(0,3)}),e.limit?Object(u.jsx)("div",{}):Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"row",children:Object(v.a)(t).slice(3,6)}),Object(u.jsx)("div",{className:"row",children:Object(v.a)(t).slice(6,9)})]})]})},y=function(e){var t=e.mainFilter.map((function(t){return Object(u.jsx)(j.b,{to:"".concat(e.url,"/").concat(t.id),className:"list-group-item center ",style:{textDecoration:"none"},children:t.title})}));return Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("h3",{children:e.topic}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-3 mt-2",children:Object(u.jsx)("ul",{className:"list-group",children:t})}),Object(u.jsxs)("div",{className:"col-md-9 mt-2",children:[Object(u.jsx)("div",{children:e.otherFilters}),Object(u.jsxs)("div",{children:[Object(u.jsx)(g,{content:e.assorty}),Object(u.jsx)("div",{className:"right mt-4",children:e.allFilters&&e.setAssorty&&Object(u.jsx)(f,{page:e.page,totalCount:e.totalCount,filters:e.allFilters,setPage:e.setAssorty})})]})]})]})]})},N=s(50),w=function(e){var t=Object(c.useState)(e.allParams),s=Object(i.a)(t,2),a=s[0],r=s[1];return Object(c.useEffect)((function(){r(e.allParams)}),[e.allParams]),Object(u.jsx)(N.b,{initialValues:{color:e.filters.color,material:e.filters.material,shape:e.filters.shape,brand:e.filters.brand,is_available:e.filters.is_available,sort_by_price:e.filters.sort_by_price},onSubmit:function(t){var s={color:t.color,material:t.material,shape:t.shape,brand:t.brand,is_available:t.is_available,sort_by_price:t.sort_by_price,gender:e.filters.gender};e.setFilter(s,1)},children:function(e){e.values;var t=e.handleSubmit,s=e.handleChange,c=a.colors.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.title})})),r=a.materials.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.title})})),n=a.shapes.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.title})})),i=a.brands.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.title})}));return Object(u.jsxs)("form",{onSubmit:t,children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-md-4 FilterItem",children:[Object(u.jsx)("div",{className:"m-2",children:Object(u.jsx)("label",{htmlFor:"color",children:Object(u.jsx)("h4",{children:"\u0426\u0432\u0435\u0442"})})}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("select",{id:"color",name:"color",style:{fontSize:"1.05em"},className:"form-control",onChange:s,children:c})})]}),Object(u.jsxs)("div",{className:"col-md-4 FilterItem",children:[Object(u.jsx)("div",{className:"m-2",children:Object(u.jsx)("label",{htmlFor:"material",children:Object(u.jsx)("h4",{children:"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b"})})}),Object(u.jsx)("div",{children:Object(u.jsx)("select",{id:"material",name:"material",style:{fontSize:"1.05em"},className:"form-control",onChange:s,children:r})})]}),Object(u.jsx)("div",{className:"col-md-4 mb-2",children:Object(u.jsx)("div",{children:Object(u.jsxs)("select",{name:"sort_by_price",onChange:s,className:"form-control",style:{fontSize:"1.05em"},children:[Object(u.jsx)("option",{value:"null",children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u041d\u043e\u0432\u044b\u0435"}),Object(u.jsx)("option",{value:"true",children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u041f\u043e\u0434\u0435\u0448\u0435\u0432\u043b\u0435"}),Object(u.jsx)("option",{value:"false",children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u041f\u043e\u0434\u043e\u0440\u043e\u0436\u0435"})]})})})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-md-4 FilterItem",children:[Object(u.jsx)("div",{className:"m-2",children:Object(u.jsx)("label",{htmlFor:"brand",children:Object(u.jsx)("h4",{children:"\u0411\u0440\u0435\u043d\u0434"})})}),Object(u.jsx)("div",{children:Object(u.jsx)("select",{id:"brand",name:"brand",style:{fontSize:"1.05em"},className:"form-control",onChange:s,children:i})})]}),Object(u.jsxs)("div",{className:"col-md-4 FilterItem",children:[Object(u.jsx)("div",{className:"m-2",children:Object(u.jsx)("label",{htmlFor:"shape",children:Object(u.jsx)("h4",{children:"\u0424\u043e\u0440\u043c\u0430"})})}),Object(u.jsx)("div",{children:Object(u.jsx)("select",{id:"shape",name:"shape",style:{fontSize:"1.05em"},className:"form-control",onChange:s,children:n})})]}),Object(u.jsx)("div",{className:"col-md-4 d-flex center",children:Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{className:"m-2",style:{fontSize:"1.3em"},children:"\u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"}),Object(u.jsx)(N.a,{type:"checkbox",name:"is_available"})]})})]}),Object(u.jsx)("button",{style:{fontSize:"1.05em"},className:"btn btn-outline-primary mt-2 w-100",children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"})]})}})},k=function(e){return Object(c.useEffect)((function(){e.setRimsThunk(Object(p.a)(Object(p.a)({},e.filters),{},{gender:e.match.params.id?e.match.params.id:0}),1)}),[e.match.params.id]),Object(c.useEffect)((function(){e.setAllParamsThunk()}),[]),Object(u.jsx)("div",{children:Object(u.jsx)(y,{topic:"\u041e\u043f\u0440\u0430\u0432\u044b",allParams:e.allParams,mainFilter:e.allParams.genders,page:e.page,totalCount:e.totalCount,assorty:e.rims,setAssorty:e.setRimsThunk,url:"/rims",otherFilters:w({filters:e.filters,allParams:e.allParams,setFilter:e.setRimsThunk}),allFilters:e.filters})})},_=function(e){var t=function(t,s){e.setRimsThunk(t,s,!0)};return Object(c.useEffect)((function(){e.setRimsThunk(Object(p.a)(Object(p.a)({},e.filters),{},{gender:e.match.params.id?e.match.params.id:0}),1,!0)}),[e.match.params.id]),Object(c.useEffect)((function(){e.setAllParamsThunk()}),[]),Object(u.jsx)("div",{children:Object(u.jsx)(y,{topic:"\u0421\u043e\u043b\u043d\u0446\u0435\u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0435 \u043e\u0447\u043a\u0438",allParams:e.allParams,mainFilter:e.allParams.genders,page:e.page,totalCount:e.totalCount,assorty:e.rims,setAssorty:t,url:"/sunglasses",otherFilters:w({filters:e.filters,allParams:e.allParams,setFilter:t}),allFilters:e.filters})})},C=s(15),S=s(9),T=s.n(S),P=s(16),F=s(65),A=s.n(F),z=s(66),R=s.n(z).a.get("csrftoken"),E=A.a.create({withCredentials:!0,baseURL:"http://127.0.0.1:8000/api/",headers:{"X-CSRFToken":R}}),M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return E.get("glassesrims/?is_sunglasses=".concat(s,"&is_available=").concat(e.is_available,"&brand=").concat(e.brand,"&color=").concat(e.color,"&shape=").concat(e.shape,"&material=").concat(e.material,"&gender=").concat(e.gender,"&sort_price=").concat(e.sort_by_price,"&page=").concat(t))},L=function(e){return E.get("glassesrims/?id=".concat(e))},B=function(e,t){return E.get("accessory/?is_available=".concat(!0,"&category=",e.category,"&page=").concat(t,"&sort_price=").concat(e.sort_by_price))},I=function(e){return E.get("accessory/?id=".concat(e))},G=function(){return E.get("colors/")},U=function(){return E.get("materials/")},D=function(){return E.get("shapes/")},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return E.get("brands/?is_doRims=".concat(e,"&is_doSunGlasses=").concat(t,"&is_doLens=").concat(s))},J=function(){return E.get("genders/")},K=function(){return E.get("categoryaccessory/")},V=function(){return E.get("marketpoints/")},X="rimsReducer/SET_RIMS",q="rimsReducer/SET_ALL_PARAMS",H={allParams:{colors:[{title:"\u041b\u044e\u0431\u043e\u0439",id:0}],materials:[{title:"\u041b\u044e\u0431\u043e\u0439",id:0}],shapes:[{title:"\u041b\u044e\u0431\u0430\u044f",id:0}],genders:[{title:"\u0412\u0441\u0435",id:0}],brands:[{title:"\u041b\u044e\u0431\u043e\u0439",id:0,description:"",image:""}]},filters:{color:0,material:0,shape:0,brand:0,is_available:!0,gender:0,sort_by_price:null},page:1,totalCount:0,rims:[]},Q=function(e,t,s,c){return{type:X,rims:e,filters:t,page:s,totalCount:c}},W=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var c=Object(P.a)(T.a.mark((function c(a){var r;return T.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,M(e,t,s);case 2:r=c.sent,a(Q(r.data.results,e,t,r.data.count));case 4:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()},Z=function(e){return{type:q,allParams:e}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(p.a)(Object(p.a)({},e),{},{totalCount:t.totalCount,rims:Object(v.a)(t.rims),filters:Object(p.a)({},t.filters),page:t.page});case q:return Object(p.a)(Object(p.a)({},e),{},{allParams:Object(p.a)({},t.allParams)});default:return e}},ee=function(e){var t=Object(c.useState)(!1),s=Object(i.a)(t,2),a=s[0],r=s[1],n=function(){r(!a)};return Object(u.jsx)("div",{className:"col-md-4 mt-2",children:Object(u.jsxs)("div",{className:"card",onMouseEnter:n,onMouseLeave:n,children:[Object(u.jsx)("div",{className:"center",style:{overflow:"hidden",height:"270px"},children:Object(u.jsx)("img",{src:e.image,className:a?"ItemOn ":"ItemExit "})}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("div",{className:"mb-2",children:e.title}),Object(u.jsx)("div",{}),Object(u.jsxs)("div",{className:"left",children:[Object(u.jsxs)("div",{children:["\u0426\u0435\u043d\u0430 ",e.price," \u20bd"]}),e.article&&Object(u.jsxs)("div",{style:{fontSize:"0.7em"},className:"text-secondary",children:["\u0410\u0440\u0442\u0438\u043a\u0443\u043b ",e.article]})]}),Object(u.jsx)("div",{className:"right",children:a?Object(u.jsx)(j.b,{to:e.is_accessory?"/accessuar/".concat(e.id):"/rim/".concat(e.id),children:Object(u.jsx)("button",{style:{fontSize:"1.1em"},className:"btn btn-warning text-white mt-1",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})}):Object(u.jsx)("div",{className:"mt-3",children:e.brand})})]})]})})},te=function(e){return e.map((function(e){return Object(u.jsx)(ee,{brand:e.brand.title,image:e.image,price:e.price,article:e.article,id:e.id,title:e.title})}))},se=function(e){return{allParams:e.rims.allParams,filters:e.rims.filters,page:e.rims.page,totalCount:e.rims.totalCount,rims:te(e.rims.rims)}},ce=Object(x.d)(O.f,Object(C.b)(se,{setRimsThunk:W,setAllParamsThunk:function(){return function(){var e=Object(P.a)(T.a.mark((function e(t){var s,c,a,r,n,i;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(!0);case 2:return s=e.sent,e.next=5,J();case 5:return c=e.sent,e.next=8,D();case 8:return a=e.sent,e.next=11,G();case 11:return r=e.sent,e.next=14,U();case 14:n=e.sent,i={brands:[{title:"\u0412\u0441\u0435",id:0}].concat(Object(v.a)(s.data)),genders:[{title:"\u0412\u0441\u0435",id:0}].concat(Object(v.a)(c.data)),shapes:[{title:"\u0412\u0441\u0435",id:0}].concat(Object(v.a)(a.data)),colors:[{title:"\u0412\u0441\u0435",id:0}].concat(Object(v.a)(r.data)),materials:[{title:"\u0412\u0441\u0435",id:0}].concat(Object(v.a)(n.data))},t(Z(i));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(k),ae=Object(x.d)(O.f,Object(C.b)(se,{setRimsThunk:W,setAllParamsThunk:function(){return function(){var e=Object(P.a)(T.a.mark((function e(t){var s,c,a,r,n,i;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(!1,!0);case 2:return s=e.sent,e.next=5,J();case 5:return c=e.sent,e.next=8,D();case 8:return a=e.sent,e.next=11,G();case 11:return r=e.sent,e.next=14,U();case 14:n=e.sent,i={brands:[{title:"\u0412\u0441\u0435",id:0}].concat(Object(v.a)(s.data)),genders:[{title:"\u0412\u0441\u0435",id:0}].concat(Object(v.a)(c.data)),shapes:[{title:"\u0412\u0441\u0435",id:0}].concat(Object(v.a)(a.data)),colors:[{title:"\u0412\u0441\u0435",id:0}].concat(Object(v.a)(r.data)),materials:[{title:"\u0412\u0441\u0435",id:0}].concat(Object(v.a)(n.data))},t(Z(i));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(_),re=function(e){Object(c.useEffect)((function(){e.setRimThunk(e.match.params.id)}),[e.match.params.id]);var t=[{title:"\u0411\u0440\u044d\u043d\u0434",value:e.brand.title},{title:"\u0410\u0440\u0442\u0438\u043a\u0443\u043b",value:e.article},{title:"\u0426\u0432\u0435\u0442",value:e.color.title},{title:"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b",value:e.material.title},{title:"\u0424\u043e\u0440\u043c\u0430",value:e.shape.title},{title:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",value:e.gender.title},{title:"\u0426\u0435\u043d\u0430",value:e.price}].map((function(e){return Object(u.jsxs)("li",{className:"list-group-item center",children:[e.title," - ",e.value]})}));return Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("span",{className:"text-secondary",children:e.is_available?"\u0415\u0441\u0442\u044c \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438":"\u041d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"}),Object(u.jsxs)("h3",{children:[e.is_sunGlasses?"\u0421\u043e\u043b\u043d\u0446\u0435\u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0435 \u043e\u0447\u043a\u0438 - ":"\u041e\u043f\u0440\u0430\u0432\u0430 - ",e.title]}),Object(u.jsxs)("div",{className:"row mx-2",children:[Object(u.jsx)("div",{className:"col-md-6 card py-4 mt-1",children:Object(u.jsx)("img",{src:e.image,className:"w-100"})}),Object(u.jsx)("div",{className:"col-md-6 mt-1",children:Object(u.jsxs)("ul",{className:"list-group",children:[Object(u.jsx)("li",{className:"list-group-item",style:{background:"#007BFF",color:"white"},children:"\u041e\u0431\u0449\u0438\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438"}),t]})})]}),e.suggested.length>0&&Object(u.jsxs)("div",{className:"m-2",children:[Object(u.jsx)("div",{children:Object(u.jsx)("h3",{children:"\u0422\u0430\u043a\u0436\u0435 \u0432\u0430\u0441 \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432\u0430\u0442\u044c:"})}),Object(u.jsx)("div",{children:Object(u.jsx)(g,{content:e.suggested,limit:!0})})]})]})},ne="rimReducer/SET_RIM",ie={id:0,title:"BR - 0532",brand:{title:"Brioni"},article:"26618",color:{title:"\u0421\u0435\u0440\u0435\u0431\u0440\u044f\u043d\u044b\u0435",id:3},material:{title:"\u041c\u0435\u0442\u0430\u043b\u043b",id:2},gender:{title:"\u041c\u0443\u0436\u0441\u043a\u0438\u0435",id:2},shape:{title:"\u0410\u0432\u0438\u0430\u0442\u043e\u0440\u044b",id:1},image:"https://i4.stat01.com/1/8920/89197583/075a3e/ochki-turok-steinhard-anti-blue-glasses-fu001.jpg",price:0,is_available:!1,is_sunGlasses:!1,suggested:[]},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return Object(p.a)(Object(p.a)(Object(p.a)({},e),t.rim),{},{suggested:Object(v.a)(t.rims)});default:return e}},oe=Object(x.d)(Object(C.b)((function(e){return{id:e.rim.id,title:e.rim.title,brand:e.rim.brand,article:e.rim.article,color:e.rim.color,material:e.rim.material,shape:e.rim.shape,image:e.rim.image,gender:e.rim.gender,price:e.rim.price,is_available:e.rim.is_available,is_sunGlasses:e.rim.is_sunGlasses,suggested:te(e.rim.suggested)}}),{setRimThunk:function(e){return function(){var t=Object(P.a)(T.a.mark((function t(s){var c,a,r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(e);case 2:return c=t.sent,a={color:0,material:c.data.results[0].material.id,brand:c.data.results[0].brand.id,shape:c.data.results[0].shape.id,gender:c.data.results[0].gender.id,is_available:!0,sort_by_price:null},t.next=6,M(a);case 6:r=t.sent,s((n=c.data.results[0],i=r.data.results.filter((function(e){return e.id!=c.data.results[0].id})),{type:ne,rim:n,rims:i}));case 8:case"end":return t.stop()}var n,i}),t)})));return function(e){return t.apply(this,arguments)}}()}}),O.f)(re),de=function(e){return Object(u.jsx)("div",{className:"w-100",children:Object(u.jsx)("div",{className:"",children:Object(u.jsxs)("select",{style:{fontSize:"1.3em"},className:"form-control",onChange:function(t){e.setAccessory(Object(p.a)(Object(p.a)({},e.filters),{},{sort_by_price:t.target.value}),1)},children:[Object(u.jsx)("option",{value:"null",children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043d\u043e\u0432\u044b\u0435"}),Object(u.jsx)("option",{value:"true",children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u041f\u043e\u0434\u0435\u0448\u0435\u0432\u043b\u0435"}),Object(u.jsx)("option",{value:"false",children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u041f\u043e\u0434\u043e\u0440\u043e\u0436\u0435"})]})})})},je=function(e){return Object(c.useEffect)((function(){e.setCategorysThunk()}),[]),Object(c.useEffect)((function(){e.setAccessorysThunk({category:e.match.params.id,sort_by_price:null},1)}),[e.match.params.id]),Object(u.jsx)("div",{children:Object(u.jsx)(y,{url:"/accessuars",topic:"\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b",mainFilter:e.categorys,otherFilters:de({filters:e.filters,setAccessory:e.setAccessorysThunk}),page:e.page,totalCount:e.totalCount,assorty:e.accessorys,setAssorty:e.setAccessorysThunk,allFilters:e.filters})})},ue="accessorysReducer/SET_ACCESSORYS",be="accessorysReducer/SET_CATEGORYS",me={accessorys:[],categorys:[{title:"\u0412\u0441\u0435",id:0}],filters:{sort_by_price:null,category:0},totalCount:0,page:1},he=function(e,t,s,c){return{type:ue,accessorys:e,filters:t,totalCount:s,page:c}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue:return Object(p.a)(Object(p.a)({},e),{},{accessorys:Object(v.a)(t.accessorys),filters:Object(p.a)({},t.filters),totalCount:t.totalCount,page:t.page});case be:return Object(p.a)(Object(p.a)({},e),{},{categorys:Object(v.a)(t.categorys)});default:return e}},xe=function(e){return e.map((function(e){return Object(u.jsx)(ee,{image:e.image,is_accessory:!0,price:e.price,id:e.id,title:e.title})}))},pe=Object(x.d)(Object(C.b)((function(e){return{accessorys:xe(e.accessorys.accessorys),filters:e.accessorys.filters,categorys:e.accessorys.categorys,totalCount:e.accessorys.totalCount,page:e.accessorys.page}}),{setAccessorysThunk:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(){var s=Object(P.a)(T.a.mark((function s(c){var a;return T.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,B(e,t);case 2:a=s.sent,c(he(a.data.results,e,a.data.count,t));case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()},setCategorysThunk:function(){return function(){var e=Object(P.a)(T.a.mark((function e(t){var s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K();case 2:s=e.sent,t((c=[{title:"\u0412\u0441\u0435",id:0}].concat(Object(v.a)(s.data)),{type:be,categorys:c}));case 4:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}()}}),O.f)(je),fe="accessoryReducer/SET_ACCESSORY",ve={id:0,title:"",image:"",price:0,category:{title:"\u0412\u0441\u0435",id:0},is_available:!0,suggested:[]},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe:return Object(p.a)(Object(p.a)(Object(p.a)({},e),t.accessory),{},{suggested:Object(v.a)(t.suggested)});default:return e}},ye=function(e){Object(c.useEffect)((function(){e.setAccessoryThunk(e.match.params.id)}),[e.match.params.id]);var t=[{title:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",value:e.category.title},{title:"\u0426\u0435\u043d\u0430",value:e.price}].map((function(e){return Object(u.jsxs)("li",{className:"list-group-item center",children:[e.title," - ",e.value]})}));return Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("span",{className:"text-secondary",children:e.is_available?"\u0415\u0441\u0442\u044c \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438":"\u041d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"}),Object(u.jsxs)("h3",{children:["\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440 - ",e.title]}),Object(u.jsxs)("div",{className:"row mx-2",children:[Object(u.jsx)("div",{className:"col-md-6 card py-4 mt-1",children:Object(u.jsx)("img",{src:e.image,className:"w-100"})}),Object(u.jsx)("div",{className:"col-md-6 mt-1",children:Object(u.jsxs)("ul",{className:"list-group",children:[Object(u.jsx)("li",{className:"list-group-item",style:{background:"#007BFF",color:"white"},children:"\u041e\u0431\u0449\u0438\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438"}),t]})})]}),e.suggested.length>0&&Object(u.jsxs)("div",{className:"m-2",children:[Object(u.jsx)("div",{children:Object(u.jsx)("h3",{children:"\u0422\u0430\u043a\u0436\u0435 \u0432\u0430\u0441 \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432\u0430\u0442\u044c:"})}),Object(u.jsx)("div",{children:Object(u.jsx)(g,{content:e.suggested,limit:!0})})]})]})},Ne=Object(x.d)(Object(C.b)((function(e){return{title:e.accessory.title,price:e.accessory.price,image:e.accessory.image,category:e.accessory.category,is_available:e.accessory.is_available,suggested:xe(e.accessory.suggested)}}),{setAccessoryThunk:function(e){return function(){var t=Object(P.a)(T.a.mark((function t(s){var c,a,r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(e);case 2:return c=t.sent,a={sort_by_price:null,category:c.data.results[0].category.id,is_available:!0},t.next=6,B(a,1);case 6:r=t.sent,s((n=c.data.results[0],i=r.data.results.filter((function(e){return e.id!=c.data.results[0].id})).slice(0,3),{type:fe,accessory:n,suggested:i}));case 8:case"end":return t.stop()}var n,i}),t)})));return function(e){return t.apply(this,arguments)}}()}}),O.f)(ye),we=a.a.memo((function(e){Object(c.useEffect)((function(){0===e.marketPoints.length&&e.setMarketPointsThunk()}),[]);var t=e.marketPoints.map((function(e){return Object(u.jsxs)("a",{href:e.link,style:{textDecoration:"none"},className:"list-group-item text-center",target:"_blank",children:[e.region," \u0440\u0430\u0439\u043e\u043d, \u0443\u043b. ",e.street]})}));return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"row mx-2",children:[Object(u.jsxs)("div",{className:"col-md-6 mt-1",children:[Object(u.jsxs)("h3",{className:"text-center text-primary",children:["\u041e \u043d\u0430\u0441",Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-info-circle mx-2",viewBox:"0 0 16 16",children:[Object(u.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(u.jsx)("path",{d:"M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})]})]}),Object(u.jsxs)("div",{className:"container",style:{fontSize:"1.1em"},children:[Object(u.jsx)("span",{className:"ml-2"}),"Outlet-SPb \u043e\u043f\u0442\u0438\u043a\u0430. \u0425\u043e\u0442\u0438\u0442\u0435 \u043a\u0443\u043f\u0438\u0442\u044c \u043c\u043e\u0434\u043d\u044b\u0435 \u0431\u0440\u0435\u043d\u0434\u043e\u0432\u044b\u0435 \u043e\u0447\u043a\u0438 \u0438 \u043d\u0435 \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u0430 \u043d\u0438\u0445 \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u0443 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b? \u0422\u043e\u0433\u0434\u0430 \u0432\u0430\u043c \u0432 \u043d\u0430\u0448\u0443 \u043e\u043f\u0442\u0438\u043a\u0443!",Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"ml-2"}),"\u0423 \u043d\u0430\u0441 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u043e\u043f\u0440\u0430\u0432\u044b \u0438 \u0441\u043e\u043b\u043d\u0446\u0435\u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0435 \u043e\u0447\u043a\u0438 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0445 \u0431\u0440\u0435\u043d\u0434\u043e\u0432 \u043f\u0440\u043e\u0448\u043b\u043e\u0433\u043e\u0434\u043d\u0438\u0445 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b  \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \u043f\u043e \u0441\u0430\u043c\u044b\u043c \u043d\u0438\u0437\u043a\u0438\u043c \u0446\u0435\u043d\u0430\u043c."]})]}),Object(u.jsxs)("div",{className:"col-md-6 mt-1",children:[Object(u.jsxs)("h3",{className:"text-center text-primary",children:["\u0413\u0434\u0435 \u043d\u0430\u0441 \u043d\u0430\u0439\u0442\u0438",Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-search mx-2",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})]}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("span",{style:{fontSize:"1.2em"},children:"\u0412\u0441\u0435 \u043d\u0430\u0448\u0438 \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0435 \u0442\u043e\u0447\u043a\u0438 \u0432 \u0421\u041f\u0431"}),Object(u.jsx)("ul",{className:"list-group",children:t})]})]})]})})})),ke="aboutusReducer/SET_MARKET_POINT",_e={marketPoints:[],aboutUsText:""},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ke:return Object(p.a)(Object(p.a)({},e),{},{marketPoints:Object(v.a)(t.marketPoints)});default:return e}},Se=Object(x.d)(Object(C.b)((function(e){return{aboutUsText:e.aboutUs.aboutUsText,marketPoints:e.aboutUs.marketPoints}}),{setMarketPointsThunk:function(){return function(){var e=Object(P.a)(T.a.mark((function e(t){var s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:s=e.sent,t((c=s.data,{type:ke,marketPoints:c}));case 4:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(we),Te=s(67),Pe="lensReducer/SET_BRANDS",Fe={brands:[],text:""},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Pe:return Object(p.a)(Object(p.a)({},e),{},{brands:Object(v.a)(t.brands)});default:return e}},ze=Object(x.c)({rims:$,rim:le,accessorys:Oe,accessory:ge,aboutUs:Ce,lens:Ae}),Re=Object(x.e)(ze,Object(x.a)(Te.a)),Ee=function(e){return Object(u.jsx)("div",{className:"Footer mt-2",children:Object(u.jsx)("div",{className:"text-white p-4",style:{backgroundColor:"#007BFF"},children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-md-4",children:[Object(u.jsx)("div",{children:Object(u.jsxs)(j.b,{to:"/aboutus",className:"NavbarLink",children:["\u0413\u0434\u0435 \u043d\u0430\u0441 \u043d\u0430\u0439\u0442\u0438",Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",className:"bi bi-search mx-2",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})]})}),Object(u.jsx)("div",{children:Object(u.jsxs)(j.b,{to:"/aboutus",className:"NavbarLink",children:["\u041e \u043d\u0430\u0441",Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",className:"bi bi-info-circle mx-2",viewBox:"0 0 16 16",children:[Object(u.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(u.jsx)("path",{d:"M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})]})]})})]}),Object(u.jsx)("div",{className:"col-md-4"}),Object(u.jsxs)("div",{className:"col-md-4",children:[Object(u.jsx)("div",{className:"NavbarLink",children:"\u0422\u0430\u043a\u0436\u0435 \u043c\u044b \u0435\u0441\u0442\u044c \u0432 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0435\u0442\u044f\u0445:"}),Object(u.jsx)("div",{className:"mx-2 NavbarLink",children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",className:"bi bi-instagram",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})})})]})]})})})},Me=function(e){Object(c.useEffect)((function(){0===e.brands.length&&e.setBrandsThunk()}),[]);var t=e.brands.map((function(e){return Object(u.jsx)("img",{className:"img rounded mx-2",src:e.image,title:e.title,style:{height:"270px",overflow:"hidden"}})}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"center",children:t}),Object(u.jsx)("div",{})]})},Le=Object(x.d)(Object(C.b)((function(e){return{brands:e.lens.brands,text:e.lens.text}}),{setBrandsThunk:function(){return function(){var e=Object(P.a)(T.a.mark((function e(t){var s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(!1,!1,!0);case 2:s=e.sent,t((c=s.data,{type:Pe,brands:c}));case 4:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(Me);var Be=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2);return t[0],t[1],Object(u.jsx)(j.a,{children:Object(u.jsx)(C.a,{store:Re,children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{children:Object(u.jsx)(b,{})}),Object(u.jsx)(h,{}),Object(u.jsx)("div",{className:"mt-4 containerMy",children:Object(u.jsxs)(O.c,{children:[Object(u.jsx)(O.a,{path:"/rims/:id?",render:function(){return Object(u.jsx)(ce,{})}}),Object(u.jsx)(O.a,{path:"/rim/:id?",render:function(){return Object(u.jsx)(oe,{})}}),Object(u.jsx)(O.a,{path:"/sunglasses/:id?",render:function(){return Object(u.jsx)(ae,{})}}),Object(u.jsx)(O.a,{path:"/accessuars/:id?",render:function(){return Object(u.jsx)(pe,{})}}),Object(u.jsx)(O.a,{path:"/accessuar/:id?",render:function(){return Object(u.jsx)(Ne,{})}}),Object(u.jsx)(O.a,{path:"/lens",render:function(){return Object(u.jsx)(Le,{})}}),Object(u.jsx)(O.a,{path:"*",render:function(){return Object(u.jsx)(Se,{})}})]})}),Object(u.jsx)(Ee,{})]})})})},Ie=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,109)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),r(e),n(e)}))};n.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(Be,{})}),document.getElementById("root")),Ie()},73:function(e,t,s){},74:function(e,t,s){}},[[103,1,2]]]);
//# sourceMappingURL=main.9f5e17a8.chunk.js.map