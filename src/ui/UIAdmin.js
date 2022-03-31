import UIAlbum from './UIAlbum.js';

const uiAlbum = new UIAlbum();

const tbodyAlbumList = document.querySelector('#tableAlbumList').getElementsByTagName('tbody')[0];

addListenersAdmin();

function addListenersAdmin() {
    document.addEventListener("DOMContentLoaded", async e => {
        tbodyAlbumList.append(...await uiAlbum.buildAlbumList());
        document.body.append(await uiAlbum.buildAlbumModalCrud());

        uiAlbum.addListenersAlbum();
    });

}