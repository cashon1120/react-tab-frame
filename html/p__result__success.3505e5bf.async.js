(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"14J3":function(m,o,e){"use strict";var l=e("cIOH"),E=e.n(l),t=e("1GLa")},"5OYt":function(m,o,e){"use strict";var l=e("ODXe"),E=e("q1tI"),t=e.n(E),M=e("ACnJ");function u(){var O=Object(E.useState)({}),P=Object(l.a)(O,2),f=P[0],g=P[1];return Object(E.useEffect)(function(){var D=M.a.subscribe(function(T){g(T)});return function(){return M.a.unsubscribe(D)}},[]),f}o.a=u},BMrR:function(m,o,e){"use strict";var l=e("qrJ5");o.a=l.a},DnfT:function(m,o,e){},FRQA:function(m,o,e){"use strict";var l=e("GNNt"),E=e("wEI+"),t=e("DnfT"),M=e.n(t),u=e("q1tI"),O=e.n(u),P=e("TSYQ"),f=e.n(P),g=e("jYQm"),D=function(i){var A=Object(u.useContext)(g.a),a=i.children,y=i.contentWidth,v=i.className,B=i.style,x=Object(u.useContext)(E.b.ConfigContext),p=x.getPrefixCls,h=i.prefixCls||p("pro"),F=y||A.contentWidth,r="".concat(h,"-grid-content");return O.a.createElement("div",{className:f()(r,v,{wide:F==="Fixed"}),style:B},O.a.createElement("div",{className:"".concat(h,"-grid-content-children")},a))};o.a=D},IzEo:function(m,o,e){"use strict";var l=e("cIOH"),E=e.n(l),t=e("lnY3"),M=e.n(t),u=e("Znn+"),O=e("14J3"),P=e("jCWc")},bN3A:function(m,o,e){m.exports={title:"title___3VkUp","head-title":"head-title___1_I-R"}},bRQS:function(m,o,e){"use strict";var l=e("q1tI"),E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},t=E,M=e("6VBw"),u=function(f,g){return l.createElement(M.a,Object.assign({},f,{ref:g,icon:t}))};u.displayName="CheckOutlined";var O=o.a=l.forwardRef(u)},bx4M:function(m,o,e){"use strict";var l=e("rePB"),E=e("wx14"),t=e("q1tI"),M=e("TSYQ"),u=e.n(M),O=e("bT9E"),P=e("H84U"),f=function(r,s){var d={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&s.indexOf(n)<0&&(d[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,n=Object.getOwnPropertySymbols(r);c<n.length;c++)s.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(r,n[c])&&(d[n[c]]=r[n[c]]);return d},g=function(s){var d=s.prefixCls,n=s.className,c=s.hoverable,U=c===void 0?!0:c,L=f(s,["prefixCls","className","hoverable"]);return t.createElement(P.a,null,function(K){var R=K.getPrefixCls,W=R("card",d),b=u()("".concat(W,"-grid"),n,Object(l.a)({},"".concat(W,"-grid-hoverable"),U));return t.createElement("div",Object(E.a)({},L,{className:b}))})},D=g,T=function(r,s){var d={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&s.indexOf(n)<0&&(d[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,n=Object.getOwnPropertySymbols(r);c<n.length;c++)s.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(r,n[c])&&(d[n[c]]=r[n[c]]);return d},i=function(s){return t.createElement(P.a,null,function(d){var n=d.getPrefixCls,c=s.prefixCls,U=s.className,L=s.avatar,K=s.title,R=s.description,W=T(s,["prefixCls","className","avatar","title","description"]),b=n("card",c),H=u()("".concat(b,"-meta"),U),j=L?t.createElement("div",{className:"".concat(b,"-meta-avatar")},L):null,N=K?t.createElement("div",{className:"".concat(b,"-meta-title")},K):null,G=R?t.createElement("div",{className:"".concat(b,"-meta-description")},R):null,J=N||G?t.createElement("div",{className:"".concat(b,"-meta-detail")},N,G):null;return t.createElement("div",Object(E.a)({},W,{className:H}),j,J)})},A=i,a=e("ZTPi"),y=e("BMrR"),v=e("kPKH"),B=e("3Nzz"),x=function(r,s){var d={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&s.indexOf(n)<0&&(d[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,n=Object.getOwnPropertySymbols(r);c<n.length;c++)s.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(r,n[c])&&(d[n[c]]=r[n[c]]);return d};function p(r){var s=r.map(function(d,n){return t.createElement("li",{style:{width:"".concat(100/r.length,"%")},key:"action-".concat(n)},t.createElement("span",null,d))});return s}var h=function(s){var d,n,c=t.useContext(P.b),U=c.getPrefixCls,L=c.direction,K=t.useContext(B.b),R=function(Q){var I;(I=s.onTabChange)===null||I===void 0||I.call(s,Q)},W=function(){var Q;return t.Children.forEach(s.children,function(I){I&&I.type&&I.type===D&&(Q=!0)}),Q},b=s.prefixCls,H=s.className,j=s.extra,N=s.headStyle,G=N===void 0?{}:N,J=s.bodyStyle,Y=J===void 0?{}:J,$=s.title,Z=s.loading,X=s.bordered,re=X===void 0?!0:X,le=s.size,k=s.type,w=s.cover,V=s.actions,S=s.tabList,ce=s.children,q=s.activeTabKey,ie=s.defaultActiveTabKey,de=s.tabBarExtraContent,oe=s.hoverable,ee=s.tabProps,Ee=ee===void 0?{}:ee,_e=x(s,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),_=U("card",b),ue=Y.padding===0||Y.padding==="0px"?{padding:24}:void 0,C=t.createElement("div",{className:"".concat(_,"-loading-block")}),ve=t.createElement("div",{className:"".concat(_,"-loading-content"),style:ue},t.createElement(y.a,{gutter:8},t.createElement(v.a,{span:22},C)),t.createElement(y.a,{gutter:8},t.createElement(v.a,{span:8},C),t.createElement(v.a,{span:15},C)),t.createElement(y.a,{gutter:8},t.createElement(v.a,{span:6},C),t.createElement(v.a,{span:18},C)),t.createElement(y.a,{gutter:8},t.createElement(v.a,{span:13},C),t.createElement(v.a,{span:9},C)),t.createElement(y.a,{gutter:8},t.createElement(v.a,{span:4},C),t.createElement(v.a,{span:3},C),t.createElement(v.a,{span:16},C))),te=q!==void 0,me=Object(E.a)(Object(E.a)({},Ee),(d={},Object(l.a)(d,te?"activeKey":"defaultActiveKey",te?q:ie),Object(l.a)(d,"tabBarExtraContent",de),d)),ae,ne=S&&S.length?t.createElement(a.a,Object(E.a)({size:"large"},me,{className:"".concat(_,"-head-tabs"),onChange:R}),S.map(function(z){return t.createElement(a.a.TabPane,{tab:z.tab,disabled:z.disabled,key:z.key})})):null;($||j||ne)&&(ae=t.createElement("div",{className:"".concat(_,"-head"),style:G},t.createElement("div",{className:"".concat(_,"-head-wrapper")},$&&t.createElement("div",{className:"".concat(_,"-head-title")},$),j&&t.createElement("div",{className:"".concat(_,"-extra")},j)),ne));var Oe=w?t.createElement("div",{className:"".concat(_,"-cover")},w):null,fe=t.createElement("div",{className:"".concat(_,"-body"),style:Y},Z?ve:ce),Pe=V&&V.length?t.createElement("ul",{className:"".concat(_,"-actions")},p(V)):null,Me=Object(O.a)(_e,["onTabChange"]),se=le||K,Ce=u()(_,(n={},Object(l.a)(n,"".concat(_,"-loading"),Z),Object(l.a)(n,"".concat(_,"-bordered"),re),Object(l.a)(n,"".concat(_,"-hoverable"),oe),Object(l.a)(n,"".concat(_,"-contain-grid"),W()),Object(l.a)(n,"".concat(_,"-contain-tabs"),S&&S.length),Object(l.a)(n,"".concat(_,"-").concat(se),se),Object(l.a)(n,"".concat(_,"-type-").concat(k),!!k),Object(l.a)(n,"".concat(_,"-rtl"),L==="rtl"),n),H);return t.createElement("div",Object(E.a)({},Me,{className:Ce}),ae,Oe,fe,Pe)};h.Grid=D,h.Meta=A;var F=o.a=h},jCWc:function(m,o,e){"use strict";var l=e("cIOH"),E=e.n(l),t=e("1GLa")},kPKH:function(m,o,e){"use strict";var l=e("/kpp");o.a=l.a},lnY3:function(m,o,e){},pSjS:function(m,o,e){"use strict";e.r(o);var l=e("IzEo"),E=e("bx4M"),t=e("J+/v"),M=e("MoRW"),u=e("+L6B"),O=e("2/Rp"),P=e("bP8k"),f=e("gFTJ"),g=e("FJo9"),D=e("L41K"),T=e("UBYk"),i=e("9kvl"),A=e("q1tI"),a=e.n(A),y=e("FRQA"),v=e("bN3A"),B=e.n(v),x=D.a.Step,p=a.a.createElement("div",{className:B.a.title},a.a.createElement("div",{style:{margin:"8px 0 4px"}},a.a.createElement(i.a,{id:"resultandsuccess.success.step1-operator",defaultMessage:"Qu Lili"}),a.a.createElement(T.a,{style:{marginLeft:8,color:"#00A0E9"}})),a.a.createElement("div",null,"2016-12-12 12:32")),h=a.a.createElement("div",{style:{fontSize:12},className:B.a.title},a.a.createElement("div",{style:{margin:"8px 0 4px"}},a.a.createElement(i.a,{id:"resultandsuccess.success.step2-operator",defaultMessage:"Zhou Maomao"}),a.a.createElement("a",{href:""},a.a.createElement(T.a,{style:{color:"#00A0E9",marginLeft:8}}),a.a.createElement(i.a,{id:"resultandsuccess.success.step2-extra",defaultMessage:"Urge"})))),F=a.a.createElement(a.a.Fragment,null,a.a.createElement(f.b,{title:Object(i.d)({id:"resultandsuccess.success.operate-title",defaultMessage:"Project Name"})},a.a.createElement(f.b.Item,{label:a.a.createElement(i.a,{id:"resultandsuccess.success.operate-id",defaultMessage:"Project ID\uFF1A"})},"23421"),a.a.createElement(f.b.Item,{label:a.a.createElement(i.a,{id:"resultandsuccess.success.principal",defaultMessage:"Principal\uFF1A"})},a.a.createElement(i.a,{id:"resultandsuccess.success.step1-operator",defaultMessage:"Qu Lili"})),a.a.createElement(f.b.Item,{label:a.a.createElement(i.a,{id:"resultandsuccess.success.operate-time",defaultMessage:"Effective time\uFF1A"})},"2016-12-12 ~ 2017-12-12")),a.a.createElement("br",null),a.a.createElement(D.a,{progressDot:!0,current:1},a.a.createElement(x,{title:a.a.createElement("span",{style:{fontSize:14}},a.a.createElement(i.a,{id:"resultandsuccess.success.step1-title",defaultMessage:"Create project"})),description:p}),a.a.createElement(x,{title:a.a.createElement("span",{style:{fontSize:14}},a.a.createElement(i.a,{id:"resultandsuccess.success.step2-title",defaultMessage:"Departmental preliminary review"})),description:h}),a.a.createElement(x,{title:a.a.createElement("span",{style:{fontSize:14}},a.a.createElement(i.a,{id:"resultandsuccess.success.step3-title",defaultMessage:"Financial review"}))}),a.a.createElement(x,{title:a.a.createElement("span",{style:{fontSize:14}},a.a.createElement(i.a,{id:"resultandsuccess.success.step4-title",defaultMessage:"Finish"}))}))),r=a.a.createElement(A.Fragment,null,a.a.createElement(O.a,{type:"primary"},a.a.createElement(i.a,{id:"resultandsuccess.success.btn-return",defaultMessage:"Back to list"})),a.a.createElement(O.a,null,a.a.createElement(i.a,{id:"resultandsuccess.success.btn-project",defaultMessage:"View project"})),a.a.createElement(O.a,null,a.a.createElement(i.a,{id:"resultandsuccess.success.btn-print",defaultMessage:"Print"})));o.default=function(){return a.a.createElement(y.a,null,a.a.createElement(E.a,{bordered:!1},a.a.createElement(M.a,{status:"success",title:Object(i.d)({id:"resultandsuccess.success.title"}),subTitle:Object(i.d)({id:"resultandsuccess.success.description"}),extra:r,style:{marginBottom:16}},F)))}}}]);