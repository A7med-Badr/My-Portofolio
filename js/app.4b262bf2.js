(function(){"use strict";var e={2859:function(e,n,t){var o=t(9242),r=t(3396);const i=(0,r._)("div",{id:"works-modal"},null,-1),a={class:"mx-auto relative text-gray-100 md:py-6 md:px-5 md:max-w-2xl md:items-center md:grid md:grid-cols-6 lg:grid-cols-12 lg:max-w-7xl lg:h-screen lg:overflow-hidden"};function l(e,n,t,o,l,s){const c=(0,r.up)("BackAnimations"),d=(0,r.up)("NavBar"),u=(0,r.up)("ProfileCard"),f=(0,r.up)("VeiwsSwitcher");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(c),i,(0,r._)("div",a,[(0,r.Wm)(d),(0,r.Wm)(u,{class:"md:col-span-5 lg:col-span-4"}),(0,r.Wm)(f,{class:"md:px-0 md:row-span-auto md:col-span-5 md:col-start-2 lg:col-span-7",id:"viewer"})])],64)}var s=t(7139);const c={class:"flex flex-col sticky top-0 left-0 w-full text-center text-xs md:top-1/4 z-40 lg:static md:max-w-fit md:mt-10"},d={class:"relative bg-second md:rounded-lg"},u={class:"pl-6 py-0.5 md:hidden align-middle text-left"},f={class:"divide-x md:divide-x-0 md:divide-y-2 divide-gray-400/50 flex md:flex-col align-middle justify-evenly md:justify-center border-t md:border-t-0 border-gray-400/50"},m=["onClick"];function p(e,n,t,o,i,a){const l=(0,r.up)("TitleTyping"),p=(0,r.up)("font-awesome-icon"),g=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("nav",c,[(0,r._)("div",d,[(0,r._)("div",u,[(0,r.Wm)(l)]),(0,r._)("ul",f,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.navs,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e.name,onClick:n=>a.scrollView(e.name),class:"px-3 py-2 w-full"},[(0,r.Wm)(g,{class:"flex flex-col gap-0.5 transition-all duration-300 hover:text-primary/70 focus:outline-none",to:e.to,"active-class":"text-primary"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{class:"text-2xl",icon:"fa-solid "+e.icon},null,8,["icon"]),(0,r.Uk)(" "+(0,s.zw)(e.name),1)])),_:2},1032,["to"])],8,m)))),128))])])])}const g=(0,r._)("p",{class:"text-4xl pb-1"},"Ahmed Badr ",-1);function v(e,n,t,o,i,a){const l=(0,r.up)("VueWriter");return(0,r.wg)(),(0,r.iD)(r.HY,null,[g,(0,r.Wm)(l,{eraseSpeed:25,typeSpeed:50,intervals:25,class:"text-primary text-base",array:["Artificial Intelligence"]})],64)}var b=t(8745),w={components:{VueWriter:b.Z},props:["fontSize"]},h=t(89);const y=(0,h.Z)(w,[["render",v]]);var x=y,k={data:()=>({navs:[{name:"About",icon:"fa-user-tie",to:"/"},{name:"Skill",icon:"fa-bars-staggered",to:"/resume"},{name:"Works",icon:"fa-paintbrush",to:"/works"},{name:"Contact",icon:"fa-at",to:"/contact"}]}),methods:{scrollView(e){const n=document.getElementById("profile-card").offsetHeight;document.title="Ahmed Badr"+e,window.scroll({top:n,behavior:"smooth"})}},components:{TitleTyping:x}};const _=(0,h.Z)(k,[["render",p]]);var A=_;const j={class:"bg-gradient-to-tr from-gray-500 via-gray-700 to-black w-screen h-screen fixed top-0 left-0 overflow-hidden z-[-50]"},D={class:"absolute top-0 left-0 w-screen h-screen overflow-hidden z-[-45]"};function T(e,n){return(0,r.wg)(),(0,r.iD)("div",j,[(0,r._)("ul",D,[((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)(10,(e=>(0,r._)("li",{class:"bg-white/5 absolute rounded-xl animate-spin-slow z-[-40] list-none w-20 h-20 -bottom-96 transition-all block",key:e}))),64))])])}const I={},S=(0,h.Z)(I,[["render",T],["__scopeId","data-v-c0c2ac5a"]]);var W=S;const C={id:"profile-card",name:"profile-card",class:"relative z-20 shadow-xl shadow-black/50 rounded-lg md:max-w-screen-sm md:w-full before:absolute md:before:w-full before:h-full before:-z-10 before:-left-4 before:-top-4 before:rounded-lg md:before:bg-gradient-to-b md:before:from-second/40"},B=(0,r._)("div",{class:"bg-hero md:rounded-t-lg bg-top bg-cover bg-no-repeat w-full h-80 md:h-96 overflow-hidden relative after:absolute after:bg-second after:w-3/4 after:h-20 after:-bottom-12 after:-left-1/4 after:rotate-12 before:absolute before:bg-second before:w-3/4 before:h-20 before:-bottom-12 before:left-1/2 before:-rotate-12"},null,-1),H={class:"bg-second lg:rounded-b-lg text-center pt-8"},O={class:"py-6 relative before:line-gradiant-x"},z=["href"],P={class:"flex justify-around"},Z=(0,r._)("a",{href:"./Ahmed Badr - AI.pdf",download:"Ahmed Badr - AI.pdf",target:"_blank",class:"hover:text-primary focus:text-primary focus:outline-none transition-all duration-300 w-full py-5"}," Download CV ",-1),M=(0,r.Uk)("Contact Me");function N(e,n,t,o,i,a){const l=(0,r.up)("TitleTyping"),s=(0,r.up)("font-awesome-icon"),c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",C,[B,(0,r._)("div",H,[(0,r.Wm)(l),(0,r._)("div",O,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.profiles,(e=>((0,r.wg)(),(0,r.iD)("a",{class:"px-2 hover:text-primary focus:text-primary focus:outline-none transition-all duration-300",href:e.link,target:"_blank",key:e.icon},[(0,r.Wm)(s,{icon:e.icon},null,8,["icon"])],8,z)))),128))]),(0,r._)("div",P,[Z,(0,r.Wm)(c,{to:"/contact",class:"py-5 hover:text-primary focus:text-primary focus:outline-none transition-all duration-300 w-full relative before:line-gradiant-y"},{default:(0,r.w5)((()=>[M])),_:1})])])])}var E={components:{TitleTyping:x},data:()=>({profiles:[{link:"https://github.com/A7med-Badr",icon:"fa-brands fa-github"},{link:"https://www.linkedin.com/in/ahmed-youssef-amin/",icon:"fa-brands fa-linkedin-in"}]})};const L=(0,h.Z)(E,[["render",N]]);var $=L;function V(e,n){const t=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(t,null,{default:(0,r.w5)((({Component:n})=>[(0,r.Wm)(o.uT,{mode:"out-in","enter-active-class":"transition-all duration-500 animate-fade-in","leave-active-class":"transition-all duration-200 animate-fade-out","enter-from-class":"translate-y-full lg:-translate-x-full","leave-to-class":"translate-y-full lg:-translate-x-full"},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.j4)((0,r.LL)(n),{class:"w-full bg-second/50 overflow-x-hidden pb-8 text-white/80 md:rounded-b-lg lg:rounded-lg lg:max-h-[80%] md:min-h-[80%] lg:overflow-y-auto",key:e.$route.path}))])),_:2},1024)])),_:1})}const Y={},K=(0,h.Z)(Y,[["render",V]]);var q=K,F={components:{NavBar:A,BackAnimations:W,ProfileCard:$,VeiwsSwitcher:q},mounted(){document.title="Ahmed Badr";const e=document.querySelector("[rel='icon']");e.setAttribute("href","icon.png")}};const U=(0,h.Z)(F,[["render",l]]);var X=U,G=t(5431);(0,G.z)("/My-Portofolio/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var Q=t(2483);const R={name:"AboutView",class:"flex flex-wrap"},J=(0,r._)("div",{class:"w-full md:w-15/2 p-6"}," I’m Ahmed Badr, an AI developer from Egypt. with 1+ year experience in computer engineering and programming, artificial intelligence (AI) using machine learning, data science, computer vision, Natural Language Processing (NLP), and deep learning. I have rich experience in computer engineering and programming for artificial intelligence (AI). I love the parade of brand-new things and am always looking for new things to learn. ",-1),ee={class:"flex flex-wrap text-center"},ne={class:"text-white text-2xl font-bold py-4"},te=["src","alt"];function oe(e,n,t,o,i,a){const l=(0,r.up)("SectionsTitle"),c=(0,r.up)("InfoModifer"),d=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(l,{name:"About Me"}),(0,r._)("div",R,[J,(0,r._)("div",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.aboutInfo,(e=>((0,r.wg)(),(0,r.j4)(c,{key:e.name,info:e.info,name:e.name,class:"before:last:hidden first:pt-0"},null,8,["info","name"])))),128))])]),(0,r.Wm)(l,{name:"My Services",class:"pt-0"}),(0,r._)("div",ee,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.myServices,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"w-full p-6 relative md:w-1/2 even:before:line-gradiant-y last:w-full after:line-gradiant-x",key:e.title},[(0,r.Wm)(d,{class:"bg-primary w-10 h-10 p-4 rounded-full text-white",icon:`fa-solid ${e.icon}`},null,8,["icon"]),(0,r._)("p",ne,(0,s.zw)(e.title),1),(0,r._)("p",null,(0,s.zw)(e.description),1)])))),128)),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.clients,(e=>((0,r.wg)(),(0,r.iD)("span",{class:"w-1/2 p-6 relative grayscale transition-all duration-500 hover:grayscale-0 md:w-1/4 before:line-gradiant-y after:line-gradiant-x",key:e.link},[(0,r._)("img",{src:"img/clientLogos/"+e.img,alt:e.alt,class:"m-auto w-5/6 h-full"},null,8,te)])))),128))])])}var re=t(5970),ie=t(5910),ae={components:{SectionsTitle:re.Z,InfoModifer:ie.Z},data(){return{myServices:[{icon:"fa-code",title:"AI Development",description:"Advanced AI development services help automate business processes and overcome difficult business problems quickly."}]}}};const le=(0,h.Z)(ae,[["render",oe]]);var se=le;const ce=[{path:"/",name:"home",component:se},{path:"/resume",name:"resume",component:()=>t.e(590).then(t.bind(t,3590))},{path:"/works",name:"works",component:()=>t.e(751).then(t.bind(t,7751))},{path:"/contact",name:"contact",component:()=>t.e(632).then(t.bind(t,632))}],de=(0,Q.p7)({history:(0,Q.PO)("/My-Portofolio/"),routes:ce});var ue=de,fe=t(8125),me=t(7749),pe=t(8321),ge=t(2234);fe.vI.add(pe.Cv1,pe.Ljc,pe.QEb,pe.IBq,ge.zhw,ge.hwn,pe.FU$,ge.VHX,pe.dT$,pe.D_B,pe.bln,pe.HXv,pe.Xf_,pe.RrC),(0,o.ri)(X).component("font-awesome-icon",me.GN).use(ue).mount("#app")},5910:function(e,n,t){t.d(n,{Z:function(){return f}});var o=t(3396),r=t(7139);const i={class:"flex flex-wrap justify-between py-4 relative before:line-gradiant-x"},a={class:"bg-primary text-white max-h-8 py-1 px-2 rounded after:content-['.....'] after:pl-1 after:tracking-[4px]"},l={class:"p-1 break-all"};function s(e,n,t,s,c,d){return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("p",a,(0,r.zw)(t.name),1),(0,o._)("p",l,(0,r.zw)(t.info),1)])}var c={props:["name","info"]},d=t(89);const u=(0,d.Z)(c,[["render",s]]);var f=u},5970:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(3396);const r={class:"p-6 relative before:line-gradiant-x"},i=["innerHTML"];function a(e,n,t,a,l,s){return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",{class:"text-2xl font-bold text-white relative before:bg-gradient-to-r before:from-primary/60 before:w-10 before:h-10 before:rounded-full before:absolute before:left-0 before:top-0 tracking-wider",innerHTML:s.nameHandeler},null,8,i)])}var l={props:["name"],computed:{nameHandeler(){const e=this.name.split(" ");return this.name.includes(" ")&&e.length>2?`<p class="pl-4"><span class="text-primary">${e[0]}</span> ${e[1]} ${e[2]}</p>`:this.name.includes(" ")&&2==e.length?`<p class="pl-4"><span class="text-primary">${e[0]}</span> ${e[1]}</p>`:`<p class="pl-4 first-letter:text-primary">${this.name}</p>`}}},s=t(89);const c=(0,s.Z)(l,[["render",a]]);var d=c}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var l=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[s])}))?o.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(d--,1);var c=r();void 0!==c&&(n=c)}}return n}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{590:"8de08551",632:"449c4bc0",751:"44bdd346"}[e]+".js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="anas_resume:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var l,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==n+i){l=u;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",n+i),l.src=o),e[o]=[r];var f=function(n,t){l.onerror=l.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/My-Portofolio/"}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),l=new Error,s=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;l.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,r[1](l)}};t.l(a,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],l=o[1],s=o[2],c=0;if(a.some((function(n){return 0!==e[n]}))){for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(s)var d=s(t)}for(n&&n(o);c<a.length;c++)i=a[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},o=self["webpackChunkanas_resume"]=self["webpackChunkanas_resume"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(2859)}));o=t.O(o)})();
//# sourceMappingURL=app.4b262bf2.js.map