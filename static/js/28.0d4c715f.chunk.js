/*! For license information please see 28.0d4c715f.chunk.js.LICENSE.txt */
(this["webpackJsonpseba-bikroy"]=this["webpackJsonpseba-bikroy"]||[]).push([[28],{181:function(e,r,t){"use strict";var n=t(182),d=t.n(n),c=t(1);r.a=function(e){var r=e.title,t=e.length,n=e.background,i=e.isFilter;return Object(c.jsxs)("div",{className:d.a.orderTitleWrapper,style:{backgroundColor:n},children:[Object(c.jsxs)("h3",{className:d.a.orderTitle,children:[r,": ",Object(c.jsxs)("span",{children:[" ",t]})]}),i&&Object(c.jsxs)("select",{className:d.a.orderSelect,name:"",id:"",children:[Object(c.jsx)("option",{value:"",children:"Today's"}),Object(c.jsx)("option",{value:"",children:"This Week"}),Object(c.jsx)("option",{value:"",children:"This Month"}),Object(c.jsx)("option",{value:"",children:"This Year"})]})]})}},182:function(e,r,t){e.exports={orderTitleWrapper:"OrderTitle_orderTitleWrapper__12Bub",orderTitle:"OrderTitle_orderTitle__3tjn3",orderSelect:"OrderTitle_orderSelect__3pMRx"}},183:function(e,r,t){"use strict";e.exports=t(184)},184:function(e,r,t){"use strict";var n=60103,d=60106,c=60107,i=60108,a=60114,l=60109,o=60110,s=60112,b=60113,u=60120,j=60115,O=60116,h=60121,f=60122,p=60117,m=60129,k=60131;if("function"===typeof Symbol&&Symbol.for){var x=Symbol.for;n=x("react.element"),d=x("react.portal"),c=x("react.fragment"),i=x("react.strict_mode"),a=x("react.profiler"),l=x("react.provider"),o=x("react.context"),s=x("react.forward_ref"),b=x("react.suspense"),u=x("react.suspense_list"),j=x("react.memo"),O=x("react.lazy"),h=x("react.block"),f=x("react.server.block"),p=x("react.fundamental"),m=x("react.debug_trace_mode"),k=x("react.legacy_hidden")}function g(e){if("object"===typeof e&&null!==e){var r=e.$$typeof;switch(r){case n:switch(e=e.type){case c:case a:case i:case b:case u:return e;default:switch(e=e&&e.$$typeof){case o:case s:case O:case j:case l:return e;default:return r}}case d:return r}}}var _=l,y=n,v=s,T=c,w=O,$=j,C=d,L=a,N=i,S=b;r.ContextConsumer=o,r.ContextProvider=_,r.Element=y,r.ForwardRef=v,r.Fragment=T,r.Lazy=w,r.Memo=$,r.Portal=C,r.Profiler=L,r.StrictMode=N,r.Suspense=S,r.isAsyncMode=function(){return!1},r.isConcurrentMode=function(){return!1},r.isContextConsumer=function(e){return g(e)===o},r.isContextProvider=function(e){return g(e)===l},r.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},r.isForwardRef=function(e){return g(e)===s},r.isFragment=function(e){return g(e)===c},r.isLazy=function(e){return g(e)===O},r.isMemo=function(e){return g(e)===j},r.isPortal=function(e){return g(e)===d},r.isProfiler=function(e){return g(e)===a},r.isStrictMode=function(e){return g(e)===i},r.isSuspense=function(e){return g(e)===b},r.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===c||e===a||e===m||e===i||e===b||e===u||e===k||"object"===typeof e&&null!==e&&(e.$$typeof===O||e.$$typeof===j||e.$$typeof===l||e.$$typeof===o||e.$$typeof===s||e.$$typeof===p||e.$$typeof===h||e[0]===f)},r.typeOf=g},185:function(e,r,t){"use strict";var n=t(3),d=t(186),c=t.n(d),i=t(1);r.a=function(e){var r=e.orderLinks;return Object(i.jsx)("div",{className:c.a.orderLink,children:r.map((function(e){return Object(i.jsx)(n.b,{to:"".concat(e.link),className:c.a.orderLinkItem,style:{backgroundColor:e.background},children:e.title},e.id)}))})}},186:function(e,r,t){e.exports={orderLink:"OrderLink_orderLink__3VKDM",orderLinkItem:"OrderLink_orderLinkItem__3f-g9"}},187:function(e,r,t){"use strict";t.d(r,"b",(function(){return n})),t.d(r,"c",(function(){return d})),t.d(r,"a",(function(){return c}));var n=[{id:1,link:"/cms/orders/new-order",title:"New Order",background:"#004a7c"},{id:2,link:"/cms/orders/all-pending-order",title:"Pending Order",background:"#e74c3c"},{id:3,link:"/cms/orders/all-pickup-order",title:"Picked Order",background:"rgb(255, 179, 0)"},{id:4,link:"/cms/orders/all-residual-order",title:"Residual Order",background:"#3498db"},{id:5,link:"/cms/orders/all-cancel-order",title:"Cancel Order",background:"#ff0000"},{id:6,link:"/cms/orders/all-complete-order",title:"Complete Order",background:"green"},{id:6,link:"/cms/orders/total-orders",title:"Total Orders",background:"#333"}],d=[{id:1,link:"/vendor/dashboard/orders/new-order",title:"New Order",background:"#004a7c"},{id:2,link:"/vendor/dashboard/orders/all-pending-order",title:"Pending Order",background:"#e74c3c"},{id:3,link:"/vendor/dashboard/orders/all-pickup-order",title:"Picked Order",background:"rgb(255, 179, 0)"},{id:4,link:"/vendor/dashboard/orders/all-residual-order",title:"Residual Order",background:"#3498db"},{id:1,link:"/vendor/dashboard/orders/all-cancel-order",title:"Cancel Order",background:"#ff0000"},{id:1,link:"/vendor/dashboard/orders/all-complete-order",title:"Complete Order",background:"green"}],c=[{id:1,link:"/delivery-man/orders/new-order",title:"New Order",background:"#004a7c"},{id:2,link:"/delivery-man/orders/all-pending-order",title:"Pending Order",background:"#e74c3c"},{id:3,link:"/delivery-man/orders/all-pickup-order",title:"Picked Order",background:"rgb(255, 179, 0)"},{id:4,link:"/delivery-man/orders/all-residual-order",title:"Residual Order",background:"#3498db"},{id:1,link:"/delivery-man/orders/all-cancel-order",title:"Cancel Order",background:"#ff0000"},{id:1,link:"/delivery-man/orders/all-complete-order",title:"Complete Order",background:"green"}]},200:function(e,r,t){e.exports={newOrderTableWrapper:"Order_newOrderTableWrapper__2o_hn",newOrderTable:"Order_newOrderTable__3ScLQ",invoice:"Order_invoice__3uB5b",details:"Order_details__3-s-m",location:"Order_location__1dGmH",accept:"Order_accept__1f8Ff",cancel:"Order_cancel__267Ey",orderSelect:"Order_orderSelect__2THRE",times:"Order_times__2dGQf",payment:"Order_payment__192yV"}},201:function(e,r,t){"use strict";var n=t(2),d=t.n(n),c=t(183),i=t(1),a=d.a.lazy((function(){return t.e(51).then(t.bind(null,216))}));r.a=function(e){var r=e.data,t=e.idName;return Object(i.jsx)("div",{class:"modal fade",id:"".concat(t),tabindex:"-1","aria-labelledby":"".concat(t,"Label"),"aria-hidden":"true",children:Object(i.jsx)("div",{class:"modal-dialog modal-xl",children:Object(i.jsxs)("div",{class:"modal-content",children:[Object(i.jsxs)("div",{class:"modal-header",children:[Object(i.jsx)("h5",{class:"modal-title",id:"".concat(t,"Label"),children:"Order Details Modal"}),Object(i.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(i.jsx)("div",{class:"modal-body",children:Object(i.jsx)(c.Suspense,{fallback:"Loading ...",children:Object(i.jsx)(a,{data:r})})}),Object(i.jsx)("div",{class:"modal-footer",children:Object(i.jsx)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"})})]})})})}},478:function(e,r,t){"use strict";t.r(r);var n=t(185),d=t(187),c=t(181),i=t(200),a=t.n(i),l=t(201),o=t(1);r.default=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:a.a.newOrder,children:[Object(o.jsx)(c.a,{title:"Residual Orders",length:5,background:"#3498db",isFilter:!0}),Object(o.jsx)("div",{className:a.a.newOrderTableWrapper,children:Object(o.jsxs)("table",{className:a.a.newOrderTable,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"SL"}),Object(o.jsx)("th",{children:"Date & Time"}),Object(o.jsx)("th",{children:"Amount"}),Object(o.jsx)("th",{children:"Invoice"}),Object(o.jsx)("th",{children:"O.Details"}),Object(o.jsx)("th",{children:"Location"}),Object(o.jsx)("th",{children:"Delivery Man"}),Object(o.jsx)("th",{children:"Action"})]})}),Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"1"}),Object(o.jsxs)("td",{children:["20-10-21",Object(o.jsx)("br",{}),"10.25 am"]}),Object(o.jsx)("td",{children:"\u09f345"}),Object(o.jsx)("td",{children:" IV00025 "}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{"data-bs-toggle":"modal","data-bs-target":"#vendorOrderDetailsModal",className:a.a.details,children:"Details"})}),Object(o.jsxs)("td",{className:a.a.location,children:[Object(o.jsx)("span",{children:"Dhaka"}),Object(o.jsx)("span",{children:"Banani"}),Object(o.jsx)("span",{children:"Chairman Bari"})]}),Object(o.jsx)("td",{children:"Morshed Ali"}),Object(o.jsx)("td",{children:Object(o.jsx)("option",{style:{background:"#3498db",color:"color"},value:"",children:"Residual"})})]})})]})}),Object(o.jsx)(n.a,{orderLinks:d.c})]}),Object(o.jsx)(l.a,{data:[],idName:"vendorOrderDetailsModal"})]})}}}]);
//# sourceMappingURL=28.0d4c715f.chunk.js.map