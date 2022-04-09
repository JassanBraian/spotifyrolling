import Member from "../classes/Member.js";

const allMembersContainer = document.querySelector('#main-container');



function addListeners() {
        document.addEventListener("DOMContentLoaded", async e => {

        })};

//instanciar integrantes del equipo
let integrantes = [];

function addNewMember(name, picture, favouriteAlbum, contact){
    const newMember = new Member(name, picture, favouriteAlbum, contact);
    integrantes.push(newMember);
}

addNewMember ('Elisa Socolsky', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png', 
'Alabama Shakes: Sound and colour','esocolsky@gmail.com');
addNewMember('Braian Jassan', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png', 
'Blanco','braianjassan@gmail.com');
addNewMember('Emanuel Rojas Guindan', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png', 'Pink Floyd: The wall','@emanuelrojasguindan');
addNewMember('Fernando Alexis Vale', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png', 'The Beatles: Let it be', '@fernandoalexisvale');
addNewMember('Jorge Gonzalez','https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png', 'AC DC : Back in black', '@jorgegonzalez742' );
addNewMember('Lucas Suarez','https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png', 'Radiohead: Pablo honey', '@lucassuarez25' );




function createMemberDiv(){
  integrantes.forEach(integrante => {
    const divMember = document.createElement('div');
    divMember.classList.add('container-fluid');
    divMember.classList.add('members-container');
    divMember.innerHTML = `
    <div class="member-container  col-md-3 col-lg-2" >
        <div class="container-foto">
          <img class="img-fluid rounded-circle " src=${integrante.picture} alt="fotoPerfil">
        </div>
        <div class="nombre">
          <h3> ${integrante.name} ${integrante.lastname}</h3>
          <h4>ALbum Preferido: ${integrante.favouriteAlbum}</h4>
        </div>
        <div class="redes-container">
          <a class="icono" href="https://www.facebook.com/" target="blank" role="button"><img
              src="/assets/icons/about/facebook.png"></a>
          <a class="icono" href="https://www.instagram.com/" target="blank" role="button"><img
              src="/assets/icons/about/instagram.png"></a>
          <a class="icono" href="https://www.twitter.com/" target="blank" role="button"><img
              src="/assets/icons/about/twitter.png"></a>
        </div>
      </div>
    `
    allMembersContainer.append(divMember);
  });

}
createMemberDiv();

//cargar integrantes en un array mediante un push
//recorrer el array con un forEach e ir creando los divs con innerHTMl
//createElement (div)