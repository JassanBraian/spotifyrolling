import AlbumServices from '../utils/AlbumServices.js'
const albumServices = new AlbumServices();
const albumsDestacados = await albumServices.getAlbumsDestacados();
const albumsPop = await albumServices.getAlbumsByCategory('pop');
const albumsRock = await albumServices.getAlbumsByCategory('rock');
const albumsLatinos = await albumServices.getAlbumsByCategory('latino');
const carrouselPop = document.querySelector('#carrousel-pop');
const carrouselRock = document.querySelector('#carrousel-rock');
const carrouselLatino = document.querySelector('#carrousel-latino');
const carrouselDestacados = document.querySelector('#carrousel-destacados')

function addListeners() {
    document.addEventListener("DOMContentLoaded", async e => {
        
    })};
    
    function createCarrousel(albums, carrousel){
        albums.forEach(album =>{
            const carrouselItems = document.createElement('div');
            carrouselItems.classList.add('carrousel-items','col-sm-6','col-md-4','col-lg-2');
            carrouselItems.innerHTML =`
            <img src=${album.imgUrl}>
            <div class = "text">${album.nombre}-${album.artista}</div>
            `
            carrousel.append(carrouselItems);
        });
        
    };
createCarrousel(albumsPop, carrouselPop);
createCarrousel(albumsRock, carrouselRock);
createCarrousel(albumsLatinos, carrouselLatino);
createCarrousel(albumsDestacados, carrouselDestacados);



//Inicio Carrousel
// const carrousel = document.querySelector('#carrousel-pop');
// let maxScrollLeft = carrousel.scrollWidth - carrousel.clientWidth;
// let interval = null;
// let step = 1;


// const start = ()=>{
//     interval = setInterval(function () {
//         carrousel.scrollLeft = carrousel.scrollLeft + step;
//         if (carrousel.scrollLeft === maxScrollLeft){
//            step = step * -1;
//         } else if(carrousel.scrollLeft === 0){
//             step = step * -1;
//         };
//     }, 10);
// };

// const stop = ()=>{
//     clearInterval(interval);
// };


// carrousel.addEventListener('mouseover', ()=>{
//     stop();
// } );
// carrousel.addEventListener('mouseout', ()=>{
//     start();
// });

// start();

//fin carrousel

console.log(albumsPop);
console.log(albumsDestacados);

//forEach de albumsPop
//ir creando c/carrousel item con {albumsPop.nombre} {albumsPop.imgUrl}