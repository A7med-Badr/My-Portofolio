if(!self.define){let o,e={};const r=(r,i)=>(r=new URL(r+".js",i).href,e[r]||new Promise((e=>{if("document"in self){const o=document.createElement("script");o.src=r,o.onload=e,document.head.appendChild(o)}else o=r,importScripts(r),e()})).then((()=>{let o=e[r];if(!o)throw new Error(`Module ${r} didn’t register its module`);return o})));self.define=(i,s)=>{const l=o||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let f={};const n=o=>r(o,l),t={module:{uri:l},exports:f,require:n};e[l]=Promise.all(i.map((o=>t[o]||n(o)))).then((o=>(s(...o),f)))}}define(["./workbox-79ffe3e0"],(function(o){"use strict";o.setCacheNameDetails({prefix:"anas_resume"}),self.addEventListener("message",(o=>{o.data&&"SKIP_WAITING"===o.data.type&&self.skipWaiting()})),o.precacheAndRoute([{url:"/My-Portofolio/Ahmed Badr - AI.pdf",revision:"84b80aad2743de690799bbcd4ce1a690"},{url:"/My-Portofolio/_redirects",revision:"fc4f9ff203a68082c0d8690a977dc921"},{url:"/My-Portofolio/css/app.06533d3c.css",revision:null},{url:"/My-Portofolio/css/chunk-vendors.1d256e1d.css",revision:null},{url:"/My-Portofolio/img/AhmedBadr.4f47a49a.png",revision:null},{url:"/My-Portofolio/img/works/Ahmed.jpg",revision:"23ad6fd7fd08465a866a580eaf8eeef7"},{url:"/My-Portofolio/img/works/Customer attrition.jpg",revision:"37a2135c96400b206349cc6b0d391646"},{url:"/My-Portofolio/img/works/Face Attendance Project.jpg",revision:"addc2dafe11e887dfdb1281aa38a85cb"},{url:"/My-Portofolio/img/works/Fuel Consumption.jpg",revision:"091034497bf63898df1942bc12bf0f38"},{url:"/My-Portofolio/img/works/portofolio.jpg",revision:"04a07271ccd4288347f611b7df122f23"},{url:"/My-Portofolio/img/works/prediction.jpg",revision:"bebcfb4b1b87e3e20d41d6e1e0874844"},{url:"/My-Portofolio/img/works/real-or-fake.jpg",revision:"e53248138afe3e2ccea072a2d62b9e68"},{url:"/My-Portofolio/index.html",revision:"d29878a86352c3d38e1a0a5f13fe4de1"},{url:"/My-Portofolio/js/590.8de08551.js",revision:null},{url:"/My-Portofolio/js/632.449c4bc0.js",revision:null},{url:"/My-Portofolio/js/751.44bdd346.js",revision:null},{url:"/My-Portofolio/js/app.4b262bf2.js",revision:null},{url:"/My-Portofolio/js/chunk-vendors.e766f855.js",revision:null},{url:"/My-Portofolio/manifest.json",revision:"150888a14c5b002c6ec2eceb307790f6"},{url:"/My-Portofolio/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
