(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[4831],{32425:(e,n,t)=>{"use strict";t.d(n,{Z:()=>d});var r=t(45697),o=t.n(r),i=t(24852),c=t.n(i);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s=function(e){return e>100?"full":e>40?"medium":"small"},p=function(e){var n=e.size,t=e.style,r=void 0===t?{}:t,o=e.className,i=e.hidden;return c().createElement("div",{className:o,style:u({width:n,height:n,overflow:"hidden"},r)},!i&&c().createElement("div",{className:"mapstore-".concat(s(n),"-size-loader")}))};p.propTypes={size:o().number,className:o().string,style:o().object};const d=p},93136:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>E});var r=t(24852),o=t.n(r),i=t(71703),c=t(22222),l=t(22843),u=t(5346),a=t(30294),s=t(827),p=t(32425),d=t(93473),v=t(74621),f=t(25108),b=t(72036),g=t(62170),m=t(12547),y=t(73443),O=t(2811);function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var P=(0,i.connect)((0,c.P1)([function(e){var n;return null==e||null===(n=e.gnsave)||void 0===n?void 0:n.saving}],(function(e){return{saving:e}})))((function(e){return e.saving?o().createElement("div",{style:{position:"absolute",width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.75)",top:"0px",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",right:"0px"}},o().createElement(p.Z,{size:150})):null})),w=(0,i.connect)((0,c.P1)(v.jl,O.V$,O.il,s._H,(function(e,n,t,r){return{enabled:e&&!n&&(t||(null==r?void 0:r.canEdit))}})),{onClick:y.nY})((function(e){var n=e.enabled,t=e.onClick;return n?o().createElement(d.Z,{onClick:function(){return t()}},o().createElement(u.Z,{msgId:"save"})):null}));const E=(0,l.rx)("Save",{component:P,containers:{BurgerMenu:{name:"save",position:30,text:o().createElement(u.Z,{msgId:"save"}),icon:o().createElement(a.Glyphicon,{glyph:"floppy-open"}),action:y.nY,selector:(0,c.P1)(v.jl,O.V$,O.il,s._H,(function(e,n,t,r){return{style:e&&!n&&(t||null!=r&&r.canEdit)?{}:{display:"none"}}}))},ActionNavbar:{name:"Save",target:"leftMenuItem",Component:w}},epics:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){h(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},m.ZP),reducers:{gnresource:b.Z,gnsave:g.Z,controls:f.Z}})},2811:(e,n,t)=>{"use strict";t.d(n,{fg:()=>r,il:()=>o,V$:()=>i});var r=function(e){var n,t,r,o=null==e||null===(n=e.gnresource)||void 0===n?void 0:n.id,i=null==e||null===(t=e.gnresource)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.pk;return o||i},o=function(e){var n,t,r,o,i=null==e||null===(n=e.gnresource)||void 0===n||null===(t=n.permissions)||void 0===t?void 0:t.canEdit,c=(null==e||null===(r=e.gnresource)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.perms)||[];return i||c.includes("change_resourcebase")},i=function(e){var n;return null==e||null===(n=e.gnresource)||void 0===n?void 0:n.isNew}}}]);