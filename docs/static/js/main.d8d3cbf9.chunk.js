(this["webpackJsonpportfolio-3"]=this["webpackJsonpportfolio-3"]||[]).push([[0],Array(22).concat([function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(8),c=n.n(a),s=n(9),r=n(6),o=n(51),l=n(49),d=n(50),j=n(47),u=n(48),m=(n(20),n(21),n(22),n(23),n(0)),b=function(){return Object(m.jsxs)("div",{className:"Title",children:[Object(m.jsxs)("h1",{children:[Object(m.jsx)("span",{className:"first",children:"MAX"})," ",Object(m.jsx)("span",{className:"last",children:"ZABARKA"})]}),Object(m.jsxs)("h2",{children:["Let's turn your ",Object(m.jsx)("i",{children:"ideas"})," into ",Object(m.jsx)("i",{children:"reality"})]})]})},h=(n(25),n.p+"static/media/down-chevron.aeff9ba7.svg"),p=(n(26),function(e){return Object(m.jsx)("div",{className:"ScrollButton",children:Object(m.jsx)("button",{onClick:e.click,children:Object(m.jsx)("img",{src:h,alt:"scroll"})})})}),f=function(e){var t=Object(i.useRef)(null);function n(){var e=document.querySelector(".swiper-slide-active");return e.scrollTop+e.offsetHeight===e.scrollHeight}function a(){return 0===document.querySelector(".swiper-slide-active").scrollTop}Object(i.useEffect)((function(){document.querySelector(".swiper-container").onwheel=function(t){console.log("event.deltaY :>> ",t.deltaY);var i=a(),c=n();console.log("props.swiper.progress :>> ",e.swiper.animating),console.log("atTop, atBottom :>> ",i,c),e.swiper.animating||(i&&0!==e.swiper.realIndex&&t.deltaY<0&&(console.log('"previous" :>> ',"previous"),e.previous()),c&&t.deltaY>0&&e.swiper.realIndex!==e.swiper.slides.length-1&&(console.log('"next" :>> ',"next"),e.next()))},document.body.addEventListener("touchstart",s,!1),document.body.addEventListener("touchmove",r,!1)})),Object(i.useEffect)((function(){}),[]);var c=null;function s(e){c=e.touches[0].clientY}var r=function(t){if(null!==c){var i=t.touches[0].clientY,s=c-i;e.swiper&&!e.swiper.animating&&(s>0?n()&&e.next():a()&&e.previous()),c=null,t.preventDefault()}};return Object(m.jsxs)("div",{ref:t,className:"Home",children:[Object(m.jsx)(b,{}),Object(m.jsx)(p,{click:e.next})]})},g=(n(27),n(28),function(){return Object(m.jsxs)("div",{className:"AboutBody",children:[Object(m.jsx)("h1",{className:"purple",children:"About"}),Object(m.jsxs)("h2",{children:[Object(m.jsx)("span",{children:"Hi, I\u2019m Max. Nice to meet you."})," I am a designer and developer with a wide range of experience in various digital and artistic disciplines."]}),Object(m.jsx)("p",{children:"I am passionate about making beautiful and functional products that improve the lives of those around me. I have skills and experience in web development, 3D design, low-level systems, and various other kinds of software development. I\u2019m also an athlete, photographer, advisor, leader, and more."}),Object(m.jsx)("p",{children:"I don\u2019t like to define myself by the skills I have or the technologies I know. Skills and technologies are easy to teach. I define myself by my experience, problem-solving, and creativity."}),Object(m.jsx)("p",{children:"I am a disciplined, passionate, multi-talented human ready to take on your ideas, whatever they may be. What would you do if you had an expert at your fingertips?"})]})}),x=(n(29),function(){return Object(m.jsx)("div",{className:"Caption",children:Object(m.jsx)("div",{children:Object(m.jsxs)("h1",{children:["I build & design ",Object(m.jsx)("span",{className:"purple",children:"digital products"})]})})})}),O=function(){return Object(m.jsxs)("div",{className:"About",children:[Object(m.jsx)(x,{}),Object(m.jsx)(g,{})]})},v=(n(30),n(31),function(e){return Object(m.jsxs)("div",{className:e.open?"open":"",onClick:e.click,id:"nav-icon4",children:[Object(m.jsx)("span",{}),Object(m.jsx)("span",{}),Object(m.jsx)("span",{})]})}),y=(n(32),function(e){var t="url("+e.image+") center/contain";return Object(m.jsx)("a",{target:"_blank",href:e.link,rel:"noopener noreferrer",children:Object(m.jsx)("div",{className:"Icon",style:{WebkitMask:t,mask:t}})})}),w=n.p+"static/media/github.16a9304e.svg",N=n.p+"static/media/instagram.f0cfa30d.svg",k=n.p+"static/media/email.ee9b5c8a.svg",C=(n(33),function(e){return Object(m.jsxs)("div",{className:"MenuContent",children:[Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("button",{onClick:function(){e.onNavigate("Home"),e.onClose()},href:"#",children:Object(m.jsx)("span",{className:"paint-hover",children:"Home"})})}),Object(m.jsx)("li",{children:Object(m.jsx)("button",{onClick:function(){e.onNavigate("About"),e.onClose()},href:"#",children:Object(m.jsx)("span",{className:"paint-hover",children:"About"})})}),Object(m.jsx)("li",{children:Object(m.jsx)("button",{onClick:function(){e.onNavigate("Work"),e.onClose()},href:"#",children:Object(m.jsx)("span",{className:"paint-hover",children:"Work"})})}),Object(m.jsx)("li",{children:Object(m.jsx)("button",{onClick:function(){e.onNavigate("Contact"),e.onClose()},href:"#",children:Object(m.jsx)("span",{className:"paint-hover",children:"Contact"})})})]}),Object(m.jsx)("div",{className:"divider"}),Object(m.jsxs)("div",{className:"icons",children:[Object(m.jsx)(y,{link:"https://github.com/MaxZabarka",image:w,alt:"github-icon"}),Object(m.jsx)(y,{link:"https://www.instagram.com/max.zabarka/",image:N,alt:"instagram-icon"}),Object(m.jsx)(y,{link:"mailto: maxim.zabarka@gmail.com",image:k,alt:"email  -icon"})]})]})}),S=(n(34),function(e){return Object(m.jsx)("div",{className:"Menu "+(e.open?"":"menu-closed"),children:Object(m.jsx)(C,{onClose:e.onClose,onNavigate:e.onNavigate})})}),A=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1];return Object(i.useEffect)((function(){a?document.querySelector(".swiper-container").classList.add("blur"):document.querySelector(".swiper-container").classList.remove("blur")}),[a]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{style:e.darken?{background:"linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)"}:{},className:"Navbar",children:[Object(m.jsx)("div",{style:{margin:"clamp(0px, 5%, 2.5rem)"},className:"nav-item",children:Object(m.jsx)("h1",{className:"name paint-hover",children:"zabarka"})}),Object(m.jsx)("div",{style:{margin:"clamp(0px, 5%, 2.5rem)"},className:"nav-item",children:Object(m.jsx)(v,{open:a,click:function(){c(!a)}})})]}),Object(m.jsx)(S,{onClose:function(){c(!1)},onNavigate:e.onNavigate,open:a})]})},I=(n(35),n(11)),E=(n(36),{Web:"D60096",Systems:"858585","3D":"FF4747",React:"200094",Express:"FC5CFF",MongoDB:"1EBE46",C:"5286FF",Assembly:"B000E0",Python:"10C19E",All:"1D1D1D"}),M=function(e,t){var n=parseInt(e,16),i=Math.round(2.55*t),a=(n>>16)+i,c=(n>>8&255)+i,s=(255&n)+i;return(16777216+65536*(a<255?a<1?0:a:255)+256*(c<255?c<1?0:c:255)+(s<255?s<1?0:s:255)).toString(16).slice(1)},D=function(e){console.log("lightenColor(TAG_COLORS[props.children], 50) :>> ",M(E[e.children],50));var t="linear-gradient(45deg, #".concat(E[e.children],", #").concat(M(E[e.children],-30),")");return console.log(t),e.onClick?Object(m.jsx)("button",{onClick:e.onClick,style:Object(I.a)({background:t},e.active?{border:"2px solid white"}:{}),className:"Tag-button",children:e.children}):Object(m.jsx)("li",{style:{background:t},className:"Tag-li",children:e.children})},T=function(e){var t=Object(i.useState)(new Set(e.tags)),n=Object(r.a)(t,2),a=n[0],c=n[1],s=a.size===e.tags.length;return Object(i.useEffect)((function(){console.log("selectedTags :>> ",a),e.onSelectedTagsChange(a)}),[a,e]),Object(m.jsxs)("div",{className:"CardFilter",children:[Object(m.jsx)(D,{active:s,onClick:function(){c(new Set(e.tags))},children:"All"}),e.tags.map((function(t,n){return Object(m.jsx)(D,{active:a.has(t)&&!s,onClick:function(){s&&a.clear(),a.has(t)?a.delete(t):a.add(t),0===a.size?c(new Set(e.tags)):c(new Set(a))},children:t},n)}))]})},L=(n(37),Object(i.forwardRef)((function(e,t){return Object(m.jsxs)("div",{ref:t,className:"Card",children:[Object(m.jsx)("img",{alt:"",src:e.image}),Object(m.jsx)("h1",{children:e.title}),Object(m.jsx)("ul",{children:e.tags.map((function(e){return console.log(e),Object(m.jsx)(D,{children:e},e)}))}),Object(m.jsx)("p",{children:e.description})]})}))),R=(n(38),n.p+"static/media/sonic.dcb2c024.png"),W=n.p+"static/media/portfolio.d4a27d41.png",B=n.p+"static/media/cafe.fe819f61.jpeg",F=n(14),q=[{title:"My Portfolio Website",tags:["Web","React"],image:W,description:"A high performance and responsive website made using React to create an enriching and animated user experience"},{title:"Rebbit",tags:["Web","Express","MongoDB"],description:"Clone of a certain website made with server-side rendering"},{title:"MaxGram",tags:["Web","React","Express","MongoDB"],description:"Clone of a certain social media made using MERN stack"},{title:"Architectural 3D Scenes",tags:["3D"],description:"A collection of 3D scenes I created for a client working on a short film.",image:{cafeImage:B}},{title:"My 3D Portfolio",tags:["3D"],description:"My 3D graphics portfolio",image:{cafeImage:B}},{description:"An artificial intellegence model that can beat the first few levels of Genisis Sonic",title:"Sonic AI",image:{sonicImage:R},tags:["Python"]},{title:"PomoMagic",tags:["Web","React"],description:"A lightweight, interactive and customizable tomato timer website"},{title:"URL Shortener",tags:["Web","Express"],description:"A convienent URL shortener built using NodeJS, Express, and mySQL"},{title:"Quote Generator",tags:["Web"],description:"A stylish and lightweight meaningful quote generator built with vanilla JavaScript and CSS"},{title:"Conways Game of Life",tags:["C"],description:"Cellular automaton written in C with NCURSES"},{title:"PCB Business Cards",tags:["C","Systems"],description:"A printed circuit board with a microcontroller and LED display, doubling as a business card!"},{title:"C Compiler",tags:["C","Systems","Assembly"],description:"My own implementation of C"},{title:"ZabarkaOS",tags:["C","Systems","Assembly"],description:"A learning project 32-bit barebones operating system"}],z=function(e){return Object(m.jsx)("div",{className:"Cards",children:Object(m.jsx)(F.a,{className:"grid",children:q.map((function(t){var n,i=!1,a=Object(s.a)(t.tags);try{for(a.s();!(n=a.n()).done;){var c=n.value;if(i=e.selectedTags.has(c),!0===e.selectedTags.has(c))break}}catch(r){a.e(r)}finally{a.f()}return i?Object(m.jsx)(L,Object(I.a)({},t),t.title):null}))})})},P=(n(39),function(){var e=Object(i.useState)(new Set),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)("div",{className:"Work",children:[Object(m.jsx)("h1",{children:Object(m.jsx)("span",{className:"purple",children:"Work"})}),Object(m.jsx)("p",{children:"A list of projects I have built for work or on my personal time"}),Object(m.jsx)(T,{onSelectedTagsChange:function(e){a(e)},tags:["Web","Systems","3D","React","Express","MongoDB","C","Assembly","Python"]}),Object(m.jsx)(z,{selectedTags:n})]})}),Y=(n(40),n(41),n(42),function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{style:e.textArea?{}:{height:"3rem"},className:"Input",children:[Object(m.jsx)("label",{htmlFor:e.name,children:e.name}),e.textArea?Object(m.jsx)("textarea",{rows:"9",className:"field",name:e.name,type:e.type,placeholder:e.placeholder}):Object(m.jsx)("input",{className:"field",name:e.name,type:e.type,placeholder:e.placeholder}),Object(m.jsx)("div",{className:"top-left"}),Object(m.jsx)("div",{className:"bottom-right"})]})})}),H=n(15),_=n.p+"static/media/spinner.7a1dbb63.svg",G=function(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(m.jsx)("div",{className:"Form",onSubmit:function(e){e.preventDefault(),a(1),H.a.sendForm("service_e8cneih","template_6q4axyq",e.target,"user_wgEfOov1MSiidC5c9ccon").then((function(){a(2)}),(function(e){alert("Oh no! The contact form has failed. Try again or send me an email at maxim.zabarka@gmail.com")}))},children:Object(m.jsxs)("form",{children:[Object(m.jsx)(Y,{name:"from_name",type:"text",placeholder:"Name"}),Object(m.jsx)(Y,{name:"reply_to",type:"email",placeholder:"Email"}),Object(m.jsx)(Y,{name:"company",type:"text",placeholder:"Company"}),Object(m.jsx)(Y,{name:"message",textArea:!0,placeholder:"Message"}),Object(m.jsxs)("button",{type:"submit",disabled:2===n,children:[2===n?"Sent!":"Send",2===n?null:0===n?Object(m.jsx)("img",{style:{width:"1.5rem",filter:"invert(1)",transform:"translateY(0.2rem) ",marginLeft:"0.6rem"},alt:"",src:k}):Object(m.jsx)("img",{style:{width:"1rem",transform:"translateY(0.1rem) scale(2)",marginLeft:"0.6rem"},alt:"",src:_})]})]})})},J=function(){return Object(m.jsxs)("div",{className:"Contact",children:[Object(m.jsxs)("div",{className:"AboutBody",children:[Object(m.jsx)("h1",{className:"purple",children:"Contact"}),Object(m.jsxs)("h2",{children:[Object(m.jsx)("span",{children:"I am looking for opportunities."})," Let's build something great together!"]}),Object(m.jsx)(G,{})]}),Object(m.jsxs)("div",{className:"icons",children:[Object(m.jsx)(y,{link:"https://github.com/MaxZabarka",image:w,alt:"github-icon"}),Object(m.jsx)(y,{link:"https://www.instagram.com/max.zabarka/",image:N,alt:"instagram-icon"}),Object(m.jsx)(y,{link:"mailto: maxim.zabarka@gmail.com",image:k,alt:"email  -icon"})]})]})},Z=(n(43),/^((?!chrome|android).)*safari/i.test(navigator.userAgent));d.a.use([j.a,u.a]);var U=2500;var Q=function(){var e=Object(i.useState)(null),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!1),d=Object(r.a)(c,2),j=d[0],u=d[1];return Object(i.useEffect)((function(){if(n){var e=document.querySelector(".swiper-container");n.on("slideChangeTransitionStart",(function(){e.classList.add("swiper-container-animate"),setTimeout((function(){e.classList.remove("swiper-container-animate"),1===n.realIndex&&u(!0)}),U)}))}}),[n]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(A,{onNavigate:function(e){n&&("Home"===e?n.slidePrev(U):(n.slideNext(),document.querySelector("."+e).scrollIntoView({behavior:"smooth"})))},darken:j}),Object(m.jsxs)(o.a,{onSlideChange:function(e){0===e.realIndex&&u(!1),console.log("swiper.realIndex :>> ",e.realIndex);var t,n=Object(s.a)(document.querySelectorAll(".swiper-slide"));try{for(n.s();!(t=n.n()).done;){t.value.scrollTo(0,0)}}catch(i){n.e(i)}finally{n.f()}},speed:U,allowTouchMove:!1,parallax:!Z,onSwiper:a,direction:"vertical",cubeEffect:{shadow:!1,slideShadows:!1},effect:Z?null:"cube",children:[Object(m.jsx)(l.a,{children:Object(m.jsx)(f,{next:function(){n&&n.slideNext(U)},previous:function(){n&&n.slidePrev(U)},swiper:n})}),Object(m.jsxs)(l.a,{children:[Object(m.jsx)(O,{}),Object(m.jsx)(P,{}),Object(m.jsx)(J,{})]})]})]})};n(44);c.a.render(Object(m.jsx)(Q,{}),document.getElementById("root"))}]),[[45,1,2]]]);
//# sourceMappingURL=main.d8d3cbf9.chunk.js.map