// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxt/content'
  ],
  content: {
    highlight: {
      theme: 'github-dark',
    },
    markdown: {
      anchorLinks: false
    }
  },
  nitro: {
    preset: "netlify"
  },
  devtools: { enabled: true }
})
