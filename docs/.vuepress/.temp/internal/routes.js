export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/leminhson/olli_projects/saas-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/leminhson/olli_projects/saas-docs/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Bắt đầu"} }],
  ["/text-to-speech/introduction.html", { loader: () => import(/* webpackChunkName: "text-to-speech_introduction.html" */"/Users/leminhson/olli_projects/saas-docs/docs/.vuepress/.temp/pages/text-to-speech/introduction.html.js"), meta: {"title":""} }],
  ["/speech-to-text/introduction.html", { loader: () => import(/* webpackChunkName: "speech-to-text_introduction.html" */"/Users/leminhson/olli_projects/saas-docs/docs/.vuepress/.temp/pages/speech-to-text/introduction.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/leminhson/olli_projects/saas-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
