import Header from "../components/Header.js";
import OffCanvas from "../components/off-canvas.js";
import Footer from "../components/Footer.js";

const header = document.body.getElementsByTagName("header")[0];
const main = document.body.getElementsByTagName("main")[0];
const footer = document.body.getElementsByTagName("footer")[0];

const headerService = new Header();
const footerService = new Footer();
const offCanvasService = new OffCanvas();
addListenersHome();

function addListenersHome() {
  document.addEventListener("DOMContentLoaded", async function (e) {
    header.append(await headerService.buildHeader());
    footer.append(await footerService.buildFooter());
    main.append(await offCanvasService.buildOffCanvas());
  });
}
