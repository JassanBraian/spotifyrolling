import UIAlbum from "./UIAlbum.js";

const uiAlbum = new UIAlbum(); //instanciando variable de UIAlbum

const tbodyAlbumList = document
  .querySelector("#tableAlbumList")
  .getElementsByTagName("tbody")[0];

addListeners();

function addListeners() {
  document.addEventListener("DOMContentLoaded", async (e) => {
    tbodyAlbumList.append(...(await uiAlbum.buildAlbumList()));
  });
}
