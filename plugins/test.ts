export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('myPlugin', () => console.log("Runs on both client and server"));
});
