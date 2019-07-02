const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-template-js": hot(preferDefault(require("/home/wizard/Projects/wizArD-1910/src/templates/postTemplate.js"))),
  "component---src-templates-tags-template-js": hot(preferDefault(require("/home/wizard/Projects/wizArD-1910/src/templates/tagsTemplate.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/wizard/Projects/wizArD-1910/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/wizard/Projects/wizArD-1910/src/pages/404.js"))),
  "component---src-pages-blogs-js": hot(preferDefault(require("/home/wizard/Projects/wizArD-1910/src/pages/blogs.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/wizard/Projects/wizArD-1910/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/home/wizard/Projects/wizArD-1910/src/pages/projects.js"))),
  "component---src-pages-tags-js": hot(preferDefault(require("/home/wizard/Projects/wizArD-1910/src/pages/tags.js")))
}

