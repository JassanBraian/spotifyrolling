import Header from "../components/Header.js";
import OffCanvas from "../components/off-canvas.js";
import Footer from "../components/Footer.js";
import AlbumServices from '../utils/AlbumServices.js';

const headerService = new Header();
const footerService = new Footer();
const offCanvasService = new OffCanvas();
const albumServices = new AlbumServices();

const header = document.body.getElementsByTagName("header")[0];
const main = document.body.getElementsByTagName("main")[0];
const footer = document.body.getElementsByTagName("footer")[0];
const greeting = document.querySelector(".welcome");
const carrouselPop = document.querySelector('#carrousel-pop');
const carrouselRock = document.querySelector('#carrousel-rock');
const carrouselLatino = document.querySelector('#carrousel-latino');
const carrouselDestacados = document.querySelector('#carrousel-destacados');

addListenersHome();

function addListenersHome() {
  document.addEventListener("DOMContentLoaded", async function (e) {
    header.append(await headerService.buildHeader());
    main.append(await offCanvasService.buildOffCanvas());
    footer.append(await footerService.buildFooter());

    const albumsDestacados = await albumServices.getAlbumsDestacados();
    const albumsPop = await albumServices.getAlbumsByCategory('pop');
    const albumsRock = await albumServices.getAlbumsByCategory('rock');
    const albumsLatinos = await albumServices.getAlbumsByCategory('latino');

    createCarrousel(albumsPop, carrouselPop);
    createCarrousel(albumsRock, carrouselRock);
    createCarrousel(albumsLatinos, carrouselLatino);
    createCarrousel(albumsDestacados, carrouselDestacados);

    greeting.innerText = `Bienvenido ${JSON.parse(window.localStorage.getItem("user"))}`;
    const logOutButton = document.querySelector(".log_out_button");
    logOutButton.addEventListener("click", (e) => {
      console.log(e);
      window.localStorage.removeItem("user");
      window.location.href = "../../loginRegister.html";
    })
  });
}

function createCarrousel(albums, carrousel) {
  albums.forEach(album => {
    const carrouselItems = document.createElement('div');
    carrouselItems.classList.add('carrousel-items', 'col-sm-6', 'col-md-4', 'col-lg-2');
    carrouselItems.innerHTML = `
      <img src=${album.imgUrl}>
      <div class = "text">${album.nombre}-${album.artista}</div>
      `
    carrousel.append(carrouselItems);
  });

};

