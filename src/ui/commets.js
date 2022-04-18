const sendComment = document.getElementById("submitButton");
const emailUser = document.getElementById("emailComment");
const comment = document.getElementById("comment");
const commentContainer = document.getElementById("commentsContainer");
const formComment=document.querySelectorAll(".form_comment input");

const expressions = {
  comentario: /^[a-zA-Z0-9\_\-]{1,500}$/, // Letras, numeros, guion y guion_bajo
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};
emailUser.addEventListener("keyup",activeButton);
comment.addEventListener("keyup",activeButton);

document.addEventListener("DOMContentLoaded", () => {
  const formatComment = (data) => {
    const email = document.createElement("h3");
    const body = document.createElement("p");
    const div = document.createElement("div");
    email.innerText = data.email;
    body.innerText = data.body;
    div.appendChild(email);
    div.appendChild(body);
    commentContainer.appendChild(div);
  };
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((data) => data.json())
      .then((result) => {
        const dataArray = result.slice(0, 10);
        dataArray.forEach(comment=>formatComment(comment))
      });
  };
  sendComment.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.createElement("h3");
    const body = document.createElement("p");
    const div = document.createElement("div");
    email.innerText = emailUser.value;
    body.innerText = comment.value;
    div.appendChild(email);
    div.appendChild(body);
    commentContainer.appendChild(div);
    
  });

  fetchData();
});

function activeButton(){
  if(expressions.correo.test(emailUser.value) && expressions.comentario.test(comment.value)){
    sendComment.disabled = false;
  }else{
    sendComment.disabled= true;
  }
}