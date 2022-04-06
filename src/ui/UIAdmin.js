import UIAlbum from "./UIAlbum.js";

const uiAlbum = new UIAlbum(); //instanciando variable de UIAlbum

const tbodyAlbumList = document
  .querySelector("#tableAlbumList")
  .getElementsByTagName("tbody")[0];

addListenersAdmin();

function addListenersAdmin() {
  document.addEventListener("DOMContentLoaded", async function (e) {
    tbodyAlbumList.append(...(await uiAlbum.buildAlbumList()));
    document.body.append(await uiAlbum.buildAlbumModalCrud());
    document.body.append(
      await uiAlbum.buildModalConfirm(
        "modalConfirmDelete",
        "Advertencia",
        "Seguro desea borrar el Album?",
        "btnModalConfirmDelete"
      )
    );

    uiAlbum.addListenersAlbum();
  });
}
