import comp from "/Users/leminhson/olli_projects/saas-docs/docs/.vuepress/.temp/pages/text-to-speech/introduction.html.vue"
const data = JSON.parse("{\"path\":\"/text-to-speech/introduction.html\",\"title\":\"Hello\",\"lang\":\"vi-VN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"text-to-speech/introduction.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
