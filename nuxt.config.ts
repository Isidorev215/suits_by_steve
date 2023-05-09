// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "nuxt-icon"],
  app: {
    head: {
      title: 'Suits By Steve',
      meta: [
        { name: 'description', content: 'Every man has to own a black suit | Black, Brown, Gray, Navy, Tan. Visualizing suit recommendation by Steve Harvey. You cannot mess it up' }
      ]
    }
  }
})
