"use strict";(self.webpackChunkmelodystorybook=self.webpackChunkmelodystorybook||[]).push([[8464],{"./stories/Carousel.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CarouselTemplate:()=>CarouselTemplate,default:()=>Carousel_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Carousel=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./components/Melody/src/components/Layouts/Carousel.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Carousel.Z,options);Carousel.Z&&Carousel.Z.locals&&Carousel.Z.locals;var _CarouselTemplate$par,_CarouselTemplate$par2,_CarouselTemplate$par3,next_image=__webpack_require__("./node_modules/next/image.js"),image_default=__webpack_require__.n(next_image),Button=__webpack_require__("./components/Melody/src/components/Inputs/Button.tsx"),__jsx=react.createElement,Carousel_Carousel=function Carousel(props){var width=props.width,height=props.height,images=props.images,_useState=(0,react.useState)(0),currentImageIndex=_useState[0],setCurrentImageIndex=_useState[1];return __jsx("div",{className:"melody-relative"},__jsx("div",{className:"melody-aspect-w-16 melody-aspect-h-9",style:{width,height}},__jsx(image_default(),{className:"melody-object-cover melody-w-full melody-h-full",src:images[currentImageIndex],fill:!0,alt:"carousel"})),__jsx("div",{className:"melody-absolute melody-top-1/2 melody-left-2 melody-z-10 melody-transform -melody-translate-y-1/2"},__jsx(Button.z,{onClick:function goToPreviousImage(){setCurrentImageIndex(0===currentImageIndex?images.length-1:currentImageIndex-1)},icon:{icon:"arrowLeft"}})),__jsx("div",{className:"melody-absolute melody-top-1/2 melody-right-2 melody-z-10 melody-transform -melody-translate-y-1/2"},__jsx(Button.z,{onClick:function goToNextImage(){currentImageIndex===images.length-1?setCurrentImageIndex(0):setCurrentImageIndex(currentImageIndex+1)},icon:{icon:"arrowRight",rightAligned:!0}})))};Carousel_Carousel.displayName="Carousel",Carousel_Carousel.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{width:{required:!0,tsType:{name:"any"},description:""},height:{required:!0,tsType:{name:"any"},description:""},images:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};try{Carousel_Carousel.displayName="Carousel",Carousel_Carousel.__docgenInfo={description:"",displayName:"Carousel",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"any"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"any"}},images:{defaultValue:null,description:"",name:"images",required:!0,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Melody/src/components/Layouts/Carousel.tsx#Carousel"]={docgenInfo:Carousel_Carousel.__docgenInfo,name:"Carousel",path:"components/Melody/src/components/Layouts/Carousel.tsx#Carousel"})}catch(__react_docgen_typescript_loader_error){}var Carousel_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Carousel_stories={title:"Layout/Melody Carousel",component:Carousel_Carousel,argTypes:{size:{control:{type:"select",options:["small","medium","large"]}}}};var Template=function Template(args){return Carousel_stories_jsx(Carousel_Carousel,args)};Template.displayName="Template";var CarouselTemplate=Template.bind({});CarouselTemplate.args={width:"100%",height:500,images:["https://pixy.org/src/477/4774988.jpg","https://www.onimodglobal.com/wp-content/uploads/2017/09/Reasons-why-having-a-professional-website-is-important.jpeg"]},CarouselTemplate.parameters=_objectSpread(_objectSpread({},CarouselTemplate.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_CarouselTemplate$par=CarouselTemplate.parameters)||void 0===_CarouselTemplate$par?void 0:_CarouselTemplate$par.docs),{},{source:_objectSpread({originalSource:"args => <Carousel {...args} />"},null===(_CarouselTemplate$par2=CarouselTemplate.parameters)||void 0===_CarouselTemplate$par2||null===(_CarouselTemplate$par3=_CarouselTemplate$par2.docs)||void 0===_CarouselTemplate$par3?void 0:_CarouselTemplate$par3.source)})})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./components/Melody/src/components/Layouts/Carousel.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);