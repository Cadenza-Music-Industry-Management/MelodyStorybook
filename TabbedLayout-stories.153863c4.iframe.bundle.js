"use strict";(self.webpackChunkmelodystorybook=self.webpackChunkmelodystorybook||[]).push([[7854],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(obj,key,value){return(key=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.Z)(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_toPropertyKey});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:()=>_typeof})},"./node_modules/@headlessui/react/dist/components/keyboard.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>o});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},"./node_modules/@headlessui/react/dist/hooks/use-event.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>o});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");let o=function(t){let e=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.E)(t);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((...r)=>e.current(...r)),[e])}},"./node_modules/@headlessui/react/dist/hooks/use-id.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>I});var o,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js"),_utils_env_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/env.js");let I=null!=(o=react__WEBPACK_IMPORTED_MODULE_0__.useId)?o:function(){let n=(0,_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__.H)(),[e,u]=react__WEBPACK_IMPORTED_MODULE_0__.useState(n?()=>_utils_env_js__WEBPACK_IMPORTED_MODULE_2__.O.nextId():null);return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__.e)((()=>{null===e&&u(_utils_env_js__WEBPACK_IMPORTED_MODULE_2__.O.nextId())}),[e]),null!=e?""+e:void 0}},"./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>l});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_env_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/env.js");let l=(e,f)=>{_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.O.isServer?(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(e,f):(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(e,f)}},"./node_modules/@headlessui/react/dist/hooks/use-latest-value.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>s});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");function s(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)((()=>{r.current=e}),[e]),r}},"./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>s});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");function i(t){var n;if(t.type)return t.type;let e=null!=(n=t.as)?n:"button";return"string"==typeof e&&"button"===e.toLowerCase()?"button":void 0}function s(t,e){let[n,u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>i(t)));return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)((()=>{u(i(t))}),[t.type,t.as]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)((()=>{n||e.current&&e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button")}),[n,e]),n}},"./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>l});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_env_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/env.js");function l(){let[e,f]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.O.isHandoffComplete);return e&&!1===_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.O.isHandoffComplete&&f(!1),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{!0!==e&&f(!0)}),[e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.O.handoff()),[]),e}},"./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>y,h:()=>T});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js");let u=Symbol();function T(t,n=!0){return Object.assign(t,{[u]:n})}function y(...t){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{n.current=t}),[t]);let c=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)((e=>{for(let o of n.current)null!=o&&("function"==typeof o?o(e):o.current=e)}));return t.every((e=>null==e||(null==e?void 0:e[u])))?void 0:c}},"./node_modules/@headlessui/react/dist/internal/hidden.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>p,_:()=>c});var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/render.js");let a="div";var e,p=((e=p||{})[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e);let c=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.yV)((function s(t,o){let{features:n=1,...e}=t,d={ref:o,"aria-hidden":2==(2&n)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4==(4&n)&&2!=(2&n)&&{display:"none"}}};return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.sY)({ourProps:d,theirProps:e,slot:{},defaultTag:a,name:"Hidden"})}))},"./node_modules/@headlessui/react/dist/utils/class-names.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function e(...n){return n.filter(Boolean).join(" ")}__webpack_require__.d(__webpack_exports__,{A:()=>e})},"./node_modules/@headlessui/react/dist/utils/disposables.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>o});var _micro_task_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/micro-task.js");function o(){let n=[],r={addEventListener:(e,t,s,a)=>(e.addEventListener(t,s,a),r.add((()=>e.removeEventListener(t,s,a)))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add((()=>cancelAnimationFrame(t)))},nextFrame:(...e)=>r.requestAnimationFrame((()=>r.requestAnimationFrame(...e))),setTimeout(...e){let t=setTimeout(...e);return r.add((()=>clearTimeout(t)))},microTask(...e){let t={current:!0};return(0,_micro_task_js__WEBPACK_IMPORTED_MODULE_0__.Y)((()=>{t.current&&e[0]()})),r.add((()=>{t.current=!1}))},style(e,t,s){let a=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:s}),this.add((()=>{Object.assign(e.style,{[t]:a})}))},group(e){let t=o();return e(t),this.add((()=>t.dispose()))},add:e=>(n.push(e),()=>{let t=n.indexOf(e);if(t>=0)for(let s of n.splice(t,1))s()}),dispose(){for(let e of n.splice(0))e()}};return r}},"./node_modules/@headlessui/react/dist/utils/env.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>s});var i=Object.defineProperty,r=(t,e,n)=>(((t,e,n)=>{e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n})(t,"symbol"!=typeof e?e+"":e,n),n);let s=new class o{constructor(){r(this,"current",this.detect()),r(this,"handoffState","pending"),r(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},"./node_modules/@headlessui/react/dist/utils/focus-management.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C5:()=>y,EO:()=>_,TO:()=>M,fE:()=>N,jA:()=>O,sP:()=>h,tJ:()=>T,wI:()=>D,z2:()=>I});var _disposables_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/disposables.js"),_match_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/match.js"),_owner_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/owner.js");let c=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var t,o,n,M=((n=M||{})[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n),N=((o=N||{})[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o),F=((t=F||{})[t.Previous=-1]="Previous",t[t.Next=1]="Next",t);function f(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(c)).sort(((r,t)=>Math.sign((r.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER))))}var T=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(T||{});function h(e,r=0){var t;return e!==(null==(t=(0,_owner_js__WEBPACK_IMPORTED_MODULE_0__.r)(e))?void 0:t.body)&&(0,_match_js__WEBPACK_IMPORTED_MODULE_1__.E)(r,{0:()=>e.matches(c),1(){let l=e;for(;null!==l;){if(l.matches(c))return!0;l=l.parentElement}return!1}})}function D(e){let r=(0,_owner_js__WEBPACK_IMPORTED_MODULE_0__.r)(e);(0,_disposables_js__WEBPACK_IMPORTED_MODULE_2__.k)().nextFrame((()=>{r&&!h(r.activeElement,0)&&y(e)}))}var w=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(w||{});function y(e){null==e||e.focus({preventScroll:!0})}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",(e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")}),!0),document.addEventListener("click",(e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")}),!0));let S=["textarea","input"].join(",");function I(e,r=(t=>t)){return e.slice().sort(((t,l)=>{let o=r(t),i=r(l);if(null===o||null===i)return 0;let n=o.compareDocumentPosition(i);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function _(e,r){return O(f(),r,{relativeTo:e})}function O(e,r,{sorted:t=!0,relativeTo:l=null,skipElements:o=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,n=Array.isArray(e)?t?I(e):e:f(e);o.length>0&&n.length>1&&(n=n.filter((s=>!o.includes(s)))),l=null!=l?l:i.activeElement;let u,E=(()=>{if(5&r)return 1;if(10&r)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(1&r)return 0;if(2&r)return Math.max(0,n.indexOf(l))-1;if(4&r)return Math.max(0,n.indexOf(l))+1;if(8&r)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=32&r?{preventScroll:!0}:{},d=0,a=n.length;do{if(d>=a||d+a<=0)return 0;let s=x+d;if(16&r)s=(s+a)%a;else{if(s<0)return 3;if(s>=a)return 1}u=n[s],null==u||u.focus(p),d+=E}while(u!==i.activeElement);return 6&r&&function H(e){var r,t;return null!=(t=null==(r=null==e?void 0:e.matches)?void 0:r.call(e,S))&&t}(u)&&u.select(),2}},"./node_modules/@headlessui/react/dist/utils/match.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function u(r,n,...a){if(r in n){let e=n[r];return"function"==typeof e?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}__webpack_require__.d(__webpack_exports__,{E:()=>u})},"./node_modules/@headlessui/react/dist/utils/micro-task.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function t(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((o=>setTimeout((()=>{throw o}))))}__webpack_require__.d(__webpack_exports__,{Y:()=>t})},"./node_modules/@headlessui/react/dist/utils/owner.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>e});var _env_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/env.js");function e(r){return _env_js__WEBPACK_IMPORTED_MODULE_0__.O.isServer?null:r instanceof Node?r.ownerDocument:null!=r&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}},"./node_modules/@headlessui/react/dist/utils/render.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AN:()=>S,l4:()=>j,oA:()=>R,sY:()=>X,yV:()=>D});var e,a,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_class_names_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/class-names.js"),_match_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/match.js"),S=((a=S||{})[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a),j=((e=j||{})[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e);function X({ourProps:r,theirProps:t,slot:e,defaultTag:a,features:s,visible:n=!0,name:f}){let o=N(t,r);if(n)return c(o,e,a,f);let u=null!=s?s:0;if(2&u){let{static:l=!1,...p}=o;if(l)return c(p,e,a,f)}if(1&u){let{unmount:l=!0,...p}=o;return(0,_match_js__WEBPACK_IMPORTED_MODULE_1__.E)(l?0:1,{0:()=>null,1:()=>c({...p,hidden:!0,style:{display:"none"}},e,a,f)})}return c(o,e,a,f)}function c(r,t={},e,a){let{as:s=e,children:n,refName:f="ref",...o}=g(r,["unmount","static"]),u=void 0!==r.ref?{[f]:r.ref}:{},l="function"==typeof n?n(t):n;"className"in o&&o.className&&"function"==typeof o.className&&(o.className=o.className(t));let p={};if(t){let i=!1,m=[];for(let[y,d]of Object.entries(t))"boolean"==typeof d&&(i=!0),!0===d&&m.push(y);i&&(p["data-headlessui-state"]=m.join(" "))}if(s===react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&Object.keys(R(o)).length>0){if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(l)||Array.isArray(l)&&l.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map((d=>`  - ${d}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((d=>`  - ${d}`)).join("\n")].join("\n"));let i=l.props,m="function"==typeof(null==i?void 0:i.className)?(...d)=>(0,_class_names_js__WEBPACK_IMPORTED_MODULE_2__.A)(null==i?void 0:i.className(...d),o.className):(0,_class_names_js__WEBPACK_IMPORTED_MODULE_2__.A)(null==i?void 0:i.className,o.className),y=m?{className:m}:{};return(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(l,Object.assign({},N(l.props,R(g(o,["ref"]))),p,u,function w(...r){return{ref:r.every((t=>null==t))?void 0:t=>{for(let e of r)null!=e&&("function"==typeof e?e(t):e.current=t)}}}(l.ref,u.ref),y))}return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(s,Object.assign({},g(o,["ref"]),s!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&u,s!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&p),l)}function N(...r){if(0===r.length)return{};if(1===r.length)return r[0];let t={},e={};for(let s of r)for(let n in s)n.startsWith("on")&&"function"==typeof s[n]?(null!=e[n]||(e[n]=[]),e[n].push(s[n])):t[n]=s[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map((s=>[s,void 0]))));for(let s in e)Object.assign(t,{[s](n,...f){let o=e[s];for(let u of o){if((n instanceof Event||(null==n?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;u(n,...f)}}});return t}function D(r){var t;return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(r),{displayName:null!=(t=r.displayName)?t:r.name})}function R(r){let t=Object.assign({},r);for(let e in t)void 0===t[e]&&delete t[e];return t}function g(r,t=[]){let e=Object.assign({},r);for(let a of t)a in e&&delete e[a];return e}},"./components/Melody/src/utils/functions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function formatBytes(bytes){var decimals=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,k=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1024,d=Math.floor(Math.log(bytes)/Math.log(k));return 0===bytes?"0 Bytes":parseFloat((bytes/Math.pow(k,d)).toFixed(Math.max(0,decimals)))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][d]}function classNames(){for(var _len=arguments.length,classes=new Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.filter(Boolean).join(" ")}__webpack_require__.d(__webpack_exports__,{A:()=>classNames,t:()=>formatBytes})},"./stories/TabbedLayout.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TabbedLayoutTemplate:()=>TabbedLayoutTemplate,default:()=>TabbedLayout_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),TabbedLayout=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./components/Melody/src/components/Layouts/TabbedLayout.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TabbedLayout.Z,options);TabbedLayout.Z&&TabbedLayout.Z.locals&&TabbedLayout.Z.locals;var render=__webpack_require__("./node_modules/@headlessui/react/dist/utils/render.js"),use_id=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-id.js"),match=__webpack_require__("./node_modules/@headlessui/react/dist/utils/match.js"),keyboard=__webpack_require__("./node_modules/@headlessui/react/dist/components/keyboard.js"),focus_management=__webpack_require__("./node_modules/@headlessui/react/dist/utils/focus-management.js"),use_iso_morphic_effect=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),use_sync_refs=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js"),use_resolve_button_type=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js"),use_latest_value=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-latest-value.js"),internal_hidden=__webpack_require__("./node_modules/@headlessui/react/dist/internal/hidden.js");function p({onFocus:n}){let[r,o]=(0,react.useState)(!0);return r?react.createElement(internal_hidden._,{as:"button",type:"button",features:internal_hidden.A.Focusable,onFocus:a=>{a.preventDefault();let e,u=50;e=requestAnimationFrame((function t(){if(!(u--<=0))return n()?(o(!1),void cancelAnimationFrame(e)):void(e=requestAnimationFrame(t));e&&cancelAnimationFrame(e)}))}}):null}var use_event=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js"),micro_task=__webpack_require__("./node_modules/@headlessui/react/dist/utils/micro-task.js"),owner=__webpack_require__("./node_modules/@headlessui/react/dist/utils/owner.js");const s=react.createContext(null);function stable_collection_C({children:n}){let t=react.useRef(function a(){return{groups:new Map,get(n,t){var c;let e=this.groups.get(n);e||(e=new Map,this.groups.set(n,e));let l=null!=(c=e.get(t))?c:0;return e.set(t,l+1),[Array.from(e.keys()).indexOf(t),function i(){let u=e.get(t);u>1?e.set(t,u-1):e.delete(t)}]}}}());return react.createElement(s.Provider,{value:t},n)}function stable_collection_d(n){let t=react.useContext(s);if(!t)throw new Error("You must wrap your component in a <StableCollection>");let e=function f(){var l,o,i;let n=null!=(i=null==(o=null==(l=react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)?void 0:l.ReactCurrentOwner)?void 0:o.current)?i:null;if(!n)return Symbol();let t=[],e=n;for(;e;)t.push(e.index),e=e.return;return"$."+t.join(".")}(),[l,o]=t.current.get(n,e);return react.useEffect((()=>o),[]),l}var r,o,t,ue=((t=ue||{})[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t),Te=((o=Te||{})[o.Less=-1]="Less",o[o.Equal=0]="Equal",o[o.Greater=1]="Greater",o),de=((r=de||{})[r.SetSelectedIndex=0]="SetSelectedIndex",r[r.RegisterTab=1]="RegisterTab",r[r.UnregisterTab=2]="UnregisterTab",r[r.RegisterPanel=3]="RegisterPanel",r[r.UnregisterPanel=4]="UnregisterPanel",r);let ce={0(e,n){var u;let t=(0,focus_management.z2)(e.tabs,(T=>T.current)),o=(0,focus_management.z2)(e.panels,(T=>T.current)),s=t.filter((T=>{var l;return!(null!=(l=T.current)&&l.hasAttribute("disabled"))})),r={...e,tabs:t,panels:o};if(n.index<0||n.index>t.length-1){let T=(0,match.E)(Math.sign(n.index-e.selectedIndex),{[-1]:()=>1,0:()=>(0,match.E)(Math.sign(n.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});return 0===s.length?r:{...r,selectedIndex:(0,match.E)(T,{0:()=>t.indexOf(s[0]),1:()=>t.indexOf(s[s.length-1])})}}let i=t.slice(0,n.index),b=[...t.slice(n.index),...i].find((T=>s.includes(T)));if(!b)return r;let c=null!=(u=t.indexOf(b))?u:e.selectedIndex;return-1===c&&(c=e.selectedIndex),{...r,selectedIndex:c}},1(e,n){var r;if(e.tabs.includes(n.tab))return e;let t=e.tabs[e.selectedIndex],o=(0,focus_management.z2)([...e.tabs,n.tab],(i=>i.current)),s=null!=(r=o.indexOf(t))?r:e.selectedIndex;return-1===s&&(s=e.selectedIndex),{...e,tabs:o,selectedIndex:s}},2:(e,n)=>({...e,tabs:e.tabs.filter((t=>t!==n.tab))}),3:(e,n)=>e.panels.includes(n.panel)?e:{...e,panels:(0,focus_management.z2)([...e.panels,n.panel],(t=>t.current))},4:(e,n)=>({...e,panels:e.panels.filter((t=>t!==n.panel))})},X=(0,react.createContext)(null);function M(e){let n=(0,react.useContext)(X);if(null===n){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,M),t}return n}X.displayName="TabsDataContext";let $=(0,react.createContext)(null);function q(e){let n=(0,react.useContext)($);if(null===n){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,q),t}return n}function fe(e,n){return(0,match.E)(n.type,ce,e,n)}$.displayName="TabsActionsContext";let be=react.Fragment;let Pe="div";let ye="button";let Ee="div";let Re="div",Le=render.AN.RenderStrategy|render.AN.Static;let Se=(0,render.yV)((function xe(e,n){var p,I;let t=(0,use_id.M)(),{id:o=`headlessui-tabs-tab-${t}`,...s}=e,{orientation:r,activation:i,selectedIndex:R,tabs:b,panels:c}=M("Tab"),u=q("Tab"),T=M("Tab"),l=(0,react.useRef)(null),d=(0,use_sync_refs.T)(l,n);(0,use_iso_morphic_effect.e)((()=>u.registerTab(l)),[u,l]);let y=stable_collection_d("tabs"),m=b.indexOf(l);-1===m&&(m=y);let x=m===R,E=(0,use_event.z)((a=>{var j;let f=a();if(f===focus_management.fE.Success&&"auto"===i){let W=null==(j=(0,owner.r)(l))?void 0:j.activeElement,z=T.tabs.findIndex((te=>te.current===W));-1!==z&&u.change(z)}return f})),S=(0,use_event.z)((a=>{let f=b.map((W=>W.current)).filter(Boolean);if(a.key===keyboard.R.Space||a.key===keyboard.R.Enter)return a.preventDefault(),a.stopPropagation(),void u.change(m);switch(a.key){case keyboard.R.Home:case keyboard.R.PageUp:return a.preventDefault(),a.stopPropagation(),E((()=>(0,focus_management.jA)(f,focus_management.TO.First)));case keyboard.R.End:case keyboard.R.PageDown:return a.preventDefault(),a.stopPropagation(),E((()=>(0,focus_management.jA)(f,focus_management.TO.Last)))}return E((()=>(0,match.E)(r,{vertical:()=>a.key===keyboard.R.ArrowUp?(0,focus_management.jA)(f,focus_management.TO.Previous|focus_management.TO.WrapAround):a.key===keyboard.R.ArrowDown?(0,focus_management.jA)(f,focus_management.TO.Next|focus_management.TO.WrapAround):focus_management.fE.Error,horizontal:()=>a.key===keyboard.R.ArrowLeft?(0,focus_management.jA)(f,focus_management.TO.Previous|focus_management.TO.WrapAround):a.key===keyboard.R.ArrowRight?(0,focus_management.jA)(f,focus_management.TO.Next|focus_management.TO.WrapAround):focus_management.fE.Error})))===focus_management.fE.Success?a.preventDefault():void 0})),A=(0,react.useRef)(!1),L=(0,use_event.z)((()=>{var a;A.current||(A.current=!0,null==(a=l.current)||a.focus(),u.change(m),(0,micro_task.Y)((()=>{A.current=!1})))})),C=(0,use_event.z)((a=>{a.preventDefault()})),N=(0,react.useMemo)((()=>({selected:x})),[x]),B={ref:d,onKeyDown:S,onMouseDown:C,onClick:L,id:o,role:"tab",type:(0,use_resolve_button_type.f)(e,l),"aria-controls":null==(I=null==(p=c[m])?void 0:p.current)?void 0:I.id,"aria-selected":x,tabIndex:x?0:-1};return(0,render.sY)({ourProps:B,theirProps:s,slot:N,defaultTag:ye,name:"Tabs.Tab"})})),Ie=(0,render.yV)((function me(e,n){let{defaultIndex:t=0,vertical:o=!1,manual:s=!1,onChange:r,selectedIndex:i=null,...R}=e;const b=o?"vertical":"horizontal",c=s?"manual":"auto";let u=null!==i,T=(0,use_sync_refs.T)(n),[l,d]=(0,react.useReducer)(fe,{selectedIndex:null!=i?i:t,tabs:[],panels:[]}),y=(0,react.useMemo)((()=>({selectedIndex:l.selectedIndex})),[l.selectedIndex]),m=(0,use_latest_value.E)(r||(()=>{})),x=(0,use_latest_value.E)(l.tabs),E=(0,react.useMemo)((()=>({orientation:b,activation:c,...l})),[b,c,l]),S=(0,use_event.z)((p=>(d({type:1,tab:p}),()=>d({type:2,tab:p})))),A=(0,use_event.z)((p=>(d({type:3,panel:p}),()=>d({type:4,panel:p})))),L=(0,use_event.z)((p=>{C.current!==p&&m.current(p),u||d({type:0,index:p})})),C=(0,use_latest_value.E)(u?e.selectedIndex:l.selectedIndex),N=(0,react.useMemo)((()=>({registerTab:S,registerPanel:A,change:L})),[]);(0,use_iso_morphic_effect.e)((()=>{d({type:0,index:null!=i?i:t})}),[i]),(0,use_iso_morphic_effect.e)((()=>{if(void 0===C.current||l.tabs.length<=0)return;let p=(0,focus_management.z2)(l.tabs,(a=>a.current));p.some(((a,f)=>l.tabs[f]!==a))&&L(p.indexOf(l.tabs[C.current]))}));let B={ref:T};return react.createElement(stable_collection_C,null,react.createElement($.Provider,{value:N},react.createElement(X.Provider,{value:E},E.tabs.length<=0&&react.createElement(p,{onFocus:()=>{var p,I;for(let a of x.current)if(0===(null==(p=a.current)?void 0:p.tabIndex))return null==(I=a.current)||I.focus(),!0;return!1}}),(0,render.sY)({ourProps:B,theirProps:R,slot:y,defaultTag:be,name:"Tabs"}))))})),Fe=(0,render.yV)((function ge(e,n){let{orientation:t,selectedIndex:o}=M("Tab.List"),s=(0,use_sync_refs.T)(n);return(0,render.sY)({ourProps:{ref:s,role:"tablist","aria-orientation":t},theirProps:e,slot:{selectedIndex:o},defaultTag:Pe,name:"Tabs.List"})})),he=(0,render.yV)((function Ae(e,n){let{selectedIndex:t}=M("Tab.Panels"),o=(0,use_sync_refs.T)(n),s=(0,react.useMemo)((()=>({selectedIndex:t})),[t]);return(0,render.sY)({ourProps:{ref:o},theirProps:e,slot:s,defaultTag:Ee,name:"Tabs.Panels"})})),Me=(0,render.yV)((function De(e,n){var E,S,A,L;let t=(0,use_id.M)(),{id:o=`headlessui-tabs-panel-${t}`,tabIndex:s=0,...r}=e,{selectedIndex:i,tabs:R,panels:b}=M("Tab.Panel"),c=q("Tab.Panel"),u=(0,react.useRef)(null),T=(0,use_sync_refs.T)(u,n);(0,use_iso_morphic_effect.e)((()=>c.registerPanel(u)),[c,u]);let l=stable_collection_d("panels"),d=b.indexOf(u);-1===d&&(d=l);let y=d===i,m=(0,react.useMemo)((()=>({selected:y})),[y]),x={ref:T,id:o,role:"tabpanel","aria-labelledby":null==(S=null==(E=R[d])?void 0:E.current)?void 0:S.id,tabIndex:y?s:-1};return y||null!=(A=r.unmount)&&!A||null!=(L=r.static)&&L?(0,render.sY)({ourProps:x,theirProps:r,slot:m,defaultTag:Re,features:Le,visible:y,name:"Tabs.Panel"}):react.createElement(internal_hidden._,{as:"span",...x})})),rt=Object.assign(Se,{Group:Ie,List:Fe,Panels:he,Panel:Me});var _TabbedLayoutTemplate,_TabbedLayoutTemplate2,_TabbedLayoutTemplate3,functions=__webpack_require__("./components/Melody/src/utils/functions.ts"),__jsx=react.createElement,TabbedLayout_TabbedLayout=function TabbedLayout(props){props.size;var vertical=props.vertical,categories=(0,react.useState)({Recent:[{id:1,title:"test 1",date:"5h ago",commentCount:5,shareCount:2},{id:2,title:"test 2",date:"2h ago",commentCount:3,shareCount:2}],Popular:[{id:1,title:"test 1",date:"Jan 7",commentCount:29,shareCount:16},{id:2,title:"test 2",date:"Mar 19",commentCount:24,shareCount:12}]})[0];return __jsx("div",{className:"melody-w-full melody-max-w-md melody-px-2 melody-py-16 sm:melody-px-0"},__jsx(rt.Group,{vertical},__jsx(rt.List,{className:"melody-flex melody-space-x-1 melody-rounded-xl melody-bg-blue-500/20 melody-p-1"},Object.keys(categories).map((function(category){return __jsx(rt,{key:category,className:function className(_ref){var selected=_ref.selected;return(0,functions.A)("melody-w-full melody-rounded-lg melody-py-2.5 melody-text-sm melody-font-medium melody-leading-5 melody-text-blue-700","melody-ring-white melody-ring-opacity-60 melody-ring-offset-2 melody-ring-offset-blue-400 focus:melody-outline-none focus:melody-ring-2",selected?"melody-bg-white melody-shadow":"melody-text-blue-100 hover:melody-bg-white/[0.12] hover:melody-text-white")}},category)}))),__jsx(rt.Panels,{className:"melody-mt-2"},Object.values(categories).map((function(posts,idx){return __jsx(rt.Panel,{key:idx,className:(0,functions.A)("melody-rounded-xl melody-bg-white melody-p-3","melody-ring-white melody-melody-ring-opacity-60 melody-melody-ring-offset-2 melody-melody-ring-offset-blue-400 focus:melody-melody-outline-none focus:melody-melody-ring-2")},__jsx("ul",null,posts.map((function(post){return __jsx("li",{key:post.id,className:"melody-relative melody-rounded-md melody-p-3 hover:melody-bg-gray-100"},__jsx("h3",{className:"melody-text-sm melody-font-medium melody-leading-5"},post.title),__jsx("ul",{className:"melody-mt-1 melody-flex melody-space-x-1 melody-text-xs melody-font-normal melody-leading-4 melody-text-gray-500"},__jsx("li",null,post.date),__jsx("li",null,"·"),__jsx("li",null,post.commentCount," comments"),__jsx("li",null,"·"),__jsx("li",null,post.shareCount," shares")),__jsx("a",{href:"#",className:(0,functions.A)("melody-absolute melody-inset-0 melody-rounded-md","melody-ring-blue-400 focus:melody-z-10 focus:melody-outline-none focus:melody-ring-2")}))}))))})))))};TabbedLayout_TabbedLayout.displayName="TabbedLayout",TabbedLayout_TabbedLayout.__docgenInfo={description:"",methods:[],displayName:"TabbedLayout",props:{size:{required:!0,tsType:{name:"string"},description:""},vertical:{required:!0,tsType:{name:"boolean"},description:""}}};try{TabbedLayout_TabbedLayout.displayName="TabbedLayout",TabbedLayout_TabbedLayout.__docgenInfo={description:"",displayName:"TabbedLayout",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"string"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Melody/src/components/Layouts/TabbedLayout.tsx#TabbedLayout"]={docgenInfo:TabbedLayout_TabbedLayout.__docgenInfo,name:"TabbedLayout",path:"components/Melody/src/components/Layouts/TabbedLayout.tsx#TabbedLayout"})}catch(__react_docgen_typescript_loader_error){}var TabbedLayout_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const TabbedLayout_stories={title:"Inputs/Melody Tabbed Layout",component:TabbedLayout_TabbedLayout,argTypes:{size:{control:{type:"select",options:["small","medium","large"]}}}};var Template=function Template(args){return TabbedLayout_stories_jsx(TabbedLayout_TabbedLayout,args)};Template.displayName="Template";var TabbedLayoutTemplate=Template.bind({});TabbedLayoutTemplate.args={vertical:!1,size:"medium"},TabbedLayoutTemplate.parameters=_objectSpread(_objectSpread({},TabbedLayoutTemplate.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_TabbedLayoutTemplate=TabbedLayoutTemplate.parameters)||void 0===_TabbedLayoutTemplate?void 0:_TabbedLayoutTemplate.docs),{},{source:_objectSpread({originalSource:"args => <TabbedLayout {...args} />"},null===(_TabbedLayoutTemplate2=TabbedLayoutTemplate.parameters)||void 0===_TabbedLayoutTemplate2||null===(_TabbedLayoutTemplate3=_TabbedLayoutTemplate2.docs)||void 0===_TabbedLayoutTemplate3?void 0:_TabbedLayoutTemplate3.source)})})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./components/Melody/src/components/Layouts/TabbedLayout.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);