(this["webpackJsonpreact-memory-game"]=this["webpackJsonpreact-memory-game"]||[]).push([[0],{34:function(e,t,c){},36:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(20),r=c.n(i),a=c(2),s=c(6),u=[{id:1,visible:!1,value:1},{id:2,visible:!1,value:1},{id:3,visible:!1,value:2},{id:4,visible:!1,value:2},{id:5,visible:!1,value:3},{id:6,visible:!1,value:3},{id:7,visible:!1,value:4},{id:8,visible:!1,value:4},{id:9,visible:!1,value:5},{id:10,visible:!1,value:5},{id:11,visible:!1,value:6},{id:12,visible:!1,value:6}],d=c(11),l=(c(34),c(3)),o=function(e){var t=e.card,c=e.cards,n=e.selectedCards,i=e.setCards,r=e.setSelectedCards;return Object(l.jsx)("div",{className:"card",onClick:function(){return function(e){i(function(e){return c.map((function(t){var c=Object(a.a)(Object(a.a)({},t),{},{visible:!0});return t.id===e.id?c:t}))}(e)),r([].concat(Object(d.a)(n),[e]))}(t)},children:Object(l.jsxs)("div",{className:"card-inner ".concat(t.visible?"flip-card":""),children:[Object(l.jsx)("div",{className:"card-front",children:"\u2605"}),Object(l.jsx)("div",{className:"card-back",children:t.value})]})})},b=function(){document.querySelectorAll(".card").forEach((function(e){var t=Math.floor(12*Math.random());e.style.order=t}))},j=(c(36),function(e){var t=e.setCards;return Object(l.jsx)("div",{className:"button-container",children:Object(l.jsx)("button",{className:"reset-button",onClick:function(){t(u),b()},children:"\u21bb Reset"})})}),v=c(25),f=(c(38),function(e){var t=e.cards,c=Object(n.useRef)(0),i=Object(n.useState)(!1),r=Object(s.a)(i,2),a=r[0],u=r[1],d={transform:Object(v.useSpring)({x:a?1:0}).x.to({range:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],output:[-4,6,-8,8,-8,8,-8,6,-4,0]}).to((function(e){return"translate3d(".concat(e,"px, 0, 0)")}))};return Object(n.useEffect)((function(){return t.every((function(e){return!0===e.visible}))&&(c.current++,u(!0)),function(){return u(!1)}}),[t]),Object(l.jsxs)(v.animated.div,{className:"score-counter-container",style:d,children:[Object(l.jsx)("div",{className:"score-counter-text-container",children:Object(l.jsx)("h1",{className:"score-counter",children:"Score: "})}),Object(l.jsx)("div",{className:"score-counter-text-container",children:Object(l.jsx)("h1",{children:c.current})})]})}),O=(c(39),function(){var e=Object(n.useState)(u),t=Object(s.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)([]),d=Object(s.a)(r,2),v=d[0],O=d[1];Object(n.useEffect)((function(){b()}),[]),Object(n.useEffect)((function(){setTimeout((function(){m(v)}),1e3)}),[v]);var m=function(e){var t=Object(s.a)(e,2),n=t[0],r=t[1];if(2===e.length){if(n.value!==r.value){var u=c.map((function(e){var t=Object(a.a)(Object(a.a)({},e),{},{visible:!1});return e.id===n.id||e.id===r.id?t:e}));i(u)}O([])}};return Object(l.jsxs)("div",{children:[Object(l.jsx)(f,{cards:c}),Object(l.jsx)("div",{className:"cards-list",children:c.map((function(e){return Object(l.jsx)(o,{card:e,cards:c,selectedCards:v,setCards:i,setSelectedCards:O},e.id)}))}),Object(l.jsx)(j,{setCards:i})]})}),m=(c(40),function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("section",{className:"cards-container",children:Object(l.jsx)(O,{})})})});r.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.05703dc6.chunk.js.map