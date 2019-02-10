/*!
 * @project        Papillon Explorer
 * @name           5-modern.dbb7.js
 * @author         MTS
 * @build          Sun, Feb 10, 2019 12:27 PM ET
 * @release        87a3058c6e6240201ca91c7b7c605707ad588340 [develop]
 * @copyright      Copyright (c) 2019 MTS
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{158:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var n=r(67);const a=r.n(n).a`
  query GetPages {
    pages(pageSize: 10) {
      pages {
        id
        name
      }
    }
  }
`},159:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(2),i=r.n(o),c=r(5),u=r.n(c),p=r(69),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},y=function(e){function t(){var r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return r=n=l(this,e.call.apply(e,[this].concat(o))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!f(e)){e.preventDefault();var t=n.context.router.history,r=n.props,a=r.replace,o=r.to;a?t.replace(o):t.push(o)}},l(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),r=e.innerRef,n=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,i="string"==typeof t?Object(p.b)(t,null,null,o.location):t,c=o.createHref(i);return a.a.createElement("a",s({},n,{onClick:this.handleClick,href:c,ref:r}))},t}(a.a.Component);y.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},y.defaultProps={replace:!1},y.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=y},167:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(68),i=r(158),c=r(2),u=r(159),p=r(6);const s=e=>{let t=e.page;return a.a.createElement("div",null,a.a.createElement("h2",null,t.name),a.a.createElement("div",null,"Under construction"," ",a.a.createElement("span",{role:"img","aria-label":"emoji"},"🙂"),a.a.createElement(u.a,{to:p.i}," Back to Home Page")))};s.propTypes={page:c.object.isRequired};var l=s;t.default=(()=>a.a.createElement(o.Query,{query:i.a},e=>{let t=e.data;return t.pages&&t.pages.pages?a.a.createElement(l,{page:t.pages.pages.find(e=>"breadcrumb"===e.id)}):null}))}}]);
//# sourceMappingURL=5-modern.dbb7.js.map