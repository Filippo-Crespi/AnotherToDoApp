// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@vite-pwa/nuxt",
    "@vueuse/nuxt",
  ],
  css: ["@/assets/css/main.css"],
  tailwindcss: {
    configPath: "./tailwind.config.js",
  },
  pwa: {
    registerType: "autoUpdate", // aggiorna il service worker automaticamente
    manifest: {
      name: "AnotherToDoList",
      short_name: "AnotherToDoList",
      description: "AnotherToDoList - Your personal task manager",
      theme_color: "#111111",
      background_color: "#ffffff",
      display: "standalone",
      start_url: "/",
      icons: [
        {
          src: "/icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
    },
    devOptions: {
      enabled: true, // utile in dev per testare
      type: "module",
    },
  },
});
