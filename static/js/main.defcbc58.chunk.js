(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=a.n(r),u=a(16),o=a(8),s=a(1),i=(a(22),function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("p",{className:"card-title"},e.product.name),c.a.createElement("img",{className:"card-image",src:e.product.url,alt:"money"}),c.a.createElement("p",{className:"card-cost"},"Sale! $",e.product.cost,"!"),c.a.createElement("div",{className:"quantity"},c.a.createElement("button",{onClick:function(){e.incrementQuantity(e.product.name,"-")}},"-"),c.a.createElement("input",{name:e.product.name,type:"text",min:"0",max:"9",className:"input-quantity",value:e.product.quantity,onChange:function(t){e.alterQuantity(t.target.name,Number(t.target.value))},step:"1"}),c.a.createElement("button",{onClick:function(){e.incrementQuantity(e.product.name,"+")}},"+")))}),m=function(e){var t=function(e){return e.products.map((function(e){return e.cost*e.quantity})).reduce((function(e,t){return e+t}))}(e),a=e.products.map((function(e){return e.quantity>0?c.a.createElement("div",{className:"cart-entry",key:e.name},c.a.createElement("p",{className:"cart-title"},e.name," "),c.a.createElement("div",{className:"cart-numbers"},c.a.createElement("div",null,"".concat(e.quantity," * $").concat(e.cost,".00")),c.a.createElement("div",{value:e.cost*e.quantity},"$",e.quantity*e.cost,".00"))):null})),n=c.a.createElement("div",{className:"inner-cart"},c.a.createElement("div",{className:"entries-list"},a),c.a.createElement("div",{className:"total-div"},c.a.createElement("div",{className:"cart-entry"},c.a.createElement("p",{className:"cart-title"},"Total:"),c.a.createElement("div",{className:"cart-numbers"},"$",t,".00")),c.a.createElement("button",{className:"checkout"},"Fake Checkout")));return c.a.createElement("div",{className:"cart"},t>0?n:null)},p=function(e){var t=e.products.map((function(t){return c.a.createElement(i,{key:t.name,incrementQuantity:e.incrementQuantity,alterQuantity:e.alterQuantity,product:t})}));return c.a.createElement("div",{className:"shop"},c.a.createElement("div",{className:"products"},t),c.a.createElement(m,{products:e.products}))},d=function(){return c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"text-squeeze"},c.a.createElement("p",null,"Thanks for visiting! This site was created by"," ",c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Ideopunk/"},"Conor Barnes")," ","to practice React and routing. Please proceed to the"," ",c.a.createElement(o.b,{to:"/shop"},"shop")," to buy your money.")))},y=function(){var e=Object(n.useState)([{name:"Five",url:"https://www.bankofcanada.ca/wp-content/uploads/2015/09/5_front.jpg",cost:6,quantity:0},{name:"Ten",url:"https://www.bankofcanada.ca/wp-content/uploads/2015/09/10_front.jpg",cost:11,quantity:0},{name:"Twenty",url:"https://www.bankofcanada.ca/wp-content/uploads/2015/09/20_front.jpg",cost:22,quantity:0},{name:"Fifty",url:"https://www.bankofcanada.ca/wp-content/uploads/2015/09/50_front.jpg",cost:55,quantity:0}]),t=Object(u.a)(e,2),a=t[0],r=t[1],l=function(e,t){console.log(t),console.log(typeof t),r(a.map((function(a){return a.name===e&&t>-1&&t<10&&(a.quantity=t),a})))},i=function(e,t){r(a.map((function(a){return a.name===e&&("+"===t?a.quantity<9&&a.quantity++:a.quantity>0&&a.quantity--),a})))},m=a.reduce((function(e,t){return{quantity:e.quantity+t.quantity}}));return c.a.createElement(o.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("nav",{className:"navbar"},c.a.createElement(o.c,{className:"nav-link home-link",to:"/",exact:!0,activeClassName:"active-link"},"Money Depot"),c.a.createElement(o.c,{className:"nav-link",to:"/shop",activeClassName:"active-link"},"Shop ",c.a.createElement("div",{className:"psuedo"},Number(m.quantity)))),c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/",component:d}),c.a.createElement(s.a,{exact:!0,path:"/shop",render:function(e){return c.a.createElement(p,Object.assign({},e,{products:a,incrementQuantity:i,alterQuantity:l}))}}))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.defcbc58.chunk.js.map