(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),i=n(3),o=n.n(i),s=(n(9),n(4)),u=(n.p,n(10),n(0));var a=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],r=e[1];return Object(c.useEffect)((function(){fetch("http://hn.algolia.com/api/v1/search?query=react").then((function(t){return t.json()})).then((function(t){console.log(t),r(t.hits)})).catch((function(t){return console.error(t)}))}),[]),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("main",{children:[Object(u.jsx)("h3",{children:"Users"}),n&&n.map((function(t,e){return Object(u.jsx)("p",{children:t.title},e)}))]})})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),i(t),o(t)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(a,{})}),document.getElementById("root")),h()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.93a85ef0.chunk.js.map