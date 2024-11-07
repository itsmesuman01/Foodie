export default ({ app }, inject) => {
  inject("myPlugin", () => console.log("Runs on both client and server"));
};
