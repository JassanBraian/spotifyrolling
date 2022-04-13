class Header {
  buildHeader = async () => {
    const div = document.createElement("div");
    div.innerHTML = ` 
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
    <a
    class="btn "
    data-bs-toggle="offcanvas"
    href="#offcanvasExample"
    role="button"
    aria-controls="offcanvasExample"
    >
<i class="fa-brands fa-spotify fa-5x " style="color: pink"></i>
</a>
          <bu class="navbar-brand" style="color: pink;" href="#">SPOTIROLLING</bu>
          <div class="dropdown">
  <button class = "btn btn-light"  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  User actions
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
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
