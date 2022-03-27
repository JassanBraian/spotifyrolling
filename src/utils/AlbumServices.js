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
}

export default AlbumServices;
