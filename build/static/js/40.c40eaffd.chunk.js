(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[40],{126:function(t,e,n){"use strict";n.d(e,"j",(function(){return s})),n.d(e,"e",(function(){return l})),n.d(e,"d",(function(){return i})),n.d(e,"i",(function(){return p})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return h})),n.d(e,"f",(function(){return f})),n.d(e,"g",(function(){return m})),n.d(e,"h",(function(){return b})),n.d(e,"a",(function(){return O}));var a=n(9),r=n.n(a),c=n(12),u=n(19),o=n.n(u),s=function(){var t=Object(c.a)(r.a.mark((function t(e,n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("".concat("http://localhost:8000/api","/user/cart"),{cart:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat("http://localhost:8000/api","/user/cart"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=Object(c.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.delete("".concat("http://localhost:8000/api","/user/cart"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(r.a.mark((function t(e,n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("".concat("http://localhost:8000/api","/user/address"),{address:n},{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(r.a.mark((function t(e,n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("".concat("http://localhost:8000/api","/user/cart/coupon"),{coupon:n},{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(r.a.mark((function t(e,n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("".concat("http://localhost:8000/api","/user/order"),{stripeResponse:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat("http://localhost:8000/api","/user/orders"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(c.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat("http://localhost:8000/api","/user/wishlist"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(r.a.mark((function t(e,n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.put("".concat("http://localhost:8000/api","/user/wishlist/").concat(e),{},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),O=function(){var t=Object(c.a)(r.a.mark((function t(e,n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("".concat("http://localhost:8000/api","/user/wishlist"),{productId:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},476:function(t,e,n){"use strict";n.r(e);var a=n(24),r=n(99),c=n(0),u=n.n(c),o=n(18),s=n(34),l=n(126),i=n(296),p=n.n(i);n(400);e.default=function(t){var e=t.history,n=Object(c.useState)([]),i=Object(r.a)(n,2),d=i[0],h=i[1],f=Object(c.useState)(0),m=Object(r.a)(f,2),b=m[0],O=m[1],v=Object(c.useState)(""),E=Object(r.a)(v,2),j=E[0],k=E[1],y=Object(c.useState)(!1),w=Object(r.a)(y,2),x=w[0],g=w[1],N=Object(c.useState)(""),C=Object(r.a)(N,2),P=C[0],S=C[1],A=Object(c.useState)(0),D=Object(r.a)(A,2),I=D[0],T=D[1],_=Object(c.useState)(""),J=Object(r.a)(_,2),L=J[0],R=J[1],U=Object(o.b)(),F=Object(o.c)((function(t){return Object(a.a)({},t)})).user;Object(c.useEffect)((function(){Object(l.e)(F.token).then((function(t){console.log("user cart res",JSON.stringify(t.data,null,4)),h(t.data.products),O(t.data.cartTotal)}))}),[]);var G=function(){Object(l.i)(F.token,j).then((function(t){t.data.ok&&(g(!0),s.b.success("Address saved"))}))},$=function(){console.log("send coupon to backend",P),Object(l.b)(F.token,P).then((function(t){console.log("RES ON COUPON APPLIED",t.data),t.data&&(T(t.data),U({type:"COUPON_APPLIED",payload:!0})),t.data.err&&(R(t.data.err),U({type:"COUPON_APPLIED",payload:!1}))}))};return u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-6"},u.a.createElement("h4",null,"Delivery Address"),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{theme:"snow",value:j,onChange:k}),u.a.createElement("button",{className:"btn btn-primary mt-2",onClick:G},"Save")),u.a.createElement("hr",null),u.a.createElement("h4",null,"Got Coupon?"),u.a.createElement("br",null),u.a.createElement(u.a.Fragment,null,u.a.createElement("input",{onChange:function(t){S(t.target.value),R("")},value:P,type:"text",className:"form-control"}),u.a.createElement("button",{onClick:$,className:"btn btn-primary mt-2"},"Apply")),u.a.createElement("br",null),L&&u.a.createElement("p",{className:"bg-danger p-2"},L)),u.a.createElement("div",{className:"col-md-6"},u.a.createElement("h4",null,"Order Summary"),u.a.createElement("hr",null),u.a.createElement("p",null,"Products ",d.length),u.a.createElement("hr",null),d.map((function(t,e){return u.a.createElement("div",{key:e},u.a.createElement("p",null,t.product.title," (",t.color,") x ",t.count," ="," ",t.product.price*t.count))})),u.a.createElement("hr",null),u.a.createElement("p",null,"Cart Total: ",b),I>0&&u.a.createElement("p",{className:"bg-success p-2"},"Discount Applied: Total Payable: $",I),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-6"},u.a.createElement("button",{className:"btn btn-primary",disabled:!x||!d.length,onClick:function(){return e.push("/payment")}},"Place Order")),u.a.createElement("div",{className:"col-md-6"},u.a.createElement("button",{disabled:!d.length,onClick:function(){"undefined"!==typeof window&&localStorage.removeItem("cart"),U({type:"ADD_TO_CART",payload:[]}),Object(l.d)(F.token).then((function(t){h([]),O(0),T(0),S(""),s.b.success("Cart is emapty. Contniue shopping.")}))},className:"btn btn-primary"},"Empty Cart")))))}}}]);
//# sourceMappingURL=40.c40eaffd.chunk.js.map