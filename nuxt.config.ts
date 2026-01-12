// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app:{
    head : {
      title: 'Practise Page',
      meta: [
        {name: 'description', content: 'Everything about the page'}
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss']
})
