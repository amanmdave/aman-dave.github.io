(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{167:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});a(205),a(66);var n=a(0),r=a.n(n),l=a(173),o=a(176),c=a(190),i=a.n(c),s=a(196),m=a(191),d=a.n(m),u=a(178),p=a(183),g=a.n(p);t.default=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(u.ThemeToggler,null,function(e){var n=e.theme,c=e.toggleTheme;return r.a.createElement(o.a,null,r.a.createElement("h1",{className:"blogHeader"},r.a.createElement("span",{onClick:function(e){return window.location.replace("/")}},"Aman Dave"),r.a.createElement("div",{style:{float:"right",fontSize:"20px",paddingTop:"10px"}},r.a.createElement("label",null,r.a.createElement(g.a,{defaultChecked:"dark"===n,className:"dark-theme",onChange:function(e){return c(e.target.checked?"dark":"light")},value:"dark"===n,icons:{checked:r.a.createElement("img",{src:a(187),height:"20px",style:{marginTop:"-5px",marginLeft:"-5px"}}),unchecked:r.a.createElement("img",{src:a(188),height:"20px",style:{marginTop:"-5px",marginLeft:"-5px"}})}})))),r.a.createElement("br",null),r.a.createElement(d.a,{right:!0},r.a.createElement("div",{style:{backgroundColor:"var(--bg)",color:"var(--textNormal)",transition:"color 0.2s ease-out, background 0.2s ease-out"},className:"post-list"},t.map(function(e){return r.a.createElement("div",{key:e.node.id,className:"post-list__item",style:{border:"1px solid #393e46",marginBottom:"50px"}},r.a.createElement("div",{className:"post-list__thumbnail"},r.a.createElement(l.a,{to:e.node.fields.slug},r.a.createElement(i.a,{fixed:e.node.frontmatter.thumbnail.childImageSharp.fixed}))),r.a.createElement("div",{className:"post-list__content"},r.a.createElement(l.a,{to:e.node.fields.slug},r.a.createElement("h2",{className:"blogTitle"},e.node.frontmatter.title)),e.node.frontmatter.tags?r.a.createElement("div",{className:"tags-container"},r.a.createElement("ul",{className:"taglist"},e.node.frontmatter.tags.map(function(e){return r.a.createElement("li",{key:e+"tag"},r.a.createElement(l.a,{to:"/tags/"+Object(s.kebabCase)(e)+"/"},e))}))):null,r.a.createElement("p",null,e.node.frontmatter.date),r.a.createElement("div",{className:"post-list__excerpt"},e.node.excerpt)))}))))})};var f="816308439"},172:function(e,t,a){var n;e.exports=(n=a(175))&&n.default||n},173:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(5),o=a.n(l),c=a(41),i=a.n(c);a.d(t,"a",function(){return i.a});a(172),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},174:function(e){e.exports={data:{site:{siteMetadata:{title:"Welcome to a not so cool website"}}}}},175:function(e,t,a){"use strict";a.r(t);a(43);var n=a(0),r=a.n(n),l=a(5),o=a.n(l),c=a(65),i=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};i.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=i},176:function(e,t,a){"use strict";var n=a(174),r=a(0),l=a.n(r),o=a(5),c=a.n(o),i=a(173),s=function(e){var t=e.siteTitle;return l.a.createElement("header",{style:{background:"#007bff",marginBottom:"1.45rem"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(i.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};s.propTypes={siteTitle:c.a.string},s.defaultProps={siteTitle:""};a(162);var m=function(e){var t=e.children;n.data;return l.a.createElement("div",{style:{backgroundColor:"var(--bg)",color:"var(--textNormal)",transition:"color 0.2s ease-out, background 0.2s ease-out"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},l.a.createElement("main",null,t),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("footer",{style:{textAlign:"center"}},"© ",(new Date).getFullYear(),", Built with ❤ By"," ",l.a.createElement("a",{href:"https://www.linkedin.com/in/aman-dave/"},"Aman"))))};m.propTypes={children:c.a.node.isRequired};t.a=m},187:function(e,t,a){e.exports=a.p+"static/sun-636b3a1eef4b1172bab054bd83b14e36.png"},188:function(e,t,a){e.exports=a.p+"static/moon-aa4c148b755cef9618c91d49cd4a72e8.png"}}]);
//# sourceMappingURL=component---src-pages-blogs-js-f965c7be64722639ebca.js.map