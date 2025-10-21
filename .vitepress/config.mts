import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Horizon - Wiki',
  description: 'Desc',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en',
      themeConfig: {
        socialLinks: [
          { icon: 'github', link: 'https://github.com/captainziboo/horizon' },
        ],

        nav: [
          { text: 'Home', link: '/en' },
          { text: 'Rules', link: '/en/rules' },
        ],

        sidebar: [
          {
            text: 'Rules',
            link: '/en/rules',
          },
        ],
      },
    },

    fr: {
      label: 'Français',
      lang: 'fr',
      link: '/fr',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/fr' },
          { text: 'Règlement', link: '/fr/rules' },
        ],

        sidebar: [
          {
            text: 'Règlement',
            link: '/fr/rules',
          },
        ],
      },
    },
  },
});
