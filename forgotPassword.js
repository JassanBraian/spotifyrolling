const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";
const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

for (const el of openEls) {
  el.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("keyup", e => {
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

const campos = {
  password: false,
  correo: false,
}


const validarForm = (e) => {
  switch (e.target.name) {
    case "correo":
      validarCampo(expresiones.correo, e.target, 'correo');
      break;
    case "password":
      validarCampo(expresiones.password, e.target, 'password');
      validarPassword2();
      break;
    case "password2":
      validarPassword2();
      break;
  }
}

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document.getElementById(`group-${campo}`).classList.remove('form-group-incorrecto');
    document.getElementById(`group-${campo}`).classList.add('form-group-correcto');
    document.querySelector(`#group-${campo} i`).classList.add('fa-check-circle');
    document.querySelector(`#group-${campo} i`).classList.remove('fa-times-circle');
    document.querySelector(`#group-${campo} .form-input-error`).classList.remove('form-input-error-activo');
    campos[campo] = true;
  } else {
    document.getElementById(`group-${campo}`).classList.add('form-group-incorrecto');
    document.getElementById(`group-${campo}`).classList.remove('form-group-correcto');
    document.querySelector(`#group-${campo} i`).classList.add('fa-times-circle');
    document.querySelector(`#group-${campo} i`).classList.remove('fa-check-circle');
    document.querySelector(`#group-${campo} .form-input-error`).classList.add('form-input-error-activo');
    campos[campo] = false;
  }
}

const validarPassword2 = () => {
  const inputPassword1 = document.getElementById('password');
  const inputPassword2 = document.getElementById('password2');

  if (inputPassword1.value !== inputPassword2.value) {
    document.getElementById(`group-password2`).classList.add('form-group-incorrecto');
    document.getElementById(`group-password2`).classList.remove('form-group-correcto');
    document.querySelector(`#group-password2 i`).classList.add('fa-times-circle');
    document.querySelector(`#group-password2 i`).classList.remove('fa-check-circle');
    document.querySelector(`#group-password2 .form-input-error`).classList.add('form-input-error-activo');
    campos['password'] = false;
  } else {
    document.getElementById(`group-password2`).classList.remove('form-group-incorrecto');
    document.getElementById(`group-password2`).classList.add('form-group-correcto');
    document.querySelector(`#group-password2 i`).classList.remove('fa-times-circle');
    document.querySelector(`#group-password2 i`).classList.add('fa-check-circle');
    document.querySelector(`#group-password2 .form-input-error`).classList.remove('form-input-error-activo');
    campos['password'] = true;
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', validarForm);
  input.addEventListener('blur', validarForm);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (campos.password && campos.correo) {
    form.reset();

    document.getElementById('form-mensaje-exito').classList.add('form-mensaje-exito-activo');
    document.getElementById('form-mensaje').classList.remove('form-mensaje-activo');
    setTimeout(() => {
      document.getElementById('form-mensaje-exito').classList.remove('form-mensaje-exito-activo');
    }, 5000);

    document.querySelectorAll('.form-group-correcto').forEach((icono) => {
      icono.classList.remove('form-group-correcto');
    });
  } else {
    document.getElementById('form-mensaje').classList.add('form-mensaje-activo');
  }
});