(this["webpackJsonptodolist-ts"]=this["webpackJsonptodolist-ts"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(1),a=n.n(i),r=n(6),s=n.n(r),d=n(4),o=n(7),l=(n(13),function(t){var e=t.list,n=t.dispatch;return Object(c.jsx)("div",{className:"list-container",children:e.map((function(t){return Object(c.jsx)("div",{className:"list-item-main-div",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:t.title}),Object(c.jsx)("h3",{onClick:function(){return n({type:"remove",payload:{title:t.title,id:t.id}})},children:"Remove"})]})},t.id)}))})}),u=n(16),j=function(t){var e=t.dispatch,n=Object(i.useState)(""),a=Object(d.a)(n,2),r=a[0],s=a[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("form",{className:"",onSubmit:function(t){return function(t){t.preventDefault(),r&&(e({type:"add",payload:{title:r,id:Object(u.a)()}}),s(""))}(t)},children:Object(c.jsx)("input",{autoFocus:!0,type:"text",placeholder:"type something",value:r,onChange:function(t){return s(t.target.value)}})})})},h="add",b="remove",p="edit",O=function(t,e){switch(e.type){case h:return[].concat(Object(o.a)(t),[{title:e.payload.title,id:e.payload.id}]);case b:return t.filter((function(t){return e.payload.id!==t.id}));case p:default:return t}},f=function(){var t=Object(i.useReducer)(O,[]),e=Object(d.a)(t,2),n=e[0],a=e[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j,{dispatch:a}),Object.keys(n).length?Object(c.jsx)(l,{list:n,dispatch:a}):Object(c.jsx)("h1",{children:"There's no tasks"})]})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),a(t),r(t)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),m()}},[[14,1,2]]]);
//# sourceMappingURL=main.1d9220bb.chunk.js.map