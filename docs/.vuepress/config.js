import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'vi-VN',

  title: 'Olli SAAS',
  description: 'Tài liệu kỹ thuật cho kỹ thuật viên muốn dùng api của OLLI',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    search: true,
    searchMaxSuggestions: 10,
    navbar: [
      {
        text: 'Trang chủ',
        link: '/',
      },
      {
        text: 'Dịch vụ',
        children: [
          {
            text: 'Chuyển giọng nói thành văn bản',
            link: '/speech-to-text/introduction'
          },
          {
            text: 'Chuyển văn bản thành giọng nói',
            link: '/text-to-speech/introduction'
          }
        ]
      },
    ],
  }),

  bundler: viteBundler(),
})
