(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),i=a(22),r=a.n(i),n=(a(73),a(18)),l=(a.p,a(74),a(75),a(108)),o=a(105),j=a(106),d=a(12),b=a(1),m=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(l.a,{bg:"primary",fixed:"top",collapseOnSelect:!0,expand:"md",variant:"dark",children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(l.a.Brand,{children:Object(b.jsx)(d.b,{to:"aboutus",className:"NavbarLink mr-4",children:"OutletSPb"})}),Object(b.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(b.jsx)(l.a.Collapse,{id:"responsive-navbar-nav",children:Object(b.jsxs)(j.a,{className:"mr-auto",children:[Object(b.jsx)(j.a.Link,{children:Object(b.jsx)(d.b,{to:"/rims/0",className:"NavbarLink mr-4",children:"\u041e\u043f\u0440\u0430\u0432\u044b"})}),Object(b.jsx)(j.a.Link,{children:Object(b.jsx)(d.b,{to:"/sunglasses",className:"NavbarLink mr-4",children:"\u0421\u043e\u043b\u043d\u0446\u0435\u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0435 \u043e\u0447\u043a\u0438"})}),Object(b.jsx)(j.a.Link,{children:Object(b.jsx)(d.b,{to:"/lens",className:"NavbarLink mr-4",children:"\u041b\u0438\u043d\u0437\u044b"})}),Object(b.jsx)(j.a.Link,{children:Object(b.jsx)(d.b,{to:"/accessuars",className:"NavbarLink mr-4",children:"\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b"})})]})})]})})})},u=a(107),h=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(u.a,{children:[Object(b.jsxs)(u.a.Item,{children:[Object(b.jsx)("img",{src:"https://www.logosaum.com/uploads/posts/2019-11/1572872810_s1200-1.jpg",className:"w-100 h-50"}),Object(b.jsxs)(u.a.Caption,{children:[Object(b.jsx)("h3",{children:"Forest "}),Object(b.jsx)("p",{children:"youuuuu its forest"})]})]}),Object(b.jsxs)(u.a.Item,{children:[Object(b.jsx)("img",{src:"https://www.metislighting.it/wp/wp-content/uploads/Brioni.jpg",className:"w-100 h-50"}),Object(b.jsxs)(u.a.Caption,{children:[Object(b.jsx)("h3",{children:"Brioni"}),Object(b.jsx)("p",{children:"Simple brand"})]})]}),Object(b.jsxs)(u.a.Item,{children:[Object(b.jsx)("img",{src:"https://i.pinimg.com/originals/e8/06/ed/e806ed214d72766ec572234c138cb272.jpg",className:"w-100 h-50"}),Object(b.jsxs)(u.a.Caption,{children:[Object(b.jsx)("h3",{children:"Gucci"}),Object(b.jsx)("p",{children:"Not Simple brand"})]})]})]})})},O=function(e){var t=Object(c.useState)(e.page),a=Object(n.a)(t,2),s=a[0],i=a[1];Object(c.useEffect)((function(){e.setPage(e.filters,s);for(var t=[],a=function(e){var a=null;a=s==e?Object(b.jsx)("button",{className:"btn btn-light",onClick:function(){i(e)},children:e},e):Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){i(e)},children:e},e),t.push(a)},c=1;c<=Math.ceil(e.totalCount/9);c++)a(c);f([].concat(t).slice((h-1)*l,h*l))}),[s,e.totalCount]);for(var r=[],l=5,o=function(e){var t=null;t=s==e?Object(b.jsx)("button",{className:"btn btn-light",onClick:function(){i(e)},children:e},e):Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){i(e)},children:e},e),r.push(t)},j=1;j<=Math.ceil(e.totalCount/9);j++)o(j);for(var d=1;e.page>l*d;)d++;var m=Object(c.useState)(d),u=Object(n.a)(m,2),h=u[0],O=u[1],x=Object(c.useState)([].concat(r).slice(l*(d-1),l*d)),p=Object(n.a)(x,2),v=p[0],f=p[1];return Object(b.jsxs)("div",{children:[h>1&&Object(b.jsx)("button",{onClick:function(){var e=h-1;O(e);var t=[].concat(r).slice((e-1)*l,(e-1)*l+l);f(t)},className:"btn btn-outline-primary",children:"<"}),v,h*l<Math.ceil(e.totalCount/9)&&Object(b.jsx)("button",{onClick:function(){var e=h+1;O(e);var t=[].concat(r).slice((e-1)*l,(e-1)*l+l);f(t)},className:"btn btn-outline-primary",children:">"})]})},x=a(15),p=function(e){var t=e.content;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"row",children:Object(x.a)(t).slice(0,3)}),e.limit?Object(b.jsx)("div",{}):Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"row",children:Object(x.a)(t).slice(3,6)}),Object(b.jsx)("div",{className:"row",children:Object(x.a)(t).slice(6,9)})]})]})},v=function(e){var t=e.mainFilter.map((function(t){return Object(b.jsx)(d.b,{to:"".concat(e.url,"/").concat(t.id),className:"list-group-item center ",style:{textDecoration:"none"},children:t.title})}));return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h3",{children:e.topic}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-3 mt-2",children:Object(b.jsx)("ul",{className:"list-group",children:t})}),Object(b.jsxs)("div",{className:"col-md-9 mt-2",children:[Object(b.jsx)("div",{children:e.otherFilters}),Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{content:e.assorty}),Object(b.jsx)("div",{className:"right mt-4",children:Object(b.jsx)(O,{page:e.page,totalCount:e.totalCount,filters:e.allFilters,setPage:e.setAssorty})})]})]})]})]})},f=a(6),g=a(17),N=a(10),_=a(50),y=function(e){var t=Object(c.useState)(e.allParams),a=Object(n.a)(t,2),s=a[0],i=a[1];return Object(c.useEffect)((function(){i(e.allParams)}),[e.allParams]),Object(b.jsx)(_.b,{initialValues:{color:e.filters.color,material:e.filters.material,shape:e.filters.shape,brand:e.filters.brand,is_available:e.filters.is_available,sort_by_price:e.filters.sort_by_price},onSubmit:function(t){var a={color:t.color,material:t.material,shape:t.shape,brand:t.brand,is_available:t.is_available,sort_by_price:t.sort_by_price,gender:e.filters.gender};e.setFilter(a,1)},children:function(e){e.values;var t=e.handleSubmit,a=e.handleChange,c=s.colors.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.title})})),i=s.materials.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.title})})),r=s.shapes.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.title})})),n=s.brands.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.title})}));return Object(b.jsxs)("form",{onSubmit:t,children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-md-4 FilterItem",children:[Object(b.jsx)("div",{className:"m-2",children:Object(b.jsx)("label",{htmlFor:"color",children:Object(b.jsx)("h5",{children:"\u0426\u0432\u0435\u0442"})})}),Object(b.jsx)("div",{className:"",children:Object(b.jsx)("select",{id:"color",name:"color",className:"form-control",onChange:a,children:c})})]}),Object(b.jsxs)("div",{className:"col-md-4 FilterItem",children:[Object(b.jsx)("div",{className:"m-2",children:Object(b.jsx)("label",{htmlFor:"material",children:Object(b.jsx)("h5",{children:"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b"})})}),Object(b.jsx)("div",{children:Object(b.jsx)("select",{id:"material",name:"material",className:"form-control",onChange:a,children:i})})]}),Object(b.jsx)("div",{className:"col-md-4 mb-2",children:Object(b.jsx)("div",{children:Object(b.jsxs)("select",{name:"sort_by_price",onChange:a,className:"form-control",children:[Object(b.jsx)("option",{value:"null",children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u041d\u043e\u0432\u044b\u0435"}),Object(b.jsx)("option",{value:"true",children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u041f\u043e\u0434\u0435\u0448\u0435\u0432\u043b\u0435"}),Object(b.jsx)("option",{value:"false",children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u041f\u043e\u0434\u043e\u0440\u043e\u0436\u0435"})]})})})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-md-4 FilterItem",children:[Object(b.jsx)("div",{className:"m-2",children:Object(b.jsx)("label",{htmlFor:"brand",children:Object(b.jsx)("h5",{children:"\u0411\u0440\u044d\u043d\u0434"})})}),Object(b.jsx)("div",{children:Object(b.jsx)("select",{id:"brand",name:"brand",className:"form-control",onChange:a,children:n})})]}),Object(b.jsxs)("div",{className:"col-md-4 FilterItem",children:[Object(b.jsx)("div",{className:"m-2",children:Object(b.jsx)("label",{htmlFor:"shape",children:Object(b.jsx)("h5",{children:"\u0424\u043e\u0440\u043c\u0430"})})}),Object(b.jsx)("div",{children:Object(b.jsx)("select",{id:"shape",name:"shape",className:"form-control",onChange:a,children:r})})]}),Object(b.jsx)("div",{className:"col-md-4 d-flex center",children:Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{className:"m-2",style:{fontSize:"1.4em"},children:"\u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"}),Object(b.jsx)(_.a,{type:"checkbox",name:"is_available"})]})})]}),Object(b.jsx)("button",{className:"btn btn-outline-primary mt-2 w-100",children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"})]})}})},k=function(e){return Object(c.useEffect)((function(){e.setRimsThunk(Object(N.a)(Object(N.a)({},e.filters),{},{gender:e.match.params.id?e.match.params.id:0}),1)}),[e.match.params.id]),Object(c.useEffect)((function(){e.setAllParamsThunk()}),[]),Object(b.jsx)("div",{children:Object(b.jsx)(v,{topic:"\u041e\u043f\u0440\u0430\u0432\u044b",allParams:e.allParams,mainFilter:e.allParams.genders,page:e.page,totalCount:e.totalCount,assorty:e.rims,setAssorty:e.setRimsThunk,url:"/rims",otherFilters:y({filters:e.filters,allParams:e.allParams,setFilter:e.setRimsThunk}),allFilters:e.filters})})},C=a(29),w=a(26),S=a.n(w),F=a(33),P=a(65),L=a.n(P),R=a(66),T=a.n(R).a.get("csrftoken"),I=L.a.create({withCredentials:!0,baseURL:"http://127.0.0.1:8000/api/",headers:{"X-CSRFToken":T}}),E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return I.get("glassesrims/?is_sunglasses=".concat(a,"&is_available=").concat(e.is_available,"&brand=").concat(e.brand,"&color=").concat(e.color,"&shape=").concat(e.shape,"&material=").concat(e.material,"&gender=").concat(e.gender,"&sort_price=").concat(e.sort_by_price,"&page=").concat(t))},M=function(e){return I.get("glassesrims/?id=".concat(e))},A=function(){return I.get("colors/")},G=function(){return I.get("materials/")},B=function(){return I.get("shapes/")},z=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return I.get("brands/?is_doRims=".concat(e,"&is_doSunGlasses=").concat(t,"&is_doLens=").concat(a))},D=function(){return I.get("genders/")},J="rimsReducer/SET_RIMS",U="rimsReducer/SET_ALL_PARAMS",V={allParams:{colors:[{title:"\u041b\u044e\u0431\u043e\u0439",id:0}],materials:[{title:"\u041b\u044e\u0431\u043e\u0439",id:0}],shapes:[{title:"\u041b\u044e\u0431\u0430\u044f",id:0}],genders:[{title:"\u0412\u0441\u0435",id:0}],brands:[{title:"\u041b\u044e\u0431\u043e\u0439",id:0,description:"",image:""}]},filters:{color:0,material:0,shape:0,brand:0,is_available:!0,gender:0,sort_by_price:null},page:1,totalCount:0,rims:[]},X=function(e,t,a,c){return{type:J,rims:e,filters:t,page:a,totalCount:c}},q=function(e){return{type:U,allParams:e}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(N.a)(Object(N.a)({},e),{},{totalCount:t.totalCount,rims:Object(x.a)(t.rims),filters:Object(N.a)({},t.filters),page:t.page});case U:return Object(N.a)(Object(N.a)({},e),{},{allParams:Object(N.a)({},t.allParams)});default:return e}},K=function(e){var t=Object(c.useState)(!1),a=Object(n.a)(t,2),s=a[0],i=a[1],r=function(){i(!s)};return Object(b.jsx)("div",{className:"col-md-4 mt-2",children:Object(b.jsxs)("div",{className:"card",onMouseEnter:r,onMouseLeave:r,children:[Object(b.jsx)("div",{className:"center my-2",children:Object(b.jsx)("img",{src:e.image,className:s?"ItemOn ":"ItemExit "})}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("div",{className:"left",children:["\u0426\u0435\u043d\u0430 ",e.price," \u20bd",Object(b.jsx)("br",{}),Object(b.jsxs)("span",{style:{fontSize:"0.7em"},className:"text-secondary",children:["\u0410\u0440\u0442\u0438\u043a\u0443\u043b ",e.article]})]}),Object(b.jsx)("div",{className:"right",children:s?Object(b.jsx)(d.b,{to:"/rim/".concat(e.id),children:Object(b.jsx)("button",{className:"btn btn-warning text-white mt-1",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})}):Object(b.jsx)("div",{className:"mt-3",children:e.brand})})]})]})})},Q=function(e){return e.map((function(e){return Object(b.jsx)(K,{brand:e.brand.title,image:e.image,price:e.price,article:e.article,id:e.id})}))},W=Object(g.d)(f.f,Object(C.b)((function(e){return{allParams:e.rims.allParams,filters:e.rims.filters,page:e.rims.page,totalCount:e.rims.totalCount,rims:Q(e.rims.rims)}}),{setRimsThunk:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(){var a=Object(F.a)(S.a.mark((function a(c){var s;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E(e,t);case 2:s=a.sent,c(X(s.data.results,e,t,s.data.count));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},setAllParamsThunk:function(){return function(){var e=Object(F.a)(S.a.mark((function e(t){var a,c,s,i,r,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:return a=e.sent,e.next=5,D();case 5:return c=e.sent,e.next=8,B();case 8:return s=e.sent,e.next=11,A();case 11:return i=e.sent,e.next=14,G();case 14:r=e.sent,n={brands:[{title:"\u0412\u0441\u0435",id:0}].concat(Object(x.a)(a.data)),genders:[{title:"\u0412\u0441\u0435",id:0}].concat(Object(x.a)(c.data)),shapes:[{title:"\u0412\u0441\u0435",id:0}].concat(Object(x.a)(s.data)),colors:[{title:"\u0412\u0441\u0435",id:0}].concat(Object(x.a)(i.data)),materials:[{title:"\u0412\u0441\u0435",id:0}].concat(Object(x.a)(r.data))},t(q(n));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(k),Y=function(e){Object(c.useEffect)((function(){e.setRimThunk(e.match.params.id)}),[e.match.params.id]);var t=[{title:"\u0411\u0440\u044d\u043d\u0434",value:e.brand.title},{title:"\u0410\u0440\u0442\u0438\u043a\u0443\u043b",value:e.article},{title:"\u0426\u0432\u0435\u0442",value:e.color.title},{title:"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b",value:e.material.title},{title:"\u0424\u043e\u0440\u043c\u0430",value:e.shape.title},{title:"\u0426\u0435\u043d\u0430",value:e.price}].map((function(e){return Object(b.jsxs)("li",{className:"list-group-item center",children:[e.title," - ",e.value]})}));return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("h3",{children:[e.is_sunGlasses?"\u0421\u043e\u043b\u043d\u0446\u0435\u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0435 \u043e\u0447\u043a\u0438 - ":"\u041e\u043f\u0440\u0430\u0432\u0430 - ",e.title]}),Object(b.jsxs)("div",{className:"row mx-2",children:[Object(b.jsx)("div",{className:"col-md-6 card py-4",children:Object(b.jsx)("img",{src:e.image,className:"w-100"})}),Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("ul",{className:"list-group",children:[Object(b.jsx)("li",{className:"list-group-item",children:"\u041e\u0431\u0449\u0438\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438"}),t]})})]}),Object(b.jsx)("div",{className:"m-2",children:Object(b.jsx)("h3",{children:"\u0422\u0430\u043a\u0436\u0435 \u0432\u0430\u0441 \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432\u0430\u0442\u044c:"})}),Object(b.jsx)("div",{children:Object(b.jsx)(p,{content:e.suggested,limit:!0})})]})},Z="rimReducer/SET_RIM",$={id:0,title:"BR - 0532",brand:{title:"Gucci"},article:"jlkasf",color:{title:"Silver",id:3},material:{title:"Metall",id:2},gender:{title:"Man",id:2},shape:{title:"Oval",id:1},image:"https://i4.stat01.com/1/8920/89197583/075a3e/ochki-turok-steinhard-anti-blue-glasses-fu001.jpg",price:0,is_available:!1,is_sunGlasses:!1,suggested:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return Object(N.a)(Object(N.a)(Object(N.a)({},e),t.rim),{},{suggested:Object(x.a)(t.rims)});default:return e}},te=Object(g.d)(Object(C.b)((function(e){return{id:e.rim.id,title:e.rim.title,brand:e.rim.brand,article:e.rim.article,color:e.rim.color,material:e.rim.material,shape:e.rim.shape,image:e.rim.image,gender:e.rim.gender,price:e.rim.price,is_available:e.rim.is_available,is_sunGlasses:e.rim.is_sunGlasses,suggested:Q(e.rim.suggested)}}),{setRimThunk:function(e){return function(){var t=Object(F.a)(S.a.mark((function t(a){var c,s,i;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(e);case 2:return c=t.sent,s={color:0,material:c.data.results[0].material.id,brand:c.data.results[0].brand.id,shape:c.data.results[0].shape.id,gender:c.data.results[0].gender.id,is_available:!0,sort_by_price:null},t.next=6,E(s);case 6:i=t.sent,a((r=c.data.results[0],n=i.data.results,{type:Z,rim:r,rims:n}));case 8:case"end":return t.stop()}var r,n}),t)})));return function(e){return t.apply(this,arguments)}}()}}),f.f)(Y),ae=a(67),ce=Object(g.c)({rims:H,rim:ee}),se=Object(g.e)(ce,Object(g.a)(ae.a));var ie=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2);return t[0],t[1],Object(b.jsx)(d.a,{children:Object(b.jsx)(C.a,{store:se,children:Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(m,{})}),Object(b.jsx)(h,{}),Object(b.jsx)("div",{className:"mt-4",children:Object(b.jsxs)(f.c,{children:[Object(b.jsx)(f.a,{path:"/rims/:id?",render:function(){return Object(b.jsx)(W,{})}}),Object(b.jsx)(f.a,{path:"/rim/:id?",render:function(){return Object(b.jsx)(te,{})}})]})})]})})})},re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,109)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(ie,{})}),document.getElementById("root")),re()},73:function(e,t,a){},74:function(e,t,a){}},[[103,1,2]]]);
//# sourceMappingURL=main.bbc4189f.chunk.js.map