import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'vi-VN',

  title: 'Olli SAAS',
  description: 'Tài liệu kỹ thuật cho kỹ thuật viên muốn dùng api của OLLI',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    // navbar: ['/', '/get-started'],
    navbar: [
      {
        text: 'Trang chủ',
        link: '/',
      },
      {
        text: 'Dịch vụ',
        link: '/services',
        
      },
    ],
    sidebar: [
      {
        title: 'Speech To Text',
        path: '/speech-to-text/',
        children: [
          {
            text: 'Introduction',
            link: '/speech-to-text/introduction'
          }
        ]
      },
    ]
  }),

  bundler: viteBundler(),
})
