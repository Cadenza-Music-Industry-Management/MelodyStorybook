"use strict";(self.webpackChunkmelodystorybook=self.webpackChunkmelodystorybook||[]).push([[2581],{"./components/Melody/src/components/Inputs/ButtonMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>ButtonMenu_ButtonMenu});var react=__webpack_require__("./node_modules/react/index.js"),menu=__webpack_require__("./node_modules/@headlessui/react/dist/components/menu/menu.js"),transition=__webpack_require__("./node_modules/@headlessui/react/dist/components/transitions/transition.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ButtonMenu=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./components/Melody/src/components/Inputs/ButtonMenu.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ButtonMenu.Z,options);ButtonMenu.Z&&ButtonMenu.Z.locals&&ButtonMenu.Z.locals;var functions=__webpack_require__("./components/Melody/src/utils/functions.ts"),__jsx=react.createElement,ButtonMenu_ButtonMenu=function ButtonMenu(props){props.size;var buttonContents=props.buttonContents,dropdownHeaderItem=props.dropdownHeaderItem,items=props.items;return __jsx(menu.v,{as:"div",className:"melody-relative melody-ml-3"},__jsx("div",null,__jsx(menu.v.Button,{className:"melody-flex melody-rounded-full melody-text-sm focus:melody-outline-none focus:melody-ring-2 focus:melody-ring-white focus:melody-ring-offset-2 focus:melody-ring-offset-gray-800"},buttonContents)),__jsx(transition.u,{as:react.Fragment,enter:"melody-transition melody-ease-out melody-duration-100",enterFrom:"melody-transform melody-opacity-0 melody-scale-95",enterTo:"melody-transform opacity-100 melody-scale-100",leave:"melody-transition melody-ease-in melody-duration-75",leaveFrom:"melody-transform melody-opacity-100 melody-scale-100",leaveTo:"melody-transform melody-opacity-0 melody-scale-95"},__jsx(menu.v.Items,{className:"melody-absolute melody-right-0 melody-z-10 melody-mt-2 melody-w-48 melody-origin-top-right melody-rounded-lg melody-bg-white melody-py-1 melody-shadow-lg melody-ring-1 melody-ring-black-0 melody-ring-opacity-5 focus:melody-outline-none"},dropdownHeaderItem,items.map((function(item){return __jsx(menu.v.Item,{key:item.name},(function(_ref){var active=_ref.active;return __jsx(react.Fragment,null,item.onClick?__jsx("span",{onClick:item.onClick,className:(0,functions.A)(active?"melody-bg-gray-100 hover:melody-bg-gray-200":"","melody-cursor-pointer melody-block melody-px-4 melody-py-2 melody-text-sm melody-text-gray-700 hover:melody-bg-gray-200")},item.name,item.trailerComponent):__jsx("a",{href:item.href,className:(0,functions.A)(active?"melody-bg-gray-100 hover:melody-bg-gray-200":"","melody-block melody-px-4 melody-py-2 melody-text-sm melody-text-gray-700 hover:melody-bg-gray-200")},item.name,item.trailerComponent))}))})))))};ButtonMenu_ButtonMenu.displayName="ButtonMenu",ButtonMenu_ButtonMenu.__docgenInfo={description:"",methods:[],displayName:"ButtonMenu"};try{ButtonMenu_ButtonMenu.displayName="ButtonMenu",ButtonMenu_ButtonMenu.__docgenInfo={description:"",displayName:"ButtonMenu",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},buttonContents:{defaultValue:null,description:"",name:"buttonContents",required:!0,type:{name:"ReactNode"}},dropdownHeaderItem:{defaultValue:null,description:"",name:"dropdownHeaderItem",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"NavBarItemProps[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Melody/src/components/Inputs/ButtonMenu.tsx#ButtonMenu"]={docgenInfo:ButtonMenu_ButtonMenu.__docgenInfo,name:"ButtonMenu",path:"components/Melody/src/components/Inputs/ButtonMenu.tsx#ButtonMenu"})}catch(__react_docgen_typescript_loader_error){}},"./components/Melody/src/components/Layouts/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>Avatar_Avatar});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Avatar=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./components/Melody/src/components/Layouts/Avatar.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Avatar.Z,options);Avatar.Z&&Avatar.Z.locals&&Avatar.Z.locals;var next_image=__webpack_require__("./node_modules/next/image.js"),image_default=__webpack_require__.n(next_image),Icon=__webpack_require__("./components/Melody/src/components/Layouts/Icon.tsx"),__jsx=react.createElement,Avatar_Avatar=function Avatar(props){var _props$size=props.size,size=void 0===_props$size?"medium":_props$size,image=props.image,_props$rounded=props.rounded,rounded=void 0===_props$rounded||_props$rounded,_props$ring=props.ring,ring=void 0===_props$ring||_props$ring;return __jsx("div",{className:"melody-avatar-container ".concat(size)},image?__jsx(image_default(),{className:"melody-avatar ".concat(rounded&&"melody-rounded-full"," ").concat(ring&&"ring"),src:image,fill:!0,alt:"Bordered avatar"}):__jsx("div",{className:"melody-avatar-preview ".concat(rounded&&"melody-rounded-full"," ").concat(ring&&"ring")},__jsx(Icon.J,{icon:"melody-org"})))};Avatar_Avatar.displayName="Avatar",Avatar_Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{required:!1,tsType:{name:"string"},description:""},image:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},rounded:{required:!1,tsType:{name:"boolean"},description:""},ring:{required:!1,tsType:{name:"boolean"},description:""}}};try{Avatar_Avatar.displayName="Avatar",Avatar_Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string | undefined"}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}},ring:{defaultValue:null,description:"",name:"ring",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Melody/src/components/Layouts/Avatar.tsx#Avatar"]={docgenInfo:Avatar_Avatar.__docgenInfo,name:"Avatar",path:"components/Melody/src/components/Layouts/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./components/Melody/src/components/Layouts/Image.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Image_Image});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Image=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./components/Melody/src/components/Layouts/Image.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Image.Z,options);Image.Z&&Image.Z.locals&&Image.Z.locals;var next_image=__webpack_require__("./node_modules/next/image.js"),image_default=__webpack_require__.n(next_image),__jsx=react.createElement,Image_Image=function Image(props){var src=props.src,alt=props.alt,additionalStyles=props.additionalStyles,additionalClasses=props.additionalClasses,height=props.height,width=props.width;return __jsx(image_default(),{className:additionalClasses,style:additionalStyles,src,width,height,"aria-label":"Icon",alt:null!=alt?alt:""})};Image_Image.displayName="Image",Image_Image.__docgenInfo={description:"",methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"any"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},additionalStyles:{required:!1,tsType:{name:"any"},description:""},additionalClasses:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"any"},description:""},width:{required:!1,tsType:{name:"any"},description:""}}};try{Image_Image.displayName="Image",Image_Image.__docgenInfo={description:"",displayName:"Image",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"any"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},additionalStyles:{defaultValue:null,description:"",name:"additionalStyles",required:!1,type:{name:"any"}},additionalClasses:{defaultValue:null,description:"",name:"additionalClasses",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"any"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Melody/src/components/Layouts/Image.tsx#Image"]={docgenInfo:Image_Image.__docgenInfo,name:"Image",path:"components/Melody/src/components/Layouts/Image.tsx#Image"})}catch(__react_docgen_typescript_loader_error){}},"./components/Melody/src/components/Layouts/Label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label_Label});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Label=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./components/Melody/src/components/Layouts/Label.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Label.Z,options);Label.Z&&Label.Z.locals&&Label.Z.locals;var __jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Label_Label=function Label(props){var _props$size=props.size,size=void 0===_props$size?"medium":_props$size,label=props.label,htmlFor=props.htmlFor,_props$required=props.required,required=void 0!==_props$required&&_props$required,_props$bold=props.bold,bold=void 0!==_props$bold&&_props$bold,additionalStyles=props.additionalStyles,additionalClasses=props.additionalClasses;return __jsx("label",{htmlFor,className:"melody-text-label ".concat(bold&&"melody-font-bold"," ").concat(size," ").concat(additionalClasses),style:_objectSpread({},additionalStyles)},label,required&&__jsx("span",{className:"melody-text-red-600 melody-font-medium melody-ml-0.5"},"*"))};Label_Label.displayName="Label",Label_Label.__docgenInfo={description:"",methods:[],displayName:"Label"};try{Label_Label.displayName="Label",Label_Label.__docgenInfo={description:"",displayName:"Label",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xlarge"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},bold:{defaultValue:null,description:"",name:"bold",required:!1,type:{name:"boolean"}},additionalStyles:{defaultValue:null,description:"",name:"additionalStyles",required:!1,type:{name:"any"}},additionalClasses:{defaultValue:null,description:"",name:"additionalClasses",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Melody/src/components/Layouts/Label.tsx#Label"]={docgenInfo:Label_Label.__docgenInfo,name:"Label",path:"components/Melody/src/components/Layouts/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./components/Melody/src/utils/functions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function formatBytes(bytes){var decimals=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,k=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1024,d=Math.floor(Math.log(bytes)/Math.log(k));return 0===bytes?"0 Bytes":parseFloat((bytes/Math.pow(k,d)).toFixed(Math.max(0,decimals)))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][d]}function classNames(){for(var _len=arguments.length,classes=new Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.filter(Boolean).join(" ")}__webpack_require__.d(__webpack_exports__,{A:()=>classNames,t:()=>formatBytes})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./components/Melody/src/components/Inputs/ButtonMenu.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./components/Melody/src/components/Layouts/Avatar.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.melody-avatar-container {\n\n    display: flex;\n\n    align-items: center\n}\n\n.melody-avatar-container.small {\n\n    height: 2rem;\n\n    width: 2rem\n}\n\n.melody-avatar-container.medium {\n\n    height: 3rem;\n\n    width: 3rem\n}\n\n.melody-avatar {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n\n    -o-object-fit: contain;\n\n       object-fit: contain;\n\n    padding: 0.25rem\n}\n\n:is([data-mode="dark"] .melody-avatar) {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(75 85 99 / var(--tw-bg-opacity))\n}\n\n.melody-avatar.ring, .melody-avatar-preview.ring {\n\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n\n    --tw-ring-opacity: 1;\n\n    --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity))\n}\n\n:is([data-mode="dark"] .melody-avatar.ring),:is([data-mode="dark"]  .melody-avatar-preview.ring) {\n\n    --tw-ring-opacity: 1;\n\n    --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity))\n}\n\n.melody-avatar-preview {\n\n    display: flex;\n\n    height: 100%;\n\n    width: 100%;\n\n    align-items: center;\n\n    justify-content: center;\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(243 244 246 / var(--tw-bg-opacity))\n}\n\n:is([data-mode="dark"] .melody-avatar-preview) {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(75 85 99 / var(--tw-bg-opacity))\n}',"",{version:3,sources:["webpack://./components/Melody/src/components/Layouts/Avatar.css"],names:[],mappings:"AACI;;IAAA,aAAsC;;IAAtC;AAAsC;;AAItC;;IAAA,YAA4B;;IAA5B;AAA4B;;AAI5B;;IAIA,YAA8B;;IAA9B;AAJ8B;;AAQ9B;;IAAA,kBAAkF;;IAAlF,yDAAkF;;IAAlF,sBAAkF;;OAAlF,mBAAkF;;IAAlF;AAAkF;;AAAlF;;IAAA,kBAAkF;;IAAlF;AAAkF;;AAIlF;;IAAA,2GAAmE;;IAAnE,yGAAmE;;IAAnE,4FAAmE;;IAAnE,oBAAmE;;IAAnE;AAAmE;;AAAnE;;IAAA,oBAAmE;;IAAnE;AAAmE;;AAInE;;IAAA,aAAmI;;IAAnI,YAAmI;;IAAnI,WAAmI;;IAAnI,mBAAmI;;IAAnI,uBAAmI;;IAAnI,kBAAmI;;IAAnI;AAAmI;;AAAnI;;IAAA,kBAAmI;;IAAnI;AAAmI",sourcesContent:[".melody-avatar-container {\n    @apply melody-flex melody-items-center;\n}\n\n.melody-avatar-container.small {\n    @apply melody-w-8 melody-h-8;\n}\n\n.melody-avatar-container.medium {\n    @apply melody-w-10 melody-h-10;\n}\n\n.melody-avatar-container.medium {\n    @apply melody-w-12 melody-h-12;\n}\n\n.melody-avatar {\n    @apply melody-p-1 melody-object-contain melody-bg-gray-100 dark:melody-bg-gray-600;\n}\n\n.melody-avatar.ring, .melody-avatar-preview.ring {\n    @apply melody-ring-2 melody-ring-gray-300 dark:melody-ring-gray-500;\n}\n\n.melody-avatar-preview {\n    @apply melody-flex melody-justify-center melody-bg-gray-100 dark:melody-bg-gray-600 melody-w-full melody-h-full melody-items-center;\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./components/Melody/src/components/Layouts/Image.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./components/Melody/src/components/Layouts/Label.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.melody-text-label {\n\n    display: block;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(17 24 39 / var(--tw-text-opacity))\n}\n\n:is([data-mode="dark"] .melody-text-label) {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.melody-text-label.small {\n\n    font-size: 0.875rem;\n\n    line-height: 1.25rem\n}\n\n.melody-text-label.medium {\n\n    font-size: 1rem;\n\n    line-height: 1.5rem\n}\n\n.melody-text-label.large {\n\n    font-size: 1.125rem;\n\n    line-height: 1.75rem\n}\n\n.melody-text-label.xlarge {\n\n    font-size: 25px\n}',"",{version:3,sources:["webpack://./components/Melody/src/components/Layouts/Label.css"],names:[],mappings:"AACI;;IAAA,cAA+D;;IAA/D,oBAA+D;;IAA/D;AAA+D;;AAA/D;;IAAA,oBAA+D;;IAA/D;AAA+D;;AAI/D;;IAAA,mBAAqB;;IAArB;AAAqB;;AAIrB;;IAAA,eAAuB;;IAAvB;AAAuB;;AAIvB;;IAAA,mBAAqB;;IAArB;AAAqB;;AAIrB;;IAAA;AAAyB",sourcesContent:[".melody-text-label {\n    @apply melody-block melody-text-gray-900 dark:melody-text-white;\n}\n\n.melody-text-label.small {\n    @apply melody-text-sm;\n}\n\n.melody-text-label.medium {\n    @apply melody-text-base;\n}\n\n.melody-text-label.large {\n    @apply melody-text-lg;\n}\n\n.melody-text-label.xlarge {\n    @apply melody-text-[25px];\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./components/Melody/src/components/Sections/NavigationBar.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".wrapper {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nsvg {\n  display: inline-block;\n  vertical-align: top;\n}\n\nh1 {\n  font-weight: 900;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\nbutton + button {\n  margin-left: 10px;\n}\n\n.welcome {\n  color: #333;\n  font-size: 14px;\n  margin-right: 10px;\n}\n","",{version:3,sources:["webpack://./components/Melody/src/components/Sections/NavigationBar.css"],names:[],mappings:"AAAA;EACE,0EAA0E;EAC1E,2CAA2C;EAC3C,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB",sourcesContent:[".wrapper {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nsvg {\n  display: inline-block;\n  vertical-align: top;\n}\n\nh1 {\n  font-weight: 900;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\nbutton + button {\n  margin-left: 10px;\n}\n\n.welcome {\n  color: #333;\n  font-size: 14px;\n  margin-right: 10px;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./stories/NavigationBar.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoggedIn:()=>LoggedIn,default:()=>NavigationBar_stories});var react=__webpack_require__("./node_modules/react/index.js"),disclosure=__webpack_require__("./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),NavigationBar=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./components/Melody/src/components/Sections/NavigationBar.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(NavigationBar.Z,options);NavigationBar.Z&&NavigationBar.Z.locals&&NavigationBar.Z.locals;const black_logo_mim={src:"static/media/black_logo_mim.0ce84550.png",height:1400,width:4e3,blurDataURL:"static/media/black_logo_mim.0ce84550.png"};var Icon=__webpack_require__("./components/Melody/src/components/Layouts/Icon.tsx"),Label=__webpack_require__("./components/Melody/src/components/Layouts/Label.tsx"),Avatar=__webpack_require__("./components/Melody/src/components/Layouts/Avatar.tsx"),Image=__webpack_require__("./components/Melody/src/components/Layouts/Image.tsx"),functions=__webpack_require__("./components/Melody/src/utils/functions.ts"),next_navigation=__webpack_require__("./node_modules/next/navigation.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),ButtonMenu=__webpack_require__("./components/Melody/src/components/Inputs/ButtonMenu.tsx"),__jsx=react.createElement,NavigationBar_NavigationBar=function NavigationBar(props){var navigation=props.navigation,userNavigation=props.userNavigation,user=props.user,pathname=(0,next_navigation.usePathname)();function checkURL(url){if(pathname)return"/"===url?url===pathname:pathname.includes(url)}return __jsx(disclosure.p,{as:"nav",className:"melody-bg-gray-50 melody-border-b melody-border-primary-100 melody-p-1 melody-font-sans"},(function(_ref){var open=_ref.open;return __jsx(react.Fragment,null,__jsx("div",{className:"melody-mx-auto melody-px-2 sm:melody-px-4 lg:melody-px-8"},__jsx("div",{className:"melody-relative melody-flex melody-h-16 melody-items-center melody-justify-between"},__jsx("div",{className:"melody-absolute melody-inset-y-0 melody-left-0 melody-flex melody-items-center sm:melody-hidden"},__jsx(disclosure.p.Button,{className:"melody-inline-flex melody-items-center melody-justify-center melody-rounded-lg melody-p-2 melody-text-gray-400 hover:melody-bg-gray-700 hover:melody-text-white focus:melody-outline-none focus:melody-ring-2 focus:melody-ring-inset focus:melody-ring-white"},__jsx("span",{className:"melody-sr-only"},"Open main menu"),__jsx(Icon.J,{icon:open?"solidX":"solidBars"}))),__jsx("div",{className:"melody-flex melody-flex-1 melody-items-center melody-justify-center sm:melody-items-stretch sm:melody-justify-start"},__jsx("div",{className:"melody-flex melody-flex-shrink-0 melody-items-center"},__jsx(link_default(),{href:"/"},__jsx(Image.E,{additionalClasses:"melody-block melody-h-14 melody-w-auto lg:melody-melody-hidden",src:black_logo_mim,alt:"Cadenza MIM"})))),__jsx("div",{className:"melody-absolute melody-inset-y-0 melody-right-0 melody-flex melody-items-center melody-pr-2 sm:melody-static sm:melody-inset-auto sm:melody-ml-6 sm:melody-pr-0"},__jsx("div",{className:"melody-hidden sm:melody-mr-6 sm:melody-block md:melody-flex md:melody-items-center"},__jsx("div",{className:"melody-flex melody-space-x-4"},navigation.map((function(item){var _item$href,_item$href2;return __jsx("a",{key:item.name,href:item.href,className:(0,functions.A)(checkURL(null!==(_item$href=item.href)&&void 0!==_item$href?_item$href:"no-href")?"melody-bg-primary-100 melody-text-white":"melody-text-gray-600 hover:melody-bg-gray-200","melody-px-3 melody-py-2 melody-rounded-lg melody-text-sm melody-font-medium"),"aria-current":checkURL(null!==(_item$href2=item.href)&&void 0!==_item$href2?_item$href2:"no-href")?"page":void 0},item.name)})))),user&&__jsx(ButtonMenu.x,{buttonContents:__jsx(react.Fragment,null,__jsx("span",{className:"melody-sr-only"},"Open user menu"),__jsx(Avatar.q,{image:null==user?void 0:user.image})),dropdownHeaderItem:__jsx("div",{className:"melody-p-2 melody-border-b melody-border-gray-200"},__jsx(Label._,{label:"".concat(user.firstName," ").concat(user.lastName),additionalStyles:{fontWeight:"bold",lineHeight:1}}),__jsx(Label._,{label:user.username,size:"small"})),items:userNavigation})))),__jsx(disclosure.p.Panel,{className:"sm:melody-hidden"},__jsx("div",{className:"melody-space-y-1 melody-px-2 melody-pt-2 melody-pb-3"},navigation.map((function(item){return __jsx(disclosure.p.Button,{key:item.name,as:"a",href:item.href,className:(0,functions.A)(pathname===item.href?"melody-bg-primary-100 melody-text-white":"melody-text-gray-600 hover:melody-bg-gray-200","melody-block melody-px-3 melody-py-2 melody-rounded-lg melody-text-base melody-font-medium"),"aria-current":pathname===item.href?"page":void 0},item.name)})))))}))};NavigationBar_NavigationBar.displayName="NavigationBar",NavigationBar_NavigationBar.__docgenInfo={description:"",methods:[],displayName:"NavigationBar"};try{NavigationBar_NavigationBar.displayName="NavigationBar",NavigationBar_NavigationBar.__docgenInfo={description:"",displayName:"NavigationBar",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"any"}},navigation:{defaultValue:null,description:"",name:"navigation",required:!0,type:{name:"NavBarItemProps[]"}},userNavigation:{defaultValue:null,description:"",name:"userNavigation",required:!0,type:{name:"NavBarItemProps[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Melody/src/components/Sections/NavigationBar.tsx#NavigationBar"]={docgenInfo:NavigationBar_NavigationBar.__docgenInfo,name:"NavigationBar",path:"components/Melody/src/components/Sections/NavigationBar.tsx#NavigationBar"})}catch(__react_docgen_typescript_loader_error){}var NavigationBar_stories_jsx=react.createElement;const NavigationBar_stories={title:"Section/Melody Nav Bar",component:NavigationBar_NavigationBar,parameters:{layout:"fullscreen"}};var Template=function Template(args){return NavigationBar_stories_jsx(NavigationBar_NavigationBar,args)};Template.displayName="Template";var LoggedIn=Template.bind({});LoggedIn.args={user:{name:"Lars Olson",username:"larsolson",uid:"1",icon:"https://cadenzamim.com/static/media/lars.70f21bc82a7152b65c15.jpg"},navigation:[{name:"Dashboard",onClick:function onClick(){return console.log("a")},current:!0},{name:"Support",href:"/support",current:!1},{name:"Tools",href:"#",current:!1},{name:"Pricing",href:"#",current:!1}],userNavigation:[]},LoggedIn.parameters={...LoggedIn.parameters,docs:{...LoggedIn.parameters?.docs,source:{originalSource:"function Template(args) {\n  return __jsx(NavigationBar, args);\n}",...LoggedIn.parameters?.docs?.source}}}}}]);