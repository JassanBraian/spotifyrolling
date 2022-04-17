import ErrorPage from "../components/404.js";

//Tomas la etiqueta contenedora del div ---> body.
const main = document.body.getElementsByTagName("main")[0];
const errorPageService = new ErrorPage();

addListenersError();

function addListenersError() {
  document.addEventListener("DOMContentLoaded", async function (e) {
    main.append(await errorPageService.buildErrorPage());
  });
}
