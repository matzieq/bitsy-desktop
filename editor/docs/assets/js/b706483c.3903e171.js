"use strict";(self.webpackChunkbitsy_docs=self.webpackChunkbitsy_docs||[]).push([[4127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},o="Tile Paint",l={unversionedId:"tools/paint/tilePaint",id:"tools/paint/tilePaint",title:"Tile Paint",description:"Features",source:"@site/docs/tools/paint/tilePaint.md",sourceDirName:"tools/paint",slug:"/tools/paint/tilePaint",permalink:"/docs/tools/paint/tilePaint",draft:!1,editUrl:"https://github.com/le-doux/bitsy/edit/main/docs/docs/tools/paint/tilePaint.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sprite Paint",permalink:"/docs/tools/paint/spritePaint"},next:{title:"Record GIF",permalink:"/docs/tools/recordgif/"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Tile paint",id:"tile-paint-1",level:3}],c={toc:s};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tile-paint"},"Tile Paint"),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("h3",{id:"tile-paint-1"},"Tile paint"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tile paint diagram",src:n(870).Z,width:"391",height:"650"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Tile name"),". The name of this current ",(0,r.kt)("a",{parentName:"p",href:"../paint/#tile"},"tile")," within the Bitsy editor. Used e.g. in the ",(0,r.kt)("a",{parentName:"p",href:"../find"},"find tool"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Previous / next tile buttons"),". Navigate between all the tiles you have created.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Add tile button"),". Creates a new tile. The paint tool will automatically switch view to that tile.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Duplicate tile button"),". Creates a copy of the current tile. The paint tool will automatically switch view to that tile.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Delete tile button"),". Deletes the current tile. A warning message will display before permanent deletion.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Find tile button"),". Opens the find tool on the tile tab to display all the tiles you have created.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Paint canvas"),". Edit the currently selected tile by clicking the pixels to toggle them on / off. Any changes are also updated immediately in the ",(0,r.kt)("a",{parentName:"p",href:"../room"},"room tool"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Show / hide grid"),". Toggle a pixel grid on / off in the paint canvas. The grid is not displayed when playing the game.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Tile animation"),". Opens the animation panel where you can edit two animation frames. Select frame 1 or frame 2 to edit it in the paint window. The preview shows how the animation will look when playing the game."))))}m.isMDXComponent=!0},870:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/paintDiagram02-bc6459a020c44e1b5b6972d9154ea6f3.JPG"}}]);