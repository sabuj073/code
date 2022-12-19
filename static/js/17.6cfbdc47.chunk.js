/*! For license information please see 17.6cfbdc47.chunk.js.LICENSE.txt */
(this["webpackJsonpseba-bikroy"]=this["webpackJsonpseba-bikroy"]||[]).push([[17],{181:function(e,r,t){"use strict";var n=t(182),d=t.n(n),a=t(1);r.a=function(e){var r=e.title,t=e.length,n=e.background,c=e.isFilter;return Object(a.jsxs)("div",{className:d.a.orderTitleWrapper,style:{backgroundColor:n},children:[Object(a.jsxs)("h3",{className:d.a.orderTitle,children:[r,": ",Object(a.jsxs)("span",{children:[" ",t]})]}),c&&Object(a.jsxs)("select",{className:d.a.orderSelect,name:"",id:"",children:[Object(a.jsx)("option",{value:"",children:"Today's"}),Object(a.jsx)("option",{value:"",children:"This Week"}),Object(a.jsx)("option",{value:"",children:"This Month"}),Object(a.jsx)("option",{value:"",children:"This Year"})]})]})}},182:function(e,r,t){e.exports={orderTitleWrapper:"OrderTitle_orderTitleWrapper__12Bub",orderTitle:"OrderTitle_orderTitle__3tjn3",orderSelect:"OrderTitle_orderSelect__3pMRx"}},183:function(e,r,t){"use strict";e.exports=t(184)},184:function(e,r,t){"use strict";var n=60103,d=60106,a=60107,c=60108,i=60114,l=60109,s=60110,o=60112,b=60113,u=60120,j=60115,O=60116,h=60121,m=60122,p=60117,f=60129,x=60131;if("function"===typeof Symbol&&Symbol.for){var k=Symbol.for;n=k("react.element"),d=k("react.portal"),a=k("react.fragment"),c=k("react.strict_mode"),i=k("react.profiler"),l=k("react.provider"),s=k("react.context"),o=k("react.forward_ref"),b=k("react.suspense"),u=k("react.suspense_list"),j=k("react.memo"),O=k("react.lazy"),h=k("react.block"),m=k("react.server.block"),p=k("react.fundamental"),f=k("react.debug_trace_mode"),x=k("react.legacy_hidden")}function v(e){if("object"===typeof e&&null!==e){var r=e.$$typeof;switch(r){case n:switch(e=e.type){case a:case i:case c:case b:case u:return e;default:switch(e=e&&e.$$typeof){case s:case o:case O:case j:case l:return e;default:return r}}case d:return r}}}var g=l,y=n,_=o,w=a,C=O,T=j,N=d,L=i,$=c,S=b;r.ContextConsumer=s,r.ContextProvider=g,r.Element=y,r.ForwardRef=_,r.Fragment=w,r.Lazy=C,r.Memo=T,r.Portal=N,r.Profiler=L,r.StrictMode=$,r.Suspense=S,r.isAsyncMode=function(){return!1},r.isConcurrentMode=function(){return!1},r.isContextConsumer=function(e){return v(e)===s},r.isContextProvider=function(e){return v(e)===l},r.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},r.isForwardRef=function(e){return v(e)===o},r.isFragment=function(e){return v(e)===a},r.isLazy=function(e){return v(e)===O},r.isMemo=function(e){return v(e)===j},r.isPortal=function(e){return v(e)===d},r.isProfiler=function(e){return v(e)===i},r.isStrictMode=function(e){return v(e)===c},r.isSuspense=function(e){return v(e)===b},r.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===i||e===f||e===c||e===b||e===u||e===x||"object"===typeof e&&null!==e&&(e.$$typeof===O||e.$$typeof===j||e.$$typeof===l||e.$$typeof===s||e.$$typeof===o||e.$$typeof===p||e.$$typeof===h||e[0]===m)},r.typeOf=v},185:function(e,r,t){"use strict";var n=t(3),d=t(186),a=t.n(d),c=t(1);r.a=function(e){var r=e.orderLinks;return Object(c.jsx)("div",{className:a.a.orderLink,children:r.map((function(e){return Object(c.jsx)(n.b,{to:"".concat(e.link),className:a.a.orderLinkItem,style:{backgroundColor:e.background},children:e.title},e.id)}))})}},186:function(e,r,t){e.exports={orderLink:"OrderLink_orderLink__3VKDM",orderLinkItem:"OrderLink_orderLinkItem__3f-g9"}},187:function(e,r,t){"use strict";t.d(r,"b",(function(){return n})),t.d(r,"c",(function(){return d})),t.d(r,"a",(function(){return a}));var n=[{id:1,link:"/cms/orders/new-order",title:"New Order",background:"#004a7c"},{id:2,link:"/cms/orders/all-pending-order",title:"Pending Order",background:"#e74c3c"},{id:3,link:"/cms/orders/all-pickup-order",title:"Picked Order",background:"rgb(255, 179, 0)"},{id:4,link:"/cms/orders/all-residual-order",title:"Residual Order",background:"#3498db"},{id:5,link:"/cms/orders/all-cancel-order",title:"Cancel Order",background:"#ff0000"},{id:6,link:"/cms/orders/all-complete-order",title:"Complete Order",background:"green"},{id:6,link:"/cms/orders/total-orders",title:"Total Orders",background:"#333"}],d=[{id:1,link:"/vendor/dashboard/orders/new-order",title:"New Order",background:"#004a7c"},{id:2,link:"/vendor/dashboard/orders/all-pending-order",title:"Pending Order",background:"#e74c3c"},{id:3,link:"/vendor/dashboard/orders/all-pickup-order",title:"Picked Order",background:"rgb(255, 179, 0)"},{id:4,link:"/vendor/dashboard/orders/all-residual-order",title:"Residual Order",background:"#3498db"},{id:1,link:"/vendor/dashboard/orders/all-cancel-order",title:"Cancel Order",background:"#ff0000"},{id:1,link:"/vendor/dashboard/orders/all-complete-order",title:"Complete Order",background:"green"}],a=[{id:1,link:"/delivery-man/orders/new-order",title:"New Order",background:"#004a7c"},{id:2,link:"/delivery-man/orders/all-pending-order",title:"Pending Order",background:"#e74c3c"},{id:3,link:"/delivery-man/orders/all-pickup-order",title:"Picked Order",background:"rgb(255, 179, 0)"},{id:4,link:"/delivery-man/orders/all-residual-order",title:"Residual Order",background:"#3498db"},{id:1,link:"/delivery-man/orders/all-cancel-order",title:"Cancel Order",background:"#ff0000"},{id:1,link:"/delivery-man/orders/all-complete-order",title:"Complete Order",background:"green"}]},192:function(e,r,t){"use strict";var n=t(2),d=t.n(n),a=t(183),c=t(1),i=d.a.lazy((function(){return t.e(3).then(t.bind(null,191))}));r.a=function(e){var r=e.data,t=e.idName;return Object(c.jsx)("div",{class:"modal fade",id:"".concat(t),tabindex:"-1","aria-labelledby":"".concat(t,"Label"),"aria-hidden":"true",children:Object(c.jsx)("div",{class:"modal-dialog modal-xl",children:Object(c.jsxs)("div",{class:"modal-content",children:[Object(c.jsxs)("div",{class:"modal-header",children:[Object(c.jsx)("h5",{class:"modal-title",id:"".concat(t,"Label"),children:"Invoice Modal"}),Object(c.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(c.jsx)("div",{class:"modal-body",children:Object(c.jsx)(a.Suspense,{fallback:"Loading ...",children:Object(c.jsx)(i,{data:r})})}),Object(c.jsx)("div",{class:"modal-footer",children:Object(c.jsx)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"})})]})})})}},193:function(e,r,t){e.exports={newOrderTableWrapper:"Order_newOrderTableWrapper__2jvTO",newOrderTable:"Order_newOrderTable__2xQ7X",invoice:"Order_invoice__2HuDT",details:"Order_details__3nYXu",location:"Order_location__1bvR2",accept:"Order_accept__1Xbf0",cancel:"Order_cancel__19wU-",orderSelect:"Order_orderSelect__3R0Jv",times:"Order_times__3GLaV",payment:"Order_payment__1DqbC"}},194:function(e,r,t){"use strict";var n=t(2),d=t.n(n),a=t(183),c=t(1),i=d.a.lazy((function(){return t.e(58).then(t.bind(null,212))}));r.a=function(e){var r=e.data,t=e.idName;return Object(c.jsx)("div",{class:"modal fade",id:"".concat(t),tabindex:"-1","aria-labelledby":"".concat(t,"Label"),"aria-hidden":"true",children:Object(c.jsx)("div",{class:"modal-dialog modal-xl",children:Object(c.jsxs)("div",{class:"modal-content",children:[Object(c.jsxs)("div",{class:"modal-header",children:[Object(c.jsx)("h5",{class:"modal-title",id:"".concat(t,"Label"),children:"Order Details Modal"}),Object(c.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(c.jsx)("div",{class:"modal-body",children:Object(c.jsx)(a.Suspense,{fallback:"Loading ...",children:Object(c.jsx)(i,{data:r})})}),Object(c.jsx)("div",{class:"modal-footer",children:Object(c.jsx)("button",{type:"button",class:"btn btn-sm btn-secondary","data-bs-dismiss":"modal",children:"Close"})})]})})})}},464:function(e,r,t){"use strict";t.r(r);var n=t(185),d=t(187),a=t(181),c=t(192),i=t(193),l=t.n(i),s=t(194),o=t(1);r.default=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:l.a.newOrder,children:[Object(o.jsx)(a.a,{title:"Cancel Orders",length:5,background:"red",isFilter:!0}),Object(o.jsx)("div",{className:l.a.newOrderTableWrapper,children:Object(o.jsxs)("table",{className:l.a.newOrderTable,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"SL"}),Object(o.jsx)("th",{children:"Date & Time"}),Object(o.jsx)("th",{children:"Amount"}),Object(o.jsx)("th",{children:"Invoice"}),Object(o.jsx)("th",{children:"O.Details"}),Object(o.jsx)("th",{children:"Location"}),Object(o.jsx)("th",{children:"Delivery Man"}),Object(o.jsx)("th",{children:"Action"})]})}),Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"1"}),Object(o.jsxs)("td",{children:["20-10-21",Object(o.jsx)("br",{}),"10.25 am"]}),Object(o.jsx)("td",{children:"\u09f345"}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{"data-bs-toggle":"modal","data-bs-target":"#invoiceModalNew",className:l.a.invoice,children:"V0125"})}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{"data-bs-toggle":"modal","data-bs-target":"#orderDetailsNew",className:l.a.details,children:"Details"})}),Object(o.jsxs)("td",{className:l.a.location,children:[Object(o.jsx)("span",{children:"Dhaka"}),Object(o.jsx)("span",{children:"Banani"}),Object(o.jsx)("span",{children:"Chairman Bari"})]}),Object(o.jsx)("td",{children:"Morshed Ali"}),Object(o.jsx)("td",{children:Object(o.jsxs)("select",{className:l.a.orderSelect,name:"",id:"",children:[Object(o.jsx)("option",{style:{background:"red"},value:"",children:"Cancel"}),Object(o.jsx)("option",{style:{background:"green"},value:"",children:"Complete"}),Object(o.jsx)("option",{style:{background:"red"},value:"",children:"Spam"})]})})]})})]})}),Object(o.jsx)(n.a,{orderLinks:d.a})]}),Object(o.jsx)(c.a,{data:[],idName:"invoiceModalNew"}),Object(o.jsx)(s.a,{data:[],idName:"orderDetailsNew"})]})}}}]);
//# sourceMappingURL=17.6cfbdc47.chunk.js.map