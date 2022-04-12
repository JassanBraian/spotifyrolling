//variables
const usuarioLogin = document.getElementById("usuarioLogin");
const passwordLogin = document.getElementById("passwordLogin");
let usuarioCorrecto = false;
//const form_login=document.querySelector(".form_login");



//definimos los listening
form_login.addEventListener("submit", validarEntradas);
//defino los campos and uso otro Admin
const campoLogin = { //ESTA PARTE CREO QUE NO ES NECESARIO
  usuario: false,
  password: false,
  admin: false,
};
function verificar(entrada) {
  if (entrada.id == "usuarioLogin") {
    if (expressions.usuario.test(entrada.value)) {
      campoLogin["usuario"] = true;
      document.querySelector(".grupo_usuarioLogin p").classList.remove("activeMsj");
      usuarioLogin.classList.remove("border_input_none");
      usuarioLogin.classList.remove("border_color_red");
      usuarioLogin.classList.add("border_color_green");
      viewError("usuarioLogin",true);
    } else {
      campoLogin["usuario"] = false;
      document.querySelector(".grupo_usuarioLogin p").classList.add("activeMsj");
      usuarioLogin.classList.remove("border_input_none")
      usuarioLogin.classList.remove("border_color_green")
      usuarioLogin.classList.add("border_color_red")
      viewError("usuarioLogin",false);
    }
  }
  if (entrada.id == "passwordLogin") {
    if (expressions.password.test(entrada.value)) {
      campoLogin["password"] = true;
      document.querySelector(".grupo_passwordLogin p").classList.remove("activeMsj");
      passwordLogin.classList.remove("border_input_none");
      passwordLogin.classList.remove("border_color_red");
      passwordLogin.classList.add("border_color_green");
      viewError("passwordLogin",true);
    } else {
      campoLogin["password"] = false;
      document.querySelector(".grupo_passwordLogin p").classList.add("activeMsj");
      passwordLogin.classList.remove("border_input_none");
      passwordLogin.classList.remove("border_color_green");
      passwordLogin.classList.add("border_color_red");
      viewError("passwordLogin",false);
    }
  }
  habilitarBtnIniciar();
}
const viewError = async(campo,valor) =>{
  try{ //verifico por valor ya que es mas sencillo por tener solo dos valores
    if(valor){
      setTimeout(() => {
        document.querySelector(`.grupo_${campo} input`).classList.remove("border_color_red");
        document.querySelector(`.grupo_${campo} input`).classList.remove("border_color_green");
        document.querySelector(`.grupo_${campo} input`).classList.add("border_input_none");
      }, 3000);
    }else{
      setTimeout(()=>{
        document.querySelector(`.grupo_${campo} input`).classList.remove("border_color_green");
        document.querySelector(`.grupo_${campo} input`).classList.remove("border_color_red");
        document.querySelector(`.grupo_${campo} input`).classList.add("border_input_none");
      },3000);
    }
  }
  catch(error){
    console.log(error);
  }
}
function habilitarBtnIniciar() {
  if (campoLogin.usuario && campoLogin.password) {
    document.querySelector(".form_login button").disabled = false;
  } else {
    document.querySelector(".form_login button").disable = true;
  }
}

function validarEntradas(e) {
  e.preventDefault();
  getUsuario();//busco en la base de datos si es correcto el usuario y contraseña
}
const getUsuario = async () => {
  try {
    const response = await fetch(`${API_URL}/usuarios`);
    const usuarios = await response.json(); //aca ya tengo a todos los usuarios en forma de objeto
    validarUsuario(usuarios);
  } catch (error) {
    console.log(error);
  }
};

function validarUsuario(usuarios) {
const currentUser=usuarios.find(usuario=>usuario.usuario == usuarioLogin.value && usuario.password==passwordLogin.value )
console.log("currentUser",currentUser);

if(currentUser==undefined){
  document.querySelector("#errorInputsLogin").classList.add("activeMsj");
  form_login.reset();
}
if(currentUser.rol=="admin"){
  document.querySelector("#errorInputsLogin").classList.remove("activeMsj");
  window.location.href="./admin.html"
}else{
  document.querySelector("#errorInputsLogin").classList.remove("activeMsj");
  window.location.href="./index.html"
}
form_login.reset();
  // usuarios.forEach((usuario) => {
  //   if (usuarioLogin.value == usuario.usuario && passwordLogin.value == usuario.password) {
  //     usuarioCorrecto = true;
  //     console.log("el usuario se encuentra en la base.");
  //     //debo colocar un break si encuentro el usuario
  //   } else {
  //     usuarioCorrecto = false;
  //     console.log("el usuario NO se encuentra en la base de datos");
  //   }
  // });
}
