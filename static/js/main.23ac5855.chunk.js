(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{22:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(16),r=c.n(s),n=c(4),i=c(7),o=c(2),l=c(3),d=(c(22),c(0)),j=function(){return Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsx)(n.b,{to:"/",className:"logo"}),Object(d.jsxs)("nav",{className:"nav footer__nav",children:[Object(d.jsx)("a",{href:"/",className:"nav__link",children:"GITHUB"}),Object(d.jsx)("a",{href:"/",className:"nav__link",children:"CONTACTS"}),Object(d.jsx)("a",{href:"/",className:"nav__link",children:"RIGHTS"})]}),Object(d.jsxs)("div",{className:"footer__up-button-container",children:[Object(d.jsx)("p",{className:"nav__link",children:"Back to top"}),Object(d.jsx)("button",{type:"button",className:"footer__up-button",onClick:function(){window.scrollTo(0,0)}})]})]})},u=c(5),b=c.n(u),p=function(e){var t=e.favorite,c=e.cart,a=Object(l.f)();return Object(d.jsxs)("header",{className:b()("header",{header__home:"/"===a.pathname,header__phones:"/"!==a.pathname}),id:"header",children:[Object(d.jsxs)("div",{className:"header__nav",children:[Object(d.jsx)(n.b,{to:"/",className:"logo header__logo"}),Object(d.jsxs)("nav",{className:"nav",children:[Object(d.jsx)(n.c,{to:"/",className:"nav__link",children:"HOME"}),Object(d.jsx)(n.c,{to:"/phones",className:"nav__link",children:"PHONES"}),Object(d.jsx)(n.c,{to:"/tablets",className:"nav__link",children:"TABLETS"}),Object(d.jsx)(n.c,{to:"/accessories",className:"nav__link",children:"ACCESSORIES"})]})]}),Object(d.jsxs)("div",{className:"header__search-container",children:[Object(d.jsx)(n.c,{to:"/favorites",className:"header__customer header__customer--favorite",children:t.length>0&&Object(d.jsx)("div",{className:"counter",children:t.length})}),Object(d.jsx)(n.c,{to:"/cart",className:"header__customer header__customer--cart",children:c.length>0&&Object(d.jsx)("div",{className:"counter",children:c.length})})]})]})},_=function(e){var t=e.favorite,c=e.cart;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{favorite:t,cart:c}),Object(d.jsx)("main",{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(l.a,{})})}),Object(d.jsx)(j,{})]})},h="https://mate-academy.github.io/react_phone-catalog/api/products",O=function(e){var t=e.favorite,c=e.cart,a=e.phone,s=e.handleCart,r=e.handleFavorite;return Object(d.jsxs)("div",{className:"product-card",children:[Object(d.jsxs)(n.c,{to:"/".concat("accessory"===a.type?"accessorie":a.type,"s/").concat(a.id),children:[Object(d.jsx)("div",{className:"product-card__image-container",children:Object(d.jsx)("img",{src:a.imageUrl,alt:a.name,className:"product-card__image"})}),Object(d.jsx)("div",{className:"product-card__name",children:a.name}),Object(d.jsxs)("div",{className:"product-card__price",children:[Object(d.jsx)("div",{className:"product-card__price--discount",children:0!==a.discount?"$".concat(Math.floor(a.price-a.price*(a.discount/100))):"$".concat(a.price.toString())}),Object(d.jsx)("div",{hidden:0===a.discount,className:"product-card__price--initial",children:"$".concat(a.price.toString())})]}),Object(d.jsx)("div",{className:"product-card__line"}),Object(d.jsxs)("div",{className:"product-card__description",children:[Object(d.jsx)("div",{className:"product-card__description--property",children:"Screen"}),Object(d.jsx)("div",{className:"product-card__description--value",children:a.screen})]}),Object(d.jsxs)("div",{className:"product-card__description",children:[Object(d.jsx)("div",{className:"product-card__description--property",children:"Capacity"}),Object(d.jsx)("div",{className:"product-card__description--value",children:a.capacity})]}),Object(d.jsxs)("div",{className:"product-card__description",children:[Object(d.jsx)("div",{className:"product-card__description--property",children:"RAM"}),Object(d.jsx)("div",{className:"product-card__description--value",children:a.ram})]})]}),Object(d.jsxs)("div",{className:"product-card__buttons",children:[Object(d.jsx)("button",{type:"button",className:b()("product-card__buttons--card",{"in-card":c.includes(a.id)}),onClick:function(){s(a.id)},children:c.includes(a.id)?"Added to cart":"Add to cart"}),Object(d.jsx)("button",{type:"button",className:b()("product-card__buttons--favorite",{"in-favorites":t.includes(a.id)}),onClick:function(){r(a.id)}})]})]})},m=function(e){var t=e.favorite,c=e.cart,s=e.title,r=e.list,n=e.handleCart,i=e.handleFavorite,l=Object(a.useState)(0),j=Object(o.a)(l,2),u=j[0],p=j[1],_=272*(r.length-3);return Object(d.jsxs)("div",{className:"cards-slider cards-slider--home",children:[Object(d.jsxs)("div",{className:"cards-slider__top-actions",children:[Object(d.jsx)("h2",{className:"cards-slider__title",children:s}),Object(d.jsxs)("div",{className:"cards-slider__buttons-container",children:[Object(d.jsx)("button",{type:"button",className:b()("cards-slider__button cards-slider__button--left",{"cards-slider__button--disabled":0===u}),onClick:function(){p(0===u?u:u+288)}}),Object(d.jsx)("button",{type:"button",className:b()("cards-slider__button cards-slider__button--right",{"cards-slider__button--disabled":u-288<=-_}),onClick:function(){p(u-288<=-_?u:u-288)}})]})]}),Object(d.jsx)("div",{className:"cards-slider__window",children:Object(d.jsx)("div",{className:"cards-slider__card-container",style:{transform:"translateX(".concat(u,"px)")},children:r.map((function(e){return Object(d.jsx)(O,{favorite:t,cart:c,phone:e,handleCart:n,handleFavorite:i},e.id)}))})})]})},g=function(e){var t=e.allGadgets,c=e.favorite,s=e.cart,r=e.gadgetsList,j=e.type,u=e.handleCart,p=e.handleFavorite,_=Object(a.useState)(),O=Object(o.a)(_,2),g=O[0],v=O[1],x=Object(a.useState)(""),f=Object(o.a)(x,2),N=f[0],y=f[1],k=Object(l.h)().id,C=r.find((function(e){return e.id===k})),w=Object(l.g)();Object(a.useEffect)((function(){window.scrollTo(0,0)}),[k]);var S=function(){return function(e){return fetch("".concat(h,"/").concat(e,".json")).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))}(k||"")};Object(a.useEffect)((function(){S().then((function(e){v(e),y(e.images[0])}))}),[k]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"product-page__link-container",children:[Object(d.jsx)(n.b,{to:"/",className:"product-page__link"}),Object(d.jsx)("div",{className:"product-page__arrow"}),Object(d.jsx)("div",{className:"product-page__title product-details__title",children:j}),Object(d.jsx)("div",{className:"product-page__arrow"}),Object(d.jsx)("div",{className:"product-page__title",children:null===g||void 0===g?void 0:g.name})]}),Object(d.jsxs)("div",{className:"product-page__link-container",children:[Object(d.jsx)("div",{className:"product-page__arrow product-details__arrow--back"}),Object(d.jsx)("button",{type:"button",className:"product-details__title",onClick:function(){w(-1)},children:"Back"})]}),Object(d.jsx)("h2",{className:"section__title product-details__section-title",children:null===g||void 0===g?void 0:g.name}),Object(d.jsx)("div",{className:"product-details__top-block-container",children:Object(d.jsxs)("div",{className:"product-details__photo-container",children:[Object(d.jsx)("ul",{className:"product-details__small-photos-container",children:null===g||void 0===g?void 0:g.images.map((function(e){return Object(d.jsx)("li",{className:"product-details__small-photo-container",children:Object(d.jsx)("button",{type:"button",className:"product-details__small-photo-button",onClick:function(){y(e)},children:Object(d.jsx)("img",{src:e,alt:g.name,className:"product-details__small-photo"})})},e)}))}),Object(d.jsx)("div",{className:"product-details__big-photo-container",children:Object(d.jsx)("img",{src:N,alt:null===g||void 0===g?void 0:g.name,className:"product-details__big-photo"})}),Object(d.jsxs)("div",{className:"product-details__price-container",children:[Object(d.jsx)("div",{className:"product-card__line"}),C&&Object(d.jsxs)("div",{className:"product-card__price",children:[Object(d.jsx)("div",{className:"product-card__price--discount",children:0!==C.discount?"$".concat(Math.floor(C.price-C.price*(C.discount/100))):"$".concat(C.price.toString())}),Object(d.jsx)("div",{hidden:0===C.discount,className:"product-card__price--initial",children:"$".concat(C.price.toString())})]}),Object(d.jsxs)("button",{type:"button",className:"product-card__buttons",children:[Object(d.jsx)("button",{type:"button",className:b()("product-card__buttons--card",{"in-card":s.includes(k||"")}),onClick:function(){u(k||"")},children:s.includes(k||"")?"Added to cart":"Add to cart"}),Object(d.jsx)("button",{type:"button",className:b()("product-card__buttons--favorite",{"in-favorites":c.includes(k||"")}),onClick:function(){p(k||"")}})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"product-card__description",children:[Object(d.jsx)("div",{className:"product-card__description--property",children:"Screen size"}),Object(d.jsx)("div",{className:"product-card__description--value",children:null===g||void 0===g?void 0:g.display.screenSize})]}),Object(d.jsxs)("div",{className:"product-card__description",children:[Object(d.jsx)("div",{className:"product-card__description--property",children:"Resolution"}),Object(d.jsx)("div",{className:"product-card__description--value",children:null===g||void 0===g?void 0:g.display.screenResolution})]}),Object(d.jsxs)("div",{className:"product-card__description",children:[Object(d.jsx)("div",{className:"product-card__description--property",children:"RAM"}),Object(d.jsx)("div",{className:"product-card__description--value",children:null===g||void 0===g?void 0:g.storage.ram})]})]})]})]})}),Object(d.jsxs)("div",{className:"product-details__description-box",children:[Object(d.jsxs)("div",{className:"product-details__description-container",children:[Object(d.jsx)("h3",{className:"product-details__description-title",children:"About"}),Object(d.jsx)("div",{className:"product-details__description-line"}),Object(d.jsx)("p",{className:"product-details__description-text",children:null===g||void 0===g?void 0:g.description})]}),Object(d.jsxs)("div",{className:"product-details__description-container--tech",children:[Object(d.jsx)("h3",{className:"product-details__description-title",children:"Tech specs"}),Object(d.jsx)("div",{className:"product-details__description-line"}),Object(d.jsxs)("div",{className:"product-details__params",children:[Object(d.jsx)("div",{className:"product-card__description--property",children:"OS"}),Object(d.jsx)("div",{className:"product-card__description--value",children:null===g||void 0===g?void 0:g.android.os})]}),Object(d.jsxs)("div",{className:"product-details__params",children:[Object(d.jsx)("div",{className:"product-card__description--property",children:"Battery"}),Object(d.jsx)("div",{className:"product-card__description--value",children:null===g||void 0===g?void 0:g.battery.type})]}),Object(d.jsxs)("div",{className:"product-details__params",children:[Object(d.jsx)("div",{className:"product-card__description--property",children:"Camera"}),Object(d.jsx)("div",{className:"product-card__description--value",children:null===g||void 0===g?void 0:g.camera.primary})]}),Object(d.jsxs)("div",{className:"product-details__params",children:[Object(d.jsx)("div",{className:"product-card__description--property",children:"Weight"}),Object(d.jsx)("div",{className:"product-card__description--value",children:null===g||void 0===g?void 0:g.sizeAndWeight.weight})]})]})]}),Object(d.jsx)(m,{favorite:c,cart:s,title:"You may also like",list:function(e){for(var t,c=Object(i.a)(e),a=c.length;0!==a;)t=Math.floor(Math.random()*a),c[a-=1]=c[t],c[t]=c[a];return e}(t),handleCart:u,handleFavorite:p})]})},v=c(17),x=c.n(v),f=function(){var e=[{name:"Newest",type:"age"},{name:"Alphabetically",type:"name"},{name:"Cheapest",type:"price"}],t=["4","8","16","all"],c=Object(a.useState)(!1),s=Object(o.a)(c,2),r=s[0],i=s[1],l=Object(a.useState)(e[0].name),j=Object(o.a)(l,2),u=j[0],p=j[1],_=Object(a.useState)(!1),h=Object(o.a)(_,2),O=h[0],m=h[1],g=Object(a.useState)(t[3]),v=Object(o.a)(g,2),x=v[0],f=v[1],N=Object(n.d)(),y=Object(o.a)(N,2),k=y[0],C=y[1],w=k.get("sort")||"",S=k.get("perPage")||"";return Object(d.jsxs)("div",{className:"dropdown__container",children:[Object(d.jsxs)("div",{className:"sorted-slider__input-container",children:[Object(d.jsx)("div",{className:"sorted-slider__input-title",children:"Sort by"}),Object(d.jsxs)("div",{className:"dropdown",children:[Object(d.jsxs)("button",{type:"button",className:b()("dropdown__button",{"dropdown__button--active":r}),onClick:function(){i(!r)},children:[Object(d.jsx)("div",{className:"dropdown__button-title",children:w||u}),Object(d.jsx)("div",{className:"dropdown__button-arrow"})]}),Object(d.jsx)("div",{className:"dropdown__list-container",children:Object(d.jsx)("div",{className:"dropdown__list",children:e.map((function(e){return Object(d.jsx)("button",{value:w,type:"button",name:e.type,className:"dropdown__item",onClick:function(){!function(e){var t=k.get("page")||"",c=k.get("perPage")||"",a=k.get("query")||"",s={};s.sort=e,t&&(s.page=t,s.perPage=c),a&&(s.query=a),C(s)}(e.type),i(!1),p(e.name)},children:e.name},e.name)}))})})]})]}),Object(d.jsxs)("div",{className:"sorted-slider__input-container",children:[Object(d.jsx)("div",{className:"sorted-slider__input-title",children:"Items on page"}),Object(d.jsxs)("div",{className:"dropdown",children:[Object(d.jsxs)("button",{type:"button",className:b()("dropdown__button",{"dropdown__button--active":O}),onClick:function(){m(!O)},children:[Object(d.jsx)("div",{className:"dropdown__button-title",children:x}),Object(d.jsx)("div",{className:"dropdown__button-arrow"})]}),Object(d.jsx)("div",{className:"dropdown__list-container",children:Object(d.jsx)("div",{className:"dropdown__list",children:t.map((function(e){return Object(d.jsx)("button",{value:S,type:"button",className:"dropdown__item",onClick:function(){!function(e){var t=k.get("sort")||"",c=k.get("page")||"1",a=k.get("query")||"",s={};w&&(s.sort=t),c&&(s.page=c),s.perPage=e,a&&(s.query=a),C(s)}(e),m(!1),f(e)},children:e},e)}))})})]})]})]})},N=function(e){var t=e.favorite,c=e.cart,a=e.list,s=e.handleCart,r=e.handleFavorite,n=Object(l.f)();return Object(d.jsxs)("div",{className:"sorted-slider",children:["/favorites"!==n.pathname&&Object(d.jsx)(f,{}),Object(d.jsx)("div",{className:"sorted-slider__continer",children:a.map((function(e){return Object(d.jsx)("div",{className:"sorted-slider__card-container",children:Object(d.jsx)(O,{favorite:t,cart:c,phone:e,handleCart:s,handleFavorite:r})},e.id)}))})]})},y=function(e){for(var t=e.numberOfPages,c=Object(n.d)(),s=Object(o.a)(c,2),r=s[0],i=s[1],l=r.get("page")||1,j=Object(a.useState)(+l),u=Object(o.a)(j,2),p=u[0],_=u[1],h=[],O=1;O<=t;O+=1)h.push(O);var m=function(e){var t=e,c=r.get("perPage")||"",a=r.get("sort")||"",s=r.get("query")||"";i(a||s?a&&!s?{sort:a,page:t,perPage:c}:!a&&s?{page:t,perPage:c,query:s}:{sort:a,page:t,perPage:c,query:s}:{page:t,perPage:c})};return Object(d.jsx)(d.Fragment,{children:1!==h.length&&Object(d.jsx)("div",{className:"pagination pagination__phone",children:Object(d.jsxs)("ul",{className:"pagination__list",children:[Object(d.jsx)("li",{children:Object(d.jsx)("button",{type:"button",className:b()("pagination__button pagination__button--prev",{"pagination__button--disabled":1===p}),onClick:function(){_(1===p?1:p-1),m((p-1).toString())}})},0),h.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("button",{type:"button",className:b()("pagination__button",{"pagination__button--active":e===p}),onClick:function(){_(e),m(e.toString())},children:e})},e)})),Object(d.jsx)("li",{children:Object(d.jsx)("button",{type:"button",className:b()("pagination__button pagination__button--next",{"pagination__button--disabled":p===h.length}),onClick:function(){_(p===h.length?h.length:p+1),m((p+1).toString())}})},t+1)]})})})},k=function(){return Object(d.jsx)("div",{className:"no-result",children:Object(d.jsx)("h2",{className:"section__title",children:"None for today, sorry!"})})},C=function(e){var t=e.favorite,c=e.cart,s=e.phonesList,r=e.handleCart,j=e.handleFavorite,u=Object(l.f)(),p=Object(n.d)(),_=Object(o.a)(p,2),h=_[0],O=_[1],m=Object(a.useState)(""),g=Object(o.a)(m,2),v=g[0],f=g[1],C=Object(a.useState)(!0),w=Object(o.a)(C,2),S=w[0],F=w[1],T=Object(a.useState)(!1),L=Object(o.a)(T,2),P=L[0],q=L[1],M=h.get("page")||1,E=h.get("perPage")||s.length,A="all"===E?s.length:E,B=h.get("sort"),$=h.get("query")||"",I=s.filter((function(e){return e.name.toLowerCase().includes($.toLowerCase())})),G=+M*+A-+A,R=Object(i.a)(I).splice(G,+A),H=Object(a.useCallback)(x()((function(e){e&&(q(!0),F(!1));var t=h.get("page")||"",c=h.get("sort")||"",a=h.get("perPage")||"",s={};t&&(s.page=t),c&&(s.sort=c),a&&(s.perPage=a),e&&(s.query=e),O(s)}),1e3),[]),J=B?function(e){switch(e){case"name":R.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case"age":R.sort((function(e,t){return e.age-t.age}));break;case"price":R.sort((function(e,t){return(0!==e.discount?Math.floor(e.price-e.price*(e.discount/100)):e.price)-(0!==t.discount?Math.floor(t.price-t.price*(t.discount/100)):t.price)}))}}(B):R;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"product-page__search",children:[Object(d.jsx)("input",{type:"text",className:b()("product-page__search-input",{"product-page__search-input--filled":P}),value:v,onChange:function(e){f(e.currentTarget.value),H(e.currentTarget.value)},placeholder:"Search in ".concat(u.pathname.slice(1),"...")}),Object(d.jsx)("button",{type:"button",className:"product-page__search-close",hidden:S,onClick:function(){q(!1),F(!0),f(""),h.delete("query"),O(h)}})]}),s.length>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"product-page__link-container",children:[Object(d.jsx)(n.b,{to:"/",className:"product-page__link"}),Object(d.jsx)("div",{className:"product-page__arrow"}),Object(d.jsx)("div",{className:"product-page__title",children:"Accessories"})]}),Object(d.jsx)("h2",{className:"section__title product-page__section-title",children:"Accessories"}),Object(d.jsx)("div",{className:"section__counter",children:"".concat(s.length," models")}),Object(d.jsx)(N,{favorite:t,cart:c,list:J||R,handleCart:r,handleFavorite:j}),A&&Object(d.jsx)(y,{numberOfPages:Math.ceil(I.length/+A)})]}):Object(d.jsx)(k,{})]})},w=function(e){var t=e.gadgetsList,c=e.handleCart,s=e.handleFavorite,r=e.favorite,i=e.cart;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(d.jsx)(d.Fragment,{children:r.length>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"product-page__link-container",children:[Object(d.jsx)(n.b,{to:"/",className:"product-page__link"}),Object(d.jsx)("div",{className:"product-page__arrow"}),Object(d.jsx)("div",{className:"product-page__title",children:"Favourites"})]}),Object(d.jsx)("h2",{className:"section__title product-page__section-title",children:"Favourites"}),Object(d.jsx)("div",{className:"section__counter",children:"".concat(r.length," items")}),Object(d.jsx)(N,{favorite:r,cart:i,list:t.filter((function(e){return r.includes(e.id)})),handleCart:c,handleFavorite:s})]}):Object(d.jsx)(k,{})})},S=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(1),n=Object(o.a)(r,2),i=n[0],l=n[1];return Object(d.jsxs)("div",{className:"gallery gallery__home",children:[Object(d.jsxs)("div",{className:"gallery__container",children:[Object(d.jsx)("button",{className:b()("gallery__arrow gallery__arrow--left",{"gallery__arrow--disabled":0===c}),type:"button",onClick:function(){s(0===c?c:c+1040),l(1===i?1:i-1)}}),Object(d.jsx)("div",{className:"gallery__window",children:Object(d.jsxs)("div",{className:"gallery__picture-container",style:{transform:"translateX(".concat(c,"px)")},children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"./img/Banner.png",alt:"phone-banner",className:"gallery__picture"})}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"./img/Banner2.png",alt:"phone-banner",className:"gallery__picture"})}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"./img/Banner3.png",alt:"phone-banner",className:"gallery__picture"})})]})}),Object(d.jsx)("button",{className:b()("gallery__arrow gallery__arrow--right",{"gallery__arrow--disabled":c-1040<=-3120}),type:"button",onClick:function(){s(c-1040<=-3120?c:c-1040),l(3===i?3:i+1)}})]}),Object(d.jsxs)("div",{className:"gallery__dot-container",children:[Object(d.jsx)("span",{className:b()("gallery__dot",{"gallery__dot--active":1===i})}),Object(d.jsx)("span",{className:b()("gallery__dot",{"gallery__dot--active":2===i})}),Object(d.jsx)("span",{className:b()("gallery__dot",{"gallery__dot--active":3===i})})]})]})},F=function(e){var t=e.gadgetsList,c=t.filter((function(e){return"phone"===e.type})),a=t.filter((function(e){return"tablet"===e.type})),s=t.filter((function(e){return"accessory"===e.type}));return Object(d.jsxs)("div",{className:"categories",children:[Object(d.jsx)("h2",{className:"categories__title",children:"Shop by category"}),Object(d.jsxs)("div",{className:"categories__link-container",children:[Object(d.jsxs)(n.b,{to:"/phones",className:"categories__link",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"./img/link-banners/link-mobile.png",alt:"mobile phones",className:"categories__link-banner"})}),Object(d.jsx)("div",{className:"categories__link-title",children:"Mobile phones"}),Object(d.jsx)("div",{className:"categories__link-quantity",children:"".concat(c.length," models")})]}),Object(d.jsxs)(n.b,{to:"/tablets",className:"categories__link",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"./img/link-banners/link-tablets.png",alt:"tablets",className:"categories__link-banner"})}),Object(d.jsx)("div",{className:"categories__link-title",children:"Tablets"}),Object(d.jsx)("div",{className:"categories__link-quantity",children:"".concat(a.length," models")})]}),Object(d.jsxs)(n.b,{to:"/accessories",className:"categories__link",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"./img/link-banners/link-accesories.png",alt:"accessories",className:"categories__link-banner"})}),Object(d.jsx)("div",{className:"categories__link-title",children:"Accessories"}),Object(d.jsx)("div",{className:"categories__link-quantity",children:"".concat(s.length," models")})]})]})]})},T=function(e){var t=e.favorite,c=e.cart,a=e.gadgetsList,s=e.handleCart,r=e.handleFavorite;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(S,{}),Object(d.jsx)(m,{title:"Hot prices",list:a.filter((function(e){return 0!==e.discount})),favorite:t,cart:c,handleCart:s,handleFavorite:r}),Object(d.jsx)(F,{gadgetsList:a}),Object(d.jsx)(m,{title:"Brand new models",list:a.filter((function(e){return 0===e.discount})).sort((function(e,t){return t.price-e.price})),favorite:t,cart:c,handleCart:s,handleFavorite:r})]})},L=c(10),P=c.n(L),q=function(e){var t=e.favorite,c=e.cart,s=e.phonesList,r=e.handleCart,j=e.handleFavorite,u=Object(l.f)(),p=Object(n.d)(),_=Object(o.a)(p,2),h=_[0],O=_[1],m=Object(a.useState)(""),g=Object(o.a)(m,2),v=g[0],x=g[1],f=Object(a.useState)(!0),C=Object(o.a)(f,2),w=C[0],S=C[1],F=Object(a.useState)(!1),T=Object(o.a)(F,2),L=T[0],q=T[1];Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]);var M=h.get("page")||1,E=h.get("perPage")||s.length,A="all"===E?s.length:E,B=h.get("sort"),$=h.get("query")||"",I=s.filter((function(e){return e.name.toLowerCase().includes($.toLowerCase())})),G=+M*+A-+A,R=Object(i.a)(I).splice(G,+A),H=Object(a.useCallback)(P()((function(e){e&&(q(!0),S(!1));var t=h.get("page")||"",c=h.get("sort")||"",a=h.get("perPage")||"",s={};t&&(s.page=t),c&&(s.sort=c),a&&(s.perPage=a),e&&(s.query=e),O(s)}),1e3),[]),J=B?function(e){switch(e){case"name":R.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case"age":R.sort((function(e,t){return e.age-t.age}));break;case"price":R.sort((function(e,t){return(0!==e.discount?Math.floor(e.price-e.price*(e.discount/100)):e.price)-(0!==t.discount?Math.floor(t.price-t.price*(t.discount/100)):t.price)}))}}(B):R;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"product-page__search",children:[Object(d.jsx)("input",{type:"text",className:b()("product-page__search-input",{"product-page__search-input--filled":L}),value:v,onChange:function(e){x(e.currentTarget.value),H(e.currentTarget.value)},placeholder:"Search in ".concat(u.pathname.slice(1),"...")}),Object(d.jsx)("button",{type:"button",className:"product-page__search-close",hidden:w,onClick:function(){q(!1),S(!0),x(""),h.delete("query"),O(h)}})]}),s.length>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"product-page__link-container",children:[Object(d.jsx)(n.b,{to:"/",className:"product-page__link"}),Object(d.jsx)("div",{className:"product-page__arrow"}),Object(d.jsx)("div",{className:"product-page__title",children:"Phones"})]}),Object(d.jsx)("h2",{className:"section__title product-page__section-title",children:"Mobile phones"}),Object(d.jsx)("div",{className:"section__counter",children:"".concat(s.length," models")}),Object(d.jsx)(N,{favorite:t,cart:c,list:J||R,handleCart:r,handleFavorite:j}),A&&Object(d.jsx)(y,{numberOfPages:Math.ceil(I.length/+A)})]}):Object(d.jsx)(k,{})]})},M=function(e){var t=e.favorite,c=e.cart,s=e.phonesList,r=e.handleCart,j=e.handleFavorite,u=Object(l.f)(),p=Object(n.d)(),_=Object(o.a)(p,2),h=_[0],O=_[1],m=Object(a.useState)(""),g=Object(o.a)(m,2),v=g[0],x=g[1],f=Object(a.useState)(!0),C=Object(o.a)(f,2),w=C[0],S=C[1],F=Object(a.useState)(!1),T=Object(o.a)(F,2),L=T[0],q=T[1];Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]);var M=h.get("page")||1,E=h.get("perPage")||s.length,A="all"===E?s.length:E,B=h.get("sort"),$=h.get("query")||"",I=s.filter((function(e){return e.name.toLowerCase().includes($.toLowerCase())})),G=+M*+A-+A,R=Object(i.a)(I).splice(G,+A),H=Object(a.useCallback)(P()((function(e){e&&(q(!0),S(!1));var t=h.get("page")||"",c=h.get("sort")||"",a=h.get("perPage")||"",s={};t&&(s.page=t),c&&(s.sort=c),a&&(s.perPage=a),e&&(s.query=e),O(s)}),1e3),[]),J=B?function(e){switch(e){case"name":R.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case"age":R.sort((function(e,t){return e.age-t.age}));break;case"price":R.sort((function(e,t){return(0!==e.discount?Math.floor(e.price-e.price*(e.discount/100)):e.price)-(0!==t.discount?Math.floor(t.price-t.price*(t.discount/100)):t.price)}))}}(B):R;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"product-page__search",children:[Object(d.jsx)("input",{type:"text",className:b()("product-page__search-input",{"product-page__search-input--filled":L}),value:v,onChange:function(e){x(e.currentTarget.value),H(e.currentTarget.value)},placeholder:"Search in ".concat(u.pathname.slice(1),"...")}),Object(d.jsx)("button",{type:"button",className:"product-page__search-close",hidden:w,onClick:function(){q(!1),S(!0),x(""),h.delete("query"),O(h)}})]}),s.length>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"product-page__link-container",children:[Object(d.jsx)(n.b,{to:"/",className:"product-page__link"}),Object(d.jsx)("div",{className:"product-page__arrow"}),Object(d.jsx)("div",{className:"product-page__title",children:"Tablets"})]}),Object(d.jsx)("h2",{className:"section__title product-page__section-title",children:"Tablets"}),Object(d.jsx)("div",{className:"section__counter",children:"".concat(s.length," models")}),Object(d.jsx)(N,{favorite:t,cart:c,list:J||R,handleCart:r,handleFavorite:j}),A&&Object(d.jsx)(y,{numberOfPages:Math.ceil(I.length/+A)})]}):Object(d.jsx)(k,{})]})},E=function(e,t){var c=Object(a.useState)((function(){var c=localStorage.getItem(t);return c?JSON.parse(c):e})),s=Object(o.a)(c,2),r=s[0],n=s[1];return Object(a.useEffect)((function(){localStorage.setItem(t,JSON.stringify(r))}),[r]),[r,n]},A=function(e){var t=e.item,c=e.handleCart,s=e.changeQuantity,r=Object(a.useState)(1),n=Object(o.a)(r,2),i=n[0],l=n[1],j=0!==t.discount?Math.floor(t.price-t.price*(t.discount/100)):t.price;return Object(d.jsxs)("div",{className:"cart-item__cell",children:[Object(d.jsx)("button",{type:"button",className:"cart-item__close",onClick:function(){c(t.id)}}),Object(d.jsx)("img",{src:t.imageUrl,alt:t.name,className:"cart-item__image"}),Object(d.jsx)("div",{className:"cart-item__description",children:t.name}),Object(d.jsxs)("div",{className:"cart-item__buttons",children:[Object(d.jsx)("button",{type:"button",className:b()("cart-item__button cart-item__button--minus",{"cart-item__button--disabled":1===i}),onClick:function(){l((function(e){return 1===i?1:e-1})),s("-",1===i?0:j)},children:"-"}),Object(d.jsx)("div",{className:"cart-item__quantity",children:i}),Object(d.jsx)("button",{type:"button",className:"cart-item__button cart-item__button--plus",onClick:function(){l((function(e){return e+1})),s("+",j)},children:"+"})]}),Object(d.jsx)("div",{className:"cart-item__price",children:"$".concat((j*i).toString())})]})},B=function(e){var t=e.handleCart,c=e.gadgetsList,s=e.cart,r=Object(a.useState)(0),n=Object(o.a)(r,2),i=n[0],j=n[1],u=Object(a.useState)(!1),p=Object(o.a)(u,2),_=p[0],h=p[1],O=c.filter((function(e){return s.includes(e.id)})),m=Object(l.g)();Object(a.useEffect)((function(){var e=function(){var e=0;return c.forEach((function(t){if(s.includes(t.id)){var c=0!==t.discount?Math.floor(t.price-t.price*(t.discount/100)):t.price;e+=c}})),e}();j(e)}),[]);var g=function(e,t){j("-"===e?function(e){return e-t}:function(e){return e+t})};return Object(d.jsx)(d.Fragment,{children:s.length>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"product-page__link-container",children:[Object(d.jsx)("div",{className:"product-page__arrow product-details__arrow--back"}),Object(d.jsx)("button",{type:"button",className:"product-details__title",onClick:function(){m(-1)},children:"Back"})]}),Object(d.jsx)("h2",{className:"section__title cart__title",children:"Cart"}),Object(d.jsxs)("div",{className:"cart",children:[Object(d.jsx)("div",{className:"cart__cells",children:Object(d.jsx)("ul",{children:O.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(A,{item:e,changeQuantity:g,handleCart:t})},e.id)}))})}),Object(d.jsxs)("div",{className:"cart__total-container",children:[Object(d.jsx)("div",{className:"cart-item__price cart-item__price-total",children:"$".concat(i)}),Object(d.jsx)("div",{className:"cart__total-text",children:"Total for ".concat(s.length," items")}),Object(d.jsx)("div",{className:"cart__total-line"}),Object(d.jsx)("button",{className:"cart__total-checkout",type:"button",onClick:function(){h(!0),setTimeout((function(){h(!1)}),3e3)},children:"Checkout"}),Object(d.jsx)("div",{className:b()("message",{"message--active":_}),children:"We are still working at this functionality..."})]})]})]}):Object(d.jsx)(k,{})})},$=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],r=E([],"favorites"),n=Object(o.a)(r,2),j=n[0],u=n[1],b=E([],"cart"),p=Object(o.a)(b,2),O=p[0],m=p[1],v=c.filter((function(e){return"phone"===e.type})),x=c.filter((function(e){return"tablet"===e.type})),f=c.filter((function(e){return"accessory"===e.type})),N=function(){return fetch("".concat(h,".json")).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))};Object(a.useEffect)((function(){N().then((function(e){s(e)}))}),[]);var y=function(e){j.find((function(t){return t===e}))?u((function(t){return t.filter((function(t){return t!==e}))})):u((function(t){return[].concat(Object(i.a)(t),[e])}))},k=function(e){O.find((function(t){return t===e}))?m((function(t){return t.filter((function(t){return t!==e}))})):m((function(t){return[].concat(Object(i.a)(t),[e])}))};return Object(d.jsx)("div",{className:"app",children:Object(d.jsx)(l.d,{children:Object(d.jsxs)(l.b,{path:"/",element:Object(d.jsx)(_,{favorite:j,cart:O}),children:[Object(d.jsx)(l.b,{index:!0,element:Object(d.jsx)(T,{favorite:j,cart:O,gadgetsList:c,handleCart:k,handleFavorite:y})}),Object(d.jsx)(l.b,{path:"phones",element:Object(d.jsx)(q,{favorite:j,cart:O,phonesList:v,handleCart:k,handleFavorite:y})}),Object(d.jsx)(l.b,{path:"favorites",element:Object(d.jsx)(w,{gadgetsList:c,handleCart:k,handleFavorite:y,favorite:j,cart:O})}),Object(d.jsx)(l.b,{path:"cart",element:Object(d.jsx)(B,{gadgetsList:c,handleCart:k,handleFavorite:y,favorite:j,cart:O})}),Object(d.jsx)(l.b,{path:"phones/:id",element:Object(d.jsx)(g,{allGadgets:c,favorite:j,cart:O,gadgetsList:v,type:"Phones",handleCart:k,handleFavorite:y})}),Object(d.jsx)(l.b,{path:"tablets",element:Object(d.jsx)(M,{favorite:j,cart:O,phonesList:x,handleCart:k,handleFavorite:y})}),Object(d.jsx)(l.b,{path:"tablets/:id",element:Object(d.jsx)(g,{allGadgets:c,favorite:j,cart:O,gadgetsList:x,type:"Tablets",handleCart:k,handleFavorite:y})}),Object(d.jsx)(l.b,{path:"accessories",element:Object(d.jsx)(C,{favorite:j,cart:O,phonesList:f,handleCart:k,handleFavorite:y})}),Object(d.jsx)(l.b,{path:"accessories/:id",element:Object(d.jsx)(g,{allGadgets:c,favorite:j,cart:O,gadgetsList:f,type:"Accessories",handleCart:k,handleFavorite:y})})]})})})};r.a.render(Object(d.jsx)(n.a,{children:Object(d.jsx)($,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.23ac5855.chunk.js.map