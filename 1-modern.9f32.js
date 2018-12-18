/*!
 * @project        Papillon Explorer
 * @name           1-modern.9f32.js
 * @author         MTS
 * @build          Tue, Dec 18, 2018 3:49 PM ET
 * @release        12d6be2ae44709088cb70f16214dd8c988d230d4 [npm-publish-improve-docs]
 * @copyright      Copyright (c) 2018 MTS
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{156:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var n=r(65);const o=r.n(n).a`
  query GetPages {
    pages(pageSize: 10) {
      pages {
        id
        name
      }
    }
  }
`},157:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(1),i=r.n(a),c=r(3),u=r.n(c),s=r(64),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},y=function(e){function t(){var r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return r=n=l(this,e.call.apply(e,[this].concat(a))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!f(e)){e.preventDefault();var t=n.context.router.history,r=n.props,o=r.replace,a=r.to;o?t.replace(a):t.push(a)}},l(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),r=e.innerRef,n=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==t,'You must specify the "to" property');var a=this.context.router.history,i="string"==typeof t?Object(s.b)(t,null,null,a.location):t,c=a.createHref(i);return o.a.createElement("a",p({},n,{onClick:this.handleClick,href:c,ref:r}))},t}(o.a.Component);y.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},y.defaultProps={replace:!1},y.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=y},167:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(66),i=r(157),c=r(15),u=r(156);var s=()=>o.a.createElement(a.Query,{query:u.a},e=>{let t=e.data;return t.pages&&t.pages.pages?o.a.createElement("div",null,o.a.createElement("h2",null,t.pages.pages.find(e=>"alerts"===e.id).name),o.a.createElement("div",null,"Under construction 🙂",o.a.createElement(i.a,{to:c.i}," Back to Home Page"))):null});t.default=s}}]);
//# sourceMappingURL=1-modern.9f32.js.map