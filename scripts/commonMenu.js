// This block creates and inserts a footer
// Insert <div id="commonFooter"></div> wherever you want a footer
var footer_to_insert;
var footer_container;

footer_to_insert = document.createElement("footer");
footer_to_insert.class = "footer"

// This is the pure HTML to be inserted. Keep it within the ``;
footer_to_insert.innerHTML = `
<div class="footerBox">
<div class="footerRow">
  <div class="footerColumn">
    <p class="footerHeading">Adresse</p>
    <p class="footerText"><a href="https://goo.gl/maps/vqRM1G1322J2">Olav Tryggvasons Gate 20 <br> 7011 Trondheim</a></p>
  </div>

  <div class="footerColumn">
    <p class="footerHeading">Åpningstider</p>
    <p class="footerText">10:00-18:00<br>Mandag-lørdag</p>
  </div>

  <div class="footerColumn">
    <p class="footerHeading">Kontakt</p>
    <p class="footerText"><a class="footerText" href="tel:+4794836609">+47 948 36 609</a><br>
    <a class="footerText" href="mailto:epost@midlertidig.no">epost@midlertidig.no</a></p>
  </div>
</div>
    <div class="socialIcons">
      <a href="https://www.facebook.com/etikken/">
      <img src="img/icon/facebook.svg" alt="facebook" height="40"></a>

      <a id="footerIconEtikken" href="http://www.etikken.no/nettbutikk">
      <img src="img/icon/etikken.png" alt="etikken" height="40"></a>

      <a href="https://www.instagram.com/etikken/">
      <img src="img/icon/instagram.png" alt="instagram" height="40"></a>
    </div>
</div>
`;

footer_container = document.getElementById("commonFooter");
footer_container.appendChild(footer_to_insert);

// This block creates and inserts a navbar
// Insert <div class="navbar" id="nav"></div> wherever you want a navbar
var menu_to_insert;
var menu_container;

menu_to_insert = document.createElement("div");

// This is the pure HTML to be inserted. Keep it within the ``;
menu_to_insert.innerHTML = `
  <div class="navbarInside">
    <a href="index.html"><img src="img/desktop/EtikkenPlain.png" id="logoSmall" alt="logo"></a>
  <ul class="mainBar">
    <li id="aboutNav"><a class="links" href="about.html">OM OSS</a> <a href="about.html" class="underline"></a></li>
    <li id="valuesNav"><a class="links" href="values.html">VÅRE VERDIER</a> <a href="values.html" class="underline"></a></li>
    <li id="productsNav"><a class="links" href="products.html">PRODUKTER</a> <a href="products.html" class="underline"></a></li>
    <li id="webpageNav"><a class="links" target="_blank" href="http://www.etikken.no">NETTBUTIKK</a> <a href="http://www.etikken.no" class="underline"></a></li>
    <li id="contactNav"><a class="links" href="contact.html">KONTAKT</a> <a href="contact.html" class="underline"></a></li>
  </ul>
  </div>
`;

menu_container = document.getElementById("nav");
menu_container.appendChild(menu_to_insert);
