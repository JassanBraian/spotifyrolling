import AlbumServices from '../utils/AlbumServices.js';

const albumServices = new AlbumServices();

class UIAlbum {
    buildAlbumList = async () => {
        const albumesDB = await albumServices.getAlbumes();
        const albumItems = [];

        albumesDB.forEach(album => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                <td>${album.nombre}</td>
            `;

            albumItems.push(tr);
        });
        return albumItems;
    }
};

export default UIAlbum;