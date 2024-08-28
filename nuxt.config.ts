// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  // Comment out the module and watch the errors disappear
  modules: ["@nuxtjs/strapi"],
});
