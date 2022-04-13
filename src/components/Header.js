class Header {
  buildHeader = async () => {
    const div = document.createElement("div");
    div.innerHTML = ` 
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <i class="fa-brands fa-spotify fa-5x " style="color: pink"></i>
          <a class="navbar-brand" style="color: pink;" href="#">SPOTIROLLING</a>
          </button>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  User actions
                </a>
                <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Login</a></li>
                  <li><a class="dropdown-item" href="#">Register</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Profile</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
    return div;
  };
}
export default Header;
