(this["webpackJsonpcomponent-dev-test"]=this["webpackJsonpcomponent-dev-test"]||[]).push([[0],[,,,function(e){e.exports=JSON.parse('{"pages":[{"title":"Industries","slug":"industries","blocks":[{"type":"marquee","headline":"Industries","subhead":"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.","cta":"Vestibulum id ligula porta felis euismod semper.","background":"slide_one.jpg"}]},{"title":"Services","slug":"services","blocks":[{"type":"marquee","headline":"Services","subhead":"Cras mattis consectetur purus sit amet fermentum.","cta":"Donec id elit non mi porta gravida at eget metus.","background":"slide_two.jpg"}]},{"title":"About Us","slug":"about-us","blocks":[{"type":"marquee","headline":"Maecenas sed diam eget risus varius blandit sit amet non magna","subhead":"Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.","cta":"Nullam quis risus eget urna mollis ornare vel eu leo.","background":"slide_three.jpg"}]}]}')},,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(4),i=s.n(n),r=(s(10),s(11),s(5)),u=(s(12),s.p+"static/media/slide_one.df407357.jpg"),l=s.p+"static/media/slide_two.b7b871cc.jpg",o=s.p+"static/media/slide_three.25c6c4ee.jpg",d=s.p+"static/media/abc_logo.c72ca4e0.svg",m=s.p+"static/media/arrow.2e6c6f50.png",j=s(3),b=(s(13),s(0)),g=function(e){var t=e.ctaText;return Object(b.jsxs)("div",{className:"call-to-action-container",children:[Object(b.jsx)("p",{className:"cta-text",children:t}),Object(b.jsxs)("div",{className:"lets-talk-container",children:[Object(b.jsx)("p",{className:"lets-talk-text",children:"LET'S TALK."}),Object(b.jsx)("img",{src:m,className:"arrow",alt:"arrow"})]})]})},p=function(e){var t=e.currentPage,s=t.title,a=t.blocks[0],c=a.headline,n=a.subhead,i=a.cta;return Object(b.jsxs)("div",{className:"marquee-container",style:{backgroundImage:"url(".concat(function(e){return"Industries"===e?u:"Services"===e?l:o}(s),")")},children:[Object(b.jsx)("div",{className:"content-box"}),Object(b.jsxs)("div",{className:"marquee-content",children:[Object(b.jsx)("h1",{className:"marquee-headline",children:c}),Object(b.jsx)("p",{className:"marquee-subhead",children:n})]}),Object(b.jsx)(g,{ctaText:i})]})},h=(s(15),function(e){var t=e.currentPage,s=e.handlePageChange,a=j.pages.map((function(e){return Object(b.jsx)("div",{className:(a=e.slug,a===t?"nav-link active":"nav-link"),onClick:function(){return s(e.slug)},id:e.slug,children:e.title});var a}));return Object(b.jsx)("div",{className:"layout-container",children:Object(b.jsxs)("div",{className:"menu-container",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:d,className:"logo",alt:"abc logo"}),Object(b.jsx)("div",{className:"nav-link-container",children:a})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"contact-us",children:"Contact Us"})})]})})}),v=function(){var e=Object(a.useState)(j.pages[0]),t=Object(r.a)(e,2),s=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{currentPage:s.slug,handlePageChange:function(e){var t=j.pages.find((function(t){return e===t.slug}));c(t)}}),Object(b.jsx)(p,{currentPage:s})]})};var x=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(v,{})})},O=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),O()}],[[16,1,2]]]);
//# sourceMappingURL=main.cfea8978.chunk.js.map