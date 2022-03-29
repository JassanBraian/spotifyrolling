import { API_URL } from '../db/conexion.js';
import Album from '../classes/Album.js';

class AlbumServices {
    getAlbumes = async () => {
        try {
            const response = await fetch(`${API_URL}/album`);
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }

    getAlbumById = async albumId => {
        try {
            const response = await fetch(`${API_URL}/album/${albumId}`);
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }

    createAlbum = async newAlbum => {
        try {
            await fetch(`${API_URL}/album`, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: newAlbum.nombre,
                    descrip: newAlbum.descrip,
                    imgUrl: newAlbum.imgUrl,
                    esDestacado: newAlbum.esDestacado === 'true',
                    categoria: newAlbum.categoria
                })
            });
            return true;
        } catch (error) {
            throw error;
        }
    }

    updateAlbum = async updateAlbum => {
        try {
            await fetch(`${API_URL}/album/${updateAlbum.id}`, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: updateAlbum.nombre,
                    descrip: updateAlbum.descrip,
                    imgUrl: updateAlbum.imgUrl,
                    esDestacado: updateAlbum.esDestacado === 'true',
                    categoria: updateAlbum.categoria
                })
            });
            return true;
        } catch (error) {
            throw error;
        }
    }

    deleteAlbum = async albumId => {
        try {
            await fetch(`${API_URL}/album/${albumId}`, {
                method: "DELETE"
            });
        } catch (error) {
            throw error;
        }
    }
}

export default AlbumServices;
