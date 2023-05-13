// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "nuxt-icon", "nuxt-schema-org", "nuxt-simple-sitemap"],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Suits By Harvey',
      meta: [
        { name: 'description', content: 'Every man has to own a black suit | Black, Brown, Gray, Navy, Tan. Visualizing suit recommendation by Steve Harvey. You cannot mess it up' },
        { property: 'og:title', content: 'Suits By Harvey' },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: 'Every man has to own a black suit | Black, Brown, Gray, Navy, Tan. Visualizing suit recommendation by Steve Harvey. You cannot mess it up' },
        { property: 'og:image', content: 'https://suitsbyharvey.web.app/home_page_image.png' },
        { property: 'og:url', content: 'https://suitsbyharvey.web.app' },
        { property: 'twitter:card', content: 'https://suitsbyharvey.web.app/home_page_image.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      htmlAttrs: { lang: 'en' }
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://suitsbyharvey.web.app'
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
  schemaOrg: {
    host: 'https://suitsbyharvey.web.app'
  },
})
