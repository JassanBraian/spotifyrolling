import SuperUI from './SuperUI.js';
import AlbumServices from '../utils/AlbumServices.js';

const albumServices = new AlbumServices();

class UIAlbum extends SuperUI{
    buildAlbumList = async () => {
        const albumesDB = await albumServices.getAlbumes();
        const albumItems = [];

        albumesDB.forEach(album => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                <td>${album.nombre}</td>
                <td>${album.descrip}</td>
                <td>${album.imgUrl}</td>
                <td>${album.esDestacada}</td>
                <td>${album.categoria}</td>
            `;

            albumItems.push(tr);
        });
        return albumItems;
    }
};

export default UIAlbum;