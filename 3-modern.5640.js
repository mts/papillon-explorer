/*! For license information please see 3-modern.5640.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{75:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(23),r=t.n(a),c=t(24);function l(){const e=r()(["\n  query GetPages {\n    pages(pageSize: 10) {\n      pages {\n        id\n        name\n      }\n    }\n  }\n"]);return l=function(){return e},e}const o=t.n(c)()(l())},82:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(76),l=t(75),o=t(22);const i={page:t(15).object.isRequired};var s=t(10);const u=()=>r.a.createElement("div",null,"Under construction"," ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"🙂")),p=e=>{let{page:n}=e;return r.a.createElement("div",null,r.a.createElement("h2",null,n.name),r.a.createElement(u,null),r.a.createElement(o.b,{to:s.i}," Back to Home Page"))};p.propTypes=i,t.d(n,"AlertsPage",(function(){return d}));const d=()=>{var e;const{data:n}=Object(c.a)(l.a);return(null==n?void 0:null===(e=n.pages)||void 0===e?void 0:e.pages)?r.a.createElement(p,{page:n.pages.pages.find(e=>"alerts"===e.id)}):null};n.default=d}}]);
//# sourceMappingURL=3-modern.5640.js.map