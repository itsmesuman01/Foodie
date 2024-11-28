export default defineNuxtPlugin(nuxtApp => {
  if (process.server) {
    console.log("Runs on the server");
  }
});
