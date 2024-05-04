// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  nitro: {
    experimental: {
      websocket: true,
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    exposeConfig: true,
    viewer: true,
  },
  modules: ["@nuxt/ui", "@pinia/nuxt", "@nuxtjs/tailwindcss"],
  colorMode: {
    preference: "light",
  },
});
