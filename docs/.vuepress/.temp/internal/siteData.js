export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"vi-VN\",\"title\":\"Olli SAAS\",\"description\":\"Tài liệu kỹ thuật cho kỹ thuật viên muốn dùng api của OLLI\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
