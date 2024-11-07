export default ({ app }, inject) => {
  if (process.client) {
    console.log("Runs in the browser");
  }
};
