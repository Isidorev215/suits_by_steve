// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "nuxt-icon", "nuxt-schema-org", "nuxt-simple-sitemap"],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Suits By Steve',
      meta: [
        { name: 'description', content: 'Every man has to own a black suit | Black, Brown, Gray, Navy, Tan. Visualizing suit recommendation by Steve Harvey. You cannot mess it up' },
        { property: 'og:title', content: 'Suits By Steve' },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: 'Every man has to own a black suit | Black, Brown, Gray, Navy, Tan. Visualizing suit recommendation by Steve Harvey. You cannot mess it up' },
        { property: 'og:image', content: 'https://suitsbysteve.web.app/home_page_image.png' },
        { property: 'og:url', content: 'https://suitsbysteve.web.app' },
        { property: 'twitter:card', content: 'https://suitsbysteve.web.app/home_page_image.png' }
      ],
      htmlAttrs: { lang: 'en' }
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://suitsbysteve.web.app'
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
  schemaOrg: {
    host: 'https://suitsbysteve.web.app'
  },
})
