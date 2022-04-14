import AlbumServices from '../utils/AlbumServices.js'
const albumServices = new AlbumServices();
const albumsPop = await albumServices.getAlbumsByCategory('rock');
const albumsDestacados = await albumServices.getAlbumsDestacados();



//Inicio Carrousel
const carrousel = document.querySelector('.carrousel-items');
let maxScrollLeft = carrousel.scrollWidth - carrousel.clientWidth;
let interval = null;
let step = 1;


const start = ()=>{
    interval = setInterval(function () {
        carrousel.scrollLeft = carrousel.scrollLeft + step;
        if (carrousel.scrollLeft === maxScrollLeft){
            step = step * -1;
        } else if(carrousel.scrollLeft === 0){
            step = step * -1;
        };
    }, 10);
};

const stop = ()=>{
    clearInterval(interval);
};


carrousel.addEventListener('mouseover', ()=>{
    stop();
} );
carrousel.addEventListener('mouseout', ()=>{
    start();
});

start();
//fin carrousel

console.log(albumsPop);
console.log(albumsDestacados);

//forEach de albumsPop
//ir creando c/carrousel item con {albumsPop.nombre} {albumsPop.imgUrl}