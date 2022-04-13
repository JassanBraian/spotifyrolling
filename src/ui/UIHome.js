import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

const header = document.body.getElementsByTagName("header")[0];
const footer = document.body.getElementsByTagName("footer")[0];

const headerService = new Header();
const footerService = new Footer();
addListenersHome();

function addListenersHome() {
  document.addEventListener("DOMContentLoaded", async function (e) {
    header.append(await headerService.buildHeader());
    footer.append(await footerService.buildFooter());
  });
}
