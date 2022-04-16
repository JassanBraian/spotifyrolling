const usuarioInput = document.querySelector("#usuario");
const mensaje = document.querySelector("#mensaje");
const exito = document.querySelector("#exito");
const errorNodes = document.querySelectorAll(".error");

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{8,30}$/,
  mensaje: /^[a-zA-Z0-9\?\¿\¡\!\.\,\_\-\@\"\'\`]{1,500}$/
}

const campos = {
  usuario: false,
  mensaje: false
}

function validateForm() {

  if (usuarioInput.value == "" || !expresiones.usuario.test(usuarioInput.value)) {
    errorNodes[0].innerText = 'Por favor, ingrese un nombre de usuario valido';
    usuarioInput.classList.add('error-border');
  }

  if (mensaje.value.length == "" || !expresiones.mensaje.test(mensaje.value)) {
    errorNodes[1].innerText = "Por favor, escriba su mensaje"
    mensaje.classList.add("error-border");
  }
}



