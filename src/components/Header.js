class Header {
  buildHeader = async () => {
    const div = document.createElement("div");
    div.innerHTML = ` 
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
    <div>
    <a
    class="btn "
    data-bs-toggle="offcanvas"
    href="#offcanvasExample"
    role="button"
    aria-controls="offcanvasExample"
    >
    <i class="fa-solid fa-bars fa-2x pb-3 px-3" style = "color: white"></i>
    </a>
    <i class="fa-brands fa-spotify fa-3x navbar-logo" style="color: pink"></i>
    <i class="navbar-name" style="color: pink">Rollingfy</i>
    </div> 
          <div class="nav-item dropdown">
  <a class = "nav-link dropdown-toggle icon-dropdown" href="#"  role="button" id="navbarDropdown"
   data-bs-toggle="dropdown" aria-expanded="false" style= "color : white">
  <i class="fa-regular fa-user navbar-dropdownMenu"></i>
  </a>
  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
    <li><a class="dropdown-item" href="#">Register</a></li>
    <li><a class="dropdown-item" href="#">Profile action</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Log out here</a></li>
  </ul>
</div>
          </div>
        </div>
      </nav>
    `;
    return div;
  };
}
export default Header;
