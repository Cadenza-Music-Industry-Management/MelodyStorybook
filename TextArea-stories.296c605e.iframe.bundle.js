"use strict";(self.webpackChunkmelodystorybook=self.webpackChunkmelodystorybook||[]).push([[4337],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(obj,key,value){return(key=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.Z)(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_toPropertyKey});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:()=>_typeof})},"./components/Melody/src/components/Layouts/Label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label_Label});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Label=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./components/Melody/src/components/Layouts/Label.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Label.Z,options);Label.Z&&Label.Z.locals&&Label.Z.locals;var __jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Label_Label=function Label(props){var _props$size=props.size,size=void 0===_props$size?"medium":_props$size,label=props.label,htmlFor=props.htmlFor,_props$required=props.required,required=void 0!==_props$required&&_props$required,_props$bold=props.bold,bold=void 0!==_props$bold&&_props$bold,additionalStyles=props.additionalStyles,additionalClasses=props.additionalClasses;return __jsx("label",{htmlFor,className:"melody-text-label ".concat(bold&&"melody-font-bold"," ").concat(size," ").concat(additionalClasses),style:_objectSpread({},additionalStyles)},label,required&&__jsx("span",{className:"melody-text-red-600 melody-font-medium melody-ml-0.5"},"*"))};Label_Label.displayName="Label",Label_Label.__docgenInfo={description:"",methods:[],displayName:"Label"};try{Label_Label.displayName="Label",Label_Label.__docgenInfo={description:"",displayName:"Label",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xlarge"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},bold:{defaultValue:null,description:"",name:"bold",required:!1,type:{name:"boolean"}},additionalStyles:{defaultValue:null,description:"",name:"additionalStyles",required:!1,type:{name:"any"}},additionalClasses:{defaultValue:null,description:"",name:"additionalClasses",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Melody/src/components/Layouts/Label.tsx#Label"]={docgenInfo:Label_Label.__docgenInfo,name:"Label",path:"components/Melody/src/components/Layouts/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./components/Melody/src/components/Inputs/TextInput.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.melody-text-input {\n\n    display: flex;\n\n    width: 100%;\n\n    border-radius: 0.5rem;\n\n    border-width: 1px;\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(209 213 219 / var(--tw-border-opacity));\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n\n    font-size: 0.875rem;\n\n    line-height: 1.25rem;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(17 24 39 / var(--tw-text-opacity))\n}\n\n.melody-text-input:focus {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(59 130 246 / var(--tw-border-opacity));\n\n    --tw-ring-opacity: 1;\n\n    --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))\n}\n\n:is([data-mode="dark"] .melody-text-input) {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(75 85 99 / var(--tw-border-opacity));\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n:is([data-mode="dark"] .melody-text-input)::-moz-placeholder {\n\n    --tw-placeholder-opacity: 1;\n\n    color: rgb(156 163 175 / var(--tw-placeholder-opacity))\n}\n\n:is([data-mode="dark"] .melody-text-input)::placeholder {\n\n    --tw-placeholder-opacity: 1;\n\n    color: rgb(156 163 175 / var(--tw-placeholder-opacity))\n}\n\n:is([data-mode="dark"] .melody-text-input:focus) {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(59 130 246 / var(--tw-border-opacity));\n\n    --tw-ring-opacity: 1;\n\n    --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))\n}\n\n.melody-text-input.hasHeader {\n\n    border-top-right-radius: 0.5rem;\n\n    border-bottom-right-radius: 0.5rem;\n\n    border-top-left-radius: 0px;\n\n    border-bottom-left-radius: 0px\n}\n\n.melody-text-input.hasTrailer {\n\n    border-top-left-radius: 0.5rem;\n\n    border-bottom-left-radius: 0.5rem;\n\n    border-top-right-radius: 0px;\n\n    border-bottom-right-radius: 0px\n}\n\n.melody-text-input.hasHeaderTrailer {\n\n    border-radius: 0px\n}\n\n.melody-text-input.small {\n\n    padding: 0.625rem\n}\n\n.melody-text-input.medium {\n\n    padding: 0.75rem\n}\n\n.melody-text-input.large {\n\n    padding: 0.875rem\n}\n\n.melody-text-input:disabled {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(229 231 235 / var(--tw-bg-opacity))\n}',"",{version:3,sources:["webpack://./components/Melody/src/components/Inputs/TextInput.css"],names:[],mappings:"AACI;;IAAA,aAAmX;;IAAnX,WAAmX;;IAAnX,qBAAmX;;IAAnX,iBAAmX;;IAAnX,sBAAmX;;IAAnX,yDAAmX;;IAAnX,kBAAmX;;IAAnX,yDAAmX;;IAAnX,mBAAmX;;IAAnX,oBAAmX;;IAAnX,oBAAmX;;IAAnX;AAAmX;;AAAnX;;IAAA,sBAAmX;;IAAnX,wDAAmX;;IAAnX,oBAAmX;;IAAnX;AAAmX;;AAAnX;;IAAA,sBAAmX;;IAAnX,sDAAmX;;IAAnX,kBAAmX;;IAAnX,sDAAmX;;IAAnX,oBAAmX;;IAAnX;AAAmX;;AAAnX;;IAAA,2BAAmX;;IAAnX;AAAmX;;AAAnX;;IAAA,2BAAmX;;IAAnX;AAAmX;;AAAnX;;IAAA,sBAAmX;;IAAnX,wDAAmX;;IAAnX,oBAAmX;;IAAnX;AAAmX;;AAInX;;IAAA,+BAAgD;;IAAhD,kCAAgD;;IAAhD,2BAAgD;;IAAhD;AAAgD;;AAIhD;;IAAA,8BAAgD;;IAAhD,iCAAgD;;IAAhD,4BAAgD;;IAAhD;AAAgD;;AAIhD;;IAAA;AAA0B;;AAI1B;;IAAA;AAAmB;;AAInB;;IAAA;AAAiB;;AAIjB;;IAAA;AAAmB;;AAInB;;IAAA,kBAAyB;;IAAzB;AAAyB",sourcesContent:[".melody-text-input {\n    @apply melody-flex melody-w-full melody-text-sm melody-text-gray-900 melody-bg-gray-50 melody-rounded-lg melody-border melody-border-gray-300 focus:melody-ring-blue-500 focus:melody-border-blue-500 dark:melody-bg-gray-700 dark:melody-border-gray-600 dark:melody-placeholder-gray-400 dark:melody-text-white dark:focus:melody-ring-blue-500 dark:focus:melody-border-blue-500;\n}\n\n.melody-text-input.hasHeader {\n    @apply melody-rounded-r-lg melody-rounded-l-none;\n}\n\n.melody-text-input.hasTrailer {\n    @apply melody-rounded-l-lg melody-rounded-r-none;\n}\n\n.melody-text-input.hasHeaderTrailer {\n    @apply melody-rounded-none;\n}\n\n.melody-text-input.small {\n    @apply melody-p-2.5;\n}\n\n.melody-text-input.medium {\n    @apply melody-p-3;\n}\n\n.melody-text-input.large {\n    @apply melody-p-3.5;\n}\n\n.melody-text-input:disabled {\n    @apply melody-bg-gray-200;\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./components/Melody/src/components/Layouts/Label.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.melody-text-label {\n\n    display: block;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(17 24 39 / var(--tw-text-opacity))\n}\n\n:is([data-mode="dark"] .melody-text-label) {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.melody-text-label.small {\n\n    font-size: 0.875rem;\n\n    line-height: 1.25rem\n}\n\n.melody-text-label.medium {\n\n    font-size: 1rem;\n\n    line-height: 1.5rem\n}\n\n.melody-text-label.large {\n\n    font-size: 1.125rem;\n\n    line-height: 1.75rem\n}\n\n.melody-text-label.xlarge {\n\n    font-size: 25px\n}',"",{version:3,sources:["webpack://./components/Melody/src/components/Layouts/Label.css"],names:[],mappings:"AACI;;IAAA,cAA+D;;IAA/D,oBAA+D;;IAA/D;AAA+D;;AAA/D;;IAAA,oBAA+D;;IAA/D;AAA+D;;AAI/D;;IAAA,mBAAqB;;IAArB;AAAqB;;AAIrB;;IAAA,eAAuB;;IAAvB;AAAuB;;AAIvB;;IAAA,mBAAqB;;IAArB;AAAqB;;AAIrB;;IAAA;AAAyB",sourcesContent:[".melody-text-label {\n    @apply melody-block melody-text-gray-900 dark:melody-text-white;\n}\n\n.melody-text-label.small {\n    @apply melody-text-sm;\n}\n\n.melody-text-label.medium {\n    @apply melody-text-base;\n}\n\n.melody-text-label.large {\n    @apply melody-text-lg;\n}\n\n.melody-text-label.xlarge {\n    @apply melody-text-[25px];\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./components/Melody/src/components/Inputs/TextInput.css":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_postcss_loader_dist_cjs_js_TextInput_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./components/Melody/src/components/Inputs/TextInput.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_postcss_loader_dist_cjs_js_TextInput_css__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_postcss_loader_dist_cjs_js_TextInput_css__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_postcss_loader_dist_cjs_js_TextInput_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_postcss_loader_dist_cjs_js_TextInput_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals},"./stories/TextArea.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TextAreaTemplate:()=>TextAreaTemplate,default:()=>TextArea_stories});var react=__webpack_require__("./node_modules/react/index.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),Label=(__webpack_require__("./components/Melody/src/components/Inputs/TextInput.css"),__webpack_require__("./components/Melody/src/components/Layouts/Label.tsx")),__jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var TextArea=function TextArea(props){var value=props.value,label=props.label,placeholder=props.placeholder,_props$size=props.size,size=void 0===_props$size?"medium":_props$size,_props$disabled=props.disabled,disabled=void 0!==_props$disabled&&_props$disabled,_onChange=props.onChange;return __jsx("div",null,label&&__jsx(Label._,_objectSpread(_objectSpread({},label),{},{htmlFor:"textArea"})),__jsx("textarea",{placeholder,value,rows:4,disabled,onChange:function onChange(event){return _onChange(event.target.value)},className:"melody-text-input ".concat(size)}))};TextArea.displayName="TextArea",TextArea.__docgenInfo={description:"",methods:[],displayName:"TextArea"};try{TextArea.displayName="TextArea",TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"any"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"password"'},{value:'"email"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"LabelProps"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},headerComponent:{defaultValue:null,description:"",name:"headerComponent",required:!1,type:{name:"ReactNode"}},trailerComponent:{defaultValue:null,description:"",name:"trailerComponent",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Melody/src/components/Inputs/TextArea.tsx#TextArea"]={docgenInfo:TextArea.__docgenInfo,name:"TextArea",path:"components/Melody/src/components/Inputs/TextArea.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}var TextArea_stories_jsx=react.createElement;const TextArea_stories={title:"Inputs/Melody Text Area",component:TextArea,argTypes:{variant:{control:{type:"select",options:["primary","secondary"]}},size:{control:{type:"select",options:["small","medium","large"]}}}};var Template=function Template(args){return TextArea_stories_jsx(TextArea,args)};Template.displayName="Template";var TextAreaTemplate=Template.bind({});TextAreaTemplate.args={variant:"primary",size:"medium",label:{size:"medium",label:"Text Area",required:!0,bold:!0},value:"test"},TextAreaTemplate.parameters={...TextAreaTemplate.parameters,docs:{...TextAreaTemplate.parameters?.docs,source:{originalSource:"function Template(args) {\n  return __jsx(TextArea, args);\n}",...TextAreaTemplate.parameters?.docs?.source}}}}}]);