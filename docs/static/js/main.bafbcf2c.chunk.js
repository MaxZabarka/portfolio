(this["webpackJsonpportfolio-3"]=this["webpackJsonpportfolio-3"]||[]).push([[0],Array(19).concat([function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(3),c=i(6),s=i.n(c),A=i(5),a=i(47),o=i(45),r=i(46),l=(i(17),i(18),i(19),i(20),i(0)),d=function(){return Object(l.jsxs)("div",{className:"Title",children:[Object(l.jsxs)("h1",{children:[Object(l.jsx)("span",{className:"first",children:"MAX"})," ",Object(l.jsx)("span",{className:"last",children:"ZABARKA"})]}),Object(l.jsxs)("h2",{children:["Let's turn your ",Object(l.jsx)("i",{children:"ideas"})," into ",Object(l.jsx)("i",{children:"reality"})]})]})},j=(i(22),i.p+"static/media/down-chevron.aeff9ba7.svg"),b=(i(23),function(e){return Object(l.jsx)("div",{className:"ScrollButton",children:Object(l.jsx)("button",{onClick:e.click,children:Object(l.jsx)("img",{src:j,alt:"scroll"})})})});function h(){var e=document.querySelector(".slide-active");return e.scrollTop+e.offsetHeight===e.scrollHeight}function f(){return 0===document.querySelector(".slide-active").scrollTop}var g=null;document.body.addEventListener("touchstart",(function(e){g=e.touches[0].clientY}),!1),document.body.addEventListener("touchmove",(function(e){if(null!==g){var t=e.touches[0].clientY;g-t>0?h()&&window.dispatchEvent(window.secondSlide):f()&&window.dispatchEvent(window.firstSlide),g=null,e.preventDefault()}}),!1);var m=function(e){console.log("event.deltaY :>> ",e.deltaY);var t=f(),i=h();console.log("atTop, atBottom :>> ",t,i),t&&e.deltaY<0&&(console.log("SLIDE CHANGE 0"),window.dispatchEvent(window.firstSlide)),i&&e.deltaY>0&&(console.log("SLIDE CHANGE 1"),window.dispatchEvent(window.secondSlide))};window.animateHome=!0;var u=function(e){var t=Object(n.useRef)(null);return Object(l.jsxs)("div",{onWheel:m,ref:t,className:"Home slide-active "+(window.animateHome?"animate":""),onAnimationEnd:function(e){window.animateHome=!1},children:[Object(l.jsx)(d,{}),Object(l.jsx)(b,{click:function(){window.dispatchEvent(window.secondSlide)}})]})},x=(i(24),i(25),function(){return Object(l.jsxs)("div",{className:"AboutBody",children:[Object(l.jsx)("h1",{className:"purple",children:"About"}),Object(l.jsxs)("h2",{children:[Object(l.jsx)("span",{children:"Hi, I\u2019m Max. Nice to meet you."})," I am a designer and developer with a wide range of experience in various digital and artistic disciplines."]}),Object(l.jsx)("p",{children:"I am passionate about making beautiful and functional products that improve the lives of those around me. I have skills and experience in web development, 3D design, low-level systems, and various other kinds of software development. I\u2019m also an athlete, photographer, bilingual, coach, and more."}),Object(l.jsx)("p",{children:"I don't only define myself by the skills I have or the technologies I know. Skills and technologies are easy to teach. I define myself by my experience, problem-solving, and creativity."}),Object(l.jsx)("p",{children:"I am a disciplined, passionate, multi-talented human ready to take on your ideas, whatever they may be. What would you do if you had an expert at your fingertips?"}),Object(l.jsxs)("div",{className:"skills",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Tech Skills"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"\u2022 JavaScript"}),Object(l.jsx)("li",{children:"\u2022 ES6"}),Object(l.jsx)("li",{children:"\u2022 HTML"}),Object(l.jsx)("li",{children:"\u2022 CSS"}),Object(l.jsx)("li",{children:"\u2022 Rest APIs"}),Object(l.jsx)("li",{children:"\u2022 Postman"}),Object(l.jsx)("li",{children:"\u2022 Git"}),Object(l.jsx)("li",{children:"\u2022 CSS"}),Object(l.jsx)("li",{children:"\u2022 Python"}),Object(l.jsx)("li",{children:"\u2022 C"}),Object(l.jsx)("li",{children:"\u2022 x86 Assembly"}),Object(l.jsx)("li",{children:"\u2022 React"}),Object(l.jsx)("li",{children:"\u2022 Node.js"}),Object(l.jsx)("li",{children:"\u2022 SCSS"}),Object(l.jsx)("li",{children:"\u2022 Linux"}),Object(l.jsx)("li",{children:"\u2022 Express"}),Object(l.jsx)("li",{children:"\u2022 MongoDB"}),Object(l.jsx)("li",{children:"\u2022 Arduino"}),Object(l.jsx)("li",{children:"\u2022 Blender"}),Object(l.jsx)("li",{children:"\u2022 Photoshop"})]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Certifications/Courses"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"\u2022 Building a Modern Computer from First Principles Part I - University of Jerusalem"}),Object(l.jsx)("li",{children:"\u2022 Building a Modern Computer from First Principles Part II - University of Jerusalem"}),Object(l.jsx)("li",{children:"\u2022 C Programming - TBLPA"}),Object(l.jsx)("li",{children:"\u2022 JavaScript 2021 - Academind"}),Object(l.jsx)("li",{children:"\u2022 NodeJS 2021 - Academind"}),Object(l.jsx)("li",{children:"\u2022 CSS 2021 - Academind"}),Object(l.jsx)("li",{children:"\u2022 React 2021 - Academind"}),Object(l.jsx)("li",{children:"\u2022 Multi-Sport Entry Level Competitive Coaching"}),Object(l.jsx)("li",{children:"\u2022 First Aid and CPR"})]})]})]}),Object(l.jsx)("h2",{children:Object(l.jsx)("span",{children:"My Philosophy"})}),Object(l.jsx)("p",{children:"I pride myself on my ability to understand how the technologies we use work under the hood. I don't believe in black boxes. I regularly read the source of or create implementations of the technologies I use. I strongly believe, in general, knowing how things work under the hood makes you better at anything you choose to do."})]})}),v=(i(26),function(){return Object(l.jsx)("div",{className:"Caption",children:Object(l.jsx)("div",{children:Object(l.jsxs)("h1",{children:["I design & build ",Object(l.jsx)("span",{className:"purple",children:"digital products"})]})})})}),p=function(){return Object(l.jsxs)("div",{className:"About",children:[Object(l.jsx)(v,{}),Object(l.jsx)(x,{})]})},w=(i(27),i(28),function(e){return Object(l.jsxs)("div",{className:e.open?"open":"",onClick:e.click,id:"nav-icon4",children:[Object(l.jsx)("span",{}),Object(l.jsx)("span",{}),Object(l.jsx)("span",{})]})}),O=(i(29),function(e){var t="url("+e.image+") center/contain";return Object(l.jsx)("a",{target:"_blank",href:e.link,rel:"noopener noreferrer",children:Object(l.jsx)("div",{className:"Icon",style:{WebkitMask:t,mask:t,maskSize:"cover",WebKitMaskSize:"cover",maskRepeat:"no-repeat",WebkitMaskRepeat:"no-repeat"}})})}),C=i.p+"static/media/github.a9e6903f.svg",B=i.p+"static/media/email.01f2b7e5.svg",k=i.p+"static/media/linkedin.ef319924.svg",Q=(i(30),function(e){return Object(l.jsxs)("div",{className:"MenuContent",children:[Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("button",{onClick:function(){e.onNavigate("Home"),e.onClose()},href:"#",children:Object(l.jsx)("span",{className:"paint-hover",children:"Home"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("button",{onClick:function(){e.onNavigate("About"),e.onClose()},href:"#",children:Object(l.jsx)("span",{className:"paint-hover",children:"About"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("button",{onClick:function(){e.onNavigate("Work"),e.onClose()},href:"#",children:Object(l.jsx)("span",{className:"paint-hover",children:"Work"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("button",{onClick:function(){e.onNavigate("Contact"),e.onClose()},href:"#",children:Object(l.jsx)("span",{className:"paint-hover",children:"Contact"})})})]}),Object(l.jsx)("div",{className:"divider"}),Object(l.jsxs)("div",{className:"icons",children:[Object(l.jsx)(O,{link:"https://github.com/MaxZabarka",image:C,alt:"github-icon"}),Object(l.jsx)(O,{link:"https://www.linkedin.com/in/max-zabarka-0a739a1b6/",image:k,alt:"linkedin-icon"}),Object(l.jsx)(O,{link:"mailto: maxim.zabarka@gmail.com",image:B,alt:"email-icon"})]})]})}),N=(i(31),function(e){return Object(l.jsx)("div",{className:"Menu "+(e.open?"":"menu-closed"),children:Object(l.jsx)(Q,{onClose:e.onClose,onNavigate:e.onNavigate})})}),P=function(e){var t=Object(n.useState)(!1),i=Object(A.a)(t,2),c=i[0],s=i[1];return Object(n.useEffect)((function(){c?(document.querySelector(".Cube")||document.querySelector(".slide-active")).classList.add("blur"):(document.querySelector(".Cube")||document.querySelector(".slide-active")).classList.remove("blur")}),[c]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"Navbar "+(e.show?"":"hide"),children:[Object(l.jsx)("div",{style:{margin:"clamp(0px, 5%, 2.5rem)"},onClick:function(){1===window.slide?(document.querySelector(".About").scrollIntoView({behavior:"smooth"}),setTimeout((function(){window.dispatchEvent(window.firstSlide)}),800)):window.dispatchEvent(window.firstSlide)},className:"nav-item",children:Object(l.jsx)("h1",{className:"name paint-hover",children:"zabarka"})}),Object(l.jsx)("div",{style:{margin:"clamp(0px, 5%, 2.5rem)"},className:"nav-item",children:Object(l.jsx)(w,{open:c,click:function(){s(!c)}})}),Object(l.jsx)("div",{className:"darken",style:e.darken?{opacity:"1"}:{}})]}),Object(l.jsx)(N,{onClose:function(){s(!1)},onNavigate:e.onNavigate,open:c})]})},I=(i(32),i(8)),S=(i(33),{Web:"D60096",Systems:"858585","3D":"FF4747",React:"200094",Express:"FC5CFF",MongoDB:"1EBE46",C:"5286FF",Assembly:"B000E0",Python:"10C19E",All:"1D1D1D"}),D=function(e,t){var i=parseInt(e,16),n=Math.round(2.55*t),c=(i>>16)+n,s=(i>>8&255)+n,A=(255&i)+n;return(16777216+65536*(c<255?c<1?0:c:255)+256*(s<255?s<1?0:s:255)+(A<255?A<1?0:A:255)).toString(16).slice(1)},y=function(e){console.log("lightenColor(TAG_COLORS[props.children], 50) :>> ",D(S[e.children],50));var t="linear-gradient(45deg, #".concat(S[e.children],", #").concat(D(S[e.children],-30),")");return console.log(t),e.onClick?Object(l.jsx)("button",{onClick:e.onClick,style:Object(I.a)({background:t},e.active?{border:"2px solid white"}:{}),className:"Tag-button",children:e.children}):Object(l.jsx)("li",{style:{background:t},className:"Tag-li",children:e.children})},M=function(e){var t=Object(n.useState)(new Set(e.tags)),i=Object(A.a)(t,2),c=i[0],s=i[1],a=c.size===e.tags.length;return Object(n.useEffect)((function(){console.log("selectedTags :>> ",c),e.onSelectedTagsChange(c)}),[c,e]),Object(l.jsxs)("div",{className:"CardFilter",children:[Object(l.jsx)(y,{active:a,onClick:function(){s(new Set(e.tags))},children:"All"}),e.tags.map((function(t,i){return Object(l.jsx)(y,{active:c.has(t)&&!a,onClick:function(){a&&c.clear(),c.has(t)?c.delete(t):c.add(t),0===c.size?s(new Set(e.tags)):s(new Set(c))},children:t},i)}))]})},E=i(10),H=(i(34),Object(n.forwardRef)((function(e,t){return Object(l.jsxs)("div",{ref:t,className:"Card",children:[Object(l.jsxs)("div",{className:"content-wrapper",children:[e.footer?Object(l.jsx)("div",{className:"footer",children:e.footer}):null,Object(l.jsxs)("div",{className:"content",style:e.footer?{marginTop:"1.8rem"}:{},children:[Object(l.jsx)("img",{style:e.imageStyle,alt:"",src:e.image}),Object(l.jsx)("h1",{children:e.title}),Object(l.jsx)("ul",{children:e.tags.map((function(e){return console.log(e),Object(l.jsx)(y,{children:e},e)}))}),Object(l.jsx)("p",{children:e.description}),Object(l.jsxs)("div",{className:"links",children:[e.github?Object(l.jsx)("a",{href:e.github,target:"_blank",rel:"noreferrer",children:"GitHub"}):null,e.demo?Object(l.jsx)("a",{href:e.demo,target:"_blank",rel:"noreferrer",children:"Demo"}):null]})]})]}),Object(l.jsx)("div",{className:"top-left"}),Object(l.jsx)("div",{className:"bottom-right"})]})}))),z=(i(35),i.p+"static/media/sonic.dcb2c024.png"),L=i.p+"static/media/portfolio.c25b96d1.png",T=i.p+"static/media/chess.479e626c.jpg",G=i.p+"static/media/tomatoes.9231ff8f.jpg",X=i.p+"static/media/quote.13b21dd9.png",Y=i.p+"static/media/url-shorten.4bb356ef.png",F=i.p+"static/media/pcb2.2fc52996.png",J=i.p+"static/media/maxgram.69883188.png",K=i(11),W=[{title:"MaxGram",tags:["Web","React","Express","MongoDB"],image:J,description:"Clone of a certain social media made using MERN stack",demo:"https://maxgram.zabarka.com",github:"https://github.com/MaxZabarka/instagram-clone"},{title:"My Portfolio Website",tags:["Web","React"],image:L,description:"A high performance and responsive website. The same one you're using right now!",demo:"https://max.zabarka.com",github:"https://github.com/MaxZabarka/MaxZabarka.github.io/"},{title:"PCB Business Cards",tags:["C","Systems"],image:F,github:"https://github.com/MaxZabarka/pcb-cards",description:"A printed circuit board with a microcontroller and LED display. Plays games like snake, breakout, pong, all while being the size of a business card."},{image:z,description:"An artificial intellegence model that can beat the first few levels of Genesis Sonic",title:"Sonic AI",tags:["Python"],github:"https://github.com/MaxZabarka/sonic-ai",demo:"https://youtube.com/playlist?list=PLjRTfz_QoVL82TWcXYOuzYuZ-KBN-ah8r"},{title:"PomoMagic",tags:["Web","React"],image:G,description:"A lightweight, interactive and customizable tomato timer website",demo:"https://maxzabarka.github.io/tomato-timer/",github:"https://github.com/MaxZabarka/tomato-timer"},{title:"URL Shortener",tags:["Web","Express"],image:Y,description:"A URL shortener built using NodeJS, Express, and mySQL",github:"https://github.com/MaxZabarka/url-shortener",demo:"https://zabarka-url-shortener.herokuapp.com/ "},{title:"Quote Generator",tags:["Web"],image:X,description:"A stylish and lightweight meaningful quote generator built with vanilla JavaScript and CSS",demo:"https://maxzabarka.github.io/random-quote-generator/",github:"https://github.com/MaxZabarka/random-quote-generator/"},{title:"My 3D Portfolio",tags:["3D"],image:T,description:"My 3D graphics portfolio",demo:"https://www.artstation.com/maxzabarka",imageStyle:{objectPosition:"left center"}},{title:"Conways Game of Life",tags:["C"],image:"data:image/png;base64,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",description:"Cellular automaton written in C",github:"https://github.com/MaxZabarka/c-conways-game-of-life"}],R=function(e){var t=W.map((function(t){var i,n=!1,c=Object(E.a)(t.tags);try{for(c.s();!(i=c.n()).done;){var s=i.value;if(n=e.selectedTags.has(s),!0===e.selectedTags.has(s))break}}catch(A){c.e(A)}finally{c.f()}return n?Object(l.jsx)(H,Object(I.a)({},t),t.title):null}));return Object(l.jsx)("div",{className:"Cards",children:e.showFlip?Object(l.jsx)(K.a,{className:"grid",children:t}):Object(l.jsx)("div",{className:"grid",children:t})})},Z=(i(36),function(e){var t=Object(n.useState)(new Set),i=Object(A.a)(t,2),c=i[0],s=i[1];return Object(l.jsxs)("div",{className:"Work",children:[Object(l.jsx)("h1",{children:Object(l.jsx)("span",{className:"purple",children:"Work"})}),Object(l.jsx)("p",{children:"A selection of my most impressive projects that I have built for work or on my personal time"}),Object(l.jsx)(M,{onSelectedTagsChange:function(e){s(e)},tags:["Web","Systems","3D","React","Express","MongoDB","C","Python"]}),Object(l.jsx)(R,{showFlip:e.showFlip,selectedTags:c})]})}),U=(i(37),i(38),i(39),function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{style:e.textArea?{}:{height:"3rem"},className:"Input",children:[Object(l.jsx)("label",{htmlFor:e.name,children:e.name}),e.textArea?Object(l.jsx)("textarea",{rows:"9",className:"field",name:e.name,type:e.type,placeholder:e.placeholder}):Object(l.jsx)("input",{className:"field",name:e.name,type:e.type,placeholder:e.placeholder}),Object(l.jsx)("div",{className:"top-left"}),Object(l.jsx)("div",{className:"bottom-right"})]})})}),q=i(12),V=i.p+"static/media/spinner.7a1dbb63.svg",_=function(){var e=Object(n.useState)(0),t=Object(A.a)(e,2),i=t[0],c=t[1];return Object(l.jsx)("div",{className:"Form",onSubmit:function(e){e.preventDefault(),c(1),q.a.sendForm("service_e8cneih","template_6q4axyq",e.target,"user_wgEfOov1MSiidC5c9ccon").then((function(){c(2)}),(function(e){alert("Oh no! The contact form has failed. Try again or send me an email at maxim.zabarka@gmail.com")}))},children:Object(l.jsxs)("form",{children:[Object(l.jsx)(U,{name:"from_name",type:"text",placeholder:"Name"}),Object(l.jsx)(U,{name:"reply_to",type:"email",placeholder:"Email"}),Object(l.jsx)(U,{name:"company",type:"text",placeholder:"Company"}),Object(l.jsx)(U,{name:"message",textArea:!0,placeholder:"Message"}),Object(l.jsxs)("button",{type:"submit",disabled:2===i,children:[2===i?"Sent!":"Send",2===i?null:0===i?Object(l.jsx)("img",{style:{width:"1.5rem",filter:"invert(1)",transform:"translateY(0.2rem) ",marginLeft:"0.6rem"},alt:"",src:"data:image/png;base64,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"}):Object(l.jsx)("img",{style:{width:"1rem",transform:"translateY(0.1rem) scale(2)",marginLeft:"0.6rem"},alt:"",src:V})]})]})})},$=function(){var e=(new Date).getFullYear().toString();return e="2021"===e?"2021":"2021-"+e,Object(l.jsxs)("div",{className:"Contact",children:[Object(l.jsxs)("div",{className:"AboutBody",children:[Object(l.jsx)("h1",{className:"purple",children:"Contact"}),Object(l.jsxs)("h2",{children:[Object(l.jsx)("span",{children:"I am looking for opportunities."})," Let's build something great together!"]}),Object(l.jsx)(_,{})]}),Object(l.jsxs)("div",{className:"icons",children:[Object(l.jsx)(O,{link:"https://github.com/MaxZabarka",image:C,alt:"github-icon"}),Object(l.jsx)(O,{link:"https://www.linkedin.com/in/max-zabarka-0a739a1b6/",image:k,alt:"linkedin-icon"}),Object(l.jsx)(O,{link:"mailto: maxim.zabarka@gmail.com",image:B,alt:"email-icon"})]}),Object(l.jsxs)("p",{children:["Icons made by"," ",Object(l.jsx)("a",{href:"https://www.flaticon.com/authors/inkubators",children:"inkubators"})," ","from",Object(l.jsx)("a",{href:"https://www.flaticon.com/",children:" flaticon"})]}),Object(l.jsxs)("p",{children:["\xa9 ",e," Max Zabarka. All Rights Reserved."]})]})};i(40),i(41);window.slide=0;var ee=function(e){var t=Object(n.useState)(0),i=Object(A.a)(t,2),c=i[0],s=i[1],a=Object(n.useState)(!1),o=Object(A.a)(a,2),r=o[0],d=o[1],j=Object(n.useRef)(null);if(window.addEventListener("secondslide",(function(){1===window.slide||1===c||document.querySelector(".Cube.zoom")||(window.slide=1,e.onSecondSlide(),e.startTransition(),d(!0),s(1))}),!1),window.addEventListener("firstslide",(function(){0===window.slide||0===c||document.querySelector(".Cube.zoom")||(window.slide=0,e.onFirstSlide(),e.startTransition(),d(!0),s(0))}),!1),!r)return 0===c?Object(l.jsx)("div",{className:"Cube",children:Object(l.jsxs)("div",{ref:j,className:"wrapper show-0",children:[Object(l.jsx)("div",{className:"slide-1",children:e.componentOne}),Object(l.jsx)("div",{className:"slide-2",children:Object(l.jsx)("div",{style:{color:"white",height:"100%",overflowY:"hidden"},children:e.componentTwo})})]})}):Object(l.jsx)("div",{onWheel:m,className:"slide-active",style:{color:"white",height:"100%",overflowY:"scroll"},children:e.componentTwo});var b=c?0:1;return setTimeout((function(){j.current.classList.remove("show-"+b),j.current.classList.add("show-"+c)}),0),Object(l.jsx)("div",{className:"Cube zoom",children:Object(l.jsxs)("div",{ref:j,className:"wrapper show-"+b,onTransitionEnd:function(t){t.target===j.current&&(console.log("event",t),console.log("e.target",t.target),e.endTransition(),d(!1))},children:[Object(l.jsx)("div",{className:"slide-1",children:e.componentOne}),Object(l.jsx)("div",{className:"slide-2",children:Object(l.jsx)("div",{style:{color:"white",height:"100%",overflowY:"hidden",paddingRight:"10px"},children:e.componentTwo})})]})})};a.a.use([o.a,r.a]),window.secondSlide=document.createEvent("Event"),window.secondSlide.initEvent("secondslide",!0,!0),window.firstSlide=document.createEvent("Event"),window.firstSlide.initEvent("firstslide",!0,!0);var te=function(){var e=Object(n.useState)(!1),t=Object(A.a)(e,2),i=t[0],c=t[1],s=Object(n.useState)(!0),a=Object(A.a)(s,2),o=a[0],r=a[1],d=Object(n.useState)(!0),j=Object(A.a)(d,2),b=j[0],h=j[1];return window.addEventListener("secondslide",(function(){c(!0)}),!1),window.addEventListener("firstslide",(function(){c(!1)}),!1),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(P,{show:b,onNavigate:function(e){if("Home"===e)1===window.slide?(document.querySelector(".About").scrollIntoView({behavior:"smooth"}),setTimeout((function(){window.dispatchEvent(window.firstSlide)}),800)):window.dispatchEvent(window.firstSlide);else{if(1===window.slide)return void document.querySelector("."+e).scrollIntoView({behavior:"smooth"});window.dispatchEvent(window.secondSlide),setTimeout((function(){document.querySelector("."+e).scrollIntoView({behavior:"smooth"})}),2600)}},darken:i}),Object(l.jsx)(ee,{onFirstSlide:function(){r(!1)},onSecondSlide:function(){r(!0)},startTransition:function(){h(!1)},endTransition:function(){h(!0)},componentOne:Object(l.jsx)(u,{}),componentTwo:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p,{}),Object(l.jsx)(Z,{showFlip:o}),Object(l.jsx)($,{})]})})]})};i(42);s.a.render(Object(l.jsx)(te,{}),document.getElementById("root"))}]),[[43,1,2]]]);
//# sourceMappingURL=main.bafbcf2c.chunk.js.map