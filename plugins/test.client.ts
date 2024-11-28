export default defineNuxtPlugin(nuxtApp => {
  if (process.client) {
    console.log("Runs in the browser");
  }
});
