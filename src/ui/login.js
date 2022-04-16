//variables
const usuarioLogin = document.getElementById("usuarioLogin");
const passwordLogin = document.getElementById("passwordLogin");
const loginErrorText=document.querySelector(".grupo_usuarioLogin p")
let usuarioCorrecto = false;

//definimos los listening
form_login.addEventListener("submit", validarEntradas);
//defino los campos and uso otro Admin
const campoLogin = {
  //ESTA PARTE CREO QUE NO ES NECESARIO
  usuario: false,
  password: false
};
function verificar(entrada) {
  if (entrada.id == "usuarioLogin") {
    if (expressions.usuario.test(entrada.value)) {
      campoLogin["usuario"] = true;
      loginErrorText.classList.remove("activeMsj");
      usuarioLogin.classList.remove("border_input_none","border_color_red");
      usuarioLogin.classList.add("border_color_green");
      viewError("usuarioLogin", true);
    } else {
      campoLogin["usuario"] = false;
      loginErrorText.classList.add("activeMsj");
      usuarioLogin.classList.remove("border_input_none","border_color_green");
      usuarioLogin.classList.add("border_color_red");
      viewError("usuarioLogin", false);
    }
  }
  if (entrada.id == "passwordLogin") {
    if (expressions.password.test(entrada.value)) {
      campoLogin["password"] = true;
      loginErrorText.classList.remove("activeMsj");
      passwordLogin.classList.remove("border_input_none");
      passwordLogin.classList.remove("border_color_red");
      passwordLogin.classList.add("border_color_green");
      viewError("passwordLogin", true);
    } else {
      campoLogin["password"] = false;
      document
        .querySelector(".grupo_passwordLogin p")
        .classList.add("activeMsj");
      passwordLogin.classList.remove("border_input_none");
      passwordLogin.classList.remove("border_color_green");
      passwordLogin.classList.add("border_color_red");
      viewError("passwordLogin", false);
    }
  }
  habilitarBtnIniciar();
}
const viewError = async (campo, valor) => {
  try {
    if (valor) {
      setTimeout(() => {
        document
          .querySelector(`.grupo_${campo} input`)
          .classList.remove("border_color_red");
        document
          .querySelector(`.grupo_${campo} input`)
          .classList.remove("border_color_green");
        document
          .querySelector(`.grupo_${campo} input`)
          .classList.add("border_input_none");
      }, 3000);
    } else {
      setTimeout(() => {
        document
          .querySelector(`.grupo_${campo} input`)
          .classList.remove("border_color_green");
        document
          .querySelector(`.grupo_${campo} input`)
          .classList.remove("border_color_red");
        document
          .querySelector(`.grupo_${campo} input`)
          .classList.add("border_input_none");
      }, 3000);
    }
  } catch (error) {
    console.log(error);
  }
};
function habilitarBtnIniciar() {
  if (campoLogin.usuario && campoLogin.password) {
    document.querySelector(".form_login button").disabled = false;
  } else {
    document.querySelector(".form_login button").disable = true;
  }
}

function validarEntradas(e) {
  e.preventDefault();
  getUsuario();
}
const getUsuario = async () => {
  try {
    const response = await fetch(`${API_URL}/usuarios`);
    const usuarios = await response.json(); 
    const user= validarUsuario(usuarios);
    if(user!=undefined){
      window.localStorage.setItem("user",JSON.stringify(user.nombre))
    }
  } catch (error) {
    console.log(error);
  }
};

function validarUsuario(usuarios) {
  const currentUser = usuarios.find(
    (usuario) =>
      usuario.usuario == usuarioLogin.value &&
      usuario.password == passwordLogin.value
  );
  console.log("currentUser", currentUser);

  if (currentUser == undefined) {
    document.querySelector("#errorInputsLogin").classList.add("activeMsj");
    form_login.reset();
  }
  if (currentUser.rol == "admin") {
    document.querySelector("#errorInputsLogin").classList.remove("activeMsj");
    window.location.href = "./admin.html";
  } else {
    document.querySelector("#errorInputsLogin").classList.remove("activeMsj");
    window.location.href = "./index.html";
  }

  form_login.reset();
  return currentUser;
}
