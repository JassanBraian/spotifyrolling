import AlbumServices from '../utils/AlbumServices.js'
const albumServices = new AlbumServices();
const albumsPop = await albumServices.getAlbumsByCategory('rock');
const albumsDestacados = await albumServices.getAlbumsDestacados();

console.log(albumsPop);
console.log(albumsDestacados);

//forEach de albumsPop
//ir creando c/carrousel item con {albumsPop.nombre} {albumsPop.imgUrl}