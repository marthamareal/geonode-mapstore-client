(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[498],{32425:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(45697),o=n.n(r),c=n(67294),i=n.n(c);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e){return e>100?"full":e>40?"medium":"small"},p=function(e){var t=e.size,n=e.style,r=void 0===n?{}:n,o=e.className,c=e.hidden;return i().createElement("div",{className:o,style:a({width:t,height:t,overflow:"hidden"},r)},!c&&i().createElement("div",{className:"mapstore-".concat(l(t),"-size-loader")}))};p.propTypes={size:o().number,className:o().string,style:o().object};const f=p},99767:(e,t,n)=>{"use strict";n.d(t,{qP:()=>v,XA:()=>y,fA:()=>b,gN:()=>m,p5:()=>h,Rr:()=>O,DK:()=>g,En:()=>P,Tr:()=>x,t$:()=>j,XJ:()=>S,Dx:()=>E,Jy:()=>R});var r=n(8575),o=n(66654),c=n.n(o),i=n(47037),u=n.n(i),a=n(1469),s=n.n(a),l=n(83608),p=n.n(l);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e,t){return"<wps:Input>"+"<ows:Identifier>".concat(e,"</ows:Identifier>")+t+"</wps:Input>"},y=function(e){return"<wps:Data>".concat(e,"</wps:Data>")},b=function(e,t,n,r){return'<wps:Reference mimeType="'.concat(e,'" xlink:href="').concat(t,'" method="').concat(n,'"').concat("POST"===n?"":"/",">")+("POST"===n?"<wps:Body>".concat(r,"</wps:Body></wps:Reference>"):"")},m=function(e){return"<wps:LiteralData>".concat(e,"</wps:LiteralData>")},h=function(e,t,n){return"<wps:ComplexData".concat(t?' mimeType="'.concat(t,'"'):"").concat(n?' encoding="'.concat(n,'"'):"",">").concat(e,"</wps:ComplexData>")},O=function(e){return"<![CDATA[".concat(e,"]]>")},g=function(e){return"<wps:ResponseForm>".concat(e,"</wps:ResponseForm>")},P=function(e,t){return"<wps:RawDataOutput".concat(t?' mimeType="'.concat(t,'"'):"",">")+"<ows:Identifier>".concat(e,"</ows:Identifier>")+"</wps:RawDataOutput>"},x=function(e,t,n){return"<wps:ResponseDocument".concat(e?' storeExecuteResponse="true"':"").concat(t?' status="true"':"",">")+n+"</wps:ResponseDocument>"},j=function(e,t,n,r,o){return"<wps:Output".concat(e?' mimeType="'.concat(e,'"'):"").concat(t?' asReference="true"':"",">")+"<ows:Identifier>".concat(n,"</ows:Identifier>")+(r?"<ows:Title>".concat(r,"</ows:Title>"):"")+(o?"<ows:Abstract>".concat(o,"</ows:Abstract>"):"")+"</wps:Output>"},S=function(e){return v("writeParameters",y(h("<dwn:Parameters>".concat(e,"</dwn:Parameters>"))))},E=function(e,t){return'<dwn:Parameter key="'.concat(e,'">').concat(t,"</dwn:Parameter>")},D=function(e,t){var n=r.parse(e,!0),o=n.pathname;return(c()(n.pathname,"wfs")||c()(n.pathname,"wms"))&&(o=n.pathname.replace(/(wms|ows|wfs|wps)$/,"wps")),r.format(d(d({},n),{},{search:null,pathname:o,query:d(d({service:"WPS"},t),n.query)}))},R=function(e,t){if(e&&u()(e))return D(e,t);if(s()(e)){var n=p()(0,e.length-1);return D(e[n],t)}return e}},27835:(e,t,n)=>{"use strict";n.d(t,{Uh:()=>j,W5:()=>S,ai:()=>R,RW:()=>I,dr:()=>T,mG:()=>k});var r=n(6557),o=n.n(r),c=n(89255),i=n(5055),u=n(7526),a=n(75875),s=n.n(a),l=n(99767);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){var t="function"==typeof Map?new Map:void 0;return m=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return h(e,arguments,P(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),g(r,e)},m(e)}function h(e,t,n){return h=O()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&g(o,n.prototype),o},h.apply(null,arguments)}function O(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(c,e);var t,n,r,o=(t=c,n=O(),function(){var e,r=P(t);if(n){var o=P(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return b(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=o.call(this,e)).name="WPSExecuteError",n.code=t||e,n}return r=c,Object.defineProperty(r,"prototype",{writable:!1}),r}(m(Error)),j=function(e,t,n){return'<?xml version="1.0" encoding="UTF-8"?><wps:Execute version="1.0.0" service="WPS" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.opengis.net/wps/1.0.0" xmlns:wfs="http://www.opengis.net/wfs" xmlns:wps="http://www.opengis.net/wps/1.0.0" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" xmlns:wcs="http://www.opengis.net/wcs/1.1.1" xmlns:dwn="http://geoserver.org/wps/download" xmlns:xlink="http://www.w3.org/1999/xlink" xsi:schemaLocation="http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd">'+"<ows:Identifier>".concat(e,"</ows:Identifier>")+"<wps:DataInputs>"+(t||[]).join("")+"</wps:DataInputs>"+(n||"")+"</wps:Execute>"},S=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c.Observable.defer((function(){return s().get((0,l.Jy)(e,{version:"1.0.0",REQUEST:"GetExecutionStatus",executionId:t}),v({headers:{Accept:"application/xml"}},n))}))},E=function(e,t){var n,r,c=function(e){var t,n,r,c,i,u,a,s,l,p,f,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o(),w=null==e||null===(t=e.ExecuteResponse)||void 0===t||null===(n=t.Status)||void 0===n?void 0:n[0];return null!=w&&w.ProcessAccepted?{status:"ProcessAccepted"}:null!=w&&w.ProcessStarted?{status:"ProcessStarted"}:null!=w&&w.ProcessSucceeded?{status:"ProcessSucceeded",data:d(null===(r=e.ExecuteResponse.ProcessOutputs)||void 0===r||null===(c=r[0])||void 0===c?void 0:c.Output)}:null!=w&&w.ProcessFailed?{status:"ProcessFailed",exceptionReport:null==w||null===(i=w.ProcessFailed)||void 0===i||null===(u=i[0])||void 0===u||null===(a=u.ExceptionReport)||void 0===a||null===(s=a[0])||void 0===s||null===(l=s.Exception)||void 0===l||null===(p=l[0])||void 0===p||null===(f=p.ExceptionText)||void 0===f?void 0:f[0]}:null!=w&&w.ProcessPaused?{status:"ProcessPaused"}:{status:"UnexpectedStatus"}}(e,t);if("ProcessFailed"===c.status)throw new x(c.exceptionReport,"ProcessFailed");if("UnexpectedStatus"===c.status)throw new x("UnexpectedProcessStatus");if("ProcessSucceeded"===c.status)return{succeeded:!0,data:c.data};var i=null==e||null===(n=e.ExecuteResponse)||void 0===n||null===(r=n.$)||void 0===r?void 0:r.statusLocation;if(!i)throw new x("NoStatusLocation");var u=i.indexOf("executionId=");if(-1===u)throw new x("NoExecutionId");var a=i.slice(u+12),s=a.indexOf("&");return{succeeded:!1,executionId:-1===s?a:a.slice(0,s)}},D=function(e){var t,n;return null!=e&&null!==(t=e.Identifier)&&void 0!==t&&t[0]?{identifier:null==e||null===(n=e.Identifier)||void 0===n?void 0:n[0]}:null},R=function(e){var t,n,r,o,c;return null!=e&&null!==(t=e.Data)&&void 0!==t&&null!==(n=t[0])&&void 0!==n&&n.LiteralData?{data:null==e||null===(r=e.Data)||void 0===r||null===(o=r[0])||void 0===o||null===(c=o.LiteralData)||void 0===c?void 0:c[0]}:null},I=function(e){var t,n,r,o,c,i;return null!=e&&e.Reference?{href:null==e||null===(t=e.Reference)||void 0===t||null===(n=t[0])||void 0===n||null===(r=n.$)||void 0===r?void 0:r.href,mimeType:null==e||null===(o=e.Reference)||void 0===o||null===(c=o[0])||void 0===c||null===(i=c.$)||void 0===i?void 0:i.mimeType}:null},T=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return[D].concat(f(t||[])).map((function(t){return t(e)})).reduce((function(e,t){return t?v(v({},e),t):e}),{})}))}},A=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c.Observable.defer((function(){return s().post((0,l.Jy)(e,{version:"1.0.0",REQUEST:"Execute"}),t,v({headers:{"Content-Type":"application/xml"}},n))}))},k=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.executeStatusUpdateInterval,a=void 0===o?2e3:o,s=n.outputsExtractor,l=function(e){return c.Observable.defer((function(){return new Promise((function(t,n){return(0,i.parseString)(e,{tagNameProcessors:[u.stripPrefix]},(function(e,r){return e?n(e):t(r)}))}))}))};return A(e,t,r).catch((function(){throw new x("ExecuteProcessXHRFailed")})).switchMap((function(e){return"application/xml"===e.headers["content-type"]||"text/xml"===e.headers["content-type"]?l(e.data).map((function(t){return{data:t,type:"application/xml",originalData:e.data}})):c.Observable.of({data:e.data,type:e.headers["content-type"]})})).flatMap((function(t){var n=t.data,r=t.type,o=t.originalData;if("application/xml"!==r)return c.Observable.of(n);if(null==n||!n.ExecuteResponse)return c.Observable.of(o);var i=E(n,s),u=i.succeeded,p=i.data,f=i.executionId;if(u)return c.Observable.of(p);var d=c.Observable.interval(a).take(1).flatMap((function(){return S(e,f).catch((function(){throw new x("GetExecutionStatusXHRFailed")})).flatMap((function(e){return l(e.data).flatMap((function(e){var t=E(e,s);return t.succeeded?c.Observable.of(t.data):d}))}))}));return d}))}}}]);