import comp from "/Users/leminhson/olli_projects/saas-docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"vi-VN\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"search\":true,\"tags\":[\"trang chủ\"],\"actions\":[{\"text\":\"Bắt đầu\",\"link\":\"/get-started\",\"type\":\"primaryson@\"}],\"features\":[{\"title\":\"Chuyển giọng nói thành văn bản\",\"details\":\"Chuyển giọng nói thành văn bản\"},{\"title\":\"Tạo giọng nói từ văn bản\",\"details\":\"Tạo giọng nói từ văn bản\"},{\"title\":\"Xây dựng trợ lý ảo\",\"details\":\"Xây dựng trợ lý ảo\"},{\"title\":\"Quản lý thiết bị IOT\",\"details\":\"Quản lý thiết bị IOT\"}],\"footer\":\"Copyright © 2024 Olli Technology\"},\"headers\":[],\"git\":{\"updatedTime\":1721904846000,\"contributors\":[{\"name\":\"sonlm\",\"email\":\"son@olli-ai.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
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
