export default ({ app }, inject) => {
  if (process.server) {
    console.log("Runs on the server");
  }
};
