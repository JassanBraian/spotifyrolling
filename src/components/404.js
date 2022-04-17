class ErrorPage {
  buildErrorPage = async () => {
    const div = document.createElement("div");
    div.innerHTML = ` 
          <div id="container">
        <div class="content">
          <!-- <h2>404</h2>
          <h4>Oops! Pagina no encontrada!</h4>
          <p>La pagina que estas buscando no existe!</p> -->
          <a href="./index.html">Volver al inicio</a>
        </div>
    `;
    return div;
  };
}
export default ErrorPage;
