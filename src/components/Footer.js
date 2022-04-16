class Footer {
  buildFooter = async () => {
    const footer = document.createElement("div");
    footer.innerHTML = `
            <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row text-center ">
                    <div class="col-xl-3 col-md-3 col-sm-3">
                        <div class="single-cta">
                            <i class="fa-solid fa-compass fa-3x"></i>
                            <div class="cta-text">
                                <h4 class="pt-2">Encuentranos</h4>
                                <span>Gral. Paz 576</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-3 col-sm-3 text-center">
                        <div class="single-cta">
                            <i class="fa-solid fa-mobile fa-3x"></i>
                            <div class="cta-text">
                                <h4 class="pt-2">Contactanos</h4>
                                <span>9876543210 0</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-2 col-sm-3 ">
                        <div class="footer-widget">
                            <div class="pb-4">
                                <a href="#"><i class="fab fa-facebook-f fa-2x " style="color: pink"></i></a>
                                <a href="#"><i class="fab fa-twitter twitter-bg fa-2x" style="color: pink"></i></a>
                                <a href="#"><i class="fab fa-google-plus-g google-bg fa-2x" style="color: pink"></i></a>
                            </div>
                            <p>Siguenos en nuestras redes sociales</p>
                        </div>
                        </div>
                    <div class="col-xl-3 col-md-3 col-sm-3">
                        <div class="footer-widget container">
                            <div class="footer-widget-heading">
                                <i class="fa-solid fa-link fa-3x mb-3"></i>
                            </div>
                            <p>Enlaces Útiles</p>
                            <ul class="used-links-list px-2">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    `;
    return footer;
  };
}
export default Footer;
