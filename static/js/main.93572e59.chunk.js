(this["webpackJsonpcount-round"]=this["webpackJsonpcount-round"]||[]).push([[0],{11:function(t,n,e){},12:function(t,n,e){"use strict";e.r(n);var c=e(1),o=e.n(c),s=e(5),r=e.n(s),a=e(2),i=e(0),j=function(t){return Object(i.jsxs)("p",{className:"voltas",children:[Object(i.jsx)("span",{children:t.voltas})," ",Object(i.jsx)("br",{}),"Voltas"]})},u=function(t){var n=t.tempo,e=Math.round(n/60),c=Math.round(n%60),o=c<10?"0"+c:c,s="".concat(e<10?"0"+e:e,":").concat(o);return Object(i.jsxs)("p",{className:"tempo",children:[s," ",Object(i.jsx)("br",{}),Object(i.jsx)("span",{children:"Tempo medio por voltas"})]})},b=(e(11),e(4)),l=function(t){return Object(i.jsx)("button",Object(b.a)(Object(b.a)({},t),{},{children:t.btn}))};var O=function(){var t=Object(c.useState)(0),n=Object(a.a)(t,2),e=n[0],o=n[1],s=Object(c.useState)(!1),r=Object(a.a)(s,2),b=r[0],O=r[1],f=Object(c.useState)(0),d=Object(a.a)(f,2),p=d[0],x=d[1];return Object(c.useEffect)((function(){console.info(b);var t=null;return b&&(t=setInterval((function(){x((function(t){return t+1}))}),100)),function(){t&&clearInterval(t)}}),[b]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{voltas:e}),Object(i.jsx)(l,{className:"bigger",btn:"+",onClick:function(){o(e+1),0===e&&O(!b)}}),Object(i.jsx)(l,{className:"bigger",btn:"-",onClick:function(){console.info("dencrement "+e),e>0&&o(e-1),1===e&&(x(0),o(0),O(!1))}}),e>0&&Object(i.jsx)(u,{tempo:p}),Object(i.jsx)(l,{onClick:function(){O(!b),b||0!==e||o(e+1)},btn:"Iniciar"}),Object(i.jsx)(l,{onClick:function(){x(0),o(0),O(!1)},btn:"Reiniciar"})]})},f=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,13)).then((function(n){var e=n.getCLS,c=n.getFID,o=n.getFCP,s=n.getLCP,r=n.getTTFB;e(t),c(t),o(t),s(t),r(t)}))};r.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),f()}},[[12,1,2]]]);
//# sourceMappingURL=main.93572e59.chunk.js.map