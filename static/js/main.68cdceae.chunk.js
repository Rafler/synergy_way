(this.webpackJsonpsynergy_way=this.webpackJsonpsynergy_way||[]).push([[0],{26:function(e,t,n){e.exports=n(40)},31:function(e,t,n){},32:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),i=n.n(c),o=(n(31),n(32),n(13)),l=n(8),s=n(10),u=(n(37),function(e){var t=e.cards,n=e.addToBasket,a=e.basket;return r.a.createElement("div",{className:"ui cards"},t.map((function(e){return r.a.createElement("div",{className:"card",key:e.name},r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"header"},e.name),r.a.createElement("div",{className:"description"},e.label),r.a.createElement("div",{className:"price--block"},r.a.createElement("div",null,e.price,r.a.createElement("i",{className:"dollar sign icon"})),r.a.createElement("i",{className:(t=e.id,a.find((function(e){return e.id===t}))?"green large shopping cart big link icon":"cart plus big link icon"),onClick:function(){return n(e)}}))));var t})))}),m=n(9),d={ADD_TO_BASKET:"ADD_TO_BASKET",ADD_AMOUNT:"ADD_AMOUNT",TAKE_AMOUNT:"TAKE_AMOUNT",DELETE_FROM_BASKET:"DELETE_FROM_BASKET"};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=Object(s.b)((function(e){return{cards:e.cards,basket:e.basket}}),(function(e){return{addToBasket:function(t){return e(function(e){return{type:d.ADD_TO_BASKET,element:p({},e,{amount:1})}}(t))}}}))(u),f=(n(38),function(e){var t=e.basket,n=e.addAmount,a=e.takeAmount,c=e.deleteElement;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ui cards"},t.map((function(e){return r.a.createElement("div",{className:"card",key:e.id},r.a.createElement("div",{className:"content"},r.a.createElement("i",{className:"red times circle outline large link icon",onClick:function(){return c(e.id)}}),r.a.createElement("h1",{className:"header"},e.name),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"element--price--block"},r.a.createElement("div",null,e.price,r.a.createElement("i",{className:"dollar sign icon"}))),r.a.createElement("div",{className:"counter--block"},r.a.createElement("i",{className:e.amount>1?"blue minus link icon":"disabled minus icon",onClick:function(){return a(e.id)}}),r.a.createElement("div",null,e.amount),r.a.createElement("i",{className:"blue plus link icon",onClick:function(){return n(e.id)}}))),r.a.createElement("div",{className:"total--price--block"},"Sum:  ".concat(e.price*e.amount),r.a.createElement("i",{className:"dollar sign icon"}))))}))),t.length>0&&r.a.createElement("div",{className:"basket--price"},r.a.createElement("div",{className:"inner--block"},r.a.createElement("div",null,"Total:  ","".concat(t.reduce((function(e,t){return e+t.price*t.amount}),0)),r.a.createElement("i",{className:"dollar sign icon"})),r.a.createElement("button",{className:"positive large ui button"},"Make an order"))),0===t.length&&r.a.createElement("div",{className:"empty--basket"},"Your basket is empty ",r.a.createElement("i",{className:"blue shopping cart icon"})))});var O=Object(s.b)((function(e){return{basket:e.basket}}),(function(e){return{addAmount:function(t){return e(function(e){return{type:d.ADD_AMOUNT,id:e}}(t))},takeAmount:function(t){return e(function(e){return{type:d.TAKE_AMOUNT,id:e}}(t))},deleteElement:function(t){return e(function(e){return{type:d.DELETE_FROM_BASKET,id:e}}(t))}}}))(f),g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"ui menu"},r.a.createElement(o.b,{exact:!0,to:"/",activeClassName:"active item",className:"item"},"Home"),r.a.createElement(o.b,{to:"/basket",activeClassName:"active item",className:"item"},r.a.createElement("i",{className:"blue shopping basket large icon"}))),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:E}),r.a.createElement(l.a,{path:"/basket/",component:O})))},y=n(11),k=n(25),v=n(16);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D={cards:Object(v.a)([{id:1,name:"article 1",label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",price:25},{id:2,name:"article 2",label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",price:35},{id:3,name:"article 3",label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",price:45}]),basket:[]};function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var _=function(){try{var e=localStorage.getItem("state");return null===e?{basket:[]}:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},JSON.parse(e))}catch(t){return}}(),A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||y.c,h=Object(y.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case d.ADD_TO_BASKET:return e.basket.some((function(e){return e.id===t.element.id}))?e:j({},e,{basket:[].concat(Object(v.a)(e.basket),[t.element])});case d.ADD_AMOUNT:return j({},e,{basket:Object(v.a)(e.basket).map((function(e){return e.id===t.id?j({},e,{amount:e.amount+1}):j({},e)}))});case d.TAKE_AMOUNT:return j({},e,{basket:e.basket.map((function(e){return e.id===t.id&&e.amount>1?j({},e,{amount:e.amount-1}):j({},e)}))});case d.DELETE_FROM_BASKET:return j({},e,{basket:e.basket.filter((function(e){return e.id!==t.id}))});default:return e}}),_,A(Object(y.a)(k.a)));h.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){return}}({basket:h.getState().basket,cards:h.getState().cards})})),i.a.render(r.a.createElement(o.a,null,r.a.createElement(s.a,{store:h},r.a.createElement(g,null))),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.68cdceae.chunk.js.map