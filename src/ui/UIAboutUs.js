import Member from "../classes/Member.js";

const allMembersContainer = document.querySelector('#members-container');


//const member = new Member();
function addListeners() {
        document.addEventListener("DOMContentLoaded", async e => {

        })};

//instanciar integrantes del equipo
const integrante1 = new Member ('Elisa', 'Socolsky', 'https://www.floresyplantas.net/wp-content/uploads/flor-de-margarita.jpg', 
'Alabama Shakes: Sound and colour','esocolsky@gmail.com');
const integrante2 = new Member ('Braian','Jassan', 'https://www.floresyplantas.net/wp-content/uploads/flor-de-margarita.jpg', 
'Blanco','braianjassan@gmail.com');
let integrantes = [];
integrantes.push(integrante1);
integrantes.push(integrante2);
console.log(integrantes);

function createMemberDiv(){
    const divMember = document.createElement('div');
    divMember.innerHTML = `
    <div class="member-container  col-md-3 col-lg-2" >
        <div class="container-foto">
          <img class="img-fluid rounded-circle " src="/assets/images/about/elisasoco.png" alt="fotoPerfil">
        </div>
        <div class="nombre">
          <h3> Elisa Socolsky</h3>
          <h4>Bar preferido: The Aviary</h4>
          <h4>Trago preferido: Dirty Martini</h4>
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
    `;
    allMembersContainer.append(divMember);

}
createMemberDiv();

//cargar integrantes en un array mediante un push
//recorrer el array con un forEach e ir creando los divs con innerHTMl
//createElement (div)