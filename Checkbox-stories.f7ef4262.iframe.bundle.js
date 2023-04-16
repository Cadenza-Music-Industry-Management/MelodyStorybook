"use strict";(self.webpackChunkmelodystorybook=self.webpackChunkmelodystorybook||[]).push([[6878],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(obj,key,value){return(key=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.Z)(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_toPropertyKey});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:()=>_typeof})},"./components/Melody/src/components/Layouts/Label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label_Label});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Label=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./components/Melody/src/components/Layouts/Label.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Label.Z,options);Label.Z&&Label.Z.locals&&Label.Z.locals;var __jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Label_Label=function Label(props){var _props$size=props.size,size=void 0===_props$size?"medium":_props$size,label=props.label,htmlFor=props.htmlFor,_props$required=props.required,required=void 0!==_props$required&&_props$required,_props$bold=props.bold,bold=void 0!==_props$bold&&_props$bold,additionalStyles=props.additionalStyles,additionalClasses=props.additionalClasses;return __jsx("label",{htmlFor,className:"melody-text-label ".concat(bold&&"melody-font-bold"," ").concat(size," ").concat(additionalClasses),style:_objectSpread({},additionalStyles)},label,required&&__jsx("span",{className:"melody-text-red-600 melody-font-medium melody-ml-0.5"},"*"))};Label_Label.displayName="Label",Label_Label.__docgenInfo={description:"",methods:[],displayName:"Label"};try{Label_Label.displayName="Label",Label_Label.__docgenInfo={description:"",displayName:"Label",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xlarge"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},bold:{defaultValue:null,description:"",name:"bold",required:!1,type:{name:"boolean"}},additionalStyles:{defaultValue:null,description:"",name:"additionalStyles",required:!1,type:{name:"any"}},additionalClasses:{defaultValue:null,description:"",name:"additionalClasses",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Melody/src/components/Layouts/Label.tsx#Label"]={docgenInfo:Label_Label.__docgenInfo,name:"Label",path:"components/Melody/src/components/Layouts/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./stories/Checkbox.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CheckboxTemplate:()=>CheckboxTemplate,default:()=>Checkbox_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Checkbox=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./components/Melody/src/components/Inputs/Checkbox.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Checkbox.Z,options);Checkbox.Z&&Checkbox.Z.locals&&Checkbox.Z.locals;var _CheckboxTemplate$par,_CheckboxTemplate$par2,_CheckboxTemplate$par3,Label=__webpack_require__("./components/Melody/src/components/Layouts/Label.tsx"),__jsx=react.createElement,Checkbox_Checkbox=function Checkbox(props){var _props$variant=props.variant,variant=void 0===_props$variant?"primary":_props$variant,_props$size=props.size,size=void 0===_props$size?"medium":_props$size,label=props.label,subLabel=props.subLabel,handleChange=props.handleChange,value=props.value,disabled=props.disabled;return __jsx("div",{className:"melody-checkbox-container"},__jsx("input",{"aria-describedby":"checkbox-sub-label",type:"checkbox",disabled,checked:value,onClick:function onClick(){return handleChange(!value)},className:"melody-checkbox ".concat(variant," ").concat(size)}),(label||subLabel)&&__jsx("div",{className:"melody-ml-2 melody-text-sm"},label&&__jsx(Label._,{label}),subLabel&&__jsx("p",{className:"melody-text-xs melody-font-normal melody-text-gray-500"},subLabel)))};Checkbox_Checkbox.displayName="Checkbox",Checkbox_Checkbox.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{handleChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{name:"checked",type:{name:"boolean"}}],return:{name:"void"}}},description:""},value:{required:!0,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},size:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},subLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};try{Checkbox_Checkbox.displayName="Checkbox",Checkbox_Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{handleChange:{defaultValue:null,description:"",name:"handleChange",required:!0,type:{name:"(checked: boolean) => void"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Melody/src/components/Inputs/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox_Checkbox.__docgenInfo,name:"Checkbox",path:"components/Melody/src/components/Inputs/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}var Checkbox_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Checkbox_stories={title:"Inputs/Melody Checkbox",component:Checkbox_Checkbox,argTypes:{backgroundColor:{control:"color"},variant:{control:{type:"select",options:["primary","secondary"]}},size:{control:{type:"select",options:["small","medium","large"]}}}};var Template=function Template(args){return Checkbox_stories_jsx(Checkbox_Checkbox,args)};Template.displayName="Template";var CheckboxTemplate=Template.bind({});CheckboxTemplate.args={variant:"primary",size:"medium",label:"Top label",subLabel:"This is the sub label"},CheckboxTemplate.parameters=_objectSpread(_objectSpread({},CheckboxTemplate.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_CheckboxTemplate$par=CheckboxTemplate.parameters)||void 0===_CheckboxTemplate$par?void 0:_CheckboxTemplate$par.docs),{},{source:_objectSpread({originalSource:"args => <Checkbox {...args} />"},null===(_CheckboxTemplate$par2=CheckboxTemplate.parameters)||void 0===_CheckboxTemplate$par2||null===(_CheckboxTemplate$par3=_CheckboxTemplate$par2.docs)||void 0===_CheckboxTemplate$par3?void 0:_CheckboxTemplate$par3.source)})})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./components/Melody/src/components/Inputs/Checkbox.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".melody-checkbox-container {\n\n    display: flex;\n\n    justify-content: center\n}\n\n.melody-checkbox {\n\n    height: 1.25rem;\n\n    width: 1.25rem;\n\n    border-radius: 0.25rem;\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(209 213 219 / var(--tw-border-opacity));\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgb(12 25 44 / var(--tw-text-opacity))\n}\n\n.melody-checkbox:focus {\n\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)\n}\n\n.melody-checkbox.primary:focus {\n\n    --tw-ring-opacity: 1;\n\n    --tw-ring-color: rgb(27 59 107 / var(--tw-ring-opacity))\n}\n\n.melody-checkbox.secondary:focus {\n\n    --tw-ring-opacity: 1;\n\n    --tw-ring-color: rgb(219 171 103 / var(--tw-ring-opacity))\n}\n\n/*Note: Need to use accent color to change bg of checkbox*/\n.melody-checkbox.primary:checked {\n\n    accent-color: #0C192C\n}\n\n.melody-checkbox.secondary:checked {\n\n    accent-color: #9F8560\n}\n\n.melody-checkbox.small {\n\n    height: 1rem;\n\n    width: 1rem\n}\n\n.melody-checkbox.medium {\n\n    height: 1.25rem;\n\n    width: 1.25rem\n}\n\n.melody-checkbox.large {\n\n    height: 1.5rem;\n\n    width: 1.5rem\n}","",{version:3,sources:["webpack://./components/Melody/src/components/Inputs/Checkbox.css"],names:[],mappings:"AACI;;IAAA,aAAwC;;IAAxC;AAAwC;;AAIxC;;IAAA,eAAiI;;IAAjI,cAAiI;;IAAjI,sBAAiI;;IAAjI,sBAAiI;;IAAjI,yDAAiI;;IAAjI,kBAAiI;;IAAjI,yDAAiI;;IAAjI,oBAAiI;;IAAjI;AAAiI;;AAAjI;;IAAA,2GAAiI;;IAAjI,yGAAiI;;IAAjI;AAAiI;;AAIjI;;IAAA,oBAAoC;;IAApC;AAAoC;;AAIpC;;IAAA,oBAAsC;;IAAtC;AAAsC;;AAG1C,0DAA0D;AAEtD;;IAAA;AAAgC;;AAIhC;;IAAA;AAAkC;;AAIlC;;IAAA,YAA4B;;IAA5B;AAA4B;;AAI5B;;IAAA,eAA4B;;IAA5B;AAA4B;;AAI5B;;IAAA,cAA4B;;IAA5B;AAA4B",sourcesContent:[".melody-checkbox-container {\n    @apply melody-flex melody-justify-center;\n}\n\n.melody-checkbox {\n    @apply melody-w-5 melody-h-5 melody-bg-gray-100 melody-text-primary-100 melody-border-gray-300 melody-rounded focus:melody-ring-2;\n}\n\n.melody-checkbox.primary {\n    @apply focus:melody-ring-primary-200;\n}\n\n.melody-checkbox.secondary {\n    @apply focus:melody-ring-secondary-200;\n}\n\n/*Note: Need to use accent color to change bg of checkbox*/\n.melody-checkbox.primary:checked {\n    @apply melody-accent-primary-100;\n}\n\n.melody-checkbox.secondary:checked {\n    @apply melody-accent-secondary-100;\n}\n\n.melody-checkbox.small {\n    @apply melody-w-4 melody-h-4;\n}\n\n.melody-checkbox.medium {\n    @apply melody-w-5 melody-h-5;\n}\n\n.melody-checkbox.large {\n    @apply melody-w-6 melody-h-6;\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./components/Melody/src/components/Layouts/Label.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.melody-text-label {\n\n    display: block;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(17 24 39 / var(--tw-text-opacity))\n}\n\n:is([data-mode="dark"] .melody-text-label) {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.melody-text-label.small {\n\n    font-size: 0.875rem;\n\n    line-height: 1.25rem\n}\n\n.melody-text-label.medium {\n\n    font-size: 1rem;\n\n    line-height: 1.5rem\n}\n\n.melody-text-label.large {\n\n    font-size: 1.125rem;\n\n    line-height: 1.75rem\n}\n\n.melody-text-label.xlarge {\n\n    font-size: 25px\n}',"",{version:3,sources:["webpack://./components/Melody/src/components/Layouts/Label.css"],names:[],mappings:"AACI;;IAAA,cAA+D;;IAA/D,oBAA+D;;IAA/D;AAA+D;;AAA/D;;IAAA,oBAA+D;;IAA/D;AAA+D;;AAI/D;;IAAA,mBAAqB;;IAArB;AAAqB;;AAIrB;;IAAA,eAAuB;;IAAvB;AAAuB;;AAIvB;;IAAA,mBAAqB;;IAArB;AAAqB;;AAIrB;;IAAA;AAAyB",sourcesContent:[".melody-text-label {\n    @apply melody-block melody-text-gray-900 dark:melody-text-white;\n}\n\n.melody-text-label.small {\n    @apply melody-text-sm;\n}\n\n.melody-text-label.medium {\n    @apply melody-text-base;\n}\n\n.melody-text-label.large {\n    @apply melody-text-lg;\n}\n\n.melody-text-label.xlarge {\n    @apply melody-text-[25px];\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);