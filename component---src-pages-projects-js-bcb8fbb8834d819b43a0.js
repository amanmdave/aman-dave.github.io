(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{171:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(176),s=a(180),o=a(190),l=a.n(o),d=function(e){var t=e.buttonText;return i.a.createElement("button",{className:"button"},t)};a.d(t,"projectsQuery",function(){return c});t.default=function(e){var t=e.data;return i.a.createElement(n.a,null,i.a.createElement(s.a,{title:"Home",keywords:["gatsby","application","react","portfolio"]}),i.a.createElement("h1",null,"Projects"),i.a.createElement("div",{className:"project-list"},t.allProjectsJson.edges.map(function(e){return i.a.createElement("div",{key:e.node.id,className:"project-list__item"},i.a.createElement("div",{className:"project-list__thumbnail"},i.a.createElement(l.a,{fluid:e.node.thumbnailImage.childImageSharp.fluid})),i.a.createElement("div",{className:"project-list__content"},i.a.createElement("h2",null,e.node.title),i.a.createElement("div",{className:"project-list__excerpt"},e.node.description),i.a.createElement("a",{href:e.node.url},i.a.createElement(d,{buttonText:"Visit the Website"}))))})))};var c="2439086527"},172:function(e,t,a){var r;e.exports=(r=a(175))&&r.default||r},173:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(5),s=a.n(n),o=a(41),l=a.n(o);a.d(t,"a",function(){return l.a});a(172),i.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},174:function(e){e.exports={data:{site:{siteMetadata:{title:"Welcome to a not so cool website"}}}}},175:function(e,t,a){"use strict";a.r(t);a(43);var r=a(0),i=a.n(r),n=a(5),s=a.n(n),o=a(65),l=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},176:function(e,t,a){"use strict";var r=a(174),i=a(0),n=a.n(i),s=a(5),o=a.n(s),l=a(173),d=function(e){var t=e.siteTitle;return n.a.createElement("header",{style:{background:"#007bff",marginBottom:"1.45rem"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},n.a.createElement("h1",{style:{margin:0}},n.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:""};a(162);var c=function(e){var t=e.children;r.data;return n.a.createElement("div",{style:{backgroundColor:"var(--bg)",color:"var(--textNormal)",transition:"color 0.2s ease-out, background 0.2s ease-out"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},n.a.createElement("main",null,t),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("footer",{style:{textAlign:"center"}},"© ",(new Date).getFullYear(),", Built with ❤ By"," ",n.a.createElement("a",{href:"https://www.linkedin.com/in/aman-dave/"},"Aman"))))};c.propTypes={children:o.a.node.isRequired};t.a=c},180:function(e,t,a){"use strict";var r=a(181),i=a(0),n=a.n(i),s=a(5),o=a.n(s),l=a(189),d=a.n(l);function c(e){var t=e.description,a=e.lang,i=e.meta,s=e.title,o=r.data.site,l=t||o.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=c},181:function(e){e.exports={data:{site:{siteMetadata:{title:"Welcome to a not so cool website",description:"I created this website over a weekend out of boredom",author:"@wizArD-1910"}}}}},190:function(e,t,a){"use strict";var r=a(10);t.__esModule=!0,t.default=void 0;var i,n=r(a(8)),s=r(a(42)),o=r(a(99)),l=r(a(97)),d=r(a(0)),c=r(a(5)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),g=function(e){var t=u(e),a=f(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function E(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)}).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(T,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},T=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});T.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var j=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&b&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,L=e.loading,I=e.draggable,j=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,l.default)({opacity:j?1:0,transition:V?"opacity "+b+"ms":"none"},o),z="boolean"==typeof h?"lightgray":h,k={transitionDelay:b+"ms"},N=(0,l.default)({opacity:this.state.imgLoaded?0:1},V&&k,o,f),P={title:t,alt:this.state.isVisible?"":a,style:N,className:p};if(g){var C=g,W=C[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),z&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&k)}),W.base64&&d.default.createElement(O,{src:W.base64,spreadProps:P,imageVariants:C,generateSources:w}),W.tracedSVG&&d.default.createElement(O,{src:W.tracedSVG,spreadProps:P,imageVariants:C,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,v(C),d.default.createElement(T,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:L},W,{imageVariants:C}))}}))}if(m){var _=m,q=_[0],M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete M.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},z&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:z,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},V&&k)}),q.base64&&d.default.createElement(O,{src:q.base64,spreadProps:P,imageVariants:_,generateSources:w}),q.tracedSVG&&d.default.createElement(O,{src:q.tracedSVG,spreadProps:P,imageVariants:_,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,v(_),d.default.createElement(T,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:L},q,{imageVariants:_}))}}))}return null},t}(d.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),x=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});j.propTypes={resolutions:V,sizes:x,fixed:c.default.oneOfType([V,c.default.arrayOf(V)]),fluid:c.default.oneOfType([x,c.default.arrayOf(x)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var z=j;t.default=z}}]);
//# sourceMappingURL=component---src-pages-projects-js-bcb8fbb8834d819b43a0.js.map