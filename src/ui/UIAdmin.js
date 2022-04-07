import UIAlbum from './UIAlbum.js';
import UserServices from '../utils/UserServices.js';

const uiAlbum = new UIAlbum();
const userServices = new UserServices();

const tbodyAlbumList = document.querySelector('#tableAlbumList').getElementsByTagName('tbody')[0];

addListenersAdmin();

function addListenersAdmin() {
    document.addEventListener("DOMContentLoaded", async function (e) {
        
        await userServices.validateUserLoggedRolAdmin() ? true : 
            window.location.href = "index.html";

        tbodyAlbumList.append(...await uiAlbum.buildAlbumList());
        document.body.append(await uiAlbum.buildAlbumModalCrud());
        document.body.append(await
            uiAlbum.buildModalConfirm('modalConfirmDelete', 'Advertencia',
                'Seguro desea borrar el Album?', 'btnModalConfirmDelete'));

        uiAlbum.addListenersAlbum();

    });

}