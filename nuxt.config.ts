export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    // "@nuxtjs/axios"
  ],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  compatibilityDate: "2024-08-25",
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // ADDED
  ssr: false,
  // mode: server,
  app: {
    head: {
      title: "Foodie",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "My description" },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || "http://127.0.0.1:8000/api/",
    },
  },
  plugins: [
    // "~/plugins/test.client.ts",
    "~/plugins/test.server.ts",
    // "~/plugins/test.ts",
    // '~/plugins/**/*.ts'
  ],
  build: {
    transpile: ["@nuxtjs/supabase"],
  },
  // server: {
  //   port: 3000,
  //   host: '0.0.0.0',
  //   timing: false,
  // },

  // REMOVED FROM NUXT 3
  // serverMiddleware: [
  //   { path: '/api', handler: '~/server/api/test.ts' }
  // ],
  // hooks: {
  //   'render:before'(renderer) {
  //     console.log('SSR is about to happen');
  //   },
  // },
});
