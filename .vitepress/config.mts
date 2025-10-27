import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/horizon/',
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
          { icon: 'discord', link: 'https://discord.gg/y95wNdaeXZ' },
        ],

        nav: [{ text: 'Home', link: '/en' }],

        sidebar: [
          {
            text: 'Home',
            link: '/en/',
          },
          {
            text: 'Rules',
            link: '/en/rules',
          },
          {
            text: 'Installation',
            link: '/en/install',
          },
          {
            text: 'Connection',
            link: '/en/connect',
          },
        ],
      },
    },

    fr: {
      label: 'Français',
      lang: 'fr',
      link: '/fr',
      themeConfig: {
        nav: [{ text: 'Accueil', link: '/fr' }],

        sidebar: [
          {
            text: 'Accueil',
            link: '/fr/',
          },
          {
            text: 'Règlement',
            link: '/fr/rules',
          },
          {
            text: 'Installation',
            link: '/fr/install',
          },
          {
            text: 'Connexion',
            link: '/fr/connect',
          },
        ],
      },
    },
  },
});
