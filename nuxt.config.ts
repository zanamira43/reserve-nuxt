// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxt/ui', 
    '@nuxtjs/tailwindcss', 
    '@nuxt/icon', 
    '@pinia/nuxt', 
    '@vee-validate/nuxt'
  ],

  // ui:{
  //   global: true,
  //   primary: 'orange',
  //   gray: 'cool' 
  // },

  runtimeConfig: {  
    public: {  
      APIURL: process.env.API_URL
    }
  },
  plugins: ['~/plugins/vue-query.ts'],
})
