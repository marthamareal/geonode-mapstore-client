(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[5549],{76329:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(24852),o=n.n(r),i=n(98611),a=n.n(i),l=n(22843);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const f=function(e){var t=e.items,n=e.loadedPlugins,i=e.loaderComponent,c=(0,r.useRef)({});c.current={items:t,loadedPlugins:n,loaderComponent:i};var s=a()(Object.keys(n||{}),",");return(0,r.useMemo)((function(){return function(e){return(t=e.items,function(e){if(Array.isArray(e))return m(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort((function(e,t){return e.position>t.position?1:-1})).map((function(t){return u(u({},t),{},{Component:t.Component||(0,l.KB)(t,e.loadedPlugins,e.loaderComponent||o().createElement("div",null))})}))||[];var t}(c.current)}),[s])}},13877:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var r=n(24852),o=n.n(r),i=n(45697),a=n.n(i),l=n(71703),c=n(22222),u=n(18446),s=n.n(u),m=n(22843),f=n(76329);function p(e,t){var n=e.items,r=t.loadedPlugins,i=(0,f.Z)({items:n,loadedPlugins:r});return o().createElement("div",{className:"gn-viewer-layout",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",display:"flex",flexDirection:"column"}},o().createElement("header",null,i.filter((function(e){return"header"===e.target})).map((function(e){var t=e.Component,n=e.name;return o().createElement(t,{key:n})}))),o().createElement("div",{className:"gn-viewer-layout-body",style:{display:"flex",width:"100%",flex:1,position:"relative"}},o().createElement("div",{className:"gn-viewer-left-column"},i.filter((function(e){return"leftColumn"===e.target})).map((function(e){var t=e.Component,n=e.name;return o().createElement(t,{key:n})}))),o().createElement("div",{className:"gn-viewer-layout-center",style:{flex:1,position:"relative"}},i.filter((function(e){return!e.target})).map((function(e){var t=e.Component,n=e.name;return o().createElement(t,{key:n})}))),o().createElement("div",{className:"gn-viewer-right-column"},i.filter((function(e){return"rightColumn"===e.target})).map((function(e){var t=e.Component,n=e.name;return o().createElement(t,{key:n})})))),o().createElement("footer",null,i.filter((function(e){return"footer"===e.target})).map((function(e){var t=e.Component,n=e.name;return o().createElement(t,{key:n})}))))}p.contextTypes={loadedPlugins:a().object};var d=(0,r.memo)(p,(function(e,t){return s()(e,t)})),y=(0,l.connect)((0,c.P1)([],(function(){return{}})),{})(d);const v=(0,m.rx)("ViewerLayout",{component:y,containers:{},epics:{},reducers:{}})}}]);