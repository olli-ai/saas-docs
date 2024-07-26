import comp from "/Users/leminhson/olli_projects/saas-docs/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"Bắt đầu\",\"lang\":\"vi-VN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Giới thiệu\",\"slug\":\"gioi-thieu\",\"link\":\"#gioi-thieu\",\"children\":[]},{\"level\":2,\"title\":\"Dịch vụ\",\"slug\":\"dich-vu\",\"link\":\"#dich-vu\",\"children\":[{\"level\":3,\"title\":\"Chuyển giọng nói thành văn bản\",\"slug\":\"chuyen-giong-noi-thanh-van-ban\",\"link\":\"#chuyen-giong-noi-thanh-van-ban\",\"children\":[]},{\"level\":3,\"title\":\"Chuyển văn bản thành giọng nói\",\"slug\":\"chuyen-van-ban-thanh-giong-noi\",\"link\":\"#chuyen-van-ban-thanh-giong-noi\",\"children\":[]},{\"level\":3,\"title\":\"Xây dựng trợ lý ảo\",\"slug\":\"xay-dung-tro-ly-ao\",\"link\":\"#xay-dung-tro-ly-ao\",\"children\":[]},{\"level\":3,\"title\":\"Quản lý thiết bị IOT\",\"slug\":\"quan-ly-thiet-bi-iot\",\"link\":\"#quan-ly-thiet-bi-iot\",\"children\":[]}]}],\"git\":{\"updatedTime\":1721904846000,\"contributors\":[{\"name\":\"sonlm\",\"email\":\"son@olli-ai.com\",\"commits\":1}]},\"filePathRelative\":\"get-started.md\"}")
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
