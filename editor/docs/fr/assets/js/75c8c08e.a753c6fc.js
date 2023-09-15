"use strict";(self.webpackChunkbitsy_docs=self.webpackChunkbitsy_docs||[]).push([[5033],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var o=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,o,i=function(t,e){if(null==t)return{};var r,o,i={},n=Object.keys(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var u=o.createContext({}),s=function(t){var e=o.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},c=function(t){var e=s(t.components);return o.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var r=t.components,i=t.mdxType,n=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=s(r),m=i,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||n;return r?o.createElement(h,a(a({ref:e},c),{},{components:r})):o.createElement(h,a({ref:e},c))}));function m(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=r.length,a=new Array(n);a[0]=p;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var s=2;s<n;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3066:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var o=r(7462),i=(r(7294),r(3905));const n={},a="Tutorial",l={unversionedId:"introduction/tutorial",id:"introduction/tutorial",title:"Tutorial",description:"This page links to tutorials written by the Bitsy community on various topics. If you've written a tutorial or know of one you'd like to add, click the Edit this page button below!",source:"@site/docs/introduction/tutorial.md",sourceDirName:"introduction",slug:"/introduction/tutorial",permalink:"/docs/fr/introduction/tutorial",draft:!1,editUrl:"https://github.com/le-doux/bitsy/new/main?filename=docs/i18n/fr/docusaurus-plugin-content-docs/current/introduction/tutorial.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/fr/introduction/overview"},next:{title:"Tools",permalink:"/docs/fr/category/tools"}},u={},s=[{value:"Getting started",id:"getting-started",level:2},{value:"Advanced topics",id:"advanced-topics",level:2},{value:"Hacks &amp; more",id:"hacks--more",level:2}],c={toc:s};function d(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,o.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tutorial"},"Tutorial"),(0,i.kt)("p",null,"This page links to tutorials written by the Bitsy community on various topics. If you've written a tutorial or know of one you'd like to add, click the ",(0,i.kt)("em",{parentName:"p"},"Edit this page")," button below!"),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For a general introduction and tutorial to using Bitsy, check out ",(0,i.kt)("a",{parentName:"li",href:"https://www.shimmerwitch.space/bitsyTutorial.html"},"Claire Morwood's tutorial"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rahji.github.io/bitsy-handout/web/"},"bitsy-handout"),": This handout contains a list of useful links to tutorials, tools, and other bitsy-related resources.")),(0,i.kt)("h2",{id:"advanced-topics"},"Advanced topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For a guide to using Bitsy variables, check out ",(0,i.kt)("a",{parentName:"li",href:"https://ayolland.itch.io/trevor/devlog/29520/bitsy-variables-a-tutorial"},"this tutorial by ayolland"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/pbz1hWEJelc"},"Bitsy dialogs tutorial (Video)"),": In this YouTube video, Rob Duarte covers advanced dialog topics such as branching lists.")),(0,i.kt)("h2",{id:"hacks--more"},"Hacks & more"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://itch.io/blog/515981/bitsy-museum-hack-20"},"Bitsy Museum Hack 2.0"),": Marlowe Dobbe wrote an updated tutorial for using the ",(0,i.kt)("a",{parentName:"li",href:"https://odd-hours.itch.io/bitsy-museum-hack"},"Bitsy Museum Hack")," that is compatible with the current version of bitsy!")))}d.isMDXComponent=!0}}]);